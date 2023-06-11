export const carouselVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        transition:{delay:0.7,duration:0.7}
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition:{delay:0.7,duration:0.7}
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        transition:{duration:0.7}
      };
    }
  };