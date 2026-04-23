"use client"

import { cn } from "@/lib/utils"

const organizers = [
  { name: "name1", role: "Lead Organizer", suit: "spades", rank: "A" },
  { name: "name2", role: "Tech Lead", suit: "hearts", rank: "K" },
  { name: "name3", role: "Design Lead", suit: "diamonds", rank: "Q" },
  { name: "name4", role: "Marketing", suit: "clubs", rank: "J" },
  { name: "name5", role: "Logistics", suit: "spades", rank: "K" },
  { name: "name6", role: "Sponsorship", suit: "hearts", rank: "Q" },
  { name: "name7", role: "Mentorship", suit: "diamonds", rank: "J" },
  { name: "name8", role: "Workshop Lead", suit: "clubs", rank: "A" },
  { name: "name9", role: "Social Media", suit: "spades", rank: "Q" },
  { name: "name10", role: "Volunteer Coord", suit: "hearts", rank: "J" },
  { name: "name11", role: "Food & Bev", suit: "diamonds", rank: "A" },
  { name: "name12", role: "AV Tech", suit: "clubs", rank: "K" },
]

const suitSymbols: Record<string, string> = {
  spades: "♠",
  hearts: "♥",
  diamonds: "♦",
  clubs: "♣",
}

const suitColors: Record<string, string> = {
  spades: "text-zinc-900",
  hearts: "text-red-500",
  diamonds: "text-red-500",
  clubs: "text-zinc-900",
}

function PlayingCardProfile({
  name,
  role,
  suit,
  rank,
}: {
  name: string
  role: string
  suit: string
  rank: string
}) {
  const suitSymbol = suitSymbols[suit]
  const suitColor = suitColors[suit]

  return (
    <div
      className={cn(
        "group relative w-36 sm:w-40 md:w-44 h-52 sm:h-56 md:h-64",
        "transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:z-10",
        "cursor-pointer"
      )}
      style={{ perspective: "1000px" }}
    >
      {/* Card shadow */}
      <div className="absolute inset-0 bg-black/30 rounded-xl blur-md transform translate-y-2 group-hover:translate-y-4 transition-transform" />

      {/* Main card */}
      <div
        className={cn(
          "relative w-full h-full rounded-xl overflow-hidden",
          "bg-gradient-to-br from-zinc-100 via-white to-zinc-200",
          "border-2 border-gold/30",
          "shadow-[0_0_15px_rgba(255,200,100,0.2)]",
          "group-hover:shadow-[0_0_30px_rgba(255,200,100,0.4)]",
          "transition-all duration-300"
        )}
      >
        {/* Top left corner */}
        <div className="absolute top-2 left-2 flex flex-col items-center">
          <span className={cn("text-lg sm:text-xl font-bold", suitColor)}>{rank}</span>
          <span className={cn("text-lg sm:text-xl", suitColor)}>{suitSymbol}</span>
        </div>

        {/* Bottom right corner (inverted) */}
        <div className="absolute bottom-2 right-2 flex flex-col items-center rotate-180">
          <span className={cn("text-lg sm:text-xl font-bold", suitColor)}>{rank}</span>
          <span className={cn("text-lg sm:text-xl", suitColor)}>{suitSymbol}</span>
        </div>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* Profile picture placeholder */}
          <div
            className={cn(
              "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full",
              "bg-gradient-to-br from-casino-dark to-casino-surface",
              "border-4 border-gold/50",
              "flex items-center justify-center",
              "shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]",
              "group-hover:border-gold transition-colors"
            )}
          >
            <span className={cn("text-3xl sm:text-4xl", suitColor)}>{suitSymbol}</span>
          </div>

          {/* Name */}
          <h3 className="mt-3 text-sm sm:text-base font-bold text-zinc-800 text-center leading-tight">
            {name}
          </h3>

          {/* Role */}
          <p className="mt-1 text-xs sm:text-sm text-zinc-600 text-center">{role}</p>
        </div>

        {/* Decorative pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 5px,
                rgba(0,0,0,0.03) 5px,
                rgba(0,0,0,0.03) 10px
              )`,
            }}
          />
        </div>

        {/* Card shine effect */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}

export function Organizers() {
  return (
    <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Background glow - softer than other sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Section title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-display"
          style={{
            background: "linear-gradient(135deg, var(--foreground), var(--gold))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 10px var(--gold))",
          }}
        >
          Meet Our Organizers
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">The royal court behind the scenes</p>

        {/* Decorative suits */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="text-2xl text-zinc-400">♠</span>
          <span className="text-2xl text-red-500">♥</span>
          <span className="text-2xl text-red-500">♦</span>
          <span className="text-2xl text-zinc-400">♣</span>
        </div>
      </div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {organizers.map((organizer, index) => (
            <div
              key={organizer.name}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <PlayingCardProfile
                name={organizer.name}
                role={organizer.role}
                suit={organizer.suit}
                rank={organizer.rank}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer decoration */}
      <div className="mt-16 flex justify-center">
        <div className="px-8 py-3 bg-casino-surface/50 rounded-full border border-gold/20">
          <p className="text-sm text-muted-foreground">
            Shuffled with <span className="text-red-500">♥</span> by the CruzHacks team
          </p>
        </div>
      </div>
    </section>
  )
}
