import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    {
      name: "VOLT Cyan",
      flavor: "Arctic Blast",
      description:
        "A crisp, refreshing blend with a cool finish designed for focus and sustained energy.",
      image:
        "./public/volt_cyan.png",
      gradient: "from-primary to-primary-glow",
      rating: 4.9,
      reviews: 1247,
    },
    {
      name: "VOLT Purple",
      flavor: "Cosmic Berry",
      description:
        "A bold mixed berry fusion with a subtle citrus kick for intense flavor lovers.",
      image:
       "./public/volt_purple.png",
      gradient: "from-accent to-purple-500",
      rating: 4.8,
      reviews: 982,
    },
    {
      name: "VOLT Gold",
      flavor: "Tropical Thunder",
      description:
        "A smooth tropical blend delivering premium energy with a clean finish.",
      image:
        "./public/volt_yellow.png",
      gradient: "from-gold to-yellow-500",
      rating: 4.9,
      reviews: 856,
    },
  ];

  const product = products[activeIndex];

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Choose Your
            <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Power Source
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three carefully crafted flavors built for performance and taste.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative flex justify-center">
            <div className="relative animate-float">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 blur-[120px] rounded-full`}
              />
              <img
                src={product.image}
                alt={product.name}
                className="relative z-10 max-w-md w-full drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              {products.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => setActiveIndex(index)}
                  className={`flex-1 p-4 rounded-xl border transition-all ${
                    activeIndex === index
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card/50 hover:border-primary/50"
                  }`}
                >
                  <div
                    className={`h-2 w-full rounded-full bg-gradient-to-r ${item.gradient} mb-2`}
                  />
                  <span className="text-sm font-medium">
                    {item.name.split(" ")[1]}
                  </span>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-3xl font-bold">{product.name}</h3>
                <p className="text-xl text-primary font-medium">
                  {product.flavor}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4">
                <div>
                  <div className="text-2xl font-bold text-primary">160mg</div>
                  <div className="text-xs text-muted-foreground">Caffeine</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">0g</div>
                  <div className="text-xs text-muted-foreground">Sugar</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">25</div>
                  <div className="text-xs text-muted-foreground">Calories</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div>
                  <div className="text-3xl font-bold">₹150</div>
                  <div className="text-sm text-muted-foreground">Per can</div>
                </div>

                <Button
                  size="lg"
                  className={`bg-gradient-to-r ${product.gradient} text-white hover:shadow-glow-cyan`}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
