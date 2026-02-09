function wothAndBarrenProcessing() {
	
	NUM_WOTHS = 8;
	for( var i = 1; i <= 35; i++) {
	Area[i] = "normal";
	}
	
	wothAreas = ["", "", "", "", "", "", "", "", ""];
	AreaGoalPathBoss = ["", "", "", "", "", "", "", "", ""];

	for (var i = 1; i <= NUM_WOTHS; i++) {
		var wothInput = document.getElementById("woth_input" + i).value;
		wothInput = wothInput.replace("2","");
		const areaMapping = {
      "ko": 1, "kok": 1, "kf": 1, "koki": 1, "kfc": 1,
      "ra": 2, "llr": 2, "ranch": 2, "lon": 2, "ran": 2,
      "hf": 3, "fie": 3, "field": 3,
      "gv": 4, "val": 4, "valley": 4,
      "lh": 5, "hyl": 5, "hylia": 5, "lake": 5, "lak": 5,
      "mk": 6, "mkt": 6, "market": 6, "mar": 6, "mark": 6,
      "ca": 7, "hyr c": 7, "hcast": 7, "hc": 7, "cas": 7,
      "ou": 8, "ogc": 8, "out g": 8, "gfairy": 8, "og": 8, "out": 8,
      "to": 9, "tot": 9, "temple": 9, "time": 9,
      "zf": 10, "fountain": 10, "fount": 10, "fou": 10,
      "ic": 11, "ice": 11, "cavern": 11,
      "de": 12, "deku": 12, "dek": 12, "dt": 12,
      "lw": 13, "lost": 13, "woods": 13,
      "sf": 14, "sfm": 14, "mea": 14, "mead": 14,
      "go": 15, "gor": 15, "gc": 15, "goron": 15,
      "dc": 16, "dod": 16, "dodo": 16,
      "tr": 17, "tra": 17, "trail": 17, "dmt": 17,
      "cr": 18, "cra": 18, "crater": 18, "dmc": 18,
      "ka": 19, "kak": 19, "kaki": 19, "kv": 19,
      "gy": 20, "gra": 20, "grave": 20,
      "zr": 21, "riv": 21, "river": 21,
      "zd": 22, "dom": 22, "domain": 22,
      "co": 23, "col": 23, "colo": 23, "colossus": 23,
      "was": 24, "waste": 24, "wl": 24, "hw": 24,
      "th": 25, "thi": 25, "thieve": 25, "thieves": 25,
      "gf": 26, "fort": 26, "fortress": 26,
      "jj": 27, "jab": 27, "jabu": 27, "jjb": 27,
      "for": 28, "forest": 28, "fot": 28,
      "fir": 29, "fire": 29, "fit": 29,
      "sp": 30, "spi": 30, "spirit": 30, "sprt": 30,
      "sh": 31, "sha": 31, "shadow": 31, "shad": 31,
      "wat": 32, "wata": 32, "water": 32,
      "ga": 33, "gan": 33, "gan c": 33, "ganons": 33, "ganon": 33,
      "gt": 34, "gtg": 34, "tg": 34,
      "we": 35, "well": 35, "botw": 35, "wel": 35
    };

    const index = areaMapping[wothInput];
    if (index !== undefined) {
      Area[index] = "woth";
      wothAreas[i] = AreaNames[index];
    }
    
    if (i <= 5) {
      const inputElement = document.getElementById("barren_input" + i);
      if (inputElement) {
        const barrenInput = inputElement.value.trim().toLowerCase();
        const index = areaMapping[barrenInput];
        
        if (index !== undefined) {
          Area[index] = "barren";
        }
      }
    }
  
		if (document.getElementById("hints_type").value == "PATH") {
			var pathInput = document.getElementById("path_boss" + i).value.toLowerCase();
			
			if (pathInput.startsWith("de") || pathInput.startsWith("go")) {AreaGoalPathBoss[i] = "Gohma";} 
			if (pathInput.startsWith("do") || pathInput.startsWith("kd") || pathInput.startsWith("dc") || pathInput.startsWith("ki")) {AreaGoalPathBoss[i] = "Dodongo";} 
			if (pathInput.startsWith("ja") || pathInput.startsWith("ba")) {AreaGoalPathBoss[i] = "Barinade";} 
			if (pathInput.startsWith("fo") || pathInput.startsWith("ph") || pathInput.startsWith("pg")) {AreaGoalPathBoss[i] = "PG";} 
			if (pathInput.startsWith("fi") || pathInput.startsWith("vo")) {AreaGoalPathBoss[i] = "Volv";} 
			if (pathInput.startsWith("wa") || pathInput.startsWith("mo")) {AreaGoalPathBoss[i] = "Morpha";} 
			if (pathInput.startsWith("sp") || pathInput.startsWith("tw")) {AreaGoalPathBoss[i] = "Twinrova";} 
			if (pathInput.startsWith("sh") || pathInput.startsWith("bo")) {AreaGoalPathBoss[i] = "Bongo";}
			if (pathInput.startsWith("to")) {AreaGoalPathBoss[i] = "Tower";}
			if (pathInput.startsWith("ti")) {AreaGoalPathBoss[i] = "Time";}
			if (pathInput.startsWith("he")) {AreaGoalPathBoss[i] = "Hero";}
			if (pathInput.startsWith("ev")) {AreaGoalPathBoss[i] = "Evil's Bane";}
			if (pathInput == "0") {AreaGoalPathBoss[i] = "0 Important";} 
			if (pathInput == "1") {AreaGoalPathBoss[i] = "1 Important";} 
			if (pathInput == "2") {AreaGoalPathBoss[i] = "2 Important";} 
			if (pathInput == "3") {AreaGoalPathBoss[i] = "3 Important";} 
			if (pathInput == "4") {AreaGoalPathBoss[i] = "4 Important";} 
			if (pathInput == "5") {AreaGoalPathBoss[i] = "5 Important";} 
			if (pathInput == "6") {AreaGoalPathBoss[i] = "6 Important";} 
			if (pathInput == "7") {AreaGoalPathBoss[i] = "7 Important";} 
			if (pathInput == "8") {AreaGoalPathBoss[i] = "8 Important";} 
			if (pathInput == "9") {AreaGoalPathBoss[i] = "9 Important";} 
			if (pathInput == "10") {AreaGoalPathBoss[i] = "10 Important";} 
			if (pathInput.startsWith("li")) {AreaGoalPathBoss[i] = "Light Arrows";} 
		}
	}
	
	AreaColors = ["", "00ff88", " aaaa00", " ffff00", " ffaa00", " 00aaff", " aaaaaa", " 84FFFF", " FE0404", " ffffff", " 70ffff", " aaffff", " 996000", " 009000", " 80ff80", " ffcc00", " B35705", " 573E02", " ff5050", " 678C8A", " 8f8493", " 5DB8FE", " 00ffff", " cccc90", " cccc30", " ffff90", " ff0080", " 5FAF36", " ff0000", " 00cccc", " ffff50", " c900c9", " 990000", " ffcc60", " ff00ff"];
	WotHColors = ["", "9cc4d9", "white", "b19cd9","d09cd9","cyan","9CD9C4","D9B19C"];

	for (var i = 1; i <= 35; i++) {
		if (Area[i] == "woth" && AreaWotHAge[i] != 1) {
			if (woth1 == "unknown" || !Area[AreaNames.indexOf(woth1)].includes("woth")) {document.getElementById("woth1_title").innerHTML = AreaNames[i]; woth1 = AreaNames[i];}
			else if (woth2 == "unknown" || !Area[AreaNames.indexOf(woth2)].includes("woth")) {document.getElementById("woth2_title").innerHTML = AreaNames[i]; woth2 = AreaNames[i];}
			else if (woth3 == "unknown" || !Area[AreaNames.indexOf(woth3)].includes("woth")) {document.getElementById("woth3_title").innerHTML = AreaNames[i]; woth3 = AreaNames[i];}
			else if (woth4 == "unknown" || !Area[AreaNames.indexOf(woth4)].includes("woth")) {document.getElementById("woth4_title").innerHTML = AreaNames[i]; woth4 = AreaNames[i];}
			else if (woth5 == "unknown" || !Area[AreaNames.indexOf(woth5)].includes("woth")) {document.getElementById("woth5_title").innerHTML = AreaNames[i]; woth5 = AreaNames[i];}
			else if (woth6 == "unknown" || !Area[AreaNames.indexOf(woth6)].includes("woth")) {document.getElementById("woth6_title").innerHTML = AreaNames[i]; woth6 = AreaNames[i];}
			else if (woth7 == "unknown" || !Area[AreaNames.indexOf(woth7)].includes("woth")) {document.getElementById("woth7_title").innerHTML = AreaNames[i]; woth7 = AreaNames[i];}
			else if (woth8 == "unknown" || !Area[AreaNames.indexOf(woth8)].includes("woth")) {document.getElementById("woth8_title").innerHTML = AreaNames[i]; woth8 = AreaNames[i];}
			AreaWotHAge[i] = 1;
		}
		else if (Area[i] == "normal" || Area[i] == "barren") {
			if (woth1 == AreaNames[i]) {woth1 = "unknown"}
			if (woth2 == AreaNames[i]) {woth2 = "unknown"}
			if (woth3 == AreaNames[i]) {woth3 = "unknown"}
			if (woth4 == AreaNames[i]) {woth4 = "unknown"}
			if (woth5 == AreaNames[i]) {woth5 = "unknown"}
			if (woth6 == AreaNames[i]) {woth6 = "unknown"}
			if (woth7 == AreaNames[i]) {woth7 = "unknown"}
			if (woth8 == AreaNames[i]) {woth8 = "unknown"}
		AreaWotHAge[i] = 0;	
		}
	}

	var med_locations_found = 1;
	for (var i =0; i<8; i++) {
			if (Logic.emerald != dungeonStrings[i] && Logic.ruby != dungeonStrings[i] && Logic.sapphire != dungeonStrings[i] && Logic.emerald != "unknown" && Logic.ruby != "unknown" && Logic.sapphire != "unknown") {Location["med" + med_locations_found] = bossStrings[i]; med_locations_found += 1;}
	}

	if (!WotHItems.includes("med1")) { WotHItems.push("med1");}
	if (!WotHItems.includes("med2")) { WotHItems.push("med2");}
	if (!WotHItems.includes("med3")) { WotHItems.push("med3");}
	if (!WotHItems.includes("med4")) { WotHItems.push("med4");}
	if (!WotHItems.includes("med5")) { WotHItems.push("med5");}
	if (!WotHItems.includes("med6")) { WotHItems.push("med6");}
	if (!WotHItems.includes("light_arrows")) {WotHItems.push("light_arrows");}

		if (Known.bow1 && Known.bow2 && Known.bow3) {
			if (ChecksLockedBy.bow1.includes(Location.bow2) && ChecksLockedBy.bow1.includes(Location.bow3)) {if (!WotHItems.includes("bow1")) {WotHItems.push("bow1")}}
			if (ChecksLockedBy.bow2.includes(Location.bow1) && ChecksLockedBy.bow2.includes(Location.bow3)) {if (!WotHItems.includes("bow2")) {WotHItems.push("bow2")}}
			if (ChecksLockedBy.bow3.includes(Location.bow2) && ChecksLockedBy.bow3.includes(Location.bow1)) {if (!WotHItems.includes("bow3")) {WotHItems.push("bow3")}}
			}
		if (ChecksLockedBy.magic1.includes(Location.magic2)) {if (!WotHItems.includes("magic1")) {WotHItems.push("magic1")}}
		if (ChecksLockedBy.magic2.includes(Location.magic1)) {if (!WotHItems.includes("magic2")) {WotHItems.push("magic2")}}
		for (var i = 0; i<Items.length; i++) {
				for (var j = 0; j<WotHItems.length; j++){
					if (Location[WotHItems[j]] != null) {
						if (ChecksLockedBy[Items[i]].includes(Location[WotHItems[j]])) {
							
								if (!WotHItems.includes(Items[i])) {WotHItems.push(Items[i]);}
						}
					}
				}
		}
		for ( var d = 1; d <= 52; d++) {
			document.getElementById("confirmed_logically_required_" + d).style.display = "none";
		}
		var temp = 6;
		while (temp < WotHItems.length) {
		if (!Known[WotHItems[temp]]) {
			document.getElementById("confirmed_logically_required_" + (temp - 5)).src = ItemImages[Items.indexOf(WotHItems[temp])];
			document.getElementById("confirmed_logically_required_" + (temp - 5)).style.display = "inline-block";
		}
		temp++;
		}
		for (var i = 1; i <= 35; i++) {
			
			var wothRowNumber = 1;
			var wothNumber = 0;
			var tempnumber3 = 1;
			var tempbool = false;
		
			
			if (woth1 == AreaNames[i] || woth2 == AreaNames[i] || woth3 == AreaNames[i] || woth4 == AreaNames[i] || woth5 == AreaNames[i] || woth6 == AreaNames[i] || woth7 == AreaNames[i] || woth8 == AreaNames[i]) {
				
				if (woth1 == AreaNames[i]) {wothNumber = 1;}
				else if (woth2 == AreaNames[i]) {wothNumber = 2;}
				else if (woth3 == AreaNames[i]) {wothNumber = 3;}
				else if (woth4 == AreaNames[i]) {wothNumber = 4;}
				else if (woth5 == AreaNames[i]) {wothNumber = 5;}
				else if (woth6 == AreaNames[i]) {wothNumber = 6;}
				else if (woth7 == AreaNames[i]) {wothNumber = 7;}
				else if (woth8 == AreaNames[i]) {wothNumber = 8;}
				var tempArray = [];
				document.getElementById("woth" + wothNumber + "_text" + 1).innerHTML="";
				document.getElementById("woth" + wothNumber + "_text" + 2).innerHTML="";
				document.getElementById("woth" + wothNumber + "_text" + 3).innerHTML="";
				document.getElementById("woth" + wothNumber + "_text" + 4).innerHTML="";
				document.getElementById("woth" + wothNumber + "_text" + 5).innerHTML="";
				document.getElementById("woth" + wothNumber + "_text" + 6).innerHTML="";
				document.getElementById("woth" + wothNumber + "_text" + 7).innerHTML="";
				for (var k = 0; k<Items.length; k++) {
					if (Items[k] == "light_arrows" && document.getElementById("presets").value != "S8" && document.getElementById("presets").value != "S9") {continue;}
					if (Items[k] == "farores_wind" && document.getElementById("presets").value != "S9") {continue;}
					if (Items[k] == "serenade" && document.getElementById("presets").value != "S9") {continue;}
					if (Items[k] == "prelude" && document.getElementById("presets").value != "S9") {continue;}
					if (Items[k] == "lullaby" && document.getElementById("presets").value != "S9") {continue;}
					if (Items[k] == Check["zeldasSpot"]) {continue;}
					if (Location[Items[k]] != null && (Hinted[Location[Items[k]]] == false || typeof Hinted[Location[Items[k]]] == "undefined") && !alwaysHints.includes(Location[Items[k]])) {
						if ((Locations.indexOf(Location[Items[k]]) >= AreaIndexes[i-1] && Locations.indexOf(Location[Items[k]]) < AreaIndexes[i]) || Locations.indexOf(Location[Items[k]]) == SongIndexes[i-1] || Locations.indexOf(Location[Items[k]]) == SongIndexes2[i-1]) {
						    /*if (Items[k] == "slingshot1" && ((Logic.slingshot2 && !ChecksPutInLogicBy.slingshot1.includes(Location.slingshot2)) || (Logic.slingshot3 && !ChecksPutInLogicBy.slingshot1.includes(Location.slingshot3)))){continue}
							else if (Items[k] == "slingshot2" && ((Logic.slingshot1 && !ChecksPutInLogicBy.slingshot2.includes(Location.slingshot1)) || (Logic.slingshot3 && !ChecksPutInLogicBy.slingshot2.includes(Location.slingshot3)))){continue}
							else if (Items[k] == "slingshot3" && ((Logic.slingshot1 && !ChecksPutInLogicBy.slingshot3.includes(Location.slingshot1)) || (Logic.slingshot2 && !ChecksPutInLogicBy.slingshot3.includes(Location.slingshot2)))){continue}
							else if (Items[k] == "bomb_bag1" && ((Logic.bomb_bag2 && !ChecksPutInLogicBy.bomb_bag1.includes(Location.bomb_bag2)) || (Logic.bomb_bag3 && !ChecksPutInLogicBy.bomb_bag1.includes(Location.bomb_bag3)))){continue}
							else if (Items[k] == "bomb_bag2" && ((Logic.bomb_bag1 && !ChecksPutInLogicBy.bomb_bag2.includes(Location.bomb_bag1)) || (Logic.bomb_bag3 && !ChecksPutInLogicBy.bomb_bag2.includes(Location.bomb_bag3)))){continue}
							else if (Items[k] == "bomb_bag3" && ((Logic.bomb_bag1 && !ChecksPutInLogicBy.bomb_bag3.includes(Location.bomb_bag1)) || (Logic.bomb_bag2 && !ChecksPutInLogicBy.bomb_bag3.includes(Location.bomb_bag2)))){continue}
							else if (Items[k] == "bow1" && ((Logic.bow2 && !ChecksPutInLogicBy.bow1.includes(Location.bow2)) || (Logic.bow3 && !ChecksPutInLogicBy.bow1.includes(Location.bow3)))){continue}
							else if (Items[k] == "bow2" && ((Logic.bow1 && !ChecksPutInLogicBy.bow2.includes(Location.bow1)) || (Logic.bow3 && !ChecksPutInLogicBy.bow2.includes(Location.bow3)))){continue}
							else if (Items[k] == "bow3" && ((Logic.bow1 && !ChecksPutInLogicBy.bow3.includes(Location.bow1)) || (Logic.bow2 && !ChecksPutInLogicBy.bow3.includes(Location.bow2)))){continue}
							else if (Items[k] == "magic1" && Logic.magic2 && !ChecksPutInLogicBy.magic1.includes(Location.magic2)){continue}
							else if (Items[k] == "magic2" && Logic.magic1 && !ChecksPutInLogicBy.magic2.includes(Location.magic1)){continue}
							else if (Items[k] == "goron_tunic" && Logic.can_stop_link_the_goron && !ChecksPutInLogicBy.goron_tunic.includes("goron_link") && (Logic.wallet1 && !ChecksPutInLogicBy.goron_tunic.includes(Location.wallet1) || Logic.wallet2 && !ChecksPutInLogicBy.goron_tunic.includes(Location.wallet2))){continue}
							//else if (Items[k] == "fire_arrows" && Logic.dins_fire && !ChecksPutInLogicBy.fire_arrows.includes(Location.dins_fire)){continue}*/
							document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).innerHTML = "<img id = 'wothMajor" + k + wothNumber + "'" + " class = 'wothMajorImages' src=" + ItemImages[k] + ">"; 
							
							if(nerfed) {
								document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).innerHTML = "<img id = 'wothMajor" + k + wothNumber + "'" + " class = 'wothMajorImages' src=" + ItemImages[k] + " data-item = '" + Items[k] + "' onmousedown = 'markWothItem(this)'>";
								
								if(ManualWotHItems[Items[k]]) {
									document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).style.display = "block";
									document.getElementById("wothMajor" + k + wothNumber).className = "manualWothImages";
								}
								else if(ManualNotWotHItems[Items[k]]) {
									document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).style.display = "none";
									document.getElementById("wothMajor" + k + wothNumber).className = "notWothItemImages";
								}
								else {
									document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).style.display = "block";
									document.getElementById("wothMajor" + k + wothNumber).className = "wothMajorImages";
								}
							}
							
							if (WotHItems.includes(Items[k]) && !nerfed) {
								document.getElementById("wothMajor" + k + wothNumber).style.setProperty("-webkit-filter", "drop-shadow(0px 0px 5px lightblue)"); 
								tempnumber3 +=1;
								} 
							for (var j = 0; j < Items.length; j++) {
								if (ChecksLockedBy[Items[k]].includes(Location[Items[j]]) && !nerfed){
									document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).innerHTML += "<img id = 'wothMinor" + j + wothNumber + "'" + "class = 'wothImages' src=" + ItemImages[j] + ">";
									if (WotHItems.includes(Items[j])) {
										document.getElementById("wothMinor" + j + wothNumber).style.setProperty("-webkit-filter", "drop-shadow(0px 0px 5px lightblue)"); 
									} 
								}
							} 
							
							document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).innerHTML += "<span onmousedown = 'markWothItemArrow(this)' id = 'wothItemArrow" + wothNumber + "_" + k + "' data-item = '" + Items[k] + "' class = 'woth_item_arrow'> &#8594; </span>"; 
							
							if(MarkedWotHItemArrow == "wothItemArrow" + wothNumber + "_" + k)
								document.getElementById("wothItemArrow" + wothNumber + "_" + k).style.color = inLogicColor;
							
							if(ManualWotHItemLocked[Items[k]] != undefined) {
								for(var q = 0; q < ManualWotHItemLocked[Items[k]].length; q++) {
									for (var j = 0; j < Items.length; j++) {
										if(Items[j] == ManualWotHItemLocked[Items[k]][q]) {
											document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).innerHTML += "<img id = 'wothMinor" + j + wothNumber + "'" + "class = 'wothImages' data-item = '" + Items[j] + "' data-parent = '" + Items[k] + "'onmousedown = 'markMinorWothItem(this)' src=" + ItemImages[j] + ">";
											
											if (ManualWotHMinorItems[Items[j]]) {
												document.getElementById("wothMinor" + j + wothNumber).style.setProperty("-webkit-filter", "drop-shadow(0px 0px 5px yellow)"); 
											} 
										}
									}
								}
							}
							if(ManualWotHItemPutInLogic[Items[k]] != undefined) {
								for(var q = 0; q < ManualWotHItemPutInLogic[Items[k]].length; q++) {
									for (var j = 0; j < Items.length; j++) {
										if(Items[j] == ManualWotHItemPutInLogic[Items[k]][q]) {
											document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).innerHTML += "<img id = 'wothMinor" + j + wothNumber + "'" + "class = 'putInLogicByWothItemImages' data-item = '" + Items[j] + "' data-parent = '" + Items[k] + "'onmousedown = 'markMinorWothItem(this)' src=" + ItemImages[j] + ">";
											
											if (ManualWotHMinorItems[Items[j]]) {
											document.getElementById("wothMinor" + j + wothNumber).style.setProperty("-webkit-filter", "drop-shadow(0px 0px 5px yellow)"); 
											} 
										}
									}
								}
							}
							
							document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).innerHTML += " <br />"; wothRowNumber += 1; tempArray.push(Items[k]); 
						}
					} 	
				}
				var tempArray2 = [];
				for (k = 0; k < tempArray.length; k++) {
					var tempArray3 = [];
					for (l = 0; l < ChecksPutInLogicBy[tempArray[k]].length; l++) {
						if (Check[ChecksPutInLogicBy[tempArray[k]][l]] == "unknown") {
							tempArray3.push(ChecksPutInLogicBy[tempArray[k]][l]);
						}
					}
					tempArray2.push.apply(tempArray2, tempArray3);
				}
				
				document.getElementById("woth" + wothNumber + "_title").innerHTML = AreaNames[i];
			
				if (document.getElementById("hints_type").value == "PATH") {
					var addedArrow = false;
					for(var q = 1; q <= NUM_WOTHS; q++)
						if(wothAreas[q] == AreaNames[i] && AreaGoalPathBoss[q] != "") {
							if(!addedArrow) {
								document.getElementById("woth" + wothNumber + "_title").innerHTML += " &#8594; "; 
								addedArrow = true;
							}
							else
								document.getElementById("woth" + wothNumber + "_title").innerHTML += ", "; 
							document.getElementById("woth" + wothNumber + "_title").innerHTML += AreaGoalPathBoss[q];
						}
				}
				
				document.getElementById("woth" + wothNumber + "_title").style.color= WotHColors[wothNumber];
				if (AreaWotHAge[i] < tempnumber3) {
					document.getElementById("woth" + wothNumber + "_title").style.opacity = .2;
					if (wothNumber == 1) {woth1Locations =[];}
					if (wothNumber == 2) {woth2Locations = [];}
					if (wothNumber == 3) {woth3Locations = [];}
					if (wothNumber == 4) {woth4Locations =[];}
					if (wothNumber == 5) {woth5Locations = [];}
					if (wothNumber == 6) {woth6Locations = [];}
					if (wothNumber == 7) {woth7Locations = [];}
					if (wothNumber == 8) {woth8Locations = [];}
				}
				if (AreaWotHAge[i] >= tempnumber3) {
					document.getElementById("woth" + wothNumber + "_title").style.opacity = 1;
					if (wothNumber == 1) {woth1Locations = tempArray2.slice(0);}
					if (wothNumber == 2) {woth2Locations = tempArray2.slice(0);}
					if (wothNumber == 3) {woth3Locations = tempArray2.slice(0);}
					if (wothNumber == 4) {woth4Locations = tempArray2.slice(0);}
					if (wothNumber == 5) {woth5Locations = tempArray2.slice(0);}
					if (wothNumber == 6) {woth6Locations = tempArray2.slice(0);}
					if (wothNumber == 7) {woth7Locations = tempArray2.slice(0);}
					if (wothNumber == 8) {woth8Locations = tempArray2.slice(0);}
				}
			}
			
		}	
		
  const dungeonMappings = {
    12: { key: 'deku_checks_remaining', bossCheck: true },
    16: { key: 'dodongos_checks_remaining', bossCheck: true },
    27: { key: 'jabu_checks_remaining', bossCheck: true }
  };

  const uiMappings = {
    28: { id: "forest", action: "color" },
    29: { id: "fire",   action: "color" },
    30: { id: "spirit", action: "color" },
    31: { id: "shadow", action: "color" },
    32: { id: "water",  action: "color" },
    33: { id: "ganons", action: "click" },
    34: { id: "gtg",    action: "click" },
    35: { id: "well",   action: "click" }
  };

  for (let i = 1; i <= 35; i++) {
    AreaAge[i] = (Area[i] === "barren") ? (AreaAge[i] || 0) + 1 : 0;

    if (AreaAge[i] === 3) {
      hinted = true;
      thisIsHinted = true;

      if (i <= 27) {
        const dungeon = dungeonMappings[i];
        
        for (let j = AreaIndexes[i - 1]; j < AreaIndexes[i]; j++) {
          const loc = Locations[j];
          const isUnknown = Check[loc] === "unknown";
          const isNotHint = !loc.startsWith("h_");
          const isNotBoss = !(dungeon?.bossCheck && bossStrings.includes(loc));
          const isVisible = document.getElementById(loc).style.display != "none" && document.getElementById(loc).style.visibility != "hidden";

          if (isUnknown && isNotHint && isNotBoss && isVisible) {
            document.getElementById("text_" + loc).dispatchEvent(new Event('mousedown'));
          }
        }

        if (dungeon) {
          Player[dungeon.key] = 0;
          Player.checks_remaining -= 1;
        }
      } 
      else if (uiMappings[i]) {
        const item = uiMappings[i];
        const element = document.getElementById(item.id);
        
        if (item.action === "color") {
          element.style.color = "red";
        } else {
          element.click();
        }
      }
      
      hinted = false;
    }
  }
  
	var array = ["forest", "fire", "water", "spirit", "shadow"];
	for (var i = 0; i < array.length; i++) {
		if (document.getElementById(array[i]).style.color == "red" && (Logic.emerald == array[i] || Logic.ruby == array[i] || Logic.sapphire == array[i]) && (Check.oot == "minuet" || Check.oot == "serenade" || Check.oot == "prelude" || (Check.oot == "bolero" && (Check.crater_bean == "junk" && Player.hookshot) || Player.hover_boots) || (Check.oot == "suns" && Check.redead_grave == "junk") || (Check.oot == "sarias" && Check.goron_dance == "junk" && Check.saria_kid == "junk"))) {document.getElementById(array[i]).click(); document.getElementById(array[i]).style.color = "lightblue"; if (Logic.emerald == array[i]) {Player.emerald = false;} if (Logic.ruby == array[i]) {Player.ruby = false;} if (Logic.sapphire == array[i]) {Player.sapphire = false;}}
	}
}

