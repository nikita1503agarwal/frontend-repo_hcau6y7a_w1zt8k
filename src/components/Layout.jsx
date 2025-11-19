import { motion } from 'framer-motion'
import { Home, Map, User, ShoppingBag } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

export default function Layout({ children, title = 'Glide', accent = '#FF8A00', onNavigate }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] transition-colors" style={{
      '--bg': 'white',
      '--fg': '#0f172a',
    }}>
      <div className="max-w-md mx-auto min-h-screen relative bg-gradient-to-b from-white to-slate-50 dark:from-zinc-950 dark:to-zinc-950">
        <header className="sticky top-0 z-20 px-5 py-4 flex items-center justify-between bg-white/70 dark:bg-zinc-950/70 backdrop-blur border-b border-black/5 dark:border-white/5">
          <div className="font-bold tracking-tight text-slate-900 dark:text-white">{title}</div>
          <ThemeToggle accent={accent} />
        </header>

        <main>{children}</main>

        <nav className="fixed left-1/2 -translate-x-1/2 bottom-5 w-[calc(100%-2rem)] max-w-md">
          <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-xl px-3 py-2 flex items-center justify-between">
            {[
              { icon: <Home className="w-5 h-5" />, key: 'home' },
              { icon: <ShoppingBag className="w-5 h-5" />, key: 'food' },
              { icon: <Map className="w-5 h-5" />, key: 'ride' },
              { icon: <User className="w-5 h-5" />, key: 'profile' },
            ].map((i) => (
              <motion.button key={i.key} whileTap={{ scale: 0.96 }} onClick={() => onNavigate?.(i.key)} className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 inline-flex items-center justify-center">
                {i.icon}
              </motion.button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
}
