import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Droplet, Sparkles, Shield } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Instant Energy",
      description:
        "A fast-acting formula designed to deliver smooth, sustained energy when you need it most.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Droplet,
      title: "Zero Sugar",
      description:
        "Clean energy without the crash. Enjoy full flavor with no added sugar.",
      gradient: "from-accent to-purple-400",
    },
    {
      icon: Sparkles,
      title: "Enhanced Focus",
      description:
        "Supports mental clarity and concentration to help you stay sharp and productive.",
      gradient: "from-gold to-yellow-400",
    },
    {
      icon: Shield,
      title: "Natural Ingredients",
      description:
        "Crafted with carefully selected ingredients and no unnecessary additives.",
      gradient: "from-primary to-cyan-400",
    },
  ];

  return (
    <section id="energy" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Engineered for
            <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Peak Performance
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Every can is built with precision to support energy, focus, and
            everyday performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, description, gradient }) => (
            <Card
              key={title}
              className="group relative bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:shadow-card overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 transition-all duration-500" />

              <CardContent className="relative p-6 space-y-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} p-0.5 group-hover:scale-110 transition-transform`}
                >
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-glow transition-colors" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </CardContent>

              <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
