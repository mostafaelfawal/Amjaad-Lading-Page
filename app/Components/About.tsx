"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="flex justify-center px-6 md:px-20 py-12 relative">
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center justify-between relative gap-10 md:gap-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* النص */}
        <motion.div
          className="flex flex-col gap-6 max-w-full md:max-w-[400px] text-center md:text-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-darkly text-2xl md:text-3xl font-bold">
            قصتنا ● من نحن
          </p>
          <p className="text-lightly text-base md:text-xl leading-relaxed">
            تأسست شركة أمجاد للعقارات عام ١٩٩٢، وتعمل كشركة مقاولات عامة، ولها
            بصمة راسخة في جميع أنحاء الخليج. في البداية، ركزنا على الإنشاءات في
            مجال تطوير المساكن في الدوحه. ومع نمو الشركة، أصبحنا الآن شركة
            موثوقة...
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="font-semibold text-white px-6 py-3 bg-primary shadow-lg shadow-primary-light hover:opacity-80 duration-200 rounded-lg">
              عرض المزيد
            </button>
          </div>
        </motion.div>

        {/* الصورة */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <Image
            src="/our-story.png"
            alt="team"
            width={400}
            height={400}
            className="object-contain shadow-lg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
