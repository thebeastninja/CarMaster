export const facts = [
  'The first speeding ticket was issued in 1896 in Kent, England, to Walter Arnold, doing 8 mph in a 2 mph zone.',
  'A modern F1 car can brake from 200 km/h to a standstill in under 4 seconds and about 65 metres.',
  'The average car has around 30,000 parts, counting every nut and bolt.',
  'Volvo invented the three-point seat belt in 1959 and gave the patent away for free to save lives.',
  'The Toyota Corolla is the best-selling car nameplate of all time, with over 50 million sold.',
  'Windscreen wipers were invented by Mary Anderson in 1903 after watching a streetcar driver struggle in the snow.',
  'The first car radio was offered in 1930 by Motorola; "Motorola" combined "motor" and "Victrola".',
  'A Bugatti Chiron\'s W16 engine needs about 60,000 litres of air per minute at full power.',
  'The longest traffic jam ever recorded stretched about 100 km near Beijing in 2010 and lasted over 10 days.',
  'Electric cars outsold petrol and diesel cars in the US around 1900; about a third of cars were electric.',
  'The Ford Model T was so cheap to make that by 1914 a Ford worker could buy one with about four months\' pay.',
  'The "new car smell" comes from volatile organic compounds released by plastics, adhesives and fabrics.',
  'Ferrari\'s first car to wear the Ferrari name, the 125 S, raced in 1947.',
  'A modern car contains over 100 million lines of software code, more than a fighter jet.',
  'Around 1.5 billion cars are on the road worldwide today.',
  'The Lamborghini logo is a bull because Ferruccio Lamborghini\'s star sign was Taurus.',
  'In Germany, running out of fuel on the Autobahn is an offence because stopping there is considered avoidable.',
  'The world\'s fastest police car fleet in Dubai has included a Bugatti Veyron and a Lamborghini Aventador.',
  'Mercedes-Benz invented the crumple zone, patented by engineer Béla Barényi in 1952.',
  'The Mazda 787B is the only car with a rotary engine to win the 24 Hours of Le Mans (1991).',
  'A Top Fuel dragster accelerates harder than a space shuttle launch, at over 4 g.',
  'Tyres are black because of carbon black, which strengthens the rubber and protects it from UV light.',
  'Honda\'s first product was a motorised bicycle in 1946, using small war-surplus engines.',
  'Porsche has won the 24 Hours of Le Mans 19 times, more than any other manufacturer.',
  'The cruise control was invented by Ralph Teetor, an engineer who was blind.',
  'The average car spends about 95% of its life parked.',
  'Airbags inflate in about 30 milliseconds, faster than the blink of an eye.',
  'The Rolls-Royce Spirit of Ecstasy mascot retracts into the grille automatically if someone tries to steal it.',
  'Norway sells more than 90% battery-electric new cars, the highest share in the world.',
  'Henry Ford was among the first to pay workers $5 a day (1914), doubling typical wages, to reduce staff turnover.',
  'A 1 mm increase in tyre tread depth can reduce wet braking distance by several metres.',
]

export function factOfTheDay(date = new Date()) {
  const day = Math.floor(date.getTime() / 86400000)
  return facts[day % facts.length]
}
