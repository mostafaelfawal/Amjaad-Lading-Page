"use client";
import { motion } from "framer-motion";
import Service from "./Service";

export default function Services() {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.25 },
        },
      }}
      className="bg-[#f8f8f8] px-6 md:px-20 py-12"
    >
      {/* العناوين */}
      <motion.div
        className="flex flex-col md:flex-row gap-6 md:gap-12 mb-12"
        variants={{
          hidden: { opacity: 0, y: 40 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="font-bold text-darkly text-3xl md:text-6xl leading-snug md:leading-relaxed">
          خدماتنا الأحترافيه
        </p>
        <p className="text-lightly text-base md:text-xl flex items-center">
          اطلع على أفضل خدماتنا التي يمكنك طلبها لبناء شركتك، ولا تنسَ الاستفسار
          عبر بريدنا الإلكتروني أو خدمة العملاء إذا كنت مهتمًا باستخدام خدماتنا.
        </p>
      </motion.div>

      {/* البوكسات */}
      <motion.div
        className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center md:items-stretch"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.25 } },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          <Service
            img="/Industrial.png"
            title="صناعي"
            desc="التطوير الصناعي هو مجال عملنا الرئيسي. نعمل في مجال بناء المصانع والمستودعات وغيرها."
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Service
            img="/Commercial.png"
            title="تجاري"
            desc="خبرتنا في المجال التجاري تشمل صالات العرض، والمراكز التجارية الكبرى، والمباني المكتبية"
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Service
            img="/Resedential.png"
            title="سكني"
            desc="التطوير السكني هو البداية التي شكلتنا حتى يومنا هذا. يشمل تطويرنا منازل وشققًا"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
