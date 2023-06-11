const scaleInVariant = (delay, duration = 1) => ({
  visible: {
    // opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration,
      ease: "easeInOut",
      staggerChildren: 0.5,
    },
  },
  hidden: {
    // opacity: 0,
    scale: 0,
  },
});

export default scaleInVariant;
