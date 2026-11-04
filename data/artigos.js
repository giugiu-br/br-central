// ============================================================
// data/artigos.js
// Índice de artigos do BR Central.
// UMA entrada por artigo. Para adicionar, copie um bloco { ... },
// cole no fim da lista (antes do "];") e troque os campos.
// ============================================================
//
// CAMPOS:
//   id       -> único, sem espaços nem acentos (ex.: "analise-frente-x")
//   titulo   -> título que aparece no card
//   autorUrl -> link do perfil no jogo (ex.: "https://app.warera.io/user/...").
//               Opcional: se deixar "" ou apagar, o nome aparece sem link.
//   data     -> AAAA-MM-DD (ex.: "2026-11-02")
//   tema     -> um destes: "Militar", "Economia", "Política", "Tutoriais", "Comunidade"
//   tipo     -> "link" 🔗 | "backup" 💾 | "original" 📝
//   resumo   -> uma ou duas frases
//   url      -> OBRIGATÓRIO se tipo = "link" ou "backup" (senão deixe "")
//   arquivo  -> OBRIGATÓRIO se tipo = "backup" ou "original"
//               (ex.: "artigos/analise-frente-x.md"). Se tipo = "link", pode apagar.
//
// ATENÇÃO: vírgula depois de cada bloco { ... }, e aspas em todos os textos.

const ARTIGOS = [
  // Exemplo (pode apagar ou substituir quando tiver o primeiro artigo real)
  {
    id: "Teste-x",
    titulo: "Teste X",
    autor: "Nome do jogador",
    autorUrl: "",   // cole aqui o link do perfil do jogador no War Era
    data: "2026-11-02",
    tema: "Tutoriais",
    tipo: "original",
    resumo: "Resumo de uma ou duas frases sobre o artigo.",
    url: "",
    arquivo: "artigos/analise-frente-x.md"
  }
];
