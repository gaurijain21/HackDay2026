"use client"

import { cn } from "@/lib/utils"

interface Event {
  id: number
  title: string
  time: string
  icon: string
  suit: "hearts" | "diamonds" | "clubs" | "spades"
}

const leftEvents: Event[] = [
  { id: 1, title: "Check-in", time: "9:30 AM", icon: "🎭", suit: "hearts" },
  { id: 2, title: "Welcome video from vercel + Onboarding", time: "10:15 AM", icon: "🤝", suit: "diamonds" },
  { id: 3, title: "Opening ceremony", time: "10:15 AM", icon: "👩", suit: "spades" },
  { id: 4, title: "Hacking starts!", time: "10:15 AM", icon: "🧠", suit: "spades" },  
]

const rightEvents: Event[] = [
  { id: 5, title: "Lunch Break", time: "2:15 PM", icon: "🍕", suit: "clubs" },
  { id: 6, title: "HackDay Submissions Due", time: "4:00 PM", icon: "💡", suit: "hearts" },
  { id: 7, title: "Hard deadline- Devpost Closing!", time: "4:15 PM", icon: "🎯", suit: "diamonds" },
  { id: 8, title: "Closing Ceremony and winners announced", time: "5:00 PM", icon: "🏆", suit: "spades" },
  
]

const suitSymbols = {
  hearts: "♥",
  diamonds: "♦",
  clubs: "♣",
  spades: "♠",
}

const suitColors = {
  hearts: "text-red-500 border-red-500/30 neon-box-red",
  diamonds: "text-neon-orange border-neon-orange/30 neon-box-orange",
  clubs: "text-neon-yellow border-neon-yellow/30 neon-box-yellow",
  spades: "text-neon-pink border-neon-pink/30 neon-box-pink",
}

function EventCard({ event }: { event: Event }) {
  return (
    <div
      className={cn(
        "group relative p-4 sm:p-6 rounded-xl border-2 bg-casino-surface/80 backdrop-blur-sm",
        "transition-all duration-300 hover:scale-105 hover:-translate-y-1",
        "cursor-pointer",
        suitColors[event.suit]
      )}
    >
      {/* Corner suit symbols */}
      <span className={cn("absolute top-2 left-2 text-lg opacity-50", suitColors[event.suit].split(" ")[0])}>
        {suitSymbols[event.suit]}
      </span>
      <span className={cn("absolute bottom-2 right-2 text-lg opacity-50 rotate-180", suitColors[event.suit].split(" ")[0])}>
        {suitSymbols[event.suit]}
      </span>

      {/* Time badge */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 px-3 py-1 bg-casino-dark rounded-r-full border border-gold/30">
        <span className="text-xs sm:text-sm font-mono text-gold font-bold">{event.time}</span>
      </div>

      <div className="ml-8 sm:ml-12">
        <div className="text-2xl sm:text-3xl mb-2">{event.icon}</div>
        <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-gold transition-colors">
          {event.title}
        </h3>
      </div>
    </div>
  )
}

function SurpriseEvent() {
  return (
    <div className="relative group">
      {/* Glowing background */}
      <div className="bg-gradient-to-br from-blue-500/20 via-cyan-400/20 to-indigo-500/20"></div>
      
      {/* Stacked cards effect */}
      <div className="absolute inset-0 transform rotate-3 bg-casino-surface/50 rounded-2xl border border-gold/20" />
      <div className="absolute inset-0 transform -rotate-3 bg-casino-surface/50 rounded-2xl border border-gold/20" />
      
      {/* Main card */}
      <div className={cn(
        "relative p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-gold/50 bg-casino-surface/90 backdrop-blur-sm",
        "transition-all duration-500 group-hover:scale-105",
        "shadow-[0_0_40px_rgba(59,130,246,0.6),0_0_80px_rgba(34,211,238,0.4)]"
      )}>
        {/* Decorative corners */}
        <div className="absolute top-3 left-3 text-gold text-2xl">♠</div>
        <div className="absolute top-3 right-3 text-red-500 text-2xl">♥</div>
        <div className="absolute bottom-3 left-3 text-neon-orange text-2xl">♦</div>
        <div className="absolute bottom-3 right-3 text-neon-yellow text-2xl">♣</div>

        <div className="flex flex-col items-center text-center">
          {/* Question mark with glow */}
          <div 
            className="text-6xl sm:text-7xl md:text-8xl font-display animate-pulse"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #22d3ee, #a5f3fc)",
              //background: "linear-gradient(135deg, var(--neon-red), var(--neon-orange), var(--gold))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              //filter: "drop-shadow(0 0 20px var(--neon-orange))",
              filter: "drop-shadow(0 0 20px rgba(59,130,246,0.6))",
            }}
          >
            ?
          </div>
          
          <h3 
            className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold animate-neon-flicker"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #22d3ee, #a5f3fc)",
              //background: "linear-gradient(135deg, var(--gold), var(--neon-orange))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Surprise Event
          </h3>
          
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Some cool drinks and a bartender!
          </p>
          
          <div className="mt-4 px-4 py-2 bg-gold/10 rounded-full border border-gold/30">
            <span className="text-xs sm:text-sm font-mono text-cyan-400">2:00 PM</span>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export function EventsLineup() {
  return (
    <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-neon-orange/5 blur-[150px] pointer-events-none" />

      {/* Section title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display heading-gradient">
          Events Lineup
        </h2>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="text-2xl text-red-500">♥</span>
          <span className="text-2xl text-neon-orange">♦</span>
          <span className="text-2xl text-zinc-400">♣</span>
          <span className="text-2xl text-zinc-300">♠</span>
        </div>
      </div>

      {/* Events grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
        {/* Left events */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {leftEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Center surprise event */}
        <div className="lg:py-8 order-first lg:order-none mb-8 lg:mb-0">
          <SurpriseEvent />
        </div>

        {/* Right events */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {rightEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
