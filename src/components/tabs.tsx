"use client";

import { Tabs as Tab } from "@chakra-ui/react";
import { useState } from "react";
import { ALL, Value } from "@/const";
import { Images } from "./images";

const Tabs = () => {
  const [current, setCurrent] = useState<Value>("Photography");

  return (
    <>
      <Tab.Root
        value={current}
        onValueChange={(e) => setCurrent(e.value as Value)}
      >
        <Tab.List justifyContent={"flex-start"}>
          {Object.keys(ALL).map((i) => (
            <Tab.Trigger
              key={i}
              id={i}
              fontSize="1.75rem"
              padding="2rem"
              value={i}
              onClick={() => {
                setCurrent(i as Value);
              }}
            >
              {i}
            </Tab.Trigger>
          ))}
        </Tab.List>
      </Tab.Root>
      <Images current={current} key={current} />
    </>
  );
};

export default Tabs;
