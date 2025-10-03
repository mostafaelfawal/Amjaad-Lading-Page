"use client";
import { motion } from "framer-motion";
import { PropsComponent } from "@/app/typs";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Project({ title, img }: PropsComponent) {
  return (
    <motion.article
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <Image
          src={img!}
          alt={img!}
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />

        {/* المربع اللي بيظهر بالهوفر */}
        <div
          className="
            absolute bottom-0 left-0 w-full
            flex items-center gap-4 px-4 py-3
            bg-white/95 shadow-lg
            opacity-100 translate-y-0
            md:opacity-0 md:translate-y-10
            md:group-hover:opacity-100 md:group-hover:translate-y-0
            transition-all duration-500 ease-in-out
          "
        >
          <button className="hover:opacity-80 duration-300 size-10 bg-primary flex justify-center items-center text-white rounded-md">
            <FaArrowRight />
          </button>
          <p className="flex flex-col font-semibold text-darkly text-base sm:text-lg">
            {title}
            <span className="text-lightly font-medium text-xs sm:text-sm">
              مشروع مكتمل
            </span>
          </p>
        </div>
      </div>
    </motion.article>
  );
}
