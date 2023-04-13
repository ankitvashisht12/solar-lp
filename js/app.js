const planets = [
  {
    name: "Mercury",
    type: "Terrestrial",
    distanceFromSun: "0.39 AU",
    diameter: "4,880 km",
    mass: "3.3 x 10^23 kg",
    moons: 0,
    orbitPeriod: "88 Earth days",
    surfaceTemperature: "-173 to 427°C",
    imageUrl:
      "https://solarsystem.nasa.gov/system/resources/detail_files/2488_mercury_320.jpg",
  },
  {
    name: "Venus",
    type: "Terrestrial",
    distanceFromSun: "0.72 AU",
    diameter: "12,104 km",
    mass: "4.9 x 10^24 kg",
    moons: 0,
    orbitPeriod: "225 Earth days",
    surfaceTemperature: "462°C",
    imageUrl:
      "https://solarsystem.nasa.gov/system/resources/detail_files/2489_venus_480.jpg",
  },
  {
    name: "Earth",
    type: "Terrestrial",
    distanceFromSun: "1 AU",
    diameter: "12,742 km",
    mass: "5.97 x 10^24 kg",
    moons: 1,
    orbitPeriod: "365.24 Earth days",
    surfaceTemperature: "-89 to 57°C",
    imageUrl:
      "https://solarsystem.nasa.gov/system/resources/detail_files/14393_Earth_Cassini_1024.jpg",
  },
  {
    name: "Mars",
    type: "Terrestrial",
    distanceFromSun: "1.52 AU",
    diameter: "6,779 km",
    mass: "6.4 x 10^23 kg",
    moons: 2,
    orbitPeriod: "687 Earth days",
    surfaceTemperature: "-87 to -5°C",
    imageUrl:
      "https://solarsystem.nasa.gov/system/resources/detail_files/2490_mars_480.jpg",
  },
  {
    name: "Jupiter",
    type: "Gas Giant",
    distanceFromSun: "5.20 AU",
    diameter: "139,822 km",
    mass: "1.898 x 10^27 kg",
    moons: 79,
    orbitPeriod: "11.86 Earth years",
    surfaceTemperature: "-145°C",
    imageUrl:
      "https://solarsystem.nasa.gov/system/resources/detail_files/2423_stsci-h-p2006a-m-2048x2048.png",
  },
  {
    name: "Saturn",
    type: "Gas Giant",
    distanceFromSun: "9.58 AU",
    diameter: "116,460 km",
    mass: "5.68 x 10^26 kg",
    moons: 82,
    orbitPeriod: "29.46 Earth years",
    surfaceTemperature: "-178°C",
    imageUrl:
      "https://solarsystem.nasa.gov/system/resources/detail_files/2533_saturn_480.jpg",
  },
  {
    name: "Uranus",
    type: "Ice Giant",
    distanceFromSun: "19.18 AU",
    diameter: "50,724 km",
    mass: "8.68 x 10^25 kg",
    moons: 27,
    orbitPeriod: "84.01 Earth years",
    surfaceTemperature: "-224°C",
    imageUrl:
      "https://solarsystem.nasa.gov/system/resources/detail_files/2534_uranus_480.jpg",
  },
  {
    name: "Neptune",
    type: "Ice Giant",
    distanceFromSun: "30.07 AU",
    diameter: "49,244 km",
    mass: "1.02 x 10^26 kg",
    moons: 14,
    orbitPeriod: "164.79 Earth years",
    imageUrl:
      "https://solarsystem.nasa.gov/system/resources/detail_files/2535_neptune_480.jpg",
    surfaceTemperature: "-218°C",
  },
];

// <img src="${imageUrl}" alt="${name}" />
const html = planets
  .map(
    ({ imageUrl = "", name, type, moons, surfaceTemperature }) => `
        <div class="card">
          <p>${name}</p>
          <p>Type: ${type}</p>
          <p>No. of moons: ${moons}</p>
          <p>Surface Temp: ${surfaceTemperature}</p>
        </div>

`
  )
  .join("");

document.querySelector("#solar-system-cards").innerHTML = html;

const facts = [
  "The Sun accounts for 99.86% of the mass in the solar system.",
  "There are eight planets in the solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
  "The largest planet in the solar system is Jupiter, which is more than twice as large as all the other planets combined.",
  "Venus is the hottest planet in the solar system, with a surface temperature of over 460 degrees Celsius.",
  "Saturn's rings are made up of ice particles ranging in size from tiny grains to large boulders.",
  "Uranus and Neptune are known as the ice giants because they are composed mostly of ices such as water, methane, and ammonia.",
  "The asteroid belt is a region of the solar system located between Mars and Jupiter that is home to many small, rocky objects.",
  "The Kuiper Belt is a region of the solar system beyond the orbit of Neptune that contains many small, icy objects, including dwarf planets such as Pluto.",
  "Comets are icy objects that orbit the Sun and develop a coma, or fuzzy atmosphere, as they approach the Sun.",
  "The Oort Cloud is a hypothetical region of the solar system located far beyond the Kuiper Belt that is believed to be the source of long-period comets.",
  "The Voyager 1 and Voyager 2 spacecraft are the only human-made objects to have traveled beyond the outer planets of the solar system.",
];

const randomFact = facts?.[Math.round(Math.random() * 10)] ?? facts[0];
document.querySelector("#one-random-fact").textContent = randomFact;

document.querySelector("#image-gallery").innerHTML = Array.from({ length: 6 })
  .map(
    (_, index) =>
      `<img class="img_in_gallery" width="400px" src="/img_${
        index + 1
      }.jpg" alt="solar system image ${index}" />`
  )
  .join("");


// Building navigation dynamically from sections
const allSections = document.querySelectorAll("section")
let navHTML = ""

// iterate over node list of all sections
for(let section of allSections) {
  const navItem = section.getAttribute("data-nav")
  const href = section.getAttribute("id")

  navHTML += `<li class="nav-item">
      <a href="#${href}">${navItem}</a>
    </li>`
}
document.querySelector("nav > ul").innerHTML = navHTML
