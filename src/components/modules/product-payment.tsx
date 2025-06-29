import { Product } from "@/interfaces/product-interface"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import Link from "next/link"
import { ChevronLeftIcon } from "lucide-react"
import Image from "next/image"
import PaymentButton from "./payment-button"

const ProductPaymentModule: React.FC<Product> = (product) => {
  const discountAmount = product.price * product.discount
  const priceDiscount = product.price - discountAmount

  return (
    <main className="px-20 py-10 flex flex-col">
      <Button asChild variant={'link'} size={'sm'} className="group w-fit mb-4">
        <Link href={'/'}>
          <ChevronLeftIcon className="group-hover:-translate-x-1 transition-transform" />
          Kembali
        </Link>
      </Button>
      <span className="text-3xl font-semibold">
        Ringkasan Pembayaran
      </span>
      <div className="flex flex-wrap gap-4 my-10">
        {/* PAYMENT METHOD */}
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="text-xl">Metode Pembayaran</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {/* VIRTUAL ACCOUNT */}
            <section className="flex flex-col gap-1">
              <span className="font-semibold text-lg">
                Virtual Account
              </span>
              <div className="flex gap-4">
                <div className="border rounded-xl p-4">
                  <Image src={'/bca.jpg'} width={150} height={50} alt="BCA" className="object-contain h-[50px]" />
                </div>
                <div className="border rounded-xl p-4">
                  <Image src={'/bni.png'} width={150} height={50} alt="BNI" className="object-contain h-[50px]" />
                </div>
              </div>
            </section>

            {/* QRIS */}
            <section className="flex flex-col gap-1">
              <span className="font-semibold text-lg">
                QRIS
              </span>
              <div className="flex gap-4">
                <div className="border rounded-xl p-4">
                  <Image src={'/qris.png'} width={150} height={50} alt="QRIS" className="object-contain h-[50px]" />
                </div>
              </div>
            </section>

            {/* DEBIT/CREDIT */}
            <section className="flex flex-col gap-1">
              <span className="font-semibold text-lg">
                Kartu Kredit/Debit
              </span>
              <div className="flex gap-4">
                <div className="border rounded-xl p-4">
                  <Image src={'/visa.png'} width={150} height={50} alt="Visa" className="object-contain h-[50px]" />
                </div>
                <div className="border rounded-xl p-4">
                  <Image src={'/mastercard.png'} width={150} height={50} alt="Mastercard" className="object-contain h-[50px]" />
                </div>
              </div>
            </section>
          </CardContent>
        </Card>

        {/* PRODUCT DETAIL */}
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Detail Produk</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="grid grid-cols-2">
              <span className="text-muted-foreground">
                Nama
              </span>
              <span className="text-right">
                {product.name}
              </span>
              <span className="text-muted-foreground">
                Harga
              </span>
              <span className="text-right">
                Rp{product.price.toLocaleString()}
              </span>
              <span className="text-muted-foreground">
                Diskon
              </span>
              <span className="text-right">
                -Rp{discountAmount.toLocaleString()}
              </span>
            </div>
            <hr />
            <div className="grid grid-cols-2">
              <span className="font-semibold">
                Total
              </span>
              <span className="text-right font-semibold">
                Rp{priceDiscount.toLocaleString()}
              </span>
            </div>
          </CardContent>
          <CardFooter className="h-full items-end">
            <PaymentButton product_id={product.id} />
          </CardFooter>
        </Card>
      </div>
    </main>
  )
}

export default ProductPaymentModule
