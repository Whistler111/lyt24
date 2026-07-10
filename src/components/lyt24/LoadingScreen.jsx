import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), reduceMotion ? 300 : 1400);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian"
        >
          <div className="text-center">
            <motion.div
              initial={reduceMotion ? {} : { opacity: 0, scale: 0.8 }}
              animate={reduceMotion ? {} : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="font-heading text-3xl font-bold tracking-tight"
            >
              <span className="text-white">LYT24</span>
              <span className="text-aqua"> Tech</span>
            </motion.div>
            <motion.div
              className="mx-auto mt-4 h-0.5 w-24 bg-gradient-to-r from-cobalt to-aqua"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: reduceMotion ? 0.3 : 1,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
