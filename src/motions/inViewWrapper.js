import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function InViewWrapper({
  variant,
  initial = "hidden",
  animate = "visible",
  exit,
  style,
  className,
  children,
  key,
  transition,
  custom
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start(animate);
    }
  }, [controls, isInView, animate]);

  return (
    <motion.div
    custom={custom}
      ref={ref}
      animate={controls}
      initial={initial}
      variants={variant}
      className={className}
      style={style}
      exit={exit}
      key={key}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
