import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const slides = [
  {
    title: 'All-in-one convenience',
    subtitle: 'Order food or book a ride in seconds — one app, two superpowers.',
    illustration: (
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-xl" />
        <motion.div
          className="absolute -right-3 -top-3 w-20 h-20 rounded-2xl bg-white shadow-lg"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-28 h-28 rounded-full bg-orange-100/80 dark:bg-orange-500/20"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />
      </div>
    ),
  },
  {
    title: 'Delicious at your door',
    subtitle: 'Discover top restaurants nearby with vibrant menus and fast delivery.',
    illustration: (
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-300 to-orange-500 shadow-xl" />
        <motion.div
          className="absolute inset-4 rounded-full border-2 border-white/70 dark:border-white/10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    ),
  },
  {
    title: 'Get there faster',
    subtitle: 'Transparent pricing, reliable drivers, and live tracking on the map.',
    illustration: (
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 dark:from-zinc-800 dark:to-zinc-700" />
        <motion.div
          className="absolute left-3 right-3 top-6 h-2 rounded-full bg-white/70 dark:bg-white/20"
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
        <motion.div
          className="absolute left-6 right-6 top-10 h-2 rounded-full bg-white/70 dark:bg-white/20"
          animate={{ x: [0, -6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />
      </div>
    ),
  },
]

export default function Onboarding({ onDone }) {
  const [index, setIndex] = useState(0)

  const next = () => {
    if (index < slides.length - 1) setIndex(index + 1)
    else onDone?.()
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-6 py-10 select-none">
      <div className="mb-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-sm"
          >
            <div className="flex items-center justify-center mb-8">{slides[index].illustration}</div>
            <h2 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-white">
              {slides[index].title}
            </h2>
            <p className="text-slate-500 dark:text-zinc-300">
              {slides[index].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2 mb-8">
        {slides.map((_, i) => (
          <motion.span
            key={i}
            className="h-2 rounded-full bg-orange-500/30"
            animate={{ width: index === i ? 22 : 6, backgroundColor: index === i ? '#FF8A00' : 'rgba(255,138,0,0.35)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          />
        ))}
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={next}
        className="w-full max-w-xs rounded-xl bg-[#FF8A00] text-white font-semibold py-3 shadow-[0_10px_20px_rgba(255,138,0,0.35)]"
      >
        {index < slides.length - 1 ? 'Next' : 'Get Started'}
      </motion.button>
    </div>
  )
}
