import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import Inicio from './paginas/Inicio.vue'
import Privacidade from './paginas/Privacidade.vue'
import Termos from './paginas/Termos.vue'
import '@fontsource-variable/inter'
import './estilo.css'

const routes = [
  { path: '/', component: Inicio },
  { path: '/privacidade', component: Privacidade },
  { path: '/termos', component: Termos },
]

// Cada rota vira um HTML estático no build (vite-ssg): a política chega pronta
// para quem não executa JavaScript, como a verificação da Google Play.
export const createApp = ViteSSG(App, {
  routes,
  // Sem isto o HTML gerado sai certo, mas no navegador o roteador procura
  // "/aprova-facil-politicas/" como rota, não acha e esvazia a página.
  base: import.meta.env.BASE_URL,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, top: 16 }
    return { top: 0 }
  },
})
