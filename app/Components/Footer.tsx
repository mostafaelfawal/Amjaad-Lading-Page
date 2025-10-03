"use client";
import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaQuoteLeft,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-linear-to-br from-from to-to px-6 md:px-12 lg:px-20 pb-20 pt-60"
    >
      <div className="relative flex flex-col lg:flex-row justify-between gap-12">
        {/* صندوق التستيمونيال */}
        <motion.div
          className="flex flex-col md:flex-row absolute w-[90%] md:w-4/5 lg:w-2/3 py-8 px-6 md:px-10 gap-10 md:gap-20 left-1/2 -top-40 md:-top-100 -translate-x-1/2 bg-linear-to-br from-from to-to"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative flex-shrink-0 mx-auto md:mx-0">
            <Image
              src="/avatar2.png"
              alt="avatar2"
              width={160}
              height={160}
              className="w-32 h-32 md:w-48 md:h-48 object-cover"
            />
            <div className="md:absolute top-1/2 md:-left-10 bg-white px-4 md:px-5 w-44 md:w-52">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full size-10 shadow shadow-primary-light bg-white text-primary flex justify-center items-center">
                <FaQuoteLeft />
              </div>
              <p className="text-lg md:text-xl font-semibold text-darkly text-center mb-3 sm:mt-7 pt-2">
                سلمان الحميدي
              </p>
              <p className="text-lightly text-xs md:text-sm mb-5 text-center">
                نحن نحب النتيجة النهائية لهذا المشروع، فهو استثنائي ويقدم أيضًا
                أفضل خدمة للعميل
              </p>
            </div>
          </div>

          <div>
            <p className="leading-snug md:leading-relaxed text-white font-semibold text-2xl md:text-3xl">
              ما قمنا به وما يقوله عملاؤنا
            </p>
            <p className="text-lightly my-4 md:my-5 text-sm md:text-base">
              نساعدكم في بناء مبنى ممتاز، فلا شيء مستحيل معنا. شاهدوا إنجازاتنا
              وآراء عملائنا حول عملنا.
            </p>
            <div className="flex justify-center md:justify-start gap-4 text-white">
              <button className="hover:opacity-80 duration-300 transition-opacity bg-primary flex justify-center items-center p-4 md:p-5">
                <FaArrowRight />
              </button>
              <button className="p-4 md:p-5 hover:-translate-x-2 duration-200 transition-transform">
                <FaArrowLeft />
              </button>
            </div>
          </div>
        </motion.div>

        {/* باقي محتوى الفوتر */}
        <motion.div
          className="flex flex-col gap-6 flex-1 mt-90 md:mt-0 "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-2xl md:text-3xl font-semibold text-white">
            <span className="text-primary text-shadow-md text-shadow-primary-dark">
              أمجاد
            </span>{" "}
            للعقارات
          </p>
          <p className="text-lightly text-sm md:text-base">
            شركة مقاولات عامة، مقرها الدوحه. تتمتع بخبرة تزيد عن 25 عامًا في
            بناء وتنمية الخليج.
          </p>
          <ul className="flex justify-center lg:justify-start gap-3">
            <li className="duration-300 transition-colors cursor-pointer p-3 rounded-full hover:bg-[#2386c080] bg-[#2386c010] text-white">
              <FaGoogle />
            </li>
            <li className="duration-300 transition-colors cursor-pointer p-3 rounded-full hover:bg-[#2386c080] bg-[#2386c010] text-white">
              <FaTwitter />
            </li>
            <li className="duration-300 transition-colors cursor-pointer p-3 rounded-full hover:bg-[#2386c080] bg-[#2386c010] text-white">
              <FaInstagram />
            </li>
            <li className="duration-300 transition-colors cursor-pointer p-3 rounded-full hover:bg-[#2386c080] bg-[#2386c010] text-white">
              <FaLinkedin />
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="text-lightly flex flex-col sm:flex-row lg:flex-row gap-10 flex-1 justify-center lg:justify-end"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ul className="flex flex-col gap-4 md:gap-6 text-center lg:text-left">
            <p className="font-semibold text-white">الشركة</p>
            <li className="duration-200 transition-colors hover:text-white cursor-pointer">
              عنا
            </li>
            <li className="duration-200 transition-colors hover:text-white cursor-pointer">
              كيف نعمل
            </li>
            <li className="duration-200 transition-colors hover:text-white cursor-pointer">
              الشروط
            </li>
            <li className="duration-200 transition-colors hover:text-white cursor-pointer">
              السياسه و الخصوصيه
            </li>
          </ul>
          <ul className="flex flex-col gap-4 md:gap-6 text-center lg:text-left">
            <p className="font-semibold text-white">المزيد</p>
            <li className="duration-200 transition-colors hover:text-white cursor-pointer">
              التوثيق
            </li>
            <li className="duration-200 transition-colors hover:text-white cursor-pointer">
              الترخيص
            </li>
          </ul>
        </motion.div>
      </div>
    </footer>
  );
}
