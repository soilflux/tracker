function checksPutInLogicByItem(item) {
	for (var i = 0; i < Locations.length; i++) {Location_PutIn_Logic[Locations[i]] = false;}
	
	var temp = 20;
	var tempArray = [];
	
	while (temp > 0) {
    temp -= 1;
	
	if(Known.farores_wind == true) {PutIn_Logic.farores_wind = Location_PutIn_Logic[Location.farores_wind];} if (item == "farores_wind") {PutIn_Logic.farores_wind = false;}
	 
	if(Known.slingshot1 == true) {PutIn_Logic.slingshot1 = Location_PutIn_Logic[Location.slingshot1];} if (item == "slingshot1") {PutIn_Logic.slingshot1 = false;}
	if(Known.slingshot2 == true) {PutIn_Logic.slingshot2 = Location_PutIn_Logic[Location.slingshot2];} if (item == "slingshot2") {PutIn_Logic.slingshot2 = false;}
	if(Known.slingshot3 == true) {PutIn_Logic.slingshot3 = Location_PutIn_Logic[Location.slingshot3];} if (item == "slingshot3") {PutIn_Logic.slingshot3 = false;}
	PutIn_Logic.slingshot = PutIn_Logic.slingshot1 || PutIn_Logic.slingshot2 || PutIn_Logic.slingshot3; 
	 
	if(Known.boomerang == true) {PutIn_Logic.boomerang = Location_PutIn_Logic[Location.boomerang];} if (item == "boomerang") {PutIn_Logic.boomerang = false;}
	
	if(Known.rutos_letter == true) {PutIn_Logic.rutos_letter = Location_PutIn_Logic[Location.rutos_letter];} if (item == "rutos_letter") {PutIn_Logic.rutos_letter = false;}
	if(Known.bottle1 == true) {PutIn_Logic.bottle1 = Location_PutIn_Logic[Location.bottle1];} if (item == "bottle1") {PutIn_Logic.bottle1 = false;}
	if(Known.bottle2 == true) {PutIn_Logic.bottle2 = Location_PutIn_Logic[Location.bottle2];} if (item == "bottle2") {PutIn_Logic.bottle2 = false;}
	if(Known.bottle3 == true) {PutIn_Logic.bottle3 = Location_PutIn_Logic[Location.bottle3];} if (item == "bottle3") {PutIn_Logic.bottle3 = false;}
	PutIn_Logic.bottle = (PutIn_Logic.rutos_letter && ((PutIn_Logic.bomb_bag && PutIn_Logic.lullaby) || PutIn_Logic.silver_scale)) || PutIn_Logic.bottle1 || PutIn_Logic.bottle2 || PutIn_Logic.bottle3;
	
	if(Known.scale1 == true) {PutIn_Logic.scale1 = Location_PutIn_Logic[Location.scale1]; } if (item == "scale1") {PutIn_Logic.scale1 = false;}
	if(Known.scale2 == true) {PutIn_Logic.scale2 = Location_PutIn_Logic[Location.scale2]; } if (item == "scale2") {PutIn_Logic.scale2 = false;}
	if(Game.scale2 == true) {document.getElementById("silverscaleimg").src = Game.golden_scale_img;}
	PutIn_Logic.silver_scale = PutIn_Logic.scale1 || PutIn_Logic.scale2; 
	PutIn_Logic.golden_scale = PutIn_Logic.scale1 && PutIn_Logic.scale2; 
	
	if(Known.bomb_bag1 == true) {PutIn_Logic.bomb_bag1 = Location_PutIn_Logic[Location.bomb_bag1];} if (item == "bomb_bag1") {PutIn_Logic.bomb_bag1 = false;}
	if(Known.bomb_bag2 == true) {PutIn_Logic.bomb_bag2 = Location_PutIn_Logic[Location.bomb_bag2];} if (item == "bomb_bag2") {PutIn_Logic.bomb_bag2 = false;}
	if(Known.bomb_bag3 == true) {PutIn_Logic.bomb_bag3 = Location_PutIn_Logic[Location.bomb_bag3];} if (item == "bomb_bag3") {PutIn_Logic.bomb_bag3 = false;}
	PutIn_Logic.bomb_bag = PutIn_Logic.bomb_bag1 || PutIn_Logic.bomb_bag2 || PutIn_Logic.bomb_bag3;
	
	if(Known.hammer == true) {PutIn_Logic.hammer = Location_PutIn_Logic[Location.hammer];} if (item == "hammer") {PutIn_Logic.hammer = false;}
	 
	if(Known.bow1 == true) {PutIn_Logic.bow1 = Location_PutIn_Logic[Location.bow1];} if (item == "bow1") {PutIn_Logic.bow1 = false;}
	if(Known.bow2 == true) {PutIn_Logic.bow2 = Location_PutIn_Logic[Location.bow2];} if (item == "bow2") {PutIn_Logic.bow2 = false;}
	if(Known.bow3 == true) {PutIn_Logic.bow3 = Location_PutIn_Logic[Location.bow3];} if (item == "bow3") {PutIn_Logic.bow3 = false;}
	PutIn_Logic.bow = PutIn_Logic.bow1 || PutIn_Logic.bow2 || PutIn_Logic.bow3;
	
	if(Known.hookshot1 == true) {PutIn_Logic.hookshot1 = Location_PutIn_Logic[Location.hookshot1];} if (item == "hookshot1") {PutIn_Logic.hookshot1 = false;}
	if(Known.hookshot2 == true) {PutIn_Logic.hookshot2 = Location_PutIn_Logic[Location.hookshot2];} if (item == "hookshot2") {PutIn_Logic.hookshot2 = false;}
	PutIn_Logic.hookshot = PutIn_Logic.hookshot1 || PutIn_Logic.hookshot2;
	PutIn_Logic.longshot = PutIn_Logic.hookshot1 && PutIn_Logic.hookshot2;
	
	if(Known.strength1 == true) {PutIn_Logic.strength1 = Location_PutIn_Logic[Location.strength1];} if (item == "strength1") {PutIn_Logic.strength1 = false;}
	if(Known.strength2 == true) {PutIn_Logic.strength2 = Location_PutIn_Logic[Location.strength2];} if (item == "strength2") {PutIn_Logic.strength2 = false;}
	if(Known.strength3 == true) {PutIn_Logic.strength3 = Location_PutIn_Logic[Location.strength3];} if (item == "strength3") {PutIn_Logic.strength3 = false;}
	PutIn_Logic.goron_bracelet = PutIn_Logic.strength1 || PutIn_Logic.strength2 || PutIn_Logic.strength3;
	PutIn_Logic.silver_gauntlets = (PutIn_Logic.strength1 && PutIn_Logic.strength2) || (PutIn_Logic.strength1 && PutIn_Logic.strength3) || (PutIn_Logic.strength2 && PutIn_Logic.strength3);
	PutIn_Logic.golden_gauntlets = PutIn_Logic.strength1 && PutIn_Logic.strength2 && PutIn_Logic.strength3;
	
	if(Known.mirror_shield == true) {PutIn_Logic.mirror_shield = Location_PutIn_Logic[Location.mirror_shield];} if (item == "mirror_shield") {PutIn_Logic.mirror_shield = false;}
	
	if(Known.big_poe == true) {PutIn_Logic.big_poe = Location_PutIn_Logic[Location.big1];} if (item == "big1") {PutIn_Logic.big1 = false;}
	
	if(Known.iron_boots == true) {PutIn_Logic.iron_boots = Location_PutIn_Logic[Location.iron_boots];} if (item == "iron_boots") {PutIn_Logic.iron_boots = false;}
	if(Known.hover_boots == true) {PutIn_Logic.hover_boots = Location_PutIn_Logic[Location.hover_boots];} if (item == "hover_boots") {PutIn_Logic.hover_boots = false;}
	
	if(Known.magic1 == true) {PutIn_Logic.magic1 = Location_PutIn_Logic[Location.magic1];} if (item == "magic1") {PutIn_Logic.magic1 = false;}
	if(Known.magic2 == true) {PutIn_Logic.magic2 = Location_PutIn_Logic[Location.magic2];} if (item == "magic2") {PutIn_Logic.magic2 = false;}
	PutIn_Logic.magic = PutIn_Logic.magic1 || PutIn_Logic.magic2; 
	
	if(Known.dins_fire == true) {PutIn_Logic.dins_fire = Location_PutIn_Logic[Location.dins_fire];} if (item == "dins_fire") {PutIn_Logic.dins_fire = false;}
	if(Known.fire_arrows == true) {PutIn_Logic.fire_arrows = Location_PutIn_Logic[Location.fire_arrows];} if (item == "fire_arrows") {PutIn_Logic.fire_arrows = false;}
	
	if(Known.wallet1 == true) {PutIn_Logic.wallet1 = Location_PutIn_Logic[Location.wallet1];} if (item == "wallet1") {PutIn_Logic.wallet1 = false;}
	if(Known.wallet2 == true) {PutIn_Logic.wallet2 = Location_PutIn_Logic[Location.wallet2];} if (item == "wallet2") {PutIn_Logic.wallet2 = false;}
	PutIn_Logic.adults_wallet = PutIn_Logic.wallet1 || PutIn_Logic.wallet2; 
	PutIn_Logic.giants_wallet = PutIn_Logic.wallet1 && PutIn_Logic.wallet2; 
	
	if(Known.goron_tunic == true) {PutIn_Logic.goron_tunic = Location_PutIn_Logic[Location.goron_tunic];} if (item == "goron_tunic") {PutIn_Logic.goron_tunic = false;}
	if(Known.zora_tunic == true) {PutIn_Logic.zora_tunic = Location_PutIn_Logic[Location.zora_tunic];} if (item == "zora_tunic") {PutIn_Logic.zora_tunic = false;}
	if(Known.lens_of_truth == true) {PutIn_Logic.lens_of_truth = Location_PutIn_Logic[Location.lens_of_truth];}  if (item == "lens_of_truth") {PutIn_Logic.lens_of_truth = false;}
	if(Known.prescription == true) {PutIn_Logic.prescription = Location_PutIn_Logic[Location.prescription];} if (item == "prescription") {PutIn_Logic.prescription = false;}
	if(Known.claim_check == true) {PutIn_Logic.claim_check = Location_PutIn_Logic[Location.claim_check];} if (item == "claim_check") {PutIn_Logic.claim_check = false;}
	
	if(Known.light_arrows == true) {PutIn_Logic.light_arrows = Location_PutIn_Logic[Location.light_arrows];} if (item == "light_arrows") {PutIn_Logic.light_arrows = false;}
	
	if(Known.lullaby == true) {PutIn_Logic.lullaby = Location_PutIn_Logic[Location.lullaby]; } if (item == "lullaby") {PutIn_Logic.lullaby = false;}
	if(Known.eponas == true) {PutIn_Logic.eponas = Location_PutIn_Logic[Location.eponas]; } if (item == "eponas") {PutIn_Logic.eponas = false;}
	if(Known.sarias == true) {PutIn_Logic.sarias = Location_PutIn_Logic[Location.sarias]; } if (item == "sarias") {PutIn_Logic.sarias = false;}
	if(Known.suns == true) {PutIn_Logic.suns = Location_PutIn_Logic[Location.suns]; } if (item == "suns") {PutIn_Logic.suns = false;}
	if(Known.time == true) {PutIn_Logic.time = Location_PutIn_Logic[Location.time]; } if (item == "time") {PutIn_Logic.time = false;}
	if(Known.storms == true) {PutIn_Logic.storms = Location_PutIn_Logic[Location.storms]; } if (item == "storms") {PutIn_Logic.storms = false;}
	if(Known.minuet == true) {PutIn_Logic.minuet = Location_PutIn_Logic[Location.minuet]; } if (item == "minuet") {PutIn_Logic.minuet = false;}
	if(Known.bolero == true) {PutIn_Logic.bolero = Location_PutIn_Logic[Location.bolero]; } if (item == "bolero") {PutIn_Logic.bolero = false;}
	if(Known.serenade == true) {PutIn_Logic.serenade = Location_PutIn_Logic[Location.serenade]; } if (item == "serenade") {PutIn_Logic.serenade = false;}
	if(Known.requiem == true) {PutIn_Logic.requiem = Location_PutIn_Logic[Location.requiem]; } if (item == "requiem") {PutIn_Logic.requiem = false;}
	if(Known.nocturne == true) {PutIn_Logic.nocturne = Location_PutIn_Logic[Location.nocturne]; } if (item == "nocturne") {PutIn_Logic.nocturne = false;}
	if(Known.prelude == true) {PutIn_Logic.prelude = Location_PutIn_Logic[Location.prelude]; } if (item == "prelude") {PutIn_Logic.prelude = false;}  
	
	PutIn_Logic.can_enter_jabu = PutIn_Logic.rutos_letter && ((PutIn_Logic.lullaby && PutIn_Logic.bomb_bag) || PutIn_Logic.silver_scale) && (PutIn_Logic.boomerang || PutIn_Logic.bomb_bag || PutIn_Logic.slingshot);
	PutIn_Logic.child_can_enter_river = PutIn_Logic.bomb_bag || PutIn_Logic.silver_scale;
	PutIn_Logic.fortress_access = PutIn_Logic.eponas || PutIn_Logic.longshot;
	PutIn_Logic.can_save_carpenters = PutIn_Logic.fortress_access && ((PutIn_Logic.bow || PutIn_Logic.hookshot || PutIn_Logic.hover_boots) || true) /*fast carpenter fix**/;
	PutIn_Logic.can_cross_quicksand = PutIn_Logic.fortress_access && (PutIn_Logic.longshot || PutIn_Logic.hover_boots);
	PutIn_Logic.can_enter_colossus = (PutIn_Logic.can_cross_quicksand && (PutIn_Logic.brackets || PutIn_Logic.can_see)) || PutIn_Logic.requiem;
	PutIn_Logic.can_use_fire = (PutIn_Logic.dins_fire || (PutIn_Logic.bow && PutIn_Logic.fire_arrows)) && PutIn_Logic.magic;
	PutIn_Logic.can_use_dins = PutIn_Logic.dins_fire && PutIn_Logic.magic;
	PutIn_Logic.can_use_farores = PutIn_Logic.farores_wind && PutIn_Logic.magic;
	PutIn_Logic.can_see = PutIn_Logic.lens_of_truth && PutIn_Logic.magic;
	PutIn_Logic.can_blast_or_smash = PutIn_Logic.bomb_bag || PutIn_Logic.hammer;
	PutIn_Logic.can_enter_dodongos = PutIn_Logic.can_blast_or_smash || PutIn_Logic.goron_bracelet;
	PutIn_Logic.dodongos_climb = PutIn_Logic.can_enter_dodongos && (PutIn_Logic.bomb_bag || PutIn_Logic.goron_bracelet || PutIn_Logic.can_use_dins);
	PutIn_Logic.can_enter_shadow = PutIn_Logic.nocturne && PutIn_Logic.can_use_dins && (PutIn_Logic.hover_boots || PutIn_Logic.hookshot) ;//&& PutIn_Logic.can_see;
	PutIn_Logic.can_cross_shadow_gap= PutIn_Logic.can_enter_shadow && PutIn_Logic.hover_boots;
	PutIn_Logic.can_bomb_shadow_wall = PutIn_Logic.can_cross_shadow_gap && PutIn_Logic.bomb_bag;
	PutIn_Logic.can_pass_shadow_hookshot_door = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.hookshot;
	PutIn_Logic.can_ride_shadow_boat = PutIn_Logic.can_pass_shadow_hookshot_door && PutIn_Logic.lullaby;
	PutIn_Logic.can_beat_shadow_boss = PutIn_Logic.can_ride_shadow_boat && (PutIn_Logic.bow || PutIn_Logic.longshot);
	PutIn_Logic.can_stop_link_the_goron = PutIn_Logic.bomb_bag || PutIn_Logic.bow || PutIn_Logic.goron_bracelet;
	PutIn_Logic.ice_access = PutIn_Logic.rutos_letter && PutIn_Logic.lullaby && PutIn_Logic.child_can_enter_river;
	PutIn_Logic.reverse_crater = (PutIn_Logic.hover_boots || PutIn_Logic.hookshot || PutIn_Logic.child_can_enter_river) && PutIn_Logic.bolero;
	PutIn_Logic.can_enter_fire_temple = (PutIn_Logic.crater_by_city && (PutIn_Logic.hookshot || PutIn_Logic.hover_boots)) || PutIn_Logic.bolero
	PutIn_Logic.crater_by_city = PutIn_Logic.bow || PutIn_Logic.bomb_bag || PutIn_Logic.goron_bracelet || PutIn_Logic.reverse_crater ||(PutIn_Logic.hammer && PutIn_Logic.hover_boots) || (PutIn_Logic.longshot && PutIn_Logic.goron_tunic && PutIn_Logic.hammer);
	PutIn_Logic.crater_top = PutIn_Logic.crater_by_city || PutIn_Logic.hammer;
	PutIn_Logic.can_enter_adult_spirit = PutIn_Logic.can_enter_colossus && PutIn_Logic.silver_gauntlets;
	PutIn_Logic.can_enter_ganons = PutIn_Logic.forest_medallion && PutIn_Logic.fire_medallion && PutIn_Logic.water_medallion && PutIn_Logic.gen1 && PutIn_Logic.gen2 && PutIn_Logic.gen3;
	PutIn_Logic.can_climb_fire_temple = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.fire_keys >=3 && PutIn_Logic.can_wear_goron_tunic && PutIn_Logic.goron_bracelet && (PutIn_Logic.bow || PutIn_Logic.hookshot || PutIn_Logic.bomb_bag);
	PutIn_Logic.can_enter_water = PutIn_Logic.hookshot && PutIn_Logic.iron_boots;
	PutIn_Logic.middle_water = PutIn_Logic.can_enter_water && PutIn_Logic.lullaby && (PutIn_Logic.bow || PutIn_Logic.can_use_dins);
	PutIn_Logic.projectile_both = PutIn_Logic.bomb_bag || ((PutIn_Logic.slingshot || PutIn_Logic.boomerang) && (PutIn_Logic.bow || PutIn_Logic.hookshot));
	PutIn_Logic.projectile_child = PutIn_Logic.bomb_bag || PutIn_Logic.slingshot || PutIn_Logic.boomerang;
	PutIn_Logic.projectile_adult = PutIn_Logic.bomb_bag || PutIn_Logic.bow || PutIn_Logic.hookshot;
	PutIn_Logic.can_wear_goron_tunic = PutIn_Logic.goron_tunic || (PutIn_Logic.adults_wallet && (PutIn_Logic.bomb_bag || PutIn_Logic.goron_bracelet || PutIn_Logic.bow));
	PutIn_Logic.can_wear_zora_tunic = PutIn_Logic.zora_tunic || (PutIn_Logic.giants_wallet && (PutIn_Logic.lullaby && PutIn_Logic.bottle));
	
	for (h= 1; h <= 3; h++) {
		PutIn_Logic.current_forest_keys = PutIn_Logic.forced_forest_keys;
		for (i = AreaIndexes[26]; i < AreaIndexes[27]; i++) {
			if ((Check[str] == "small_key") && Location_PutIn_Logic[Locations[i]]) {PutIn_Logic.current_forest_keys +=1;}
		}
		PutIn_Logic.min_forest_keys = 0;
		if (PutIn_Logic.current_forest_keys < 5) {
			var for_keys = [["forest1","forest2","forest3","forest4","forest5"], ["forest6","forest8"], ["forest7"], ["forest9","forest10","forest11"]]
			var done = false;
			for (i = 0; i < for_keys.length; i++) {
				for (j = 0; j < for_keys[i].length; j++) {
					str = for_keys[i][j];
					if (!(Location_PutIn_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
						PutIn_Logic.min_forest_keys = i;
						done = true;
						break;
					}
				}
				if (done) {break;}
			}
			if (!done) {PutIn_Logic.min_forest_keys = 5;}
		}
		PutIn_Logic.forest_keys = Math.max(PutIn_Logic.min_forest_keys,PutIn_Logic.current_forest_keys);
		Location_PutIn_Logic.forest1 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot;
		Location_PutIn_Logic.forest2 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot;
		Location_PutIn_Logic.forest3 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && (PutIn_Logic.time || PutIn_Logic.bow || (PutIn_Logic.hover_boots && PutIn_Logic.forest_keys>=1));
		Location_PutIn_Logic.forest4 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && (PutIn_Logic.time || (PutIn_Logic.hover_boots && PutIn_Logic.forest_keys>=1) || (PutIn_Logic.bow/* && (PutIn_Logic.iron_boots || PutIn_Logic.golden_scale || PutIn_Logic.longshot)*/));
		Location_PutIn_Logic.forest5 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && (PutIn_Logic.time || (PutIn_Logic.hover_boots && PutIn_Logic.forest_keys>=1) || (PutIn_Logic.bow/* && (PutIn_Logic.iron_boots || PutIn_Logic.golden_scale || PutIn_Logic.longshot)*/));
		Location_PutIn_Logic.forest6 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.forest_keys >= 1 && PutIn_Logic.bow && PutIn_Logic.goron_bracelet;
		Location_PutIn_Logic.forest7 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.forest_keys >= 2 && PutIn_Logic.bow && PutIn_Logic.goron_bracelet;
		Location_PutIn_Logic.forest8 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && ((PutIn_Logic.bow && PutIn_Logic.goron_bracelet && PutIn_Logic.forest_keys >=2) || (PutIn_Logic.hover_boots && PutIn_Logic.forest_keys >=1));
		Location_PutIn_Logic.forest9 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && PutIn_Logic.bow && PutIn_Logic.forest_keys>=3;
		Location_PutIn_Logic.forest10 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && PutIn_Logic.forest_keys>=3;
		Location_PutIn_Logic.forest11 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && PutIn_Logic.bow && PutIn_Logic.forest_keys>=3;
		Location_PutIn_Logic.forest12 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && (PutIn_Logic.bow || PutIn_Logic.can_use_dins) && PutIn_Logic.forest_keys>=5;
		Location_PutIn_Logic.forest13 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && PutIn_Logic.bow && PutIn_Logic.forest_keys>=5;
		Location_PutIn_Logic.forest14 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && PutIn_Logic.bow && PutIn_Logic.forest_keys>=5 && PutIn_Logic.forest_boss_key;
		Location_PutIn_Logic.gs_forest_first = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot;
		Location_PutIn_Logic.gs_forest_lobby = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot;
		Location_PutIn_Logic.gs_forest_outdoor_east = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && ((PutIn_Logic.bow || PutIn_Logic.time) || (PutIn_Logic.forest_keys >= 1 && PutIn_Logic.hover_boots));
		Location_PutIn_Logic.gs_forest_outdoor_west = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && (((PutIn_Logic.bow || PutIn_Logic.time) && PutIn_Logic.longshot) || (PutIn_Logic.forest_keys >= 1 && PutIn_Logic.hover_boots) || (PutIn_Logic.forest_keys >= 2 && PutIn_Logic.goron_bracelet && PutIn_Logic.bow))
		Location_PutIn_Logic.gs_forest_basement = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.bow && PutIn_Logic.goron_bracelet && PutIn_Logic.forest_keys >= 5;
	}
	for (h= 1; h <= 3; h++) {
		PutIn_Logic.current_fire_keys = PutIn_Logic.forced_fire_keys;
		for (i = AreaIndexes[27]; i < AreaIndexes[28]; i++) {
			if ((Check[Locations[i]] == "small_key") && Location_PutIn_Logic[Locations[i]]) {PutIn_Logic.current_fire_keys +=1;}
		}
		PutIn_Logic.min_fire_keys = 0;
		if (PutIn_Logic.current_fire_keys < 8 && ((PutIn_Logic.can_wear_goron_tunic && PutIn_Logic.hammer && PutIn_Logic.hover_boots) || (Check["fire6"] != "small_key" && Check["fire6"] != "unknown"))) {
			var fir_keys = [["fire1","fire2","fire3"], ["fire4","fire5"],[], ["fire7","fire8"],["fire9"], ["fire10","fire11","fire12"], ["fire13","fire14","fire15"]]
			var done = false;
			for (i = 0; i < fir_keys.length; i++) {
				for (j = 0; j < fir_keys[i].length; j++) {
					str = fir_keys[i][j];
					if (!(Location_PutIn_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" || Check[str] == "unknown" || (Check[str] == "boss_key" && (Check["fire6"] == "small_key" || Check["fire6"] == "unknown")))) {
						PutIn_Logic.min_fire_keys = i;
						done = true;
						break;
					}
				}
				if (done) {break;}
			}
			if (!done) {PutIn_Logic.min_fire_keys = 8;}
		}
		PutIn_Logic.fire_keys = Math.max(PutIn_Logic.min_fire_keys,PutIn_Logic.current_fire_keys);
		Location_PutIn_Logic.fire1 = PutIn_Logic.can_enter_fire_temple;
		Location_PutIn_Logic.fire2 = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.hammer;
		Location_PutIn_Logic.fire3 = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.hammer;
		Location_PutIn_Logic.fire4 = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.fire_keys >=1;
		Location_PutIn_Logic.fire5 = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.fire_keys >=1 && PutIn_Logic.bomb_bag;
		Location_PutIn_Logic.fire6 = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.fire_boss_key && PutIn_Logic.hammer && PutIn_Logic.can_wear_goron_tunic && (PutIn_Logic.hover_boots || (PutIn_Logic.fire_keys >=7 && (PutIn_Logic.time || PutIn_Logic.bomb_bag)));
		Location_PutIn_Logic.fire7 = PutIn_Logic.can_climb_fire_temple;
		Location_PutIn_Logic.fire8 = PutIn_Logic.can_climb_fire_temple;
		Location_PutIn_Logic.fire9 = PutIn_Logic.can_climb_fire_temple && ((PutIn_Logic.fire_keys >= 4 && PutIn_Logic.bow) || PutIn_Logic.fire_keys>=5);
		Location_PutIn_Logic.fire10 = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.fire_keys>=5;
		Location_PutIn_Logic.fire11 = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.fire_keys>=5 && PutIn_Logic.bomb_bag;
		Location_PutIn_Logic.fire12 = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.fire_keys>=5 && PutIn_Logic.hookshot;
		Location_PutIn_Logic.fire13 = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.fire_keys>=6;
		Location_PutIn_Logic.fire14 = PutIn_Logic.can_climb_fire_temple && (PutIn_Logic.fire_keys>=7 || (PutIn_Logic.fire_keys>=6 && PutIn_Logic.hover_boots)) && PutIn_Logic.hammer && (PutIn_Logic.time || PutIn_Logic.bomb_bag);
		Location_PutIn_Logic.fire15 = PutIn_Logic.can_climb_fire_temple && (PutIn_Logic.fire_keys>=7 || (PutIn_Logic.fire_keys >= 6 && PutIn_Logic.hover_boots)) && PutIn_Logic.bomb_bag;
		Location_PutIn_Logic.gs_fire_time = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.fire_keys >= 1 && PutIn_Logic.time;
		Location_PutIn_Logic.gs_fire_bomb_wall = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.goron_bracelet && PutIn_Logic.bomb_bag;
		Location_PutIn_Logic.gs_fire_scarecrow1 = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.goron_bracelet && PutIn_Logic.fire_keys >=5 && PutIn_Logic.hookshot;
		Location_PutIn_Logic.gs_fire_scarecrow2 = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.goron_bracelet && PutIn_Logic.fire_keys >=5 && PutIn_Logic.hookshot;
		Location_PutIn_Logic.gs_fire_basement = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.hammer;
	}
	for (h= 1; h <= 3; h++) {
		PutIn_Logic.current_water_keys = PutIn_Logic.forced_water_keys;
		for (i = AreaIndexes[28]; i < AreaIndexes[29]; i++) {
			if ((Check[Locations[i]] == "small_key") && Location_PutIn_Logic[Locations[i]]) {PutIn_Logic.current_water_keys +=1;}
		}
		PutIn_Logic.min_water_keys = 0;
		if (PutIn_Logic.current_water_keys < 6 && (PutIn_Logic.longshot && PutIn_Logic.iron_boots || (Check["water11"] != "small_key" && Check["water11"] != "unknown"))) {
			var wat_keys = [["water1","water2","water3","water4","water5","water6","water9"]];
			var done = false;
			for (i = 0; i < wat_keys.length; i++) {
				for (j = 0; j < wat_keys[i].length; j++) {
					str = wat_keys[i][j];
					if (!(Location_PutIn_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown"|| (Check[str] == "boss_key" && (Check["water11"] == "small_key" || Check["water11"] == "unknown")))) {
						PutIn_Logic.min_water_keys = i;
						done = true;
						break;
					}
				}
				if (done) {break;}
			}
			if (!done) {PutIn_Logic.min_water_keys = 6;}
		}
		PutIn_Logic.water_keys = Math.max(PutIn_Logic.min_water_keys,PutIn_Logic.current_water_keys);
		Location_PutIn_Logic.water1 = PutIn_Logic.can_enter_water;
		Location_PutIn_Logic.water2 = PutIn_Logic.can_enter_water;
		Location_PutIn_Logic.water3 = PutIn_Logic.middle_water && PutIn_Logic.bomb_bag;
		Location_PutIn_Logic.water4 = PutIn_Logic.can_enter_water && PutIn_Logic.lullaby && (PutIn_Logic.bow || PutIn_Logic.can_use_dins);
		Location_PutIn_Logic.water5 = PutIn_Logic.can_enter_water && PutIn_Logic.lullaby && PutIn_Logic.bow && PutIn_Logic.goron_bracelet && (PutIn_Logic.hover_boots || PutIn_Logic.longshot);
		Location_PutIn_Logic.water6 = PutIn_Logic.middle_water && PutIn_Logic.can_wear_zora_tunic;
		Location_PutIn_Logic.water7 = PutIn_Logic.water_keys >= 5 && PutIn_Logic.lullaby;
		Location_PutIn_Logic.water8 = PutIn_Logic.water_keys >= 5 && PutIn_Logic.lullaby && PutIn_Logic.time && PutIn_Logic.bow;
		Location_PutIn_Logic.water9 = PutIn_Logic.can_enter_water && PutIn_Logic.lullaby && ((PutIn_Logic.water_keys >= 5 && PutIn_Logic.time && PutIn_Logic.bow) || PutIn_Logic.goron_bracelet);
		Location_PutIn_Logic.water10 = PutIn_Logic.can_enter_water && PutIn_Logic.lullaby && PutIn_Logic.longshot && PutIn_Logic.water_keys >= 5 && ((PutIn_Logic.bomb_bag && PutIn_Logic.goron_bracelet) || PutIn_Logic.hover_boots);
		Location_PutIn_Logic.water11 = PutIn_Logic.can_enter_water && PutIn_Logic.water_boss_key && PutIn_Logic.longshot ;
		Location_PutIn_Logic.gs_water_south_basement = PutIn_Logic.can_enter_water && PutIn_Logic.bomb_bag && PutIn_Logic.lullaby;
		Location_PutIn_Logic.gs_water_river = PutIn_Logic.can_enter_water && PutIn_Logic.time && PutIn_Logic.water_keys >= 5;
		Location_PutIn_Logic.gs_water_central = PutIn_Logic.middle_water && (PutIn_Logic.longshot || PutIn_Logic.can_use_farores);
		Location_PutIn_Logic.gs_water_near_boss_key = PutIn_Logic.can_enter_water && PutIn_Logic.longshot && PutIn_Logic.lullaby && PutIn_Logic.water_keys >=4;
		Location_PutIn_Logic.gs_water_platform_room = PutIn_Logic.can_enter_water && PutIn_Logic.longshot && PutIn_Logic.lullaby && PutIn_Logic.water_keys >=4;
	}
	for (h= 1; h <= 3; h++) {
		PutIn_Logic.current_spirit_keys = PutIn_Logic.forced_spirit_keys;
		for (i = AreaIndexes[29]; i < AreaIndexes[30]; i++) {
			if ((Check[Locations[i]] == "small_key") && Location_PutIn_Logic[Locations[i]]) {PutIn_Logic.current_spirit_keys +=1;}
		}
		PutIn_Logic.min_spirit_keys = 0;
		if (PutIn_Logic.current_spirit_keys < 5) {
			var spi_keys = [["spirit1","spirit2","spirit8","spirit9"], ["spirit3","spirit4","spirit5","spirit6"], [], ["spirit7","spirit10","spirit11","spirit12","spirit13"],["spirit14","spirit15","spirit16","spirit17"],["spirit18","spirit19"]]
			var done = false;
			for (i = 0; i < spi_keys.length; i++) {
				for (j = 0; j < spi_keys[i].length; j++) {
					str = spi_keys[i][j];
					if (!(Location_PutIn_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
						PutIn_Logic.min_spirit_keys = i;
						done = true;
						break;
					}
				}
				if (done) {break;}
			}
			if (!done) {PutIn_Logic.min_spirit_keys = 5;}
		}
		PutIn_Logic.spirit_keys = Math.max(PutIn_Logic.min_spirit_keys,PutIn_Logic.current_spirit_keys);
		Location_PutIn_Logic.spirit1 = PutIn_Logic.requiem && (PutIn_Logic.slingshot || PutIn_Logic.boomerang);
		Location_PutIn_Logic.spirit2 = PutIn_Logic.requiem && (PutIn_Logic.slingshot || PutIn_Logic.boomerang);
		Location_PutIn_Logic.spirit3 = (PutIn_Logic.spirit_keys >=1 && PutIn_Logic.projectile_both);
		Location_PutIn_Logic.spirit4 = (PutIn_Logic.spirit_keys >=1 && PutIn_Logic.projectile_both);
		Location_PutIn_Logic.spirit5 = (PutIn_Logic.spirit_keys >=5 && PutIn_Logic.requiem && PutIn_Logic.bomb_bag) || (PutIn_Logic.spirit_keys >=3 && PutIn_Logic.silver_gauntlets && PutIn_Logic.can_use_fire) || (PutIn_Logic.bomb_bag && PutIn_Logic.spirit_keys >=1 && PutIn_Logic.can_use_fire);
		Location_PutIn_Logic.spirit6 = (PutIn_Logic.spirit_keys >=5 && PutIn_Logic.requiem && PutIn_Logic.bomb_bag) || (PutIn_Logic.spirit_keys >=3 && PutIn_Logic.silver_gauntlets && PutIn_Logic.can_use_fire) || (PutIn_Logic.bomb_bag && PutIn_Logic.spirit_keys >=1 && PutIn_Logic.can_use_fire);
		Location_PutIn_Logic.spirit7 = (PutIn_Logic.spirit_keys >=3 && PutIn_Logic.longshot && PutIn_Logic.bomb_bag) || PutIn_Logic.spirit_keys >= 5;
		Location_PutIn_Logic.spirit8 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.hookshot && PutIn_Logic.lullaby;
		Location_PutIn_Logic.spirit9 = PutIn_Logic.can_enter_adult_spirit && (PutIn_Logic.bow || PutIn_Logic.hookshot || PutIn_Logic.bomb_bag);
		Location_PutIn_Logic.spirit10 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=3;
		Location_PutIn_Logic.spirit11 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=3;
		Location_PutIn_Logic.spirit12 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=3 && PutIn_Logic.lullaby;
		Location_PutIn_Logic.spirit13 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=3 && PutIn_Logic.lullaby && (PutIn_Logic.hookshot || PutIn_Logic.hover_boots);
		Location_PutIn_Logic.spirit14 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=4 && PutIn_Logic.bomb_bag && PutIn_Logic.mirror_shield;
		Location_PutIn_Logic.spirit15 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=4 && PutIn_Logic.bomb_bag ;//&& PutIn_Logic.can_see;
		Location_PutIn_Logic.spirit16 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=4 && PutIn_Logic.bomb_bag ;//&& PutIn_Logic.can_see;
		Location_PutIn_Logic.spirit17 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=4 && PutIn_Logic.bomb_bag;
		Location_PutIn_Logic.spirit18 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=5 && PutIn_Logic.bow && PutIn_Logic.lullaby && PutIn_Logic.hookshot;
		Location_PutIn_Logic.spirit19 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=5 && PutIn_Logic.mirror_shield;
		Location_PutIn_Logic.spirit20 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=5 && PutIn_Logic.mirror_shield && PutIn_Logic.bomb_bag && PutIn_Logic.spirit_boss_key && PutIn_Logic.hookshot;	
		Location_PutIn_Logic.gs_spirit_metal_fence = PutIn_Logic.requiem && (PutIn_Logic.boomerang || PutIn_Logic.slingshot);
		Location_PutIn_Logic.gs_spirit_before_child_knuckle = (PutIn_Logic.bomb_bag && PutIn_Logic.boomerang && PutIn_Logic.hookshot && PutIn_Logic.spirit_keys >= 1) || (PutIn_Logic.boomerang && PutIn_Logic.spirit_keys >= 5 && PutIn_Logic.bomb_bag && PutIn_Logic.requiem) || (PutIn_Logic.hookshot && PutIn_Logic.silver_gauntlets && PutIn_Logic.spirit_keys >= 3);
		Location_PutIn_Logic.gs_spirit_boulder_room = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.time && (PutIn_Logic.bow || PutIn_Logic.hookshot || PutIn_Logic.bomb_bag);
		Location_PutIn_Logic.gs_spirit_temple_lobby = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >= 3 && (PutIn_Logic.hookshot || PutIn_Logic.hover_boots);
		Location_PutIn_Logic.gs_spirit_bomb_for_light_room = PutIn_Logic.spirit_keys >= 1;
	}
	for (h= 1; h <= 3; h++) {
		PutIn_Logic.current_shadow_keys = PutIn_Logic.forced_shadow_keys;
		for (i = AreaIndexes[30]; i < AreaIndexes[31]; i++) {
			if ((Check[Locations[i]] == "small_key") && Location_PutIn_Logic[Locations[i]]) {PutIn_Logic.current_shadow_keys +=1;}
		}
		PutIn_Logic.min_shadow_keys = 0;
		if (PutIn_Logic.current_shadow_keys < 5) {
			var sha_keys = [["shadow1","shadow2","shadow3","shadow4"], ["shadow5","shadow6","shadow7","shadow8","shadow9"], ["shadow10","shadow11"],["shadow12","shadow13","shadow14"],["shadow15","shadow16","shadow17"]]
			var done = false;
			for (i = 0; i < sha_keys.length; i++) {
				for (j = 0; j < sha_keys[i].length; j++) {
					str = sha_keys[i][j];
					if (!(Location_PutIn_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
						PutIn_Logic.min_shadow_keys = i;
						done = true;
						break;
					}
				}
				if (done) {break;}
			}
			if (!done) {PutIn_Logic.min_shadow_keys = 5;}
		}
		PutIn_Logic.shadow_keys = Math.max(PutIn_Logic.min_shadow_keys,PutIn_Logic.current_shadow_keys);
		Location_PutIn_Logic.shadow1 = PutIn_Logic.can_enter_shadow;
		Location_PutIn_Logic.shadow2 = PutIn_Logic.can_enter_shadow;
		Location_PutIn_Logic.shadow3 = PutIn_Logic.can_cross_shadow_gap;
		Location_PutIn_Logic.shadow4 = PutIn_Logic.can_cross_shadow_gap;
		Location_PutIn_Logic.shadow5 = PutIn_Logic.can_bomb_shadow_wall;
		Location_PutIn_Logic.shadow6 = PutIn_Logic.can_bomb_shadow_wall;
		Location_PutIn_Logic.shadow7 = PutIn_Logic.can_bomb_shadow_wall;
		Location_PutIn_Logic.shadow8 = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.goron_bracelet;
		Location_PutIn_Logic.shadow9 = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.goron_bracelet;
		Location_PutIn_Logic.shadow10 = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.shadow_keys >=2;
		Location_PutIn_Logic.shadow11 = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.hookshot && PutIn_Logic.shadow_keys >=2;
		Location_PutIn_Logic.shadow12 = PutIn_Logic.can_pass_shadow_hookshot_door && PutIn_Logic.shadow_keys >=3;
		Location_PutIn_Logic.shadow13 = PutIn_Logic.can_pass_shadow_hookshot_door && PutIn_Logic.shadow_keys >=3;
		Location_PutIn_Logic.shadow14 = PutIn_Logic.can_pass_shadow_hookshot_door && PutIn_Logic.shadow_keys >=3;
		Location_PutIn_Logic.shadow15 = PutIn_Logic.can_ride_shadow_boat && PutIn_Logic.shadow_keys >=4;
		Location_PutIn_Logic.shadow16 = PutIn_Logic.can_ride_shadow_boat && PutIn_Logic.shadow_keys >=4;
		Location_PutIn_Logic.shadow17 = PutIn_Logic.can_ride_shadow_boat && PutIn_Logic.shadow_keys >=4;
		Location_PutIn_Logic.shadow18 = PutIn_Logic.can_beat_shadow_boss && PutIn_Logic.shadow_keys >=5;
		Location_PutIn_Logic.gs_shadow_like_like = PutIn_Logic.can_bomb_shadow_wall;
		Location_PutIn_Logic.gs_shadow_crusher = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.hookshot;
		Location_PutIn_Logic.gs_shadow_giant_pot = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.shadow_keys >=2 && PutIn_Logic.hookshot;
		Location_PutIn_Logic.gs_shadow_near_boat = PutIn_Logic.can_pass_shadow_hookshot_door && PutIn_Logic.longshot && PutIn_Logic.shadow_keys >=4;
		Location_PutIn_Logic.gs_shadow_three_pots = PutIn_Logic.can_ride_shadow_boat;
	}
	
	PutIn_Logic.current_ganons_keys = PutIn_Logic.forced_ganons_keys;
	for (i = AreaIndexes[31]; i < AreaIndexes[32]; i++) {
		if ((Check[Locations[i]] == "small_key") && Location_PutIn_Logic[Locations[i]]) {PutIn_Logic.current_ganons_keys +=1;}
	}
	for (h= 1; h <= 3; h++) {
		PutIn_Logic.current_gtg_keys = PutIn_Logic.forced_gtg_keys;
		for (i = AreaIndexes[32]; i < AreaIndexes[33]; i++) {
			if ((Check[Locations[i]] == "small_key") && Location_PutIn_Logic[Locations[i]]) {PutIn_Logic.current_gtg_keys +=1;}
		}
		PutIn_Logic.min_gtg_keys = 0;
		if (PutIn_Logic.current_gtg_keys < 9) {
			var ger_keys = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,22], [],[],[17],[18],[],[19],[20]]
			var done = false;
			for (i = 0; i < ger_keys.length; i++) {
				for (j = 0; j < ger_keys[i].length; j++) {
					str = "gtg" + ger_keys[i][j];
					if (!(Location_PutIn_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
						PutIn_Logic.min_gtg_keys = i;
						done = true;
						break;
					}
				}
				if (done) {break;}
			}
			if (!done) {PutIn_Logic.min_gtg_keys = 9;}
		}
		PutIn_Logic.gtg_keys = Math.max(PutIn_Logic.min_gtg_keys,PutIn_Logic.current_gtg_keys);
		Location_PutIn_Logic.gtg1 = PutIn_Logic.can_save_carpenters && PutIn_Logic.bow;
		Location_PutIn_Logic.gtg2 = PutIn_Logic.can_save_carpenters && PutIn_Logic.bow;
		Location_PutIn_Logic.gtg3 = PutIn_Logic.can_save_carpenters;
		Location_PutIn_Logic.gtg4 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot;
		Location_PutIn_Logic.gtg5 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.silver_gauntlets ;//&& PutIn_Logic.can_see ;
		Location_PutIn_Logic.gtg6 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.silver_gauntlets ;//&& PutIn_Logic.can_see ;
		Location_PutIn_Logic.gtg7 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.silver_gauntlets ;//&& PutIn_Logic.can_see ;
		Location_PutIn_Logic.gtg8 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.silver_gauntlets ;//&& PutIn_Logic.can_see ;
		Location_PutIn_Logic.gtg9 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.bow;  //((PutIn_Logic.bomb_bag || PutIn_Logic.gtg_keys == 9) && PutIn_Logic.hammer));
		Location_PutIn_Logic.gtg10 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.bow ;//&& PutIn_Logic.can_see;
		Location_PutIn_Logic.gtg12 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot/*&& PutIn_Logic.can_see*/;
		Location_PutIn_Logic.gtg11 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.hammer;// && (PutIn_Logic.can_see || (PutIn_Logic.bomb_bag || PutIn_Logic.gtg_keys == 9)) ;
		Location_PutIn_Logic.gtg13 = PutIn_Logic.can_save_carpenters && (PutIn_Logic.gtg_keys >= 9 || (PutIn_Logic.bomb_bag && PutIn_Logic.time) || (PutIn_Logic.hookshot /*&& PutIn_Logic.can_see*/ && PutIn_Logic.time));
		Location_PutIn_Logic.gtg14 = PutIn_Logic.can_save_carpenters && (PutIn_Logic.gtg_keys >= 9 || (PutIn_Logic.bomb_bag && PutIn_Logic.time) || (PutIn_Logic.hookshot /*&& PutIn_Logic.can_see*/ && PutIn_Logic.time));
		Location_PutIn_Logic.gtg15 = PutIn_Logic.can_save_carpenters && (PutIn_Logic.gtg_keys >= 9 || (PutIn_Logic.bomb_bag && PutIn_Logic.time) || (PutIn_Logic.hookshot /*&& PutIn_Logic.can_see*/ && PutIn_Logic.time));
		Location_PutIn_Logic.gtg16 = PutIn_Logic.can_save_carpenters && PutIn_Logic.bomb_bag;
		Location_PutIn_Logic.gtg17 = PutIn_Logic.can_save_carpenters && PutIn_Logic.gtg_keys >= 3 ;//&& PutIn_Logic.can_see;
		Location_PutIn_Logic.gtg18 = PutIn_Logic.can_save_carpenters && PutIn_Logic.gtg_keys >= 4;
		Location_PutIn_Logic.gtg19 = PutIn_Logic.can_save_carpenters && PutIn_Logic.gtg_keys >= 6;
		Location_PutIn_Logic.gtg20 = PutIn_Logic.can_save_carpenters && PutIn_Logic.gtg_keys >= 7;
		Location_PutIn_Logic.gtg21 = PutIn_Logic.can_save_carpenters && PutIn_Logic.gtg_keys >= 9;
		Location_PutIn_Logic.gtg22 = PutIn_Logic.can_save_carpenters && PutIn_Logic.iron_boots && PutIn_Logic.time && PutIn_Logic.hookshot /*&& PutIn_Logic.can_see*/;
	}
	for (h= 1; h <= 3; h++) {
		PutIn_Logic.current_well_keys = PutIn_Logic.forced_well_keys;
		for (i = AreaIndexes[33]; i < AreaIndexes[34]; i++) {
			if ((Check[Locations[i]] == "small_key") && Location_PutIn_Logic[Locations[i]]) {PutIn_Logic.current_well_keys +=1;}
		}
		PutIn_Logic.min_well_keys	= 0;
		if (PutIn_Logic.current_well_keys < 3) {
			PutIn_Logic.min_well_keys = 3;
			for (i = AreaIndexes[33]; i < AreaIndexes[34]; i++) {
				if (Locations[i] == "well12" || Locations[i] == "well13" || "gs_well_east_inner" || "gs_well_like_like" || "gs_well_west_inner") {continue;}
				if (!(Location_PutIn_Logic[Locations[i]]) && (Check[Locations[i]] == "small_key" || Check[Locations[i]] == "unknown" )) {
					PutIn_Logic.min_well_keys = 0;
					break;
				}
			}
		}
		PutIn_Logic.well_keys = Math.max(PutIn_Logic.min_well_keys,PutIn_Logic.current_well_keys);
		Location_PutIn_Logic.well1 = PutIn_Logic.storms ;//&& PutIn_Logic.can_see;
		Location_PutIn_Logic.well5 = PutIn_Logic.storms ;//&& PutIn_Logic.can_see;
		Location_PutIn_Logic.well2 = PutIn_Logic.storms && PutIn_Logic.bomb_bag;
		Location_PutIn_Logic.well3 = PutIn_Logic.storms && PutIn_Logic.lullaby;
		Location_PutIn_Logic.well4 = PutIn_Logic.storms;
		Location_PutIn_Logic.well6 = PutIn_Logic.storms ;//&& PutIn_Logic.can_see;
		Location_PutIn_Logic.well11 = PutIn_Logic.storms ;//&& PutIn_Logic.can_see;
		Location_PutIn_Logic.well7 = PutIn_Logic.storms && PutIn_Logic.bomb_bag;
		Location_PutIn_Logic.well10 = PutIn_Logic.storms && PutIn_Logic.lullaby;
		Location_PutIn_Logic.well8 = PutIn_Logic.storms && PutIn_Logic.lullaby ;//&& PutIn_Logic.kokiri_sword;
		Location_PutIn_Logic.well9 = PutIn_Logic.storms && PutIn_Logic.lullaby ;//&& PutIn_Logic.can_see ;
		Location_PutIn_Logic.well12 = PutIn_Logic.storms && PutIn_Logic.well_keys >= 3 ;//&& PutIn_Logic.can_see ;
		Location_PutIn_Logic.well13 = PutIn_Logic.storms && PutIn_Logic.well_keys >= 3 ;//&& PutIn_Logic.can_see ;
		Location_PutIn_Logic.well14 = PutIn_Logic.storms && (PutIn_Logic.bomb_bag || (((/*PutIn_Logic.can_see &&*/ PutIn_Logic.well_keys == 3) || PutIn_Logic.can_use_dins) && PutIn_Logic.goron_bracelet));
		Location_PutIn_Logic.gs_well_west_inner = PutIn_Logic.boomerang /*&& PutIn_Logic.can_see*/ && PutIn_Logic.well_keys >=3;
		Location_PutIn_Logic.gs_well_east_inner = PutIn_Logic.boomerang /*&& PutIn_Logic.can_see*/ && PutIn_Logic.well_keys >=3;
		Location_PutIn_Logic.gs_well_like_like = PutIn_Logic.boomerang /*&& PutIn_Logic.can_see*/ && PutIn_Logic.well_keys >=3;
	}

	if (!PutIn_Logic.forest_boss_key) {
		var bk = true;
		for (i = 1; i <= 13; i++) {
			str = "forest" + i;
			if (!Location_PutIn_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		PutIn_Logic.forest_boss_key = bk;
	}
	

	if (!PutIn_Logic.fire_boss_key) {
		var bk = true;
		for (i = 1; i <= 15; i++) {
			if (i == 6) {
				continue;
			}
			str = "fire" + i;
			if (!Location_PutIn_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		PutIn_Logic.fire_boss_key = bk;
	}

	if (!PutIn_Logic.water_boss_key) {
		var bk = true;
		for (i = 1; i <= 10; i++) {
			str = "water" + i;
			if (!Location_PutIn_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		PutIn_Logic.water_boss_key = bk;
	}

	if (!PutIn_Logic.spirit_boss_key) {
		var bk = true;
		for (i = 1; i <= 19; i++) {
			str = "spirit" + i;
			if (!Location_PutIn_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		PutIn_Logic.spirit_boss_key = bk;
	}

	if (!PutIn_Logic.shadow_boss_key) {
		var bk = true;
		for (i = 1; i <= 17; i++) {
			str = "shadow" + i;
			if (!Location_PutIn_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		PutIn_Logic.shadow_boss_key = bk;
	}
	if (PutIn_Logic.current_ganons_keys < 2) {
		PutIn_Logic.min_ganons_keys = 2;
		var done = false;
		for (i = 1; i <= 16; i++) {
			if (i == 8) {continue;}
			str = "ganons" + i;
			if (!(Location_PutIn_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
				PutIn_Logic.min_ganons_keys = 0;
				break;
			}
		}
	}
	PutIn_Logic.ganons_keys = Math.max(PutIn_Logic.min_ganons_keys,PutIn_Logic.current_ganons_keys);


	
	if(PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets) {PutIn_Logic.min_ganons_keys = 1;}
	PutIn_Logic.ganons_keys = Math.max(PutIn_Logic.min_ganons_keys,PutIn_Logic.current_ganons_keys);
	
/*	PutIn_Logic.forest_boss_key = PutIn_Logic.forced_forest_boss_key;
	PutIn_Logic.fire_boss_key = PutIn_Logic.forced_fire_boss_key;
	PutIn_Logic.water_boss_key = PutIn_Logic.forced_water_boss_key;
	PutIn_Logic.spirit_boss_key = PutIn_Logic.forced_spirit_boss_key;
	PutIn_Logic.shadow_boss_key = PutIn_Logic.forced_shadow_boss_key; */
	if(Game.forest_boss_key == true) {PutIn_Logic.forest_boss_key = Location_PutIn_Logic[Location.forest_boss_key]; }
	if(Game.fire_boss_key == true) {PutIn_Logic.fire_boss_key = Location_PutIn_Logic[Location.fire_boss_key]; }
	if(Game.water_boss_key == true) {PutIn_Logic.water_boss_key = Location_PutIn_Logic[Location.water_boss_key]; }
	if(Game.spirit_boss_key == true) {PutIn_Logic.spirit_boss_key = Location_PutIn_Logic[Location.spirit_boss_key]; }
	if(Game.shadow_boss_key == true) {PutIn_Logic.shadow_boss_key = Location_PutIn_Logic[Location.shadow_boss_key]; }
	PutIn_Logic.forest_medallion = true;
	PutIn_Logic.fire_medallion = true;
	PutIn_Logic.water_medallion = true;
	PutIn_Logic.gen1 = true;
	PutIn_Logic.gen2 = true;
	PutIn_Logic.gen3 = true;
	
	if(Logic.forest_medallion_location == "deku") {if (Check.deku_queen_gohma != "unknown") {Game.forest = true;} PutIn_Logic.forest_medallion = Location_PutIn_Logic.deku_queen_gohma;}
	if(Logic.forest_medallion_location == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Game.forest = true;} PutIn_Logic.forest_medallion = Location_PutIn_Logic.dodongos_king_dodongo;}
	if(Logic.forest_medallion_location == "jabu") {if (Check.jabu_barinade != "unknown") {Game.forest = true;} PutIn_Logic.forest_medallion = Location_PutIn_Logic.jabu_barinade;}
	if(Logic.forest_medallion_location == "forest") {if (Check.forest14 != "unknown") {Game.forest = true;} PutIn_Logic.forest_medallion = Location_PutIn_Logic.forest14;}
	if(Logic.forest_medallion_location == "fire") {if (Check.fire6 != "unknown") {Game.forest = true;} PutIn_Logic.forest_medallion = Location_PutIn_Logic.fire6;}
	if(Logic.forest_medallion_location == "water") {if (Check.water11 != "unknown") {Game.forest = true;} PutIn_Logic.forest_medallion = Location_PutIn_Logic.water11;}
	if(Logic.forest_medallion_location == "spirit") {if (Check.spirit20 != "unknown") {Game.forest = true;} PutIn_Logic.forest_medallion = Location_PutIn_Logic.spirit20;}
	if(Logic.forest_medallion_location == "shadow") {if (Check.shadow18 != "unknown") {Game.forest = true;} PutIn_Logic.forest_medallion = Location_PutIn_Logic.shadow18;}
	if(Logic.forest_medallion_location == "pocket") {Game.forest = true; PutIn_Logic.forest_medallion = true;}
	
	if(Logic.fire_medallion_location == "deku") {if (Check.deku_queen_gohma != "unknown") {Game.fire = true;} PutIn_Logic.fire_medallion = Location_PutIn_Logic.deku_queen_gohma;}
	if(Logic.fire_medallion_location == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Game.fire = true;} PutIn_Logic.fire_medallion = Location_PutIn_Logic.dodongos_king_dodongo;}
	if(Logic.fire_medallion_location == "jabu") {if (Check.jabu_barinade != "unknown") {Game.fire = true;} PutIn_Logic.fire_medallion = Location_PutIn_Logic.jabu_barinade;}
	if(Logic.fire_medallion_location == "forest") {if (Check.forest14 != "unknown") {Game.fire = true;} PutIn_Logic.fire_medallion = Location_PutIn_Logic.forest14;}
	if(Logic.fire_medallion_location == "fire") {if (Check.fire6 != "unknown") {Game.fire = true;} PutIn_Logic.fire_medallion = Location_PutIn_Logic.fire6;}
	if(Logic.fire_medallion_location == "water") {if (Check.water11 != "unknown") {Game.fire = true;} PutIn_Logic.fire_medallion = Location_PutIn_Logic.water11;}
	if(Logic.fire_medallion_location == "spirit") {if (Check.spirit20 != "unknown") {Game.fire = true;} PutIn_Logic.fire_medallion = Location_PutIn_Logic.spirit20;}
	if(Logic.fire_medallion_location == "shadow") {if (Check.shadow18 != "unknown") {Game.fire = true;} PutIn_Logic.fire_medallion = Location_PutIn_Logic.shadow18;}
	if(Logic.fire_medallion_location == "pocket") {Game.fire = true; PutIn_Logic.fire_medallion = true;}
	
	if(Logic.water_medallion_location == "deku") {if (Check.deku_queen_gohma != "unknown") {Game.water = true;} PutIn_Logic.water_medallion = Location_PutIn_Logic.deku_queen_gohma;}
	if(Logic.water_medallion_location == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Game.water = true;} PutIn_Logic.water_medallion = Location_PutIn_Logic.dodongos_king_dodongo;}
	if(Logic.water_medallion_location == "jabu") {if (Check.jabu_barinade != "unknown") {Game.water = true;} PutIn_Logic.water_medallion = Location_PutIn_Logic.jabu_barinade;}
	if(Logic.water_medallion_location == "forest") {if (Check.forest14 != "unknown") {Game.water = true;} PutIn_Logic.water_medallion = Location_PutIn_Logic.forest14;}
	if(Logic.water_medallion_location == "fire") {if (Check.fire6 != "unknown") {Game.water = true;} PutIn_Logic.water_medallion = Location_PutIn_Logic.fire6;}
	if(Logic.water_medallion_location == "water") {if (Check.water11 != "unknown") {Game.water = true;} PutIn_Logic.water_medallion = Location_PutIn_Logic.water11;}
	if(Logic.water_medallion_location == "spirit") {if (Check.spirit20 != "unknown") {Game.water = true;} PutIn_Logic.water_medallion = Location_PutIn_Logic.spirit20;}
	if(Logic.water_medallion_location == "shadow") {if (Check.shadow18 != "unknown") {Game.water = true;} PutIn_Logic.water_medallion = Location_PutIn_Logic.shadow18;}
	if(Logic.water_medallion_location == "pocket") {Game.water = true; PutIn_Logic.water_medallion = true;}

	PutIn_Logic.shadow_medallion = true;
	PutIn_Logic.spirit_medallion = true;
	for (var i = 1; i <=3; i++) {
		str = "generic" + i;
		str2 = "gen" + i;
		if(Logic[str] == "deku") {if (Check.deku_queen_gohma != "unknown") {Game[str2] = true;} PutIn_Logic[str2] = Location_PutIn_Logic.deku_queen_gohma; if(document.getElementById("text_" + dekuPlacement).style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = Location_PutIn_Logic.deku_queen_gohma;} if(document.getElementById("text_" + dekuPlacement).style.color=="rgb(255, 165, 0)") {PutIn_Logic.spirit_medallion = Location_PutIn_Logic.deku_queen_gohma;}}
		if(Logic[str] == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Game[str2] = true;} PutIn_Logic[str2] = Location_PutIn_Logic.dodongos_king_dodongo; if(document.getElementById("text_" + dodongosPlacement).style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = Location_PutIn_Logic.dodongos_king_dodongo;} if(document.getElementById("text_" + dodongosPlacement).style.color=="rgb(255, 165, 0)") {PutIn_Logic.spirit_medallion = Location_PutIn_Logic.dodongos_king_dodongo;}}
		if(Logic[str] == "jabu") {if (Check.jabu_barinade != "unknown") {Game[str2] = true;} PutIn_Logic[str2] = Location_PutIn_Logic.jabu_barinade; if(document.getElementById("text_" + jabuPlacement).style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = Location_PutIn_Logic.jabu_barinade;} if(document.getElementById("text_" + jabuPlacement).style.color=="rgb(255, 165, 0)") {PutIn_Logic.spirit_medallion = Location_PutIn_Logic.jabu_barinade;}}
		if(Logic[str] == "forest") {if (Check.forest14 != "unknown") {Game[str2] = true;} PutIn_Logic[str2] = Location_PutIn_Logic.forest14; if(document.getElementById("text_" + forestPlacement).style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = Location_PutIn_Logic.forest14;} if(document.getElementById("text_" + forestPlacement).style.color=="rgb(255, 165, 0)") {Location_PutIn_Logic.forest14;}}
		if(Logic[str] == "fire") {if (Check.fire6 != "unknown") {Game[str2] = true;} PutIn_Logic[str2] = Location_PutIn_Logic.fire6; if(document.getElementById("text_" + firePlacement).style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = Location_PutIn_Logic.fire6;} if(document.getElementById("text_" + firePlacement).style.color=="rgb(255, 165, 0)") {PutIn_Logic.spirit_medallion = Location_PutIn_Logic.fire6;}}
		if(Logic[str] == "water") {if (Check.water11 != "unknown") {Game[str2] = true;} PutIn_Logic[str2] = Location_PutIn_Logic.water11; if(document.getElementById("text_" + waterPlacement).style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = Location_PutIn_Logic.water11;} if(document.getElementById("text_" + waterPlacement).style.color=="rgb(255, 165, 0)") {PutIn_Logic.spirit_medallion = Location_PutIn_Logic.water11;}}
		if(Logic[str] == "spirit") {if (Check.spirit20 != "unknown") {Game[str2] = true;} PutIn_Logic[str2] = Location_PutIn_Logic.spirit20; if(document.getElementById("text_" + spiritPlacement).style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = Location_PutIn_Logic.spirit20;} if(document.getElementById("text_" + spiritPlacement).style.color=="rgb(255, 165, 0)") {PutIn_Logic.spirit_medallion = Location_PutIn_Logic.spirit20;}}
		if(Logic[str] == "shadow") {if (Check.shadow18 != "unknown") {Game[str2] = true;} PutIn_Logic[str2] = Location_PutIn_Logic.shadow18; if(document.getElementById("text_" + shadowPlacement).style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = Location_PutIn_Logic.shadow18;} if(document.getElementById("text_" + shadowPlacement).style.color=="rgb(255, 165, 0)") {PutIn_Logic.spirit_medallion = Location_PutIn_Logic.shadow18;}}
		if(Logic[str] == "pocket") {Game[str2] = true; PutIn_Logic[str2] = true; if(document.getElementById("text_" + pocketPlacement).style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = true;} if(document.getElementById("text_" + pocketPlacement).style.color=="rgb(255, 165, 0)") {PutIn_Logic.spirit_medallion = true;}}
	}
	
	PutIn_Logic.kokiri_emerald = true;
	PutIn_Logic.goron_ruby = true;
	PutIn_Logic.zora_sapphire = true;
	if(Logic.emerald == "deku") {PutIn_Logic.kokiri_emerald = Location_PutIn_Logic.deku_queen_gohma;}
	if(Logic.emerald == "dodongos") {PutIn_Logic.kokiri_emerald = Location_PutIn_Logic.dodongos_king_dodongo;}
	if(Logic.emerald == "jabu") {PutIn_Logic.kokiri_emerald = Location_PutIn_Logic.jabu_barinade;}
	if(Logic.emerald == "forest") {PutIn_Logic.kokiri_emerald = Location_PutIn_Logic.forest14;}
	if(Logic.emerald == "fire") {PutIn_Logic.kokiri_emerald = Location_PutIn_Logic.fire6;}
	if(Logic.emerald == "water") {PutIn_Logic.kokiri_emerald = Location_PutIn_Logic.water11;}
	if(Logic.emerald == "spirit") {PutIn_Logic.kokiri_emerald = Location_PutIn_Logic.spirit20;}
	if(Logic.emerald == "shadow") {PutIn_Logic.kokiri_emerald = Location_PutIn_Logic.shadow18;}
	if(Logic.emerald == "pocket") {PutIn_Logic.kokiri_emerald = true;}
	
	if(Logic.ruby == "deku") {PutIn_Logic.goron_ruby = Location_PutIn_Logic.deku_queen_gohma;}
	if(Logic.ruby == "dodongos") {PutIn_Logic.goron_ruby = Location_PutIn_Logic.dodongos_king_dodongo;}
	if(Logic.ruby == "jabu") {PutIn_Logic.goron_ruby = Location_PutIn_Logic.jabu_barinade;}
	if(Logic.ruby == "forest") {PutIn_Logic.goron_ruby = Location_PutIn_Logic.forest14;}
	if(Logic.ruby == "fire") {PutIn_Logic.goron_ruby = Location_PutIn_Logic.fire6;}
	if(Logic.ruby == "water") {PutIn_Logic.goron_ruby = Location_PutIn_Logic.water11;}
	if(Logic.ruby == "spirit") {PutIn_Logic.goron_ruby = Location_PutIn_Logic.spirit20;}
	if(Logic.ruby == "shadow") {PutIn_Logic.goron_ruby = Location_PutIn_Logic.shadow18;}
	if(Logic.ruby == "pocket") {PutIn_Logic.goron_ruby = true;}
	
	if(Logic.sapphire == "deku") {PutIn_Logic.zora_sapphire = Location_PutIn_Logic.deku_queen_gohma;}
	if(Logic.sapphire == "dodongos") {PutIn_Logic.zora_sapphire = Location_PutIn_Logic.dodongos_king_dodongo;}
	if(Logic.sapphire == "jabu") {PutIn_Logic.zora_sapphire = Location_PutIn_Logic.jabu_barinade;}
	if(Logic.sapphire == "forest") {PutIn_Logic.zora_sapphire = Location_PutIn_Logic.forest14;}
	if(Logic.sapphire == "fire") {PutIn_Logic.zora_sapphire = Location_PutIn_Logic.fire6;}
	if(Logic.sapphire == "water") {PutIn_Logic.zora_sapphire = Location_PutIn_Logic.water11;}
	if(Logic.sapphire == "spirit") {PutIn_Logic.zora_sapphire = Location_PutIn_Logic.spirit20;}
	if(Logic.sapphire == "shadow") {PutIn_Logic.zora_sapphire = Location_PutIn_Logic.shadow18;}
	if(Logic.sapphire == "pocket") {PutIn_Logic.zora_sapphire = true;}
	
	Location_PutIn_Logic.mido_1 = true;
	Location_PutIn_Logic.mido_2 = true;
	Location_PutIn_Logic.mido_3 = true;
	Location_PutIn_Logic.mido_4 = true;
	Location_PutIn_Logic.kokiri_sword = true;
	Location_PutIn_Logic.kokiri_storms = PutIn_Logic.storms;
	Location_PutIn_Logic.talons_chickens = true;
	Location_PutIn_Logic.back_of_ranch = true;
	Location_PutIn_Logic.hyrule_remote_grotto = PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.hyrule_open_grotto = true;
	Location_PutIn_Logic.hyrule_hp_scrub = PutIn_Logic.can_blast_or_smash;;
	Location_PutIn_Logic.hyrule_boulder_of_destiny = PutIn_Logic.can_blast_or_smash;;
	Location_PutIn_Logic.hyrule_tektite_grotto = PutIn_Logic.can_blast_or_smash && (PutIn_Logic.golden_scale || PutIn_Logic.iron_boots);
	Location_PutIn_Logic.gerudovalley_box = true;
	Location_PutIn_Logic.gerudovalley_fall = true;
	Location_PutIn_Logic.gerudo_hammer = PutIn_Logic.fortress_access && PutIn_Logic.hammer;
	Location_PutIn_Logic.hylia_child_fishing = true;
	Location_PutIn_Logic.hylia_bottle = PutIn_Logic.silver_scale;
	Location_PutIn_Logic.hylia_adult_fishing = PutIn_Logic.hookshot || PutIn_Logic.child_can_enter_river;
	Location_PutIn_Logic.hylia_lab_top = PutIn_Logic.hookshot || PutIn_Logic.child_can_enter_river;
	Location_PutIn_Logic.hylia_lab_dive = PutIn_Logic.golden_scale;
	Location_PutIn_Logic.hylia_sun_shoot = PutIn_Logic.longshot && PutIn_Logic.bow;
	Location_PutIn_Logic.market_slingshot_game = true;
	Location_PutIn_Logic.richard = true;
	Location_PutIn_Logic.market_bowling_1 = PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.market_bowling_2 = PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.market_lens_game = PutIn_Logic.can_see;
	Location_PutIn_Logic.poes= (PutIn_Logic.bow && PutIn_Logic.eponas && PutIn_Logic.bottle) || PutIn_Logic.big_poe;
	Location_PutIn_Logic.dins_fairy = PutIn_Logic.bomb_bag && PutIn_Logic.lullaby;
	Location_PutIn_Logic.g_fairy = PutIn_Logic.golden_gauntlets && PutIn_Logic.lullaby;
	Location_PutIn_Logic.lacs = PutIn_Logic.shadow_medallion && PutIn_Logic.spirit_medallion;
	Location_PutIn_Logic.fountain_fairy = PutIn_Logic.ice_access && PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.ice_glacier_hp = PutIn_Logic.ice_access;
	Location_PutIn_Logic.ice_bottom_of_fountain = PutIn_Logic.ice_access && PutIn_Logic.iron_boots;
	Location_PutIn_Logic.ice_map = PutIn_Logic.ice_access;
	Location_PutIn_Logic.ice_compass = PutIn_Logic.ice_access;
	Location_PutIn_Logic.ice_hp = PutIn_Logic.ice_access;
	Location_PutIn_Logic.ice_irons = PutIn_Logic.ice_access;
	Location_PutIn_Logic.deku_lobby = true;
	Location_PutIn_Logic.deku_slingshot = true;
	Location_PutIn_Logic.deku_slingshot_room_side = true;
	Location_PutIn_Logic.deku_compass = true;
	Location_PutIn_Logic.deku_compass_room_side = true;
	Location_PutIn_Logic.deku_basement = true;
	Location_PutIn_Logic.deku_queen_gohma = PutIn_Logic.slingshot;
	Location_PutIn_Logic.ocarina_game = true;
	Location_PutIn_Logic.lost_woods_grotto = PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.lost_woods_scrub_grotto = PutIn_Logic.bomb_bag || (PutIn_Logic.sarias || PutIn_Logic.minuet) && PutIn_Logic.hammer;
	Location_PutIn_Logic.bridge_scrub = true;
	Location_PutIn_Logic.target = PutIn_Logic.slingshot;
	Location_PutIn_Logic.skull_kid = PutIn_Logic.sarias;
	Location_PutIn_Logic.theater = true;
	Location_PutIn_Logic.wolfos_grotto = PutIn_Logic.bomb_bag || (PutIn_Logic.sarias || PutIn_Logic.minuet) && PutIn_Logic.hammer;
	Location_PutIn_Logic.rolling_goron = PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.goron_dance = PutIn_Logic.lullaby && PutIn_Logic.sarias;
	Location_PutIn_Logic.goron_pot = (PutIn_Logic.bomb_bag || PutIn_Logic.goron_bracelet) && (PutIn_Logic.lullaby || PutIn_Logic.can_use_dins);
	Location_PutIn_Logic.goron_maze_1 = PutIn_Logic.can_blast_or_smash || PutIn_Logic.silver_gauntlets;
	Location_PutIn_Logic.goron_maze_2 = PutIn_Logic.can_blast_or_smash || PutIn_Logic.silver_gauntlets;
	Location_PutIn_Logic.goron_maze_3 = PutIn_Logic.hammer || PutIn_Logic.silver_gauntlets;
	Location_PutIn_Logic.goron_link = PutIn_Logic.can_stop_link_the_goron;
	Location_PutIn_Logic.dodongos_map = PutIn_Logic.can_enter_dodongos;
	Location_PutIn_Logic.dodongos_compass = PutIn_Logic.can_enter_dodongos;
	Location_PutIn_Logic.dodongos_bomb_flower_platform = PutIn_Logic.dodongos_climb;
	Location_PutIn_Logic.dodongos_bomb_bag = PutIn_Logic.dodongos_climb;
	Location_PutIn_Logic.dodongos_end_of_bridge = PutIn_Logic.dodongos_climb && PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.dodongos_above_king = PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.dodongos_king_dodongo = PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.trail_bombable = PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.trail_dodongos_top = true;
	Location_PutIn_Logic.trail_storms = PutIn_Logic.storms;
	Location_PutIn_Logic.trail_fairy = PutIn_Logic.can_blast_or_smash && PutIn_Logic.lullaby;
	Location_PutIn_Logic.trade_quest = Location_PutIn_Logic.trade_quest = (((PutIn_Logic.ice_access || ((PutIn_Logic.giants_wallet || PutIn_Logic.can_enter_ganons) && PutIn_Logic.lullaby && PutIn_Logic.bottle)) && PutIn_Logic.prescription) || PutIn_Logic.claim_check) && PutIn_Logic.crater_top;
	Location_PutIn_Logic.crater_bean = (PutIn_Logic.bolero && PutIn_Logic.child_can_enter_river) || (PutIn_Logic.hover_boots && PutIn_Logic.crater_by_city);
	Location_PutIn_Logic.crater_hammer_fairy = PutIn_Logic.crater_by_city && PutIn_Logic.hammer && PutIn_Logic.lullaby;
	Location_PutIn_Logic.crater_grotto = PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.crater_nook_hp = PutIn_Logic.crater_top;
	Location_PutIn_Logic.man_on_roof = true;//PutIn_Logic.hookshot;
	Location_PutIn_Logic.kakariko_grotto = true;
	Location_PutIn_Logic.windmill = true;//PutIn_Logic.boomerang || PutIn_Logic.time;
	Location_PutIn_Logic.anju = true;
	Location_PutIn_Logic.cow_house = true;
	Location_PutIn_Logic.archery_game = PutIn_Logic.bow;
	Location_PutIn_Logic.redead_grotto = PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.anjus_chickens = true;
	Location_PutIn_Logic.tokens_10 = PutIn_Logic.gold_skulltulas >= 10;
	Location_PutIn_Logic.tokens_20 = PutIn_Logic.gold_skulltulas >= 20;
	Location_PutIn_Logic.tokens_30 = PutIn_Logic.gold_skulltulas >= 30;
	Location_PutIn_Logic.tokens_40 = PutIn_Logic.gold_skulltulas >= 40;
	Location_PutIn_Logic.tokens_50 = PutIn_Logic.gold_skulltulas >= 50;
	Location_PutIn_Logic.shield_grave = true;
	Location_PutIn_Logic.gravedigging_tour = true;
	Location_PutIn_Logic.composers_grave = PutIn_Logic.suns;
	Location_PutIn_Logic.redead_grave = PutIn_Logic.lullaby && PutIn_Logic.can_use_fire;
	Location_PutIn_Logic.graveyard_box = PutIn_Logic.child_can_enter_river || PutIn_Logic.longshot;
	Location_PutIn_Logic.race_1 = true;
	Location_PutIn_Logic.race_2 = true;
	Location_PutIn_Logic.river_pillar = PutIn_Logic.child_can_enter_river || PutIn_Logic.hover_boots;
	Location_PutIn_Logic.river_grotto = true;
	Location_PutIn_Logic.river_ledge = PutIn_Logic.child_can_enter_river || PutIn_Logic.hover_boots;
	Location_PutIn_Logic.frogs_1 = PutIn_Logic.child_can_enter_river && PutIn_Logic.storms;
	Location_PutIn_Logic.frogs_2 = PutIn_Logic.child_can_enter_river && (PutIn_Logic.storms && PutIn_Logic.lullaby && PutIn_Logic.eponas && PutIn_Logic.sarias && PutIn_Logic.suns && PutIn_Logic.time);
	Location_PutIn_Logic.zora_diving = (PutIn_Logic.lullaby && PutIn_Logic.bomb_bag) || PutIn_Logic.silver_scale;
	Location_PutIn_Logic.zora_torches = (PutIn_Logic.lullaby && PutIn_Logic.bomb_bag) || PutIn_Logic.silver_scale;
	Location_PutIn_Logic.thaw_king = PutIn_Logic.ice_access || (PutIn_Logic.bottle && (PutIn_Logic.giants_wallet || PutIn_Logic.can_enter_ganons) && PutIn_Logic.lullaby);
	Location_PutIn_Logic.colossus_bean = PutIn_Logic.requiem && PutIn_Logic.child_can_enter_river;
	Location_PutIn_Logic.colossus_fairy = PutIn_Logic.can_enter_colossus && PutIn_Logic.bomb_bag && PutIn_Logic.lullaby;
	Location_PutIn_Logic.wasteland = PutIn_Logic.can_cross_quicksand && PutIn_Logic.can_use_fire;
	Location_PutIn_Logic.gerudo_roof = PutIn_Logic.fortress_access && (PutIn_Logic.hookshot || PutIn_Logic.hover_boots);
	Location_PutIn_Logic.gerudo_archery_1 = PutIn_Logic.eponas && PutIn_Logic.bow;
	Location_PutIn_Logic.gerudo_archery_2 = PutIn_Logic.eponas && PutIn_Logic.bow;
	Location_PutIn_Logic.jabu_boomerang = PutIn_Logic.can_enter_jabu;
	Location_PutIn_Logic.jabu_map = PutIn_Logic.can_enter_jabu && PutIn_Logic.boomerang;
	Location_PutIn_Logic.jabu_compass = PutIn_Logic.can_enter_jabu && PutIn_Logic.boomerang;
	Location_PutIn_Logic.jabu_barinade = PutIn_Logic.can_enter_jabu && PutIn_Logic.boomerang;
	Location_PutIn_Logic.forest1 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot;
	Location_PutIn_Logic.forest2 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot;
	Location_PutIn_Logic.forest3 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && (PutIn_Logic.time || PutIn_Logic.bow || (PutIn_Logic.hover_boots && PutIn_Logic.forest_keys>=1));
	Location_PutIn_Logic.forest4 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && (PutIn_Logic.time || (PutIn_Logic.hover_boots && PutIn_Logic.forest_keys>=1) || (PutIn_Logic.bow/* && (PutIn_Logic.iron_boots || PutIn_Logic.golden_scale || PutIn_Logic.longshot)*/));
	Location_PutIn_Logic.forest5 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && (PutIn_Logic.time || (PutIn_Logic.hover_boots && PutIn_Logic.forest_keys>=1) || (PutIn_Logic.bow/* && (PutIn_Logic.iron_boots || PutIn_Logic.golden_scale || PutIn_Logic.longshot)*/));
	Location_PutIn_Logic.forest6 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.forest_keys >= 1 && PutIn_Logic.bow && PutIn_Logic.goron_bracelet;
	Location_PutIn_Logic.forest7 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.forest_keys >= 2 && PutIn_Logic.bow && PutIn_Logic.goron_bracelet;
	Location_PutIn_Logic.forest8 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && ((PutIn_Logic.bow && PutIn_Logic.goron_bracelet && PutIn_Logic.forest_keys >=2) || (PutIn_Logic.hover_boots && PutIn_Logic.forest_keys >=1));
	Location_PutIn_Logic.forest9 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && PutIn_Logic.bow && PutIn_Logic.forest_keys>=3;
	Location_PutIn_Logic.forest10 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && PutIn_Logic.forest_keys>=3;
	Location_PutIn_Logic.forest11 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && PutIn_Logic.bow && PutIn_Logic.forest_keys>=3;
	Location_PutIn_Logic.forest12 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && (PutIn_Logic.bow || PutIn_Logic.can_use_dins) && PutIn_Logic.forest_keys>=5;
	Location_PutIn_Logic.forest13 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && PutIn_Logic.bow && PutIn_Logic.forest_keys>=5;
	Location_PutIn_Logic.forest14 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && PutIn_Logic.bow && PutIn_Logic.forest_keys>=5 && PutIn_Logic.forest_boss_key;
	Location_PutIn_Logic.fire1 = PutIn_Logic.can_enter_fire_temple;
	Location_PutIn_Logic.fire2 = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.hammer;
	Location_PutIn_Logic.fire3 = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.hammer;
	Location_PutIn_Logic.fire4 = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.fire_keys >=1;
	Location_PutIn_Logic.fire5 = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.fire_keys >=1 && PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.fire6 = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.fire_boss_key && PutIn_Logic.hammer && PutIn_Logic.can_wear_goron_tunic && (PutIn_Logic.hover_boots || (PutIn_Logic.fire_keys >=7 && (PutIn_Logic.time || PutIn_Logic.bomb_bag)));
	Location_PutIn_Logic.fire7 = PutIn_Logic.can_climb_fire_temple;
	Location_PutIn_Logic.fire8 = PutIn_Logic.can_climb_fire_temple;
	Location_PutIn_Logic.fire9 = PutIn_Logic.can_climb_fire_temple && ((PutIn_Logic.fire_keys >= 4 && PutIn_Logic.bow) || PutIn_Logic.fire_keys>=5);
	Location_PutIn_Logic.fire10 = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.fire_keys>=5;
	Location_PutIn_Logic.fire11 = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.fire_keys>=5 && PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.fire12 = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.fire_keys>=5 && PutIn_Logic.hookshot;
	Location_PutIn_Logic.fire13 = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.fire_keys>=6;
	Location_PutIn_Logic.fire14 = PutIn_Logic.can_climb_fire_temple && (PutIn_Logic.fire_keys>=7 || (PutIn_Logic.fire_keys>=6 && PutIn_Logic.hover_boots)) && PutIn_Logic.hammer && (PutIn_Logic.time || PutIn_Logic.bomb_bag);
	Location_PutIn_Logic.fire15 = PutIn_Logic.can_climb_fire_temple && (PutIn_Logic.fire_keys>=7 || (PutIn_Logic.fire_keys >= 6 && PutIn_Logic.hover_boots)) && PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.water1 = PutIn_Logic.can_enter_water;
	Location_PutIn_Logic.water2 = PutIn_Logic.can_enter_water;
	Location_PutIn_Logic.water3 = PutIn_Logic.middle_water && PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.water4 = PutIn_Logic.can_enter_water && PutIn_Logic.lullaby && (PutIn_Logic.bow || PutIn_Logic.can_use_dins);
	Location_PutIn_Logic.water5 = PutIn_Logic.can_enter_water && PutIn_Logic.lullaby && PutIn_Logic.bow && PutIn_Logic.goron_bracelet && (PutIn_Logic.hover_boots || PutIn_Logic.longshot);
	Location_PutIn_Logic.water6 = PutIn_Logic.middle_water && PutIn_Logic.can_wear_zora_tunic;
	Location_PutIn_Logic.water7 = PutIn_Logic.water_keys >= 5 && PutIn_Logic.lullaby;
	Location_PutIn_Logic.water8 = PutIn_Logic.water_keys >= 5 && PutIn_Logic.lullaby && PutIn_Logic.time && PutIn_Logic.bow;
	Location_PutIn_Logic.water9 = PutIn_Logic.can_enter_water && PutIn_Logic.lullaby && ((PutIn_Logic.water_keys >= 5 && PutIn_Logic.time && PutIn_Logic.bow) || PutIn_Logic.goron_bracelet);
	Location_PutIn_Logic.water10 = PutIn_Logic.can_enter_water && PutIn_Logic.lullaby && PutIn_Logic.longshot && PutIn_Logic.water_keys >= 5 && ((PutIn_Logic.bomb_bag && PutIn_Logic.goron_bracelet) || PutIn_Logic.hover_boots);
	Location_PutIn_Logic.water11 = PutIn_Logic.can_enter_water && PutIn_Logic.water_boss_key && PutIn_Logic.longshot;
	Location_PutIn_Logic.spirit1 = PutIn_Logic.requiem && (PutIn_Logic.slingshot || PutIn_Logic.boomerang);
	Location_PutIn_Logic.spirit2 = PutIn_Logic.requiem && (PutIn_Logic.slingshot || PutIn_Logic.boomerang);
	Location_PutIn_Logic.spirit3 = (PutIn_Logic.spirit_keys >=1 && PutIn_Logic.projectile_both);
	Location_PutIn_Logic.spirit4 = (PutIn_Logic.spirit_keys >=1 && PutIn_Logic.projectile_both);
	Location_PutIn_Logic.spirit5 = (PutIn_Logic.spirit_keys >=5 && PutIn_Logic.requiem && PutIn_Logic.bomb_bag) || (PutIn_Logic.spirit_keys >=3 && PutIn_Logic.silver_gauntlets && PutIn_Logic.can_use_fire) || (PutIn_Logic.bomb_bag && PutIn_Logic.spirit_keys >=1 && PutIn_Logic.can_use_fire);
	Location_PutIn_Logic.spirit6 = (PutIn_Logic.spirit_keys >=5 && PutIn_Logic.requiem && PutIn_Logic.bomb_bag) || (PutIn_Logic.spirit_keys >=3 && PutIn_Logic.silver_gauntlets && PutIn_Logic.can_use_fire) || (PutIn_Logic.bomb_bag && PutIn_Logic.spirit_keys >=1 && PutIn_Logic.can_use_fire);
	Location_PutIn_Logic.spirit7 = (PutIn_Logic.spirit_keys >=3 && PutIn_Logic.longshot && PutIn_Logic.bomb_bag) || PutIn_Logic.spirit_keys >= 5;
	Location_PutIn_Logic.spirit8 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.hookshot && PutIn_Logic.lullaby;
	Location_PutIn_Logic.spirit9 = PutIn_Logic.can_enter_adult_spirit && (PutIn_Logic.bow || PutIn_Logic.hookshot || PutIn_Logic.bomb_bag);
	Location_PutIn_Logic.spirit10 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=3;
	Location_PutIn_Logic.spirit11 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=3;
	Location_PutIn_Logic.spirit12 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=3 && PutIn_Logic.lullaby;
	Location_PutIn_Logic.spirit13 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=3 && PutIn_Logic.lullaby && (PutIn_Logic.hookshot || PutIn_Logic.hover_boots);
	Location_PutIn_Logic.spirit14 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=4 && PutIn_Logic.bomb_bag && PutIn_Logic.mirror_shield;
	Location_PutIn_Logic.spirit15 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=4 && PutIn_Logic.bomb_bag ;//&& PutIn_Logic.can_see;
	Location_PutIn_Logic.spirit16 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=4 && PutIn_Logic.bomb_bag ;//&& PutIn_Logic.can_see;
	Location_PutIn_Logic.spirit17 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=4 && PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.spirit18 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=5 && PutIn_Logic.bow && PutIn_Logic.lullaby && PutIn_Logic.hookshot;
	Location_PutIn_Logic.spirit19 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=5 && PutIn_Logic.mirror_shield;
	Location_PutIn_Logic.spirit20 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=5 && PutIn_Logic.mirror_shield && PutIn_Logic.bomb_bag && PutIn_Logic.spirit_boss_key && PutIn_Logic.hookshot;	
	Location_PutIn_Logic.shadow1 = PutIn_Logic.can_enter_shadow;
	Location_PutIn_Logic.shadow2 = PutIn_Logic.can_enter_shadow;
	Location_PutIn_Logic.shadow3 = PutIn_Logic.can_cross_shadow_gap;
	Location_PutIn_Logic.shadow4 = PutIn_Logic.can_cross_shadow_gap;
	Location_PutIn_Logic.shadow5 = PutIn_Logic.can_bomb_shadow_wall;
	Location_PutIn_Logic.shadow6 = PutIn_Logic.can_bomb_shadow_wall;
	Location_PutIn_Logic.shadow7 = PutIn_Logic.can_bomb_shadow_wall;
	Location_PutIn_Logic.shadow8 = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.goron_bracelet;
	Location_PutIn_Logic.shadow9 = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.goron_bracelet;
	Location_PutIn_Logic.shadow10 = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.shadow_keys >=2;
	Location_PutIn_Logic.shadow11 = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.hookshot && PutIn_Logic.shadow_keys >=2;
	Location_PutIn_Logic.shadow12 = PutIn_Logic.can_pass_shadow_hookshot_door && PutIn_Logic.shadow_keys >=3;
	Location_PutIn_Logic.shadow13 = PutIn_Logic.can_pass_shadow_hookshot_door && PutIn_Logic.shadow_keys >=3;
	Location_PutIn_Logic.shadow14 = PutIn_Logic.can_pass_shadow_hookshot_door && PutIn_Logic.shadow_keys >=3;
	Location_PutIn_Logic.shadow15 = PutIn_Logic.can_ride_shadow_boat && PutIn_Logic.shadow_keys >=4;
	Location_PutIn_Logic.shadow16 = PutIn_Logic.can_ride_shadow_boat && PutIn_Logic.shadow_keys >=4;
	Location_PutIn_Logic.shadow17 = PutIn_Logic.can_ride_shadow_boat && PutIn_Logic.shadow_keys >=4;
	Location_PutIn_Logic.shadow18 = PutIn_Logic.can_beat_shadow_boss && PutIn_Logic.shadow_keys >=5;
	Location_PutIn_Logic.ganons1 = PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets;
	Location_PutIn_Logic.ganons2 = PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets;
	Location_PutIn_Logic.ganons3 = PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets;
	Location_PutIn_Logic.ganons4 = PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets;
	Location_PutIn_Logic.ganons5 = PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets;
	Location_PutIn_Logic.ganons6 = PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets;
	Location_PutIn_Logic.ganons7 = PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets ;//&& PutIn_Logic.can_see;
	Location_PutIn_Logic.ganons8 = PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets && PutIn_Logic.lullaby && PutIn_Logic.ganons_keys >= 1;
	Location_PutIn_Logic.ganons9 = PutIn_Logic.can_enter_ganons;
	Location_PutIn_Logic.ganons10 = PutIn_Logic.can_enter_ganons && PutIn_Logic.bomb_bag;//&& PutIn_Logic.can_see;
	Location_PutIn_Logic.ganons11 = PutIn_Logic.can_enter_ganons;
	Location_PutIn_Logic.ganons12 = PutIn_Logic.can_enter_ganons;
	Location_PutIn_Logic.ganons13 = PutIn_Logic.can_enter_ganons;
	Location_PutIn_Logic.ganons14 = PutIn_Logic.can_enter_ganons;
	Location_PutIn_Logic.ganons15 = PutIn_Logic.can_enter_ganons && (PutIn_Logic.longshot || ((PutIn_Logic.fire_arrows && PutIn_Logic.magic) || (PutIn_Logic.hover_boots && PutIn_Logic.can_use_dins)));
	Location_PutIn_Logic.ganons16 = PutIn_Logic.can_enter_ganons;
	Location_PutIn_Logic.gtg1 = PutIn_Logic.can_save_carpenters && PutIn_Logic.bow;
	Location_PutIn_Logic.gtg2 = PutIn_Logic.can_save_carpenters && PutIn_Logic.bow;
	Location_PutIn_Logic.gtg3 = PutIn_Logic.can_save_carpenters;
	Location_PutIn_Logic.gtg4 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gtg5 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.silver_gauntlets ;//&& PutIn_Logic.can_see ;
	Location_PutIn_Logic.gtg6 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.silver_gauntlets ;//&& PutIn_Logic.can_see ;
	Location_PutIn_Logic.gtg7 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.silver_gauntlets ;//&& PutIn_Logic.can_see ;
	Location_PutIn_Logic.gtg8 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.silver_gauntlets ;//&& PutIn_Logic.can_see ;
	Location_PutIn_Logic.gtg9 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.bow;  //((PutIn_Logic.bomb_bag || PutIn_Logic.gtg_keys == 9) && PutIn_Logic.hammer));
	Location_PutIn_Logic.gtg10 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.bow ;//&& PutIn_Logic.can_see;
	Location_PutIn_Logic.gtg12 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot/*&& PutIn_Logic.can_see*/;
	Location_PutIn_Logic.gtg11 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.hammer;// && (PutIn_Logic.can_see || (PutIn_Logic.bomb_bag || PutIn_Logic.gtg_keys == 9)) ;
	Location_PutIn_Logic.gtg13 = PutIn_Logic.can_save_carpenters && (PutIn_Logic.gtg_keys >= 9 || (PutIn_Logic.bomb_bag && PutIn_Logic.time) || (PutIn_Logic.hookshot /*&& PutIn_Logic.can_see*/ && PutIn_Logic.time));
	Location_PutIn_Logic.gtg14 = PutIn_Logic.can_save_carpenters && (PutIn_Logic.gtg_keys >= 9 || (PutIn_Logic.bomb_bag && PutIn_Logic.time) || (PutIn_Logic.hookshot /*&& PutIn_Logic.can_see*/ && PutIn_Logic.time));
	Location_PutIn_Logic.gtg15 = PutIn_Logic.can_save_carpenters && (PutIn_Logic.gtg_keys >= 9 || (PutIn_Logic.bomb_bag && PutIn_Logic.time) || (PutIn_Logic.hookshot /*&& PutIn_Logic.can_see*/ && PutIn_Logic.time));
	Location_PutIn_Logic.gtg16 = PutIn_Logic.can_save_carpenters && PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.gtg17 = PutIn_Logic.can_save_carpenters && PutIn_Logic.gtg_keys >= 3 ;//&& PutIn_Logic.can_see;
	Location_PutIn_Logic.gtg18 = PutIn_Logic.can_save_carpenters && PutIn_Logic.gtg_keys >= 4;
	Location_PutIn_Logic.gtg19 = PutIn_Logic.can_save_carpenters && PutIn_Logic.gtg_keys >= 6;
	Location_PutIn_Logic.gtg20 = PutIn_Logic.can_save_carpenters && PutIn_Logic.gtg_keys >= 7;
	Location_PutIn_Logic.gtg21 = PutIn_Logic.can_save_carpenters && PutIn_Logic.gtg_keys >= 9;
	Location_PutIn_Logic.gtg22 = PutIn_Logic.can_save_carpenters && PutIn_Logic.iron_boots && PutIn_Logic.time && PutIn_Logic.hookshot /*&& PutIn_Logic.can_see*/;
	Location_PutIn_Logic.well1 = PutIn_Logic.storms ;//&& PutIn_Logic.can_see;
	Location_PutIn_Logic.well5 = PutIn_Logic.storms ;//&& PutIn_Logic.can_see;
	Location_PutIn_Logic.well2 = PutIn_Logic.storms && PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.well3 = PutIn_Logic.storms && PutIn_Logic.lullaby;
	Location_PutIn_Logic.well4 = PutIn_Logic.storms;
	Location_PutIn_Logic.well6 = PutIn_Logic.storms ;//&& PutIn_Logic.can_see;
	Location_PutIn_Logic.well11 = PutIn_Logic.storms ;//&& PutIn_Logic.can_see;
	Location_PutIn_Logic.well7 = PutIn_Logic.storms && PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.well10 = PutIn_Logic.storms && PutIn_Logic.lullaby;
	Location_PutIn_Logic.well8 = PutIn_Logic.storms && PutIn_Logic.lullaby ;//&& PutIn_Logic.kokiri_sword;
	Location_PutIn_Logic.well9 = PutIn_Logic.storms && PutIn_Logic.lullaby ;//&& PutIn_Logic.can_see ;
	Location_PutIn_Logic.well12 = PutIn_Logic.storms && PutIn_Logic.well_keys >= 3 ;//&& PutIn_Logic.can_see ;
	Location_PutIn_Logic.well13 = PutIn_Logic.storms && PutIn_Logic.well_keys >= 3 ;//&& PutIn_Logic.can_see ;
	Location_PutIn_Logic.well14 = PutIn_Logic.storms && (PutIn_Logic.bomb_bag || (((/*PutIn_Logic.can_see &&*/ PutIn_Logic.well_keys == 3) || PutIn_Logic.can_use_dins) && PutIn_Logic.goron_bracelet));
	Location_PutIn_Logic.zeldasSpot = true;
	Location_PutIn_Logic.eponasSpot = true;
	Location_PutIn_Logic.sariasSpot = true;
	Location_PutIn_Logic.stormsSpot = true;
	Location_PutIn_Logic.sunsSpot = PutIn_Logic.lullaby;
	Location_PutIn_Logic.boleroSpot = PutIn_Logic.can_enter_fire_temple;
	Location_PutIn_Logic.minuetSpot = PutIn_Logic.minuet || PutIn_Logic.sarias;
	Location_PutIn_Logic.requiemSpot = PutIn_Logic.can_enter_colossus;
	Location_PutIn_Logic.serenadeSpot = PutIn_Logic.ice_access;
	Location_PutIn_Logic.preludeSpot = PutIn_Logic.forest_medallion;
	Location_PutIn_Logic.nocturneSpot = PutIn_Logic.forest_medallion && PutIn_Logic.fire_medallion && PutIn_Logic.water_medallion;
	Location_PutIn_Logic.oot = PutIn_Logic.kokiri_emerald && PutIn_Logic.goron_ruby && PutIn_Logic.zora_sapphire;
	
	Location_PutIn_Logic.gs_kokiri_child = true;
	Location_PutIn_Logic.gs_kokiri_bean = PutIn_Logic.bottle;
	Location_PutIn_Logic.gs_kokiri_adult = PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_market = true;
	Location_PutIn_Logic.gs_lost_woods_bean1 = PutIn_Logic.bottle;
	Location_PutIn_Logic.gs_lost_woods_bean2 = PutIn_Logic.bottle;
	Location_PutIn_Logic.gs_lost_woods_above_stage = (PutIn_Logic.bomb_bag || PutIn_Logic.silver_scale) && (PutIn_Logic.sarias || PutIn_Logic.minuet);
	Location_PutIn_Logic.gs_sacred_forest = PutIn_Logic.hookshot && (PutIn_Logic.sarias || PutIn_Logic.minuet);
	Location_PutIn_Logic.gs_outside_kakariko = (PutIn_Logic.boomerang && PutIn_Logic.bomb_bag) || (PutIn_Logic.can_blast_or_smash && PutIn_Logic.hookshot)
	Location_PutIn_Logic.gs_near_gerudo = (PutIn_Logic.hammer && PutIn_Logic.can_use_fire && PutIn_Logic.hookshot) || (PutIn_Logic.can_use_dins && PutIn_Logic.bomb_bag && PutIn_Logic.boomerang);
	Location_PutIn_Logic.gs_hyrule_castle_tree = true;
	Location_PutIn_Logic.gs_hyrule_castle_grotto = PutIn_Logic.storms && PutIn_Logic.bomb_bag && PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_lon_lon_tree = true;
	Location_PutIn_Logic.gs_lon_lon_shed = true;
	Location_PutIn_Logic.gs_lon_lon_window = PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_lon_lon_back_wall = PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_kakariko_construction = true;
	Location_PutIn_Logic.gs_kakariko_skulltula_house = true;
	Location_PutIn_Logic.gs_kakariko_guard_house = true;
	Location_PutIn_Logic.gs_kakariko_tree = true;
	Location_PutIn_Logic.gs_kakariko_tower = PutIn_Logic.bomb_bag || PutIn_Logic.slingshot;
	Location_PutIn_Logic.gs_kakariko_impas = PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_graveyard_wall = PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_graveyard_bean = PutIn_Logic.bottle;
	Location_PutIn_Logic.gs_trail_bean = PutIn_Logic.bottle && (PutIn_Logic.bomb_bag || PutIn_Logic.goron_bracelet);
	Location_PutIn_Logic.gs_trail_bombable_wall = PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.gs_trail_hail_path = PutIn_Logic.hammer;
	Location_PutIn_Logic.gs_trail_above_dodongos = PutIn_Logic.hammer;
	Location_PutIn_Logic.gs_goron_center = true;
	Location_PutIn_Logic.gs_goron_maze = PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.gs_crater_crate = PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.gs_crater_bean = PutIn_Logic.bottle && PutIn_Logic.bolero;
	Location_PutIn_Logic.gs_river_ladder = PutIn_Logic.silver_scale || PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.gs_river_near_grotto = PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_river_above_bridge = PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_domain = PutIn_Logic.lullaby && (PutIn_Logic.hookshot || PutIn_Logic.magic || PutIn_Logic.bow);
	Location_PutIn_Logic.gs_fountain_above_log = PutIn_Logic.rutos_letter && (PutIn_Logic.silver_scale || (PutIn_Logic.bomb_bag && PutIn_Logic.lullaby)) && PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_fountain_tree = PutIn_Logic.rutos_letter && (PutIn_Logic.silver_scale || (PutIn_Logic.bomb_bag && PutIn_Logic.lullaby))
	Location_PutIn_Logic.gs_fountain_hidden_cave = PutIn_Logic.ice_access && PutIn_Logic.silver_gauntlets && PutIn_Logic.hookshot && PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.gs_hylia_bean = PutIn_Logic.bottle;
	Location_PutIn_Logic.gs_hylia_lab_wall = PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_hylia_island = true;
	Location_PutIn_Logic.gs_hylia_tree = PutIn_Logic.longshot;
	Location_PutIn_Logic.gs_hylia_lab_crate = PutIn_Logic.iron_boots && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_valley_small_bridge = PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_valley_bean = PutIn_Logic.bottle;
	Location_PutIn_Logic.gs_valley_tent = PutIn_Logic.fortress_access && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_valley_pillar = PutIn_Logic.fortress_access && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_fortress_archery = PutIn_Logic.fortress_access && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_fortress_top = PutIn_Logic.fortress_access;
	Location_PutIn_Logic.gs_wasteland = PutIn_Logic.hookshot && PutIn_Logic.can_cross_quicksand;
	Location_PutIn_Logic.gs_colossus_bean = PutIn_Logic.bottle && PutIn_Logic.requiem;
	Location_PutIn_Logic.gs_colossus_tree = PutIn_Logic.hookshot && PutIn_Logic.can_enter_colossus;
	Location_PutIn_Logic.gs_colossus_hill = (PutIn_Logic.requiem && (PutIn_Logic.bomb_bag || PutIn_Logic.silver_scale)) || (PutIn_Logic.longshot && PutIn_Logic.can_enter_colossus);
	Location_PutIn_Logic.gs_river_tree = true;
	Location_PutIn_Logic.gs_ogc = true;
	Location_PutIn_Logic.gs_deku_basement_back = PutIn_Logic.boomerang && PutIn_Logic.bomb_bag && PutIn_Logic.slingshot;
	Location_PutIn_Logic.gs_deku_basement_gate = true;
	Location_PutIn_Logic.gs_deku_basement_vines = PutIn_Logic.slingshot || PutIn_Logic.boomerang || PutIn_Logic.bomb_bag || PutIn_Logic.can_use_dins;
	Location_PutIn_Logic.gs_deku_compass = true;
	Location_PutIn_Logic.gs_dodongos_east_side = PutIn_Logic.can_enter_dodongos;
	Location_PutIn_Logic.gs_dodongos_stair_room = PutIn_Logic.dodongos_climb;
	Location_PutIn_Logic.gs_dodongos_above_stairs = (PutIn_Logic.dodongos_climb && PutIn_Logic.hookshot) || (PutIn_Logic.boomerang && (PutIn_Logic.bomb_bag || PutIn_Logic.goron_bracelet));
	Location_PutIn_Logic.gs_dodongos_scarecrow = PutIn_Logic.can_enter_dodongos && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_dodongos_before_king = PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.gs_jabu_vines = PutIn_Logic.can_enter_jabu;
	Location_PutIn_Logic.gs_jabu_near_octo1 = PutIn_Logic.can_enter_jabu && PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_jabu_near_octo2 = PutIn_Logic.can_enter_jabu && PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_jabu_near_boss = PutIn_Logic.can_enter_jabu && PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_ice_spinning_scythe = PutIn_Logic.ice_access && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_ice_hp_room = PutIn_Logic.ice_access && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_ice_block_room = PutIn_Logic.ice_access && PutIn_Logic.hookshot;
	
	gs[1] = Location_PutIn_Logic.gs_kokiri_child;
	gs[2] = Location_PutIn_Logic.gs_kokiri_bean;
	gs[3] = Location_PutIn_Logic.gs_kokiri_adult;
	gs[4] = Location_PutIn_Logic.gs_market;
	gs[5] = Location_PutIn_Logic.gs_lost_woods_bean1;
	gs[6] = Location_PutIn_Logic.gs_lost_woods_bean2;
	gs[7] = Location_PutIn_Logic.gs_lost_woods_above_stage;
	gs[8] = Location_PutIn_Logic.gs_sacred_forest;
	gs[9] = Location_PutIn_Logic.gs_outside_kakariko;
	gs[10] = Location_PutIn_Logic.gs_near_gerudo;
	gs[11] = Location_PutIn_Logic.gs_hyrule_castle_tree;
	gs[12] = Location_PutIn_Logic.gs_hyrule_castle_grotto;
	gs[13] = Location_PutIn_Logic.gs_lon_lon_tree;
	gs[14] = Location_PutIn_Logic.gs_lon_lon_shed;
	gs[15] = Location_PutIn_Logic.gs_lon_lon_window;
	gs[16] = Location_PutIn_Logic.gs_lon_lon_back_wall;
	gs[17] = Location_PutIn_Logic.gs_kakariko_construction;
	gs[18] = Location_PutIn_Logic.gs_kakariko_skulltula_house;
	gs[19] = Location_PutIn_Logic.gs_kakariko_guard_house;
	gs[20] = Location_PutIn_Logic.gs_kakariko_tree;
	gs[21] = Location_PutIn_Logic.gs_kakariko_tower;
	gs[22] = Location_PutIn_Logic.gs_kakariko_impas;
	gs[23] = Location_PutIn_Logic.gs_graveyard_wall;
	gs[24] = Location_PutIn_Logic.gs_graveyard_bean;
	gs[25] = Location_PutIn_Logic.gs_trail_bean;
	gs[26] = Location_PutIn_Logic.gs_trail_bombable_wall;
	gs[27] = Location_PutIn_Logic.gs_trail_hail_path;
	gs[28] = Location_PutIn_Logic.gs_trail_above_dodongos;
	gs[29] = Location_PutIn_Logic.gs_goron_center;
	gs[30] = Location_PutIn_Logic.gs_goron_maze;
	gs[31] = Location_PutIn_Logic.gs_crater_crate;
	gs[32] = Location_PutIn_Logic.gs_crater_bean;
	gs[33] = Location_PutIn_Logic.gs_river_ladder;
	gs[34] = Location_PutIn_Logic.gs_river_near_grotto;
	gs[35] = Location_PutIn_Logic.gs_river_above_bridge;
	gs[36] = Location_PutIn_Logic.gs_domain;
	gs[37] = Location_PutIn_Logic.gs_fountain_above_log;
	gs[38] = Location_PutIn_Logic.gs_fountain_tree;
	gs[39] = Location_PutIn_Logic.gs_fountain_hidden_cave;
	gs[40] = Location_PutIn_Logic.gs_hylia_bean;
	gs[41] = Location_PutIn_Logic.gs_hylia_lab_wall;
	gs[42] = Location_PutIn_Logic.gs_hylia_island;
	gs[43] = Location_PutIn_Logic.gs_hylia_tree;
	gs[44] = Location_PutIn_Logic.gs_hylia_lab_crate;
	gs[45] = Location_PutIn_Logic.gs_valley_small_bridge;
	gs[46] = Location_PutIn_Logic.gs_valley_bean;
	gs[47] = Location_PutIn_Logic.gs_valley_tent;
	gs[48] = Location_PutIn_Logic.gs_valley_pillar;
	gs[49] = Location_PutIn_Logic.gs_fortress_archery;
	gs[50] = Location_PutIn_Logic.gs_fortress_top;
	gs[51] = Location_PutIn_Logic.gs_wasteland;
	gs[52] = Location_PutIn_Logic.gs_colossus_bean;
	gs[53] = Location_PutIn_Logic.gs_colossus_tree;
	gs[54] = Location_PutIn_Logic.gs_colossus_hill;
	gs[55] = Location_PutIn_Logic.gs_river_tree;
	gs[56] = Location_PutIn_Logic.gs_ogc;
	gs[57] = Location_PutIn_Logic.gs_deku_basement_back;
	gs[58] = Location_PutIn_Logic.gs_deku_basement_gate;
	gs[59] = Location_PutIn_Logic.gs_deku_basement_vines;
	gs[60] = Location_PutIn_Logic.gs_deku_compass;
	gs[61] = Location_PutIn_Logic.gs_dodongos_east_side;
	gs[62] = Location_PutIn_Logic.gs_dodongos_stair_room;
	gs[63] = Location_PutIn_Logic.gs_dodongos_above_stairs;
	gs[64] = Location_PutIn_Logic.gs_dodongos_scarecrow;
	gs[65] = Location_PutIn_Logic.gs_dodongos_before_king;
	gs[66] = Location_PutIn_Logic.gs_jabu_vines;
	gs[67] = Location_PutIn_Logic.gs_jabu_near_octo1;
	gs[68] = Location_PutIn_Logic.gs_jabu_near_octo2;
	gs[69] = Location_PutIn_Logic.gs_jabu_near_boss;
	gs[70] = Location_PutIn_Logic.gs_forest_first;
	gs[71] = Location_PutIn_Logic.gs_forest_lobby;
	gs[72] = Location_PutIn_Logic.gs_forest_outdoor_east;
	gs[73] = Location_PutIn_Logic.gs_forest_outdoor_west;
	gs[74] = Location_PutIn_Logic.gs_forest_basement;
	gs[75] = Location_PutIn_Logic.gs_fire_time;
	gs[76] = Location_PutIn_Logic.gs_fire_bomb_wall;
	gs[77] = Location_PutIn_Logic.gs_fire_scarecrow1;
	gs[78] = Location_PutIn_Logic.gs_fire_scarecrow2;
	gs[79] = Location_PutIn_Logic.gs_fire_basement;
	gs[80] = Location_PutIn_Logic.gs_water_south_basement;
	gs[81] = Location_PutIn_Logic.gs_water_river;
	gs[82] = Location_PutIn_Logic.gs_water_central;
	gs[83] = Location_PutIn_Logic.gs_water_near_boss_key;
	gs[84] = Location_PutIn_Logic.gs_water_platform_room;
	gs[85] = Location_PutIn_Logic.gs_spirit_metal_fence;
	gs[86] = Location_PutIn_Logic.gs_spirit_before_child_knuckle;
	gs[87] = Location_PutIn_Logic.gs_spirit_boulder_room;
	gs[88] = Location_PutIn_Logic.gs_spirit_temple_lobby;
	gs[89] = Location_PutIn_Logic.gs_spirit_bomb_for_light_room;
	gs[90] = Location_PutIn_Logic.gs_shadow_like_like;
	gs[91] = Location_PutIn_Logic.gs_shadow_crusher;
	gs[92] = Location_PutIn_Logic.gs_shadow_giant_pot;
	gs[93] = Location_PutIn_Logic.gs_shadow_near_boat;
	gs[94] = Location_PutIn_Logic.gs_shadow_three_pots;
	gs[95] = Location_PutIn_Logic.gs_well_west_inner;
	gs[96] = Location_PutIn_Logic.gs_well_east_inner;
	gs[97] = Location_PutIn_Logic.gs_well_like_like;
	gs[98] = Location_PutIn_Logic.gs_ice_spinning_scythe;
	gs[99] = Location_PutIn_Logic.gs_ice_hp_room;
	gs[100] = Location_PutIn_Logic.gs_ice_block_room;

	PutIn_Logic.gold_skulltulas = 0;
	var i;
	for (i = 1; i<=100; i++) {
		if (gs[i] == true) {PutIn_Logic.gold_skulltulas +=1;};
	}
	}
	temp = 6;

	var temp = 0;
	
	for (var i = 0; i < Locations.length; i++) {
		if (Location_Logic[Locations[i]] && !Location_PutIn_Logic[Locations[i]]) {tempArray.push(Locations[i]);}
	}
	return tempArray;
	
}