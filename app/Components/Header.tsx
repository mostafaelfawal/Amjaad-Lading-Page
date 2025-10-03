"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "الرئيسيه", id: "home" },
    { name: "خدماتنا", id: "services" },
    { name: "عنا", id: "about" },
    { name: "مقالات", id: "articles" },
    { name: "اعمالنا", id: "projects" },
    { name: "تواصل", id: "contact" },
  ];

  // ✅ Scroll behavior
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  // ✅ Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 100; // تعديل بسيط لتفعيل قبل الوصول للنقطة بالضبط

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - offset;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="z-50 sticky top-0 py-4 bg-gradient-to-l from-from to-to shadow-md">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-6 md:px-10">
        {/* الشعار */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-2"
        >
          <Link href={"/"}>
            <h1 className="font-bold text-3xl text-primary">أمجاد</h1>
            <span className="font-semibold text-xl text-white">للعقارات</span>
          </Link>
        </motion.div>

        {/* قائمة التنقل - ديسكتوب */}
        <motion.nav
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="hidden md:block"
        >
          <ul className="flex text-lg gap-6 text-lightly">
            {navLinks.map((nav, i) => (
              <motion.li
                key={i}
                onClick={() => handleScrollTo(nav.id)}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className={`px-3 py-1 rounded-full cursor-pointer transition-colors duration-300 ${
                  activeSection === nav.id
                    ? "bg-[#616161] text-white"
                    : "hover:text-white"
                }`}
              >
                {nav.name}
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* زر الموبايل */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* قائمة الموبايل */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-[#1f1f1f] text-white absolute top-16 left-0 w-full shadow-lg rounded-b-2xl"
        >
          <ul className="flex flex-col items-center gap-4 py-6 text-lg">
            {navLinks.map((nav, i) => (
              <li
                key={i}
                onClick={() => handleScrollTo(nav.id)}
                className={`px-3 py-1 rounded-full cursor-pointer transition-colors duration-300 ${
                  activeSection === nav.id
                    ? "bg-primary text-white"
                    : "hover:text-primary-light"
                }`}
              >
                {nav.name}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
