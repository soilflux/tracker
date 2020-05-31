function process_inputs() {
	var peeked = false;
	for (var i = 0; i < Locations.length; i++) {
		var key = Locations[i];
		
		for (var j = 34; j > 0; j--) {
			if (i < AreaIndexes[j]) {var AreaNamesIndex = AreaIndexes.indexOf(AreaIndexes[j]);};
		}
		
		if(Check[key] != "unknown" && checkedYet[i-1] == false) {checkedYet[i - 1] = true; textBlock += "" + tempHours + "h " + tempMinutes + "m " + tempSeconds + "s " + AreaNames[AreaNamesIndex] + ": " + Names[i] + "\n"};
		if(Check[key] != "unknown") {continue;}
		hinted = false;
		if (isUpperCase(document.getElementById(key).value.charAt(2)) && document.getElementById(key).value.length == 3) {
			peeked = true;
			document.getElementById(key).value = document.getElementById(key).value.toLowerCase();
		}
		else if (isUpperCase(document.getElementById(key).value.charAt(0)) && document.getElementById(key).value.length == 3){
			hinted = true;
			document.getElementById(key).value = document.getElementById(key).value.toLowerCase();
		}

		if (i <= 374) { 
	 
		if (document.getElementById(key).value == "far" && !Known.farores_wind) {Check[document.getElementById(key).id] = "farores_wind"; Location.farores_wind = document.getElementById(key).id; document.getElementById("farores_wind_location").innerHTML = "Farores -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.farores_wind = true; if (!hinted && !peeked) {Game.farores_wind = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Farores" + "<br />";} junkItem(document.getElementById(key)); continue;}
		
		if (document.getElementById(key).value == "sli" && !Known.slingshot1) {Check[document.getElementById(key).id] = "slingshot1"; Location.slingshot1 = document.getElementById(key).id; document.getElementById("slingshot1_location").innerHTML = "Slingshot -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.slingshot1 = true; if (!hinted && !peeked) {Game.slingshot1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Slingshot" + "<br />";} junkItem(document.getElementById(key)); continue;}
		else if (document.getElementById(key).value == "sli" && !Known.slingshot2) {Check[document.getElementById(key).id] = "slingshot2"; Location.slingshot2 = document.getElementById(key).id; document.getElementById("slingshot2_location").innerHTML = "Slingshot -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.slingshot2 = true; if (!hinted && !peeked) {Game.slingshot2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Slingshot" + "<br />";} junkItem(document.getElementById(key)); continue;}
		else if (document.getElementById(key).value == "sli" && !Known.slingshot3) {Check[document.getElementById(key).id] = "slingshot3";Location.slingshot3 = document.getElementById(key).id; document.getElementById("slingshot3_location").innerHTML = "Slingshot -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.slingshot3 = true; if (!hinted && !peeked) {Game.slingshot3 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Slingshot" + "<br />";} junkItem(document.getElementById(key)); continue;}
		
		if (document.getElementById(key).value == "boo" && !Known.boomerang) {Check[document.getElementById(key).id] = "boomerang"; Location.boomerang = document.getElementById(key).id; document.getElementById("boomerang_location").innerHTML = "Boomerang -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.boomerang = true; if (!hinted && !peeked) {Game.boomerang = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Boomerang" + "<br />";} junkItem(document.getElementById(key)); continue;}
		
		if (document.getElementById(key).value == "sca" && !Known.scale1) {Check[document.getElementById(key).id] = "scale1"; Location.scale1 = document.getElementById(key).id; document.getElementById("scale1_location").innerHTML = "Scale -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.scale1 = true; if (!hinted && !peeked) {Game.scale1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Scale" + "<br />";} junkItem(document.getElementById(key)); continue;}
		else if (document.getElementById(key).value == "sca" && !Known.scale2) {Check[document.getElementById(key).id] = "scale2";Location.scale2 = document.getElementById(key).id; document.getElementById("scale2_location").innerHTML = "Scale -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.scale2 = true; if (!hinted && !peeked) {Game.scale2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Scale" + "<br />";} junkItem(document.getElementById(key)); continue;}
		
		if (document.getElementById(key).value == "rut" && !Known.rutos_letter) {Check[document.getElementById(key).id] = "rutos_letter"; Location.rutos_letter = document.getElementById(key).id; document.getElementById("rutos_letter_location").innerHTML = "Letter -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.rutos_letter = true; if (!hinted && !peeked) {Game.rutos_letter = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Letter" + "<br />";} junkItem(document.getElementById(key)); continue;}
		
		if (document.getElementById(key).value == "bot" && !Known.bottle1) {Check[document.getElementById(key).id] = "bottle1"; Location.bottle1 = document.getElementById(key).id; document.getElementById("bottle1_location").innerHTML = "Bottle -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.bottle1 = true; if (!hinted && !peeked) {Game.bottle1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Bottle" + "<br />";} junkItem(document.getElementById(key)); continue;}
		else if (document.getElementById(key).value == "bot" && !Known.bottle2) {Check[document.getElementById(key).id] = "bottle2"; Location.bottle2 = document.getElementById(key).id; document.getElementById("bottle2_location").innerHTML = "Bottle -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.bottle2 = true; if (!hinted && !peeked) {Game.bottle2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Bottle" + "<br />";} junkItem(document.getElementById(key)); continue;}
		else if (document.getElementById(key).value == "bot" && !Known.bottle3) {Check[document.getElementById(key).id] = "bottle3"; Location.bottle3 = document.getElementById(key).id; document.getElementById("bottle3_location").innerHTML = "Bottle -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.bottle3 = true; if (!hinted && !peeked) {Game.bottle3 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Bottle" + "<br />";} junkItem(document.getElementById(key)); continue;}
		
		if (document.getElementById(key).value == "big" && !Known.bottle1) {Check[document.getElementById(key).id] = "big_poe";Location.bottle1 = document.getElementById(key).id; Location.big1= document.getElementById(key).id; document.getElementById("bottle1_location").innerHTML = "Big Poe -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.bottle1 = true; Known.big_poe = true; if (!hinted && !peeked) {Game.bottle1 = true; Game.big_poe = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Big Poe" + "<br />";} junkItem(document.getElementById(key)); continue;}
		else if (document.getElementById(key).value == "big" && !Known.bottle2) {Check[document.getElementById(key).id] = "big_poe"; Location.bottle2 = document.getElementById(key).id; Location.big1= document.getElementById(key).id; document.getElementById("bottle2_location").innerHTML = "Big Poe -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.bottle1 = true; Known.big_poe = true; if (!hinted && !peeked) {Game.bottle2 = true; Game.big_poe = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Big Poe" + "<br />";} junkItem(document.getElementById(key)); continue;}
		else if (document.getElementById(key).value == "big" && !Known.bottle3) {Check[document.getElementById(key).id] = "big_poe";Location.bottle3 = document.getElementById(key).id; Location.big1= document.getElementById(key).id; document.getElementById("bottle3_location").innerHTML = "Big Poe -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.bottle1 = true; Known.big_poe = true; if (!hinted && !peeked) {Game.bottle3 = true; Game.big_poe = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Big Poe" + "<br />";} junkItem(document.getElementById(key)); continue;}
		
		if (document.getElementById(key).value == "bom" && !Known.bomb_bag1) {Check[document.getElementById(key).id] = "bomb_bag1"; Location.bomb_bag1 = document.getElementById(key).id; document.getElementById("bomb_bag1_location").innerHTML = "Bomb Bag -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.bomb_bag1 = true; if (!hinted && !peeked) {Game.bomb_bag1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Bomb Bag" + "<br />";} junkItem(document.getElementById(key)); continue;}
		else if (document.getElementById(key).value == "bom" && !Known.bomb_bag2) {Check[document.getElementById(key).id] = "bomb_bag2"; Location.bomb_bag2 = document.getElementById(key).id; document.getElementById("bomb_bag2_location").innerHTML = "Bomb Bag -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.bomb_bag2 = true; if (!hinted && !peeked) {Game.bomb_bag2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Bomb Bag" + "<br />";} junkItem(document.getElementById(key));continue;}
		else if (document.getElementById(key).value == "bom" && !Known.bomb_bag3) {Check[document.getElementById(key).id] = "bomb_bag3"; Location.bomb_bag3 = document.getElementById(key).id; document.getElementById("bomb_bag3_location").innerHTML = "Bomb Bag -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.bomb_bag3 = true; if (!hinted && !peeked) {Game.bomb_bag3 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Bomb Bag" + "<br />";} junkItem(document.getElementById(key));continue;}
		
		if (document.getElementById(key).value == "ham" && !Known.hammer) {Check[document.getElementById(key).id] = "hammer"; Location.hammer = document.getElementById(key).id; document.getElementById("hammer_location").innerHTML = "Hammer -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.hammer = true; if (!hinted && !peeked) {Game.hammer = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Hammer" + "<br />";} junkItem(document.getElementById(key)); continue;}
		
		if (document.getElementById(key).value == "bow" && !Known.bow1) {Check[document.getElementById(key).id] = "bow1"; Location.bow1 = document.getElementById(key).id; document.getElementById("bow1_location").innerHTML = "Bow -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.bow1 = true; if (!hinted && !peeked) {Game.bow1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Bow" + "<br />";} junkItem(document.getElementById(key)); continue;}
		else if (document.getElementById(key).value == "bow" && !Known.bow2) {Check[document.getElementById(key).id] = "bow2"; Location.bow2 = document.getElementById(key).id; document.getElementById("bow2_location").innerHTML = "Bow -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.bow2 = true; if (!hinted && !peeked) {Game.bow2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Bow" + "<br />";} junkItem(document.getElementById(key)); continue;}
		else if (document.getElementById(key).value == "bow" && !Known.bow3) {Check[document.getElementById(key).id] = "bow3";Location.bow3 = document.getElementById(key).id; document.getElementById("bow3_location").innerHTML = "Bow -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.bow3 = true; if (!hinted && !peeked) {Game.bow3 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Bow" + "<br />";} junkItem(document.getElementById(key)); continue;}
		
		if (document.getElementById(key).value == "hoo" && !Known.hookshot1) {Check[document.getElementById(key).id] = "hookshot1";Location.hookshot1 = document.getElementById(key).id; document.getElementById("hookshot1_location").innerHTML = "Hookshot -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.hookshot1 = true; if (!hinted && !peeked) {Game.hookshot1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Hookshot" + "<br />";} junkItem(document.getElementById(key)); continue;}
		else if (document.getElementById(key).value == "hoo" && !Known.hookshot2) {Check[document.getElementById(key).id] = "hookshot2";Location.hookshot2 = document.getElementById(key).id; document.getElementById("hookshot2_location").innerHTML = "Hookshot -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.hookshot2 = true; if (!hinted && !peeked) {Game.hookshot2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Hookshot" + "<br />";} junkItem(document.getElementById(key)); continue;}
		
		if (document.getElementById(key).value == "str" && !Known.strength1) {Check[document.getElementById(key).id] = "strength1"; Location.strength1 = document.getElementById(key).id; document.getElementById("strength1_location").innerHTML = "Strength -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.strength1 = true; if (!hinted && !peeked) {Game.strength1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Strength" + "<br />";} junkItem(document.getElementById(key)); continue;}
		else if (document.getElementById(key).value == "str" && !Known.strength2) {Check[document.getElementById(key).id] = "strength2"; Location.strength2 = document.getElementById(key).id; document.getElementById("strength2_location").innerHTML = "Strength -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.strength2 = true; if (!hinted && !peeked) {Game.strength2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Strength" + "<br />";} junkItem(document.getElementById(key)); continue;}
		else if (document.getElementById(key).value == "str" && !Known.strength3) {Check[document.getElementById(key).id] = "strength3";Location.strength3 = document.getElementById(key).id; document.getElementById("strength3_location").innerHTML = "Strength -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.strength3 = true; if (!hinted && !peeked) {Game.strength3 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Strength" + "<br />";}junkItem(document.getElementById(key)); continue;}
		
		if (document.getElementById(key).value == "mir" && !Known.mirror_shield) {Check[document.getElementById(key).id] = "mirror_shield"; Location.mirror_shield = document.getElementById(key).id; document.getElementById("mirror_shield_location").innerHTML = "Mirror Shield -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.mirror_shield = true; if (!hinted && !peeked) {Game.mirror_shield = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Mirror Shield" + "<br />";} junkItem(document.getElementById(key)); continue;}
		
		if (document.getElementById(key).value == "mag" && !Known.magic1) {Check[document.getElementById(key).id] = "magic1"; Location.magic1 = document.getElementById(key).id; document.getElementById("magic1_location").innerHTML = "Magic -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.magic1 = true; if (!hinted && !peeked) {Game.magic1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Magic" + "<br />";} junkItem(document.getElementById(key)); continue;}
		else if (document.getElementById(key).value == "mag" && !Known.magic2) {Check[document.getElementById(key).id] = "magic2"; Location.magic2 = document.getElementById(key).id; document.getElementById("magic2_location").innerHTML = "Magic -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.magic2 = true; if (!hinted && !peeked) {Game.magic2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Magic" + "<br />";}junkItem(document.getElementById(key)); continue;}
		
		if (document.getElementById(key).value == "iro" && !Known.iron_boots) {Check[document.getElementById(key).id] = "iron_boots";Location.iron_boots = document.getElementById(key).id; document.getElementById("iron_boots_location").innerHTML = "Iron Boots -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.iron_boots = true; if (!hinted && !peeked) {Game.iron_boots = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Iron Boots" + "<br />";} junkItem(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "hov" && !Known.hover_boots) {Check[document.getElementById(key).id] = "hover_boots";Location.hover_boots = document.getElementById(key).id; document.getElementById("hover_boots_location").innerHTML = "Hover Boots -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.hover_boots = true; if (!hinted && !peeked) {Game.hover_boots = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Hover Boots" + "<br />";}junkItem(document.getElementById(key)); continue;}
		
		if (document.getElementById(key).value == "wal" && !Known.wallet1) {Check[document.getElementById(key).id] = "wallet1";Location.wallet1 = document.getElementById(key).id; document.getElementById("wallet1_location").innerHTML = "Wallet -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.wallet1 = true; if (!hinted && !peeked) {Game.wallet1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Wallet" + "<br />";} junkItem(document.getElementById(key)); continue;}
		else if (document.getElementById(key).value == "wal" && !Known.wallet2) {Check[document.getElementById(key).id] = "wallet2";Location.wallet2 = document.getElementById(key).id; document.getElementById("wallet2_location").innerHTML = "Wallet -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.wallet2 = true; if (!hinted && !peeked) {Game.wallet2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Wallet" + "<br />";} junkItem(document.getElementById(key)); continue;}
		
		if (document.getElementById(key).value == "gor" && !Known.goron_tunic) {Check[document.getElementById(key).id] = "goron_tunic";Location.goron_tunic = document.getElementById(key).id; document.getElementById("goron_tunic_location").innerHTML = "Goron Tunic -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.goron_tunic = true; if (!hinted && !peeked) {Game.goron_tunic = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Goron Tunic" + "<br />";} junkItem(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "zor" && !Known.zora_tunic) {Check[document.getElementById(key).id] = "zora_tunic";Location.zora_tunic = document.getElementById(key).id; document.getElementById("zora_tunic_location").innerHTML = "Zora Tunic -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.zora_tunic = true; if (!hinted && !peeked) {Game.zora_tunic = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Zora Tunic" + "<br />";}junkItem(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "din" && !Known.dins_fire) {Check[document.getElementById(key).id] = "dins_fire";Location.dins_fire = document.getElementById(key).id; document.getElementById("dins_fire_location").innerHTML = "Dins Fire -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.dins_fire = true; if (!hinted && !peeked) {Game.dins_fire = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Din's Fire" + "<br />";} junkItem(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "fir" && !Known.fire_arrows) {Check[document.getElementById(key).id] = "fire_arrows"; Location.fire_arrows = document.getElementById(key).id; document.getElementById("fire_arrows_location").innerHTML = "Fire Arrows -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.fire_arrows = true; if (!hinted && !peeked) {Game.fire_arrows = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Fire Arrows" + "<br />";} junkItem(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "len" && !Known.lens_of_truth) {Check[document.getElementById(key).id] = "lens_of_truth";Location.lens_of_truth = document.getElementById(key).id; document.getElementById("lens_of_truth_location").innerHTML = "Lens -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.lens_of_truth = true; if (!hinted && !peeked) {Game.lens_of_truth = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Lens" + "<br />";} junkItem(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "sto" && !Known.stone_of_agony) {Location.stone_of_agony = document.getElementById(key).id; Known.stone_of_agony = true; if (!hinted && !peeked) {Game.stone_of_agony = true;} junkItem(document.getElementById(key)); continue;}
		if ((document.getElementById(key).value == "pre" || document.getElementById(key).value == "eye" || document.getElementById(key).value == "dro") && (!Known.prescription || !Known.claim_check)) {Check[document.getElementById(key).id] = "prescription";Location.prescription = document.getElementById(key).id; document.getElementById("trade_location").innerHTML = "Prescription -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.prescription = true; if (!hinted && !peeked) {Game.prescription = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Prescription" + "<br />";} junkItem(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "cla" && (!Known.prescription || !Known.claim_check)) {Check[document.getElementById(key).id] = "claim_check";Location.claim_check = document.getElementById(key).id; document.getElementById("trade_location").innerHTML = "Claim -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.claim_check = true; if (!hinted && !peeked) {Game.claim_check = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Claim Check" + "<br />";} junkItem(document.getElementById(key)); continue;}
		
		if (document.getElementById(key).value == "lig" && !Known.light_arrows) {Check[document.getElementById(key).id] = "light_arrows"; Location.light_arrows = document.getElementById(key).id; document.getElementById("light_arrows_location").innerHTML = "Light Arrows -> " + AreaNames[AreaNamesIndex] + ": " + Names[i]; Known.light_arrows = true; if (!hinted && !peeked) {Game.light_arrows = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[i] + ":  Light Arrows" + "<br />";}junkItem(document.getElementById(key)); continue;}
		
		}
		else {
		if (document.getElementById(key).value == "lul" && !Known.lullaby) {Check[document.getElementById(key).id] = "lullaby";Location.lullaby = document.getElementById(key).id; Known.lullaby = true; if (!hinted && !peeked) {Game.lullaby = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Lullaby" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Lullaby"; junkSong(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "epo" && !Known.eponas) {Check[document.getElementById(key).id] = "eponas";Location.eponas = document.getElementById(key).id; Known.eponas = true; if (!hinted && !peeked) {Game.eponas = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Eponas" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Epona's"; junkSong(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "sar" && !Known.sarias) {Check[document.getElementById(key).id] = "sarias";Location.sarias = document.getElementById(key).id; Known.sarias = true; if (!hinted && !peeked) {Game.sarias = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Sarias" + "<br />";}var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Saria's"; junkSong(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "sun" && !Known.suns_song) {Check[document.getElementById(key).id] = "suns";Location.suns_song = document.getElementById(key).id; Known.suns_song = true; if (!hinted && !peeked) {Game.suns_song = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Suns" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Sun's"; junkSong(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "sot" && !Known.time) {Check[document.getElementById(key).id] = "time";Location.song_of_time = document.getElementById(key).id; Known.time = true; if (!hinted && !peeked) {Game.time = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Time" + "<br />";}var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Time"; junkSong(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "sos" && !Known.storms) {Check[document.getElementById(key).id] = "storms"; Location.song_of_storms = document.getElementById(key).id; Known.storms = true; if (!hinted && !peeked) {Game.storms = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Storms" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Storms"; junkSong(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "min" && !Known.minuet) {Check[document.getElementById(key).id] = "minuet"; Location.minuet = document.getElementById(key).id; Known.minuet = true; if (!hinted && !peeked) {Game.minuet = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Minuet" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Minuet"; junkSong(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "bol" && !Known.bolero) {Check[document.getElementById(key).id] = "bolero";Location.bolero = document.getElementById(key).id; Known.bolero = true; if (!hinted && !peeked) {Game.bolero = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Bolero" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Bolero"; junkSong(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "ser" && !Known.serenade) {Check[document.getElementById(key).id] = "serenade";Location.serenade = document.getElementById(key).id; Known.serenade = true; if (!hinted && !peeked) {Game.serenade = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Serenade" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Serenade"; junkSong(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "req" && !Known.requiem) {Check[document.getElementById(key).id] = "requiem";Location.requiem = document.getElementById(key).id; Known.requiem = true; if (!hinted && !peeked) {Game.requiem = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Requiem" + "<br />";}var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Requiem"; junkSong(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "noc" && !Known.nocturne) {Check[document.getElementById(key).id] = "nocturne";Location.nocturne = document.getElementById(key).id; Known.nocturne = true; if (!hinted && !peeked) {Game.nocturne = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Nocturne" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Nocturne"; junkSong(document.getElementById(key)); continue;}
		if (document.getElementById(key).value == "pre" && !Known.prelude) {Check[document.getElementById(key).id] = "prelude";Location.prelude = document.getElementById(key).id; Known.prelude = true; if (!hinted && !peeked) {Game.prelude = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Prelude" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Prelude"; junkSong(document.getElementById(key)); continue;}
		}
	}
}

function stone_medallion_input() {
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
		
		if (str == "de") {Logic["dung" + i] = "deku"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "dek"; dekuPlacement = "dung" + i;}
		else if (str == "do") {Logic["dung" + i]= "dodongos"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "dod"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.bomb_img; dodongosPlacement = "dung" + i;}
		else if (str == "ja") {Logic["dung" + i] = "jabu"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "jab"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.letter_img; document.getElementById("dung" + i + "_req2").src=Game.boomerang_img; jabuPlacement = "dung" + i;}
		else if (str == "fo") {Logic["dung" + i] = "forest"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "for"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.hookshot_img; document.getElementById("dung" + i + "_req2").src=Game.bow_img; document.getElementById("dung" + i + "_req3").src=Game.goron_bracelet_img; forestPlacement = "dung" + i;}
		else if (str == "fi") {Logic["dung" + i] = "fire"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "fir"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.hammer_img; firePlacement = "dung" + i;}
		else if (str == "wa") {Logic["dung" + i] = "water"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "wat"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.iron_boots_img; document.getElementById("dung" + i + "_text2").innerHTML ="/"; document.getElementById("dung" + i + "_req2").src=Game.golden_scale_img; document.getElementById("dung" + i + "_text3").innerHTML = "+"; document.getElementById("dung" + i + "_req3").src=Game.longshot_img; waterPlacement = "dung" + i;}
		else if (str == "sp") {Logic["dung" + i] = "spirit"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "spi"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req4").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.silver_gauntlets_img; document.getElementById("dung" + i + "_req2").src=Game.mirror_shield_img; document.getElementById("dung" + i + "_req3").src=Game.bomb_img; document.getElementById("dung" + i + "_req4").src=Game.hookshot_img; spiritPlacement = "dung" + i;}
		else if (str == "sh") {Logic["dung" + i] = "shadow"; document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "sha"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req4").className = "requirements"; document.getElementById("dung" + i + "_req5").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.dins_fire_img; document.getElementById("dung" + i + "_req2").src =Game.magic_img; document.getElementById("dung" + i + "_req3").src=Game.hover_boots_img; document.getElementById("dung" + i + "_req4").src=Game.bomb_img; document.getElementById("dung" + i + "_req5").src=Game.hookshot_img; shadowPlacement = "dung" + i;}
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
		if (dekuPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "deku"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "deku"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "dek"; dekuPlacement = "dung" + i;}
		else if (dodongosPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "dodongos"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "dodongos"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "dod"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.bomb_img; dodongosPlacement = "dung" + i;}
		else if (jabuPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "jabu"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "jabu"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "jab"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.letter_img; document.getElementById("dung" + i + "_req2").src=Game.boomerang_img; jabuPlacement = "dung" + i;}
		else if (forestPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "forest"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "forest"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "for"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.hookshot_img; document.getElementById("dung" + i + "_req2").src=Game.bow_img; document.getElementById("dung" + i + "_req3").src=Game.goron_bracelet_img; forestPlacement = "dung" + i;}
		else if (firePlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "fire"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "fire"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "fir"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.hammer_img; firePlacement = "dung" + i;}
		else if (waterPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "water"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "water"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "wat"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.iron_boots_img; document.getElementById("dung" + i + "_text2").innerHTML ="/"; document.getElementById("dung" + i + "_req2").src=Game.golden_scale_img; document.getElementById("dung" + i + "_text3").innerHTML = "+"; document.getElementById("dung" + i + "_req3").src=Game.longshot_img; waterPlacement = "dung" + i;}
		else if (spiritPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "spirit"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "spirit"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "spi"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req4").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.silver_gauntlets_img; document.getElementById("dung" + i + "_req2").src=Game.mirror_shield_img; document.getElementById("dung" + i + "_req3").src=Game.bomb_img; document.getElementById("dung" + i + "_req4").src=Game.hookshot_img; spiritPlacement = "dung" + i;}
		else if (shadowPlacement == "unknown" && Logic["dung" + i] == "unknown") {if (Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown" && Logic.dung7 != "unknown" && Logic.dung8 != "unknown" && Logic.dung9 != "unknown") {Logic["dung" + i] = "shadow"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i-1];} else if (Logic.dung1 != "unknown" && Logic.dung2 != "unknown" && Logic.dung3 != "unknown" && Logic.dung4 != "unknown" && Logic.dung5 != "unknown" && Logic.dung6 != "unknown") {Logic["dung" + i] = "shadow"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8];} document.getElementById("text_dung" + i).className="dung" + i; document.getElementById("text_dung" + i).innerHTML = "sha"; document.getElementById("dung" + i + "_req1").className = "requirements"; document.getElementById("dung" + i + "_req2").className = "requirements"; document.getElementById("dung" + i + "_req3").className = "requirements"; document.getElementById("dung" + i + "_req4").className = "requirements"; document.getElementById("dung" + i + "_req5").className = "requirements"; document.getElementById("dung" + i + "_req1").src=Game.dins_fire_img; document.getElementById("dung" + i + "_req2").src =Game.magic_img; document.getElementById("dung" + i + "_req3").src=Game.hover_boots_img; document.getElementById("dung" + i + "_req4").src=Game.bomb_img; document.getElementById("dung" + i + "_req5").src=Game.hookshot_img; shadowPlacement = "dung" + i;}
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

function linSoClick() {
	var str = event.target.src.split("/");
	str = str[str.length-1];
	str = str.substring(0,str.length-4);
	if (str.endsWith("hookshot") && Game.hookshot)  {event.target.src = Game.longshot_img; Game.hookshot2 = true;}
	else if (str.endsWith("longshot")) {event.target.src = Game.hookshot_img; event.target.style.filter = "grayscale(100%)"; event.target.style.opacity = .3; Game.hookshot1 = false; Game.hookshot2 = false;}
	else if (str.endsWith("hookshot")) {event.target.style.filter = "none"; event.target.style.opacity = 1; Game.hookshot1 = true;}
	else if (str.endsWith("bracelet") && Game.goron_bracelet)  {event.target.src = Game.silver_gauntlets_img; if (!Game.strength1) {Game.strength1 = true;} else if (!Game.strength2) {Game.strength2 = true;} else{Game.strength3 = true;}}
	else if (str.endsWith("silver_gauntlets")) {event.target.src = Game.golden_gauntlets_img; Game.strength1 = true; Game.strength2 = true; Game.strength3 = true;}
	else if (str.endsWith("golden_gauntlets")) {event.target.src = Game.goron_bracelet_img; event.target.style.filter = "grayscale(100%)"; event.target.style.opacity = .3; Game.strength1 = false; Game.strength2 = false; Game.strength3 = false;}
	else if (str.endsWith("bracelet")) {event.target.style.filter = "none"; event.target.style.opacity = 1; Game.strength1 = true;}
	else if (str.endsWith("magic") && Game.magic) {event.target.src = Game.magic_2_img; Game.magic2 = true;}
	else if (str.endsWith("magic_2")) {event.target.style.filter = "grayscale(100%)"; event.target.style.opacity = .3; event.target.src = Game.magic_img; Game.magic1 = false; Game.magic2 = false;}
	else if (str.endsWith("magic")) {event.target.style.filter = "none"; event.target.style.opacity = 1; Game.magic1 = true;}
	else if (event.target.style.filter == "none") {event.target.style.filter = "grayscale(100%)"; event.target.style.opacity = .3; Game[str] = false;}
	else {event.target.style.filter = "none"; event.target.style.opacity = 1; Game[str] = true;}
	Update();
}

function junk() {
	var type = event.button;
	var str = event.target.id;
	str = str.substring('text_'.length);
	var temp = Locations.indexOf(str);
	
	if(type == 0 && !event.altKey) {
		if(str.startsWith("forest") && Game.forest_checks_remaining != 0) {Game.forest_checks_remaining -=1;}
		else if(str.startsWith("fire") && Game.fire_checks_remaining != 0 && str != "fire_grave") {Game.fire_checks_remaining -=1;}
		else if(str.startsWith("water") && Game.water_checks_remaining != 0) {Game.water_checks_remaining -=1;}
		else if(str.startsWith("spirit") && Game.spirit_checks_remaining != 0) {Game.spirit_checks_remaining -=1;}
		else if(str.startsWith("shadow") && Game.shadow_checks_remaining != 0) {Game.shadow_checks_remaining -=1;}
		else if(str.startsWith("ganons") && Game.ganons_checks_remaining != 0) {Game.ganons_checks_remaining -=1;}
		else if(str.startsWith("gtg") && Game.gtg_checks_remaining != 0) {Game.gtg_checks_remaining -=1;}
		else if(str.startsWith("well") && Game.well_checks_remaining != 0) {Game.well_checks_remaining -=1;}
		else if(temp < AreaIndexes[26]){}
		else {return;}
		Check[str]="junk";
		if (temp == 44 && Game.deku_checks_remaining == 0) {Game.checks_remaining +=1;}
		if (temp == 66 && Game.dodongos_checks_remaining == 0) {Game.checks_remaining +=1;}
		if (temp == 113 && Game.jabu_checks_remaining == 0) {Game.checks_remaining +=1;}
	}
	
	else if(type == 1 || (type == 0 && event.altKey) || thisIsABossKey) {
		if(str.startsWith("forest") && !Game.forest_boss_key) {Game.forest_boss_key = true; Location.forest_boss_key = str;}
		else if(str.startsWith("fire") && !Game.fire_boss_key) {Game.fire_boss_key = true; Location.fire_boss_key = str;}
		else if(str.startsWith("water") && !Game.water_boss_key) {Game.water_boss_key = true; Location.water_boss_key = str;}
		else if(str.startsWith("spirit") && !Game.spirit_boss_key) {Game.spirit_boss_key = true; Location.spirit_boss_key = str;}
		else if(str.startsWith("shadow") && !Game.shadow_boss_key) {Game.shadow_boss_key = true; Location.shadow_boss_key = str;}
		else if(str.startsWith("ganons") && !Game.ganons_boss_key) {Game.ganons_boss_key = true; Location.ganons_boss_key = str;}
		else {return;}
		if (thisIsABossKey) {temptext2 += Names[temp].split(': ')[1] + ":  Boss Key" + "<br />";}
		Check[str]="boss_key";
	}
	
	else if ((type == 2 && !event.altKey) || thisIsAKey) {
		if(str.startsWith("forest") && Game.current_forest_keys < 5) {Game.current_forest_keys +=1;}
		else if(str.startsWith("fire") && Game.current_fire_keys < 8) {Game.current_fire_keys +=1;}
		else if(str.startsWith("water") && Game.current_water_keys < 6) {Game.current_water_keys +=1;}
		else if(str.startsWith("spirit") && Game.current_spirit_keys < 5) {Game.current_spirit_keys +=1;}
		else if(str.startsWith("shadow") && Game.current_shadow_keys < 5) {Game.current_shadow_keys +=1;}
		else if(str.startsWith("gtg") && Game.current_gtg_keys < 9) {Game.current_gtg_keys +=1;}
		else if(str.startsWith("well") && Game.current_well_keys < 3) {Game.current_well_keys +=1;}
		else if(str.startsWith("ganons") && Game.current_ganons_keys < 2) {Game.current_ganons_keys +=1;}
		else {
		if (event.target.style.color == "orange") {event.target.style.color = "pink";}
		else {event.target.style.color = "orange";}
		return;
		}
		Check[str]="small_key";
		if (thisIsAKey) {temptext2 += Names[temp].split(': ')[1] + ":  Small Key" + "<br />";}
	}
	else if (type == 2 && event.altKey) {
		if (x.style.color == "orange") {x.style.color = "pink";}
		else {x.style.color = "orange";}
		return;
	}
	else {
		Check[str]="junk";
	}
	
	if (document.getElementById(str).style.display != "none") {
		document.getElementById(str).style.display = "none";
	}
	if (coopmode && type == 1) {
		document.getElementById("text_" + str).style.className = "bk";
	}
	if (coopmode && type == 2) {
		document.getElementById("text_" + str).style.className = "sk";
	}
	
	if (!coopmode || type == 0){
		if (document.getElementById("text_" + str).style.display != "none") {
			document.getElementById("text_" + str).style.display = "none";
		}
		if (document.getElementById("br_" + str).style.display != "none") {
			document.getElementById("br_" + str).style.display = "none";
		}
	}
	
	lastCheck.push(str);
	Update();Update();Update();
}	

function junkUltra() {
	var x = event.target;
	
	if (x.id == "forest") {var temp = 14; var temp2 = Game.forest_checks_remaining; Game.forest_checks_remaining = 0; Logic.forced_forest_keys = 5 - Game.current_forest_keys; if (Game.forest_boss_key == false) {Logic.forced_forest_boss_key = true;}}
	if (x.id == "fire") {var temp = 15; var temp2 = Game.fire_checks_remaining; Game.fire_checks_remaining = 0; Logic.forced_fire_keys = 8 - Game.current_fire_keys; if (Game.fire_boss_key == false) {Logic.forced_fire_boss_key = true;}}
	if (x.id == "water") {var temp = 11; var temp2 = Game.water_checks_remaining; Game.water_checks_remaining = 0; Logic.forced_water_keys = 6 - Game.current_water_keys; if (Game.water_boss_key == false) {Logic.forced_water_boss_key = true;}}
	if (x.id == "spirit") {var temp = 20; var temp2 = Game.spirit_checks_remaining; Game.spirit_checks_remaining = 0; Logic.forced_spirit_keys = 5 - Game.current_spirit_keys; if (Game.spirit_boss_key == false) {Logic.forced_spirit_boss_key = true;}}
	if (x.id == "shadow") {var temp = 18; var temp2 = Game.shadow_checks_remaining; Game.shadow_checks_remaining = 0; Logic.forced_shadow_keys = 5 - Game.current_shadow_keys; if (Game.shadow_boss_key == false) {Logic.forced_shadow_boss_key = true;}}
	if (x.id == "ganons") {var temp = 16; var temp2 = Game.ganons_checks_remaining; Game.ganons_checks_remaining = 0; Logic.forced_ganons_keys = 2 - Game.current_ganons_keys; if (Game.ganons_boss_key == false) {Logic.ganons_boss_key = true;}}
	if (x.id == "gtg") {var temp = 22; var temp2 = Game.gtg_checks_remaining; Game.gtg_checks_remaining = 0; Logic.forced_gtg_keys = 5 - Game.current_gtg_keys;}
	if (x.id == "well") {var temp = 14; var temp2 = Game.well_checks_remaining; Game.well_checks_remaining = 0; Logic.forced_well_keys = 5 - Game.current_well_keys;}
	for (var i = 1; i <= temp; i++){
		Check[x.id + i] = "junk";
		document.getElementById(x.id + i).style.display = "none";
		document.getElementById("text_" + x.id + i).style.display = "none";
		document.getElementById("br_" + x.id + i).style.display = "none";
	}
	Update();Update();Update();
}

function junkItem(x) {
	var str2 = x.id;
	var temp = true;
	if (str2.startsWith('shadow') || str2.startsWith('spirit') || str2.startsWith('forest') || str2.startsWith('fire') || str2.startsWith('water') || str2.startsWith('gtg') || str2.startsWith('well')|| str2.startsWith('ganons')) {
		temp = false;
		if(str2.startsWith('forest') && Game.forest_checks_remaining != 0) {Game.forest_checks_remaining -= 1; temp = true;}
		if(str2.startsWith('fire') && Game.fire_checks_remaining != 0) {Game.fire_checks_remaining -= 1; temp = true;}
		if(str2.startsWith('water') && Game.water_checks_remaining != 0) {Game.water_checks_remaining -= 1; temp = true;}
		if(str2.startsWith('shadow') && Game.shadow_checks_remaining != 0) {Game.shadow_checks_remaining -= 1; temp = true;}
		if(str2.startsWith('spirit') && Game.spirit_checks_remaining != 0) {Game.spirit_checks_remaining -= 1; temp = true;}
		if(str2.startsWith('ganons') && Game.ganons_checks_remaining != 0) {Game.ganons_checks_remaining -= 1; temp = true;}
		if(str2.startsWith('gtg') && Game.gtg_checks_remaining != 0) {Game.gtg_checks_remaining -= 1; temp = true;}
		if(str2.startsWith('well') && Game.well_checks_remaining != 0) {Game.well_checks_remaining -= 1; temp = true;}
	}
	if (!temp) {return;}
	
	document.getElementById(str2).style.display = "none";
	document.getElementById("text_" + str2).style.display = "none";
	document.getElementById("br_" + str2).style.display = "none";
	
	document.getElementById(str2).value = "";
	
	lastCheck.push(str2);
	Update();Update();Update();
}

function junkSong(x) {
	var str2 = x.id;
	document.getElementById(str2).style.display = "none";
	
	document.getElementById(str2).value = "";
	
	lastCheck.push(str2);
	Update();Update();Update();
}

function check_circle_info() {
	document.getElementById("forest").innerHTML = "" + Game.forest_checks_remaining;
	document.getElementById("fire").innerHTML = "" + Game.fire_checks_remaining;
	document.getElementById("water").innerHTML = "" + Game.water_checks_remaining;
	document.getElementById("spirit").innerHTML = "" + Game.spirit_checks_remaining;
	document.getElementById("shadow").innerHTML = "" + Game.shadow_checks_remaining;
	document.getElementById("ganons").innerHTML = "" + Game.ganons_checks_remaining;
	document.getElementById("gtg").innerHTML = "" + Game.gtg_checks_remaining;
	document.getElementById("well").innerHTML = "" + Game.well_checks_remaining;
	
	document.getElementById("forestSKs").innerHTML = "" + (5 - Game.current_forest_keys);
	document.getElementById("fireSKs").innerHTML = "" + (8 - Game.current_fire_keys);
	document.getElementById("waterSKs").innerHTML = "" + (6 - Game.current_water_keys);
	document.getElementById("spiritSKs").innerHTML = "" + (5 - Game.current_spirit_keys);
	document.getElementById("shadowSKs").innerHTML = "" + (5 - Game.current_shadow_keys);
	document.getElementById("ganonsSKs").innerHTML = "" + (2 - Game.current_ganons_keys);
	document.getElementById("gtgSKs").innerHTML = "" + (9 - Game.current_gtg_keys);
	document.getElementById("wellSKs").innerHTML = "" + (3 - Game.current_well_keys);
	
	if (Game.forest_boss_key) {document.getElementById("forestBKs").innerHTML = 0;} else {document.getElementById("forestBKs").innerHTML = 1;}
	if (Game.fire_boss_key) {document.getElementById("fireBKs").innerHTML = 0;} else {document.getElementById("fireBKs").innerHTML = 1;}
	if (Game.water_boss_key) {document.getElementById("waterBKs").innerHTML = 0;} else {document.getElementById("waterBKs").innerHTML = 1;}
	if (Game.spirit_boss_key) {document.getElementById("spiritBKs").innerHTML = 0;} else {document.getElementById("spiritBKs").innerHTML = 1;}
	if (Game.shadow_boss_key) {document.getElementById("shadowBKs").innerHTML = 0;} else {document.getElementById("shadowBKs").innerHTML = 1;}
}

function handleAreaBreaks() {
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
		if (i == AreaIndexes[25]-1) {if (tempUnique == AreaIndexes[25] - AreaIndexes[24]) {document.getElementById("fortress_break").style.display = "none";} else {document.getElementById("fortress_break").style.display = "inline-block";} tempUnique = 0;}
	}
}

function handleItemHighlights() {
	if (Game.bomb_bag1) {if(document.getElementById(dodongosPlacement +"_req1") != null) {document.getElementById(dodongosPlacement +"_req1").style.opacity =1; } if(document.getElementById(shadowPlacement +"_req4") != null) {document.getElementById(shadowPlacement +"_req4").style.opacity =1; } if(document.getElementById(spiritPlacement +"_req3") != null) {document.getElementById(spiritPlacement +"_req3").style.opacity =1; }}
	if (Game.magic1) {document.getElementById("gan_req1").style.opacity=1; if(document.getElementById(shadowPlacement +"_req2") != null) {document.getElementById(shadowPlacement +"_req2").style.opacity =1; }}
	if (Game.light_arrows) {document.getElementById("gan_req2").style.opacity=1;}
	if (Game.bow1) {document.getElementById("gan_req3").style.opacity=1; if(document.getElementById(forestPlacement +"_req2") != null) {document.getElementById(forestPlacement +"_req2").style.opacity =1; }}
	if (Game.hookshot) {if(document.getElementById(forestPlacement +"_req1") != null) {document.getElementById(forestPlacement +"_req1").style.opacity =1; } if(document.getElementById(shadowPlacement +"_req5") != null) {document.getElementById(shadowPlacement +"_req5").style.opacity =1; } if(document.getElementById(spiritPlacement +"_req4") != null) {document.getElementById(spiritPlacement +"_req4").style.opacity =1; }}
	if (Game.goron_bracelet) {if(document.getElementById(forestPlacement +"_req3") != null) {document.getElementById(forestPlacement +"_req3").style.opacity =1; }}
	if (Game.hammer) {if(document.getElementById(firePlacement +"_req1") != null) {document.getElementById(firePlacement +"_req1").style.opacity =1; }}
	if (Game.rutos_letter) {if(document.getElementById(jabuPlacement +"_req1") != null) {document.getElementById(jabuPlacement +"_req1").style.opacity =1; }}
	if (Game.boomerang) {if(document.getElementById(jabuPlacement +"_req2") != null) {document.getElementById(jabuPlacement +"_req2").style.opacity =1; }}
	if (Game.iron_boots) {if(document.getElementById(waterPlacement +"_req1") != null) {document.getElementById(waterPlacement +"_req1").style.opacity =1; }}
	if (Game.scale2) {if(document.getElementById(waterPlacement +"_req2") != null) {document.getElementById(waterPlacement +"_req2").style.opacity =1; }}
	if (Game.longshot) {if(document.getElementById(waterPlacement +"_req3") != null) {document.getElementById(waterPlacement +"_req3").style.opacity =1; }}
	if (Game.silver_gauntlets) {if(document.getElementById(spiritPlacement +"_req1") != null) {document.getElementById(spiritPlacement +"_req1").style.opacity =1; }}
	if (Game.mirror_shield) {if(document.getElementById(spiritPlacement +"_req2") != null) {document.getElementById(spiritPlacement +"_req2").style.opacity =1; }}
	if (Game.dins_fire) {if(document.getElementById(shadowPlacement +"_req1") != null) {document.getElementById(shadowPlacement +"_req1").style.opacity =1; }}
	if (Game.hover_boots) {if(document.getElementById(shadowPlacement +"_req3") != null) {document.getElementById(shadowPlacement +"_req3").style.opacity =1; }}
	
	if (!Game.bomb_bag1) {if(document.getElementById(dodongosPlacement +"_req1") != null) {document.getElementById(dodongosPlacement +"_req1").style.opacity =.2; } if(document.getElementById(shadowPlacement +"_req4") != null) {document.getElementById(shadowPlacement +"_req4").style.opacity =.2; } if(document.getElementById(spiritPlacement +"_req3") != null) {document.getElementById(spiritPlacement +"_req3").style.opacity =.2; }}
	if (!Game.magic1) {document.getElementById("gan_req1").style.opacity = .2; if(document.getElementById(shadowPlacement +"_req2") != null) {document.getElementById(shadowPlacement +"_req2").style.opacity =.2; }}
	if (!Game.light_arrows) {document.getElementById("gan_req2").style.opacity = .2;}
	if (!Game.bow1) {document.getElementById("gan_req3").style.opacity = .2; if(document.getElementById(forestPlacement +"_req2") != null) {document.getElementById(forestPlacement +"_req2").style.opacity =.2; }}
	if (!Game.hookshot) {if(document.getElementById(forestPlacement +"_req1") != null) {document.getElementById(forestPlacement +"_req1").style.opacity =.2; } if(document.getElementById(shadowPlacement +"_req5") != null) {document.getElementById(shadowPlacement +"_req5").style.opacity =.2; } if(document.getElementById(spiritPlacement +"_req4") != null) {document.getElementById(spiritPlacement +"_req4").style.opacity =.2; }}
	if (!Game.goron_bracelet) {if(document.getElementById(forestPlacement +"_req3") != null) {document.getElementById(forestPlacement +"_req3").style.opacity =.2; }}
	if (!Game.hammer) {if(document.getElementById(firePlacement +"_req1") != null) {document.getElementById(firePlacement +"_req1").style.opacity =.2; }}
	if (!Game.rutos_letter) {if(document.getElementById(jabuPlacement +"_req1") != null) {document.getElementById(jabuPlacement +"_req1").style.opacity =.2; }}
	if (!Game.boomerang) {if(document.getElementById(jabuPlacement +"_req2") != null) {document.getElementById(jabuPlacement +"_req2").style.opacity =.2; }}
	if (!Game.iron_boots) {if(document.getElementById(waterPlacement +"_req1") != null) {document.getElementById(waterPlacement +"_req1").style.opacity =.2; }}
	if (!Game.scale2) {if(document.getElementById(waterPlacement +"_req2") != null) {document.getElementById(waterPlacement +"_req2").style.opacity =.2; }}
	if (!Game.longshot) {if(document.getElementById(waterPlacement +"_req3") != null) {document.getElementById(waterPlacement +"_req3").style.opacity =.2; }}
	if (!Game.silver_gauntlets) {if(document.getElementById(spiritPlacement +"_req1") != null) {document.getElementById(spiritPlacement +"_req1").style.opacity =.2; }}
	if (!Game.mirror_shield) {if(document.getElementById(spiritPlacement +"_req2") != null) {document.getElementById(spiritPlacement +"_req2").style.opacity =.2; }}
	if (!Game.dins_fire) {if(document.getElementById(shadowPlacement +"_req1") != null) {document.getElementById(shadowPlacement +"_req1").style.opacity =.2; }}
	if (!Game.hover_boots) {if(document.getElementById(shadowPlacement +"_req3") != null) {document.getElementById(shadowPlacement +"_req3").style.opacity =.2; }}
	
	if (Game.lullaby) {document.getElementById("lullabyimg").style.opacity =1;} else {document.getElementById("lullabyimg").style.opacity =.2;}
	if (Game.eponas) {document.getElementById("eponasimg").style.opacity =1;} else {document.getElementById("eponasimg").style.opacity =.2;}
	if (Game.sarias) {document.getElementById("sariasimg").style.opacity =1;} else {document.getElementById("sariasimg").style.opacity =.2;}
	if (Game.suns_song) {document.getElementById("sunsimg").style.opacity =1;} else {document.getElementById("sunsimg").style.opacity =.2;}
	if (Game.time) {document.getElementById("sotimg").style.opacity =1;} else {document.getElementById("sotimg").style.opacity =.2;}
	if (Game.storms) {document.getElementById("sosimg").style.opacity =1;} else {document.getElementById("sosimg").style.opacity =.2;}
	if (Game.minuet) {document.getElementById("minuetimg").style.opacity =1;} else {document.getElementById("minuetimg").style.opacity =.2;}
	if (Game.bolero) {document.getElementById("boleroimg").style.opacity =1;} else {document.getElementById("boleroimg").style.opacity =.2;}
	if (Game.serenade) {document.getElementById("serenadeimg").style.opacity =1;} else {document.getElementById("serenadeimg").style.opacity =.2;}
	if (Game.requiem) {document.getElementById("requiemimg").style.opacity =1;} else {document.getElementById("requiemimg").style.opacity =.2;}
	if (Game.nocturne) {document.getElementById("nocturneimg").style.opacity =1;} else {document.getElementById("nocturneimg").style.opacity =.2;}
	if (Game.prelude) {document.getElementById("preludeimg").style.opacity =1;} else {document.getElementById("preludeimg").style.opacity =.2;}
	
	if (Game.bottle1 || Logic.bottle) {document.getElementById("bottleimg").style.opacity =1;} else {document.getElementById("bottleimg").style.opacity =.2;}
	if (Game.farores_wind) {document.getElementById("faroresimg").style.opacity =1;} else {document.getElementById("faroresimg").style.opacity =.2;}
	if (Game.fire_arrows) {document.getElementById("firearrowsimg").style.opacity =1;} else {document.getElementById("firearrowsimg").style.opacity =.2;}
	if (Game.scale1) {document.getElementById("silverscaleimg").style.opacity =1;} else {document.getElementById("silverscaleimg").style.opacity =.2;}
	if (Game.lens_of_truth) {document.getElementById("lensimg").style.opacity =1;} else {document.getElementById("lensimg").style.opacity =.2;}
	if (Game.golden_gauntlets) {document.getElementById("goldengauntletsimg").style.opacity =1;} else {document.getElementById("goldengauntletsimg").style.opacity =.2;}
	if (Game.slingshot1) {document.getElementById("slingshotimg").style.opacity =1;} else {document.getElementById("slingshotimg").style.opacity =.2;}
}

function handleDungeonHighlights() {
	if (Game.forest) {document.getElementById("dung4_icon").style.opacity=1; document.getElementById("text_dung4").style.opacity = .2;} else{document.getElementById("dung4_icon").style.opacity=.2; document.getElementById("text_dung4").style.opacity = 1;}
	if (Game.fire) {document.getElementById("dung5_icon").style.opacity=1; document.getElementById("text_dung5").style.opacity = .2;} else{document.getElementById("dung5_icon").style.opacity=.2; document.getElementById("text_dung5").style.opacity = 1;}
	if (Game.water) {document.getElementById("dung6_icon").style.opacity=1; document.getElementById("text_dung6").style.opacity = .2;} else{document.getElementById("dung6_icon").style.opacity=.2; document.getElementById("text_dung6").style.opacity = 1;}
	if (Game.gen1) {document.getElementById("dung7_icon").style.opacity=1; document.getElementById("text_dung7").style.opacity = .2;} else{document.getElementById("dung7_icon").style.opacity=.2; document.getElementById("text_dung7").style.opacity = 1;}
	if (Game.gen2) {document.getElementById("dung8_icon").style.opacity=1; document.getElementById("text_dung8").style.opacity = .2;} else{document.getElementById("dung8_icon").style.opacity=.2; document.getElementById("text_dung8").style.opacity = 1;}
	if (Game.gen3) {document.getElementById("dung9_icon").style.opacity=1; document.getElementById("text_dung9").style.opacity = .2;} else{document.getElementById("dung9_icon").style.opacity=.2; document.getElementById("text_dung9").style.opacity = 1;}
	if (Game.emerald) {document.getElementById("dung1_icon").style.opacity=1; document.getElementById("text_dung1").style.opacity = .2;} else{document.getElementById("dung1_icon").style.opacity=.2; document.getElementById("text_dung1").style.opacity = 1;}
	if (Game.ruby) {document.getElementById("dung2_icon").style.opacity=1; document.getElementById("text_dung2").style.opacity = .2;} else{document.getElementById("dung2_icon").style.opacity=.2; document.getElementById("text_dung2").style.opacity = 1;}
	if (Game.sapphire) {document.getElementById("dung3_icon").style.opacity=1; document.getElementById("text_dung3").style.opacity = .2;} else{document.getElementById("dung3_icon").style.opacity=.2; document.getElementById("text_dung3").style.opacity = 1;}

	if (Check.deku_queen_gohma != "unknown") {if (document.getElementById("text_" + dekuPlacement) != null) {document.getElementById("text_" + dekuPlacement).style.opacity=.2}}
	if (Check.dodongos_king_dodongo != "unknown") {if (document.getElementById("text_" + dodongosPlacement) != null) {document.getElementById("text_" + dodongosPlacement).style.opacity=.2}}
	if (Check.jabu_barinade != "unknown") {if (document.getElementById("text_" + jabuPlacement) != null) {document.getElementById("text_" + jabuPlacement).style.opacity=.2}}
	if (Check.forest14 != "unknown") {if (document.getElementById("text_" + forestPlacement) != null) {document.getElementById("text_" + forestPlacement).style.opacity=.2}}
	if (Check.fire6 != "unknown") {if (document.getElementById("text_" + firePlacement) != null) {document.getElementById("text_" + firePlacement).style.opacity=.2}}
	if (Check.water11 != "unknown") {if (document.getElementById("text_" + waterPlacement) != null) {document.getElementById("text_" + waterPlacement).style.opacity=.2}}
	if (Check.spirit20 != "unknown") {if (document.getElementById("text_" + spiritPlacement) != null) {document.getElementById("text_" + spiritPlacement).style.opacity=.2}}
	if (Check.shadow18 != "unknown") {if (document.getElementById("text_" + shadowPlacement) != null) {document.getElementById("text_" + shadowPlacement).style.opacity=.2}}
	if (document.getElementById("text_" + pocketPlacement) != null) {document.getElementById("text_" + pocketPlacement).style.opacity=.2}
}

function checkGanons() {
	if (Game.magic1 && Game.light_arrows && Game.bow1 && Game.ganons_checks_remaining > 0) {
		document.getElementById("ganons").click();
	}
}

function setInLogicMaxForDungeons() {
	if (Game.forest_checks_remaining >=0 && (Game.forest_checks_remaining < Game.forest_logically_accessible)) {Game.logically_accessible -= (Game.forest_logically_accessible - Game.forest_checks_remaining);}
	if (Game.fire_checks_remaining >=0 && (Game.fire_checks_remaining < Game.fire_logically_accessible)) {Game.logically_accessible -= (Game.fire_logically_accessible - Game.fire_checks_remaining);}
	if (Game.water_checks_remaining >=0 && (Game.water_checks_remaining < Game.water_logically_accessible)) {Game.logically_accessible -= (Game.water_logically_accessible - Game.water_checks_remaining);}
	if (Game.spirit_checks_remaining >=0 && (Game.spirit_checks_remaining < Game.spirit_logically_accessible)) {Game.logically_accessible -= (Game.spirit_logically_accessible - Game.spirit_checks_remaining);}
	if (Game.shadow_checks_remaining >=0 && (Game.shadow_checks_remaining < Game.shadow_logically_accessible)) {Game.logically_accessible -= (Game.shadow_logically_accessible - Game.shadow_checks_remaining);}
	if (Game.gtg_checks_remaining >=0 && (Game.gtg_checks_remaining < Game.gtg_logically_accessible)) {Game.logically_accessible -= (Game.gtg_logically_accessible - Game.gtg_checks_remaining);}
	if (Game.well_checks_remaining >=0 && (Game.well_checks_remaining < Game.well_logically_accessible)) {Game.logically_accessible -= (Game.well_logically_accessible - Game.well_checks_remaining);}
	if (Game.ganons_checks_remaining >=0 && (Game.ganons_checks_remaining < Game.ganons_logically_accessible)) {Game.logically_accessible -= (Game.ganons_logically_accessible - Game.ganons_checks_remaining);}
}

function refreshLinSo() {
	var temp = 0;
	for (var i = 1; i <= 9; i++) {
		for (var j = 1; j <= 6; j++) {
			if (linsoOrder[temp] == "") {temp += 1; continue;}
			if (Game[linsoOrder[temp]]) {document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1;}
			else {document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = .2;}
			temp += 1;
		}
	}
}

function update_logic_info() {
	Logic.gold_skulltulas = 0;
	var i;
	document.getElementById("skullsTextBlock").innerHTML = "";
	for (i = 1; i<=100; i++) {
		if (gs[i] == true) {Logic.gold_skulltulas +=1; document.getElementById("skullsTextBlock").innerHTML += gsText[i] + "<br />" ;};
	}
	document.getElementById("skulls_in_logic").innerHTML = "Skulls: " + Logic.gold_skulltulas;

	Game.logically_accessible = 0;
	Game.forest_logically_accessible=0;
	Game.fire_logically_accessible=0;
	Game.water_logically_accessible=0;
	Game.spirit_logically_accessible=0;
	Game.shadow_logically_accessible=0;
	Game.gtg_logically_accessible=0;
	Game.well_logically_accessible=0;
	Game.ganons_logically_accessible=0;

	temp = 0;
	var colorChange = false;
	Game.checks_remaining = 0;
	for (var i = 0; i < Locations.length; i++) {
		if (i < AreaIndexes[34]) {
			document.getElementById(Locations[i]).style.display = "none";
			document.getElementById("text_" + Locations[i]).style.display = "none";
			document.getElementById("br_" + Locations[i]).style.display = "none";
		}
		if (document.getElementById("skullSanity").value != "ALL" && document.getElementById("skullSanity").value != "DUNGEON" && (Locations[i].startsWith("gs_deku") || Locations[i].startsWith("gs_dodongos") || Locations[i].startsWith("gs_jabu") || Locations[i].startsWith("gs_forest") || Locations[i].startsWith("gs_fire") || Locations[i].startsWith("gs_water") || Locations[i].startsWith("gs_spirit") || Locations[i].startsWith("gs_shadow") || Locations[i].startsWith("gs_ice") || Locations[i].startsWith("gs_well"))) {continue;}
		if (document.getElementById("skullSanity").value != "ALL" && Locations[i].startsWith("gs_") && (!Locations[i].startsWith("gs_deku") && !Locations[i].startsWith("gs_dodongos") && !Locations[i].startsWith("gs_jabu") && !Locations[i].startsWith("gs_forest") && !Locations[i].startsWith("gs_fire") && !Locations[i].startsWith("gs_water") && !Locations[i].startsWith("gs_spirit") && !Locations[i].startsWith("gs_shadow") && !Locations[i].startsWith("gs_ice") && !Locations[i].startsWith("gs_well"))) {continue;}
		if (document.getElementById("scrubSanity").value != "ON" && Locations[i].startsWith("scrub_")) {continue;}
		
		var key = Locations[i];
		
		str = "text_" + key;
		str2 = "br_" + key;
		if (Check[key] == "unknown") {
			document.getElementById(str).style.display = "inline-block";
			document.getElementById(key).style.display = "inline-block";
			document.getElementById(str2).style.display = "inline-block";
			if (i < AreaIndexes[34]) {Game.checks_remaining += 1;}
			}
		
		if (document.getElementById(str).style.display != "none") {if (document.getElementById(str).style.color == "orange") {colorChange = true;} else {colorChange = false;}} else {colorChange = false;}
		if(document.getElementById(str).style.display == "none") {continue;}
		if(Location_Logic[key] == true) {
			document.getElementById(str).className= "logic_check_text";
			document.getElementById(str).innerHTML = backUp[i];
			if (i >= 375 && Check[key] != "unknown") {document.getElementById(str).innerHTML += ": " + capitalizeFirstLetter(Check[key])}
			if ((!woth1Locations.includes(key) && !woth2Locations.includes(key) && !woth3Locations.includes(key) && !woth4Locations.includes(key) && !woth5Locations.includes(key)) || !circus) {document.getElementById(str).style.color = "chartreuse";}
			else {
				var woths = [woth1Locations.includes(key), woth2Locations.includes(key), woth3Locations.includes(key), woth4Locations.includes(key), woth5Locations.includes(key)];
				var i;
				var j;
				var k;
				var text = document.getElementById(str).innerHTML;
				document.getElementById(str).innerHTML = "";
				for (i = 0; i < text.length; i++) {
					for (j = 0; j < woths.length; j++) {
						if (woths[j]) {
						    let temptext = '<span style = "color: ' + WotHColors[j+1] + '">' + text[i] + '</span>';
							for (k = j+1; k <woths.length; k++) {
								if (woths[k]) {woths[j] = false;}
							}
							document.getElementById(str).innerHTML += temptext;
							break;
						}	
						if (j == woths.length -1) {document.getElementById(str).innerHTML += text[i];}
					}
				}
			}
			if(document.getElementById(key).style.display != "none") {
				if (i < 375) {Game.logically_accessible += 1;}
				if (i == AreaIndexes[12] - 1 && Game.deku_checks_remaining == 0) {Game.logically_accessible -= 1;}
			    if (i == AreaIndexes[16] - 1 && Game.dodongos_checks_remaining == 0) {Game.logically_accessible -= 1;}
				if (i == AreaIndexes[26] - 1 && Game.jabu_checks_remaining == 0) {Game.logically_accessible -= 1;}
				if (i >= AreaIndexes[26] && i < AreaIndexes[27]) {Game.forest_logically_accessible += 1;}
				if (i >= AreaIndexes[27] && i < AreaIndexes[26]) {Game.fire_logically_accessible += 1;}
				if (i >= AreaIndexes[28] && i < AreaIndexes[27]) {Game.water_logically_accessible += 1;}
				if (i >= AreaIndexes[29] && i < AreaIndexes[28]) {Game.spirit_logically_accessible += 1;}
				if (i >= AreaIndexes[30] && i < AreaIndexes[29]) {Game.shadow_logically_accessible += 1;}
				if (i >= AreaIndexes[31] && i < AreaIndexes[30]) {Game.ganons_logically_accessible += 1;}
				if (i >= AreaIndexes[32] && i < AreaIndexes[31]) {Game.gtg_logically_accessible += 1;}
				if (i >= AreaIndexes[33] && i < AreaIndexes[32]) {Game.well_logically_accessible += 1;}
			}
		}
		else if (Location_Access[key] == true) {
			document.getElementById(str).className= "access_check_text";
			document.getElementById(str).style.color ="yellow";
		}
		else {
			if (hideInaccessible) {
				if (document.getElementById(str).style.display != "none") {document.getElementById(str).style.display = "none";}
				if (document.getElementById(key).style.display != "none") {document.getElementById(key).style.display = "none";}
				if (document.getElementById(str2).style.display != "none") {document.getElementById(str2).style.display = "none";}
			}
			document.getElementById(str).className= "ool_check_text";
			document.getElementById(str).style.color ="black";
		}
		if (colorChange) {document.getElementById(str).style.color = "orange";}
	}
	
	Game.checks_remaining -= (5 - Game.current_forest_keys) + (8 - Game.current_fire_keys) + (6 - Game.current_water_keys) + (5 - Game.current_spirit_keys) + (5 - Game.current_shadow_keys) + (9 - Game.current_gtg_keys) + (3 - Game.current_well_keys) + (2 - Game.current_ganons_keys);
	if (!Game.forest_boss_key) {Game.checks_remaining -= 1;}
	if (!Game.fire_boss_key) {Game.checks_remaining -= 1;}
	if (!Game.water_boss_key) {Game.checks_remaining -= 1;}
	if (!Game.spirit_boss_key) {Game.checks_remaining -= 1;}
	if (!Game.shadow_boss_key) {Game.checks_remaining -= 1;}
	
	Game.logically_accessible = Number(Game.logically_accessible);
	Game.logically_accessible=Game.logically_accessible.toFixed(0);
	document.getElementById("checks_remaining").innerHTML="Remaining: "+Game.checks_remaining;
	document.getElementById("logically_accessible").innerHTML="&nbsp; &nbsp; In Logic: "+Game.logically_accessible;
}