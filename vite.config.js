import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// O GitHub Pages publica o repositório em /aprova-facil-politicas/.
export default defineConfig({
  base: '/aprova-facil-politicas/',
  plugins: [vue()],
  ssgOptions: {
    // /privacidade/index.html em vez de /privacidade.html: a URL fica limpa
    // (.../privacidade/) e responde 200 direto, sem depender de 404.html.
    dirStyle: 'nested',
    formatting: 'none',
  },
})
