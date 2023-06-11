const sphereImageVariant = (delay) => ({
    visible: {
        scale: 1,
        transition:{
            duration: 1,
            ease: "easeInOut"
        }
    },
    hidden: {
        scale: 0
    }
}) 

export default sphereImageVariant;