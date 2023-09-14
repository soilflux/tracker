function checksLockedByItem(item) {
	var l = Locations.length;
	for (var i = 0; i < l; i++) {Location_Locked_Logic2[Locations[i]] = false;}
	
	var tempArray = [];
	var temp = 8;
	while (temp > 0) {
    temp -= 1;
		
	if(Known.kokiri_sword == true) {Locked_Logic2.kokiri_sword = Location_Locked_Logic2[Location.kokiri_sword];} else{Locked_Logic2.kokiri_sword = true;} if (item == "kokiri_sword") {Locked_Logic2.kokiri_sword = false;}
	
	if(Known.farores_wind == true) {Locked_Logic2.farores_wind = Location_Locked_Logic2[Location.farores_wind];} else {Locked_Logic2.farores_wind = true;} if(item == "farores_wind") {Locked_Logic2.farores_wind = false;} 
	 
	if(Known.slingshot1 == true) {Locked_Logic2.slingshot1 = Location_Locked_Logic2[Location.slingshot1];} else {Locked_Logic2.slingshot1 = true;} if(item == "slingshot1") {Locked_Logic2.slingshot1 = false;} 
	if(Known.slingshot2 == true) {Locked_Logic2.slingshot2 = Location_Locked_Logic2[Location.slingshot2];} else {Locked_Logic2.slingshot2 = true;} if(item == "slingshot2") {Locked_Logic2.slingshot2 = false;} 
	if(Known.slingshot3 == true) {Locked_Logic2.slingshot3 = Location_Locked_Logic2[Location.slingshot3];} else {Locked_Logic2.slingshot3 = true;} if(item == "slingshot3") {Locked_Logic2.slingshot3 = false;} 
	Locked_Logic2.slingshot = Locked_Logic2.slingshot1 || Locked_Logic2.slingshot2 || Locked_Logic2.slingshot3; 
	 
	if(Known.boomerang == true) {Locked_Logic2.boomerang = Location_Locked_Logic2[Location.boomerang];} else {Locked_Logic2.boomerang = true;} if(item == "boomerang") {Locked_Logic2.boomerang = false;} 
	
	if(Known.rutos_letter == true) {Locked_Logic2.rutos_letter = Location_Locked_Logic2[Location.rutos_letter];} else {Locked_Logic2.rutos_letter = true;} if(item == "rutos_letter") {Locked_Logic2.rutos_letter = false;} 
	if(Known.bottle1 == true) {Locked_Logic2.bottle1 = Location_Locked_Logic2[Location.bottle1];} else {Locked_Logic2.bottle1 = true;} if(item == "bottle1") {Locked_Logic2.bottle1 = false;} 
	if(Known.bottle2 == true) {Locked_Logic2.bottle2 = Location_Locked_Logic2[Location.bottle2];} else {Locked_Logic2.bottle2 = true;} if(item == "bottle2") {Locked_Logic2.bottle2 = false;} 
	if(Known.bottle3 == true) {Locked_Logic2.bottle3 = Location_Locked_Logic2[Location.bottle3];} else {Locked_Logic2.bottle3 = true;} if(item == "bottle3") {Locked_Logic2.bottle3 = false;} 
	Locked_Logic2.bottle = (Locked_Logic2.rutos_letter && ((Locked_Logic2.bomb_bag && Locked_Logic2.lullaby) || Locked_Logic2.silver_scale)) || Locked_Logic2.bottle1 || Locked_Logic2.bottle2 || Locked_Logic2.bottle3;
	
	if(Known.scale1 == true) {Locked_Logic2.scale1 = Location_Locked_Logic2[Location.scale1]; } else {Locked_Logic2.scale1 = true;} if(item == "scale1") {Locked_Logic2.scale1 = false;}  
	if(Known.scale2 == true) {Locked_Logic2.scale2 = Location_Locked_Logic2[Location.scale2]; } else {Locked_Logic2.scale2 = true;} if(item == "scale2") {Locked_Logic2.scale2 = false;} 
	Locked_Logic2.silver_scale = Locked_Logic2.scale1 || Locked_Logic2.scale2; 
	Locked_Logic2.golden_scale = Locked_Logic2.scale1 && Locked_Logic2.scale2; 
	if(Known.bomb_bag1 == true) {Locked_Logic2.bomb_bag1 = Location_Locked_Logic2[Location.bomb_bag1];} else {Locked_Logic2.bomb_bag1 = true;} if(item == "bomb_bag1") {Locked_Logic2.bomb_bag1 = false;} 
	if(Known.bomb_bag2 == true) {Locked_Logic2.bomb_bag2 = Location_Locked_Logic2[Location.bomb_bag2];} else {Locked_Logic2.bomb_bag2 = true;} if(item == "bomb_bag2") {Locked_Logic2.bomb_bag2 = false;} 
	if(Known.bomb_bag3 == true) {Locked_Logic2.bomb_bag3 = Location_Locked_Logic2[Location.bomb_bag3];} else {Locked_Logic2.bomb_bag3 = true;} if(item == "bomb_bag3") {Locked_Logic2.bomb_bag3 = false;} 
	Locked_Logic2.bomb_bag = Locked_Logic2.bomb_bag1 || Locked_Logic2.bomb_bag2 || Locked_Logic2.bomb_bag3;
	
	if(Known.hammer == true) {Locked_Logic2.hammer = Location_Locked_Logic2[Location.hammer];} else {Locked_Logic2.hammer = true;} if(item == "hammer") {Locked_Logic2.hammer = false;} 
	 
	if(Known.bow1 == true) {Locked_Logic2.bow1 = Location_Locked_Logic2[Location.bow1];} else {Locked_Logic2.bow1 = true;} if(item == "bow1") {Locked_Logic2.bow1 = false;} 
	if(Known.bow2 == true) {Locked_Logic2.bow2 = Location_Locked_Logic2[Location.bow2];} else {Locked_Logic2.bow2 = true;} if(item == "bow2") {Locked_Logic2.bow2 = false;} 
	if(Known.bow3 == true) {Locked_Logic2.bow3 = Location_Locked_Logic2[Location.bow3];} else {Locked_Logic2.bow3 = true;} if(item == "bow3") {Locked_Logic2.bow3 = false;} 
	Locked_Logic2.bow = Locked_Logic2.bow1 || Locked_Logic2.bow2 || Locked_Logic2.bow3;
	
	if(Known.hookshot1 == true) {Locked_Logic2.hookshot1 = Location_Locked_Logic2[Location.hookshot1];} else {Locked_Logic2.hookshot1 = true;} if(item == "hookshot1") {Locked_Logic2.hookshot1 = false;} 
	if(Known.hookshot2 == true) {Locked_Logic2.hookshot2 = Location_Locked_Logic2[Location.hookshot2];} else {Locked_Logic2.hookshot2 = true;} if(item == "hookshot2") {Locked_Logic2.hookshot2 = false;} 
	Locked_Logic2.hookshot = Locked_Logic2.hookshot1 || Locked_Logic2.hookshot2;
	Locked_Logic2.longshot = Locked_Logic2.hookshot1 && Locked_Logic2.hookshot2;
	
	if(Known.strength1 == true) {Locked_Logic2.strength1 = Location_Locked_Logic2[Location.strength1];} else {Locked_Logic2.strength1 = true;} if(item == "strength1") {Locked_Logic2.strength1 = false;} 
	if(Known.strength2 == true) {Locked_Logic2.strength2 = Location_Locked_Logic2[Location.strength2];} else {Locked_Logic2.strength2 = true;} if(item == "strength2") {Locked_Logic2.strength2 = false;} 
	if(Known.strength3 == true) {Locked_Logic2.strength3 = Location_Locked_Logic2[Location.strength3];} else {Locked_Logic2.strength3 = true;} if(item == "strength3") {Locked_Logic2.strength3 = false;} 
	Locked_Logic2.goron_bracelet = Locked_Logic2.strength1 || Locked_Logic2.strength2 || Locked_Logic2.strength3;
	Locked_Logic2.silver_gauntlets = (Locked_Logic2.strength1 && Locked_Logic2.strength2) || (Locked_Logic2.strength1 && Locked_Logic2.strength3) || (Locked_Logic2.strength2 && Locked_Logic2.strength3);
	Locked_Logic2.golden_gauntlets = Locked_Logic2.strength1 && Locked_Logic2.strength2 && Locked_Logic2.strength3;
	
	if(Known.mirror_shield == true) {Locked_Logic2.mirror_shield = Location_Locked_Logic2[Location.mirror_shield];} else {Locked_Logic2.mirror_shield = true;} if(item == "mirror_shield") {Locked_Logic2.mirror_shield = false;}   
	
	if(Known.big_poe == true) {Locked_Logic2.big_poe = Location_Locked_Logic2[Location.big_poe];} else {Locked_Logic2.big_poe = true;} if(item == "big_poe") {Locked_Logic2.big_poe = false;}  
	
	if(Known.iron_boots == true) {Locked_Logic2.iron_boots = Location_Locked_Logic2[Location.iron_boots];} else {Locked_Logic2.iron_boots = true;} if(item == "iron_boots") {Locked_Logic2.iron_boots = false;} 
	if(Known.hover_boots == true) {Locked_Logic2.hover_boots = Location_Locked_Logic2[Location.hover_boots];} else {Locked_Logic2.hover_boots = true;} if(item == "hover_boots") {Locked_Logic2.hover_boots = false;} 
	
	if(Known.magic1 == true) {Locked_Logic2.magic1 = Location_Locked_Logic2[Location.magic1];} else {Locked_Logic2.magic1 = true;} if(item == "magic1") {Locked_Logic2.magic1 = false;} 
	if(Known.magic2 == true) {Locked_Logic2.magic2 = Location_Locked_Logic2[Location.magic2];} else {Locked_Logic2.magic2 = true;} if(item == "magic2") {Locked_Logic2.magic2 = false;} 
	Locked_Logic2.magic = Locked_Logic2.magic1 || Locked_Logic2.magic2; 
	
	if(Known.dins_fire == true) {Locked_Logic2.dins_fire = Location_Locked_Logic2[Location.dins_fire];} else {Locked_Logic2.dins_fire = true;} if(item == "dins_fire") {Locked_Logic2.dins_fire = false;} 
	if(Known.fire_arrows == true) {Locked_Logic2.fire_arrows = Location_Locked_Logic2[Location.fire_arrows];} else {Locked_Logic2.fire_arrows = true;} if(item == "fire_arrows") {Locked_Logic2.fire_arrows = false;} 
	
	if(Known.wallet1 == true) {Locked_Logic2.wallet1 = Location_Locked_Logic2[Location.wallet1];} else {Locked_Logic2.wallet1 = true;} if(item == "wallet1") {Locked_Logic2.wallet1 = false;}  
	if(Known.wallet2 == true) {Locked_Logic2.wallet2 = Location_Locked_Logic2[Location.wallet2];} else {Locked_Logic2.wallet2 = true;} if(item == "wallet2") {Locked_Logic2.wallet2 = false;} 
	Locked_Logic2.adults_wallet = Locked_Logic2.wallet1 || Locked_Logic2.wallet2; 
	Locked_Logic2.giants_wallet = Locked_Logic2.wallet1 && Locked_Logic2.wallet2; 
	
	if(Known.goron_tunic == true) {Locked_Logic2.goron_tunic = Location_Locked_Logic2[Location.goron_tunic];}  else {Locked_Logic2.goron_tunic = true;} if(item == "goron_tunic") {Locked_Logic2.goron_tunic = false;} 
	if(Known.zora_tunic == true) {Locked_Logic2.zora_tunic = Location_Locked_Logic2[Location.zora_tunic];} else {Locked_Logic2.zora_tunic = true;}  if(item == "zora_tunic") {Locked_Logic2.zora_tunic = false;} 
	if(Known.lens == true) {Locked_Logic2.lens = Location_Locked_Logic2[Location.lens];} else {Locked_Logic2.lens = true;} if(item == "lens") {Locked_Logic2.lens = false;} 
	if(Known.prescription == true) {Locked_Logic2.prescription = Location_Locked_Logic2[Location.prescription];} else if (Known.claim_check == true) {Locked_Logic2.prescription = false;} else {Locked_Logic2.prescription = true;} if(item == "prescription") {Locked_Logic2.prescription = false;} 
	if(Known.claim_check == true) {Locked_Logic2.claim_check = Location_Locked_Logic2[Location.claim_check];} else if (Known.prescription == true) {Locked_Logic2.claim_check = false;} else {Locked_Logic2.claim_check = true;} if(item == "claim_check") {Locked_Logic2.claim_check = false;} 
	
	if(Known.light_arrows == true) {Locked_Logic2.light_arrows = Location_Locked_Logic2[Location.light_arrows];} else {Locked_Logic2.light_arrows = true;} if(item == "light_arrows") {Locked_Logic2.light_arrows = false;} 
	if(Known.lullaby == true) {Locked_Logic2.lullaby = Location_Locked_Logic2[Location.lullaby]; } else {Locked_Logic2.lullaby = true;} if(item == "lullaby") {Locked_Logic2.lullaby = false;} 
	if(Known.eponas == true) {Locked_Logic2.eponas = Location_Locked_Logic2[Location.eponas]; } else {Locked_Logic2.eponas = true;} if(item == "eponas") {Locked_Logic2.eponas = false;}  
	if(Known.sarias == true) {Locked_Logic2.sarias = Location_Locked_Logic2[Location.sarias]; } else {Locked_Logic2.sarias = true;} if(item == "sarias") {Locked_Logic2.sarias = false;} 
	if(Known.suns == true) {Locked_Logic2.suns = Location_Locked_Logic2[Location.suns]; } else {Locked_Logic2.suns = true;} if(item == "suns") {Locked_Logic2.suns = false;} 
	if(Known.time == true) {Locked_Logic2.time = Location_Locked_Logic2[Location.time]; } else {Locked_Logic2.time = true;} if(item == "time") {Locked_Logic2.time = false;} 
	if(Known.storms == true) {Locked_Logic2.storms = Location_Locked_Logic2[Location.storms]; } else {Locked_Logic2.storms = true;} if(item == "storms") {Locked_Logic2.storms = false;} 
	if(Known.minuet == true) {Locked_Logic2.minuet = Location_Locked_Logic2[Location.minuet]; } else {Locked_Logic2.minuet = true;} if(item == "minuet") {Locked_Logic2.minuet = false;} 
	if(Known.bolero == true) {Locked_Logic2.bolero = Location_Locked_Logic2[Location.bolero]; } else {Locked_Logic2.bolero = true;} if(item == "bolero") {Locked_Logic2.bolero = false;} 
	if(Known.serenade == true) {Locked_Logic2.serenade = Location_Locked_Logic2[Location.serenade]; }  
	if(Known.requiem == true) {Locked_Logic2.requiem = Location_Locked_Logic2[Location.requiem]; } else {Locked_Logic2.requiem = true;} if(item == "requiem") {Locked_Logic2.requiem = false;} 
	if(Known.nocturne == true) {Locked_Logic2.nocturne = Location_Locked_Logic2[Location.nocturne]; } else {Locked_Logic2.nocturne = true;} if(item == "nocturne") {Locked_Logic2.nocturne = false;}  
	if(Known.prelude == true) {Locked_Logic2.prelude = Location_Locked_Logic2[Location.prelude]; }  
	
	Locked_Logic2.child_can_enter_river = Locked_Logic2.bomb_bag || Locked_Logic2.silver_scale || Spawn.child_zd || Spawn.child_zr;
	Locked_Logic2.child_can_enter_domain = (Locked_Logic2.child_can_enter_river && Locked_Logic2.lullaby) || Locked_Logic2.silver_scale || Spawn.child_zd;
	Locked_Logic2.can_enter_jabu = Locked_Logic2.rutos_letter && Locked_Logic2.child_can_enter_domain && (Locked_Logic2.boomerang || Locked_Logic2.bomb_bag || Locked_Logic2.slingshot);
	Locked_Logic2.fortress_access = Locked_Logic2.eponas || Locked_Logic2.longshot || Spawn.adult_gf || (Spawn.child_gv_gf && Locked_Logic2.kokiri_sword);
	Locked_Logic2.can_save_carpenters = (Spawn.child_gv_gf && Locked_Logic2.kokiri_sword) || (Locked_Logic2.fortress_access && ((Locked_Logic2.bow || Locked_Logic2.hookshot || Locked_Logic2.hover_boots) || true)) /*fast carpenter fix**/;
	Locked_Logic2.can_cross_quicksand = Locked_Logic2.fortress_access && (Locked_Logic2.longshot || Locked_Logic2.hover_boots);
	Locked_Logic2.can_enter_colossus = (Locked_Logic2.can_cross_quicksand && (Locked_Logic2.brackets || Locked_Logic2.can_see)) || Locked_Logic2.requiem;
	Locked_Logic2.can_use_fire = (Locked_Logic2.dins_fire || (Locked_Logic2.bow && Locked_Logic2.fire_arrows)) && Locked_Logic2.magic;
	Locked_Logic2.can_use_dins = Locked_Logic2.dins_fire && Locked_Logic2.magic;
	Locked_Logic2.can_use_farores = Locked_Logic2.farores_wind && Locked_Logic2.magic;
	Locked_Logic2.can_see = Locked_Logic2.lens && Locked_Logic2.magic;
	Locked_Logic2.can_blast_or_smash = Locked_Logic2.bomb_bag || Locked_Logic2.hammer;
	Locked_Logic2.can_enter_dodongos = Locked_Logic2.can_blast_or_smash || Locked_Logic2.goron_bracelet;
	Locked_Logic2.dodongos_climb = Locked_Logic2.can_enter_dodongos && (Locked_Logic2.bomb_bag || Locked_Logic2.goron_bracelet || Locked_Logic2.can_use_dins);
	Locked_Logic2.can_enter_shadow = (Locked_Logic2.nocturne || Spawn.adult_nocturne) && Locked_Logic2.can_use_dins && (Locked_Logic2.hover_boots || Locked_Logic2.hookshot) ;//&& Locked_Logic2.can_see;
	Locked_Logic2.can_cross_shadow_gap= Locked_Logic2.can_enter_shadow && Locked_Logic2.hover_boots;
	Locked_Logic2.can_bomb_shadow_wall = Locked_Logic2.can_cross_shadow_gap && Locked_Logic2.bomb_bag;
	Locked_Logic2.can_pass_shadow_hookshot_door = Locked_Logic2.can_bomb_shadow_wall && Locked_Logic2.hookshot;
	Locked_Logic2.can_ride_shadow_boat = Locked_Logic2.can_pass_shadow_hookshot_door && Locked_Logic2.lullaby;
	Locked_Logic2.can_beat_shadow_boss = Locked_Logic2.can_ride_shadow_boat && (Locked_Logic2.bow || Locked_Logic2.longshot);
	Locked_Logic2.can_stop_link_the_goron = Locked_Logic2.bomb_bag || Locked_Logic2.bow || Locked_Logic2.goron_bracelet;
	Locked_Logic2.ice_access = Locked_Logic2.rutos_letter && (Locked_Logic2.lullaby || Spawn.adult_zd) && Locked_Logic2.child_can_enter_river;
	Locked_Logic2.reverse_crater = (Locked_Logic2.hover_boots || Locked_Logic2.hookshot || Locked_Logic2.child_can_enter_river) && Locked_Logic2.bolero;
	Locked_Logic2.can_enter_fire_temple = (Locked_Logic2.crater_by_city && (Locked_Logic2.hookshot || Locked_Logic2.hover_boots)) || Locked_Logic2.bolero
	Locked_Logic2.crater_by_city = Locked_Logic2.bow || Locked_Logic2.bomb_bag || Locked_Logic2.goron_bracelet || Locked_Logic2.reverse_crater ||((Locked_Logic2.hammer || Spawn.adult_upper_dmc) && Locked_Logic2.hover_boots) || (Locked_Logic2.longshot && Locked_Logic2.goron_tunic && (Locked_Logic2.hammer || Spawn.adult_upper_dmc)) || Spawn.adult_lower_dmc;
	Locked_Logic2.crater_top = Locked_Logic2.crater_by_city || Locked_Logic2.hammer || Spawn.adult_upper_dmc;
	Locked_Logic2.can_enter_adult_spirit = Locked_Logic2.can_enter_colossus && Locked_Logic2.silver_gauntlets;
	Locked_Logic2.can_pass_mido_as_adult = Locked_Logic2.minuet || Locked_Logic2.sarias || Spawn.adult_meadow;
	
	Locked_Logic2.medalCount = 0; if (Locked_Logic2.forest_medallion) {Locked_Logic2.medalCount += 1;} if (Locked_Logic2.fire_medallion) {Locked_Logic2.medalCount += 1;} if (Locked_Logic2.water_medallion) {Locked_Logic2.medalCount += 1;} if (Locked_Logic2.gen1) {Locked_Logic2.medalCount += 1;} if (Locked_Logic2.gen2) {Locked_Logic2.medalCount += 1;} if (Locked_Logic2.gen3) {Locked_Logic2.medalCount += 1;}
	Locked_Logic2.stoneCount = 0; if (Locked_Logic2.kokiri_emerald) {Locked_Logic2.stoneCount += 1;} if (Locked_Logic2.goron_ruby) {Locked_Logic2.stoneCount += 1;} if (Locked_Logic2.zora_sapphire) {Locked_Logic2.stoneCount += 1;}
	Locked_Logic2.can_enter_ganons = (Locked_Logic2.forest_medallion && Locked_Logic2.fire_medallion && Locked_Logic2.water_medallion && Locked_Logic2.gen1 && Locked_Logic2.gen2 && Locked_Logic2.gen3) || document.getElementById("ganonsBridge").value == "OPEN" || (document.getElementById("ganonsBridge").value == "3_MEDALS" && Locked_Logic2.medalCount >= 3) || (document.getElementById("ganonsBridge").value == "2_MEDALS" && Locked_Logic2.medalCount >= 2) || (document.getElementById("ganonsBridge").value == "3_STONES" && Locked_Logic2.stoneCount == 3)
	
	Locked_Logic2.can_climb_fire_temple = Locked_Logic2.can_enter_fire_temple && Locked_Logic2.fire_keys >=3 && Locked_Logic2.can_wear_goron_tunic && Locked_Logic2.goron_bracelet && (Locked_Logic2.bow || Locked_Logic2.hookshot || Locked_Logic2.bomb_bag);
	Locked_Logic2.can_enter_water = Locked_Logic2.hookshot && Locked_Logic2.iron_boots;
	Locked_Logic2.middle_water = Locked_Logic2.can_enter_water && Locked_Logic2.lullaby && (Locked_Logic2.bow || Locked_Logic2.can_use_dins);
	Locked_Logic2.projectile_both = Locked_Logic2.bomb_bag || ((Locked_Logic2.slingshot || Locked_Logic2.boomerang) && (Locked_Logic2.bow || Locked_Logic2.hookshot));
	Locked_Logic2.projectile_child = Locked_Logic2.bomb_bag || Locked_Logic2.slingshot || Locked_Logic2.boomerang;
	Locked_Logic2.projectile_adult = Locked_Logic2.bomb_bag || Locked_Logic2.bow || Locked_Logic2.hookshot;
	Locked_Logic2.can_wear_goron_tunic = Locked_Logic2.goron_tunic || (Locked_Logic2.adults_wallet && (Locked_Logic2.bomb_bag || Locked_Logic2.goron_bracelet || Locked_Logic2.bow || Spawn.adult_gc_shop));
	Locked_Logic2.can_wear_zora_tunic = Locked_Logic2.zora_tunic || (Locked_Logic2.giants_wallet && (((Locked_Logic2.lullaby || Spawn.adult_zd) && Locked_Logic2.bottle) || Spawn.adult_zd_shop));
	if (document.getElementById("closedDeku").value != "CLOSED") {Locked_Logic2.deku_access = true;} else {Locked_Logic2.deku_access = Locked_Logic2.kokiri_sword;}
	
	var max = 0;
	for (h = 1; h<3; h++) {
		max = 0;
		Locked_Logic2.current_forest_keys = Locked_Logic2.forced_forest_keys;
		for (i = AreaIndexes[26]; i < AreaIndexes[27]; i++) {
			if (Check[Locations[i]] == "small_key" && !Location_Locked_Logic2[Locations[i]]) {Locked_Logic2.current_forest_keys -=1;}
			if ((Check[Locations[i]] == "small_key" || Check[Locations[i]] == "unknown" || Check[Locations[i]] == "ultra") && Location_Locked_Logic2[Locations[i]]) {max += 1;}
		}
		Locked_Logic2.forest_keys = Math.min(Locked_Logic2.current_forest_keys, max);
		Location_Locked_Logic2.forest_first = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot;
		Location_Locked_Logic2.forest_stalfos = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot;
		Location_Locked_Logic2.forest_midCourtyard = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot && (Locked_Logic2.time || Locked_Logic2.bow || (Locked_Logic2.hover_boots && Locked_Logic2.forest_keys>=1));
		Location_Locked_Logic2.forest_highCourtyard = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot && (Locked_Logic2.time || (Locked_Logic2.hover_boots && Locked_Logic2.forest_keys>=1) || (Locked_Logic2.bow/* && (Locked_Logic2.iron_boots || Locked_Logic2.golden_scale || Locked_Logic2.longshot)*/));
		Location_Locked_Logic2.forest_lowCourtyard = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot && (Locked_Logic2.time || (Locked_Logic2.hover_boots && Locked_Logic2.forest_keys>=1) || (Locked_Logic2.bow/* && (Locked_Logic2.iron_boots || Locked_Logic2.golden_scale || Locked_Logic2.longshot)*/));
		Location_Locked_Logic2.forest_blockRoom = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot && Locked_Logic2.forest_keys >= 1 && Locked_Logic2.bow && Locked_Logic2.goron_bracelet;
		Location_Locked_Logic2.forest_bossKey = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot && Locked_Logic2.forest_keys >= 2 && Locked_Logic2.bow && Locked_Logic2.goron_bracelet;
		Location_Locked_Logic2.forest_floormaster = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot && ((Locked_Logic2.bow && Locked_Logic2.goron_bracelet && Locked_Logic2.forest_keys >=2) || (Locked_Logic2.hover_boots && Locked_Logic2.forest_keys >=1));
		Location_Locked_Logic2.forest_red = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot && Locked_Logic2.goron_bracelet && Locked_Logic2.bow && Locked_Logic2.forest_keys>=3;
		Location_Locked_Logic2.forest_bow = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot && Locked_Logic2.goron_bracelet && Locked_Logic2.forest_keys>=3;
		Location_Locked_Logic2.forest_blue = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot && Locked_Logic2.goron_bracelet && Locked_Logic2.bow && Locked_Logic2.forest_keys>=3;
		Location_Locked_Logic2.forest_fallingCeiling = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot && Locked_Logic2.goron_bracelet && (Locked_Logic2.bow || Locked_Logic2.can_use_dins) && Locked_Logic2.forest_keys>=5;
		Location_Locked_Logic2.forest_nearBoss = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot && Locked_Logic2.goron_bracelet && Locked_Logic2.bow && Locked_Logic2.forest_keys>=5;
		Location_Locked_Logic2.forest_phantomGanon = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot && Locked_Logic2.goron_bracelet && Locked_Logic2.bow && Locked_Logic2.forest_keys>=5 && Locked_Logic2.forest_boss_key;		
		Location_Locked_Logic2.gs_forest_first = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot;
		Location_Locked_Logic2.gs_forest_lobby = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot;
		Location_Locked_Logic2.gs_forest_outdoor_east = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot && ((Locked_Logic2.bow || Locked_Logic2.time) || (Locked_Logic2.forest_keys >= 1 && Locked_Logic2.hover_boots));
		Location_Locked_Logic2.gs_forest_outdoor_west = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hookshot && (((Locked_Logic2.bow || Locked_Logic2.time) && Locked_Logic2.longshot) || (Locked_Logic2.forest_keys >= 1 && Locked_Logic2.hover_boots) || (Locked_Logic2.forest_keys >= 2 && Locked_Logic2.goron_bracelet && Locked_Logic2.bow))
		Location_Locked_Logic2.gs_forest_basement = Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.bow && Locked_Logic2.goron_bracelet && Locked_Logic2.forest_keys >= 5;
	}

	for (h = 1; h<3; h++) {
		max = 0;
		Locked_Logic2.current_fire_keys = Locked_Logic2.forced_fire_keys;
		for (i = AreaIndexes[27]; i < AreaIndexes[28]; i++) {
			if (Check[Locations[i]] == "small_key" && !Location_Locked_Logic2[Locations[i]]) {Locked_Logic2.current_fire_keys -=1;}
			if ((Check[Locations[i]] == "small_key" || Check[Locations[i]] == "unknown" || Check[Locations[i]] == "ultra") && Location_Locked_Logic2[Locations[i]]) {max += 1;}
		}
		Locked_Logic2.fire_keys = Math.min(Locked_Logic2.current_fire_keys, max);
		
		Location_Locked_Logic2.fire_nearBoss = Locked_Logic2.can_enter_fire_temple;
		Location_Locked_Logic2.fire_hammer1 = Locked_Logic2.can_enter_fire_temple && Locked_Logic2.hammer;
		Location_Locked_Logic2.fire_hammer2 = Locked_Logic2.can_enter_fire_temple && Locked_Logic2.hammer;
		Location_Locked_Logic2.fire_lavaOpen = Locked_Logic2.can_enter_fire_temple && Locked_Logic2.fire_keys >=1;
		Location_Locked_Logic2.fire_lavaBomb = Locked_Logic2.can_enter_fire_temple && Locked_Logic2.fire_keys >=1 && Locked_Logic2.bomb_bag;
		Location_Locked_Logic2.fire_volvagia = Locked_Logic2.can_enter_fire_temple && Locked_Logic2.fire_boss_key && Locked_Logic2.hammer && Locked_Logic2.can_wear_goron_tunic && (Locked_Logic2.hover_boots || (Locked_Logic2.fire_keys >=7 && (Locked_Logic2.time || Locked_Logic2.bomb_bag)));
		Location_Locked_Logic2.fire_lowerMaze = Locked_Logic2.can_climb_fire_temple;
		Location_Locked_Logic2.fire_sideRoom = Locked_Logic2.can_climb_fire_temple;
		Location_Locked_Logic2.fire_map = Locked_Logic2.can_climb_fire_temple && ((Locked_Logic2.fire_keys >= 4 && Locked_Logic2.bow) || Locked_Logic2.fire_keys>=5);
		Location_Locked_Logic2.fire_upperMaze = Locked_Logic2.can_climb_fire_temple && Locked_Logic2.fire_keys>=5;
		Location_Locked_Logic2.fire_shortcut = Locked_Logic2.can_climb_fire_temple && Locked_Logic2.fire_keys>=5 && Locked_Logic2.bomb_bag;
		Location_Locked_Logic2.fire_scarecrow = Locked_Logic2.can_climb_fire_temple && Locked_Logic2.fire_keys>=5 && Locked_Logic2.hookshot;
		Location_Locked_Logic2.fire_compass = Locked_Logic2.can_climb_fire_temple && Locked_Logic2.fire_keys>=6;
		Location_Locked_Logic2.fire_sotGoron = Locked_Logic2.can_climb_fire_temple && (Locked_Logic2.fire_keys>=7 || (Locked_Logic2.fire_keys>=6 && Locked_Logic2.hover_boots)) && Locked_Logic2.hammer && (Locked_Logic2.time || Locked_Logic2.bomb_bag);
		Location_Locked_Logic2.fire_top = Locked_Logic2.can_climb_fire_temple && (Locked_Logic2.fire_keys>=7 || (Locked_Logic2.fire_keys >= 6 && Locked_Logic2.hover_boots)) && Locked_Logic2.bomb_bag;
	}

	for (h = 1; h<3; h++) {
		max = 0;
		Locked_Logic2.current_water_keys = Locked_Logic2.forced_water_keys;
		for (i = AreaIndexes[28]; i < AreaIndexes[29]; i++) {
			if (Check[Locations[i]] == "small_key" && !Location_Locked_Logic2[Locations[i]]) {Locked_Logic2.current_water_keys -=1;}
			if ((Check[Locations[i]] == "small_key" || Check[Locations[i]] == "unknown" || Check[Locations[i]] == "ultra") && Location_Locked_Logic2[Locations[i]]) {max += 1;}
		}
		Locked_Logic2.water_keys = Math.min(Locked_Logic2.current_water_keys, max);

		Location_Locked_Logic2.water_compass = Locked_Logic2.can_enter_water;
		Location_Locked_Logic2.water_map = Locked_Logic2.can_enter_water;
		Location_Locked_Logic2.water_cracked = Locked_Logic2.middle_water && Locked_Logic2.bomb_bag;
		Location_Locked_Logic2.water_torches = Locked_Logic2.can_enter_water && Locked_Logic2.lullaby && (Locked_Logic2.bow || Locked_Logic2.can_use_dins);
		Location_Locked_Logic2.water_block = Locked_Logic2.can_enter_water && Locked_Logic2.lullaby && Locked_Logic2.bow && Locked_Logic2.goron_bracelet && (Locked_Logic2.hover_boots || Locked_Logic2.longshot);
		Location_Locked_Logic2.water_pillar = Locked_Logic2.middle_water && Locked_Logic2.can_wear_zora_tunic;
		Location_Locked_Logic2.water_dLink = Locked_Logic2.water_keys >= 5 && Locked_Logic2.lullaby;
		Location_Locked_Logic2.water_river = Locked_Logic2.water_keys >= 5 && Locked_Logic2.lullaby && Locked_Logic2.time && Locked_Logic2.bow;
		Location_Locked_Logic2.water_dragon = Locked_Logic2.can_enter_water && Locked_Logic2.lullaby && ((Locked_Logic2.water_keys >= 5 && Locked_Logic2.time && Locked_Logic2.bow) || Locked_Logic2.goron_bracelet);
		Location_Locked_Logic2.water_bossKey = Locked_Logic2.can_enter_water && Locked_Logic2.lullaby && Locked_Logic2.longshot && Locked_Logic2.water_keys >= 5 && ((Locked_Logic2.bomb_bag && Locked_Logic2.goron_bracelet) || Locked_Logic2.hover_boots);
		Location_Locked_Logic2.water_morpha = Locked_Logic2.can_enter_water && Locked_Logic2.water_boss_key && Locked_Logic2.longshot ;
	}
	for (h = 1; h<3; h++) {
		max = 0;
		Locked_Logic2.current_spirit_keys = Locked_Logic2.forced_spirit_keys;
		for (i = AreaIndexes[29]; i < AreaIndexes[30]; i++) {
			if (Check[Locations[i]] == "small_key" && !Location_Locked_Logic2[Locations[i]]) {Locked_Logic2.current_spirit_keys -=1;}
			if ((Check[Locations[i]] == "small_key" || Check[Locations[i]] == "unknown" || Check[Locations[i]] == "ultra") && Location_Locked_Logic2[Locations[i]]) {max += 1;}
		}
		Locked_Logic2.spirit_keys = Math.min(Locked_Logic2.current_spirit_keys, max);

		Location_Locked_Logic2.spirit_childLeft = Locked_Logic2.requiem && (Locked_Logic2.slingshot || Locked_Logic2.boomerang);
		Location_Locked_Logic2.spirit_childRight = Locked_Logic2.requiem && (Locked_Logic2.slingshot || Locked_Logic2.boomerang);
		Location_Locked_Logic2.spirit_childClimb1 = (Locked_Logic2.spirit_keys >=1 && Locked_Logic2.projectile_both);
		Location_Locked_Logic2.spirit_childClimb2 = (Locked_Logic2.spirit_keys >=1 && Locked_Logic2.projectile_both);
		Location_Locked_Logic2.spirit_map = (Locked_Logic2.spirit_keys >=5 && Locked_Logic2.requiem && Locked_Logic2.bomb_bag) || (Locked_Logic2.spirit_keys >=3 && Locked_Logic2.silver_gauntlets && Locked_Logic2.can_use_fire) || (Locked_Logic2.bomb_bag && Locked_Logic2.spirit_keys >=1 && Locked_Logic2.can_use_fire);
		Location_Locked_Logic2.spirit_sunRoom = (Locked_Logic2.spirit_keys >=5 && Locked_Logic2.requiem && Locked_Logic2.bomb_bag) || (Locked_Logic2.spirit_keys >=3 && Locked_Logic2.silver_gauntlets && Locked_Logic2.can_use_fire) || (Locked_Logic2.bomb_bag && Locked_Logic2.spirit_keys >=1 && Locked_Logic2.can_use_fire);
		Location_Locked_Logic2.spirit_rightHand = (Locked_Logic2.spirit_keys >=3 && Locked_Logic2.longshot && Locked_Logic2.bomb_bag) || Locked_Logic2.spirit_keys >= 5;
		Location_Locked_Logic2.spirit_adultLeft = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.hookshot && Locked_Logic2.lullaby;
		Location_Locked_Logic2.spirit_adultRight = Locked_Logic2.can_enter_adult_spirit && (Locked_Logic2.bow || Locked_Logic2.hookshot || Locked_Logic2.bomb_bag);
		Location_Locked_Logic2.spirit_rotatingMirror1 = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=3;
		Location_Locked_Logic2.spirit_rotatingMirror2 = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=3;
		Location_Locked_Logic2.spirit_lullabyHand = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=3 && Locked_Logic2.lullaby;
		Location_Locked_Logic2.spirit_lullabyHigh = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=3 && Locked_Logic2.lullaby && (Locked_Logic2.hookshot || Locked_Logic2.hover_boots);
		Location_Locked_Logic2.spirit_nearFourArmos = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=4 && Locked_Logic2.bomb_bag && Locked_Logic2.mirror_shield;
		Location_Locked_Logic2.spirit_invisible1 = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=4 && Locked_Logic2.bomb_bag ;//&& Locked_Logic2.can_see;
		Location_Locked_Logic2.spirit_invisible2 = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=4 && Locked_Logic2.bomb_bag ;//&& Locked_Logic2.can_see;
		Location_Locked_Logic2.spirit_leftHand = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=4 && Locked_Logic2.bomb_bag;
		Location_Locked_Logic2.spirit_bossKey = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=5 && Locked_Logic2.bow && Locked_Logic2.lullaby && Locked_Logic2.hookshot;
		Location_Locked_Logic2.spirit_tippyTop = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=5 && Locked_Logic2.mirror_shield;
		Location_Locked_Logic2.spirit_twinrova = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=5 && Locked_Logic2.mirror_shield && Locked_Logic2.bomb_bag && Locked_Logic2.spirit_boss_key && Locked_Logic2.hookshot;
	}
	for (h = 1; h<3; h++) {
		max = 0;
		Locked_Logic2.current_shadow_keys = Locked_Logic2.forced_shadow_keys;
		for (i = AreaIndexes[30]; i < AreaIndexes[31]; i++) {
			if (Check[Locations[i]] == "small_key" && !Location_Locked_Logic2[Locations[i]]) {Locked_Logic2.current_shadow_keys -=1;}
			if ((Check[Locations[i]] == "small_key" || Check[Locations[i]] == "unknown" || Check[Locations[i]] == "ultra") && Location_Locked_Logic2[Locations[i]]) {max += 1;}
		}
		Locked_Logic2.shadow_keys = Math.min(Locked_Logic2.current_shadow_keys, max);

		Location_Locked_Logic2.shadow_map = Locked_Logic2.can_enter_shadow;
		Location_Locked_Logic2.shadow_hovers = Locked_Logic2.can_enter_shadow;
		Location_Locked_Logic2.shadow_compass = Locked_Logic2.can_cross_shadow_gap;
		Location_Locked_Logic2.shadow_earlySilvers = Locked_Logic2.can_cross_shadow_gap;
		Location_Locked_Logic2.shadow_spinning1 = Locked_Logic2.can_bomb_shadow_wall;
		Location_Locked_Logic2.shadow_spinning2 = Locked_Logic2.can_bomb_shadow_wall;
		Location_Locked_Logic2.shadow_spikesLower = Locked_Logic2.can_bomb_shadow_wall;
		Location_Locked_Logic2.shadow_spikesUpper = Locked_Logic2.can_bomb_shadow_wall && Locked_Logic2.goron_bracelet;
		Location_Locked_Logic2.shadow_spikesSwitch = Locked_Logic2.can_bomb_shadow_wall && Locked_Logic2.goron_bracelet;
		Location_Locked_Logic2.shadow_redeadSilvers = Locked_Logic2.can_bomb_shadow_wall && Locked_Logic2.shadow_keys >=2;
		Location_Locked_Logic2.shadow_pot = Locked_Logic2.can_bomb_shadow_wall && Locked_Logic2.hookshot && Locked_Logic2.shadow_keys >=2;
		Location_Locked_Logic2.shadow_wind = Locked_Logic2.can_pass_shadow_hookshot_door && Locked_Logic2.shadow_keys >=3;
		Location_Locked_Logic2.shadow_bombable = Locked_Logic2.can_pass_shadow_hookshot_door && Locked_Logic2.shadow_keys >=3;
		Location_Locked_Logic2.shadow_gibdos = Locked_Logic2.can_pass_shadow_hookshot_door && Locked_Logic2.shadow_keys >=3;
		Location_Locked_Logic2.shadow_dins1 = Locked_Logic2.can_ride_shadow_boat && Locked_Logic2.shadow_keys >=4;
		Location_Locked_Logic2.shadow_dins2 = Locked_Logic2.can_ride_shadow_boat && Locked_Logic2.shadow_keys >=4;
		Location_Locked_Logic2.shadow_floormaster = Locked_Logic2.can_ride_shadow_boat && Locked_Logic2.shadow_keys >=4;
		Location_Locked_Logic2.shadow_bongo = Locked_Logic2.can_beat_shadow_boss && Locked_Logic2.shadow_keys >=5;
	}
	max = 0;
	Locked_Logic2.current_ganons_keys = Locked_Logic2.forced_ganons_keys;
	
	for (i = AreaIndexes[31]; i < AreaIndexes[32]; i++) {
		if (Check[Locations[i]] == "small_key" && !Location_Locked_Logic2[Locations[i]]) {Locked_Logic2.current_ganons_keys -=1;}
		if ((Check[Locations[i]] == "small_key" || Check[Locations[i]] == "unknown" || Check[Locations[i]] == "ultra") && Location_Locked_Logic2[Locations[i]]) {max += 1;}
	}
	Locked_Logic2.ganons_keys = Math.min(Locked_Logic2.current_ganons_keys, max);
	for (h = 1; h <= 3; h++) {
		max = 0;
		Locked_Logic2.current_gtg_keys = Locked_Logic2.forced_gtg_keys;
		for (i = AreaIndexes[32]; i < AreaIndexes[33]; i++) {
			if (Check[Locations[i]] == "small_key" && !Location_Locked_Logic2[Locations[i]]) {Locked_Logic2.current_gtg_keys -=1;}
			if ((Check[Locations[i]] == "small_key" || Check[Locations[i]] == "unknown" || Check[Locations[i]] == "ultra") && Location_Locked_Logic2[Locations[i]]) {max += 1;}
		}
		Locked_Logic2.gtg_keys = Math.min(Locked_Logic2.current_gtg_keys, max);

		Location_Locked_Logic2.gtg_lobbyLeft = Locked_Logic2.can_save_carpenters && Locked_Logic2.bow;
		Location_Locked_Logic2.gtg_lobbyRight = Locked_Logic2.can_save_carpenters && Locked_Logic2.bow;
		Location_Locked_Logic2.gtg_stalfos = Locked_Logic2.can_save_carpenters;
		Location_Locked_Logic2.gtg_wolfos = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot;
		Location_Locked_Logic2.gtg_silvers1 = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot && Locked_Logic2.silver_gauntlets ;//&& Locked_Logic2.can_see ;
		Location_Locked_Logic2.gtg_silvers2 = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot && Locked_Logic2.silver_gauntlets ;//&& Locked_Logic2.can_see ;
		Location_Locked_Logic2.gtg_silvers3 = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot && Locked_Logic2.silver_gauntlets ;//&& Locked_Logic2.can_see ;
		Location_Locked_Logic2.gtg_silvers4 = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot && Locked_Logic2.silver_gauntlets ;//&& Locked_Logic2.can_see ;
		Location_Locked_Logic2.gtg_eyes = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot && Locked_Logic2.bow;  //((Locked_Logic2.bomb_bag || Locked_Logic2.gtg_keys == 9) && Locked_Logic2.hammer));
		Location_Locked_Logic2.gtg_aboveEyes = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot && Locked_Logic2.bow ;//&& Locked_Logic2.can_see;
		Location_Locked_Logic2.gtg_keese = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot/*&& Locked_Logic2.can_see*/;
		Location_Locked_Logic2.gtg_flamesChest = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot && Locked_Logic2.hammer;// && (Locked_Logic2.can_see || (Locked_Logic2.bomb_bag || Locked_Logic2.gtg_keys == 9)) ;
		Location_Locked_Logic2.gtg_freestanding = Locked_Logic2.can_save_carpenters && (Locked_Logic2.gtg_keys >= 9 || (Locked_Logic2.bomb_bag && Locked_Logic2.time) || (Locked_Logic2.hookshot /*&& Locked_Logic2.can_see*/ && Locked_Logic2.time));
		Location_Locked_Logic2.gtg_right2 = Locked_Logic2.can_save_carpenters && (Locked_Logic2.gtg_keys >= 9 || (Locked_Logic2.bomb_bag && Locked_Logic2.time) || (Locked_Logic2.hookshot /*&& Locked_Logic2.can_see*/ && Locked_Logic2.time));
		Location_Locked_Logic2.gtg_right3 = Locked_Logic2.can_save_carpenters && (Locked_Logic2.gtg_keys >= 9 || (Locked_Logic2.bomb_bag && Locked_Logic2.time) || (Locked_Logic2.hookshot /*&& Locked_Logic2.can_see*/ && Locked_Logic2.time));
		Location_Locked_Logic2.gtg_beamos = Locked_Logic2.can_save_carpenters && Locked_Logic2.bomb_bag;
		Location_Locked_Logic2.gtg_left1 = Locked_Logic2.can_save_carpenters && Locked_Logic2.gtg_keys >= 3 ;//&& Locked_Logic2.can_see;
		Location_Locked_Logic2.gtg_left2 = Locked_Logic2.can_save_carpenters && Locked_Logic2.gtg_keys >= 4;
		Location_Locked_Logic2.gtg_left3 = Locked_Logic2.can_save_carpenters && Locked_Logic2.gtg_keys >= 6;
		Location_Locked_Logic2.gtg_left4 = Locked_Logic2.can_save_carpenters && Locked_Logic2.gtg_keys >= 7;
		Location_Locked_Logic2.gtg_final = Locked_Logic2.can_save_carpenters && Locked_Logic2.gtg_keys >= 9;
		Location_Locked_Logic2.gtg_toilet = Locked_Logic2.can_save_carpenters && Locked_Logic2.iron_boots && Locked_Logic2.time && Locked_Logic2.hookshot /*&& Locked_Logic2.can_see*/;
	}
	for (h = 1; h <= 3; h++) {
		max = 0;
		Locked_Logic2.current_well_keys = Locked_Logic2.forced_well_keys;
		for (i = AreaIndexes[33]; i < AreaIndexes[34]; i++) {
			if (Check[Locations[i]] == "small_key" && !Location_Locked_Logic2[Locations[i]]) {Locked_Logic2.current_well_keys -=1;}
			if ((Check[Locations[i]] == "small_key" || Check[Locations[i]] == "unknown" || Check[Locations[i]] == "ultra") && Location_Locked_Logic2[Locations[i]]) {max += 1;}
		}
		Locked_Logic2.well_keys = Math.min(Locked_Logic2.current_well_keys, max);

		Location_Locked_Logic2.well_fakeRight = Locked_Logic2.storms ;//&& Locked_Logic2.can_see;
		Location_Locked_Logic2.well_centerSmall = Locked_Logic2.storms ;//&& Locked_Logic2.can_see;
		Location_Locked_Logic2.well_backBombable = Locked_Logic2.storms && Locked_Logic2.bomb_bag;
		Location_Locked_Logic2.well_waterLeft = Locked_Logic2.storms && Locked_Logic2.lullaby;
		Location_Locked_Logic2.well_coffin = Locked_Logic2.storms;
		Location_Locked_Logic2.well_centerBig = Locked_Logic2.storms ;//&& Locked_Logic2.can_see;
		Location_Locked_Logic2.well_fakeLeft = Locked_Logic2.storms ;//&& Locked_Logic2.can_see;
		Location_Locked_Logic2.well_frontBombable = Locked_Logic2.storms && Locked_Logic2.bomb_bag;
		Location_Locked_Logic2.well_waterFront = Locked_Logic2.storms && Locked_Logic2.lullaby;
		Location_Locked_Logic2.well_deadHand = Locked_Logic2.storms && Locked_Logic2.lullaby ;//&& Locked_Logic2.kokiri_sword;
		Location_Locked_Logic2.well_invisible = Locked_Logic2.storms && Locked_Logic2.lullaby ;//&& Locked_Logic2.can_see ;
		Location_Locked_Logic2.well_locked1 = Locked_Logic2.storms && Locked_Logic2.well_keys >= 3 ;//&& Locked_Logic2.can_see ;
		Location_Locked_Logic2.well_locked2 = Locked_Logic2.storms && Locked_Logic2.well_keys >= 3 ;//&& Locked_Logic2.can_see ;
		Location_Locked_Logic2.well_basement = Locked_Logic2.storms && (Locked_Logic2.bomb_bag || (((/*Locked_Logic2.can_see &&*/ Locked_Logic2.well_keys >= 3) || Locked_Logic2.can_use_dins) && Locked_Logic2.goron_bracelet));
	}
	Locked_Logic2.forest_boss_key = false;
	Locked_Logic2.fire_boss_key = false;
	Locked_Logic2.water_boss_key = false;
	Locked_Logic2.shadow_boss_key = false;
	Locked_Logic2.spirit_boss_key = false;
	if (!Locked_Logic2.forest_boss_key) {
		var bk = false;
		for (i = AreaIndexes[26]; i < AreaIndexes[27]; i++) {
			if (Locations[i] == "forest_phantomGanon") {
				continue;
			}
			if (Location_Locked_Logic2[Locations[i]] && (Check[Locations[i]] == "boss_key" || Check[Locations[i]] == "unknown" || Check[Locations[i]] == "ultra")) {
				bk = true;
				break;
			}
		}
		Locked_Logic2.forest_boss_key = bk;
	}
	if (!Locked_Logic2.fire_boss_key) {
		var bk = false;
		for (i = AreaIndexes[27]; i < AreaIndexes[28]; i++) {
			if (Locations[i] == "fire_volvagia") {
				continue;
			}
			if (Location_Locked_Logic2[Locations[i]] && (Check[Locations[i]] == "boss_key" || Check[Locations[i]] == "unknown" || Check[Locations[i]] == "ultra")) {
				bk = true;
				break;
			}
		}
		Locked_Logic2.fire_boss_key = bk;
	}
	if (!Locked_Logic2.water_boss_key) {
		var bk = false;
		for (i = AreaIndexes[28]; i < AreaIndexes[29]; i++) {
			if (Locations[i] == "water_morpha") {
				continue;
			}
			if (Location_Locked_Logic2[Locations[i]] && (Check[Locations[i]] == "boss_key" || Check[Locations[i]] == "unknown" || Check[Locations[i]] == "ultra")) {
				bk = true;
				break;
			}
		}
		Locked_Logic2.water_boss_key = bk;
	}
	if (!Locked_Logic2.spirit_boss_key) {
		var bk = false;
		for (i = AreaIndexes[29]; i < AreaIndexes[30]; i++) {
			if (Locations[i] == "spirit_twinrova") {
				continue;
			}
			if (Location_Locked_Logic2[Locations[i]] && (Check[Locations[i]] == "boss_key" || Check[Locations[i]] == "unknown" || Check[Locations[i]] == "ultra")) {
				bk = true;
				break;
			}
		}
		Locked_Logic2.spirit_boss_key = bk;
	}
	if (!Locked_Logic2.shadow_boss_key) {
		var bk = false;
		for (i = AreaIndexes[30]; i < AreaIndexes[31]; i++) {
			if (Locations[i] == "shadow_bongo") {
				continue;
			}
			if (Location_Locked_Logic2[Locations[i]] && (Check[Locations[i]] == "boss_key" || Check[Locations[i]] == "unknown" || Check[Locations[i]] == "ultra")) {
				bk = false;
				break;
			}
		}
		Locked_Logic2.shadow_boss_key = bk;
	}
/*	Locked_Logic2.forest_boss_key = Locked_Logic2.forced_forest_boss_key;
	Locked_Logic2.fire_boss_key = Locked_Logic2.forced_fire_boss_key;
	Locked_Logic2.water_boss_key = Locked_Logic2.forced_water_boss_key;
	Locked_Logic2.spirit_boss_key = Locked_Logic2.forced_spirit_boss_key;
	Locked_Logic2.shadow_boss_key = Locked_Logic2.forced_shadow_boss_key; */
	if(Player.forest_boss_key == true && Location.forest_boss_key != null) {Locked_Logic2.forest_boss_key = Location_Locked_Logic2[Location.forest_boss_key]; }
	if(Player.fire_boss_key == true && Location.fire_boss_key != null) {Locked_Logic2.fire_boss_key = Location_Locked_Logic2[Location.fire_boss_key]; }
	if(Player.water_boss_key == true && Location.water_boss_key != null) {Locked_Logic2.water_boss_key = Location_Locked_Logic2[Location.water_boss_key]; }
	if(Player.spirit_boss_key == true && Location.spirit_boss_key != null) {Locked_Logic2.spirit_boss_key = Location_Locked_Logic2[Location.spirit_boss_key]; }
	if(Player.shadow_boss_key == true && Location.shadow_boss_key != null) {Locked_Logic2.shadow_boss_key = Location_Locked_Logic2[Location.shadow_boss_key]; }
	Locked_Logic2.forest_medallion = true;
	Locked_Logic2.fire_medallion = true;
	Locked_Logic2.water_medallion = true;
	Locked_Logic2.gen1 = true;
	Locked_Logic2.gen2 = true;
	Locked_Logic2.gen3 = true;
	
	if(Logic.forest_medallion_location == "deku") {if (Check.deku_queen_gohma != "unknown") {Player.forest = true;} Locked_Logic2.forest_medallion = Location_Locked_Logic2.deku_queen_gohma;}
	if(Logic.forest_medallion_location == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Player.forest = true;} Locked_Logic2.forest_medallion = Location_Locked_Logic2.dodongos_king_dodongo;}
	if(Logic.forest_medallion_location == "jabu") {if (Check.jabu_barinade != "unknown") {Player.forest = true;} Locked_Logic2.forest_medallion = Location_Locked_Logic2.jabu_barinade;}
	if(Logic.forest_medallion_location == "forest") {if (Check.forest_phantomGanon != "unknown") {Player.forest = true;} Locked_Logic2.forest_medallion = Location_Locked_Logic2.forest_phantomGanon;}
	if(Logic.forest_medallion_location == "fire") {if (Check.fire_volvagia != "unknown") {Player.forest = true;} Locked_Logic2.forest_medallion = Location_Locked_Logic2.fire_volvagia;}
	if(Logic.forest_medallion_location == "water") {if (Check.water_morpha != "unknown") {Player.forest = true;} Locked_Logic2.forest_medallion = Location_Locked_Logic2.water_morpha;}
	if(Logic.forest_medallion_location == "spirit") {if (Check.spirit_twinrova != "unknown") {Player.forest = true;} Locked_Logic2.forest_medallion = Location_Locked_Logic2.spirit_twinrova;}
	if(Logic.forest_medallion_location == "shadow") {if (Check.shadow_bongo != "unknown") {Player.forest = true;} Locked_Logic2.forest_medallion = Location_Locked_Logic2.shadow_bongo;}
	if(Logic.forest_medallion_location == "pocket") {Player.forest = true; Locked_Logic2.forest_medallion = true;}
	
	if(Logic.fire_medallion_location == "deku") {if (Check.deku_queen_gohma != "unknown") {Player.fire = true;} Locked_Logic2.fire_medallion = Location_Locked_Logic2.deku_queen_gohma;}
	if(Logic.fire_medallion_location == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Player.fire = true;} Locked_Logic2.fire_medallion = Location_Locked_Logic2.dodongos_king_dodongo;}
	if(Logic.fire_medallion_location == "jabu") {if (Check.jabu_barinade != "unknown") {Player.fire = true;} Locked_Logic2.fire_medallion = Location_Locked_Logic2.jabu_barinade;}
	if(Logic.fire_medallion_location == "forest") {if (Check.forest_phantomGanon != "unknown") {Player.fire = true;} Locked_Logic2.fire_medallion = Location_Locked_Logic2.forest_phantomGanon;}
	if(Logic.fire_medallion_location == "fire") {if (Check.fire_volvagia != "unknown") {Player.fire = true;} Locked_Logic2.fire_medallion = Location_Locked_Logic2.fire_volvagia;}
	if(Logic.fire_medallion_location == "water") {if (Check.water_morpha != "unknown") {Player.fire = true;} Locked_Logic2.fire_medallion = Location_Locked_Logic2.water_morpha;}
	if(Logic.fire_medallion_location == "spirit") {if (Check.spirit_twinrova != "unknown") {Player.fire = true;} Locked_Logic2.fire_medallion = Location_Locked_Logic2.spirit_twinrova;}
	if(Logic.fire_medallion_location == "shadow") {if (Check.shadow_bongo != "unknown") {Player.fire = true;} Locked_Logic2.fire_medallion = Location_Locked_Logic2.shadow_bongo;}
	if(Logic.fire_medallion_location == "pocket") {Player.fire = true; Locked_Logic2.fire_medallion = true;}
	
	if(Logic.water_medallion_location == "deku") {if (Check.deku_queen_gohma != "unknown") {Player.water = true;} Locked_Logic2.water_medallion = Location_Locked_Logic2.deku_queen_gohma;}
	if(Logic.water_medallion_location == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Player.water = true;} Locked_Logic2.water_medallion = Location_Locked_Logic2.dodongos_king_dodongo;}
	if(Logic.water_medallion_location == "jabu") {if (Check.jabu_barinade != "unknown") {Player.water = true;} Locked_Logic2.water_medallion = Location_Locked_Logic2.jabu_barinade;}
	if(Logic.water_medallion_location == "forest") {if (Check.forest_phantomGanon != "unknown") {Player.water = true;} Locked_Logic2.water_medallion = Location_Locked_Logic2.forest_phantomGanon;}
	if(Logic.water_medallion_location == "fire") {if (Check.fire_volvagia != "unknown") {Player.water = true;} Locked_Logic2.water_medallion = Location_Locked_Logic2.fire_volvagia;}
	if(Logic.water_medallion_location == "water") {if (Check.water_morpha != "unknown") {Player.water = true;} Locked_Logic2.water_medallion = Location_Locked_Logic2.water_morpha;}
	if(Logic.water_medallion_location == "spirit") {if (Check.spirit_twinrova != "unknown") {Player.water = true;} Locked_Logic2.water_medallion = Location_Locked_Logic2.spirit_twinrova;}
	if(Logic.water_medallion_location == "shadow") {if (Check.shadow_bongo != "unknown") {Player.water = true;} Locked_Logic2.water_medallion = Location_Locked_Logic2.shadow_bongo;}
	if(Logic.water_medallion_location == "pocket") {Player.water = true; Locked_Logic2.water_medallion = true;}

	Locked_Logic2.shadow_medallion = true;
	Locked_Logic2.spirit_medallion = true;
	for (var i = 1; i <=3; i++) {
		str = "generic" + i;
		str2 = "gen" + i;
		if(Logic[str] == "deku") {if (Check.deku_queen_gohma != "unknown") {Player[str2] = true;} Locked_Logic2[str2] = Location_Locked_Logic2.deku_queen_gohma; if(document.getElementById("text_" + dekuPlacement).style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = Location_Locked_Logic2.deku_queen_gohma;} if(document.getElementById("text_" + dekuPlacement).style.color=="rgb(255, 165, 0)") {Locked_Logic2.spirit_medallion = Location_Locked_Logic2.deku_queen_gohma;}}
		if(Logic[str] == "dodongos") {if (Check.dodongos_king_dodongo != "unknown") {Player[str2] = true;} Locked_Logic2[str2] = Location_Locked_Logic2.dodongos_king_dodongo; if(document.getElementById("text_" + dodongosPlacement).style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = Location_Locked_Logic2.dodongos_king_dodongo;} if(document.getElementById("text_" + dodongosPlacement).style.color=="rgb(255, 165, 0)") {Locked_Logic2.spirit_medallion = Location_Locked_Logic2.dodongos_king_dodongo;}}
		if(Logic[str] == "jabu") {if (Check.jabu_barinade != "unknown") {Player[str2] = true;} Locked_Logic2[str2] = Location_Locked_Logic2.jabu_barinade; if(document.getElementById("text_" + jabuPlacement).style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = Location_Locked_Logic2.jabu_barinade;} if(document.getElementById("text_" + jabuPlacement).style.color=="rgb(255, 165, 0)") {Locked_Logic2.spirit_medallion = Location_Locked_Logic2.jabu_barinade;}}
		if(Logic[str] == "forest") {if (Check.forest_phantomGanon != "unknown") {Player[str2] = true;} Locked_Logic2[str2] = Location_Locked_Logic2.forest_phantomGanon; if(document.getElementById("text_" + forestPlacement).style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = Location_Locked_Logic2.forest_phantomGanon;} if(document.getElementById("text_" + forestPlacement).style.color=="rgb(255, 165, 0)") {Location_Locked_Logic2.forest_phantomGanon;}}
		if(Logic[str] == "fire") {if (Check.fire_volvagia != "unknown") {Player[str2] = true;} Locked_Logic2[str2] = Location_Locked_Logic2.fire_volvagia; if(document.getElementById("text_" + firePlacement).style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = Location_Locked_Logic2.fire_volvagia;} if(document.getElementById("text_" + firePlacement).style.color=="rgb(255, 165, 0)") {Locked_Logic2.spirit_medallion = Location_Locked_Logic2.fire_volvagia;}}
		if(Logic[str] == "water") {if (Check.water_morpha != "unknown") {Player[str2] = true;} Locked_Logic2[str2] = Location_Locked_Logic2.water_morpha; if(document.getElementById("text_" + waterPlacement).style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = Location_Locked_Logic2.water_morpha;} if(document.getElementById("text_" + waterPlacement).style.color=="rgb(255, 165, 0)") {Locked_Logic2.spirit_medallion = Location_Locked_Logic2.water_morpha;}}
		if(Logic[str] == "spirit") {if (Check.spirit_twinrova != "unknown") {Player[str2] = true;} Locked_Logic2[str2] = Location_Locked_Logic2.spirit_twinrova; if(document.getElementById("text_" + spiritPlacement).style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = Location_Locked_Logic2.spirit_twinrova;} if(document.getElementById("text_" + spiritPlacement).style.color=="rgb(255, 165, 0)") {Locked_Logic2.spirit_medallion = Location_Locked_Logic2.spirit_twinrova;}}
		if(Logic[str] == "shadow") {if (Check.shadow_bongo != "unknown") {Player[str2] = true;} Locked_Logic2[str2] = Location_Locked_Logic2.shadow_bongo; if(document.getElementById("text_" + shadowPlacement).style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = Location_Locked_Logic2.shadow_bongo;} if(document.getElementById("text_" + shadowPlacement).style.color=="rgb(255, 165, 0)") {Locked_Logic2.spirit_medallion = Location_Locked_Logic2.shadow_bongo;}}
		if(Logic[str] == "pocket") {Player[str2] = true; Locked_Logic2[str2] = true; if(document.getElementById("text_" + pocketPlacement).style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = true;} if(document.getElementById("text_" + pocketPlacement).style.color=="rgb(255, 165, 0)") {Locked_Logic2.spirit_medallion = true;}}
	}
	
	Locked_Logic2.kokiri_emerald = true;
	Locked_Logic2.goron_ruby = true;
	Locked_Logic2.zora_sapphire = true;
	if(Logic.emerald == "deku") {Locked_Logic2.kokiri_emerald = Location_Locked_Logic2.deku_queen_gohma;}
	if(Logic.emerald == "dodongos") {Locked_Logic2.kokiri_emerald = Location_Locked_Logic2.dodongos_king_dodongo;}
	if(Logic.emerald == "jabu") {Locked_Logic2.kokiri_emerald = Location_Locked_Logic2.jabu_barinade;}
	if(Logic.emerald == "forest") {Locked_Logic2.kokiri_emerald = Location_Locked_Logic2.forest_phantomGanon;}
	if(Logic.emerald == "fire") {Locked_Logic2.kokiri_emerald = Location_Locked_Logic2.fire_volvagia;}
	if(Logic.emerald == "water") {Locked_Logic2.kokiri_emerald = Location_Locked_Logic2.water_morpha;}
	if(Logic.emerald == "spirit") {Locked_Logic2.kokiri_emerald = Location_Locked_Logic2.spirit_twinrova;}
	if(Logic.emerald == "shadow") {Locked_Logic2.kokiri_emerald = Location_Locked_Logic2.shadow_bongo;}
	if(Logic.emerald == "pocket") {Locked_Logic2.kokiri_emerald = true;}
	
	if(Logic.ruby == "deku") {Locked_Logic2.goron_ruby = Location_Locked_Logic2.deku_queen_gohma;}
	if(Logic.ruby == "dodongos") {Locked_Logic2.goron_ruby = Location_Locked_Logic2.dodongos_king_dodongo;}
	if(Logic.ruby == "jabu") {Locked_Logic2.goron_ruby = Location_Locked_Logic2.jabu_barinade;}
	if(Logic.ruby == "forest") {Locked_Logic2.goron_ruby = Location_Locked_Logic2.forest_phantomGanon;}
	if(Logic.ruby == "fire") {Locked_Logic2.goron_ruby = Location_Locked_Logic2.fire_volvagia;}
	if(Logic.ruby == "water") {Locked_Logic2.goron_ruby = Location_Locked_Logic2.water_morpha;}
	if(Logic.ruby == "spirit") {Locked_Logic2.goron_ruby = Location_Locked_Logic2.spirit_twinrova;}
	if(Logic.ruby == "shadow") {Locked_Logic2.goron_ruby = Location_Locked_Logic2.shadow_bongo;}
	if(Logic.ruby == "pocket") {Locked_Logic2.goron_ruby = true;}
	
	if(Logic.sapphire == "deku") {Locked_Logic2.zora_sapphire = Location_Locked_Logic2.deku_queen_gohma;}
	if(Logic.sapphire == "dodongos") {Locked_Logic2.zora_sapphire = Location_Locked_Logic2.dodongos_king_dodongo;}
	if(Logic.sapphire == "jabu") {Locked_Logic2.zora_sapphire = Location_Locked_Logic2.jabu_barinade;}
	if(Logic.sapphire == "forest") {Locked_Logic2.zora_sapphire = Location_Locked_Logic2.forest_phantomGanon;}
	if(Logic.sapphire == "fire") {Locked_Logic2.zora_sapphire = Location_Locked_Logic2.fire_volvagia;}
	if(Logic.sapphire == "water") {Locked_Logic2.zora_sapphire = Location_Locked_Logic2.water_morpha;}
	if(Logic.sapphire == "spirit") {Locked_Logic2.zora_sapphire = Location_Locked_Logic2.spirit_twinrova;}
	if(Logic.sapphire == "shadow") {Locked_Logic2.zora_sapphire = Location_Locked_Logic2.shadow_bongo;}
	if(Logic.sapphire == "pocket") {Locked_Logic2.zora_sapphire = true;}

	
	Location_Locked_Logic2.mido_1 = true;
	Location_Locked_Logic2.mido_2 = true;
	Location_Locked_Logic2.mido_3 = true;
	Location_Locked_Logic2.mido_4 = true;
	Location_Locked_Logic2.kokiri_sword = true;
	Location_Locked_Logic2.kokiri_storms = Locked_Logic2.storms;
	Location_Locked_Logic2.talons_chickens = true;
	Location_Locked_Logic2.back_of_ranch = true;
	Location_Locked_Logic2.hyrule_remoteGrotto = Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.hyrule_openGrotto = true;
	Location_Locked_Logic2.hyrule_hp_scrub = Locked_Logic2.can_blast_or_smash;;
	Location_Locked_Logic2.hyrule_marketGrotto = Locked_Logic2.can_blast_or_smash;;
	Location_Locked_Logic2.hyrule_tektite_grotto = Locked_Logic2.can_blast_or_smash && (Locked_Logic2.golden_scale || Locked_Logic2.iron_boots);
	Location_Locked_Logic2.hyrule_ocarina	= Locked_Logic2.kokiri_emerald && Locked_Logic2.goron_ruby && Locked_Logic2.zora_sapphire;
	Location_Locked_Logic2.gerudovalley_box = true;
	Location_Locked_Logic2.gerudovalley_fall = true;
	Location_Locked_Logic2.gerudo_hammer = Locked_Logic2.fortress_access && Locked_Logic2.hammer;
	Location_Locked_Logic2.hylia_child_fishing = true;
	Location_Locked_Logic2.hylia_bottle = Locked_Logic2.silver_scale;
	Location_Locked_Logic2.hylia_adult_fishing = Locked_Logic2.hookshot || Locked_Logic2.child_can_enter_river || Spawn.adult_fishing;
	Location_Locked_Logic2.hylia_lab_top = Locked_Logic2.hookshot || Locked_Logic2.child_can_enter_river;
	Location_Locked_Logic2.hylia_lab_dive = Locked_Logic2.golden_scale;
	Location_Locked_Logic2.hylia_sun_shoot = Locked_Logic2.longshot && Locked_Logic2.bow;
	Location_Locked_Logic2.market_slingshot_game = true;
	Location_Locked_Logic2.richard = true;
	Location_Locked_Logic2.market_bowling_1 = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.market_bowling_2 = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.market_lens_game = Locked_Logic2.can_see;
	Location_Locked_Logic2.poes= (Locked_Logic2.bow && Locked_Logic2.eponas && Locked_Logic2.bottle) || Locked_Logic2.big_poe;
	Location_Locked_Logic2.dins_fairy = (Locked_Logic2.bomb_bag || Spawn.child_hyrule_fairy) && Locked_Logic2.lullaby;
	Location_Locked_Logic2.g_fairy = (Locked_Logic2.golden_gauntlets || Spawn.adult_ogc) && Locked_Logic2.lullaby;
	Location_Locked_Logic2.lacs = Locked_Logic2.shadow_medallion && Locked_Logic2.spirit_medallion;
	Location_Locked_Logic2.fountain_fairy = Locked_Logic2.ice_access && Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.ice_glacier_hp = Locked_Logic2.ice_access;
	Location_Locked_Logic2.ice_bottom_of_fountain = Locked_Logic2.ice_access && Locked_Logic2.iron_boots;
	Location_Locked_Logic2.ice_map = Locked_Logic2.ice_access;
	Location_Locked_Logic2.ice_compass = Locked_Logic2.ice_access;
	Location_Locked_Logic2.ice_hp = Locked_Logic2.ice_access;
	Location_Locked_Logic2.ice_irons = Locked_Logic2.ice_access;
	Location_Locked_Logic2.deku_lobby = Locked_Logic2.deku_access;
	Location_Locked_Logic2.deku_slingshot = Locked_Logic2.deku_access;
	Location_Locked_Logic2.deku_slingshot_room_side = Locked_Logic2.deku_access;
	Location_Locked_Logic2.deku_compass = Locked_Logic2.deku_access;
	Location_Locked_Logic2.deku_compass_room_side = Locked_Logic2.deku_access;
	Location_Locked_Logic2.deku_basement = Locked_Logic2.deku_access;
	Location_Locked_Logic2.deku_queen_gohma = Locked_Logic2.deku_access && Locked_Logic2.slingshot;
	Location_Locked_Logic2.lost_woods_fairy_ocarina = true;
	Location_Locked_Logic2.ocarina_game = true;
	Location_Locked_Logic2.lw_generic = Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.lost_woods_scrub_grotto = Locked_Logic2.bomb_bag || Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hammer;
	Location_Locked_Logic2.bridge_scrub = true;
	Location_Locked_Logic2.target = Locked_Logic2.slingshot;
	Location_Locked_Logic2.skull_kid = Locked_Logic2.sarias;
	Location_Locked_Logic2.theater = true;
	Location_Locked_Logic2.wolfos_grotto = Locked_Logic2.bomb_bag || Locked_Logic2.can_pass_mido_as_adult && Locked_Logic2.hammer;
	Location_Locked_Logic2.rolling_goron = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.goron_dance = (Locked_Logic2.lullaby || Spawn.child_lower_dmc) && Locked_Logic2.sarias;
	Location_Locked_Logic2.goron_pot = Locked_Logic2.bomb_bag && (Locked_Logic2.lullaby || Locked_Logic2.can_use_dins || Spawn.child_lower_dmc);
	Location_Locked_Logic2.goron_maze_1 = Locked_Logic2.can_blast_or_smash || Locked_Logic2.silver_gauntlets;
	Location_Locked_Logic2.goron_maze_2 = Locked_Logic2.can_blast_or_smash || Locked_Logic2.silver_gauntlets;
	Location_Locked_Logic2.goron_maze_3 = Locked_Logic2.hammer || Locked_Logic2.silver_gauntlets;
	Location_Locked_Logic2.goron_link = Locked_Logic2.can_stop_link_the_goron;
	Location_Locked_Logic2.dodongos_map = Locked_Logic2.can_enter_dodongos;
	Location_Locked_Logic2.dodongos_compass = Locked_Logic2.can_enter_dodongos;
	Location_Locked_Logic2.dodongos_bomb_flower_platform = Locked_Logic2.dodongos_climb;
	Location_Locked_Logic2.dodongos_bomb_bag = Locked_Logic2.dodongos_climb;
	Location_Locked_Logic2.dodongos_end_of_bridge = Locked_Logic2.dodongos_climb && Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.dodongos_above_king = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.dodongos_king_dodongo = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.trail_bombable = Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.trail_dodongos_top = true;
	Location_Locked_Logic2.trail_storms = Locked_Logic2.storms;
	Location_Locked_Logic2.trail_fairy = (Locked_Logic2.can_blast_or_smash || Spawn.child_dmt_fairy || Spawn.adult_dmt_fairy) && Locked_Logic2.lullaby;
	Location_Locked_Logic2.trade_quest = Location_Locked_Logic2.trade_quest = (((Locked_Logic2.ice_access || ((Locked_Logic2.giants_wallet || Locked_Logic2.can_enter_ganons) && (Locked_Logic2.lullaby || Spawn.adult_zd) && Locked_Logic2.bottle)) && Locked_Logic2.prescription) || Locked_Logic2.claim_check) && Locked_Logic2.crater_top;
	Location_Locked_Logic2.crater_bean = (Locked_Logic2.bolero && Locked_Logic2.child_can_enter_river) || (Locked_Logic2.hover_boots && Locked_Logic2.crater_by_city);
	Location_Locked_Logic2.crater_hammer_fairy = ((Locked_Logic2.crater_by_city && Locked_Logic2.hammer) || Spawn.child_lower_dmc_fairy || Spawn.adult_lower_dmc_fairy) && Locked_Logic2.lullaby;
	Location_Locked_Logic2.crater_grotto = Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.crater_nook_hp = Locked_Logic2.crater_top || Spawn.child_upper_dmc;
	Location_Locked_Logic2.man_on_roof = true;//Locked_Logic2.hookshot;
	Location_Locked_Logic2.kakariko_grotto = true;
	Location_Locked_Logic2.windmill = true;//Locked_Logic2.boomerang || Locked_Logic2.time;
	Location_Locked_Logic2.anju = true;
	Location_Locked_Logic2.cow_house = true;
	Location_Locked_Logic2.archery_game = Locked_Logic2.bow;
	Location_Locked_Logic2.redead_grotto = Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.anjus_chickens = true;
	Location_Locked_Logic2.tokens_10 = Locked_Logic2.gold_skulltulas >= 10;
	Location_Locked_Logic2.tokens_20 = Locked_Logic2.gold_skulltulas >= 20;
	Location_Locked_Logic2.tokens_30 = Locked_Logic2.gold_skulltulas >= 30;
	Location_Locked_Logic2.tokens_40 = Locked_Logic2.gold_skulltulas >= 40;
	Location_Locked_Logic2.tokens_50 = Locked_Logic2.gold_skulltulas >= 50;
	Location_Locked_Logic2.shield_grave = true;
	Location_Locked_Logic2.gravedigging_tour = true;
	Location_Locked_Logic2.redead_grave = Locked_Logic2.suns;
	Location_Locked_Logic2.composers_grave = Locked_Logic2.lullaby && Locked_Logic2.can_use_fire;
	Location_Locked_Logic2.graveyard_box = Locked_Logic2.child_can_enter_river || Locked_Logic2.longshot;
	Location_Locked_Logic2.race_1 = true;
	Location_Locked_Logic2.race_2 = true;
	Location_Locked_Logic2.river_pillar = Locked_Logic2.child_can_enter_river || Locked_Logic2.hover_boots;
	Location_Locked_Logic2.river_grotto = true;
	Location_Locked_Logic2.river_ledge = Locked_Logic2.child_can_enter_river || Locked_Logic2.hover_boots;
	Location_Locked_Logic2.frogs_1 = Locked_Logic2.child_can_enter_river && Locked_Logic2.storms;
	Location_Locked_Logic2.frogs_2 = Locked_Logic2.child_can_enter_river && (Locked_Logic2.storms && Locked_Logic2.lullaby && Locked_Logic2.eponas && Locked_Logic2.sarias && Locked_Logic2.suns && Locked_Logic2.time);
	Location_Locked_Logic2.zora_diving = Locked_Logic2.child_can_enter_domain;
	Location_Locked_Logic2.zora_torches = Locked_Logic2.child_can_enter_domain;
	Location_Locked_Logic2.thaw_king = Locked_Logic2.ice_access || (Locked_Logic2.bottle && (Locked_Logic2.giants_wallet || Locked_Logic2.can_enter_ganons) && (Locked_Logic2.lullaby || Spawn.adult_zd));
	Location_Locked_Logic2.colossus_bean = Locked_Logic2.requiem && Locked_Logic2.child_can_enter_river;
	Location_Locked_Logic2.colossus_fairy = Locked_Logic2.can_enter_colossus && Locked_Logic2.bomb_bag && Locked_Logic2.lullaby;
	Location_Locked_Logic2.wasteland = Locked_Logic2.can_cross_quicksand && Locked_Logic2.can_use_fire;
	Location_Locked_Logic2.gerudo_roof = Locked_Logic2.fortress_access && (Locked_Logic2.hookshot || Locked_Logic2.hover_boots);
	Location_Locked_Logic2.gerudo_archery_1 = Locked_Logic2.eponas && Locked_Logic2.bow;
	Location_Locked_Logic2.gerudo_archery_2 = Locked_Logic2.eponas && Locked_Logic2.bow;
	Location_Locked_Logic2.jabu_boomerang = Locked_Logic2.can_enter_jabu;
	Location_Locked_Logic2.jabu_map = Locked_Logic2.can_enter_jabu && Locked_Logic2.boomerang;
	Location_Locked_Logic2.jabu_compass = Locked_Logic2.can_enter_jabu && Locked_Logic2.boomerang;
	Location_Locked_Logic2.jabu_barinade = Locked_Logic2.can_enter_jabu && Locked_Logic2.boomerang;
	Location_Locked_Logic2.ganons_lightTrial1 = Locked_Logic2.can_enter_ganons && Locked_Logic2.golden_gauntlets;
	Location_Locked_Logic2.ganons_lightTrial2 = Locked_Logic2.can_enter_ganons && Locked_Logic2.golden_gauntlets;
	Location_Locked_Logic2.ganons_lightTrial3 = Locked_Logic2.can_enter_ganons && Locked_Logic2.golden_gauntlets;
	Location_Locked_Logic2.ganons_lightTrial4 = Locked_Logic2.can_enter_ganons && Locked_Logic2.golden_gauntlets;
	Location_Locked_Logic2.ganons_lightTrial5 = Locked_Logic2.can_enter_ganons && Locked_Logic2.golden_gauntlets;
	Location_Locked_Logic2.ganons_lightTrial6 = Locked_Logic2.can_enter_ganons && Locked_Logic2.golden_gauntlets;
	Location_Locked_Logic2.ganons_lightTrial7 = Locked_Logic2.can_enter_ganons && Locked_Logic2.golden_gauntlets ;//&& Locked_Logic2.can_see;
	Location_Locked_Logic2.ganons_lightTrialLullaby = Locked_Logic2.can_enter_ganons && Locked_Logic2.golden_gauntlets && Locked_Logic2.lullaby && Locked_Logic2.ganons_keys >= 1;
	Location_Locked_Logic2.ganons_spiritTrial1 = Locked_Logic2.can_enter_ganons && Locked_Logic2.hookshot;
	Location_Locked_Logic2.ganons_spiritTrial2 = Locked_Logic2.can_enter_ganons && Locked_Logic2.hookshot && Locked_Logic2.bomb_bag;//&& Locked_Logic2.can_see;
	Location_Locked_Logic2.ganons_forestTrial = Locked_Logic2.can_enter_ganons;
	Location_Locked_Logic2.ganons_waterTrial1 = Locked_Logic2.can_enter_ganons;
	Location_Locked_Logic2.ganons_waterTrial2 = Locked_Logic2.can_enter_ganons;
	Location_Locked_Logic2.ganons_shadowTrial1 = Locked_Logic2.can_enter_ganons && ((Locked_Logic2.bow && Locked_Logic2.fire_arrows && Locked_Logic2.magic) || Locked_Logic2.hookshot || Locked_Logic2.time);
	Location_Locked_Logic2.ganons_shadowTrial2 = Locked_Logic2.can_enter_ganons && ((Locked_Logic2.bow && Locked_Logic2.fire_arrows && Locked_Logic2.magic) || (Locked_Logic2.longshot && (Locked_Logic2.hover_boots || Locked_Logic2.can_use_dins)));
	Location_Locked_Logic2.ganons_bossKey = Locked_Logic2.can_enter_ganons;
	Location_Locked_Logic2.zeldasSpot = true;
	Location_Locked_Logic2.eponasSpot = true;
	Location_Locked_Logic2.sariasSpot = true;
	Location_Locked_Logic2.stormsSpot = true;
	Location_Locked_Logic2.sunsSpot = Locked_Logic2.lullaby;
	Location_Locked_Logic2.boleroSpot = Locked_Logic2.can_enter_fire_temple;
	Location_Locked_Logic2.minuetSpot = Locked_Logic2.can_pass_mido_as_adult;
	Location_Locked_Logic2.requiemSpot = Locked_Logic2.can_enter_colossus;
	Location_Locked_Logic2.serenadeSpot = Locked_Logic2.ice_access;
	Location_Locked_Logic2.preludeSpot = Locked_Logic2.forest_medallion;
	Location_Locked_Logic2.nocturneSpot = Locked_Logic2.forest_medallion && Locked_Logic2.fire_medallion && Locked_Logic2.water_medallion;
	Location_Locked_Logic2.oot = Locked_Logic2.kokiri_emerald && Locked_Logic2.goron_ruby && Locked_Logic2.zora_sapphire;
	Location_Locked_Logic2.scrub_dodongos_1 = Locked_Logic2.can_enter_dodongos;
	Location_Locked_Logic2.scrub_dodongos_2 = Locked_Logic2.can_enter_dodongos;
	Location_Locked_Logic2.scrub_dodongos_3 = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.scrub_dodongos_4 = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.scrub_jabu = Locked_Logic2.can_enter_jabu;
	Location_Locked_Logic2.scrub_ganons_1 = Locked_Logic2.can_enter_ganons;
	Location_Locked_Logic2.scrub_ganons_2 = Locked_Logic2.can_enter_ganons;
	Location_Locked_Logic2.scrub_ganons_3 = Locked_Logic2.can_enter_ganons;
	Location_Locked_Logic2.scrub_ganons_4 = Locked_Logic2.can_enter_ganons;
	Location_Locked_Logic2.scrub_river_1 = Locked_Logic2.storms;
	Location_Locked_Logic2.scrub_river_2 = Locked_Logic2.storms;
	Location_Locked_Logic2.scrub_sfm_1 = Locked_Logic2.storms;
	Location_Locked_Logic2.scrub_sfm_2 = Locked_Logic2.storms;
	Location_Locked_Logic2.scrub_lake_1 = true;
	Location_Locked_Logic2.scrub_lake_2 = true;
	Location_Locked_Logic2.scrub_lake_3 = true;
	Location_Locked_Logic2.scrub_lw_1 = true;
	Location_Locked_Logic2.scrub_lw_2 = true;
	Location_Locked_Logic2.scrub_lw_3 = Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.scrub_colossus_1 = Locked_Logic2.silver_gauntlets;
	Location_Locked_Logic2.scrub_colossus_2 = Locked_Logic2.silver_gauntlets;
	Location_Locked_Logic2.scrub_crater_1 = Locked_Logic2.hammer;
	Location_Locked_Logic2.scrub_crater_2 = Locked_Logic2.hammer;
	Location_Locked_Logic2.scrub_crater_3 = Locked_Logic2.hammer;
	Location_Locked_Logic2.scrub_goron_1 = Locked_Logic2.time || (Locked_Logic2.can_wear_goron_tunic && Locked_Logic2.hookshot);
	Location_Locked_Logic2.scrub_goron_2 = Locked_Logic2.time || (Locked_Logic2.can_wear_goron_tunic && Locked_Logic2.hookshot);
	Location_Locked_Logic2.scrub_goron_3 = Locked_Logic2.time || (Locked_Logic2.can_wear_goron_tunic && Locked_Logic2.hookshot);
	Location_Locked_Logic2.scrub_ranch_1 = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.scrub_ranch_2 = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.scrub_ranch_3 = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.scrub_gv_1 = Locked_Logic2.fortress_access && Locked_Logic2.storms;
	Location_Locked_Logic2.scrub_gv_2 = Locked_Logic2.fortress_access && Locked_Logic2.storms;
	Location_Locked_Logic2.shop_kokiri_TL = Locked_Logic2[Shop_Logic.shop_kokiri_TL];
	Location_Locked_Logic2.shop_kokiri_TR = Locked_Logic2[Shop_Logic.shop_kokiri_TR];
	Location_Locked_Logic2.shop_kokiri_BR = Locked_Logic2[Shop_Logic.shop_kokiri_BR];
	Location_Locked_Logic2.shop_kokiri_BL = Locked_Logic2[Shop_Logic.shop_kokiri_BL];
	Location_Locked_Logic2.shop_market_bazaar_TL = Locked_Logic2[Shop_Logic.shop_market_bazaar_TL];
	Location_Locked_Logic2.shop_market_bazaar_TR = Locked_Logic2[Shop_Logic.shop_market_bazaar_TR];
	Location_Locked_Logic2.shop_market_bazaar_BR = Locked_Logic2[Shop_Logic.shop_market_bazaar_BR];
	Location_Locked_Logic2.shop_market_bazaar_BL = Locked_Logic2[Shop_Logic.shop_market_bazaar_BL];
	Location_Locked_Logic2.shop_market_potion_TL = Locked_Logic2[Shop_Logic.shop_market_potion_TL];
	Location_Locked_Logic2.shop_market_potion_TR = Locked_Logic2[Shop_Logic.shop_market_potion_TR];
	Location_Locked_Logic2.shop_market_potion_BR = Locked_Logic2[Shop_Logic.shop_market_potion_BR];
	Location_Locked_Logic2.shop_market_potion_BL = Locked_Logic2[Shop_Logic.shop_market_potion_BL];
	Location_Locked_Logic2.shop_market_chu_TL = Locked_Logic2[Shop_Logic.shop_market_chu_TL];
	Location_Locked_Logic2.shop_market_chu_TR = Locked_Logic2[Shop_Logic.shop_market_chu_TR];
	Location_Locked_Logic2.shop_market_chu_BR = Locked_Logic2[Shop_Logic.shop_market_chu_BR];
	Location_Locked_Logic2.shop_market_chu_BL = Locked_Logic2[Shop_Logic.shop_market_chu_BL];
	Location_Locked_Logic2.shop_kakariko_bazaar_TL = Locked_Logic2[Shop_Logic.shop_kakariko_bazaar_TL];
	Location_Locked_Logic2.shop_kakariko_bazaar_TR = Locked_Logic2[Shop_Logic.shop_kakariko_bazaar_TR];
	Location_Locked_Logic2.shop_kakariko_bazaar_BR = Locked_Logic2[Shop_Logic.shop_kakariko_bazaar_BR];
	Location_Locked_Logic2.shop_kakariko_bazaar_BL = Locked_Logic2[Shop_Logic.shop_kakariko_bazaar_BL];
	Location_Locked_Logic2.shop_kakariko_potion_TL = Locked_Logic2[Shop_Logic.shop_kakariko_potion_TL];
	Location_Locked_Logic2.shop_kakariko_potion_TR = Locked_Logic2[Shop_Logic.shop_kakariko_potion_TR];
	Location_Locked_Logic2.shop_kakariko_potion_BR = Locked_Logic2[Shop_Logic.shop_kakariko_potion_BR];
	Location_Locked_Logic2.shop_kakariko_potion_BL = Locked_Logic2[Shop_Logic.shop_kakariko_potion_BL];
	Location_Locked_Logic2.shop_goron_TL = Locked_Logic2[Shop_Logic.shop_goron_TL] && (Locked_Logic2.lullaby || Locked_Logic2.can_stop_link_the_goron || Locked_Logic2.bomb_bag || Locked_Logic2.can_use_dins);
	Location_Locked_Logic2.shop_goron_TR = Locked_Logic2[Shop_Logic.shop_goron_TR] && (Locked_Logic2.lullaby || Locked_Logic2.can_stop_link_the_goron || Locked_Logic2.bomb_bag || Locked_Logic2.can_use_dins);
	Location_Locked_Logic2.shop_goron_BR = Locked_Logic2[Shop_Logic.shop_goron_BR] && (Locked_Logic2.lullaby || Locked_Logic2.can_stop_link_the_goron || Locked_Logic2.bomb_bag || Locked_Logic2.can_use_dins);
	Location_Locked_Logic2.shop_goron_BL = Locked_Logic2[Shop_Logic.shop_goron_BL] && (Locked_Logic2.lullaby || Locked_Logic2.can_stop_link_the_goron || Locked_Logic2.bomb_bag || Locked_Logic2.can_use_dins);
	Location_Locked_Logic2.shop_domain_TL = Locked_Logic2[Shop_Logic.shop_domain_TL] && ((Locked_Logic2.bomb_bag && Locked_Logic2.lullaby) || Locked_Logic2.silver_scale || (Locked_Logic2.lullaby && ((Locked_Logic2.can_enter_ganons && Locked_Logic2.bottle) || Locked_Logic2.can_enter_jabu || (Locked_Logic2.giants_wallet && Locked_Logic2.bottle))));
	Location_Locked_Logic2.shop_domain_TR = Locked_Logic2[Shop_Logic.shop_domain_TR] && ((Locked_Logic2.bomb_bag && Locked_Logic2.lullaby) || Locked_Logic2.silver_scale || (Locked_Logic2.lullaby && ((Locked_Logic2.can_enter_ganons && Locked_Logic2.bottle) || Locked_Logic2.can_enter_jabu || (Locked_Logic2.giants_wallet && Locked_Logic2.bottle))));
	Location_Locked_Logic2.shop_domain_BR = Locked_Logic2[Shop_Logic.shop_domain_BR] && ((Locked_Logic2.bomb_bag && Locked_Logic2.lullaby) || Locked_Logic2.silver_scale || (Locked_Logic2.lullaby && ((Locked_Logic2.can_enter_ganons && Locked_Logic2.bottle) || Locked_Logic2.can_enter_jabu || (Locked_Logic2.giants_wallet && Locked_Logic2.bottle))));
	Location_Locked_Logic2.shop_domain_BL = Locked_Logic2[Shop_Logic.shop_domain_BL] && ((Locked_Logic2.bomb_bag && Locked_Logic2.lullaby) || Locked_Logic2.silver_scale || (Locked_Logic2.lullaby && ((Locked_Logic2.can_enter_ganons && Locked_Logic2.bottle) || Locked_Logic2.can_enter_jabu || (Locked_Logic2.giants_wallet && Locked_Logic2.bottle))));

	Location_Locked_Logic2.gs_kokiri_child = true;
	Location_Locked_Logic2.gs_kokiri_soil = Locked_Logic2.bottle;
	Location_Locked_Logic2.gs_kokiri_adult = Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_market = true;
	Location_Locked_Logic2.gs_lost_woods_bean_1 = Locked_Logic2.bottle;
	Location_Locked_Logic2.gs_lost_woods_bean_2 = Locked_Logic2.bottle;
	Location_Locked_Logic2.gs_lost_woods_above_stage = Locked_Logic2.child_can_enter_river && Locked_Logic2.can_pass_mido_as_adult;
	Location_Locked_Logic2.gs_sacred_forest = Locked_Logic2.hookshot && Locked_Logic2.can_pass_mido_as_adult;
	Location_Locked_Logic2.gs_outside_kakariko = (Locked_Logic2.boomerang && Locked_Logic2.bomb_bag) || (Locked_Logic2.can_blast_or_smash && Locked_Logic2.hookshot)
	Location_Locked_Logic2.gs_near_gerudo = (Locked_Logic2.hammer && Locked_Logic2.can_use_fire && Locked_Logic2.hookshot) || (Locked_Logic2.can_use_dins && Locked_Logic2.bomb_bag && Locked_Logic2.boomerang);
	Location_Locked_Logic2.gs_hyrule_castle_tree = true;
	Location_Locked_Logic2.gs_hyrule_castle_grotto = Locked_Logic2.storms && Locked_Logic2.bomb_bag && Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_lon_lon_tree = true;
	Location_Locked_Logic2.gs_lon_lon_shed = true;
	Location_Locked_Logic2.gs_lon_lon_window = Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_lon_lon_back_wall = Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_kakariko_construction = true;
	Location_Locked_Logic2.gs_kakariko_skulltula_house = true;
	Location_Locked_Logic2.gs_kakariko_guard_house = true;
	Location_Locked_Logic2.gs_kakariko_tree = true;
	Location_Locked_Logic2.gs_kakariko_tower = Locked_Logic2.bomb_bag || Locked_Logic2.slingshot;
	Location_Locked_Logic2.gs_kakariko_impas = Locked_Logic2.hookshot || Spawn.adult_kak_roof;
	Location_Locked_Logic2.gs_graveyard_wall = Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_graveyard_soil = Locked_Logic2.bottle;
	Location_Locked_Logic2.gs_trail_soil = Locked_Logic2.bottle && (Locked_Logic2.bomb_bag || Locked_Logic2.goron_bracelet);
	Location_Locked_Logic2.gs_trail_bombable_wall = Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.gs_trail_hail_path = Locked_Logic2.hammer;
	Location_Locked_Logic2.gs_trail_above_dodongos = Locked_Logic2.hammer;
	Location_Locked_Logic2.gs_goron_center = true;
	Location_Locked_Logic2.gs_goron_maze = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.gs_crater_crate = Locked_Logic2.can_blast_or_smash || Spawn.child_upper_dmc;
	Location_Locked_Logic2.gs_crater_soil = Locked_Logic2.bottle && Locked_Logic2.bolero;
	Location_Locked_Logic2.gs_river_ladder = Locked_Logic2.child_can_enter_river;
	Location_Locked_Logic2.gs_river_near_grotto = Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_river_above_bridge = Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_domain = (Locked_Logic2.lullaby || Spawn.adult_zd) && (Locked_Logic2.hookshot || Locked_Logic2.magic || Locked_Logic2.bow);
	Location_Locked_Logic2.gs_fountain_above_log = Locked_Logic2.rutos_letter && Locked_Logic2.child_can_enter_domain && Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_fountain_tree = Locked_Logic2.rutos_letter && Locked_Logic2.child_can_enter_domain
	Location_Locked_Logic2.gs_fountain_hidden_cave = Locked_Logic2.ice_access && Locked_Logic2.silver_gauntlets && Locked_Logic2.hookshot && Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.gs_hylia_bean = Locked_Logic2.bottle;
	Location_Locked_Logic2.gs_hylia_lab_wall = Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_hylia_island = true;
	Location_Locked_Logic2.gs_hylia_tree = Locked_Logic2.longshot;
	Location_Locked_Logic2.gs_hylia_lab_crate = Locked_Logic2.iron_boots && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_valley_small_bridge = Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_valley_bean = Locked_Logic2.bottle;
	Location_Locked_Logic2.gs_valley_tent = Locked_Logic2.fortress_access && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_valley_pillar = Locked_Logic2.fortress_access && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_fortress_archery = Locked_Logic2.fortress_access && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_fortress_top = Locked_Logic2.fortress_access;
	Location_Locked_Logic2.gs_wasteland = Locked_Logic2.hookshot && Locked_Logic2.can_cross_quicksand;
	Location_Locked_Logic2.gs_colossus_soil = Locked_Logic2.bottle && Locked_Logic2.requiem;
	Location_Locked_Logic2.gs_colossus_tree = Locked_Logic2.hookshot && Locked_Logic2.can_enter_colossus;
	Location_Locked_Logic2.gs_colossus_hill = (Locked_Logic2.requiem && (Locked_Logic2.bomb_bag || Locked_Logic2.silver_scale)) || (Locked_Logic2.longshot && Locked_Logic2.can_enter_colossus);
	Location_Locked_Logic2.gs_river_tree = true;
	Location_Locked_Logic2.gs_ogc = true;
	Location_Locked_Logic2.gs_deku_basement_back = Locked_Logic2.deku_access && Locked_Logic2.boomerang && Locked_Logic2.bomb_bag && Locked_Logic2.slingshot;
	Location_Locked_Logic2.gs_deku_basement_gate = Locked_Logic2.deku_access;
	Location_Locked_Logic2.gs_deku_basement_vines = Locked_Logic2.deku_access && (Locked_Logic2.slingshot || Locked_Logic2.boomerang || Locked_Logic2.bomb_bag || Locked_Logic2.can_use_dins);
	Location_Locked_Logic2.gs_deku_compass = Locked_Logic2.deku_access;
	Location_Locked_Logic2.gs_dodongos_east_side = Locked_Logic2.can_enter_dodongos;
	Location_Locked_Logic2.gs_dodongos_stair_vines = Locked_Logic2.dodongos_climb;
	Location_Locked_Logic2.gs_dodongos_above_stairs = (Locked_Logic2.dodongos_climb && Locked_Logic2.hookshot) || (Locked_Logic2.boomerang && (Locked_Logic2.bomb_bag || Locked_Logic2.goron_bracelet));
	Location_Locked_Logic2.gs_dodongos_scarecrow = Locked_Logic2.can_enter_dodongos && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_dodongos_before_king = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.gs_jabu_vines = Locked_Logic2.can_enter_jabu;
	Location_Locked_Logic2.gs_jabu_near_octo_1 = Locked_Logic2.can_enter_jabu && Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_jabu_near_octo_2 = Locked_Logic2.can_enter_jabu && Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_jabu_near_boss = Locked_Logic2.can_enter_jabu && Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_fire_time = Locked_Logic2.can_enter_fire_temple && Locked_Logic2.fire_keys >= 1 && Locked_Logic2.time;
	Location_Locked_Logic2.gs_fire_bomb_wall = Locked_Logic2.can_climb_fire_temple && Locked_Logic2.goron_bracelet && Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.gs_fire_scarecrow_1 = Locked_Logic2.can_climb_fire_temple && Locked_Logic2.goron_bracelet && Locked_Logic2.fire_keys >=5 && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_fire_scarecrow_2 = Locked_Logic2.can_climb_fire_temple && Locked_Logic2.goron_bracelet && Locked_Logic2.fire_keys >=5 && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_fire_basement = Locked_Logic2.can_enter_fire_temple && Locked_Logic2.hammer;
	Location_Locked_Logic2.gs_water_south_basement = Locked_Logic2.can_enter_water && Locked_Logic2.bomb_bag && Locked_Logic2.lullaby;
	Location_Locked_Logic2.gs_water_river = Locked_Logic2.can_enter_water && Locked_Logic2.time && Locked_Logic2.water_keys >= 5;
	Location_Locked_Logic2.gs_water_central = Locked_Logic2.middle_water && (Locked_Logic2.longshot || Locked_Logic2.can_use_farores);
	Location_Locked_Logic2.gs_water_near_boss_key = Locked_Logic2.can_enter_water && Locked_Logic2.longshot && Locked_Logic2.lullaby && Locked_Logic2.water_keys >=4;
	Location_Locked_Logic2.gs_water_platform_room = Locked_Logic2.can_enter_water && Locked_Logic2.longshot && Locked_Logic2.lullaby && Locked_Logic2.water_keys >=4;
	Location_Locked_Logic2.gs_spirit_metal_fence = Locked_Logic2.requiem && (Locked_Logic2.boomerang || Locked_Logic2.slingshot);
	Location_Locked_Logic2.gs_spirit_before_child_knuckle = (Locked_Logic2.bomb_bag && Locked_Logic2.boomerang && Locked_Logic2.hookshot && Locked_Logic2.spirit_keys >= 1) || (Locked_Logic2.boomerang && Locked_Logic2.spirit_keys >= 5 && Locked_Logic2.bomb_bag && Locked_Logic2.requiem) || (Locked_Logic2.hookshot && Locked_Logic2.silver_gauntlets && Locked_Logic2.spirit_keys >= 3);
	Location_Locked_Logic2.gs_spirit_boulder_room = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.time && (Locked_Logic2.bow || Locked_Logic2.hookshot || Locked_Logic2.bomb_bag);
	Location_Locked_Logic2.gs_spirit_lobby = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >= 3 && (Locked_Logic2.hookshot || Locked_Logic2.hover_boots);
	Location_Locked_Logic2.gs_spirit_child_climb = Locked_Logic2.spirit_keys >= 1;
	Location_Locked_Logic2.gs_shadow_like_like = Locked_Logic2.can_bomb_shadow_wall;
	Location_Locked_Logic2.gs_shadow_crusher = Locked_Logic2.can_bomb_shadow_wall && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_shadow_giant_pot = Locked_Logic2.can_bomb_shadow_wall && Locked_Logic2.shadow_keys >=2 && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_shadow_near_boat = Locked_Logic2.can_pass_shadow_hookshot_door && Locked_Logic2.longshot && Locked_Logic2.shadow_keys >=4;
	Location_Locked_Logic2.gs_shadow_three_pots = Locked_Logic2.can_ride_shadow_boat;
	Location_Locked_Logic2.gs_well_west_inner = Locked_Logic2.boomerang /*&& Locked_Logic2.can_see*/ && Locked_Logic2.well_keys >=3;
	Location_Locked_Logic2.gs_well_east_inner = Locked_Logic2.boomerang /*&& Locked_Logic2.can_see*/ && Locked_Logic2.well_keys >=3;
	Location_Locked_Logic2.gs_well_like_like = Locked_Logic2.boomerang /*&& Locked_Logic2.can_see*/ && Locked_Logic2.well_keys >=3;
	Location_Locked_Logic2.gs_ice_spinning_scythe = Locked_Logic2.ice_access && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_ice_hp_room = Locked_Logic2.ice_access && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_ice_block_room = Locked_Logic2.ice_access && Locked_Logic2.hookshot;
	
	gs[1] = Location_Locked_Logic2.gs_kokiri_child;
	gs[2] = Location_Locked_Logic2.gs_kokiri_soil;
	gs[3] = Location_Locked_Logic2.gs_kokiri_adult;
	gs[4] = Location_Locked_Logic2.gs_market;
	gs[5] = Location_Locked_Logic2.gs_lost_woods_bean_1;
	gs[6] = Location_Locked_Logic2.gs_lost_woods_bean_2;
	gs[7] = Location_Locked_Logic2.gs_lost_woods_above_stage;
	gs[8] = Location_Locked_Logic2.gs_sacred_forest;
	gs[9] = Location_Locked_Logic2.gs_outside_kakariko;
	gs[10] = Location_Locked_Logic2.gs_near_gerudo;
	gs[11] = Location_Locked_Logic2.gs_hyrule_castle_tree;
	gs[12] = Location_Locked_Logic2.gs_hyrule_castle_grotto;
	gs[13] = Location_Locked_Logic2.gs_lon_lon_tree;
	gs[14] = Location_Locked_Logic2.gs_lon_lon_shed;
	gs[15] = Location_Locked_Logic2.gs_lon_lon_window;
	gs[16] = Location_Locked_Logic2.gs_lon_lon_back_wall;
	gs[17] = Location_Locked_Logic2.gs_kakariko_construction;
	gs[18] = Location_Locked_Logic2.gs_kakariko_skulltula_house;
	gs[19] = Location_Locked_Logic2.gs_kakariko_guard_house;
	gs[20] = Location_Locked_Logic2.gs_kakariko_tree;
	gs[21] = Location_Locked_Logic2.gs_kakariko_tower;
	gs[22] = Location_Locked_Logic2.gs_kakariko_impas;
	gs[23] = Location_Locked_Logic2.gs_graveyard_wall;
	gs[24] = Location_Locked_Logic2.gs_graveyard_soil;
	gs[25] = Location_Locked_Logic2.gs_trail_soil;
	gs[26] = Location_Locked_Logic2.gs_trail_bombable_wall;
	gs[27] = Location_Locked_Logic2.gs_trail_hail_path;
	gs[28] = Location_Locked_Logic2.gs_trail_above_dodongos;
	gs[29] = Location_Locked_Logic2.gs_goron_center;
	gs[30] = Location_Locked_Logic2.gs_goron_maze;
	gs[31] = Location_Locked_Logic2.gs_crater_crate;
	gs[32] = Location_Locked_Logic2.gs_crater_soil;
	gs[33] = Location_Locked_Logic2.gs_river_ladder;
	gs[34] = Location_Locked_Logic2.gs_river_near_grotto;
	gs[35] = Location_Locked_Logic2.gs_river_above_bridge;
	gs[36] = Location_Locked_Logic2.gs_domain;
	gs[37] = Location_Locked_Logic2.gs_fountain_above_log;
	gs[38] = Location_Locked_Logic2.gs_fountain_tree;
	gs[39] = Location_Locked_Logic2.gs_fountain_hidden_cave;
	gs[40] = Location_Locked_Logic2.gs_hylia_bean;
	gs[41] = Location_Locked_Logic2.gs_hylia_lab_wall;
	gs[42] = Location_Locked_Logic2.gs_hylia_island;
	gs[43] = Location_Locked_Logic2.gs_hylia_tree;
	gs[44] = Location_Locked_Logic2.gs_hylia_lab_crate;
	gs[45] = Location_Locked_Logic2.gs_valley_small_bridge;
	gs[46] = Location_Locked_Logic2.gs_valley_bean;
	gs[47] = Location_Locked_Logic2.gs_valley_tent;
	gs[48] = Location_Locked_Logic2.gs_valley_pillar;
	gs[49] = Location_Locked_Logic2.gs_fortress_archery;
	gs[50] = Location_Locked_Logic2.gs_fortress_top;
	gs[51] = Location_Locked_Logic2.gs_wasteland;
	gs[52] = Location_Locked_Logic2.gs_colossus_soil;
	gs[53] = Location_Locked_Logic2.gs_colossus_tree;
	gs[54] = Location_Locked_Logic2.gs_colossus_hill;
	gs[55] = Location_Locked_Logic2.gs_river_tree;
	gs[56] = Location_Locked_Logic2.gs_ogc;
	gs[57] = Location_Locked_Logic2.gs_deku_basement_back;
	gs[58] = Location_Locked_Logic2.gs_deku_basement_gate;
	gs[59] = Location_Locked_Logic2.gs_deku_basement_vines;
	gs[60] = Location_Locked_Logic2.gs_deku_compass;
	gs[61] = Location_Locked_Logic2.gs_dodongos_east_side;
	gs[62] = Location_Locked_Logic2.gs_dodongos_stair_vines;
	gs[63] = Location_Locked_Logic2.gs_dodongos_above_stairs;
	gs[64] = Location_Locked_Logic2.gs_dodongos_scarecrow;
	gs[65] = Location_Locked_Logic2.gs_dodongos_before_king;
	gs[66] = Location_Locked_Logic2.gs_jabu_vines;
	gs[67] = Location_Locked_Logic2.gs_jabu_near_octo_1;
	gs[68] = Location_Locked_Logic2.gs_jabu_near_octo_2;
	gs[69] = Location_Locked_Logic2.gs_jabu_near_boss;
	gs[70] = Location_Locked_Logic2.gs_forest_first;
	gs[71] = Location_Locked_Logic2.gs_forest_lobby;
	gs[72] = Location_Locked_Logic2.gs_forest_outdoor_east;
	gs[73] = Location_Locked_Logic2.gs_forest_outdoor_west;
	gs[74] = Location_Locked_Logic2.gs_forest_basement;
	gs[75] = Location_Locked_Logic2.gs_fire_time;
	gs[76] = Location_Locked_Logic2.gs_fire_bomb_wall;
	gs[77] = Location_Locked_Logic2.gs_fire_scarecrow_1;
	gs[78] = Location_Locked_Logic2.gs_fire_scarecrow_2;
	gs[79] = Location_Locked_Logic2.gs_fire_basement;
	gs[80] = Location_Locked_Logic2.gs_water_south_basement;
	gs[81] = Location_Locked_Logic2.gs_water_river;
	gs[82] = Location_Locked_Logic2.gs_water_central;
	gs[83] = Location_Locked_Logic2.gs_water_near_boss_key;
	gs[84] = Location_Locked_Logic2.gs_water_platform_room;
	gs[85] = Location_Locked_Logic2.gs_spirit_metal_fence;
	gs[86] = Location_Locked_Logic2.gs_spirit_before_child_knuckle;
	gs[87] = Location_Locked_Logic2.gs_spirit_boulder_room;
	gs[88] = Location_Locked_Logic2.gs_spirit_lobby;
	gs[89] = Location_Locked_Logic2.gs_spirit_child_climb;
	gs[90] = Location_Locked_Logic2.gs_shadow_like_like;
	gs[91] = Location_Locked_Logic2.gs_shadow_crusher;
	gs[92] = Location_Locked_Logic2.gs_shadow_giant_pot;
	gs[93] = Location_Locked_Logic2.gs_shadow_near_boat;
	gs[94] = Location_Locked_Logic2.gs_shadow_three_pots;
	gs[95] = Location_Locked_Logic2.gs_well_west_inner;
	gs[96] = Location_Locked_Logic2.gs_well_east_inner;
	gs[97] = Location_Locked_Logic2.gs_well_like_like;
	gs[98] = Location_Locked_Logic2.gs_ice_spinning_scythe;
	gs[99] = Location_Locked_Logic2.gs_ice_hp_room;
	gs[100] = Location_Locked_Logic2.gs_ice_block_room;

	Locked_Logic2.gold_skulltulas = 0;
	var i;
	for (i = 1; i<=100; i++) {
		if (gs[i] == true) {Locked_Logic2.gold_skulltulas +=1;};
	}
	}

	var temp = 0;
	var tempArray = [];
	
	var l = Locations.length;
	for (var i = 0; i < l; i++) {
		if (!Location_Locked_Logic2[Locations[i]]) {tempArray.push(Locations[i]);}
	}
	return tempArray;
	
}
