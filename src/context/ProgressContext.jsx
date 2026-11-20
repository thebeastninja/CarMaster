import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { levels, allLessons } from '../data/lessons.js'

const KEY = 'carmaster-progress-v1'
const ProgressContext = createContext(null)

const today = () => new Date().toISOString().slice(0, 10)
const dayDiff = (a, b) => Math.round((new Date(b) - new Date(a)) / 86400000)

const initial = {
  name: '',
  xp: 0,
  completed: {},      // lessonId -> true
  quizScores: {},     // lessonId -> best score (0-5)
  badges: {},         // badgeId -> ISO date earned
  streak: 0,
  bestStreak: 0,
  lastActive: null,
  viewedCars: {},     // carId -> true
  animationsSeen: {}, // animationId -> true
  lastLesson: null,
  exam: null,         // { score, total, passed, date, name }
}

export const RANKS = [
  { min: 0, name: 'Learner Driver', icon: '🔰' },
  { min: 300, name: 'Garage Apprentice', icon: '🔧' },
  { min: 900, name: 'Weekend Wrencher', icon: '🛠️' },
  { min: 1800, name: 'Gearhead', icon: '⚙️' },
  { min: 3000, name: 'Car Enthusiast', icon: '🏎️' },
  { min: 4500, name: 'Master Technician', icon: '🏁' },
  { min: 6500, name: 'CarMaster Pro', icon: '🏆' },
]

export const BADGES = [
  { id: 'first-gear', name: 'First Gear', icon: '🚦', desc: 'Complete your first lesson.' },
  { id: 'engine-rookie', name: 'Engine Rookie', icon: '🔩', desc: 'Complete Level 1: Car Basics.' },
  { id: 'transmission-master', name: 'Transmission Master', icon: '⚙️', desc: 'Complete Level 2: How Cars Work.' },
  { id: 'engine-guru', name: 'Engine Guru', icon: '🔥', desc: 'Complete Level 3: Engines Deep Dive.' },
  { id: 'world-traveler', name: 'World Traveler', icon: '🌍', desc: 'Complete Level 4: Car Types of the World.' },
  { id: 'smart-owner', name: 'Smart Owner', icon: '🧾', desc: 'Complete Level 5: Buying, Owning & Maintenance.' },
  { id: 'car-expert', name: 'Car Expert', icon: '🏎️', desc: 'Complete Level 6: Pro Level.' },
  { id: 'pro-mechanic', name: 'Pro Mechanic', icon: '🏆', desc: 'Pass the CarMaster Final Exam.' },
  { id: 'perfect-lap', name: 'Perfect Lap', icon: '💯', desc: 'Score 5/5 on any lesson quiz.' },
  { id: 'quiz-machine', name: 'Quiz Machine', icon: '🧠', desc: 'Get a perfect score on 10 quizzes.' },
  { id: 'streak-3', name: 'Warming Up', icon: '🔥', desc: 'Learn 3 days in a row.' },
  { id: 'streak-7', name: 'Full Throttle', icon: '🚀', desc: 'Learn 7 days in a row.' },
  { id: 'explorer', name: 'Encyclopedia Explorer', icon: '📚', desc: 'Open 20 cars in the Encyclopedia.' },
  { id: 'lab-tech', name: 'Lab Technician', icon: '🧪', desc: 'Try all 5 interactive animations.' },
]

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? { ...initial, ...JSON.parse(raw) } : initial
  } catch {
    return initial
  }
}

function computeBadges(s) {
  const earned = { ...s.badges }
  const give = (id) => { if (!earned[id]) earned[id] = today() }
  const done = Object.keys(s.completed).length
  if (done >= 1) give('first-gear')
  const levelBadges = ['engine-rookie', 'transmission-master', 'engine-guru', 'world-traveler', 'smart-owner', 'car-expert']
  levels.forEach((lvl, i) => {
    if (lvl.lessons.every((l) => s.completed[l.id])) give(levelBadges[i])
  })
  const perfects = Object.values(s.quizScores).filter((v) => v >= 5).length
  if (perfects >= 1) give('perfect-lap')
  if (perfects >= 10) give('quiz-machine')
  if (s.bestStreak >= 3) give('streak-3')
  if (s.bestStreak >= 7) give('streak-7')
  if (Object.keys(s.viewedCars).length >= 20) give('explorer')
  if (Object.keys(s.animationsSeen).length >= 5) give('lab-tech')
  if (s.exam?.passed) give('pro-mechanic')
  return earned
}

export function ProgressProvider({ children }) {
  const [state, setState] = useState(load)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(state)) } catch { /* storage unavailable */ }
  }, [state])

  // Apply a change, update streak, compute badges and announce new ones.
  const update = useCallback((fn) => {
    setState((prev) => {
      const result = fn(prev)
      if (result === prev) return prev
      const next = { ...result }
      const t = today()
      if (next.lastActive !== t) {
        const gap = next.lastActive ? dayDiff(next.lastActive, t) : null
        next.streak = gap === 1 ? next.streak + 1 : 1
        next.bestStreak = Math.max(next.bestStreak, next.streak)
        next.lastActive = t
      }
      const badges = computeBadges(next)
      const fresh = Object.keys(badges).filter((b) => !prev.badges[b])
      if (fresh.length) {
        const b = BADGES.find((x) => x.id === fresh[0])
        setTimeout(() => setToast({ type: 'badge', ...b }), 50)
        next.xp += fresh.length * 100
      }
      next.badges = badges
      return next
    })
  }, [])

  const api = useMemo(() => {
    const totalLessons = allLessons.length
    const doneCount = Object.keys(state.completed).length
    const rank = [...RANKS].reverse().find((r) => state.xp >= r.min) || RANKS[0]
    const nextRank = RANKS.find((r) => r.min > state.xp)
    return {
      state,
      toast,
      clearToast: () => setToast(null),
      totalLessons,
      doneCount,
      percent: Math.round((doneCount / totalLessons) * 100),
      rank,
      nextRank,
      setName: (name) => update((s) => ({ ...s, name })),
      openLesson: (id) => update((s) => ({ ...s, lastLesson: id })),
      completeLesson: (id, xp = 50) =>
        update((s) => {
          if (s.completed[id]) return s
          setTimeout(() => setToast({ type: 'xp', name: `+${xp} XP`, desc: 'Lesson complete!', icon: '✅' }), 30)
          return { ...s, completed: { ...s.completed, [id]: true }, xp: s.xp + xp }
        }),
      recordQuiz: (id, score) =>
        update((s) => {
          const prevBest = s.quizScores[id] ?? 0
          const gain = Math.max(0, score - prevBest) * 10
          return { ...s, quizScores: { ...s.quizScores, [id]: Math.max(prevBest, score) }, xp: s.xp + gain }
        }),
      viewCar: (id) => update((s) => (s.viewedCars[id] ? s : { ...s, viewedCars: { ...s.viewedCars, [id]: true }, xp: s.xp + 2 })),
      seeAnimation: (id) =>
        update((s) => (s.animationsSeen[id] ? s : { ...s, animationsSeen: { ...s.animationsSeen, [id]: true }, xp: s.xp + 15 })),
      recordExam: (exam) =>
        update((s) => ({ ...s, exam: s.exam?.passed && !exam.passed ? s.exam : exam, xp: s.xp + (exam.passed && !s.exam?.passed ? 500 : 0) })),
      reset: () => { setState(initial) },
    }
  }, [state, toast, update])

  return <ProgressContext.Provider value={api}>{children}</ProgressContext.Provider>
}

export const useProgress = () => useContext(ProgressContext)
