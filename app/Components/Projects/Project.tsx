"use client";
import { motion } from "framer-motion";
import { PropsComponent } from "@/app/typs";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Project({ title, img }: PropsComponent) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="group relative overflow-hidden">
        <Image
          src={img!}
          alt={img!}
          width={200}
          height={200}
          className="shadow w-full h-auto"
        />

        {/* المربع اللي بيظهر بالهوفر */}
        <div
          className="
            absolute bottom-0 left-0 w-full
            flex items-center gap-5 px-4 py-3
            bg-white/95 shadow-lg
            opacity-0 translate-y-10
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-500 ease-in-out
          "
        >
          <button className="hover:opacity-80 duration-300 transition-opacity size-10 bg-primary flex justify-center items-center text-white">
            <FaArrowRight />
          </button>
          <p className="flex flex-col font-semibold text-darkly text-lg">
            {title}{" "}
            <span className="text-lightly font-medium text-sm">
              مشروع مكتمل
            </span>
          </p>
        </div>
      </div>
    </motion.article>
  );
}
