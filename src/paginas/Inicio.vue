<script setup>
import { useHead } from '@unhead/vue'
import { app, contato } from '../dados.js'

useHead({
  title: '',
  meta: [{ name: 'description', content: 'Aplicativo de aprovações de uso interno dos colaboradores da Cotriguaçu Cooperativa Central.' }],
})

const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="heroi">
    <img :src="`${base}icone.png`" :alt="`Ícone do ${app.nome}`" width="88" height="88">
    <div>
      <h1>{{ app.nome }}</h1>
      <p class="meta">Aplicativo de aprovações dos colaboradores da Cotriguaçu Cooperativa Central</p>
    </div>
  </div>

  <div class="destaque">
    <p><strong>Uso interno.</strong> O Aprova Fácil é exclusivo para colaboradores da Cotriguaçu com
    acesso liberado pela área de Tecnologia da Informação. Não é possível criar conta pelo aplicativo:
    a entrada usa o usuário de rede da cooperativa.</p>
  </div>

  <p>O Aprova Fácil reúne num só lugar as aprovações que aguardam o colaborador nos sistemas da
  cooperativa e permite decidir pelo celular, com o mesmo registro que seria feito na tela do sistema
  de origem.</p>

  <div class="cartoes">
    <section class="cartao">
      <h3>Fila única</h3>
      <p>Ordens de compra, cotações, requisições e solicitações do Senior, e viagens e reservas de veículos do TIP.</p>
    </section>
    <section class="cartao">
      <h3>Decisão rastreável</h3>
      <p>Cada aprovação ou reprovação é registrada no sistema de origem em nome de quem decidiu.</p>
    </section>
    <section class="cartao">
      <h3>Aviso na hora</h3>
      <p>Notificação quando um item novo chega, que some sozinha quando ele é decidido em outro lugar.</p>
    </section>
    <section class="cartao">
      <h3>Entrada segura</h3>
      <p>Usuário de rede da cooperativa e, depois, a digital ou o PIN do aparelho.</p>
    </section>
  </div>

  <h2>Como obter acesso</h2>
  <ol>
    <li>Instale o {{ app.nome }} pelo Google Play, pelo link enviado pela TI.</li>
    <li>Entre com o seu usuário e a senha de rede da Cotriguaçu.</li>
    <li>Aprovadores cadastrados nos sistemas têm o acesso liberado automaticamente; nos demais casos, o
      primeiro acesso aguarda a liberação de um administrador.</li>
    <li>Leia e aceite os Termos de Uso e o Aviso de Privacidade apresentados no aplicativo.</li>
  </ol>

  <h2>Suporte</h2>
  <p>Dúvidas, problemas de acesso e pedidos relacionados aos seus dados:
    <a :href="`mailto:${contato.ti}`">{{ contato.ti }}</a>.</p>
</template>
