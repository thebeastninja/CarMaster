import { pick } from '../images.js'

export default {
  id: 4,
  slug: 'world',
  title: 'Car Types of the World',
  tag: 'Advanced',
  icon: '🌍',
  description: 'A world tour of car cultures: Japanese JDM, German engineering, American muscle, Italian exotics, British luxury, French flair, Korean value and Chinese EVs.',
  lessons: [
    {
      id: 'l4-1',
      title: 'Japan: JDM Legends',
      summary: 'Reliability, rotaries, tuner culture and the cars that defined a generation.',
      minutes: 8,
      image: pick('jdm', 0),
      content: `
**JDM** stands for **Japanese Domestic Market**: strictly, cars built for sale in Japan. Among enthusiasts it has come to mean the whole culture of Japanese performance cars, particularly those from the 1990s golden era.

## History

After World War II, Japan's car industry rebuilt with small, efficient cars. Toyota developed the **Toyota Production System** ("lean manufacturing", "kaizen" continuous improvement), which made Japanese cars famous for build quality and reliability. The 1970s oil crises made fuel-efficient Japanese cars hugely popular in the US and Europe.

In 1989, a remarkable year, Japan launched the Nissan Skyline GT-R (R32), the Mazda MX-5, the Lexus LS 400 and the Honda NSX followed in 1990. Through the 1990s a "gentlemen's agreement" among Japanese makers capped advertised power at **280 PS**, but many cars made far more. Rally (Subaru Impreza and Mitsubishi Lancer Evolution), Japanese touring cars and the arrival of **drifting** from mountain passes (touge) fuelled a global tuning culture, amplified by Gran Turismo games and the Fast & Furious films. Since US import rules allow cars older than 25 years, 1990s JDM icons have become collector's items with soaring prices.

## What defines Japanese cars

- Exceptional **reliability** and low running costs (Toyota and Lexus top almost every reliability survey).
- Clever engineering: VTEC, rotary engines, hybrid systems, high-revving NA engines.
- Strong engines with huge tuning potential (2JZ, RB26, SR20, 4G63, EJ20).
- Excellent value; conservative interiors in mainstream models.

## Famous JDM cars

- **Toyota Supra (A80, 1993–2002)** – 2JZ-GTE twin-turbo inline-6; tuners extract 1,000+ hp.
- **Nissan Skyline GT-R R32/R33/R34** – RB26DETT and ATTESA AWD; nicknamed "Godzilla" after dominating Australian touring cars.
- **Nissan GT-R R35 (2007–2025)** – 3.8 L twin-turbo V6; supercar performance for half the price.
- **Honda NSX (1990)** – aluminium mid-engine car developed with input from Ayrton Senna; proved supercars could be reliable.
- **Mazda RX-7 FD** – twin-turbo rotary, gorgeous design.
- **Mazda MX-5 Miata** – the best-selling two-seat sports car of all time, with over 1.2 million built.
- **Subaru Impreza WRX STI & Mitsubishi Lancer Evolution** – rally-bred AWD turbo rivals.
- **Toyota AE86 Corolla** – lightweight RWD hero of drifting and the Initial D manga.
- **Honda Civic Type R** – benchmark hot hatch.
- **Lexus LFA** – V10 masterpiece.
- **Toyota Land Cruiser** – the world's most trusted off-roader.

## Kei cars

A uniquely Japanese category: **kei cars** must be under 3.4 m long and 1.48 m wide with engines up to 660 cc. They get tax and parking advantages and make up about a third of Japanese sales. Examples: Honda N-Box, Suzuki Jimny (Japanese-market version), and the Honda S660 sports car.

## Pros and cons

- **Pros:** reliability, affordability, efficiency, tuning potential, strong resale values.
- **Cons:** some mainstream models feel conservative inside; Japanese brands were slow to adopt full EVs, preferring hybrids.

## Best for and price range

Best for buyers who want a car that just works, high-mileage drivers, and tuners.

| Segment | Example | New price (USD) |
|---|---|---|
| Kei / city | Suzuki Swift | 15k – 22k |
| Family | Toyota Corolla / RAV4 | 23k – 40k |
| Sports | Toyota GR86 / Mazda MX-5 | 30k – 40k |
| Performance | Civic Type R / GR Supra | 45k – 65k |
| Luxury | Lexus LS / LX | 80k – 110k |
`,
      keyPoints: [
        'JDM = Japanese Domestic Market; now a whole tuning culture.',
        '1990s "280 PS gentlemen\'s agreement" capped advertised power.',
        'Icons: Supra, Skyline GT-R, NSX, RX-7, MX-5, WRX STI, Evo.',
        'Kei cars: ≤3.4 m long, ≤660 cc, uniquely Japanese.',
      ],
      quiz: [
        { q: 'What does JDM stand for?', o: ['Japanese Drift Machine', 'Japanese Domestic Market', 'Joint Design Model', 'Japan Direct Motors'], a: 1, e: 'Strictly cars made for sale in Japan.' },
        { q: 'What was the 1990s Japanese advertised power cap?', o: ['200 PS', '280 PS', '400 PS', '500 PS'], a: 1, e: 'Many cars actually made more than 280 PS.' },
        { q: 'Which car is the best-selling two-seat sports car of all time?', o: ['Porsche 911', 'Mazda MX-5', 'Toyota Supra', 'Nissan 350Z'], a: 1, e: 'Over 1.2 million MX-5s have been built.' },
        { q: 'What is the engine size limit for a kei car?', o: ['660 cc', '1,000 cc', '1,300 cc', '2,000 cc'], a: 0, e: 'Kei cars get tax and parking benefits in Japan.' },
        { q: 'Which famous racing driver contributed to the original Honda NSX?', o: ['Michael Schumacher', 'Ayrton Senna', 'Lewis Hamilton', 'Niki Lauda'], a: 1, e: 'Senna\'s feedback helped stiffen the chassis.' },
      ],
    },
    {
      id: 'l4-2',
      title: 'Germany: Engineering & the Autobahn',
      summary: 'Mercedes, BMW, Audi, Porsche and VW: precision, performance and prestige.',
      minutes: 8,
      image: pick('german', 0),
      content: `
Germany invented the car (Benz, 1886; Daimler and Maybach's high-speed engine, 1885) and remains one of the most important car-making nations. German cars are synonymous with **engineering, high-speed stability and premium quality**.

## History

Karl Benz and Gottlieb Daimler's companies merged in 1926 to form **Daimler-Benz** (Mercedes-Benz). The **Volkswagen** ("people's car") Beetle, designed by Ferdinand Porsche in the 1930s, became the best-selling car of the 20th century with over 21 million built. After the war, BMW moved from aircraft engines and motorcycles into cars; Audi rose from the Auto Union alliance (whose four rings represent Audi, DKW, Horch and Wanderer). Porsche began building sports cars in 1948 and launched the 911 in 1963.

The **Autobahn**, with sections that still have no general speed limit, shaped German cars: they must be stable, comfortable and cool at 200+ km/h for hours. In 1987 the big German makers agreed to electronically limit most cars to **250 km/h**.

## The major brands

- **Mercedes-Benz** – luxury, comfort and safety innovation. Pioneered crumple zones (1959), ABS in production (1978, S-Class) and many airbag firsts. The **S-Class** is the benchmark luxury sedan. **AMG** is its performance division ("one man, one engine": each hand-built AMG engine carries its builder's signature).
- **BMW** – "The Ultimate Driving Machine". Known for rear-wheel-drive balance, straight-six engines and driver focus. The **3 Series** is the definitive sports sedan; the **M** division makes the M3, M4 and M5.
- **Audi** – technology and **quattro** all-wheel drive, which transformed rallying in the early 1980s. Known for beautiful interiors and LED lighting. **Audi Sport** builds RS models and the R8. Audi has won Le Mans 13 times.
- **Porsche** – the 911 is the longest-running sports car icon, with its rear-mounted flat-six. Porsche has won Le Mans a record 19 times. Today the Cayenne and Macan SUVs earn most of its money, and the Taycan proved EVs can be thrilling.
- **Volkswagen** – the world's second-largest car group (owning VW, Audi, Porsche, Lamborghini, Bentley, Bugatti-partner, Skoda, SEAT/Cupra, Ducati and more). The **Golf** has sold over 37 million and the **GTI** (1976) created the hot-hatch category.

## What defines German cars

- Solid build quality, high-speed refinement, advanced technology.
- Strong performance divisions (AMG, M, RS, Porsche GT).
- Premium pricing, with expensive options lists.
- More complex engineering, so out-of-warranty repairs can be costly.

## Famous German cars

Mercedes-Benz 300 SL "Gullwing" (1954), Porsche 911 (all generations), BMW M3 E30, Audi Quattro (1980), VW Golf GTI, Mercedes-Benz G-Class, BMW M5, Porsche 959, Mercedes-AMG GT, Porsche Taycan, Audi RS 6 Avant.

## Pros and cons

- **Pros:** driving dynamics, high-speed comfort, safety, interiors, prestige, cutting-edge tech.
- **Cons:** higher purchase and maintenance costs; complexity means used examples out of warranty can be risky; heavy option pricing.

## Best for and price range

Best for drivers who cover long motorway distances, want premium feel and dynamic handling, and can afford maintenance.

| Segment | Example | New price (USD) |
|---|---|---|
| Compact | VW Golf | 25k – 35k |
| Premium compact | BMW 3 Series / Audi A4 | 45k – 60k |
| Executive | Mercedes E-Class / BMW 5 Series | 60k – 85k |
| Luxury | Mercedes S-Class / BMW 7 Series | 115k – 180k |
| Performance | BMW M3 / Porsche 911 | 80k – 250k |

> **Buying used German?** Get a full service history, budget for maintenance (typically 1.5–2× a Japanese equivalent), and consider an extended warranty on complex models with air suspension or many electronics.
`,
      keyPoints: [
        'Germany invented the car; VW Beetle sold 21+ million.',
        'Autobahn culture created stable high-speed cars; 250 km/h agreement (1987).',
        'Mercedes = luxury/safety; BMW = driving; Audi = quattro/tech; Porsche = 911.',
        'Great to drive, but maintenance costs are higher.',
      ],
      quiz: [
        { q: 'What top speed do most German makers electronically limit cars to?', o: ['200 km/h', '250 km/h', '300 km/h', '180 km/h'], a: 1, e: 'A voluntary agreement from 1987.' },
        { q: 'Which brand\'s all-wheel-drive system is called quattro?', o: ['BMW', 'Mercedes', 'Audi', 'Porsche'], a: 2, e: 'The 1980 Audi Quattro revolutionised rallying.' },
        { q: 'What do Audi\'s four rings represent?', o: ['Four founders', 'Four merged companies (Audi, DKW, Horch, Wanderer)', 'Four wheels', 'Four Olympic wins'], a: 1, e: 'They formed Auto Union in 1932.' },
        { q: 'Which car created the hot-hatch category in 1976?', o: ['BMW M3', 'VW Golf GTI', 'Audi Quattro', 'Porsche 924'], a: 1, e: 'The Golf GTI combined practicality with performance.' },
        { q: 'How many times has Porsche won Le Mans?', o: ['5', '9', '13', '19'], a: 3, e: 'Porsche holds the record with 19 overall wins.' },
      ],
    },
    {
      id: 'l4-3',
      title: 'USA: American Muscle & Trucks',
      summary: 'V8s, pony cars, Corvettes, pickups and the EV revolution.',
      minutes: 8,
      image: pick('muscle', 0),
      content: `
America put the world on wheels. Ford's moving assembly line made cars affordable, and endless highways, cheap fuel and big open spaces shaped a car culture built around **size, comfort, V8 power and freedom**.

## History

In 1908 Ford launched the **Model T**, and by 1927 over 15 million had been built. Detroit's "Big Three" (**General Motors, Ford and Chrysler**) dominated the 20th century. The 1950s brought tailfins, chrome and the first **Chevrolet Corvette** (1953). The 1960s were the muscle-car golden age, kicked off by the 1964 **Pontiac GTO**, and the **Ford Mustang** (1964) created the "pony car" class: compact, sporty and affordable. Rivals followed: Chevrolet Camaro, Dodge Charger and Challenger, Plymouth Barracuda and Road Runner.

The 1970s oil crises and emissions laws ended the first muscle-car era. The industry recovered in the 1990s with SUVs and trucks, and the 2000s saw a muscle revival with retro Mustangs, Camaros and Challengers, culminating in 700–1,000 hp monsters such as the Dodge Challenger SRT Hellcat and Demon. Today, America also leads the EV transition through **Tesla**, plus Rivian, Lucid and the Big Three's own EVs.

## What defines American cars

- **Big displacement V8s**, often pushrod designs: torquey, simple, durable and cheap to make power with.
- Comfort-oriented suspension, big interiors, lots of cupholders.
- **Pickup trucks** as everyday vehicles (Ford F-Series, Chevy Silverado, Ram).
- Huge performance per dollar.
- A massive aftermarket for modification (drag racing, hot rods, restomods).

## Famous American cars

- **Ford Model T** – the car that motorised the world.
- **Chevrolet Corvette** – America's sports car since 1953; the C8 (2020) moved the engine to the middle.
- **Ford Mustang** – over 10 million sold; the original pony car.
- **Dodge Challenger SRT Demon 170** – 1,025 hp on E85, 0–60 mph in 1.66 s.
- **Ford GT40** – beat Ferrari at Le Mans in 1966 with a 1-2-3 finish (the "Ford v Ferrari" story).
- **Shelby Cobra** – Carroll Shelby's lightweight AC roadster with a Ford V8.
- **Jeep Wrangler** – descendant of the WWII Willys MB.
- **Ford F-150** – America's best-selling vehicle for 40+ years.
- **Tesla Model S** (2012) – proved EVs could be desirable, fast and long-range.
- **Cadillac Escalade** – the luxury SUV icon.

## Pros and cons

- **Pros:** cheap horsepower, comfortable highway cruisers, durable simple V8s, strong towing capacity, affordable parts and huge aftermarket.
- **Cons:** traditionally weaker interiors and handling (though modern Corvettes and Mustangs are excellent), big and thirsty, some models have mixed reliability, many are too large for European and Asian cities.

## Best for and price range

Best for: highway cruising, towing and hauling, drag racing and V8 fans, and buyers who want maximum performance per dollar.

| Segment | Example | New price (USD) |
|---|---|---|
| Pony car | Ford Mustang | 32k – 75k |
| Sports car | Chevrolet Corvette | 70k – 200k |
| Full-size pickup | Ford F-150 / Ram 1500 | 37k – 100k |
| Full-size SUV | Chevy Tahoe / Cadillac Escalade | 60k – 130k |
| EV | Tesla Model 3 / Model Y | 40k – 60k |

> **Muscle vs pony:** strictly, muscle cars are mid-size cars with big V8s (Charger, GTO, Chevelle SS), while pony cars are smaller, sportier coupes (Mustang, Camaro). Today everyone just says "muscle".
`,
      keyPoints: [
        'Ford\'s Model T and assembly line made cars affordable.',
        '1964 Pontiac GTO started muscle cars; Mustang started pony cars.',
        'Big pushrod V8s, pickups and huge performance per dollar.',
        'Tesla led the modern EV revolution.',
      ],
      quiz: [
        { q: 'Which car created the "pony car" class in 1964?', o: ['Chevrolet Camaro', 'Ford Mustang', 'Dodge Charger', 'Pontiac GTO'], a: 1, e: 'Compact, sporty and affordable, it sold a million in under two years.' },
        { q: 'Which car beat Ferrari at Le Mans in 1966?', o: ['Shelby Cobra', 'Ford GT40', 'Chevrolet Corvette', 'Dodge Viper'], a: 1, e: 'Ford finished 1-2-3.' },
        { q: 'Which generation of Corvette went mid-engine?', o: ['C5', 'C6', 'C7', 'C8'], a: 3, e: 'The C8 launched for 2020 with its V8 behind the driver.' },
        { q: 'Who are Detroit\'s "Big Three"?', o: ['Tesla, Ford, GM', 'GM, Ford, Chrysler', 'Ford, Jeep, Dodge', 'GM, Tesla, Rivian'], a: 1, e: 'Chrysler is now part of Stellantis.' },
        { q: 'The Jeep Wrangler descends from...', o: ['A WWII military vehicle (Willys MB)', 'A tractor', 'A Ford pickup', 'A race car'], a: 0, e: 'The Willys MB was the original military "jeep".' },
      ],
    },
    {
      id: 'l4-4',
      title: 'Italy: Supercars & Passion',
      summary: 'Ferrari, Lamborghini, Maserati, Alfa Romeo and Pagani: art on wheels.',
      minutes: 8,
      image: pick('super', 0),
      content: `
No country combines design, sound and emotion like Italy. Italian cars are rarely the most practical or reliable, but they are often the most beautiful and thrilling. Many of the world's greatest car designers, the **carrozzerie** such as Pininfarina, Bertone, Zagato and Italdesign, are Italian.

## History

**Fiat** (Fabbrica Italiana Automobili Torino) was founded in 1899 and motorised Italy with tiny cars like the 1957 Fiat 500. **Alfa Romeo** (1910) dominated early Grand Prix racing; a young Enzo Ferrari raced for and managed Alfa's team before founding **Ferrari** in 1939 (the first Ferrari-badged car arrived in 1947). Ferrari built road cars mainly to fund racing, and it remains the oldest and most successful team in Formula 1 history.

Legend has it that tractor maker **Ferruccio Lamborghini** complained to Enzo Ferrari about his Ferrari's clutch and was dismissed. He founded **Automobili Lamborghini** in 1963 to build a better grand tourer. In 1966 the **Lamborghini Miura** put a V12 behind the driver and essentially invented the modern supercar layout; the 1974 **Countach**, with its wedge shape and scissor doors, defined the supercar poster for a generation.

**Maserati** (1914) built racers and luxurious GTs. **Lancia** dominated rallying with the Stratos, 037 and Delta Integrale (six consecutive World Rally Championship manufacturers' titles, 1987–1992). And in the modern era, **Pagani** (founded by Horacio Pagani in 1992) builds hypercars that are as much art as engineering.

## What defines Italian cars

- Breathtaking design and attention to style.
- Engines that sing: high-revving V8s and V12s tuned for sound.
- Racing heritage: Ferrari, Alfa Romeo, Lancia, Maserati.
- Emotional rather than rational: these cars are about how they make you feel.
- Historically weaker reliability and electronics, though modern Ferraris and Lamborghinis (under Audi/VW ownership since 1998) are far better.

## Famous Italian cars

- **Ferrari 250 GTO (1962)** – only 36 built; one sold for $70 million in 2018 and another for $51.7 million at auction in 2023.
- **Ferrari F40 (1987)** – the last car Enzo approved; twin-turbo V8, no driver aids.
- **Ferrari LaFerrari, SF90 Stradale, F80** – hybrid hypercars.
- **Lamborghini Miura, Countach, Diablo, Aventador, Revuelto** – V12 flagships.
- **Lamborghini Huracán** – V10 best-seller.
- **Alfa Romeo Giulia Quadrifoglio** – Ferrari-derived twin-turbo V6 sports sedan.
- **Fiat 500** – icon of Italian city life, now electric.
- **Lancia Stratos and Delta Integrale** – rally legends.
- **Pagani Zonda and Huayra** – AMG V12-powered artworks.
- **Maserati MC20** – Nettuno V6 with F1-derived pre-chamber ignition.

## Pros and cons

- **Pros:** design, sound, character, racing pedigree, strong collector values for the right models.
- **Cons:** expensive maintenance (a Ferrari major service can cost $3,000–$10,000; older models need engine-out belt changes), historically patchy reliability, high depreciation on some Maseratis and Alfas, and impracticality.

## Best for and price range

Best for enthusiasts who value emotion, design and sound, collectors, and anyone who wants their car to be an event.

| Segment | Example | New price (USD) |
|---|---|---|
| City car | Fiat 500e | 32k – 38k |
| Sports sedan | Alfa Romeo Giulia | 45k – 90k |
| Supercar | Ferrari 296 GTB / Lamborghini Temerario | 330k – 400k |
| V12 flagship | Ferrari 12Cilindri / Lamborghini Revuelto | 430k – 610k |
| Hypercar | Pagani Utopia / Ferrari F80 | 2.5M – 3.9M |

> **Fun fact:** Ferrari's prancing horse emblem was originally painted on the fighter plane of WWI ace Francesco Baracca. His mother suggested Enzo use it for good luck; Enzo added the canary-yellow background, the colour of his hometown Modena.
`,
      keyPoints: [
        'Italy = design, sound and racing passion.',
        'The Lamborghini Miura (1966) created the mid-engine supercar layout.',
        'Ferrari 250 GTO is among the most valuable cars ever.',
        'Beautiful but expensive to maintain.',
      ],
      quiz: [
        { q: 'Which car is considered the first modern mid-engine supercar?', o: ['Ferrari F40', 'Lamborghini Miura', 'Maserati Bora', 'Fiat 500'], a: 1, e: 'The 1966 Miura put a V12 behind the driver.' },
        { q: 'What did Ferruccio Lamborghini build before supercars?', o: ['Aeroplanes', 'Tractors', 'Bicycles', 'Boats'], a: 1, e: 'Lamborghini Trattori is still around today.' },
        { q: 'What was the last Ferrari approved by Enzo Ferrari?', o: ['F50', 'Enzo', 'F40', 'Testarossa'], a: 2, e: 'The 1987 F40 celebrated Ferrari\'s 40th anniversary.' },
        { q: 'Which Italian brand won six straight WRC manufacturers\' titles?', o: ['Fiat', 'Lancia', 'Alfa Romeo', 'Ferrari'], a: 1, e: 'The Delta Integrale won 1987–1992.' },
        { q: 'Where did Ferrari\'s prancing horse come from?', o: ['A racehorse', 'A WWI fighter pilot\'s plane', 'The city flag of Rome', 'A circus'], a: 1, e: 'Francesco Baracca\'s emblem, gifted for good luck.' },
      ],
    },
    {
      id: 'l4-5',
      title: 'Britain: Luxury, Sports Cars & Motorsport Valley',
      summary: 'Rolls-Royce, Bentley, Aston Martin, Jaguar, Land Rover, McLaren and Lotus.',
      minutes: 8,
      image: pick('luxury', 0),
      content: `
Britain's car industry has a unique mix: hand-built luxury, nimble sports cars, rugged off-roaders and world-leading motorsport engineering. Many of its famous brands are now foreign-owned, but design and engineering often remain in the UK.

## History

In the 1950s and 1960s Britain was the world's second-largest car producer. Brands like **Austin, Morris, Triumph, MG, Jaguar and Rover** were household names, and the 1959 **Mini**, designed by Alec Issigonis with its transverse engine and front-wheel drive, revolutionised small-car packaging, a layout copied by nearly every small car since. Strikes, poor management and quality problems led to the collapse of British Leyland in the 1970s and 80s.

Ownership changed but the brands survived: Rolls-Royce now belongs to BMW, Bentley to Volkswagen, Jaguar Land Rover to India's Tata, Mini to BMW, Lotus to China's Geely, and MG to China's SAIC. Meanwhile, the area around Oxfordshire and Northamptonshire became **"Motorsport Valley"**, home to most Formula 1 teams: McLaren, Williams, Red Bull, Mercedes, Aston Martin, Alpine and Haas UK bases.

## The major brands

- **Rolls-Royce** – the pinnacle of luxury since 1906. Its cars are virtually silent, ride on "magic carpet" air suspension, and the Phantom's paint can take weeks to apply. Every Rolls-Royce wears the *Spirit of Ecstasy* mascot.
- **Bentley** – luxury with performance: the Continental GT combines handcrafted interiors with 650+ hp. Won Le Mans five times in the 1920s ("the Bentley Boys").
- **Aston Martin** – elegant GTs and James Bond's car since the DB5 in *Goldfinger* (1964).
- **Jaguar** – famous for the **E-Type** (1961), which Enzo Ferrari reportedly called "the most beautiful car ever made". Jaguar is relaunching as an all-electric luxury brand.
- **Land Rover / Range Rover** – the original 1948 Land Rover and the 1970 Range Rover created the luxury SUV. The Defender is a go-anywhere icon.
- **McLaren** – founded by New Zealand racer Bruce McLaren. The **McLaren F1** (1992) was the fastest production car in the world, and the road-car company now builds carbon-tubbed supercars.
- **Lotus** – Colin Chapman's philosophy: **"Simplify, then add lightness."** Lightweight handling masterpieces like the Elise and Exige.
- **Mini** – modern premium city car; **MG** – affordable sports and EVs.
- **Gordon Murray Automotive** – the T.50, the spiritual successor to the McLaren F1.

## What defines British cars

- Hand-built luxury: leather, wood veneers and bespoke personalisation.
- Lightweight, fine-handling sports cars.
- World-class motorsport and aerodynamic engineering.
- Elegant design; "understated" British style.

## Famous British cars

Mini (1959), Jaguar E-Type, Aston Martin DB5, Land Rover Defender, Range Rover, McLaren F1, Rolls-Royce Phantom, Bentley Continental GT, Lotus Elise, Caterham Seven, Austin Healey 3000, MG B, Triumph Spitfire.

## Pros and cons

- **Pros:** luxury and craftsmanship, character, handling, heritage, off-road ability (Land Rover).
- **Cons:** historic reliability issues (Land Rover and Jaguar often score poorly in surveys), high depreciation on luxury models, expensive parts.

## Best for and price range

Best for buyers wanting craftsmanship and character, luxury SUV drivers, and handling purists.

| Segment | Example | New price (USD) |
|---|---|---|
| Premium city | Mini Cooper | 30k – 45k |
| Lightweight sports | Lotus Emira | 100k – 110k |
| Luxury SUV | Range Rover | 110k – 240k |
| GT | Aston Martin DB12 / Bentley Continental GT | 245k – 300k |
| Ultra-luxury | Rolls-Royce Phantom | 470k – 600k+ |

> **Lightness lesson:** Colin Chapman's idea explains why a 900 kg Lotus can out-handle cars with twice the power. Less weight means better acceleration, braking, cornering, and less tyre and brake wear.
`,
      keyPoints: [
        'The 1959 Mini pioneered the transverse-engine FWD layout.',
        'Most F1 teams are based in Britain\'s "Motorsport Valley".',
        'Lotus: "Simplify, then add lightness."',
        'Rolls-Royce (BMW), Bentley (VW), JLR (Tata) are foreign-owned.',
      ],
      quiz: [
        { q: 'Which car pioneered the transverse-engine, front-wheel-drive small-car layout?', o: ['VW Beetle', 'Mini (1959)', 'Fiat 500', 'Ford Model T'], a: 1, e: 'Alec Issigonis\'s Mini changed small-car design forever.' },
        { q: 'Who said "Simplify, then add lightness"?', o: ['Enzo Ferrari', 'Colin Chapman', 'Bruce McLaren', 'Henry Ford'], a: 1, e: 'Lotus founder Colin Chapman.' },
        { q: 'Which company owns Rolls-Royce Motor Cars today?', o: ['Volkswagen', 'BMW', 'Tata', 'Mercedes-Benz'], a: 1, e: 'BMW has owned Rolls-Royce Motor Cars since 2003.' },
        { q: 'Which James Bond car first appeared in Goldfinger (1964)?', o: ['Jaguar E-Type', 'Aston Martin DB5', 'Lotus Esprit', 'Bentley Continental'], a: 1, e: 'The DB5 is the most famous Bond car.' },
        { q: 'Which car was the fastest production car in the world in the 1990s?', o: ['McLaren F1', 'Jaguar XJ220', 'Ferrari F50', 'Lamborghini Diablo'], a: 0, e: 'It hit 386 km/h (240 mph) in 1998.' },
      ],
    },
    {
      id: 'l4-6',
      title: 'France: Comfort, Clever Design & Rally Spirit',
      summary: 'Peugeot, Renault, Citroën, Alpine and Bugatti.',
      minutes: 7,
      image: pick('everyday', 1),
      content: `
French cars have a distinctive personality: **comfort-focused ride, quirky and clever design, efficient small cars and wonderful hot hatches**. France is also home to one of the world's most extreme hypercar makers, Bugatti.

## History

France was a pioneer: Panhard et Levassor established the "système Panhard" layout (front engine, rear-wheel drive, clutch and gearbox) in 1891, and the first motor race, Paris–Rouen, took place in 1894. The term **Grand Prix** comes from the French Grand Prix of 1906.

**Peugeot** (whose family business dates back to 1810, making coffee grinders and tools) and **Renault** (founded in 1899 by the Renault brothers) became giants. **Citroën** (1919) became famous for daring innovation: the **Traction Avant** (1934) was a mass-produced front-wheel-drive monocoque car; the **2CV** (1948) was designed to carry four farmers and a basket of eggs across a ploughed field without breaking them; and the **DS** (1955) introduced **hydropneumatic suspension** and swivelling headlights, looking like a spaceship decades ahead of its time.

Today Peugeot and Citroën are part of **Stellantis** (with Fiat, Chrysler, Jeep, Alfa Romeo and Maserati), while Renault forms an alliance with Nissan and Mitsubishi. Renault's **Alpine** brand builds the A110 sports car and runs the Alpine F1 team. **Bugatti**, founded by Italian-born Ettore Bugatti in Molsheim, Alsace, in 1909, now makes the world's most extreme hypercars as **Bugatti Rimac**.

## What defines French cars

- A soft, supple ride designed for rough rural roads.
- Clever, often quirky design and packaging.
- Efficient small cars and diesels.
- Outstanding hot hatches: Peugeot 205 GTI, Renault Clio Williams, Mégane RS.
- Rally success: Peugeot 205 T16 (Group B), Citroën's nine WRC drivers' titles with Sébastien Loeb, Alpine A110 (first WRC champion in 1973).

## Famous French cars

- **Citroën DS** – aerodynamic and hydropneumatic; saved President de Gaulle's life in a 1962 assassination attempt when it kept driving on shot-out tyres.
- **Citroën 2CV** – over 5 million built.
- **Peugeot 205 GTI** – one of the greatest hot hatches ever.
- **Renault 5 Turbo** – mid-engine rally homologation hatch; the Renault 5 is now reborn as a retro EV.
- **Renault Espace** – Europe's first MPV (1984).
- **Alpine A110** – lightweight sports car, in the original 1960s and modern forms.
- **Bugatti Veyron (2005)** – the first 1,000+ PS production car and first to exceed 400 km/h.
- **Bugatti Chiron Super Sport 300+** – first production-based car past 300 mph (490 km/h, 2019).
- **Peugeot 208 & 3008** – modern best-sellers.

## Pros and cons

- **Pros:** ride comfort, efficiency, design character, affordable fun hot hatches, practical family cars.
- **Cons:** mixed reliability reputation (improving), weaker resale values, limited presence in the US market.

## Best for and price range

Best for: comfort-seekers, city drivers, and hot-hatch fans in Europe. (Note that Peugeot, Renault and Citroën are not sold in the USA, so prices below are converted from European pricing.)

| Segment | Example | New price (USD equiv.) |
|---|---|---|
| City | Renault Clio / Peugeot 208 | 20k – 30k |
| Family SUV | Peugeot 3008 | 35k – 50k |
| EV | Renault 5 E-Tech | 28k – 40k |
| Sports car | Alpine A110 | 65k – 95k |
| Hypercar | Bugatti Tourbillon | ~4.0M |

> **Design tip:** Citroën's DS is one of the most important car designs ever: the first mass-production car with disc brakes, hydropneumatic self-levelling suspension and, later, directional headlights. Many "new" luxury car features first appeared on French cars.
`,
      keyPoints: [
        'The term "Grand Prix" comes from France (1906).',
        'Citroën DS introduced hydropneumatic suspension (1955).',
        'French cars: comfort, clever design, great hot hatches.',
        'Bugatti: Veyron was first production car past 400 km/h.',
      ],
      quiz: [
        { q: 'Which Citroën introduced hydropneumatic suspension in 1955?', o: ['2CV', 'DS', 'Traction Avant', 'C4'], a: 1, e: 'The DS was decades ahead of its time.' },
        { q: 'The 2CV was designed to carry what without breaking it?', o: ['A wine bottle', 'A basket of eggs across a ploughed field', 'A glass window', 'A piano'], a: 1, e: 'It famously had a soft, long-travel suspension.' },
        { q: 'Which was the first production car to exceed 400 km/h?', o: ['McLaren F1', 'Bugatti Veyron', 'Koenigsegg Agera', 'SSC Tuatara'], a: 1, e: 'The Veyron hit 407 km/h in 2005.' },
        { q: 'Peugeot and Citroën are now part of which group?', o: ['Volkswagen Group', 'Stellantis', 'Renault-Nissan', 'Geely'], a: 1, e: 'Stellantis formed from PSA and Fiat Chrysler in 2021.' },
        { q: 'Which was Europe\'s first MPV?', o: ['Renault Espace', 'VW Sharan', 'Ford Galaxy', 'Peugeot 806'], a: 0, e: 'Launched in 1984.' },
      ],
    },
    {
      id: 'l4-7',
      title: 'Korea: From Budget to Benchmark',
      summary: 'How Hyundai, Kia and Genesis became world leaders in design and EVs.',
      minutes: 7,
      image: pick('everyday', 2),
      content: `
Few industries have transformed as quickly as South Korea's car industry. In the 1980s Korean cars were seen as cheap and unreliable; today **Hyundai Motor Group** (Hyundai, Kia, Genesis) is the world's third-largest car maker by volume and wins design and EV awards against the best in the world.

## History

**Hyundai Motor Company** was founded in 1967 and initially assembled Ford Cortinas. Its first own model, the **Pony** (1975), was styled by Italdesign's Giorgetto Giugiaro with Mitsubishi engines. Hyundai entered the US in 1986 with the cheap Excel, which sold well but suffered serious quality problems, damaging the brand's reputation.

The turnaround began in the late 1990s. After the 1997 Asian financial crisis, Hyundai took over Kia (1998). Chairman Chung Mong-koo ordered a huge focus on quality, and in 1998 Hyundai shocked the US industry with a **10-year / 100,000-mile powertrain warranty**, "America's Best Warranty", to prove its confidence. Hyundai hired top European talent: Peter Schreyer (from Audi, designer of the Audi TT) led Kia's design revolution from 2006, and Albert Biermann (former head of BMW M) set up the **Hyundai N** performance division in 2015. **Genesis** became a standalone luxury brand in 2015. Hyundai also runs a major research centre at the Nürburgring.

## The brands

- **Hyundai** – mainstream cars from the i10 to the Palisade SUV; the **IONIQ** EV sub-brand; **N** performance (i20 N, Elantra N, IONIQ 5 N).
- **Kia** – sportier, youthful design; the **Stinger** GT sedan, Telluride SUV, EV6 and EV9.
- **Genesis** – luxury rivals to BMW and Mercedes, with dramatic "two-line" lighting and excellent value.

## Engineering highlights

- The **E-GMP** platform (2021) underpins the IONIQ 5, IONIQ 6, Kia EV6 and Genesis GV60. Its **800-volt architecture** allows charging from 10 to 80 percent in about 18 minutes, a speed previously reserved for the Porsche Taycan.
- **Vehicle-to-Load (V2L):** you can power appliances, laptops or even another EV from the car's battery.
- The **IONIQ 5 N** simulates gear shifts and engine sounds for driver engagement, and has 650 hp in boost mode.
- Hyundai is a leader in **hydrogen**: the Nexo fuel-cell SUV and Xcient fuel-cell trucks.
- Hyundai's WRC team won manufacturers' titles in 2019 and 2020.

## Famous Korean cars

Hyundai Pony, Hyundai Elantra N, Hyundai IONIQ 5 (World Car of the Year 2022), IONIQ 5 N, IONIQ 6, Kia Stinger, Kia EV6 (European Car of the Year 2022), Kia EV9 (World Car of the Year 2024), Kia Telluride, Kia Sportage, Genesis G90, Genesis GV80.

## Pros and cons

- **Pros:** outstanding value and equipment, long warranties (7 years in Europe for Kia, 10-year/100k-mile powertrain in the US), bold design, class-leading EV charging tech, much improved reliability.
- **Cons:** brand prestige still lower than German rivals, resale values historically weaker (improving), some engine recalls (notably the Theta II engines).

## Best for and price range

Best for value-focused buyers, families who want lots of equipment and long warranties, and EV buyers who want fast charging.

| Segment | Example | New price (USD) |
|---|---|---|
| Compact | Hyundai Elantra | 22k – 30k |
| Performance | Elantra N / IONIQ 5 N | 34k – 67k |
| Family SUV | Kia Sportage / Telluride | 28k – 55k |
| EV | IONIQ 5 / Kia EV6 / EV9 | 43k – 75k |
| Luxury | Genesis G80 / GV80 | 58k – 85k |

> **Lesson for buyers:** Korean cars prove brand reputation lags reality by years. Always check current reliability data and warranty terms, not just old stereotypes.
`,
      keyPoints: [
        'Hyundai Motor Group = Hyundai, Kia, Genesis; world #3 by volume.',
        'The 10-year/100k-mile warranty (1998) rebuilt trust.',
        'E-GMP 800 V platform: 10–80% in ~18 minutes.',
        'European talent (Schreyer, Biermann) drove design and N performance.',
      ],
      quiz: [
        { q: 'What was Hyundai\'s first own model (1975)?', o: ['Excel', 'Pony', 'Elantra', 'Sonata'], a: 1, e: 'Styled by Giorgetto Giugiaro.' },
        { q: 'Which warranty did Hyundai introduce in the US in 1998?', o: ['3 years', '5 years / 60k miles', '10 years / 100,000 miles powertrain', 'Lifetime'], a: 2, e: 'It signalled confidence in its new quality focus.' },
        { q: 'What voltage does the E-GMP platform use?', o: ['12 V', '400 V', '800 V', '1,200 V'], a: 2, e: '800 V allows ultra-fast charging.' },
        { q: 'Who founded Hyundai\'s N performance division after leaving BMW M?', o: ['Peter Schreyer', 'Albert Biermann', 'Luc Donckerwolke', 'Chris Bangle'], a: 1, e: 'Biermann led BMW M before joining Hyundai.' },
        { q: 'What does V2L (Vehicle-to-Load) allow?', o: ['Faster charging', 'Powering external appliances from the car battery', 'Self-driving', 'Remote start'], a: 1, e: 'You can run a kettle, laptop or camping gear from the car.' },
      ],
    },
    {
      id: 'l4-8',
      title: 'China: The EV Superpower',
      summary: 'BYD, NIO, Xpeng, Li Auto, Xiaomi, Geely and how China changed the industry.',
      minutes: 8,
      image: pick('ev', 0),
      content: `
China is now the world's largest car market (over 25 million new cars per year) and, since 2023, the world's largest car **exporter**. More than half of all new cars sold in China are electric or plug-in hybrid. Chinese brands, almost unknown outside the country a decade ago, now lead in battery technology, price and speed of development.

## History

For decades, foreign brands could only build cars in China through **joint ventures** with Chinese state companies (such as SAIC-Volkswagen and FAW-Toyota). This transferred manufacturing know-how. In the 2000s private companies like **Geely** and **BYD** grew. In 2010 Geely bought **Volvo** from Ford and later took stakes in Mercedes-Benz and Aston Martin, and acquired Lotus and Smart (with Mercedes).

The government made **New Energy Vehicles (NEVs)** a strategic priority around 2009, with subsidies, licence-plate benefits in big cities and massive investment in battery supply chains. China now produces around three quarters of the world's lithium-ion batteries. **CATL** is the world's largest battery maker, and BYD is second.

## The major players

- **BYD (Build Your Dreams)** – began as a battery maker in 1995. Overtook Tesla in global EV sales. Makes its own batteries (the safe, cobalt-free **Blade** LFP battery), chips and motors. Popular models: Seagull, Dolphin, Atto 3, Seal, Han, Song. Its luxury brand **Yangwang** built the U9 supercar and the U8 SUV that can float and "tank turn". In 2025 BYD demonstrated 1,000 kW "megawatt" charging.
- **Geely Holding** – owns Volvo, Polestar, Lotus, Zeekr, Lynk & Co, Smart and Proton stakes.
- **NIO** – premium EVs with **battery swapping** stations: a robot swaps your battery in about three minutes.
- **Xpeng** – tech-focused EVs with advanced driver assistance; partnered with Volkswagen.
- **Li Auto** – extended-range EV SUVs for families.
- **Xiaomi** – the smartphone maker launched the **SU7** sedan in 2024, receiving tens of thousands of orders within minutes; the SU7 Ultra set a Nürburgring lap record for a production electric sedan.
- **SAIC (MG)**, **Chery**, **Great Wall** (Haval, Ora, Tank), **Changan**, **Huawei**-backed brands (AITO) and more.

## What defines Chinese EVs

- Excellent value: well-equipped EVs from under $15,000 in China.
- Rapid development cycles (new models in 18–24 months vs 4–5 years for legacy makers).
- Tech-heavy interiors with huge screens, voice assistants and app integration.
- Vertical integration: batteries, motors, chips and software in-house.
- **LFP (lithium iron phosphate)** batteries: cheaper, safer and longer-lasting, though less energy-dense.

## Famous Chinese cars

BYD Seal, BYD Atto 3, BYD Seagull, BYD Han, Yangwang U9, NIO ET7, Xpeng G9, Xiaomi SU7, Zeekr 001, Li Auto L9, MG4, Lynk & Co 01, Polestar 2, Hongqi H9 (the "Red Flag" state limousine brand).

## Pros and cons

- **Pros:** low prices, long range and fast charging, high-tech features, rapid improvement, strong battery tech.
- **Cons:** unproven long-term reliability and resale values outside China, limited dealer and service networks abroad, data-privacy concerns, and trade tariffs (the US imposed 100 percent tariffs in 2024; the EU added up to 35 percent extra duties).

## Best for and price range

Best for: EV buyers wanting maximum range and tech per dollar, in markets where they are sold.

| Segment | Example | Price (USD equiv.) |
|---|---|---|
| City EV | BYD Seagull / Dolphin | 10k – 30k |
| Family EV | BYD Atto 3 / MG4 | 25k – 40k |
| Premium sedan | BYD Seal / Xiaomi SU7 | 30k – 55k |
| Luxury SUV | NIO ES8 / Li Auto L9 | 55k – 80k |
| Supercar | Yangwang U9 | ~230k |
`,
      keyPoints: [
        'China is the largest car market and, since 2023, the largest exporter.',
        'BYD started as a battery maker; Blade LFP battery.',
        'Geely owns Volvo, Polestar, Lotus and Zeekr.',
        'Strengths: price, tech, batteries, development speed.',
      ],
      quiz: [
        { q: 'BYD began as a maker of...', o: ['Bicycles', 'Batteries', 'Phones', 'Tractors'], a: 1, e: 'Founded in 1995 as a battery manufacturer.' },
        { q: 'Which Chinese company bought Volvo in 2010?', o: ['BYD', 'Geely', 'SAIC', 'NIO'], a: 1, e: 'Geely bought Volvo Cars from Ford.' },
        { q: 'What is NIO\'s signature technology?', o: ['Hydrogen', 'Battery swapping stations', 'Solar roofs', 'Diesel hybrids'], a: 1, e: 'A swap takes around three minutes.' },
        { q: 'What does LFP stand for?', o: ['Lithium iron phosphate', 'Light fuel power', 'Liquid fuel pack', 'Lead fibre plate'], a: 0, e: 'LFP is cheaper, safer and more durable, if less energy-dense.' },
        { q: 'Which smartphone company launched the SU7 car in 2024?', o: ['Huawei', 'Xiaomi', 'Oppo', 'Apple'], a: 1, e: 'Xiaomi\'s SU7 drew huge demand at launch.' },
      ],
    },
    {
      id: 'l4-9',
      title: 'Reading a Spec Sheet Like a Pro',
      summary: 'Decode HP, torque, 0–100, top speed, weight and price across 100+ cars.',
      minutes: 7,
      image: pick('sports', 4),
      content: `
You now know the world's car cultures. The last skill for this level is reading a **spec sheet** like a pro and comparing cars intelligently. Open the **Car Encyclopedia** in this app after this lesson: it contains over 100 famous models with full specs, and you can filter, sort and compare them.

## The key numbers

- **Engine** – layout, displacement and induction, e.g. "3.0 L twin-turbo I6". Tells you a lot about character: a high-revving NA V8 feels very different from a torquey turbo four.
- **Horsepower (hp / PS / kW)** – peak power and the rpm where it arrives. Check which unit is used: 500 PS ≈ 493 hp ≈ 368 kW.
- **Torque (Nm / lb-ft)** – peak twisting force and its rpm range. A broad range means flexibility.
- **Transmission** – type and number of gears (8AT, 7DCT, 6MT, CVT, 1-speed).
- **Drivetrain** – FWD, RWD, AWD, 4WD. Huge effect on launch and handling.
- **0–100 km/h** (or 0–60 mph, which is about 0.2–0.3 s quicker as 60 mph = 96.6 km/h) – a measure of launch and low-speed acceleration. AWD and EVs dominate this metric because traction is the limit.
- **Top speed** – mostly a function of power and aerodynamic drag. Many cars are electronically limited (250 km/h in Germany, 180 km/h in Japan's domestic market and in all new Volvos).
- **Weight (kerb weight)** – the car with fluids and no passengers. Divide power by weight for **power-to-weight**.
- **Price** – base price vs "as tested". Options can add 20–40 percent on premium cars.

## Beyond the headline numbers

- **Quarter-mile time** and **100–200 km/h** times reveal high-speed acceleration better than 0–100.
- **Braking distance** (100–0 km/h): around 34–36 m is excellent for a road car; 40+ m is mediocre.
- **Lap times** at the Nürburgring Nordschleife (a 20.8 km track nicknamed "The Green Hell") are a global benchmark. Under 7 minutes is supercar territory.
- **Fuel economy / efficiency** – L/100 km, mpg, or kWh/100 km for EVs (13–18 kWh/100 km is efficient).
- **Range** for EVs – check which test cycle: WLTP (Europe) is typically 10–20 percent optimistic, EPA (US) is more realistic.

## Example comparison

| | Toyota GR86 | BMW M3 Competition | Porsche 911 Turbo S |
|---|---|---|---|
| Engine | 2.4 L flat-4 NA | 3.0 L twin-turbo I6 | 3.7 L twin-turbo flat-6 |
| Power | 228 hp | 503 hp | 640 hp |
| Torque | 250 Nm | 650 Nm | 800 Nm |
| Drivetrain | RWD | RWD / AWD | AWD |
| 0–100 km/h | 6.3 s | 3.5 s (xDrive) | 2.7 s |
| Weight | ~1,270 kg | ~1,780 kg | ~1,640 kg |
| hp per tonne | ~180 | ~283 | ~390 |
| Price (USD) | ~30k | ~85k | ~230k |

The GR86 is slowest on paper, but its low weight and simplicity make it one of the most fun cars to drive per dollar. The 911 Turbo S is a technological masterpiece with launch performance close to hypercars. The M3 offers huge performance with four doors. **Numbers tell you what a car can do, not how it feels.**

## Common traps

- Manufacturer 0–100 times can be conservative (BMW, Porsche) or optimistic.
- "Up to" EV range figures are for the most efficient trim with small wheels.
- Combined fuel economy figures rarely match real-world driving; expect 10–25 percent worse.
- Different markets use different power units and test standards.

> **Pro habit:** When comparing cars, always look at power-to-weight, drivetrain and tyre size together. A light RWD car on sticky tyres can feel faster than a heavy AWD car with more horsepower.
`,
      keyPoints: [
        '500 PS ≈ 493 hp ≈ 368 kW.',
        '0–100 km/h is traction-limited; AWD and EVs dominate it.',
        'Power-to-weight and lap times tell more than peak hp.',
        'Numbers show capability, not driving feel.',
      ],
      quiz: [
        { q: 'Why is 0–60 mph slightly quicker than 0–100 km/h?', o: ['Different test tracks', '60 mph is only 96.6 km/h', 'Imperial cars are faster', 'Different tyres'], a: 1, e: 'It is a slightly shorter speed range.' },
        { q: 'Which test cycle is generally more realistic for EV range?', o: ['WLTP', 'EPA', 'NEDC', 'JC08'], a: 1, e: 'The US EPA cycle tends to be more conservative.' },
        { q: 'What is the Nürburgring Nordschleife nicknamed?', o: ['The Green Hell', 'The Red Mile', 'The Corkscrew', 'The Ring of Fire'], a: 0, e: 'Jackie Stewart gave it that name.' },
        { q: 'Which metric best predicts performance?', o: ['Peak torque only', 'Power-to-weight ratio', 'Number of seats', 'Wheel size'], a: 1, e: 'Power alone ignores how much mass must be moved.' },
        { q: 'A 100–0 km/h braking distance of about 34–36 m is...', o: ['Poor', 'Average', 'Excellent for a road car', 'Impossible'], a: 2, e: 'Most cars stop in 36–40 m.' },
      ],
    },
  ],
}
