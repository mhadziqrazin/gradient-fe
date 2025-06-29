"use client"

import api from "@/lib/api"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

interface PaymentButtonProps {
  product_id: number
}

const PaymentButton: React.FC<PaymentButtonProps> = ({ product_id }) => {
  const router = useRouter()

  const handlePayment = async () => {
    try {
      const res = await api.post("/product/pay/", { product_id })
      const invoice_url = res.data.invoice_url

      if (!invoice_url) {
        throw new Error("Terjadi kesalahan")
      }

      router.push(invoice_url)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Button onClick={handlePayment} size={'lg'} className="w-full bg-purple-500 hover:bg-purple-500/90">
      Lanjutkan Pembaran
    </Button>
  )
}

export default PaymentButton
