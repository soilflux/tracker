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
	if(Logic.forest_medallion_location == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.dodongos_king_dodongo;}
	if(Logic.forest_medallion_location == "jabu") {if (Check.jabu_barinade != "unknown") {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.jabu_barinade;}
	if(Logic.forest_medallion_location == "forest") {if (Check.forest14 != "unknown") {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.forest14;}
	if(Logic.forest_medallion_location == "fire") {if (Check.fire6 != "unknown") {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.fire6;}
	if(Logic.forest_medallion_location == "water") {if (Check.water11 != "unknown") {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.water11;}
	if(Logic.forest_medallion_location == "spirit") {if (Check.spirit20 != "unknown") {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.spirit20;}
	if(Logic.forest_medallion_location == "shadow") {if (Check.shadow18 != "unknown") {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.shadow18;}
	if(Logic.forest_medallion_location == "pocket") {Game.forest_medallion = true; Logic.forest_medallion = true;}
	
	if(Logic.fire_medallion_location == "deku") {if (Check.deku_queen_gohma != "unknown") {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.deku_queen_gohma;}
	if(Logic.fire_medallion_location == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.dodongos_king_dodongo;}
	if(Logic.fire_medallion_location == "jabu") {if (Check.jabu_barinade != "unknown") {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.jabu_barinade;}
	if(Logic.fire_medallion_location == "forest") {if (Check.forest14 != "unknown") {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.forest14;}
	if(Logic.fire_medallion_location == "fire") {if (Check.fire6 != "unknown") {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.fire6;}
	if(Logic.fire_medallion_location == "water") {if (Check.water11 != "unknown") {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.water11;}
	if(Logic.fire_medallion_location == "spirit") {if (Check.spirit20 != "unknown") {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.spirit20;}
	if(Logic.fire_medallion_location == "shadow") {if (Check.shadow18 != "unknown") {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.shadow18;}
	if(Logic.fire_medallion_location == "pocket") {Game.fire_medallion = true; Logic.fire_medallion = true;}
	
	if(Logic.water_medallion_location == "deku") {if (Check.deku_queen_gohma != "unknown") {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.deku_queen_gohma;}
	if(Logic.water_medallion_location == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.dodongos_king_dodongo;}
	if(Logic.water_medallion_location == "jabu") {if (Check.jabu_barinade != "unknown") {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.jabu_barinade;}
	if(Logic.water_medallion_location == "forest") {if (Check.forest14 != "unknown") {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.forest14;}
	if(Logic.water_medallion_location == "fire") {if (Check.fire6 != "unknown") {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.fire6;}
	if(Logic.water_medallion_location == "water") {if (Check.water11 != "unknown") {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.water11;}
	if(Logic.water_medallion_location == "spirit") {if (Check.spirit20 != "unknown") {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.spirit20;}
	if(Logic.water_medallion_location == "shadow") {if (Check.shadow18 != "unknown") {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.shadow18;}
	if(Logic.water_medallion_location == "pocket") {Game.water_medallion = true; Logic.water_medallion = true;}

	Logic.shadow_medallion = false;
	Logic.spirit_medallion = false;
	for (var i = 1; i <=3; i++) {
		str = "generic" + i;
		str2 = "gen" + i;
		if(Logic[str] == "deku") {if (Check.deku_queen_gohma != "unknown") {Game[str2] = true;} Logic[str2] = Location_Logic.deku_queen_gohma; if(document.getElementById("text_deku").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.deku_queen_gohma;} if(document.getElementById("text_deku").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.deku_queen_gohma;}}
		if(Logic[str] == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Game[str2] = true;} Logic[str2] = Location_Logic.dodongos_king_dodongo; if(document.getElementById("text_dodongos").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.dodongos_king_dodongo;} if(document.getElementById("text_dodongos").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.dodongos_king_dodongo;}}
		if(Logic[str] == "jabu") {if (Check.jabu_barinade != "unknown") {Game[str2] = true;} Logic[str2] = Location_Logic.jabu_barinade; if(document.getElementById("text_jabu").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.jabu_barinade;} if(document.getElementById("text_jabu").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.jabu_barinade;}}
		if(Logic[str] == "forest") {if (Check.forest14 != "unknown") {Game[str2] = true;} Logic[str2] = Location_Logic.forest14; if(document.getElementById("text_forest").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.forest14;} if(document.getElementById("text_forest").style.color=="rgb(255, 165, 0)") {Location_Logic.forest14;}}
		if(Logic[str] == "fire") {if (Check.fire6 != "unknown") {Game[str2] = true;} Logic[str2] = Location_Logic.fire6; if(document.getElementById("text_fire").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.fire6;} if(document.getElementById("text_fire").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.fire6;}}
		if(Logic[str] == "water") {if (Check.water11 != "unknown") {Game[str2] = true;} Logic[str2] = Location_Logic.water11; if(document.getElementById("text_water").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.water11;} if(document.getElementById("text_water").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.water11;}}
		if(Logic[str] == "spirit") {if (Check.spirit20 != "unknown") {Game[str2] = true;} Logic[str2] = Location_Logic.spirit20; if(document.getElementById("text_spirit").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.spirit20;} if(document.getElementById("text_spirit").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.spirit20;}}
		if(Logic[str] == "shadow") {if (Check.shadow18 != "unknown") {Game[str2] = true;} Logic[str2] = Location_Logic.shadow18; if(document.getElementById("text_shadow").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.shadow18;} if(document.getElementById("text_shadow").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.shadow18;}}
		if(Logic[str] == "pocket") {Game[str2] = true; Logic[str2] = true; if(document.getElementById("text_pocket").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = true;} if(document.getElementById("text_pocket").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = true;}}
	}
	
	if(Logic.emerald == "deku") {Logic.kokiri_emerald = Location_Logic.deku_queen_gohma;}
	if(Logic.emerald == "dodongos") {Logic.kokiri_emerald = Location_Logic.dodongos_king_dodongo;}
	if(Logic.emerald == "jabu") {Logic.kokiri_emerald = Location_Logic.jabu_barinade;}
	if(Logic.emerald == "forest") {Logic.kokiri_emerald = Location_Logic.forest14;}
	if(Logic.emerald == "fire") {Logic.kokiri_emerald = Location_Logic.fire6;}
	if(Logic.emerald == "water") {Logic.kokiri_emerald = Location_Logic.water11;}
	if(Logic.emerald == "spirit") {Logic.kokiri_emerald = Location_Logic.spirit20;}
	if(Logic.emerald == "shadow") {Logic.kokiri_emerald = Location_Logic.shadow18;}
	if(Logic.emerald == "pocket") {Logic.kokiri_emerald = true;}
	
	if(Logic.ruby == "deku") {Logic.goron_ruby = Location_Logic.deku_queen_gohma;}
	if(Logic.ruby == "dodongos") {Logic.goron_ruby = Location_Logic.dodongos_king_dodongo;}
	if(Logic.ruby == "jabu") {Logic.goron_ruby = Location_Logic.jabu_barinade;}
	if(Logic.ruby == "forest") {Logic.goron_ruby = Location_Logic.forest14;}
	if(Logic.ruby == "fire") {Logic.goron_ruby = Location_Logic.fire6;}
	if(Logic.ruby == "water") {Logic.goron_ruby = Location_Logic.water11;}
	if(Logic.ruby == "spirit") {Logic.goron_ruby = Location_Logic.spirit20;}
	if(Logic.ruby == "shadow") {Logic.goron_ruby = Location_Logic.shadow18;}
	if(Logic.ruby == "pocket") {Logic.goron_ruby = true;}
	
	if(Logic.sapphire == "deku") {Logic.zora_sapphire = Location_Logic.deku_queen_gohma;}
	if(Logic.sapphire == "dodongos") {Logic.zora_sapphire = Location_Logic.dodongos_king_dodongo;}
	if(Logic.sapphire == "jabu") {Logic.zora_sapphire = Location_Logic.jabu_barinade;}
	if(Logic.sapphire == "forest") {Logic.zora_sapphire = Location_Logic.forest14;}
	if(Logic.sapphire == "fire") {Logic.zora_sapphire = Location_Logic.fire6;}
	if(Logic.sapphire == "water") {Logic.zora_sapphire = Location_Logic.water11;}
	if(Logic.sapphire == "spirit") {Logic.zora_sapphire = Location_Logic.spirit20;}
	if(Logic.sapphire == "shadow") {Logic.zora_sapphire = Location_Logic.shadow18;}
	if(Logic.sapphire == "pocket") {Logic.zora_sapphire = true;}
	
	
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