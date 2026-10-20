import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import Inicio from './paginas/Inicio.vue'
import Privacidade from './paginas/Privacidade.vue'
import Termos from './paginas/Termos.vue'
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
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, top: 16 }
    return { top: 0 }
  },
})
