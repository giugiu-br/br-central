/*
  data/config.js
  Configurações gerais do BR Central.
  Aqui ficam: temas, tipos de artigo (selos) e cores.
  Pode editar à mão, mas cuidado com vírgulas e aspas.
*/

const CONFIG = {

  // ---------- Identidade do site ----------
  site: {
    nome: "BR CENTRAL",
    subtitulo: "Comunidade Brasileira • War Era",
    bandeira: "🇧🇷"
  },

  // ---------- Cores principais (tema escuro + verde/amarelo da bandeira) ----------
  cores: {
    fundo: "#0d0f12",
    fundoElevado: "#151a1e",
    card: "#1a1f24",
    borda: "#2a3038",
    verde: "#009c3b",
    amarelo: "#ffdf00",
    azul: "#002776",
    texto: "#e8eaed",
    textoSuave: "#9aa0a6"
  },

  // ---------- Botão "Todos" ----------
  // Não é um tema de conteúdo, só o botão que mostra tudo.
  todos: { nome: "Todos", cor: "#009c3b", fundo: "rgba(0, 156, 59, 0.15)", texto: "#5ddea0" },

  // ---------- Temas ----------
  // O campo "tema" em artigos.js e videos.js deve ser IGUAL ao "nome" daqui.
  // cor   = cor forte do botão (borda e botão ativo)
  // fundo = cor suave de fundo do selo (tag) no card
  // texto = cor do texto do selo (clara o bastante para ler no fundo escuro)
  temas: [
    { nome: "Militar",    cor: "#c41e3a", fundo: "rgba(196, 30, 58, 0.2)",    texto: "#ff6b81" }, // vermelho
    { nome: "Economia",   cor: "#ffdf00", fundo: "rgba(255, 223, 0, 0.12)",   texto: "#ffdf00" }, // amarelo-Brasil
    { nome: "Política",   cor: "#ffffff", fundo: "rgba(255, 255, 255, 0.12)", texto: "#ffffff" }, // branco
    { nome: "Tutoriais",  cor: "#ff8a1f", fundo: "rgba(255, 138, 31, 0.15)",  texto: "#ffa94d" }, // laranja
    { nome: "Comunidade", cor: "#002776", fundo: "rgba(0, 39, 118, 0.35)",    texto: "#7eb8ff" }  // azul-Brasil
  ],

  // ---------- Tipos de artigo (selos) ----------
  // A chave ("link", "backup", "original") é o valor usado no campo "tipo".
  tipos: {
    link:     { selo: "🔗", nome: "Link",     descricao: "Aponta para o artigo no site original" },
    backup:   { selo: "💾", nome: "Backup",   descricao: "Cópia guardada aqui, com link para o original" },
    original: { selo: "📝", nome: "Original", descricao: "Escrito diretamente para o BR Central" }
  }

};
