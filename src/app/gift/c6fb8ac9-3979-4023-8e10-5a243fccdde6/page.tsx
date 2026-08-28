"use client";

import { useState, useEffect, FormEvent } from "react";
import confetti from "canvas-confetti";
import { Gift, UtensilsCrossed, Palette, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PASSWORD = "toni30";
const STORAGE_KEY = "gift-c6fb8ac9-auth";

const restaurants = [
  {
    name: "Norrlyst",
    url: "https://www.earlybird.dk/restaurant/norrlyst?content=menu",
  },
  {
    name: "Beviamo",
    url: "https://www.earlybird.dk/restaurant/beviamo-1?content=menu&active=672",
  },
  {
    name: "Norrlyst i Tårnet",
    url: "https://www.earlybird.dk/restaurant/norrlyst-i-tarnet?content=menu&active=705&view-menu=19003",
  },
  {
    name: "Odette",
    url: "https://www.earlybird.dk/restaurant/odette",
  },
];

function fireConfetti() {
  const duration = 4000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors: ["#ff6b9d", "#c44dff", "#ffd93d", "#6bcb77", "#4d96ff"],
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors: ["#ff6b9d", "#c44dff", "#ffd93d", "#6bcb77", "#4d96ff"],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  confetti({
    particleCount: 120,
    spread: 100,
    origin: { y: 0.5 },
    colors: ["#ff6b9d", "#c44dff", "#ffd93d", "#6bcb77", "#4d96ff"],
  });

  frame();
}

export default function BirthdayGiftPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fireConfetti();
    }
  }, [isAuthenticated]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Forkert kode – prøv igen");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center" />
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center space-y-2">
            <Gift className="w-10 h-10 mx-auto text-primary" />
            <h1 className="text-2xl font-bold text-foreground">
              Indtast kode
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password" className="sr-only">
                Kode
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Kode"
                autoFocus
                className="text-center text-lg h-12"
              />
            </div>
            {error && (
              <p className="text-sm text-destructive text-center">{error}</p>
            )}
            <Button type="submit" className="w-full h-12 text-base">
              Åbn gave
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-5xl mb-4">🎂</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Tillykke med de 30, Toni!
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Du har fortjent lidt forkælelse. Her er dine gaver – nyd dem!
          </p>
        </div>

        <div className="space-y-8 mb-14">
          <div className="border-2 border-pink-500 dark:border-pink-400 bg-white dark:bg-card p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <ShoppingBag className="w-10 h-10 mx-auto mb-5 text-pink-500 dark:text-pink-400" />
            <h2 className="text-2xl font-bold mb-3 text-pink-500 dark:text-pink-400">
              Magasin du Nord
            </h2>
            <div className="border-t border-dashed border-foreground/20 my-5" />
            <p className="text-xl font-semibold text-foreground mb-2">
              500 DKK gavekort
            </p>
            <p className="text-base text-muted-foreground">
              Shop løs hos Magasin du Nord
            </p>
          </div>

          <div className="border-2 border-purple-500 dark:border-purple-400 bg-white dark:bg-card p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <UtensilsCrossed className="w-10 h-10 mx-auto mb-5 text-purple-500 dark:text-purple-400" />
            <h2 className="text-2xl font-bold mb-3 text-purple-500 dark:text-purple-400">
              Middag for to
            </h2>
            <div className="border-t border-dashed border-foreground/20 my-5" />
            <p className="text-base text-muted-foreground mb-6">
              Vælg én af disse restauranter:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {restaurants.map((restaurant) => (
                <a
                  key={restaurant.name}
                  href={restaurant.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 rounded-md border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-colors text-sm font-medium"
                >
                  {restaurant.name} →
                </a>
              ))}
            </div>
          </div>

          <div className="border-2 border-amber-500 dark:border-amber-400 bg-white dark:bg-card p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Palette className="w-10 h-10 mx-auto mb-5 text-amber-500 dark:text-amber-400" />
            <h2 className="text-2xl font-bold mb-3 text-amber-500 dark:text-amber-400">
              Painting Game
            </h2>
            <div className="border-t border-dashed border-foreground/20 my-5" />
            <p className="text-xl font-semibold text-foreground mb-2">
              5× Painting Game
            </p>
            <p className="text-base text-muted-foreground">
              Fem runder med kreativ hygge
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-base text-muted-foreground mb-3">
            Vi håber du får en fantastisk fødselsdag!
          </p>
          <p className="text-base font-medium text-foreground">
            Kærlig hilsen, Henry ❤️
          </p>
        </div>
      </div>
    </div>
  );
}
