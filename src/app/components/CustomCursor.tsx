"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners for hoverable elements
    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll(
        'a, button, [role="button"], .cursor-hover, input, textarea'
      );

      hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setIsHovering(true);
          const element = el as HTMLElement;
          if (element.dataset.cursorVariant) {
            setCursorVariant(element.dataset.cursorVariant);
          } else if (el.tagName === 'A' || el.tagName === 'BUTTON') {
            setCursorVariant('hover');
          }
        });

        el.addEventListener('mouseleave', () => {
          setIsHovering(false);
          setCursorVariant('default');
        });
      });
    };

    if (!isMobile) {
      window.addEventListener('mousemove', updateMousePosition);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      
      // Initial setup
      addHoverListeners();
      
      // Re-add listeners when DOM changes (for dynamic content)
      const observer = new MutationObserver(addHoverListeners);
      observer.observe(document.body, { childList: true, subtree: true });

      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('resize', checkMobile);
        observer.disconnect();
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1,
      backgroundColor: 'rgba(120, 147, 61, 0.8)',
      mixBlendMode: 'difference' as const,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 2,
      backgroundColor: 'rgba(120, 147, 61, 0.6)',
      mixBlendMode: 'difference' as const,
    },
    click: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      scale: 0.8,
      backgroundColor: 'rgba(120, 147, 61, 1)',
      mixBlendMode: 'difference' as const,
    }
  };

  const currentVariant = isClicking ? 'click' : isHovering ? 'hover' : 'default';

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 768px) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
      
      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[10000]"
        animate={currentVariant}
        variants={variants}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] border border-primary/30"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: isClicking ? 0.3 : 0.6,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.2,
        }}
      />
    </>
  );
} 