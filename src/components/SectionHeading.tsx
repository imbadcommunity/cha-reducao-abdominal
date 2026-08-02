"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
}

export default function SectionHeading({
  kicker,
  title,
  highlight,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <ScrollReveal
      className={`mb-14 sm:mb-16 max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      }`}
    >
      <p className="section-kicker mb-4">{kicker}</p>
      <h2
        className={`section-title ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className={dark ? "metal-text" : "text-brand"}>{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            dark ? "text-white/60" : "text-slate-mid"
          }`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
