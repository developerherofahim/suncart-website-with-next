import Banner from "@/components/homepage/Banner";
import PartnerSection from "@/components/homepage/PartnerSection";
import SummerCare from "@/components/homepage/SummerCare";
import TrendingProductSection from "@/components/homepage/TrendingProductSection";
import { poppins } from "@/lib/font";

import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <TrendingProductSection />
      <SummerCare />
      <PartnerSection />
      <section
        className={`bg-[#F97316] py-12 flex flex-col items-center sm:py-16 lg:py-20 ${poppins.className}`}
      >
        <h2 className="text-center text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
          Ready for Summer? 🏖
        </h2>
        <p
          className={`mt-6 text-white text-center text-base sm:text-lg lg:text-xl max-w-2xl mx-auto`}
        >
          Grow your business to the next level to improve your business
          performance and stay competitive.
        </p>

        <Link href='/products'>
          <button
            className={`flex justify-center items-center btn bg-white hover:bg-orange-600 border-none text-[#F97316] shadow-none mt-8 px-6 sm:px-8`}
          >
            Shop Now
            <MoveRight className="ml-2 h-5 w-5" />
          </button>
        </Link>
      </section>
    </div>
  );
}
