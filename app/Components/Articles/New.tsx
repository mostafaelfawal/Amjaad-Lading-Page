"use client";
import { motion } from "framer-motion";
import { PropsComponent } from "@/app/typs";
import Image from "next/image";

export default function New({ img, title, desc }: PropsComponent) {
  return (
    <motion.article
      className="flex flex-col gap-6 w-60"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Image
        src={img!}
        alt="img"
        width={250}
        height={250}
        className="min-w-fit shadow"
      />
      <div className="flex gap-3">
        <div>
          <p className="font-semibold text-xl text-center">12</p>
          <span className="font-semibold ">Jun</span>
        </div>
        <span className="border-l border-l-lightly"></span>
        <p className="text-darkly font-semibold flex items-center">{title}</p>
      </div>
      <div className="flex">
        <p className="text-lightly text-sm">
          {desc}{" "}
          <button className="text-primary hover:text-primary-dark">
            عرض المزيد
          </button>
        </p>
      </div>
    </motion.article>
  );
}
