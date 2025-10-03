"use client";
import { motion } from "framer-motion";
import { PropsComponent } from "@/app/typs";
import Image from "next/image";

export default function New({ img, title, desc }: PropsComponent) {
  return (
    <motion.article
      className="flex flex-col gap-6 w-full max-w-[300px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Image
        src={img!}
        alt="img"
        width={300}
        height={200}
        className="w-full h-auto object-cover shadow"
      />
      <div className="flex gap-3 items-center">
        <div className="text-center">
          <p className="font-semibold text-lg md:text-xl">12</p>
          <span className="font-semibold">Jun</span>
        </div>
        <span className="border-l border-l-lightly h-8"></span>
        <p className="text-darkly font-semibold">{title}</p>
      </div>
      <div>
        <p className="text-lightly text-sm md:text-base leading-relaxed">
          {desc}{" "}
          <button className="text-primary hover:text-primary-dark">
            عرض المزيد
          </button>
        </p>
      </div>
    </motion.article>
  );
}
