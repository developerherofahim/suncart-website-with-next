
import { poppins } from "@/lib/font";
import { Shield } from "lucide-react";
import { IoSunnyOutline, IoWaterOutline } from "react-icons/io5";

const partners = [
  {
    id: 1,
    name: "SunShade",
    description: "Eye Protection Experts",
    icon: <span className="text-xl font-bold text-[#CA3500]">S</span>,
    bg: "bg-[#FDBA74]",
  },
  {
    id: 2,
    name: "CoastalChic",
    description: "Resort Fashion Leaders",
    icon: <span className="text-xl font-bold text-[#1469EB]">C</span>,
    bg: "bg-[#DBEAFE]",
  }, 
  {
    id: 3,
    name: "GlowGuard",
    description: "Premium SkinCare",
    icon: <span className="text-xl font-bold text-[#248236]">G</span>,
    bg: "bg-[#DBFCE7]",
  },
  {
    id: 4,
    name: "WaveRider",
    description: "Water Sports Gear",
    icon: <span className="text-xl font-bold text-[#8200DB]">W</span>,
    bg: "bg-[#F3E8FF]",
  },
];

const PartnerSection = () => {
  return (
    <section
      className={`bg-[#FFF7ED] py-12 sm:py-16 lg:py-20 ${poppins.className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg sm:text-xl font-semibold text-[#F45C1E]">
          Our Partners
        </p>

        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
          Top Brands 🏆
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-3xl shadow-sm w-full hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-8 flex flex-col items-center text-center gap-4">
                <div
                  className={`w-14 h-14 rounded-xl ${partner.bg} flex items-center justify-center`}
                >
                  {partner.icon}
                </div>

                <h3 className="text-xl font-semibold">{partner.name}</h3>

                <p className="text-[#8B6F66]">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;