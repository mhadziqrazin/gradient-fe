import { Product } from "@/interfaces/product-interface"
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { cn } from "@/lib/utils"

const ProductCard: React.FC<Omit<Product, "id">> = ({
  name,
  price,
  discount,
  isHighlighted,
}) => {
  const discountAmount = price * discount
  const priceDiscount = price - discountAmount

  return (
    <div className="relative">
      {isHighlighted && (
        <div className="absolute bottom-full translate-y-4 pt-2 pb-6 bg-purple-500 text-center text-white font-semibold text-sm w-full rounded-t-xl">
          TERPOPULER!
        </div>
      )}
      <Card className={cn(
        "relative w-[250px]",
        isHighlighted && "border-purple-500"
      )}>
        <CardHeader>
          <CardTitle className="text-center text-xl">
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-16 flex flex-col">
          <span className={cn("text-3xl font-semibold", isHighlighted && "text-purple-500")}>
            Rp{priceDiscount.toLocaleString()}
          </span>
          <span className="text-sm line-through text-muted-foreground">
            Rp{price.toLocaleString()}
          </span>
        </CardContent>
        <CardFooter>
          <Button className={cn("w-full", isHighlighted && "bg-purple-500 hover:bg-purple-500/90")}>
            Beli
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProductCard
