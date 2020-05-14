function refresh_logic_for_stuff() {	
	if(Known.kokiri_sword == true) {Logic.kokiri_sword = Location_Logic[Location.kokiri_sword];}
	
	if(Known.farores_wind == true) {Logic.farores_wind = Location_Logic[Location.farores_wind];} else{Logic.farores_wind = false;}
	
	if(Known.slingshot1 == true) {Logic.slingshot1 = Location_Logic[Location.slingshot1];} 
	if(Known.slingshot2 == true) {Logic.slingshot2 = Location_Logic[Location.slingshot2];}
	if(Known.slingshot3 == true) {Logic.slingshot3 = Location_Logic[Location.slingshot3];}
	Logic.slingshot = Logic.slingshot1 || Logic.slingshot2 || Logic.slingshot3;
	
	if(Known.boomerang == true) {Logic.boomerang = Location_Logic[Location.boomerang];} else{Logic.boomerang = false;}
	
	if(Known.rutos_letter == true) {Logic.rutos_letter = Location_Logic[Location.rutos_letter];} else{Logic.rutos_letter = false;}
	if(Known.bottle1 == true) {Logic.bottle1 = Location_Logic[Location.bottle1];}
	if(Known.bottle2 == true) {Logic.bottle2 = Location_Logic[Location.bottle2];}
	if(Known.bottle3 == true) {Logic.bottle3 = Location_Logic[Location.bottle3];}
	Logic.bottle = (Logic.rutos_letter && ((Logic.bomb_bag && Logic.lullaby) || Logic.silver_scale)) || Logic.bottle1 || Logic.bottle2 || Logic.bottle3;
	
	if(Known.scale1 == true) {Logic.scale1 = Location_Logic[Location.scale1]; }
	if(Known.scale2 == true) {Logic.scale2 = Location_Logic[Location.scale2]; }
	if(Game.scale2 == true) {document.getElementById("silverscaleimg").src = Game.golden_scale_img;}
	Logic.silver_scale = Logic.scale1 || Logic.scale2;
	Logic.golden_scale = Logic.scale1 && Logic.scale2;
	
	if(Known.bomb_bag1 == true) {Logic.bomb_bag1 = Location_Logic[Location.bomb_bag1];}
	if(Known.bomb_bag2 == true) {Logic.bomb_bag2 = Location_Logic[Location.bomb_bag2];}
	if(Known.bomb_bag3 == true) {Logic.bomb_bag3 = Location_Logic[Location.bomb_bag3];}
	Logic.bomb_bag = Logic.bomb_bag1 || Logic.bomb_bag2 || Logic.bomb_bag3;
	
	if(Known.hammer == true) {Logic.hammer = Location_Logic[Location.hammer];} else{Logic.hammer= false;}
	
	if(Known.bow1 == true) {Logic.bow1 = Location_Logic[Location.bow1];}
	if(Known.bow2 == true) {Logic.bow2 = Location_Logic[Location.bow2];}
	if(Known.bow3 == true) {Logic.bow3 = Location_Logic[Location.bow3];}
	Logic.bow = Logic.bow1 || Logic.bow2 || Logic.bow3;
	
	if(Known.hookshot1 == true) {Logic.hookshot1 = Location_Logic[Location.hookshot1];}
	if(Known.hookshot2 == true) {Logic.hookshot2 = Location_Logic[Location.hookshot2];}
	Logic.hookshot = Logic.hookshot1 || Logic.hookshot2;
	Logic.longshot = Logic.hookshot1 && Logic.hookshot2;
	if(Known.strength1 == true) {Logic.strength1 = Location_Logic[Location.strength1];}
	if(Known.strength2 == true) {Logic.strength2 = Location_Logic[Location.strength2];}
	if(Known.strength3 == true) {Logic.strength3 = Location_Logic[Location.strength3];}
	Logic.goron_bracelet = Logic.strength1 || Logic.strength2 || Logic.strength3;
	Logic.silver_gauntlets = (Logic.strength1 && Logic.strength2) || (Logic.strength1 && Logic.strength3) || (Logic.strength2 && Logic.strength3)
	Logic.golden_gauntlets = Logic.strength1 && Logic.strength2 && Logic.strength3;
	
	if(Known.mirror_shield == true) {Logic.mirror_shield = Location_Logic[Location.mirror_shield];} else{Logic.mirror_shield = false;}
	
	if(Known.big_poe == true) {Logic.big_poe = Location_Logic[Location.big1];} else{Logic.big_poe= false;}
	
	if(Known.iron_boots == true) {Logic.iron_boots = Location_Logic[Location.iron_boots];} else{Logic.iron_boots = false;}
	if(Known.hover_boots == true) {Logic.hover_boots = Location_Logic[Location.hover_boots];} else{Logic.hover_boots = false;}
	
	if(Known.magic1 == true) {Logic.magic1 = Location_Logic[Location.magic1];}
	if(Known.magic2 == true) {Logic.magic2 = Location_Logic[Location.magic2];}
	Logic.magic = Logic.magic1 || Logic.magic2;
	
	if(Known.dins_fire == true) {Logic.dins_fire = Location_Logic[Location.dins_fire];} else{Logic.dins_fire = false;}
	if(Known.fire_arrows == true) {Logic.fire_arrows = Location_Logic[Location.fire_arrows];} else{Logic.fire_arrows = false;}
	
	if(Known.wallet1 == true) {Logic.wallet1 = Location_Logic[Location.wallet1];}
	if(Known.wallet2 == true) {Logic.wallet2 = Location_Logic[Location.wallet2];}
	Logic.adults_wallet = Logic.wallet1 || Logic.wallet2;
	Logic.giants_wallet = Logic.wallet1 && Logic.wallet2;
	
	if(Known.goron_tunic == true) {Logic.goron_tunic = Location_Logic[Location.goron_tunic];} else{Logic.goron_tunic = false;}
	if(Known.zora_tunic == true) {Logic.zora_tunic = Location_Logic[Location.zora_tunic];} else{Logic.zora_tunic = false;}
	if(Known.lens_of_truth == true) {Logic.lens_of_truth = Location_Logic[Location.lens_of_truth];} else{Logic.lens_of_truth = false;}
	if(Known.stone_of_agony == true) {Logic.stone_of_agony = Location_Logic[Location.stone_of_agony];} else{Logic.stone_of_agony = false;}
	if(Known.prescription == true) {Logic.prescription = Location_Logic[Location.prescription];} else{Logic.prescription = false;}
	if(Known.claim_check == true) {Logic.claim_check = Location_Logic[Location.claim_check];} else{Logic.claim_check = false;}
	Logic.trade = Logic.claim_check || Logic.prescription;
	
	if(Known.light_arrows == true) {Logic.light_arrows = Location_Logic[Location.light_arrows];}
	
	if(Known.lullaby == true) {Logic.lullaby = Location_Logic[Location.lullaby]; }
	if(Known.eponas == true) {Logic.eponas = Location_Logic[Location.eponas]; }
	if(Known.sarias == true) {Logic.sarias = Location_Logic[Location.sarias]; }
	if(Known.suns_song == true) {Logic.suns_song = Location_Logic[Location.suns_song]; }
	if(Known.song_of_time == true) {Logic.song_of_time = Location_Logic[Location.song_of_time]; }
	if(Known.song_of_storms == true) {Logic.song_of_storms = Location_Logic[Location.song_of_storms]; }
	if(Known.minuet == true) {Logic.minuet = Location_Logic[Location.minuet]; }
	if(Known.bolero == true) {Logic.bolero = Location_Logic[Location.bolero]; }
	if(Known.serenade == true) {Logic.serenade = Location_Logic[Location.serenade]; }
	if(Known.requiem == true) {Logic.requiem = Location_Logic[Location.requiem]; }
	if(Known.nocturne == true) {Logic.nocturne = Location_Logic[Location.nocturne]; }
	if(Known.prelude == true) {Logic.prelude = Location_Logic[Location.prelude]; }
	
	Game.trade = Game.prescription || Game.claim_check;
	
	Game.longshot = Game.hookshot1 && Game.hookshot2;
	Game.hookshot = Game.hookshot1 || Game.hookshot2;

	Game.golden_gauntlets = Game.strength1 && Game.strength2 && Game.strength3;
	if (Game.strength1 && Game.strength3) {Game.silver_gauntlets = true;}
	if (Game.strength2 && Game.strength3) {Game.silver_gauntlets = true;}
	if (Game.strength1 && Game.strength2) {Game.silver_gauntlets = true;}
	Game.goron_bracelet = Game.strength1 || Game.strength2 || Game.strength3;
	
	Logic.forest_boss_key = Logic.forced_forest_boss_key;
	Logic.fire_boss_key = Logic.forced_fire_boss_key;
	Logic.water_boss_key = Logic.forced_water_boss_key;
	Logic.spirit_boss_key = Logic.forced_spirit_boss_key;
	Logic.shadow_boss_key = Logic.forced_shadow_boss_key;
	if(Game.forest_boss_key == true) {Logic.forest_boss_key = Location_Logic[Location.forest_boss_key]; }
	if(Game.fire_boss_key == true) {Logic.fire_boss_key = Location_Logic[Location.fire_boss_key]; }
	if(Game.water_boss_key == true) {Logic.water_boss_key = Location_Logic[Location.water_boss_key]; }
	if(Game.spirit_boss_key == true) {Logic.spirit_boss_key = Location_Logic[Location.spirit_boss_key]; }
	if(Game.shadow_boss_key == true) {Logic.shadow_boss_key = Location_Logic[Location.shadow_boss_key]; }
	
	if(Logic.forest_medallion_location == "deku") {if (Check.deku_queen_gohma != "unknown") {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.deku_queen_gohma;}
	else if(Logic.forest_medallion_location == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.dodongos_king_dodongo;}
	else if(Logic.forest_medallion_location == "jabu") {if (Check.jabu_barinade != "unknown") {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.jabu_barinade;}
	else if(Logic.forest_medallion_location == "forest") {if (Check.forest14 != "unknown") {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.forest14;}
	else if(Logic.forest_medallion_location == "fire") {if (Check.fire6 != "unknown") {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.fire6;}
	else if(Logic.forest_medallion_location == "water") {if (Check.water11 != "unknown") {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.water11;}
	else if(Logic.forest_medallion_location == "spirit") {if (Check.spirit20 != "unknown") {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.spirit20;}
	else if(Logic.forest_medallion_location == "shadow") {if (Check.shadow18 != "unknown") {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.shadow18;}
	else if(Logic.forest_medallion_location == "pocket") {Game.forest_medallion = true; Logic.forest_medallion = true;}
	else {Logic.forest_medallion_location == "unknown"; Game.forest_medallion = false; Logic.forest_medallion = false;}
	
	if(Logic.fire_medallion_location == "deku") {if (Check.deku_queen_gohma != "unknown") {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.deku_queen_gohma;}
	else if(Logic.fire_medallion_location == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.dodongos_king_dodongo;}
	else if(Logic.fire_medallion_location == "jabu") {if (Check.jabu_barinade != "unknown") {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.jabu_barinade;}
	else if(Logic.fire_medallion_location == "forest") {if (Check.forest14 != "unknown") {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.forest14;}
	else if(Logic.fire_medallion_location == "fire") {if (Check.fire6 != "unknown") {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.fire6;}
	else if(Logic.fire_medallion_location == "water") {if (Check.water11 != "unknown") {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.water11;}
	else if(Logic.fire_medallion_location == "spirit") {if (Check.spirit20 != "unknown") {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.spirit20;}
	else if(Logic.fire_medallion_location == "shadow") {if (Check.shadow18 != "unknown") {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.shadow18;}
	else if(Logic.fire_medallion_location == "pocket") {Game.fire_medallion = true; Logic.fire_medallion = true;}
	else {Logic.fire_medallion_location == "unknown"; Game.fire_medallion = false; Logic.fire_medallion = false;}
	
	if(Logic.water_medallion_location == "deku") {if (Check.deku_queen_gohma != "unknown") {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.deku_queen_gohma;}
	else if(Logic.water_medallion_location == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.dodongos_king_dodongo;}
	else if(Logic.water_medallion_location == "jabu") {if (Check.jabu_barinade != "unknown") {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.jabu_barinade;}
	else if(Logic.water_medallion_location == "forest") {if (Check.forest14 != "unknown") {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.forest14;}
	else if(Logic.water_medallion_location == "fire") {if (Check.fire6 != "unknown") {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.fire6;}
	else if(Logic.water_medallion_location == "water") {if (Check.water11 != "unknown") {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.water11;}
	else if(Logic.water_medallion_location == "spirit") {if (Check.spirit20 != "unknown") {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.spirit20;}
	else if(Logic.water_medallion_location == "shadow") {if (Check.shadow18 != "unknown") {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.shadow18;}
	else if(Logic.water_medallion_location == "pocket") {Game.water_medallion = true; Logic.water_medallion = true;}
	else {Logic.water_medallion_location == "unknown"; Game.water_medallion = false; Logic.water_medallion = false;}
	Logic.shadow_medallion = false;
	Logic.spirit_medallion = false;
	for (var i = 1; i <=3; i++) {
		str = "generic" + i;
		str2 = "gen" + i;
		if(Logic[str] == "deku") {if (Check.deku_queen_gohma != "unknown") {Game[str2] = true;} Logic[str2] = Location_Logic.deku_queen_gohma; if(document.getElementById("text_" + dekuPlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(dekuPlacement + "_icon").src = dungIconSources[7]; Logic.shadow_medallion = Location_Logic.deku_queen_gohma;} if(document.getElementById("text_" + dekuPlacement).style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.deku_queen_gohma;}}
		else if(Logic[str] == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Game[str2] = true;} Logic[str2] = Location_Logic.dodongos_king_dodongo; if(document.getElementById("text_" + dodongosPlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(dodongosPlacement + "_icon").src = dungIconSources[7]; Logic.shadow_medallion = Location_Logic.dodongos_king_dodongo;} if(document.getElementById("text_" + dodongosPlacement).style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.dodongos_king_dodongo;}}
		else if(Logic[str] == "jabu") {if (Check.jabu_barinade != "unknown") {Game[str2] = true;} Logic[str2] = Location_Logic.jabu_barinade; if(document.getElementById("text_" + jabuPlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(jabuPlacement + "_icon").src = dungIconSources[7]; Logic.shadow_medallion = Location_Logic.jabu_barinade;} if(document.getElementById("text_" + jabuPlacement).style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.jabu_barinade;}}
		else if(Logic[str] == "forest") {if (Check.forest14 != "unknown") {Game[str2] = true;} Logic[str2] = Location_Logic.forest14; if(document.getElementById("text_" + forestPlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(forestPlacement + "_icon").src = dungIconSources[7]; Logic.shadow_medallion = Location_Logic.forest14;} if(document.getElementById("text_" + forestPlacement).style.color=="rgb(255, 165, 0)") {Location_Logic.forest14;}}
		else if(Logic[str] == "fire") {if (Check.fire6 != "unknown") {Game[str2] = true;} Logic[str2] = Location_Logic.fire6; if(document.getElementById("text_" + firePlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(firePlacement + "_icon").src = dungIconSources[7]; Logic.shadow_medallion = Location_Logic.fire6;} if(document.getElementById("text_" + firePlacement).style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.fire6;}}
		else if(Logic[str] == "water") {if (Check.water11 != "unknown") {Game[str2] = true;} Logic[str2] = Location_Logic.water11; if(document.getElementById("text_" + waterPlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(waterPlacement + "_icon").src = dungIconSources[7]; Logic.shadow_medallion = Location_Logic.water11;} if(document.getElementById("text_" + waterPlacement).style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.water11;}}
		else if(Logic[str] == "spirit") {if (Check.spirit20 != "unknown") {Game[str2] = true;} Logic[str2] = Location_Logic.spirit20; if(document.getElementById("text_" + spiritPlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(spiritPlacement + "_icon").src = dungIconSources[7]; Logic.shadow_medallion = Location_Logic.spirit20;} if(document.getElementById("text_" + spiritPlacement).style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.spirit20;}}
		else if(Logic[str] == "shadow") {if (Check.shadow18 != "unknown") {Game[str2] = true;} Logic[str2] = Location_Logic.shadow18; if(document.getElementById("text_" + shadowPlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(shadowPlacement + "_icon").src = dungIconSources[7]; Logic.shadow_medallion = Location_Logic.shadow18;} if(document.getElementById("text_" + shadowPlacement).style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.shadow18;}}
		else if(Logic[str] == "pocket") {Game[str2] = true; Logic[str2] = true; if(document.getElementById("text_" + pocketPlacement).style.color=="rgb(238, 130, 238)") {document.getElementById(pocketPlacement + "_icon").src = dungIconSources[7]; Logic.shadow_medallion = true;} if(document.getElementById("text_" + pocketPlacement).style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = true;}}
		else {Game[str2] = false; Logic[str2] = false;}
	}
	
	if(Logic.emerald == "deku") {if (Check.deku_queen_gohma != "unknown") {Game.emerald = true;} Logic.kokiri_emerald = Location_Logic.deku_queen_gohma;}
	if(Logic.emerald == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Game.emerald = true;} Logic.kokiri_emerald = Location_Logic.dodongos_king_dodongo;}
	if(Logic.emerald == "jabu") {if (Check.jabu_barinade != "unknown") {Game.emerald = true;} Logic.kokiri_emerald = Location_Logic.jabu_barinade;}
	if(Logic.emerald == "forest") {if (Check.forest14 != "unknown") {Game.emerald = true;} Logic.kokiri_emerald = Location_Logic.forest14;}
	if(Logic.emerald == "fire") {if (Check.fire6 != "unknown") {Game.emerald = true;} Logic.kokiri_emerald = Location_Logic.fire6;}
	if(Logic.emerald == "water") {if (Check.water11 != "unknown") {Game.emerald = true;} Logic.kokiri_emerald = Location_Logic.water11;}
	if(Logic.emerald == "spirit") {if (Check.spirit20 != "unknown") {Game.emerald = true;} Logic.kokiri_emerald = Location_Logic.spirit20;}
	if(Logic.emerald == "shadow") {if (Check.shadow18 != "unknown") {Game.emerald = true;} Logic.kokiri_emerald = Location_Logic.shadow18;}
	if(Logic.emerald == "pocket") {Game.emerald = true; Logic.kokiri_emerald = true;}
	
	if(Logic.ruby == "deku") {if (Check.deku_queen_gohma != "unknown") {Game.ruby = true;} Logic.goron_ruby = Location_Logic.deku_queen_gohma;}
	if(Logic.ruby == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Game.ruby = true;} Logic.goron_ruby = Location_Logic.dodongos_king_dodongo;}
	if(Logic.ruby == "jabu") {if (Check.jabu_barinade != "unknown") {Game.ruby = true;} Logic.goron_ruby = Location_Logic.jabu_barinade;}
	if(Logic.ruby == "forest") {if (Check.forest14 != "unknown") {Game.ruby = true;} Logic.goron_ruby = Location_Logic.forest14;}
	if(Logic.ruby == "fire") {if (Check.fire6 != "unknown") {Game.ruby = true;} Logic.goron_ruby = Location_Logic.fire6;}
	if(Logic.ruby == "water") {if (Check.water11 != "unknown") {Game.ruby = true;} Logic.goron_ruby = Location_Logic.water11;}
	if(Logic.ruby == "spirit") {if (Check.spirit20 != "unknown") {Game.ruby = true;} Logic.goron_ruby = Location_Logic.spirit20;}
	if(Logic.ruby == "shadow") {if (Check.shadow18 != "unknown") {Game.ruby = true;} Logic.goron_ruby = Location_Logic.shadow18;}
	if(Logic.ruby == "pocket") {Game.ruby = true; Logic.goron_ruby = true;}
	
	if(Logic.sapphire == "deku") {if (Check.deku_queen_gohma != "unknown") {Game.sapphire = true;} Logic.zora_sapphire = Location_Logic.deku_queen_gohma;}
	if(Logic.sapphire == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Game.sapphire = true;} Logic.zora_sapphire = Location_Logic.dodongos_king_dodongo;}
	if(Logic.sapphire == "jabu") {if (Check.jabu_barinade != "unknown") {Game.sapphire = true;} Logic.zora_sapphire = Location_Logic.jabu_barinade;}
	if(Logic.sapphire == "forest") {if (Check.forest14 != "unknown") {Game.sapphire = true;} Logic.zora_sapphire = Location_Logic.forest14;}
	if(Logic.sapphire == "fire") {if (Check.fire6 != "unknown") {Game.sapphire = true;} Logic.zora_sapphire = Location_Logic.fire6;}
	if(Logic.sapphire == "water") {if (Check.water11 != "unknown") {Game.sapphire = true;} Logic.zora_sapphire = Location_Logic.water11;}
	if(Logic.sapphire == "spirit") {if (Check.spirit20 != "unknown") {Game.sapphire = true;} Logic.zora_sapphire = Location_Logic.spirit20;}
	if(Logic.sapphire == "shadow") {if (Check.shadow18 != "unknown") {Game.sapphire = true;} Logic.zora_sapphire = Location_Logic.shadow18;}
	if(Logic.sapphire == "pocket") {Game.sapphire = true; Logic.zora_sapphire = true;}
	
	
	if(Logic.emerald == "unknown") {Logic.kokiri_emerald = false;}
	if(Logic.ruby == "unknown") {Logic.goron_ruby = false;}
	if(Logic.sapphire == "unknown") {Logic.zora_sapphire = false;}
	if(Logic.forest_medallion_location == "unknown") {Logic.forest_medallion = false;}
	if(Logic.fire_medallion_location == "unknown") {Logic.fire_medallion = false;}
	if(Logic.water_medallion_location == "unknown") {Logic.water_medallion = false;}
	
	Logic.current_forest_keys = Logic.forced_forest_keys;
	for (i = 1; i <= 14; i++) {
		str = "forest" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_forest_keys +=1;}
	}
	Logic.current_fire_keys = Logic.forced_fire_keys;
	for (i = 1; i <= 15; i++) {
		str = "fire" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_fire_keys +=1;}
	}
	
	Logic.current_water_keys = Logic.forced_water_keys;
	for (i = 1; i <= 11; i++) {
		str = "water" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_water_keys +=1;}
	}
	
	Logic.current_spirit_keys = Logic.forced_spirit_keys;
	for (i = 1; i <= 20; i++) {
		str = "spirit" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_spirit_keys +=1;}
	}
	
	Logic.current_shadow_keys = Logic.forced_shadow_keys;
	for (i = 1; i <= 18; i++) {
		str = "shadow" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_shadow_keys +=1;}
	}
	
	Logic.current_ganons_keys = Logic.forced_ganons_keys;
	for (i = 1; i <= 16; i++) {
		str = "ganons" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_ganons_keys +=1;}
	}
	
	Logic.current_gtg_keys = Logic.forced_gtg_keys;
	for (i = 1; i <= 22; i++) {
		str = "gtg" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_gtg_keys +=1;}
	}
	
	Logic.current_well_keys = Logic.forced_well_keys;
	for (i = 1; i <= 14; i++) {
		str = "well" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_well_keys +=1;}
	}
	
	if (Logic.current_forest_keys < 5) {
		var for_keys = [[1,2,3,4,5], [6,8], [7], [9,10,11]]
		var done = false;
		for (i = 0; i < for_keys.length; i++) {
			for (j = 0; j < for_keys[i].length; j++) {
				str = "forest" + for_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
					Logic.min_forest_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_forest_keys = 5;}
	}
	Logic.forest_keys = Math.max(Logic.min_forest_keys,Logic.current_forest_keys);
	if (!Logic.forest_boss_key) {
		var bk = true;
		for (i = 1; i <= 13; i++) {
			str = "forest" + i;
			if (!Location_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		Logic.forest_boss_key = bk;
	}

	if (Logic.current_fire_keys < 8 && ((Logic.can_wear_goron_tunic && Logic.hammer && Logic.hover_boots) || (Check["fire6"] != "small_key" && Check["fire6"] != "unknown"))) {
		var fir_keys = [[1,2,3], [4,5],[], [7,8],[9], [10,11,12], [13,14,15]]
		var done = false;
		for (i = 0; i < fir_keys.length; i++) {
			for (j = 0; j < fir_keys[i].length; j++) {
				str = "fire" + fir_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" || Check[str] == "unknown" || (Check[str] == "boss_key" && (Check["fire6"] == "small_key" || Check["fire6"] == "unknown")))) {
					Logic.min_fire_keys = i;	
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		
		if (!done) {Logic.min_fire_keys = 8;}
	}
	Logic.fire_keys = Math.max(Logic.min_fire_keys,Logic.current_fire_keys);
	if (!Logic.fire_boss_key) {
		var bk = true;
		for (i = 1; i <= 15; i++) {
			if (i == 6) {
				continue;
			}
			str = "fire" + i;
			if (!Location_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		Logic.fire_boss_key = bk;
	}
	
	if (Logic.current_water_keys < 6 && (Logic.longshot && Logic.iron_boots || (Check["water11"] != "small_key" && Check["water11"] != "unknown"))) {
		var wat_keys = [[1,2,3,4,5,6,9]]
		var done = false;
		for (i = 0; i < wat_keys.length; i++) {
			for (j = 0; j < wat_keys[i].length; j++) {
				str = "water" + wat_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown"|| (Check[str] == "boss_key" && (Check["water11"] == "small_key" || Check["water11"] == "unknown")))) {
					Logic.min_water_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_water_keys = 6;}
	}
	Logic.water_keys = Math.max(Logic.min_water_keys,Logic.current_water_keys);
	if (!Logic.water_boss_key) {
		var bk = true;
		for (i = 1; i <= 10; i++) {
			str = "water" + i;
			if (!Location_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		Logic.water_boss_key = bk;
	}
	if (Logic.current_spirit_keys < 5) {
		var spi_keys = [[1,2,8,9], [3,4,5,6], [], [7,10,11,12,13],[14,15,16,17],[18,19]]
		var done = false;
		for (i = 0; i < spi_keys.length; i++) {
			for (j = 0; j < spi_keys[i].length; j++) {
				str = "spirit" + spi_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
					Logic.min_spirit_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_spirit_keys = 5;}
	}
	Logic.spirit_keys = Math.max(Logic.min_spirit_keys,Logic.current_spirit_keys);
	if (!Logic.spirit_boss_key) {
		var bk = true;
		for (i = 1; i <= 19; i++) {
			str = "spirit" + i;
			if (!Location_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		Logic.spirit_boss_key = bk;
	}
	if (Logic.current_shadow_keys < 5) {
		var sha_keys = [[1,2,3,4], [5,6,7,8,9], [10,11],[12,13,14],[15,16,17]]
		var done = false;
		for (i = 0; i < sha_keys.length; i++) {
			for (j = 0; j < sha_keys[i].length; j++) {
				str = "shadow" + sha_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
					Logic.min_shadow_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_shadow_keys = 5;}
	}
	Logic.shadow_keys = Math.max(Logic.min_shadow_keys,Logic.current_shadow_keys);
	if (!Logic.shadow_boss_key) {
		var bk = true;
		for (i = 1; i <= 17; i++) {
			str = "shadow" + i;
			if (!Location_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		Logic.shadow_boss_key = bk;
	}
	if (Logic.current_ganons_keys < 2) {
		Logic.min_ganons_keys = 2;
		var done = false;
		for (i = 1; i <= 16; i++) {
			if (i == 8) {continue;}
			str = "ganons" + i;
			if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
				Logic.min_ganons_keys = 0;
				break;
			}
		}
	}
	Logic.ganons_keys = Math.max(Logic.min_ganons_keys,Logic.current_ganons_keys);
	if (Logic.current_gtg_keys < 9) {
		var ger_keys = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,22], [],[],[17],[18],[],[19],[20]]
		var done = false;
		for (i = 0; i < ger_keys.length; i++) {
			for (j = 0; j < ger_keys[i].length; j++) {
				str = "gtg" + ger_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
					Logic.min_gtg_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_gtg_keys = 9;}
	}
	Logic.gtg_keys = Math.max(Logic.min_gtg_keys,Logic.current_gtg_keys);
	if (Logic.current_well_keys < 3) {
		Logic.min_well_keys = 3;
		for (i = 1; i <= 14; i++) {
			if (i == 12 || i == 13) {continue;}
			str = "well" + i;
			if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
				Logic.min_well_keys = 0;
				break;
			}
		}
	}
	Logic.well_keys = Math.max(Logic.min_well_keys,Logic.current_well_keys);
	
	if(Logic.can_enter_ganons && Logic.golden_gauntlets) {Logic.min_ganons_keys = 1;}
	Logic.ganons_keys = Math.max(Logic.min_ganons_keys,Logic.current_ganons_keys);
	
	for(var i = 0; i <= 36; i++){
		str = checkSummary[i] + "_location";
		
		if (checkSummary[i] == "trade" && (Logic.prescription || Logic.claim_check)) {var exception = true;} else {var exception = false;}
		
		if (Logic[checkSummary[i]] || exception) {document.getElementById(str).className = "logic_check_text2";}
		else {document.getElementById(str).className = "ool_check_text2";}
	}
	
	for(var i = 0; i < checkSummary.length; i++) {
		if (i <= 36 ){
			str = checkSummary[i] + "_location";
			if (checkSummary[i] == "trade") {
				if (!Logic.prescription && !Logic.claim_check) {document.getElementById(str).style.fontWeight = "normal"; document.getElementById(str).style.fontSize = "14px";}
				else if (Logic.prescription || Logic.claim_check) { document.getElementById(str).style.fontWeight = "bold"; document.getElementById(str).style.fontSize = "16px";}
			}
			else {
				if (!Logic[checkSummary[i]]) { document.getElementById(str).style.fontWeight = "normal"; document.getElementById(str).style.fontSize = "14px";}
				else if (Logic[checkSummary[i]]) {document.getElementById(str).style.fontWeight = "bold"; document.getElementById(str).style.fontSize = "16px";}
			}
		}
		else {
			str = checkSummary[i];
		}
		if (Game[checkSummary[i]] || i > 36) { 
			if (i <= 36) {
				if (Logic[checkSummary[i]]) {
					document.getElementById(str).style.color = "chartreuse";
				}
				else {
					document.getElementById(str).style.color = "black";
				}
			}
		}
}
}

function force_stuff_in_or_out_of_logic() {
	var i;
	for (i = 1; i <= 4; i++) {
		str = "forceLogic" + i;
		if(document.getElementById(str).value == "bom") {Logic.bomb_bag = true;}
		if(document.getElementById(str).value == "far") {Logic.farores_wind = true;}
		if(document.getElementById(str).value == "sli") {Logic.slingshot = true;}
		if(document.getElementById(str).value == "boo") {Logic.boomerang = true;}
		if(document.getElementById(str).value == "sca") {if(!Logic.silver_scale) {Logic.silver_scale = true;} else if(!Logic.golden_scale){Logic.golden_scale = true;}}
		if(document.getElementById(str).value == "rut") {Logic.rutos_letter = true;}
		if(document.getElementById(str).value == "bot") {Logic.bottle = true;}
		if(document.getElementById(str).value == "big") {Logic.big_poe = true;}
		if(document.getElementById(str).value == "ham") {Logic.hammer = true;}
		if(document.getElementById(str).value == "bow") {Logic.bow = true;}
		if(document.getElementById(str).value == "hoo") {if(!Logic.hookshot) {Logic.hookshot = true;} else if(!Logic.longshot){Logic.longshot = true;}}
		if(document.getElementById(str).value == "gor") {Logic.goron_tunic= true;}
		if(document.getElementById(str).value == "zor") {Logic.zora_tunic= true;}
		if(document.getElementById(str).value == "str") {if(!Logic.goron_bracelet) {Logic.goron_bracelet = true;} else if(!Logic.silver_gauntlets){Logic.silver_gauntlets = true;} else if(!Logic.golden_gauntlets){Logic.golden_gauntlets = true;}}
		if(document.getElementById(str).value == "iro") {Logic.iron_boots = true;}
		if(document.getElementById(str).value == "hov") {Logic.hover_boots = true;}
		if(document.getElementById(str).value == "wal") {if(!Logic.adults_wallet) {Logic.adults_wallet = true;} else if(!Logic.giants_wallet){Logic.giants_wallet = true;}}
		if(document.getElementById(str).value == "mag") {Logic.magic = true;}
		if(document.getElementById(str).value == "din") {Logic.dins_fire = true;}
		if(document.getElementById(str).value == "fir") {Logic.fire_arrows = true;}
		if(document.getElementById(str).value == "len") {Logic.lens_of_truth = true;}
		if(document.getElementById(str).value == "pre") {Logic.prescription = true;}
		if(document.getElementById(str).value == "cla") {Logic.claim_check = true;}
		if(document.getElementById(str).value == "1me") {Logic.forest_medallion = true;}
		if(document.getElementById(str).value == "3me") {Logic.forest_medallion = true; Logic.fire_medallion = true; Logic.water_medallion = true;}
		if(document.getElementById(str).value == "oot") {Logic.kokiri_emerald = true; Logic.goron_ruby = true; Logic.zora_sapphire = true;}
		if(document.getElementById(str).value == "lul") {Logic.lullaby = true;}
		if(document.getElementById(str).value == "epo") {Logic.eponas = true;}
		if(document.getElementById(str).value == "sar") {Logic.sarias = true;}
		if(document.getElementById(str).value == "sun") {Logic.suns_song = true;}
		if(document.getElementById(str).value == "sot") {Logic.song_of_time = true;}
		if(document.getElementById(str).value == "sos") {Logic.song_of_storms = true;}
		if(document.getElementById(str).value == "min") {Logic.minuet = true;}
		if(document.getElementById(str).value == "bol") {Logic.bolero = true;}
		if(document.getElementById(str).value == "noc") {Logic.nocturne = true;}
		if(document.getElementById(str).value == "req") {Logic.requiem = true;}
	}
	for (i = 1; i <= 4; i++) {
		str = "forceOutOfLogic" + i;
		if(document.getElementById(str).value == "bom") {Logic.bomb_bag = false;}
		if(document.getElementById(str).value == "far") {Logic.farores_wind = false;}
		if(document.getElementById(str).value == "sli") {Logic.slingshot = false;}
		if(document.getElementById(str).value == "boo") {Logic.boomerang = false;}
		if(document.getElementById(str).value == "sca") {if(Logic.golden_scale) {Logic.golden_scale = false;} else if(Logic.silver_scale){Logic.silver_scale = false;}}
		if(document.getElementById(str).value == "rut") {Logic.rutos_letter = false;}
		if(document.getElementById(str).value == "bot") {Logic.bottle = false;}
		if(document.getElementById(str).value == "big") {Logic.big_poe = false;}
		if(document.getElementById(str).value == "ham") {Logic.hammer = false;}
		if(document.getElementById(str).value == "bow") {Logic.bow = false;}
		if(document.getElementById(str).value == "hoo") {if(Logic.longshot) {Logic.longshot = false;} else if(Logic.hookshot){Logic.hookshot = false;}}
		if(document.getElementById(str).value == "gor") {Logic.goron_tunic= false;}
		if(document.getElementById(str).value == "zor") {Logic.zora_tunic= false;}
		if(document.getElementById(str).value == "str") {if(Logic.golden_gauntlets) {Logic.golden_gauntlets = false;} else if(Logic.silver_gauntlets){Logic.silver_gauntlets = false;} else if(Logic.goron_bracelet){Logic.goron_bracelet = false;}}
		if(document.getElementById(str).value == "iro") {Logic.iron_boots = false;}
		if(document.getElementById(str).value == "hov") {Logic.hover_boots = false;}
		if(document.getElementById(str).value == "wal") {if(Logic.giants_wallet) {Logic.giants_wallet = false;} else if(Logic.adults_wallet){Logic.adults_wallet = false;}}
		if(document.getElementById(str).value == "mag") {Logic.magic = false;}
		if(document.getElementById(str).value == "din") {Logic.dins_fire = false;}
		if(document.getElementById(str).value == "fir") {Logic.fire_arrows = false;}
		if(document.getElementById(str).value == "len") {Logic.lens_of_truth = false;}
		if(document.getElementById(str).value == "pre") {Logic.prescription = false;}
		if(document.getElementById(str).value == "cla") {Logic.claim_check = false;}
		if(document.getElementById(str).value == "1me") {Logic.forest_medallion = false;}
		if(document.getElementById(str).value == "3me") {Logic.forest_medallion = false; Logic.fire_medallion = false; Logic.water_medallion = false;}
		if(document.getElementById(str).value == "oot") {Logic.kokiri_emerald = false; Logic.goron_ruby = false; Logic.zora_sapphire = false;}
		if(document.getElementById(str).value == "lul") {Logic.lullaby = false;}
		if(document.getElementById(str).value == "epo") {Logic.eponas = false;}
		if(document.getElementById(str).value == "sar") {Logic.sarias = false;}
		if(document.getElementById(str).value == "sun") {Logic.suns_song = false;}
		if(document.getElementById(str).value == "sot") {Logic.song_of_time = false;}
		if(document.getElementById(str).value == "sos") {Logic.song_of_storms = false;}
		if(document.getElementById(str).value == "min") {Logic.minuet = false;}
		if(document.getElementById(str).value == "bol") {Logic.bolero = false;}
		if(document.getElementById(str).value == "noc") {Logic.nocturne = false;}
		if(document.getElementById(str).value == "req") {Logic.requiem = false;}
	}
}

function logic_shortcuts() {
	Logic.can_enter_jabu = Logic.rutos_letter && ((Logic.lullaby && Logic.bomb_bag) || Logic.silver_scale) && (Logic.boomerang || Logic.bomb_bag || Logic.slingshot);
	Logic.child_can_enter_river = Logic.bomb_bag || Logic.silver_scale;
	Logic.fortress_access = Logic.eponas || Logic.longshot;
	Logic.can_save_carpenters = Logic.fortress_access && ((Logic.bow || Logic.hookshot || Logic.hover_boots) || true) /*fast carpenter fix**/;
	Logic.can_cross_quicksand = Logic.fortress_access && (Logic.longshot || Logic.hover_boots);
	Logic.can_enter_colossus = (Logic.can_cross_quicksand && (Logic.brackets || Logic.can_see)) || Logic.requiem;
	Logic.can_use_fire = (Logic.dins_fire || (Logic.bow && Logic.fire_arrows)) && Logic.magic;
	Logic.can_use_dins = Logic.dins_fire && Logic.magic;
	Logic.can_use_farores = Logic.farores_wind && Logic.magic;
	Logic.can_see = Logic.lens_of_truth && Logic.magic;
	Logic.can_blast_or_smash = Logic.bomb_bag || Logic.hammer;
	Logic.can_enter_dodongos = Logic.can_blast_or_smash || Logic.goron_bracelet;
	Logic.dodongos_climb = Logic.can_enter_dodongos && (Logic.bomb_bag || Logic.goron_bracelet || Logic.can_use_dins);
	Logic.can_enter_shadow = Logic.nocturne && Logic.can_use_dins && (Logic.hover_boots || Logic.hookshot) ;//&& Logic.can_see;
	Logic.can_cross_shadow_gap= Logic.can_enter_shadow && Logic.hover_boots;
	Logic.can_bomb_shadow_wall = Logic.can_cross_shadow_gap && Logic.bomb_bag;
	Logic.can_pass_shadow_hookshot_door = Logic.can_bomb_shadow_wall && Logic.hookshot;
	Logic.can_ride_shadow_boat = Logic.can_pass_shadow_hookshot_door && Logic.lullaby;
	Logic.can_beat_shadow_boss = Logic.can_ride_shadow_boat && (Logic.bow || Logic.longshot);
	Logic.can_stop_link_the_goron = Logic.bomb_bag || Logic.bow || Logic.goron_bracelet;
	Logic.ice_access = Logic.rutos_letter && Logic.lullaby && Logic.child_can_enter_river;
	Logic.reverse_crater = (Logic.hover_boots || Logic.hookshot || Logic.child_can_enter_river) && Logic.bolero;
	Logic.can_enter_fire_temple = (Logic.crater_by_city && (Logic.hookshot || Logic.hover_boots)) || Logic.bolero
	Logic.crater_by_city = Logic.bow || Logic.bomb_bag || Logic.goron_bracelet || Logic.reverse_crater ||(Logic.hammer && Logic.hover_boots) || (Logic.longshot && Logic.goron_tunic && Logic.hammer);
	Logic.crater_top = Logic.crater_by_city || Logic.hammer;
	Logic.can_enter_adult_spirit = Logic.can_enter_colossus && Logic.silver_gauntlets;
	Logic.can_enter_ganons = Logic.forest_medallion && Logic.fire_medallion && Logic.water_medallion && Logic.gen1 && Logic.gen2 && Logic.gen3;
	Logic.can_climb_fire_temple = Logic.can_enter_fire_temple && Logic.fire_keys >=3 && Logic.can_wear_goron_tunic && Logic.goron_bracelet && (Logic.bow || Logic.hookshot || Logic.bomb_bag);
	Logic.can_enter_water = Logic.hookshot && Logic.iron_boots;
	Logic.middle_water = Logic.can_enter_water && Logic.lullaby && (Logic.bow || Logic.can_use_dins);
	Logic.projectile_both = Logic.bomb_bag || ((Logic.slingshot || Logic.boomerang) && (Logic.bow || Logic.hookshot));
	Logic.projectile_child = Logic.bomb_bag || Logic.slingshot || Logic.boomerang;
	Logic.projectile_adult = Logic.bomb_bag || Logic.bow || Logic.hookshot;
	Logic.can_wear_goron_tunic = Logic.goron_tunic || (Logic.adults_wallet && (Logic.bomb_bag || Logic.goron_bracelet || Logic.bow));
	Logic.can_wear_zora_tunic = Logic.zora_tunic || (Logic.giants_wallet && (Logic.lullaby && Logic.bottle));

	Game.can_enter_jabu = Game.rutos_letter && (Game.bomb_bag1 || Game.has_chus || Game.scale1)
	Game.child_can_enter_river = Game.bomb_bag1 || Game.has_chus || Game.scale1;
	Game.fortress_access = Game.eponas || Game.longshot || Game.requiem;
	Game.can_save_carpenters = Game.fortress_access && ((Game.bow1 || Game.hookshot || Game.hover_boots) || true) /*fast carpenter fix**/;
	Game.can_cross_quicksand = Game.fortress_access;
	Game.can_enter_colossus = (Game.can_cross_quicksand) || Game.requiem;
	Game.can_use_fire = (Game.dins_fire || (Game.bow1 && Game.fire_arrows)) && Game.magic1;
	Game.can_use_dins = Game.dins_fire && Game.magic1;
	Game.can_use_farores = Game.farores_wind && Game.magic1;
	Game.can_see = Game.lens_of_truth && Game.magic1;
	Game.can_blast_or_smash = Game.bomb_bag1 || Game.hammer || Game.has_chus;
	Game.can_enter_dodongos = Game.can_blast_or_smash || Game.goron_bracelet || ((Game.bottle1 || Game.can_enter_jabu) && Game.giants_wallet);
	Game.dodongos_climb	= Game.can_enter_dodongos && (Game.bomb_bag1 || Game.has_chus || Game.goron_bracelet || Game.can_use_dins);
	Game.can_enter_shadow= Game.nocturne && Game.can_use_dins && (Game.hover_boots || Game.hookshot) ;//&& Game.can_see;
	Game.can_cross_shadow_gap= Game.can_enter_shadow && Game.hover_boots;
	Game.can_bomb_shadow_wall = Game.can_cross_shadow_gap && (Game.bomb_bag1 || Game.has_chus);
	Game.can_pass_shadow_hookshot_door = Game.can_bomb_shadow_wall && Game.hookshot;
	Game.can_ride_shadow_boat = Game.can_pass_shadow_hookshot_door && Game.lullaby;
	Game.can_beat_shadow_boss = Game.can_ride_shadow_boat && (Game.bow1 || Game.longshot);
	Game.can_stop_link_the_goron = Game.bomb_bag1 || Game.bow1 || Game.goron_bracelet || Game.has_chus;
	Game.ice_access = Game.rutos_letter && (Game.lullaby || Game.hover_boots) && Game.child_can_enter_river;
	Game.reverse_crater = (Game.hover_boots || Game.hookshot || Game.child_can_enter_river) && Game.bolero;
	Game.can_enter_fire_temple = (Game.crater_by_city && (Game.hookshot || Game.hover_boots)) || Game.bolero;
	Game.crater_by_city = Game.bow1 || Game.bomb_bag1 || Game.goron_bracelet || Game.reverse_crater || (Game.hammer && Game.hover_boots) || (Game.goron_tunic && Game.longshot && Game.hammer);
	Game.crater_top = Game.crater_by_city || Game.hammer;
	Game.can_enter_adult_spirit = Game.can_enter_colossus && Game.silver_gauntlets;
	Game.can_enter_ganons = Game.forest_medallion && Game.fire_medallion && Game.water_medallion && Game.gen1 && Game.gen2 && Game.gen3;
	Game.can_climb_fire_temple = Game.can_enter_fire_temple && Game.current_fire_keys >=3 && (Game.bow1 || Game.hookshot || Game.bomb_bag1);
	Game.can_enter_water = (Game.hookshot && Game.iron_boots) || (Game.longshot && Game.scale2);
	Game.middle_water = Game.can_enter_water && Game.lullaby && (Game.bow1 || Game.can_use_dins);
	Game.projectile_both = Game.bomb_bag1 || Game.has_chus || ((Game.slingshot1 || Game.boomerang) && (Game.bow1 || Game.hookshot));
	Game.projectile_child = Game.bomb_bag1 || Game.has_chus || Game.slingshot1 || Game.boomerang;
	Game.projectile_adult = Game.bomb_bag1 || Game.has_chus || Game.bow1 || Game.hookshot;
	Game.can_wear_goron_tunic = true;
	Game.can_wear_zora_tunic = true;
	Game.can_climb_gtg_hole = Game.hookshot || Game.hover_boots || Game.bomb_bag1;
	Game.giants_wallet = Game.wallet1 && Game.wallet2;
}

function location_logic(){
	Location_Logic.mido_1 = true;
	Location_Logic.mido_2 = true;
	Location_Logic.mido_3 = true;
	Location_Logic.mido_4 = true;
	Location_Logic.kokiri_sword = true;
	Location_Logic.kokiri_song_of_storms = Logic.song_of_storms;
	Location_Logic.talons_chickens = true;
	Location_Logic.back_of_ranch = true;
	Location_Logic.hyrule_forest_boulder = Logic.can_blast_or_smash;
	Location_Logic.hyrule_open_grotto = true;
	Location_Logic.hyrule_hp_scrub = Logic.can_blast_or_smash;;
	Location_Logic.hyrule_boulder_of_destiny = Logic.can_blast_or_smash;;
	Location_Logic.hyrule_tektite_grotto = Logic.can_blast_or_smash && (Logic.golden_scale || Logic.iron_boots);
	Location_Logic.gerudovalley_box = true;
	Location_Logic.gerudovalley_waterfall = true;
	Location_Logic.gerudo_hammer = Logic.fortress_access && Logic.hammer;
	Location_Logic.hylia_child_fishing = true;
	Location_Logic.hylia_bottle = Logic.silver_scale;
	Location_Logic.hylia_adult_fishing = Logic.hookshot || Logic.child_can_enter_river;
	Location_Logic.hylia_lab_top = Logic.hookshot || Logic.child_can_enter_river;
	Location_Logic.hylia_lab_dive = Logic.golden_scale;
	Location_Logic.hylia_sun_shoot = Logic.longshot && Logic.bow;
	Location_Logic.market_slingshot_game = true;
	Location_Logic.richard = true;
	Location_Logic.market_bowling_1 = Logic.bomb_bag;
	Location_Logic.market_bowling_2 = Logic.bomb_bag;
	Location_Logic.market_lens_game = Logic.can_see;
	Location_Logic.poes= (Logic.bow && Logic.eponas && Logic.bottle) || Logic.big_poe;
	Location_Logic.dins_fairy = Logic.bomb_bag && Logic.lullaby;
	Location_Logic.g_fairy = Logic.golden_gauntlets && Logic.lullaby;
	Location_Logic.lacs = Logic.shadow_medallion && Logic.spirit_medallion;
	Location_Logic.fountain_fairy = Logic.ice_access && Logic.bomb_bag;
	Location_Logic.ice_glacier_hp = Logic.ice_access;
	Location_Logic.ice_bottom_of_fountain = Logic.ice_access && Logic.iron_boots;
	Location_Logic.ice_map = Logic.ice_access;
	Location_Logic.ice_compass = Logic.ice_access;
	Location_Logic.ice_hp = Logic.ice_access;
	Location_Logic.ice_irons = Logic.ice_access;
	Location_Logic.deku_lobby = true;
	Location_Logic.deku_slingshot = true;
	Location_Logic.deku_slingshot_room_side = true;
	Location_Logic.deku_compass = true;
	Location_Logic.deku_compass_room_side = true;
	Location_Logic.deku_basement = true;
	Location_Logic.deku_queen_gohma = Logic.slingshot;
	Location_Logic.ocarina_game = true;
	Location_Logic.lost_woods_grotto = Logic.can_blast_or_smash;
	Location_Logic.lost_woods_scrub_grotto = Logic.bomb_bag || (Logic.sarias || Logic.minuet) && Logic.hammer;
	Location_Logic.bridge_scrub = true;
	Location_Logic.target = Logic.slingshot;
	Location_Logic.skull_kid = Logic.sarias;
	Location_Logic.theater = true;
	Location_Logic.wolfos_grotto = Logic.bomb_bag || (Logic.sarias || Logic.minuet) && Logic.hammer;
	Location_Logic.rolling_goron = Logic.bomb_bag;
	Location_Logic.goron_dance = Logic.lullaby && Logic.sarias;
	Location_Logic.goron_pot = (Logic.bomb_bag || Logic.goron_bracelet) && (Logic.lullaby || Logic.can_use_dins);
	Location_Logic.goron_maze_1 = Logic.can_blast_or_smash || Logic.silver_gauntlets;
	Location_Logic.goron_maze_2 = Logic.can_blast_or_smash || Logic.silver_gauntlets;
	Location_Logic.goron_maze_3 = Logic.hammer || Logic.silver_gauntlets;
	Location_Logic.goron_link = Logic.can_stop_link_the_goron;
	Location_Logic.dodongos_map = Logic.can_enter_dodongos;
	Location_Logic.dodongos_compass = Logic.can_enter_dodongos;
	Location_Logic.dodongos_bomb_flower_platform = Logic.dodongos_climb;
	Location_Logic.dodongos_bomb_bag = Logic.dodongos_climb;
	Location_Logic.dodongos_end_of_bridge = Logic.dodongos_climb && Logic.can_blast_or_smash;
	Location_Logic.dodongos_above_king = Logic.bomb_bag;
	Location_Logic.dodongos_king_dodongo = Logic.bomb_bag;
	Location_Logic.trail_bombable = Logic.can_blast_or_smash;
	Location_Logic.trail_dodongos_top = true;
	Location_Logic.trail_song_of_storms = Logic.song_of_storms;
	Location_Logic.crater_peak_fairy = Logic.can_blast_or_smash && Logic.lullaby;
	Location_Logic.trade_quest = Location_Logic.trade_quest = (((Logic.ice_access || ((Logic.giants_wallet || Logic.can_enter_ganons) && Logic.lullaby && Logic.bottle)) && Logic.prescription) || Logic.claim_check) && Logic.crater_top;
	Location_Logic.crater_bean = (Logic.bolero && Logic.child_can_enter_river) || (Logic.hover_boots && Logic.crater_by_city);
	Location_Logic.crater_hammer_fairy = Logic.crater_by_city && Logic.hammer && Logic.lullaby;
	Location_Logic.crater_grotto = Logic.can_blast_or_smash;
	Location_Logic.crater_nook_hp = Logic.crater_top;
	Location_Logic.man_on_roof = true;//Logic.hookshot;
	Location_Logic.kakariko_grotto = true;
	Location_Logic.windmill = true;//Logic.boomerang || Logic.song_of_time;
	Location_Logic.anju = true;
	Location_Logic.cow_house = true;
	Location_Logic.archery_game = Logic.bow;
	Location_Logic.redead_grotto = Logic.can_blast_or_smash;
	Location_Logic.anjus_chickens = true;
	Location_Logic.tokens_10 = Logic.gold_skulltulas >= 10;
	Location_Logic.tokens_20 = Logic.gold_skulltulas >= 20;
	Location_Logic.tokens_30 = Logic.gold_skulltulas >= 30;
	Location_Logic.tokens_40 = Logic.gold_skulltulas >= 40;
	Location_Logic.tokens_50 = Logic.gold_skulltulas >= 50;
	Location_Logic.shield_grave = true;
	Location_Logic.gravedigging_tour = true;
	Location_Logic.suns_grave = Logic.suns_song;
	Location_Logic.fire_grave = Logic.lullaby && Logic.can_use_fire;
	Location_Logic.graveyard_box = Logic.child_can_enter_river || Logic.longshot;
	Location_Logic.race_1 = true;
	Location_Logic.race_2 = true;
	Location_Logic.river_pillar = Logic.child_can_enter_river || Logic.hover_boots;
	Location_Logic.river_grotto = true;
	Location_Logic.river_ledge = Logic.child_can_enter_river || Logic.hover_boots;
	Location_Logic.frogs_1 = Logic.child_can_enter_river && Logic.song_of_storms;
	Location_Logic.frogs_2 = Logic.child_can_enter_river && (Logic.song_of_storms && Logic.lullaby && Logic.eponas && Logic.sarias && Logic.suns_song && Logic.song_of_time);
	Location_Logic.zora_diving = (Logic.lullaby && Logic.bomb_bag) || Logic.silver_scale;
	Location_Logic.zora_torches = (Logic.lullaby && Logic.bomb_bag) || Logic.silver_scale;
	Location_Logic.thaw_king = Logic.ice_access || (Logic.bottle && (Logic.giants_wallet || Logic.can_enter_ganons) && Logic.lullaby);
	Location_Logic.colossus_bean = Logic.requiem && Logic.child_can_enter_river;
	Location_Logic.colossus_fairy = Logic.can_enter_colossus && Logic.bomb_bag && Logic.lullaby;
	Location_Logic.wasteland = Logic.can_cross_quicksand && Logic.can_use_fire;
	Location_Logic.gerudo_roof = Logic.fortress_access && (Logic.hookshot || Logic.hover_boots);
	Location_Logic.gerudo_archery_1 = Logic.eponas && Logic.bow;
	Location_Logic.gerudo_archery_2 = Logic.eponas && Logic.bow;
	Location_Logic.jabu_boomerang = Logic.can_enter_jabu;
	Location_Logic.jabu_map = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.jabu_compass = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.jabu_barinade = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.forest1 = (Logic.minuet || Logic.sarias) && Logic.hookshot;
	Location_Logic.forest2 = (Logic.minuet || Logic.sarias) && Logic.hookshot;
	Location_Logic.forest3 = (Logic.minuet || Logic.sarias) && Logic.hookshot && (Logic.song_of_time || Logic.bow || (Logic.hover_boots && Logic.forest_keys>=1));
	Location_Logic.forest4 = (Logic.minuet || Logic.sarias) && Logic.hookshot && (Logic.song_of_time || (Logic.hover_boots && Logic.forest_keys>=1) || (Logic.bow/* && (Logic.iron_boots || Logic.golden_scale || Logic.longshot)*/));
	Location_Logic.forest5 = (Logic.minuet || Logic.sarias) && Logic.hookshot && (Logic.song_of_time || (Logic.hover_boots && Logic.forest_keys>=1) || (Logic.bow/* && (Logic.iron_boots || Logic.golden_scale || Logic.longshot)*/));
	Location_Logic.forest6 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.forest_keys >= 1 && Logic.bow && Logic.goron_bracelet;
	Location_Logic.forest7 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.forest_keys >= 2 && Logic.bow && Logic.goron_bracelet;
	Location_Logic.forest8 = (Logic.minuet || Logic.sarias) && Logic.hookshot && ((Logic.bow && Logic.goron_bracelet && Logic.forest_keys >=2) || (Logic.hover_boots && Logic.forest_keys >=1));
	Location_Logic.forest9 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && Logic.bow && Logic.forest_keys>=3;
	Location_Logic.forest10 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && Logic.forest_keys>=3;
	Location_Logic.forest11 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && Logic.bow && Logic.forest_keys>=3;
	Location_Logic.forest12 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && (Logic.bow || Logic.can_use_dins) && Logic.forest_keys>=5;
	Location_Logic.forest13 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && Logic.bow && Logic.forest_keys>=5;
	Location_Logic.forest14 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && Logic.bow && Logic.forest_keys>=5 && Logic.forest_boss_key;
	Location_Logic.fire1 = Logic.can_enter_fire_temple;
	Location_Logic.fire2 = Logic.can_enter_fire_temple && Logic.hammer;
	Location_Logic.fire3 = Logic.can_enter_fire_temple && Logic.hammer;
	Location_Logic.fire4 = Logic.can_enter_fire_temple && Logic.fire_keys >=1;
	Location_Logic.fire5 = Logic.can_enter_fire_temple && Logic.fire_keys >=1 && Logic.bomb_bag;
	Location_Logic.fire6 = Logic.can_enter_fire_temple && Logic.fire_boss_key && Logic.hammer && Logic.can_wear_goron_tunic && (Logic.hover_boots || (Logic.fire_keys >=7 && (Logic.song_of_time || Logic.bomb_bag)));
	Location_Logic.fire7 = Logic.can_climb_fire_temple;
	Location_Logic.fire8 = Logic.can_climb_fire_temple;
	Location_Logic.fire9 = Logic.can_climb_fire_temple && ((Logic.fire_keys >= 4 && Logic.bow) || Logic.fire_keys>=5);
	Location_Logic.fire10 = Logic.can_climb_fire_temple && Logic.fire_keys>=5;
	Location_Logic.fire11 = Logic.can_climb_fire_temple && Logic.fire_keys>=5 && Logic.bomb_bag;
	Location_Logic.fire12 = Logic.can_climb_fire_temple && Logic.fire_keys>=5 && Logic.hookshot;
	Location_Logic.fire13 = Logic.can_climb_fire_temple && Logic.fire_keys>=6;
	Location_Logic.fire14 = Logic.can_climb_fire_temple && (Logic.fire_keys>=7 || (Logic.fire_keys>=6 && Logic.hover_boots)) && Logic.hammer && (Logic.song_of_time || Logic.bomb_bag);
	Location_Logic.fire15 = Logic.can_climb_fire_temple && (Logic.fire_keys>=7 || (Logic.fire_keys >= 6 && Logic.hover_boots)) && Logic.bomb_bag;
	Location_Logic.water1 = Logic.can_enter_water;
	Location_Logic.water2 = Logic.can_enter_water;
	Location_Logic.water3 = Logic.middle_water && Logic.bomb_bag;
	Location_Logic.water4 = Logic.can_enter_water && Logic.lullaby && (Logic.bow || Logic.can_use_dins);
	Location_Logic.water5 = Logic.can_enter_water && Logic.lullaby && Logic.bow && Logic.goron_bracelet && (Logic.hover_boots || Logic.longshot);
	Location_Logic.water6 = Logic.middle_water && Logic.can_wear_zora_tunic;
	Location_Logic.water7 = Logic.water_keys >= 5 && Logic.lullaby;
	Location_Logic.water8 = Logic.water_keys >= 5 && Logic.lullaby && Logic.song_of_time && Logic.bow;
	Location_Logic.water9 = Logic.can_enter_water && Logic.lullaby && ((Logic.water_keys >= 5 && Logic.song_of_time && Logic.bow) || Logic.goron_bracelet);
	Location_Logic.water10 = Logic.can_enter_water && Logic.lullaby && Logic.longshot && Logic.water_keys >= 5 && ((Logic.bomb_bag && Logic.goron_bracelet) || Logic.hover_boots);
	Location_Logic.water11 = Logic.can_enter_water && Logic.water_boss_key && Logic.longshot ;
	Location_Logic.spirit1 = Logic.requiem && (Logic.slingshot || Logic.boomerang);
	Location_Logic.spirit2 = Logic.requiem && (Logic.slingshot || Logic.boomerang);
	Location_Logic.spirit3 = (Logic.spirit_keys >=1 && Logic.projectile_both);
	Location_Logic.spirit4 = (Logic.spirit_keys >=1 && Logic.projectile_both);
	Location_Logic.spirit5 = (Logic.spirit_keys ==5 && Logic.requiem && Logic.bomb_bag) || (Logic.spirit_keys >=3 && Logic.silver_gauntlets && Logic.can_use_fire) || (Logic.bomb_bag && Logic.spirit_keys >=1 && Logic.can_use_fire);
	Location_Logic.spirit6 = (Logic.spirit_keys ==5 && Logic.requiem && Logic.bomb_bag) || (Logic.spirit_keys >=3 && Logic.silver_gauntlets && Logic.can_use_fire) || (Logic.bomb_bag && Logic.spirit_keys >=1 && Logic.can_use_fire);
	Location_Logic.spirit7 = (Logic.spirit_keys >=3 && Logic.longshot && Logic.bomb_bag) || Logic.spirit_keys == 5;
	Location_Logic.spirit8 = Logic.can_enter_adult_spirit && Logic.hookshot && Logic.lullaby;
	Location_Logic.spirit9 = Logic.can_enter_adult_spirit && (Logic.bow || Logic.hookshot || Logic.bomb_bag);
	Location_Logic.spirit10 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3;
	Location_Logic.spirit11 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3;
	Location_Logic.spirit12 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3 && Logic.lullaby;
	Location_Logic.spirit13 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3 && Logic.lullaby && (Logic.hookshot || Logic.hover_boots);
	Location_Logic.spirit14 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag && Logic.mirror_shield;
	Location_Logic.spirit15 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag ;//&& Logic.can_see;
	Location_Logic.spirit16 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag ;//&& Logic.can_see;
	Location_Logic.spirit17 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag;
	Location_Logic.spirit18 = Logic.can_enter_adult_spirit && Logic.spirit_keys ==5 && Logic.bow && Logic.lullaby && Logic.hookshot;
	Location_Logic.spirit19 = Logic.can_enter_adult_spirit && Logic.spirit_keys ==5 && Logic.mirror_shield;
	Location_Logic.spirit20 = Logic.can_enter_adult_spirit && Logic.spirit_keys ==5 && Logic.mirror_shield && Logic.bomb_bag && Logic.spirit_boss_key && Logic.hookshot;
	Location_Logic.shadow1 = Logic.can_enter_shadow;
	Location_Logic.shadow2 = Logic.can_enter_shadow;
	Location_Logic.shadow3 = Logic.can_cross_shadow_gap;
	Location_Logic.shadow4 = Logic.can_cross_shadow_gap;
	Location_Logic.shadow5 = Logic.can_bomb_shadow_wall;
	Location_Logic.shadow6 = Logic.can_bomb_shadow_wall;
	Location_Logic.shadow7 = Logic.can_bomb_shadow_wall;
	Location_Logic.shadow8 = Logic.can_bomb_shadow_wall && Logic.goron_bracelet;
	Location_Logic.shadow9 = Logic.can_bomb_shadow_wall && Logic.goron_bracelet;
	Location_Logic.shadow10 = Logic.can_bomb_shadow_wall && Logic.shadow_keys >=2;
	Location_Logic.shadow11 = Logic.can_bomb_shadow_wall && Logic.hookshot && Logic.shadow_keys >=2;
	Location_Logic.shadow12 = Logic.can_pass_shadow_hookshot_door && Logic.shadow_keys >=3;
	Location_Logic.shadow13 = Logic.can_pass_shadow_hookshot_door && Logic.shadow_keys >=3;
	Location_Logic.shadow14 = Logic.can_pass_shadow_hookshot_door && Logic.shadow_keys >=3;
	Location_Logic.shadow15 = Logic.can_ride_shadow_boat && Logic.shadow_keys >=4;
	Location_Logic.shadow16 = Logic.can_ride_shadow_boat && Logic.shadow_keys >=4;
	Location_Logic.shadow17 = Logic.can_ride_shadow_boat && Logic.shadow_keys >=4;
	Location_Logic.shadow18 = Logic.can_beat_shadow_boss && Logic.shadow_keys >=5;
	Location_Logic.ganons1 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons2 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons3 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons4 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons5 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons6 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons7 = Logic.can_enter_ganons && Logic.golden_gauntlets ;//&& Logic.can_see;
	Location_Logic.ganons8 = Logic.can_enter_ganons && Logic.golden_gauntlets && Logic.lullaby && Logic.ganons_keys >= 1;
	Location_Logic.ganons9 = Logic.can_enter_ganons;
	Location_Logic.ganons10 = Logic.can_enter_ganons && Logic.bomb_bag;//&& Logic.can_see;
	Location_Logic.ganons11 = Logic.can_enter_ganons;
	Location_Logic.ganons12 = Logic.can_enter_ganons;
	Location_Logic.ganons13 = Logic.can_enter_ganons;
	Location_Logic.ganons14 = Logic.can_enter_ganons;
	Location_Logic.ganons15 = Logic.can_enter_ganons && (Logic.longshot || ((Logic.fire_arrows && Logic.magic) || (Logic.hover_boots && Logic.can_use_dins)));
	Location_Logic.ganons16 = Logic.can_enter_ganons;
	Location_Logic.gtg1 = Logic.can_save_carpenters && Logic.bow;
	Location_Logic.gtg2 = Logic.can_save_carpenters && Logic.bow;
	Location_Logic.gtg3 = Logic.can_save_carpenters;
	Location_Logic.gtg4 = Logic.can_save_carpenters && Logic.hookshot;
	Location_Logic.gtg5 = Logic.can_save_carpenters && Logic.hookshot && Logic.silver_gauntlets ;//&& Logic.can_see ;
	Location_Logic.gtg6 = Logic.can_save_carpenters && Logic.hookshot && Logic.silver_gauntlets ;//&& Logic.can_see ;
	Location_Logic.gtg7 = Logic.can_save_carpenters && Logic.hookshot && Logic.silver_gauntlets ;//&& Logic.can_see ;
	Location_Logic.gtg8 = Logic.can_save_carpenters && Logic.hookshot && Logic.silver_gauntlets ;//&& Logic.can_see ;
	Location_Logic.gtg9 = Logic.can_save_carpenters && Logic.hookshot && Logic.bow;  //((Logic.bomb_bag || Logic.gtg_keys == 9) && Logic.hammer));
	Location_Logic.gtg10 = Logic.can_save_carpenters && Logic.hookshot && Logic.bow ;//&& Logic.can_see;
	Location_Logic.gtg12 = Logic.can_save_carpenters && Logic.hookshot/*&& Logic.can_see*/;
	Location_Logic.gtg11 = Logic.can_save_carpenters && Logic.hookshot && Logic.hammer;// && (Logic.can_see || (Logic.bomb_bag || Logic.gtg_keys == 9)) ;
	Location_Logic.gtg13 = Logic.can_save_carpenters && (Logic.gtg_keys == 9 || (Logic.bomb_bag && Logic.song_of_time) || (Logic.hookshot /*&& Logic.can_see*/ && Logic.song_of_time));
	Location_Logic.gtg14 = Logic.can_save_carpenters && (Logic.gtg_keys == 9 || (Logic.bomb_bag && Logic.song_of_time) || (Logic.hookshot /*&& Logic.can_see*/ && Logic.song_of_time));
	Location_Logic.gtg15 = Logic.can_save_carpenters && (Logic.gtg_keys == 9 || (Logic.bomb_bag && Logic.song_of_time) || (Logic.hookshot /*&& Logic.can_see*/ && Logic.song_of_time));
	Location_Logic.gtg16 = Logic.can_save_carpenters && Logic.bomb_bag;
	Location_Logic.gtg17 = Logic.can_save_carpenters && Logic.gtg_keys >= 3 ;//&& Logic.can_see;
	Location_Logic.gtg18 = Logic.can_save_carpenters && Logic.gtg_keys >= 4;
	Location_Logic.gtg19 = Logic.can_save_carpenters && Logic.gtg_keys >= 6;
	Location_Logic.gtg20 = Logic.can_save_carpenters && Logic.gtg_keys >= 7;
	Location_Logic.gtg21 = Logic.can_save_carpenters && Logic.gtg_keys >= 9;
	Location_Logic.gtg22 = Logic.can_save_carpenters && Logic.iron_boots && Logic.song_of_time && Logic.hookshot /*&& Logic.can_see*/;
	Location_Logic.well1 = Logic.song_of_storms ;//&& Logic.can_see;
	Location_Logic.well5 = Logic.song_of_storms ;//&& Logic.can_see;
	Location_Logic.well2 = Logic.song_of_storms && Logic.bomb_bag;
	Location_Logic.well3 = Logic.song_of_storms && Logic.lullaby;
	Location_Logic.well4 = Logic.song_of_storms;
	Location_Logic.well6 = Logic.song_of_storms ;//&& Logic.can_see;
	Location_Logic.well11 = Logic.song_of_storms ;//&& Logic.can_see;
	Location_Logic.well7 = Logic.song_of_storms && Logic.bomb_bag;
	Location_Logic.well10 = Logic.song_of_storms && Logic.lullaby;
	Location_Logic.well8 = Logic.song_of_storms && Logic.lullaby ;//&& Logic.kokiri_sword;
	Location_Logic.well9 = Logic.song_of_storms && Logic.lullaby ;//&& Logic.can_see ;
	Location_Logic.well12 = Logic.song_of_storms && Logic.well_keys == 3 ;//&& Logic.can_see ;
	Location_Logic.well13 = Logic.song_of_storms && Logic.well_keys == 3 ;//&& Logic.can_see ;
	Location_Logic.well14 = Logic.song_of_storms && (Logic.bomb_bag || (((/*Logic.can_see &&*/ Logic.well_keys == 3) || Logic.can_use_dins) && Logic.goron_bracelet));
	Location_Logic.zeldasSpot = true;
	Location_Logic.eponasSpot = true;
	Location_Logic.sariasSpot = true;
	Location_Logic.stormsSpot = true;
	Location_Logic.sunsSpot = Logic.lullaby;
	Location_Logic.boleroSpot = Logic.can_enter_fire_temple;
	Location_Logic.minuetSpot = Logic.minuet || Logic.sarias;
	Location_Logic.requiemSpot = Logic.can_enter_colossus;
	Location_Logic.serenadeSpot = Logic.ice_access;
	Location_Logic.preludeSpot = Logic.forest_medallion;
	Location_Logic.nocturneSpot = Logic.forest_medallion && Logic.fire_medallion && Logic.water_medallion;
	Location_Logic.oot = Logic.kokiri_emerald && Logic.goron_ruby && Logic.zora_sapphire;
	Location_Logic.scrub_dc1 = Logic.can_enter_dodongos;
	Location_Logic.scrub_dc2 = Logic.can_enter_dodongos;
	Location_Logic.scrub_dc3 = Logic.bomb_bag;
	Location_Logic.scrub_dc4 = Logic.bomb_bag;
	Location_Logic.scrub_jabu = Logic.can_enter_jabu;
	Location_Logic.scrub_ganons1 = Logic.can_enter_ganons;
	Location_Logic.scrub_ganons2 = Logic.can_enter_ganons;
	Location_Logic.scrub_ganons3 = Logic.can_enter_ganons;
	Location_Logic.scrub_ganons4 = Logic.can_enter_ganons;
	Location_Logic.scrub_river1 = Logic.song_of_storms;
	Location_Logic.scrub_river2 = Logic.song_of_storms;
	Location_Logic.scrub_sfm1 = Logic.song_of_storms;
	Location_Logic.scrub_sfm2 = Logic.song_of_storms;
	Location_Logic.scrub_lake1 = true;
	Location_Logic.scrub_lake2 = true;
	Location_Logic.scrub_lake3 = true;
	Location_Logic.scrub_lw1 = true;
	Location_Logic.scrub_lw2 = true;
	Location_Logic.scrub_lw3 = Logic.can_blast_or_smash;
	Location_Logic.scrub_colossus1 = Logic.silver_gauntlets;
	Location_Logic.scrub_colossus2 = Logic.silver_gauntlets;
	Location_Logic.scrub_crater1 = Logic.hammer;
	Location_Logic.scrub_crater2 = Logic.hammer;
	Location_Logic.scrub_crater3 = Logic.hammer;
	Location_Logic.scrub_goron1 = Logic.song_of_time || (Logic.can_wear_goron_tunic && Logic.hookshot);
	Location_Logic.scrub_goron2 = Logic.song_of_time || (Logic.can_wear_goron_tunic && Logic.hookshot);
	Location_Logic.scrub_goron3 = Logic.song_of_time || (Logic.can_wear_goron_tunic && Logic.hookshot);
	Location_Logic.scrub_ranch1 = Logic.bomb_bag;
	Location_Logic.scrub_ranch2 = Logic.bomb_bag;
	Location_Logic.scrub_ranch3 = Logic.bomb_bag;
	Location_Logic.scrub_gv1 = Logic.fortress_access && Logic.song_of_storms;
	Location_Logic.scrub_gv2 = Logic.fortress_access && Logic.song_of_storms;

	Location_Logic.gs_kokiri_child = true;
	Location_Logic.gs_kokiri_bean = Logic.bottle;
	Location_Logic.gs_kokiri_adult = Logic.hookshot;
	Location_Logic.gs_market = true;
	Location_Logic.gs_lost_woods_bean1 = Logic.bottle;
	Location_Logic.gs_lost_woods_bean2 = Logic.bottle;
	Location_Logic.gs_lost_woods_above_stage = (Logic.bomb_bag || Logic.silver_scale) && (Logic.sarias || Logic.minuet);
	Location_Logic.gs_sacred_forest = Logic.hookshot && (Logic.sarias || Logic.minuet);
	Location_Logic.gs_outside_kakariko = (Logic.boomerang && Logic.bomb_bag) || (Logic.can_blast_or_smash && Logic.hookshot)
	Location_Logic.gs_near_gerudo = (Logic.hammer && Logic.can_use_fire && Logic.hookshot) || (Logic.can_use_dins && Logic.bomb_bag && Logic.boomerang);
	Location_Logic.gs_hyrule_castle_tree = true;
	Location_Logic.gs_hyrule_castle_grotto = Logic.song_of_storms && Logic.bomb_bag && Logic.boomerang;
	Location_Logic.gs_lon_lon_tree = true;
	Location_Logic.gs_lon_lon_shed = true;
	Location_Logic.gs_lon_lon_window = Logic.boomerang;
	Location_Logic.gs_lon_lon_back_wall = Logic.boomerang;
	Location_Logic.gs_kakariko_construction = true;
	Location_Logic.gs_kakariko_skulltula_house = true;
	Location_Logic.gs_kakariko_guard_house = true;
	Location_Logic.gs_kakariko_tree = true;
	Location_Logic.gs_kakariko_tower = Logic.bomb_bag || Logic.slingshot;
	Location_Logic.gs_kakariko_impas = Logic.hookshot;
	Location_Logic.gs_graveyard_wall = Logic.boomerang;
	Location_Logic.gs_graveyard_bean = Logic.bottle;
	Location_Logic.gs_trail_bean = Logic.bottle && (Logic.bomb_bag || Logic.goron_bracelet);
	Location_Logic.gs_trail_bombable_wall = Logic.can_blast_or_smash;
	Location_Logic.gs_trail_hail_path = Logic.hammer;
	Location_Logic.gs_trail_above_dodongos = Logic.hammer;
	Location_Logic.gs_goron_city_center = true;
	Location_Logic.gs_goron_city_maze = Logic.bomb_bag;
	Location_Logic.gs_crater_crate = Logic.can_blast_or_smash;
	Location_Logic.gs_crater_bean = Logic.bottle && Logic.bolero;
	Location_Logic.gs_river_ladder = Logic.silver_scale || Logic.bomb_bag;
	Location_Logic.gs_river_near_grotto = Logic.hookshot;
	Location_Logic.gs_river_above_bridge = Logic.hookshot;
	Location_Logic.gs_zora_river_tree = true;
	Location_Logic.gs_domain = Logic.lullaby && (Logic.hookshot || Logic.magic || Logic.bow);
	Location_Logic.gs_fountain_above_log = Logic.rutos_letter && (Logic.silver_scale || (Logic.bomb_bag && Logic.lullaby)) && Logic.boomerang;
	Location_Logic.gs_fountain_tree = Logic.rutos_letter && (Logic.silver_scale || (Logic.bomb_bag && Logic.lullaby))
	Location_Logic.gs_fountain_hidden_cave = Logic.ice_access && Logic.silver_gauntlets && Logic.hookshot && Logic.can_blast_or_smash;
	Location_Logic.gs_hylia_bean = Logic.bottle;
	Location_Logic.gs_hylia_lab_wall = Logic.boomerang;
	Location_Logic.gs_hylia_island = true;
	Location_Logic.gs_hylia_tree = Logic.longshot;
	Location_Logic.gs_lab_crate = Logic.iron_boots && Logic.hookshot;
	Location_Logic.gs_valley_small_bridge = Logic.boomerang;
	Location_Logic.gs_valley_bean = Logic.bottle;
	Location_Logic.gs_valley_tent = Logic.fortress_access && Logic.hookshot;
	Location_Logic.gs_valley_pillar = Logic.fortress_access && Logic.hookshot;
	Location_Logic.gs_fortress_archery = Logic.fortress_access && Logic.hookshot;
	Location_Logic.gs_fortress_top = Logic.fortress_access;
	Location_Logic.gs_wasteland_structure = Logic.hookshot && Logic.can_cross_quicksand;
	Location_Logic.gs_colossus_bean = Logic.bottle && Logic.requiem;
	Location_Logic.gs_colossus_tree = Logic.hookshot && Logic.can_enter_colossus;
	Location_Logic.gs_colossus_hill = (Logic.requiem && (Logic.bomb_bag || Logic.silver_scale)) || (Logic.longshot && Logic.can_enter_colossus);
	Location_Logic.gs_ganons = true;
	Location_Logic.gs_deku_basement_back = Logic.boomerang && Logic.bomb_bag && Logic.slingshot;
	Location_Logic.gs_deku_basement_gate = true;
	Location_Logic.gs_deku_basement_vines = Logic.slingshot || Logic.boomerang || Logic.bomb_bag || Logic.can_use_dins;
	Location_Logic.gs_deku_compass = true;
	Location_Logic.gs_dodongos_east_side = Logic.can_enter_dodongos;
	Location_Logic.gs_dodongos_stair_room = Logic.dodongos_climb;
	Location_Logic.gs_dodongos_above_stairs = (Logic.dodongos_climb && Logic.hookshot) || (Logic.boomerang && (Logic.bomb_bag || Logic.goron_bracelet));
	Location_Logic.gs_dodongos_scarecrow = Logic.can_enter_dodongos && Logic.hookshot;
	Location_Logic.gs_dodongos_before_king = Logic.bomb_bag;
	Location_Logic.gs_jabu_vines = Logic.can_enter_jabu;
	Location_Logic.gs_jabu_near_octo1 = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.gs_jabu_near_octo2 = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.gs_jabu_near_boss = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.gs_forest_first = (Logic.minuet || Logic.sarias) && Logic.hookshot;
	Location_Logic.gs_forest_lobby = (Logic.minuet || Logic.sarias) && Logic.hookshot;
	Location_Logic.gs_forest_outdoor_east = (Logic.minuet || Logic.sarias) && Logic.hookshot && ((Logic.bow || Logic.song_of_time) || (Logic.forest_keys >= 1 && Logic.hover_boots));
	Location_Logic.gs_forest_outdoor_west = (Logic.minuet || Logic.sarias) && Logic.hookshot && (((Logic.bow || Logic.song_of_time) && Logic.longshot) || (Logic.forest_keys >= 1 && Logic.hover_boots) || (Logic.forest_keys >= 2 && Logic.goron_bracelet && Logic.bow))
	Location_Logic.gs_forest_basement = (Logic.minuet || Logic.sarias) && Logic.bow && Logic.goron_bracelet && Logic.forest_keys == 5;
	Location_Logic.gs_fire_song_of_time = Logic.can_enter_fire_temple && Logic.fire_keys >= 1 && Logic.song_of_time;
	Location_Logic.gs_fire_bomb_wall = Logic.can_climb_fire_temple && Logic.goron_bracelet && Logic.bomb_bag;
	Location_Logic.gs_fire_scarecrow1 = Logic.can_climb_fire_temple && Logic.goron_bracelet && Logic.fire_keys >=5 && Logic.hookshot;
	Location_Logic.gs_fire_scarecrow2 = Logic.can_climb_fire_temple && Logic.goron_bracelet && Logic.fire_keys >=5 && Logic.hookshot;
	Location_Logic.gs_fire_basement = Logic.can_enter_fire_temple && Logic.hammer;
	Location_Logic.gs_water_south_basement = Logic.can_enter_water && Logic.bomb_bag && Logic.lullaby;
	Location_Logic.gs_water_river = Logic.can_enter_water && Logic.song_of_time && Logic.water_keys >= 5;
	Location_Logic.gs_water_central = Logic.middle_water && (Logic.longshot || Logic.can_use_farores);
	Location_Logic.gs_water_near_boss_key = Logic.can_enter_water && Logic.longshot && Logic.lullaby && Logic.water_keys >=4;
	Location_Logic.gs_water_platform_room = Logic.can_enter_water && Logic.longshot && Logic.lullaby && Logic.water_keys >=4;
	Location_Logic.gs_spirit_metal_fence = Logic.requiem && (Logic.boomerang || Logic.slingshot);
	Location_Logic.gs_spirit_before_child_knuckle = (Logic.bomb_bag && Logic.boomerang && Logic.hookshot && Logic.spirit_keys >= 1) || (Logic.boomerang && Logic.spirit_keys == 5 && Logic.bomb_bag && Logic.requiem) || (Logic.hookshot && Logic.silver_gauntlets && Logic.spirit_keys >= 3);
	Location_Logic.gs_spirit_boulder_room = Logic.can_enter_adult_spirit && Logic.song_of_time && (Logic.bow || Logic.hookshot || Logic.bomb_bag);
	Location_Logic.gs_spirit_temple_lobby = Logic.can_enter_adult_spirit && Logic.spirit_keys >= 3 && (Logic.hookshot || Logic.hover_boots);
	Location_Logic.gs_spirit_bomb_for_light_room = Logic.spirit_keys >= 1;
	Location_Logic.gs_shadow_like_like = Logic.can_bomb_shadow_wall;
	Location_Logic.gs_shadow_crusher = Logic.can_bomb_shadow_wall && Logic.hookshot;
	Location_Logic.gs_shadow_giant_pot = Logic.can_bomb_shadow_wall && Logic.shadow_keys >=2 && Logic.hookshot;
	Location_Logic.gs_shadow_near_boat = Logic.can_pass_shadow_hookshot_door && Logic.longshot && Logic.shadow_keys >=4;
	Location_Logic.gs_shadow_three_pots = Logic.can_ride_shadow_boat;
	Location_Logic.gs_well_west_inner = Logic.boomerang /*&& Logic.can_see*/ && Logic.well_keys >=3;
	Location_Logic.gs_well_east_inner = Logic.boomerang /*&& Logic.can_see*/ && Logic.well_keys >=3;
	Location_Logic.gs_well_like_like = Logic.boomerang /*&& Logic.can_see*/ && Logic.well_keys >=3;
	Location_Logic.gs_ice_spinning_scythe = Logic.ice_access && Logic.hookshot;
	Location_Logic.gs_ice_hp_room = Logic.ice_access && Logic.hookshot;
	Location_Logic.gs_ice_block_room = Logic.ice_access && Logic.hookshot;

	Location_Access.kokiri_sword = true;
	Location_Access.mido_1 = true;
	Location_Access.mido_2 = true;
	Location_Access.mido_3 = true;
	Location_Access.mido_4 = true;
	Location_Access.talons_chickens = true;
	Location_Access.back_of_ranch = true;
	Location_Access.hyrule_forest_boulder = Game.can_blast_or_smash;
	Location_Access.hyrule_open_grotto = true;
	Location_Access.hyrule_hp_scrub = Game.can_blast_or_smash;;
	Location_Access.hyrule_boulder_of_destiny = Game.can_blast_or_smash;;
	Location_Access.hyrule_tektite_grotto = Game.can_blast_or_smash;
	Location_Access.gerudovalley_box = true;
	Location_Access.gerudovalley_waterfall = true;
	Location_Access.hylia_child_fishing = true;
	Location_Access.hylia_bottle = true;
	Location_Access.hylia_adult_fishing = Game.hookshot || Game.child_can_enter_river;
	Location_Access.hylia_lab_top = Game.hookshot || Game.child_can_enter_river;
	Location_Access.hylia_lab_dive = Game.scale2 || (Game.hookshot && Game.iron_boots);
	Location_Access.hylia_sun_shoot = Game.bow1;
	Location_Access.market_slingshot_game = true;
	Location_Access.richard = true;
	Location_Access.market_bowling_1 = Game.bomb_bag1;
	Location_Access.market_bowling_2 = Game.bomb_bag1;
	Location_Access.market_lens_game = true;
	Location_Access.poes= (Game.bow1 && Game.eponas && (Game.bottle1 || Game.can_enter_jabu)) || Game.big_poe;
	Location_Access.dins_fairy = (Game.bomb_bag1 || Game.has_chus) && Game.lullaby;
	Location_Access.g_fairy = Game.strength3 && Game.lullaby;
	Location_Access.lacs = false;
	Location_Access.river_pillar = true;
	Location_Access.river_grotto = true;
	Location_Access.river_ledge = true;
	Location_Access.frogs_1 = Game.child_can_enter_river && Game.song_of_storms;
	Location_Access.frogs_2 = Game.child_can_enter_river && (Game.song_of_storms && Game.lullaby && Game.eponas && Game.sarias && Game.suns_song && Game.song_of_time);
	Location_Access.zora_diving = Game.child_can_enter_river;
	Location_Access.zora_torches = Game.child_can_enter_river;
	Location_Access.ocarina_game = true;
	Location_Access.lost_woods_grotto = Game.can_blast_or_smash;
	Location_Access.lost_woods_scrub_grotto = Game.can_blast_or_smash;
	Location_Access.wolfos_grotto = Game.can_blast_or_smash;
	Location_Access.bridge_scrub = true;
	Location_Access.skull_kid = Game.sarias;
	Location_Access.target = Game.slingshot1;
	Location_Access.theater = true;
	Location_Access.kokiri_song_of_storms = Game.song_of_storms;
	Location_Access.rolling_goron = Game.bomb_bag1 || Game.has_chus || Game.goron_bracelet;
	Location_Access.goron_pot = (Game.bomb_bag1 || Game.goron_bracelet) && (Game.lullaby || Game.can_use_dins);
	Location_Access.goron_dance = Game.lullaby && Game.sarias;
	Location_Access.goron_maze_1 = Game.can_blast_or_smash || Game.silver_gauntlets;
	Location_Access.goron_maze_2 = Game.can_blast_or_smash || Game.silver_gauntlets;
	Location_Access.goron_maze_3 = Game.hammer || Game.silver_gauntlets || ((Game.bomb_bag1 || Game.has_chus) && Game.hover_boots);
	Location_Access.goron_link = Game.can_stop_link_the_goron;
	Location_Access.trail_bombable = Game.can_blast_or_smash;
	Location_Access.trail_dodongos_top = true;
	Location_Access.trail_song_of_storms = Game.song_of_storms;
	Location_Access.crater_bean = Game.bolero || Game.crater_top;
	Location_Access.crater_hammer_fairy = Game.crater_by_city && Game.hammer && Game.lullaby;
	Location_Access.crater_nook_hp = Game.crater_top || Game.bolero;
	Location_Access.crater_grotto = Game.can_blast_or_smash;
	Location_Access.crater_peak_fairy = Game.can_blast_or_smash && Game.lullaby;
	Location_Access.trade_quest = (((Game.ice_access || (Game.giants_wallet && Game.lullaby && (Game.bottle1 || Game.can_enter_jabu))) && Game.prescription) || Game.claim_check) && Game.crater_top;
	Location_Access.gerudo_hammer = Game.fortress_access && Game.hammer;
	Location_Access.gerudo_roof = Game.fortress_access && (Game.hookshot || Game.hover_boots);
	Location_Access.gerudo_archery_1 = Game.eponas && Game.bow1;
	Location_Access.gerudo_archery_2 = Game.eponas && Game.bow1;
	Location_Access.wasteland = (Game.can_cross_quicksand || Game.requiem) && Game.can_use_fire;
	Location_Access.colossus_fairy = Game.can_enter_colossus && (Game.bomb_bag1 || Game.has_chus) && Game.lullaby;
	Location_Access.colossus_bean = Game.can_enter_colossus;
	Location_Access.man_on_roof = true;//Game.hookshot;
	Location_Access.kakariko_grotto = true;
	Location_Access.windmill = true;//Game.boomerang || Game.song_of_time;
	Location_Access.anju = true;
	Location_Access.cow_house = true;
	Location_Access.redead_grotto = Game.can_blast_or_smash;
	Location_Access.archery_game = Game.bow1;
	Location_Access.anjus_chickens = true;
	Location_Access.tokens_10 = false;
	Location_Access.tokens_20 = false;
	Location_Access.tokens_30 = false;
	Location_Access.tokens_40 = false;
	Location_Access.tokens_50 = false;
	Location_Access.gravedigging_tour = true;
	Location_Access.graveyard_box = true;//Game.child_can_enter_river || Game.longshot || Game.boomerang;
	Location_Access.shield_grave = true;
	Location_Access.suns_grave = Game.suns_song;
	Location_Access.fire_grave = Game.lullaby;
	Location_Access.race_1 = true;
	Location_Access.race_2 = true;
	Location_Access.deku_lobby = true;
	Location_Access.deku_slingshot = true;
	Location_Access.deku_slingshot_room_side = true;
	Location_Access.deku_compass = true;
	Location_Access.deku_compass_room_side = true;
	Location_Access.deku_basement = true;
	Location_Access.deku_queen_gohma = true;
	Location_Access.dodongos_map = Game.can_enter_dodongos;
	Location_Access.dodongos_compass = Game.can_enter_dodongos;
	Location_Access.dodongos_bomb_flower_platform = Game.dodongos_climb;
	Location_Access.dodongos_bomb_bag = Game.dodongos_climb;
	Location_Access.dodongos_end_of_bridge = (Game.dodongos_climb && Game.can_blast_or_smash)
	Location_Access.dodongos_above_king = Game.dodongos_climb && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.dodongos_king_dodongo = Game.dodongos_climb && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.jabu_boomerang = Game.can_enter_jabu && (Game.boomerang || Game.bomb_bag1 || Game.slingshot1 || Game.has_chus);
	Location_Access.jabu_map = Game.can_enter_jabu && Game.boomerang;
	Location_Access.jabu_compass = Game.can_enter_jabu && Game.boomerang;
	Location_Access.jabu_barinade = Game.can_enter_jabu && Game.boomerang;
	Location_Access.fountain_fairy = Game.ice_access && (Game.bomb_bag1|| Game.has_chus);
	Location_Access.ice_glacier_hp = Game.ice_access;
	Location_Access.ice_map = Game.ice_access;
	Location_Access.ice_hp = Game.ice_access;
	Location_Access.ice_compass = Game.ice_access;
	Location_Access.ice_irons = Game.ice_access;
	Location_Access.ice_bottom_of_fountain = Game.ice_access;
	Location_Access.thaw_king = Game.ice_access || (document.getElementById("bottleimg").style.opacity == 1 && Game.giants_wallet && Game.lullaby);
	Location_Access.forest1 = Game.hookshot;
	Location_Access.forest2 = Game.hookshot;
	Location_Access.forest3 = Game.hookshot && (Game.song_of_time || Game.bow1 || ((Game.hover_boots || Game.goron_bracelet) && Game.current_forest_keys>=1));
	Location_Access.forest4 = Game.hookshot && (Game.song_of_time || ((Game.hover_boots || Game.goron_bracelet) && Game.current_forest_keys>=1) || (Game.bow1/* && (Game.iron_boots || Game.scale2 || Game.longshot)*/));
	Location_Access.forest5 = Game.hookshot && (Game.song_of_time || ((Game.hover_boots || Game.goron_bracelet) && Game.current_forest_keys>=1) || (Game.bow1/* && (Game.iron_boots || Game.scale2 || Game.longshot)*/));
	Location_Access.forest6 = Game.hookshot && Game.current_forest_keys >= 1 && Game.bow1 && Game.goron_bracelet;
	Location_Access.forest7 = Game.hookshot && Game.current_forest_keys >= 2 && Game.bow1 && Game.goron_bracelet;
	Location_Access.forest8 = Game.hookshot && ((Game.bow1 && Game.goron_bracelet && Game.current_forest_keys >=2) || ((Game.hover_boots || Game.goron_bracelet) && Game.current_forest_keys >=1));
	Location_Access.forest9 = Game.hookshot && Game.goron_bracelet && Game.bow1 && Game.current_forest_keys>=3;
	Location_Access.forest10 = Game.hookshot && Game.goron_bracelet && Game.current_forest_keys>=3;
	Location_Access.forest11 = Game.hookshot && Game.goron_bracelet && Game.bow1 && Game.current_forest_keys>=3;
	Location_Access.forest12 = Game.hookshot && Game.goron_bracelet && (Game.bow1 || Game.can_use_dins) && Game.current_forest_keys>=5;
	Location_Access.forest13 = Game.hookshot && Game.goron_bracelet && Game.bow1 && Game.current_forest_keys>=5;
	Location_Access.forest14 = Game.hookshot && Game.goron_bracelet && Game.bow1 && Game.current_forest_keys>=5 && Game.forest_boss_key;
	Location_Access.fire1 = Game.can_enter_fire_temple;
	Location_Access.fire2 = Game.can_enter_fire_temple && Game.hammer;
	Location_Access.fire3 = Game.can_enter_fire_temple && Game.hammer;
	Location_Access.fire4 = Game.can_enter_fire_temple && Game.current_fire_keys >=1;
	Location_Access.fire5 = Game.can_enter_fire_temple && Game.current_fire_keys >=1 && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.fire6 = Game.can_enter_fire_temple && Game.fire_boss_key && Game.hammer;
	Location_Access.fire7 = Game.can_climb_fire_temple;
	Location_Access.fire8 = Game.can_climb_fire_temple;
	Location_Access.fire9 = Game.can_climb_fire_temple && ((Game.current_fire_keys >= 4 && Game.bow1) || Game.current_fire_keys>=5);
	Location_Access.fire10 = Game.can_climb_fire_temple && Game.current_fire_keys>=5;
	Location_Access.fire11 = Game.can_climb_fire_temple && Game.current_fire_keys>=5 && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.fire12 = Game.can_climb_fire_temple && Game.current_fire_keys>=5 && Game.hookshot;
	Location_Access.fire13 = Game.can_climb_fire_temple && Game.current_fire_keys>=6;
	Location_Access.fire14 = Game.can_climb_fire_temple && (Game.current_fire_keys>=7 || (Game.current_fire_keys>=6)) && Game.hammer && (Game.song_of_time || Game.bomb_bag1 || Game.has_chus);
	Location_Access.fire15 = Game.can_climb_fire_temple && (Game.current_fire_keys>=7 || (Game.current_fire_keys >= 6)) && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.water1 = Game.can_enter_water;
	Location_Access.water2 = Game.can_enter_water;
	Location_Access.water3 = Game.can_enter_water && Game.lullaby && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.water4 = Game.can_enter_water && Game.lullaby && (Game.bow1 || Game.can_use_dins);
	Location_Access.water5 = Game.can_enter_water && Game.lullaby && Game.bow1 && Game.goron_bracelet;
	Location_Access.water6 = Game.middle_water;
	Location_Access.water7 = Game.current_water_keys >= 2 && Game.lullaby;
	Location_Access.water8 = Game.current_water_keys >= 2 && Game.lullaby && Game.song_of_time && Game.bow1;
	Location_Access.water9 = Game.can_enter_water && Game.lullaby && ((Game.current_water_keys >= 2 && Game.song_of_time && Game.bow1) || Game.goron_bracelet);
	Location_Access.water10 = Game.can_enter_water && Game.lullaby && Game.longshot && Game.current_water_keys >= 2;
	Location_Access.water11 = Game.can_enter_water && Game.water_boss_key && Game.longshot ;
	Location_Access.spirit1 = Game.requiem && (Game.slingshot1 || Game.boomerang || Game.has_chus);
	Location_Access.spirit2 = Game.requiem && (Game.slingshot1 || Game.boomerang || Game.has_chus);
	Location_Access.spirit3 = Game.current_spirit_keys >= 1 && ((Game.projectile_child && Game.requiem) || (Game.projectile_adult && Game.silver_gauntlets));
	Location_Access.spirit4 = Game.current_spirit_keys >= 1 && ((Game.projectile_child && Game.requiem) || (Game.projectile_adult && Game.silver_gauntlets));
	Location_Access.spirit5 = Game.current_spirit_keys >= 1 && ((Game.requiem && (Game.bomb_bag1 || Game.has_chus)) || (((Game.can_use_fire || Game.bow) && Game.silver_gauntlets)));
	Location_Access.spirit6 = Game.current_spirit_keys >= 1 && ((Game.requiem && (Game.bomb_bag1 || Game.has_chus)) || (((Game.can_use_fire || Game.bow) && Game.silver_gauntlets)));
	Location_Access.spirit7 = Game.current_spirit_keys >= 2;
	Location_Access.spirit8 = Game.can_enter_adult_spirit && Game.hookshot && Game.lullaby;
	Location_Access.spirit9 = Game.can_enter_adult_spirit && (Game.bow1 || Game.hookshot || (Game.bomb_bag1 || Game.has_chus));
	Location_Access.spirit10 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=1;
	Location_Access.spirit11 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=1;
	Location_Access.spirit12 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=1 && Game.lullaby;
	Location_Access.spirit13 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=1 && Game.lullaby && (Game.hookshot || Game.hover_boots);
	Location_Access.spirit14 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=2 && (Game.bomb_bag1 || Game.has_chus) && Game.mirror_shield;
	Location_Access.spirit15 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=2 && (Game.bomb_bag1 || Game.has_chus) ;//&& Game.can_see;
	Location_Access.spirit16 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=2 && (Game.bomb_bag1 || Game.has_chus) ;//&& Game.can_see;
	Location_Access.spirit17 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=2 && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.spirit18 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=3 && Game.bow1 && Game.lullaby && Game.hookshot;
	Location_Access.spirit19 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=3 && Game.mirror_shield;
	Location_Access.spirit20 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=3 && Game.mirror_shield && (Game.bomb_bag1 || Game.has_chus) && Game.spirit_boss_key && Game.hookshot;
	Location_Access.shadow1 = Game.can_enter_shadow;
	Location_Access.shadow2 = Game.can_enter_shadow;
	Location_Access.shadow3 = Game.can_cross_shadow_gap;
	Location_Access.shadow4 = Game.can_cross_shadow_gap;
	Location_Access.shadow5 = Game.can_bomb_shadow_wall;
	Location_Access.shadow6 = Game.can_bomb_shadow_wall;
	Location_Access.shadow7 = Game.can_bomb_shadow_wall;
	Location_Access.shadow8 = Game.can_bomb_shadow_wall;
	Location_Access.shadow9 = Game.can_bomb_shadow_wall;
	Location_Access.shadow10 = Game.can_bomb_shadow_wall && Game.current_shadow_keys >=2;
	Location_Access.shadow11 = Game.can_bomb_shadow_wall && Game.hookshot && Game.current_shadow_keys >=2;
	Location_Access.shadow12 = Game.can_pass_shadow_hookshot_door && Game.current_shadow_keys >=3;
	Location_Access.shadow13 = Game.can_pass_shadow_hookshot_door && Game.current_shadow_keys >=3;
	Location_Access.shadow14 = Game.can_pass_shadow_hookshot_door && Game.current_shadow_keys >=3;
	Location_Access.shadow15 = Game.can_ride_shadow_boat && Game.can_use_dins && Game.current_shadow_keys >=4;
	Location_Access.shadow16 = Game.can_ride_shadow_boat && Game.can_use_dins && Game.current_shadow_keys >=4;
	Location_Access.shadow17 = Game.can_ride_shadow_boat && Game.current_shadow_keys >=4;
	Location_Access.shadow18 = Game.can_beat_shadow_boss && Game.current_shadow_keys >=5;
	Location_Access.ganons1 = Game.can_enter_ganons && Game.strength3;
	Location_Access.ganons2 = Game.can_enter_ganons && Game.strength3;
	Location_Access.ganons3 = Game.can_enter_ganons && Game.strength3;
	Location_Access.ganons4 = Game.can_enter_ganons && Game.strength3;
	Location_Access.ganons5 = Game.can_enter_ganons && Game.strength3;
	Location_Access.ganons6 = Game.can_enter_ganons && Game.strength3;
	Location_Access.ganons7 = Game.can_enter_ganons && Game.strength3 ;//&& Game.can_see;
	Location_Access.ganons8 = Game.can_enter_ganons && Game.golden_gauntlets && Game.lullaby && Game.current_ganons_keys >= 1;
	Location_Access.ganons9 = Game.can_enter_ganons;
	Location_Access.ganons10 = Game.can_enter_ganons && (Game.bomb_bag1 || Game.has_chus);//&& Game.can_see;
	Location_Access.ganons11 = Game.can_enter_ganons;
	Location_Access.ganons12 = Game.can_enter_ganons;
	Location_Access.ganons13 = Game.can_enter_ganons;
	Location_Access.ganons14 = Game.can_enter_ganons;
	Location_Access.ganons15 = Game.can_enter_ganons && (Game.longshot || ((Game.fire_arrows && Game.magic) || (Game.hover_boots && Game.can_use_dins)));
	Location_Access.ganons16 = Game.can_enter_ganons;
	Location_Access.gtg1 = Game.can_save_carpenters && Game.bow1;
	Location_Access.gtg2 = Game.can_save_carpenters && Game.bow1;
	Location_Access.gtg3 = Game.can_save_carpenters;
	Location_Access.gtg4 = Game.can_save_carpenters;
	Location_Access.gtg5 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.silver_gauntlets ;//&& Game.can_see ;
	Location_Access.gtg6 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.silver_gauntlets ;//&& Game.can_see ;
	Location_Access.gtg7 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.silver_gauntlets ;//&& Game.can_see ;
	Location_Access.gtg8 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.silver_gauntlets ;//&& Game.can_see ;
	Location_Access.gtg9 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.bow1;  //((Game.bomb_bag1 || Game.current_gtg_keys == 9) && Game.hammer));
	Location_Access.gtg10 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.bow1;//&& Game.can_see;
	Location_Access.gtg11 = Game.can_save_carpenters && Game.can_climb_gtg_hole;// && (Game.can_see || (Game.bomb_bag1 || Game.current_gtg_keys == 9)) ;
	Location_Access.gtg12 = Game.can_save_carpenters && Game.can_climb_gtg_hole/*&& Game.can_see*/;
	Location_Access.gtg13 = Game.can_save_carpenters && (Game.current_gtg_keys >= 2 || ((Game.bomb_bag1 || Game.has_chus) && Game.song_of_time) || (Game.can_climb_gtg_hole /*&& Game.can_see*/ && Game.song_of_time));
	Location_Access.gtg14 = Game.can_save_carpenters && (Game.current_gtg_keys >= 2 || ((Game.bomb_bag1 || Game.has_chus) && Game.song_of_time) || (Game.can_climb_gtg_hole /*&& Game.can_see*/ && Game.song_of_time));
	Location_Access.gtg15 = Game.can_save_carpenters && (Game.current_gtg_keys >= 2 || ((Game.bomb_bag1 || Game.has_chus) && Game.song_of_time) || (Game.can_climb_gtg_hole /*&& Game.can_see*/ && Game.song_of_time));
	Location_Access.gtg16 = Game.can_save_carpenters && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.gtg17 = Game.can_save_carpenters && Game.current_gtg_keys >= 1 ;//&& Game.can_see;
	Location_Access.gtg18 = Game.can_save_carpenters && Game.current_gtg_keys >= 2;
	Location_Access.gtg19 = Game.can_save_carpenters && Game.current_gtg_keys >= 4;
	Location_Access.gtg20 = Game.can_save_carpenters && Game.current_gtg_keys >= 5;
	Location_Access.gtg21 = Game.can_save_carpenters && Game.current_gtg_keys >= 7;
	Location_Access.gtg22 = Game.can_save_carpenters && Game.iron_boots && Game.song_of_time && Game.hookshot /*&& Game.can_see*/;
	Location_Access.well1 = Game.song_of_storms ;//&& Game.can_see;
	Location_Access.well2 = Game.song_of_storms && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.well3 = Game.song_of_storms && Game.lullaby;
	Location_Access.well4 = Game.song_of_storms;
	Location_Access.well5 = Game.song_of_storms ;//&& Game.can_see;
	Location_Access.well6 = Game.song_of_storms ;//&& Game.can_see;
	Location_Access.well7 = Game.song_of_storms && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.well8 = Game.song_of_storms && Game.lullaby ;//&& Game.kokiri_sword;
	Location_Access.well9 = Game.song_of_storms && Game.lullaby ;//&& Game.can_see ;
	Location_Access.well10 = Game.song_of_storms && Game.lullaby;
	Location_Access.well11 = Game.song_of_storms ;//&& Game.can_see;
	Location_Access.well12 = Game.song_of_storms && Game.current_well_keys >= 1;//&& Game.can_see ;
	Location_Access.well13 = Game.song_of_storms && Game.current_well_keys >= 1;//&& Game.can_see ;
	Location_Access.well14 = Game.song_of_storms && ((Game.bomb_bag1 || Game.has_chus) || (((/*Game.can_see &&*/ Game.current_well_keys >= 1) || Game.can_use_dins) && Game.goron_bracelet));
	Location_Access.zeldasSpot = true;
	Location_Access.eponasSpot = true;
	Location_Access.sariasSpot = true;
	Location_Access.stormsSpot = true;
	Location_Access.sunsSpot = Game.lullaby;
	Location_Access.boleroSpot = Game.can_enter_fire_temple;
	Location_Access.minuetSpot = true;
	Location_Access.requiemSpot = Game.can_enter_colossus;
	Location_Access.serenadeSpot = Game.ice_access;
	Location_Access.preludeSpot = Game.forest_medallion;
	Location_Access.nocturneSpot = Game.forest_medallion && Game.fire_medallion && Game.water_medallion;
	Location_Access.oot = Game.kokiri_emerald && Game.goron_ruby && Game.zora_sapphire;
}