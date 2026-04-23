"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"

interface SlotMachineCountdownProps {
  targetDate: Date
  onComplete?: () => void
}

interface FlyingCard {
  id: number
  suit: string
  value: string
  x: number
  delay: number
}

const CARD_SUITS = ["♠", "♥", "♦", "♣"]
const CARD_VALUES = ["A", "K", "Q", "J", "10", "9", "8", "7"]

function SlotReel({ value, isAnimating }: { value: string; isAnimating: boolean }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 rounded-lg border-2 border-gold/50 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)]">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/60 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <div
        className={cn(
          "px-2 sm:px-4 py-3 sm:py-4 text-4xl sm:text-6xl md:text-7xl font-bold text-neon-yellow font-mono tracking-wider",
          "transition-all duration-100",
          isAnimating && "animate-pulse"
        )}
        style={{
          textShadow: "0 0 20px var(--neon-yellow), 0 0 40px var(--neon-orange)",
        }}
      >
        {value}
      </div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </div>
  )
}

function SlotDivider() {
  return (
    <div className="text-4xl sm:text-6xl md:text-7xl font-bold text-neon-orange neon-text-orange mx-1 sm:mx-2">
      :
    </div>
  )
}

function SlotHandle({ onPull }: { onPull: () => void }) {
  const [isPulled, setIsPulled] = useState(false)

  const handlePull = () => {
    setIsPulled(true)
    onPull()
    setTimeout(() => setIsPulled(false), 500)
  }

  return (
    <div className="relative flex flex-col items-center ml-4 sm:ml-8">
      {/* Handle mount */}
      <div className="w-4 sm:w-6 h-16 sm:h-24 bg-gradient-to-b from-zinc-600 via-zinc-500 to-zinc-700 rounded-full border-2 border-zinc-400 shadow-lg" />
      
      {/* Handle arm */}
      <div 
        className={cn(
          "relative w-4 sm:w-6 bg-gradient-to-r from-zinc-400 via-zinc-300 to-zinc-400 rounded-sm transition-all duration-300 cursor-pointer",
          isPulled ? "h-8 sm:h-12" : "h-20 sm:h-32"
        )}
        onClick={handlePull}
      />
      
      {/* Handle ball */}
      <div 
        className={cn(
          "w-8 h-8 sm:w-12 sm:h-12 rounded-full cursor-pointer transition-all duration-300",
          "bg-gradient-to-br from-neon-red via-red-600 to-red-800",
          "border-4 border-red-400 shadow-[0_0_20px_var(--neon-red)]",
          "hover:shadow-[0_0_30px_var(--neon-red)] hover:scale-110",
          isPulled && "translate-y-[-40px] sm:translate-y-[-60px]"
        )}
        onClick={handlePull}
      />
    </div>
  )
}

function FlyingCardElement({ card }: { card: FlyingCard }) {
  const isRed = card.suit === "♥" || card.suit === "♦"
  
  return (
    <div
      className="absolute bottom-0 pointer-events-none z-50"
      style={{
        left: `${card.x}%`,
        animation: `card-celebration 2s ease-out ${card.delay}s forwards`,
      }}
    >
      <div className={cn(
        "w-12 h-16 sm:w-16 sm:h-24 rounded-lg flex flex-col items-center justify-center",
        "bg-gradient-to-br from-white to-gray-100 border-2 border-gold/50",
        "shadow-[0_0_20px_var(--neon-orange)]"
      )}>
        <span className={cn(
          "text-xl sm:text-2xl font-bold",
          isRed ? "text-red-600" : "text-zinc-900"
        )}>
          {card.value}
        </span>
        <span className={cn(
          "text-2xl sm:text-3xl",
          isRed ? "text-red-600" : "text-zinc-900"
        )}>
          {card.suit}
        </span>
      </div>
    </div>
  )
}

