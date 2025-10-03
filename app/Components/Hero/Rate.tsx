import { PropsComponent } from "@/app/typs";
import { FaPlus } from "react-icons/fa";

export default function Rate({
  title,
  count,
}: PropsComponent & { count: string }) {
  return (
    <article className="flex flex-col items-start">
      <p className="flex items-center font-bold text-2xl sm:text-3xl gap-1">
        <FaPlus className="text-primary" size={15} /> {count}
      </p>
      <p className="font-semibold text-lightly text-sm sm:text-base">{title}</p>
    </article>
  );
}
