function processInputs() {
	document.getElementById("mouseInputs_locations").innerHTML = "";
	for (var i = 0; i < mouseInputs_locations.length; i++) {
		if (i > 0) {document.getElementById("mouseInputs_locations").innerHTML += ", ";}
		document.getElementById("mouseInputs_locations").innerHTML += Names[Locations.indexOf(mouseInputs_locations[i])];
	}
	
	var peeked = false;
	for (var i = 0; i < Locations.length; i++) {
		var key = Locations[i];
		
		for (var j = 35; j > 0; j--) {
			if (i < AreaIndexes[j]) {var AreaNamesIndex = AreaIndexes.indexOf(AreaIndexes[j]);};
		}
		if(key == "zeldasSpot")
			AreaNamesIndex = AreaNames.indexOf("");
		else if(key == "eponasSpot")
			AreaNamesIndex = AreaNames.indexOf("Ranch");
		else if(key == "oot")
			AreaNamesIndex = AreaNames.indexOf("Field");
		else if(key == "serenadeSpot")
			AreaNamesIndex = AreaNames.indexOf("Ice");
		else if(key == "stormsSpot" || key == "nocturneSpot")
			AreaNamesIndex = AreaNames.indexOf("Kakariko");
		else if(key == "sunsSpot")
			AreaNamesIndex = AreaNames.indexOf("Graveyard");
		else if(key == "requiemSpot")
			AreaNamesIndex = AreaNames.indexOf("Colossus");
		else if(key == "sariasSpot" || key == "minuetSpot")
			AreaNamesIndex = AreaNames.indexOf("SFM");
		else if(key == "preludeSpot")
			AreaNamesIndex = AreaNames.indexOf("ToT");
		else if(key == "boleroSpot")
			AreaNamesIndex = AreaNames.indexOf("Crater");
		
        if(Check[key] != "unknown" && checkedYet[i-1] == false) {
            checkedYet[i-1] = true; 
            if (i > lastItem) {
                checkLocation = "Song";
            }
            else if (key.startsWith("h_")) {
                checkLocation = "Hint";
            }
            else {
                checkLocation = AreaNames[AreaNamesIndex];
            }
            textBlock += "" + tempHours + "h " + tempMinutes + "m " + tempSeconds + "s " + checkLocation + ": " + Names[i] + "\n";
        }
		if(Check[key] != "unknown") {continue;}
		
		if(document.getElementById(key).value == "???")
			continue;
		
		hinted = false;
		if (isLowerCase(document.getElementById(key).value.charAt(0)) 
		 && isUpperCase(document.getElementById(key).value.charAt(document.getElementById(key).value.length-1))
		 && document.getElementById(key).value.length > 0 && document.getElementById(key).value.toLowerCase() != inputs[ItemNames2.indexOf("Bombchus")]) {	
			peeked = true;
			document.getElementById(key).value = document.getElementById(key).value.toLowerCase();
		}
		else if (isUpperCase(document.getElementById(key).value.charAt(0)) && document.getElementById(key).value.length == 3
			  && isLowerCase(document.getElementById(key).value.charAt(document.getElementById(key).value.length - 1)) 
			  && document.getElementById(key).value.length > 0 && document.getElementById(key).value.toLowerCase() != inputs[ItemNames2.indexOf("Bombchus")] && document.getElementById(key).value.toLowerCase() != inputs[0]) {
			hinted = true;
			document.getElementById(key).value = document.getElementById(key).value.toLowerCase();
		}
        
		if(document.getElementById(key).value == inputs[ItemNames2.indexOf("Bombchus")]) {
			if(Player.has_chus == false && !hinted && !peeked)
				enableChus();
				
			if(!Known.bombchus1) {Known.bombchus1 = true;}
			else if(!Known.bombchus2) {Known.bombchus2 = true;}
			else if(!Known.bombchus3) {Known.bombchus3 = true;}
			else if(!Known.bombchus4) {Known.bombchus4 = true;}
			else if(!Known.bombchus5) {Known.bombchus5 = true;}
			
			document.getElementById("text_" + Locations[i]).dispatchEvent(new Event('mousedown'));
			document.getElementById(key).value = "";
		}
		
		for (var j = 0; j < inputs.length; j++) {
			
			if (document.getElementById(key).value.toLowerCase() == inputs[j]) {
				
				// don't allow inputting the same item twice if it's not a duplicate item
				if(!DuplicateItems.includes(Items2[j]) && Known[Items2[j]])
					continue;
				
				// if it is a duplicate item and all copies are already known, don't allow the input
				if(Items2[j] == "bomb_bag" && Known["bomb_bag3"]) continue;
				if(Items2[j] == "bow" && Known["bow3"]) continue;
				if(Items2[j] == "slingshot" && Known["slingshot3"]) continue;
				if(Items2[j] == "strength" && Known["strength3"]) continue;
				if(Items2[j] == "bottle" && Known["bottle4"]) continue;
				if(Items2[j] == "hookshot" && Known["hookshot2"]) continue;
				if(Items2[j] == "magic" && Known["magic2"]) continue;
				if(Items2[j] == "scale" && Known["scale2"]) continue;
				if(Items2[j] == "wallet" && Known["wallet3"]) continue;
				if((Items2[j] == "prescription" || Items2[j] == "claim_check") && (Known["prescription"] || Known["claim_check"])) continue;
				
				if (j == 0) {
                    if (isUpperCase(document.getElementById(key).value.charAt(0))) {baitsChecked+=1;}
                    if (i > lastItem) {songItemChecked = true;}
                    document.getElementById("text_" + Locations[i]).dispatchEvent(new Event('mousedown')); continue;
                }
				if (j == 1) {Check[document.getElementById(key).id]="small_key"; forcedDisplay[i] = true; document.getElementById(key).style.backgroundImage= ""; document.getElementById(key).value = document.getElementById(key).value.toUpperCase(); continue;}
				if (j == 2) {Check[document.getElementById(key).id]="boss_key"; forcedDisplay[i] = true; document.getElementById(key).style.backgroundImage= ""; document.getElementById(key).value = document.getElementById(key).value.toUpperCase(); continue;}
				if (j == 4) {Check[document.getElementById(key).id]="bombchus"; forcedDisplay[i] = true; document.getElementById(key).style.backgroundImage= ""; document.getElementById(key).value = document.getElementById(key).value.toUpperCase(); continue;}
				for (var k = 0; k <= 3; k++) {
					if (k == 0) {var duplicate = "";}
					else {var duplicate = k + "";}
					if (!Known[Items2[j] + duplicate]) {
						if (i <= lastItem) {
							Check[document.getElementById(key).id] = Items2[j] + duplicate; 
							Location[Items2[j] + duplicate] = document.getElementById(key).id;
							if (Items2[j] == "prescription" || Items2[j] == "claim_check") {document.getElementById("trade_location").innerHTML = ItemNames2[j] + " &#8594; " + AreaNames[AreaNamesIndex] + ": " + Names[i];} else if (Items2[j] == "big_poe") {document.getElementById("bottle"+duplicate+"_location").innerHTML = ItemNames2[j] + " &#8594; " + AreaNames[AreaNamesIndex] + ": " + Names[i];} else {document.getElementById(Items2[j] + duplicate + "_location").innerHTML = ItemNames2[j] + " &#8594; " + AreaNames[AreaNamesIndex] + ": " + Names[i];}
							Known[Items2[j] + duplicate] = true; 
							if (inputs[j] == "big") {Known.big_poe = true; Location.big_poe = document.getElementById(key).id;}
							if (!hinted && !peeked){
								Player[Items2[j] + duplicate] = true;
								if(inputs[j] == "big")
									Player["big_poe"] = true;
							}
							if (hinted) {Hinted[key] = true;} 
							if (hinted) {temptext2 += Names[i] + ":  " + ItemNames2[j] + "<br />";} 
							if (peeked) {peekOrHintText = "";}
							if(hintedInput == inputs[j])
								thisIsHinted = true;
							junkItem(document.getElementById(key));
							if (!Player[Items2[j] + duplicate]) {forcedDisplay[i] = true; document.getElementById(key).style.backgroundImage= ""; document.getElementById(key).value = document.getElementById(key).value.toUpperCase()}
							thisIsHinted = false;
							hintedInput = "";
                            trackAnimalQuest();
							break;
						}
						else if (i > lastItem && j < 41) {
							songItemChecked = true;
							Check[document.getElementById(key).id] = Items2[j] + duplicate; 
							Location[Items2[j] + duplicate] = document.getElementById(key).id;
							if (Items2[j] == "prescription" || Items2[j] == "claim_check") {document.getElementById("trade_location").innerHTML = ItemNames2[j] + " &#8594; " + AreaNames[AreaNamesIndex] + ": " + Names[i];} else if (Items2[j] == "big_poe") {document.getElementById("bottle"+duplicate+"_location").innerHTML = ItemNames2[j] + " &#8594; " + AreaNames[AreaNamesIndex] + ": " + Names[i];} else {document.getElementById(Items2[j] + duplicate + "_location").innerHTML = ItemNames2[j] + " &#8594; " + AreaNames[AreaNamesIndex] + ": " + Names[i];}
							Known[Items2[j] + duplicate] = true; 
							if (inputs[j] == "big") {Known.big_poe = true; Location.big_poe = document.getElementById(key).id;}
							if (!hinted && !peeked){
								Player[Items2[j] + duplicate] = true;
								if(inputs[j] == "big")
									Player["big_poe"] = true;
							}
							if (hinted) {Hinted[key] = true;} 
							if (hinted || peeked) {temptext2 += Names[i] + ":  " + ItemNames2[j] + "<br />";} 
							var change = "text_" + document.getElementById(key).id; 
							document.getElementById(change).innerHTML += ": " + ItemNames2[j]; 
							junkSong(document.getElementById(key));
                            trackAnimalQuest();
							break;
						}
						else {
							Check[document.getElementById(key).id] = Items2[j];
							Location[Items2[j]] = document.getElementById(key).id; 
							Known[Items2[j]] = true; 
                            if (j<Items2.indexOf("lullaby")) {songItemChecked = true;}
                            if (Items2[j] == "prescription" || Items2[j] == "claim_check") {document.getElementById("trade_location").innerHTML = ItemNames2[j] + " &#8594; " + Names[i];} else if (Items2[j] == "big_poe") {document.getElementById("bottle"+duplicate+"_location").innerHTML = ItemNames2[j] + " &#8594; " + Names[i];} else if (j < Items2.indexOf("lullaby")) {document.getElementById(Items2[j] + duplicate + "_location").innerHTML = ItemNames2[j] + " &#8594; " + Names[i];}
							if (!hinted && !peeked) {Player[Items2[j]] = true;} 
							if (hinted) {Hinted[key] = true;} 
							if (hinted || peeked) {temptext2 += Names[i] + ": " + ItemNames2[j] + "<br />";} 
							var change = "text_" + document.getElementById(key).id; 
							document.getElementById(change).innerHTML += ": " + ItemNames2[j]; 
							junkSong(document.getElementById(key));
                            trackAnimalQuest();
							break;
						}
                    
					}
				}
			}
		}
	}
}

function stoneMedallionInput() {	
	var str = document.getElementById("markStones").value.substring(0,2);
		
	if (!hasChangedMedal) {
		document.getElementById("text_dung7").style.color = "yellow";
		document.getElementById("text_dung8").style.color = "yellow";
		document.getElementById("text_dung9").style.color = "yellow";
	}
	dekuPlacement = "unknown";
	dodongosPlacement = "unknown";
	jabuPlacement = "unknown";
	forestPlacement = "unknown";
	firePlacement = "unknown";
	waterPlacement = "unknown";
	spiritPlacement = "unknown";
	shadowPlacement = "unknown";
	pocketPlacement = "unknown";
		
	for (var i = 1; i<=9; i++) {
		
		Logic["dung" + i] = "unknown";
		document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];
		document.getElementById("dung" + i + "_req1").removeAttribute('src');
		document.getElementById("dung" + i + "_req2").removeAttribute('src');
		document.getElementById("dung" + i + "_req3").removeAttribute('src');
		document.getElementById("dung" + i + "_req4").removeAttribute('src');
		document.getElementById("dung" + i + "_req5").removeAttribute('src');
		document.getElementById("dung" + i + "_req1").removeAttribute('class');
		document.getElementById("dung" + i + "_req2").removeAttribute('class');
		document.getElementById("dung" + i + "_req3").removeAttribute('class');
		document.getElementById("dung" + i + "_req4").removeAttribute('class');
		document.getElementById("dung" + i + "_req5").removeAttribute('class');
		document.getElementById("dung" + i + "_text2").innerHTML ="";
		document.getElementById("dung" + i + "_text3").innerHTML ="";
		
		if (i <= 3) {document.getElementById("dung" + i + "_icon").className = "stones";}
		if (i > 3)  {document.getElementById("dung" + i + "_icon").className = "medallions";}
		
		if (str == "de") {Logic["dung" + i] = "deku"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "dek"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Player.kokiri_sword_img; dekuPlacement = "dung" + i;}
		else if (str == "do") {Logic["dung" + i]= "dodongos"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "dod"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Player.bomb_img; dodongosPlacement = "dung" + i;}
		else if (str == "ja") {Logic["dung" + i] = "jabu"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "jab"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Player.rutos_letter_img; document.getElementById("dung" + i + "_req2").src=Player.boomerang_img; jabuPlacement = "dung" + i;}
		else if (str == "fo") {Logic["dung" + i] = "forest"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "for"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Player.hookshot_img; document.getElementById("dung" + i + "_req2").src=Player.bow_img; document.getElementById("dung" + i + "_req3").src=Player.goron_bracelet_img; forestPlacement = "dung" + i;}
		else if (str == "fi") {Logic["dung" + i] = "fire"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "fir"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Player.hammer_img; firePlacement = "dung" + i;}
		else if (str == "wa") {Logic["dung" + i] = "water"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "wat"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Player.iron_boots_img; document.getElementById("dung" + i + "_text2").innerHTML ="/"; document.getElementById("dung" + i + "_req2").src=Player.golden_scale_img; document.getElementById("dung" + i + "_text3").innerHTML = "+"; document.getElementById("dung" + i + "_req3").src=Player.longshot_img; waterPlacement = "dung" + i;}
		else if (str == "sh") {Logic["dung" + i] = "shadow"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "sha"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req4").className = "requirements"; document.getElementById("dung" + i + "_req5").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Player.dins_fire_img; document.getElementById("dung" + i + "_req2").src =Player.magic_img; document.getElementById("dung" + i + "_req3").src=Player.hover_boots_img; document.getElementById("dung" + i + "_req4").src=Player.bomb_img; document.getElementById("dung" + i + "_req5").src=Player.hookshot_img; shadowPlacement = "dung" + i;}
		else if (str == "sp") {Logic["dung" + i] = "spirit"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "spi"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req4").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Player.silver_gauntlets_img; document.getElementById("dung" + i + "_req2").src=Player.mirror_shield_img; document.getElementById("dung" + i + "_req3").src=Player.bomb_img; document.getElementById("dung" + i + "_req4").src=Player.hookshot_img; spiritPlacement = "dung" + i;}
		else if (str == "fr" || str == "kk") {Logic["dung" + i] = "pocket"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "pok"; pocketPlacement = "dung" + i;}
		else {
			document.getElementById("dung" + i + "_icon").className = "empty"; 
		}
		
		if (i == 1) {str = document.getElementById("markStones").value.substring(2,4);} 
		else if (i == 2) {str = document.getElementById("markStones").value.substring(4,6);} 
		else if (i == 3) {str = document.getElementById("markMedallions").value.substring(0,2); if (document.getElementById("markMedallions").value.length >= 12){str = document.getElementById("markMedallions").value.substring(2,4);} }
		else if (i == 4) {str = document.getElementById("markMedallions").value.substring(2,4); if (document.getElementById("markMedallions").value.length >= 12){str = document.getElementById("markMedallions").value.substring(4,6);} }
		else if (i == 5) {str = document.getElementById("markMedallions").value.substring(4,6); if (document.getElementById("markMedallions").value.length >= 12){str = document.getElementById("markMedallions").value.substring(6,8);} }
		else if (i == 6) {str = document.getElementById("markMedallions").value.substring(6,8); if (document.getElementById("markMedallions").value.length >= 12){str = document.getElementById("markMedallions").value.substring(8,10);} }
		else if (i == 7) {str = document.getElementById("markMedallions").value.substring(8,10); if (document.getElementById("markMedallions").value.length >= 12){str = document.getElementById("markMedallions").value.substring(10,12);} }
		else if (i == 8) {str = document.getElementById("markMedallions").value.substring(10,12); if (document.getElementById("markMedallions").value.length >= 12){str = document.getElementById("markMedallions").value.substring(0,2);} }
	}
	
	if (Logic.dung7 != "unknown") {Logic.shadow_medallion = Logic.dung7; document.getElementById("text_dung7").style.color = "rgb(238, 130, 238)"; document.getElementById("dung7_icon").src = "./normal/items/shadow.png";}
	if (Logic.dung8 != "unknown") {Logic.spirit_medallion = Logic.dung8; document.getElementById("text_dung8").style.color = "rgb(255, 165, 0)"; document.getElementById("dung8_icon").src = "./normal/items/spirit.png";}
	
	for (var i = 1; i<= 9; i++) {
		if (dekuPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "deku"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "deku"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "dek"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Player.kokiri_sword_img; dekuPlacement = "dung" + i;}
		else if (dodongosPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "dodongos"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "dodongos"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "dod"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Player.bomb_img; dodongosPlacement = "dung" + i;}
		else if (jabuPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "jabu"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "jabu"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "jab"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Player.rutos_letter_img; document.getElementById("dung" + i + "_req2").src=Player.boomerang_img; jabuPlacement = "dung" + i;}
		else if (forestPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "forest"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "forest"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "for"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Player.hookshot_img; document.getElementById("dung" + i + "_req2").src=Player.bow_img; document.getElementById("dung" + i + "_req3").src=Player.goron_bracelet_img; forestPlacement = "dung" + i;}
		else if (firePlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "fire"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "fire"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "fir"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Player.hammer_img; firePlacement = "dung" + i;}
		else if (waterPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "water"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "water"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "wat"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Player.iron_boots_img; document.getElementById("dung" + i + "_text2").innerHTML ="/"; document.getElementById("dung" + i + "_req2").src=Player.golden_scale_img; document.getElementById("dung" + i + "_text3").innerHTML = "+"; document.getElementById("dung" + i + "_req3").src=Player.longshot_img; waterPlacement = "dung" + i;}
		else if (shadowPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "shadow"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "shadow"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "sha"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req4").className = "requirements"; document.getElementById("dung" + i + "_req5").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Player.dins_fire_img; document.getElementById("dung" + i + "_req2").src =Player.magic_img; document.getElementById("dung" + i + "_req3").src=Player.hover_boots_img; document.getElementById("dung" + i + "_req4").src=Player.bomb_img; document.getElementById("dung" + i + "_req5").src=Player.hookshot_img; shadowPlacement = "dung" + i;}
		else if (spiritPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "spirit"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "spirit"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "spi"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req4").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Player.silver_gauntlets_img; document.getElementById("dung" + i + "_req2").src=Player.mirror_shield_img; document.getElementById("dung" + i + "_req3").src=Player.bomb_img; document.getElementById("dung" + i + "_req4").src=Player.hookshot_img; spiritPlacement = "dung" + i;}
		else if (pocketPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "pocket"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "pocket"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "pok"; pocketPlacement = "dung" + i;}
		if (i <= 3 && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {document.getElementById("dung" + i + "_icon").className = "stones"; }
		if (i > 3 && Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {document.getElementById("dung" + i + "_icon").className = "medallions"; }
	}
	
	Logic.emerald = Logic.dung1;
	Logic.ruby = Logic.dung2;
	Logic.sapphire = Logic.dung3;
	Logic.forest_medallion_location = Logic.dung4;
	Logic.fire_medallion_location = Logic.dung5;
	Logic.water_medallion_location = Logic.dung6;
	Logic.generic1 = Logic.dung7;
	Logic.generic2 = Logic.dung8;
	Logic.generic3 = Logic.dung9;		
}

function updateSpawnInputs() {
	if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("DMC by Goron City")].toLowerCase()) {Spawn.child_lower_dmc = true;} else {Spawn.child_lower_dmc = false;}
	if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("DMC fountain")].toLowerCase()) {Spawn.child_lower_dmc = true; Spawn.child_lower_dmc_fairy = true;} else {Spawn.child_lower_dmc_fairy = false;}
	if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("DMC by trail")].toLowerCase()) {Spawn.child_upper_dmc = true;} else {Spawn.child_upper_dmc = false;}
	if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("trail fairy")].toLowerCase()) {Spawn.child_upper_dmc = true; Spawn.child_dmt_fairy = true;} else {Spawn.child_dmt_fairy = false;}
	if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("trail fairy(ool)")].toLowerCase()) {Spawn.child_upper_dmc = true; Spawn.child_dmt_fairy = true; Spawn.child_dmt_fairy_ool = true;} else {Spawn.child_dmt_fairy_ool = false;}
	if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fortress")].toLowerCase()) {Spawn.child_gv_gf = true;} else {Spawn.child_gv_gf = false;}
	if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("waste")].toLowerCase()) {Spawn.child_wasteland = true;} else {Spawn.child_wasteland = false;}
	if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("dins fairy")].toLowerCase()) {Spawn.child_hyrule_fairy = true;} else {Spawn.child_hyrule_fairy = false;}
	if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("domain")].toLowerCase()) {Spawn.child_zd = true;} else {Spawn.child_zd = false;}
	if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("river")].toLowerCase()) {Spawn.child_zr = true;} else {Spawn.child_zr = false;}
	if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("colossus")].toLowerCase()) {Spawn.child_colossus = true;} else {Spawn.child_colossus = false;}
	if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fountain")].toLowerCase()) {Spawn.child_zf = true;} else {Spawn.child_zf = false;}
	if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fountain fairy")].toLowerCase()) {Spawn.child_zf_fairy = true;Spawn.child_zf = true;} else {Spawn.child_zf_fairy = false;}
	if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fountain fairy(ool)")].toLowerCase()) {Spawn.child_zf_fairy_ool = true;Spawn.child_zf = true;} else {Spawn.child_zf_fairy_ool = false;}
	
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("DMC by Goron City")].toLowerCase()) {Spawn.adult_lower_dmc = true;} else {Spawn.adult_lower_dmc = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("DMC fountain")].toLowerCase()) {Spawn.adult_lower_dmc_fairy = true; Spawn.adult_lower_dmc = true;} else {Spawn.adult_lower_dmc_fairy = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("DMC by trail")].toLowerCase()) {Spawn.adult_upper_dmc = true;} else {Spawn.adult_upper_dmc = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("trail fairy")].toLowerCase()) {Spawn.adult_upper_dmc = true; Spawn.adult_dmt_fairy = true;} else {Spawn.adult_dmt_fairy = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("trail fairy(ool)")].toLowerCase()) {Spawn.adult_upper_dmc = true; Spawn.adult_dmt_fairy = true; Spawn.adult_dmt_fairy_ool = true;} else {Spawn.adult_dmt_fairy_ool = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fortress")].toLowerCase()) {Spawn.adult_gf = true;} else {Spawn.adult_gf = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("waste")].toLowerCase()) {Spawn.adult_wasteland = true;} else {Spawn.adult_wasteland = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("goron shop")].toLowerCase()) {Spawn.adult_gc_shop = true;} else {Spawn.adult_gc_shop = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("nocturne")].toLowerCase()) {Spawn.adult_nocturne = true;} else {Spawn.adult_nocturne = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fishing")].toLowerCase()) {Spawn.adult_fishing = true;} else {Spawn.adult_fishing = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("sfm")].toLowerCase()) {Spawn.adult_meadow = true;} else {Spawn.adult_meadow = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("domain")].toLowerCase()) {Spawn.adult_zd = true;} else {Spawn.adult_zd = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("domain shop")].toLowerCase()) {Spawn.adult_zd_shop = true; Spawn.adult_zd = true;} else {Spawn.adult_zd_shop = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("ogc fairy")].toLowerCase()) {Spawn.adult_ogc = true;} else {Spawn.adult_ogc = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("ogc fairy(ool)")].toLowerCase()) {Spawn.adult_ogc_ool = true; Spawn.adult_ogc = true;} else {Spawn.adult_ogc_ool = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("kak rooftop")].toLowerCase()) {Spawn.adult_kak_roof = true;} else {Spawn.adult_kak_roof = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("colossus")].toLowerCase()) {Spawn.adult_colossus = true;} else {Spawn.adult_colossus = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fountain")].toLowerCase()) {Spawn.adult_zf = true;} else {Spawn.adult_zf = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fountain fairy")].toLowerCase()) {Spawn.adult_zf_fairy = true;Spawn.adult_zf = true;} else {Spawn.adult_zf_fairy = false;}
	if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fountain fairy(ool)")].toLowerCase()) {Spawn.adult_zf_fairy_ool = true;Spawn.adult_zf = true;} else {Spawn.adult_zf_fairy_ool = false;}
}

