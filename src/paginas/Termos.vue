<script setup>
import { useHead } from '@unhead/vue'
import PaginaDocumento from '../componentes/PaginaDocumento.vue'
import { app, contato, empresa, politica } from '../dados.js'

useHead({
  title: 'Termos de Uso',
  meta: [{ name: 'description', content: `Regras de uso do ${app.nome}, aplicativo interno da Cotriguaçu.` }],
})

const sumario = [
  { id: 'sobre', titulo: 'Sobre o aplicativo' },
  { id: 'uso', titulo: 'Uso pessoal' },
  { id: 'decisoes', titulo: 'Valor das decisões' },
  { id: 'aparelho', titulo: 'Aparelho perdido' },
  { id: 'acesso', titulo: 'Liberação e encerramento' },
  { id: 'disponibilidade', titulo: 'Disponibilidade' },
  { id: 'privacidade', titulo: 'Privacidade' },
  { id: 'alteracoes', titulo: 'Alterações' },
  { id: 'legislacao', titulo: 'Legislação aplicável' },
]
</script>

<template>
  <PaginaDocumento titulo="Termos de Uso" resumo="As regras de uso do aplicativo, que é pessoal, intransferível e exclusivo dos colaboradores."
    :versao="politica.versao" :vigencia="politica.vigencia" :sumario="sumario">

  <h2 id="sobre">1. Sobre o aplicativo</h2>
  <p>O {{ app.nome }} é um aplicativo corporativo da {{ empresa.nome }}, de uso restrito a colaboradores
  autorizados, para consultar e decidir documentos pendentes de aprovação nos sistemas da cooperativa
  (Senior e TIP). O acesso exige autenticação no diretório corporativo (Active Directory) e, conforme o
  caso, liberação por um administrador.</p>

  <h2 id="uso">2. Uso pessoal e intransferível</h2>
  <ul>
    <li>O acesso é pessoal. Não compartilhe a sua senha de rede, as suas credenciais do Senior e do TIP
      nem o aparelho desbloqueado com outra pessoa.</li>
    <li>Use o aplicativo apenas para as atividades do seu trabalho na cooperativa.</li>
    <li>Não use o aplicativo em aparelho compartilhado; se precisar, encerre a sessão ao terminar.</li>
  </ul>

  <h2 id="decisoes">3. Valor das decisões</h2>
  <p>Aprovar ou reprovar pelo aplicativo tem o <strong>mesmo efeito</strong> de decidir na tela do sistema
  de origem: a decisão é registrada no Senior ou no TIP <strong>em seu nome</strong>, com a sua credencial
  pessoal, e não pode ser desfeita pelo aplicativo. Confira os dados do documento antes de decidir. Por
  isso o aplicativo exige a sua credencial pessoal e nunca usa um usuário genérico.</p>

  <h2 id="aparelho">4. Aparelho perdido ou acesso indevido</h2>
  <p>Se o aparelho for perdido ou roubado, ou se suspeitar que alguém usou o seu acesso, avise a TI
  imediatamente em <a :href="`mailto:${contato.ti}`">{{ contato.ti }}</a> e troque a sua senha de rede.
  A TI pode bloquear o seu acesso ao aplicativo.</p>

  <h2 id="acesso">5. Liberação, suspensão e encerramento</h2>
  <p>A cooperativa pode liberar, suspender ou encerrar o acesso ao aplicativo a qualquer momento, em
  especial no desligamento do colaborador, na mudança de função ou em caso de uso em desacordo com estes
  termos. O acesso acompanha o seu usuário de rede.</p>

  <h2 id="disponibilidade">6. Disponibilidade</h2>
  <p>O aplicativo depende dos sistemas da cooperativa (Senior e TIP) e da conexão com a internet. Em
  indisponibilidade, as aprovações continuam podendo ser feitas diretamente nos sistemas de origem.
  Versões antigas do aplicativo podem ser bloqueadas para garantir a segurança e a compatibilidade; nesse
  caso, o aplicativo pede a atualização.</p>

  <h2 id="privacidade">7. Privacidade</h2>
  <p>O tratamento dos seus dados pessoais está descrito na
    <RouterLink to="/privacidade">Política de Privacidade</RouterLink>.</p>

  <h2 id="alteracoes">8. Alterações</h2>
  <p>Estes termos podem ser atualizados. Mudanças relevantes são apresentadas no aplicativo para um novo
  aceite antes de continuar o uso.</p>

  <h2 id="legislacao">9. Legislação aplicável</h2>
  <p>Estes termos são regidos pelas leis da República Federativa do Brasil. Dúvidas:
    <a :href="`mailto:${contato.ti}`">{{ contato.ti }}</a>.</p>
  </PaginaDocumento>
</template>
