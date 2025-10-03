import { PropsComponent } from "@/app/typs";
import { FaPlus } from "react-icons/fa";

export default function Rate({
  title,
  count,
}: PropsComponent & { count: string }) {
  return (
    <article>
      <p className="flex items-center font-bold text-3xl gap-1">
        <FaPlus className="text-primary" size={15} /> {count}
      </p>
      <p className="font-semibold text-lightly max-w-0">{title}</p>
    </article>
  );
}
