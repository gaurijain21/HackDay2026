"use client";

import { cn } from "@/lib/utils"

const prizeTracks = [
  {
    id: 1,
    name: "1st",
    description: "by Vercel",
    icon: "♠",
    color: "red",
    winner: null,
  },
  {
    id: 2,
    name: "2nd",
    description: "By Vercel",
    icon: "♥",
    color: "orange",
    winner: null,
  },
  {
    id: 3,
    name: "3rd",
    description: "by Vercel",
    icon: "♦",
    color: "yellow",
    winner: null,
  },
  {
    id: 4,
    name: "Community Favorite",
    description: "By CruzHacks",
    icon: "♣",
    color: "pink",
    winner: null,
  },
  {
    id: 5,
    name: "Short Form Content",
    description: "By CruzHacks",
    icon: "★",
    color: "blue",
    winner: null,
  },
]

const colorStyles: Record<string, { gradient: string; glow: string; border: string }> = {
  red: {
    gradient: "from-red-600 via-red-500 to-red-700",
    glow: "shadow-[0_0_30px_var(--neon-red),0_0_60px_var(--neon-red)]",
    border: "border-red-400",
  },
  orange: {
    gradient: "from-orange-600 via-orange-500 to-orange-700",
    glow: "shadow-[0_0_30px_var(--neon-orange),0_0_60px_var(--neon-orange)]",
    border: "border-orange-400",
  },
  yellow: {
    gradient: "from-yellow-600 via-yellow-500 to-yellow-700",
    glow: "shadow-[0_0_30px_var(--neon-yellow),0_0_60px_var(--neon-yellow)]",
    border: "border-yellow-400",
  },
  pink: {
    gradient: "from-pink-600 via-pink-500 to-pink-700",
    glow: "shadow-[0_0_30px_var(--neon-pink),0_0_60px_var(--neon-pink)]",
    border: "border-pink-400",
  },
  gold: {
    gradient: "from-amber-500 via-yellow-400 to-amber-600",
    glow: "shadow-[0_0_30px_var(--gold),0_0_60px_var(--gold)]",
    border: "border-amber-300",
  },
  blue: {
    gradient: "from-blue-500 via-blue-400 to-blue-600",
    glow: "shadow-[0_0_30px_var(--blue),0_0_60px_var(--blue)]",
    border: "border-blue-300",
  }
}

function RouletteSlot({ track }: { track: (typeof prizeTracks)[0] }) {
  const styles = colorStyles[track.color]

  return (
    <div className="group relative">
      {/* Outer ring glow */}
      <div
        className={cn(
          "absolute -inset-2 rounded-full opacity-50 blur-xl transition-all duration-500",
          "bg-gradient-to-r",
          styles.gradient,
          "group-hover:opacity-100 group-hover:blur-2xl"
        )}
      />

      {/* Main roulette slot */}
      <div
        className={cn(
          "relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full",
          "bg-casino-surface border-4",
          styles.border,
          styles.glow,
          "transition-all duration-500 group-hover:scale-105",
          "flex flex-col items-center justify-center p-4"
        )}
      >
        {/* Roulette wheel segments (decorative) */}
        {[...Array(12)].map((_, i) => {
        const round = (num: number) => Number(num.toFixed(4));

        const angle1 = (i * 30 - 90) * (Math.PI / 180);
        const angle2 = ((i + 1) * 30 - 90) * (Math.PI / 180);

        const x1 = round(50 + 50 * Math.cos(angle1));
        const y1 = round(50 + 50 * Math.sin(angle1));
        const x2 = round(50 + 50 * Math.cos(angle2));
        const y2 = round(50 + 50 * Math.sin(angle2));

        return (
          <div
            key={i}
            className={cn(
              "absolute w-full h-full",
              i % 2 === 0 ? "bg-zinc-900" : "bg-zinc-800"
            )}
            style={{
              clipPath: `polygon(50% 50%, ${x1}% ${y1}%, ${x2}% ${y2}%)`,
            }}
          />
        );
      })}

        {/* Inner circle */}
        <div
          className={cn(
            "absolute inset-8 rounded-full bg-casino-dark border-2",
            styles.border,
            "flex flex-col items-center justify-center text-center p-2"
          )}
        >
          {/* Icon */}
          <span
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl mb-1",
              track.color === "red" || track.color === "pink" ? "text-red-400" : "",
              track.color === "orange" ? "text-orange-400" : "",
              track.color === "yellow" ? "text-yellow-400" : "",
              track.color === "gold" ? "text-amber-400" : ""
            )}
          >
            {track.icon}
          </span>

          {/* Track name */}
          <h3
            className="text-xs sm:text-sm md:text-base font-bold text-foreground leading-tight"
            style={{
              textShadow: "0 0 10px currentColor",
            }}
          >
            {track.name}
          </h3>

          {/* Winner placeholder */}
          <div className="mt-2 px-2 py-1 bg-white/5 rounded-full">
            <span className="text-xl sm:text-2xl text-gold animate-pulse">?</span>
          </div>
        </div>

        {/* Spinning ball indicator */}
        <div
          className={cn(
            "absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white",
            "shadow-[0_0_10px_white]",
            "group-hover:animate-spin"
          )}
          style={{
            top: "8%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* Description */}
      <p className="mt-4 text-center text-sm text-muted-foreground">{track.description}</p>
    </div>
  )
}

export function Leaderboard() {
  return (
    <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Background roulette table effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full border border-gold/10 opacity-20" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-gold/10 opacity-15" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-gold/10 opacity-10" />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-red/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Section title */}
      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-display heading-gradient">
          Prize Tracks
        </h2>
          
        
        <p className="mt-4 text-muted-foreground text-lg">Who wins the fortune?</p>
      </div>

      {/* Prize slots */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12">
          {prizeTracks.map((track, index) => (
            <div
              key={track.id}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
              className="animate-in fade-in zoom-in-90 duration-700"
            >
              <RouletteSlot track={track} />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative roulette ball track */}
      <div className="mt-16 flex justify-center">
        <div className="flex items-center gap-2">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-6 h-6 rounded-full",
                i % 2 === 0 ? "bg-red-600" : "bg-zinc-900",
                "border border-gold/30"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
