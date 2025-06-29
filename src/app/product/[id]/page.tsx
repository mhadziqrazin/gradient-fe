"use client"

import LoadingPage from "@/components/modules/loading-page"
import { Button } from "@/components/ui/button"
import api from "@/lib/api"
import { usePaymentStore } from "@/stores/payment-store"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function PayPage({ params }: { params: Promise<{ id: string }> }) {
  const { getPaymentByProductId, clearPayments } = usePaymentStore()
  const router = useRouter()
  const { id } = React.use(params)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const payment_record = getPaymentByProductId(parseInt(id))

    if (!payment_record) {
      // if user hasn't made a payment request for the product
      router.replace(`/pay/${id}`)
      toast.error("Beli produknya dulu dong!")
      return
    }

    const { payment_id, invoice_url } = payment_record

    api.get(`/product/pay/verify/${payment_id}`)
      .then((res) => {
        console.log(res)
        if (res.status !== 200) {
          throw new Error("Produk belum dibayar!")
        } else {
          setIsLoading(false)
        }
      })
      .catch(() => {
        // redirect to payment url if the product hasn't been purchased
        router.replace(invoice_url)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleReset = () => {
    clearPayments()
    router.push("/")
  }

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <main className="w-full h-dvh flex flex-col items-center justify-center">
      <span>Hai, produk ini telah berhasil dibayar! (yey)</span>
      <Link href={"/"} className="underline">
        Beranda
      </Link>
      <div className="my-2">
        <Button variant={"outline"} onClick={handleReset}>
          Ulangi Simulasi
        </Button>
      </div>
    </main>
  )
}
