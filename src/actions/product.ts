import { Product } from "@/interfaces/product-interface"
import api from "@/lib/api"

export async function getAllProducts() {
  try {
    const res = await api.get("/product/")
    return res.data as Product[]
  } catch (err) {
    console.log(err)
    return []
  }
}
