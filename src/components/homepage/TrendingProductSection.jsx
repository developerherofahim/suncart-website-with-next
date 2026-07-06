
import { getProductData } from "@/lib/data";
import ProductCard from "../utils/ProductCard";
import { poppins } from "@/lib/font";

const TrendingProductSection = async () => {
  const products = await getProductData();

  return (
    <section className={`bg-[#FFF7ED] py-12 sm:py-16 lg:py-20 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg sm:text-xl font-semibold text-black">
          Trending Now
        </h3>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-3">
          🔥 Popular Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {products
            .filter((product) => product.isTrending)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProductSection;