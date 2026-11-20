import { pick } from '../images.js'

export default {
  id: 1,
  slug: 'basics',
  title: 'Car Basics',
  tag: 'Zero',
  icon: '🔰',
  description: 'Start from absolute zero. What a car is, how it moves, what every part of the body is called, and the many kinds of cars on the road.',
  lessons: [
    {
      id: 'l1-1',
      title: 'What Is a Car?',
      summary: 'The big picture: the five systems every car shares and how they work together.',
      minutes: 6,
      image: pick('road', 0),
      content: `
A car is a machine that turns stored energy into controlled movement. That single sentence explains almost everything about every car ever built, from a 1908 Ford Model T to a 2026 electric hypercar. The energy might be stored as petrol, diesel, or electricity in a battery. The movement has to be **controlled**: a car that only goes forward at full speed would be useless, so most of the engineering in a car is actually about controlling energy rather than producing it.

## The five core systems

Every car, no matter how cheap or exotic, is built from the same five groups of systems. Learn these and you have a mental map you can hang every other fact on.

- **Powertrain** – makes and delivers the power. In a petrol car this is the engine, gearbox and the shafts that carry power to the wheels. In an electric car it is the battery, inverter and electric motor.
- **Chassis** – the skeleton. The frame or body structure, suspension, steering and brakes. It holds everything together and decides how the car rides and handles.
- **Body** – the outer skin and the cabin: doors, panels, glass, seats and bumpers. It protects occupants and shapes the air flowing around the car.
- **Electrical system** – the battery, alternator, wiring and dozens of computers called ECUs (electronic control units) that run everything from fuel injection to your windows.
- **Wheels and tyres** – the only part of the car that actually touches the road. Every bit of accelerating, braking and turning happens through four contact patches about the size of your hand.

## How it works in simple terms

Picture a normal petrol car pulling away from a traffic light. You press the accelerator. The engine computer lets more air and fuel into the engine. The fuel burns inside the cylinders, pushing pistons down. The pistons turn a crankshaft, a bit like your legs turning the pedals of a bicycle. That spinning motion goes through the **transmission** (gearbox), which multiplies the force so the car can start moving from rest, and then through driveshafts to the wheels. The tyres grip the road and push the car forward.

When you want to stop, the **brakes** convert all that movement energy into heat by squeezing pads against discs. When you turn the steering wheel, the **steering system** angles the front wheels. And the whole time, the **suspension** keeps the tyres pressed onto the road over bumps so they can keep doing their job.

> **Pro tip:** Mechanics diagnose problems by asking "which system is this?" first. A squeal when braking is a chassis problem, a car that will not start is usually electrical or fuel, and a shudder when accelerating is often powertrain. You will learn to think the same way.

## A very short history

Karl Benz patented the first practical petrol car, the Benz Patent-Motorwagen, in 1886. It had three wheels and under one horsepower. In 1908 Henry Ford launched the Model T and, from 1913, built it on a moving assembly line, which made cars affordable for ordinary families. Since then the basic layout has stayed surprisingly similar: an engine, a gearbox, four wheels, a steering wheel and pedals. What has changed enormously is safety (crumple zones, airbags, ABS), efficiency, and electronics. Today there are roughly 1.5 billion cars on Earth, and the industry is going through its biggest change in a century: the move to electric power.

## Why understanding cars matters

Knowing how a car works saves you money and keeps you safe. You will recognise warning signs before they become expensive failures, you will not be talked into unnecessary repairs, and you will buy smarter. And honestly? Cars become a lot more fun once you understand the brilliant engineering hidden under the paint.
`,
      keyPoints: [
        'A car converts stored energy into controlled movement.',
        'Five core systems: powertrain, chassis, body, electrical, wheels & tyres.',
        'The transmission multiplies engine force so the car can move from rest.',
        'Brakes turn motion into heat; suspension keeps tyres on the road.',
      ],
      quiz: [
        { q: 'Which system includes the engine and gearbox?', o: ['Chassis', 'Powertrain', 'Body', 'Electrical'], a: 1, e: 'The powertrain makes power (engine/motor) and delivers it (gearbox, shafts) to the wheels.' },
        { q: 'What do brakes convert the car\'s movement energy into?', o: ['Electricity only', 'Fuel', 'Heat', 'Air pressure'], a: 2, e: 'Friction brakes turn kinetic energy into heat. EVs can also recover some energy as electricity.' },
        { q: 'Who patented the first practical petrol car in 1886?', o: ['Henry Ford', 'Enzo Ferrari', 'Karl Benz', 'Ferdinand Porsche'], a: 2, e: 'Karl Benz patented the Benz Patent-Motorwagen in 1886.' },
        { q: 'What is an ECU?', o: ['A type of tyre', 'An electronic control unit (car computer)', 'An emergency clutch unit', 'A type of fuel'], a: 1, e: 'Modern cars have dozens of ECUs controlling engine, brakes, airbags, windows and more.' },
        { q: 'Which part of the car is the only part that touches the road?', o: ['The chassis', 'The suspension', 'The tyres', 'The bumpers'], a: 2, e: 'All acceleration, braking and cornering forces pass through four small tyre contact patches.' },
      ],
    },
    {
      id: 'l1-2',
      title: 'From Energy to Motion',
      summary: 'Follow the energy from the fuel tank (or battery) all the way to the tarmac.',
      minutes: 6,
      image: pick('engine', 0),
      animation: 'fourStroke',
      content: `
In the last lesson we said a car turns stored energy into movement. Now let us follow that energy step by step, because this path, often called the **energy chain**, is the backbone of everything you will learn about engines and drivetrains.

## Step 1: Stored energy

A litre of petrol holds about 9 kilowatt-hours (kWh) of chemical energy. That is a huge amount: roughly the same as a typical home uses in a day. Diesel holds slightly more, about 10 kWh per litre. A modern EV battery stores 50 to 100 kWh in total, which is why it weighs 300 to 700 kg. Liquid fuel is incredibly energy-dense, which is why it dominated for over a century.

## Step 2: Conversion to rotation

A petrol or diesel engine is an **internal combustion engine (ICE)**. Air and fuel are mixed inside sealed cylinders and burned. The burning gas expands violently and pushes a piston down. Connecting rods link each piston to a **crankshaft**, which converts the up-and-down motion into rotation, exactly like a cyclist's knees going up and down to turn the pedals.

Combustion engines are not very efficient. A typical petrol engine turns only about 25 to 35 percent of the fuel's energy into useful work; the rest leaves as heat through the exhaust and the radiator. The best modern hybrid engines reach around 40 percent, and Formula 1 power units exceed 50 percent.

An **electric motor** uses magnetism instead of fire. Electric current flowing through copper coils creates rotating magnetic fields that drag the rotor around. Electric motors are around 90 to 95 percent efficient, which is why an EV can travel far on relatively little energy.

## Step 3: Multiplying force

Engines produce useful power only within a range of speeds, typically 1,000 to 7,000 revolutions per minute (rpm). Wheels, on the other hand, need to turn anywhere from zero to about 1,500 rpm. The **transmission** sits in between and uses gears of different sizes to trade speed for force. First gear gives lots of force for pulling away; top gear lets the engine relax at motorway speeds. Electric motors work across such a wide rpm range that most EVs need only a single fixed gear.

## Step 4: Getting to the wheels

From the gearbox, power flows through a **differential** and **driveshafts** to the driven wheels. The differential is a clever set of gears that lets the left and right wheels spin at different speeds when you go around a corner (the outside wheel travels further). Which wheels receive power depends on the drivetrain: front-wheel drive, rear-wheel drive, or all-wheel drive. You will see those animated later in the course.

## Step 5: Grip

Finally, the tyre pushes backwards on the road, and the road pushes the car forwards (Newton's third law). How much force can be transmitted depends on grip, which depends on the tyre compound, the road surface, temperature, and how much weight is pressing down on the tyre.

> **Remember the chain:** Energy store → Engine/Motor → Transmission → Differential → Driveshafts → Wheels → Tyres → Road. If a car will not move, the fault is somewhere in this chain.

## Try it

Below is an animation of the four-stroke cycle, the process that happens thousands of times per minute inside every petrol engine. Don't worry about the details yet; just watch how burning fuel pushes the piston down and turns the crank.
`,
      keyPoints: [
        'Energy chain: store → engine/motor → transmission → differential → wheels → road.',
        'Petrol engines are ~25–35% efficient; electric motors ~90–95%.',
        'The crankshaft converts the pistons\' up-down motion into rotation.',
        'The differential lets left and right wheels turn at different speeds in corners.',
      ],
      quiz: [
        { q: 'What converts the pistons\' up-and-down motion into rotation?', o: ['Camshaft', 'Crankshaft', 'Driveshaft', 'Differential'], a: 1, e: 'Connecting rods link the pistons to the crankshaft, which rotates.' },
        { q: 'Roughly how efficient is a typical petrol engine?', o: ['5–10%', '25–35%', '60–70%', '90–95%'], a: 1, e: 'Most of the fuel energy is lost as heat. Electric motors are ~90–95% efficient.' },
        { q: 'Why does a car need a differential?', o: ['To cool the engine', 'To let wheels on the same axle turn at different speeds when cornering', 'To change gears', 'To store energy'], a: 1, e: 'In a turn, the outer wheel travels further than the inner one, so it must spin faster.' },
        { q: 'Why do most EVs need only one gear?', o: ['They are slow', 'Electric motors produce useful torque over a very wide rpm range', 'Gears are illegal in EVs', 'The battery does the gearing'], a: 1, e: 'Electric motors make strong torque from 0 rpm and spin to 15,000+ rpm.' },
        { q: 'Which law explains how a tyre pushing back on the road moves the car forward?', o: ['Ohm\'s law', 'Newton\'s third law', 'Boyle\'s law', 'Moore\'s law'], a: 1, e: 'Every action has an equal and opposite reaction: tyre pushes road back, road pushes car forward.' },
      ],
    },
    {
      id: 'l1-3',
      title: 'Exterior Anatomy',
      summary: 'Bonnet, boot, A-pillar, sill, wing... learn the names of every outside part.',
      minutes: 6,
      image: pick('sports', 0),
      animation: 'explorer',
      content: `
Walk around any car and you are looking at dozens of named parts. Knowing the correct names makes you sound like a pro at the garage, helps you describe damage to an insurer, and lets you understand car reviews. Note that British and American English often use different words; we will give both.

## The front

- **Bonnet (US: hood)** – the hinged panel covering the engine bay (or the front storage area, called a "frunk", on many EVs and rear-engined cars).
- **Grille** – the opening at the front that lets air reach the radiator. On EVs it is often closed because there is less heat to remove.
- **Headlights** – today usually LED or matrix LED, which can switch off individual segments to avoid dazzling oncoming drivers.
- **Bumper** – the front-most panel. Behind the plastic cover hides a metal or aluminium crash beam and foam that absorb low-speed impacts.
- **Front splitter / lip** – a flat extension at the bottom of the bumper on sporty cars that manages airflow and can create downforce.

## The sides

- **Wings (US: fenders)** – the panels around the front wheels. The rear equivalents are called **quarter panels**.
- **Pillars** – the vertical roof supports, lettered from front to back. The **A-pillar** frames the windscreen, the **B-pillar** sits between front and rear doors, the **C-pillar** frames the rear window, and wagons and SUVs also have a **D-pillar**. Pillars are crucial for rollover strength.
- **Sills (US: rocker panels)** – the structural beams running under the doors. Rust here is a serious problem on older cars because sills carry a lot of the body's strength.
- **Wheel arches** – the curved openings above each wheel. Flared arches signal a wide track, common on performance cars.
- **Wing mirrors** – side mirrors, increasingly replaced by cameras on some models.

## The back

- **Boot (US: trunk)** – the rear luggage compartment. On hatchbacks the whole rear door including the glass lifts up and is called a **tailgate** or hatch.
- **Tail lights** – include brake lights, indicators, reversing lights, and a rear fog light in Europe.
- **Rear diffuser** – a shaped underside at the back that speeds up airflow under the car, reducing lift.
- **Exhaust tips** – the visible ends of the exhaust. Many modern cars have fake tips moulded into the bumper; the real pipe hides behind.

## Glass and roof

The **windscreen (US: windshield)** is laminated glass: two sheets with a plastic layer between, so it cracks but does not shatter. Side and rear windows are usually **toughened (tempered) glass**, which breaks into small, blunt pieces. The roof may contain a **sunroof** (a sliding panel) or a **panoramic roof** (a large fixed or opening glass panel).

## Underneath

Crawl under a car and you will see the **subframes** that hold the engine and suspension, the **exhaust system** running to the back, the **fuel tank** (usually under the rear seats for crash safety), and in an EV, a huge flat **battery pack** forming the floor.

> **Garage vocabulary:** "Nearside" means the side nearest the kerb (passenger side in the UK, left side) and "offside" is the driver's side in the UK. In left-hand-drive countries the words flip. Mechanics use "front left / front right" to avoid confusion.

Use the interactive Car Explorer below: click any hotspot on the diagram to learn what each component does.
`,
      keyPoints: [
        'Bonnet = hood, boot = trunk, wing = fender (UK vs US).',
        'Pillars are named A, B, C, D from front to back.',
        'Sills/rocker panels are structural; rust there is serious.',
        'Windscreens are laminated; side windows are toughened glass.',
      ],
      quiz: [
        { q: 'Which pillar frames the windscreen?', o: ['A-pillar', 'B-pillar', 'C-pillar', 'D-pillar'], a: 0, e: 'Pillars are lettered front to back; the A-pillar is on either side of the windscreen.' },
        { q: 'What is the American word for "bonnet"?', o: ['Trunk', 'Hood', 'Fender', 'Rocker'], a: 1, e: 'Bonnet (UK) = hood (US). Boot = trunk, wing = fender.' },
        { q: 'Why does a windscreen crack instead of shattering?', o: ['It is made of plastic', 'It is laminated with a plastic layer between two glass sheets', 'It is toughened glass', 'It is extra thick'], a: 1, e: 'Laminated glass holds together when cracked, protecting occupants.' },
        { q: 'What does a rear diffuser do?', o: ['Diffuses exhaust smell', 'Speeds up airflow under the car to reduce lift', 'Cools the brakes', 'Holds the number plate'], a: 1, e: 'A diffuser expands the airflow leaving the underbody, lowering pressure and creating downforce.' },
        { q: 'Why is rust on the sills a serious problem?', o: ['It looks bad', 'Sills are structural and carry much of the body\'s strength', 'It affects the radio', 'It makes doors louder'], a: 1, e: 'Sills are key structural members, especially in side impacts. Rusty sills often mean an MOT/inspection failure.' },
      ],
    },
    {
      id: 'l1-4',
      title: 'Interior & Controls',
      summary: 'Pedals, gear selectors, the instrument cluster and every switch you need.',
      minutes: 6,
      image: pick('luxury', 0),
      content: `
The interior is where you interact with the car. Some controls are universal and have barely changed in 100 years; others, like touchscreens and driver-assistance buttons, are evolving fast. Let us walk through a typical modern cabin.

## The pedals

In an **automatic** car there are two pedals: the **accelerator** (right) and the **brake** (left of it). You operate both with your right foot only, so you can never press both at once by accident.

A **manual** car adds a third pedal on the far left: the **clutch**, operated with the left foot. Pressing the clutch disconnects the engine from the gearbox so you can change gear or stop without stalling. Remember them as "ABC" from right to left: Accelerator, Brake, Clutch.

## Gear selector

A manual car has a **gear lever** that moves in an H-pattern, usually five or six forward gears plus reverse. An automatic has a selector marked **P-R-N-D**:

- **P (Park)** – locks the transmission so the car cannot roll. Always use it with the handbrake when parked.
- **R (Reverse)** – backwards.
- **N (Neutral)** – no gear engaged; the wheels can roll freely.
- **D (Drive)** – the car chooses forward gears automatically. Many cars also offer **S (Sport)** or **M (Manual)** with paddles behind the steering wheel.

EVs keep the same letters even though they have no real gearbox; some add a **B** mode for strong regenerative braking.

## The instrument cluster

Directly behind the steering wheel you will find the **speedometer** (speed), the **tachometer** or rev counter (engine rpm, with a red line marking the maximum safe speed), a **fuel gauge**, and often a **coolant temperature gauge**. Most new cars use a fully digital display that can show maps, driver-assistance status, trip data and **warning lights**. Learning those warning lights is so important that Level 5 has a whole lesson on them.

## Steering wheel and stalks

The steering wheel contains the driver's **airbag** and usually buttons for audio, phone, and cruise control. Behind it are two **stalks**: one for indicators and headlights, the other for wipers. The **horn** is in the centre of the wheel.

## Centre console and dashboard

- **Infotainment screen** – navigation, media, phone mirroring (Apple CarPlay, Android Auto) and vehicle settings.
- **Climate controls** – temperature, fan, air distribution, A/C button, and the **demister** buttons for front and rear screens.
- **Handbrake / parking brake** – either a traditional lever or an electronic button marked with a P inside a circle.
- **Hazard lights** – the red triangle button that flashes all indicators.
- **Drive mode selector** – Eco, Comfort, Sport, sometimes Snow or Off-road; it changes throttle response, gearbox behaviour, steering weight and suspension stiffness.

## Seats and safety

Seats adjust forwards and backwards, for height and backrest angle. Correct driving position: you should reach the top of the wheel with a slight bend in your elbows, and fully press the pedals without straightening your leg. **Headrests** should be level with the top of your head, because they prevent whiplash in rear-end crashes. Seat belts include **pretensioners**, which tighten the belt instantly in a crash, and **load limiters**, which let it give slightly to protect your chest.

> **Safety fact:** Seat belts are the single most effective safety device ever fitted to cars; they roughly halve the risk of death for front-seat occupants in a crash. Airbags are designed to work *with* belts, not instead of them.
`,
      keyPoints: [
        'Pedals right to left: Accelerator, Brake, Clutch (manual only).',
        'P-R-N-D: Park, Reverse, Neutral, Drive.',
        'The tachometer shows engine rpm; the red line is the safe maximum.',
        'Headrests at the top of your head prevent whiplash.',
      ],
      quiz: [
        { q: 'Which pedal is only found in manual cars?', o: ['Accelerator', 'Brake', 'Clutch', 'Footrest'], a: 2, e: 'The clutch disconnects engine from gearbox to change gear; automatics do this themselves.' },
        { q: 'What does "P" on an automatic selector do?', o: ['Power mode', 'Locks the transmission to stop the car rolling', 'Puts the car in neutral', 'Pauses the engine'], a: 1, e: 'Park engages a locking pawl in the transmission. Always use the handbrake too.' },
        { q: 'What does the tachometer show?', o: ['Speed', 'Engine revolutions per minute', 'Fuel level', 'Oil pressure'], a: 1, e: 'The tachometer (rev counter) shows engine rpm; the red zone is the maximum safe engine speed.' },
        { q: 'Where should your headrest be?', o: ['At neck level', 'Level with the top of your head', 'Removed for comfort', 'As low as possible'], a: 1, e: 'A high headrest close to your head prevents whiplash in rear-end impacts.' },
        { q: 'What do seat belt pretensioners do?', o: ['Warm the belt', 'Tighten the belt instantly in a crash', 'Remind you to buckle up', 'Lock the doors'], a: 1, e: 'Pyrotechnic pretensioners pull the belt tight in milliseconds when a crash is detected.' },
      ],
    },
    {
      id: 'l1-5',
      title: 'Chassis & Body Structure',
      summary: 'Body-on-frame vs unibody, crumple zones and what keeps you alive in a crash.',
      minutes: 6,
      image: pick('suv', 0),
      content: `
The word **chassis** originally meant the car's frame plus all the running gear bolted to it: engine, suspension, steering and wheels. Today people often use it loosely to mean "the car's structure". How that structure is built affects weight, strength, safety, handling and even what a car is good at.

## Body-on-frame

The traditional method. A strong steel **ladder frame** (two long rails joined by cross-members, looking like a ladder) carries the engine and suspension, and a separate body is bolted on top. This is how almost every car was built until the 1950s, and it is still used for heavy-duty pickups and serious off-roaders such as the Toyota Land Cruiser 70, Toyota Hilux, Ford F-150 and Jeep Wrangler.

- **Pros:** very strong and tough, excellent for towing and heavy loads, the frame flexes on rough terrain, easy to repair and to build different bodies on the same frame.
- **Cons:** heavy, less rigid in twisting, so handling and ride are less precise, and the car sits higher.

## Unibody (monocoque)

Today about 99 percent of passenger cars use a **unibody**: the body panels, floor and roof are welded together into one shell that *is* the structure. It is like an eggshell, where the shape itself provides strength. The engine and suspension are often bolted to smaller **subframes** that attach to the shell.

- **Pros:** much lighter, stiffer and safer in crashes because energy can be managed across the whole structure. Better handling, fuel economy and space.
- **Cons:** less suitable for extreme loads and harder to repair after big crashes.

## Exotic structures

- **Space frame** – a cage of tubes with non-structural panels; used in race cars and early Lamborghinis and Audi R8s (in aluminium).
- **Carbon-fibre monocoque (tub)** – an extremely light and rigid passenger cell made of carbon fibre, used in McLarens, many Lamborghinis and almost all hypercars. A McLaren carbon tub weighs under 100 kg.
- **Skateboard platform** – used by EVs: a flat chassis with the battery in the floor and motors at the axles. The battery itself adds stiffness, and designers can place many different bodies on top.

## Rigidity: why stiffness matters

Engineers measure **torsional rigidity**: how much force it takes to twist the body by one degree. A stiff body lets the suspension do its job precisely, prevents squeaks and rattles, and improves safety. Convertibles lose the roof's stiffness, so they need extra bracing, which adds weight.

## Crash safety: crumple zones and the safety cell

Modern structures are designed with two contradictory goals. The **passenger cell** must be extremely strong so it does not deform into the occupants; it uses ultra-high-strength and boron steels in pillars, sills and roof rails. Meanwhile, the front and rear are **crumple zones**: they are *designed* to collapse in a controlled way, absorbing energy and slowing the occupants more gradually. Spreading a crash over a few extra milliseconds massively reduces the forces on your body.

> **Physics in one line:** Force = mass × deceleration. Crumple zones increase the stopping distance in a crash, which reduces deceleration and therefore the force on the people inside.

Crash test programmes such as **Euro NCAP**, **IIHS** (USA) and **ANCAP** (Australia) rate cars from one to five stars. Always check these ratings before buying.
`,
      keyPoints: [
        'Body-on-frame: tough and heavy, used by pickups and serious off-roaders.',
        'Unibody/monocoque: the body shell is the structure; used by ~99% of cars.',
        'Crumple zones collapse on purpose; the passenger cell stays rigid.',
        'EVs use skateboard platforms with the battery in the floor.',
      ],
      quiz: [
        { q: 'What kind of structure do most modern passenger cars use?', o: ['Ladder frame', 'Unibody (monocoque)', 'Space frame', 'Wooden frame'], a: 1, e: 'Almost all modern cars use a unibody where the welded shell is the structure.' },
        { q: 'Which vehicle is most likely to use body-on-frame construction?', o: ['Honda Civic', 'Toyota Land Cruiser 70', 'Tesla Model 3', 'Porsche 911'], a: 1, e: 'Heavy-duty off-roaders and pickups still favour separate ladder frames.' },
        { q: 'What is the purpose of a crumple zone?', o: ['To look sporty', 'To collapse in a controlled way and absorb crash energy', 'To reduce weight', 'To store luggage'], a: 1, e: 'By extending the stopping time, crumple zones reduce the forces on occupants.' },
        { q: 'What does torsional rigidity measure?', o: ['Engine strength', 'How resistant the body is to twisting', 'Tyre grip', 'Top speed'], a: 1, e: 'A stiffer body allows more precise suspension tuning and fewer rattles.' },
        { q: 'Which organisation crash-tests cars in Europe?', o: ['FIA', 'Euro NCAP', 'SAE', 'NASCAR'], a: 1, e: 'Euro NCAP rates new cars from 1 to 5 stars. IIHS does similar tests in the USA.' },
      ],
    },
    {
      id: 'l1-6',
      title: 'Car Types I: Everyday Cars',
      summary: 'Sedan, hatchback, wagon, SUV, crossover, minivan, van and pickup truck.',
      minutes: 7,
      image: pick('everyday', 0),
      content: `
Car shapes are not random; each body style exists to solve a particular problem. Here are the everyday types you will see on any street in the world.

## Sedan (UK: saloon)

A **three-box** design: one box for the engine, one for the passengers, and a separate boot. Four doors, a fixed roof and a sealed trunk. Sedans are quiet because the boot is separated from the cabin, and their lower roofline makes them stable and efficient. *Examples:* Toyota Camry, Honda Accord, BMW 3 Series, Mercedes-Benz E-Class. *Best for:* commuting, families who want comfort, long motorway trips.

## Hatchback

A **two-box** car: the rear window is part of a tailgate that lifts up, giving access to a load area joined to the cabin. Folding the rear seats creates a surprisingly big space. Hatchbacks are short, easy to park and cheap to run, which is why they dominate Europe. *Examples:* Volkswagen Golf, Toyota Yaris, Ford Fiesta, Honda Civic hatch. *Best for:* city driving, first cars, young families.

## Station wagon (UK: estate)

Basically a sedan with the roof extended over a long load area and a tailgate at the back. It keeps a car's low centre of gravity and handling but offers SUV-like luggage space. *Examples:* Volvo V90, Audi RS 6 Avant, Subaru Outback. *Best for:* dog owners, families with lots of gear, people who want space without an SUV's height.

## SUV (Sport Utility Vehicle)

Tall, boxy, high-riding vehicles. Traditional SUVs were built on truck frames with serious four-wheel drive; today most are unibody. They offer a high seating position, lots of space and, often, 7 seats. The downsides: more weight, worse aerodynamics and higher fuel use, and a higher centre of gravity. *Examples:* Toyota RAV4 (compact), Ford Explorer, Range Rover, BMW X5. SUVs became the best-selling body type worldwide in the late 2010s and now account for roughly half of global new-car sales.

## Crossover (CUV)

A crossover is an SUV-shaped car built on a regular car platform (unibody, usually front-wheel-drive based). The term is often used interchangeably with "SUV" today. Crossovers ride higher than hatchbacks and feel rugged, but drive like a car. *Examples:* Nissan Qashqai, Honda HR-V, Hyundai Kona, Tesla Model Y. *Best for:* buyers who want the high seating and style of an SUV without the size and cost.

## Minivan (MPV / people carrier)

Designed around passengers: tall roof, flat floor, sliding side doors and three rows of seats for 7 or 8 people. Not glamorous, but unbeatable for large families. *Examples:* Toyota Sienna, Honda Odyssey, Chrysler Pacifica, Kia Carnival.

## Van

A van puts cargo first. **Panel vans** have no rear side windows and are used by tradespeople and couriers; **passenger vans** carry up to 15 people. *Examples:* Ford Transit, Mercedes-Benz Sprinter, Volkswagen Transporter. Vans are also the base for most camper conversions.

## Pickup truck

A cab for passengers and an open **bed** at the back for cargo, usually body-on-frame. Pickups tow trailers, carry building materials, and in the USA are the best-selling vehicles: the Ford F-Series has been America's top-selling vehicle for over four decades. Configurations include **regular cab**, **extended cab** and **crew cab** (four full doors). *Examples:* Ford F-150, Toyota Hilux, Ram 1500, Chevrolet Silverado.

> **Buyer tip:** Do not buy a bigger body style "just in case". A hatchback or wagon will be cheaper to buy, insure, fuel and maintain than an SUV that is rarely filled. Rent a van for the two days a year you need one.

| Type | Seats | Typical new price (USD) |
|---|---|---|
| Hatchback | 5 | 18,000 – 35,000 |
| Sedan | 5 | 22,000 – 60,000 |
| Crossover | 5 | 24,000 – 45,000 |
| SUV | 5–8 | 30,000 – 120,000 |
| Minivan | 7–8 | 38,000 – 55,000 |
| Pickup | 2–6 | 30,000 – 90,000 |
`,
      keyPoints: [
        'Sedan = three-box; hatchback = two-box with a lifting tailgate.',
        'Crossovers are SUV-shaped cars built on car platforms.',
        'SUVs now make up around half of new-car sales worldwide.',
        'The Ford F-Series has been America\'s best-seller for over 40 years.',
      ],
      quiz: [
        { q: 'What makes a hatchback different from a sedan?', o: ['It has two doors', 'The rear window lifts with a tailgate into a load area joined to the cabin', 'It has no boot', 'It is always electric'], a: 1, e: 'Hatchbacks are two-box designs; sedans have a separate, sealed boot.' },
        { q: 'A crossover is best described as...', o: ['A truck with a car body', 'An SUV-styled vehicle built on a car platform', 'A convertible SUV', 'A minivan with 4WD'], a: 1, e: 'Crossovers use unibody car platforms but SUV styling and ride height.' },
        { q: 'What is a station wagon called in the UK?', o: ['Saloon', 'Estate', 'Shooting van', 'Tourer bus'], a: 1, e: 'Wagon (US) = estate (UK).' },
        { q: 'Which feature is typical of a minivan?', o: ['Open cargo bed', 'Sliding side doors and three rows of seats', 'Two seats only', 'Removable roof'], a: 1, e: 'Minivans/MPVs are designed for maximum passenger space and easy access.' },
        { q: 'Which has been America\'s best-selling vehicle for decades?', o: ['Toyota Camry', 'Honda Civic', 'Ford F-Series', 'Tesla Model Y'], a: 2, e: 'The Ford F-Series pickup has been the US best-seller for over 40 years.' },
      ],
    },
    {
      id: 'l1-7',
      title: 'Car Types II: Performance & Style',
      summary: 'Coupe, convertible, muscle, sports, super and hypercars, luxury and classics.',
      minutes: 7,
      image: pick('super', 0),
      content: `
Some cars exist mainly to make you smile. This lesson covers the body styles and categories built around performance, design and prestige.

## Coupe

Traditionally a car with two doors and a fixed roof that slopes down at the back. Coupes are lower, lighter and stiffer than their sedan siblings, with tighter rear seats (a "2+2") or none at all. Marketing departments now also call some four-door cars "coupes" because of their sloping roofline (for example the Mercedes-Benz CLS). *Examples:* BMW 4 Series, Toyota GR86, Ford Mustang.

## Convertible (cabriolet)

A car with a roof that folds away. **Soft tops** are fabric, light and pack small; **hardtops** (retractable hard tops) fold metal or composite panels and are quieter and more secure. A **roadster** or **spider/spyder** is a two-seat convertible, usually sporty. A **targa** has a removable centre roof panel but keeps a fixed roll bar. Convertibles need extra structural bracing, so they weigh more than coupes. *Examples:* Mazda MX-5, Porsche 911 Cabriolet, BMW Z4.

## Muscle car

An American invention of the 1960s: a mid-size, rear-wheel-drive car with the biggest V8 engine possible, built to be fast in a straight line and cheap to buy. The 1964 Pontiac GTO is often credited as the first. Classic muscle cars were all about torque and drama rather than cornering. Modern descendants such as the Dodge Challenger, Chevrolet Camaro and Ford Mustang (strictly a "pony car") keep the formula alive.

## Sports car

A sports car is built for driving pleasure: light, low, agile, usually two seats or 2+2, often rear-wheel drive. Speed matters, but feel and balance matter more. *Examples:* Mazda MX-5, Porsche 718 Cayman, Toyota GR Supra, Alpine A110. Prices start around $30,000.

## Supercar

There is no official definition, but a supercar typically has 600+ horsepower, exotic styling, a mid- or front-mounted V8, V10 or V12, a 0–100 km/h time around 3 seconds and a price from roughly $200,000 to $500,000. *Examples:* Ferrari 296 GTB, Lamborghini Huracán, McLaren 750S.

## Hypercar

The very top of the pyramid: 1,000+ horsepower, top speeds above 350 km/h, advanced hybrid or electric powertrains, carbon-fibre construction, and prices from $1 million to well over $3 million. Production is often limited to a few hundred cars or fewer. The 2013 "holy trinity" of the McLaren P1, Porsche 918 Spyder and LaFerrari defined the modern hypercar. *Current examples:* Bugatti Chiron and Tourbillon, Koenigsegg Jesko, Rimac Nevera.

## Luxury car

Luxury cars prioritise comfort, refinement, technology, materials and prestige over raw performance. Expect leather, real wood, massaging seats, air suspension and near-silent cabins. *Examples:* Mercedes-Benz S-Class, BMW 7 Series, Lexus LS, and at the ultra-luxury end, Rolls-Royce and Bentley.

## Classic car

Generally a car more than 25 to 30 years old, valued for its history and design. Many countries offer special "historic" registration and insurance. Classics range from affordable (a Volkswagen Beetle or an early Mazda MX-5) to some of the most valuable objects on Earth: a 1955 Mercedes-Benz 300 SLR Uhlenhaut Coupé sold for about €135 million in 2022.

> **Spotter's guide:** The quickest way to tell a sports car from a supercar is the engine position and the price. Mid-engine, scissor or dihedral doors, a six-figure price and a crowd of people with phones? Supercar.

| Category | Typical HP | 0–100 km/h | Price (USD) |
|---|---|---|---|
| Sports car | 200 – 500 | 4 – 6.5 s | 30k – 150k |
| Muscle car | 300 – 800 | 3.5 – 5 s | 35k – 100k |
| Supercar | 600 – 900 | 2.7 – 3.3 s | 200k – 500k |
| Hypercar | 1,000 – 2,000 | 1.8 – 2.6 s | 1M – 4M |
`,
      keyPoints: [
        'Coupe = two-door fixed roof; roadster = two-seat convertible.',
        'Muscle cars: big American V8s focused on straight-line speed.',
        'Supercars ~600–900 hp; hypercars 1,000+ hp and $1M+.',
        'Classic cars are generally 25–30+ years old.',
      ],
      quiz: [
        { q: 'What is a roadster?', o: ['A four-door SUV', 'A two-seat convertible', 'A pickup with a long bed', 'A race-only car'], a: 1, e: 'Roadsters (spiders/spyders) are two-seat open-top sports cars like the Mazda MX-5.' },
        { q: 'Which car is often credited as the first muscle car?', o: ['1964 Pontiac GTO', '1990 Mazda MX-5', '1955 Mercedes 300SL', '1973 Porsche 911'], a: 0, e: 'The 1964 GTO dropped a big V8 into a mid-size car and started the muscle-car era.' },
        { q: 'Which three cars formed the 2013 hypercar "holy trinity"?', o: ['Bugatti Veyron, Pagani Zonda, Koenigsegg CCX', 'McLaren P1, Porsche 918 Spyder, LaFerrari', 'Ferrari F40, Porsche 959, Lamborghini Countach', 'Tesla Roadster, Rimac Nevera, Lotus Evija'], a: 1, e: 'All three were hybrid hypercars launched around 2013.' },
        { q: 'What is a targa top?', o: ['A fully folding fabric roof', 'A removable centre roof panel with a fixed roll bar', 'A glass sunroof', 'A roof with gull-wing doors'], a: 1, e: 'Named after the Porsche 911 Targa, which referenced the Targa Florio race.' },
        { q: 'Roughly how old must a car be to be considered a classic?', o: ['5 years', '10 years', '25–30 years', '100 years'], a: 2, e: 'Definitions vary by country, but 25–30 years is common.' },
      ],
    },
    {
      id: 'l1-8',
      title: 'Power Types: Petrol, Diesel, Hybrid, Electric & 4x4',
      summary: 'How powertrain choice changes cost, performance and how you use a car.',
      minutes: 7,
      image: pick('ev', 0),
      content: `
Besides body shape, the biggest way to categorise a car is **what powers it**. This choice affects purchase price, running costs, performance, range and even where you can drive.

## Petrol (gasoline)

The most common powertrain for over a century. Petrol engines use **spark plugs** to ignite a fuel-air mixture. They are relatively cheap to build, rev high, are smooth and quiet, and refuelling takes three minutes. Downsides: lower efficiency than diesel and higher CO₂ emissions per km than electric. *Best for:* most drivers who do mixed driving and want low purchase cost.

## Diesel

Diesel engines have no spark plugs; they compress air so hard (compression ratios of 15:1 to 20:1) that it becomes hot enough to ignite the fuel as it is injected. This makes them roughly 20 to 30 percent more fuel-efficient than equivalent petrol engines and gives them strong **torque** at low rpm, which is perfect for towing and heavy vehicles. Downsides: more expensive, heavier, and they emit more nitrogen oxides (NOx) and soot, so modern diesels need complex exhaust treatment (DPF filters and AdBlue/SCR systems). The 2015 "Dieselgate" scandal and city bans have reduced diesel car sales in Europe. *Best for:* high-mileage motorway drivers and towing.

## Hybrid

A hybrid combines a combustion engine with one or more electric motors and a battery.

- **Mild hybrid (MHEV)** – a small 48-volt motor-generator assists the engine and allows smoother stop-start. It cannot drive on electricity alone. Saves 5–10 percent fuel.
- **Full hybrid (HEV)** – a bigger battery and motor that can drive the car at low speeds on electricity alone. The battery charges itself through the engine and **regenerative braking**. The Toyota Prius (1997) pioneered this. Saves 20–40 percent fuel in city driving.
- **Plug-in hybrid (PHEV)** – a much larger battery (10–25 kWh) you charge from the mains, giving 40–100 km of pure electric driving before the engine takes over. Excellent if you charge daily; inefficient if you never plug in.

## Electric (BEV)

A battery electric vehicle has no combustion engine at all. A large lithium-ion battery powers one or more electric motors. Benefits: instant torque and quick acceleration, near-silent operation, no tailpipe emissions, very low running and maintenance costs (no oil changes, few moving parts, brakes last much longer thanks to regen). Downsides: higher purchase price (though falling quickly), longer "refuelling" (20–40 minutes at a fast charger, overnight at home), range anxiety in cold weather, and heavy batteries. Range is typically 300 to 600 km. *Best for:* drivers with home charging.

## Hydrogen fuel cell (FCEV)

A fuel cell combines hydrogen with oxygen from the air to make electricity, emitting only water. The Toyota Mirai and Hyundai Nexo are examples. Refuelling takes five minutes, but hydrogen stations are rare and the fuel is expensive.

## Off-road / 4x4

A 4x4 is not a fuel type but a capability. True off-roaders combine **four-wheel drive** with a **low-range gearbox** (extra-low gears for crawling), **locking differentials**, high ground clearance, good approach and departure angles, and tough construction. *Examples:* Jeep Wrangler, Land Rover Defender, Toyota Land Cruiser, Mercedes-Benz G-Class, Suzuki Jimny. Many "SUVs" look capable but have only basic all-wheel drive; we will learn the difference in Level 2.

> **Quick decision guide:** Short trips and home charging → EV. Long motorway miles, no charging → efficient petrol hybrid or diesel. Mostly city with no charging → full hybrid. Daily commute under 50 km with home charging, plus occasional long trips → plug-in hybrid.
`,
      keyPoints: [
        'Diesels ignite fuel by compression; ~20–30% more efficient than petrol.',
        'Hybrids: mild (assist only), full (self-charging), plug-in (charge from mains).',
        'EVs: instant torque, cheap to run, but rely on charging access.',
        'True 4x4s add low-range gearing and locking differentials.',
      ],
      quiz: [
        { q: 'How does a diesel engine ignite its fuel?', o: ['Spark plugs', 'Heat from highly compressed air', 'Glow from the exhaust', 'An electric arc'], a: 1, e: 'Compression ratios of 15–20:1 heat the air enough to ignite injected diesel.' },
        { q: 'Which hybrid type can be plugged into the mains to charge?', o: ['Mild hybrid', 'Full hybrid', 'Plug-in hybrid', 'All of them'], a: 2, e: 'PHEVs have larger batteries charged from the grid, giving 40–100 km of EV range.' },
        { q: 'What is regenerative braking?', o: ['Brakes that repair themselves', 'Using the motor as a generator to recover energy while slowing', 'Braking with the handbrake', 'A type of ABS'], a: 1, e: 'Hybrids and EVs turn kinetic energy back into electricity when slowing down.' },
        { q: 'Which car pioneered the mass-market full hybrid in 1997?', o: ['Honda Civic', 'Toyota Prius', 'Tesla Roadster', 'Nissan Leaf'], a: 1, e: 'The Toyota Prius launched in Japan in 1997.' },
        { q: 'What makes a true off-road 4x4 different from a typical crossover with AWD?', o: ['Bigger screens', 'Low-range gearing, locking differentials and high ground clearance', 'More seats', 'Leather interior'], a: 1, e: 'Real off-roaders are engineered for crawling and articulation, not just slippery roads.' },
      ],
    },
  ],
}
