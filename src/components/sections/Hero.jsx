import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />

      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Premium Energy Formula
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                Unleash Your
                <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Inner Volt
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
                Clean energy engineered for focus, endurance, and peak daily
                performance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:shadow-glow-cyan group"
              >
                Discover VOLT
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Natural</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Zero</div>
                <div className="text-sm text-muted-foreground">Sugar</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">12h</div>
                <div className="text-sm text-muted-foreground">Energy</div>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />

              <img
                src="/public/main.png"
                alt="VOLT Energy Drink"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
              />

              <div className="absolute top-1/4 -left-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl animate-glow" />
              <div
                className="absolute bottom-1/4 -right-4 w-32 h-32 bg-primary-glow/20 rounded-full blur-3xl animate-glow"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
