import { motion, useAnimation, Variant, easeOut } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type AnimationVariant = 'fadeIn' | 'slideUp' | 'slideRight' | 'slideLeft' | 'scale' | 'none';

interface AnimatedElementProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export default function AnimatedElement({
  children,
  variant = 'fadeIn',
  delay = 0,
  duration = 0.5,
  className = '',
  threshold = 0.1,
}: AnimatedElementProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const variants = {
    hidden: getHiddenVariant(variant),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: easeOut,
      },
    },
  };

  function getHiddenVariant(variant: AnimationVariant): Variant {
    switch (variant) {
      case 'fadeIn':
        return { opacity: 0 };
      case 'slideUp':
        return { opacity: 0, y: 50 };
      case 'slideRight':
        return { opacity: 0, x: -50 };
      case 'slideLeft':
        return { opacity: 0, x: 50 };
      case 'scale':
        return { opacity: 0, scale: 0.8 };
      case 'none':
        return {};
      default:
        return { opacity: 0 };
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          controls.start('visible');
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, isVisible, threshold]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}