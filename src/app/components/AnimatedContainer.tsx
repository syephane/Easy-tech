/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect, ReactNode } from "react";

interface AnimatedContainerProps {
  children: ReactNode;
  className?: string;
  animationDuration?: number; // in seconds
  animationDelay?: number; // in milliseconds
  initialYOffset?: number; // in pixels
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  className = "",
  animationDuration = 0.7, // default 0.7 seconds
  animationDelay = 100, // default 100 milliseconds
  initialYOffset = 20, // default 20 pixels
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // We use a timeout to ensure the component is mounted before we start the animation.
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay); // Use configurable delay

    return () => clearTimeout(timer);
  }, []);

  const containerStyle: React.CSSProperties = {
    transition: `opacity ${animationDuration}s ease-out, transform ${animationDuration}s ease-out`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : `translateY(${initialYOffset}px)`,
  };

  return (
    <div style={containerStyle} className={className}>
      {children}
    </div>
  );
};

export default AnimatedContainer;