function linSoClick() {
	var str = event.target.src.split("/");
	str = str[str.length-1];
	str = str.substring(0,str.length-4);
	//if (str.endsWith("forest") || str.endsWith("fire") || str.endsWith("water")){return;}
	if (str.endsWith("hookshot") && Player.hookshot)  {Player.hookshot2 = true;}
	else if (str.endsWith("longshot")) {Player.hookshot1 = false; Player.hookshot2 = false;}
	else if (str.endsWith("hookshot")) {Player.hookshot1 = true;}
	else if (str.endsWith("bracelet") && Player.goron_bracelet)  {if (!Player.strength1) {Player.strength1 = true;} else if (!Player.strength2) {Player.strength2 = true;} else{Player.strength3 = true;}}
	else if (str.endsWith("silver_gauntlets")) {Player.strength1 = true; Player.strength2 = true; Player.strength3 = true;}
	else if (str.endsWith("golden_gauntlets")) {Player.strength1 = false; Player.strength2 = false; Player.strength3 = false;}
	else if (str.endsWith("bracelet")) {Player.strength1 = true;}
	else if (str.endsWith("silver_scale") && Player.scale1) {Player.scale2 = true;}
	else if (str.endsWith("golden_scale")) {Player.scale1 = false; Player.scale2 = false;}
	else if (str.endsWith("silver_scale")) {Player.scale1 = true;}
	else if (str.endsWith("magic") && Player.magic) {Player.magic2 = true;}
	else if (str.endsWith("magic_2")) {Player.magic1 = false; Player.magic2 = false;}
	else if (str.endsWith("adults_wallet") && Player.adults_wallet) {Player.wallet2 = true;}
	else if (str.endsWith("giants_wallet") && Player.wallet3) {Player.wallet1 = false; Player.wallet2 = false; Player.wallet3 = false; }
	else if (str.endsWith("giants_wallet") && Player.giants_wallet) {Player.wallet3 = true;}
	else if (str.endsWith("adults_wallet")) {Player.wallet1 = true;}
	else if (str.endsWith("magic")) {Player.magic1 = true;}
	else if (str.endsWith("bomb")) {if (Player.bomb_bag1) {Player.bomb_bag1 = false; Player.bomb_bag2 = false; Player.bomb_bag3 = false;} else {Player.bomb_bag1 = true;}}
	else if (str.endsWith("claim_check") && Player.claim_check) {Player.claim_check = false;}
	else if (str.endsWith("chicken1") && Player.chicken1) {Player.chicken1 = false; Player.blue_chicken = true;}
	else if (str.endsWith("blue_chicken") && Player.blue_chicken) {Player.blue_chicken = false; Player.odd_mushroom = true;}
	else if (str.endsWith("eyeball_frog") && Player.eyeball_frog) {Player.eyeball_frog = false; Player.eyedrops = true;}
	else if (str.endsWith("broken_sword") && Player.broken_sword) {Player.broken_sword = false; Player.prescription = true;}
	else if (str.endsWith("eyedrops") && Player.eyedrops) {Player.eyedrops = false; Player.claim_check = true;}
	else if (str.endsWith("odd_mushroom") && Player.odd_mushroom) {Player.odd_mushroom = false; Player.antidote = true;}
	else if (str.endsWith("antidote") && Player.antidote) {Player.antidote = false; Player.poachers_saw = true;}
	else if (str.endsWith("egg1") && Player.egg1) {Player.egg1 = false; Player.chicken1 = true;}
	else if (str.endsWith("poachers_saw") && Player.poachers_saw) {Player.poachers_saw = false; Player.broken_sword = true;}
	else if (str.endsWith("prescription") && Player.prescription) {Player.prescription = false; Player.eyeball_frog = true;}
	else if (str.endsWith("egg1")) {Player.egg1 = true;}
	else if (str.endsWith("mask_of_truth") && Player.mask_of_truth) {Player.mask_of_truth = false;}
	else if (str.endsWith("gerudo_mask") && Player.gerudo_mask) {Player.gerudo_mask = false; Player.mask_of_truth = true;}
	else if (str.endsWith("zora_mask") && Player.zora_mask) {Player.zora_mask = false; Player.gerudo_mask = true;}
	else if (str.endsWith("goron_mask") && Player.goron_mask) {Player.goron_mask = false; Player.zora_mask = true;}
	else if (str.endsWith("bunny_hood") && Player.bunny_hood) {Player.bunny_hood = false; Player.goron_mask = true;}
	else if (str.endsWith("spooky_mask") && Player.spooky_mask) {Player.spooky_mask = false; Player.bunny_hood = true;}
	else if (str.endsWith("skull_mask") && Player.skull_mask) {Player.skull_mask = false; Player.spooky_mask = true;}
	else if (str.endsWith("keaton_mask") && Player.keaton_mask) {Player.keaton_mask = false; Player.skull_mask = true;}
	else if (str.endsWith("zeldas_letter") && Player.zeldas_letter) {Player.zeldas_letter = false; Player.keaton_mask = true;}
	else if (str.endsWith("chicken2") && Player.chicken2) {Player.chicken2 = false; Player.zeldas_letter = true;}
	else if (str.endsWith("egg2") && Player.egg2) {Player.egg2 = false; Player.chicken2 = true;}
	else if (str.endsWith("egg2")) {Player.egg2 = true;}
	else if (event.target.style.filter == "none") {Player[str] = false; Player[str+1] = false;}
	else {Player[str] = true; Player[str+1] = true;}
	midUpdate();
}

