/*
  js/app.js — BR Central • War Era
  Só a LÓGICA do site: abas, filtros por tema e desenho dos cards.
  O conteúdo NÃO fica aqui: vem de data/*.js (config, artigos, videos, videos-auto).

  Este arquivo espera encontrar estas variáveis globais (definidas em data/):
    CONFIG       -> data/config.js       (temas e tipos de artigo)
    ARTIGOS      -> data/artigos.js      (lista de artigos)
    VIDEOS       -> data/videos.js       (vídeos escolhidos à mão)
    VIDEOS_AUTO  -> data/videos-auto.js  (vídeos puxados dos canais; pode não existir ainda)
*/

/* ---------- 1. LEITURA SEGURA DOS DADOS ---------- */
// Se algum arquivo de dados estiver faltando, o site continua funcionando (lista vazia).
const dadosArtigos = typeof ARTIGOS !== 'undefined' ? ARTIGOS : [];
const dadosVideos = typeof VIDEOS !== 'undefined' ? VIDEOS : [];
const dadosVideosAuto = typeof VIDEOS_AUTO !== 'undefined' ? VIDEOS_AUTO : [];
const config = typeof CONFIG !== 'undefined' ? CONFIG : { temas: [], tipos: {} };

/* ---------- 2. FUNÇÕES AUXILIARES ---------- */

// Cria um elemento HTML. Usa textContent (nunca innerHTML), então
// texto digitado nos arquivos de dados não consegue quebrar a página.
function criar(tag, classe, texto) {
  const el = document.createElement(tag);
  if (classe) el.className = classe;
  if (texto) el.textContent = texto;
  return el;
}

// Converte "2026-11-02" em "02/11/2026"
function formatarData(data) {
  if (!data) return '';
  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}/${ano}`;
}

// Acha o tema (nome + cor) pelo nome escrito no artigo/vídeo
function acharTema(nome) {
  return config.temas.find((t) => t.nome === nome) || { nome: nome, cor: '#c5c9ce' };
}

// Cria o selinho colorido do tema
function criarSeloTema(nomeTema) {
  const tema = acharTema(nomeTema);
  const selo = criar('span', 'card-tag', tema.nome);
  selo.style.color = tema.cor;
  selo.style.background = tema.cor + '26'; // cor com ~15% de opacidade
  return selo;
}

// Ordena do mais novo para o mais antigo
function maisNovoPrimeiro(a, b) {
  return (b.data || '').localeCompare(a.data || '');
}

/* ---------- 3. MONTAR OS CARDS ---------- */

// Card de artigo
function criarCardArtigo(artigo) {
  const tipo = config.tipos[artigo.tipo] || { selo: '', nome: '' };

  const card = criar('article', 'card');
  card.appendChild(criarSeloTema(artigo.tema));
  card.appendChild(criar('h3', '', `${tipo.selo} ${artigo.titulo}`));
  card.appendChild(criar('p', '', artigo.resumo));

  const meta = criar('div', 'card-meta');
  meta.appendChild(criar('span', '', `${artigo.autor} • ${formatarData(artigo.data)}`));

  // Link principal: "link" abre a url; "backup" e "original" abrem o arquivo .md
  const destino = artigo.tipo === 'link' ? artigo.url : artigo.arquivo;
  if (destino) {
    const a = criar('a', '', 'Ler artigo →');
    a.href = destino;
    a.target = '_blank';
    a.rel = 'noopener';
    meta.appendChild(a);
  }
  card.appendChild(meta);

  // No backup, também mostramos o link da fonte original
  if (artigo.tipo === 'backup' && artigo.url) {
    const orig = criar('a', '', 'Ver fonte original ↗');
    orig.href = artigo.url;
    orig.target = '_blank';
    orig.rel = 'noopener';
    card.appendChild(orig);
  }
  return card;
}

// Card de vídeo
function criarCardVideo(video) {
  const card = criar('article', 'video-card');

  const thumb = criar('div', 'video-thumb');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${video.id}`;
  iframe.title = video.titulo;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.loading = 'lazy'; // só carrega quando o card aparece na tela
  thumb.appendChild(iframe);
  card.appendChild(thumb);

  const info = criar('div', 'video-info');
  const selo = criarSeloTema(video.tema);
  selo.style.marginBottom = '0.5rem';
  selo.style.display = 'inline-block';
  info.appendChild(selo);
  info.appendChild(criar('h3', '', video.titulo));
  const linhaCanal = `${video.canal || ''}${video.data ? ' • ' + formatarData(video.data) : ''}`;
  info.appendChild(criar('p', '', linhaCanal));
  if (video.resumo) info.appendChild(criar('p', '', video.resumo));
  card.appendChild(info);

  return card;
}

/* ---------- 4. DESENHAR A LISTA (com filtro de tema) ---------- */

// Junta vídeos à mão + automáticos. Se o mesmo id existir nos dois, vale o da mão.
function juntarVideos() {
  const idsManuais = new Set(dadosVideos.map((v) => v.id));
  const automaticos = dadosVideosAuto.filter((v) => !idsManuais.has(v.id));
  return [...dadosVideos, ...automaticos].sort(maisNovoPrimeiro);
}

// Desenha os cards de uma aba ("artigos" ou "videos") para o tema escolhido
function desenhar(aba, tema) {
  const grade = document.getElementById(aba + '-grid');
  grade.innerHTML = '';

  const todos = aba === 'artigos' ? [...dadosArtigos].sort(maisNovoPrimeiro) : juntarVideos();
  const lista = tema === 'todos' ? todos : todos.filter((item) => item.tema === tema);

  if (lista.length === 0) {
    const vazio = criar('div', 'empty-state');
    vazio.textContent = 'Nenhum conteúdo neste tema ainda.';
    grade.appendChild(vazio);
    return;
  }

  lista.forEach((item) => {
    grade.appendChild(aba === 'artigos' ? criarCardArtigo(item) : criarCardVideo(item));
  });
}

/* ---------- 5. ABAS DE TEMA ---------- */

// Cria os botões de tema (Todos + os 5 de config.js) dentro de uma aba
function montarTemas(aba) {
  const caixa = document.getElementById(aba + '-themes');
  caixa.innerHTML = '';

  const nomes = ['todos', ...config.temas.map((t) => t.nome)];
  nomes.forEach((nome) => {
    const botao = criar('button', 'theme-tab', nome === 'todos' ? 'Todos' : nome);
    if (nome === 'todos') botao.classList.add('active');
    botao.addEventListener('click', () => {
      caixa.querySelectorAll('.theme-tab').forEach((b) => b.classList.toggle('active', b === botao));
      desenhar(aba, nome);
    });
    caixa.appendChild(botao);
  });
}

/* ---------- 6. ABAS PRINCIPAIS (Artigos / Vídeos) ---------- */

function trocarAbaPrincipal(nome) {
  document.querySelectorAll('.main-tab').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.panel === nome);
  });
  document.querySelectorAll('.panel').forEach((painel) => {
    painel.classList.toggle('active', painel.id === 'panel-' + nome);
  });
}

/* ---------- 7. INÍCIO ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Liga os botões das abas principais
  document.querySelectorAll('.main-tab').forEach((btn) => {
    btn.addEventListener('click', () => trocarAbaPrincipal(btn.dataset.panel));
  });

  // Monta as duas abas
  ['artigos', 'videos'].forEach((aba) => {
    montarTemas(aba);
    desenhar(aba, 'todos');
  });
});
