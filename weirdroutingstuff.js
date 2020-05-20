function weird_routing_stuff() {
	var str = document.getElementById("next").value;
	if (str.length == 3) {
		for (var i = 0; i < Names.length; i++) {
			if (document.getElementById("text_next").innerHTML == Names[i]) {
				if (document.getElementById(Locations[i]).style.display == "none") {
				document.getElementById("next").value = "";
				str = "";
				lastCheck = Locations[i];
				}
				else {
				document.getElementById(Locations[i]).value = str;
				}
			}
		}
	}
	
	document.getElementById("text_next").innerHTML = next_check(lastCheck);
}
function hint() {
	document.getElementById("next").style.display = "none"; document.getElementById("text_next").style.color = "pink";
}
function peak() {
	document.getElementById("next").style.display = "none"; document.getElementById("text_next").style.color = "A5F2F3";
}
function check() {
	document.getElementById("next").style.display = "inline-block"; document.getElementById("text_next").style.color = "lightblue";
}

function prompt() {
	document.getElementById("next").style.display = "none"; document.getElementById("text_next").style.color = "orange";
}	
function order() {
	document.getElementById("next").style.display = "none"; document.getElementById("text_next").style.color = "red";
}
	
function switchAge() {
	if (age == "child") {
		document.getElementById("ageButton").src = "./images/man_1f468.png";
		age = "adult";
		lastCheck = "adult"
	}
	else {
		document.getElementById("ageButton").src = "./images/child_1f9d2.png";
		age = "child";
		lastCheck = "child";
	}
}


function safetyLevel() {
	if (document.getElementById("safetyButton").innerHTML == "Be Safe") {
		document.getElementById("safetyButton").innerHTML = "Go Pepega";
		safetyMod = 1.6;
	}
	else if (document.getElementById("safetyButton").innerHTML == "Go Pepega") {
		document.getElementById("safetyButton").innerHTML = "Aim Intervention";
		safetyMod = 9001;
	}
	else if (document.getElementById("safetyButton").innerHTML == "Aim Intervention") {
		document.getElementById("safetyButton").innerHTML = "risky";
		safetyMod = .65;
	}
	else if (document.getElementById("safetyButton").innerHTML == "risky") {
		document.getElementById("safetyButton").innerHTML = "Be Safe";
		safetyMod = 1;
	}
}

function detour(x,y) {
	if ((Game.checks_remaining + progressiveAvail * 5 + progressivePool * 3 + Game.logically_accessible * 3) / knowMode / safetyMod / Math.max(10,x)^.2 > 1) {return true;} 
	else {return false;}
}

function junk_next() {
	var str = document.getElementById("text_next").innerHTML;
		for (var i = 0; i < Names.length; i++) {
			if (str == Names[i]) {
					junk(document.getElementById("text_" + Locations[i]));
					return;
			}
		}
	if (str == "Enough for Deku?") {
		if (event.button == 0) {
			lastCheck = "deku";
			dekutod = true;
			Update();
			return;
		}
		else if (event.button == 2) {
			lastCheck = "nodeku";
			dekutod = false;
			Update();
			return;
		}
	}
	if (str == "GV SQ?") {
		if (event.button == 0) {
			lastCheck = "gvsq";
			if(document.getElementById("text_" + Locations[13]) != null) {document.getElementById("text_" + Locations[13]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[14]) != null) {document.getElementById("text_" + Locations[14]).dispatchEvent(new Event('mousedown'));}
			Update();
			return;
		}
		else if (event.button == 2) {
			lastCheck = "gerudovalley_waterfall";
			Update();
			return;
		}
	}
	if (str == "Go Adult") {
		if (event.button == 0) {
			document.getElementById("ageButton").click();
			Update();
			return;
		}
	}
	if (str == "Go Child") {
		if (event.button == 0) {
			document.getElementById("ageButton").click();
			Update();
			return;
		}
	}
	for (var i = 0; i < hintStones.length; i++) {
		if (document.getElementById("text_next").innerHTML == hintStones[i]) {
			readYet[i] = true;
			lastCheck = hintStones[i];
			Update();
			return;
		}
	}
	
}

function warp() {

}


