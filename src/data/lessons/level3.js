import { pick } from '../images.js'

export default {
  id: 3,
  slug: 'engines',
  title: 'Engines Deep Dive',
  tag: 'Intermediate',
  icon: '🔥',
  description: 'Every engine layout from inline-3 to V12, boxers and rotaries, diesel and electric, forced induction, horsepower vs torque and the systems that feed an engine.',
  lessons: [
    {
      id: 'l3-1',
      title: 'Inline Engines: I3, I4 & I6',
      summary: 'The simplest layouts, from tiny three-cylinders to silky straight-sixes.',
      minutes: 7,
      image: pick('engine', 0),
      content: `
The **cylinder layout** describes how cylinders are arranged around the crankshaft. It affects size, cost, smoothness, sound and where the engine can fit. The simplest arrangement is the **inline** (or "straight") engine: all cylinders stand in a single row.

## Why balance matters

Pistons are heavy and change direction thousands of times a minute. This creates vibrations. **Primary forces** come from pistons accelerating up and down; **secondary forces** come from the fact that pistons move faster in the top half of their stroke than the bottom half, due to the angle of the connecting rod. There are also **rocking couples** when forces on one end of the engine are not mirrored at the other. Engineers fight these with clever crank designs, counterweights and **balance shafts** (extra shafts spinning with counterweights).

## Inline-3 (I3)

Three cylinders in a row, firing every 240° of crank rotation. They are compact, light and efficient because there is less internal friction and less surface area to lose heat. They have an inherent rocking imbalance, so they often use a balance shaft and clever engine mounts. Many have a characteristic thrummy, off-beat sound.

- **Size:** typically 0.8–1.6 L.
- **Found in:** Ford 1.0 EcoBoost (one of the most awarded engines ever), Toyota GR Yaris (1.6 L turbo making ~300 hp), BMW 1.5 L (Mini, BMW i8), VW 1.0 TSI.
- **Pros:** cheap, light, efficient, good low-down torque when turbocharged.
- **Cons:** some vibration, less refined at high rpm.

## Inline-4 (I4)

The most common engine in the world. Four cylinders fire every 180°, two pistons up and two down at any moment, so primary forces cancel. Secondary forces do not cancel, causing a buzz at high rpm, which is why larger four-cylinders (over about 2.0 L) often use twin balance shafts.

- **Size:** typically 1.2–2.5 L.
- **Found in:** Toyota Corolla, Honda Civic Type R (2.0 turbo, 320+ hp), VW Golf GTI (EA888 2.0 TSI), Mercedes-AMG A45 (the M139, 421 hp, the most powerful series-production four-cylinder).
- **Pros:** compact, cheap, efficient, easy to package transversely in FWD cars, great turbo tuning potential.
- **Cons:** less smooth than six-cylinders; a big turbo four can feel peaky.

## Inline-6 (I6, "straight-six")

Six cylinders in a row is the gold standard for smoothness: the front three and rear three mirror each other perfectly, so primary and secondary forces and rocking couples **all cancel**. No balance shafts needed. That results in a famously silky feel and a smooth, rising sound.

- **Size:** typically 2.5–3.5 L (up to 4.5 L+ in trucks).
- **Found in:** BMW (M3/M4 S58, B58 in the Toyota Supra), Toyota 2JZ (Supra Mk4, legendary for handling 1,000+ hp with forged internals), Nissan RB26 (Skyline GT-R), Mercedes M256, Mazda CX-60, Cummins diesel trucks, Jaguar's Ingenium.
- **Pros:** perfectly balanced, smooth, durable, simple (one cylinder head, one exhaust manifold), excellent for turbocharging.
- **Cons:** long, so hard to fit transversely; needs a long bonnet. Many makers abandoned it for V6s in the 1990s and 2000s, but it is making a comeback thanks to modular engine families (sharing cylinder size with 3- and 4-cylinder versions).

## Inline-5 and beyond

The **inline-5** (Audi's 2.5 TFSI in the RS 3, Volvo and Ford in the past) fires every 144°, giving a unique warbling sound that is famous from Audi's Group B rally cars. Inline-8s existed in 1930s luxury cars (Bugatti, Duesenberg) but were too long for modern cars.

> **Sound check:** An inline-4 sounds even and buzzy, an inline-5 warbles, and a straight-six sounds smooth and turbine-like as revs rise. Train your ears on videos and you will soon recognise engines by sound alone.

| Layout | Firing interval | Natural balance | Typical use |
|---|---|---|---|
| I3 | 240° | Rocking couple | Small cars, hot hatches |
| I4 | 180° | Secondary vibration | Most cars worldwide |
| I5 | 144° | Small rocking couple | Audi RS 3, old Volvos |
| I6 | 120° | Perfect | BMW, Supra, trucks |
`,
      keyPoints: [
        'Inline engines put all cylinders in one row.',
        'I4 is the world\'s most common; secondary vibration at high rpm.',
        'I6 is perfectly balanced: primary, secondary and rocking forces cancel.',
        'Balance shafts tame vibration in I3s and large I4s.',
      ],
      quiz: [
        { q: 'Which inline layout is naturally perfectly balanced?', o: ['Inline-3', 'Inline-4', 'Inline-5', 'Inline-6'], a: 3, e: 'The front and rear halves of an I6 mirror each other, cancelling all forces.' },
        { q: 'Which is the most common engine layout in the world?', o: ['V8', 'Inline-4', 'Boxer-4', 'Rotary'], a: 1, e: 'Cheap, compact and efficient, it powers most cars on the road.' },
        { q: 'What do balance shafts do?', o: ['Add power', 'Cancel engine vibrations', 'Drive the camshafts', 'Cool the oil'], a: 1, e: 'Counterweighted shafts offset forces the crank layout cannot.' },
        { q: 'Toyota\'s legendary 2JZ is what layout?', o: ['V6', 'Inline-6', 'Boxer-6', 'Inline-4'], a: 1, e: 'The 3.0 L 2JZ-GTE in the Supra Mk4 is famous for huge tuning potential.' },
        { q: 'What is the firing interval of an inline-4?', o: ['90°', '120°', '180°', '240°'], a: 2, e: '720° ÷ 4 cylinders = 180°.' },
      ],
    },
    {
      id: 'l3-2',
      title: 'V Engines: V6, V8, V10 & V12',
      summary: 'Two banks of cylinders, from practical V6s to screaming V12s.',
      minutes: 8,
      image: pick('super', 1),
      content: `
In a **V engine**, cylinders are split into two banks arranged in a V shape around a common crankshaft. This makes a much shorter engine than an inline with the same number of cylinders, which is why big engines are almost always Vs. The angle between the banks is called the **V angle**.

## V6

Six cylinders, two banks of three. Common V angles are **60°** (naturally smooth for a V6) and **90°** (often derived from a V8 design, needing a split-pin crankshaft or balance shaft). A V6 is short enough to fit transversely in front-wheel-drive cars, which is why it replaced the straight-six in many cars in the 1990s.

- **Size:** 2.5–4.0 L.
- **Found in:** Nissan GT-R (VR38DETT twin-turbo), Ford F-150 EcoBoost, Toyota Camry/Tacoma, Ferrari 296 GTB (120° V6 hybrid), Alfa Romeo Giulia Quadrifoglio, Formula 1 (1.6 L V6 turbo hybrid since 2014).
- **Pros:** compact, smooth enough, good power. **Cons:** two cylinder heads and more parts than an inline-4; less smooth than an I6.

## V8

Eight cylinders, almost always at **90°**. The V8 is the soul of American motoring and of many supercars. There are two very different crankshaft designs:

- **Cross-plane crank** – the crank throws are at 90° to each other (looking like a cross from the end). Very smooth, with the famous deep, burbling "rumble" because of uneven firing between the banks. Needs heavy counterweights, so it revs more slowly. *Found in:* Chevrolet small-block, Ford Coyote, Mercedes-AMG M177, BMW S63, Toyota/Lexus 2UR.
- **Flat-plane crank** – the throws are at 180°, like two four-cylinders sharing a crank. Lighter, revs faster and higher, with a high-pitched scream; but more vibration. *Found in:* Ferrari (F154 in the 488/F8 and SF90), McLaren M840T, Ford Mustang Shelby GT350 (Voodoo) and Chevrolet Corvette Z06 (5.5 L LT6, revving to 8,600 rpm).

Another split: **pushrod (OHV)** V8s, like GM's LS/LT, have one camshaft in the block and operate the valves via pushrods. They are compact, low and torquey. **Overhead cam (OHC/DOHC)** V8s put camshafts in each head for higher revs.

- **Size:** 4.0–7.0 L. **Pros:** big power and torque, great sound. **Cons:** heavy and thirsty.

## V10

Ten cylinders, often at 90° (with a split-pin crank) or 72°. V10s are rare and special, famous for a high, howling sound. They were used in Formula 1 from 1989 to 2005, when engines revved past 19,000 rpm.

- **Found in:** Lamborghini Huracán and Audi R8 (5.2 L, revving to 8,500 rpm), Lexus LFA (4.8 L, built with Yamaha, its needle moved so fast it needed a digital tachometer), Dodge Viper (8.0–8.4 L), BMW E60 M5 (S85), Porsche Carrera GT.

## V12

Twelve cylinders at **60°** is perfectly balanced, being essentially two inline-6s sharing a crank. It fires every 60°, so there is always a power stroke happening, making the V12 the smoothest piston engine of all with a spine-tingling, multi-layered wail.

- **Found in:** Ferrari 12Cilindri and 812, Lamborghini Revuelto, Aston Martin, Rolls-Royce (6.75 L twin-turbo), Pagani (AMG-built), Gordon Murray T.50 (Cosworth 3.9 L, revving to 12,100 rpm), and the legendary McLaren F1 (BMW S70/2).
- **Pros:** ultimate smoothness and prestige. **Cons:** huge, heavy, very thirsty, extremely expensive; increasingly rare under emissions laws.

## W and VR engines

Volkswagen created the **VR6**, a narrow 15° V6 with one cylinder head, and combined two VR banks into **W engines**: the W12 (Bentley, Audi A8) and the quad-turbo **W16** of the Bugatti Veyron and Chiron (8.0 L, 1,500–1,600 hp).

> **Why count cylinders?** More cylinders = smaller, lighter pistons that can rev higher, plus more frequent power pulses for smoothness. Fewer cylinders = less friction, cost and weight. Today turbochargers let small engines make big-engine power, so cylinder counts are shrinking.
`,
      keyPoints: [
        'V engines split cylinders into two banks: shorter than inline engines.',
        'Cross-plane V8 = rumble and smoothness; flat-plane V8 = high-revving scream.',
        'A 60° V12 is perfectly balanced, firing every 60°.',
        'Bugatti\'s W16 is two narrow-angle VR8 banks on one crank.',
      ],
      quiz: [
        { q: 'What gives American V8s their classic burbling rumble?', o: ['Flat-plane crank', 'Cross-plane crank with uneven bank firing', 'Turbochargers', 'Rotary pistons'], a: 1, e: 'Cross-plane cranks fire unevenly between banks, creating the burble.' },
        { q: 'Which crank type do Ferrari V8s typically use?', o: ['Cross-plane', 'Flat-plane', 'Split-pin rotary', 'None'], a: 1, e: 'Flat-plane cranks are lighter and rev higher, giving the high-pitched scream.' },
        { q: 'What does OHV/pushrod mean?', o: ['Cams in the cylinder heads', 'A single camshaft in the block operating valves via pushrods', 'No valves', 'Electric valves'], a: 1, e: 'GM\'s LS/LT V8s are famous pushrod engines.' },
        { q: 'What layout does the Bugatti Chiron use?', o: ['V12', 'W16', 'V16', 'Flat-12'], a: 1, e: 'An 8.0 L quad-turbo W16, essentially two VR8 banks.' },
        { q: 'Why is a 60° V12 so smooth?', o: ['It has a turbo', 'It is two perfectly balanced inline-6s and fires every 60°', 'It is electric', 'It runs on diesel'], a: 1, e: 'Overlapping power strokes and perfect balance make it the smoothest piston engine.' },
      ],
    },
    {
      id: 'l3-3',
      title: 'Boxer & Rotary Engines',
      summary: 'Subaru and Porsche\'s flat engines and Mazda\'s Wankel rotary.',
      minutes: 7,
      image: pick('jdm', 0),
      content: `
Not all engines are inline or V. Two of the most distinctive designs in car history are the **flat (boxer)** engine and the **Wankel rotary**.

## The boxer (flat) engine

In a **boxer** engine, cylinders lie horizontally in two opposed banks: effectively a V engine opened to 180°. In a true boxer, each pair of opposite pistons moves inward and outward at the same time, like boxers punching their gloves together, which is where the name comes from.

- **Balance:** opposed pistons cancel each other's primary forces. A flat-6 is perfectly balanced, like an inline-6. A flat-4 has a small rocking couple but is smoother than an inline-4.
- **Low centre of gravity:** the engine is very flat and can sit low in the chassis, improving handling.
- **Downsides:** it is wide (making it hard to fit large turbos and wide suspension), servicing can be awkward (spark plugs are tucked beside the chassis rails), and it has two cylinder heads.

**Where you find them:**

- **Subaru** – nearly every Subaru uses a flat-4 (FA, FB and the legendary EJ20/EJ25 in the Impreza WRX STI). Combined with symmetrical AWD, it is Subaru's identity. Older EJ25 engines were known for head gasket problems. The characteristic **"Subaru rumble"** comes from unequal-length exhaust headers, not the boxer layout itself.
- **Porsche** – the 911 has used a flat-6 since 1963, hung behind the rear axle. Current 911s use a 3.0 L twin-turbo flat-6, while the GT3 has a naturally aspirated 4.0 L flat-6 that revs to 9,000 rpm. The 718 Boxster/Cayman uses flat-4s and flat-6s.
- **Toyota GR86 / Subaru BRZ** – a 2.4 L Subaru flat-4 with Toyota injection technology.
- **History:** the original Volkswagen Beetle used an air-cooled flat-4, and the Ferrari Testarossa and 512 BB used a 180° flat-12.

## The Wankel rotary engine

Invented by German engineer Felix Wankel in the 1950s, the rotary engine has **no pistons, no valves and no connecting rods**. Instead, a triangular **rotor** with curved sides spins inside an oval-like housing shaped as an **epitrochoid**. As the rotor orbits, the three chambers between its faces and the housing grow and shrink, performing intake, compression, power and exhaust in different parts of the housing at the same time.

- Each rotor face completes a full cycle per rotor revolution, and the output (**eccentric**) shaft turns three times per rotor revolution, so there is a power pulse for every shaft rotation per rotor. That makes rotaries extremely smooth and able to rev very high.
- Air and fuel enter through **ports** in the housing; no valves are needed.

**Pros:** tiny and light for the power (the 1.3 L 13B weighs about 80–100 kg), very smooth, revs to 9,000+ rpm, few moving parts.

**Cons:** poor fuel economy and high emissions due to the long, thin combustion chamber; it burns oil by design (oil is injected to lubricate the **apex seals** at the rotor tips); apex seals can wear and need rebuilds; low torque at low rpm.

**Where you find them:** Mazda is the only manufacturer to have used rotaries successfully on a large scale: Cosmo (1967), RX-7 (1978–2002), RX-8 (2003–2012) and the 787B, which won the 1991 Le Mans 24 Hours, the only rotary-powered and (until 2018) only Japanese-brand winner. The 787B's four-rotor engine is one of the greatest-sounding race engines ever. In 2023 Mazda revived the rotary as a quiet **range extender** generator in the MX-30 R-EV, where it runs at steady speeds where it is most efficient.

> **Displacement debate:** A "1.3 L" 13B has two rotors of 654 cc each, but because each face fires once per rotor turn while the shaft turns three times, many racing bodies rated rotaries as roughly double their nominal displacement for fairness.
`,
      keyPoints: [
        'Boxer = horizontally opposed cylinders; low centre of gravity.',
        'Subaru (flat-4) and Porsche 911 (flat-6) are boxer icons.',
        'Wankel rotary: a triangular rotor, no pistons or valves.',
        'Mazda 787B won Le Mans 1991 with a four-rotor engine.',
      ],
      quiz: [
        { q: 'Why is the boxer engine called a "boxer"?', o: ['It is box-shaped', 'Opposed pistons move in and out together like boxers\' fists', 'It was invented by a boxer', 'It fits in a box'], a: 1, e: 'Opposite pistons punch outward and inward simultaneously.' },
        { q: 'Which brand uses a flat-4 in nearly every model?', o: ['Mazda', 'Subaru', 'BMW', 'Honda'], a: 1, e: 'Subaru pairs the flat-4 with symmetrical AWD.' },
        { q: 'What does a Wankel rotary engine lack?', o: ['A spark plug', 'Pistons and valves', 'An output shaft', 'Fuel'], a: 1, e: 'A triangular rotor and ports replace pistons and valves.' },
        { q: 'Which car won Le Mans in 1991 with a rotary engine?', o: ['Mazda 787B', 'Porsche 962', 'Jaguar XJR-9', 'Toyota TS050'], a: 0, e: 'The four-rotor 787B is the only rotary-powered Le Mans winner.' },
        { q: 'What are the main weaknesses of rotary engines?', o: ['Too heavy', 'Poor fuel economy, oil consumption and apex seal wear', 'They cannot rev high', 'Too many valves'], a: 1, e: 'The thin combustion chamber hurts efficiency, and apex seals wear.' },
      ],
    },
    {
      id: 'l3-4',
      title: 'Diesel Engines',
      summary: 'Compression ignition, torque, common-rail injection and modern clean diesels.',
      minutes: 7,
      image: pick('suv', 0),
      content: `
Rudolf Diesel patented his engine in 1892 with the goal of building something far more efficient than steam engines. More than a century later, diesels still power most of the world's trucks, ships, trains, tractors and generators, and millions of cars.

## Compression ignition

A diesel uses the same four strokes as a petrol engine, but with one key difference: **no spark plug**. On the intake stroke only air enters. The piston compresses that air with a ratio of around **15:1 to 20:1** (compared with ~10–14:1 for petrol). Compressing air heats it, just like a bicycle pump gets hot, and in a diesel the air reaches **500–700 °C**. At the right moment, fuel is injected at extremely high pressure and ignites instantly on contact with the hot air.

Because a diesel controls power by how much fuel it injects, rather than by restricting the air with a throttle like a petrol engine, it avoids "pumping losses". Combined with the high compression ratio and the higher energy content of diesel fuel, this makes diesels **20–30 percent more fuel efficient** than petrol engines of similar power. Peak thermal efficiency in large truck diesels exceeds 45 percent, and huge ship diesels reach over 50 percent.

## Why diesels make so much torque

Diesel engines usually have a **long stroke** (the piston travels far relative to its bore) and very high combustion pressures, and they are almost always **turbocharged**. This produces enormous **torque at low rpm**: a 3.0 L six-cylinder diesel can produce 600–700 Nm from just 1,500 rpm, more than many V8 petrol engines. The trade-off is a lower rev limit (typically 4,500–5,000 rpm), because diesel combustion is slower and parts are heavier. That is why diesels are perfect for towing, trucks and high-mileage cruising, but less exciting to rev.

## Glow plugs

Starting a cold diesel is hard because the cold engine block absorbs the heat of compression. **Glow plugs**, small electric heaters in each cylinder, preheat the combustion chamber. The coil-shaped warning light on the dashboard tells you to wait until it goes out before cranking (on modern cars this takes only a second or two).

## Common-rail injection

Old diesels were noisy, smoky and clattery. The revolution came in the late 1990s with **common-rail direct injection** (pioneered by Fiat and Bosch, first in the 1997 Alfa Romeo 156 JTD). A high-pressure pump keeps fuel in a shared "rail" at **1,600–2,700 bar**. Electronically controlled **piezo or solenoid injectors** can spray fuel several times per combustion event (a small **pilot injection** first to soften the knock, then the main injection, then post-injections for emissions). The result: much quieter, cleaner and more powerful engines.

## Emissions: the diesel problem

Diesels produce less CO₂ than petrol engines, but more **nitrogen oxides (NOx)** and **particulate matter (soot)**, which harm human lungs. Modern diesels therefore use:

- **EGR (Exhaust Gas Recirculation)** to lower combustion temperatures and NOx.
- **DPF (Diesel Particulate Filter)** to trap soot.
- **SCR with AdBlue** to convert NOx into nitrogen and water.

In 2015 the **Dieselgate** scandal revealed that Volkswagen had used "defeat device" software to cheat emissions tests, emitting up to 40 times the legal NOx limits on the road. It cost VW over $30 billion and accelerated the industry's move away from diesel cars, especially in Europe.

## Who should buy a diesel?

Diesels make sense if you drive more than about 20,000 km per year with lots of long trips, or if you tow heavy loads. For short urban journeys they are a poor choice: the DPF never gets hot enough to clean itself, and repairs to injectors, turbos, EGR valves and DPFs can be expensive.

> **Never** put petrol in a diesel. Petrol strips the lubrication diesel pumps rely on and can destroy the high-pressure pump and injectors. If you misfuel, do not start the engine; have the tank drained.
`,
      keyPoints: [
        'Diesels ignite fuel by compression heat (15–20:1).',
        '20–30% more efficient than petrol; huge low-rpm torque.',
        'Common-rail injection at 1,600–2,700 bar made diesels quiet and clean.',
        'Modern diesels need EGR, DPF and SCR/AdBlue to control emissions.',
      ],
      quiz: [
        { q: 'What do glow plugs do?', o: ['Ignite fuel every cycle', 'Preheat the combustion chamber for cold starts', 'Light the dashboard', 'Clean the DPF'], a: 1, e: 'They help the cold engine reach ignition temperature.' },
        { q: 'Why are diesels more efficient than petrol engines?', o: ['They are lighter', 'Higher compression, no throttle pumping losses and denser fuel', 'They have more cylinders', 'They use electricity'], a: 1, e: 'All three factors combine to give 20–30% better efficiency.' },
        { q: 'What pressure does a modern common-rail system run at?', o: ['5–10 bar', '50–100 bar', '1,600–2,700 bar', '10,000 bar'], a: 2, e: 'Extreme pressure atomises fuel into a very fine mist.' },
        { q: 'What did the Dieselgate scandal involve?', o: ['Fake fuel', 'Software that cheated emissions tests', 'Exploding engines', 'Price fixing tyres'], a: 1, e: 'VW\'s defeat devices made cars emit far more NOx on the road than in tests.' },
        { q: 'What should you do if you put petrol in a diesel car?', o: ['Drive it to burn it off', 'Do not start the engine; get the tank drained', 'Add oil', 'Add water'], a: 1, e: 'Running it can destroy the high-pressure fuel pump and injectors.' },
      ],
    },
    {
      id: 'l3-5',
      title: 'Hybrid Systems & Electric Motors',
      summary: 'Series, parallel and power-split hybrids, plus how EV motors make instant torque.',
      minutes: 8,
      image: pick('ev', 2),
      content: `
Electric motors are not new: the first electric cars appeared in the 1830s and around 1900 a third of US cars were electric. Cheap petrol and the electric starter motor killed them. A century later, batteries finally became good enough to bring them back.

## How an electric motor works

An electric motor uses the fact that a current-carrying conductor in a magnetic field feels a force. The **stator** (stationary outer part) holds copper windings. The **inverter** feeds them with three-phase alternating current, creating a **rotating magnetic field**. The **rotor** inside follows that field and spins. Changing the frequency of the AC changes the speed; changing the current changes the torque.

## Main motor types in EVs

- **Permanent magnet synchronous motor (PMSM)** – the rotor contains strong rare-earth (neodymium) magnets. Most efficient (up to ~97%) and power-dense. Used by most EVs (Tesla Model 3 rear motor, Hyundai, Kia, BYD). Downside: rare-earth materials are costly and mined mostly in China.
- **Induction (asynchronous) motor** – the rotor has no magnets; the stator's field induces currents in copper or aluminium bars in the rotor. Invented by Nikola Tesla. Robust and cheap, with no drag when unpowered, so Tesla uses them as secondary motors. Slightly less efficient.
- **Electrically excited synchronous motor (EESM)** – the rotor has windings fed with current instead of magnets. BMW (5th-gen eDrive) and Renault use these to avoid rare earths.
- **Axial flux motors** – disc-shaped, very compact and powerful; used by Koenigsegg, Ferrari and the Mercedes-AMG electric platform (via YASA).

## Instant torque

An electric motor produces **maximum torque from 0 rpm**. A combustion engine needs to build revs before it makes peak torque. That is why even a family EV feels quick off the line and why the Tesla Model S Plaid or Rimac Nevera can hit 100 km/h in about 2 seconds. Torque stays flat up to a "base speed", after which power stays roughly constant while torque falls. Motors spin up to 15,000–20,000+ rpm, so a single reduction gear is enough.

## Hybrid architectures

- **Parallel hybrid** – the engine and electric motor can both drive the wheels directly through the gearbox. Mild hybrids and many European plug-ins (VW, Mercedes, BMW) use this with the motor between engine and gearbox.
- **Series hybrid** – the engine never drives the wheels; it only runs a generator to make electricity for the motor. Essentially an EV with an onboard generator. Examples: Nissan e-Power, BMW i3 REx, Mazda MX-30 R-EV.
- **Series-parallel (power-split)** – Toyota's Hybrid Synergy Drive uses a **planetary gearset** to blend engine and two motor-generators (MG1 and MG2), acting like a CVT. It can run as series, parallel or pure EV. Over 20 million Toyota hybrids have been sold; they are famously reliable, with taxis covering 500,000+ km.
- **Honda e:HEV** – mostly series at low speed, with a clutch that locks the engine directly to the wheels at motorway cruising speed, where that is most efficient.

## Atkinson cycle engines

Hybrids usually pair their motors with an **Atkinson-cycle** petrol engine. By closing the intake valve late, the effective compression stroke is shorter than the expansion stroke. This extracts more work from the fuel (Toyota's 2.0 L hybrid engine reaches about 41% thermal efficiency) but makes less power at low rpm. That weakness does not matter because the electric motor fills in the low-end torque. It is a perfect partnership.

## Performance hybrids

Hybrid tech is not only for economy. The **Ferrari SF90 Stradale** (986 hp), **McLaren Artura**, **Porsche 918** and every Formula 1 car since 2014 use hybrid systems to fill turbo lag, boost acceleration, and harvest energy under braking. F1 hybrids also recover energy from exhaust heat with the **MGU-H** (until the 2026 rules removed it).

> **Battery lifespan:** Many people fear expensive hybrid battery replacements. In reality, most hybrid and EV batteries outlast expectations: typical warranties are 8 years / 160,000 km, and data shows many EV packs keep 85–90% capacity after 200,000 km.
`,
      keyPoints: [
        'Inverters create a rotating magnetic field that spins the rotor.',
        'PMSM motors use rare-earth magnets; induction motors have none.',
        'Electric motors make peak torque from 0 rpm.',
        'Toyota\'s power-split hybrid uses a planetary gearset and two motor-generators.',
      ],
      quiz: [
        { q: 'What converts the battery\'s DC into AC for the motor?', o: ['Alternator', 'Inverter', 'Rectifier', 'Transformer'], a: 1, e: 'The inverter generates variable-frequency three-phase AC.' },
        { q: 'Why do EVs feel so quick off the line?', o: ['They are light', 'Electric motors make maximum torque from 0 rpm', 'They have turbos', 'They have more gears'], a: 1, e: 'No need to build revs; full torque is instant.' },
        { q: 'In a series hybrid, the petrol engine...', o: ['Drives the wheels directly', 'Only powers a generator', 'Is not present', 'Charges the 12 V battery only'], a: 1, e: 'Nissan e-Power is a series hybrid: the wheels are always electric-driven.' },
        { q: 'Who invented the induction motor?', o: ['Elon Musk', 'Thomas Edison', 'Nikola Tesla', 'Karl Benz'], a: 2, e: 'Nikola Tesla patented the AC induction motor in 1888.' },
        { q: 'Why do hybrids use Atkinson-cycle engines?', o: ['More power', 'Higher efficiency; the motor covers the weak low-end torque', 'They are cheaper', 'They run on diesel'], a: 1, e: 'The motor and Atkinson engine complement each other perfectly.' },
      ],
    },
    {
      id: 'l3-6',
      title: 'Turbo vs Supercharger vs Naturally Aspirated',
      summary: 'Forced induction explained: boost, lag, intercoolers and wastegates.',
      minutes: 8,
      image: pick('jdm', 1),
      animation: 'turbo',
      content: `
An engine's power is limited by how much **air** it can burn fuel with. More air means you can add more fuel and make a bigger bang. A **naturally aspirated (NA)** engine relies on atmospheric pressure (about 1 bar) to push air into the cylinders. **Forced induction** uses a compressor to cram in more air than the atmosphere alone could. The extra pressure is called **boost**, measured in bar or psi above atmospheric pressure.

## Naturally aspirated

NA engines are simple, reliable, and offer instant, linear throttle response because there is nothing to spool up. Their power rises smoothly with rpm, and they often sound fantastic. To make big power without boost, an NA engine needs a large displacement or very high rpm, which is why the best NA engines rev to 8,000–9,000+ rpm (Porsche GT3, Ferrari 812, Lamborghini V12, Honda S2000). Emissions and economy rules have made them rare.

## Turbocharger

A turbo is an **exhaust-driven air pump**. It has two wheels on one shaft:

- The **turbine** sits in the exhaust flow. Hot exhaust gas, which would otherwise be wasted, spins it at up to **200,000–300,000 rpm**.
- The **compressor** on the other end of the shaft sucks in fresh air and compresses it, pushing it into the engine.

Typical road car boost is 0.8–1.5 bar, roughly doubling the air an engine gets and dramatically increasing power. A modern 2.0 L turbo four can make what a 3.5 L NA V6 used to.

**Key components:**

- **Intercooler** – compressing air heats it, and hot air is less dense. The intercooler (an air-to-air or air-to-water radiator) cools the charge air, making more power and reducing knock.
- **Wastegate** – a valve that lets exhaust bypass the turbine once target boost is reached, preventing over-boost.
- **Blow-off / diverter valve** – when you lift off the throttle suddenly, pressurised air has nowhere to go. This valve vents it, producing the famous "pssssh" sound, protecting the compressor.

**Turbo lag:** Because the turbine needs exhaust flow to spin up, there is a delay between pressing the throttle and full boost. Engineers fight lag with smaller turbos, **twin-scroll** housings (separating exhaust pulses), **variable geometry turbines (VGT)** (moving vanes, common on diesels), **twin-turbo** setups (sequential or parallel), and **electric turbos** that use a motor to spin the shaft instantly (Mercedes-AMG and F1-derived).

**Pros:** big power from small engines, uses waste energy, better fuel economy when cruising, power holds up at altitude. **Cons:** lag, heat, complexity, can fail if oil is neglected (the shaft spins on a thin oil film).

## Supercharger

A supercharger is a compressor driven **mechanically** by the crankshaft through a belt. There is no lag because it spins in proportion to engine speed; boost is available instantly.

- **Roots** – two meshing lobed rotors push air into the manifold. Classic sound: the "supercharger whine" heard on drag racers and the Dodge Hellcat.
- **Twin-screw** – similar but compresses internally, more efficient. Used by Ford's Shelby GT500 and many aftermarket kits.
- **Centrifugal** – looks like a belt-driven turbo compressor; boost rises with rpm. Common in aftermarket tuning (Vortech, ProCharger).

**Pros:** instant response, linear power, simple tuning. **Cons:** it takes power from the crankshaft to drive (a Hellcat's supercharger can consume 80–100 hp at full boost), so it is less efficient than a turbo.

## Twincharging

Some engines use both: a supercharger for low-rpm response and a turbo for top-end power. Famous examples: the Lancia Delta S4 rally car, VW's 1.4 TSI "Twincharger", and Volvo's T6/T8 Drive-E engines.

> **Turbo care:** After a hard drive, idle for 30–60 seconds before switching off so oil can cool the turbo bearings. Change oil on schedule with the correct specification, and avoid heavy throttle until the oil is warm.

| | NA | Turbo | Supercharger |
|---|---|---|---|
| Driven by | — | Exhaust gas | Crankshaft belt |
| Response | Instant | Lag | Instant |
| Efficiency | Good | Best | Lower |
| Sound | Pure intake/exhaust | Whoosh, "pssh" | Whine |
`,
      keyPoints: [
        'Forced induction crams more air in so more fuel can be burned.',
        'Turbos are exhaust-driven; superchargers are crank-driven.',
        'Intercoolers cool the charge air; wastegates limit boost.',
        'Turbo lag is fought with twin-scroll, VGT, twin-turbos and e-turbos.',
      ],
      quiz: [
        { q: 'What drives a turbocharger?', o: ['A belt from the crankshaft', 'Exhaust gas spinning a turbine', 'An electric motor only', 'The cooling fan'], a: 1, e: 'Turbos recycle energy from waste exhaust gas.' },
        { q: 'What does an intercooler do?', o: ['Cools the engine oil', 'Cools compressed intake air to make it denser', 'Cools the exhaust', 'Cools the cabin'], a: 1, e: 'Cooler air is denser, giving more power and less knock.' },
        { q: 'What is the purpose of a wastegate?', o: ['Collect waste oil', 'Let exhaust bypass the turbine to limit boost', 'Store fuel', 'Clean the air filter'], a: 1, e: 'It prevents the turbo from producing too much boost.' },
        { q: 'Why does a supercharger have no lag?', o: ['It is electric', 'It is mechanically driven by the crankshaft', 'It is smaller', 'It uses nitrous'], a: 1, e: 'Its speed is tied directly to engine rpm.' },
        { q: 'Why idle a turbo engine briefly after hard driving?', o: ['To charge the battery', 'To let oil cool the turbo bearings', 'To warm the catalytic converter', 'It is required by law'], a: 1, e: 'Shutting down hot can cook oil in the turbo and damage bearings.' },
      ],
    },
    {
      id: 'l3-7',
      title: 'Horsepower vs Torque',
      summary: 'The most misunderstood numbers in the car world, explained simply.',
      minutes: 7,
      image: pick('muscle', 1),
      content: `
Every spec sheet lists horsepower and torque, and car fans argue endlessly about which matters more. Here is the simple truth: **they are not rivals; they are two views of the same thing**.

## Torque: twisting force

**Torque** is a rotational force: how hard the engine twists its crankshaft. Imagine using a spanner to loosen a wheel nut. If you push with 100 newtons of force on the end of a spanner 0.5 metres long, you apply **50 Nm** (newton-metres) of torque. In the US, torque is measured in pound-feet (lb-ft); 1 lb-ft ≈ 1.36 Nm.

Torque is what you **feel**. When you press the accelerator and get pushed into the seat, that is torque (multiplied through the gearbox) accelerating the car. High torque at low rpm makes a car feel effortless, which is why diesels, turbo engines and EVs feel so strong in everyday driving.

## Power: how fast you do the work

**Power** is the *rate* of doing work: torque multiplied by how fast the engine is spinning. Twisting hard but slowly can be less powerful than twisting moderately but very fast. The formula:

- **Power (kW) = Torque (Nm) × rpm ÷ 9,549**
- **Horsepower (hp) = Torque (lb-ft) × rpm ÷ 5,252**

That last formula means torque and horsepower curves (in imperial units) always cross at **5,252 rpm**. Horsepower was coined by James Watt in the 1780s to compare steam engines with horses. 1 mechanical hp ≈ 0.746 kW; the European **PS** (metric horsepower) ≈ 0.735 kW, so a car rated 300 PS has about 296 hp.

## Why power determines acceleration and top speed

Your wheels need force (torque at the wheels) to accelerate. Gears multiply torque. So an engine that makes moderate torque at very high rpm can be geared down to put *more* torque at the wheels than an engine making high torque at low rpm. The quantity that survives the gearbox unchanged (minus losses) is **power**. At any given road speed, the car with more available power can deliver more force to the wheels. That is why:

- **Power decides acceleration and top speed.** A Formula 1 engine makes only around 400–500 Nm but revs to 15,000 rpm, producing 1,000 hp with the hybrid system.
- **Torque decides how the power is delivered.** A torquey engine pulls hard without needing high revs or downshifts; a peaky engine must be revved to make its power.

## A practical example

Compare a 2.0 L diesel making **400 Nm at 1,750 rpm** and **190 hp at 4,000 rpm** with a high-revving petrol making **250 Nm at 6,000 rpm** and **240 hp at 8,000 rpm**. The diesel feels stronger around town in a high gear. But driven flat-out through the gears, the petrol car is faster, because it makes more power.

## The torque curve

More important than the peak numbers is the **shape of the curve**. A "flat" torque curve, where peak torque is available over a wide band (modern turbo engines often make max torque from 1,500 to 4,500 rpm), gives strong, easy acceleration everywhere. The power curve then rises steadily with rpm. Engineers talk about the **power band**: the rpm range where the engine makes most of its power. You want to keep the engine in this band when driving fast, which is why racing drivers shift near the redline.

## Power-to-weight ratio

Raw power means little without considering weight. **Power-to-weight** (hp per tonne) is a much better predictor of performance:

- Family hatchback: ~100 hp/tonne
- Hot hatch: ~200–250 hp/tonne
- Porsche 911 GT3: ~350 hp/tonne
- Bugatti Chiron: ~760 hp/tonne
- F1 car: ~1,250 hp/tonne

> **Remember:** Torque is how hard you can push; power is how fast you can keep pushing. Torque gets you moving; power keeps you accelerating at speed.
`,
      keyPoints: [
        'Torque = twisting force (Nm); power = torque × rpm.',
        'hp = lb-ft × rpm ÷ 5,252; the curves cross at 5,252 rpm.',
        'Power determines acceleration and top speed; torque shapes delivery.',
        'Power-to-weight ratio predicts performance best.',
      ],
      quiz: [
        { q: 'Power is equal to...', o: ['Torque ÷ weight', 'Torque × rpm (with a constant)', 'Displacement × cylinders', 'Speed × gear'], a: 1, e: 'kW = Nm × rpm ÷ 9,549.' },
        { q: 'At what rpm do hp and lb-ft curves always cross?', o: ['1,000', '3,000', '5,252', '7,500'], a: 2, e: 'Because hp = lb-ft × rpm ÷ 5,252.' },
        { q: 'Which ultimately decides a car\'s acceleration through the gears?', o: ['Peak torque only', 'Power (and weight)', 'Number of cylinders', 'Tyre width only'], a: 1, e: 'Gearing multiplies torque, so the power available at the wheels is what counts.' },
        { q: 'What is 1 lb-ft in Nm?', o: ['About 0.5 Nm', 'About 1.36 Nm', 'About 10 Nm', 'About 0.74 Nm'], a: 1, e: '1 lb-ft ≈ 1.356 Nm.' },
        { q: 'What does a "flat torque curve" mean?', o: ['No torque', 'Peak torque available over a wide rpm range', 'Torque only at redline', 'Torque that drops instantly'], a: 1, e: 'Common in modern turbo engines; it makes cars feel strong everywhere.' },
      ],
    },
    {
      id: 'l3-8',
      title: 'Fuel Systems & Air Intake',
      summary: 'From the tank to the cylinder: pumps, injectors, throttles and filters.',
      minutes: 7,
      image: pick('engine', 1),
      content: `
An engine needs the right amount of fuel and air, mixed at the right moment, every single cycle. The **fuel system** and **air intake** make that happen, controlled by the engine ECU thousands of times per second.

## The air intake path

1. **Air filter** – a pleated paper (or cotton/foam) element that stops dust and grit. A single grain of sand can scratch cylinder walls. Replace every 20,000–40,000 km, or more often in dusty areas. A clogged filter reduces power and economy.
2. **MAF sensor** – the **mass airflow sensor** measures how much air enters (using a heated wire or film that cools as air flows past). Some engines instead use a **MAP sensor** (manifold absolute pressure) plus air temperature to calculate airflow.
3. **Throttle body** – a butterfly valve controlled by the accelerator pedal. On modern cars it is **drive-by-wire**: the pedal is a sensor and an electric motor opens the valve. This lets the ECU smooth out inputs and manage traction control.
4. **Intake manifold** – distributes air to each cylinder. Its runner length is tuned to use pressure waves that help push air into the cylinders; some engines have **variable-length** intake runners.

On turbocharged engines, the turbo compressor and intercooler sit between the filter and the throttle.

## The fuel delivery path

1. **Fuel tank** – usually plastic, mounted in front of the rear axle for crash safety, with vapour recovery (an **EVAP** system with a charcoal canister) to prevent fumes escaping. A loose fuel cap can trigger the check-engine light.
2. **Fuel pump** – an electric pump inside the tank, submerged in fuel which also cools it. It sends fuel forward at 3–6 bar. Running the tank very low repeatedly can overheat it.
3. **Fuel filter** – catches dirt and water. Some are lifetime; others need replacing every 30,000–60,000 km (diesel filters more often).
4. **Fuel rail and injectors** – injectors are precise electrically-controlled nozzles that open for a few milliseconds to spray atomised fuel.

## Port injection vs direct injection

- **Port fuel injection (PFI / MPI)** – injectors spray into the intake port, just behind the intake valve. Fuel mixes well with air and also washes the valves clean. Low pressure (3–5 bar), cheap and reliable.
- **Gasoline direct injection (GDI)** – injectors spray straight into the cylinder at 200–350 bar. The evaporating fuel cools the charge, allowing higher compression and better efficiency and power. The downside: no fuel washes the back of the intake valves, so oil vapour from the crankcase ventilation can bake into **carbon deposits**, sometimes requiring **walnut blasting** to clean.
- **Dual injection** – many engines (Toyota D-4S, VW EA888 evo4, Ford Coyote) use both, getting the advantages of each.

## Carburettors

Before the 1980s, cars used **carburettors**: a mechanical device that uses the venturi effect (air speeding up through a narrow throat creates low pressure that draws fuel from a bowl). Carbs are simple but cannot precisely control the mixture, so they were replaced by electronic injection to meet emissions laws. You will still find them on classic cars.

## Air-fuel ratio and mixture control

The ECU aims for the stoichiometric ratio (14.7:1 for petrol) at cruise, so the catalytic converter works best. Under full load it runs slightly **rich** (around 12.5–13:1) for maximum power and to cool the combustion chamber. A **lean** mixture (more air) is economical but can run hot and knock. The O₂ sensors feed back what is actually happening, and the ECU applies **fuel trims** to correct it.

## Fuel octane and types

**Octane rating** measures resistance to knock, not energy content. Regular petrol is 91–95 RON in Europe (87 AKI in the US), premium is 98+ RON (91–93 AKI). High-compression and turbo engines may require premium; using lower octane forces the ECU to retard ignition, reducing power. Putting premium in a car designed for regular gives no benefit. **E10** contains 10 percent ethanol; **E85** up to 85 percent, used by flex-fuel vehicles and tuners because ethanol resists knock extremely well.

> **Tip:** If your car hesitates, idles roughly or uses more fuel than usual, common culprits are a dirty air filter, a faulty MAF sensor, clogged injectors or an intake vacuum leak (listen for a hiss).
`,
      keyPoints: [
        'Air: filter → MAF → (turbo/intercooler) → throttle → manifold.',
        'Fuel: tank pump → filter → rail → injectors.',
        'Direct injection is efficient but can carbon up intake valves.',
        'Octane = knock resistance, not energy content.',
      ],
      quiz: [
        { q: 'What does the MAF sensor measure?', o: ['Fuel pressure', 'Mass of air entering the engine', 'Oil level', 'Exhaust temperature'], a: 1, e: 'The ECU uses airflow to calculate how much fuel to inject.' },
        { q: 'What is a known downside of direct injection?', o: ['Low power', 'Carbon build-up on intake valves', 'It needs a carburettor', 'It cannot be turbocharged'], a: 1, e: 'Without fuel washing the valves, deposits can form.' },
        { q: 'What does octane rating measure?', o: ['Energy content', 'Resistance to knock', 'Fuel colour', 'Ethanol content'], a: 1, e: 'Higher octane resists premature ignition.' },
        { q: 'Where is the fuel pump usually located?', o: ['On the engine', 'Inside the fuel tank', 'Behind the dashboard', 'In the exhaust'], a: 1, e: 'Submerging it in fuel cools and quietens it.' },
        { q: 'Why does an engine run slightly rich at full load?', o: ['To save fuel', 'For maximum power and to cool combustion', 'To clean the catalytic converter', 'To reduce noise'], a: 1, e: 'Extra fuel helps cool the chamber and avoid knock.' },
      ],
    },
    {
      id: 'l3-9',
      title: 'Oil, Lubrication & Spark Plugs',
      summary: 'Why oil is your engine\'s lifeblood and how ignition really works.',
      minutes: 7,
      image: pick('engine', 2),
      content: `
Inside a running engine, metal parts slide past each other at high speed under enormous loads. Without oil, an engine would seize in under a minute. Oil is truly the lifeblood of the engine, and spark plugs are its heartbeat.

## What engine oil does

- **Lubricates** – creates a thin film (a few microns thick) that keeps moving parts from touching. Crankshaft bearings actually float on a pressurised oil wedge (**hydrodynamic lubrication**).
- **Cools** – carries heat away from pistons, bearings and the turbo. Many engines spray oil under the pistons.
- **Cleans** – detergents hold soot and debris in suspension so the filter can catch them.
- **Seals** – helps piston rings seal against cylinder walls.
- **Protects** – additives prevent corrosion and neutralise acids from combustion.

## The oil system

The **oil pump** draws oil from the **sump** (oil pan) through a strainer and pushes it through the **oil filter** into galleries feeding the crankshaft, camshafts, turbo and valvetrain. It then drains back to the sump. Racing and high-performance cars use **dry-sump** systems, with a separate tank and multiple scavenge pumps, so oil does not slosh away from the pickup during high-g cornering, and so the engine can sit lower.

## Reading oil grades

Take **5W-30**:

- The first number with **W** (winter) describes cold viscosity: a lower number flows better when cold. Most engine wear happens at start-up, so this matters. 0W flows best.
- The second number is viscosity at operating temperature (100 °C). Higher = thicker.

Modern engines often use thin oils like **0W-20** or even **0W-16** for efficiency. Always use the grade and **specification** your manufacturer specifies (e.g. API SP, ACEA C3, VW 504.00, MB 229.71, BMW LL-04). Specifications matter as much as viscosity because they define additive packages compatible with particulate filters and turbos.

## Synthetic vs mineral

**Mineral oil** is refined crude oil. **Synthetic** oil is chemically engineered for uniform molecules, so it resists breakdown at high temperature, flows better when cold, and lasts longer. Almost all modern cars require full synthetic. **Semi-synthetic** is a blend.

## Oil change intervals

- Older or high-performance engines: 5,000–10,000 km.
- Modern cars on synthetic: 10,000–15,000 km, or up to 30,000 km with "long life" service regimes.
- At least **once a year** regardless of mileage, because oil degrades with time and short trips (condensation and fuel dilution).

**Check the level** monthly: park on level ground, engine off for a few minutes, pull the dipstick, wipe, reinsert, pull again. The level should be between MIN and MAX. Many new cars only have an electronic oil level sensor. Some engines naturally use up to 1 litre per 5,000 km. Black oil is normal in diesels; milky oil means coolant contamination; a fuel smell means dilution.

## Spark plugs: making the spark

A **spark plug** screws into the cylinder head with its tip in the combustion chamber. The **ignition coil** (one per cylinder on modern "coil-on-plug" systems) takes the 12 V supply and transforms it into **20,000–40,000+ volts**. This high voltage jumps the small **gap** (around 0.7–1.1 mm) between the plug's centre and ground electrodes, creating a spark that ignites the mixture.

The ECU controls **ignition timing**: how many degrees before TDC the spark fires. At higher rpm, the spark must fire earlier because the flame needs time to spread (spark **advance**). If knock sensors detect knocking, the ECU **retards** the timing to protect the engine.

## Spark plug types and life

- **Copper/nickel** – cheap, good conductivity, lasts 30,000–50,000 km. Popular for older and highly tuned engines.
- **Platinum** – 60,000–100,000 km.
- **Iridium** – fine, durable tips; 100,000–160,000 km. Standard in most new cars.

**Signs of worn plugs or coils:** rough idle, misfires (flashing check-engine light), hesitation, poor fuel economy, hard starting. A plug's appearance tells a story: light tan or grey is healthy; black and sooty means rich running; oily means oil getting into the cylinder; white or blistered means overheating.

> **Never ignore a flashing check-engine light.** It means an active misfire is sending unburnt fuel into the catalytic converter, which can overheat and destroy it in minutes. Reduce speed and get it checked.
`,
      keyPoints: [
        'Oil lubricates, cools, cleans, seals and protects.',
        '5W-30: lower first number = better cold flow; second = hot thickness.',
        'Change oil at least yearly; check level monthly.',
        'Ignition coils make 20,000–40,000+ V to jump the plug gap.',
      ],
      quiz: [
        { q: 'In 5W-30, what does "5W" describe?', o: ['Weight', 'Cold-temperature viscosity', 'Watts', 'Hot viscosity'], a: 1, e: 'Lower W numbers flow better at cold start, where most wear occurs.' },
        { q: 'What is a dry-sump oil system for?', o: ['Saving oil', 'Preventing oil starvation in high-g cornering and lowering the engine', 'Diesel engines only', 'Making engines quieter'], a: 1, e: 'Race and supercars use dry sumps for reliable oil supply.' },
        { q: 'Roughly what voltage does an ignition coil produce?', o: ['12 V', '240 V', '20,000–40,000+ V', '1,000,000 V'], a: 2, e: 'High voltage is needed to jump the spark plug gap under compression.' },
        { q: 'How long do iridium spark plugs typically last?', o: ['10,000 km', '30,000 km', '100,000–160,000 km', 'Forever'], a: 2, e: 'Iridium\'s hardness allows very fine, long-lasting tips.' },
        { q: 'A flashing check-engine light usually indicates...', o: ['Time for a service', 'An active misfire that can damage the catalytic converter', 'Low washer fluid', 'A loose fuel cap'], a: 1, e: 'Unburnt fuel overheats the catalyst. Get it checked immediately.' },
      ],
    },
  ],
}
