import { PropsComponent } from "@/app/typs";

export default function Feature({ icon, title, desc }: PropsComponent) {
  return (
    <article className="flex flex-col gap-3 items-center text-center md:items-start md:text-start">
      <div className="shadow bg-primary outline-5 outline-primary-lightE size-12 md:size-14 rounded-full text-white flex justify-center items-center text-lg md:text-2xl">
        {icon}
      </div>
      <p className="font-bold text-lg md:text-2xl">{title}</p>
      <p className="text-sm md:text-base text-lightly leading-relaxed">
        {desc}
      </p>
    </article>
  );
}