function junk() {
	var type = event.button;
	var str = event.target.id;
	str = str.substring('text_'.length);
	var temp = Locations.indexOf(str);
	
	if(!simActive) {
		if(type == 0 && !event.altKey && Check[str] == "unknown") {
			if(str.includes("forest_") && Player.forest_checks_remaining != 0) {Player.forest_checks_remaining -=1;}
			else if(str.includes("fire_") && Player.fire_checks_remaining != 0 && str != "fire_grave") {Player.fire_checks_remaining -=1;}
			else if(str.includes("water_") && Player.water_checks_remaining != 0) {Player.water_checks_remaining -=1;}
			else if(str.includes("spirit_") && Player.spirit_checks_remaining != 0) {Player.spirit_checks_remaining -=1;}
			else if(str.includes("shadow_") && Player.shadow_checks_remaining != 0) {Player.shadow_checks_remaining -=1;}
			else if(str.includes("ganons_") && Player.ganons_checks_remaining != 0) {Player.ganons_checks_remaining -=1;}
			else if(str.includes("gtg_") && Player.gtg_checks_remaining != 0) {Player.gtg_checks_remaining -=1;}
			else if(str.includes("well_") && Player.well_checks_remaining != 0) {Player.well_checks_remaining -=1;}
			else if(temp < AreaIndexes[27]){}
			else {return;}
			Check[str]="junk";
		}
		
		else if(type == 1 || (type == 0 && event.altKey) || thisIsABossKey || document.getElementById(str).value == "BK") {
			if(str.includes("forest_") && !Player.forest_boss_key) {Player.forest_boss_key = true; Location.forest_boss_key = str;}
			else if(str.includes("fire_") && !Player.fire_boss_key) {Player.fire_boss_key = true; Location.fire_boss_key = str;}
			else if(str.includes("water_") && !Player.water_boss_key) {Player.water_boss_key = true; Location.water_boss_key = str;}
			else if(str.includes("spirit_") && !Player.spirit_boss_key) {Player.spirit_boss_key = true; Location.spirit_boss_key = str;}
			else if(str.includes("shadow_") && !Player.shadow_boss_key) {Player.shadow_boss_key = true; Location.shadow_boss_key = str;}
			else if(str.includes("ganons_") && !Player.ganons_boss_key) {Player.ganons_boss_key = true; Location.ganons_boss_key = str;}
			else {
				if(str.startsWith("shop_")) {if (Shop_Logic[str] == "giants_wallet") {Shop_Logic[str] = "accessible"} else if (Shop_Logic[str] == "accessible") {Shop_Logic[str] = "adults_wallet"} else {Shop_Logic[str] = "giants_wallet"}}	
				return;
			}
			if (thisIsABossKey) {temptext2 += Names[temp] + ":  Boss Key" + "<br />";}
			Check[str]="boss_key";
		}
		
		else if ((type == 2 && !event.altKey) || thisIsAKey || document.getElementById(str).value == "SK") {
			if(str.includes("forest_") && Player.current_forest_keys < 5) {Player.current_forest_keys +=1;}
			else if(str.includes("fire_") && Player.current_fire_keys < 8) {Player.current_fire_keys +=1;}
			else if(str.includes("water_") && Player.current_water_keys < 6) {Player.current_water_keys +=1;}
			else if(str.includes("spirit_") && Player.current_spirit_keys < 5) {Player.current_spirit_keys +=1;}
			else if(str.includes("shadow_") && Player.current_shadow_keys < 5) {Player.current_shadow_keys +=1;}
			else if(str.includes("gtg_") && Player.current_gtg_keys < 9) {Player.current_gtg_keys +=1;}
			else if(str.includes("well_") && Player.current_well_keys < 3) {Player.current_well_keys +=1;}
			else if(str.includes("ganons_") && Player.current_ganons_keys < 2) {Player.current_ganons_keys +=1;}
			else {
			if (event.target.style.color == "magenta") {event.target.style.color = "green";}
			else {event.target.style.color = "magenta"; event.target.style.opacity = "1"}
			return;
			}
			Check[str]="small_key";
			if (thisIsAKey) {temptext2 += Names[temp] + ":  Small Key" + "<br />";}
		}
		else if (type == 2 && event.altKey) {
			if (event.target.style.color == "magenta") {event.target.style.color = "green";}
			else {event.target.style.color = "magenta"; event.target.style.opacity = "1"}
			return;
		}
		else if (Check[str] == "unknown") {
			Check[str]="junk";
		}
		
		document.getElementById(str).style.display = "none";
		document.getElementById("text_" + str).style.display = "none";
		document.getElementById("br_" + str).style.display = "none";
		
		if (forcedDisplay[temp]) {forcedDisplay[temp] = false; Player[Check[str]] = true; if(Check[str] == "bombchus"){if(Player.has_chus == false){enableChus();} Check[str] = "junk";} Update(); }

		if (Check[str] != "junk") {midUpdate();}
		lastCheck.push(str);
		Update();
		
		if(!thisIsHinted) {
			
			for(var j = 0; j < AreaIndexes.length; j++) {
				if(Locations.indexOf(str) < AreaIndexes[j])
					break;
			}
		
			for (var i = Locations.indexOf(str) + 1; i < Locations.length; i++) {
				if(i >= AreaIndexes[j])
					break;
				
				if (document.getElementById(Locations[i]).style.display != "none" && Location_Peek[Locations[i]]) {
					toFocus = document.getElementById(Locations[i]); 
					break;
				}
			}
		}
	}
	else {
		// Sim active
		if(LocationToSpoilerName[str] == undefined)
			console.log(str + " is not a known location in the sim");
            
        if(((str == "kokiri_storms" && Area[AreaNames.indexOf("Kokiri")] != "barren") || ((str == "hyrule_remoteGrotto" || str == "hyrule_openGrotto" || str == "hyrule_marketGrotto") && Area[AreaNames.indexOf("Field")] != "barren") || (str == "lw_generic" && Area[AreaNames.indexOf("Lost Woods")] != "barren") || (str == "crater_grotto" && Area[AreaNames.indexOf("Crater")] != "barren") || (str == "kakariko_grotto" && Area[AreaNames.indexOf("Kakariko")] != "barren") || (str == "river_grotto" && Area[AreaNames.indexOf("River")] != "barren") || (str == "trail_storms" && Area[AreaNames.indexOf("Trail")] != "barren")) && Check["h_" + str] != "junk") {
            document.getElementById("text_" + "h_"+ str).dispatchEvent(new Event('mousedown'));
        }
        var spoilerBossName = "";
        if(str == "deku_queen_gohma") spoilerBossName = "Queen Gohma";
        if(str == "dodongos_king_dodongo") spoilerBossName = "King Dodongo";
        if(str == "jabu_barinade") spoilerBossName = "Barinade";
        if(str == "forest_phantomGanon") spoilerBossName = "Phantom Ganon";
        if(str == "fire_volvagia") spoilerBossName = "Volvagia";
        if(str == "water_morpha") spoilerBossName = "Morpha";
        if(str == "spirit_twinrova") spoilerBossName = "Twinrova";
        if(str == "shadow_bongo") spoilerBossName = "Bongo Bongo";
        
        if (spoilerBossName != "") {
            if(SpoilerJSON["locations"][spoilerBossName] == "Light Medallion") document.getElementById("markMedallions").value = document.getElementById("markMedallions").value.replaceAt(0,rewardInputDict[spoilerBossName]);
            if(SpoilerJSON["locations"][spoilerBossName] == "Forest Medallion") document.getElementById("markMedallions").value = document.getElementById("markMedallions").value.replaceAt(2,rewardInputDict[spoilerBossName]);
            if(SpoilerJSON["locations"][spoilerBossName] == "Fire Medallion") document.getElementById("markMedallions").value = document.getElementById("markMedallions").value.replaceAt(4,rewardInputDict[spoilerBossName]);
            if(SpoilerJSON["locations"][spoilerBossName] == "Water Medallion") document.getElementById("markMedallions").value = document.getElementById("markMedallions").value.replaceAt(6,rewardInputDict[spoilerBossName]);
            if(SpoilerJSON["locations"][spoilerBossName] == "Shadow Medallion") document.getElementById("markMedallions").value = document.getElementById("markMedallions").value.replaceAt(8,rewardInputDict[spoilerBossName]);
            if(SpoilerJSON["locations"][spoilerBossName] == "Spirit Medallion") document.getElementById("markMedallions").value = document.getElementById("markMedallions").value.replaceAt(10,rewardInputDict[spoilerBossName]);
            if(SpoilerJSON["locations"][spoilerBossName] == "Kokiri Emerald") document.getElementById("markStones").value = document.getElementById("markStones").value.replaceAt(0,rewardInputDict[spoilerBossName]);
            if(SpoilerJSON["locations"][spoilerBossName] == "Goron Ruby") document.getElementById("markStones").value = document.getElementById("markStones").value.replaceAt(2,rewardInputDict[spoilerBossName]);
            if(SpoilerJSON["locations"][spoilerBossName] == "Zora Sapphire") document.getElementById("markStones").value = document.getElementById("markStones").value.replaceAt(4,rewardInputDict[spoilerBossName]);
        }
		
		if(!str.startsWith("h_")) { 
			// clicked an item check, not a gossip hint
		
			var input = "";
			
			if(LocationToSpoilerName[str] != undefined){
				if(SpoilerJSON["locations"][LocationToSpoilerName[str]]["item"] != undefined)
					input = SpoilerItemToInput[SpoilerJSON["locations"][LocationToSpoilerName[str]]["item"]];
				else
					input = SpoilerItemToInput[SpoilerJSON["locations"][LocationToSpoilerName[str]]];
			}
			
			if(input == undefined || document.getElementById(str).value == "BK" || document.getElementById(str).value == "SK" || document.getElementById(str).value == inputs[ItemNames2.indexOf("Bombchus")] || (input == inputs[ItemNames2.indexOf("Bombchus")] && type == 2 && !LocationToSpoilerName[str].includes("Freestanding"))) {

				if(document.getElementById(str).value != "BK" && document.getElementById(str).value != "SK") {
					if(str.includes("forest_") && Player.forest_checks_remaining != 0) {Player.forest_checks_remaining -=1;}
					else if(str.includes("fire_") && Player.fire_checks_remaining != 0 && str != "fire_grave") {Player.fire_checks_remaining -=1;}
					else if(str.includes("water_") && Player.water_checks_remaining != 0) {Player.water_checks_remaining -=1;}
					else if(str.includes("spirit_") && Player.spirit_checks_remaining != 0) {Player.spirit_checks_remaining -=1;}
					else if(str.includes("shadow_") && Player.shadow_checks_remaining != 0) {Player.shadow_checks_remaining -=1;}
					else if(str.includes("ganons_") && Player.ganons_checks_remaining != 0) {Player.ganons_checks_remaining -=1;}
					else if(str.includes("gtg_") && Player.gtg_checks_remaining != 0) {Player.gtg_checks_remaining -=1;}
					else if(str.includes("well_") && Player.well_checks_remaining != 0) {Player.well_checks_remaining -=1;}
					else if(temp < AreaIndexes[27]){}
					else {return;}
					Check[str]="junk";
				}
				
				else if(document.getElementById(str).value == "BK") {
					if(str.includes("forest_") && !Player.forest_boss_key) {Player.forest_boss_key = true; Location.forest_boss_key = str;}
					else if(str.includes("fire_") && !Player.fire_boss_key) {Player.fire_boss_key = true; Location.fire_boss_key = str;}
					else if(str.includes("water_") && !Player.water_boss_key) {Player.water_boss_key = true; Location.water_boss_key = str;}
					else if(str.includes("spirit_") && !Player.spirit_boss_key) {Player.spirit_boss_key = true; Location.spirit_boss_key = str;}
					else if(str.includes("shadow_") && !Player.shadow_boss_key) {Player.shadow_boss_key = true; Location.shadow_boss_key = str;}
					else if(str.includes("ganons_") && !Player.ganons_boss_key) {Player.ganons_boss_key = true; Location.ganons_boss_key = str;}
					else {
						if(str.startsWith("shop_")) {if (Shop_Logic[str] == "giants_wallet") {Shop_Logic[str] = "accessible"} else if (Shop_Logic[str] == "accessible") {Shop_Logic[str] = "adults_wallet"} else {Shop_Logic[str] = "giants_wallet"}}	
						return;
					}
					if (thisIsABossKey) {temptext2 += Names[temp] + ":  Boss Key" + "<br />";}
					Check[str]="boss_key";
				}
				
				else if (document.getElementById(str).value == "SK") {
					if(str.includes("forest_") && Player.current_forest_keys < 5) {Player.current_forest_keys +=1;}
					else if(str.includes("fire_") && Player.current_fire_keys < 8) {Player.current_fire_keys +=1;}
					else if(str.includes("water_") && Player.current_water_keys < 6) {Player.current_water_keys +=1;}
					else if(str.includes("spirit_") && Player.current_spirit_keys < 5) {Player.current_spirit_keys +=1;}
					else if(str.includes("shadow_") && Player.current_shadow_keys < 5) {Player.current_shadow_keys +=1;}
					else if(str.includes("gtg_") && Player.current_gtg_keys < 9) {Player.current_gtg_keys +=1;}
					else if(str.includes("well_") && Player.current_well_keys < 3) {Player.current_well_keys +=1;}
					else if(str.includes("ganons_") && Player.current_ganons_keys < 2) {Player.current_ganons_keys +=1;}
					else {return;}
					Check[str]="small_key";
					if (thisIsAKey) {temptext2 += Names[temp] + ":  Small Key" + "<br />";}
				}
                if(SpoilerJSON["locations"][LocationToSpoilerName[str]]["item"] != undefined)
					item = SpoilerJSON["locations"][LocationToSpoilerName[str]]["item"].replaceAll("Small Key (Gerudo Training Ground)", "Small Key (GTG)");
				else
					item = SpoilerJSON["locations"][LocationToSpoilerName[str]].replaceAll("Small Key (Gerudo Training Ground)", "Small Key (GTG)");
				if (item.startsWith("Rupee")) {var count = item.replace(/[^0-9]/g, ""); modifyRupees(parseInt(count));}
				document.getElementById(str).style.display = "none";
				document.getElementById("text_" + str).style.display = "none";
				document.getElementById("br_" + str).style.display = "none";
				
				if (forcedDisplay[temp]) {forcedDisplay[temp] = false; Player[Check[str]] = true; Update(); }
				
				lastCheck.push(str);
				
				if(input == inputs[ItemNames2.indexOf("Bombchus")] && type == 2 && (LocationToSpoilerName[str].includes("Freestanding") || LocationToSpoilerName[str].includes("LH Underwater Item")))
					document.getElementById("simLog").value = LocationToSpoilerName[str] + " -> Bombchus (peeked)\n" + document.getElementById("simLog").value;
			}
			else if((type == 0 && Check[str] == "unknown") || document.getElementById(str).value.toLowerCase() == inputs[ItemNames2.indexOf("Bombchus")]) {
				// left click, get the item
				if(input != "bk" && input != "sk")
					document.getElementById(str).value = input;
				
				else if(input == "bk") {
					if(str.includes("forest_") && !Player.forest_boss_key) {Player.forest_boss_key = true; Location.forest_boss_key = str;}
					else if(str.includes("fire_") && !Player.fire_boss_key) {Player.fire_boss_key = true; Location.fire_boss_key = str;}
					else if(str.includes("water_") && !Player.water_boss_key) {Player.water_boss_key = true; Location.water_boss_key = str;}
					else if(str.includes("spirit_") && !Player.spirit_boss_key) {Player.spirit_boss_key = true; Location.spirit_boss_key = str;}
					else if(str.includes("shadow_") && !Player.shadow_boss_key) {Player.shadow_boss_key = true; Location.shadow_boss_key = str;}
					else if(str.includes("ganons_") && !Player.ganons_boss_key) {Player.ganons_boss_key = true; Location.ganons_boss_key = str;}
					else {
						if(str.startsWith("shop_")) {if (Shop_Logic[str] == "giants_wallet") {Shop_Logic[str] = "accessible"} else if (Shop_Logic[str] == "accessible") {Shop_Logic[str] = "adults_wallet"} else {Shop_Logic[str] = "giants_wallet"}}	
						return;
					}
					if (thisIsABossKey) {temptext2 += Names[temp] + ":  Boss Key" + "<br />";}
					Check[str]="boss_key";
				}
				
				else if (input == "sk") {
					if(str.includes("forest_") && Player.current_forest_keys < 5) {Player.current_forest_keys +=1;}
					else if(str.includes("fire_") && Player.current_fire_keys < 8) {Player.current_fire_keys +=1;}
					else if(str.includes("water_") && Player.current_water_keys < 6) {Player.current_water_keys +=1;}
					else if(str.includes("spirit_") && Player.current_spirit_keys < 5) {Player.current_spirit_keys +=1;}
					else if(str.includes("shadow_") && Player.current_shadow_keys < 5) {Player.current_shadow_keys +=1;}
					else if(str.includes("gtg_") && Player.current_gtg_keys < 9) {Player.current_gtg_keys +=1;}
					else if(str.includes("well_") && Player.current_well_keys < 3) {Player.current_well_keys +=1;}
					else if(str.includes("ganons_") && Player.current_ganons_keys < 2) {Player.current_ganons_keys +=1;}
					else {return;}
					Check[str]="small_key";
					if (thisIsAKey) {temptext2 += Names[temp] + ":  Small Key" + "<br />";}
				}
				
				if(SpoilerJSON["locations"][LocationToSpoilerName[str]]["item"] != undefined)
					item = SpoilerJSON["locations"][LocationToSpoilerName[str]]["item"].replaceAll("Small Key (Gerudo Training Ground)", "Small Key (GTG)");
				else
					item = SpoilerJSON["locations"][LocationToSpoilerName[str]].replaceAll("Small Key (Gerudo Training Ground)", "Small Key (GTG)");
				document.getElementById("simLog").value = LocationToSpoilerName[str] + " -> " + item + "\n" + document.getElementById("simLog").value;
                if (item.startsWith("Bombchus")) {var count = item.replace(/[^0-9]/g, ""); chuCount += parseInt(count); document.getElementById("chuCount").innerHTML = "Chus: " + chuCount;}
			}
			else if(type == 2 && Check[str] == "unknown" && document.getElementById(str).value != "???") {
				// right click, peek the item
				
				var temp_item = "";
				if(SpoilerJSON["locations"][LocationToSpoilerName[str]]["item"] != undefined)
					temp_item = SpoilerJSON["locations"][LocationToSpoilerName[str]]["item"].replaceAll("Small Key (Gerudo Training Ground)", "Small Key (GTG)");
				else
					temp_item = SpoilerJSON["locations"][LocationToSpoilerName[str]].replaceAll("Small Key (Gerudo Training Ground)", "Small Key (GTG)");
				
				if (LocationToSpoilerName[str].includes("Freestanding") || LocationToSpoilerName[str].includes("LH Underwater Item") || temp_item.includes("Small Key") || temp_item.includes("Boss Key")) {
					item = SpoilerJSON["locations"][LocationToSpoilerName[str]].replaceAll("Small Key (Gerudo Training Ground)", "Small Key (GTG)");
					document.getElementById(str).value = input.charAt(0) + input.charAt(1) + input.charAt(2).toUpperCase();
					
					if(input == inputs[ItemNames2.indexOf("Bombchus")])
						item = "Bombchus";
				}
				else {
					item = "unknown big chest";
					document.getElementById(str).value = "???";
				}
				document.getElementById("simLog").value = LocationToSpoilerName[str] + " -> " + item + " (peeked)\n" + document.getElementById("simLog").value;
			}
			else if (Check[str] != "unknown" && Check[str] != "junk" && forcedDisplay[temp]) {
				forcedDisplay[temp] = false; 
				Player[Check[str]] = true; 
			}
		}
		else {
			// clicked a gossip hint
			hint = SpoilerJSON["gossip_stones"][LocationToSpoilerName[str]]["text"].replaceAll("#", "");
			simProcessHint(hint, str);
			document.getElementById("simLog").value = hint.replaceAll("Small Key (Gerudo Training Ground)", "Small Key (GTG)") + "\n" + document.getElementById("simLog").value;
			Check[str] = "junk";
			document.getElementById(str).style.display = "none";
			document.getElementById("text_" + str).style.display = "none";
			document.getElementById("br_" + str).style.display = "none";
			lastCheck.push(str);
		}
		Update(); 
	}
}	

function junkUltra() {
	if(!simActive) {
		var x = event.target;
		
		if (x.id == "forest") {var temp = 27; Logic.forced_forest_keys = 5 - Player.current_forest_keys; Player.current_forest_keys = 5; if (Player.forest_boss_key == false) {Logic.forced_forest_boss_key = true; Player.forest_boss_key = true;}}
		if (x.id == "fire") {var temp = 28; Logic.forced_fire_keys = 8 - Player.current_fire_keys; Player.current_fire_keys = 8; if (Player.fire_boss_key == false) {Logic.forced_fire_boss_key = true; Player.fire_boss_key = true;}}
		if (x.id == "water") {var temp = 31; Logic.forced_water_keys = 6 - Player.current_water_keys; Player.current_water_keys = 6; if (Player.water_boss_key == false) {Logic.forced_water_boss_key = true; Player.water_boss_key = true;}}
		if (x.id == "spirit") {var temp = 29; Logic.forced_spirit_keys = 5 - Player.current_spirit_keys; Player.current_spirit_keys = 5; if (Player.spirit_boss_key == false) {Logic.forced_spirit_boss_key = true; Player.spirit_boss_key = true;}}
		if (x.id == "shadow") {var temp = 30; Logic.forced_shadow_keys = 5 - Player.current_shadow_keys; Player.current_shadow_keys = 5; if (Player.shadow_boss_key == false) {Logic.forced_shadow_boss_key = true; Player.shadow_boss_key = true;}}
		if (x.id == "ganons") {var temp = 32; Logic.forced_ganons_keys = 2 - Player.current_ganons_keys; Player.current_ganons_keys = 2; if (Player.ganons_boss_key == false) {Logic.ganons_boss_key = true; Player.ganons_boss_key = true;}}
		if (x.id == "gtg") {var temp = 33; Logic.forced_gtg_keys = 5 - Player.current_gtg_keys; Player.current_gtg_keys = 9;}
		if (x.id == "well") {var temp = 34; Logic.forced_well_keys = 5 - Player.current_well_keys; Player.current_well_keys = 3;}
		for (var i = AreaIndexes[temp]; i < AreaIndexes[temp + 1]; i++){
			if (Check[Locations[i]] == "unknown") {Check[Locations[i]] = "ultra";}
			document.getElementById(Locations[i]).style.display = "none";
			document.getElementById("text_" + Locations[i]).style.display = "none";
			document.getElementById("br_" + Locations[i]).style.display = "none";
			lastCheck.push(Locations[i]);
		}
		midUpdate();
		slowUpdate();
		Update();
	}
}

function junkItem(x) {
	var str2 = x.id;
	var temp = true;
	if (str2.includes('shadow_') || str2.includes('spirit_') || str2.includes('forest_') || str2.includes('fire_') || str2.includes('water_') || str2.includes('gtg_') || str2.includes('well_')|| str2.includes('ganons_')) {
		temp = false;
		if(str2.includes('forest_') && Player.forest_checks_remaining != 0) {Player.forest_checks_remaining -= 1; temp = true;}
		if(str2.includes('fire_') && Player.fire_checks_remaining != 0) {Player.fire_checks_remaining -= 1; temp = true;}
		if(str2.includes('water_') && Player.water_checks_remaining != 0) {Player.water_checks_remaining -= 1; temp = true;}
		if(str2.includes('shadow_') && Player.shadow_checks_remaining != 0) {Player.shadow_checks_remaining -= 1; temp = true;}
		if(str2.includes('spirit_') && Player.spirit_checks_remaining != 0) {Player.spirit_checks_remaining -= 1; temp = true;}
		if(str2.includes('ganons_') && Player.ganons_checks_remaining != 0) {Player.ganons_checks_remaining -= 1; temp = true;}
		if(str2.includes('gtg_') && Player.gtg_checks_remaining != 0) {Player.gtg_checks_remaining -= 1; temp = true;}
		if(str2.includes('well_') && Player.well_checks_remaining != 0) {Player.well_checks_remaining -= 1; temp = true;}
	}
	if (!temp) {return;}
	
	document.getElementById(str2).style.display = "none";
	document.getElementById("text_" + str2).style.display = "none";
	document.getElementById("br_" + str2).style.display = "none";
	
	lastCheck.push(str2);
	midUpdate();
	
	if(!thisIsHinted) {
		
		for(var j = 0; j < AreaIndexes.length; j++) {
			if(Locations.indexOf(str2) < AreaIndexes[j])
				break;
		}
	
		for (var i = Locations.indexOf(str2) + 1; i < Locations.length; i++) {
			if(i >= AreaIndexes[j])
				break;
			
			if (document.getElementById(Locations[i]).style.display != "none" && Location_Peek[Locations[i]]) {
				document.getElementById(Locations[i]).focus();
				break;
			}
		}
	}
}

function junkSong(x) {
	var str2 = x.id;
	document.getElementById(str2).style.display = "none";
	
	document.getElementById(str2).value = "";
	
	lastCheck.push(str2);
	Update();
}

function checkCircleInfo() {
	document.getElementById("forest").innerHTML = "" + Player.forest_checks_remaining;
	document.getElementById("fire").innerHTML = "" + Player.fire_checks_remaining;
	document.getElementById("water").innerHTML = "" + Player.water_checks_remaining;
	document.getElementById("spirit").innerHTML = "" + Player.spirit_checks_remaining;
	document.getElementById("shadow").innerHTML = "" + Player.shadow_checks_remaining;
	document.getElementById("ganons").innerHTML = "" + Player.ganons_checks_remaining;
	document.getElementById("gtg").innerHTML = "" + Player.gtg_checks_remaining;
	document.getElementById("well").innerHTML = "" + Player.well_checks_remaining;
	
	document.getElementById("forestSKs").innerHTML = "" + (5 - Player.current_forest_keys);
	document.getElementById("fireSKs").innerHTML = "" + (8 - Player.current_fire_keys);
	document.getElementById("waterSKs").innerHTML = "" + (6 - Player.current_water_keys);
	document.getElementById("spiritSKs").innerHTML = "" + (5 - Player.current_spirit_keys);
	document.getElementById("shadowSKs").innerHTML = "" + (5 - Player.current_shadow_keys);
	document.getElementById("ganonsSKs").innerHTML = "" + (2 - Player.current_ganons_keys);
	document.getElementById("gtgSKs").innerHTML = "" + (9 - Player.current_gtg_keys);
	document.getElementById("wellSKs").innerHTML = "" + (3 - Player.current_well_keys);
	
	if (Player.forest_boss_key) {document.getElementById("forestBKs").innerHTML = 0;} else {document.getElementById("forestBKs").innerHTML = 1;}
	if (Player.fire_boss_key) {document.getElementById("fireBKs").innerHTML = 0;} else {document.getElementById("fireBKs").innerHTML = 1;}
	if (Player.water_boss_key) {document.getElementById("waterBKs").innerHTML = 0;} else {document.getElementById("waterBKs").innerHTML = 1;}
	if (Player.spirit_boss_key) {document.getElementById("spiritBKs").innerHTML = 0;} else {document.getElementById("spiritBKs").innerHTML = 1;}
	if (Player.shadow_boss_key) {document.getElementById("shadowBKs").innerHTML = 0;} else {document.getElementById("shadowBKs").innerHTML = 1;}
	
	document.getElementById("forestSKs").title = "";
	document.getElementById("forestBKs").title = "";
	for(i = AreaIndexes[27]; i < AreaIndexes[28]; i++) {
		if(Check[Locations[i]] == "small_key")
			document.getElementById("forestSKs").title += Names[i] + "\n";
		if(Check[Locations[i]] == "boss_key")
			document.getElementById("forestBKs").title += Names[i] + "\n";
	}
	
	document.getElementById("fireSKs").title = "";
	document.getElementById("fireBKs").title = "";
	for(i = AreaIndexes[28]; i < AreaIndexes[29]; i++) {
		if(Check[Locations[i]] == "small_key")
			document.getElementById("fireSKs").title += Names[i] + "\n";
		if(Check[Locations[i]] == "boss_key")
			document.getElementById("fireBKs").title += Names[i] + "\n";
	}
	
	document.getElementById("spiritSKs").title = "";
	document.getElementById("spiritBKs").title = "";
	for(i = AreaIndexes[29]; i < AreaIndexes[30]; i++) {
		if(Check[Locations[i]] == "small_key")
			document.getElementById("spiritSKs").title += Names[i] + "\n";
		if(Check[Locations[i]] == "boss_key")
			document.getElementById("spiritBKs").title += Names[i] + "\n";
	}
	
	document.getElementById("shadowSKs").title = "";
	document.getElementById("shadowBKs").title = "";
	for(i = AreaIndexes[30]; i < AreaIndexes[31]; i++) {
		if(Check[Locations[i]] == "small_key")
			document.getElementById("shadowSKs").title += Names[i] + "\n";
		if(Check[Locations[i]] == "boss_key")
			document.getElementById("shadowBKs").title += Names[i] + "\n";
	}
	
	document.getElementById("waterSKs").title = "";
	document.getElementById("waterBKs").title = "";
	for(i = AreaIndexes[31]; i < AreaIndexes[32]; i++) {
		if(Check[Locations[i]] == "small_key")
			document.getElementById("waterSKs").title += Names[i] + "\n";
		if(Check[Locations[i]] == "boss_key")
			document.getElementById("waterBKs").title += Names[i] + "\n";
	}
	
	document.getElementById("ganonsSKs").title = "";
	for(i = AreaIndexes[32]; i < AreaIndexes[33]; i++)
		if(Check[Locations[i]] == "small_key")
			document.getElementById("ganonsSKs").title += Names[i] + "\n";
	
	document.getElementById("gtgSKs").title = "";
	for(i = AreaIndexes[33]; i < AreaIndexes[34]; i++)
		if(Check[Locations[i]] == "small_key")
			document.getElementById("gtgSKs").title += Names[i] + "\n";
	
	document.getElementById("wellSKs").title = "";
	for(i = AreaIndexes[34]; i < AreaIndexes[35]; i++)
		if(Check[Locations[i]] == "small_key")
			document.getElementById("wellSKs").title += Names[i] + "\n";
}

