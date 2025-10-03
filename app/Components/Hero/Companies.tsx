"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Companies() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.2 }, // اللوجوهات تدخل واحدة ورا التانية
        },
      }}
      className="flex justify-center px-6 md:px-20 py-12"
    >
      <div className="flex flex-wrap items-center justify-center gap-10 md:justify-between">
        {[
          { src: "/ADIRA.svg", alt: "ADIRA", w: 120, h: 120 },
          { src: "/INDONESIA.svg", alt: "INDONESIA", w: 120, h: 120 },
          { src: "/Holcim.svg", alt: "Holcim", w: 120, h: 120 },
          { src: "/MNC.svg", alt: "MNC", w: 120, h: 120 },
          { src: "/Telkomsel.svg", alt: "Telkomsel", w: 160, h: 120 },
        ].map((logo, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              show: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={logo.h}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
