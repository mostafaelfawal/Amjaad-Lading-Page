"use client";
import { motion } from "framer-motion";
import { FaUserTie, FaDollarSign, FaClock, FaCubes } from "react-icons/fa";
import Feature from "./Feature";

export default function Features() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.25 } },
      }}
      className="flex flex-col gap-12 px-20 py-12"
    >
      {/* الخط */}
      <motion.span
        className="w-20 h-3 bg-linear-to-r from-primary to-primary-light"
        variants={{
          hidden: { opacity: 0, x: -40 },
          show: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.7 }}
      ></motion.span>

      {/* النصوص */}
      <motion.div
        className="flex flex-col md:flex-row gap-5 mb-12"
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="font-bold text-darkly text-3xl md:text-4xl md:leading-relaxed leading-snug min-w-60">
          ما الذي يجعلنا مميزين؟
        </p>
        <p className="text-lightly text-lg md:text-xl flex items-center">
          اكتشف أبرز خدماتنا التي تساعدك على بناء شركتك بثقة، مع ضمان الجودة
          والالتزام بالمواعيد. لأي استفسار، لا تتردد في التواصل معنا عبر البريد
          الإلكتروني أو خدمة العملاء.
        </p>
      </motion.div>

      {/* المميزات */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {[
          {
            icon: <FaUserTie />,
            title: "خبراء متخصصون",
            desc: "خبرتنا التي تمتد لأكثر من 25 عامًا في البناء والتنمية تضمن لك نتائج احترافية وموثوقة.",
          },
          {
            icon: <FaDollarSign />,
            title: "أسعار تنافسية",
            desc: "نقدم لك أفضل الأسعار التي لا تؤثر على جودة العمل، لتضمن القيمة مقابل الاستثمار.",
          },
          {
            icon: <FaClock />,
            title: "التسليم في الوقت",
            desc: "نلتزم بالمواعيد المحددة لكل مشروع، مع الحفاظ على أعلى معايير الجودة في التنفيذ.",
          },
          {
            icon: <FaCubes />,
            title: "أفضل المواد",
            desc: "نستخدم مواد بناء عالية الجودة لضمان متانة ومظهر المبنى لفترة طويلة.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
          >
            <Feature icon={item.icon} title={item.title} desc={item.desc} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
