import { getProductById } from "@/actions/product"
import ProductPaymentModule from "@/components/modules/product-payment"

export default async function PayPage({ params }: { params: { id: number } }) {
  const product = await getProductById(params.id)

  if (!product) {
    return (
      <div className="w-full h-dvh flex items-center justify-center font-semibold text-3xl">
        Product {params.id} tidak valid
      </div>
    )
  }

  return (
    <ProductPaymentModule {...product} />
  )
}
