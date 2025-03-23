import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./base.css";
import "./sandbox.css";
import "./embla.css";
import { ALL, Value } from "@/const";

const OPTIONS: EmblaOptionsType = { align: "start" };

export const Carou = ({ current }: { current: Value }) => {
  const content = ALL[`${current}`];
  return (
    <>
      <EmblaCarousel content={content.contents} options={OPTIONS} />
    </>
  );
};
