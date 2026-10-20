# aprova-facil-politicas

Site público do **Aprova Fácil Cotriguaçu**: apresentação do app, Política de Privacidade e
Termos de Uso. É o endereço informado à Google Play.

- Início: https://cotriguacu.github.io/aprova-facil-politicas/
- Privacidade: https://cotriguacu.github.io/aprova-facil-politicas/privacidade/
- Termos de uso: https://cotriguacu.github.io/aprova-facil-politicas/termos/

Vue 3 + Vite, pré-renderizado com `vite-ssg`: cada página sai como HTML estático, legível sem
JavaScript (a verificação da Google Play não precisa executar script para ler a política).

```bash
npm install
npm run dev      # http://localhost:5173/aprova-facil-politicas/
npm run build    # gera dist/
```

Publicação: push na `main` → workflow `Publicar site` → GitHub Pages.

**Ao mudar o texto da política ou dos termos:** suba `politica.versao` e `politica.vigencia` em
`src/dados.js`. Se a mudança for relevante, suba também `kVersaoTermos` no app
(`app/lib/features/legal/termos_screen.dart` do repositório `aprova-facil-cotriguacu`) para pedir
novo aceite.
