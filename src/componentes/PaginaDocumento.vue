<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Icone from './Icone.vue'

const props = defineProps({
  titulo: { type: String, required: true },
  resumo: { type: String, default: '' },
  versao: { type: String, required: true },
  vigencia: { type: String, required: true },
  // [{ id, titulo }] na ordem das seções; o id é o do <h2> correspondente.
  sumario: { type: Array, required: true },
})

const ativa = ref(props.sumario[0]?.id)
let observador

// Destaca no sumário a seção que está na tela. Só no navegador: na geração
// estática (vite-ssg) não existe IntersectionObserver, e o sumário sai sem destaque.
onMounted(() => {
  observador = new IntersectionObserver((entradas) => {
    const visiveis = entradas.filter((e) => e.isIntersecting)
    if (visiveis.length) ativa.value = visiveis[0].target.id
  }, { rootMargin: '-15% 0px -70% 0px' })
  props.sumario.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (el) observador.observe(el)
  })
})
onBeforeUnmount(() => observador?.disconnect())

const imprimir = () => window.print()
</script>

<template>
  <div class="doc-cabecalho">
    <div class="largura">
      <p class="sobretitulo"><Icone nome="documento" :tamanho="16" /> Documento</p>
      <h1>{{ titulo }}</h1>
      <p v-if="resumo" class="doc-resumo">{{ resumo }}</p>
      <div class="selos">
        <span class="selo">Versão {{ versao }}</span>
        <span class="selo">Vigente desde {{ vigencia }}</span>
        <button class="selo selo-botao" type="button" @click="imprimir">
          <Icone nome="impressora" :tamanho="15" /> Imprimir
        </button>
      </div>
    </div>
  </div>

  <div class="largura doc-corpo">
    <nav class="sumario" aria-label="Nesta página">
      <p class="sumario-titulo">Nesta página</p>
      <ol>
        <li v-for="s in sumario" :key="s.id">
          <a :href="`#${s.id}`" :class="{ ativo: ativa === s.id }"
            :aria-current="ativa === s.id ? 'location' : undefined">{{ s.titulo }}</a>
        </li>
      </ol>
    </nav>

    <article class="doc-texto">
      <slot />
      <a class="voltar-topo" href="#conteudo"><Icone nome="topo" :tamanho="16" /> Voltar ao topo</a>
    </article>
  </div>
</template>
