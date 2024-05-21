import fastify from "fastify";

interface CupomProps {
  nome: String;
  valorTotal: number;
  produto: ProdutosProps[];
}

interface ProdutosProps {
  nome: string;
  valor: number;
}

const app = fastify();

app.get("/", (req, res) => {
  const produtos = [
    {
      nome: "chinelo azul",
      valor: 300,
    },

    {
      nome: "chinelo Preto",
      valor: 500,
    },

    {
      nome: "chinelo Amarelo",
      valor: 100,
    },
  ];

  const totalProdutos: number = produtos.length;

  const valorTotal: number = produtos.reduce(
    (total: number, produto: ProdutosProps) => {
      return total + produto.valor;
    },
    0
  );

  let cupom: number = 0;

  if (totalProdutos == 2) {
    let descontoTotal = valorTotal * 0.18;

    cupom = valorTotal;

    cupom -= descontoTotal;
  } else if (totalProdutos == 3) {
    let descontoTotal = valorTotal * 0.33;

    cupom = valorTotal;

    cupom -= descontoTotal;
  }

  res.send(cupom);
});

const port = 5130;

app.listen({ port }).then(() => {
  console.log(`Server in ruinnig port  ${port}`);
});
