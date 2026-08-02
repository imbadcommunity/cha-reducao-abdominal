"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { animate, motion, useMotionValue } from "framer-motion";

interface HorizontalShowcaseProps {
  children: ReactNode[];
}

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const DURATION = 0.85;

const DIM = { opacity: 0.5, scale: 0.965, blur: 6 };

export default function HorizontalShowcase({
  children,
}: HorizontalShowcaseProps) {
  const count = children.length;

  const runwayRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const trackX = useMotionValue(0);

  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const animatingRef = useRef(false);
  const inZoneRef = useRef(true);
  const wheelAccum = useRef(0);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const touchLastRef = useRef<{ x: number; y: number } | null>(null);
  const touchLockRef = useRef<"h" | "v" | null>(null);

  const animateScrollTo = useCallback((targetY: number) => {
    const startY = window.scrollY;
    const diff = targetY - startY;
    if (Math.abs(diff) < 2) return;
    return animate(0, 1, {
      duration: DURATION,
      ease: EASE_EXPO,
      onUpdate: (v) => window.scrollTo(0, startY + diff * v),
    });
  }, []);

  const setSlide = useCallback(
    (
      i: number,
      opts: { opacity?: number; scale?: number; blur?: number }
    ) => {
      const el = slideRefs.current[i];
      if (!el) return;
      const to: Record<string, number | string> = {};
      if (opts.opacity !== undefined) to.opacity = opts.opacity;
      if (opts.scale !== undefined) to.scale = opts.scale;
      if (opts.blur !== undefined)
        to.filter = opts.blur > 0 ? `blur(${opts.blur}px)` : "blur(0px)";
      return animate(el, to, { duration: DURATION, ease: EASE_EXPO });
    },
    []
  );

  const applySlides = useCallback(
    (current: number) => {
      for (let i = 0; i < count; i++) {
        setSlide(
          i,
          i === current
            ? { opacity: 1, scale: 1, blur: 0 }
            : { opacity: DIM.opacity, scale: DIM.scale, blur: DIM.blur }
        );
        const inner = innerRefs.current[i];
        if (inner)
          animate(inner, { x: 0, scale: 1.06 }, { duration: DURATION, ease: EASE_EXPO });
      }
    },
    [count, setSlide]
  );

  const goTo = useCallback(
    (targetIndex: number) => {
      if (animatingRef.current) return;
      const clamped = Math.max(0, Math.min(targetIndex, count - 1));
      const from = indexRef.current;
      if (clamped === from) return;
      animatingRef.current = true;
      indexRef.current = clamped;
      setIndex(clamped);

      const width = window.innerWidth;
      const jobs: Promise<unknown>[] = [
        Promise.resolve(
          animate(trackX, -clamped * width, { duration: DURATION, ease: EASE_EXPO })
        ),
      ];

      if (from < count) {
        const p = setSlide(from, DIM);
        if (p) jobs.push(Promise.resolve(p));
        const outInner = innerRefs.current[from];
        if (outInner)
          jobs.push(
            Promise.resolve(
              animate(outInner, { x: width * 0.04, scale: 1.06 }, { duration: DURATION, ease: EASE_EXPO })
            )
          );
      }
      if (clamped < count) {
        const p = setSlide(clamped, { opacity: 1, scale: 1, blur: 0 });
        if (p) jobs.push(Promise.resolve(p));
        const inInner = innerRefs.current[clamped];
        if (inInner)
          jobs.push(
            Promise.resolve(
              animate(inInner, { x: 0, scale: 1.06 }, { duration: DURATION, ease: EASE_EXPO })
            )
          );
      }

      Promise.all(jobs).then(() => {
        animatingRef.current = false;
      });

      animateScrollTo(clamped * window.innerHeight);
    },
    [count, setSlide, trackX, animateScrollTo]
  );

  const next = useCallback(() => {
    if (animatingRef.current) return;
    if (indexRef.current >= count - 1) {
      animatingRef.current = true;
      const exit = animateScrollTo(runwayRef.current?.offsetHeight ?? 0);
      if (exit) Promise.resolve(exit).then(() => (animatingRef.current = false));
      else animatingRef.current = false;
      return;
    }
    goTo(indexRef.current + 1);
  }, [count, goTo, animateScrollTo]);

  const prev = useCallback(() => {
    if (animatingRef.current) return;
    if (indexRef.current <= 0) return;
    goTo(indexRef.current - 1);
  }, [goTo]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const onWheel = (e: WheelEvent) => {
      if (!inZoneRef.current) return;
      e.preventDefault();
      if (animatingRef.current) return;
      wheelAccum.current += e.deltaY;
      if (Math.abs(wheelAccum.current) < 48) return;
      const dir = wheelAccum.current > 0 ? 1 : -1;
      wheelAccum.current = 0;
      if (dir > 0) next();
      else prev();
    };

    const onTouchStart = (e: TouchEvent) => {
      if (!inZoneRef.current) return;
      const t = e.touches[0];
      touchStartRef.current = { x: t.clientX, y: t.clientY };
      touchLastRef.current = { x: t.clientX, y: t.clientY };
      touchLockRef.current = null;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!inZoneRef.current || !touchStartRef.current) return;
      const t = e.touches[0];
      const dx = t.clientX - touchStartRef.current.x;
      const dy = t.clientY - touchStartRef.current.y;
      if (!touchLockRef.current) {
        if (Math.abs(dx) > 8 || Math.abs(dy) > 8) {
          touchLockRef.current = Math.abs(dx) >= Math.abs(dy) ? "h" : "v";
        }
      }
      touchLastRef.current = { x: t.clientX, y: t.clientY };
      if (touchLockRef.current) e.preventDefault();
    };

    const onTouchEnd = () => {
      if (!inZoneRef.current || !touchStartRef.current) return;
      const dx = (touchLastRef.current?.x ?? 0) - touchStartRef.current.x;
      const dy = (touchLastRef.current?.y ?? 0) - touchStartRef.current.y;
      touchStartRef.current = null;
      touchLockRef.current = null;
      if (animatingRef.current) return;
      if (Math.abs(dx) > 42 || Math.abs(dy) > 42) {
        if (Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) next();
          else prev();
        } else {
          if (dy < 0) next();
          else prev();
        }
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!inZoneRef.current) return;
      const k = e.key;
      const isNav =
        k === "ArrowDown" ||
        k === "ArrowRight" ||
        k === "ArrowUp" ||
        k === "ArrowLeft" ||
        k === "PageDown" ||
        k === "PageUp" ||
        k === " ";
      if (!isNav) return;
      e.preventDefault();
      if (animatingRef.current) return;
      if (
        k === "ArrowDown" ||
        k === "ArrowRight" ||
        k === "PageDown" ||
        k === " "
      )
        next();
      else prev();
    };

    const onScroll = () => {
      const maxPinned = (runwayRef.current?.offsetHeight ?? 0) - window.innerHeight;
      const inZone = window.scrollY <= maxPinned + 4;
      inZoneRef.current = inZone;
      stage.style.touchAction = inZone ? "none" : "pan-y";
      if (!inZone || animatingRef.current) return;
      const target = Math.max(
        0,
        Math.min(count - 1, Math.round(window.scrollY / window.innerHeight))
      );
      if (target !== indexRef.current) {
        indexRef.current = target;
        setIndex(target);
        animate(trackX, -target * window.innerWidth, {
          duration: 0.55,
          ease: EASE_EXPO,
        });
        applySlides(target);
      }
    };

    const onResize = () => {
      animate(trackX, -indexRef.current * window.innerWidth, {
        duration: 0.2,
        ease: "linear",
      });
    };

    stage.addEventListener("wheel", onWheel, { passive: false });
    stage.addEventListener("touchstart", onTouchStart, { passive: true });
    stage.addEventListener("touchmove", onTouchMove, { passive: false });
    stage.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    onScroll();

    return () => {
      stage.removeEventListener("wheel", onWheel);
      stage.removeEventListener("touchstart", onTouchStart);
      stage.removeEventListener("touchmove", onTouchMove);
      stage.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [count, goTo, next, prev, trackX, applySlides]);

  return (
    <div
      ref={runwayRef}
      className="relative bg-black"
      style={{ height: `${(count + 1) * 100}vh` }}
    >
      <div
        ref={stageRef}
        className="sticky top-0 h-screen overflow-hidden bg-black"
      >
        <motion.div
          className="flex h-full will-change-transform"
          style={{ x: trackX, width: `${count * 100}vw` }}
        >
          {children.map((child, i) => (
            <div
              key={i}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              className="relative w-screen h-screen shrink-0 overflow-hidden will-change-transform"
              style={{
                opacity: i === 0 ? 1 : 0,
                transform: i === 0 ? "none" : "scale(0.98)",
                filter: i === 0 ? "blur(0px)" : "blur(8px)",
              }}
            >
              <div
                ref={(el) => {
                  innerRefs.current[i] = el;
                }}
                className="w-full h-full will-change-transform"
                style={{ transform: "scale(1.06)" }}
              >
                {child}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Progress indicator */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2.5">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para o produto ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === index
                  ? "w-2 bg-white"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
