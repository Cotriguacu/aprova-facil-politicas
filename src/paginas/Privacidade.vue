<script setup>
import { useHead } from '@unhead/vue'
import { app, contato, empresa, politica } from '../dados.js'

useHead({
  title: 'Política de Privacidade',
  meta: [{ name: 'description', content: `Como o ${app.nome} trata os dados pessoais dos colaboradores da Cotriguaçu, conforme a LGPD.` }],
})
</script>

<template>
  <h1>Política de Privacidade</h1>
  <p class="meta">{{ app.nome }} · Versão {{ politica.versao }} · Vigente desde {{ politica.vigencia }}</p>

  <p>Esta política explica quais dados pessoais o aplicativo <strong>{{ app.nome }}</strong> trata, para
  quê, por quanto tempo e quais são os seus direitos. O aplicativo é de <strong>uso interno</strong>,
  exclusivo de colaboradores da {{ empresa.nome }} com acesso liberado, e serve para consultar e decidir
  aprovações que já existem nos sistemas da cooperativa (Senior e TIP). O tratamento segue a Lei Geral de
  Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).</p>

  <h2 id="controlador">1. Controlador e encarregado</h2>
  <p><strong>Controlador:</strong> {{ empresa.nome }}, CNPJ {{ empresa.cnpj }}, {{ empresa.endereco }}.</p>
  <p><strong>Encarregado pelo tratamento de dados pessoais (DPO):</strong>
    <a :href="`mailto:${contato.encarregado}`">{{ contato.encarregado }}</a>.</p>

  <h2 id="dados">2. Dados que tratamos</h2>
  <div class="tabela">
    <table>
      <thead><tr><th>Dado</th><th>Origem</th><th>Finalidade</th></tr></thead>
      <tbody>
        <tr><td>Nome, usuário de rede, e-mail corporativo, matrícula e filial</td><td>Active Directory e cadastro da cooperativa</td><td>Identificar você e mostrar as aprovações que são suas</td></tr>
        <tr><td>Código de usuário no Senior e no TIP</td><td>Sistemas Senior e TIP</td><td>Buscar a sua fila e registrar as suas decisões</td></tr>
        <tr><td>Usuário e senha pessoais do Senior e do TIP, se você os cadastrar</td><td>Informados por você no aplicativo</td><td>Registrar a decisão no sistema de origem em seu nome</td></tr>
        <tr><td>Dados dos documentos pendentes (número, valor, fornecedor, solicitante, datas, observações)</td><td>Sistemas Senior e TIP</td><td>Mostrar o que aguarda a sua decisão</td></tr>
        <tr><td>Decisões tomadas, data, motivo e observação</td><td>Uso do aplicativo</td><td>Registro, histórico e auditoria das aprovações</td></tr>
        <tr><td>Identificador do aparelho para notificações, modelo do aparelho e versão do aplicativo</td><td>Seu aparelho</td><td>Enviar avisos de novas aprovações e manter o aplicativo atualizado</td></tr>
        <tr><td>Datas de acesso e registros técnicos (logs)</td><td>Uso do aplicativo</td><td>Segurança, controle de acesso e suporte</td></tr>
      </tbody>
    </table>
  </div>
  <p>O aplicativo <strong>não</strong> coleta localização, contatos, fotos, arquivos, mensagens, áudio nem
  dados financeiros ou de saúde, e <strong>não</strong> exibe anúncios.</p>

  <h3>Senha de rede e biometria</h3>
  <p>A senha de rede é usada apenas no momento da entrada, para confirmar a sua identidade, e
  <strong>não fica guardada no aparelho</strong>. Se você ativar a entrada por digital, rosto ou PIN, a
  verificação é feita pelo próprio sistema do aparelho: o aplicativo <strong>não recebe nem armazena</strong>
  nenhum dado biométrico. As senhas do Senior e do TIP ficam <strong>cifradas no servidor</strong> da
  cooperativa, nunca no aparelho, e não são exibidas de volta.</p>

  <h2 id="base-legal">3. Bases legais</h2>
  <p>O tratamento ocorre no contexto da relação de trabalho e da execução das atividades da cooperativa,
  limitado ao necessário para as finalidades acima, com fundamento no cumprimento de obrigação legal ou
  regulatória, na execução de contrato e no legítimo interesse da {{ empresa.nome }} no controle e na
  rastreabilidade das aprovações internas (LGPD, art. 7º, incisos II, V e IX).</p>

  <h2 id="compartilhamento">4. Compartilhamento</h2>
  <p>Os dados permanecem no ambiente da {{ empresa.nome }} e nos sistemas internos de onde vêm as
  aprovações (Senior e TIP). As notificações são entregues pelo <strong>Firebase Cloud Messaging</strong>,
  serviço do Google que atua como <strong>operador</strong> em nome da cooperativa e recebe apenas o
  identificador do aparelho e o texto do aviso, sem credenciais. Não vendemos, alugamos nem cedemos dados
  pessoais a terceiros.</p>

  <h3>Transferência internacional</h3>
  <p>A infraestrutura do Firebase Cloud Messaging pode processar o identificador do aparelho e o texto do
  aviso em servidores fora do Brasil. Essa transferência é limitada ao necessário para entregar a
  notificação e segue as garantias contratuais do Google para proteção de dados (LGPD, art. 33).</p>

  <h2 id="retencao">5. Por quanto tempo guardamos</h2>
  <div class="tabela">
    <table>
      <thead><tr><th>Dado</th><th>Prazo</th></tr></thead>
      <tbody>
        <tr><td>Histórico de aprovações e reprovações</td><td>{{ politica.guardaHistorico }}, por necessidade de auditoria</td></tr>
        <tr><td>Cadastro no aplicativo (nome, usuário, e-mail, matrícula)</td><td>Enquanto houver acesso liberado, e depois pelo mesmo prazo do histórico, ao qual está vinculado</td></tr>
        <tr><td>Senhas do Senior e do TIP</td><td>Até você removê-las no aplicativo (Perfil → Credenciais)</td></tr>
        <tr><td>Identificador do aparelho para notificações</td><td>Até você sair do aplicativo, desinstalá-lo ou o identificador deixar de ser válido</td></tr>
        <tr><td>Registros técnicos (logs)</td><td>Até 14 dias, em rotação automática</td></tr>
      </tbody>
    </table>
  </div>

  <h2 id="seguranca">6. Segurança</h2>
  <p>Toda a comunicação entre o aplicativo e os servidores usa conexão criptografada (HTTPS). As senhas
  pessoais dos sistemas são guardadas cifradas, o acesso depende de autenticação corporativa e de
  liberação por um administrador, e cada decisão fica registrada em nome de quem a tomou. Não use o
  aplicativo em aparelho compartilhado e encerre a sessão se emprestar o seu.</p>

  <h2 id="direitos">7. Seus direitos</h2>
  <p>Nos termos do art. 18 da LGPD, você pode pedir: confirmação de que tratamos os seus dados; acesso a
  eles; correção de dados incompletos ou desatualizados; informações sobre compartilhamento; e
  anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos. Pedidos de eliminação podem
  ser limitados pela guarda necessária para auditoria (seção 5) e por obrigações legais da cooperativa.</p>
  <p>Envie o seu pedido ao encarregado:
    <a :href="`mailto:${contato.encarregado}`">{{ contato.encarregado }}</a>. Você também pode apresentar
    reclamação à Autoridade Nacional de Proteção de Dados (ANPD).</p>
  <p>Algumas ações estão sempre ao seu alcance no próprio aplicativo: apagar as senhas do Senior e do TIP
  (Perfil → Credenciais), desativar a biometria (Perfil → Biometria) e desativar as notificações nas
  configurações do aparelho.</p>

  <h2 id="fim-do-acesso">8. Quando o seu acesso termina</h2>
  <p>O aplicativo não cria contas: o acesso usa o seu usuário de rede (Active Directory) da
  {{ empresa.nome }}, que acompanha o seu vínculo com a cooperativa. Quando o usuário de rede é
  desativado, ou quando um administrador bloqueia o seu acesso ao aplicativo, você deixa de conseguir
  entrar e de receber notificações. O cadastro e o histórico de decisões seguem os prazos da seção 5.</p>

  <h2 id="criancas">9. Crianças e adolescentes</h2>
  <p>O aplicativo é destinado exclusivamente a colaboradores da cooperativa maiores de 18 anos e não trata
  intencionalmente dados de crianças ou adolescentes.</p>

  <h2 id="este-site">10. Este site</h2>
  <p>Este site apenas informa sobre o aplicativo: não usa cookies, não tem formulários e não usa
  ferramentas de análise ou de publicidade. Ele é hospedado no GitHub Pages, que pode registrar dados
  técnicos de acesso (como o endereço IP) para segurança da própria plataforma.</p>

  <h2 id="alteracoes">11. Alterações desta política</h2>
  <p>Esta política pode ser atualizada. A versão vigente fica sempre neste endereço, com a data no topo.
  Mudanças relevantes também são apresentadas no aplicativo para um novo aceite.</p>
</template>
