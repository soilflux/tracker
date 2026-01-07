function simControl() {
    if (!document.getElementById("simSeed").value > 0) {document.getElementById('fileInput').click(); return;}
    fetch('./sim_seeds/seed (' + document.getElementById("simSeed").value + ').json')
        .then((response) => response.json())
        .then((data) => {
            SpoilerJSON = data;
            readLog();
        })
}
function onFileLoad(elementId, event) {
    SpoilerJSON = JSON.parse(event.target.result);
	readLog();
}
function readLog() {
    simActive = true;
    startingItem = "";
    
    if (document.getElementById("presets").value == "S9") {
        startingItem = simGetStartingMajorItem();
        startingItem = " and " + startingItem
    }
    
    document.getElementById("chuCount").style.display = "inline-block";
    document.getElementById("chuPlus").style.display = "inline-block";
    document.getElementById("chuMinus").style.display = "inline-block";
    document.getElementById("blueRupee").style.display = "inline-block";
    document.getElementById("redRupee").style.display = "inline-block";
    document.getElementById("rupeeCount").style.display = "inline-block";
    document.getElementById("rupeeBreak").style.display = "inline-block";
	document.getElementById("simLog").style.display = "inline-block";
	document.getElementById("simLog").value = "Starting with " + SpoilerJSON["locations"]["Song from Impa"] + " and " + SpoilerJSON["locations"]["ToT Reward from Rauru"] + startingItem + "\n";
	document.getElementById("simCheckAltar").style.display = "block";
	document.getElementById("simCheckChildSpawn").style.display = "block";
	document.getElementById("simCheckAdultSpawn").style.display = "block";
	document.getElementById("simCheckLightArrowHint").style.display = "block";
	document.getElementById("gossips").value = "ON";
	
	if(SpoilerJSON["settings"]["starting_age"] == undefined) {
		// if random starting age is not on, assume child vanilla spawn
		document.getElementById("simLog").value = "Child Spawn: KF Links House\n" + document.getElementById("simLog").value;
	}
	else {
		if(SpoilerJSON["settings"]["starting_age"] == "child" || SpoilerJSON["randomized_settings"]["starting_age"] == "child")
			simCheckChildSpawn();
		else
			simCheckAdultSpawn();
	}
	
	document.getElementById("zeldasSpot").value = SpoilerItemToInput[SpoilerJSON["locations"]["Song from Impa"]];
	simStartingReward();
}
function onChooseFile(event, onLoadFileHandler) {
	if (typeof window.FileReader !== 'function')
		throw ("The file API isn't supported on this browser.");
	let input = event.target;
	if (!input)
		throw ("The browser does not properly implement the event object");
	if (!input.files)
		throw ("This browser does not support the `files` property of the file input.");
	if (!input.files[0])
		return undefined;
	let file = input.files[0];
	let fr = new FileReader();
	fr.onload = onLoadFileHandler;
	fr.readAsText(file);
}

rewardSpoilerLocations = ["ToT Reward from Rauru", "Queen Gohma", "King Dodongo", "Barinade", "Phantom Ganon", "Volvagia", "Morpha", "Bongo Bongo", "Twinrova"];

rewardInputDict = {
	"ToT Reward from Rauru" : "fr", 
	"Queen Gohma" : "de",
	"King Dodongo" : "do",
	"Barinade" : "ja",
	"Phantom Ganon" : "fo",
	"Volvagia" : "fi",
	"Morpha" : "wa",
	"Bongo Bongo" : "sh",
	"Twinrova" : "sp"
};

