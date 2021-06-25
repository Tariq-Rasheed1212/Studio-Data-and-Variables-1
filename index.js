// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
const date =	"Monday 2019-03-18";
const time =	"10:05:34 AM;"
const astronautCount =	7;
const astronautStatus =	"Ready";
let averageAstronautMassKg =	80.7;
const crewMassKg =	astronautCount * averageAstronautMassKg;
let fuelMassKg =	760_000;
const shuttleMassKg =	74842.31;
const totalMassKg =	crewMassKg + fuelMassKg + shuttleMassKg;
const fuelTempCelsius =	"-225";
const fuelLevel =	"100%"
const weatherStatus =	"Clear";



// Write code to generate the LC04 report here:
console.log("-------------------------------------");
console.log("> LC04 - LAUNCH CHECKLIST");
console.log("-------------------------------------");

console.log("Date: " + date);
console.log("Time: " + time);
console.log("");

console.log("-------------------------------------");
console.log("> ASTRONAUT INFO");
console.log("-------------------------------------");
console.log("* Count: " + astronautCount);
console.log("* Status: " + astronautStatus);
console.log("");

console.log("-------------------------------------");
console.log("> FUEL DATA");
console.log("-------------------------------------");
console.log("*Fuel temp celsius: " + fuelTempCelsius);
console.log("*Fuel level: " + fuelLevel);
console.log("");

console.log("-------------------------------------");
console.log("> MASS DATA");
console.log("-------------------------------------");
console.log("* Crew mass: 564.9 kg" + crewMassKg);
console.log("* Fuel mass: 760000 kg" + fuelMassKg);
console.log("* Shuttle mass: 74842.31 kg" + shuttleMassKg);
console.log("* Total mass: 835407.21 kg" + totalMassKg);
console.log("");

console.log("-------------------------------------");
console.log("FLIGHT PLAN");
console.log("-------------------------------------");
console.log("* Weather: " + weatherStatus);
console.log("");

console.log("-------------------------------------");
console.log("> OVERALL STATUS");
console.log("-------------------------------------");
console.log("* Clear for takeoff: Yes")













// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.