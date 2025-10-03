"use client";
import { motion } from "framer-motion";
import Project from "./Project";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="px-6 md:px-20 py-12 flex justify-center pb-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col gap-9 w-full">
        <p className="text-2xl md:text-4xl font-semibold text-center md:text-right">
          افضل مشاريعنا
        </p>

        {/* الشبكة Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-9">
          <Project title="برج فاخر" img="/P1.png" />
          <Project title="برج الخزنة" img="/P2.png" />
          <Project title="مجمع راقي" img="/P3.png" />
          <Project title="منزل أنيق" img="/P4.png" />
        </div>
      </div>
    </motion.section>
  );
}
