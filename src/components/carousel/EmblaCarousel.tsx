import { EmblaOptionsType } from "embla-carousel";
import { useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Content } from "@/const";
import { Box, Text, Link } from "@chakra-ui/react";
import Image from "next/image";
import LinkSvg from "../../../public/link.svg";

type PropType = {
  content: Content[];
  options?: EmblaOptionsType;
};

const EmblaCarousel = (props: PropType) => {
  const { content, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <Box as="section" maxWidth={{ base: "150rem" }} className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <Box className="embla__container" alignItems={"center"}>
          {content.map((i, id) => (
            <Box className="embla__slide" key={id} textAlign={"left"}>
              <Link
                target="_blank"
                href={i.link}
                width={"-moz-max-content"}
                display="flex"
                alignItems={"flex-start"}
                textAlign={"left"}
                flexDirection={"column"}
              >
                <Image
                  src={i.main}
                  alt={i.description}
                  width={500}
                  height={300}
                />
                <Box display="flex" alignItems={"center"}>
                  <Text fontWeight="500" fontSize="1.85rem">
                    {i.title}
                  </Text>
                  <Image
                    style={{ marginLeft: "6px" }}
                    aria-hidden
                    src={LinkSvg}
                    alt="LinkSvg icon"
                    width={16}
                    height={16}
                  />
                </Box>
                <Box display="flex" alignItems={"end"}>
                  <Text fontWeight="350" fontSize="1.55rem">
                    {i.description}
                  </Text>
                </Box>
              </Link>
            </Box>
          ))}
        </Box>
      </div>

      <div className="embla__controls">
        <Box className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </Box>
      </div>
    </Box>
  );
};

export default EmblaCarousel;
