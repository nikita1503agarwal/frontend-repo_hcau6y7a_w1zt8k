import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ShoppingBag } from 'lucide-react'
import { useState } from 'react'

const restaurants = [
  { id: 1, name: 'Sunny Bites', eta: '25-35 min', rating: 4.7, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Miso Love', eta: '15-25 min', rating: 4.8, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Green Bowl', eta: '20-30 min', rating: 4.6, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop' },
]

const menus = {
  1: [
    { id: 'b1', name: 'Cheese Burger', price: 8.9, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop' },
    { id: 'b2', name: 'Fries Box', price: 3.5, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGVlc2UlMjBCdXJnZXJ8ZW58MHwwfHx8MTc2MzU4ODkyOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  ],
  2: [
    { id: 's1', name: 'Salmon Roll', price: 11.9, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop' },
    { id: 's2', name: 'Miso Soup', price: 2.9, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGVlc2UlMjBCdXJnZXJ8ZW58MHwwfHx8MTc2MzU4ODkyOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  ],
  3: [
    { id: 'g1', name: 'Avocado Bowl', price: 9.9, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop' },
    { id: 'g2', name: 'Kale Salad', price: 7.5, image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop' },
  ],
}

export default function FoodFlow({ onBack }) {
  const [step, setStep] = useState('list')
  const [active, setActive] = useState(null)
  const [cart, setCart] = useState([])

  const add = (item) => setCart([...cart, item])
  const total = cart.reduce((s, i) => s + i.price, 0)

  return (
    <div className="pb-28">
      <Header title={step === 'list' ? 'Restaurants' : step === 'menu' ? active?.name : 'Checkout'} onBack={onBack} />

      <AnimatePresence mode="wait">
        {step === 'list' && (
          <motion.div key="list" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="px-6 grid gap-4">
            {restaurants.map((r) => (
              <motion.button
                whileTap={{ scale: 0.98 }}
                key={r.id}
                onClick={() => { setActive(r); setStep('menu') }}
                className="rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 text-left shadow-md"
              >
                <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url(${r.image})` }} />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900 dark:text-white">{r.name}</h3>
                    <span className="text-sm text-slate-500 dark:text-zinc-400">{r.eta}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}

        {step === 'menu' && (
          <motion.div key="menu" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="px-6 grid gap-4">
            {menus[active.id].map((m) => (
              <div key={m.id} className="rounded-2xl p-3 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-sm flex items-center gap-3">
                <div className="w-16 h-16 rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${m.image})` }} />
                <div className="flex-1">
                  <div className="font-medium text-slate-900 dark:text-white">{m.name}</div>
                  <div className="text-sm text-slate-500 dark:text-zinc-400">${m.price.toFixed(2)}</div>
                </div>
                <motion.button whileTap={{ scale: 0.96 }} onClick={() => add(m)} className="px-3 py-2 rounded-xl bg-[#FF8A00] text-white text-sm font-semibold">Add</motion.button>
              </div>
            ))}

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => setStep('checkout')}
              className="fixed left-4 right-4 bottom-24 rounded-2xl py-3 bg-[#FF8A00] text-white font-semibold shadow-[0_10px_20px_rgba(255,138,0,0.35)]"
            >
              <div className="inline-flex items-center gap-2 justify-center">
                <ShoppingBag className="w-5 h-5" />
                Checkout • ${total.toFixed(2)}
              </div>
            </motion.button>
          </motion.div>
        )}

        {step === 'checkout' && (
          <motion.div key="checkout" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="px-6">
            <div className="rounded-3xl p-5 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-md">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Your order</h3>
              <div className="space-y-3 mb-4">
                {cart.map((c, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <span className="text-slate-700 dark:text-zinc-300">{c.name}</span>
                    <span className="text-slate-500 dark:text-zinc-400">${c.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between font-medium text-slate-900 dark:text-white">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <motion.button whileTap={{ scale: 0.98 }} className="w-full mt-4 rounded-2xl py-3 bg-[#FF8A00] text-white font-semibold shadow-[0_10px_20px_rgba(255,138,0,0.35)]">Place order</motion.button>
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
