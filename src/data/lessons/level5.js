import { pick } from '../images.js'

export default {
  id: 5,
  slug: 'owning',
  title: 'Buying, Owning & Maintenance',
  tag: 'Expert',
  icon: '🧾',
  description: 'Buy smart, maintain properly and diagnose problems by sound, smell and warning lights. Plus insurance, registration and fuel economy.',
  lessons: [
    {
      id: 'l5-1',
      title: 'New vs Used: Making the Choice',
      summary: 'Depreciation, financing, warranties and the sweet spot for value.',
      minutes: 7,
      image: pick('everyday', 3),
      content: `
Buying a car is usually the second-biggest purchase people make after a home. The smartest buyers understand one word above all others: **depreciation**.

## Depreciation: the biggest cost of owning a car

Depreciation is the loss of value over time. A typical new car loses around **15–20 percent in its first year** and roughly **40–60 percent after five years**. On a $40,000 car, that could be $20,000 lost, more than you will spend on fuel, insurance or maintenance in the same period. Luxury cars and some EVs depreciate faster; trucks, Toyotas, Porsches and some sports cars hold value best.

## Buying new

- **Pros:** full warranty (typically 3–5 years; Kia 7 years in Europe; Hyundai 10-year powertrain in the US), latest safety tech, known history, choose your exact spec, often cheap financing deals (0–3% APR offers).
- **Cons:** steepest depreciation, higher insurance, you pay for options that add little resale value.

## Buying used

- **Pros:** someone else took the big depreciation hit; more car for your money; lower insurance.
- **Cons:** unknown history, risk of hidden problems, shorter or no warranty, higher financing rates.

## The sweet spot

For most people, the best value is a **2–4-year-old car** with full service history, ideally an **ex-lease** or **certified pre-owned (CPO)** car from a dealer. CPO cars have passed a multi-point inspection and come with an extended manufacturer warranty. You get a nearly new car at 30–50 percent off the new price.

## Paying for the car

- **Cash** – cheapest overall, no interest.
- **Loan / hire purchase (HP)** – you borrow and own the car at the end. Compare the **APR** (annual percentage rate), not the monthly payment. A longer loan lowers the payment but increases total interest.
- **PCP (Personal Contract Purchase)** – popular in the UK and Europe. Low monthly payments with a large optional **balloon payment** at the end to keep the car. You can hand it back instead. Watch mileage limits and damage charges.
- **Leasing (PCH)** – you rent the car for 2–4 years, then return it. No ownership, but predictable costs, and you always drive a new car.

**The 20/4/10 rule** is a sensible guide: put down at least 20 percent, finance for no more than 4 years, and keep total car costs (payment, insurance, fuel) under 10 percent of your gross income.

## Choosing the right car

Before falling in love with a model, list your real needs:

- How many people do you carry regularly? How much luggage?
- What is your daily distance? Can you charge at home?
- City, motorway, or rural roads? Snow?
- What is your total monthly budget, including insurance, fuel and maintenance?

Then research **reliability** data (Consumer Reports, J.D. Power, TÜV report in Germany, What Car? in the UK), **safety ratings** (Euro NCAP, IIHS), **insurance groups**, and **common problems** on owners' forums for the exact engine and year.

## Negotiation tips

- Know the market value before you visit (use price guides and listings).
- Negotiate the **total price**, not the monthly payment.
- Get financing quotes from your bank first so you can compare dealer offers.
- Get a separate quote for your **trade-in** (online buying services), so the dealer cannot hide a low trade-in in a "discount".
- End of month and end of quarter, dealers chase targets, so discounts can be bigger.
- Be willing to walk away. There is always another car.

> **Total cost of ownership (TCO)** = depreciation + financing + insurance + fuel/charging + maintenance + tax/registration. Two cars with the same price can differ by thousands per year in TCO. Use the Maintenance Cost Calculator in the Pricing section to estimate yours.
`,
      keyPoints: [
        'Depreciation: ~15–20% in year one, ~50% after five years.',
        'Sweet spot: a 2–4-year-old certified pre-owned car.',
        'Compare APR and total price, not monthly payments.',
        '20/4/10 rule: 20% down, ≤4 years, ≤10% of income.',
      ],
      quiz: [
        { q: 'What is usually the largest cost of owning a new car?', o: ['Fuel', 'Insurance', 'Depreciation', 'Tyres'], a: 2, e: 'A new car can lose half its value in five years.' },
        { q: 'What does CPO stand for?', o: ['Car Purchase Option', 'Certified Pre-Owned', 'Cheap Private Offer', 'Certified Price Only'], a: 1, e: 'CPO cars are inspected and come with an extended warranty.' },
        { q: 'In a PCP deal, what is the balloon payment?', o: ['A deposit', 'A large optional final payment to keep the car', 'Insurance', 'A late fee'], a: 1, e: 'You can pay it, trade in, or hand the car back.' },
        { q: 'When negotiating, what should you focus on?', o: ['The monthly payment', 'The total price', 'The colour', 'Free floor mats'], a: 1, e: 'Monthly payments can hide long terms and high interest.' },
        { q: 'What does the 20/4/10 rule recommend?', o: ['20% down, ≤4-year loan, ≤10% of income on car costs', '20 years, 4 cars, 10 services', '20 mpg, 4 doors, 10 airbags', '20% interest max'], a: 0, e: 'A simple way to keep car costs affordable.' },
      ],
    },
    {
      id: 'l5-2',
      title: 'Inspecting a Used Car',
      summary: 'The step-by-step checklist pros use before handing over money.',
      minutes: 8,
      image: pick('classic', 0),
      content: `
A careful inspection can save you from buying someone else's expensive problem. Follow this checklist in order, and **always inspect in daylight and dry weather**, because rain and darkness hide paint defects and leaks.

## 1. Paperwork first

- **Vehicle history report** (Carfax/AutoCheck in the US, HPI check in the UK, etc.) to check for outstanding finance, write-offs, theft and mileage discrepancies.
- **Check the VIN** (Vehicle Identification Number) on the documents matches the car: typically at the base of the windscreen, on the door pillar, and stamped on the body.
- **Service history** – stamped book or invoices showing oil changes on time and major items done (timing belt, gearbox oil, brake fluid). Gaps are a warning.
- **Inspection history** – in the UK, the MOT history is free online and shows past mileages and advisories.
- Check the **number of owners** and that the seller's name and address match the registration document.

## 2. Exterior walk-around

- **Panel gaps** should be even. Uneven gaps suggest accident repairs.
- **Paint** – look along the panels at an angle for ripples, colour mismatch or overspray on rubber seals and trim. A cheap paint depth gauge reveals repainted panels.
- **Rust** – check wheel arches, sills, door bottoms, the boot floor and underneath. Surface rust is cosmetic; bubbling or holes are structural concerns.
- **Glass** – chips and cracks; check that all glass has the same manufacturer logo (mismatched glass may indicate a crash).
- **Tyres** – matching premium brands are a sign of a caring owner. Uneven wear indicates alignment or suspension problems. Check the DOT date.
- **Lights** – all working, no condensation inside.

## 3. Under the bonnet (engine cold!)

Ask the seller **not to warm up the car** before you arrive. A cold start reveals starting problems, rattles and smoke.

- **Oil** – level and condition. Milky residue under the oil cap could mean head-gasket failure. Very black, gritty oil means neglect.
- **Coolant** – correct level and colour, no oil film floating in it.
- **Leaks** – look for fresh oil on the engine and underneath; look on the ground where the car was parked.
- **Belts and hoses** – no cracks or bulges.
- **Battery** – age (date sticker) and corrosion on terminals.

## 4. Interior

- Does wear on the **steering wheel, gear knob, pedals and driver's seat** match the claimed mileage? A shiny worn wheel on a "40,000 km" car is suspicious.
- Test **every** electrical feature: windows, mirrors, A/C (it should blow cold within a minute), heater, infotainment, seat adjusters, sunroof, locks.
- Smell for **damp** (water leaks) or a **sweet smell** (heater core leak). Lift carpets in the footwells and boot to check for water.
- With the ignition on but engine off, **all dashboard warning lights should illuminate** and then go out after starting. A light that never illuminates may have been disconnected to hide a fault.

## 5. Test drive (at least 20–30 minutes)

- **Cold start:** listen for rattles (timing chain), knocks, squeals; look for smoke from the exhaust.
- **Clutch** (manual): it should bite in the middle of the pedal travel. A high bite point or slipping in high gears under load means a worn clutch.
- **Gearbox:** smooth shifts in all gears with no crunching (manual) or harsh/delayed shifts (automatic). Test reverse.
- **Brakes:** straight-line stop without pulling, no vibration, no grinding.
- **Steering:** the car should track straight with the wheel centred; no clunks over bumps.
- **Suspension:** drive over speed bumps; listen for knocks.
- **Engine:** smooth acceleration through the rev range, no hesitation or warning lights. Check the temperature gauge stays stable.
- **Motorway speed:** check for vibration (wheel balance) and wind or bearing noise (a hum that changes when turning).

## 6. Get a professional inspection

For anything more than a cheap runaround, pay for a **pre-purchase inspection (PPI)** by an independent mechanic or a service like the AA/RAC/ADAC ($100–$300). They can lift the car, scan for fault codes and spot issues you would miss. For EVs, ask for a **battery state-of-health (SoH)** report.

> **Red flags to walk away:** seller refuses an inspection, no service history on a premium car, a "clean" engine bay on an old car (may hide leaks), warm engine on arrival, mileage inconsistencies, outstanding finance, or pressure to decide immediately.
`,
      keyPoints: [
        'Check VIN, history report and service records first.',
        'Inspect cold: cold starts reveal hidden problems.',
        'Wear should match mileage; test every feature.',
        'Always get a pre-purchase inspection on valuable cars.',
      ],
      quiz: [
        { q: 'Why should you see a used car with a cold engine?', o: ['It saves fuel', 'Cold starts reveal starting problems, rattles and smoke', 'It is easier to open the bonnet', 'Paint looks better'], a: 1, e: 'A pre-warmed engine can hide issues.' },
        { q: 'Uneven panel gaps usually suggest...', o: ['Good build quality', 'Previous accident repairs', 'New paint', 'Low mileage'], a: 1, e: 'Factory gaps are consistent; repairs often leave uneven gaps.' },
        { q: 'With the ignition on (engine off), what should happen to warning lights?', o: ['None should light', 'All should illuminate briefly, then go out after starting', 'Only the oil light', 'They flash randomly'], a: 1, e: 'This bulb check proves the lights work and are not disconnected.' },
        { q: 'A high clutch bite point usually means...', o: ['A new clutch', 'A worn clutch', 'Low tyre pressure', 'A good gearbox'], a: 1, e: 'As the friction disc wears, the bite point rises.' },
        { q: 'What should you ask for when buying a used EV?', o: ['Oil service history', 'Battery state-of-health report', 'Spark plug receipts', 'Timing belt history'], a: 1, e: 'The battery is the most valuable component.' },
      ],
    },
    {
      id: 'l5-3',
      title: 'The Maintenance Schedule',
      summary: 'What to service and when: oil, filters, brakes, tyres, belts and fluids.',
      minutes: 7,
      image: pick('engine', 0),
      content: `
Regular maintenance is the single best way to make a car last 300,000+ km. Skipping it saves a little money now and costs a lot later. Always follow **your car's owner's manual**, as intervals vary by model, but these are typical guidelines.

## Monthly checks (DIY, 10 minutes)

- **Tyre pressures** (cold) and a visual check for damage and tread depth.
- **Oil level** on the dipstick or digital display.
- **Coolant level** in the expansion tank (cold engine only).
- **Washer fluid**.
- **All lights**: headlights, brake lights, indicators.
- Look under the car where you park for **new drips** (brown/black = oil, green/pink/orange = coolant, red = transmission or power steering fluid, clear = A/C condensation, which is normal).

## Typical service intervals

| Item | Typical interval | Notes |
|---|---|---|
| Engine oil & filter | 10,000–15,000 km or 1 year | 5,000–8,000 km for hard use, turbos or older cars |
| Air filter | 20,000–40,000 km | More often in dusty areas |
| Cabin (pollen) filter | 15,000–30,000 km or 1 year | Musty smell = overdue |
| Spark plugs | 60,000–160,000 km | Iridium plugs last longest |
| Brake fluid | Every 2 years | Regardless of mileage |
| Coolant | 5 years / 100,000–160,000 km | Long-life types |
| Brake pads | 30,000–70,000 km | Inspect at each service |
| Brake discs | Every 2nd pad change | Check minimum thickness |
| Tyres | 40,000–80,000 km | Rotate every 10,000 km |
| Timing belt | 100,000–160,000 km or 5–10 years | Replace water pump at the same time |
| Automatic transmission fluid | 60,000–100,000 km | Many "lifetime" fills benefit from a change |
| Manual gearbox oil | 100,000 km+ | Often overlooked |
| 12 V battery | 4–6 years | Test annually after year 3 |
| Wiper blades | 6–12 months | Streaks or chattering = replace |
| Wheel alignment | Every 2 years or after pothole impacts | Pulling or uneven wear |

## Severe service conditions

Your car may need the **"severe" schedule** (roughly half the normal intervals) if you mostly do short trips under 10 km, drive in stop-start traffic, tow, live somewhere very hot, cold or dusty, or drive hard on track. Surprisingly, most city drivers fall into this category.

## Timing belt vs chain

Some engines use a rubber **timing belt** to drive the camshafts; others use a metal **timing chain**. A belt must be replaced on schedule. If it snaps on an **interference engine** (where valves and pistons share space), the pistons hit the valves, often destroying the engine. Chains generally last the life of the engine but can stretch, especially with poor oil maintenance; a rattle on cold start is a warning.

## EV maintenance

EVs need much less maintenance: no oil, spark plugs, timing belts, exhaust or clutch. You still need to look after:

- **Tyres** – EVs are heavy and torquey, so tyres can wear 20–30% faster.
- **Brakes** – pads last very long, but calipers can seize from lack of use; brake fluid every 2 years.
- **Cabin filter**, wipers, 12 V battery, suspension, and **coolant** for the battery thermal system (often 150,000+ km).

Typical EV maintenance costs are **30–50 percent lower** than a comparable petrol car.

## Dealer vs independent garage

In many regions (including the EU and UK) you can service your car at an independent garage during the warranty without voiding it, as long as they use approved parts and fluids and follow the schedule. Independents are often 30–50 percent cheaper. Keep all receipts, as a complete service history adds significantly to resale value.

> **Golden rule:** Oil is the cheapest insurance you can buy. An oil change costs $50–$120; a new engine costs $4,000–$10,000+.
`,
      keyPoints: [
        'Check tyres, oil, coolant and lights monthly.',
        'Oil yearly or every 10–15k km; brake fluid every 2 years.',
        'Replace timing belts on schedule: failure can destroy interference engines.',
        'EVs cost 30–50% less to maintain.',
      ],
      quiz: [
        { q: 'How often should brake fluid typically be changed?', o: ['Never', 'Every 2 years', 'Every 10 years', 'Every oil change'], a: 1, e: 'Brake fluid absorbs moisture over time.' },
        { q: 'What can happen if a timing belt snaps on an interference engine?', o: ['Nothing serious', 'Pistons hit the valves, often destroying the engine', 'The radio stops', 'The car runs faster'], a: 1, e: 'Replace belts on schedule, ideally with the water pump.' },
        { q: 'A red fluid drip under the car is most likely...', o: ['Water', 'Transmission or power steering fluid', 'Washer fluid', 'Fuel'], a: 1, e: 'Brown/black = oil, green/pink = coolant, clear = A/C condensation.' },
        { q: 'Mostly short trips under 10 km usually mean...', o: ['Less maintenance needed', 'The severe service schedule applies', 'No oil changes needed', 'Better fuel economy'], a: 1, e: 'Short trips cause condensation and fuel dilution in oil.' },
        { q: 'Which is still needed on an EV?', o: ['Spark plugs', 'Oil changes', 'Tyre rotation and brake fluid', 'Timing belt'], a: 2, e: 'EVs still have tyres, brakes, suspension and coolant.' },
      ],
    },
    {
      id: 'l5-4',
      title: 'Diagnosing Problems by Sound',
      summary: 'Squeals, grinds, knocks, clunks and hums: what your car is telling you.',
      minutes: 7,
      image: pick('engine', 1),
      content: `
Experienced mechanics can often diagnose a car before opening the bonnet, just by listening. The key is to notice **when** a sound happens (braking, turning, accelerating, cold start, over bumps) and whether it changes with **engine speed** or **road speed**.

## Engine speed vs road speed

A useful first test: does the noise change when you rev the engine while parked, or only when the car is moving?

- If it changes with **engine rpm** (even in neutral), the problem is in the engine or its accessories (belts, pulleys, alternator, water pump, exhaust).
- If it changes with **road speed** regardless of gear, look at wheels, tyres, wheel bearings, brakes, driveshafts and differential.

## Squealing

- **High-pitched squeal on cold start or when turning the steering on full lock** – a slipping **accessory (serpentine) belt**. Often worn or loose. Cheap fix.
- **Squeal when braking** – **brake wear indicators**, small metal tabs designed to squeal when pads are low. Also caused by glazed pads or dust.
- **Squeal from tyres in slow corners** – often low tyre pressure.

## Grinding

- **Grinding when braking** – pads worn down to the metal backing plate, now cutting into the discs. **Stop driving and fix immediately**; braking performance is reduced and repair costs climb fast.
- **Grinding when shifting gear** (manual) – worn **synchromesh** or a clutch not fully disengaging.
- **Grinding when starting** – the starter motor pinion not engaging properly with the flywheel.

## Knocking and tapping

- **Rhythmic ticking that speeds up with revs** – often **valvetrain** (low oil, worn hydraulic lifters) or an **exhaust manifold leak** (loudest when cold). Some direct-injection engines tick normally from their high-pressure injectors.
- **Deep knocking from the bottom of the engine that rises with load** – **rod knock**, a worn connecting-rod bearing. Very serious; the engine can fail catastrophically.
- **Pinging or rattling under hard acceleration** – **detonation (knock)**, from low-octane fuel, carbon build-up or overheating.

## Clunking

- **Clunk over bumps** – worn suspension parts: **anti-roll bar links** (most common and cheap), ball joints, bushes, top mounts, or a broken spring.
- **Clunk when shifting into drive or reverse, or on and off the throttle** – worn engine/gearbox mounts, driveshaft joints, or differential wear.

## Clicking

- **Clicking when turning at full lock while accelerating** – a worn **outer CV joint**, often because its rubber boot split and grease escaped. Replace before it fails.
- **Rapid clicking but no start** – a flat battery.

## Humming, droning and whining

- **Hum or growl that rises with road speed and changes when you swerve left or right** – a failing **wheel bearing**. Loading the bad bearing (turning away from it) makes it louder.
- **Whine that rises with engine rpm** – power steering pump (hydraulic systems), alternator, or a failing idler pulley.
- **Whine that rises with road speed under load or coast** – differential or gearbox bearings.
- **Turbo whistle getting much louder or a siren-like sound** – a failing turbo or a boost leak.

## Hissing

- **Hiss from the engine bay** – a **vacuum leak** (cracked hose) or a coolant leak hitting a hot surface.
- **Hiss after switching off** – normal for A/C pressure equalising or coolant settling.

## Roaring and rumbling

- **Loud, deep roar especially when accelerating** – a hole or failed joint in the **exhaust system**. Get it fixed: exhaust gases (including carbon monoxide) can enter the cabin.

> **Use your phone:** Record the noise and note when it happens. Most mechanics find a 20-second video with sound far more useful than "it makes a weird noise sometimes". Some apps can even analyse the frequency.
`,
      keyPoints: [
        'First test: does the sound follow engine rpm or road speed?',
        'Brake grinding = stop driving; pads are metal-on-metal.',
        'Clicking on full lock = worn CV joint.',
        'Hum that changes when swerving = wheel bearing.',
      ],
      quiz: [
        { q: 'A noise that changes with road speed but not engine rpm points to...', o: ['Engine accessories', 'Wheels, bearings, brakes or driveline', 'Spark plugs', 'The radio'], a: 1, e: 'Those components turn with the wheels.' },
        { q: 'Clicking when turning at full lock and accelerating suggests...', o: ['Worn CV joint', 'Bad battery', 'Low oil', 'Worn spark plug'], a: 0, e: 'Outer CV joints click when worn, often after a split boot.' },
        { q: 'A deep knock from the bottom of the engine rising with load is most likely...', o: ['A loose heat shield', 'Rod knock (worn bearing)', 'Normal injector tick', 'A wheel bearing'], a: 1, e: 'Very serious; stop driving and get it inspected.' },
        { q: 'A hum that gets louder when swerving one way suggests...', o: ['Wheel bearing failure', 'Exhaust leak', 'Low coolant', 'Bad spark plugs'], a: 0, e: 'Loading the failing bearing increases the noise.' },
        { q: 'A clunk over bumps is most commonly caused by...', o: ['Anti-roll bar links or other worn suspension parts', 'Low fuel', 'Old oil', 'A flat battery'], a: 0, e: 'Drop links are the most frequent culprit and cheap to replace.' },
      ],
    },
    {
      id: 'l5-5',
      title: 'Diagnosing by Smell, Smoke & Feel',
      summary: 'Burning, sweet, rotten-egg and fuel smells, plus vibrations and leaks.',
      minutes: 7,
      image: pick('classic', 1),
      content: `
Your nose, eyes and hands are excellent diagnostic tools. Many serious problems give off a distinctive smell or a feeling through the controls long before they become catastrophic.

## Smells

- **Sweet, syrupy smell** (like maple syrup) – **coolant (antifreeze)** leaking. If it is inside the cabin and the windows fog with a greasy film, suspect the **heater core**. From the exhaust with white smoke: head gasket. Coolant is toxic to people and pets.
- **Burnt oil smell** – oil dripping onto the hot exhaust, often from a leaking **valve cover gasket** or oil filter. Can become a fire risk.
- **Burnt carpet or acrid smell after hard braking** – overheated **brakes**. If it happens in normal driving on one wheel, a **sticking caliper** or handbrake left on.
- **Burnt toast or burnt paper smell when pulling away or on hills** – a **slipping clutch**. Common when learning or towing; persistent smell means it is worn.
- **Burning plastic or electrical smell** – an **electrical short** or overheating component. Stop, switch off and investigate. Could be a fire risk.
- **Rotten eggs (sulphur)** – the **catalytic converter** is overheating or failing, often due to a rich mixture or misfire.
- **Raw petrol** – a **fuel leak** (lines, injector seals, the tank) or a loose fuel cap. Do not ignore, as it is a fire risk. A brief smell after a cold start in an older car can be normal.
- **Musty, mouldy smell from the vents** – bacteria in the A/C evaporator, or a clogged **cabin filter**. Replace the filter and use an A/C cleaner.
- **Exhaust fumes inside the cabin** – a leak in the exhaust system or failed door/boot seals. Dangerous because of **carbon monoxide**; open windows and get it checked immediately.

## Smoke

- **Blue/grey smoke** – burning oil (piston rings, valve stem seals, turbo seals).
- **Thick white smoke that persists** with a sweet smell – burning coolant (head gasket or cracked head).
- **Thin white vapour on cold mornings that disappears once warm** – normal condensation.
- **Black smoke** – too much fuel: faulty injectors, a clogged air filter, a bad MAF or O₂ sensor, or an over-fuelled diesel tune.
- **Smoke from under the bonnet** – could be steam (coolant leak, overheating) or oil burning on the exhaust. Pull over safely.

## Vibrations and feel

- **Steering wheel shakes at 80–110 km/h** – usually an **unbalanced front wheel** (lost a balance weight). Cheap fix.
- **Vibration through the brake pedal and steering when braking** – uneven disc thickness ("warped" discs), often from overheating or uneven pad deposits.
- **Car pulls to one side** – incorrect tyre pressure, **wheel alignment**, a sticking brake caliper or a worn tyre.
- **Vibration under acceleration only** – worn inner CV joint, driveshaft or engine mounts.
- **Engine shaking at idle** – a **misfire** (bad spark plug, ignition coil, injector) or a worn engine mount.
- **Soft or spongy brake pedal** – air in the brake lines or worn master cylinder. **Pedal sinking to the floor** = serious brake fault: do not drive.
- **Heavy steering** – low tyre pressure, low power steering fluid or failed EPS.
- **Car feels "floaty" or bouncy** – worn dampers.

## Leaks: identify the fluid

| Colour | Feel / smell | Likely fluid |
|---|---|---|
| Light brown to black | Slippery | Engine oil |
| Green, pink, orange, blue | Sweet smell | Coolant |
| Red or pink | Oily, slightly sweet | ATF or power steering fluid |
| Clear to yellowish | Slippery, slightly fishy | Brake fluid (dangerous!) |
| Clear, no smell | Like water | A/C condensation (normal) |
| Blue | Watery | Washer fluid |
| Clear with strong odour | Volatile | Petrol / diesel |

> **Safety first:** Smells of fuel, burning electrical components, or exhaust fumes inside the cabin, and a sinking brake pedal, are all "stop driving now" situations. Everything else can usually wait for a booked appointment, but do not ignore it.
`,
      keyPoints: [
        'Sweet smell = coolant; rotten eggs = catalytic converter.',
        'Burnt-toast smell when pulling away = slipping clutch.',
        'Wheel shake at 80–110 km/h = wheel balance.',
        'Clear, slippery, fishy fluid near a wheel = brake fluid: dangerous.',
      ],
      quiz: [
        { q: 'A sweet, syrupy smell usually means...', o: ['Fuel leak', 'Coolant leak', 'Brake overheating', 'Burning oil'], a: 1, e: 'Glycol coolant smells sweet and is toxic.' },
        { q: 'A rotten-egg smell from the exhaust points to...', o: ['Catalytic converter problems', 'Low tyre pressure', 'Dirty cabin filter', 'Old wipers'], a: 0, e: 'Sulphur compounds come from an overheating or failing cat.' },
        { q: 'Steering wheel shake at around 100 km/h is most commonly caused by...', o: ['Unbalanced front wheels', 'Bad spark plugs', 'Low washer fluid', 'Bad battery'], a: 0, e: 'A lost balance weight is a cheap fix.' },
        { q: 'Black smoke from the exhaust indicates...', o: ['Burning oil', 'Too much fuel (rich mixture)', 'Normal condensation', 'Coolant leak'], a: 1, e: 'Check injectors, air filter and sensors.' },
        { q: 'Which symptom means you should stop driving immediately?', o: ['Musty vent smell', 'Brake pedal sinking to the floor', 'Squeaky wipers', 'Thin white vapour on a cold morning'], a: 1, e: 'Brake failure risk. Do not drive.' },
      ],
    },
    {
      id: 'l5-6',
      title: 'Dashboard Warning Lights',
      summary: 'Red, amber and green: what every major warning light means and what to do.',
      minutes: 7,
      image: pick('luxury', 2),
      animation: 'warningLights',
      content: `
Dashboard warning lights are your car's way of talking to you. They follow a traffic-light colour system that tells you how urgent the problem is. Learning them is one of the most practical skills in this whole course.

## The colour code

- **Red – stop safely as soon as possible.** A serious problem or safety issue: oil pressure, overheating, brakes, charging, airbags.
- **Amber/yellow – check soon.** Something needs attention but the car is usually safe to drive carefully to a garage: check engine, tyre pressure, ABS, traction control.
- **Green/blue – information only.** A system is active: headlights, high beams (blue), cruise control, indicators.

When you start the car, all lights illuminate briefly as a **bulb check**, then go out. A warning that stays on after starting needs attention.

## The critical red lights

- **Oil pressure (red oil can)** – the engine has lost oil pressure. **Stop immediately** and switch off. Driving even a minute or two without oil pressure can destroy the engine. Check the oil level; if it is fine, do not restart; get the car towed.
- **Coolant temperature (thermometer in waves)** – the engine is overheating. Pull over, switch off, let it cool. Do not open the radiator cap while hot.
- **Battery / charging (battery symbol)** – the charging system is not working (alternator, belt or wiring). The car is running on battery power and may die within minutes. Turn off unnecessary electrics and drive straight to a safe place or garage.
- **Brake system (circle with "!" or "BRAKE")** – the handbrake is on, brake fluid is low, or there is a brake system fault. If the handbrake is off and the light stays on, stop and check.
- **Airbag / SRS (seated person with circle)** – a fault in the airbag system; airbags may not deploy in a crash. Get it checked soon.
- **Power steering (steering wheel with "!")** – loss of assistance; steering will be very heavy.
- **EV high-voltage / powertrain fault (red car with "!" or turtle)** – reduced power mode; stop safely.

## The common amber lights

- **Check engine / MIL (engine outline)** – the engine ECU has stored a fault code. Causes range from a loose fuel cap to a failing catalytic converter. If it is **steady**, get the code read soon (an OBD-II reader shows it). If it is **flashing**, there is an active misfire: reduce speed and get it checked immediately to avoid destroying the catalytic converter.
- **Tyre pressure / TPMS (horseshoe with "!")** – one or more tyres are significantly low. Check pressures; if one is low after refilling, it may have a puncture.
- **ABS** – the anti-lock system is disabled. Normal brakes still work, but wheels can lock in an emergency stop.
- **Traction / stability control (car with squiggly lines)** – flashing means the system is actively working (slippery road). Steady means it is off or faulty.
- **Glow plug (coil)** – diesel preheating; wait until it goes out before starting. If it flashes while driving, there is an engine management fault.
- **DPF light** – the diesel particulate filter is clogged; usually a 15–20 minute motorway drive at steady speed will regenerate it.
- **Low fuel**, **washer fluid**, **service due (spanner)**, **lamp failure**, **AdBlue low**.

## Green and blue lights

Indicators, dipped headlights (green), **high beam (blue)**, front fog lights (green), rear fog light (amber), cruise control, eco mode, "ready" lights on hybrids and EVs.

## What to do when a warning comes on

1. Note the colour and whether it is steady or flashing.
2. Red: find a safe place to stop, switch off, check the owner's manual.
3. Amber: reduce load, drive gently and book a check.
4. Use an OBD-II reader for check-engine lights; search the code (e.g. P0420 = catalyst efficiency below threshold).
5. Never "fix" a light by disconnecting the bulb or clearing codes before selling a car. That is dishonest and often illegal.

> **Interactive guide:** Below you can tap each warning light to see what it means, how urgent it is and what to do.
`,
      keyPoints: [
        'Red = stop safely now; amber = check soon; green/blue = info.',
        'Red oil-pressure light: stop the engine immediately.',
        'Flashing check-engine = active misfire: slow down, get it checked.',
        'Battery light while driving = charging failure; car may die.',
      ],
      quiz: [
        { q: 'What does a red warning light generally mean?', o: ['Information only', 'Stop safely as soon as possible', 'Service in 6 months', 'Cruise control active'], a: 1, e: 'Red indicates serious or safety-critical issues.' },
        { q: 'What should you do if the oil pressure light comes on while driving?', o: ['Keep driving to the next town', 'Stop immediately and switch off', 'Rev the engine', 'Turn on the heater'], a: 1, e: 'Without oil pressure the engine can be destroyed in moments.' },
        { q: 'A flashing check-engine light means...', o: ['Time for an oil change', 'An active misfire that can damage the catalytic converter', 'Loose fuel cap', 'Low tyre pressure'], a: 1, e: 'Reduce speed and get it checked right away.' },
        { q: 'The horseshoe-shaped light with "!" indicates...', o: ['Low tyre pressure (TPMS)', 'Brake fault', 'Low fuel', 'Overheating'], a: 0, e: 'Check all four tyres when cold.' },
        { q: 'What colour is the high-beam indicator?', o: ['Red', 'Amber', 'Blue', 'Green'], a: 2, e: 'High beams are always shown in blue.' },
      ],
    },
    {
      id: 'l5-7',
      title: 'Insurance, Registration & Legal Stuff',
      summary: 'How insurance pricing works, coverage types, registration and inspections.',
      minutes: 7,
      image: pick('everyday', 0),
      content: `
Owning a car comes with legal responsibilities. Requirements vary by country and state, but the principles are the same almost everywhere.

## Car insurance basics

Insurance is legally required to drive on public roads in nearly every country. It protects you financially if you injure someone, damage property, or damage your own car.

**Main types of coverage:**

- **Third-party liability** – the legal minimum in most places. Covers injuries and damage you cause to **others**, not your own car.
- **Third-party, fire and theft** – adds cover if your car is stolen or catches fire.
- **Comprehensive (fully comp)** – also covers damage to your own car, even if the accident was your fault, plus vandalism, glass and weather damage. Often surprisingly not much more expensive than third-party.
- **Collision** (US term) – covers damage to your car in a crash; **comprehensive** (US) covers non-collision events like theft, hail and animals.
- **Uninsured/underinsured motorist** – protects you if the other driver has no or too little insurance.
- **GAP insurance** – covers the difference between what the insurer pays (market value) and what you still owe on finance, useful on new cars that depreciate fast.

## What affects your premium?

- **Driver:** age (under 25s pay much more), experience, claims history, convictions, occupation, where you live and where the car is parked overnight.
- **Car:** value, power, repair costs, theft risk and safety equipment. In the UK cars are rated in **insurance groups 1–50**; in the US insurers use similar risk ratings.
- **Use:** annual mileage, commuting vs social use, business use.
- **Policy:** your **excess / deductible** (the amount you pay toward each claim; a higher deductible means a lower premium), and add-ons.

**Ways to save:** compare quotes every renewal (loyalty rarely pays), increase your deductible if you can afford it, build a **no-claims bonus** (up to 60–75% discount after several years), add an experienced named driver (never "front" a policy, which is fraud), choose a car in a low group, consider telematics ("black box") policies for young drivers, and pay annually instead of monthly.

## Registration and road tax

Every car must be **registered** with the government. Registration links the car (through its **VIN** and number plate) to its legal owner. You receive a registration document (title in the US, V5C in the UK, Fahrzeugbrief in Germany). When you buy or sell a car, the registration must be transferred, usually within days.

Most countries charge an annual **road tax** or registration fee. It is often based on CO₂ emissions, engine size, value or weight. EVs historically paid little or nothing, but many countries are now introducing EV road taxes to replace lost fuel-tax revenue.

## Roadworthiness inspections

Many countries require periodic safety inspections:

- **UK:** the **MOT** test, annually from 3 years old.
- **Germany:** **TÜV/HU** every 2 years (first after 3 years).
- **France:** contrôle technique every 2 years after 4 years.
- **US:** varies by state; some require annual safety and/or emissions inspections, others none.

Inspections check brakes, lights, tyres, steering, suspension, seat belts, emissions, rust and more. Driving without a valid inspection can invalidate your insurance.

## What to do after an accident

1. Stop, switch on hazards, and make the scene safe. Call emergency services if anyone is injured.
2. Exchange names, addresses, registration numbers and insurance details. Never admit fault at the scene.
3. Take photos of the cars, positions, damage, road conditions and any witnesses' details.
4. Report to your insurer promptly, even if you do not plan to claim (many policies require it).
5. Many countries use a standard **European Accident Statement** form; keep one in the glovebox.

> **Must-have documents in the car:** registration, proof of insurance, driving licence and, where applicable, inspection certificate. Also carry a warning triangle and high-visibility vest (mandatory in many European countries).
`,
      keyPoints: [
        'Third-party is the legal minimum; comprehensive also covers your car.',
        'Premiums depend on driver, car, use and deductible.',
        'Compare quotes at every renewal; build a no-claims bonus.',
        'Many countries require periodic inspections (MOT, TÜV).',
      ],
      quiz: [
        { q: 'Which insurance type covers damage to your own car even if you caused the crash?', o: ['Third-party only', 'Comprehensive', 'Road tax', 'GAP only'], a: 1, e: 'Comprehensive cover protects your own vehicle too.' },
        { q: 'What does increasing your deductible (excess) usually do?', o: ['Raises your premium', 'Lowers your premium', 'Nothing', 'Cancels your policy'], a: 1, e: 'You take on more of each claim, so risk to the insurer falls.' },
        { q: 'What does GAP insurance cover?', o: ['Tyre damage', 'The gap between the payout and what you still owe on finance', 'Gaps in service history', 'Windscreen chips'], a: 1, e: 'Useful on new cars with fast depreciation.' },
        { q: 'What is the UK\'s annual roadworthiness test called?', o: ['TÜV', 'MOT', 'NCAP', 'DVLA'], a: 1, e: 'Required annually once a car is 3 years old.' },
        { q: 'At an accident scene you should...', o: ['Admit fault immediately', 'Exchange details, take photos and not admit fault', 'Leave quickly', 'Move all evidence'], a: 1, e: 'Let insurers determine fault from the evidence.' },
      ],
    },
    {
      id: 'l5-8',
      title: 'Fuel Economy Explained',
      summary: 'L/100 km vs mpg, what really affects consumption, and how to save.',
      minutes: 7,
      image: pick('road', 1),
      content: `
Fuel (or electricity) is one of the biggest running costs of a car. Understanding fuel economy helps you choose the right car and drive in a way that saves real money.

## How fuel economy is measured

- **L/100 km** (litres per 100 kilometres) – used in Europe, Australia and much of the world. **Lower is better.** A small petrol car may use 5 L/100 km; a big SUV 10–14 L/100 km.
- **MPG** (miles per gallon) – used in the US and UK. **Higher is better.** Careful: a UK (imperial) gallon is 4.546 L; a US gallon is 3.785 L, so UK mpg figures look about 20 percent better for the same car.
- **km/L** – used in Japan and India. Higher is better.
- **EVs:** **kWh/100 km** (lower is better, ~14–20 is typical), **miles/kWh** (higher is better, ~3–4.5), or **MPGe** in the US.

**Conversions:** L/100 km = 235.2 ÷ US mpg; L/100 km = 282.5 ÷ UK mpg. So 30 US mpg ≈ 7.8 L/100 km.

## Official figures vs reality

Official ratings come from laboratory test cycles: **WLTP** in Europe (since 2018, replacing the very optimistic NEDC) and **EPA** in the US. Real-world consumption is typically 10–25 percent worse than WLTP, depending on driving style, speed, temperature and load.

## What affects fuel consumption?

- **Speed and aerodynamics** – aerodynamic drag rises with the **square of speed**, and the power needed to overcome it rises with the **cube**. Driving at 130 km/h instead of 110 km/h can use 15–20 percent more fuel. This matters even more for EVs.
- **Weight** – mainly affects stop-start city driving. Every extra 100 kg increases consumption by roughly 5–7 percent in town.
- **Rolling resistance** – under-inflated tyres can increase fuel use by 2–4 percent. Low-rolling-resistance tyres help.
- **Driving style** – aggressive acceleration and hard braking can increase consumption by 15–30 percent or more.
- **Idling** – uses 0.5–1.5 L per hour while going nowhere. Stop-start systems help.
- **Short trips and cold weather** – cold engines are inefficient, and in winter EVs lose 20–40 percent range due to cabin and battery heating.
- **Air conditioning** – adds 5–10 percent in hot weather, but at motorway speeds A/C is better than open windows (which increase drag).
- **Roof racks and boxes** – can add 10–25 percent at motorway speed. Remove them when not in use.
- **Maintenance** – clogged air filters, worn spark plugs, wrong oil or dragging brakes all waste fuel.

## Eco-driving techniques

1. **Anticipate:** look far ahead, lift off early for red lights and roundabouts and coast instead of braking late.
2. **Accelerate smoothly** and shift up early (around 2,000–2,500 rpm in petrol cars, 1,500–2,000 in diesels) in manuals.
3. **Keep a steady speed;** use cruise control on flat roads.
4. **Slow down a little on motorways:** 110 vs 130 km/h saves a lot for a few minutes' difference.
5. **Check tyre pressures monthly.**
6. **Remove unnecessary weight and roof racks.**
7. **Combine short trips** and avoid idling.
8. **In EVs and hybrids:** use regen, precondition the cabin while plugged in, and use seat heaters (more efficient than heating the air).

## Calculating your cost per km

**Cost per 100 km = consumption (L/100 km) × fuel price per litre.**

Example: 7 L/100 km × $1.60/L = $11.20 per 100 km. At 15,000 km a year that is **$1,680**.

An EV using 17 kWh/100 km with home electricity at $0.20/kWh costs **$3.40 per 100 km**, or $510 per year for the same distance. Public fast charging at $0.50–0.70/kWh is much pricier, around $8.50–$12 per 100 km.

> **Real-world trick:** To measure your actual consumption, fill the tank completely, reset the trip meter, drive normally, then fill completely again. Divide litres added by km driven × 100. The car's computer is often 3–8 percent optimistic.
`,
      keyPoints: [
        'L/100 km: lower is better; mpg: higher is better.',
        'UK gallons are 20% bigger than US gallons.',
        'Drag rises with the square of speed: 130 vs 110 km/h costs ~15–20% more.',
        'Smooth driving saves 15–30%.',
      ],
      quiz: [
        { q: 'For L/100 km, which is better?', o: ['Higher', 'Lower', 'It does not matter', 'Exactly 10'], a: 1, e: 'Fewer litres per 100 km means more efficient.' },
        { q: 'Why do UK mpg figures look better than US mpg for the same car?', o: ['UK cars are better', 'The UK imperial gallon is about 20% larger', 'Different fuel', 'Different roads'], a: 1, e: '4.546 L vs 3.785 L.' },
        { q: 'Aerodynamic drag increases with...', o: ['Speed', 'The square of speed', 'Weight only', 'Tyre width only'], a: 1, e: 'Power needed rises with the cube of speed.' },
        { q: 'At motorway speeds, what is more efficient?', o: ['Windows open', 'A/C on with windows closed', 'Both identical', 'Sunroof open'], a: 1, e: 'Open windows add drag at high speed.' },
        { q: 'A car using 7 L/100 km with fuel at $1.60/L costs about how much per 100 km?', o: ['$4.80', '$11.20', '$16.00', '$22.40'], a: 1, e: '7 × 1.60 = $11.20.' },
      ],
    },
    {
      id: 'l5-9',
      title: 'DIY Basics: Jobs Anyone Can Do',
      summary: 'Change a tyre, top up fluids, replace bulbs, wipers and filters safely.',
      minutes: 7,
      image: pick('engine', 2),
      content: `
You do not need to be a mechanic to save hundreds of dollars a year. These jobs require basic tools and patience, and they build confidence. **Safety first:** work on a flat, solid surface, use wheel chocks, never work under a car supported only by a jack (use proper **axle stands**), let the engine cool, and wear gloves and eye protection.

## A basic tool kit

A socket set (8–19 mm), screwdrivers, pliers, a torque wrench, a tyre pressure gauge, a tread depth gauge, a jack and two axle stands, wheel chocks, nitrile gloves, a funnel, an OBD-II reader, a torch, and a jump pack or jump leads. Total cost: around $150–$300.

## 1. Changing a flat tyre

1. Park safely on a flat surface away from traffic, hazards on, handbrake on, put the car in gear or Park. Put out a warning triangle.
2. Get the spare, jack and wheel brace. Remove the hubcap or locking nut cover.
3. **Loosen the wheel nuts half a turn while the wheel is still on the ground.**
4. Place the jack at the correct jacking point (see manual; usually reinforced points on the sill).
5. Raise the car until the tyre is clear of the ground. Remove the nuts and wheel.
6. Fit the spare, hand-tighten the nuts in a **star pattern**.
7. Lower the car, then tighten the nuts fully in a star pattern. Check the torque (typically 100–140 Nm) as soon as possible.
8. Space-saver spares are usually limited to 80 km/h; repair or replace the main tyre soon.

Many modern cars have no spare, only a **tyre repair kit** (sealant and compressor), which works for small tread punctures, not sidewall damage.

## 2. Topping up fluids

- **Engine oil** – use exactly the grade in your manual. Add small amounts (0.25–0.5 L), wait, recheck. Overfilling can damage seals and catalytic converters.
- **Coolant** – only when cold, to between MIN and MAX, with the correct coolant type.
- **Washer fluid** – use screenwash with antifreeze in winter, not just water.
- **Brake fluid** – the level drops slightly as pads wear. A sudden drop means a leak: get it checked. Use the type marked on the cap (DOT 4 is most common) and never get it on paint.

## 3. Replacing wiper blades

Lift the arm, press the release tab, slide the old blade off, click the new one on. 5 minutes, $15–$40 a pair, and it transforms rainy-day visibility.

## 4. Replacing the air and cabin filters

The **engine air filter** box usually opens with clips or a few screws. Note the orientation, swap the filter and close it securely. The **cabin filter** is usually behind the glovebox, which unclips. Both take 10–20 minutes and save $50–$100 in labour each.

## 5. Bulbs

Many older cars allow easy halogen bulb replacement from behind the headlight. Do not touch the glass of halogen bulbs with your fingers; skin oil creates hot spots that make them fail early. Many modern LED headlights are sealed units requiring a dealer.

## 6. Battery checks and replacement

Clean corrosion with a baking soda solution and a wire brush. When replacing: disconnect **negative first**, then positive; connect **positive first**, then negative. Some modern cars need the new battery "registered" to the car's computer with a scan tool so it charges correctly.

## 7. Reading fault codes

Plug a cheap OBD-II reader into the port under the dashboard, read the code, and look it up. This gives you knowledge before you visit a garage, protecting you from unnecessary repairs.

## When NOT to DIY

Leave these to professionals unless you are trained and equipped: brake hydraulics and ABS, airbags (explosive charges), high-voltage EV and hybrid systems (orange cables), timing belts, fuel system work, A/C refrigerant (legally requires certification in many countries), and anything structural.

> **Torque matters:** Overtightened bolts strip threads and warp parts; undertightened bolts come loose. Wheel nuts in particular must be torqued correctly. A $50 torque wrench is one of the best investments a home mechanic can make.
`,
      keyPoints: [
        'Never work under a car on a jack alone; use axle stands.',
        'Loosen wheel nuts before jacking; tighten in a star pattern.',
        'Battery: disconnect negative first, reconnect positive first.',
        'Leave brakes hydraulics, airbags and HV systems to pros.',
      ],
      quiz: [
        { q: 'When changing a tyre, when should you first loosen the wheel nuts?', o: ['After jacking the car up', 'While the wheel is still on the ground', 'After removing the wheel', 'Never'], a: 1, e: 'The ground stops the wheel spinning as you loosen.' },
        { q: 'In what pattern should wheel nuts be tightened?', o: ['Clockwise circle', 'Star (criss-cross) pattern', 'Random', 'Top only'], a: 1, e: 'This seats the wheel evenly.' },
        { q: 'When disconnecting a battery, which terminal comes off first?', o: ['Positive', 'Negative', 'Either', 'Both together'], a: 1, e: 'Removing negative first prevents shorts if your spanner touches metal.' },
        { q: 'Why shouldn\'t you touch halogen bulb glass?', o: ['It is hot', 'Skin oil creates hot spots that shorten bulb life', 'It is sharp', 'It voids the warranty'], a: 1, e: 'Hold the bulb by its base or use gloves.' },
        { q: 'Which job should you leave to professionals?', o: ['Wiper blades', 'Cabin filter', 'High-voltage EV systems', 'Washer fluid'], a: 2, e: 'Orange HV cables can be lethal.' },
      ],
    },
  ],
}
