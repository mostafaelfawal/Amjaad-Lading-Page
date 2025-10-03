"use client";
import { motion } from "framer-motion";

export default function Header() {
  const navLinks = ["خدماتنا", "عنا", "مقالات", "اعمالنا", "تواصل"];

  return (
    <header className="z-3 sticky top-0 py-4 bg-gradient-to-l from-from to-to">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-10">
        {/* الشعار */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="font-bold text-3xl text-primary">أمجاد</h1>
          <span className="font-semibold text-xl text-white mr-2">
            للعقارات
          </span>
        </motion.div>

        {/* قائمة التنقل */}
        <motion.nav
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 }, // يدخلوا ورا بعض
            },
          }}
        >
          <ul className="flex text-lg gap-6 text-lightly">
            <motion.li
              variants={{
                hidden: { opacity: 0, y: -20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="font-semibold text-white bg-[#616161] py-1 px-3 rounded-full cursor-default"
            >
              الرئيسيه
            </motion.li>
            {navLinks.map((nav, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="px-3 py-1 hover:text-white duration-200 transition-colors cursor-pointer"
              >
                {nav}
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </header>
  );
}
