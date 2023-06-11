const bulletTextVariant = (delay, xH = -30, yH = 30, duration = 0.7) => ({
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay,
      ease: "easeInOut",
      duration,
    },
  },
  hidden: {
    opacity: 0,
    x: xH,
    y: yH,
  },
  springMovementYAxis: {
    y: [20, -20, 20],
    transition: { duration: 4, delay, repeat: Infinity, ease: "easeInOut" },
  },
});

export default bulletTextVariant;
