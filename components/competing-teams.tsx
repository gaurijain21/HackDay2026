"use client"

import { cn } from "@/lib/utils"

const teams = [
  { name: "LocalFlow", color: "red" },
  { name: "SlugBuild", color: "blue" },
  { name: "Classify", color: "green" },
  { name: "Aide", color: "purple" },
  { name: "CommunityOps Agent", color: "orange" },
  { name: "Argus", color: "pink" },
  { name: "Cold Reach", color: "teal" },
  { name: "beevr", color: "yellow" },
  { name: "SideBet", color: "indigo" },
  { name: "BuildingNav", color: "emerald" },
  { name: "SlugMind", color: "rose" },
  { name: "AgentToSurf", color: "cyan" },
  // { name: "Cache Kings", color: "amber" },
  // { name: "Query Queens", color: "violet" },
  // { name: "Loop Legends", color: "lime" },
  // { name: "Function Force", color: "fuchsia" },
]

const chipColors: Record<string, { bg: string; border: string; shadow: string; text: string }> = {
  red: {
    bg: "from-red-700 via-red-600 to-red-800",
    border: "border-red-400",
    shadow: "shadow-[0_0_20px_rgba(239,68,68,0.5)]",
    text: "text-red-100",
  },
  blue: {
    bg: "from-blue-700 via-blue-600 to-blue-800",
    border: "border-blue-400",
    shadow: "shadow-[0_0_20px_rgba(59,130,246,0.5)]",
    text: "text-blue-100",
  },
  green: {
    bg: "from-green-700 via-green-600 to-green-800",
    border: "border-green-400",
    shadow: "shadow-[0_0_20px_rgba(34,197,94,0.5)]",
    text: "text-green-100",
  },
  purple: {
    bg: "from-purple-700 via-purple-600 to-purple-800",
    border: "border-purple-400",
    shadow: "shadow-[0_0_20px_rgba(168,85,247,0.5)]",
    text: "text-purple-100",
  },
  orange: {
    bg: "from-orange-600 via-orange-500 to-orange-700",
    border: "border-orange-300",
    shadow: "shadow-[0_0_20px_rgba(249,115,22,0.5)]",
    text: "text-orange-100",
  },
  pink: {
    bg: "from-pink-600 via-pink-500 to-pink-700",
    border: "border-pink-300",
    shadow: "shadow-[0_0_20px_rgba(236,72,153,0.5)]",
    text: "text-pink-100",
  },
  teal: {
    bg: "from-teal-600 via-teal-500 to-teal-700",
    border: "border-teal-300",
    shadow: "shadow-[0_0_20px_rgba(20,184,166,0.5)]",
    text: "text-teal-100",
  },
  yellow: {
    bg: "from-yellow-600 via-yellow-500 to-yellow-700",
    border: "border-yellow-300",
    shadow: "shadow-[0_0_20px_rgba(234,179,8,0.5)]",
    text: "text-yellow-100",
  },
  indigo: {
    bg: "from-indigo-700 via-indigo-600 to-indigo-800",
    border: "border-indigo-400",
    shadow: "shadow-[0_0_20px_rgba(99,102,241,0.5)]",
    text: "text-indigo-100",
  },
  emerald: {
    bg: "from-emerald-600 via-emerald-500 to-emerald-700",
    border: "border-emerald-300",
    shadow: "shadow-[0_0_20px_rgba(16,185,129,0.5)]",
    text: "text-emerald-100",
  },
  rose: {
    bg: "from-rose-600 via-rose-500 to-rose-700",
    border: "border-rose-300",
    shadow: "shadow-[0_0_20px_rgba(244,63,94,0.5)]",
    text: "text-rose-100",
  },
  cyan: {
    bg: "from-cyan-600 via-cyan-500 to-cyan-700",
    border: "border-cyan-300",
    shadow: "shadow-[0_0_20px_rgba(6,182,212,0.5)]",
    text: "text-cyan-100",
  },
  amber: {
    bg: "from-amber-600 via-amber-500 to-amber-700",
    border: "border-amber-300",
    shadow: "shadow-[0_0_20px_rgba(245,158,11,0.5)]",
    text: "text-amber-100",
  },
  violet: {
    bg: "from-violet-600 via-violet-500 to-violet-700",
    border: "border-violet-300",
    shadow: "shadow-[0_0_20px_rgba(139,92,246,0.5)]",
    text: "text-violet-100",
  },
  lime: {
    bg: "from-lime-600 via-lime-500 to-lime-700",
    border: "border-lime-300",
    shadow: "shadow-[0_0_20px_rgba(132,204,22,0.5)]",
    text: "text-lime-100",
  },
  fuchsia: {
    bg: "from-fuchsia-600 via-fuchsia-500 to-fuchsia-700",
    border: "border-fuchsia-300",
    shadow: "shadow-[0_0_20px_rgba(192,38,211,0.5)]",
    text: "text-fuchsia-100",
  },
}

function PokerChip({ name, color }: { name: string; color: string }) {
  const colors = chipColors[color] || chipColors.red

  return (
    <div
      className={cn(
        "group relative cursor-pointer transition-all duration-300",
        "hover:scale-110 hover:-translate-y-2"
      )}
      style={{ perspective: "500px" }}
    >
      {/* Chip shadow */}
      <div className="absolute inset-0 rounded-full bg-black/50 blur-md transform translate-y-2 group-hover:translate-y-4 transition-transform" />
      
      {/* Main chip */}
      <div
        className={cn(
          "relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full",
          "bg-gradient-to-br",
          colors.bg,
          "border-4",
          colors.border,
          colors.shadow,
          "group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]",
          "transition-all duration-300"
        )}
        style={{
          transform: "rotateX(15deg)",
        }}
      >
        {/* Inner ring pattern */}
        <div className="absolute inset-2 rounded-full border-2 border-white/30" />
        <div className="absolute inset-4 rounded-full border border-white/20" />
        
        {/* Edge notches */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-3 bg-white/40 rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${i * 30}deg) translateY(-46px) translateX(-50%)`,
              transformOrigin: "center center",
            }}
          />
        ))}

        {/* Center area with name */}
        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
          <span
            className={cn(
              "text-[10px] sm:text-xs font-bold text-center leading-tight px-1",
              colors.text
            )}
            style={{
              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            {name}
          </span>
        </div>

        {/* Shine effect */}
        <div className="absolute top-1 left-1/4 w-1/3 h-4 bg-white/30 rounded-full blur-sm transform -rotate-45" />
      </div>
    </div>
  )
}

export function CompetingTeams() {
  return (
    <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(255,255,255,0.03) 20px,
              rgba(255,255,255,0.03) 40px
            )`,
          }}
        />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-neon-pink/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-neon-orange/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display heading-gradient">
          Competing Teams
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          The players have entered the table
        </p>
      </div>

      {/* Poker table */}
      <div className="max-w-6xl mx-auto relative">
        {/* Table surface */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 bg-gradient-to-r from-transparent via-emerald-900/20 to-transparent rounded-full blur-2xl" />

        {/* Chips grid */}
        <div className="relative flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          {teams.map((team, index) => (
            <div
              key={team.name}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <PokerChip name={team.name} color={team.color} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
