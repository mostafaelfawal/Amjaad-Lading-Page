import { PropsComponent } from "@/app/typs";
import Image from "next/image";

export default function Service({ img, title, desc }: PropsComponent) {
  return (
    <article className="flex flex-col gap-4 items-center text-center md:items-start md:text-start">
      <Image
        src={img!}
        alt="img"
        width={250}
        height={250}
        className="w-40 h-40 md:w-56 md:h-56 object-contain"
      />
      <p className="text-lg md:text-xl text-darkly font-semibold">{title}</p>
      <p className="text-sm md:text-base text-lightly leading-relaxed">
        {desc}
      </p>
    </article>
  );
}
