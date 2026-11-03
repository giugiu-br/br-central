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
//   autor    -> nome no jogo
//   data     -> AAAA-MM-DD (ex.: "2026-11-02")
//   tema     -> um destes: "Militar", "Economia", "Política", "Regras", "Comunidade"
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
    id: "analise-frente-x",
    titulo: "Análise da Frente X",
    autor: "Nome no jogo",
    data: "2026-11-02",
    tema: "Militar",
    tipo: "original",
    resumo: "Uma ou duas frases sobre o artigo.",
    url: "",
    arquivo: "artigos/analise-frente-x.md"
  }
];
