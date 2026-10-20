<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import Icone from './componentes/Icone.vue'
import { app, contato, empresa } from './dados.js'

useHead({
  htmlAttrs: { lang: 'pt-BR' },
  titleTemplate: (titulo) => (titulo ? `${titulo} · ${app.nome}` : app.nome),
  meta: [{ name: 'theme-color', content: '#1b5e20' }],
})

const base = import.meta.env.BASE_URL
const menuAberto = ref(false)
const rota = useRoute()
watch(() => rota.fullPath, () => { menuAberto.value = false })

const links = [
  { para: '/', texto: 'Início' },
  { para: '/privacidade', texto: 'Privacidade' },
  { para: '/termos', texto: 'Termos de uso' },
]
const ano = 2026
</script>

<template>
  <a class="pular" href="#conteudo">Pular para o conteúdo</a>

  <header class="topo" :class="{ aberto: menuAberto }">
    <div class="topo-faixa largura">
      <RouterLink class="marca" to="/" aria-label="Aprova Fácil Cotriguaçu — início">
        <img :src="`${base}icone.png`" alt="" width="34" height="34">
        <span>Aprova Fácil <small>Cotriguaçu</small></span>
      </RouterLink>

      <button class="botao-menu" type="button" :aria-expanded="menuAberto" aria-controls="menu-principal"
        :aria-label="menuAberto ? 'Fechar menu' : 'Abrir menu'" @click="menuAberto = !menuAberto">
        <Icone :nome="menuAberto ? 'fechar' : 'menu'" :tamanho="22" />
      </button>

      <nav id="menu-principal" class="menu" aria-label="Principal">
        <RouterLink v-for="l in links" :key="l.para" :to="l.para">{{ l.texto }}</RouterLink>
      </nav>
    </div>
  </header>

  <main id="conteudo" tabindex="-1">
    <RouterView />
  </main>

  <footer class="rodape">
    <div class="largura rodape-grade">
      <div>
        <div class="marca marca-rodape">
          <img :src="`${base}icone.png`" alt="" width="30" height="30">
          <span>{{ app.nome }}</span>
        </div>
        <p>Aplicativo de aprovações de uso interno dos colaboradores da {{ empresa.nome }}.</p>
      </div>
      <div>
        <h2 class="rodape-titulo">Documentos</h2>
        <RouterLink to="/privacidade">Política de Privacidade</RouterLink>
        <RouterLink to="/termos">Termos de Uso</RouterLink>
      </div>
      <div>
        <h2 class="rodape-titulo">Contato</h2>
        <p>{{ contato.responsavelTi }}</p>
        <a :href="`mailto:${contato.ti}`">{{ contato.ti }}</a>
      </div>
    </div>
    <div class="largura rodape-base">
      <span>© {{ ano }} {{ empresa.nome }} · CNPJ {{ empresa.cnpj }}</span>
      <span>{{ empresa.endereco }}</span>
    </div>
  </footer>
</template>
