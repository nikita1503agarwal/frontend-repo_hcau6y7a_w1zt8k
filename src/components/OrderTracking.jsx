import { motion } from 'framer-motion'
import { Bike, Navigation } from 'lucide-react'

export default function OrderTracking() {
  return (
    <div className="px-6 pt-6 pb-28">
      <div className="rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow mb-4">
        <div className="p-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF8A00] inline-flex items-center justify-center">
            <Bike className="w-6 h-6" />
          </div>
          <div>
            <div className="font-semibold text-slate-900 dark:text-white">Order on the way</div>
            <div className="text-sm text-slate-500 dark:text-zinc-400">Arriving in 12-18 min</div>
          </div>
        </div>
        <div className="h-72 bg-gradient-to-br from-sky-200 to-sky-300 relative">
          <motion.div className="absolute inset-0" animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0,0,0,0.05), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.05), transparent 40%)', backgroundSize: '160% 160%' }} />
          <motion.div className="absolute left-10 top-10 w-8 h-8 rounded-full bg-white shadow-lg" animate={{ y: [0, 8, 0] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.div className="absolute right-10 bottom-12 w-8 h-8 rounded-full bg-white shadow-lg" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-6 rounded-full bg-black/70 text-white flex items-center justify-center gap-1">
            <Navigation className="w-4 h-4" />
            Live Map
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {['Preparing', 'Picked up', 'Delivered'].map((s, i) => (
          <div key={i} className="rounded-2xl p-3 text-center bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5">
            <div className={`text-xs font-medium ${i === 1 ? 'text-[#FF8A00]' : 'text-slate-500 dark:text-zinc-400'}`}>{s}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
