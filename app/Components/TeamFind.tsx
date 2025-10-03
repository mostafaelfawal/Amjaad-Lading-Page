"use client"
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay: number = 0
) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween" as const,
        duration: 0.8,
        delay,
      },
    },
  };
};

export default function TeamFind() {
  return (
    <section className="flex justify-center px-20 py-12 relative">
      <motion.div
        className="flex items-center justify-between relative"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* صورة الفريق على الشمال */}
        <motion.div
          className="relative w-[400px] h-[400px]"
          variants={fadeIn("left", 0.3)}
        >
          <Image
            src="/Team.png"
            alt="team"
            width={400}
            height={400}
            className="object-contain"
          />

          {/* العنصر اللي فوق صورة الفريق */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            className="absolute top-1/2 left-15 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 p-4 bg-linear-to-tr from-from to-to max-w-[240px] rounded-md"
          >
            {/* صورة الـAvatar */}
            <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg shadow-primary">
              <Image
                src="/avatar1.png"
                alt="avatar1"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <p className="text-white text-xl font-semibold">ياسر راشد</p>
            <p className="text-lightly text-sm text-center">
              أكثر من 20 عامًا من الخبرة في مجال الهندسة المعمارية، وعمل على
              أكثر من 100 مشروع
            </p>
          </motion.div>
        </motion.div>

        {/* النص على اليمين */}
        <motion.div
          className="mr-20 flex flex-col gap-6 max-w-[400px]"
          variants={fadeIn("right", 0.3)}
        >
          <p className="text-darkly text-3xl font-bold">
            التقِ وتحدث مع أفضل مهندسينا المعماريين
          </p>
          <p className="text-lightly text-xl">
            جميع فرقنا محترفة وكفؤة في مجالاتها، وستساعدك على تحقيق حلمك ببناء
            منزل أحلامك بنتائج ممتازة.
          </p>
          <motion.div className="flex" variants={fadeIn("up", 0.4)}>
            <button className="font-semibold text-white px-5 py-5 bg-primary shadow-lg shadow-primary-light hover:opacity-80 duration-200">
              شاهد باقي الفريق
            </button>
            <div className="flex justify-center items-center px-5 py-5 gap-2 group">
              <button className="font-semibold text-darkly">كيف يعمل</button>
              <FaArrowLeft
                size={15}
                className="group-hover:-translate-x-2 duration-200 ease-in-out"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
