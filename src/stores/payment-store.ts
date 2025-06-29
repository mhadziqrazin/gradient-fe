import { create } from "zustand"
import { persist } from "zustand/middleware"

type PaymentRecord = {
  product_id: number
  payment_id: string
  invoice_url: string
}

type PaymentStore = {
  payments: PaymentRecord[]
  addPayment: (record: PaymentRecord) => void
  clearPayments: () => void
  getPaymentByProductId: (product_id: number) => PaymentRecord | undefined
}

export const usePaymentStore = create<PaymentStore>()(
  persist(
    (set, get) => ({
      payments: [],
      addPayment: (record) => {
        const existing = get().payments
        set({ payments: [...existing, record] })
      },
      clearPayments: () => set({ payments: [] }),
      getPaymentByProductId: (product_id) => {
        return get().payments.find((p) => p.product_id === product_id)
      },
    }),
    {
      name: "payment-records",
    }
  )
)

