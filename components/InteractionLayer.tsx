"use client";

import { useEffect, useState } from "react";

type Point = {
  x: number;
  y: number;
};

type Burst = Point & {
  id: number;
};

const sparkAngles = [0, 60, 120, 180, 240, 300];

export default function InteractionLayer() {
  const [cursor, setCursor] = useState<Point | null>(null);
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        return;
      }

      setCursor({ x: event.clientX, y: event.clientY });
    };

    const handlePointerDown = (event: PointerEvent) => {
      const id = Date.now() + Math.round(Math.random() * 1000);
      const burst = { id, x: event.clientX, y: event.clientY };

      setBursts((current) => [...current.slice(-5), burst]);
      window.setTimeout(() => {
        setBursts((current) => current.filter((item) => item.id !== id));
      }, 620);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60]">
      {cursor ? (
        <div
          className="guild-cursor-aura"
          style={{ left: cursor.x, top: cursor.y }}
        />
      ) : null}

      {bursts.map((burst) => (
        <div key={burst.id} className="guild-burst" style={{ left: burst.x, top: burst.y }}>
          <span className="guild-burst-ring" />
          <span className="guild-burst-core" />
          {sparkAngles.map((angle) => (
            <span
              key={angle}
              className="guild-spark"
              style={{ transform: `rotate(${angle}deg) translateX(34px)` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
