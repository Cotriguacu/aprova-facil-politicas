<script setup>
import { useHead } from '@unhead/vue'
import { app, empresa } from './dados.js'

useHead({
  htmlAttrs: { lang: 'pt-BR' },
  titleTemplate: (titulo) => (titulo ? `${titulo} · ${app.nome}` : app.nome),
})

const base = import.meta.env.BASE_URL
</script>

<template>
  <header class="topo">
    <div class="conteudo">
      <img :src="`${base}icone.png`" alt="" width="36" height="36">
      <RouterLink class="marca" to="/">{{ app.nome }}</RouterLink>
      <nav aria-label="Páginas">
        <RouterLink to="/">Início</RouterLink>
        <RouterLink to="/privacidade">Privacidade</RouterLink>
        <RouterLink to="/termos">Termos de uso</RouterLink>
      </nav>
    </div>
  </header>

  <main class="conteudo">
    <RouterView />
  </main>

  <footer class="rodape">
    <div class="conteudo">
      <p><strong>{{ empresa.nome }}</strong> · CNPJ {{ empresa.cnpj }}</p>
      <p>{{ empresa.endereco }}</p>
      <p>
        <RouterLink to="/privacidade">Política de Privacidade</RouterLink> ·
        <RouterLink to="/termos">Termos de Uso</RouterLink>
      </p>
    </div>
  </footer>
</template>
