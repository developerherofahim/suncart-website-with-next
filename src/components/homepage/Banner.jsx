'use client'

import { blackHanSans, poppins } from "@/lib/font";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-5xl text-center">
          <div>
            <h1
              className={`${blackHanSans.className}
      text-4xl
      leading-tight
      sm:text-5xl
      md:text-6xl
      lg:text-7xl`}
            >
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#F97316] inline-block"
              >
                Shop{" "}
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white inline-block"
              >
                Beach Items
              </motion.span>

              <br className="hidden sm:block" />

              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white inline-block"
              >
                With
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-[#F97316] inline-block ml-2"
              >
                Summer Vibe
              </motion.span>
            </h1>
          </div>

          <p
            className={`${poppins.className}
              mx-auto
              mt-6
              max-w-xs
              text-sm
              leading-7
              text-gray-200
              sm:max-w-lg
              sm:text-base
              md:max-w-2xl
              md:text-lg
              lg:text-xl`}
          >
            Grow your business to the next level, improve performance,
            and stay ahead with premium summer essentials.
          </p>

          <Link href="/products">
            <button
              className={`${poppins.className}
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#F97316]
                px-7
                py-3
                text-base
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-orange-600
                hover:scale-105`}
            >
              Shop Now
              <MoveRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;