function simStartingReward() {
	m = ["xx", "xx", "xx", "xx", "xx", "xx"];
	s = ["xx", "xx", "xx"];
	
	if(SpoilerJSON["locations"]["ToT Reward from Rauru"] == "Light Medallion")
		m[0] = rewardInputDict["ToT Reward from Rauru"];
	else if(SpoilerJSON["locations"]["ToT Reward from Rauru"] == "Forest Medallion")
		m[1] = rewardInputDict["ToT Reward from Rauru"];
	else if(SpoilerJSON["locations"]["ToT Reward from Rauru"] == "Fire Medallion")
		m[2] = rewardInputDict["ToT Reward from Rauru"];
	else if(SpoilerJSON["locations"]["ToT Reward from Rauru"] == "Water Medallion")
		m[3] = rewardInputDict["ToT Reward from Rauru"];
	else if(SpoilerJSON["locations"]["ToT Reward from Rauru"] == "Shadow Medallion")
		m[4] = rewardInputDict["ToT Reward from Rauru"];
	else if(SpoilerJSON["locations"]["ToT Reward from Rauru"] == "Spirit Medallion")
		m[5] = rewardInputDict["ToT Reward from Rauru"];
	else if(SpoilerJSON["locations"]["ToT Reward from Rauru"] == "Kokiri Emerald")
		s[0] = rewardInputDict["ToT Reward from Rauru"];
	else if(SpoilerJSON["locations"]["ToT Reward from Rauru"] == "Goron Ruby")
		s[1] = rewardInputDict["ToT Reward from Rauru"];
	else if(SpoilerJSON["locations"]["ToT Reward from Rauru"] == "Zora Sapphire")
		s[2] = rewardInputDict["ToT Reward from Rauru"];
	document.getElementById("markMedallions").value = m[0] + m[1] + m[2] + m[3] + m[4] + m[5];
	document.getElementById("markStones").value = s[0] + s[1] + s[2];
}

function simCheckAltar() {
	m = ["", "", "", "", "", ""];
	s = ["", "", ""];
	
	for(var i = 0; i < rewardSpoilerLocations.length; i++) {
		if(SpoilerJSON["locations"][rewardSpoilerLocations[i]] == "Light Medallion")
			m[0] = rewardInputDict[rewardSpoilerLocations[i]];
		else if(SpoilerJSON["locations"][rewardSpoilerLocations[i]] == "Forest Medallion")
			m[1] = rewardInputDict[rewardSpoilerLocations[i]];
		else if(SpoilerJSON["locations"][rewardSpoilerLocations[i]] == "Fire Medallion")
			m[2] = rewardInputDict[rewardSpoilerLocations[i]];
		else if(SpoilerJSON["locations"][rewardSpoilerLocations[i]] == "Water Medallion")
			m[3] = rewardInputDict[rewardSpoilerLocations[i]];
		else if(SpoilerJSON["locations"][rewardSpoilerLocations[i]] == "Shadow Medallion")
			m[4] = rewardInputDict[rewardSpoilerLocations[i]];
		else if(SpoilerJSON["locations"][rewardSpoilerLocations[i]] == "Spirit Medallion")
			m[5] = rewardInputDict[rewardSpoilerLocations[i]];
		else if(SpoilerJSON["locations"][rewardSpoilerLocations[i]] == "Kokiri Emerald")
			s[0] = rewardInputDict[rewardSpoilerLocations[i]];
		else if(SpoilerJSON["locations"][rewardSpoilerLocations[i]] == "Goron Ruby")
			s[1] = rewardInputDict[rewardSpoilerLocations[i]];
		else if(SpoilerJSON["locations"][rewardSpoilerLocations[i]] == "Zora Sapphire")
			s[2] = rewardInputDict[rewardSpoilerLocations[i]];
	}
	document.getElementById("markMedallions").value = m[0] + m[1] + m[2] + m[3] + m[4] + m[5];
	document.getElementById("markStones").value = s[0] + s[1] + s[2];
	
	document.getElementById("simLog").value = "Checked Altar\n" + document.getElementById("simLog").value;
	document.getElementById("simCheckAltar").style.display = "none";
    
    if(document.getElementById("erOption").value == "DUNGEONS") {
        simCheckDungeonER();
    }
}

