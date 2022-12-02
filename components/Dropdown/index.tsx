import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { useClickAway } from "react-use";

import { DropdownProps } from "./types";

export const Dropdown = ({
  onClickAway,
  children,
  cta,
  shouldShow,
  className,
}: DropdownProps) => {
  const ref = useRef(null);

  useClickAway(ref, (event) => {
    if (typeof onClickAway === "function") {
      onClickAway(event);
    }
  });

  return (
    <div className="flex flex-col relative" ref={ref}>
      {cta}
      <AnimatePresence>
        {shouldShow && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className={classNames(
              twMerge(
                "absolute top-full min-w-full flex flex-col shadow-lightSmall py-1 bg-light-gray-1 dark:bg-dark-gray-1 rounded-md mt-1 max-h-96 overflow-y-scroll z-10 border border-light-gray-3",
                className
              )
            )}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
