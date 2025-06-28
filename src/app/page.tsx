import ProductCard from "@/components/general/product-card";
import { MOCK_PRODUCTS } from "@/lib/mock";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <span className="text-3xl font-semibold my-30">
        Berlangganan Produk
      </span>
      <section className="flex flex-wrap gap-4 items-end">
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </section>
    </main>
  );
}
