import { useState, useEffect } from "react";
import { HTTPResponse } from "@serverTypes/index";
export function ProductsPage() {
  const [products, setProducts] = useState<Array<any>>([]);
  useEffect(() => {
    async function getData() {
      const result: { products: Array<any> } = await getProducts();
      setProducts(result?.products);
    }
    getData();
  }, []);

  return (
    <div>
      {products.map((item: any) => (
        <h1 key={item.title}>{item.title}</h1>
      ))}
    </div>
  );
}

async function getProducts() {
  const products = await fetch("http://localhost:3200/products");
  const result: HTTPResponse = await products.json();
  return result.data;
}
