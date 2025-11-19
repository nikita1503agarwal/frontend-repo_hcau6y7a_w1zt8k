import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/Layout'
import Onboarding from './components/Onboarding'
import Home from './components/Home'
import FoodFlow from './components/FoodFlow'
import RideFlow from './components/RideFlow'
import Profile from './components/Profile'
import OrderTracking from './components/OrderTracking'

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true)
  const [screen, setScreen] = useState('home') // home | food | ride | profile | tracking | compare

  const handleSelect = (option) => {
    setScreen(option)
  }

  return (
    <Layout title="Glide" onNavigate={setScreen}>
      <div className="min-h-[calc(100vh-8rem)]">
        <AnimatePresence mode="wait">
          {showOnboarding ? (
            <motion.div key="onb">
              <Onboarding onDone={() => setShowOnboarding(false)} />
            </motion.div>
          ) : screen === 'home' ? (
            <motion.div key="home" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <Home onSelect={handleSelect} />
            </motion.div>
          ) : screen === 'food' ? (
            <motion.div key="food" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <FoodFlow onBack={() => setScreen('home')} />
            </motion.div>
          ) : screen === 'ride' ? (
            <motion.div key="ride" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <RideFlow onBack={() => setScreen('home')} />
            </motion.div>
          ) : screen === 'profile' ? (
            <motion.div key="profile" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <Profile />
            </motion.div>
          ) : screen === 'tracking' ? (
            <motion.div key="tracking" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <OrderTracking />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <ThemePanels />
    </Layout>
  )
}

function ThemePanels() {
  return (
    <div className="px-6 pb-40">
      <h3 className="text-sm font-semibold text-slate-600 dark:text-zinc-400 mb-3">Light & Dark Preview</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-3xl p-4 bg-white border border-black/5 shadow-sm">
          <div className="h-28 rounded-2xl bg-gradient-to-br from-orange-100 to-white mb-3" />
          <div className="h-3 w-24 rounded bg-slate-200 mb-2" />
          <div className="h-3 w-16 rounded bg-slate-200" />
        </div>
        <div className="rounded-3xl p-4 bg-zinc-900 border border-white/5 shadow-sm">
          <div className="h-28 rounded-2xl bg-gradient-to-br from-orange-500/20 to-zinc-900 mb-3" />
          <div className="h-3 w-24 rounded bg-zinc-700 mb-2" />
          <div className="h-3 w-16 rounded bg-zinc-700" />
        </div>
      </div>
    </div>
  )
}

export default App
