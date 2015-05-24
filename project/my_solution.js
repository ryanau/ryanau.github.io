 // U3.W7: Design Basic Game Solo Challenge

// This is a solo challenge

// Your mission description: You're playing a solo pub crawl game called "Golf"
// where you wanna score the lowest point. There will be 9 bars scattered around 
// the city and each bar offers different drinks with different points. For example,
// birdie: AMF, par: 1 shot of vodka, bogie: mike's hard lemonade, double bogie: water.
// You have a characteristic called "Drunkiness" and the game has to be finished in a certain
// amount of "Time", where each step will take a certain unit of time. 
// Your drunkiness level will determine how many units it takes to take each step.
// You have to hit all the bars but if you run out of time, you'll be scored double
// bogie for the rest of the bars that you haven't hit
// Overall mission: to score as low of a point to win the game!
// Goals: finish the game while scoring the lowest point to win
// Characters:
// You're the golfer
// - Time: you have to finish the game within the time limit
// - Drunkiness: will affect how much time it takes to take each step to walk to each bar
// - 
// Objects:
// - 9 bars with drinks of different scores
// Functions:

// Pseudocode
// You're starting at coordinate (10,10) with 0 drunkiness and 100 units of time
// Each step take 1 unit of time, so time - 1 everytime you move
// you can take steps in N, E, S, W direction
// bars are located: Pappy's (8,10), Cafe D (12,12), Kip's (12,6), Free House (16,18)
// Jupiter (4,4), GTH (6,16), Remy's (18,18), Triple Rock (12,0), Henry's (0,20)
// Executive coures, par 3 per hole. Total min score: 18, max score: 45
// start with 45 points
// once you hit 40 points, increase drunkiness to "lightheaded" (time x1.5 per step)
// once you hit 35 points, increase drunkiness to "tipsy" (time x2 per step)
// once you hit 25 points, increase drunkiness to "pretty tipsy" (time x2 per step)
// once you hit 15 points, increase drunkiness to "drunk" (time x2.5 per step)
// once you hit 5 points, increase drunkiness to "blacked out" (time x3 per step)
// you can also encouter 

// Initial Code

// setting initial player condition
var golfer = {
	pos_X: 10,
	pos_Y: 10,
	time: 100,
	score: 0,
	drunkiness_level: "",
	multiplier: 1,
	step: 2,
	completed: 0,
	drunkiness: 0,
};

// Setting bars coordinates

var bar = [
	{
			name: "Pappy's",
			pos_X: 8,
			pos_Y: 10,
			birdie: "AMF",
			par: "Shot of Vodka",
			bogey: "Water",
			status: true,


	},
	{
			name: "Cafe D",
			pos_X: 4,
			pos_Y: 10,
			birdie: "Pitcher of Corona",
			par: "Margarita",
			bogey: "Coke",
			status: true,

	},
	{
			name: "Kip's",
			pos_X: 12,
			pos_Y: 6,
			birdie: "Fish Bowl",
			par: "Chinese Shit",
			bogey: "Virgin Colada",
			status: true,

	},
	{
			name: "Free House",
			pos_X: 16,
			pos_Y: 18,
			birdie: "Long Island Icetea",
			par: "Jack and Coke",
			bogey: "Fiji Water",
			status: true,

	},
	{
			name: "Jupiter",
			pos_X: 4,
			pos_Y: 4,
			birdie: "Pint of Big Daddy IPA",
			par: "Mojito",
			bogey: "Sprite",

	},
	{
			name: "GTH",
			pos_X: 6,
			pos_Y: 16,
			birdie: "3 Shots of Wishkey",
			par: "Bottle of Stella",
			bogey: "You get kicked out by the bartender",
			status: true,

	},
	{
			name: "Remy's",
			pos_X: 18,
			pos_Y: 18,
			birdie: "Shotgun 3 Beers",
			par: "Beach Margarita",
			bogey: "Horchata",
			status: true,

	},
	{
			name: "Tripe Rock",
			pos_X: 12,
			pos_Y: 0,
			birdie: "2 Bottles of Monkey Head",
			par: "Casual Beer",
			bogey: "Coconut Water",
			status: true,

	},
	{
			name: "Henry's",
			pos_X: 0,
			pos_Y: 20,
			birdie: "Pitcher of Beer",
			par: "Pint of Beer",
			bogey: "Ginger Ale",
			status: true,

	}

]



