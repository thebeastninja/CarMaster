import { pick } from '../images.js'

export default {
  id: 6,
  slug: 'pro',
  title: 'Pro Level',
  tag: 'Pro',
  icon: '🏁',
  description: 'Tuning and modifications, detailing and paint protection, motorsport from F1 to drag racing, and the future of cars.',
  lessons: [
    {
      id: 'l6-1',
      title: 'ECU Remapping & Engine Tuning',
      summary: 'Stages, maps, boost, timing and how to tune without breaking things.',
      minutes: 8,
      image: pick('jdm', 1),
      content: `
Every modern engine is controlled by software. The **ECU (Engine Control Unit)** contains **maps**: tables that tell the engine how much fuel to inject, when to fire the spark, how much boost to run and when to shift gears, for every combination of rpm and load. Manufacturers set these maps conservatively to cover poor fuel, extreme climates, emissions tests, long service intervals and drivers who never service their cars. **Tuning** rewrites them for more performance.

## What a remap changes

- **Boost pressure** (turbo engines) – the biggest gain. Raising boost from 1.2 to 1.6 bar can add 20–40 percent power.
- **Ignition timing** – advancing the spark (firing earlier) increases power until knock appears.
- **Fuel delivery** – injection quantity and timing to match the extra air.
- **Torque limiters** – manufacturers often limit torque in lower gears to protect the gearbox or for product positioning between models.
- **Throttle mapping** – sharper response.
- **Rev limiter and speed limiter** – adjustable, within mechanical limits.
- **Gearbox software (TCU)** – faster shifts, higher torque limits, launch control.

## Why turbo engines gain the most

A naturally aspirated engine might gain only 3–8 percent from a remap because it cannot breathe any more air. A turbocharged engine can gain **20–40 percent** from software alone, because the turbo can simply be told to push more air. For example, a VW Golf GTI (EA888, 245 PS) can make around 300–320 PS with a Stage 1 map; a BMW B58 (Supra / M340i) can go from 382 to over 450 hp.

## Tuning stages (loose industry terms)

- **Stage 1** – software only on a standard car. Safest gains, typically 15–30 percent on turbo engines.
- **Stage 2** – software plus supporting hardware: upgraded intercooler, downpipe (the section after the turbo, often with a high-flow catalytic converter), intake and sometimes fuel pump.
- **Stage 3** – a bigger turbo, upgraded fuel system, often forged internals, clutch and cooling. Very high power but much less reliability and road comfort.

## How it is done

- **OBD flash** – the tuner reads and rewrites the ECU through the diagnostic port.
- **Bench / boot mode** – the ECU is removed and accessed directly (needed on newer, encrypted ECUs).
- **Piggyback box** – an external module that modifies sensor signals to trick the ECU. Easy to remove but less precise.
- **Standalone ECU** – replaces the factory ECU entirely (MoTeC, Haltech, Link) for serious race builds.
- **Dyno tuning** – the car is strapped to a **dynamometer** (rolling road) that measures power at the wheels, and the tuner adjusts maps live while monitoring air-fuel ratio, knock and temperatures. A custom dyno tune is safer than a generic "off-the-shelf" map.

## Risks and responsibilities

- **Reliability:** more power means more heat and stress on pistons, rods, turbo, clutch and gearbox. Good tuners stay within safe hardware limits.
- **Warranty:** tuning usually voids the powertrain warranty, and manufacturers can detect flashes even after returning to stock.
- **Insurance:** you must declare modifications. Undeclared mods can void your policy, leaving you personally liable after an accident.
- **Legality and emissions:** removing catalytic converters or particulate filters ("cat delete", "DPF delete") or disabling EGR is **illegal for road use** in the EU, UK and US, causes failed inspections and harms public health. Reputable tuners refuse to do it.
- **Fuel:** many maps require 98–100 RON fuel; some "flex fuel" maps use E85 for extra knock resistance.

## Supporting mods matter

More power needs better **brakes**, **tyres**, **cooling** and sometimes a **clutch**. Increasing oil change frequency (every 5,000–8,000 km) is wise on tuned engines.

> **Tuner's rule:** "Power is nothing without control." Gains in braking, grip and cooling often make a car faster on a real road or track than extra horsepower.
`,
      keyPoints: [
        'ECUs use maps for fuel, spark, boost and torque limits.',
        'Turbo engines gain 20–40% from software; NA engines 3–8%.',
        'Stage 1 = software; Stage 2 = + bolt-ons; Stage 3 = bigger turbo/internals.',
        'Declare mods to insurers; emissions deletes are illegal on the road.',
      ],
      quiz: [
        { q: 'Why do turbo engines gain more from a remap than NA engines?', o: ['They have more cylinders', 'The turbo can be commanded to push more air (boost)', 'They use diesel', 'They are newer'], a: 1, e: 'Boost increase is the biggest lever in a remap.' },
        { q: 'What typically defines Stage 2 tuning?', o: ['Software only', 'Software plus bolt-on hardware like downpipe and intercooler', 'Engine swap', 'A sticker'], a: 1, e: 'Supporting mods allow more power safely.' },
        { q: 'What does a dynamometer measure?', o: ['Fuel price', 'Power and torque output', 'Tyre pressure', 'Paint thickness'], a: 1, e: 'Tuners use dynos to tune and verify results.' },
        { q: 'What can happen if you do not declare modifications to your insurer?', o: ['Lower premiums', 'Your policy may be void', 'Nothing', 'A free service'], a: 1, e: 'Always declare modifications.' },
        { q: 'Is a DPF delete legal for road use in the EU, UK and US?', o: ['Yes', 'No', 'Only on weekends', 'Only on diesels'], a: 1, e: 'Removing emissions equipment is illegal for road vehicles.' },
      ],
    },
    {
      id: 'l6-2',
      title: 'Exhaust, Intake & Bolt-On Mods',
      summary: 'Cat-back systems, downpipes, intakes, intercoolers and what really works.',
      minutes: 7,
      image: pick('muscle', 2),
      content: `
"Bolt-ons" are modifications you can fit without opening the engine. They range from mostly cosmetic to genuinely useful supporting parts for a tune. Here is what each one really does.

## Exhaust systems

- **Axle-back** – replaces only the rear muffler(s). Mostly changes **sound**; little or no power gain. Affordable ($300–$1,200).
- **Cat-back** – replaces everything after the catalytic converter: pipes, resonator and mufflers. Better flow and sound, perhaps 2–5 percent power on a turbo car. Popular brands include Akrapovič, Milltek, Borla, Remus and Invidia ($800–$4,000+). Titanium systems save 5–10 kg.
- **Downpipe** (turbo cars) – the pipe directly after the turbo, often the most restrictive section. A high-flow downpipe with a **sports catalytic converter** (200-cell) can unlock real gains with a matching tune, but must remain emissions-legal in your country.
- **Headers / manifolds** (NA engines) – equal-length tubular headers improve exhaust scavenging, giving 3–8 percent on NA V8s.
- **Valved exhausts** – electronically controlled valves let you choose quiet or loud modes.

**Watch out for:** noise limits (many countries enforce dB limits and roadside checks), drone at cruising speed, and "decat" pipes which are illegal on the road.

## Intakes

- **Cold air intake (CAI)** – replaces the airbox with a less restrictive filter and pipework, ideally sourcing cooler air from outside the hot engine bay. Real gains on most modern cars are small (0–3 percent) because factory airboxes are well designed, but they increase intake and turbo sounds. Open-cone filters in the engine bay can actually *lose* power by sucking hot air.
- **Panel filter** – a high-flow replacement for the stock filter. Cheap; minor benefits.
- **Turbo inlet pipe** – on many turbo cars the stock rubber inlet pipe restricts or collapses at high flow; aluminium or silicone replacements help Stage 2 builds.

## Intercoolers and cooling

On turbo cars, a bigger **front-mount intercooler (FMIC)** keeps charge air temperatures stable, preventing "heat soak" where the ECU pulls timing after a few hard runs. It is one of the best supporting mods for a tuned turbo car. Upgraded **radiators**, **oil coolers** and **DCT/transmission coolers** are essential for track use.

## Fuel and ignition

- **Upgraded fuel pumps and injectors** are needed when power exceeds what the stock system can supply, especially on E85.
- **Colder spark plugs** (a lower heat range) resist knock on highly tuned engines.

## Weight reduction

Removing weight improves everything: acceleration, braking, cornering and wear. Lightweight wheels, carbon panels, lithium batteries and fixed-back bucket seats are common. Remember the rule of thumb: losing **10 kg** is worth roughly as much as **1 hp** on a car of about 1,300 kg with 130 hp... and lighter cars also stop and turn better.

## Common myths

- **"Bigger exhaust always means more power."** Not true. Overly large pipes reduce gas velocity and can hurt low-rpm torque on NA engines.
- **"Intakes add 20 hp."** Usually marketing; real dyno-proven gains are small.
- **"Straight pipes are free horsepower."** They can add a bit, but are illegal on the road, cause failed inspections, and annoy everyone.
- **"Fuel additives give big gains."** Only higher-octane fuel helps, and only on engines tuned or designed for it.

## Order of modifications (for a performance build)

1. **Tyres** – the single biggest improvement per dollar.
2. **Brakes** – pads, fluid, then larger brakes.
3. **Suspension** – alignment, anti-roll bars, coilovers.
4. **Driver training** – a track day course makes you faster than any part.
5. **Power** – tune, intake, exhaust, intercooler.

> **Pro advice:** Keep all original parts so you can return the car to stock for resale or inspection. Unmodified, well-maintained cars usually sell faster and for more money.
`,
      keyPoints: [
        'Axle-back = sound; cat-back = some flow; downpipe = big gains with a tune.',
        'Cold air intakes usually add little real power.',
        'Intercoolers prevent heat soak on tuned turbos.',
        'Mod order: tyres → brakes → suspension → driver → power.',
      ],
      quiz: [
        { q: 'Which exhaust modification mainly changes the sound?', o: ['Downpipe', 'Axle-back', 'Headers', 'Turbo'], a: 1, e: 'It replaces only the rear mufflers.' },
        { q: 'Why can an open-cone filter in the engine bay lose power?', o: ['It is too heavy', 'It sucks in hot air', 'It is too quiet', 'It needs oil'], a: 1, e: 'Hot air is less dense; factory airboxes often source cold air.' },
        { q: 'What does an upgraded intercooler prevent?', o: ['Rust', 'Heat soak and timing pulled after repeated hard runs', 'Tyre wear', 'Flat batteries'], a: 1, e: 'Stable charge temperatures protect power and the engine.' },
        { q: 'Which is usually the best first performance upgrade per dollar?', o: ['Exhaust', 'Better tyres', 'Stickers', 'Bigger turbo'], a: 1, e: 'Grip improves acceleration, braking and cornering.' },
        { q: 'Why keep original parts when modifying?', o: ['They are lucky', 'To return the car to stock for resale or inspection', 'They are worth a lot of scrap', 'It is required by law'], a: 1, e: 'Stock cars often sell better.' },
      ],
    },
    {
      id: 'l6-3',
      title: 'Suspension, Wheels & Handling Mods',
      summary: 'Coilovers, alignment, anti-roll bars, wheels and tyre science for real speed.',
      minutes: 7,
      image: pick('sports', 0),
      content: `
Handling mods make a car faster everywhere except a straight line, and often safer too. But badly chosen parts can ruin ride and grip. The goal is **control of the tyre's contact patch**.

## Lowering springs

The cheapest way to lower a car (by 25–40 mm). They reduce the centre of gravity and body roll and improve looks. But stock dampers are not designed for shorter, stiffer springs, so they wear faster and the car can feel bouncy. Lowering too much reduces suspension travel and can cause the car to hit bump stops.

## Coilovers

A **coilover** combines a damper and a spring in one adjustable unit. Quality coilovers (KW, Bilstein, Öhlins, BC Racing, Tein) let you adjust:

- **Ride height** independently at each corner, which also allows **corner balancing** (equal weight on diagonal wheels).
- **Damping**: **bump** (compression) and **rebound** (extension) adjustments, sometimes separately for low- and high-speed shaft movements.

Cheap coilovers are often too stiff for the road and wear quickly. For a street car, a quality single-adjustable set with sensible spring rates beats a cheap "race" setup.

## Anti-roll bars and bushes

Stiffer **anti-roll bars** reduce body roll and adjust balance: a stiffer **rear** bar reduces understeer (more rotation); a stiffer **front** bar reduces oversteer. Adjustable bars let you fine-tune. **Polyurethane bushes** replace soft rubber bushes for sharper response, at the cost of more vibration and noise.

## Wheel alignment for performance

A performance alignment is one of the most effective, cheapest mods:

- **More negative camber at the front** (around −1.5° to −2.5° for spirited road/track use) increases cornering grip, with some inner-edge tyre wear.
- **Toe** affects stability: slight toe-in at the rear stabilises a car; slight toe-out at the front sharpens turn-in.
- **Caster** increases self-centring and dynamic camber gain.

## Wheels

- **Weight:** reducing **unsprung** and **rotating** mass helps acceleration, braking and ride. **Forged** wheels are stronger and lighter than **cast** wheels; **flow-formed** wheels are a good middle ground.
- **Size:** larger wheels allow bigger brakes and look good, but add weight and require lower-profile tyres that ride harshly and are vulnerable to potholes. Many racers pick the *smallest* wheel that clears the brakes.
- **Offset and width:** correct offset keeps the scrub radius and steering feel right. Too aggressive "stance" fitments (extreme negative camber, stretched tyres) look dramatic but reduce grip and can be unsafe.

## Tyres: the king of handling

- **Performance categories:** Grand touring → ultra-high performance (e.g. Michelin Pilot Sport 5, Continental SportContact 7) → track-focused semi-slicks (Michelin Pilot Sport Cup 2, Pirelli Trofeo R).
- **Width:** wider tyres can increase grip, but also weight and aquaplaning risk.
- **Temperature:** tyres have an operating window; semi-slicks are poor when cold or wet.
- **Pressures:** on track, hot pressures matter. Tyres gain 0.3–0.6 bar as they heat up.

## Chassis bracing and aero

**Strut braces** and underbody braces stiffen the chassis, mostly helpful on older or open-top cars. **Aero** (front splitters, rear wings, diffusers) creates downforce, which only has a meaningful effect at higher speeds (typically above 100 km/h) and must be balanced front-to-rear: a big rear wing without front aero can cause understeer at speed.

## Understeer vs oversteer

- **Understeer:** the front tyres lose grip first, the car pushes wide. Safer and more common in road cars. Fix: lift off gently, reduce steering lock.
- **Oversteer:** the rear tyres lose grip first, the rear slides out. Fix: steer into the slide (counter-steer) and smoothly balance the throttle.

> **The setup philosophy:** Start with tyres and alignment, then add damping control. Change one thing at a time and test. A balanced, compliant car is faster on real roads than a rock-hard one that skips over bumps.
`,
      keyPoints: [
        'Coilovers adjust height and damping; quality matters.',
        'Stiffer rear anti-roll bar = less understeer.',
        'Negative camber increases cornering grip.',
        'Lighter, not bigger, wheels improve handling.',
      ],
      quiz: [
        { q: 'What do coilovers allow you to adjust?', o: ['Engine timing', 'Ride height and damping', 'Tyre pressure', 'Fuel injection'], a: 1, e: 'Quality coilovers adjust height, bump and rebound.' },
        { q: 'Stiffening the rear anti-roll bar usually...', o: ['Increases understeer', 'Reduces understeer (more rotation)', 'Reduces top speed', 'Improves fuel economy'], a: 1, e: 'More rear roll stiffness shifts the balance towards oversteer.' },
        { q: 'What is understeer?', o: ['Rear tyres slide first', 'Front tyres lose grip first and the car pushes wide', 'The car turns too sharply', 'The steering is too light'], a: 1, e: 'Common and generally safer in road cars.' },
        { q: 'Why do many racers choose the smallest wheel that clears their brakes?', o: ['Cheaper stickers', 'Less weight and better tyre sidewall', 'Better fuel', 'Required by law'], a: 1, e: 'Lighter wheels and taller sidewalls aid grip and compliance.' },
        { q: 'How do you correct oversteer?', o: ['Steer further into the corner', 'Counter-steer into the slide and balance throttle', 'Brake hard', 'Pull the handbrake'], a: 1, e: 'Steer in the direction the rear is sliding.' },
      ],
    },
    {
      id: 'l6-4',
      title: 'Detailing & Paint Protection',
      summary: 'Safe washing, decontamination, paint correction, ceramic coatings and PPF.',
      minutes: 7,
      image: pick('luxury', 1),
      content: `
**Detailing** is the art of cleaning, correcting and protecting a car to a level far above a normal wash. A well-detailed car looks better, resists dirt, and can be worth thousands more at resale.

## Understanding paint

Modern car paint has several layers: the metal or composite panel, an **e-coat** (corrosion protection), **primer**, a thin **base coat** (the colour) and on top a **clear coat** about 30–50 microns thick, roughly the thickness of a sticky note. The clear coat provides gloss and UV protection, and almost all **swirls, scratches and marks** you see are in this layer. Since it is so thin, any polishing must be done carefully.

## Safe washing: the two-bucket method

Most swirl marks come from bad washing, particularly automatic car washes with brushes and dirty sponges.

1. **Pre-wash** – rinse thoroughly, then apply **snow foam** (thick foam from a foam cannon) or a pre-wash spray to loosen dirt. Rinse.
2. **Wheels first** – with separate brushes and a dedicated wheel cleaner; brake dust is abrasive and corrosive.
3. **Two-bucket wash** – one bucket with car shampoo, one with clean rinse water, ideally both with **grit guards** at the bottom. Wash with a microfibre or lambswool mitt from **top to bottom**, rinsing the mitt in the rinse bucket after each panel.
4. **Rinse** and **dry** with a large, plush microfibre drying towel or a blower. Never let water dry in the sun, which leaves water spots.

## Decontamination

Even after washing, paint can feel rough because of embedded contaminants.

- **Iron remover** – sprays turn purple as they dissolve iron particles from brake dust and industrial fallout.
- **Tar remover** – for tar spots on lower panels.
- **Clay bar** or clay mitt – glides over lubricated paint and pulls out bonded contaminants, leaving a glass-smooth surface.

## Paint correction

**Polishing** removes a tiny layer of clear coat to level out swirls and scratches. A **dual-action (DA) polisher** is safe for beginners; a **rotary** polisher is faster but can easily burn through paint.

- **Compound** – more abrasive, removes deeper defects.
- **Polish** – finer, refines the finish to a high gloss.
- **One-step** – a compromise product for good results in less time.

Professionals use a **paint depth gauge** to measure clear coat thickness before correcting. A full multi-stage correction can take 1–3 days and costs $400–$1,500+.

## Protection options

| Product | Durability | Cost | Notes |
|---|---|---|---|
| Carnauba wax | 1–3 months | Low | Warm, deep gloss; easy to apply |
| Synthetic sealant | 3–6 months | Low | Slicker, more durable than wax |
| Spray ceramic (SiO₂) | 3–12 months | Low | Easy top-up protection |
| Professional ceramic coating | 2–7 years | $500–$2,500 | Hard, glossy, hydrophobic, easy cleaning |
| Paint protection film (PPF) | 5–10 years | $1,500–$7,000+ | Clear urethane film that absorbs stone chips |

**Ceramic coatings** form a hard, chemically bonded layer of silica or similar materials. They make washing easier, repel water (beading), resist chemicals and UV, and enhance gloss. They do **not** make the car scratch-proof.

**PPF (paint protection film)** is a thick, transparent urethane film applied to high-impact areas (bonnet, bumpers, mirrors) or the whole car. It absorbs stone chips and light scratches, and many films "self-heal" with heat. It is the best protection for new or valuable cars, and it can be ceramic-coated on top.

## Interior detailing

Vacuum thoroughly, use an all-purpose cleaner and soft brushes on plastics, a dedicated leather cleaner and conditioner on leather (not household products), steam or extract carpets and fabric seats, and clean glass with a dedicated glass cleaner and two microfibre towels. UV protectant on dashboards prevents fading and cracking.

> **Biggest mistakes:** washing in direct sunlight, using dish soap (strips protection and dries rubber), one dirty sponge for the whole car, drying with a chamois or bath towel, and automatic brush washes.
`,
      keyPoints: [
        'Clear coat is only 30–50 microns; correct carefully.',
        'Two-bucket method with grit guards prevents swirls.',
        'Decontaminate with iron remover and clay before polishing.',
        'Ceramic coating = gloss and easy cleaning; PPF = chip protection.',
      ],
      quiz: [
        { q: 'How thick is a typical clear coat?', o: ['1–2 mm', '30–50 microns', '5 microns', '1 cm'], a: 1, e: 'About the thickness of a sticky note.' },
        { q: 'What is the purpose of the second bucket in a two-bucket wash?', o: ['Wheels only', 'Rinsing dirt from the mitt before reloading with shampoo', 'Extra shampoo', 'Waxing'], a: 1, e: 'It keeps grit away from the paint.' },
        { q: 'What does an iron remover do?', o: ['Removes rust holes', 'Dissolves embedded iron particles from brake dust', 'Polishes paint', 'Adds a coating'], a: 1, e: 'It turns purple as it reacts.' },
        { q: 'Which offers the best protection against stone chips?', o: ['Carnauba wax', 'Spray sealant', 'Paint protection film (PPF)', 'Dish soap'], a: 2, e: 'PPF physically absorbs impacts.' },
        { q: 'Which is a common washing mistake?', o: ['Using microfibre towels', 'Washing in direct sunlight', 'Using grit guards', 'Washing top to bottom'], a: 1, e: 'Sun dries soap and water quickly, leaving spots.' },
      ],
    },
    {
      id: 'l6-5',
      title: 'Formula 1: The Pinnacle',
      summary: 'Power units, aerodynamics, tyres, strategy and the 2026 rule revolution.',
      minutes: 8,
      image: pick('super', 2),
      content: `
**Formula 1** is the highest class of single-seater racing, sanctioned by the **FIA**. Since the first World Championship race at Silverstone in 1950, F1 has been the world's most technologically advanced motorsport, with team budgets of hundreds of millions of dollars (capped at about $135 million per year for most spending since 2021) and over 20 races on five continents.

## How a race weekend works

- **Practice sessions** let teams set up the car.
- **Qualifying** is split into Q1, Q2 and Q3; the slowest drivers are eliminated in each round, and the fastest in Q3 takes **pole position**.
- **The Grand Prix** is around 305 km (Monaco is shorter). Points go to the top 10: 25, 18, 15, 12, 10, 8, 6, 4, 2, 1.
- Some weekends feature a shorter **Sprint** race on Saturday with fewer points.
- There are two championships: **Drivers'** and **Constructors'** (teams).

## The power unit

From 2014 to 2025, F1 used **1.6 L V6 turbo hybrid power units** revving to 15,000 rpm, with two energy-recovery systems: the **MGU-K** (kinetic, on the crankshaft, like a hybrid road car's motor) and the **MGU-H** (heat, on the turbo shaft, recovering exhaust energy and eliminating turbo lag). Combined output was over **1,000 hp**, with thermal efficiency above **50 percent**, the most efficient piston engines ever made.

The **2026 regulations** brought a revolution: the MGU-H was removed, the electric share rose to about **50 percent** (MGU-K up to 350 kW), and engines run on **100 percent sustainable fuel**. The cars are also smaller and lighter, with **active aerodynamics** (movable front and rear wings) to reduce drag on straights. New manufacturers, including Audi and Ford (with Red Bull), joined, and Honda partnered with Aston Martin.

## Aerodynamics: upside-down wings

An F1 car's wings work like an aeroplane's, but **upside down**, pushing the car into the track. This **downforce** lets F1 cars corner at **5–6 g** and brake from 300 km/h to 80 km/h in about 2–3 seconds. At high speed, an F1 car generates more downforce than its own weight (theoretically enough to drive upside down in a tunnel). Since 2022, cars have used **ground-effect** floors with Venturi tunnels to generate most of their downforce underneath, reducing the turbulent "dirty air" that made following difficult.

**DRS (Drag Reduction System)**, used from 2011 to 2025, opened a flap in the rear wing to boost straight-line speed when within one second of the car ahead. From 2026 it was replaced by active aero modes available to all and a manual electrical "overtake" boost.

## Tyres and strategy

Pirelli supplies all teams. Dry compounds range from hard (durable, slower) to soft (fast, wears quickly), plus **intermediate** and **full wet** tyres for rain. In a dry race, drivers must use at least two different compounds, forcing at least one **pit stop**. Top teams change all four tyres in around **2 seconds**. Strategists use real-time data and simulations to decide when to pit, especially under **Safety Car** or **Virtual Safety Car** periods, when stops cost less time.

## Safety revolution

F1 was once extremely dangerous. Today's cars feature a carbon-fibre **survival cell**, the **HANS** device (protecting the neck), and since 2018 the **halo**: a titanium structure above the cockpit that can support the weight of a London bus. It saved several lives, including Romain Grosjean's in his fiery 2020 Bahrain crash.

## Legends and records

Lewis Hamilton and Michael Schumacher share the record of **7 World Championships**; Hamilton holds records for most wins and pole positions. Ayrton Senna, Alain Prost, Juan Manuel Fangio, Niki Lauda, Sebastian Vettel and Max Verstappen are among the greats. **Ferrari** is the only team to have competed in every season since 1950 and has the most Constructors' titles.

> **Road car tech from F1:** paddle-shift gearboxes, carbon-fibre construction, hybrid energy recovery, traction control, launch control, aerodynamic design and tyre compounds all flowed from racing to road cars.
`,
      keyPoints: [
        'F1 power units: 1.6 L V6 turbo hybrids with 50%+ thermal efficiency.',
        '2026 rules: no MGU-H, ~50% electric power, sustainable fuel, active aero.',
        'Downforce allows 5–6 g cornering.',
        'The halo can support the weight of a bus.',
      ],
      quiz: [
        { q: 'Where was the first F1 World Championship race held in 1950?', o: ['Monza', 'Silverstone', 'Monaco', 'Spa'], a: 1, e: 'The British Grand Prix at Silverstone.' },
        { q: 'What did the MGU-H recover energy from?', o: ['Braking', 'Exhaust heat via the turbo shaft', 'Solar panels', 'Suspension'], a: 1, e: 'It was removed for the 2026 regulations.' },
        { q: 'How many points does a Grand Prix winner score?', o: ['10', '20', '25', '50'], a: 2, e: '25-18-15-12-10-8-6-4-2-1.' },
        { q: 'What is the halo?', o: ['A tyre compound', 'A titanium cockpit protection structure', 'A type of wing', 'A pit-stop tool'], a: 1, e: 'It has saved several drivers\' lives.' },
        { q: 'Which drivers share the record for most F1 world titles?', o: ['Senna and Prost', 'Hamilton and Schumacher', 'Vettel and Verstappen', 'Fangio and Lauda'], a: 1, e: 'Both have 7 titles.' },
      ],
    },
    {
      id: 'l6-6',
      title: 'Rally & Drifting',
      summary: 'WRC stages, pace notes, Group B legends and the art of controlled sliding.',
      minutes: 7,
      image: pick('jdm', 2),
      content: `
Racing is not only about circuits. **Rallying** and **drifting** are two of the most spectacular disciplines, both demanding car control on the edge of grip.

## Rallying: racing against the clock

In a rally, cars start one at a time, typically a minute or two apart, and race against the clock on closed public roads called **special stages**. Surfaces include gravel, tarmac, snow and ice, sometimes within the same event. Between stages, cars drive on public roads in **liaison sections**, obeying traffic laws. The driver with the lowest combined time wins.

The **World Rally Championship (WRC)**, founded in 1973, visits places like Monte Carlo, Sweden (snow), Finland (fast gravel jumps), Kenya (Safari Rally), Japan and more.

## The co-driver and pace notes

Each car carries a **co-driver** who reads **pace notes** through the intercom. Before the rally, crews drive the stages slowly in a **recce** (reconnaissance) and write notes describing every corner, crest and hazard: for example, *"Left 4 tightens 3, over crest, 100, right 6 long, don't cut"*. Numbers describe how sharp a corner is (1 = slowest hairpin-like, 6 = nearly flat out, in one common system). At 150 km/h on a narrow forest road, the driver relies completely on the co-driver's voice to know what is beyond the next blind crest.

## Rally cars

Rally cars are based on production models but heavily modified with roll cages, long-travel suspension, sump guards, sequential gearboxes and four-wheel drive. From 2022 to 2024 top **Rally1** cars used 1.6 L turbo engines with a 100 kW hybrid boost. Lower classes like **Rally2** (e.g. Škoda Fabia RS, Toyota GR Yaris Rally2) are where most professionals compete.

## Legends of rallying

- **Group B (1982–1986)** – the most extreme era: lightweight, 500+ hp, four-wheel-drive monsters like the **Audi Sport Quattro S1**, **Peugeot 205 T16**, **Lancia Delta S4** and **Ford RS200**. Several fatal crashes led to Group B being banned.
- **Audi Quattro** proved four-wheel drive would win rallies.
- **Subaru Impreza** and **Mitsubishi Lancer Evolution** battled through the 1990s, with drivers like Colin McRae and Tommi Mäkinen.
- **Sébastien Loeb** won a record **9 WRC titles** (2004–2012) with Citroën; Sébastien Ogier has 8.

## Drifting: style over speed

**Drifting** is a judged motorsport where drivers intentionally **oversteer** with the rear wheels sliding, steering the car through corners at extreme angles while controlling smoke, speed and line. It grew from Japanese mountain-pass driving in the 1970s and 80s. Keiichi Tsuchiya, the **"Drift King"**, popularised it, and the **D1 Grand Prix** series began in 2000. Today **Formula Drift** (USA) and the **FIA Intercontinental Drifting Cup** are major championships.

**How drifting is judged:** line (hitting clipping points and zones close to walls), angle (how sideways), speed, and style (smoke, commitment, fluidity). In **tandem battles**, a lead car sets the line while the chase car tries to stay as close as possible, often just centimetres away.

**Drift techniques:**

- **Power over** – using throttle in a powerful RWD car to break rear traction.
- **Clutch kick** – quickly pressing and releasing the clutch to shock the drivetrain and break traction.
- **Handbrake (e-brake) entry** – locking the rear wheels briefly to initiate a slide.
- **Feint (Scandinavian flick)** – swinging the car's weight away from then into the corner to rotate the car; also used in rallying.
- **Braking drift** – shifting weight forward under braking to lighten the rear.

**Drift cars** are almost always rear-wheel drive with a **locking or welded differential**, increased steering angle kits (60°+), hydraulic handbrakes and reliable power. Popular platforms: Nissan Silvia S13/S14/S15, Nissan 350Z/370Z, BMW E36/E46, Toyota AE86, Toyota Supra, Ford Mustang and big-power Toyota GR86s.

> **Where to try:** Never drift on public roads. Join a drift day or a skid-pan course; many tracks offer beginner sessions with instructors, and learning car control on a skid pan will make you safer in everyday driving.
`,
      keyPoints: [
        'Rallies race against the clock on special stages.',
        'Co-drivers read pace notes made during the recce.',
        'Group B (1982–86) was the wildest rally era.',
        'Drifting is judged on line, angle, speed and style.',
      ],
      quiz: [
        { q: 'What is a rally "recce"?', o: ['A type of tyre', 'A slow reconnaissance drive to write pace notes', 'The final stage', 'A pit stop'], a: 1, e: 'Crews drive stages slowly before the event to write notes.' },
        { q: 'Who holds the record for most WRC titles?', o: ['Colin McRae', 'Sébastien Loeb', 'Tommi Mäkinen', 'Carlos Sainz'], a: 1, e: 'Loeb won nine consecutive titles.' },
        { q: 'Which era of rally cars was banned after several fatal crashes?', o: ['Group A', 'Group B', 'WRC 2.0', 'Rally2'], a: 1, e: 'Group B ended in 1986.' },
        { q: 'Who is known as the "Drift King"?', o: ['Ken Block', 'Keiichi Tsuchiya', 'Ayrton Senna', 'Travis Pastrana'], a: 1, e: 'He popularised drifting in Japan.' },
        { q: 'Which drivetrain do almost all drift cars use?', o: ['FWD', 'RWD', 'Part-time 4WD', 'Electric FWD'], a: 1, e: 'Rear-wheel drive is needed to sustain throttle-controlled slides.' },
      ],
    },
    {
      id: 'l6-7',
      title: 'Drag Racing & Performance Physics',
      summary: 'The quarter mile, reaction times, launch control and why traction is everything.',
      minutes: 7,
      image: pick('muscle', 1),
      content: `
**Drag racing** is the purest form of acceleration contest: two cars, a straight line, and usually a **quarter mile** (402 m) or eighth mile (201 m). It began on dry lake beds and abandoned airstrips in 1940s and 50s America; the **NHRA (National Hot Rod Association)** was founded in 1951 to bring it off the streets and onto safe tracks.

## The Christmas tree

Drag races start with a tower of lights called the **Christmas tree**:

- **Pre-stage and stage lights** – show when cars are positioned at the start line, detected by light beams.
- **Amber lights** – count down. In a "pro tree" all three ambers flash together; in a "sportsman tree" they light in sequence 0.5 seconds apart.
- **Green** – go!
- **Red** – a **red light** means you left too early and lose immediately.

## Timing explained

- **Reaction time (RT)** – how quickly you react after the green. Top professionals average under 0.05 s against a pro tree.
- **60-foot time** – how quickly the car covers the first 18.3 m. This shows **launch quality** and traction, and predicts the whole run.
- **Elapsed time (ET)** – the time from leaving the start beam to crossing the finish beam. The race winner is the first to cross the finish line, which includes reaction time, so a quicker ET does not always win.
- **Trap speed** – the speed through the finish; it reflects the car's **power-to-weight**.

## Classes and records

- **Top Fuel dragsters** are the fastest accelerating vehicles on Earth: supercharged 500-cubic-inch (8.2 L) Hemi V8s burning **nitromethane**, producing an estimated **11,000 hp**. They cover 1,000 feet (the professional distance since 2008) in about **3.6 seconds** at over **540 km/h**, accelerating at over 4 g. The engines are rebuilt after every run.
- **Funny Cars** are similar but with a carbon body shaped like a road car.
- **Pro Stock** uses naturally aspirated 500 ci V8s.
- **Street classes** and **bracket racing** let anyone run their road car. In bracket racing you predict your time ("dial-in"); the car closest to its prediction without going under wins, making it about consistency, not raw speed.

Production cars like the **Dodge Challenger SRT Demon 170**, **Tesla Model S Plaid**, **Rimac Nevera** and **Lucid Air Sapphire** run the quarter mile in the **8-second** range, astonishing for road-legal cars.

## The physics of launching

Acceleration is limited by **traction**. The maximum force a tyre can transmit is roughly its **coefficient of friction × the weight on it**. That is why drag cars use:

- **Slick tyres** with very soft compounds, run at low pressure so the tyre "wrinkles" and grows a bigger contact patch.
- A **burnout** before the run to heat and clean the tyres and lay rubber on the track.
- A **prepped track** with sticky traction compound.
- **Weight transfer** – under acceleration, weight shifts rearward, which helps RWD cars. Drag cars use soft front suspension and stiff rear setups to encourage it, and **wheelie bars** to stop the front lifting too far.

## Launch control and AWD

Road cars use **launch control** to hold the engine at the optimal rpm and manage wheelspin electronically. **AWD** and **dual-motor EVs** have a big advantage because they use all four tyres for traction. That is why an AWD Porsche 911 Turbo S or Tesla Plaid out-launches more powerful RWD cars.

## Why EVs dominate 0–100

EVs combine **instant torque**, no gear changes, precise millisecond-level traction control by each motor, and AWD. Their weakness is at higher speeds, where power and gearing limitations (and battery heat) can make high-power combustion cars catch up.

> **Physics shortcut:** On a perfect, high-grip surface, with all-wheel drive, acceleration of a road car is limited to about **1.2–1.5 g** by road-tyre friction, equivalent to 0–100 km/h in around 2 seconds. Going quicker needs drag slicks, prepared tracks or downforce.
`,
      keyPoints: [
        'Quarter mile = 402 m; NHRA founded in 1951.',
        '60-foot time reveals launch quality; trap speed reflects power-to-weight.',
        'Top Fuel: ~11,000 hp, 1,000 ft in ~3.6 s.',
        'Traction limits launches; AWD and EVs excel.',
      ],
      quiz: [
        { q: 'How long is a quarter-mile drag strip?', o: ['100 m', '201 m', '402 m', '1 km'], a: 2, e: 'A quarter mile is about 402 metres.' },
        { q: 'What does the 60-foot time show?', o: ['Top speed', 'Launch quality and traction', 'Fuel use', 'Braking'], a: 1, e: 'A good 60-ft time sets up the whole run.' },
        { q: 'What fuel do Top Fuel dragsters use?', o: ['E85', 'Diesel', 'Nitromethane', 'Hydrogen'], a: 2, e: 'Nitromethane carries its own oxygen, allowing huge power.' },
        { q: 'Why do drag racers do a burnout?', o: ['To show off only', 'To heat and clean tyres for grip', 'To cool the engine', 'To test the brakes'], a: 1, e: 'Hot, clean slicks grip far better.' },
        { q: 'In bracket racing, what matters most?', o: ['Highest horsepower', 'Consistency against your predicted dial-in time', 'Loudest exhaust', 'Car weight'], a: 1, e: 'Running under your dial-in loses.' },
      ],
    },
    {
      id: 'l6-8',
      title: 'The Future I: EVs & Solid-State Batteries',
      summary: 'Battery chemistry, charging, costs and what the next decade brings.',
      minutes: 8,
      image: pick('ev', 1),
      content: `
The car is going through its biggest change since the Model T. In 2025, around **one in four** new cars sold worldwide was electric or plug-in hybrid, with China above 50 percent and Norway above 90 percent battery-electric. Understanding batteries is now essential car knowledge.

## How a lithium-ion battery works

A lithium-ion cell has a **cathode** (positive), an **anode** (negative, usually graphite), a **separator** and a liquid **electrolyte**. When charging, lithium ions move from the cathode to the anode; when discharging (driving), they flow back, and electrons travel through the external circuit to power the motor. Thousands of cells are grouped into **modules** and **packs**, managed by a **battery management system (BMS)** that balances cells and keeps them safe, and a thermal system that keeps them at 20–40 °C.

## Main chemistries today

- **NMC / NCA (nickel manganese cobalt / nickel cobalt aluminium)** – high energy density, longer range; used in many premium EVs. Contains costly cobalt and nickel.
- **LFP (lithium iron phosphate)** – cheaper, extremely durable (3,000+ cycles), safer (very resistant to thermal runaway), no cobalt or nickel. Lower energy density and weaker in cold weather. Now used in standard-range Teslas, most BYDs and many others. Can be charged to 100 percent regularly.
- **Sodium-ion** – uses abundant sodium instead of lithium. Lower density but very cheap and good in the cold. CATL and BYD began production in small EVs around 2024–2025.

## Charging explained

- **AC charging (Level 1/2)** – home and workplace charging at 2–22 kW. An onboard charger converts AC to DC. A 7–11 kW home wallbox fills most EVs overnight.
- **DC fast charging (Level 3)** – 50–350 kW (and higher in China), bypassing the onboard charger. Typically 10–80 percent in 18–40 minutes. Charging slows after about 80 percent to protect the battery (the **charging curve**).
- **Connectors:** CCS2 (Europe), **NACS** (Tesla's design, now standard in North America as SAE J3400), GB/T (China), CHAdeMO (older Japanese EVs).
- **800-volt architectures** (Porsche, Hyundai/Kia, Lucid, many Chinese EVs) allow faster charging with less heat.

## Battery longevity

Real-world data shows batteries degrade slowly: typically **1–2 percent per year**, with many packs retaining 85–90 percent capacity after 200,000 km. Tips: avoid sitting at 100 percent or near 0 percent for long periods (for NMC), limit repeated fast charging in hot weather, and use scheduled charging. Most warranties cover **8 years / 160,000 km** to 70 percent capacity.

## Solid-state batteries

**Solid-state batteries (SSBs)** replace the flammable liquid electrolyte with a solid (ceramic, sulphide or polymer). Potential benefits:

- **Higher energy density** – possibly 400–500 Wh/kg vs 250–300 for today's best cells, potentially enabling 800–1,000+ km ranges or much lighter packs.
- **Faster charging** – 10–80 percent in 10–15 minutes.
- **Safer** – no flammable liquid electrolyte.
- **Lithium-metal anodes** become possible, a major energy-density leap.

The challenges are manufacturing at scale and cost, cracking and **dendrites** (lithium filaments that short-circuit cells), and the pressure needed to keep layers in contact. **Toyota**, **Samsung SDI**, **QuantumScape** (with VW's PowerCo), **Solid Power** (with BMW and Ford), **CATL**, and Chinese makers like **Nio** (semi-solid packs already on sale) and **SAIC/IM** are racing to commercialise them. **Semi-solid-state** batteries arrived first in China around 2023–2024; full solid-state cars are expected in limited numbers around 2027–2030.

## Other big trends

- **Cell-to-pack and cell-to-body** designs remove modules, saving weight and cost (Tesla 4680 structural pack, BYD Blade).
- **Bidirectional charging** (V2H/V2G) lets EVs power homes or support the grid.
- **Recycling** recovers over 95 percent of lithium, nickel and cobalt (Redwood Materials, Li-Cycle).
- **Software-defined vehicles** get new features through **over-the-air (OTA)** updates.
- **Battery prices** fell from over $1,000/kWh in 2010 to roughly $110–$140/kWh at pack level in 2024–2025, making price parity with combustion cars a reality in more segments.

> **Pro takeaway:** For buyers, the battery is to an EV what the engine and gearbox are to a petrol car. Check chemistry, usable capacity, peak and average charging power, and the battery warranty.
`,
      keyPoints: [
        'Lithium ions shuttle between cathode and anode.',
        'LFP: cheap, durable, safe; NMC: higher energy density.',
        'Fast charging slows after ~80% to protect cells.',
        'Solid-state promises density, safety and fast charging; mass market ~2027–2030.',
      ],
      quiz: [
        { q: 'Which chemistry is known for durability, safety and no cobalt?', o: ['NMC', 'LFP', 'Lead-acid', 'NiMH'], a: 1, e: 'Lithium iron phosphate is cheap and robust.' },
        { q: 'Why does DC fast charging slow down after ~80%?', o: ['Chargers overheat', 'To protect the battery cells', 'Electricity gets expensive', 'It is a legal rule'], a: 1, e: 'The BMS reduces current as cells near full.' },
        { q: 'What does a solid-state battery replace?', o: ['The anode', 'The liquid electrolyte with a solid one', 'The motor', 'The charging port'], a: 1, e: 'This could improve safety and density.' },
        { q: 'Which connector became standard in North America (SAE J3400)?', o: ['CHAdeMO', 'NACS', 'GB/T', 'Type 1 only'], a: 1, e: 'Tesla\'s connector design was standardised.' },
        { q: 'Typical EV battery degradation is about...', o: ['10–20% per year', '1–2% per year', '50% after 2 years', '0% ever'], a: 1, e: 'Most packs last well beyond 200,000 km.' },
      ],
    },
    {
      id: 'l6-9',
      title: 'The Future II: Hydrogen & Self-Driving',
      summary: 'Fuel cells, e-fuels, autonomy levels and the road to robotaxis.',
      minutes: 8,
      image: pick('road', 0),
      content: `
Batteries are not the only path forward. Hydrogen, synthetic fuels and autonomous driving will all shape what cars look like in the 2030s.

## Hydrogen fuel cell vehicles (FCEVs)

A **fuel cell** combines hydrogen (H₂) from a high-pressure tank (usually 700 bar) with oxygen from the air, across a **proton exchange membrane**. This produces electricity, heat and **water**, which drips from the tailpipe. The electricity drives a motor, assisted by a small buffer battery. Examples: **Toyota Mirai**, **Hyundai Nexo**, **Honda CR-V e:FCEV**.

- **Pros:** refuel in 3–5 minutes, 500–650 km range, zero tailpipe emissions, good for heavy and long-haul vehicles where batteries would be enormous.
- **Cons:** very few refuelling stations (and some have closed), expensive hydrogen ($15–$36/kg in California, about 1 kg per 100 km), and most hydrogen today is made from natural gas (**grey hydrogen**), which emits CO₂. **Green hydrogen** made by electrolysis using renewable electricity is clean, but the overall energy efficiency from power plant to wheels is about **25–35 percent**, vs **70–80 percent** for a battery EV. That is why most experts see hydrogen's future mainly in trucks, buses, shipping and industry rather than cars.

## Hydrogen combustion engines

Toyota and others have experimented with **burning hydrogen** in modified combustion engines (Toyota's hydrogen GR Corolla race car). Tailpipe CO₂ is near zero, but NOx still forms, and storing enough hydrogen is difficult.

## E-fuels (synthetic fuels)

**E-fuels** are made by combining green hydrogen with CO₂ captured from the air, creating synthetic petrol that works in existing engines. Porsche co-funded the **Haru Oni** plant in Chile. E-fuels could make classic and existing cars nearly carbon-neutral, and the EU allows e-fuel-only engines after its 2035 combustion ban. However, they are currently very expensive (several dollars per litre) and energy-intensive.

## Autonomous driving: the SAE levels

The **SAE J3016** standard defines six levels of driving automation:

- **Level 0** – no automation (warnings only).
- **Level 1** – **driver assistance**: one function, e.g. adaptive cruise control *or* lane keeping.
- **Level 2** – **partial automation**: steering and speed together (Tesla Autopilot/FSD Supervised, GM Super Cruise, Ford BlueCruise). The **driver must supervise at all times** and is fully responsible. Some systems allow hands-off driving on mapped highways but still require eyes on the road.
- **Level 3** – **conditional automation**: the car drives itself in specific conditions and the driver can look away, but must take over when requested. **Mercedes-Benz Drive Pilot** was the first approved system (Germany 2021/2022, later Nevada and California), initially in traffic up to 60 km/h and later up to 95 km/h on German motorways. BMW also offers Level 3 in the 7 Series.
- **Level 4** – **high automation**: no driver needed within a defined area and conditions (geofence). **Waymo** robotaxis operate fully driverless in cities such as Phoenix, San Francisco, Los Angeles and Austin; **Baidu Apollo Go** and **Pony.ai** operate in China.
- **Level 5** – **full automation** everywhere, in all conditions. Nobody has achieved this yet.

## How self-driving cars see

- **Cameras** – rich visual detail, cheap, but affected by glare and darkness. Tesla uses a camera-only approach.
- **Radar** – measures distance and speed, works in rain and fog.
- **Lidar** – lasers create a precise 3D point cloud of the surroundings. Used by Waymo and many Chinese makers.
- **HD maps, GPS and IMUs** – precise localisation.
- **AI software** combines all these (**sensor fusion**), predicts what other road users will do and plans a safe path.

## Challenges

Rare "edge cases" (unusual situations), bad weather, legal responsibility after crashes, cybersecurity, cost of sensors and public trust all remain big hurdles. Experts predict the near future will be a mix: more capable Level 2+ systems in private cars, Level 3 on motorways, and expanding Level 4 robotaxi and delivery services in selected cities.

## Other technologies to watch

- **V2X communication** – cars talking to each other and to traffic lights.
- **Steer-by-wire and brake-by-wire**, enabling new cabin designs.
- **Software-defined vehicles** with features unlocked by OTA updates.
- **Sustainable materials** and circular manufacturing.

> **You made it!** You now understand cars from the basics to the cutting edge. Head to Quiz & Certification and take the Final Exam to earn your **CarMaster Pro Certificate**.
`,
      keyPoints: [
        'Fuel cells make electricity from H₂ + O₂; only water emitted.',
        'Battery EVs are ~70–80% efficient vs ~25–35% for green hydrogen cars.',
        'SAE levels 0–5; Level 2 requires constant supervision.',
        'Waymo runs Level 4 driverless robotaxis in several cities.',
      ],
      quiz: [
        { q: 'What does a hydrogen fuel cell car emit from the tailpipe?', o: ['CO₂', 'Water', 'Soot', 'Nothing at all'], a: 1, e: 'Hydrogen + oxygen = water.' },
        { q: 'Why are most experts sceptical of hydrogen for passenger cars?', o: ['Too fast', 'Low overall energy efficiency, expensive fuel and few stations', 'Too quiet', 'It needs oil'], a: 1, e: 'Battery EVs are far more energy efficient.' },
        { q: 'At SAE Level 2, who is responsible for driving?', o: ['The car maker', 'The driver, who must supervise at all times', 'Nobody', 'The government'], a: 1, e: 'Level 2 is assistance, not self-driving.' },
        { q: 'Which was the first approved Level 3 system?', o: ['Tesla FSD', 'Mercedes-Benz Drive Pilot', 'GM Super Cruise', 'Ford BlueCruise'], a: 1, e: 'Approved in Germany, then Nevada and California.' },
        { q: 'What does lidar use to sense surroundings?', o: ['Sound waves', 'Laser light', 'Radio only', 'Magnetism'], a: 1, e: 'It creates a precise 3D point cloud.' },
      ],
    },
  ],
}
