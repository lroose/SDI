alert("JavaScript works!");

var eternalone = {
	name: "The Overseer",
	renown: "Master of everything"
};

var samurai = {
	name: "Ryuu", // Dragon in Japanese
	weapon: "Naginata, Tanto and Yumi", //Type of spear, very short sword and bow Favored weapon of most samurai
	renown: "Elite warrior",
	battlecry: function () {
		console.log ("It is time.");
	}
};
var samurai1 = {
	name: "Shi o motarasu mono", //Death Bringer in Japanese
	weapon: "Kusari-Gama, Kunai and Shuriken", //Like a scythe that has 2-3 foot handle with a chain attached at the base, dagger and of course throwing stars
	renown: "Elite assassin",
	battlecry: function () {
		console.log("You will beg for death.");
	}
};
var samurai1secret = true
var samuraisecret = false
var samurailose = true
var wild = function (animal) {
	return {
		"name": animal,
	};
};
var shadowdragon = wild("Shadow Dragon");
var lightningdragon = wild("Lightning Dragon");
var samuraifirst = true
var samurai1night = true

console.log ("In the depths of hell on earth, also known as Nebraska, two warriors by chance gather for an ultimate battle that will decide the fate of the world.")
//Nebraska is first place I thought of.
console.log ("The first of the two is, " + samurai.name + " from the clan Raizo. His weapons of choice are, " + samurai.weapon + " and he is an " + samurai.renown + ".")
//Raizo = Lightning
console.log ("The other, " + samurai1.name + " from the clan Kage. His weapons are, " + samurai1.weapon + " and is an " + samurai1.renown + ".")
//Kage = Shadow
console.log ("As the two warriors readied for battle they glanced over their battlefield.")
console.log ("Soon they heard a voice of unknown origin. It was one they knew without knowing.")
console.log ("It was the voice of " + eternalone.name + ", who is the " + eternalone.renown + ".")
console.log ("After it finished speaking it began to count down the hours until they must battle.")

var countdown = 16
while (countdown >= 0) {
	console.log(countdown + " hours until the battle commences.");
	countdown-=4;
};

if (samuraifirst === true) {
	samurai.battlecry(); console.log('Says Ryuu.')
		if (samuraisecret === true) {
			console.log(samurai.name + " starts to summon his clans ancient protector, the " + lightningdragon.name + "!" )
				console.log(samurai.name + " finished summoning his dragon and using his bow was able to stop " + samurai1.name + " from his summoning.")
	}
		else{
			console.log(samurai.name + " with his bow attempts to prevent " + samurai1.name + " from completing his summoning ritual.")
				console.log(samurai1.name + " having mastered every style of martial arts including ninjutsu and surpassing even the greatest of any single school easily anticipated the attack and motionlessly dodged it without skipping a beat on summoning.")
	}
;}

var handleData = function(json) {
	for (var i = 0; i < json.hidden.length; i++){
		var hidden = json1.hidden[i];
		console.log(hidden.name + " came to the aid of his master!");
	};
};
handleData(json1);

console.log(samurai1.name + " with his helpers quickly push their foe back. " + samurai.name + " Manages to summon " + lightningdragon.name + " and dispatches his foes helpers turning the tide of battle in his favor.")
console.log("Soon night overcame the world and things started to look up for " + samurai1.name + ".")

if (samurai1night === true) {
	samurai1.battlecry(); console.log("Anounced " + samurai1.name + ".")
		if (samurai1secret === true) {
			console.log(samurai1.name + " began summoning his clans ultimate weapon, the " + shadowdragon.name + "!")
				console.log("With the help of Shadow Dragon and the night " + samurai1.name + " finished off his enemy quickly.")
	}
		else{
			console.log(samurai.name + " was able to defeat " + samurai1.name + " and take control of the world.")
	}
};

console.log(eternalone.name + " had other plans. He showed his true form to the victor and began fighting him.")
console.log(samurai1.name + " managed to somehow defeat " + eternalone.name + " and claimed supreme rule over all!")









