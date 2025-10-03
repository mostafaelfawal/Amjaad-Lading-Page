import { ReactElement } from "react";
import { IconType } from "react-icons";

export type PropsComponent = {
  img?: string;
  title: string;
  desc?: string;
  icon?: ReactElement<IconType>;
};
