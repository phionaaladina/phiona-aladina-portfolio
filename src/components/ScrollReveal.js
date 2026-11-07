import React, { useEffect, useRef, useState } from "react";

const ScrollReveal = ({
  children,
  animation = "fade-up", // 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade'
  delay = 0,
  duration = 650,
  threshold = 0.12,
  className = "",
  style = {},
  once = false,
  as: Tag = "div",
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const el = domRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { 
        threshold, 
        rootMargin: "0px 0px -40px 0px" 
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <Tag
      ref={domRef}
      className={`scroll-reveal-item reveal-${animation} ${isVisible ? "is-revealed" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;
