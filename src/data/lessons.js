import level1 from './lessons/level1.js'
import level2 from './lessons/level2.js'
import level3 from './lessons/level3.js'
import level4 from './lessons/level4.js'
import level5 from './lessons/level5.js'
import level6 from './lessons/level6.js'

export const levels = [level1, level2, level3, level4, level5, level6]

// Wikipedia article whose lead photo/diagram illustrates each lesson.
const LESSON_WIKI = {
  'l1-1': 'Benz Patent-Motorwagen', 'l1-2': 'Four-stroke engine', 'l1-3': 'Car body style', 'l1-4': 'Dashboard',
  'l1-5': 'Crumple zone', 'l1-6': 'Hatchback', 'l1-7': 'Supercar', 'l1-8': 'Plug-in hybrid',
  'l2-1': 'Four-stroke engine', 'l2-2': 'Manual transmission', 'l2-3': 'Differential (mechanical device)', 'l2-4': 'Disc brake',
  'l2-5': 'MacPherson strut', 'l2-6': 'Rack and pinion', 'l2-7': 'Tire', 'l2-8': 'Catalytic converter',
  'l2-9': 'Radiator (engine cooling)', 'l2-10': 'Alternator (automotive)',
  'l3-1': 'Straight-six engine', 'l3-2': 'V8 engine', 'l3-3': 'Wankel engine', 'l3-4': 'Diesel engine', 'l3-5': 'Toyota Prius',
  'l3-6': 'Turbocharger', 'l3-7': 'Dynamometer', 'l3-8': 'Fuel injection', 'l3-9': 'Spark plug',
  'l4-1': 'Nissan Skyline GT-R', 'l4-2': 'Porsche 911', 'l4-3': 'Ford Mustang (first generation)', 'l4-4': 'Ferrari F40',
  'l4-5': 'Rolls-Royce Phantom VIII', 'l4-6': 'Citroën DS', 'l4-7': 'Hyundai Ioniq 5', 'l4-8': 'BYD Seal', 'l4-9': 'Nürburgring',
  'l5-1': 'Used car', 'l5-2': 'Vehicle inspection', 'l5-3': 'Motor oil', 'l5-4': 'Mechanic', 'l5-5': 'Exhaust system',
  'l5-6': 'Check engine light', 'l5-7': 'Vehicle registration plate', 'l5-8': 'Fuel economy in automobiles', 'l5-9': 'Jack (device)',
  'l6-1': 'Engine control unit', 'l6-2': 'Muffler', 'l6-3': 'Coilover', 'l6-4': 'Auto detailing', 'l6-5': 'Formula One car',
  'l6-6': 'Drifting (motorsport)', 'l6-7': 'Drag racing', 'l6-8': 'Solid-state battery', 'l6-9': 'Waymo',
}
levels.forEach((lvl) => lvl.lessons.forEach((l) => { l.wiki = LESSON_WIKI[l.id] }))

export const allLessons = levels.flatMap((lvl) =>
  lvl.lessons.map((lesson, i) => ({ ...lesson, level: lvl.id, levelTitle: lvl.title, index: i }))
)

export const getLesson = (id) => allLessons.find((l) => l.id === id)

export function getNextLesson(id) {
  const i = allLessons.findIndex((l) => l.id === id)
  return i >= 0 ? allLessons[i + 1] : undefined
}

export function getPrevLesson(id) {
  const i = allLessons.findIndex((l) => l.id === id)
  return i > 0 ? allLessons[i - 1] : undefined
}

// Approximate words of teaching content in a lesson
export const wordCount = (lesson) => lesson.content.split(/\s+/).filter(Boolean).length
