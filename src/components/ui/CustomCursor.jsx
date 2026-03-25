import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Smooth springs for trailing effect
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXP = useSpring(cursorX, { stiffness: 150, damping: 15, mass: 0.5 });
  const cursorYP = useSpring(cursorY, { stiffness: 150, damping: 15, mass: 0.5 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' || 
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') || 
        e.target.closest('button') ||
        e.target.tagName.toLowerCase() === 'input' ||
        e.target.tagName.toLowerCase() === 'textarea' ||
        e.target.closest('.group') // Often used for interactive elements
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Tiny solid dot that perfectly tracks cursor without spring */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white  rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Outer vibrant glowing multi-colored aura that trails behind */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[99] blur-sm bg-gradient-to-tr from-blue-600 via-indigo-500 to-pink-500 opacity-60 flex items-center justify-center"
        style={{
          x: cursorXP,
          y: cursorYP,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.3 : 0.6,
          rotate: isHovering ? 180 : 0
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      >
        <div className="w-full h-full rounded-full border border-white/30" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
