"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Rate from "./Rate";
import StatsBox from "./StatsBox";

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.25 },
        },
      }}
      className="relative pt-16 min-h-[90vh] bg-gradient-to-tl from-from to-to px-6 md:px-20 flex flex-col justify-center"
    >
      {/* الصورة الخلفية مع Overlay */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full md:w-1/2 h-1/2 md:h-full"
      >
        <Image src="/hero.webp" alt="estate" fill className="object-cover" />
        <div className="absolute inset-0 bg-to/40"></div>
      </motion.div>

      {/* النصوص والمحتوى */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-white flex flex-col gap-5 max-w-3xl md:leading-relaxed leading-snug z-2 mt-40 md:mt-0"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-semibold md:leading-relaxed leading-snug"
        >
          ابتكار معماري وبناء متقن يحوّل أفكارك إلى واقع
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lightly text-base sm:text-lg md:text-2xl md:leading-relaxed leading-snug"
        >
          نفخر بتنفيذ أكثر من 100 مشروع في مجال البناء والإسكان. اختارنا العملاء
          في الدوحه لتميزنا في الجودة والابتكار في كل مشروع.
        </motion.p>

        <button className="hover:opacity-80 bg-gradient-to-r from-primary-light to-primary font-semibold w-fit px-4 md:px-5 py-2 md:py-3 duration-200 rounded-md">
          اكتشف المزيد
        </button>

        {/* Rate Section */}
        <motion.div
          className="flex flex-wrap gap-6"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Rate title="عميل سعيد" count="300" />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Rate title="مشروع فخم" count="900" />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Rate title="جائزة محتازه" count="20" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hero Stats Box أسفل الHero */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <StatsBox />
      </motion.div>
    </motion.section>
  );
}
