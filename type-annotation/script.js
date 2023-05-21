const produtos = [
  {
    nome: 'O Senhor dos Anéis',
    tipo: 'livro',
  },
  {
    nome: 'A Guerra dos Tronos',
    tipo: 'livro',
  },
  {
    nome: 'Dark Souls',
    tipo: 'jogo',
  },
];

function filtrarLivros(dados) {
  return dados.filter((item) => item.tipo === 'livro');
}

function filtarJogo(dados) {
    return dados.filter((i) => i.tipo === 'jogo')
}

console.log(filtrarLivros(produtos));
console.log(filtarJogo(produtos))
