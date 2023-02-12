import { Metadata } from "next";

export interface ProductPageProps extends Metadata {
  params: {
     id : string; 
  };
}

export  function generateMetadata({params} : ProductPageProps) {
  return {
    title: `${params.id}`, 
  }
}

const ProductPage = ({ params }: ProductPageProps) => {
  return (
    <h1>Product n: {params.id}</h1>
  )
}

export default ProductPage