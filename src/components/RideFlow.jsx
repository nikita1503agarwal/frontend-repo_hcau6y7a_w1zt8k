import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, MapPin, Circle, Car, Navigation } from 'lucide-react'
import { useState } from 'react'

export default function RideFlow({ onBack }) {
  const [step, setStep] = useState('where')
  const [pickup, setPickup] = useState('My location')
  const [drop, setDrop] = useState('Work')

  return (
    <div className="pb-28">
      <Header title={step === 'where' ? 'Book Ride' : 'Choose Car'} onBack={onBack} />

      <AnimatePresence mode="wait">
        {step === 'where' && (
          <motion.div key="where" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="px-6">
            <div className="rounded-3xl p-4 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-md space-y-3">
              <Field icon={<Circle className="w-4 h-4 text-green-500" />} value={pickup} onChange={setPickup} placeholder="Pickup" />
              <Field icon={<MapPin className="w-4 h-4 text-red-500" />} value={drop} onChange={setDrop} placeholder="Dropoff" />
              <motion.button whileTap={{ scale: 0.98 }} onClick={() => setStep('cars')} className="w-full rounded-xl py-3 bg-[#FF8A00] text-white font-semibold">See cars</motion.button>
            </div>

            <div className="mt-6 h-72 rounded-3xl overflow-hidden bg-gradient-to-br from-sky-200 to-sky-300 relative">
              <motion.div className="absolute inset-0" animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0,0,0,0.05), transparent 40%), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.05), transparent 40%)', backgroundSize: '160% 160%' }} />
              <motion.div className="absolute left-10 top-10 w-8 h-8 rounded-full bg-white shadow-lg" animate={{ y: [0, 8, 0] }} transition={{ duration: 3, repeat: Infinity }} />
              <motion.div className="absolute right-10 bottom-12 w-8 h-8 rounded-full bg-white shadow-lg" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} />
              <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-6 rounded-full bg-black/70 text-white flex items-center justify-center gap-1">
                <Navigation className="w-4 h-4" />
                Live Map
              </motion.div>
            </div>
          </motion.div>
        )}

        {step === 'cars' && (
          <motion.div key="cars" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="px-6 space-y-4">
            {[
              { name: 'Bolt Mini', eta: '3 min', price: '$5.90' },
              { name: 'Bolt', eta: '4 min', price: '$7.20' },
              { name: 'Comfort', eta: '6 min', price: '$9.80' },
            ].map((c, i) => (
              <motion.button key={i} whileTap={{ scale: 0.98 }} className="w-full rounded-2xl p-4 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF8A00] inline-flex items-center justify-center">
                    <Car className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">{c.name}</div>
                    <div className="text-sm text-slate-500 dark:text-zinc-400">{c.eta} away</div>
                  </div>
                </div>
                <div className="font-semibold text-slate-900 dark:text-white">{c.price}</div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Header({ title, onBack }) {
  return (
    <div className="sticky top-0 z-10 bg-white/80 dark:bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-6 py-4 flex items-center gap-3">
      <button onClick={onBack} className="rounded-xl p-2 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow">
        <ArrowLeft className="w-5 h-5" />
      </button>
      <h2 className="font-semibold text-slate-900 dark:text-white">{title}</h2>
    </div>
  )
}

function Field({ icon, value, onChange, placeholder }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white dark:bg-zinc-950 border border-black/5 dark:border-white/5 px-3 py-2">
      <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#FF8A00] inline-flex items-center justify-center">{icon}</div>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="flex-1 bg-transparent outline-none text-slate-900 dark:text-white placeholder:text-slate-400" />
    </div>
  )
}