function next_check(x) {
	if (document.getElementById("mido_1") != null) {check(); return "Kokiri: Mido's 1"}
	if (document.getElementById("mido_2") != null) {check(); return "Kokiri: Mido's 2"}
	if (document.getElementById("mido_3") != null) {check(); return "Kokiri: Mido's 3"}
	if (document.getElementById("mido_4") != null) {check(); return "Kokiri: Mido's 4"}
	if (x.startsWith("mido")) {
		if (Check.mido_1 != "junk" || Check.mido_2 != "junk" || Check.mido_3 != "junk" || Check.mido_4 != "junk") {check(); return "Kokiri: Sword"}
		else {prompt(); return "Enough for Deku?"}
	}
	if (x == "deku") {hint(); return "Kokiri: Left Deku Hint";}
	
	if (x == "nodeku" && Game.has_chus) {hint(); return "Field: Remote Gr. Hint";}
	if (x == "nodeku") {hint(); return "Field: Open Gr. Hint";}
	
	if (x == "Kokiri: Left Deku Hint") {hint(); return "Kokiri: Right Deku Hint";}
	
	if (x == "Field: Open Gr. Hint" && !checkedYet[10] && Area[3] != "barren") {check(); return "Field: Open Gr.";}
	if (x == "Field: Open Gr. Hint") {check(); lastCheck = "hyrule_open_grotto"; Update(); return;}
	
	if (x == "hyrule_open_grotto") {
		if (Game.has_chus && !checkedYet[10] && Area[3] != "barren" && detour(60,3)) {check(); return "Field: Scrub Gr.";}
		if (Game.has_chus && !checkedYet[9] && Area[3] != "barren" && detour(60,3)) {check(); return "Field: Remote Gr.";}
		if (!dekutod && !readYet[11] && Logic.water_medallion_location == "unknown" && Check.zeldasSpot == null) {hint(); return "Hylia: After Valley Hint";}
		if (dekutod && !checkedYet[14] && Area[4] != "barren" && Logic.water_medallion_location == "unknown" && Check.zeldasSpot == null) {check(); return "Valley: Box";}
		if (!checkedYet[24] && Area[6] != "barren" && Logic.water_medallion_location == "unknown" && Check.zeldasSpot == null) {check(); return "Market: Big Rich";}
		if (!readYet[14] && Logic.water_medallion_location == "unknown" && Check.zeldasSpot == null) {hint(); return "Hyrule Castle: First Hint";}
	}
	
	if (x == "Field: Remote Gr. Hint" && !checkedYet[9] && Area[3] != "barren") {check(); return "Field: Remote Gr.";}
	if (x == "Field: Remote Gr. Hint") {check(); lastCheck = "hyrule_forest_boulder"; Update(); return;}
	
	if (x == "hyrule_forest_boulder") {
		if (!checkedYet[245] && (readYet[7]) && age == "child" && !checkedYet[24] && Area[6] != "barren") {check(); return "Market: Big Rich";}
		if (!checkedYet[245] && (readYet[7]) && age == "child" && (checkedYet[24] || Area[6] == "barren")) {hint(); return "Hyrule Castle: First Hint";}
		if (!checkedYet[245] && !readYet[7] && age == "child") {check(); return "Field: Open Gr."}
		if (!detour(3,10)) {check(); return "Field: Open Gr.";}
		if (!detour(3,11)) {check(); return "Field: Scrub Gr.";}
		return warp();
	}
	
	if (x == "Kokiri: Left Deku Hint") {
		return "Kokiri: Right Deku Hint";
	}
	if (x == "Kokiri: Right Deku Hint" && Area[12] != "barren") {
		check(); return "Deku: Lobby"; 
	}
	
	if (x == "deku_lobby") {
		if (!detour(37,12,40)) {
			check(); return "Deku: Sling 1";
		}
		return warp();
	}
	if (x == "deku_slingshot") {
		if (!detour(6,12,41)) {
			check(); return "Deku: Sling 2";
		}
		return warp();
	}
	if (x == "deku_slingshot_room_side") {
		if (!detour(50,12,42)) {
			check(); return "Deku: Compass 1";
		}
		return warp();
	}
	if (x == "deku_compass") {
		if (!detour(18,12,43)) {
			check(); return "Deku: Compass 2";
		}
		return warp();
	}
	if (x == "deku_compass_room_side") {
		if (!detour(34,12,44)) {
			check(); return "Deku: Basement";
		}
		return warp();
	}
	if (x == "deku_basement") {
		if (!detour(90,12,45)) {
			check(); return "Deku: Queen";
		}
		return warp();
	}
	if (x == "deku_queen_gohma") {
		if (!checkedYet[254] && !readYet[5] && Game.requiem) {hint(); return "Colossus: Hint";}
		if (checkedYet[245] && !checkedYet[247] && !readYet[24]) {hint(); return "Kokiri: LW Hint";}
		if (checkedYet[245] && checkedYet[247]) {order(); return "Go Adult";}
		if (!checkedYet[245] && !checkedYet[9] && Area[3] != "barren" && Game.has_chus) {hint(); return "Field: Remote Gr. Hint";}
		if (!checkedYet[245] && !checkedYet[10] && Area[3] != "barren") {hint(); return "Field: Open Gr. Hint";}
		if (!checkedYet[245] && !checkedYet[14] && Area[4] != "barren" && Area[5] != "barren") {check(); return "Valley: Box";}
		if (!checkedYet[245] && !checkedYet[14] && Area[4] != "barren" && Area[5] == "barren") {prompt(); return "GV SQ?";}
		if (!checkedYet[245] && !checkedYet[24] && Area[6] != "barren") {check(); return "Market: Big Rich";}
		return warp();
	}
	
	//DODONGOS
	if (x == "dodongos_map") {
		if (Game.has_chus && !detour(30,16,62)) {check(); return "Dodongos: Compass";}
		if (dodongosRequired > .9 && Game.has_chus) {check(); return "Dodongos: King";}
		if (!detour(0,19,77)) {check(); return "Kakariko: Roof";} if (!detour(0,19,79)) {check(); return "Kakariko: Windmill";} if (!checkedYet[248]) {check(); return "Windmill";}
		if (!Game.bolero && (Game.hover_boots || Game.hookshot) && (Game.has_chus || Game.goron_bracelet || Game.bow || Game.can_use_dins) && !checkedYet[250]) {
			if (!detour(8,17,69) && Game.has_chus) {check(); return "Trail: Wall"} if (!detour(0,17,68)) {check(); return "Trail: Top"} if (!detour(20,17,70) && Game.storms) {hint(); return "Trail: Gr. Hint"}
			if (!detour(15,15,59) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 3!";} if (!detour(20,15,57) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 1";}
			if (!detour(3,18,73) && !Game.hover_boots) {peak(); return "Peak Crater Bean";} if (!detour(3,18,73) && Game.hover_boots) {check(); return "Crater: Bean";} if (!checkedYet[252]) {check(); return "Crater";}
		}
		if (Game.minuet && (Game.has_chus || Game.hammer) && !checkedYet[253]) {check(); return "Meadow";}
		if (Game.bolero && (Game.hookshot || Game.hover_boots) && !checkedYet[252]) {check(); return "Crater";}
		return warp();
	}
	if (x == "dodongos_compass") {
		if (Game.has_chus && !detour(30,16,62)) {check(); return "Dodongos: Compass";}
		if (dodongosRequired > .9 && Game.has_chus) {check(); return "Dodongos: Platform";}
		if (!detour(0,19,77)) {check(); return "Kakariko: Roof";} if (!detour(0,19,79)) {check(); return "Kakariko: Windmill";} if (!checkedYet[248]) {check(); return "Windmill";}
		if (!Game.bolero && (Game.hover_boots || Game.hookshot) && (Game.has_chus || Game.goron_bracelet || Game.bow || Game.can_use_dins) && !checkedYet[250]) {
			if (!detour(8,17,69) && Game.has_chus) {check(); return "Trail: Wall"} if (!detour(0,17,68)) {check(); return "Trail: Top"} if (!detour(20,17,70) && Game.storms) {hint(); return "Trail: Gr. Hint"}
			if (!detour(15,15,59) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 3!";} if (!detour(20,15,57) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 1";}
			if (!detour(3,18,73) && !Game.hover_boots) {peak(); return "Peak Crater Bean";} if (!detour(3,18,73) && Game.hover_boots) {check(); return "Crater: Bean";} if (!checkedYet[252]) {check(); return "Crater";}
		}
		if (Game.minuet && (Game.has_chus || Game.hammer) && !checkedYet[253]) {check(); return "Meadow";}
		if (Game.bolero && (Game.hookshot || Game.hover_boots) && !checkedYet[252]) {check(); return "Crater";}
		return warp();
	}
	if (x == "dodongos_bomb_flower_platform") {
		if (Game.has_chus && !detour(30,16,62)) {check(); return "Dodongos: Bomb Bag";}
		if (dodongosRequired > .9 && Game.has_chus) {check(); return "Dodongos: King";}
		if (!detour(0,19,77)) {check(); return "Kakariko: Roof";} if (!detour(0,19,79)) {check(); return "Kakariko: Windmill";} if (!checkedYet[248]) {check(); return "Windmill";}
		if (!Game.bolero && (Game.hover_boots || Game.hookshot) && (Game.has_chus || Game.goron_bracelet || Game.bow || Game.can_use_dins) && !checkedYet[250]) {
			if (!detour(8,17,69) && Game.has_chus) {check(); return "Trail: Wall"} if (!detour(0,17,68)) {check(); return "Trail: Top"} if (!detour(20,17,70) && Game.storms) {hint(); return "Trail: Gr. Hint"}
			if (!detour(15,15,59) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 3!";} if (!detour(20,15,57) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 1";}
			if (!detour(3,18,73) && !Game.hover_boots) {peak(); return "Peak Crater Bean";} if (!detour(3,18,73) && Game.hover_boots) {check(); return "Crater: Bean";} if (!checkedYet[252]) {check(); return "Crater";}
		}
		if (Game.minuet && (Game.has_chus || Game.hammer) && !checkedYet[253]) {check(); return "Meadow";}
		if (Game.bolero && (Game.hookshot || Game.hover_boots) && !checkedYet[252]) {check(); return "Crater";}
		return warp();
	}
	if (x == "dodongos_bomb_bag") {
		if (Game.has_chus && !detour(30,16,62)) {check(); return "Dodongos: Bridge";}
		if (dodongosRequired > .9 && Game.has_chus) {check(); return "Dodongos: King";}
		if (!detour(0,19,77)) {check(); return "Kakariko: Roof";} if (!detour(0,19,79)) {check(); return "Kakariko: Windmill";} if (!checkedYet[248]) {check(); return "Windmill";}
		if (!Game.bolero && (Game.hover_boots || Game.hookshot) && (Game.has_chus || Game.goron_bracelet || Game.bow || Game.can_use_dins) && !checkedYet[250]) {
			if (!detour(8,17,69) && Game.has_chus) {check(); return "Trail: Wall"} if (!detour(0,17,68)) {check(); return "Trail: Top"} if (!detour(20,17,70) && Game.storms) {hint(); return "Trail: Gr. Hint"}
			if (!detour(15,15,59) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 3!";} if (!detour(20,15,57) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 1";}
			if (!detour(3,18,73) && !Game.hover_boots) {peak(); return "Peak Crater Bean";} if (!detour(3,18,73) && Game.hover_boots) {check(); return "Crater: Bean";} if (!checkedYet[252]) {check(); return "Crater";}
		}
		if (Game.minuet && (Game.has_chus || Game.hammer) && !checkedYet[253]) {check(); return "Meadow";}
		if (Game.bolero && (Game.hookshot || Game.hover_boots) && !checkedYet[252]) {check(); return "Crater";}
		return warp();
	}
	if (x == "dodongos_end_of_bridge") {
		if (Game.has_chus && !detour(30,16,62)) {check(); return "Dodongos: Above King";}
		if (dodongosRequired > .9 && Game.has_chus) {check(); return "Dodongos: King";}
		if (!detour(0,19,77)) {check(); return "Kakariko: Roof";} if (!detour(0,19,79)) {check(); return "Kakariko: Windmill";} if (!checkedYet[248]) {check(); return "Windmill";}
		if (!Game.bolero && (Game.hover_boots || Game.hookshot) && (Game.has_chus || Game.goron_bracelet || Game.bow || Game.can_use_dins) && !checkedYet[250]) {
			if (!detour(8,17,69) && Game.has_chus) {check(); return "Trail: Wall"} if (!detour(0,17,68)) {check(); return "Trail: Top"} if (!detour(20,17,70) && Game.storms) {hint(); return "Trail: Gr. Hint"}
			if (!detour(15,15,59) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 3!";} if (!detour(20,15,57) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 1";}
			if (!detour(3,18,73) && !Game.hover_boots) {peak(); return "Peak Crater Bean";} if (!detour(3,18,73) && Game.hover_boots) {check(); return "Crater: Bean";} if (!checkedYet[252]) {check(); return "Crater";}
		}
		if (Game.minuet && (Game.has_chus || Game.hammer) && !checkedYet[253]) {check(); return "Meadow";}
		if (Game.bolero && (Game.hookshot || Game.hover_boots) && !checkedYet[252]) {check(); return "Crater";}
		return warp();
	}
	if (x == "dodongos_above_king") {
		if ((dodongosRequired > .9 || !detour(30,16,62)) && Game.has_chus) {check(); return "Dodongos: King";}
		if (!detour(0,19,77)) {check(); return "Kakariko: Roof";} if (!detour(0,19,79)) {check(); return "Kakariko: Windmill";} if (!checkedYet[248]) {check(); return "Windmill";}
		if (!Game.bolero && (Game.hover_boots || Game.hookshot) && (Game.has_chus || Game.goron_bracelet || Game.bow || Game.can_use_dins) && !checkedYet[250]) {
			if (!detour(8,17,69) && Game.has_chus) {check(); return "Trail: Wall"} if (!detour(0,17,68)) {check(); return "Trail: Top"} if (!detour(20,17,70) && Game.storms) {hint(); return "Trail: Gr. Hint"}
			if (!detour(15,15,59) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 3!";} if (!detour(20,15,57) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 1";}
			if (!detour(3,18,73) && !Game.hover_boots) {peak(); return "Peak Crater Bean";} if (!detour(3,18,73) && Game.hover_boots) {check(); return "Crater: Bean";} if (!checkedYet[252]) {check(); return "Crater";}
		}
		if (Game.minuet && (Game.has_chus || Game.hammer) && !checkedYet[253]) {check(); return "Meadow";}
		if (Game.bolero && (Game.hookshot || Game.hover_boots) && !checkedYet[252]) {check(); return "Crater";}
		return warp();
	}
	if (x == "dodongos_king_dodongo") {
		if (!detour(0,19,77)) {check(); return "Kakariko: Roof";} if (!detour(0,19,79)) {check(); return "Kakariko: Windmill";} if (!checkedYet[248]) {check(); return "Windmill";}
		if (!Game.bolero && (Game.hover_boots || Game.hookshot) && (Game.has_chus || Game.goron_bracelet || Game.bow || Game.can_use_dins) && !checkedYet[250]) {
			if (!detour(8,17,69) && Game.has_chus) {check(); return "Trail: Wall"} if (!detour(0,17,68)) {check(); return "Trail: Top"} if (!detour(20,17,70) && Game.storms) {hint(); return "Trail: Gr. Hint"}
			if (!detour(15,15,59) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 3!";} if (!detour(20,15,57) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 1";}
			if (!detour(3,18,73) && !Game.hover_boots) {peak(); return "Peak Crater Bean";} if (!detour(3,18,73) && Game.hover_boots) {check(); return "Crater: Bean";} if (!checkedYet[252]) {check(); return "Crater";}
		}
		if (Game.minuet && (Game.has_chus || Game.hammer) && !checkedYet[253]) {check(); return "Meadow";}
		if (Game.bolero && (Game.hookshot || Game.hover_boots) && !checkedYet[252]) {check(); return "Crater";}
		return warp();
	}
	
	//JABU
	if (x == "jabu_map") {
		if (!detour(30,26,111)) {check(); "Jabu: Compass";}
		if (jabuRequired > .9) {check(); "Jabu: Barinade";}
		return warp();
	}
	if (x == "jabu_compass") {
		if (!detour(30,26,112)) {check(); "Jabu: Boomerang";}
		if (jabuRequired > .9) {check(); "Jabu: Barinade";}
		return warp();
	}
	if (x == "jabu_boomerang") {
		if (!detour(240,26,113) || jabuRequired > .9) {check(); "Jabu: Barinade";}
		return warp();
	}
	if (x == "jabu_barinade") {
		if (!detour(45,10,32)) {hint(); "Fountain: By Fairy Hint";}
		return warp();
	}
	
	//FOREST
	if (x == "forest1") {
		if (!detour(59,27,115)) {check(); "Forest: Stalfos";}
		if ((!detour(40,14,53) && Game.can_blast_or_smash && checkedYet[247]) || (!detour(40,14,53) && Game.can_blast_or_smash && checkedYet[247]) || (!detour(40,13,48) && Game.can_blast_or_smash && checkedYet[247]) || ((Game.can_blast_or_smash || Game.can_use_dins) && !checkedYet[250]) && !readYet[29]) {hint(); "SFM: Maze 2 Hint"}
		if (!detour(40,14,53) && Game.can_blast_or_smash && checkedYet[247]) {check(); "SFM: Wolfos Gr.";}
		if (!detour(40,13,48) && Game.can_blast_or_smash && checkedYet[247]) {check(); "Lost Woods: Scrub Gr.";}
		return warp();
	}
	
}	

/*sq + hint + sos = 62
sq + hint + sos + enter lw = 72
sq + enter lw = 43
enter lw > saria kid = 20
enter lw > saria kid + turn right = 27
enter lw > turn right = 6
enter lw > ock > gc area = 56
enter lw > gc area = 9
enter lw > target > gc area = 16
enter lw > gc = 12
enter lw > hint + generic = 25
generic > scrub = 34
generic > scrub + wolfos = 75
enter lw > hint + generic + gc = 33
gc > 3ch w/ chus = 100
gc > 3ch w/ chus > midoarea = 119
gc > 3ch w/o chus > midoarea = 130
enter lw > hint + generic + midoarea = 33
gc > rolldance w/o chus = 66*/