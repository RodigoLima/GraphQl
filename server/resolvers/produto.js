export const produto = {
  Produto: {
    precoComDesconto(produto) {
      if (produto.desconto > 0) {
        return produto.preco * (1 - produto.desconto);
      } else {
        return produto.preco;
      }
    },
  },
};
