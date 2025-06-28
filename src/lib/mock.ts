import { Product } from "@/interfaces/product-interface";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Produk A",
    price: 1_000_000,
    discount: 0.05,
  },
  {
    id: 2,
    name: "Produk B",
    price: 2_000_000,
    discount: 0.2,
    isHighlighted: true,
  },
  {
    id: 3,
    name: "Produk C",
    price: 3_000_000,
    discount: 0.17,
  },
]