export function SlotMachineCountdown({ targetDate, onComplete }: SlotMachineCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: "00", minutes: "00", seconds: "00" })
  const [isAnimating, setIsAnimating] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [flyingCards, setFlyingCards] = useState<FlyingCard[]>([])

  const triggerCelebration = useCallback(() => {
    const cards: FlyingCard[] = []
    for (let i = 0; i < 20; i++) {
      cards.push({
        id: i,
        suit: CARD_SUITS[Math.floor(Math.random() * CARD_SUITS.length)],
        value: CARD_VALUES[Math.floor(Math.random() * CARD_VALUES.length)],
        x: Math.random() * 100,
        delay: Math.random() * 1.5,
      })
    }
    setFlyingCards(cards)
    setTimeout(() => setFlyingCards([]), 4000)
  }, [])

  const handlePull = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const target = targetDate.getTime()
      const difference = target - now

      if (difference <= 0) {
        if (!isComplete) {
          setIsComplete(true)
          triggerCelebration()
          onComplete?.()
        }
        return { hours: "00", minutes: "00", seconds: "00" }
      }

      const hours = Math.floor(difference / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      return {
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      }
    }

    setTimeLeft(calculateTimeLeft())
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate, isComplete, triggerCelebration, onComplete])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-red/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-orange/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/5 rounded-full blur-[150px]" />
      </div>

      {/* Flying cards celebration */}
      {flyingCards.map((card) => (
        <FlyingCardElement key={card.id} card={card} />
      ))}

      {/* Title */}
      <h1 
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display text-center mb-8 sm:mb-12 animate-neon-flicker"
        style={{
          background: "linear-gradient(135deg, #ff8aa0, #ffc46b, #fff3a0)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 12px rgba(255, 170, 120, 0.4))",
        }}
      >
        CruzHacks Hackday
      </h1>

      {/* Slot Machine */}
      <div className="relative flex items-center">
        {/* Machine Frame */}
        <div className="relative p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-b from-zinc-800 via-zinc-900 to-black border-4 border-gold/30 shadow-[0_0_40px_var(--neon-red),inset_0_0_60px_rgba(0,0,0,0.5)]">
          {/* Top decoration */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-neon-red via-neon-orange to-neon-red rounded-full border-2 border-gold/50">
            <span className="text-sm sm:text-base font-bold text-white tracking-widest uppercase">Jackpot</span>
          </div>

          {/* Timer reels */}
          <div className="flex items-center justify-center">
            <SlotReel value={timeLeft.hours} isAnimating={isAnimating} />
            <SlotDivider />
            <SlotReel value={timeLeft.minutes} isAnimating={isAnimating} />
            <SlotDivider />
            <SlotReel value={timeLeft.seconds} isAnimating={isAnimating} />
          </div>

          {/* Bottom lights */}
          <div className="flex justify-center gap-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-neon-yellow animate-pulse"
                style={{
                  animationDelay: `${i * 0.2}s`,
                  boxShadow: "0 0 10px var(--neon-yellow)",
                }}
              />
            ))}
          </div>
        </div>

        {/*
        {/* Handle
        <SlotHandle onPull={handlePull} /> */}
        
      </div>

      {/* Subtitle */}
      <p className="mt-8 sm:mt-12 text-lg sm:text-xl md:text-2xl text-muted-foreground text-center max-w-md animate-pulse">
        {isComplete ? "🎰 The games have begun! 🎰" : "Place your bets, the countdown is on!"}
      </p>

      {/* Decorative cards */}
      <div className="absolute bottom-8 left-8 opacity-20 animate-card-float hidden lg:block">
        <div className="w-16 h-24 rounded-lg bg-white border-2 border-gold/30 flex items-center justify-center text-4xl text-red-600">
          ♥
        </div>
      </div>
      <div className="absolute top-24 right-12 opacity-20 animate-card-float hidden lg:block" style={{ animationDelay: "1s" }}>
        <div className="w-16 h-24 rounded-lg bg-white border-2 border-gold/30 flex items-center justify-center text-4xl text-zinc-900">
          ♠
        </div>
      </div>
    </section>
  )
}
