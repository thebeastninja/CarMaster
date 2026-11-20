import { pick } from '../images.js'

export default {
  id: 2,
  slug: 'how-cars-work',
  title: 'How Cars Work',
  tag: 'Foundations',
  icon: '⚙️',
  description: 'Open the bonnet. The four-stroke cycle, gearboxes, drivetrains, brakes, suspension, steering, tyres, exhaust, cooling and electrics.',
  lessons: [
    {
      id: 'l2-1',
      title: 'Engine Basics: The Four-Stroke Cycle',
      summary: 'Suck, squeeze, bang, blow: the cycle behind almost every petrol engine.',
      minutes: 8,
      image: pick('engine', 1),
      animation: 'fourStroke',
      content: `
Almost every petrol car engine works on the **four-stroke cycle**, invented by Nikolaus Otto in 1876. Mechanics remember it as **"suck, squeeze, bang, blow"**. Once you understand these four steps, you understand the heart of a car.

## The main parts

Inside each **cylinder** is a **piston** that slides up and down. The top of the piston's travel is called **top dead centre (TDC)** and the bottom is **bottom dead centre (BDC)**. A **connecting rod** joins the piston to the **crankshaft**. At the top of the cylinder sits the **cylinder head**, which contains the **intake valve** (lets air and fuel in), the **exhaust valve** (lets burnt gas out) and the **spark plug**. The valves are opened by egg-shaped lobes on a **camshaft**, which is driven from the crankshaft by a timing belt or chain at exactly half crankshaft speed.

## Stroke 1: Intake ("suck")

The piston moves down from TDC to BDC with the intake valve open. This creates low pressure, so the air-fuel mixture rushes into the cylinder. In modern **direct-injection** engines, only air enters here and fuel is sprayed straight into the cylinder at high pressure.

## Stroke 2: Compression ("squeeze")

Both valves close. The piston travels back up, squeezing the mixture into a tiny space called the **combustion chamber**. The ratio between the cylinder volume at BDC and at TDC is the **compression ratio**, typically 10:1 to 14:1 in petrol engines. Higher compression extracts more energy from the fuel, but too high causes **knock**: the mixture explodes on its own before the spark, which can destroy pistons. That is why high-performance engines need high-octane fuel, which resists knock.

## Stroke 3: Power ("bang")

Just before the piston reaches TDC, the **spark plug** fires. The flame front spreads through the mixture in a couple of milliseconds, the temperature soars above 2,000 °C, and pressure rises to 50–100 bar. This pressure forces the piston down with tremendous force. This is the only stroke that produces power; the other three are "paid for" by the momentum of the crankshaft and its heavy **flywheel**, plus the other cylinders firing.

## Stroke 4: Exhaust ("blow")

The exhaust valve opens and the piston rises again, pushing the burnt gases out into the exhaust manifold. Then the exhaust valve closes, the intake opens, and the cycle starts again.

## Some key numbers

- One full cycle takes **two crankshaft revolutions** (720°). That is why the camshaft runs at half speed.
- At 6,000 rpm each cylinder fires 50 times per second. The entire four-stroke cycle takes just 20 milliseconds.
- **Displacement** (engine size) is the total volume all pistons sweep. A 2.0-litre four-cylinder has four cylinders of about 500 cc each.
- More cylinders fire more often, making the engine smoother. A four-cylinder fires twice per revolution; a V8 fires four times.

## Valve timing and overlap

In reality the valves do not open and close exactly at TDC and BDC. Engineers open the intake slightly early and close the exhaust slightly late so the inrushing and outrushing gases help each other; this is called **valve overlap**. **Variable valve timing** systems such as Honda's VTEC, Toyota's VVT-i and BMW's VANOS adjust these timings on the fly to give both low-rpm economy and high-rpm power.

## Two-stroke engines

Mopeds, chainsaws and old Saabs and Trabants used **two-stroke** engines, which complete the cycle in one revolution by using ports in the cylinder wall. They are simple and powerful for their size but dirty and inefficient, so they disappeared from cars.

> **Watch the animation:** Use play/pause and the speed slider. Notice that the intake valve (blue) only opens on the way down in stroke 1, the spark fires at the top before stroke 3, and the exhaust valve (orange) opens on the way up in stroke 4.
`,
      keyPoints: [
        'Intake, compression, power, exhaust: "suck, squeeze, bang, blow".',
        'One full cycle = two crankshaft turns; the camshaft spins at half speed.',
        'Compression ratio in petrol engines is ~10:1 to 14:1; too high causes knock.',
        'Only the power stroke produces work; the flywheel carries the rest.',
      ],
      quiz: [
        { q: 'What is the correct order of the four-stroke cycle?', o: ['Power, intake, exhaust, compression', 'Intake, compression, power, exhaust', 'Compression, intake, power, exhaust', 'Intake, power, compression, exhaust'], a: 1, e: 'Suck, squeeze, bang, blow.' },
        { q: 'How many crankshaft revolutions does one full cycle take?', o: ['One', 'Two', 'Four', 'Half'], a: 1, e: 'Four strokes, two per revolution, so 720° of crank rotation.' },
        { q: 'What is "knock"?', o: ['A loose bolt', 'The mixture igniting on its own before or after the spark in an uncontrolled way', 'The sound of valves', 'A turbo noise'], a: 1, e: 'Knock (detonation) is uncontrolled combustion that can damage pistons. Higher octane resists it.' },
        { q: 'At what speed does the camshaft spin relative to the crankshaft?', o: ['Same speed', 'Double speed', 'Half speed', 'Quarter speed'], a: 2, e: 'Each valve opens once every two crank revolutions, so the cam runs at half speed.' },
        { q: 'What does variable valve timing (e.g. VTEC, VANOS) achieve?', o: ['Changes the fuel type', 'Adjusts when valves open/close for both economy and power', 'Adds more cylinders', 'Cools the oil'], a: 1, e: 'Optimal valve timing differs at low and high rpm; VVT adapts it on the fly.' },
      ],
    },
    {
      id: 'l2-2',
      title: 'Transmissions: Manual, Automatic, CVT & DCT',
      summary: 'Why cars need gears and how each gearbox type delivers them.',
      minutes: 8,
      image: pick('sports', 1),
      animation: 'gearbox',
      content: `
An engine only makes useful power in a narrow band of speeds, but your wheels need to turn from 0 to 1,500+ rpm. The **transmission** (gearbox) bridges this gap. Think of a bicycle: a low gear makes climbing a hill easy but you spin your legs fast; a high gear lets you go fast on the flat with slow, powerful pedalling.

## Gear ratios

A gear ratio compares how many times the input turns for one turn of the output. A first gear of **3.5:1** means the engine turns 3.5 times for each turn of the gearbox output, multiplying torque by 3.5 (minus friction). A sixth gear might be **0.7:1**, an **overdrive**, where the output spins faster than the engine for relaxed cruising. After the gearbox, the **final drive** in the differential multiplies again, typically by 3 to 4.

## Manual transmission

A manual has two parallel shafts with pairs of gears that are **always in mesh**. The gears on the output shaft spin freely until a sliding **dog collar** locks one of them to the shaft. Before the collar engages, a brass **synchromesh** ring acts like a small clutch to match speeds, which is why modern manuals shift smoothly without crunching.

The **clutch** sits between engine and gearbox. It is a friction disc squeezed between the engine's flywheel and a spring-loaded pressure plate. Press the pedal and the disc is released, disconnecting the engine so you can change gear. Releasing it smoothly while adding throttle is the art of pulling away.

- **Pros:** cheap, light, durable, engaging, full driver control.
- **Cons:** tiring in traffic, slower shifts than modern automatics, becoming rare in new cars.

## Traditional automatic (torque converter)

A conventional automatic replaces the clutch with a **torque converter**: a fluid coupling where an engine-driven impeller throws transmission fluid at a turbine connected to the gearbox. Because there is no solid connection at low speed, the car can sit still in Drive without stalling. A **lock-up clutch** connects the two directly at cruising speed to save fuel. The gears themselves are **planetary gearsets** (a sun gear, planet gears and an outer ring gear), with hydraulically or electronically controlled clutches selecting different combinations. Modern automatics have 8 to 10 speeds (for example the ZF 8HP, used by BMW, Jaguar, Alfa Romeo and many more).

## CVT (Continuously Variable Transmission)

A CVT has no fixed gears. Instead, two cone-shaped pulleys are connected by a steel belt or chain. As the pulleys move their halves closer or further apart, the belt rides at a different diameter, smoothly changing the ratio. The engine can stay at its most efficient rpm, so CVTs are common in economy cars and hybrids (Toyota's hybrid "eCVT" is actually a planetary gearset with two motors, which works differently but feels similar). The downside is the "rubber band" feeling: the revs rise but speed lags behind, and the engine drones under hard acceleration.

## DCT (Dual-Clutch Transmission)

A DCT is essentially two manual gearboxes in one: one handles odd gears (1, 3, 5, 7), the other even gears (2, 4, 6), each with its own clutch. While you are in 3rd, the computer has already pre-selected 4th on the other shaft. A shift is simply one clutch opening while the other closes, taking less than 100 milliseconds. Volkswagen's DSG, Porsche's PDK and Ferrari's DCTs are famous examples. They are fast and efficient but can be jerky at parking speed and costly to repair.

> **Which is best?** For racing, DCT. For comfort and towing, torque-converter automatic. For economy, CVT or hybrid eCVT. For fun and low cost, manual. EVs usually have a single-speed reduction gear, because electric motors work from 0 to 15,000+ rpm.

Try the gearbox animation: press the clutch, select a gear on the H-pattern and watch how the output shaft speed changes for the same engine speed.
`,
      keyPoints: [
        'Gearboxes trade speed for torque; first gear multiplies torque most.',
        'Manuals use always-meshed gears, dog collars and synchromesh.',
        'Automatics use a torque converter plus planetary gearsets.',
        'CVTs use variable pulleys; DCTs pre-select the next gear on a second clutch.',
      ],
      quiz: [
        { q: 'What does a 3.5:1 gear ratio mean?', o: ['Output spins 3.5× faster', 'Engine turns 3.5 times per output turn, multiplying torque', 'The car has 3.5 gears', 'Fuel use is 3.5 L/100km'], a: 1, e: 'Low gears reduce speed and multiply torque.' },
        { q: 'What does synchromesh do in a manual gearbox?', o: ['Lubricates gears', 'Matches gear speeds before the dog collar engages', 'Cools the clutch', 'Selects reverse'], a: 1, e: 'Brass synchro rings act as small cone clutches for smooth, crunch-free shifts.' },
        { q: 'What connects the engine to a conventional automatic gearbox?', o: ['A dry clutch', 'A torque converter (fluid coupling)', 'A rubber belt', 'A chain'], a: 1, e: 'The torque converter lets the car idle in gear without stalling.' },
        { q: 'How does a DCT shift so quickly?', o: ['It skips gears', 'The next gear is pre-selected on the second clutch shaft', 'It uses magnets', 'It cuts the engine'], a: 1, e: 'Odd and even gears sit on separate shafts with separate clutches.' },
        { q: 'What is the typical complaint about CVTs?', o: ['Too many gears', 'A "rubber band" feeling and engine drone', 'They need a clutch pedal', 'They cannot reverse'], a: 1, e: 'Because the ratio changes continuously, revs and speed do not rise together like stepped gears.' },
      ],
    },
    {
      id: 'l2-3',
      title: 'Drivetrain: FWD, RWD, AWD & 4WD',
      summary: 'Which wheels get the power, and why it changes how a car drives.',
      minutes: 7,
      image: pick('suv', 1),
      animation: 'drivetrain',
      content: `
The **drivetrain** is everything that carries power from the gearbox to the wheels: driveshafts, propeller shaft, differentials and transfer cases. Which wheels are driven is one of the most important characteristics of any car.

## Front-wheel drive (FWD)

The engine and gearbox (combined into a compact **transaxle**) sit across the front of the car and drive the front wheels through two short driveshafts with **CV (constant velocity) joints**, which let the wheels steer and move with the suspension while still being driven.

- **Pros:** compact and cheap, more cabin space (no tunnel running down the car), good traction in snow because engine weight sits over the driven wheels, efficient.
- **Cons:** front tyres must steer *and* drive, so powerful FWD cars suffer **torque steer** (the wheel tugs under hard acceleration) and **understeer** (the front pushes wide in corners). Practical limit is around 300–350 hp.
- **Examples:** VW Golf, Honda Civic, Toyota Corolla, most hatchbacks and crossovers.

## Rear-wheel drive (RWD)

The engine is usually mounted lengthwise at the front, and a **propeller shaft** (driveshaft) runs down the centre of the car to a **differential** on the rear axle. Some cars put the engine in the middle (mid-engine) or at the back (Porsche 911).

- **Pros:** front wheels only steer, giving purer steering feel; better weight balance (close to 50:50); under acceleration weight shifts backwards onto the driven wheels, improving traction; can handle huge power. Allows controlled **oversteer** and drifting.
- **Cons:** less traction in snow and ice, more expensive, the transmission tunnel steals space.
- **Examples:** BMW 3 Series, Mazda MX-5, Ford Mustang, Mercedes-Benz E-Class, most sports cars.

## All-wheel drive (AWD)

AWD sends power to all four wheels, all the time or automatically when needed. A **centre differential** or an electronically controlled **multi-plate clutch** splits torque between front and rear. Many modern systems (Audi quattro with Ultra, BMW xDrive, Haldex in VW/Volvo) run mostly in FWD or RWD and engage the other axle within milliseconds when slip is detected. Advanced systems use **torque vectoring** to send more power to the outside wheel in a corner, helping the car turn.

- **Pros:** best traction on wet, snow and loose surfaces; can deploy enormous power from a standstill.
- **Cons:** heavier, more complex, slightly higher fuel use. **AWD does not help you brake or turn on ice**; good tyres matter more.
- **Examples:** Subaru WRX, Audi RS models, Nissan GT-R, Tesla Dual Motor, Porsche 911 Turbo.

## Four-wheel drive (4WD / 4x4)

The term 4WD usually refers to rugged, **part-time** off-road systems with a **transfer case**. In normal driving only the rear wheels are driven; the driver engages 4WD (4H) which **locks** the front and rear axles to turn at the same speed. That gives maximum traction off-road but causes **driveline wind-up** on tarmac, so you should not use it on dry roads. A **low range (4L)** gear multiplies torque by 2–4 times for crawling over rocks and steep slopes. **Locking differentials** force left and right wheels to turn together so the car keeps moving even if one wheel is in the air.

- **Examples:** Jeep Wrangler, Toyota Land Cruiser, Land Rover Defender, Suzuki Jimny.

## The differential in one paragraph

An **open differential** splits torque equally between two wheels but lets them turn at different speeds. Its weakness: if one wheel is on ice, it spins and the other gets almost nothing. A **limited-slip differential (LSD)** uses clutches, gears (Torsen) or viscous fluid to send more torque to the wheel with grip. Performance cars and off-roaders use LSDs or lockers for exactly this reason.

> **Electric twist:** EVs can place a motor on each axle (dual motor) or even each wheel, creating "virtual" AWD with instant, precise torque control and no driveshafts at all.

Play with the drivetrain animation to see power flowing to the wheels in each layout.
`,
      keyPoints: [
        'FWD: cheap, roomy, good in snow; suffers torque steer at high power.',
        'RWD: better balance and steering feel; ideal for performance and drifting.',
        'AWD: automatic, all-surface traction; 4WD adds locked axles and low range.',
        'Open diffs send power to the slipping wheel; LSDs fix that.',
      ],
      quiz: [
        { q: 'What is torque steer?', o: ['Steering that gets heavier at speed', 'The steering tugging under hard acceleration in powerful FWD cars', 'A type of power steering', 'Oversteer in RWD cars'], a: 1, e: 'Unequal driveshaft forces in FWD cars pull the wheel to one side.' },
        { q: 'Why should you avoid using part-time 4WD on dry tarmac?', o: ['It uses too much fuel', 'Locked axles cause driveline wind-up and damage', 'It is illegal', 'It disables the brakes'], a: 1, e: 'Without a centre diff, front and rear axles fight each other on high-grip surfaces.' },
        { q: 'What does a low-range gearbox (4L) do?', o: ['Increases top speed', 'Multiplies torque for slow crawling off-road', 'Saves fuel', 'Locks the steering'], a: 1, e: 'Low range adds an extra 2–4× reduction for steep, technical terrain.' },
        { q: 'What is the weakness of an open differential?', o: ['It is heavy', 'Power goes to the wheel with the least grip', 'It cannot turn corners', 'It is noisy'], a: 1, e: 'If one wheel spins on ice, the other gets little torque. LSDs solve this.' },
        { q: 'Which layout typically gives the purest steering feel?', o: ['FWD', 'RWD', 'Part-time 4WD', 'All equal'], a: 1, e: 'In RWD, the front wheels only steer, without drive forces interfering.' },
      ],
    },
    {
      id: 'l2-4',
      title: 'Brakes',
      summary: 'Hydraulics, discs, drums, ABS and regenerative braking.',
      minutes: 7,
      image: pick('sports', 2),
      animation: 'brakes',
      content: `
Brakes are the most important safety system in your car. A car's brakes are far more powerful than its engine: a family car might accelerate at 0.3 g but can brake at over 1 g. Here is how they turn your foot's gentle push into enough force to stop two tonnes.

## Hydraulics: multiplying your foot

When you press the pedal, a lever pushes a piston in the **master cylinder**, which pressurises **brake fluid** in sealed pipes running to each wheel. Because liquids cannot be compressed, the pressure arrives at every wheel instantly. At each wheel, the fluid pushes on **caliper pistons** that are much larger than the master cylinder piston, multiplying the force (Pascal's law). A **brake booster** (vacuum servo, or an electric booster in hybrids and EVs) adds further assistance, so a 20 kg push from your foot can become over a tonne of clamping force at each wheel.

## Disc brakes

Almost all cars have disc brakes at the front and most at the rear too. A cast-iron **disc (rotor)** spins with the wheel. A **caliper** straddles it and squeezes two **brake pads** against both sides. Friction turns the car's kinetic energy into heat; the discs can glow above 500 °C during hard track use.

- **Vented discs** have internal vanes that pump air through them for cooling.
- **Drilled or slotted discs** help release gas and water and look sporty.
- **Floating calipers** have pistons on one side only and slide on pins; cheap and common.
- **Fixed multi-piston calipers** (4, 6 or even 10 pistons) clamp from both sides and are used on performance cars.
- **Carbon-ceramic discs** are light, resist fade and last a very long time but cost $8,000–$20,000 for a set.

## Drum brakes

Older and cheaper cars may use **drum brakes** at the rear. Curved **shoes** push outward against the inside of a spinning drum. They are cheap and work well as a parking brake but dissipate heat poorly. They are making a comeback on some EV rear axles (VW ID.3) because regen does most of the braking and drums resist corrosion.

## ABS, EBD and brake assist

- **ABS (Anti-lock Braking System)** monitors each wheel's speed. If a wheel is about to lock, the ABS unit rapidly releases and reapplies pressure up to 15 times per second. A rolling tyre grips better than a sliding one and, crucially, still lets you steer. You will feel the pedal pulse; keep pressing hard.
- **EBD (Electronic Brakeforce Distribution)** balances force front-to-rear depending on load.
- **Brake Assist** detects a panic stop and applies maximum force even if you do not press hard enough.
- **Automatic Emergency Braking (AEB)** uses radar and cameras to brake for you if a collision is imminent.

## Regenerative braking

Hybrids and EVs use their electric motor as a generator when you lift off or press the brake, turning kinetic energy back into electricity. This can recover 60–70 percent of braking energy in city driving, and means the pads on many EVs last 150,000 km or more. The car blends regen and friction brakes automatically.

## Brake fade and fluid

Under repeated heavy braking (long mountain descents, track days), pads and fluid can overheat. **Pad fade** reduces friction; **fluid fade** happens when brake fluid boils, creating compressible vapour bubbles, so the pedal goes soft. Brake fluid is **hygroscopic** (it absorbs water from the air), which lowers its boiling point, so it should be replaced every two years. Use lower gears on long descents to let **engine braking** help.

> **Warning signs:** squealing (wear indicators), grinding (metal on metal, stop driving), vibration through the pedal (warped or uneven discs), pulling to one side (sticking caliper), soft or spongy pedal (air or water in fluid). Never ignore brake problems.
`,
      keyPoints: [
        'Hydraulics multiply pedal force; a booster adds more.',
        'Disc brakes: calipers squeeze pads onto a spinning rotor.',
        'ABS prevents wheel lock so you can still steer.',
        'Replace brake fluid every ~2 years; it absorbs water.',
      ],
      quiz: [
        { q: 'What does the master cylinder do?', o: ['Cools the brakes', 'Converts pedal force into hydraulic pressure', 'Stores spare pads', 'Controls ABS'], a: 1, e: 'It pressurises the brake fluid that travels to each caliper.' },
        { q: 'Why does ABS improve safety?', o: ['It makes brakes stronger', 'It prevents wheel lock so you can still steer', 'It shortens every stop on every surface', 'It replaces the handbrake'], a: 1, e: 'A rolling tyre can steer; a locked one slides straight on.' },
        { q: 'Why should brake fluid be changed every ~2 years?', o: ['It evaporates', 'It absorbs water, lowering its boiling point', 'It changes colour', 'It thickens'], a: 1, e: 'Water-contaminated fluid can boil under heavy braking, causing a soft pedal.' },
        { q: 'What does a grinding noise when braking usually mean?', o: ['New pads bedding in', 'Pads worn to the metal backing plate', 'ABS working', 'Low tyre pressure'], a: 1, e: 'Metal-on-metal will quickly destroy discs. Stop and get them checked.' },
        { q: 'How much braking energy can regen recover in city driving?', o: ['About 5%', 'About 60–70%', '100%', 'None'], a: 1, e: 'Regeneration recovers a large share of energy, extending range and pad life.' },
      ],
    },
    {
      id: 'l2-5',
      title: 'Suspension',
      summary: 'Springs, dampers, anti-roll bars and the geometry that keeps tyres planted.',
      minutes: 7,
      image: pick('suv', 2),
      content: `
The suspension has two jobs that pull in opposite directions: **comfort** (isolating occupants from bumps) and **handling** (keeping the tyres pressed onto the road with consistent grip). Every suspension design is a compromise between the two.

## Springs

Springs hold the car up and absorb bumps. Most cars use **coil springs**. Trucks often use **leaf springs**, stacks of curved steel strips that also locate the axle. Luxury cars and many EVs use **air springs**: rubber bags filled with compressed air, which allow adjustable ride height and very soft, controlled ride. Spring **rate** describes stiffness: a stiffer spring reduces body roll but transmits more bumps.

## Dampers (shock absorbers)

A spring alone would keep bouncing after every bump. The **damper** controls that motion by forcing oil through small valves as it compresses and extends, turning motion energy into heat. Worn dampers are dangerous: the car wallows, bounces after bumps, takes longer to stop and loses grip in corners. **Adaptive dampers** change their stiffness electronically in milliseconds; **magnetorheological** dampers (Cadillac, Ferrari, Audi) use fluid filled with iron particles whose thickness changes with a magnetic field.

A **strut** combines the spring and damper into one unit that also locates the wheel. A **coilover** is a damper with a coil spring around it, often height-adjustable; popular for tuning.

## Anti-roll bars

An **anti-roll bar** (sway bar) is a torsion bar linking the left and right wheels. In a corner, the body rolls outward; the bar twists and resists, keeping the car flatter. Stiffer bars mean less roll but less independent wheel movement over uneven surfaces. Changing the balance of front and rear bars is a classic way to tune understeer and oversteer.

## Common suspension designs

- **MacPherson strut** – the most common front suspension: a strut plus a lower control arm. Cheap, compact, good enough for most cars.
- **Double wishbone** – two A-shaped arms (upper and lower). Precise control of wheel angle; used on sports cars, race cars and many premium cars.
- **Multi-link** – three to five separate links per wheel, allowing engineers to tune each movement. Common at the rear of premium cars.
- **Torsion beam** – a cheap, space-saving rear setup where both rear wheels are joined by a twisting beam. Common on small hatchbacks.
- **Solid (live) axle** – one rigid beam across the car. Extremely tough and gives great articulation off-road; used on Jeep Wranglers and heavy trucks.

## Geometry: camber, caster and toe

- **Camber** – the tilt of the wheel seen from the front. Negative camber (top tilted inward) improves cornering grip but wears the inside edge of the tyre.
- **Toe** – whether the fronts of the wheels point inward (toe-in) or outward (toe-out). Small changes have big effects on stability and tyre wear.
- **Caster** – the angle of the steering axis seen from the side. Positive caster makes the steering self-centre after a turn, like the wheels of a shopping trolley.

A **wheel alignment** adjusts these angles. If your car pulls to one side or the tyres wear unevenly, it probably needs one, especially after hitting a pothole or kerb.

> **Bounce test:** Push down hard on each corner of the car and let go. It should rise and settle once. If it bounces two or three times, the dampers are worn. Also look for oil leaking down the damper body.

Typical lifespans: dampers 80,000–150,000 km, springs often the life of the car (but they can snap from corrosion), bushes 100,000+ km.
`,
      keyPoints: [
        'Springs hold the car up; dampers stop it bouncing.',
        'Anti-roll bars reduce body roll in corners.',
        'MacPherson strut is common; double wishbone is precise; solid axles suit off-road.',
        'Camber, toe and caster are set by a wheel alignment.',
      ],
      quiz: [
        { q: 'What does a damper (shock absorber) do?', o: ['Holds the car up', 'Controls spring oscillation by turning motion into heat', 'Steers the wheels', 'Locks the axle'], a: 1, e: 'Without dampers the car would keep bouncing after every bump.' },
        { q: 'What is the most common front suspension type on modern cars?', o: ['Leaf spring', 'MacPherson strut', 'Solid axle', 'Hydropneumatic'], a: 1, e: 'It is cheap, compact and effective, so most mainstream cars use it.' },
        { q: 'What does an anti-roll bar do?', o: ['Prevents rollovers completely', 'Resists body roll by linking left and right wheels', 'Adds ground clearance', 'Stops the car rolling when parked'], a: 1, e: 'It twists in corners to keep the body flatter.' },
        { q: 'Positive caster makes the steering...', o: ['Heavier only', 'Self-centre after a turn', 'Vibrate', 'Pull to one side'], a: 1, e: 'Like a shopping trolley wheel, caster creates a self-aligning effect.' },
        { q: 'If a car bounces 2–3 times after pushing down on a corner, what is likely worn?', o: ['Brake pads', 'Dampers', 'Spark plugs', 'Wheel bearings'], a: 1, e: 'Healthy dampers settle the body after one rebound.' },
      ],
    },
    {
      id: 'l2-6',
      title: 'Steering',
      summary: 'Rack and pinion, power assistance and steer-by-wire.',
      minutes: 6,
      image: pick('luxury', 1),
      content: `
Steering seems simple: turn the wheel, the car turns. But behind it are clever mechanisms that make a two-tonne car easy to turn with one finger at parking speeds, yet stable and precise at 200 km/h.

## Rack and pinion

Nearly every modern car uses **rack-and-pinion** steering. The steering column ends in a small round gear, the **pinion**, which meshes with a long, straight toothed bar, the **rack**. Turning the pinion slides the rack left or right. **Tie rods** at each end of the rack connect to **steering arms** on the wheel hubs (knuckles), angling the wheels. It is simple, light, precise and gives good feedback.

Trucks and some older off-roaders use **recirculating ball** steering, a worm gear with ball bearings, which is tougher and isolates shocks from rough terrain but feels vaguer.

## Steering ratio

The **steering ratio** compares steering wheel rotation to wheel rotation. A ratio of 15:1 means 15 degrees of steering wheel turn the wheels by 1 degree. Sports cars use quicker ratios (around 12–14:1); big SUVs and trucks are slower (16–20:1). **Lock-to-lock** is the number of turns from full left to full right, typically 2.5 to 3. **Variable-ratio** racks are quicker at large angles for easy parking.

## Ackermann geometry

When turning, the inner front wheel follows a tighter circle than the outer one, so it must turn more sharply. The **Ackermann principle**, built into the angles of the steering arms, makes this happen automatically. Without it, the tyres would scrub and squeal in tight turns.

## Power steering

- **Hydraulic power steering (HPS)** – an engine-driven pump pressurises fluid that helps push the rack. Great feel, but the pump always takes power from the engine. Signs of trouble: whining noise when turning, heavy steering, fluid leaks.
- **Electro-hydraulic** – same principle but the pump is electric.
- **Electric power steering (EPS)** – an electric motor on the column or rack provides assistance only when needed. Saves 3–5 percent fuel, can vary assistance with speed (light when parking, heavier on the motorway), and enables features like **lane-keeping assist** and **automatic parking**. Today almost all new cars use EPS.

## Rear-wheel steering

Many premium and performance cars (Porsche 911, BMW 7 Series, Mercedes S-Class, Lamborghini) can steer the rear wheels a few degrees. At low speed they turn **opposite** to the fronts, shrinking the turning circle by up to a metre or more; at high speed they turn the **same way**, improving stability in lane changes. The Mercedes EQS can steer its rear wheels up to 10 degrees.

## Steer-by-wire

In steer-by-wire systems there is no mechanical link between steering wheel and rack; sensors read your input and motors move the wheels. The Infiniti Q50 (with a backup clutch) and Tesla Cybertruck use it, and the Lexus RZ offers a yoke-style wheel with it. It allows variable ratios and new cabin layouts, but needs multiple redundant systems for safety.

> **Check your steering:** With the engine running and the car still, rock the wheel gently. More than a couple of centimetres of free play before the wheels respond means worn tie-rod ends or rack. Clunks over bumps, vibration at certain speeds, or a wheel that is off-centre when driving straight are all signs to get it checked.
`,
      keyPoints: [
        'Rack and pinion converts wheel rotation into side-to-side rack movement.',
        'Ackermann geometry lets the inner wheel turn more sharply.',
        'EPS is now standard; saves fuel and enables driver assistance.',
        'Rear-wheel steering shrinks turning circles and improves stability.',
      ],
      quiz: [
        { q: 'What does the pinion mesh with in rack-and-pinion steering?', o: ['The crankshaft', 'A long toothed bar called the rack', 'The flywheel', 'The differential'], a: 1, e: 'Turning the pinion slides the rack, which moves the tie rods.' },
        { q: 'Why does Ackermann geometry exist?', o: ['To make steering lighter', 'The inner wheel needs to turn more sharply than the outer one', 'To reduce cost', 'For rear-wheel steering'], a: 1, e: 'The inner wheel follows a tighter radius in a turn.' },
        { q: 'Which power steering type enables lane-keeping assist?', o: ['Manual steering', 'Hydraulic only', 'Electric power steering (EPS)', 'Recirculating ball'], a: 2, e: 'An electric motor can be controlled by the car\'s computers to steer.' },
        { q: 'At low speed, rear-wheel steering turns the rear wheels...', o: ['The same way as the fronts', 'Opposite to the fronts', 'Not at all', 'Randomly'], a: 1, e: 'Opposite-phase steering at low speed shrinks the turning circle.' },
        { q: 'A whining noise when turning in a hydraulic system often means...', o: ['Low power steering fluid or a failing pump', 'Bad spark plugs', 'Low tyre pressure', 'Worn brake pads'], a: 0, e: 'Check fluid level and look for leaks.' },
      ],
    },
    {
      id: 'l2-7',
      title: 'Tyres & Wheels',
      summary: 'How to read a tyre, choose the right type and keep your grip.',
      minutes: 7,
      image: pick('sports', 3),
      content: `
Your tyres are the most important performance and safety component on the car. Every input, whether accelerating, braking or steering, works only as well as the four palm-sized **contact patches** where rubber meets road. A cheap car on great tyres will out-brake an expensive car on worn ones.

## Reading a tyre sidewall

Take a typical size: **225/45 R17 94W**.

- **225** – tyre width in millimetres.
- **45** – the **aspect ratio**: sidewall height is 45 percent of the width (about 101 mm). Lower numbers mean a shorter, stiffer sidewall: sharper handling but harsher ride.
- **R** – radial construction (virtually all modern tyres).
- **17** – fits a 17-inch wheel rim.
- **94** – the **load index**: 94 means 670 kg per tyre.
- **W** – the **speed rating**: maximum 270 km/h. Others: T = 190, H = 210, V = 240, W = 270, Y = 300 km/h.

You will also find the **DOT code**, whose last four digits show the week and year of manufacture (e.g. "2324" = week 23 of 2024). Rubber hardens with age, so replace tyres older than 6–10 years even if they have tread left.

## Tyre types

- **Summer tyres** – best grip in dry and wet above about 7 °C. The compound hardens in cold weather.
- **Winter tyres** – softer compound and thousands of small slits (**sipes**) that bite into snow and ice. Look for the three-peak mountain snowflake symbol (3PMSF). Below 7 °C they outperform summer tyres even on cold, dry roads.
- **All-season tyres** – a compromise for moderate climates; modern ones with 3PMSF are excellent for many drivers.
- **Performance / semi-slick** – very soft, minimal tread for maximum dry grip on track; poor in heavy rain.
- **All-terrain and mud-terrain** – chunky blocks for off-road traction; noisier on the road.
- **Run-flat** – reinforced sidewalls let you drive about 80 km at 80 km/h after a puncture.

## Tread depth and aquaplaning

Grooves in the tread pump water away. A new tyre has about 8 mm of tread. The legal minimum in the UK and EU is **1.6 mm**, but braking distances in the wet increase dramatically below **3 mm**, so many experts recommend replacing then. Built-in **tread wear indicators** (small bars in the grooves) show when you reach the limit. Too little tread or too much speed in standing water causes **aquaplaning**: the tyre rides on a film of water and you lose all steering and braking. If it happens, ease off the throttle and keep the wheel straight.

## Tyre pressure

Correct pressure is listed on a sticker inside the driver's door jamb or fuel filler flap (not on the tyre, which shows the maximum). Check monthly, when the tyres are cold.

- **Under-inflated** – the shoulders wear, fuel use rises, the tyre overheats and can fail, handling gets vague.
- **Over-inflated** – the centre wears, grip falls, ride gets harsh.

Most cars now have a **TPMS** (tyre pressure monitoring system) that warns you when a tyre is low.

## Wheels

Wheels are usually **alloy** (aluminium) or **steel**. Alloys are lighter and look better; steel wheels are cheap and tough, popular for winter sets. Reducing **unsprung mass** (wheels, tyres, brakes) improves ride and grip, which is why forged and carbon wheels exist. The **offset** and **PCD** (bolt pattern, e.g. 5x112) must match your car. Bigger wheels look great but bring lower-profile tyres, a harsher ride, more pothole damage and higher tyre costs.

> **Rotation:** Rotating tyres front-to-back every 10,000 km evens out wear and can add thousands of kilometres to their life. Always fit new tyres in pairs on the same axle, and put the best pair on the rear for stability.
`,
      keyPoints: [
        '225/45 R17 94W = width / aspect ratio / radial / rim / load / speed.',
        'Legal minimum tread is 1.6 mm (UK/EU), but replace around 3 mm.',
        'Winter tyres beat summer tyres below ~7 °C.',
        'Correct pressure is on the door-jamb sticker, not the tyre.',
      ],
      quiz: [
        { q: 'In 225/45 R17, what does "45" mean?', o: ['Width in mm', 'Sidewall height as % of width', 'Rim size', 'Speed rating'], a: 1, e: 'It is the aspect ratio: 45% of 225 mm ≈ 101 mm sidewall height.' },
        { q: 'Below what temperature do winter tyres outperform summer tyres?', o: ['About 7 °C', 'About 20 °C', '-20 °C', '0 °C only on ice'], a: 0, e: 'Summer compounds harden below about 7 °C.' },
        { q: 'Where do you find the correct tyre pressure for your car?', o: ['On the tyre sidewall', 'On a sticker in the door jamb or fuel flap / owner\'s manual', 'On the wheel', 'Anywhere online'], a: 1, e: 'The sidewall shows the tyre\'s maximum pressure, not the recommended one.' },
        { q: 'What does the DOT code "2324" tell you?', o: ['Size 23/24', 'Made in week 23 of 2024', 'Pressure 23–24 psi', 'Load index'], a: 1, e: 'Check tyre age; replace after 6–10 years regardless of tread.' },
        { q: 'What should you do if your car aquaplanes?', o: ['Brake hard', 'Ease off the throttle and keep the wheel straight', 'Turn sharply', 'Accelerate'], a: 1, e: 'Let the car slow until the tyres regain contact with the road.' },
      ],
    },
    {
      id: 'l2-8',
      title: 'Exhaust System',
      summary: 'Manifolds, catalytic converters, particulate filters and mufflers.',
      minutes: 6,
      image: pick('muscle', 0),
      content: `
The exhaust system has four jobs: carry hot, toxic gases away from the engine and occupants, clean them, quieten them, and help the engine breathe efficiently. Let us follow the gas from the cylinder to the tailpipe.

## Exhaust manifold / header

When the exhaust valve opens, gas at around 800–950 °C rushes into the **exhaust manifold**, which collects the gas from each cylinder into one pipe. Cast-iron manifolds are cheap and durable. Performance **headers** use individual, equal-length steel tubes that help each pulse of gas flow smoothly and even "scavenge" (pull) gas from the next cylinder. On turbocharged cars, the manifold feeds straight into the **turbocharger**. Many modern engines integrate the manifold into the cylinder head so it can be water-cooled and the catalytic converter warms up faster.

## Oxygen (lambda) sensors

**O₂ sensors** sit before and after the catalytic converter. The first measures oxygen left in the exhaust so the ECU can adjust fuel to keep the mixture at the ideal **stoichiometric ratio** (14.7 parts air to 1 part petrol by mass). The second checks the catalyst is working. A faulty O₂ sensor often turns on the check-engine light and increases fuel use.

## Catalytic converter

Since the 1970s (USA) and 1993 (EU), petrol cars have used a **three-way catalytic converter**. Inside a stainless steel shell is a ceramic honeycomb coated with precious metals: **platinum, palladium and rhodium**. These catalysts trigger chemical reactions that convert:

- **Carbon monoxide (CO)** into carbon dioxide (CO₂)
- **Unburnt hydrocarbons (HC)** into CO₂ and water
- **Nitrogen oxides (NOx)** into nitrogen and oxygen

A catalyst works only when hot (above ~250–300 °C), which is why most pollution happens in the first minutes after a cold start. Because of the precious metals, catalytic converters are expensive ($800–$2,500+) and are, sadly, a target for thieves.

## Diesel after-treatment

Diesels need more cleaning. A **diesel oxidation catalyst (DOC)** handles CO and HC. A **diesel particulate filter (DPF)** traps soot; it must periodically **regenerate** by burning the soot off at high temperature, which needs a sustained drive at motorway speed. Short trips only can clog it. **SCR (Selective Catalytic Reduction)** injects **AdBlue** (a urea solution) to convert NOx into nitrogen and water. Modern petrol direct-injection engines also have **gasoline particulate filters (GPF)**.

## Resonators and mufflers

The rest of the system controls noise. A **resonator** cancels specific annoying frequencies (often motorway "drone"). The **muffler (silencer)** uses chambers, perforated tubes and sound-absorbing packing to reduce volume. Many performance cars have **active exhaust valves** that open in Sport mode to bypass part of the muffler, making the car louder.

## Back pressure: a myth to bust

You may hear that engines "need back pressure". Not exactly: engines need **exhaust velocity** and good pulse tuning. Too-large pipes can slow the gas and reduce low-rpm torque, but less restriction generally means more power. This is why aftermarket exhausts can add a few percent of power, especially on turbo engines.

## Common problems

- **Rattle underneath** – a loose heat shield or broken hanger. Cheap fix.
- **Loud roaring** – a hole or failed joint, often rust. Also dangerous because CO can enter the cabin.
- **Rotten-egg smell** – an overheating or failing catalytic converter.
- **Blue smoke** – burning oil (worn piston rings, valve seals or turbo).
- **White smoke** that smells sweet – burning coolant (head gasket). Thin white vapour on a cold morning is normal condensation.
- **Black smoke** – too much fuel (rich mixture), common with faulty injectors or sensors, and on poorly tuned diesels.
`,
      keyPoints: [
        'Manifold → (turbo) → catalytic converter → resonator → muffler → tailpipe.',
        'Three-way cats convert CO, HC and NOx using Pt, Pd and Rh.',
        'Diesels add DPF (soot) and SCR with AdBlue (NOx).',
        'Smoke colour: blue = oil, white & sweet = coolant, black = excess fuel.',
      ],
      quiz: [
        { q: 'Which precious metals are found in a catalytic converter?', o: ['Gold and silver', 'Platinum, palladium and rhodium', 'Copper and zinc', 'Titanium and nickel'], a: 1, e: 'These rare metals catalyse the conversion of pollutants.' },
        { q: 'What is the stoichiometric air-fuel ratio for petrol?', o: ['1:1', '7:1', '14.7:1', '30:1'], a: 2, e: '14.7 parts air to 1 part fuel by mass gives complete combustion.' },
        { q: 'What does AdBlue do in a diesel?', o: ['Cleans injectors', 'Converts NOx into nitrogen and water in the SCR system', 'Lubricates the turbo', 'Increases power'], a: 1, e: 'AdBlue is a urea solution injected into the SCR catalyst.' },
        { q: 'Blue exhaust smoke usually indicates...', o: ['Burning coolant', 'Burning oil', 'Too much fuel', 'Normal condensation'], a: 1, e: 'Worn piston rings, valve seals or a leaking turbo can burn oil.' },
        { q: 'Why can a DPF clog on a diesel used only for short trips?', o: ['It needs sustained high temperatures to burn off soot', 'It needs AdBlue', 'It freezes', 'Short trips use the wrong fuel'], a: 0, e: 'Regeneration needs 15–20 minutes of steady, faster driving.' },
      ],
    },
    {
      id: 'l2-9',
      title: 'Cooling System',
      summary: 'Radiators, water pumps, thermostats and why overheating kills engines.',
      minutes: 6,
      image: pick('engine', 2),
      content: `
Remember that a combustion engine wastes roughly two thirds of its fuel energy as heat. About a third of that heat leaves through the exhaust; another big share must be removed by the **cooling system**. Without it, an engine would destroy itself in minutes: aluminium cylinder heads warp, head gaskets fail, and pistons can seize in their bores.

## Coolant

Modern engines are liquid-cooled. **Coolant** (antifreeze) is a mix of water and ethylene or propylene glycol, usually 50:50. Glycol lowers the freezing point (to around −37 °C), raises the boiling point, and contains inhibitors that prevent corrosion inside the engine. Coolants come in different chemistries (OAT, HOAT, IAT) and colours; do not mix types, and follow your manufacturer's spec. Coolant should be changed every 5 years or around 100,000–160,000 km for long-life types.

## The circuit

- **Water pump** – usually driven by the timing or accessory belt (or electric on newer cars). It circulates coolant through passages, called the **water jacket**, around the cylinders and through the head.
- **Thermostat** – a temperature-controlled valve. When the engine is cold it stays closed, so coolant circulates only inside the engine and it warms up quickly (cold engines wear faster and pollute more). At about 85–105 °C it opens and sends coolant to the radiator.
- **Radiator** – a heat exchanger at the front of the car: thin aluminium tubes with fins, through which hot coolant flows while air passes over them.
- **Cooling fan** – an electric fan pulls air through the radiator when the car is moving slowly or stopped in traffic.
- **Expansion tank** – coolant expands when hot; this reservoir holds the extra and lets you check the level (MIN/MAX marks).
- **Radiator cap** – keeps the system pressurised to about 1 bar (15 psi), which raises coolant's boiling point to around 120–130 °C.
- **Heater core** – a mini radiator behind the dashboard. Your cabin heater simply uses waste engine heat, which is why it blows cold until the engine warms up.

## Oil coolers and intercoolers

High-performance engines also cool their **oil** with separate oil coolers, and turbocharged engines cool the compressed intake air with an **intercooler**. Electric cars have a cooling system too: batteries work best around 20–40 °C, so EVs use liquid loops, chillers and **heat pumps** to heat or cool the battery and cabin efficiently.

## Overheating: what to do

If the temperature gauge climbs into the red or a red thermometer warning appears:

- Turn off the air conditioning and turn the **heater to full hot** with the fan on max. This sounds odd, but it uses the heater core as an extra radiator.
- Pull over safely and switch off the engine.
- **Never open the radiator cap while hot**: pressurised coolant above 100 °C can spray out and cause serious burns. Wait at least 30 minutes.
- Check the coolant level once cool, look for leaks, and do not keep driving an overheating engine; a warped head can cost thousands.

## Common causes of overheating

- Low coolant from a leak (hoses, radiator, water pump seal)
- A stuck-closed thermostat
- A failed cooling fan or fan relay
- A failing water pump (often with a leak or bearing noise)
- A blocked radiator (debris or internal corrosion)
- A **blown head gasket**, which lets combustion gases into the coolant

> **Head-gasket clues:** white, sweet-smelling exhaust smoke, coolant loss with no visible leak, bubbles in the expansion tank, or milky "mayonnaise" residue under the oil cap. Catch it early.
`,
      keyPoints: [
        'Coolant is ~50:50 glycol and water; prevents freezing, boiling and corrosion.',
        'The thermostat stays closed until the engine is warm.',
        'The system is pressurised (~1 bar); never open a hot radiator cap.',
        'If overheating: heater on full hot, pull over, switch off.',
      ],
      quiz: [
        { q: 'What does the thermostat do?', o: ['Measures oil temperature', 'Keeps coolant in the engine until it warms up, then opens to the radiator', 'Controls the A/C', 'Pumps coolant'], a: 1, e: 'It helps the engine warm up quickly, then regulates temperature.' },
        { q: 'Why is the cooling system pressurised?', o: ['To make it louder', 'To raise the boiling point of the coolant', 'To push oil around', 'To reduce weight'], a: 1, e: 'At ~1 bar, coolant boils around 120–130 °C instead of ~107 °C.' },
        { q: 'If your engine is overheating, you can temporarily help by...', o: ['Turning the A/C to max cold', 'Turning the heater to full hot', 'Revving the engine', 'Opening the radiator cap'], a: 1, e: 'The heater core acts as a second radiator.' },
        { q: 'Milky residue under the oil cap can indicate...', o: ['A blown head gasket letting coolant into oil', 'Good oil', 'Low tyre pressure', 'A new battery'], a: 0, e: 'Short trips can cause some condensation too, but it is a key head-gasket warning sign.' },
        { q: 'Why does the cabin heater blow cold air right after starting?', o: ['It is broken', 'It uses waste engine heat, which takes time to build', 'It needs A/C first', 'The fan is reversed'], a: 1, e: 'The heater core is fed by engine coolant.' },
      ],
    },
    {
      id: 'l2-10',
      title: 'Electrical System & Battery',
      summary: 'Batteries, alternators, starters, fuses and the CAN bus.',
      minutes: 7,
      image: pick('ev', 1),
      content: `
A modern car contains 1 to 5 kilometres of wiring, 50 to 150 ECUs and over 100 million lines of software code. The electrical system powers everything from the starter motor to the airbags, and electrical faults are now among the most common reasons cars break down.

## The 12-volt battery

Even an EV has a small **12 V battery** that runs the computers, lights and locks. In a combustion car it also powers the starter motor. Types:

- **Flooded lead-acid** – traditional, cheapest.
- **EFB (Enhanced Flooded Battery)** – tougher, for basic stop-start systems.
- **AGM (Absorbent Glass Mat)** – sealed, spill-proof, handles deep cycling; required by many cars with stop-start and lots of electronics.
- **Lithium 12 V** – light and long-lasting; used in some performance cars and EVs.

A healthy, fully charged lead-acid battery reads about **12.6 V** with the engine off. Below 12.2 V it is about half discharged; below 12.0 V it may not start the car. With the engine running, you should see **13.8–14.7 V**, showing the alternator is charging. Batteries usually last **4–6 years**; heat shortens their life more than cold, but cold weather is when weak batteries finally fail because chemical reactions slow down and thick oil makes the engine harder to turn.

## Starter motor

The **starter** is a powerful electric motor (1–3 kW) that draws 150–300 amps for a few seconds. When you turn the key or press Start, a **solenoid** pushes a small gear (pinion) into the teeth around the flywheel and spins the engine until it fires. A single **click** but no crank usually means a flat battery, bad connection or failing solenoid. A rapid clicking sound almost always means a weak battery.

## Alternator

Once the engine runs, the **alternator**, driven by the accessory belt, generates electricity to power the car and recharge the battery. It produces AC current that a **rectifier** converts into DC, and a **voltage regulator** keeps the output steady. Modern "smart" alternators charge mainly when you decelerate, to save fuel. Signs of a failing alternator: the battery warning light, dimming headlights, a whining noise, and a car that dies while driving.

## Fuses and relays

**Fuses** protect each circuit: if too much current flows (for example, a short circuit), the thin metal strip melts and breaks the circuit before wires overheat and catch fire. Fuse boxes are usually under the dashboard and in the engine bay; the lid shows a diagram. If a fuse keeps blowing, there is a fault to find; never fit a higher-rated fuse. **Relays** are electrically operated switches that let a small current (from a switch or ECU) control a large one (like a fan or fuel pump).

## ECUs and networks

Each system has its own **Electronic Control Unit**: the engine control module, transmission control, ABS, airbag module, body control module and so on. They talk to each other over networks such as the **CAN bus**, **LIN** and, in new cars, **automotive Ethernet**. Mechanics plug a scan tool into the **OBD-II port** (mandatory in the US since 1996 and in EU petrol cars since 2001), usually under the dashboard, to read **diagnostic trouble codes (DTCs)** like *P0301* (cylinder 1 misfire). Cheap Bluetooth OBD readers ($20–$40) let you read codes with your phone.

## High-voltage systems

Hybrids and EVs add a **high-voltage battery** (200–800 V) with bright **orange cables**. An **inverter** converts the battery's DC into the AC that drives the motor, and a **DC-DC converter** replaces the alternator by charging the 12 V system from the big battery. Orange cables carry potentially lethal voltage. Never touch or cut them; only trained technicians should work on them.

> **Jump-starting safely:** Connect red (+) to the flat battery's positive, then red to the donor positive. Connect black (−) to the donor negative, then the last black clamp to bare metal on the dead car's engine block, away from the battery. Start the donor, wait a few minutes, then start the dead car. Remove in reverse order.
`,
      keyPoints: [
        'A healthy 12 V battery reads ~12.6 V off, 13.8–14.7 V running.',
        'The starter cranks the engine; the alternator recharges the battery.',
        'Fuses protect circuits; never fit a higher rating.',
        'OBD-II port + scan tool reads trouble codes like P0301.',
      ],
      quiz: [
        { q: 'What voltage should you see with the engine running?', o: ['About 9 V', 'About 12.0 V', 'About 13.8–14.7 V', 'About 24 V'], a: 2, e: 'This shows the alternator is charging the battery.' },
        { q: 'Rapid clicking but no cranking when you try to start usually means...', o: ['A flat or weak battery', 'Too much fuel', 'Worn brakes', 'A bad radiator'], a: 0, e: 'The solenoid clicks but there is not enough current to turn the starter.' },
        { q: 'What does the alternator do?', o: ['Starts the engine', 'Generates electricity while the engine runs', 'Cools the battery', 'Controls the airbags'], a: 1, e: 'It powers the car and recharges the 12 V battery.' },
        { q: 'What colour are high-voltage cables in hybrids and EVs?', o: ['Red', 'Blue', 'Orange', 'Green'], a: 2, e: 'Orange signals dangerous high voltage. Do not touch.' },
        { q: 'When jump-starting, where should the final black clamp go?', o: ['The dead battery\'s negative terminal', 'Bare metal on the dead car\'s engine block', 'The positive terminal', 'The tyre'], a: 1, e: 'This reduces sparks near the battery, which can vent explosive hydrogen.' },
      ],
    },
  ],
}