function simCheckDungeonER() {
    let entrance_to_dungeon_input = {
        "Spirit Temple Lobby": "sp",
        "Fire Temple Lower": "fi",
        "Jabu Jabus Belly Beginning": "ja",
        "Forest Temple Lobby": "fo",
        "Bottom of the Well": "bo",
        "Water Temple Lobby": "wa",
        "Gerudo Training Ground Lobby": "gt",
        "Shadow Temple Entryway": "sh",
        "Ice Cavern Beginning": "ic",
        "Deku Tree Lobby": "de",
        "Dodongos Cavern Beginning": "do"
    };
    
    let dungeonEntranceSpoilerLocations = [
        "KF Outside Deku Tree -> Deku Tree Lobby", 
        "Death Mountain -> Dodongos Cavern Beginning",
        "Zoras Fountain -> Jabu Jabus Belly Beginning", 
        "SFM Forest Temple Entrance Ledge -> Forest Temple Lobby",
        "DMC Fire Temple Entrance -> Fire Temple Lower",
        "Lake Hylia -> Water Temple Lobby",
        "Graveyard Warp Pad Region -> Shadow Temple Entryway",
        "Desert Colossus -> Spirit Temple Lobby",
        "Kakariko Village -> Bottom of the Well",
        "ZF Ice Ledge -> Ice Cavern Beginning",
        "Gerudo Fortress -> Gerudo Training Ground Lobby"
    ];
    
	d = ["", "", "", "", "", "", "", "", "", "", ""];
    
    SpoilerJSON["entrances"]["Child Spawn -> KF Links House"]
	
	for(var i = 0; i < dungeonEntranceSpoilerLocations.length; i++) {
		d[i] = entrance_to_dungeon_input[SpoilerJSON["entrances"][dungeonEntranceSpoilerLocations[i]]["region"]];
	}
	document.getElementById("mark_ER_Dungeons").value = d[0] + d[1] + d[2] + d[3] + d[4] + d[5] + d[6] + d[7] + d[8] + d[9] + d[10];
}

function simGetStartingMajorItem() {
    value = Object.keys(SpoilerJSON[":randomized_starting_items"])[0];
    value2 = Items2[inputs.indexOf(SpoilerItemToInput[value])];
    Player[value2] = true;
    Logic[value2] = true;
    CouldHave[value2] = true;
    
    return value;
}

function simCheckChildSpawn() {
	var child_region = "";
	var child_from = "";
	
	if(SpoilerJSON["entrances"]["Child Spawn -> KF Links House"] == undefined) {
		child_region = "KF Links House";
		document.getElementById("simLog").value = "Child Spawn: KF Links House\n" + document.getElementById("simLog").value;
	}
	else if(SpoilerJSON["entrances"]["Child Spawn -> KF Links House"] instanceof Object) {
		child_region = SpoilerJSON["entrances"]["Child Spawn -> KF Links House"]["region"];
		child_from = SpoilerJSON["entrances"]["Child Spawn -> KF Links House"]["from"];
		document.getElementById("simLog").value = "Child Spawn: " + child_region + " from " + child_from + "\n" + document.getElementById("simLog").value;
	}
	else {
		child_region = SpoilerJSON["entrances"]["Child Spawn -> KF Links House"];
		document.getElementById("simLog").value = "Child Spawn: " + child_region + "\n" + document.getElementById("simLog").value;
	}
	
	input = "";
	if (child_region == "DMC Great Fairy Fountain")
		input = "dmcf";
	else if (child_region == "DMC Lower Local" || child_region == "GC Darunias Chamber")
		input = "dmcl";
	else if (child_region == "DMT Great Fairy Fountain")
		input = "dmtf";
	else if (child_region == "Death Mountain Summit" || child_region == "DMC Upper Local")
		input = "dmcu";
	else if (child_region == "Gerudo Fortress" || child_region == "GV Fortress Side")
		input = "gf";
	else if (child_region == "HC Great Fairy Fountain")
		input = "din";
	else if (child_region == "Zoras Domain" || child_region == "Zoras Domain" || child_region == "ZR Behind Waterfall" || child_region == "ZD Shop")
		input = "zd";
	else if (child_region == "Zora River")
		input = "zr";
	
	document.getElementById("markChildLocation").value = input;
	document.getElementById("simCheckChildSpawn").style.display = "none";
}
	
