import { getProductById } from "@/actions/product"
import ProductPaymentModule from "@/components/modules/product-payment"
import Link from "next/link"

export default async function PayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProductById(parseInt(id))

  if (!product) {
    return (
      <div className="w-full h-dvh flex flex-col items-center justify-center">
        <span className="font-semibold text-3xl">
          Produk {id} tidak valid
        </span>
        <Link href={'/'} className="underline">
          Beranda
        </Link>
      </div>
    )
  }

  return (
    <ProductPaymentModule {...product} />
  )
}
