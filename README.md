# CarMaster – From Zero to Pro

An interactive single-page web app that teaches everything about cars, from what a car is to ECU tuning, F1 aerodynamics and solid-state batteries.

Built with **React 18 + Vite + Tailwind CSS**. There is no backend: progress, XP, streaks, badges and your certificate are saved in `localStorage`.

## Features

| Section | What's inside |
|---|---|
| **Dashboard** | Progress ring, XP rank, streak, Continue Learning, Daily Car Fact, Featured Car of the Day, badges |
| **Learn** | 6 levels, 54 lessons (540–700+ words each), key takeaways, 5-question quiz per lesson, embedded animations |
| **Car Encyclopedia** | 147 cars with full specs, search, filters (type, brand, fuel, country, price, horsepower), sorting, detail modal, compare up to 3, plus a guide to 19 body types (history, best for, pros/cons, examples, price range) |
| **Interactive Garage** | Clickable car cut-away (11 components) and an animation lab |
| **Engines Lab** | Slow-motion 4-stroke engine, 13 engine layouts with animated schematics, interactive horsepower-vs-torque chart, turbo/supercharger/NA simulator, parts glossary |
| **Pricing & Parts** | 40 parts with low/avg/high cost in USD and EUR, failure signs, DIY difficulty, lifespan and tips; a yearly running-cost calculator; maintenance schedule |
| **Quiz & Certification** | XP ranks, 14 badges, a quick quiz, a 30-question Final Exam and a printable **CarMaster Pro Certificate** with your name |

### Interactive animations (SVG + `requestAnimationFrame`)
- **Four-stroke cycle**: piston, crank, cams, valves, spark; play/pause, step and speed control
- **Brakes**: pedal → booster → master cylinder → caliper → disc heat; ABS on/off comparison
- **Manual gearbox**: H-pattern shifter, clutch (you get a grind if you forget it), dog collars, live ratios
- **Turbocharger**: turbine/compressor spool and lag, wastegate, blow-off valve; supercharger and NA modes
- **Drivetrain**: FWD/RWD/AWD/4WD power flow on dry/wet/snow/ice, wheelspin, cornering and driveline wind-up
- **Dashboard warning lights**: 20 lights with meaning, urgency and what to do

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview
```

## Project structure

```
src/
  data/          cars.js, lessons.js (+ lessons/level1–6.js), parts.js, carTypes.js,
                 engines.js, warningLights.js, facts.js, images.js
  components/    Navbar, Hero, LessonCard, CarCard, EngineAnimation, Quiz, PartsTable,
                 Calculator, CarExplorer, WarningLights, PowerCurve, Tachometer, ...
  components/animations/  Brake, Gearbox, Turbo, Drivetrain animations + shared controls
  pages/         Home, Learn, LessonView, Encyclopedia, Garage, EnginesLab, Pricing, QuizCenter
  context/       ProgressContext (XP, streaks, badges, localStorage)
```

Routing is hash-based (`#/learn/l2-1`, `#/encyclopedia?car=ferrari-f40`), so the built app works from any static host.

## Notes
- Photos are loaded from Unsplash (`images.unsplash.com`). If a photo cannot load, a generated illustration is shown instead, so the UI never shows broken images.
- Specs and prices are approximate and for education only.
