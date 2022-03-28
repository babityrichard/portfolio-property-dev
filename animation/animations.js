export const pageTransition = {
    hidden: {
        opacity: 0,
        y: 50
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.2
        }
    },
    exit: {
        opacity: 0,
        y: 50,
        transition: {
            duration: 1
        }
    }
}

export const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 }}
}

export const heroContainerAnim = {
    hidden: { x: 200},
    show: { x: 0, transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 } }
}

export const aboutAnim = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1, 
        transition: {
            duration: 1,
        }
    }
}

export const fade = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { ease: 'easeInOut', duration: 0.7 }
    }
}