function simCheckAdultSpawn() {
	var adult_region = "";
	var adult_from = "";
	
	if(SpoilerJSON["entrances"]["Adult Spawn -> Temple of Time"] == undefined) {
		adult_region = "Temple of Time";
		document.getElementById("simLog").value = "Adult Spawn: Temple of Time\n" + document.getElementById("simLog").value;
	}
	else if(SpoilerJSON["entrances"]["Adult Spawn -> Temple of Time"] instanceof Object) {
		adult_region = SpoilerJSON["entrances"]["Adult Spawn -> Temple of Time"]["region"];
		adult_from = SpoilerJSON["entrances"]["Adult Spawn -> Temple of Time"]["from"];
		document.getElementById("simLog").value = "Adult Spawn: " + adult_region + " from " + adult_from + "\n" + document.getElementById("simLog").value;
	}
	else {
		adult_region = SpoilerJSON["entrances"]["Adult Spawn -> Temple of Time"];
		document.getElementById("simLog").value = "Adult Spawn: " + adult_region + "\n" + document.getElementById("simLog").value;
	}
	
	input = "";
	if (adult_region == "DMC Great Fairy Fountain")
		input = "dmcf";
	else if (adult_region == "DMC Lower Local" || adult_region == "GC Darunias Chamber")
		input = "dmcl";
	else if (adult_region == "DMT Great Fairy Fountain")
		input = "dmtf";
	else if (adult_region == "Death Mountain Summit" || adult_region == "DMC Upper Local")
		input = "dmcu";
	else if (adult_region == "Gerudo Fortress" || adult_region == "GF Outside Gate" || adult_region == "GV Carpenter Tent" || adult_region == "GV Fortress Side" || adult_region == "Wasteland Near Fortress")
		input = "gf";
	else if (adult_region == "GC Shop")
		input = "gcshop";
	else if (adult_region == "Graveyard Warp Pad Region")
		input = "noc";
	else if (adult_region == "LH Fishing Hole" || adult_region == "LH Fishing Island")
		input = "fish";
	else if (adult_region == "LW Beyond Mido" || adult_region == "SFM Entryway" || adult_region == "Sacred Forest Meadow")
		input = "sfm";
	else if (adult_region == "ZD Shop")
		input = "zdshop";
	else if (adult_region == "Zoras Domain" || adult_region == "ZR Behind Waterfall")
		input = "zd";
	else if (adult_region == "OGC Great Fairy Fountain")
		input = "ogc";
	else if (adult_region == "Kak Impas Rooftop")
		input = "kakr";
	
	document.getElementById("markAdultLocation").value = input;
	document.getElementById("simCheckAdultSpawn").style.display = "none";
}

function simCheckLightArrowHint() {
	for(l = 0; l < Locations.length; l++){
		if(SpoilerJSON["locations"][LocationToSpoilerName[Locations[l]]] == "Light Arrows") {
			for(a = 1; a < AreaIndexes.length; a++) {
				if(l >= AreaIndexes[a-1] && l < AreaIndexes[a]) {
					document.getElementById("simLog").value = "Light Arrows can be found in " + AreaNamesLong[a] + ".\n" + document.getElementById("simLog").value;
				}
			}
		}
	}
	document.getElementById("simCheckLightArrowHint").style.display = "none";
}

simWothsEntered = {};
simWothCounter = 1;
simPathsEntered = {};
simPathCounter = 1;
simBarrensEntered = {};
simBarrenCounter = 1;