function areaBreaks() {
	var tempUnique = 0;
	for (var i = 0; i < Locations.length; i++) {
		if ((i >= AreaIndexes[10] && i < AreaIndexes[11]) || (i >= AreaIndexes[17] && i < AreaIndexes[18])) {continue;}
		if (document.getElementById(Locations[i]).style.display == "none") {tempUnique += 1;} 
		if (i == AreaIndexes[1]-1) {if (tempUnique == AreaIndexes[1] - AreaIndexes[0]) {document.getElementById("kokiri_break").style.display = "none";} else {document.getElementById("kokiri_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[2]-1) {if (tempUnique == AreaIndexes[2] - AreaIndexes[1]) {document.getElementById("ranch_break").style.display = "none";} else {document.getElementById("ranch_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[3]-1) {if (tempUnique == AreaIndexes[3] - AreaIndexes[2]) {document.getElementById("field_break").style.display = "none";} else {document.getElementById("field_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[4]-1) {if (tempUnique == AreaIndexes[4] - AreaIndexes[3]) {document.getElementById("valley_break").style.display = "none";} else {document.getElementById("valley_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[5]-1) {if (tempUnique == AreaIndexes[5] - AreaIndexes[4]) {document.getElementById("hylia_break").style.display = "none";} else {document.getElementById("hylia_break").style.display == "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[6]-1) {if (tempUnique == AreaIndexes[6] - AreaIndexes[5]) {document.getElementById("market_break").style.display = "none";} else {document.getElementById("market_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[7]-1) {if (tempUnique == AreaIndexes[7] - AreaIndexes[6]) {document.getElementById("hyrule_castle_break").style.display = "none";} else {document.getElementById("hyrule_castle_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[8]-1) {if (tempUnique == AreaIndexes[8] - AreaIndexes[7]) {document.getElementById("ogc_break").style.display = "none";} else {document.getElementById("ogc_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[9]-1) {if (tempUnique == AreaIndexes[9] - AreaIndexes[8]) {document.getElementById("tot_break").style.display = "none";} else {document.getElementById("tot_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[10]-1) {if (tempUnique == AreaIndexes[10] - AreaIndexes[9]) {document.getElementById("fountain_break").style.display = "none";} else {document.getElementById("fountain_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[12]-1) {if (tempUnique == AreaIndexes[12] - AreaIndexes[11]) {document.getElementById("deku_break").style.display = "none";} else {document.getElementById("deku_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[13]-1) {if (tempUnique == AreaIndexes[13] - AreaIndexes[12]) {document.getElementById("lost_woods_break").style.display = "none";} else {document.getElementById("lost_woods_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[14]-1) {if (tempUnique == AreaIndexes[14] - AreaIndexes[13]) {document.getElementById("sfm_break").style.display = "none";} else {document.getElementById("sfm_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[15]-1) {if (tempUnique == AreaIndexes[15] - AreaIndexes[14]) {document.getElementById("goron_break").style.display = "none";} else {document.getElementById("goron_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[16]-1) {if (tempUnique == AreaIndexes[16] - AreaIndexes[15]) {document.getElementById("dodongos_break").style.display = "none";} else {document.getElementById("dodongos_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[17]-1) {if (tempUnique == AreaIndexes[17] - AreaIndexes[16]) {document.getElementById("dmt_break").style.display = "none";} else {document.getElementById("dmt_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[19]-1) {if (tempUnique == AreaIndexes[19] - AreaIndexes[18]) {document.getElementById("kakariko_break").style.display = "none";} else {document.getElementById("kakariko_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[20]-1) {if (tempUnique == AreaIndexes[20] - AreaIndexes[19]) {document.getElementById("graveyard_break").style.display = "none";} else {document.getElementById("graveyard_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[21]-1) {if (tempUnique == AreaIndexes[21] - AreaIndexes[20]) {document.getElementById("river_break").style.display = "none";} else {document.getElementById("river_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[22]-1) {if (tempUnique == AreaIndexes[22] - AreaIndexes[21]) {document.getElementById("domain_break").style.display = "none";} else {document.getElementById("domain_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[23]-1) {if (tempUnique == AreaIndexes[23] - AreaIndexes[22]) {document.getElementById("colossus_break").style.display = "none";} else {document.getElementById("colossus_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[24]-1) {if (tempUnique == AreaIndexes[24] - AreaIndexes[23]) {document.getElementById("wasteland_break").style.display = "none";} else {document.getElementById("wasteland_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[25]-1) {if (tempUnique == AreaIndexes[25] - AreaIndexes[24]) {document.getElementById("thieves_break").style.display = "none";} else {document.getElementById("thieves_break").style.display = "inline-block";} tempUnique = 0;}
		if (i == AreaIndexes[26]-1) {if (tempUnique == AreaIndexes[26] - AreaIndexes[25]) {document.getElementById("fortress_break").style.display = "none";} else {document.getElementById("fortress_break").style.display = "inline-block";} tempUnique = 0;}
	}
}

function itemHighlights() {
	if (Player.kokiri_sword) {if(document.getElementById(dekuPlacement +"_req1") != null) {document.getElementById(dekuPlacement +"_req1").style.opacity =1; }}
	if (Player.bomb_bag) {if(document.getElementById(dodongosPlacement +"_req1") != null) {document.getElementById(dodongosPlacement +"_req1").style.opacity =1; } if(document.getElementById(shadowPlacement +"_req4") != null) {document.getElementById(shadowPlacement +"_req4").style.opacity =1; } if(document.getElementById(spiritPlacement +"_req3") != null) {document.getElementById(spiritPlacement +"_req3").style.opacity =1; }}
	if (Player.magic) {document.getElementById("gan_req1").style.opacity=1; if(document.getElementById(shadowPlacement +"_req2") != null) {document.getElementById(shadowPlacement +"_req2").style.opacity =1; }}
	if (Player.light_arrows) {document.getElementById("gan_req2").style.opacity=1;}
	if (Player.bow) {document.getElementById("gan_req3").style.opacity=1; if(document.getElementById(forestPlacement +"_req2") != null) {document.getElementById(forestPlacement +"_req2").style.opacity =1; }}
	if (Player.hookshot) {if(document.getElementById(forestPlacement +"_req1") != null) {document.getElementById(forestPlacement +"_req1").style.opacity =1; } if(document.getElementById(shadowPlacement +"_req5") != null) {document.getElementById(shadowPlacement +"_req5").style.opacity =1; } if(document.getElementById(spiritPlacement +"_req4") != null) {document.getElementById(spiritPlacement +"_req4").style.opacity =1; }}
	if (Player.goron_bracelet) {if(document.getElementById(forestPlacement +"_req3") != null) {document.getElementById(forestPlacement +"_req3").style.opacity =1; }}
	if (Player.hammer) {if(document.getElementById(firePlacement +"_req1") != null) {document.getElementById(firePlacement +"_req1").style.opacity =1; }}
	if (Player.rutos_letter) {if(document.getElementById(jabuPlacement +"_req1") != null) {document.getElementById(jabuPlacement +"_req1").style.opacity =1; }}
	if (Player.boomerang) {if(document.getElementById(jabuPlacement +"_req2") != null) {document.getElementById(jabuPlacement +"_req2").style.opacity =1; }}
	if (Player.iron_boots) {if(document.getElementById(waterPlacement +"_req1") != null) {document.getElementById(waterPlacement +"_req1").style.opacity =1; }}
	if (Player.golden_scale) {if(document.getElementById(waterPlacement +"_req2") != null) {document.getElementById(waterPlacement +"_req2").style.opacity =1; }}
	if (Player.longshot) {if(document.getElementById(waterPlacement +"_req3") != null) {document.getElementById(waterPlacement +"_req3").style.opacity =1; }}
	if (Player.silver_gauntlets) {if(document.getElementById(spiritPlacement +"_req1") != null) {document.getElementById(spiritPlacement +"_req1").style.opacity =1; }}
	if (Player.mirror_shield) {if(document.getElementById(spiritPlacement +"_req2") != null) {document.getElementById(spiritPlacement +"_req2").style.opacity =1; }}
	if (Player.dins_fire) {if(document.getElementById(shadowPlacement +"_req1") != null) {document.getElementById(shadowPlacement +"_req1").style.opacity =1; }}
	if (Player.hover_boots) {if(document.getElementById(shadowPlacement +"_req3") != null) {document.getElementById(shadowPlacement +"_req3").style.opacity =1; }}
	
	if (!Player.kokiri_sword) {if(document.getElementById(dekuPlacement +"_req1") != null) {document.getElementById(dekuPlacement +"_req1").style.opacity =.2; }}
	if (!Player.bomb_bag) {if(document.getElementById(dodongosPlacement +"_req1") != null) {document.getElementById(dodongosPlacement +"_req1").style.opacity =.2; } if(document.getElementById(shadowPlacement +"_req4") != null) {document.getElementById(shadowPlacement +"_req4").style.opacity =.2; } if(document.getElementById(spiritPlacement +"_req3") != null) {document.getElementById(spiritPlacement +"_req3").style.opacity =.2; }}
	if (!Player.magic) {document.getElementById("gan_req1").style.opacity = .2; if(document.getElementById(shadowPlacement +"_req2") != null) {document.getElementById(shadowPlacement +"_req2").style.opacity =.2; }}
	if (!Player.light_arrows) {document.getElementById("gan_req2").style.opacity = .2;}
	if (!Player.bow) {document.getElementById("gan_req3").style.opacity = .2; if(document.getElementById(forestPlacement +"_req2") != null) {document.getElementById(forestPlacement +"_req2").style.opacity =.2; }}
	if (!Player.hookshot) {if(document.getElementById(forestPlacement +"_req1") != null) {document.getElementById(forestPlacement +"_req1").style.opacity =.2; } if(document.getElementById(shadowPlacement +"_req5") != null) {document.getElementById(shadowPlacement +"_req5").style.opacity =.2; } if(document.getElementById(spiritPlacement +"_req4") != null) {document.getElementById(spiritPlacement +"_req4").style.opacity =.2; }}
	if (!Player.goron_bracelet) {if(document.getElementById(forestPlacement +"_req3") != null) {document.getElementById(forestPlacement +"_req3").style.opacity =.2; }}
	if (!Player.hammer) {if(document.getElementById(firePlacement +"_req1") != null) {document.getElementById(firePlacement +"_req1").style.opacity =.2; }}
	if (!Player.rutos_letter) {if(document.getElementById(jabuPlacement +"_req1") != null) {document.getElementById(jabuPlacement +"_req1").style.opacity =.2; }}
	if (!Player.boomerang) {if(document.getElementById(jabuPlacement +"_req2") != null) {document.getElementById(jabuPlacement +"_req2").style.opacity =.2; }}
	if (!Player.iron_boots) {if(document.getElementById(waterPlacement +"_req1") != null) {document.getElementById(waterPlacement +"_req1").style.opacity =.2; }}
	if (!Player.golden_scale) {if(document.getElementById(waterPlacement +"_req2") != null) {document.getElementById(waterPlacement +"_req2").style.opacity =.2; }}
	if (!Player.longshot) {if(document.getElementById(waterPlacement +"_req3") != null) {document.getElementById(waterPlacement +"_req3").style.opacity =.2; }}
	if (!Player.silver_gauntlets) {if(document.getElementById(spiritPlacement +"_req1") != null) {document.getElementById(spiritPlacement +"_req1").style.opacity =.2; }}
	if (!Player.mirror_shield) {if(document.getElementById(spiritPlacement +"_req2") != null) {document.getElementById(spiritPlacement +"_req2").style.opacity =.2; }}
	if (!Player.dins_fire) {if(document.getElementById(shadowPlacement +"_req1") != null) {document.getElementById(shadowPlacement +"_req1").style.opacity =.2; }}
	if (!Player.hover_boots) {if(document.getElementById(shadowPlacement +"_req3") != null) {document.getElementById(shadowPlacement +"_req3").style.opacity =.2; }}
	
	if (Player.lullaby) {document.getElementById("lullabyimg").style.opacity =1;} else {document.getElementById("lullabyimg").style.opacity =.2;}
	if (Player.eponas) {document.getElementById("eponasimg").style.opacity =1;} else {document.getElementById("eponasimg").style.opacity =.2;}
	if (Player.sarias) {document.getElementById("sariasimg").style.opacity =1;} else {document.getElementById("sariasimg").style.opacity =.2;}
	if (Player.suns) {document.getElementById("sunsimg").style.opacity =1;} else {document.getElementById("sunsimg").style.opacity =.2;}
	if (Player.time) {document.getElementById("sotimg").style.opacity =1;} else {document.getElementById("sotimg").style.opacity =.2;}
	if (Player.storms) {document.getElementById("sosimg").style.opacity =1;} else {document.getElementById("sosimg").style.opacity =.2;}
	if (Player.minuet) {document.getElementById("minuetimg").style.opacity =1;} else {document.getElementById("minuetimg").style.opacity =.2;}
	if (Player.bolero) {document.getElementById("boleroimg").style.opacity =1;} else {document.getElementById("boleroimg").style.opacity =.2;}
	if (Player.serenade) {document.getElementById("serenadeimg").style.opacity =1;} else {document.getElementById("serenadeimg").style.opacity =.2;}
	if (Player.requiem) {document.getElementById("requiemimg").style.opacity =1;} else {document.getElementById("requiemimg").style.opacity =.2;}
	if (Player.nocturne) {document.getElementById("nocturneimg").style.opacity =1;} else {document.getElementById("nocturneimg").style.opacity =.2;}
	if (Player.prelude) {document.getElementById("preludeimg").style.opacity =1;} else {document.getElementById("preludeimg").style.opacity =.2;}
	
	if (Player.bottle || Logic.bottle) {document.getElementById("bottleimg").style.opacity =1;} else {document.getElementById("bottleimg").style.opacity =.2;}
	if (Player.farores_wind) {document.getElementById("faroresimg").style.opacity =1;} else {document.getElementById("faroresimg").style.opacity =.2;}
	if (Player.fire_arrows) {document.getElementById("firearrowsimg").style.opacity =1;} else {document.getElementById("firearrowsimg").style.opacity =.2;}
	if (Player.silver_scale) {document.getElementById("silverscaleimg").style.opacity =1;} else {document.getElementById("silverscaleimg").style.opacity =.2;}
	if (Player.lens) {document.getElementById("lensimg").style.opacity =1;} else {document.getElementById("lensimg").style.opacity =.2;}
	if (Player.golden_gauntlets) {document.getElementById("goldengauntletsimg").style.opacity =1;} else {document.getElementById("goldengauntletsimg").style.opacity =.2;}
	if (Player.slingshot) {document.getElementById("slingshotimg").style.opacity =1;} else {document.getElementById("slingshotimg").style.opacity =.2;}
}

function dungeonHighlights() {
	if (Player.forest) {document.getElementById("dung4_icon").style.opacity=1; document.getElementById("text_dung4").style.opacity = .2;} else{document.getElementById("dung4_icon").style.opacity=.2; document.getElementById("text_dung4").style.opacity = 1;}
	if (Player.fire) {document.getElementById("dung5_icon").style.opacity=1; document.getElementById("text_dung5").style.opacity = .2;} else{document.getElementById("dung5_icon").style.opacity=.2; document.getElementById("text_dung5").style.opacity = 1;}
	if (Player.water) {document.getElementById("dung6_icon").style.opacity=1; document.getElementById("text_dung6").style.opacity = .2;} else{document.getElementById("dung6_icon").style.opacity=.2; document.getElementById("text_dung6").style.opacity = 1;}
	if (Player.gen1) {document.getElementById("dung7_icon").style.opacity=1; document.getElementById("text_dung7").style.opacity = .2;} else{document.getElementById("dung7_icon").style.opacity=.2; document.getElementById("text_dung7").style.opacity = 1;}
	if (Player.gen2) {document.getElementById("dung8_icon").style.opacity=1; document.getElementById("text_dung8").style.opacity = .2;} else{document.getElementById("dung8_icon").style.opacity=.2; document.getElementById("text_dung8").style.opacity = 1;}
	if (Player.gen3) {document.getElementById("dung9_icon").style.opacity=1; document.getElementById("text_dung9").style.opacity = .2;} else{document.getElementById("dung9_icon").style.opacity=.2; document.getElementById("text_dung9").style.opacity = 1;}
	if (Player.emerald) {document.getElementById("dung1_icon").style.opacity=1; document.getElementById("text_dung1").style.opacity = .2;} else{document.getElementById("dung1_icon").style.opacity=.2; document.getElementById("text_dung1").style.opacity = 1;}
	if (Player.ruby) {document.getElementById("dung2_icon").style.opacity=1; document.getElementById("text_dung2").style.opacity = .2;} else{document.getElementById("dung2_icon").style.opacity=.2; document.getElementById("text_dung2").style.opacity = 1;}
	if (Player.sapphire) {document.getElementById("dung3_icon").style.opacity=1; document.getElementById("text_dung3").style.opacity = .2;} else{document.getElementById("dung3_icon").style.opacity=.2; document.getElementById("text_dung3").style.opacity = 1;}

	if (Check.deku_queen_gohma != "unknown") {if (document.getElementById("text_" + dekuPlacement) != null) {document.getElementById(dekuPlacement + "_icon").style.opacity=1; document.getElementById("text_" + dekuPlacement).style.opacity=.2}}
	if (Check.dodongos_king_dodongo != "unknown") {if (document.getElementById("text_" + dodongosPlacement) != null) {document.getElementById(dodongosPlacement + "_icon").style.opacity=1; document.getElementById("text_" + dodongosPlacement).style.opacity=.2}}
	if (Check.jabu_barinade != "unknown") {if (document.getElementById("text_" + jabuPlacement) != null) {document.getElementById(jabuPlacement + "_icon").style.opacity=1; document.getElementById("text_" + jabuPlacement).style.opacity=.2}}
	if (Check.forest_phantomGanon != "unknown") {if (document.getElementById("text_" + forestPlacement) != null) {document.getElementById(forestPlacement + "_icon").style.opacity=1; document.getElementById("text_" + forestPlacement).style.opacity=.2}}
	if (Check.fire_volvagia != "unknown") {if (document.getElementById("text_" + firePlacement) != null) {document.getElementById(firePlacement + "_icon").style.opacity=1; document.getElementById("text_" + firePlacement).style.opacity=.2}}
	if (Check.water_morpha != "unknown") {if (document.getElementById("text_" + waterPlacement) != null) {document.getElementById(waterPlacement + "_icon").style.opacity=1; document.getElementById("text_" + waterPlacement).style.opacity=.2}}
	if (Check.spirit_twinrova != "unknown") {if (document.getElementById("text_" + spiritPlacement) != null) {document.getElementById(spiritPlacement + "_icon").style.opacity=1; document.getElementById("text_" + spiritPlacement).style.opacity=.2}}
	if (Check.shadow_bongo != "unknown") {if (document.getElementById("text_" + shadowPlacement) != null) {document.getElementById(shadowPlacement + "_icon").style.opacity=1; document.getElementById("text_" + shadowPlacement).style.opacity=.2}}
	if (document.getElementById("text_" + pocketPlacement) != null) {document.getElementById(pocketPlacement + "_icon").style.opacity=1; document.getElementById("text_" + pocketPlacement).style.opacity=.2}
}

function checkGanons() {
	if (Player.magic1 && Player.light_arrows && Player.bow1 && Player.ganons_checks_remaining > 0) {
		document.getElementById("ganons").click();
	}
}

function setInLogicMaxForDungeons() {
	if (Player.forest_checks_remaining >=0 && (Player.forest_checks_remaining < Player.forest_logically_accessible)) {Player.logically_accessible -= (Player.forest_logically_accessible - Player.forest_checks_remaining);}
	if (Player.fire_checks_remaining >=0 && (Player.fire_checks_remaining < Player.fire_logically_accessible)) {Player.logically_accessible -= (Player.fire_logically_accessible - Player.fire_checks_remaining);}
	if (Player.water_checks_remaining >=0 && (Player.water_checks_remaining < Player.water_logically_accessible)) {Player.logically_accessible -= (Player.water_logically_accessible - Player.water_checks_remaining);}
	if (Player.spirit_checks_remaining >=0 && (Player.spirit_checks_remaining < Player.spirit_logically_accessible)) {Player.logically_accessible -= (Player.spirit_logically_accessible - Player.spirit_checks_remaining);}
	if (Player.shadow_checks_remaining >=0 && (Player.shadow_checks_remaining < Player.shadow_logically_accessible)) {Player.logically_accessible -= (Player.shadow_logically_accessible - Player.shadow_checks_remaining);}
	if (Player.gtg_checks_remaining >=0 && (Player.gtg_checks_remaining < Player.gtg_logically_accessible)) {Player.logically_accessible -= (Player.gtg_logically_accessible - Player.gtg_checks_remaining);}
	if (Player.well_checks_remaining >=0 && (Player.well_checks_remaining < Player.well_logically_accessible)) {Player.logically_accessible -= (Player.well_logically_accessible - Player.well_checks_remaining);}
	if (Player.ganons_checks_remaining >=0 && (Player.ganons_checks_remaining < Player.ganons_logically_accessible)) {Player.logically_accessible -= (Player.ganons_logically_accessible - Player.ganons_checks_remaining);}
}
function toggleLinsoGoMode() {
	if (linsoGoMode) {linsoGoMode = false; document.getElementById("linsoLight").style.opacity = 0;}
	else {linsoGoMode = true; document.getElementById("linsoLight").style.opacity = 0.5;}
	}

function refreshLinSo() {
	if (linso) {
		document.getElementById("linsoColumn").style.display = "inline-block";
		for (var i = 0; i <= 11; i++) {
			if (Check[Locations[lastItem + i+1]] != "unknown") {document.getElementById("linsoC" + soliLinsoSongOrderConvert[i]).style.opacity = 1;} else {document.getElementById("linsoC" + soliLinsoSongOrderConvert[i]).style.opacity = 0;}
		}
		var temp = 0;
		for (var i = 1; i <= 11; i++) {
			for (var j = 1; j <= 6; j++) {
				if (i == 10 && j >= 4) {
					document.getElementById("linso" + i + j).innerHTML = document.getElementById("text_dung" + (j-3)).innerHTML.toUpperCase();
					continue;
				}
				if (i == 11) {
					document.getElementById("linso" + i + j).innerHTML = document.getElementById("text_dung" + (3 + j)).innerHTML.toUpperCase();
					continue;
				}
				if (i > 9) {continue;}
				if (linsoOrder[temp] == "" || linsoOrder[temp] == "circus") {temp += 1; continue;}
				if (linsoOrder[temp] == "" || linsoOrder[temp] == "skull_counter") {temp += 1; continue;}
				if (linsoOrder[temp] == "hookshot") {if (Player.hookshot && !Player.longshot)  {document.getElementById("linso" + i + j).src = Player.hookshot_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else if (Player.longshot){document.getElementById("linso" + i + j).src = Player.longshot_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else {document.getElementById("linso" + i + j).src = Player.hookshot_img; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;} }
				else if (linsoOrder[temp] == "silver_scale") {if (Player.silver_scale && !Player.golden_scale)  {document.getElementById("linso" + i + j).src = Player.silver_scale_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else if (Player.golden_scale){document.getElementById("linso" + i + j).src = Player.golden_scale_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else {document.getElementById("linso" + i + j).src = Player.silver_scale_img; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}}
				else if (linsoOrder[temp] == "adults_wallet") {if (Player.tycoon_wallet) {document.getElementById("linso103").style.opacity = 1;} else{document.getElementById("linso103").style.opacity = 0;} if (Player.giants_wallet)  { document.getElementById("linso" + i + j).src = Player.wallet2_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else if (Player.adults_wallet){document.getElementById("linso" + i + j).src = Player.wallet1_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else {document.getElementById("linso" + i + j).src = Player.wallet1_img; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}}
				else if (linsoOrder[temp] == "goron_bracelet") {if (Player.golden_gauntlets)  {document.getElementById("linso" + i + j).src = Player.golden_gauntlets_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else if (Player.silver_gauntlets){document.getElementById("linso" + i + j).src = Player.silver_gauntlets_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else if (Player.goron_bracelet){document.getElementById("linso" + i + j).src = Player.goron_bracelet_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else {document.getElementById("linso" + i + j).src = Player.goron_bracelet_img; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}}
				else if (linsoOrder[temp] == "bomb") {if (Player.bomb_bag) {document.getElementById("linso" + i + j).src = Player.bomb_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else {document.getElementById("linso" + i + j).src = Player.bomb_img; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}}
				else if (linsoOrder[temp] == "magic") {if (Player.double_magic)  {document.getElementById("linso" + i + j).src = Player.magic_2_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else if (Player.magic){document.getElementById("linso" + i + j).src = Player.magic_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;} else {document.getElementById("linso" + i + j).src = Player.magic_img; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}}
				else if (linsoOrder[temp] == "egg1" && Player.claim_check) {document.getElementById("linso" + i + j).src = Player.claim_check_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Player.eyedrops) {document.getElementById("linso" + i + j).src = Player.eyedrops_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Player.eyeball_frog) {document.getElementById("linso" + i + j).src = Player.eyeball_frog_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Player.prescription) {document.getElementById("linso" + i + j).src = Player.prescription_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Player.broken_sword) {document.getElementById("linso" + i + j).src = Player.broken_sword_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Player.poachers_saw) {document.getElementById("linso" + i + j).src = Player.poachers_saw_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Player.antidote) {document.getElementById("linso" + i + j).src = Player.antidote_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Player.odd_mushroom) {document.getElementById("linso" + i + j).src = Player.odd_mushroom_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Player.blue_chicken) {document.getElementById("linso" + i + j).src = Player.blue_chicken_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Player.chicken1) {document.getElementById("linso" + i + j).src = Player.chicken1_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1" && Player.egg1) {document.getElementById("linso" + i + j).src = Player.egg1_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg1") {document.getElementById("linso" + i + j).src = Player.egg1_img; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}
				else if (linsoOrder[temp] == "egg2" && Player.mask_of_truth) {document.getElementById("linso" + i + j).src = Player.mask_of_truth_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Player.gerudo_mask) {document.getElementById("linso" + i + j).src = Player.gerudo_mask_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Player.zora_mask) {document.getElementById("linso" + i + j).src = Player.zora_mask_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Player.goron_mask) {document.getElementById("linso" + i + j).src = Player.goron_mask_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Player.bunny_hood) {document.getElementById("linso" + i + j).src = Player.bunny_hood_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Player.spooky_mask) {document.getElementById("linso" + i + j).src = Player.spooky_mask_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Player.skull_mask) {document.getElementById("linso" + i + j).src = Player.skull_mask_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Player.keaton_mask) {document.getElementById("linso" + i + j).src = Player.keaton_mask_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Player.zeldas_letter) {document.getElementById("linso" + i + j).src = Player.zeldas_letter_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Player.chicken2) {document.getElementById("linso" + i + j).src = Player.chicken2_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2" && Player.egg2) {document.getElementById("linso" + i + j).src = Player.egg2_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else if (linsoOrder[temp] == "egg2") {document.getElementById("linso" + i + j).src = Player.egg2_img; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}
				else if (Player[linsoOrder[temp]] || (Player[linsoOrder[temp] + 1])) {document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
				else {document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}
				temp += 1;
			}
		}
		temp = 0;
		for (var i = 1; i <= 12; i++) {
			if (Player[linsoOrder2[temp]]) {document.getElementById("linsoS" + i).style.filter = "none"; document.getElementById("linsoS" + i).style.opacity = 1;}
				else {document.getElementById("linsoS" + i).style.filter = "grayscale(100%)"; document.getElementById("linsoS" + i).style.opacity = .2;}
				temp += 1;
		}
    if (angelFlag) {document.getElementById(animalID).style.opacity = 0.4;}
	}
	else {document.getElementById("linsoColumn").style.display = "none";}
}
function updateInputs() {
	for (var i = 0; i < inputs.length; i++) {
		inputs[i] = document.getElementById(inputNames[i]).value;
		localStorage.setItem(inputNames[i], inputs[i]);
	}
	for (var i = 0; i < spawnInputs.length; i++) {
		spawnInputs[i] = document.getElementById(spawnNames[i]).value;
		localStorage.setItem(spawnNames[i], spawnInputs[i]);
	}
}
function updateLogicInfo() {
	if (document.getElementById("presets").value == "LESS_PROGRESSION") {Rules.kzSkip = true; document.getElementById("bosskeys").value = "REMOVE"; document.getElementById("shuffleOcarinas").value = "OFF"; document.getElementById("ganonsBridge").value = "9_REWARDS"; document.getElementById("closedDeku").value = "CLOSED"; document.getElementById("closedFountain").value = "CLOSED"; document.getElementById("blueFireArrows").value = "OFF"; document.getElementById("keysanity").value = "OFF"; document.getElementById("cowSanity").value = "OFF"; document.getElementById("shuffleGerudoCard").value = "OFF"; document.getElementById("shuffleBeanPack").value = "OFF"; document.getElementById("preplantedBeans").value = "OFF"; document.getElementById("shuffleExpensivePurchases").value = "OFF"; document.getElementById("ganonBKSetting").value = "NONE"; document.getElementById("csmc").value = "ON"; document.getElementById("shopSanity").value = "OFF"; document.getElementById("scrubSanity").value = "OFF"; document.getElementById("FAE_option").value = "BANNED"; document.getElementById("erOption").value = "OFF"; document.getElementById("skullSanity").value = "OFF"; document.getElementById("hints_type").value = "PATH"; document.getElementById("barren_text").style.display = "inline-block"; document.getElementById("barren_input1").style.display = "inline-block"; document.getElementById("barren_input2").style.display = "inline-block"; document.getElementById("barren_input3").style.display = "inline-block"; document.getElementById("barren_input4").style.display = "none"; document.getElementById("barren_input5").style.display = "none";}
	if (document.getElementById("presets").value == "S3") {Rules.kzSkip = false; document.getElementById("bosskeys").value = "DUNGEON_ONLY"; document.getElementById("shuffleOcarinas").value = "OFF"; document.getElementById("ganonsBridge").value = "ALL_MED"; document.getElementById("closedDeku").value = "OPEN"; document.getElementById("closedFountain").value = "CLOSED"; document.getElementById("blueFireArrows").value = "OFF"; document.getElementById("keysanity").value = "OFF"; document.getElementById("cowSanity").value = "OFF"; document.getElementById("shuffleGerudoCard").value = "OFF"; document.getElementById("shuffleBeanPack").value = "OFF"; document.getElementById("preplantedBeans").value = "OFF"; document.getElementById("shuffleExpensivePurchases").value = "OFF"; document.getElementById("ganonBKSetting").value = "NONE"; document.getElementById("csmc").value = "OFF"; document.getElementById("shopSanity").value = "OFF"; document.getElementById("scrubSanity").value = "OFF"; document.getElementById("FAE_option").value = "BANNED"; document.getElementById("erOption").value = "OFF"; document.getElementById("skullSanity").value = "OFF"; document.getElementById("hints_type").value = "WOTH"; document.getElementById("barren_text").style.display = "inline-block"; document.getElementById("barren_input1").style.display = "inline-block"; document.getElementById("barren_input2").style.display = "inline-block"; document.getElementById("barren_input3").style.display = "inline-block"; document.getElementById("barren_input4").style.display = "none"; document.getElementById("barren_input5").style.display = "none";}
	if (document.getElementById("presets").value == "S4") {Rules.kzSkip = false; document.getElementById("bosskeys").value = "DUNGEON_ONLY"; document.getElementById("shuffleOcarinas").value = "OFF"; document.getElementById("ganonsBridge").value = "2_MEDALS"; document.getElementById("closedDeku").value = "CLOSED"; document.getElementById("closedFountain").value = "CLOSED"; document.getElementById("blueFireArrows").value = "OFF"; document.getElementById("keysanity").value = "OFF"; document.getElementById("cowSanity").value = "OFF"; document.getElementById("shuffleGerudoCard").value = "OFF"; document.getElementById("shuffleBeanPack").value = "OFF"; document.getElementById("preplantedBeans").value = "OFF"; document.getElementById("shuffleExpensivePurchases").value = "OFF"; document.getElementById("ganonBKSetting").value = "LACS"; document.getElementById("csmc").value = "OFF"; document.getElementById("shopSanity").value = "OFF"; document.getElementById("scrubSanity").value = "OFF"; document.getElementById("FAE_option").value = "BANNED"; document.getElementById("erOption").value = "OFF"; document.getElementById("skullSanity").value = "OFF"; document.getElementById("hints_type").value = "WOTH"; document.getElementById("barren_text").style.display = "inline-block"; document.getElementById("barren_input1").style.display = "inline-block"; document.getElementById("barren_input2").style.display = "inline-block"; document.getElementById("barren_input3").style.display = "none"; document.getElementById("barren_input4").style.display = "none"; document.getElementById("barren_input5").style.display = "none";}
	if (document.getElementById("presets").value == "S5") {Rules.kzSkip = true; document.getElementById("bosskeys").value = "DUNGEON_ONLY"; document.getElementById("shuffleOcarinas").value = "OFF"; document.getElementById("ganonsBridge").value = "ALL_MED"; document.getElementById("closedDeku").value = "CLOSED"; document.getElementById("closedFountain").value = "CLOSED"; document.getElementById("blueFireArrows").value = "OFF"; document.getElementById("keysanity").value = "OFF"; document.getElementById("cowSanity").value = "OFF"; document.getElementById("shuffleGerudoCard").value = "OFF"; document.getElementById("shuffleBeanPack").value = "OFF"; document.getElementById("preplantedBeans").value = "OFF"; document.getElementById("shuffleExpensivePurchases").value = "OFF"; document.getElementById("ganonBKSetting").value = "NONE"; document.getElementById("csmc").value = "ON"; document.getElementById("shopSanity").value = "OFF"; document.getElementById("scrubSanity").value = "OFF"; document.getElementById("FAE_option").value = "BANNED"; document.getElementById("erOption").value = "OFF"; document.getElementById("skullSanity").value = "OFF"; document.getElementById("hints_type").value = "PATH"; document.getElementById("barren_text").style.display = "inline-block"; document.getElementById("barren_input1").style.display = "inline-block"; document.getElementById("barren_input2").style.display = "inline-block"; document.getElementById("barren_input3").style.display = "inline"; document.getElementById("barren_input4").style.display = "none"; document.getElementById("barren_input5").style.display = "none";}
	if (document.getElementById("presets").value == "S6") {Rules.kzSkip = false; document.getElementById("bosskeys").value = "DUNGEON_ONLY"; document.getElementById("shuffleOcarinas").value = "OFF"; document.getElementById("ganonsBridge").value = "ALL_MED"; document.getElementById("closedDeku").value = "CLOSED"; document.getElementById("closedFountain").value = "CLOSED"; document.getElementById("blueFireArrows").value = "OFF"; document.getElementById("keysanity").value = "OFF"; document.getElementById("cowSanity").value = "OFF"; document.getElementById("shuffleGerudoCard").value = "OFF"; document.getElementById("shuffleBeanPack").value = "OFF"; document.getElementById("preplantedBeans").value = "OFF"; document.getElementById("shuffleExpensivePurchases").value = "OFF"; document.getElementById("ganonBKSetting").value = "NONE"; document.getElementById("csmc").value = "ON"; document.getElementById("shopSanity").value = "OFF"; document.getElementById("scrubSanity").value = "OFF"; document.getElementById("FAE_option").value = "BANNED"; document.getElementById("erOption").value = "OFF"; document.getElementById("skullSanity").value = "OFF"; document.getElementById("hints_type").value = "PATH"; document.getElementById("barren_text").style.display = "none"; document.getElementById("barren_input1").style.display = "none"; document.getElementById("barren_input2").style.display = "none"; document.getElementById("barren_input3").style.display = "none"; document.getElementById("barren_input4").style.display = "none"; document.getElementById("barren_input5").style.display = "none"; document.getElementById("markAdultLocation").value = "tot"; alwaysHints = ["tokens_30", "tokens_40", "tokens_50", "oot", "nocturneSpot", "trade_quest", "frogs_2", "theater_skull"];}
	if (document.getElementById("presets").value == "S7") {Rules.kzSkip = true; document.getElementById("bosskeys").value = "DUNGEON_ONLY"; document.getElementById("shuffleOcarinas").value = "OFF"; document.getElementById("ganonsBridge").value = "ALL_MED"; document.getElementById("closedDeku").value = "CLOSED"; document.getElementById("closedFountain").value = "CLOSED"; document.getElementById("blueFireArrows").value = "OFF"; document.getElementById("keysanity").value = "OFF"; document.getElementById("cowSanity").value = "OFF"; document.getElementById("shuffleGerudoCard").value = "OFF"; document.getElementById("shuffleBeanPack").value = "OFF"; document.getElementById("preplantedBeans").value = "OFF"; document.getElementById("shuffleExpensivePurchases").value = "OFF"; document.getElementById("ganonBKSetting").value = "NONE"; document.getElementById("csmc").value = "ON"; document.getElementById("shopSanity").value = "OFF"; document.getElementById("scrubSanity").value = "OFF"; document.getElementById("FAE_option").value = "BANNED"; document.getElementById("erOption").value = "OFF"; document.getElementById("skullSanity").value = "OFF"; document.getElementById("hints_type").value = "PATH"; document.getElementById("barren_text").style.display = "inline-block"; document.getElementById("barren_input1").style.display = "inline-block"; document.getElementById("barren_input2").style.display = "inline-block"; document.getElementById("barren_input3").style.display = "inline-block"; document.getElementById("barren_input4").style.display = "none"; document.getElementById("barren_input5").style.display = "none"; alwaysHints = ["tokens_30", "tokens_40", "tokens_50", "oot", "nocturneSpot", "trade_quest", "frogs_2", "theater_skull", "scrub_crater_child", "cow_kokiri"];}
	if (document.getElementById("presets").value == "TRUTH") {Rules.kzSkip = true; document.getElementById("bosskeys").value = "DUNGEON_ONLY"; document.getElementById("shuffleOcarinas").value = "OFF"; document.getElementById("ganonsBridge").value = "ALL_MED"; document.getElementById("closedDeku").value = "CLOSED"; document.getElementById("closedFountain").value = "CLOSED"; document.getElementById("blueFireArrows").value = "ON"; document.getElementById("keysanity").value = "OFF"; document.getElementById("cowSanity").value = "OFF"; document.getElementById("shuffleGerudoCard").value = "OFF"; document.getElementById("shuffleBeanPack").value = "OFF"; document.getElementById("preplantedBeans").value = "OFF"; document.getElementById("shuffleExpensivePurchases").value = "OFF"; document.getElementById("ganonBKSetting").value = "NONE"; document.getElementById("csmc").value = "ON"; document.getElementById("shopSanity").value = "OFF"; document.getElementById("scrubSanity").value = "OFF"; document.getElementById("FAE_option").value = "BANNED"; document.getElementById("erOption").value = "OFF"; document.getElementById("skullSanity").value = "OFF"; document.getElementById("hints_type").value = "PATH";  document.getElementById("barren_text").style.display = "inline-block"; document.getElementById("barren_input1").style.display = "inline-block"; document.getElementById("barren_input2").style.display = "inline-block"; document.getElementById("barren_input3").style.display = "inline-block"; document.getElementById("barren_input4").style.display = "inline-block"; document.getElementById("barren_input5").style.display = "none"; alwaysHints = ["tokens_30", "tokens_40", "tokens_50", "oot", "nocturneSpot", "trade_quest", "frogs_2", "theater_skull", "theater_truth"];Player.farores_wind = true;}
	if (document.getElementById("presets").value == "LEAGUE_S9") {Rules.kzSkip = true; document.getElementById("bosskeys").value = "DUNGEON_ONLY"; document.getElementById("shuffleOcarinas").value = "OFF"; document.getElementById("ganonsBridge").value = "5_MEDALS"; document.getElementById("closedDeku").value = "CLOSED"; document.getElementById("closedFountain").value = "CLOSED"; document.getElementById("blueFireArrows").value = "ON"; document.getElementById("keysanity").value = "OFF"; document.getElementById("cowSanity").value = "OFF"; document.getElementById("shuffleGerudoCard").value = "OFF"; document.getElementById("shuffleBeanPack").value = "OFF"; document.getElementById("preplantedBeans").value = "OFF"; document.getElementById("shuffleExpensivePurchases").value = "ON"; document.getElementById("ganonBKSetting").value = "NONE"; document.getElementById("csmc").value = "ON"; document.getElementById("shopSanity").value = "4"; document.getElementById("scrubSanity").value = "OFF"; document.getElementById("FAE_option").value = "BANNED"; document.getElementById("erOption").value = "OFF"; document.getElementById("skullSanity").value = "OFF"; document.getElementById("hints_type").value = "PATH"; document.getElementById("barren_text").style.display = "inline-block"; document.getElementById("barren_input1").style.display = "inline-block"; document.getElementById("barren_input2").style.display = "inline-block"; document.getElementById("barren_input3").style.display = "inline"; document.getElementById("barren_input4").style.display = "none"; document.getElementById("barren_input5").style.display = "none"; alwaysHints = ["tokens_30", "tokens_40", "tokens_50", "oot", "nocturneSpot", "trade_quest", "frogs_2", "theater_skull", "scrub_crater_child"];Player.farores_wind = true; Known.farores_wind = true; Player.lens = true; Known.lens = true; Player.light_arrows = true; Known.light_arrows = true;}
	if (document.getElementById("presets").value == "SGL_2025") {Rules.kzSkip = true; chusInBigChests = true; document.getElementById("bosskeys").value = "DUNGEON_ONLY"; document.getElementById("shuffleOcarinas").value = "OFF"; document.getElementById("ganonsBridge").value = "3_STONES"; document.getElementById("closedDeku").value = "CLOSED"; document.getElementById("closedFountain").value = "CLOSED"; document.getElementById("blueFireArrows").value = "ON"; document.getElementById("keysanity").value = "OFF"; document.getElementById("cowSanity").value = "OFF"; document.getElementById("shuffleGerudoCard").value = "OFF"; document.getElementById("shuffleBeanPack").value = "OFF"; document.getElementById("preplantedBeans").value = "OFF"; document.getElementById("shuffleExpensivePurchases").value = "OFF"; document.getElementById("ganonBKSetting").value = "LACS"; document.getElementById("csmc").value = "ON"; document.getElementById("shopSanity").value = "OFF"; document.getElementById("scrubSanity").value = "OFF"; document.getElementById("FAE_option").value = "BANNED"; document.getElementById("erOption").value = "OFF"; document.getElementById("skullSanity").value = "OFF"; document.getElementById("hints_type").value = "PATH"; document.getElementById("barren_text").style.display = "inline-block"; document.getElementById("barren_input1").style.display = "inline-block"; document.getElementById("barren_input2").style.display = "inline-block"; document.getElementById("barren_input3").style.display = "inline-block"; document.getElementById("barren_input4").style.display = "inline-block"; document.getElementById("barren_input5").style.display = "inline-block"; document.getElementById("markAdultLocation").value = "tot"; alwaysHints = ["tokens_20", "tokens_30", "tokens_40", "tokens_50", "nocturneSpot", "frogs_2", "theater_skull"]; Player.prelude = true; Player.farores_wind = true; Known.farores_wind = true; Player.lens = true; Known.lens = true;}
	if (document.getElementById("presets").value == "S8") {Rules.kzSkip = true; document.getElementById("bosskeys").value = "DUNGEON_ONLY"; document.getElementById("shuffleOcarinas").value = "OFF"; document.getElementById("ganonsBridge").value = "VANILLA"; document.getElementById("closedDeku").value = "CLOSED"; document.getElementById("closedFountain").value = "CLOSED"; document.getElementById("blueFireArrows").value = "ON"; document.getElementById("keysanity").value = "OFF"; document.getElementById("cowSanity").value = "OFF"; document.getElementById("shuffleGerudoCard").value = "OFF"; document.getElementById("shuffleBeanPack").value = "OFF"; document.getElementById("preplantedBeans").value = "OFF"; document.getElementById("shuffleExpensivePurchases").value = "OFF"; document.getElementById("ganonBKSetting").value = "NONE"; document.getElementById("csmc").value = "ON"; document.getElementById("shopSanity").value = "OFF"; document.getElementById("scrubSanity").value = "OFF"; document.getElementById("FAE_option").value = "BANNED"; document.getElementById("erOption").value = "OFF"; document.getElementById("skullSanity").value = "OFF"; document.getElementById("hints_type").value = "PATH"; document.getElementById("barren_text").style.display = "inline-block"; document.getElementById("barren_input1").style.display = "inline-block"; document.getElementById("barren_input2").style.display = "inline-block"; document.getElementById("barren_input3").style.display = "inline-block"; document.getElementById("barren_input4").style.display = "none"; document.getElementById("barren_input5").style.display = "none"; document.getElementById("markAdultLocation").value = "tot"; alwaysHints = ["tokens_30", "tokens_40", "tokens_50", "oot", "nocturneSpot", "trade_quest", "frogs_2", "theater_skull"];}
	if (document.getElementById("presets").value == "S9") {Rules.kzSkip = true; document.getElementById("bosskeys").value = "DUNGEON_ONLY"; document.getElementById("shuffleOcarinas").value = "OFF"; document.getElementById("ganonsBridge").value = "VANILLA"; document.getElementById("closedDeku").value = "CLOSED"; document.getElementById("closedFountain").value = "CLOSED"; document.getElementById("blueFireArrows").value = "ON"; document.getElementById("keysanity").value = "OFF"; document.getElementById("cowSanity").value = "OFF"; document.getElementById("shuffleGerudoCard").value = "OFF"; document.getElementById("shuffleBeanPack").value = "OFF"; document.getElementById("preplantedBeans").value = "OFF"; document.getElementById("shuffleExpensivePurchases").value = "OFF"; document.getElementById("ganonBKSetting").value = "NONE"; document.getElementById("csmc").value = "ON"; document.getElementById("shopSanity").value = "OFF"; document.getElementById("scrubSanity").value = "OFF"; document.getElementById("FAE_option").value = "ALLOWED"; document.getElementById("erOption").value = "DUNGEONS"; document.getElementById("skullSanity").value = "OFF"; document.getElementById("hints_type").value = "PATH"; document.getElementById("barren_text").style.display = "inline-block"; document.getElementById("barren_input1").style.display = "inline-block"; document.getElementById("barren_input2").style.display = "inline-block"; document.getElementById("barren_input3").style.display = "none"; document.getElementById("barren_input4").style.display = "none"; document.getElementById("barren_input5").style.display = "none"; document.getElementById("markAdultLocation").value = "tot"; alwaysHints = ["tokens_30", "tokens_40", "tokens_50", "oot", "nocturneSpot", "trade_quest", "frogs_2", "theater_skull"];}
	
	
	if (document.getElementById("presets").value == "LEAGUE_S9") {
		document.getElementById("important_hints_div").style.display = "block";
		document.getElementById("important_input3").style.display = "inline-block";
	}
	else {
		document.getElementById("important_hints_div").style.display = "none";
	}
	
	document.getElementById("woth_input1").style.display = "inline";
	document.getElementById("woth_input2").style.display = "inline";
	document.getElementById("woth_input3").style.display = "inline";
	document.getElementById("woth_input4").style.display = "inline";
	if(document.getElementById("presets").value != "S4")
		document.getElementById("woth_input5").style.display = "inline";
	else
		document.getElementById("woth_input5").style.display = "none";
	if(document.getElementById("presets").value == "LEAGUE_S7" || document.getElementById("presets").value == "S9")
		document.getElementById("woth_input6").style.display = "inline";
	else
		document.getElementById("woth_input6").style.display = "none";
	
	if(document.getElementById("hints_type").value == "PATH") { 
		document.getElementById("woth_text").innerHTML = "Path / Important / Lights"; 
		document.getElementById("path_boss1").style.display = "inline-block"; 
		document.getElementById("path_boss2").style.display = "inline-block"; 
		document.getElementById("path_boss3").style.display = "inline-block"; 
		document.getElementById("path_boss4").style.display = "inline-block"; 
		if(document.getElementById("presets").value != "S4")
			document.getElementById("path_boss5").style.display = "inline-block";
		else
			document.getElementById("path_boss5").style.display = "none";
		if(document.getElementById("presets").value == "LEAGUE_S7" || document.getElementById("presets").value == "S9")
			document.getElementById("path_boss6").style.display = "inline-block"; 
		else
			document.getElementById("path_boss6").style.display = "none"; 
		document.getElementById("path_arrow1").style.display = "inline";
		document.getElementById("path_arrow2").style.display = "inline"; 
		document.getElementById("path_arrow3").style.display = "inline"; 
		document.getElementById("path_arrow4").style.display = "inline"; 
		if(document.getElementById("presets").value != "S4")
			document.getElementById("path_arrow5").style.display = "inline";
		else
			document.getElementById("path_arrow5").style.display = "none";
		if(document.getElementById("presets").value == "LEAGUE_S7" || document.getElementById("presets").value == "S9")
			document.getElementById("path_arrow6").style.display = "inline";
		else
			document.getElementById("path_arrow6").style.display = "none";
	}
	else {
		document.getElementById("woth_text").innerHTML = "WOTH"; 
		document.getElementById("path_boss1").style.display = "none"; 
		document.getElementById("path_boss2").style.display = "none"; 
		document.getElementById("path_boss3").style.display = "none"; 
		document.getElementById("path_boss4").style.display = "none"; 
		document.getElementById("path_boss5").style.display = "none"; 
		document.getElementById("path_boss6").style.display = "none"; 
		document.getElementById("path_arrow1").style.display = "none"; 
		document.getElementById("path_arrow2").style.display = "none"; 
		document.getElementById("path_arrow3").style.display = "none"; 
		document.getElementById("path_arrow4").style.display = "none"; 
		document.getElementById("path_arrow5").style.display = "none"; 
		document.getElementById("path_arrow6").style.display = "none";
	}
		
	if (document.getElementById("presets").value == "LESS_PROGRESSION") {document.getElementById("triforcePic").style.display = "inline-block"; document.getElementById("pieceDungeons").style.display = "inline-block"; document.getElementById("pieceDungeons").value = "dedojafofiwaspsh";}
	else {document.getElementById("triforcePic").style.display = "none"; document.getElementById("pieceDungeons").style.display = "none";}
	
	if(document.getElementById("blueFireArrows").value == "OFF")
		document.getElementById("ice_arrows_location_div").style.display = "none";
	else
		document.getElementById("ice_arrows_location_div").style.display = "inline";
	
	if(document.getElementById("closedFountain").value == "CLOSED") {
		document.getElementById("rutos_letter_location_div").style.display = "inline";
		document.getElementById("bottle4_location_div").style.display = "none";
	}
	else {
		document.getElementById("rutos_letter_location_div").style.display = "none";
		document.getElementById("bottle4_location_div").style.display = "inline";
	}
	
	if(document.getElementById("shopSanity").value == "OFF")
		document.getElementById("wallet3_location_div").style.display = "none";
	else
		document.getElementById("wallet3_location_div").style.display = "inline";
	
	if(document.getElementById("keysanity").value == "KEY RINGS") {
		document.getElementById("forest_key_ring_location_div").style.display = "inline";
		document.getElementById("fire_key_ring_location_div").style.display = "inline";
		document.getElementById("water_key_ring_location_div").style.display = "inline";
		document.getElementById("spirit_key_ring_location_div").style.display = "inline";
		document.getElementById("shadow_key_ring_location_div").style.display = "inline";
		document.getElementById("well_key_ring_location_div").style.display = "inline";
		document.getElementById("gtg_key_ring_location_div").style.display = "inline";
		document.getElementById("ganons_key_ring_location_div").style.display = "inline";
	}
	else {
		document.getElementById("forest_key_ring_location_div").style.display = "none";
		document.getElementById("fire_key_ring_location_div").style.display = "none";
		document.getElementById("water_key_ring_location_div").style.display = "none";
		document.getElementById("spirit_key_ring_location_div").style.display = "none";
		document.getElementById("shadow_key_ring_location_div").style.display = "none";
		document.getElementById("well_key_ring_location_div").style.display = "none";
		document.getElementById("gtg_key_ring_location_div").style.display = "none";
		document.getElementById("ganons_key_ring_location_div").style.display = "none";
	}
	
	if(document.getElementById("shuffleGerudoCard").value == "ON") {
		document.getElementById("gerudo_card_location_div").style.display = "inline";
	}
	else {
		document.getElementById("gerudo_card_location_div").style.display = "none";
	}
	
	if(document.getElementById("shuffleBeanPack").value == "ON") {
		document.getElementById("magic_bean_pack_location_div").style.display = "inline";
	}
	else {
		document.getElementById("magic_bean_pack_location_div").style.display = "none";
	}
	
	if (document.getElementById("bosskeys").value == "REMOVE") {Player.forest_boss_key = true; Player.fire_boss_key = true; Player.water_boss_key = true; Player.spirit_boss_key = true; Player.shadow_boss_key = true; removeBKFlag = true;}
	else if (removeBKFlag) {removeBKFlag = false; Player.forest_boss_key = false; Player.fire_boss_key = false; Player.water_boss_key = false; Player.spirit_boss_key = false; Player.shadow_boss_key = false;}
	
	Logic.gold_skulltulas = 0;
	var i;
	document.getElementById("skullsInLogicList").innerHTML = "";
	for (i = 1; i<=100; i++) {
		if (gs[i] == true) {Logic.gold_skulltulas +=1; document.getElementById("skullsInLogicList").innerHTML += gsText[i] + "<br />" ;} ;
	}
	document.getElementById("tokens_acquired").innerHTML = "Tokens: " + Player.tokens;
	if (true) {document.getElementById("skulls_in_logic").innerHTML = "In Logic: " + Logic.gold_skulltulas;} else {document.getElementById("skulls_in_logic").innerHTML = "In Logic: ??"}

	Player.logically_accessible = 0;
	Player.forest_logically_accessible=0;
	Player.fire_logically_accessible=0;
	Player.water_logically_accessible=0;
	Player.spirit_logically_accessible=0;
	Player.shadow_logically_accessible=0;
	Player.gtg_logically_accessible=0;
	Player.well_logically_accessible=0;
	Player.ganons_logically_accessible=0;
	
	Player.forest_checks_remaining = 0;
	Player.fire_checks_remaining = 0;
	Player.water_checks_remaining = 0;
	Player.spirit_checks_remaining = 0;
	Player.shadow_checks_remaining = 0;
	Player.gtg_checks_remaining = 0;
	Player.well_checks_remaining = 0;
	Player.ganons_checks_remaining = 0;

	temp = 0;
	var colorChange = false;
	Player.checks_remaining = 0;
	for (var i = 0; i < Locations.length; i++) {
		if (i < AreaIndexes[35]) {
			document.getElementById(Locations[i]).style.display = "none";
			document.getElementById("text_" + Locations[i]).style.display = "none";
			document.getElementById("br_" + Locations[i]).style.display = "none";
		}
		
		if (document.getElementById("skullSanity").value == "OFF") {
			if(Locations[i].startsWith("gs_"))
				continue;
		}
		else if (document.getElementById("skullSanity").value == "DUNGEON") {
			if(Locations[i].startsWith("gs_") && (!Locations[i].startsWith("gs_deku") && !Locations[i].startsWith("gs_dodongos") && !Locations[i].startsWith("gs_jabu") && !Locations[i].startsWith("gs_forest") && !Locations[i].startsWith("gs_fire") && !Locations[i].startsWith("gs_water") && !Locations[i].startsWith("gs_spirit") && !Locations[i].startsWith("gs_shadow") && !Locations[i].startsWith("gs_ice") && !Locations[i].startsWith("gs_well")))
				continue;
		}
		else if (document.getElementById("skullSanity").value == "OVERWORLD") {
			if(Locations[i].startsWith("gs_deku") || Locations[i].startsWith("gs_dodongos") || Locations[i].startsWith("gs_jabu") || Locations[i].startsWith("gs_forest") || Locations[i].startsWith("gs_fire") || Locations[i].startsWith("gs_water") || Locations[i].startsWith("gs_spirit") || Locations[i].startsWith("gs_shadow") || Locations[i].startsWith("gs_ice") || Locations[i].startsWith("gs_well"))
				continue;
		}
		
		if (document.getElementById("scrubSanity").value == "OFF") {
			if(Locations[i].startsWith("scrub_"))
				continue;
		}
		else if (document.getElementById("scrubSanity").value == "OVERWORLD") {
			if(Locations[i].startsWith("scrub_dodongos") || Locations[i].startsWith("scrub_jabu") || Locations[i].startsWith("scrub_ganons"))
				continue;
		}
		
		if (document.getElementById("shopSanity").value != "4" && Locations[i].startsWith("shop_")) {continue;}
		if (document.getElementById("cowSanity").value != "ON" && Locations[i].startsWith("cow_")) {continue;}
		if (document.getElementById("gossips").value != "ON" && Locations[i].startsWith("h_")) {continue;}
		if (document.getElementById("ganonBKSetting").value == "LACS" && Locations[i].startsWith("lacs")) {continue;}
		if (document.getElementById("shuffleOcarinas").value == "OFF" && (Locations[i].startsWith("hyrule_ocarina") || Locations[i].startsWith("lost_woods_fairy_ocarina"))) {continue;}
		if (document.getElementById("shuffleBeanPack").value == "OFF" && Locations[i].startsWith("river_bean_salesman")) {continue;}
		if (document.getElementById("shuffleGerudoCard").value == "OFF" && Locations[i].startsWith("fortress_card")) {continue;}
		if (document.getElementById("presets").value != "TRUTH" && Locations[i].startsWith("theater_truth")) {continue;}
		if (document.getElementById("shuffleExpensivePurchases").value == "OFF" && (Locations[i] == "goron_medigoron" || Locations[i].startsWith("kakariko_hag") || Locations[i].startsWith("wasteland_carpet"))) {continue;}
		
		var key = Locations[i];
		
		str = "text_" + key;
		str2 = "br_" + key;
        
        if (key == "preludeSpot" || key == "nocturneSpot" || key == "oot") {document.getElementById(str).style.display = "inline-block"; document.getElementById(str2).style.display = "inline-block";}
		
        if (Check[key] == "unknown" || forcedDisplay[i] || (coopmode && (Check[key] == "small_key" || Check[key] == "boss_key"))) {
			document.getElementById(str).style.display = "inline-block";
			document.getElementById(key).style.display = "inline-block";
			document.getElementById(str2).style.display = "inline-block";
			if (i < AreaIndexes[35]) {
				if (Locations[i].includes("forest_")) {Player.forest_checks_remaining += 1;}
				else if (Locations[i].includes("fire_")) {Player.fire_checks_remaining += 1;}
				else if (Locations[i].includes("water_")) {Player.water_checks_remaining += 1;}
				else if (Locations[i].includes("spirit_")) {Player.spirit_checks_remaining += 1;}
				else if (Locations[i].includes("shadow_")) {Player.shadow_checks_remaining += 1;}
				else if (Locations[i].includes("gtg_")) {Player.gtg_checks_remaining += 1;}
				else if (Locations[i].includes("well_")) {Player.well_checks_remaining += 1;}
				else if (Locations[i].includes("ganons_")) {Player.ganons_checks_remaining += 1;}
				else if (!Locations[i].includes("h_")) {Player.checks_remaining += 1;}
			}
		}
		
		if(document.getElementById(key).value != "")
			document.getElementById(key).style.backgroundBlendMode = "overlay"; 
		else
			document.getElementById(key).style.backgroundBlendMode = ""; 
		
		if(key.startsWith("h_")) {
            document.getElementById(str).className = "gossip_text";
            if (Location_Peek[key] && Check[key] != "junk") {
                document.getElementById(str).style.display = "inline-block";
                document.getElementById(str2).style.display = "inline-block";
                document.getElementById(key).style.display = "inline-block";
            }
			else {
                document.getElementById(str).style.display = "none"
                document.getElementById(str2).style.display = "none";
                document.getElementById(key).style.display = "none";
            }
			continue;
		}
		
		if (document.getElementById(str).style.display != "none") {if (document.getElementById(str).style.color == "orange" || document.getElementById(str).style.color == "magenta") {colorChange = true;} else {colorChange = false;}} else {colorChange = false;}
		if(document.getElementById(str).style.display == "none") {continue;}
		document.getElementById(str).innerHTML = backUp[i];
		if (i > lastItem && Check[key] != "unknown") {document.getElementById(str).innerHTML += ": " + capitalizeFirstLetter(ItemNames[Items.indexOf(Check[key])])}
		
		if(i > lastItem && Check[key] != "unknown" && !Player[Check[key]] && (Location_Logic[key] || Location_Peek[key] || Location_Could_Access[key]))
			document.getElementById(str).style.backgroundColor = "gray";
		else
			document.getElementById(str).style.backgroundColor = "";
		
		if(Location_Logic[key] == true) {
			if (nerfed && Location_Peek[key] == true && !Location_Access[key] == true) {
				document.getElementById(str).className= "access_check_text";
				document.getElementById(str).style.opacity = .5;
				document.getElementById(str).style.fontWeight = "normal";
				document.getElementById(str).style.color ="yellow";
			}
			else if (Location_Peek[key] == true) {
				document.getElementById(str).className= "logic_check_text"; 
				document.getElementById(str).style.fontWeight = "bold";
				document.getElementById(str).style.opacity = 1;
			}
			else {
				document.getElementById(str).className= "known_check_text";
				document.getElementById(str).style.fontWeight = "normal";
				//document.getElementById(str).style.fontStyle = "italic";
				document.getElementById(str).style.opacity = .5;
			}
			
			if ((!woth1Locations.includes(key) && !woth2Locations.includes(key) && !woth3Locations.includes(key) && !woth4Locations.includes(key) && !woth5Locations.includes(key) && !woth6Locations.includes(key)) || !circus) {
				if(i > lastItem && Check[key] != "unknown" && ManualOutOfLogicItems[Check[key]]) {
					document.getElementById(str).style.color = "#FFA500";
				}
				else {
					document.getElementById(str).style.color = inLogicColor;
				}
			}
			else {
				var woths = [woth1Locations.includes(key), woth2Locations.includes(key), woth3Locations.includes(key), woth4Locations.includes(key), woth5Locations.includes(key), woth6Locations.includes(key)];
				var j;
				var k;
				var l;
				var text = document.getElementById(str).innerHTML;
				document.getElementById(str).innerHTML = "";
				for (j = 0; j < text.length; j++) {
					for (k = 0; k < woths.length; k++) {
						if (woths[k]) {
						    let temptext = '<span style = "color: ' + WotHColors[k+1] + '">' + text[j] + '</span>';
							for (l = k+1; l <woths.length; l++) {
								if (woths[l]) {woths[k] = false;}
							}
							document.getElementById(str).innerHTML += temptext;
							break;
						}	
						//if (k == woths.length -1) {document.getElementById(str).innerHTML += text[j];}
					}
				}
			}
			if(document.getElementById(key).style.display != "none") {
				if (i <= lastItem) {Player.logically_accessible += 1;}
				if (i == AreaIndexes[12] - 1 && Player.deku_checks_remaining == 0) {Player.logically_accessible -= 1;}
			    if (i == AreaIndexes[16] - 1 && Player.dodongos_checks_remaining == 0) {Player.logically_accessible -= 1;}
				if (i == AreaIndexes[27] - 1 && Player.jabu_checks_remaining == 0) {Player.logically_accessible -= 1;}
				if (i >= AreaIndexes[27] && i < AreaIndexes[28]) {Player.forest_logically_accessible += 1;}
				if (i >= AreaIndexes[28] && i < AreaIndexes[27]) {Player.fire_logically_accessible += 1;}
				if (i >= AreaIndexes[29] && i < AreaIndexes[28]) {Player.spirit_logically_accessible += 1;}
				if (i >= AreaIndexes[30] && i < AreaIndexes[29]) {Player.shadow_logically_accessible += 1;}
				if (i >= AreaIndexes[31] && i < AreaIndexes[30]) {Player.water_logically_accessible += 1;}
				if (i >= AreaIndexes[32] && i < AreaIndexes[31]) {Player.ganons_logically_accessible += 1;}
				if (i >= AreaIndexes[33] && i < AreaIndexes[32]) {Player.gtg_logically_accessible += 1;}
				if (i >= AreaIndexes[34] && i < AreaIndexes[33]) {Player.well_logically_accessible += 1;}
			}
		}
		else if (Location_Peek[key] == true) {
			if (!nerfed){
				document.getElementById(str).className= "access_check_text";
				document.getElementById(str).style.opacity = .5;
				document.getElementById(str).style.fontWeight = "normal";
				document.getElementById(str).style.color ="yellow";
			}
			else {
				if (Location_Peek[key] == true && !Location_Could_Access[key] == true) {
					if (hamsda) {
						document.getElementById(str).className= "access_check_text";
						document.getElementById(str).style.opacity = .7;
						document.getElementById(str).style.fontWeight = "normal";
						document.getElementById(str).style.color ="#FFA500";
					}
					else {
						document.getElementById(str).className= "access_check_text";
						document.getElementById(str).style.opacity = .7;
						document.getElementById(str).style.fontWeight = "normal";
						document.getElementById(str).style.color ="yellow";
					}
					
				}
				else {
					if (hamsda) {
						document.getElementById(str).className= "access_check_text";
						document.getElementById(str).style.opacity = .7;
						document.getElementById(str).style.fontWeight = "normal";
						document.getElementById(str).style.color ="yellow";
					}
					else {
						document.getElementById(str).className= "logic_check_text";
						document.getElementById(str).style.opacity = 1;
						document.getElementById(str).style.fontWeight = "bold";
						document.getElementById(str).style.color ="chartreuse";
					}
					
					if(i > lastItem && Check[key] != "unknown" && ManualOutOfLogicItems[Check[key]]) {
						document.getElementById(str).style.color = "#FFA500";
					}
					else if (hamsda) {
						document.getElementById(str).style.color ="yellow";
					}
					else {
						document.getElementById(str).style.color =inLogicColor;
					}
				}
			}
		}
		else if (Location_Could_Access[key] == true || Location_Could_Peek[key] == true) {
			if (!nerfed){
				document.getElementById(str).className= "access_check_text";
				document.getElementById(str).style.opacity = .2;
				document.getElementById(str).style.fontWeight = "normal";
				document.getElementById(str).style.color ="yellow";
			}
			else {
				if(!Location_Could_Access[key] == true && Location_Could_Peek[key] == true) {
					document.getElementById(str).className= "access_check_text";
					document.getElementById(str).style.opacity = .2;
					document.getElementById(str).style.fontWeight = "normal";
					document.getElementById(str).style.color ="yellow";
				}
				else {
					document.getElementById(str).className= "access_check_text";
					document.getElementById(str).style.fontWeight = "normal";
					document.getElementById(str).style.opacity = .2;
					
					if(i > lastItem && Check[key] != "unknown" && ManualOutOfLogicItems[Check[key]]) {
						document.getElementById(str).style.color = "#FFA500";
					}
					else {
						document.getElementById(str).style.color = "yellow";
					}
				}
			}
		}
		else {
			if (hideInaccessible && i <= lastItem) {
				if (document.getElementById(str).style.display != "none") {document.getElementById(str).style.display = "none";}
				if (document.getElementById(key).style.display != "none") {document.getElementById(key).style.display = "none";}
				if (document.getElementById(str2).style.display != "none") {document.getElementById(str2).style.display = "none";}
			}
			document.getElementById(str).className= "ool_check_text";
			document.getElementById(str).style.opacity = .5;
			document.getElementById(str).style.fontWeight = "normal";
			if(colorTheme == "dark") {
				document.getElementById(str).style.color ="white";
			}
			else {
				document.getElementById(str).style.color ="black";
			}
		}
		if (colorChange) {document.getElementById(str).style.color = "magenta";document.getElementById(str).style.opacity = "1";}
	}
	if (document.getElementById("pieceDungeons").value.includes("de")) {document.getElementById("text_deku_lobby").style.color = "#FFD700"; document.getElementById("text_deku_lobby").style.opacity = 1; document.getElementById("text_deku_lobby").style.fontWeight = "bold";}
	if (document.getElementById("pieceDungeons").value.includes("do")) {document.getElementById("text_dodongos_above_king").style.color = "#FFD700"; document.getElementById("text_dodongos_above_king").style.opacity = 1; document.getElementById("text_dodongos_above_king").style.fontWeight = "bold";}
	if (document.getElementById("pieceDungeons").value.includes("ja")) {document.getElementById("text_jabu_map").style.color = "#FFD700"; document.getElementById("text_jabu_map").style.opacity = 1; document.getElementById("text_jabu_map").style.fontWeight = "bold";}
	if (document.getElementById("pieceDungeons").value.includes("fo")) {document.getElementById("text_forest_bossKey").style.color = "#FFD700"; document.getElementById("text_forest_bossKey").style.opacity = 1; document.getElementById("text_forest_bossKey").style.fontWeight = "bold";}
	if (document.getElementById("pieceDungeons").value.includes("fi")) {document.getElementById("text_fire_volvagia").style.color = "#FFD700"; document.getElementById("text_fire_volvagia").style.opacity = 1; document.getElementById("text_fire_volvagia").style.fontWeight = "bold";}
	if (document.getElementById("pieceDungeons").value.includes("wa")) {document.getElementById("text_water_morpha").style.color = "#FFD700"; document.getElementById("text_water_morpha").style.opacity = 1; document.getElementById("text_water_morpha").style.fontWeight = "bold";}
	if (document.getElementById("pieceDungeons").value.includes("sh")) {document.getElementById("text_shadow_compass").style.color = "#FFD700"; document.getElementById("text_shadow_compass").style.opacity = 1; document.getElementById("text_shadow_compass").style.fontWeight = "bold";}
	if (document.getElementById("pieceDungeons").value.includes("sp")) {document.getElementById("text_spirit_nearFourArmos").style.color = "#FFD700"; document.getElementById("text_spirit_nearFourArmos").style.opacity = 1; document.getElementById("text_spirit_nearFourArmos").style.fontWeight = "bold";}
	
	if(document.getElementById("keysanity").value == "KEYSY" || document.getElementById("keysanity").value == "KEY RINGS") {
		Logic.forest_keys = Player.current_forest_keys = 5;
		Logic.forest_boss_key = Player.forest_boss_key = true;
	}
	if(document.getElementById("keysanity").value == "KEYSY" || document.getElementById("keysanity").value == "KEY RINGS") {
		Logic.fire_keys = Player.current_fire_keys = 8;
		Logic.fire_boss_key = Player.fire_boss_key = true;
	}
	if(document.getElementById("keysanity").value == "KEYSY" || document.getElementById("keysanity").value == "KEY RINGS") {
		Logic.water_keys = Player.current_water_keys = 6;
		Logic.water_boss_key = Player.water_boss_key = true;
	}
	if(document.getElementById("keysanity").value == "KEYSY" || document.getElementById("keysanity").value == "KEY RINGS") {
		Logic.shadow_keys = Player.current_shadow_keys = 5;
		Logic.shadow_boss_key = Player.shadow_boss_key = true;
	}
	if(document.getElementById("keysanity").value == "KEYSY" || document.getElementById("keysanity").value == "KEY RINGS") {
		Logic.spirit_keys = Player.current_spirit_keys = 5;
		Logic.spirit_boss_key = Player.spirit_boss_key = true;
	}
	if(document.getElementById("keysanity").value == "KEYSY" || document.getElementById("keysanity").value == "KEY RINGS") {
		Logic.gtg_keys = Player.current_gtg_keys = 9;
	}
	if(document.getElementById("keysanity").value == "KEYSY" || document.getElementById("keysanity").value == "KEY RINGS") {
		Logic.well_keys = Player.current_well_keys = 3;
	}
	if(document.getElementById("keysanity").value == "KEYSY" || document.getElementById("keysanity").value == "KEY RINGS") {
		Logic.ganons_keys = Player.current_ganons_keys = 2;
	}
	
	Player.forest_checks_remaining -= 5 - Player.current_forest_keys;
	Player.fire_checks_remaining -= 8 - Player.current_fire_keys
	Player.water_checks_remaining -= 6 - Player.current_water_keys
	Player.spirit_checks_remaining -= 5 - Player.current_spirit_keys
	Player.shadow_checks_remaining -= 5 - Player.current_shadow_keys
	Player.gtg_checks_remaining -= 9 - Player.current_gtg_keys
	Player.well_checks_remaining -= 3 - Player.current_well_keys
	Player.ganons_checks_remaining -= 2 - Player.current_ganons_keys;
	
	if (!Player.forest_boss_key) {Player.forest_checks_remaining -= 1;}
	if (!Player.fire_boss_key) {Player.fire_checks_remaining -= 1;}
	if (!Player.water_boss_key) {Player.water_checks_remaining -= 1;}
	if (!Player.spirit_boss_key) {Player.spirit_checks_remaining -= 1;}
	if (!Player.shadow_boss_key) {Player.shadow_checks_remaining -= 1;}
	
	Player.checks_remaining += Player.forest_checks_remaining + Player.fire_checks_remaining + Player.water_checks_remaining + Player.spirit_checks_remaining + Player.shadow_checks_remaining + Player.gtg_checks_remaining + Player.well_checks_remaining + Player.ganons_checks_remaining;
	if (!songItemChecked) {Player.checks_remaining += 1;}
    
	Player.logically_accessible = Number(Player.logically_accessible);
	Player.logically_accessible=Player.logically_accessible.toFixed(0);
	document.getElementById("checks_remaining").innerHTML="Remaining: "+Player.checks_remaining;
	if (!nerfed) {document.getElementById("logically_accessible").innerHTML="&nbsp; &nbsp; In Logic: "+Player.logically_accessible;} else {document.getElementById("logically_accessible").innerHTML="&nbsp; &nbsp; In Logic: ??"}
}
function mouse_input() {
	if (event.button == 2 && Check[event.target.id] == "unknown") {
		mouseInputs_locations.push(event.target.id);
		str = event.target.id;
		str2 = "text_" + str;
		str3 = "br_" + str;
		Check[str] = "junk";
		document.getElementById(str).style.display = "none";
		document.getElementById(str2).style.display = "none";
		document.getElementById(str3).style.display = "none";
		Update();
	}
	if (event.button == 1 && event.target.id.includes("dodongos_")) {route_dodongos();}
	if (event.button == 1 && event.target.id.includes("deku_")) {route_deku();}
	if (event.button == 1 && event.target.id.includes("jabu_")) {route_jabu();}
	if (event.button == 1 && event.target.id.includes("ice_")) {route_ice();}
}
function mouse_input2() {
	if (event.button == 1) {
		for (var i = 1; i < 15; i++) {
			console.log(document.getElementById("gomode_" + i).style.display)
			if (document.getElementById("gomode_" + i).style.display == "none" || document.getElementById("gomode_" + i).style.display == "") {
				document.getElementById("gomode_" + i).src = event.target.src;
				document.getElementById("gomode_" + i).style.display = "inline-block";
				searchItems.unshift(ItemNames2[Items2.indexOf(event.target.id.replace("mouseInputs_",""))]); 
				break;
				
			}
		}
	}
	
	var item = "";
	if (mouseInputs_locations.length == 0) {return;}
	if (event.target.id == "mouseInputs_magicspell") {if (event.button == 2) {item = "farores_wind";} else {item = "dins_fire";}}
	else if (event.target.id == "mouseInputs_boots") {if (event.button == 2) {item = "hover_boots";} else {item = "iron_boots";}}
	else if (event.target.id == "mouseInputs_magicarrows") {console.log(event.target.value);if (event.button == 2) {item = "light_arrows";} else {item = "fire_arrows";}}
	else if (event.target.id == "mouseInputs_goronzora") {if (event.button == 2) {item = "zora_tunic";} else {item = "goron_tunic";}}
	else if (event.target.id == "mouseInputs_bottle") {if (event.button == 2) {item = "rutos_letter";} else {item = "bottle";}}
	else {item = event.target.id.replace("mouseInputs_","");}
	Check[mouseInputs_locations[0]] = "unknown";
	document.getElementById(mouseInputs_locations[0]).value = inputs[Items2.indexOf(item)];
	mouseInputs_locations.shift();
	Update();
}

function searchingFor_tracking() {
	item = event.target.id.replace("searchingFor_","");
	searchItems.splice(searchItems.indexOf(ItemNames[Items.indexOf(item)]),1) //Pepega
	console.log(searchItems)
	event.target.style.display = "none";
}

function updateSummaryText() { 
	// Update Check Summary ClassNames (only items, not songs)
		
	for(var i = 0; i <= 50; i++){
		str = checkSummary[i] + "_location";
		
		var theItem = checkSummary[i];
		if (checkSummary[i] == "trade" && (Known.prescription || Known.claim_check)) {
			var exception = true;
			if(Known.prescription)
				theItem = "prescription";
			else if(Known.claim_check)
				theItem = "claim_check";
			
			if(Hinted[Location[theItem]] && document.getElementById(str).innerHTML.indexOf("*") < 0)
				document.getElementById(str).innerHTML = "* " + document.getElementById(str).innerHTML + " *";
			else if(!Hinted[Location[theItem]])
				document.getElementById(str).innerHTML = document.getElementById(str).innerHTML.replace("* ", "").replace(" *", "");
		} 
		else {
			var exception = false;
			
			if(Hinted[Location[checkSummary[i]]] && document.getElementById(str).innerHTML.indexOf("*") < 0)
				document.getElementById(str).innerHTML = "* " + document.getElementById(str).innerHTML + " *";
			else if(!Hinted[Location[checkSummary[i]]])
				document.getElementById(str).innerHTML = document.getElementById(str).innerHTML.replace("* ", "").replace(" *", "");
		}
		
		if(!nerfed) {
			if (Logic[theItem] || exception) {
				if (Player[theItem])
					document.getElementById(str).className = "checked_text_summary";
				else
					document.getElementById(str).className = "checked_text_summary_not_have";
			}
			else {
				if (Player[theItem])
					document.getElementById(str).className = "checked_text_summary_have_ool";
				else {
					if(CouldHave[theItem])
						document.getElementById(str).className = "checked_text_summary_ool_could_have";
					else
						document.getElementById(str).className = "checked_text_summary_ool";
				}
			}
		}
		else {
			if (Player[theItem] || (theItem == "trade" && (Known.prescription || Known.claim_check))) 
				if(ManualOutOfLogicItems[theItem])
					document.getElementById(str).className = "checked_text_summary_have_ool";
				else if(ManualInLogicItems[theItem])
					document.getElementById(str).className = "checked_text_summary";
				else
					document.getElementById(str).className = "checked_text_summary_unknown";
			else if(CouldHave[theItem])
				if(ManualOutOfLogicItems[theItem])
					document.getElementById(str).className = "checked_text_summary_ool_could_have";
				else if(ManualInLogicItems[theItem])
					document.getElementById(str).className = "checked_text_summary_not_have";
				else
					document.getElementById(str).className = "checked_text_summary_unknown_not_have";
			else if(Known[theItem]) 
				document.getElementById(str).className = "checked_text_summary_known";
			else
				document.getElementById(str).className = "checked_text_summary_ool";
			
			if(colorTheme == "dark" && document.getElementById(str).className == "checked_text_summary_ool") {
				document.getElementById(str).style.color = 'white';
			}
			else if (colorTheme == "light" && document.getElementById(str).className == "checked_text_summary_ool"){
				document.getElementById(str).style.color = 'black';
			}
			else {
				document.getElementById(str).style.color = '';
			}
		}
	}

}
function updateProbabilities() {
	var explosivesLeft = 0;
	var majorLeft = 0;
	var bigLeft = Math.max(untracked,0);
    bigLeft -= baitsChecked;
	if (!Known.bombchus1) {explosivesLeft += 1;}
	if (!Known.bombchus2) {explosivesLeft += 1;}
	if (!Known.bombchus3) {explosivesLeft += 1;}
	if (!Known.bombchus4) {explosivesLeft += 1;}
	if (!Known.bombchus5) {explosivesLeft += 1;}
	
	for (var i = 0; i < Items2.length; i++) {
		suffix = 0
		if(Items2[i] == "junk" || Items2[i] == "small_key" || Items2[i] == "boss_key" || i >= Items2.indexOf("lullaby")) {continue;}
		if(Items2[i] == "bottle" && Items2[i-1] == "bottle") {continue;}
        
        if(Items2[i] == "bombchus") {
            if (chusInBigChests) {suffix = 5;}
            else continue;
        }
		else if (Items2[i] == "bow" || Items2[i] == "bomb_bag" || Items2[i] == "strength" || Items2[i] == "slingshot" || Items2[i] == "bottle") {suffix = 3;}
		else if (Items2[i] == "magic" || Items2[i] == "wallet" || Items2[i] == "hookshot") {suffix = 2;}
		else if (!Known[Items2[i]]) {bigLeft += 1;}
		while (suffix > 0) {
			if (!Known[Items2[i] + suffix]) {bigLeft += 1;} 
			suffix-=1;	
		}			
	}
	var goMode = true;
	if (searchItems.includes("Boomerang") && !Known.boomerang)  {majorLeft += 1; document.getElementById("searchingFor_boomerang").style.display = "inline-block";goMode = false;} 
	else if (searchItems.includes("Boomerang")) {document.getElementById("searchingFor_boomerang").style.display = "none";}
  
	if (searchItems.includes("Letter") && !Known.rutos_letter)  {majorLeft += 1; document.getElementById("searchingFor_rutos_letter").style.display = "inline-block";goMode = false;} 
	else if (searchItems.includes("Letter")) {document.getElementById("searchingFor_rutos_letter").style.display = "none";}
  
	if (searchItems.includes("Hammer") && !Known.hammer)  {majorLeft += 1; document.getElementById("searchingFor_hammer").style.display = "inline-block";goMode = false;} 
	else if (searchItems.includes("Hammer")) {document.getElementById("searchingFor_hammer").style.display = "none";}
  
	if (searchItems.includes("Mirror") && !Known.mirror_shield)  {majorLeft += 1; document.getElementById("searchingFor_mirror_shield").style.display = "inline-block";goMode = false;} 
	else if (searchItems.includes("Mirror")) {document.getElementById("searchingFor_mirror_shield").style.display = "none";}
  
	if (searchItems.includes("Strength") && !Known.strength3)  {document.getElementById("searchingFor_strength1").style.display = "inline-block";goMode = false;
		if (!Known.strength1) {majorLeft += 1;} 
		if (!Known.strength2) {majorLeft += 1;} 
		if (!Known.strength3) {majorLeft += 1;} 
	}
  else {document.getElementById("searchingFor_strength1").style.display = "none";}
  
	if (searchItems.includes("Scale") && !Known.scale2) {document.getElementById("searchingFor_scale1").style.display = "inline-block";goMode = false;
		if (!Known.scale1) {majorLeft += 1;} 
		if (!Known.scale2) {majorLeft += 1;} 
	}
  else{document.getElementById("searchingFor_scale1").style.display = "none";}
  
	if (searchItems.includes("Magic") && !Player.magic)  {document.getElementById("searchingFor_magic1").style.display = "inline-block";goMode = false;
		if (!Known.magic1) {majorLeft += 1;} 
		if (!Known.magic2) {majorLeft += 1;} 
	}
  else{document.getElementById("searchingFor_magic1").style.display = "none";}
  
	if (searchItems.includes("Bow") && !Player.bow)  {document.getElementById("searchingFor_bow1").style.display = "inline-block";goMode = false;
		if (!Known.bow1) {majorLeft += 1;} 
		if (!Known.bow2) {majorLeft += 1;} 
		if (!Known.bow3) {majorLeft += 1;} 
	}
  else{document.getElementById("searchingFor_bow1").style.display = "none";}
  
	if (searchItems.includes("Hookshot") && !Known.hookshot2)  {document.getElementById("searchingFor_hookshot1").style.display = "inline-block";goMode = false;
		if (!Known.hookshot1) {majorLeft += 1;} 
		if (!Known.hookshot2) {majorLeft += 1;} 
	}
  else{document.getElementById("searchingFor_hookshot1").style.display = "none";}
  
	if (searchItems.includes("Bomb Bag") && !Player.bomb_bag)  {document.getElementById("searchingFor_bomb_bag1").style.display = "inline-block";goMode = false;
		if (!Known.bomb_bag1) {majorLeft += 1;} 
		if (!Known.bomb_bag2) {majorLeft += 1;} 
		if (!Known.bomb_bag3) {majorLeft += 1;} 
	}
  else{document.getElementById("searchingFor_bomb_bag1").style.display = "none";}
	
	if (searchItems.includes("Slingshot"))  {if (Player.slingshot) {document.getElementById("searchingFor_slingshot1").style.display = "none";}
		if (!Known.slingshot1) {majorLeft += 1;} 
		if (!Known.slingshot2) {majorLeft += 1;} 
		if (!Known.slingshot3) {majorLeft += 1;} else{document.getElementById("searchingFor_slingshot1").style.display = "none";}
	}	
  
	if (searchItems.includes("Din's Fire") && !Known.dins_fire)  {majorLeft += 1; document.getElementById("searchingFor_dins_fire").style.display = "inline-block";goMode = false;}
	else if (searchItems.includes("Din's Fire")) {document.getElementById("searchingFor_dins_fire").style.display = "none";}
  
	if (searchItems.includes("Hover Boots") && !Known.hover_boots)  {majorLeft += 1; document.getElementById("searchingFor_hover_boots").style.display = "inline-block";goMode = false;}
	else if (searchItems.includes("Hover Boots")) {document.getElementById("searchingFor_hover_boots").style.display = "none";}
  
	if (searchItems.includes("Kokiri Sword") && !Known.kokiri_sword)  {majorLeft += 1; document.getElementById("searchingFor_kokiri_sword").style.display = "inline-block";goMode = false;}
	else if (searchItems.includes("Kokiri Sword")) {document.getElementById("searchingFor_kokiri_sword").style.display = "none";}
  
	if (searchItems.includes("Iron Boots") && !Known.iron_boots)  {majorLeft += 1; document.getElementById("searchingFor_iron_boots").style.display = "inline-block";goMode = false;}
	else if (searchItems.includes("Iron Boots")) {document.getElementById("searchingFor_iron_boots").style.display = "none";}
  
	if (searchItems.includes("Light Arrows") && !Known.light_arrows)  {majorLeft += 1; document.getElementById("searchingFor_light_arrows").style.display = "inline-block";goMode = false;}
	else if (searchItems.includes("Light Arrows")) {document.getElementById("searchingFor_light_arrows").style.display = "none";}
  
	if (searchItems.includes("Lens") && !Known.lens)  {majorLeft += 1; document.getElementById("searchingFor_lens").style.display = "inline-block";goMode = false;}
	else if (searchItems.includes("Lens")) {document.getElementById("searchingFor_lens").style.display = "none";}
  
	nChecks = document.getElementById("probability_input").value;
  if (goMode) {
    document.getElementById("linsoLight").style.opacity = 0.5; 
    document.getElementById('goMode').style.display = "inline-block";
  } 
  else {
    document.getElementById('goMode').style.display = "none";
  }
	document.getElementById("bait_probability").innerHTML = "Big Chest ~ 1 in "+((Player.checks_remaining-1)/(bigLeft-1)).toFixed(2)+" Checks"
	document.getElementById("major_probability").innerHTML = "Searching For ("+((1-Math.pow(1-majorLeft/(Player.checks_remaining-nChecks/2+1/2),nChecks))*100).toFixed(2)+"%)"
	document.getElementById("explosives_probability").innerHTML = "Chu Packs ~ 1 in "+(1/(explosivesLeft/(Player.checks_remaining-bigLeft))).toFixed(2)+" Smalls"
}

function updateWothBorders() {
	let AreaSongSpots = [[],[],["text_eponasSpot"],["text_oot"],[],[],[],[],[],["text_preludeSpot"],[],["text_serenadeSpot"],[],[],["text_sariasSpot", "text_minuetSpot"],[],[],[], ["text_boleroSpot"],["text_stormsSpot", "text_nocturneSpot"],["text_sunsSpot"],[],[],["text_requiemSpot"],[],[],[],[],[],[],[],[],[],[],[],[]];
	let AreaSongSpotsWithoutText = [[],[],["eponasSpot"],["oot"],[],[],[],[],[],["preludeSpot"],[],["serenadeSpot"],[],[],["sariasSpot", "minuetSpot"],[],[],[], ["boleroSpot"],["stormsSpot", "nocturneSpot"],["sunsSpot"],[],[],["requiemSpot"],[],[],[],[],[],[],[],[],[],[],[],[]];
	
	for (var i = 1; i <= 35; i++) {	
		if((Area[i] == "woth" || Area[i] == "woth1" || Area[i] == "2woth" || Area[i] == "3woth" || Area[i] == "4woth" || Area[i] == "5woth") && colorWothAreas) {
			for(var j = 0; j < AreaSongSpots[i].length; j++) {
				var songText = AreaSongSpots[i][j];
				if ((Hinted[AreaSongSpotsWithoutText[i][j]] == false || Hinted[AreaSongSpotsWithoutText[i][j]] == undefined) && !alwaysHints.includes(AreaSongSpotsWithoutText[i][j])) {
					document.getElementById(songText).style.border = "solid 2px";
				}
				else {
					document.getElementById(songText).style.border = "";
				}
			}
			
			for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
				if(!alwaysHints.includes(Locations[j]) && (Hinted[Locations[j]] == false || Hinted[Locations[j]] == undefined) && !Locations[j].startsWith("h_"))
					document.getElementById("text_" + Locations[j]).style.border = "solid 1px";
				else
					document.getElementById("text_" + Locations[j]).style.border = "";
			}
		}	
		else if(Area[i] == "barren") {
			for(var j = 0; j < AreaSongSpots[i].length; j++) {
				var songText = AreaSongSpots[i][j];
				document.getElementById(songText).style.border = "solid 2px red";
			}
			
			for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
				if (!Locations[j].startsWith("h_"))
					document.getElementById("text_" + Locations[j]).style.border = "solid red 1px";
				else
					document.getElementById("text_" + Locations[j]).style.border = "";
			}
		}
		else {
			for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
				if(Check[Locations[j]] == "unknown") {
					document.getElementById("text_" + Locations[j]).style.border = "none";
				}
			}
			
			for(var j = 0; j < AreaSongSpots[i].length; j++) {
				var songText = AreaSongSpots[i][j];
				
				document.getElementById(songText).style.border = "none";
			}
			
		}
	}
}

function updateDungeonER() {
	// if dungeon er is off, dungeons go to their intended destinations
	if(document.getElementById("erOption").value != "DUNGEONS") {
		document.getElementById("dungeon_er_input_div").style.display = "none";
		document.getElementById("dungeons_summary").style.display = "none";
		
		for(let d = 0; d < dungs_list.length; d++) {
			dungeonToEntrance_ER_dict[dungs_list[d]] = dungs_list[d];
			entranceToDungeon_ER_dict[dungs_list[d]] = dungs_list[d];
		}
	}
	else {
		// else, dungeon er is on, so figure out where each dungeon goes
		document.getElementById("dungeon_er_input_div").style.display = "block";
		document.getElementById("dungeons_summary").style.display = "block";
		document.getElementById("dungeons_summary").innerHTML = "";
		for(let d = 0; d < dungs_list.length; d++) {
			document.getElementById("dungeons_summary").innerHTML += dungs_list2[dungs_list[d]]+" &#8594; ?<br>";
		}
		
		for(let d = 0; d < dungs_list.length; d++) {
			dungeonToEntrance_ER_dict[dungs_list[d]] = "";
			entranceToDungeon_ER_dict[dungs_list[d]] = "";
		}
		
		// if er dungeon inputs are valid, update dictionaries
		er_input_string = document.getElementById("mark_ER_Dungeons").value;
		if (er_input_string.length == 22) {
			
			dungeon_er_inputs = [];
			document.getElementById("dungeons_summary").innerHTML = "<u>Entrance &#8594; Dungeon</u><br>";
			
			for(i = 0; i < 11; i++) {
				dungeon_er_inputs.push(er_input_string.substring(i*2,i*2+2));
			}
			//console.log(dungeon_er_inputs);
			
			
			for(let d = 0; d < dungs_list.length; d++) {
				entranceToDungeon_ER_dict[dungs_list[d]] = dungs_list[dungs_list_short.indexOf(dungeon_er_inputs[d])];
				dungeonToEntrance_ER_dict[dungs_list[dungs_list_short.indexOf(dungeon_er_inputs[d])]] = dungs_list[d];
				
				document.getElementById("dungeons_summary").innerHTML +=
					"<span data-idx='"+d+"' style='color:" + dungs_colors[d] + "' onmousedown='highlightDungeonEntrance(this)'>" +
					dungs_list2[dungs_list[d]]+" &#8594; "+dungs_list2[entranceToDungeon_ER_dict[dungs_list[d]]]+"</span><br>";
			}
		}
	}
	
	update_dungeon_ER_Logic();
}

function update_dungeon_ER_Logic() {
	for(let d = 0; d < dungs_list.length; d++) {
		Logic[dungs_list[d] + "_access"] = false;
		Player[dungs_list[d] + "_access"] = false;
		CouldHave[dungs_list[d] + "_access"] = false;
	}
	
	for(let d = 0; d < dungs_list.length; d++) {
		let enter = dungeonToEntrance_ER_dict[dungs_list[d]];
		
		if(enter == "deku") {
			Logic[dungs_list[d] + "_child_access"] = Logic.can_enter_deku_entrance;
			Player[dungs_list[d] + "_child_access"] = Player.can_enter_deku_entrance;
			CouldHave[dungs_list[d] + "_child_access"] = CouldHave.can_enter_deku_entrance;
			
			if(document.getElementById("erOption").value == "DUNGEONS") {
				Logic[dungs_list[d] + "_adult_access"] = Logic.can_enter_deku_entrance;
				Player[dungs_list[d] + "_adult_access"] = Player.can_enter_deku_entrance;
				CouldHave[dungs_list[d] + "_adult_access"] = CouldHave.can_enter_deku_entrance;
			}
			else {
				Logic[dungs_list[d] + "_adult_access"] = false;
				Player[dungs_list[d] + "_adult_access"] = false;
				CouldHave[dungs_list[d] + "_adult_access"] = false;
			}
		}
		else if(enter == "dodongos") {
			Logic[dungs_list[d] + "_child_access"] = Logic.can_enter_child_dodongos;
			Player[dungs_list[d] + "_child_access"] = Player.can_enter_child_dodongos;
			CouldHave[dungs_list[d] + "_child_access"] = CouldHave.can_enter_child_dodongos;
			
			Logic[dungs_list[d] + "_adult_access"] = true;
			Player[dungs_list[d] + "_adult_access"] = true;
			CouldHave[dungs_list[d] + "_adult_access"] = true;
		}
		else if(enter == "jabu") {
			Logic[dungs_list[d] + "_child_access"] = Logic.jabu_entrance_access;
			Player[dungs_list[d] + "_child_access"] = Player.jabu_entrance_access;
			CouldHave[dungs_list[d] + "_child_access"] = CouldHave.jabu_entrance_access;
			
			Logic[dungs_list[d] + "_adult_access"] = false;
			Player[dungs_list[d] + "_adult_access"] = false;
			CouldHave[dungs_list[d] + "_adult_access"] = false;
		}
		else if(enter == "forest_temple") {
			Logic[dungs_list[d] + "_child_access"] = false;
			Player[dungs_list[d] + "_child_access"] = false;
			CouldHave[dungs_list[d] + "_child_access"] = false;
			
			Logic[dungs_list[d] + "_adult_access"] = Logic.can_enter_forest_temple_entrance;
			Player[dungs_list[d] + "_adult_access"] = Player.can_enter_forest_temple_entrance;
			CouldHave[dungs_list[d] + "_adult_access"] = CouldHave.can_enter_forest_temple_entrance;
		}
		else if(enter == "fire_temple") {
			if(document.getElementById("erOption").value == "DUNGEONS") {
				Logic[dungs_list[d] + "_child_access"] = Logic.bolero;
				Player[dungs_list[d] + "_child_access"] = Player.bolero;
				CouldHave[dungs_list[d] + "_child_access"] = CouldHave.bolero;
			}
			else {
				Logic[dungs_list[d] + "_child_access"] = false;
				Player[dungs_list[d] + "_child_access"] = false;
				CouldHave[dungs_list[d] + "_child_access"] = false;
			}
			
			Logic[dungs_list[d] + "_adult_access"] = Logic.can_enter_fire_temple_entrance;
			Player[dungs_list[d] + "_adult_access"] = Player.can_enter_fire_temple_entrance;
			CouldHave[dungs_list[d] + "_adult_access"] = CouldHave.can_enter_fire_temple_entrance;
		}
		else if(enter == "water_temple") {
			Logic[dungs_list[d] + "_child_access"] = false;
			Player[dungs_list[d] + "_child_access"] = false;
			CouldHave[dungs_list[d] + "_child_access"] = false;
			
			Logic[dungs_list[d] + "_adult_access"] = Logic.can_enter_water_entrance;
			Player[dungs_list[d] + "_adult_access"] = Player.can_enter_water_entrance;
			CouldHave[dungs_list[d] + "_adult_access"] = CouldHave.can_enter_water_entrance;
		}
		else if(enter == "shadow_temple") {
			Logic[dungs_list[d] + "_child_access"] = Logic.can_enter_shadow_entrance;
			Player[dungs_list[d] + "_child_access"] = Player.can_enter_shadow_entrance;
			CouldHave[dungs_list[d] + "_child_access"] = CouldHave.can_enter_shadow_entrance;
			
			Logic[dungs_list[d] + "_adult_access"] = Logic.can_enter_shadow_entrance;
			Player[dungs_list[d] + "_adult_access"] = Player.can_enter_shadow_entrance;
			CouldHave[dungs_list[d] + "_adult_access"] = CouldHave.can_enter_shadow_entrance;
		}
		else if(enter == "spirit_temple") {
			Logic[dungs_list[d] + "_child_access"] = Logic.can_enter_child_colossus;
			Player[dungs_list[d] + "_child_access"] = Player.can_enter_child_colossus;
			CouldHave[dungs_list[d] + "_child_access"] = CouldHave.can_enter_child_colossus;
			
			Logic[dungs_list[d] + "_adult_access"] = Logic.can_enter_colossus;
			Player[dungs_list[d] + "_adult_access"] = Player.can_enter_colossus;
			CouldHave[dungs_list[d] + "_adult_access"] = CouldHave.can_enter_colossus;
		}
		else if(enter == "botw") {
			Logic[dungs_list[d] + "_child_access"] = Logic.can_enter_well_entrance;
			Player[dungs_list[d] + "_child_access"] = Player.can_enter_well_entrance;
			CouldHave[dungs_list[d] + "_child_access"] = CouldHave.can_enter_well_entrance;
			
			if(document.getElementById("erOption").value == "DUNGEONS") {
				Logic[dungs_list[d] + "_adult_access"] = Logic.can_enter_well_entrance;
				Player[dungs_list[d] + "_adult_access"] = Player.can_enter_well_entrance;
				CouldHave[dungs_list[d] + "_adult_access"] = CouldHave.can_enter_well_entrance;
			}
			else {
				Logic[dungs_list[d] + "_adult_access"] = false;
				Player[dungs_list[d] + "_adult_access"] = false;
				CouldHave[dungs_list[d] + "_adult_access"] = false;	
			}
		}
		else if(enter == "ice") {
			Logic[dungs_list[d] + "_child_access"] = false;
			Player[dungs_list[d] + "_child_access"] = false;
			CouldHave[dungs_list[d] + "_child_access"] = false;
			
			Logic[dungs_list[d] + "_adult_access"] = Logic.ice_entrance_access;
			Player[dungs_list[d] + "_adult_access"] = Player.ice_entrance_access;
			CouldHave[dungs_list[d] + "_adult_access"] = CouldHave.ice_entrance_access;
		}
		else if(enter == "gtg") {
			Logic[dungs_list[d] + "_child_access"] = false;
			Player[dungs_list[d] + "_child_access"] = false;
			CouldHave[dungs_list[d] + "_child_access"] = false;
			
			Logic[dungs_list[d] + "_adult_access"] = Logic.gtg_entrance_access;
			Player[dungs_list[d] + "_adult_access"] = Player.gtg_entrance_access;
			CouldHave[dungs_list[d] + "_adult_access"] = CouldHave.gtg_entrance_access;
		}
			
		Logic[dungs_list[d] + "_access"] = Logic[dungs_list[d] + "_child_access"] || Logic[dungs_list[d] + "_adult_access"];
		Player[dungs_list[d] + "_access"] = Player[dungs_list[d] + "_child_access"] || Player[dungs_list[d] + "_adult_access"];
		CouldHave[dungs_list[d] + "_access"] = CouldHave[dungs_list[d] + "_child_access"] || CouldHave[dungs_list[d] + "_adult_access"];
	}
}