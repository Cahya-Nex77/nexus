import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedCounter = ({ target, suffix = "", duration = 1.6 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = null;
    let frameId;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target, duration]);

  return (
    <motion.span ref={ref} className="font-display text-4xl sm:text-5xl font-bold text-white">
      {value}
      {suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