function alternateHintInput() {

	var lines = document.getElementById("hintInput").value.split('\n');
	for (const line of lines) {
		const rawTerms = line.split(' ');
		const terms = rawTerms.filter(str => str.length > 0);
		// Only process lines with 2 or 3 terms.
		if (terms.length < 2 || terms.length > 3) {
			continue;
		}

		// We expect first term to be an existing check code.
		const checkCode = terms[0].toLowerCase();
		if (!(checkCode in hintTable)) continue;

		if (terms.length === 2) {
			const itemCode = terms[1];
			// checkCode should be for an individual hint, and itemCode should exist.
			if (typeof hintTable[checkCode] != 'string' || !inputs.includes(itemCode.toLowerCase())) {
				continue;
			}
			processAlternateHintInput(hintTable[checkCode], itemCode);		
		}
		else if (terms.length === 3) {
			const itemCode1 = terms[1];
			const itemCode2 = terms[2];
			// checkCode should be for a dual hint, and both itemCodes should exist.
			const dualChecks = hintTable[checkCode];
			if (!Array.isArray(dualChecks) ||
				dualChecks.length != 2 ||
				!dualChecks.every(item => typeof item === 'string') ||
				!inputs.includes(itemCode1.toLowerCase()) ||
				!inputs.includes(itemCode2.toLowerCase())) {
				continue;
			}
			processAlternateHintInput(dualChecks[0], itemCode1);
			processAlternateHintInput(dualChecks[1], itemCode2);
		}
	}
}

