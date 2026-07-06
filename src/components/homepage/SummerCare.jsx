
import { poppins } from "@/lib/font";
import { Shield } from "lucide-react";
import { IoSunnyOutline, IoWaterOutline } from "react-icons/io5";

const SummerCare = () => {
  return (
    <section
      className={`bg-[#F5EDE0] py-12 sm:py-16 lg:py-20 ${poppins.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg sm:text-xl font-semibold text-[#F45C1E]">
          Stay Safe This Summer
        </p>

        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
          Summer Care Tips 🌟
        </h2>

        <p className="text-center text-base sm:text-lg lg:text-xl text-[#8B6F66] max-w-3xl mx-auto mt-5">
          Make the most of your summer while keeping your skin and body
          protected.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-sm w-full">
            <div className="p-8 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#F9EBD9] flex items-center justify-center">
                <IoSunnyOutline className="text-3xl text-[#F97316]" />
              </div>

              <h3 className="text-xl font-semibold">
                Reapply Sunscreen
              </h3>

              <p className="text-gray-600">
                Reapply SPF 50+ every 90 minutes while outdoors, especially
                after swimming.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-sm w-full">
            <div className="p-8 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#EFF6FF] flex items-center justify-center">
                <IoWaterOutline className="text-3xl text-[#2B7FFF]" />
              </div>

              <h3 className="text-xl font-semibold">
                Stay Hydrated
              </h3>

              <p className="text-gray-600">
                Drink at least 3 liters of water on hot days. Add electrolytes
                for longer sun exposure.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-sm w-full">
            <div className="p-8 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#FAF5FF] flex items-center justify-center">
                <Shield className="w-7 h-7 text-[#AD46FF]" />
              </div>

              <h3 className="text-xl font-semibold">
                Protect Your Eyes
              </h3>

              <p className="text-gray-600">
                Wear UV-blocking sunglasses to prevent long-term retinal damage
                from prolonged sun exposure.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SummerCare;