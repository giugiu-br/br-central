# 🇧🇷 BR Central — War Era

Site que reúne, num só lugar, os **vídeos, artigos e tutoriais** da comunidade brasileira de War Era.

Não precisa saber programar para ajudar. Se você sabe copiar e colar texto no GitHub, você consegue contribuir.

---

## 👀 Onde ver o site

O site fica publicado pelo GitHub Pages neste endereço:

[https://giugiu-br.github.io/br-central/](https://giugiu-br.github.io/br-central/index)

---

## ➕ Quero adicionar algo. O que faço?

> ⚠️ Nunca escreva conteúdo direto no `index.html`. Todo conteúdo mora na pasta `data/`.

---

## 📁 O que tem em cada pasta

```
br-central/
├── index.html        → estrutura da página (quase nunca mexe)
├── css/style.css     → visual: cores, cards, layout
├── js/app.js         → lógica: abas, filtros, desenho dos cards
├── data/             → TODO o conteúdo do site
├── artigos/          → textos dos artigos e suas imagens
├── scripts/          → automações
├── .github/          → faz as automações rodarem sozinhas
└── docs/             → guias para o pessoal do governo
```

### O que pode e o que não pode editar à mão

- ✅ **Pode:** `data/artigos.js`, `data/videos.js`, `data/fontes.js`, `data/config.js`, `css/style.css`, tudo em `artigos/` e `docs/`.
- ⚠️ **Só com ajuda:** `js/app.js` e `scripts/`.
- ⛔ **Não mexa:** `data/videos-auto.js` (é gerado sozinho por um script) e `.github/workflows/`.

---

## 🏷️ Como o conteúdo é organizado

**Temas** (cada item pertence a um): Militar, Economia, Política, Regras, Comunidade.

**Tipos de artigo:**

- 🔗 **link** — o artigo está em outro site; aqui só indexamos o endereço.
- 💾 **backup** — o artigo está em outro site, mas guardamos uma cópia aqui, caso saia do ar.
- 📝 **original** — o artigo foi escrito para o BR Central.

---

## 🧪 Como testar no seu computador

1. Baixe o projeto (botão verde **Code → Download ZIP**) e descompacte.
2. Dê dois cliques no `index.html`. Ele abre no navegador.
3. Mudou um arquivo de `data/` ou o CSS? Salve e aperte **F5** no navegador.

Se algo sumiu ou a página ficou em branco, quase sempre é uma vírgula, aspa ou chave esquecida no arquivo que você acabou de editar. Compare com a entrada anterior, que estava funcionando.

---

## 🧭 Regras do projeto

- Só HTML, CSS e JavaScript puros. **Sem frameworks, sem build, sem npm.**
- Uma alteração por vez. Não "melhorar" o que ninguém pediu.
- Comentários no código sempre em português.
- Tarefa manual que se repete vira script em `scripts/`.

---

## 🤝 Dúvidas?

Fale com a equipe do governo BR no Discord.
