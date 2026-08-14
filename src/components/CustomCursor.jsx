import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const HOVER_SELECTOR = "a, button, input, textarea, [data-cursor-hover]";

const CustomCursor = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40, mass: 0.4 });

  const trailX = useSpring(cursorX, { stiffness: 160, damping: 24, mass: 0.6 });
  const trailY = useSpring(cursorY, { stiffness: 160, damping: 24, mass: 0.6 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const handleChange = (event) => setIsDesktop(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMove = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      if (!isVisible) setIsVisible(true);

      const target = event.target;
      setIsHovering(Boolean(target.closest && target.closest(HOVER_SELECTOR)));
    };

    const handleDown = () => setIsPressed(true);
    const handleUp = () => setIsPressed(false);
    const handleLeaveWindow = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.documentElement.addEventListener("mouseleave", handleLeaveWindow);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.documentElement.removeEventListener("mouseleave", handleLeaveWindow);
    };
  }, [isDesktop, isVisible, cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        style={{ translateX: trailX, translateY: trailY }}
        animate={{
          opacity: isVisible ? 0.5 : 0,
          scale: isHovering ? 2.2 : 1,
        }}
        transition={{ scale: { duration: 0.35, ease: "easeOut" } }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-glow/50"
      />
      <motion.div
        style={{ translateX: springX, translateY: springY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPressed ? 0.6 : isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? "#3B9DF8" : "#2563EB",
        }}
        transition={{ scale: { duration: 0.25, ease: "easeOut" } }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-glow"
      />
    </>
  );
};

export default CustomCursor;
