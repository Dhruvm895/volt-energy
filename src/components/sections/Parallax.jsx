import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ParallaxSection() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const value = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / window.innerHeight)
      );
      setProgress(value);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${progress * 50}px)` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80)",
            filter: "brightness(0.4)",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="relative z-10 px-6 max-w-4xl mx-auto text-center space-y-8">
        <div
          style={{
            opacity: progress,
            transform: `translateY(${(1 - progress) * 30}px)`,
          }}
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-sm font-medium text-primary">
            Our Story
          </span>
        </div>

        <div
          style={{
            opacity: progress,
            transform: `translateY(${(1 - progress) * 50}px)`,
          }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Born from Innovation,
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Powered by Science
            </span>
          </h2>
        </div>

        <div
          className="space-y-6"
          style={{
            opacity: progress,
            transform: `translateY(${(1 - progress) * 70}px)`,
          }}
        >
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            VOLT was built by people who believed energy should be clean,
            effective, and consistent. The goal was simple: deliver focus and
            performance without compromise.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every formula is carefully balanced to support mental clarity,
            physical stamina, and long-lasting energy throughout the day.
          </p>
        </div>

        <div
          style={{
            opacity: progress,
            transform: `translateY(${(1 - progress) * 90}px)`,
          }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:shadow-glow-cyan group"
          >
            Read Full Story
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