// player move function
function move(direction) {
	// prompt("enter");
	direction.toUpperCase();


	if (golfer.drunkiness <= 4){
		golfer.drunkiness_level = "sober"
	}
	else if (golfer.drunkiness <= 8){
		golfer.drunkiness_level = "lightheaded"
		golfer.multiplier = 1.2
	}
	else if (golfer.drunkiness <= 12){
		golfer.drunkiness_level = "tipsy"
		golfer.multiplier = 1.5
	}
	else if (golfer.drunkiness <= 20){
		golfer.drunkiness_level = "pretty tipsy"
		golfer.multiplier = 2
	}
	else if (golfer.drunkiness <= 28){
		golfer.drunkiness_level = "drunk"
		golfer.multiplier = 2.5
	}
	else if (golfer.drunkiness <= 35){
		golfer.drunkiness_level = "blacked out"
		golfer.multiplier = 4
	}
		
		
		





	if (direction === "N"){
		golfer.pos_Y += (1 * golfer.step);
		golfer.time -= 1 * golfer.multiplier;
		console.log("Your coordinates are: ", golfer.pos_X, ",", golfer.pos_Y);
		console.log("You have", golfer.time, "mins left.")
		console.log("Your score is at", golfer.score)
		console.log("You're currenty", golfer.drunkiness_level, ".")
		console.log("")
	}
	else if (direction === "E"){
		golfer.pos_X += (1 * golfer.step);
		golfer.time -= 1 * golfer.multiplier;
		console.log("Your coordinates are: ", golfer.pos_X, ",", golfer.pos_Y);
		console.log("You have", golfer.time, "mins left.")
		console.log("Your score is at", golfer.score)
		console.log("You're currenty", golfer.drunkiness_level, ".")
		console.log("")

	}
	else if (direction === "S"){
		golfer.pos_Y -= (1 * golfer.step);
		golfer.time -= 1 * golfer.multiplier;
		console.log("Your coordinates are: ", golfer.pos_X, ",", golfer.pos_Y);
		console.log("You have", golfer.time, "mins left.")
		console.log("Your score is at", golfer.score)
		console.log("You're currenty", golfer.drunkiness_level, ".")
		console.log("")
	}
	else if (direction === "W"){
		golfer.pos_X -= (1 * golfer.step);
		golfer.time -= 1 * golfer.multiplier;
		console.log("Your coordinates are: ", golfer.pos_X, ",", golfer.pos_Y);
		console.log("You have", golfer.time, "mins left.")
		console.log("Your score is at", golfer.score)
		console.log("You're currenty", golfer.drunkiness_level, ".")
		console.log("")
	};


// 	for (i = 0; i < bar.length; i++){
// 	if (bar[i]["pos_X"] == golfer.pos_X){
// 		if (bar[i]["pos_Y"] == golfer.pos_Y){
//  	console.log("You are at", bar[i]["name"]);
// 	drink = "birdie"
// 		if (drink === "birdie"){
// 			selection = bar[i]["birdie"]
// 		}
// 	console.log("And you ordered Birdie. The drink is", selection)
// 	golfer.score -= 6
// 	console.log("Your current score is", golfer.score)
// 	console.log("")
// 	}
// }
// }


//----------Below for prompt-------------
	for (i = 0; i < bar.length; i++){
		if (golfer.time <= 0){
		golfer.score = (golfer.score + (9 - golfer.completed)*4)
		console.log("Oooops! You ran out of time!")
		console.log("You've only completed", golfer.completed, "/9 holes. The incomplete holes will be counted as bogey. So your final score is", golfer.score)
		break
	}
	if (bar[i]["pos_X"] == golfer.pos_X){
		if (bar[i]["pos_Y"] == golfer.pos_Y){
			if (bar[i]["status"] == true){
 	console.log("You are at", bar[i]["name"]);
 	bar[i]["status"] = false
	drink = prompt("What are you trying to score?", "Please input: birdie, par or bogey")
		if (drink === "birdie"){
			selection = bar[i]["birdie"]
			golfer.score += 2
			console.log("Your score is now:",golfer.score)
			golfer.drunkiness += 3
		}
		else if (drink === "par"){
			selection = bar[i]["par"]
			golfer.score += 3
			console.log("Your score is now:",golfer.score)
			golfer.drunkiness += 2
		}
		else if (drink === "bogey"){
			selection = bar[i]["bogey"]
			golfer.score += 4
			console.log("Your score is now:",golfer.score)
		}
	golfer.completed += 1
	console.log("And you tried scoring a",drink,".", "The drink is", selection)
	console.log("Your current score is", golfer.score)
	console.log("And you've completed", golfer.completed, "/9 holes")
	console.log("")
	}
	else if (bar[i]["status"] == false){
		console.log("You've already been to", bar[i]["name"])
		console.log("")
	}
}

}
}
}

console.log("Are you ready for the Pub Crawl: Golf Tour? Here's a quick breakdown of how this works. You're at the city of Berkeley starting at the coordinates (10,10). There are 9 bars scattered around the city and you have", golfer.time, "mins to hit all the bars. While you're at the bar, you can choose to score a birdie, par or bogey, depending on how strong of a drink do you want. Just try not to get too drunk too quickly because it'll take you longer to walk around.")
for (time = 20; time > 0; time --){
move(prompt("Which direction do you want to go? Please input (N,E,S,W); Don't go out of bound at (20,20)"))
}

//---------Above for prompt-------------
// move("W");
// move("W");
// move("W");
// move("W");
// move("W");
// move("W");

// Refactored Code






// Reflection
// Overall pretty fun challenge, gotta figure out how to put it on the website and make it graphical now!
//
//
//
//
//
//
//