import { getAllProducts } from "@/actions/product";
import ProductCard from "@/components/general/product-card";

export default async function Home() {
  const products = await getAllProducts()
  return (
    <main className="flex flex-col justify-center items-center">
      <span className="text-3xl font-semibold my-30">
        Berlangganan Produk
      </span>
      <section className="flex flex-wrap gap-4 items-end">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </section>
    </main>
  );
}
