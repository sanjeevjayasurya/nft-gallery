import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const PageTransition = ({ children }) => {
  const { asPath } = useRouter();
  const variants = {
    out: {
      opacity: 0,
      transition: {
        duration: 0.75,
      },
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
  };

  return (
    <div className="effect-1">
      <AnimatePresence initial={true} mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          // exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
