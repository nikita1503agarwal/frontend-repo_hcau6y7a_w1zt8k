import { motion } from 'framer-motion'
import { Bike, Car, Search } from 'lucide-react'

export default function Home({ onSelect }) {
  return (
    <div className="px-6 pt-6 pb-28">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">Welcome</h1>
          <p className="text-slate-500 dark:text-zinc-400 text-sm">What do you need today?</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-inner shadow-white/40" />
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          placeholder="Search restaurants or places"
          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-sm outline-none focus:ring-4 focus:ring-orange-500/20"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('food')}
          className="rounded-3xl p-5 text-left bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-100 text-[#FF8A00] mb-4">
            <Bike className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Order Food</h3>
          <p className="text-sm text-slate-500 dark:text-zinc-400">Burgers, sushi, groceries — delivered fast</p>
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('ride')}
          className="rounded-3xl p-5 text-left bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-orange-100 text-[#FF8A00] mb-4">
            <Car className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Book Ride</h3>
          <p className="text-sm text-slate-500 dark:text-zinc-400">Affordable rides, upfront pricing</p>
        </motion.button>
      </div>
    </div>
  )
}
