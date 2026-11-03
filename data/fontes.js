// =====================================================
// data/fontes.js
// Lista de canais e sites que os scripts monitoram.
// Quem edita: o pessoal do gov (à mão, sem medo).
// Quem lê: scripts/ (o site em si NÃO usa este arquivo).
// =====================================================

const FONTES = {

  // ---------- Canais do YouTube ----------
  // Para cada canal, copie o bloco { ... } e preencha.
  // Como achar o channelId: abra o canal no YouTube ->
  // "Sobre" -> "Compartilhar canal" -> "Copiar ID do canal"
  // (é um código que começa com UC...).
  youtube: [
    {
      nome: "Nome do canal (exemplo)",   // só para você se achar aqui
      channelId: "UCxxxxxxxxxxxxxxxxxxxxxx", // troque pelo ID real
      tema: "Comunidade",                // um dos 5 temas de config.js
      ativo: false                       // true = o script puxa; false = ignora
    }
  ],

  // ---------- Sites / blogs (opcional, para o futuro) ----------
  // Por enquanto só guardamos a lista. Ainda não há script para isso.
  sites: [
    // {
    //   nome: "Nome do site",
    //   url: "https://exemplo.com",
    //   tema: "Política",
    //   ativo: false
    // }
  ]
};

// Permite que scripts em Node leiam este arquivo.
// No navegador esta linha é ignorada, não atrapalha.
if (typeof module !== "undefined") module.exports = FONTES;
