import React, { useEffect, useRef, useState } from "react";

const SmoothCursor = () => {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    // Detect if device supports touch
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      setShowCursor(false);
      return; // Don't initialize cursor on touch devices
    } else {
      setShowCursor(true);
    }

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15; // smoothing factor
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  if (!showCursor) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: -0.5,
        width: 24,
        height: 24,
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        pointerEvents: "none",
        transform: "translate3d(0, 0, 0)",
        transition: "background-color 0.2s ease",
        mixBlendMode: "difference",
        zIndex: 9999,
        boxShadow: "0 0 8px 2px rgba(255,255,255,0.7)",
        willChange: "transform",
      }}
    />
  );
};

export default SmoothCursor;
