import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import Header from "./Header";
import Footer from "./Footer";
import "./base.css";
import "./sandbox.css";
import "./embla.css";
import { ALL, Value } from "@/const";

const OPTIONS: EmblaOptionsType = { align: "start" };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const Carou = ({ current }: { current: Value }) => {
  const content = ALL[`${current}`];
  return (
    <>
      <EmblaCarousel content={content.contents} options={OPTIONS} />
    </>
  );
};
