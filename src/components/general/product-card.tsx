import { Product } from "@/interfaces/product-interface"
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Badge } from "../ui/badge"

const ProductCard: React.FC<Product> = (product) => {
  const discountAmount = product.price * product.discount
  const priceDiscount = product.price - discountAmount

  return (
    <div className="relative">
      {product.is_highlighted && (
        <div className="absolute bottom-full translate-y-4 pt-2 pb-6 bg-purple-500 text-center text-white font-semibold text-sm w-full rounded-t-xl">
          TERPOPULER!
        </div>
      )}
      <Card className={cn(
        "relative w-[250px]",
        product.is_highlighted && "border-purple-500"
      )}>
        <CardHeader>
          <CardTitle className="text-center text-xl">
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-16 flex flex-col">
          <span className={cn("text-3xl font-semibold", product.is_highlighted && "text-purple-500")}>
            Rp{priceDiscount.toLocaleString()}
          </span>
          <div className="flex gap-2 items-center justify-center py-2">
            <Badge className="bg-red-100 text-red-500 font-semibold">
              {product.discount * 100}%
            </Badge>
            <span className="text-sm line-through text-muted-foreground">
              Rp{product.price.toLocaleString()}
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className={cn("w-full", product.is_highlighted && "bg-purple-500 hover:bg-purple-500/90")}>
            <Link href={`/pay/${product.id}`}>
              Beli
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProductCard
