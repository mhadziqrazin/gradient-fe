"use client"

import api from "@/lib/api"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { usePaymentStore } from "@/stores/payment-store"
import { useState } from "react"
import { BeatLoader } from "react-spinners"

interface PaymentButtonProps {
  product_id: number
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ product_id }) => {
  const router = useRouter()
  const { addPayment } = usePaymentStore()
  const [isLoading, setIsLoading] = useState(false)

  const handlePayment = async () => {
    setIsLoading(true)
    try {
      const res = await api.post("/product/pay/", { product_id })
      const invoice_url = res.data.invoice_url
      const payment_id = res.data.id

      if (!invoice_url || !payment_id) {
        throw new Error("Terjadi kesalahan")
      }

      router.push(invoice_url)
      addPayment({
        payment_id,
        product_id,
        invoice_url
      })
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button disabled={isLoading} onClick={handlePayment} size={'lg'} className="w-full bg-purple-500 hover:bg-purple-500/90">
      {isLoading ? (
        <BeatLoader color="white" />
      ) : (
        <span>Lanjutkan Pembaran</span>
      )}
    </Button>
  )
}

export default PaymentButton
