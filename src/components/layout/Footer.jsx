import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    Product: ["Flavors", "Nutrition", "Ingredients", "Where to Buy"],
    Company: ["About Us", "Our Story", "Careers", "Press"],
    Support: ["FAQ", "Contact", "Shipping", "Returns"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookies"],
  };

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
  ];

  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                <span className="text-background font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold tracking-tight">VOLT</span>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Premium energy crafted for focus, endurance, and everyday
              performance.
            </p>

            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:bg-primary/10"
                >
                  <Icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 VOLT Energy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
