alert("JavaScript works!");

var heroes = [
		"Tick Tick",
		"Slasher",
		"GumDrop"
],
	enemies = [
		"Harry",
		"Eugene",
		"The Junker"
],
	places = [
		"The Sty",
		"The Pit",
		"The Pie"
],
	weapons = [
		"Timed bomb",
		"Kunai",
		"GumDrop Shooter"
];

var oneFight = function() {
	console.log( "The hero " + heroes[i] + " fought bravely against the evil " + enemies[i] + " at the site in which it all began, " + places[i] + ". As the fight waged on " + enemies[i] + " had the upper hand when " + heroes[i] + " suddenly pulled out his " + weapons[i] + " and ruthlessly demolished his greatest foe in one fell swoop!" )
	console.log( "The world was safe for another night." )
	
};
console.log( "The heroes did not know about any of the others. Nor did they know that they were each in different universe.")
console.log( "Just as they did not know about each other they also did not know that the action of each enemy being defeated at exactly the same moment their universe's would come together as one. Bringing fourth a war the likes of which nobody could imagine. And the emerge of a another group unknown to them.")

for (var i=0, h=heroes.length; i < h; i++) { 
	oneFight();
};

console.log("After a few days had passed the heroes started to notice strange happenings of objects appearing and disappearing moments later.")
console.log("Another week had passed and the objects started to stay strange creatures started to appear and cause trouble and panic. The heroes soon met each other and banded together to deal with the issue at hand with the help of someone none had seen or heard of before.")
console.log("Little did our heroes know the foes in which they thought were gone for good were in fact back and stronger than before.")
console.log("With the help of an unknown force the bad guys had placed a super ultra timed bomb set for 24 hours!")

var time = 24
while (time >= 4) {
	console.log(time + " hours until detonation.");
	time-=4;
};

console.log("The bomb's timer suddenly stopped!")

var tokenPerPound = 15,
		haveToken = 30;
	if (haveToken > tokenPerPound) {
		console.log("Catwoman obtained two pounds of CatNip and single handedly diffused the bomb!")
	
};

// To be continued…..