import { Value } from "@/const";
import { Carou } from "./carousel";

export const Images = ({ current }: { current: Value }) => {
  return <Carou current={current} />;
};
