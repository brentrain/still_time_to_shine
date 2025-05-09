'use client'

import Link from 'next/link'

export default function Splash() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/90 to-accent/90 text-white flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mb-6 font-raleway">Still Time to Shine</h1>
        <p className="text-xl mb-8 leading-relaxed">
          It's never too late to pursue what was meant for you. Every moment is an opportunity to begin again, 
          to chase your dreams, and to create the life you've always imagined. The path to your purpose 
          doesn't have an expiration date - it's waiting for you to take that first step. Your time to shine 
          is now.
        </p>
        <Link
          href="/home"
          className="inline-block bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
        >
          Start Your Journey
        </Link>
      </div>
    </div>
  )
} 