"use client";
import { motion } from "framer-motion";
import New from "./New";

export default function Articles() {
  return (
    <motion.section
      id="articles"
      className="px-6 md:px-20 py-12 flex justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex gap-9 flex-col w-full">
        <p className="text-2xl md:text-4xl font-semibold text-center md:text-right">
          الأخبار و التحديثات
        </p>

        {/* شبكة Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-15 justify-items-center">
          <New
            img="/Elements.png"
            title="عناصر المحتوى في طلاء الإيبوكسي"
            desc="مقاول دهانات إيبوكسي وأرضيات إيبوكسي. هل سمعتَ هذين المصطلحين؟ وما علاقة ذلك ببناء المباني القائمة؟ الإيبوكسي نفسه مُدرج ضمن أنواع الراتنج..."
          />
          <New
            img="/5 Right.png"
            title="5 خطوات صحيحة في تخطيط وبناء المستودعات"
            desc="يجب التخطيط بعناية لبناء مستودع لتخزين السلع الصناعية والشخصية وغيرها. عند التخطيط بشكل صحيح، يصبح البناء..."
          />
          <New
            img="/The Right.png"
            title="الحل الصحيح لبناء منزل قوي من نوع 45"
            desc="امتلاك منزل متين هو حلم الجميع بلا شك. كيف لا، فالمنزل هو ملاذٌ يستريح فيه السكان ويلجأون إليه من سوء الأحوال الجوية..."
          />
        </div>
      </div>
    </motion.section>
  );
}
