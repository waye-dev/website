"use client";

import Wrapper from "../wrapper";
import React, { useState, useMemo } from "react";
import { InitiativesCard } from "./initiatives-card";
import { motion, AnimatePresence } from "framer-motion";
import { INITIATIVES_FILTER_KEYS, INITIATIVES_SECTION_DATA } from "../../data";

type InititativeFilterKeys = "all" | "program" | "tool" | "research" | "";

const InitiativesSection = () => {
  const [filterKey, setFilterKey] = useState<InititativeFilterKeys>("");

  const handleFilter = (key: string) => [
    ...INITIATIVES_SECTION_DATA.filter((item) => item.filterKey === key),
    INITIATIVES_SECTION_DATA[INITIATIVES_SECTION_DATA.length - 1],
  ];

  const memoizedInitiativesData = useMemo(() => {
    switch (filterKey) {
      case "all":
        return INITIATIVES_SECTION_DATA;
      case "program":
        return handleFilter("program");
      case "tool":
        return handleFilter("tool");
      case "research":
        return handleFilter("research");
      default:
        return INITIATIVES_SECTION_DATA;
    }
  }, [filterKey]);

  return (
    <div className='items-center justify-center mx-auto w-full text-black bg-gray-custom-100'>
      <Wrapper className='flex  mx-auto flex-col gap-[20px] items-center justify-center text-center w-full pb-[20px]'>
        <p className='text-[40px] md:text-[54px] leading-[75.6px]'>Built for builders.</p>
        <p className='text-lg leading-[28.8px] max-w-[650px]'>
          Open-source needs you to keep building. Waye keeps you focused. Get involved, sign up, and let us know what you'd like to see.
        </p>

        <div className='flex items-center gap-2.5 flex-wrap'>
          {INITIATIVES_FILTER_KEYS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilterKey(key as InititativeFilterKeys)}
              className={`border border-black rounded-full  uppercase text-base leading-[25.2px] py-[4.5px] px-[13px] ${
                filterKey === key ? "border-2 bg-blue-custom-500" : "border bg-orange-custom-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </Wrapper>

      <Wrapper>
        <motion.div className='pt-[60px] pb-[114px] max-w-[936px] mx-auto flex flex-col gap-10 md:gap-[60px]'>
          <AnimatePresence mode='sync'>
            {memoizedInitiativesData.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <InitiativesCard {...item} props={{ ...item.props }} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Wrapper>
    </div>
  );
};

export default InitiativesSection;
