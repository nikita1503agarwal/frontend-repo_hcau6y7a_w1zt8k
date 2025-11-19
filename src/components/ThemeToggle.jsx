import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ accent = '#FF8A00' }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored || (prefersDark ? 'dark' : 'light')
    setTheme(initial)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium shadow-sm bg-white text-slate-900 dark:bg-zinc-900 dark:text-zinc-100 border border-black/5 dark:border-white/5 hover:shadow-md transition-all active:scale-[0.98]"
      style={{ '--accent': accent }}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-[color:var(--accent)]" />
      ) : (
        <Moon className="w-4 h-4 text-[color:var(--accent)]" />
      )}
      <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}
