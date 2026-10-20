<script setup>
import { useHead } from '@unhead/vue'
import Icone from '../componentes/Icone.vue'
import { app, contato, empresa } from '../dados.js'

useHead({
  title: '',
  meta: [{ name: 'description', content: `Aplicativo de aprovações de uso interno dos colaboradores da ${empresa.nome}.` }],
})

const base = import.meta.env.BASE_URL

const recursos = [
  { icone: 'fila', titulo: 'Fila única', texto: 'Tudo o que aguarda a sua decisão nos sistemas da cooperativa, numa fila só, ordenada e com os atrasados em destaque.' },
  { icone: 'escudo', titulo: 'Decisão rastreável', texto: 'Cada aprovação ou reprovação é registrada no sistema de origem em nome de quem decidiu.' },
  { icone: 'sino', titulo: 'Aviso na hora', texto: 'Notificação quando um item novo chega, que some sozinha quando ele é decidido em outro lugar.' },
  { icone: 'cadeado', titulo: 'Entrada segura', texto: 'Usuário de rede da cooperativa e, depois, a digital ou o PIN do aparelho.' },
  { icone: 'caixa', titulo: 'Em lote', texto: 'Aprove vários itens de uma vez ou reprove com um motivo pronto ou escrito por você.' },
  { icone: 'historico', titulo: 'Histórico', texto: 'Suas decisões dos últimos 7 dias, 30 dias ou do ano, com o tempo médio de resposta.' },
]

// Sistemas ligados ao hub. Sistema novo integrado ao app entra aqui.
const sistemas = [
  { nome: 'Senior', sigla: 'ERP', itens: ['Ordens de compra', 'Cotações', 'Requisições', 'Solicitações de compra'] },
  { nome: 'TIP', sigla: 'Intranet', itens: ['Solicitações de viagem', 'Reservas de veículos'] },
  { nome: 'Patrimônio', sigla: 'Bens', itens: ['Baixas de bens', 'Transferências de bens'] },
]

const passos = [
  { titulo: 'Instale', texto: `Baixe o ${app.nome} pelo Google Play, pelo link enviado pela TI.` },
  { titulo: 'Entre', texto: 'Use o seu usuário e a senha de rede da Cotriguaçu.' },
  { titulo: 'Liberação', texto: 'Aprovadores cadastrados entram direto; nos demais casos, um administrador libera o primeiro acesso.' },
  { titulo: 'Aceite e use', texto: 'Leia e aceite os Termos de Uso e o Aviso de Privacidade no aplicativo.' },
]
</script>

<template>
  <section class="heroi">
    <div class="largura heroi-grade">
      <div class="heroi-texto">
        <p class="etiqueta">Uso interno · {{ empresa.nome }}</p>
        <h1>Suas aprovações, <span>direto do celular.</span></h1>
        <p class="heroi-resumo">Um hub de aprovações: o {{ app.nome }} reúne num só lugar o que aguarda a sua
          decisão no Senior, no TIP e no Patrimônio — para que nada fique parado esperando você chegar ao
          computador.</p>
        <div class="acoes">
          <a class="botao botao-primario" href="#acesso">Como obter acesso <Icone nome="seta" :tamanho="18" /></a>
          <RouterLink class="botao botao-secundario" to="/privacidade">Política de Privacidade</RouterLink>
        </div>
      </div>

      <div class="heroi-celulares" aria-hidden="true">
        <div class="celular celular-atras">
          <img :src="`${base}tela-fila.webp`" alt="" width="540" height="1110" loading="lazy">
        </div>
        <div class="celular celular-frente">
          <img :src="`${base}tela-painel.webp`" alt="" width="540" height="1110" fetchpriority="high">
        </div>
      </div>
    </div>
  </section>

  <section class="largura secao">
    <div class="aviso-interno">
      <Icone nome="escudo" :tamanho="22" />
      <p><strong>Exclusivo para colaboradores.</strong> Não é possível criar conta pelo aplicativo: a entrada
        usa o usuário de rede da cooperativa, e o acesso é liberado pela área de Tecnologia da Informação.</p>
    </div>

    <h2 class="secao-titulo">Um hub para os sistemas da cooperativa</h2>
    <p class="secao-resumo">Cada sistema continua sendo a origem da aprovação. O app traz as pendências de
      todos para uma fila só e registra a sua decisão de volta, em seu nome.</p>
    <div class="sistemas">
      <article v-for="s in sistemas" :key="s.nome" class="sistema">
        <div class="sistema-topo">
          <h3>{{ s.nome }}</h3>
          <span class="sistema-sigla">{{ s.sigla }}</span>
        </div>
        <ul>
          <li v-for="item in s.itens" :key="item">{{ item }}</li>
        </ul>
      </article>
    </div>

    <h2 class="secao-titulo secao-titulo-espaco">O que você faz no app</h2>
    <p class="secao-resumo">Tudo o que você precisa para decidir com segurança, sem abrir o computador.</p>
    <div class="recursos">
      <article v-for="r in recursos" :key="r.titulo" class="recurso">
        <span class="recurso-icone"><Icone :nome="r.icone" :tamanho="22" /></span>
        <h3>{{ r.titulo }}</h3>
        <p>{{ r.texto }}</p>
      </article>
    </div>
  </section>

  <section class="faixa">
    <div class="largura faixa-grade">
      <div class="celular celular-faixa" aria-hidden="true">
        <img :src="`${base}tela-detalhe.webp`" alt="" width="540" height="1110" loading="lazy">
      </div>
      <div>
        <h2 class="secao-titulo">Cada decisão, em seu nome</h2>
        <p>Aprovar ou reprovar pelo Aprova Fácil tem o mesmo efeito de decidir na tela do sistema de origem.
          A decisão é registrada com a sua credencial pessoal — nunca com um usuário genérico.</p>
        <ul class="lista-check">
          <li>Conexão protegida (HTTPS) do aparelho até o servidor da cooperativa</li>
          <li>Senhas dos sistemas guardadas cifradas, nunca no aparelho</li>
          <li>Biometria verificada pelo próprio aparelho</li>
          <li>Sem anúncios e sem venda de dados</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="acesso" class="largura secao">
    <h2 class="secao-titulo">Como obter acesso</h2>
    <ol class="passos">
      <li v-for="(p, i) in passos" :key="p.titulo" class="passo">
        <span class="passo-numero">{{ i + 1 }}</span>
        <h3>{{ p.titulo }}</h3>
        <p>{{ p.texto }}</p>
      </li>
    </ol>
  </section>

  <section class="largura secao">
    <div class="contato-cartao">
      <div>
        <h2 class="secao-titulo">Precisa de ajuda?</h2>
        <p>Dúvidas, problemas de acesso e pedidos relacionados aos seus dados: fale com a
          {{ contato.responsavelTi }}.</p>
      </div>
      <a class="botao botao-primario" :href="`mailto:${contato.ti}`">
        <Icone nome="email" :tamanho="18" /> {{ contato.ti }}
      </a>
    </div>
  </section>
</template>
