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
  containerClassName,
}: DropdownProps) => {
  const ref = useRef(null);

  useClickAway(ref, (event) => {
    if (typeof onClickAway === "function") {
      onClickAway(event);
    }
  });

  return (
    <div
      className={classNames("flex flex-col relative", containerClassName)}
      ref={ref}
    >
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
                "absolute top-full min-w-full flex flex-col py-1 mt-1 max-h-96 overflow-y-scroll z-10 border-solid border-2 border-slate-200",
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
