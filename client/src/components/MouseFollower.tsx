import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-50 hidden md:block mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      
      {/* Glow Effect */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 rounded-full bg-primary/10 pointer-events-none z-0 hidden md:block blur-3xl"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-primary/30 pointer-events-none z-50 hidden md:block"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
    </>
  );
}
