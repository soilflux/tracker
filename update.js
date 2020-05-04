function Update() {
	const keys = Object.keys(Location_Logic);
	
	if(Game.theme == "dark" && Game.themeChange) {
		if (Person.type == "soli") {dark_soli();}
		else if (Person.type == "normie") {dark_normie();}
		else if (Person.type = "tagnia") {dark_tagnia();}	
		dark_theme();
	}
	if(Game.theme == "light" && Game.themeChange) {
		if (Person.type == "soli") {light_soli();}
		light_theme();
	}

	refresh_logic_for_stuff(); //puts something in or out of logic based on whether its location is in or out of logic 
	force_stuff_in_or_out_of_logic(); //implements the force out of logic and force into logic boxes
	

	for(var i = 0; i <= 36; i++){
		str = checkSummary[i] + "_location";
		
		if (checkSummary[i] == "trade" && (Logic.prescription || Logic.claim_check)) {var exception = true;} else {var exception = false;}
		
		if (Logic[checkSummary[i]] || exception) {document.getElementById(str).className = "logic_check_text2";}
		else {document.getElementById(str).className = "ool_check_text2";}
	}
	
	logic_shortcuts(); //combines multiple pieces of logic into one variable
	
	var d = new Date();
	if (paused && pauseFlag) {pauseInitial = d.getTime(); pauseFlag = false;}
	if (!paused && pauseFlag) {pauseTotal += d.getTime() - pauseInitial; pauseFlag = false;}
	if (!paused) {var tempTime = Math.floor((d.getTime() - pauseTotal - initialTime)/1000);} else {var tempTime = Math.floor((pauseInitial - pauseTotal - initialTime)/1000);}
	tempHours = Math.floor(tempTime / 3600);
	tempMinutes = Math.floor((tempTime % 3600) / 60);
	tempSeconds = Math.floor((tempTime % 3600) % 60);
	document.getElementById("timer").innerHTML = "";
	if (tempHours > 0) {document.getElementById("timer").innerHTML += tempHours + ":";}
	if (tempHours > 0 && tempMinutes == 0) {document.getElementById("timer").innerHTML += "00:"} if (tempMinutes > 0) {if (tempMinutes < 10 && tempHours > 0) {document.getElementById("timer").innerHTML += "0";} document.getElementById("timer").innerHTML += tempMinutes + ":";}
	if (tempSeconds < 10 && (tempMinutes > 0 || tempHours > 0)) {document.getElementById("timer").innerHTML += "0";}
	document.getElementById("timer").innerHTML += tempSeconds;
	
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

	process_inputs(); //handle hinted, peeked and picked up things

if (temptext2 != "") {
	var hintText = document.createElement("small");
	hintText.innerHTML = temptext2;
	document.getElementById("notes").insertBefore(hintText, document.getElementById("notes").firstChild);
	temptext2 = "";
}


if (Game.hookshot1 && Game.hookshot2) {
	Game.longshot = true;
}
if (Game.hookshot1 || Game.hookshot2) {
	Game.hookshot = true;
}

if (Game.strength1 && Game.strength2 && Game.strength3) {Game.golden_gauntlets = true;}
if (Game.strength1 && Game.strength3) {Game.silver_gauntlets = true;}
if (Game.strength2 && Game.strength3) {Game.silver_gauntlets = true;}
if (Game.strength1 && Game.strength2) {Game.silver_gauntlets = true;}
if (Game.strength1 || Game.strength2 || Game.strength3) {Game.goron_bracelet = true;}

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

woth_and_barren_processing(); //do various things based on woth and barrens;

if (Game.magic1 && Game.light_arrows && Game.bow1 && Game.ganons_checks_remaining > 0) {
	document.getElementById("ganons").click();
}
	
	shitty_stone_medallion_input(); //handle stones and medallions input in a dumb way


	if (Logic.forest_medallion_location != "unknown") {if (Check[Logic.forest_medallion_location] != "unknown") {if (document.getElementById("text_" + Logic.forest_medallion_location).style.opacity == 1) {document.getElementById("forest_medallion").style.opacity=.2;}}}
	if (Logic.forest_medallion_location != "unknown") {if (Check[Logic.forest_medallion_location] != "unknown") {if (document.getElementById("text_" + Logic.forest_medallion_location).style.opacity == .2) {document.getElementById("forest_medallion").style.opacity=1;}}}
	if (Logic.fire_medallion_location != "unknown") {if (Check[Logic.fire_medallion_location] != "unknown") {if (document.getElementById("text_" + Logic.fire_medallion_location).style.opacity == 1) {document.getElementById("fire_medallion").style.opacity=.2;}}}
	if (Logic.fire_medallion_location != "unknown") {if (Check[Logic.fire_medallion_location] != "unknown") {if (document.getElementById("text_" + Logic.fire_medallion_location).style.opacity == .2) {document.getElementById("fire_medallion").style.opacity=1;}}}
	if (Logic.water_medallion_location != "unknown") {if (Check[Logic.water_medallion_location] != "unknown") {if (document.getElementById("text_" + Logic.water_medallion_location).style.opacity == 1) {document.getElementById("water_medallion").style.opacity=.2;}}}
	if (Logic.water_medallion_location != "unknown") {if (Check[Logic.water_medallion_location] != "unknown") {if (document.getElementById("text_" + Logic.water_medallion_location).style.opacity == .2) {document.getElementById("water_medallion").style.opacity=1;}}}
	if (Logic.generic1 != "unknown") {if (Check[Logic.generic1] != "unknown") {if (document.getElementById("text_" + Logic.generic1).style.opacity == 1) {document.getElementById("gen1_medallion").style.opacity=.2;}}}
	if (Logic.generic1 != "unknown") {if (Check[Logic.generic1] != "unknown") {if (document.getElementById("text_" + Logic.generic1).style.opacity == .2) {document.getElementById("gen1_medallion").style.opacity=1;}}}
	if (Logic.generic2 != "unknown") {if (Check[Logic.generic2] != "unknown") {if (document.getElementById("text_" + Logic.generic2).style.opacity == 1) {document.getElementById("gen2_medallion").style.opacity=.2;}}}
	if (Logic.generic2 != "unknown") {if (Check[Logic.generic2] != "unknown") {if (document.getElementById("text_" + Logic.generic2).style.opacity == .2) {document.getElementById("gen2_medallion").style.opacity=1;}}}
	if (Logic.generic3 != "unknown") {if (Check[Logic.generic3] != "unknown") {if (document.getElementById("text_" + Logic.generic3).style.opacity == 1) {document.getElementById("gen3_medallion").style.opacity=.2;}}}
	if (Logic.generic3 != "unknown") {if (Check[Logic.generic3] != "unknown") {if (document.getElementById("text_" + Logic.generic3).style.opacity == .2) {document.getElementById("gen3_medallion").style.opacity=1;}}}
	
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
	Location_Access.g_fairy = Game.golden_gauntlets && Game.lullaby;
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
	Location_Access.ganons1 = Game.can_enter_ganons && Game.golden_gauntlets;
	Location_Access.ganons2 = Game.can_enter_ganons && Game.golden_gauntlets;
	Location_Access.ganons3 = Game.can_enter_ganons && Game.golden_gauntlets;
	Location_Access.ganons4 = Game.can_enter_ganons && Game.golden_gauntlets;
	Location_Access.ganons5 = Game.can_enter_ganons && Game.golden_gauntlets;
	Location_Access.ganons6 = Game.can_enter_ganons && Game.golden_gauntlets;
	Location_Access.ganons7 = Game.can_enter_ganons && Game.golden_gauntlets ;//&& Game.can_see;
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


	gs[1] = Location_Logic.gs_kokiri_child;
	gs[2] = Location_Logic.gs_kokiri_bean;
	gs[3] = Location_Logic.gs_kokiri_adult;
	gs[4] = Location_Logic.gs_market;
	gs[5] = Location_Logic.gs_lost_woods_bean1;
	gs[6] = Location_Logic.gs_lost_woods_bean2;
	gs[7] = Location_Logic.gs_lost_woods_above_stage;
	gs[8] = Location_Logic.gs_sacred_forest;
	gs[9] = Location_Logic.gs_outside_kakariko;
	gs[10] = Location_Logic.gs_near_gerudo;
	gs[11] = Location_Logic.gs_hyrule_castle_tree;
	gs[12] = Location_Logic.gs_hyrule_castle_grotto;
	gs[13] = Location_Logic.gs_lon_lon_tree;
	gs[14] = Location_Logic.gs_lon_lon_shed;
	gs[15] = Location_Logic.gs_lon_lon_window;
	gs[16] = Location_Logic.gs_lon_lon_back_wall;
	gs[17] = Location_Logic.gs_kakariko_construction;
	gs[18] = Location_Logic.gs_kakariko_skulltula_house;
	gs[19] = Location_Logic.gs_kakariko_guard_house;
	gs[20] = Location_Logic.gs_kakariko_tree;
	gs[21] = Location_Logic.gs_kakariko_tower;
	gs[22] = Location_Logic.gs_kakariko_impas;
	gs[23] = Location_Logic.gs_graveyard_wall;
	gs[24] = Location_Logic.gs_graveyard_bean;
	gs[25] = Location_Logic.gs_trail_bean;
	gs[26] = Location_Logic.gs_trail_bombable_wall;
	gs[27] = Location_Logic.gs_trail_hail_path;
	gs[28] = Location_Logic.gs_trail_above_dodongos;
	gs[29] = Location_Logic.gs_goron_city_center;
	gs[30] = Location_Logic.gs_goron_city_maze;
	gs[31] = Location_Logic.gs_crater_crate;
	gs[32] = Location_Logic.gs_crater_bean;
	gs[33] = Location_Logic.gs_river_ladder;
	gs[34] = Location_Logic.gs_river_near_grotto;
	gs[35] = Location_Logic.gs_river_above_bridge;
	gs[36] = Location_Logic.gs_zora_river_tree;
	gs[37] = Location_Logic.gs_domain;
	gs[38] = Location_Logic.gs_fountain_above_log;
	gs[39] = Location_Logic.gs_fountain_tree;
	gs[40] = Location_Logic.gs_fountain_hidden_cave;
	gs[41] = Location_Logic.gs_hylia_bean;
	gs[42] = Location_Logic.gs_hylia_lab_wall;
	gs[43] = Location_Logic.gs_hylia_island;
	gs[44] = Location_Logic.gs_hylia_tree;
	gs[45] = Location_Logic.gs_lab_crate;
	gs[46] = Location_Logic.gs_valley_small_bridge;
	gs[47] = Location_Logic.gs_valley_bean;
	gs[48] = Location_Logic.gs_valley_tent;
	gs[49] = Location_Logic.gs_valley_pillar;
	gs[50] = Location_Logic.gs_fortress_archery;
	gs[51] = Location_Logic.gs_fortress_top;
	gs[52] = Location_Logic.gs_wasteland_structure;
	gs[53] = Location_Logic.gs_colossus_bean;
	gs[54] = Location_Logic.gs_colossus_tree;
	gs[55] = Location_Logic.gs_colossus_hill;
	gs[56] = Location_Logic.gs_ganons;
	gs[57] = Location_Logic.gs_deku_basement_back;
	gs[58] = Location_Logic.gs_deku_basement_gate;
	gs[59] = Location_Logic.gs_deku_basement_vines;
	gs[60] = Location_Logic.gs_deku_compass;
	gs[61] = Location_Logic.gs_dodongos_east_side;
	gs[62] = Location_Logic.gs_dodongos_stair_room;
	gs[63] = Location_Logic.gs_dodongos_above_stairs;
	gs[64] = Location_Logic.gs_dodongos_scarecrow;
	gs[65] = Location_Logic.gs_dodongos_before_king;
	gs[66] = Location_Logic.gs_jabu_vines;
	gs[67] = Location_Logic.gs_jabu_near_octo1;
	gs[68] = Location_Logic.gs_jabu_near_octo2;
	gs[69] = Location_Logic.gs_jabu_near_boss;
	gs[70] = Location_Logic.gs_forest_first;
	gs[71] = Location_Logic.gs_forest_lobby;
	gs[72] = Location_Logic.gs_forest_outdoor_east;
	gs[73] = Location_Logic.gs_forest_outdoor_west;
	gs[74] = Location_Logic.gs_forest_basement;
	gs[75] = Location_Logic.gs_fire_song_of_time;
	gs[76] = Location_Logic.gs_fire_bomb_wall;
	gs[77] = Location_Logic.gs_fire_scarecrow1;
	gs[78] = Location_Logic.gs_fire_scarecrow2;
	gs[79] = Location_Logic.gs_fire_basement;
	gs[80] = Location_Logic.gs_water_south_basement;
	gs[81] = Location_Logic.gs_water_river;
	gs[82] = Location_Logic.gs_water_central;
	gs[83] = Location_Logic.gs_water_near_boss_key;
	gs[84] = Location_Logic.gs_water_platform_room;
	gs[85] = Location_Logic.gs_spirit_metal_fence;
	gs[86] = Location_Logic.gs_spirit_before_child_knuckle;
	gs[87] = Location_Logic.gs_spirit_boulder_room;
	gs[88] = Location_Logic.gs_spirit_temple_lobby;
	gs[89] = Location_Logic.gs_spirit_bomb_for_light_room;
	gs[90] = Location_Logic.gs_shadow_like_like;
	gs[91] = Location_Logic.gs_shadow_crusher;
	gs[92] = Location_Logic.gs_shadow_giant_pot;
	gs[93] = Location_Logic.gs_shadow_near_boat;
	gs[94] = Location_Logic.gs_shadow_three_pots;
	gs[95] = Location_Logic.gs_well_west_inner;
	gs[96] = Location_Logic.gs_well_east_inner;
	gs[97] = Location_Logic.gs_well_like_like;
	gs[98] = Location_Logic.gs_ice_spinning_scythe;
	gs[99] = Location_Logic.gs_ice_hp_room;
	gs[100] = Location_Logic.gs_ice_block_room;

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
	for (const key of keys) {
		if (temp == 256) {break; }
		temp +=1;
		str = "text_" + key;
		str2 = "br_" + key;
		if (Check[key] == "unknown") {document.getElementById(str).style.display = "inline-block";}
		if (Check[key] == "unknown") {document.getElementById(key).style.display = "inline-block";}
		if (Check[key] == "unknown") {document.getElementById(str2).style.display = "inline-block";}
		
		if (document.getElementById(str).style.display != "none") {if (document.getElementById(str).style.color == "orange") {colorChange = true;} else {colorChange = false;}} else {colorChange = false;}
		if(document.getElementById(str).style.display == "none") {continue;}
		if(Location_Logic[key] == true) {
			document.getElementById(str).className= "logic_check_text";
			document.getElementById(str).innerHTML = backUp[temp-1];
			if ((!woth1Locations.includes(key) && !woth2Locations.includes(key) && !woth3Locations.includes(key) && !woth4Locations.includes(key) && !woth5Locations.includes(key)) || !circus) {document.getElementById(str).style.color = "chartreuse";}
			else {
				var woths = [woth1Locations.includes(key), woth2Locations.includes(key), woth3Locations.includes(key), woth4Locations.includes(key), woth5Locations.includes(key)];
				var i;
				var j;
				var k;
				var text = document.getElementById(str).innerHTML;
				document.getElementById(str).innerHTML = ""
				for (i = 0; i < text.length; i++) {
					for (j = 0; j < woths.length; j++) {
						if (woths[j]) {
							let charElem = document.createElement("span");
							charElem.style.color = WotHColors[j+1];
							charElem.innerHTML = text[i];
							document.getElementById(str).appendChild(charElem);
							for (k = j + 1; k < woths.length; k++) {
								if (woths[k]) {
									woths[j] = false;
								}
							}
							break;
						}
					}
				}
			}
			if(document.getElementById(key).style.display != "none") {
				if (temp <= 242) {Game.logically_accessible += 1;}
				if (temp == 44 && Game.deku_checks_remaining == 0) {Game.logically_accessible -= 1;}
			    if (temp == 66 && Game.dodongos_checks_remaining == 0) {Game.logically_accessible -= 1;}
				if (temp == 113 && Game.jabu_checks_remaining == 0) {Game.logically_accessible -= 1;}
				if (temp >= 115 && temp <= 128) {Game.forest_logically_accessible += 1;}
				if (temp >= 129 && temp <= 143) {Game.fire_logically_accessible += 1;}
				if (temp >= 144 && temp <= 154) {Game.water_logically_accessible += 1;}
				if (temp >= 155 && temp <= 174) {Game.spirit_logically_accessible += 1;}
				if (temp >= 175 && temp <= 192) {Game.shadow_logically_accessible += 1;}
				if (temp >= 193 && temp <= 208) {Game.ganons_logically_accessible += 1;}
				if (temp >= 209 && temp <= 230) {Game.gtg_logically_accessible += 1;}
				if (temp >= 231 && temp <= 244) {Game.well_logically_accessible += 1;}
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
	if (Game.ganons_boss_key) {document.getElementById("ganonsBKs").innerHTML = 0;} else {document.getElementById("ganonsBKs").innerHTML = 0;}
	
	/*if(Location_Logic.deku_queen_gohma == true) {document.getElementById("dekuLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("dekuLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.dodongos_king_dodongo == true) {document.getElementById("dodongosLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("dodongosLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.jabu_barinade == true) {document.getElementById("jabuLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("jabuLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.forest14 == true) {document.getElementById("forestLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("forestLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.fire6 == true) {document.getElementById("fireLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("fireLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.water11 == true) {document.getElementById("waterLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("waterLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.spirit20 == true) {document.getElementById("spiritLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("spiritLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.shadow18 == true) {document.getElementById("shadowLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("shadowLogic").style.backgroundColor = "palevioletred";}**/
	
	var lines = document.getElementById("hintInput").value.split('\n');
	var str = "";
	for (var i= 0; i < hintNames.length; i++) {
		for (var j=0; j < lines.length; j++) {
			if (lines[j].startsWith(hintNames[i]+" ") || lines[j].startsWith(hintNames2[i]+" ") || lines[j].startsWith(hintNames3[i]+" ") || lines[j].startsWith(hintNames4[i]+" ") || lines[j].startsWith(hintNames5[i]+" ") || lines[j].startsWith(hintNames6[i]+" ")) {
				for (var k = 0; k < inputs.length; k++) {
					str = inputs[k];
					if (i < 6) {
						str = capitalizeThirdLetter(str);
					}
					else {
						str = capitalizeFirstLetter(str);
					}
					if (k == 0) { if (lines[j].endsWith(" " + inputs[k]) && Check[hintIndexes[i]] == "unknown") {document.getElementById("text_" + hintIndexes[i]).dispatchEvent(new Event('mousedown'));} }
					else if (k == 1) { if (lines[j].endsWith(" " + inputs[k]) && Check[hintIndexes[i]] == "unknown") {thisIsAKey = true; document.getElementById("text_" + hintIndexes[i]).dispatchEvent(new Event('mousedown')); thisIsAKey = false; } }
					else if (k == 2) { if (lines[j].endsWith(" " + inputs[k]) && Check[hintIndexes[i]] == "unknown") {thisIsABossKey = true; document.getElementById("text_" + hintIndexes[i]).dispatchEvent(new Event('mousedown')); thisIsABossKey = false; } }
					else {if (lines[j].endsWith(" " + inputs[k])) {if (Check[hintIndexes[i]] == "unknown") {document.getElementById(hintIndexes[i]).value = str;}}}
				}
			}
		}
	}
	
	
	var temptext = document.getElementById("unread").innerHTML.split("Unread: ");
	temptext[1] = "";
	if (Check.tokens_30 == "unknown") temptext[1] += "30 "; 
	if (Check.tokens_40 == "unknown") temptext[1] += "40 "; 
	if (Check.tokens_50 == "unknown") temptext[1] += "50 "; 
	if (Check.oot == "unknown") temptext[1] += "OoT "; 
	if (Check.trade_quest == "unknown") temptext[1] += "Bigo "; 
	if (Check.frogs_2 == "unknown") temptext[1] += "Frogs2 "; 
	if (Check.theater == "unknown") temptext[1] += "Mask ";  
	document.getElementById("unread").innerHTML = temptext[0] + "Unread: " + temptext[1];
	
	if (Game.forest_checks_remaining >=0 && (Game.forest_checks_remaining < Game.forest_logically_accessible)) {Game.logically_accessible -= (Game.forest_logically_accessible - Game.forest_checks_remaining);}
	if (Game.fire_checks_remaining >=0 && (Game.fire_checks_remaining < Game.fire_logically_accessible)) {Game.logically_accessible -= (Game.fire_logically_accessible - Game.fire_checks_remaining);}
	if (Game.water_checks_remaining >=0 && (Game.water_checks_remaining < Game.water_logically_accessible)) {Game.logically_accessible -= (Game.water_logically_accessible - Game.water_checks_remaining);}
	if (Game.spirit_checks_remaining >=0 && (Game.spirit_checks_remaining < Game.spirit_logically_accessible)) {Game.logically_accessible -= (Game.spirit_logically_accessible - Game.spirit_checks_remaining);}
	if (Game.shadow_checks_remaining >=0 && (Game.shadow_checks_remaining < Game.shadow_logically_accessible)) {Game.logically_accessible -= (Game.shadow_logically_accessible - Game.shadow_checks_remaining);}
	if (Game.gtg_checks_remaining >=0 && (Game.gtg_checks_remaining < Game.gtg_logically_accessible)) {Game.logically_accessible -= (Game.gtg_logically_accessible - Game.gtg_checks_remaining);}
	if (Game.well_checks_remaining >=0 && (Game.well_checks_remaining < Game.well_logically_accessible)) {Game.logically_accessible -= (Game.well_logically_accessible - Game.well_checks_remaining);}
	if (Game.ganons_checks_remaining >=0 && (Game.ganons_checks_remaining < Game.ganons_logically_accessible)) {Game.logically_accessible -= (Game.ganons_logically_accessible - Game.ganons_checks_remaining);}
	
	
	if (Game.bomb_bag1) {if(document.getElementById("dod_req1") != null) {document.getElementById("dod_req1").style.opacity =1; } if(document.getElementById("sha_req4") != null) {document.getElementById("sha_req4").style.opacity =1; } if(document.getElementById("spi_req3") != null) {document.getElementById("spi_req3").style.opacity =1; }}
	if (Game.magic1) {document.getElementById("gan_req1").style.opacity=1; if(document.getElementById("sha_req2") != null) {document.getElementById("sha_req2").style.opacity =1; }}
	if (Game.light_arrows) {document.getElementById("gan_req2").style.opacity=1;}
	if (Game.bow1) {document.getElementById("gan_req3").style.opacity=1; if(document.getElementById("for_req2") != null) {document.getElementById("for_req2").style.opacity =1; }}
	if (Game.hookshot) {if(document.getElementById("for_req1") != null) {document.getElementById("for_req1").style.opacity =1; } if(document.getElementById("sha_req5") != null) {document.getElementById("sha_req5").style.opacity =1; } if(document.getElementById("spi_req4") != null) {document.getElementById("spi_req4").style.opacity =1; }}
	if (Game.goron_bracelet) {if(document.getElementById("for_req3") != null) {document.getElementById("for_req3").style.opacity =1; }}
	if (Game.hammer) {if(document.getElementById("fir_req1") != null) {document.getElementById("fir_req1").style.opacity =1; }}
	if (Game.rutos_letter) {if(document.getElementById("jab_req1") != null) {document.getElementById("jab_req1").style.opacity =1; }}
	if (Game.boomerang) {if(document.getElementById("jab_req2") != null) {document.getElementById("jab_req2").style.opacity =1; }}
	if (Game.iron_boots) {if(document.getElementById("wat_req1") != null) {document.getElementById("wat_req1").style.opacity =1; }}
	if (Game.scale2) {if(document.getElementById("wat_req2") != null) {document.getElementById("wat_req2").style.opacity =1; }}
	if (Game.longshot) {if(document.getElementById("wat_req3") != null) {document.getElementById("wat_req3").style.opacity =1; }}
	if (Game.silver_gauntlets) {if(document.getElementById("spi_req1") != null) {document.getElementById("spi_req1").style.opacity =1; }}
	if (Game.mirror_shield) {if(document.getElementById("spi_req2") != null) {document.getElementById("spi_req2").style.opacity =1; }}
	if (Game.dins_fire) {if(document.getElementById("sha_req1") != null) {document.getElementById("sha_req1").style.opacity =1; }}
	if (Game.hover_boots) {if(document.getElementById("sha_req3") != null) {document.getElementById("sha_req3").style.opacity =1; }}
	
	if (!Game.bomb_bag1) {if(document.getElementById("dod_req1") != null) {document.getElementById("dod_req1").style.opacity =.2; } if(document.getElementById("sha_req4") != null) {document.getElementById("sha_req4").style.opacity =.2; } if(document.getElementById("spi_req3") != null) {document.getElementById("spi_req3").style.opacity =.2; }}
	if (!Game.magic1) {document.getElementById("gan_req1").style.opacity = .2; if(document.getElementById("sha_req2") != null) {document.getElementById("sha_req2").style.opacity =.2; }}
	if (!Game.light_arrows) {document.getElementById("gan_req2").style.opacity = .2;}
	if (!Game.bow1) {document.getElementById("gan_req3").style.opacity = .2; if(document.getElementById("for_req2") != null) {document.getElementById("for_req2").style.opacity =.2; }}
	if (!Game.hookshot) {if(document.getElementById("for_req1") != null) {document.getElementById("for_req1").style.opacity =.2; } if(document.getElementById("sha_req5") != null) {document.getElementById("sha_req5").style.opacity =.2; } if(document.getElementById("spi_req4") != null) {document.getElementById("spi_req4").style.opacity =.2; }}
	if (!Game.goron_bracelet) {if(document.getElementById("for_req3") != null) {document.getElementById("for_req3").style.opacity =.2; }}
	if (!Game.hammer) {if(document.getElementById("fir_req1") != null) {document.getElementById("fir_req1").style.opacity =.2; }}
	if (!Game.rutos_letter) {if(document.getElementById("jab_req1") != null) {document.getElementById("jab_req1").style.opacity =.2; }}
	if (!Game.boomerang) {if(document.getElementById("jab_req2") != null) {document.getElementById("jab_req2").style.opacity =.2; }}
	if (!Game.iron_boots) {if(document.getElementById("wat_req1") != null) {document.getElementById("wat_req1").style.opacity =.2; }}
	if (!Game.scale2) {if(document.getElementById("wat_req2") != null) {document.getElementById("wat_req2").style.opacity =.2; }}
	if (!Game.longshot) {if(document.getElementById("wat_req3") != null) {document.getElementById("wat_req3").style.opacity =.2; }}
	if (!Game.silver_gauntlets) {if(document.getElementById("spi_req1") != null) {document.getElementById("spi_req1").style.opacity =.2; }}
	if (!Game.mirror_shield) {if(document.getElementById("spi_req2") != null) {document.getElementById("spi_req2").style.opacity =.2; }}
	if (!Game.dins_fire) {if(document.getElementById("sha_req1") != null) {document.getElementById("sha_req1").style.opacity =.2; }}
	if (!Game.hover_boots) {if(document.getElementById("sha_req3") != null) {document.getElementById("sha_req3").style.opacity =.2; }}
	
	if (Game.lullaby) {document.getElementById("lullabyimg").style.opacity =1;}
	if (Game.eponas) {document.getElementById("eponasimg").style.opacity =1;}
	if (Game.sarias) {document.getElementById("sariasimg").style.opacity =1;}
	if (Game.suns_song) {document.getElementById("sunsimg").style.opacity =1;}
	if (Game.song_of_time) {document.getElementById("sotimg").style.opacity =1;}
	if (Game.song_of_storms) {document.getElementById("sosimg").style.opacity =1;}
	if (Game.minuet) {document.getElementById("minuetimg").style.opacity =1;}
	if (Game.bolero) {document.getElementById("boleroimg").style.opacity =1;}
	if (Game.serenade) {document.getElementById("serenadeimg").style.opacity =1;}
	if (Game.requiem) {document.getElementById("requiemimg").style.opacity =1;}
	if (Game.nocturne) {document.getElementById("nocturneimg").style.opacity =1;}
	if (Game.prelude) {document.getElementById("preludeimg").style.opacity =1;}
	
	if (Game.bottle1 || Logic.bottle) {document.getElementById("bottleimg").style.opacity =1;}
	if (Game.farores_wind) {document.getElementById("faroresimg").style.opacity =1;}
	if (Game.fire_arrows) {document.getElementById("firearrowsimg").style.opacity =1;}
	if (Game.scale1) {document.getElementById("silverscaleimg").style.opacity =1;}
	if (Game.lens_of_truth) {document.getElementById("lensimg").style.opacity =1;}
	if (Game.golden_gauntlets) {document.getElementById("goldengauntletsimg").style.opacity =1;}
	if (Game.slingshot1) {document.getElementById("slingshotimg").style.opacity =1;}
	
	/**if (Game.minuet) {document.getElementById("min_note").style.opacity = 1;}
	if (Game.bolero) {document.getElementById("bol_note").style.opacity = 1;}
	if (Game.serenade) {document.getElementById("ser_note").style.opacity = 1;}
	if (Game.requiem) {document.getElementById("req_note").style.opacity = 1;}
	if (Game.nocturne) {document.getElementById("noc_note").style.opacity = 1;}
	if (Game.prelude) {document.getElementById("pre_note").style.opacity = 1;}*/
	
	if (Check.deku_queen_gohma != "unknown") {if (document.getElementById("text_deku") != null) {document.getElementById("text_deku").style.opacity=.2}}
	if (Check.dodongos_king_dodongo != "unknown") {if (document.getElementById("text_dodongos") != null) {document.getElementById("text_dodongos").style.opacity=.2}}
	if (Check.jabu_barinade != "unknown") {if (document.getElementById("text_jabu") != null) {document.getElementById("text_jabu").style.opacity=.2}}
	if (Check.forest14 != "unknown") {if (document.getElementById("text_forest") != null) {document.getElementById("text_forest").style.opacity=.2}}
	if (Check.fire6 != "unknown") {if (document.getElementById("text_fire") != null) {document.getElementById("text_fire").style.opacity=.2}}
	if (Check.water11 != "unknown") {if (document.getElementById("text_water") != null) {document.getElementById("text_water").style.opacity=.2}}
	if (Check.spirit20 != "unknown") {if (document.getElementById("text_spirit") != null) {document.getElementById("text_spirit").style.opacity=.2}}
	if (Check.shadow18 != "unknown") {if (document.getElementById("text_shadow") != null) {document.getElementById("text_shadow").style.opacity=.2}}
	if (document.getElementById("text_pocket") != null) {document.getElementById("text_pocket").style.opacity=.2}
	
	if (document.getElementById("mido_1").style.display == "none" && document.getElementById("mido_2").style.display == "none" && document.getElementById("mido_3").style.display == "none" && document.getElementById("mido_4").style.display == "none" && document.getElementById("kokiri_sword").style.display == "none" && document.getElementById("kokiri_song_of_storms").style.display == "none") {document.getElementById("kokiri_break").style.display = "none";} else {document.getElementById("kokiri_break").style.display = "inline-block";}
	if (document.getElementById("talons_chickens").style.display == "none" && document.getElementById("back_of_ranch").style.display == "none") {document.getElementById("ranch_break").style.display = "none";} else {document.getElementById("ranch_break").style.display = "inline-block";}
	if (document.getElementById("hyrule_forest_boulder").style.display == "none" && document.getElementById("hyrule_open_grotto").style.display == "none" && document.getElementById("hyrule_hp_scrub").style.display == "none" && document.getElementById("hyrule_boulder_of_destiny").style.display == "none" && document.getElementById("hyrule_tektite_grotto").style.display == "none") {document.getElementById("field_break").style.display = "none";} else {document.getElementById("field_break").style.display = "inline-block";}
	if (document.getElementById("gerudovalley_box").style.display == "none" && document.getElementById("gerudovalley_waterfall").style.display == "none" && document.getElementById("gerudo_hammer").style.display == "none") {document.getElementById("valley_break").style.display = "none";} else {document.getElementById("valley_break").style.display = "inline-block";}
	if (document.getElementById("hylia_child_fishing").style.display == "none" && document.getElementById("hylia_bottle").style.display == "none" && document.getElementById("hylia_adult_fishing").style.display == "none" && document.getElementById("hylia_lab_top").style.display == "none" && document.getElementById("hylia_lab_dive").style.display == "none" && document.getElementById("hylia_sun_shoot").style.display == "none") {document.getElementById("hylia_break").style.display = "none";} else {document.getElementById("hylia_break").style.display = "inline-block";}
	if (document.getElementById("market_slingshot_game").style.display == "none" && document.getElementById("richard").style.display == "none" && document.getElementById("market_bowling_1").style.display == "none" && document.getElementById("market_bowling_2").style.display == "none" && document.getElementById("market_lens_game").style.display == "none" && document.getElementById("poes").style.display == "none") {document.getElementById("market_break").style.display = "none";} else {document.getElementById("market_break").style.display = "inline-block";}
	if (document.getElementById("dins_fairy").style.display == "none") {document.getElementById("dfairy_break").style.display = "none";} else {document.getElementById("dfairy_break").style.display = "inline-block";}
	if (document.getElementById("g_fairy").style.display == "none") {document.getElementById("gfairy_break").style.display = "none";} else {document.getElementById("gfairy_break").style.display = "inline-block";}
	if (document.getElementById("lacs").style.display == "none") {document.getElementById("tot_break").style.display = "none";} else {document.getElementById("tot_break").style.display = "inline-block";}
	if (document.getElementById("fountain_fairy").style.display == "none" && document.getElementById("ice_glacier_hp").style.display == "none" && document.getElementById("ice_bottom_of_fountain").style.display == "none") {document.getElementById("fountain_break").style.display = "none";} else {document.getElementById("fountain_break").style.display = "inline-block";}
	if (document.getElementById("deku_lobby").style.display == "none" && document.getElementById("deku_slingshot").style.display == "none" && document.getElementById("deku_slingshot_room_side").style.display == "none" && document.getElementById("deku_compass").style.display == "none" && document.getElementById("deku_basement").style.display == "none" && document.getElementById("deku_queen_gohma").style.display == "none") {document.getElementById("deku_break").style.display = "none";} else {document.getElementById("deku_break").style.display = "inline-block";}
	if (document.getElementById("ocarina_game").style.display == "none" && document.getElementById("lost_woods_grotto").style.display == "none" && document.getElementById("lost_woods_scrub_grotto").style.display == "none" && document.getElementById("bridge_scrub").style.display == "none" && document.getElementById("target").style.display == "none" && document.getElementById("skull_kid").style.display == "none" && document.getElementById("theater").style.display == "none") {document.getElementById("lostwoods_break").style.display = "none";} else {document.getElementById("lostwoods_break").style.display = "inline-block";}
	if (document.getElementById("wolfos_grotto").style.display == "none") {document.getElementById("sfm_break").style.display = "none";} else {document.getElementById("sfm_break").style.display = "inline-block";}
	if (document.getElementById("rolling_goron").style.display == "none" && document.getElementById("goron_dance").style.display == "none" && document.getElementById("goron_pot").style.display == "none" && document.getElementById("goron_maze_1").style.display == "none" && document.getElementById("goron_maze_2").style.display == "none" && document.getElementById("goron_maze_3").style.display == "none" && document.getElementById("goron_link").style.display == "none") {document.getElementById("gcity_break").style.display = "none";} else {document.getElementById("gcity_break").style.display = "inline-block";}
	if (document.getElementById("dodongos_map").style.display == "none" && document.getElementById("dodongos_compass").style.display == "none" && document.getElementById("dodongos_bomb_flower_platform").style.display == "none" && document.getElementById("dodongos_bomb_bag").style.display == "none" && document.getElementById("dodongos_end_of_bridge").style.display == "none" && document.getElementById("dodongos_above_king").style.display == "none" && document.getElementById("dodongos_king_dodongo").style.display == "none") {document.getElementById("dodongos_break").style.display = "none";} else {document.getElementById("dodongos_break").style.display = "inline-block";}
	if (document.getElementById("trail_bombable").style.display == "none" && document.getElementById("trail_dodongos_top").style.display == "none" && document.getElementById("trail_song_of_storms").style.display == "none" && document.getElementById("crater_peak_fairy").style.display == "none" && document.getElementById("trade_quest").style.display == "none") {document.getElementById("trail_break").style.display = "none";} else {document.getElementById("trail_break").style.display = "inline-block";}
	if (document.getElementById("man_on_roof").style.display == "none" && document.getElementById("kakariko_grotto").style.display == "none" && document.getElementById("windmill").style.display == "none" && document.getElementById("anju").style.display == "none" && document.getElementById("cow_house").style.display == "none" && document.getElementById("archery_game").style.display == "none" && document.getElementById("redead_grotto").style.display == "none" && document.getElementById("anjus_chickens").style.display == "none" && document.getElementById("tokens_10").style.display == "none" && document.getElementById("tokens_20").style.display == "none" && document.getElementById("tokens_30").style.display == "none" && document.getElementById("tokens_40").style.display == "none" && document.getElementById("tokens_50").style.display == "none") {document.getElementById("kakariko_break").style.display = "none";} else {document.getElementById("kakariko_break").style.display = "inline-block";}
	if (document.getElementById("shield_grave").style.display == "none" && document.getElementById("gravedigging_tour").style.display == "none" && document.getElementById("suns_grave").style.display == "none" && document.getElementById("fire_grave").style.display == "none" && document.getElementById("graveyard_box").style.display == "none" && document.getElementById("race_1").style.display == "none" && document.getElementById("race_2").style.display == "none") {document.getElementById("graveyard_break").style.display = "none";} else {document.getElementById("graveyard_break").style.display = "inline-block";}
	if (document.getElementById("river_pillar").style.display == "none" && document.getElementById("river_grotto").style.display == "none" && document.getElementById("river_ledge").style.display == "none" && document.getElementById("frogs_1").style.display == "none" && document.getElementById("frogs_2").style.display == "none") {document.getElementById("river_break").style.display = "none";} else {document.getElementById("river_break").style.display = "inline-block";}
	if (document.getElementById("zora_diving").style.display == "none" && document.getElementById("zora_torches").style.display == "none" && document.getElementById("thaw_king").style.display == "none") {document.getElementById("domain_break").style.display = "none";} else {document.getElementById("domain_break").style.display = "inline-block";}
	if (document.getElementById("colossus_bean").style.display == "none" && document.getElementById("colossus_fairy").style.display == "none") {document.getElementById("colossus_break").style.display = "none";} else {document.getElementById("colossus_break").style.display = "inline-block";}
	if (document.getElementById("wasteland").style.display == "none") {document.getElementById("wasteland_break").style.display = "none";} else {document.getElementById("wasteland_break").style.display = "inline-block";}
	if (document.getElementById("gerudo_roof").style.display == "none" && document.getElementById("gerudo_archery_1").style.display == "none" && document.getElementById("gerudo_archery_2").style.display == "none") {document.getElementById("fortress_break").style.display = "none";} else {document.getElementById("fortress_break").style.display = "inline-block";}
	 
	if (Game.changetheme == 1) {Game.themeChange = true; Game.changetheme = 0;}
	
			
		/*
	if(!Game.song_of_storms) {Game.logically_accessible -=11;}
	else{
		if (Game.bomb_bag1 && Game.lullaby && Game.can_see && Game.kokiri_sword) {}
		else{
			Game.logically_accessible -= 2;
		if (!Game.bomb_bag1 && !Game.goron_bracelet) {Game.logically_accessible -=3*.75}
		else if (!Game.bomb_bag1) {Game.logically_accessible -=2*.75}
		if (!Game.lullaby) {Game.logically_accessible -=5*.75}
		else if (!Game.can_see && !Game.kokiri_sword) {Game.logically_accessible -=2*.75}
		else if (Game.can_see && Game.kokiri_sword) {}
		else {Game.logically_accessible -=1*.75}
		if (!Game.can_see) {Game.logically_accessible -=4*.75}
		}
	}
	
		Game.logically_accessible +=1;
		Game.logically_accessible -=11;
		if (Game.can_enter_shadow) {Game.logically_accessible += 2*.58}
		var mult1 = 1;
		var mult2 = 1;
		var mult3 = 1;
		var mult4 = 1;
		if(!Game.goron_bracelet) {mult1 = .7; mult2 = .63; mult3 = .57; mult4 = .5;}
		if (Game.can_cross_shadow_gap) {Game.logically_accessible += 2*.58}
		if (Game.can_bomb_shadow_wall) {Game.logically_accessible += 3*.64+2*.64*mult1; if (Game.goron_bracelet){Game.logically_accessible += 2*.64}}
		if (Game.can_pass_shadow_hookshot_door){Game.logically_accessible += 3*.67*mult2}
		if (Game.can_ride_shadow_boat){Game.logically_accessible += 3*.72*mult3}
		if (Game.can_beat_shadow_boss) {Game.logically_accessible += 1*mult4}
	*/
	Game.logically_accessible = Number(Game.logically_accessible);
	Game.logically_accessible=Game.logically_accessible.toFixed(0);
	d = new Date();
	timeFuture = d.getTime();
	timeCurrent = timeFuture-timeStart;
	timeCurrent = timeCurrent *3.5/60;
	timeFinal = timeCurrent + timeLost;
	//skipValue = document.getElementById("go_input").value/(Game.checks_remaining-13) * 1508.33334 * 35/Game.logically_accessible;
	if (timeFinal > 0) {document.getElementById("time_difference").style.color="red"; }
	tMinutes = Math.floor(timeFinal / 60000);
	tSeconds = Math.floor(timeFinal % 60000 / 1000);
	//sMinutes = Math.floor(skipValue / 60);
	//sSeconds = Math.floor(skipValue % 60);
	rValue = Math.floor(timeFinal/1000 *1.3 + 60)
	rMinutes = Math.floor(rValue / 60);
	rSeconds = Math.floor(rValue % 60);
	//goodCheckPercent = Math.floor(document.getElementById("go_input").value/(Game.checks_remaining-13)*100);
	document.getElementById("checks_remaining").innerHTML="Remaining: "+Game.checks_remaining;
	document.getElementById("logically_accessible").innerHTML="&nbsp; &nbsp; In Logic: "+Game.logically_accessible;
	//document.getElementById("good_check_percent").innerHTML="&nbsp; &nbsp;&nbsp;" + goodCheckPercent + "%";
	//document.getElementById("time_difference").innerHTML="" + tMinutes + "m" + tSeconds + "s";
	//document.getElementById("skip_req").innerHTML="" + rMinutes + "m" + rSeconds + "s";
	//document.getElementById("skip_value").innerHTML="" + sMinutes + "m" + sSeconds + "s";
    
}