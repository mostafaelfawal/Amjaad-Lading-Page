import { PropsComponent } from "@/app/typs";
import Image from "next/image";

export default function Service({ img, title, desc }: PropsComponent) {
  return (
    <article className="flex flex-col gap-6">
      <Image
        src={img!}
        alt="img"
        width={250}
        height={250}
        className="min-w-fit"
      />
      <p className="text-xl text-darkly font-semibold">{title}</p>
      <p className="text-lightly">{desc}</p>
    </article>
  );
}
