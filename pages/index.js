import Featured from "@/components/Featured";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function Hemepage({product}) {
  return (
    <div>
      <Header/>
      <Featured product={product}/>
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = "6480953a4aefbc7aa0fee833"
  await mongooseConnect()
  const product = await Product.findById(featuredProductId)
  return {
    props: {product: JSON.parse(JSON.stringify(product))},
  }
}