function processAlternateHintInput(checkName, rawItemCode) {
	const itemCode = rawItemCode.toLowerCase();
	const itemCodeIsUppercase = rawItemCode === rawItemCode.toUpperCase();
	if (!(checkName in Check) || !inputs.includes(itemCode)) {
		return;
	}

	// Junk
	if (itemCode === inputs[0]) {
    if (Check[checkName] == "unknown") {thisIsHinted = true; document.getElementById("text_" + checkName).dispatchEvent(new Event('mousedown')); thisIsHinted = false; } 
		if (itemCodeIsUppercase) baitsChecked += 1; 
	}
	// SK
	else if (itemCode === inputs[1]) {
		if (Check[checkName] == "unknown") {thisIsHinted = true; document.getElementById(checkName).value = capitalizeFirstLetter(inputs[inputNames.indexOf("Small Key")]);}
	}
	// BK
	else if (itemCode === inputs[2]) {
		if (Check[checkName] == "unknown") {thisIsHinted = true; document.getElementById(checkName).value = capitalizeFirstLetter(inputs[inputNames.indexOf("Boss Key")]);}
	}
	else {
		if (Check[checkName] == "unknown") {
			hintedInput = itemCode;
			document.getElementById(checkName).value = capitalizeFirstLetter(itemCode);
		}
		else if (!Hinted[checkName] && itemCode != inputs[ItemNames2.indexOf("Bombchus")]) {
			simOverride = true;
			if (textSongSpots.includes("text_"+checkName)) {
				//document.getElementById("text_"+checkName).dispatchEvent(new Event('mousedown'));
				Hinted[checkName] = true;
			}
			else {
				if(Check[checkName] == "prescription" || Check[checkName] == "claim_check")
					//document.getElementById("trade_location").dispatchEvent(new Event('mousedown'));
					Hinted[checkName] = true;
				else
					//document.getElementById(Check[checkName]+"_location").dispatchEvent(new Event('mousedown'));
					Hinted[checkName] = true;
			}
			simOverride = false;
		}
	}	
}

