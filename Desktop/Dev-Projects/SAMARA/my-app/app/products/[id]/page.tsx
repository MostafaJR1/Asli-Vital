import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { ProductDetails } from "@/components/ProductDetails";
import { ProductsData } from "@/data/Products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = ProductsData.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <ProductDetails product={product} products={ProductsData} />
    </div>
  );
}
