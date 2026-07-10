import { useState, useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export default function StatCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setCount(value);
      return;
    }
    const duration = 1800;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value, reduceMotion]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-3xl font-bold text-white md:text-4xl">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-xs text-steel md:text-sm">{label}</div>
    </div>
  );
}