function markWothItem(x) {
	if(event.which == 1 && ManualWotHItems[x.getAttribute("data-item")] != true) {
		ManualWotHItems[x.getAttribute("data-item")] = true;
		ManualNotWotHItems[x.getAttribute("data-item")] = false;
	}
	else if(event.which == 3 && ManualNotWotHItems[x.getAttribute("data-item")] != true) {
		ManualNotWotHItems[x.getAttribute("data-item")] = true;
		ManualWotHItems[x.getAttribute("data-item")] = false;
	}
	else {
		ManualWotHItems[x.getAttribute("data-item")] = false;
		ManualNotWotHItems[x.getAttribute("data-item")] = false;
	}
	midUpdate();
}

function markWothItemArrow(x) {
	if(MarkedWotHItemArrow == x.id)
		MarkedWotHItemArrow = null;
	else
		MarkedWotHItemArrow = x.id;
	midUpdate();
}

function markMinorWothItem(x) {
	var theItem = x.getAttribute("data-item");
	var theParent = x.getAttribute("data-parent");
	
	if(event.which == 1) {
		if(ManualWotHMinorItems[theItem] == undefined || ManualWotHMinorItems[theItem] == false)
			ManualWotHMinorItems[theItem] = true;
		else
			ManualWotHMinorItems[theItem] = false;
	}
	else if(event.which == 2) {
		if(ManualWotHItemLocked[theParent].includes(theItem)) {
			ManualWotHItemLocked[theParent].splice(ManualWotHItemLocked[theParent].indexOf(theItem), 1);
			ManualWotHItemPutInLogic[theParent].push(theItem);
		}
		else if(ManualWotHItemPutInLogic[theParent].includes(theItem)) {
			ManualWotHItemPutInLogic[theParent].splice(ManualWotHItemPutInLogic[theParent].indexOf(theItem), 1);
			ManualWotHItemLocked[theParent].push(theItem);
		}
	}
	else if(event.which == 3 && ManualNotWotHItems[theItem] != true) {
		if(ManualWotHItemLocked[theParent].includes(theItem))
			ManualWotHItemLocked[theParent].splice(ManualWotHItemLocked[theParent].indexOf(theItem), 1);
		if(ManualWotHItemPutInLogic[theParent].includes(theItem))
			ManualWotHItemPutInLogic[theParent].splice(ManualWotHItemPutInLogic[theParent].indexOf(theItem), 1);
		
		ManualWotHMinorItems[theItem] = false;
	}
	midUpdate();
}

