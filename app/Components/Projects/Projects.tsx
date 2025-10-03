"use client";
import { motion } from "framer-motion";
import Project from "./Project";

export default function Projects() {
  return (
    <motion.section
      className="px-6 md:px-20 py-12 flex justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex gap-9 flex-col">
        <p className="text-4xl font-semibold">افضل مشاريعنا</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Project title="برج فاخر" img="/P1.png" />
          <Project title="برج الخزنة" img="/P2.png" />
          <Project title="مجمع راقي" img="/P3.png" />
          <Project title="منزل أنيق" img="/P4.png" />
        </div>
      </div>
    </motion.section>
  );
}
