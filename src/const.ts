import Cny_2020 from "../public/cny_2020.jpg";
import Cny_2021 from "../public/cny_2021.jpg";
import testimonial from "../public/testimonial_video.jpg";
import home_tour_1 from "../public/home_tour_1.jpg";
import home_tour_2 from "../public/home_tour_2.jpg";
import home_tour_3 from "../public/home_tour_3.jpg";
import home_tour_4 from "../public/home_tour_4.jpg";
import { StaticImageData } from "next/image";

export const photos = [
  {
    title: "106 Simei St 1",
    link: "https://starryhomestead.com/project/106-simei-st-1/",
    description: "Shot and edited.",
    main: "https://starryhomestead.com/wp-content/uploads/2023/02/106-Simei-St-1.webp",
  },
  {
    title: "115 Potong Pasir Ave 1",
    description: "Shot and edited.",
    link: "https://starryhomestead.com/project/115-potong-pasir-ave-1/",
    main: "https://starryhomestead.com/wp-content/uploads/2023/02/115-Potong-Pasir-Ave-1-scaled.webp",
  },
  {
    title: "165 Tampines St 12",
    description: "Shot and edited.",
    link: "https://starryhomestead.com/project/165-tampines-st-12/",

    main: "https://starryhomestead.com/wp-content/uploads/2023/02/165-Tampines-St-12-4.webp",
  },
  {
    title: "468B Fernvale Link",
    description: "Shot and edited.",
    link: "https://starryhomestead.com/project/468b-fernvale-link/",
    main: "https://starryhomestead.com/wp-content/uploads/2023/02/468B-Fernvale-Link.webp",
  },
];

export const videos = [
  {
    title: "CNY 2020 Corporate Shoot",
    description: "Shot, directed and edited a corporate video",
    link: "https://www.facebook.com/starryhomestead/videos/575631479926047",
    main: Cny_2020,
  },
  {
    title: "CNY 2021 Corporate Shoot",
    description: "Shot, directed and edited a corporate video",
    link: "https://www.facebook.com/starryhomestead/videos/234507091611099/",
    main: Cny_2021,
  },
  {
    title: "Testimonial Video",
    description: "Shot, directed and edited a testimonial video",
    link: "https://www.facebook.com/starryhomestead/videos/117332350307714/",
    main: testimonial,
  },
  {
    title: "Home Tour - Muji Style",
    description: "Shot and edited a home tour video for advertising purposes.",
    link: "https://www.facebook.com/starryhomestead/videos/307857196965201/",
    main: home_tour_1,
  },
  {
    title: "Home Tour - Scandinavian Style",
    description: "Shot and edited a home tour video for advertising purposes.",
    link: "https://www.facebook.com/starryhomestead/videos/2893270330791272/",
    main: home_tour_2,
  },
  {
    title: "Home Tour - Modern Style",
    description: "Shot and edited a home tour video for advertising purposes.",
    link: "https://www.facebook.com/starryhomestead/videos/773643516496179/",
    main: home_tour_3,
  },
  {
    title: "Home Tour - Modern Classic Style",
    description: "Shot and edited a home tour video for advertising purposes.",
    link: "https://www.facebook.com/starryhomestead/videos/160736735211188/",
    main: home_tour_4,
  },
];

export type AllContents = { [key in Value]: { contents: Content[] } };

export const ALL: AllContents = {
  Photography: {
    contents: photos,
  },
  Videography: {
    contents: videos,
  },
};

export type Value = "Photography" | "Videography";

export interface Content {
  title: string;
  description: string;
  main: string | StaticImageData;
  link: string;
}
