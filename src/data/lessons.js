import level1 from './lessons/level1.js'
import level2 from './lessons/level2.js'
import level3 from './lessons/level3.js'
import level4 from './lessons/level4.js'
import level5 from './lessons/level5.js'
import level6 from './lessons/level6.js'

export const levels = [level1, level2, level3, level4, level5, level6]

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
