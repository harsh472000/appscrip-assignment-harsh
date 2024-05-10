import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import { fetchProducts } from "@/utils/api";

export default async function Home() {
  const products = await fetchProducts();
  return (
    <main className="container">
      <Hero />
      <ProductList products={products}/>
    </main>
  );
}
