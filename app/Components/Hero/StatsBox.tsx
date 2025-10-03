export default function StatsBox() {
  return (
    <div className="relative shadow-lg shadow-primary w-full md:max-w-xl flex flex-col md:flex-row gap-6 py-6 px-6 mt-8 md:mt-0 text-white bg-gradient-to-br from-primary via-primary/95 to-primary-dark rounded-2xl z-10">

      {/* اسم الشركة */}
      <div className="flex flex-col justify-center">
        <p className="font-bold text-xl md:text-2xl tracking-tight">أمجاد</p>
        <p className="font-semibold mr-2 opacity-90 text-sm md:text-base">
          للعقارات
        </p>
      </div>

      {/* سنوات العمل */}
      <div className="flex flex-col justify-center md:border-r border-white/20 md:pr-4 md:pl-0 pl-0 md:pt-0 pt-4 border-t md:border-t-0">
        <div className="flex items-baseline gap-2">
          <p className="font-bold text-lg md:text-2xl bg-white/10 px-2 py-1 rounded-lg">
            25
          </p>
          <span className="text-sm md:text-lg font-semibold opacity-90">
            سنه
          </span>
        </div>
        <p className="text-xs md:text-sm opacity-80">خبره</p>
      </div>

      {/* الوصف */}
      <div className="flex-1">
        <p className="text-xs md:text-base leading-relaxed opacity-90 mt-3 md:mt-0">
          كجهة موثوقة في إدارة المشاريع العامة على مدار 25 عامًا، يظل هدفنا
          الأساسي هو ضمان رضا عملائنا في كل مرحلة.
        </p>
      </div>
    </div>
  );
}
