"use client";

import { useEffect, useRef, useCallback } from "react";

export function SketchCat() {
  const svgRef = useRef<SVGSVGElement>(null);

  const animate = useCallback((): ReturnType<typeof setTimeout> | undefined => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll<SVGGeometryElement>("path.sketch");
    const fillBody = svg.querySelector<SVGPathElement>(".fill-body");

    // Reset fill
    if (fillBody) {
      fillBody.style.fillOpacity = "0";
      fillBody.style.animation = "none";
    }

    // Reset and re-trigger each path
    paths.forEach((path) => {
      path.style.animation = "none";
      path.style.strokeDashoffset = `${path.getTotalLength()}`;
    });

    // Force reflow before restarting
    void svg.getBoundingClientRect();

    const totalDrawTime = paths.length * 0.08 + 2; // last path delay + draw duration

    paths.forEach((path, i) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.animation = `sketchDraw 2s ease forwards`;
      path.style.animationDelay = `${i * 0.08}s`;
    });

    // Fade in fill after strokes finish
    if (fillBody) {
      fillBody.style.animation = `fillFade 0.6s ease forwards`;
      fillBody.style.animationDelay = `${totalDrawTime}s`;
    }

    // Loop: wait for full cycle then restart
    const loopDelay = (totalDrawTime + 3) * 1000; // 3s pause before restart
    return setTimeout(() => animate(), loopDelay);
  }, []);

  useEffect(() => {
    const timeoutId = animate();
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [animate]);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      className="w-full h-full max-w-[260px] sm:max-w-[320px] lg:max-w-[400px]"
      aria-hidden="true"
    >
      <style>{`
        @keyframes sketchDraw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fillFade {
          from { fill-opacity: 0; }
          to { fill-opacity: 1; }
        }
        .fill-body {
          fill: none;
          fill-opacity: 0;
        }
        .sketch {
          fill: none;
          stroke: #22d3ee;
          stroke-width: 1.1;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        }
      `}</style>

      {/* Body fill - fades in after sketch completes */}
      <path
        className="fill-body"
        d="m108.4 40.2c-1-6.2-6.6-11.2-12.1-11.8 1.5-0.6 3.6-1.7 8.2-1.6-2.5-0.4-5.8 0.2-8.2 1.3 0.7-2.9 0.3-5.4-0.9-8.2-1.3-3.3-4.6-5.9-7.3-7.8 0.6 1.4 1.5 3.9 1.2 5.4-1.6-2.2-3.4-4.3-8.9-5.6-2.5-0.4-5.3-7.3-15.2-8.8 3.1 1.7 4.1 4 1.1 5.6-3.5 1.8-14.7 1.8-14.7-6.3-2.1 1.7-6.5 6.5-5.4 13.7l0.4 1.1c-3.9-1.3-9.1-0.8-12.4-3.3-2.4-1.8-4.4-5.1-4.7-8.5-2.5 4.8-3 8.5-3.3 14.1-3.2 0.1-7.1-2.9-8.9-7.5-0.1 4.1 0.3 10.9 5.2 16-2.5 0.4-7 0-10.2-6.4-1.5 5.3 0 11.3 4.8 14.6 3.8 3 2.4 5.3-0.9 5.2-0.8 0-1.5-0.2-2.2-0.4 0.9 2.6 4 7 7.7 7.7 0.6 0.8 1.7 2 2.3 2.3 0.3 2.5 1.3 6.2 4.1 6.5-0.7 2.9 1.4 6.9 1 11.9-0.6 5.2-1.7 7.2 0.4 14.7l5.9 18c2.4 6.5 1 13 9.2 14.1 2.7 0.4 7.3 0.7 10 0 4.9-0.8 18-7.8 24.6-13.1 5.4-4.2 6.2-8.2 7.2-11.7 1.7-6.5 2.7-10.7 3.6-8 0.5 3.6 4.5 4.8 7.6 2l2.5-2.2c2.4-2.3 3.8-5.3 3.5-9.7-0.1-1.6 0-5.6 0-8.3 1.5-1.3 2.8-7.3 3.9-12.7 0.4-3-0.9-6.4-1.6-7.6 0.5-0.4 2.5 1.6 3.2 2.7 0.1-2.9-4.5-10-5.5-11.6 0-1.4 3.3 1.1 6 4.1l-1.2 0.1z"
      />

      {/* Sketch strokes */}
      <path className="sketch" d="m24 51.1c0-1.2 0-6 2.5-10.5 2.4-4.6 7.1-8 9-5-2.6 0.9-5.9 5.8-5.9 13.5-0.4 4.9-1.1 8-1.9 8.4-2.6 0-3.6-4-3.7-6.4z"/>
      <path className="sketch" d="m29.5 49.5c1.9-3.1 3.4-8.1 5.4-11.5 1.6-2.8 0-3.6-3.5-2.8"/>
      <path className="sketch" d="m35.5 35.5c3-0.5 4.5 2 9 2.1 6.1 0.1 9-4.1 12.6-5.9 4.5-2.1 7 0.4 10.5 2.3 3.1 1.7 6.9 2.9 10.5 2.9 4.1 0 10.8 0 14-6.3 2.4-5-1.5-3.7-5-1.6s-7.1 4.4-8.7 7.6c-1.8 3.6-1 12.9 1.7 15.9 2.6 2.7 5.5 3 6.1 8 0.7 3.6 0.2 10.9-0.6 13.9-0.2 0.5 3.3 1.5 3.3 0.6 0.3-3 1.3-8.1 4.5-10s3.7-3.4 6.2-3.6c1.9 0 4 1.7 3.9 4.7s0 6.1 0.1 7.9c0 2.9-1.2 5.9-3.6 8l-2.6 2.2c-3 2.7-7 3.4-7.7-0.8-0.8-2.5-2 1.6-3.6 8-1 4-2.1 7.1-6.7 10.8-6.3 5-19.3 12.4-24.8 13.9-2.7 0.8-7.2 0.5-10 0.1-8-1-7.6-6.5-9.1-12.2-1.9-5.6-5.4-15.9-6.5-19.9-2-7-0.8-10.2 0-15.1 0.5-4.9-2.1-8.4-0.8-11.4 1.4-3.2 5.2-2.6 7.9-2 3.3 0.8 5.8 1.9 6.4 3.4 1.9 2.5-0.4 7.1-3.4 13.6-1.6 3.4-2.5 5.5-1.6 7.9 0.4 1.1 1.9 2.9 3.5 3 4.6 0.9 5.5 4.5 4.5 6.9-1.4 2.6-2.6 0.6-5.1 1-2.3 0.2-5.2 4.2-1.3 3.7 1.4-0.2 2.4-0.7 4-0.5 1.5 0.3 3.4 0.4 4.9 0.4 3.5 0 8.6-0.4 9.9-0.4-2.5 2.5-6.3 5.3-12.5 5.3-2.8 0-5.4-0.4-6.8-3.2"/>
      <path className="sketch" d="m51.4 76.5c2.1 2 2.5 4.9 0.1 6.9 0.6 0.2 3-1.8-0.1-6.9z"/>
      <path className="sketch" d="m44 82c-0.1-0.6 1.4-1.5 2.9-1.4 2.6 0.3 3.5 1.6 1.6 2l-4.5-0.6z"/>
      <path className="sketch" d="m43.9 92c1.8 0.6 2.6-0.9 5.1-0.6 2.9 0.2 7.9 3 9.1 3 1.4 0 1.8-0.3 1.5-0.9-0.7-0.5-1.2 0.4-2 0.6"/>
      <path className="sketch" d="m39.9 83.1c-0.4 0-3.3-2.1-3-5.6l0.7 2.1 2.1 2 2.2 1.9-2-0.4z"/>
      <path className="sketch" d="m28.2 58.6c2.3-1.5 5.7-0.6 9.4 0 1.8 0.4 4.5 1 4.8 0"/>
      <path className="sketch" d="m29.6 64.9c0.9-3 2.5-4.7 5.9-4.7s5 1.3 5.9 4.7c-2-1.9-4.5-2.9-6.8-2.8-2.6 0-3.2 1.8-5 2.8z"/>
      <path className="sketch" d="m31.1 63.9c-0.5 2.7 1.4 3.1 3.3 2.7l7-1.2"/>
      <path className="sketch" d="m32.4 63c-0.8 1.1 0 3.4 1.7 3.4 2.3 0 3.3-3.9 0.9-4.3-1.1-0.1-2.1 0.3-2.6 0.9z"/>
      <path className="sketch" d="m55.4 62.1c1.5-1.5 2.5-2.5 5.5-2.6 3.2 0 6 1.2 8.2 2.6 2 1.3 1 2.1-1 1.8-2.2-0.5-4.6-2.3-8-2.4-1.7 0-2.9 0.7-5.4 3.6 1.7-0.2 2.5 0 4 0.4 3.4 1 9.2-0.1 9.3-1.3"/>
      <path className="sketch" d="m58.4 62c-1 1-0.8 3.4 2 3.6 2.5 0 3-3.7 0.7-4-1.1-0.1-2.2-0.1-2.7 0.4z"/>
      <path className="sketch" d="m51.4 57.1c3.6-1.1 8.7-2.6 13-2.5 3.7-0.1 9 2.9 9.8 3.9l-3.7-0.9c-6.1-0.7-7.9-0.1-12.4 0.6-3.5 0.7-8.1 1.3-7.5-0.6l0.8-0.5z"/>
      <path className="sketch" d="m9.7 37.5c1.8 2.1 3.8 3.6 6.8 3.9 3 0.1 4.9-2 0.9-5-4.3-3.3-6.5-8.8-5-14.8 1.6 3.9 5.2 7.4 10.1 6.4-3.9-3.9-5.3-9.4-5.1-16 1.6 4 5.2 7.5 8.7 7.5 0.5-5.4 0.5-8.9 3.4-14.1 0.4 4 2.9 7.7 5.6 9 3.4 1.6 7.3 1.6 11.4 2.7 1.6 4.5 4.9 8.8 8.7 9.8 0.7 2-3.1 6.7-8.2 7.2-0.6-2.2-2.6-4.7-6-6.2-5.9-2.7-9.3-0.5-8 2 0.9 2 5.6 4.5 10.6 4.6 4.5 0.1 10.9-2.4 11.5-7.9 0-4.2-4.7-7.7-8.5-9-1.7-6.6 0.5-11.2 4.9-15.2-0.4 5.6 5.1 7.7 10.4 7.3 5.6-0.1 9.5-3.3 3.2-6.7 7 0.6 10.1 4.5 13.4 7.6 1.4 1.3 1.6 1 3.1 1.5 3.3 0.6 5.9 2.3 7.6 5.4 0.4-0.4-0.3-3.4-1.2-5.4 4.6 2.8 7.6 5.5 8.6 10.5 0.5 2 0.3 4-0.4 5.8 6.4 0.5 12.4 5 13.5 11.5-1.6-1.8-4.2-4.8-6.1-4.8-1.1 0 5.3 7.3 5.5 12.4-0.7-1-3-3.4-3.2-2.6 1 1.7 2 5.1 1.5 8.1l-1.2 5.6c-0.7 2.8-1.6 5.5-2.6 6.6"/>
      <path className="sketch" d="m77.9 36.9c5 0 11.5-0.4 14.5-7.4"/>
      <path className="sketch" d="m78 28.4c-2.6-0.8-6-2-10.1-2.4-3.4 0-6.8 1.6-10 1.4l-2.7-0.3"/>
      <path className="sketch" d="m96.2 28.1c2.7-0.7 4.8-1.7 8.4-1.4"/>
      <path className="sketch" d="m13.1 35.6c-0.2 3.9 1.3 10.9 8.5 13.1"/>
      <path className="sketch" d="m93.1 27.9c-1 1.7-3.5 1.7-8.5 1.7-1.7-0.1-3.6-0.2-6.6-1.1"/>
      <path className="sketch" d="m93.4 72.4c0.5 2.6 0.5 3.6-0.5 4.6-1.8 1.9-0.3 4.1 2.1 2.1 2-1.1 2.4 0.3 3.9-0.2 1.2-0.4 3.2-1.8 2.8-5.4-0.6-5 0.8-7.6-1.6-9.1-3-0.8-5 5.7-6.7 7.6v0.4z"/>
    </svg>
  );
}