bossInputs = {
	"Queen Gohma" : "go",
	"King Dodongo" : "ki",
	"Barinade" : "ba",
	"Phantom Ganon" : "ph",
	"Volvagia" : "vo",
	"Morpha" : "mo",
	"Bongo Bongo" : "bo",
	"Twinrova" : "tw",
	"Evil's Bane" : "ev",
	"Hero" : "he",
	"Time" : "ti"
};

function simProcessHint(hint, str) {
	let dualHints = [
		"Great Fairies outside Hyrule and Ganon's castles",
		"a diving game and a torch run",
		"inside the Royal Family Tomb",
		"riding the bean in Lake Hylia",
		"biggest fish as child and as an adult",
		"the crate and waterfall",
		"Gerudo Horseback Archery rewards",
		"music-loving Goron and skull kid",
		"Bombchu Bowling Alley",
		
		"Dead Hand in the well",
		"final treasures of Ice Cavern",
		"entrance of the Fire Temple",
		"scarecrow and a flare dancer",
		"chests past Dark Link",
		"invisible spinning blade in the Shadow Temple",
		"wooden walls in the Shadow Temple",
		"crawl spaces in the Spirit Temple",
		"Spirit Temple boulders and a melody",
		"Colossus's right and left hands",
		"within the Spirit Trial"
	]
	
	if(hint.includes("way of the hero")) {
		if(simWothCounter <= 7) {
			theArea = SpoilerJSON["gossip_stones"][LocationToSpoilerName[str]]["text"].split('#')[1];
			
			if(theArea.startsWith("the "))
				theArea = theArea.replace("the ", "");
			
			if(simWothsEntered[theArea] == undefined)
				simWothsEntered[theArea] = 1;
			else
				simWothsEntered[theArea] += 1;
			
			if(simWothsEntered[theArea] == 1 || simWothsEntered[theArea] == 3 || simWothsEntered[theArea] == 5) {
				document.getElementById("woth_input" + simWothCounter).value = SpoilerAreaToInput[theArea];
				simWothCounter += 1;
			}
		}
	}
	else if (hint.includes("on the path")) {
		if(simPathCounter <= 7) {
			theArea = SpoilerJSON["gossip_stones"][LocationToSpoilerName[str]]["text"].split('#')[1];
			theBoss = SpoilerJSON["gossip_stones"][LocationToSpoilerName[str]]["text"].split('#')[3];
			
			if(theArea.startsWith("the "))
				theArea = theArea.replace("the ", "");
			
			if(simPathsEntered[theArea + " -> " + theBoss] == undefined)
				simPathsEntered[theArea + " -> " + theBoss] = 1;
			else
				simPathsEntered[theArea + " -> " + theBoss] += 1;
			
			if(simPathsEntered[theArea + " -> " + theBoss] == 1 || simPathsEntered[theArea + " -> " + theBoss] == 3 || simPathsEntered[theArea + " -> " + theBoss] == 5) {
				document.getElementById("woth_input" + simPathCounter).value = SpoilerAreaToInput[theArea];
				document.getElementById("path_boss" + simPathCounter).value = bossInputs[theBoss];
				simPathCounter += 1;
			}
		}
	}
	else if (hint.includes("major item")) {
		if(simPathCounter <= 7) {
			theArea = SpoilerJSON["gossip_stones"][LocationToSpoilerName[str]]["text"].split('#')[1];
			theBoss = SpoilerJSON["gossip_stones"][LocationToSpoilerName[str]]["text"].split('#')[3];
			
			if(theArea.startsWith("the "))
				theArea = theArea.replace("the ", "");
			
			if(simPathsEntered[theArea + " -> " + theBoss] == undefined)
				simPathsEntered[theArea + " -> " + theBoss] = 1;
			else
				simPathsEntered[theArea + " -> " + theBoss] += 1;
			
			if(simPathsEntered[theArea + " -> " + theBoss] == 1 || simPathsEntered[theArea + " -> " + theBoss] == 3 || simPathsEntered[theArea + " -> " + theBoss] == 5) {
				document.getElementById("woth_input" + simPathCounter).value = SpoilerAreaToInput[theArea];
				document.getElementById("path_boss" + simPathCounter).value = theBoss;
				simPathCounter += 1;
			}
		}
	}
	else if(hint.includes("foolish choice")) {
		if(simBarrenCounter <= 5) {
			theArea = SpoilerJSON["gossip_stones"][LocationToSpoilerName[str]]["text"].split('#')[1];
			
			if(theArea.startsWith("the "))
				theArea = theArea.replace("the ", "");
			
			if(simBarrensEntered[theArea] == undefined)
				simBarrensEntered[theArea] = 1;
			else
				simBarrensEntered[theArea] += 1;
			
			if(simBarrensEntered[theArea] == 1) {
				document.getElementById("barren_input" + simBarrenCounter).value = SpoilerAreaToInput[theArea];
				simBarrenCounter += 1;
			}
		}
	}
	else {
		let isDualHint = false;
		for(let x = 0; x < dualHints.length; x++) {
			if(hint.includes(dualHints[x])) {
				var loc1 = SpoilerJSON["gossip_stones"][LocationToSpoilerName[str]]["hinted_locations"][0];
				var loc2 = SpoilerJSON["gossip_stones"][LocationToSpoilerName[str]]["hinted_locations"][1];
				
				var temp_item = "";
				if(SpoilerItemToInput[SpoilerJSON["gossip_stones"][LocationToSpoilerName[str]]["hinted_items"][0]] == undefined)
					if(!songSpots.includes(SpoilerLocationToLocationName[loc1]))
						temp_item = "x";
					else
						temp_item = "pre";
				else
					temp_item = SpoilerItemToInput[SpoilerJSON["gossip_stones"][LocationToSpoilerName[str]]["hinted_items"][0]];
				
				var temp_item2 = "";
				if(SpoilerItemToInput[SpoilerJSON["gossip_stones"][LocationToSpoilerName[str]]["hinted_items"][1]] == undefined)
					if(!songSpots.includes(SpoilerLocationToLocationName[loc2]))
						temp_item2 = "x";
					else
						temp_item2 = "pre";
				else
					temp_item2 = SpoilerItemToInput[SpoilerJSON["gossip_stones"][LocationToSpoilerName[str]]["hinted_items"][1]];
				
				if(Check[SpoilerLocationToLocationName[loc1]] == "unknown")
					document.getElementById(SpoilerLocationToLocationName[loc1]).value = capitalizeFirstLetter(temp_item);
				Hinted[SpoilerLocationToLocationName[loc1]] = true;
				if(Check[SpoilerLocationToLocationName[loc2]] == "unknown")
					document.getElementById(SpoilerLocationToLocationName[loc2]).value = capitalizeFirstLetter(temp_item2);
				Hinted[SpoilerLocationToLocationName[loc2]] = true;
				isDualHint = true;
				break;
			}
		}
		if(!isDualHint) { // always or sometimes hint
			var loc = SpoilerJSON["gossip_stones"][LocationToSpoilerName[str]]["hinted_locations"];
			var loc_input = SpoilerHintLocationToInput[loc];
		
			var temp_item = "";
			if(SpoilerItemToInput[SpoilerJSON["gossip_stones"][LocationToSpoilerName[str]]["hinted_items"]] == undefined)
				if(!songSpots.includes(SpoilerLocationToLocationName[loc]))
					temp_item = "x";
				else
					temp_item = "pre";
			else
				temp_item = SpoilerItemToInput[SpoilerJSON["gossip_stones"][LocationToSpoilerName[str]]["hinted_items"]];
			
			if(document.getElementById("hintInput").value.includes(loc_input + " \n"))
				document.getElementById("hintInput").value = document.getElementById("hintInput").value.replace(loc_input + " \n", loc_input + " " + temp_item + "\n");
			else if(!document.getElementById("hintInput").value.includes(loc_input + " " + temp_item + "\n"))
				document.getElementById("hintInput").value += loc_input + " " + temp_item + "\n";
		}
	}
	
}