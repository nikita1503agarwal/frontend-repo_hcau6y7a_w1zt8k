import { motion } from 'framer-motion'
import { Settings, LogOut, User } from 'lucide-react'

export default function Profile() {
  return (
    <div className="px-6 pt-6 pb-28">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-inner" />
        <div>
          <div className="font-semibold text-slate-900 dark:text-white">Alex Johnson</div>
          <div className="text-sm text-slate-500 dark:text-zinc-400">Premium Member</div>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow">
        {[
          { icon: <User className="w-5 h-5" />, label: 'Account' },
          { icon: <Settings className="w-5 h-5" />, label: 'Settings' },
          { icon: <LogOut className="w-5 h-5" />, label: 'Logout' },
        ].map((i, idx) => (
          <motion.button key={idx} whileTap={{ scale: 0.99 }} className="w-full flex items-center gap-3 px-4 py-4 text-left border-b last:border-0 border-black/5 dark:border-white/5">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF8A00] inline-flex items-center justify-center">{i.icon}</div>
            <span className="text-slate-900 dark:text-white">{i.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
