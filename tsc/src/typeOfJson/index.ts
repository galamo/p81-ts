import productTemplate from "./productTemplate.json";

interface Product {
  bla: string;
  blbal: number;
}

type FullProduct = typeof productTemplate;

function filterProducts(products: Array<FullProduct>) {
  return products.filter((item) => item.price > 900);
}
const result = filterProducts([productTemplate]);
console.log(result);