// Right clicking a woth hint will hide all the corresponding items and strike out the hint.
// Left clicking will restore all the woth items.
function resetWoth(element, num) {
	for (var i = 1; i <= 35; i++) {
		index = 0;
		if (num == 1)
			index = wothAreas.indexOf(woth1)
		else if (num == 2)
			index = wothAreas.indexOf(woth2)
		else if (num == 3)
			index = wothAreas.indexOf(woth3)
		else if (num == 4)
			index = wothAreas.indexOf(woth4)
		else if (num == 5)
			index = wothAreas.indexOf(woth5)
		else if (num == 6)
			index = wothAreas.indexOf(woth6)
		else if (num == 7)
			index = wothAreas.indexOf(woth7)
		else if (num == 8)
			index = wothAreas.indexOf(woth8)
		if(AreaNames[i] == wothAreas[index]) {
			for (var k = 0; k < Items.length; k++) {
				if (((Locations.indexOf(Location[Items[k]]) >= AreaIndexes[i-1] && Locations.indexOf(Location[Items[k]]) < AreaIndexes[i]) || Locations.indexOf(Location[Items[k]]) == SongIndexes[i-1] || Locations.indexOf(Location[Items[k]]) == SongIndexes2[i-1])) {
					if(event.button == 0 && ManualNotWotHItems[Items[k]]) {
						ManualNotWotHItems[Items[k]] = false;
					}
					if (event.button == 2) {
						ManualNotWotHItems[Items[k]] = true;
						ManualWotHItems[Items[k]] = false;
					}
				}
			}
		}
	}

	if (event.button == 0) {
		element.style.textDecoration = "none";
	} else if (event.button == 2) {
		element.style.textDecoration = "line-through";
	}
	
	midUpdate();
}