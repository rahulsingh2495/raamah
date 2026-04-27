import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";

export function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });
  const displayValue = useTransform(spring, (current) => 
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}
