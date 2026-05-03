import { SlotMachineCountdown } from "@/components/slot-machine-countdown"
import { EventsLineup } from "@/components/events-lineup"
import { CompetingTeams } from "@/components/competing-teams"
import { Leaderboard } from "@/components/leaderboard"
import { Organizers } from "@/components/organizers"

export default function Home() {
  const targetDate = new Date('2026-05-03T23:15:00Z') // 4:15 PM PST = 23:15 UTC

  return (
    <main className="min-h-screen">
      {/* Hero with Slot Machine Countdown */}
      <SlotMachineCountdown targetDate={targetDate} />

      {/* Divider */}
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center gap-4">
          <span className="text-gold/30 text-2xl">♠</span>
          <span className="text-neon-red/30 text-2xl">♥</span>
          <span className="text-neon-orange/30 text-2xl">♦</span>
          <span className="text-gold/30 text-2xl">♣</span>
        </div>
      </div>

      {/* Events Lineup */}
      <EventsLineup />

      {/* Divider */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
        </div>
      </div>

      {/* Competing Teams */}
      <CompetingTeams />

      {/* Divider */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </div>
      </div>

      {/* Leaderboard / Prize Tracks */}
      <Leaderboard />

      {/* Divider */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent" />
        </div>
      </div>

      {/* Organizers */}
      <Organizers />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border/20">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} CruzHacks Hackday • All bets are on!
        </p>
      </footer>
    </main>
  )
}