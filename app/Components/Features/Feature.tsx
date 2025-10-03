import { PropsComponent } from "@/app/typs";

export default function Feature({
  icon,
  title,
  desc,
}: PropsComponent) {
  return (
    <article className="flex flex-col gap-4">
      <div className="shadow bg-primary outline-5 outline-primary-lightE size-10 rounded-full text-white flex justify-center items-center text-xl">
        {icon}
      </div>
      <p className="font-bold text-2xl">{title}</p>
      <p className="text-lightly">{desc}</p>
    </article>
  );
}
