export default function StatsBox() {
  return (
    <div className="shadow-lg shadow-primary absolute left-0 bottom-0 max-w-xl lg:flex hidden flex-col md:flex-row gap-6 py-6 px-6 text-white bg-gradient-to-br from-primary via-primary/95 to-primary-dark rounded-tr-2xl z-2">
      {/* اسم الشركة */}
      <div className="flex flex-col justify-center">
        <p className="font-bold text-2xl tracking-tight">أمجاد</p>
        <p className="font-semibold mr-2 opacity-90">للعقارات</p>
      </div>

      {/* سنوات العمل */}
      <div className="flex flex-col justify-center border-r border-white/20 pr-4">
        <div className="flex items-baseline gap-2">
          <p className="font-bold text-2xl bg-white/10 px-2 py-1 rounded-lg">25</p>
          <span className="text-lg font-semibold opacity-90">سنه</span>
        </div>
        <p className="text-sm opacity-80">خبره</p>
      </div>

      {/* الوصف */}
      <div className="flex-1">
        <p className="text-sm md:text-base leading-relaxed opacity-90">
          كجهة موثوقة في إدارة المشاريع العامة على مدار 25 عامًا، يظل هدفنا
          الأساسي هو ضمان رضا عملائنا في كل مرحلة.
        </p>
      </div>
    </div>
  );
}