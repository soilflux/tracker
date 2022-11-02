function onFileLoad(elementId, event) {
	SpoilerJSON = JSON.parse(event.target.result);
	simActive = true;
	
	document.getElementById("simLog").style.display = "inline-block";
	document.getElementById("simLog").value = "Starting with " + SpoilerJSON["locations"]["Song from Impa"] + " and " + SpoilerJSON["locations"]["Links Pocket"] + "\n";
	document.getElementById("simCheckAltar").style.display = "block";
	document.getElementById("simCheckChildSpawn").style.display = "block";
	document.getElementById("simCheckAdultSpawn").style.display = "block";
	document.getElementById("gossips").value = "ON";
	
	if(SpoilerJSON["randomized_settings"]["starting_age"] == undefined) {
		// if random starting age is not on, assume child vanilla spawn
		document.getElementById("simLog").value = "Child Spawn: KF Links House\n" + document.getElementById("simLog").value;
	}
	else {
		if(SpoilerJSON["randomized_settings"]["starting_age"] == "child")
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

rewardSpoilerLocations = ["Links Pocket", "Queen Gohma", "King Dodongo", "Barinade", "Phantom Ganon", "Volvagia", "Morpha", "Bongo Bongo", "Twinrova"];

rewardInputDict = {
	"Links Pocket" : "fr", 
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
	
	if(SpoilerJSON["locations"]["Links Pocket"] == "Light Medallion")
		m[0] = rewardInputDict["Links Pocket"];
	else if(SpoilerJSON["locations"]["Links Pocket"] == "Forest Medallion")
		m[1] = rewardInputDict["Links Pocket"];
	else if(SpoilerJSON["locations"]["Links Pocket"] == "Fire Medallion")
		m[2] = rewardInputDict["Links Pocket"];
	else if(SpoilerJSON["locations"]["Links Pocket"] == "Water Medallion")
		m[3] = rewardInputDict["Links Pocket"];
	else if(SpoilerJSON["locations"]["Links Pocket"] == "Shadow Medallion")
		m[4] = rewardInputDict["Links Pocket"];
	else if(SpoilerJSON["locations"]["Links Pocket"] == "Spirit Medallion")
		m[5] = rewardInputDict["Links Pocket"];
	else if(SpoilerJSON["locations"]["Links Pocket"] == "Kokiri Emerald")
		s[0] = rewardInputDict["Links Pocket"];
	else if(SpoilerJSON["locations"]["Links Pocket"] == "Goron Ruby")
		s[1] = rewardInputDict["Links Pocket"];
	else if(SpoilerJSON["locations"]["Links Pocket"] == "Zora Sapphire")
		s[2] = rewardInputDict["Links Pocket"];
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
    else if (child_region == "ZD Shop")
        input = "zdshop";
    else if (child_region == "Zoras Domain" || child_region == "Zoras Domain" || child_region == "ZR Behind Waterfall")
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

var LocationToSpoilerName = {
	"mido_1": "KF Midos Top Left Chest",
	"mido_2": "KF Midos Top Right Chest",
	"mido_3": "KF Midos Bottom Left Chest",
	"mido_4": "KF Midos Bottom Right Chest",
	"kokiri_sword": "KF Kokiri Sword Chest",
	"kokiri_storms": "KF Storms Grotto Chest",
	"talons_chickens": "LLR Talons Chickens",
	"back_of_ranch": "LLR Freestanding PoH",
	"hyrule_remote_grotto": "HF Southeast Grotto Chest",
	"hyrule_open_grotto": "HF Open Grotto Chest",
	"hyrule_hp_scrub": "HF Deku Scrub Grotto",
	"hyrule_boulder_of_destiny": "HF Near Market Grotto Chest",
	"hyrule_tektite_grotto": "HF Tektite Grotto Freestanding PoH",
	"gerudovalley_box": "GV Crate Freestanding PoH",
	"gerudovalley_fall": "GV Waterfall Freestanding PoH",
	"gerudo_hammer": "GV Chest",
	"hylia_child_fishing": "LH Child Fishing",
	"hylia_bottle": "LH Underwater Item",
	"hylia_adult_fishing": "LH Adult Fishing",
	"hylia_lab_top": "LH Freestanding PoH",
	"hylia_lab_dive": "LH Lab Dive",
	"hylia_sun_shoot": "LH Sun",
	"market_slingshot_game": "Market Shooting Gallery Reward",
	"richard": "Market Lost Dog",
	"market_bowling_1": "Market Bombchu Bowling First Prize",
	"market_bowling_2": "Market Bombchu Bowling Second Prize",
	"market_lens_game": "Market Treasure Chest Game Reward",
	"poes": "Market 10 Big Poes",
	"lacs": "ToT Light Arrows Cutscene",
	"dins_fairy": "HC Great Fairy Reward",
	"g_fairy": "OGC Great Fairy Reward",
	"fountain_fairy": "ZF Great Fairy Reward",
	"ice_glacier_hp": "ZF Iceberg Freestanding PoH",
	"ice_bottom_of_fountain": "ZF Bottom Freestanding PoH",
	"ice_map": "Ice Cavern Map Chest",
	"ice_compass": "Ice Cavern Compass Chest",
	"ice_hp": "Ice Cavern Freestanding PoH",
	"ice_irons": "Ice Cavern Iron Boots Chest",
	"deku_lobby": "Deku Tree Map Chest",
	"deku_slingshot": "Deku Tree Slingshot Chest",
	"deku_slingshot_room_side": "Deku Tree Slingshot Room Side Chest",
	"deku_compass": "Deku Tree Compass Chest",
	"deku_compass_room_side": "Deku Tree Compass Room Side Chest",
	"deku_basement": "Deku Tree Basement Chest",
	"deku_queen_gohma": "Deku Tree Queen Gohma Heart",
	"ocarina_game": "LW Ocarina Memory Game",
	"lost_woods_grotto": "LW Near Shortcuts Grotto Chest",
	"lost_woods_scrub_grotto": "LW Deku Scrub Grotto Front",
	"bridge_scrub": "LW Deku Scrub Near Bridge",
	"target": "LW Target in Woods",
	"skull_kid": "LW Skull Kid",
	"theater": "Deku Theater Skull Mask",
	"wolfos_grotto": "SFM Wolfos Grotto Chest",
	"rolling_goron": "GC Rolling Goron as Child",
	"goron_dance": "GC Darunias Joy",
	"goron_pot": "GC Pot Freestanding PoH",
	"goron_maze_1": "GC Maze Center Chest",
	"goron_maze_2": "GC Maze Right Chest",
	"goron_maze_3": "GC Maze Left Chest",
	"goron_link": "GC Rolling Goron as Adult",
	"dodongos_map": "Dodongos Cavern Map Chest",
	"dodongos_compass": "Dodongos Cavern Compass Chest",
	"dodongos_bomb_flower_platform": "Dodongos Cavern Bomb Flower Platform Chest",
	"dodongos_bomb_bag": "Dodongos Cavern Bomb Bag Chest",
	"dodongos_end_of_bridge": "Dodongos Cavern End of Bridge Chest",
	"dodongos_above_king": "Dodongos Cavern Boss Room Chest",
	"dodongos_king_dodongo": "Dodongos Cavern King Dodongo Heart",
	"trail_bombable": "DMT Chest",
	"trail_dodongos_top": "DMT Freestanding PoH",
	"trail_storms": "DMT Storms Grotto Chest",
	"trail_fairy": "DMT Great Fairy Reward",
	"trade_quest": "DMT Biggoron",
	"crater_bean": "DMC Volcano Freestanding PoH",
	"crater_hammer_fairy": "DMC Great Fairy Reward",
	"crater_grotto": "DMC Upper Grotto Chest",
	"crater_nook_hp": "DMC Wall Freestanding PoH",
	"man_on_roof": "Kak Man on Roof",
	"kakariko_grotto": "Kak Open Grotto Chest",
	"windmill": "Kak Windmill Freestanding PoH",
	"anju": "Kak Anju as Adult",
	"cow_house": "Kak Impas House Freestanding PoH",
	"archery_game": "Kak Shooting Gallery Reward",
	"redead_grotto": "Kak Redead Grotto Chest",
	"anjus_chickens": "Kak Anju as Child",
	"tokens_10": "Kak 10 Gold Skulltula Reward",
	"tokens_20": "Kak 20 Gold Skulltula Reward",
	"tokens_30": "Kak 30 Gold Skulltula Reward",
	"tokens_40": "Kak 40 Gold Skulltula Reward",
	"tokens_50": "Kak 50 Gold Skulltula Reward",
	"shield_grave": "Graveyard Shield Grave Chest",
	"gravedigging_tour": "Graveyard Dampe Gravedigging Tour",
	"redead_grave": "Graveyard Heart Piece Grave Chest",
	"composers_grave": "Graveyard Royal Familys Tomb Chest",
	"graveyard_box": "Graveyard Freestanding PoH",
	"race_1": "Graveyard Hookshot Chest",
	"race_2": "Graveyard Dampe Race Freestanding PoH",
	"river_pillar": "ZR Near Open Grotto Freestanding PoH",
	"frogs_1": "ZR Frogs in the Rain",
	"river_grotto": "ZR Open Grotto Chest",
	"river_ledge": "ZR Near Domain Freestanding PoH",
	"frogs_2": "ZR Frogs Ocarina Game",
	"zora_diving": "ZD Diving Minigame",
	"zora_torches": "ZD Chest",
	"thaw_king": "ZD King Zora Thawed",
	"colossus_bean": "Colossus Freestanding PoH",
	"colossus_fairy": "Colossus Great Fairy Reward",
	"wasteland": "Wasteland Chest",
	"gerudo_roof": "GF Chest",
	"gerudo_archery_1": "GF HBA 1000 Points",
	"gerudo_archery_2": "GF HBA 1500 Points",
	"jabu_boomerang": "Jabu Jabus Belly Boomerang Chest",
	"jabu_map": "Jabu Jabus Belly Map Chest",
	"jabu_compass": "Jabu Jabus Belly Compass Chest",
	"jabu_barinade": "Jabu Jabus Belly Barinade Heart",
	"forest_first": "Forest Temple First Room Chest",
	"forest_stalfos": "Forest Temple First Stalfos Chest",
	"forest_midCourtyard": "Forest Temple Raised Island Courtyard Chest",
	"forest_highCourtyard": "Forest Temple Map Chest",
	"forest_lowCourtyard": "Forest Temple Well Chest",
	"forest_blockRoom": "Forest Temple Eye Switch Chest",
	"forest_bossKey": "Forest Temple Boss Key Chest",
	"forest_floormaster": "Forest Temple Floormaster Chest",
	"forest_red": "Forest Temple Red Poe Chest",
	"forest_bow": "Forest Temple Bow Chest",
	"forest_blue": "Forest Temple Blue Poe Chest",
	"forest_fallingCeiling": "Forest Temple Falling Ceiling Room Chest",
	"forest_nearBoss": "Forest Temple Basement Chest",
	"forest_phantomGanon": "Forest Temple Phantom Ganon Heart",
	"fire_nearBoss": "Fire Temple Near Boss Chest",
	"fire_hammer1": "Fire Temple Flare Dancer Chest",
	"fire_hammer2": "Fire Temple Boss Key Chest",
	"fire_lavaOpen": "Fire Temple Big Lava Room Lower Open Door Chest",
	"fire_lavaBomb": "Fire Temple Big Lava Room Blocked Door Chest",
	"fire_volvagia": "Fire Temple Volvagia Heart",
	"fire_lowerMaze": "Fire Temple Boulder Maze Lower Chest",
	"fire_sideRoom": "Fire Temple Boulder Maze Side Room Chest",
	"fire_map": "Fire Temple Map Chest",
	"fire_upperMaze": "Fire Temple Boulder Maze Upper Chest",
	"fire_shortcut": "Fire Temple Boulder Maze Shortcut Chest",
	"fire_scarecrow": "Fire Temple Scarecrow Chest",
	"fire_compass": "Fire Temple Compass Chest",
	"fire_sotGoron": "Fire Temple Highest Goron Chest",
	"fire_top": "Fire Temple Megaton Hammer Chest",
	"water_compass": "Water Temple Compass Chest",
	"water_map": "Water Temple Map Chest",
	"water_cracked": "Water Temple Cracked Wall Chest",
	"water_torches": "Water Temple Torches Chest",
	"water_block": "Water Temple Central Bow Target Chest",
	"water_pillar": "Water Temple Central Pillar Chest",
	"water_dLink": "Water Temple Longshot Chest",
	"water_river": "Water Temple River Chest",
	"water_dragon": "Water Temple Dragon Chest",
	"water_bossKey": "Water Temple Boss Key Chest",
	"water_morpha": "Water Temple Morpha Heart",
	"spirit_childLeft": "Spirit Temple Child Bridge Chest",
	"spirit_childRight": "Spirit Temple Child Early Torches Chest",
	"spirit_childClimb1": "Spirit Temple Child Climb North Chest",
	"spirit_childClimb2": "Spirit Temple Child Climb East Chest",
	"spirit_map": "Spirit Temple Map Chest",
	"spirit_sunRoom": "Spirit Temple Sun Block Room Chest",
	"spirit_rightHand": "Spirit Temple Silver Gauntlets Chest",
	"spirit_adultLeft": "Spirit Temple Compass Chest",
	"spirit_adultRight": "Spirit Temple Early Adult Right Chest",
	"spirit_rotatingMirror1": "Spirit Temple First Mirror Left Chest",
	"spirit_rotatingMirror2": "Spirit Temple First Mirror Right Chest",
	"spirit_lullabyHand": "Spirit Temple Statue Room Hand Chest",
	"spirit_lullabyHigh": "Spirit Temple Statue Room Northeast Chest",
	"spirit_nearFourArmos": "Spirit Temple Near Four Armos Chest",
	"spirit_invisible1": "Spirit Temple Hallway Right Invisible Chest",
	"spirit_invisible2": "Spirit Temple Hallway Left Invisible Chest",
	"spirit_leftHand": "Spirit Temple Mirror Shield Chest",
	"spirit_bossKey": "Spirit Temple Boss Key Chest",
	"spirit_tippyTop": "Spirit Temple Topmost Chest",
	"spirit_twinrova": "Spirit Temple Twinrova Heart",
	"shadow_map": "Shadow Temple Map Chest",
	"shadow_hovers": "Shadow Temple Hover Boots Chest",
	"shadow_compass": "Shadow Temple Compass Chest",
	"shadow_earlySilvers": "Shadow Temple Early Silver Rupee Chest",
	"shadow_spinning1": "Shadow Temple Invisible Blades Visible Chest",
	"shadow_spinning2": "Shadow Temple Invisible Blades Invisible Chest",
	"shadow_spikesLower": "Shadow Temple Falling Spikes Lower Chest",
	"shadow_spikesUpper": "Shadow Temple Falling Spikes Upper Chest",
	"shadow_spikesSwitch": "Shadow Temple Falling Spikes Switch Chest",
	"shadow_redeadSilvers": "Shadow Temple Invisible Spikes Chest",
	"shadow_pot": "Shadow Temple Freestanding Key",
	"shadow_wind": "Shadow Temple Wind Hint Chest",
	"shadow_bombable": "Shadow Temple After Wind Hidden Chest",
	"shadow_gibdos": "Shadow Temple After Wind Enemy Chest",
	"shadow_dins1": "Shadow Temple Spike Walls Left Chest",
	"shadow_dins2": "Shadow Temple Boss Key Chest",
	"shadow_floormaster": "Shadow Temple Invisible Floormaster Chest",
	"shadow_bongo": "Shadow Temple Bongo Bongo Heart",
	"ganons_lightTrial1": "Ganons Castle Light Trial First Left Chest",
	"ganons_lightTrial2": "Ganons Castle Light Trial Second Left Chest",
	"ganons_lightTrial3": "Ganons Castle Light Trial Third Left Chest",
	"ganons_lightTrial4": "Ganons Castle Light Trial First Right Chest",
	"ganons_lightTrial5": "Ganons Castle Light Trial Second Right Chest",
	"ganons_lightTrial6": "Ganons Castle Light Trial Third Right Chest",
	"ganons_lightTrial7": "Ganons Castle Light Trial Invisible Enemies Chest",
	"ganons_lightTrialLullaby": "Ganons Castle Light Trial Lullaby Chest",
	"ganons_spiritTrial1": "Ganons Castle Spirit Trial Crystal Switch Chest",
	"ganons_spiritTrial2": "Ganons Castle Spirit Trial Invisible Chest",
	"ganons_forestTrial": "Ganons Castle Forest Trial Chest",
	"ganons_waterTrial1": "Ganons Castle Water Trial Left Chest",
	"ganons_waterTrial2": "Ganons Castle Water Trial Right Chest",
	"ganons_shadowTrial1": "Ganons Castle Shadow Trial Front Chest",
	"ganons_shadowTrial2": "Ganons Castle Shadow Trial Golden Gauntlets Chest",
	"ganons_bossKey": "Ganons Tower Boss Key Chest",
	"gtg_lobbyLeft": "Gerudo Training Ground Lobby Left Chest",
	"gtg_lobbyRight": "Gerudo Training Ground Lobby Right Chest",
	"gtg_stalfos": "Gerudo Training Ground Stalfos Chest",
	"gtg_wolfos": "Gerudo Training Ground Before Heavy Block Chest",
	"gtg_silvers1": "Gerudo Training Ground Heavy Block First Chest",
	"gtg_silvers2": "Gerudo Training Ground Heavy Block Second Chest",
	"gtg_silvers3": "Gerudo Training Ground Heavy Block Third Chest",
	"gtg_silvers4": "Gerudo Training Ground Heavy Block Fourth Chest",
	"gtg_eyes": "Gerudo Training Ground Eye Statue Chest",
	"gtg_aboveEyes": "Gerudo Training Ground Near Scarecrow Chest",
	"gtg_keese": "Gerudo Training Ground Hammer Room Clear Chest",
	"gtg_flamesChest": "Gerudo Training Ground Hammer Room Switch Chest",
	"gtg_freestanding": "Gerudo Training Ground Freestanding Key",
	"gtg_right2": "Gerudo Training Ground Maze Right Central Chest",
	"gtg_right3": "Gerudo Training Ground Maze Right Side Chest",
	"gtg_beamos": "Gerudo Training Ground Beamos Chest",
	"gtg_left1": "Gerudo Training Ground Hidden Ceiling Chest",
	"gtg_left2": "Gerudo Training Ground Maze Path First Chest",
	"gtg_left3": "Gerudo Training Ground Maze Path Second Chest",
	"gtg_left4": "Gerudo Training Ground Maze Path Third Chest",
	"gtg_final": "Gerudo Training Ground Maze Path Final Chest",
	"gtg_toilet": "Gerudo Training Ground Underwater Silver Rupee Chest",
	"well_fakeRight": "Bottom of the Well Right Bottom Fake Wall Chest",
	"well_centerSmall": "Bottom of the Well Center Skulltula Chest",
	"well_backBombable": "Bottom of the Well Back Left Bombable Chest",
	"well_waterLeft": "Bottom of the Well Underwater Left Chest",
	"well_coffin": "Bottom of the Well Freestanding Key",
	"well_centerBig": "Bottom of the Well Compass Chest",
	"well_fakeLeft": "Bottom of the Well Front Left Fake Wall Chest",
	"well_frontBombable": "Bottom of the Well Front Center Bombable Chest",
	"well_waterFront": "Bottom of the Well Underwater Front Chest",
	"well_deadHand": "Bottom of the Well Lens of Truth Chest",
	"well_invisible": "Bottom of the Well Invisible Chest",
	"well_locked1": "Bottom of the Well Fire Keese Chest",
	"well_locked2": "Bottom of the Well Like Like Chest",
	"well_basement": "Bottom of the Well Map Chest",
	"zeldasSpot": "Song from Impa",
	"eponasSpot": "Song from Malon",
	"sariasSpot": "Song from Saria",
	"stormsSpot": "Song from Windmill",
	"sunsSpot": "Song from Royal Familys Tomb",
	"boleroSpot": "Sheik in Crater",
	"minuetSpot": "Sheik in Forest",
	"requiemSpot": "Sheik at Colossus",
	"serenadeSpot": "Sheik in Ice Cavern",
	"preludeSpot": "Sheik at Temple",
	"nocturneSpot": "Sheik in Kakariko",
	"oot": "Song from Ocarina of Time",
	"h_deku_left" : "KF (Deku Tree Left)",
	"h_deku_right" : "KF (Deku Tree Right)",
	"h_near_lw" : "KF (Outside Storms)",
	"h_kok_sos" : "KF (Storms Grotto)",
	"h_hyrule_remote" : "HF (Southeast Grotto)",
	"h_hyrule_open" : "HF (Open Grotto)",
	"h_hyrule_destiny" : "HF (Near Market Grotto)",
	"h_hyrule_web" : "HF (Cow Grotto)",
	"h_valley" : "GV (Waterfall)",
	"h_lab" : "LH (Lab)",
	"h_back_right_lake" : "LH (Southeast Corner)",
	"h_back_left_lake" : "LH (Southwest Corner)",
	"h_tot_1" : "ToT (Left)",
	"h_tot_2" : "ToT (Left-Center)",
	"h_tot_3" : "ToT (Right-Center)",
	"h_tot_4" : "ToT (Right)",
	"h_castle_1" : "HC (Malon)",
	"h_castle_2" : "HC (Rock Wall)",
	"h_castle_sos" : "HC (Storms Grotto)",
	"h_fountain_fairy" : "ZF (Fairy)",
	"h_fountain" : "ZF (Jabu)",
	"h_lw_bridge" : "LW (Bridge)",
	"h_lw_grotto" : "LW (Near Shortcuts Grotto)",
	"h_saria" : "SFM (Saria)",
	"h_sfm_1" : "SFM (Maze Upper)",
	"h_sfm_2" : "SFM (Maze Lower)",
	"h_goron_maze" : "GC (Maze)",
	"h_medigoron" : "GC (Medigoron)",
	"h_dodongos" : "Dodongos Cavern (Bombable Wall)",
	"h_trail_sos" : "DMT (Storms Grotto)",
	"h_biggoron" : "DMT (Biggoron)",
	"h_crater_grotto" : "DMC (Upper Grotto)",
	"h_crater_wall" : "DMC (Bombable Wall)",
	"h_kakariko_grotto" : "Kak (Open Grotto)",
	"h_nocturne" : "Graveyard (Shadow Temple)",
	"h_river_grotto" : "ZR (Open Grotto)",
	"h_river_pillar" : "ZR (Near Grottos)",
	"h_river_domain" : "ZR (Near Domain)",
	"h_domain" : "ZD (Mweep)",
	"h_colossus" : "Colossus (Spirit Temple)"
};

var SpoilerItemToInput = {
	"Bomb Bag" : "bom",
	"Boomerang" : "boo",
	"Bottle" : "bot",
	"Bottle with Red Potion" : "bot",
	"Bottle with Green Potion" : "bot",
	"Bottle with Blue Potion" : "bot",
	"Bottle with Fairy" : "bot",
	"Bottle with Bugs" : "bot",
	"Bottle with Fish" : "bot",
	"Bottle with Milk" : "bot",
	"Bottle with Poe" : "bot",
	"Bottle with Blue Fire" : "bot",
	"Bottle with Big Poe" : "big",
	"Bow" : "bow",
	"Dins Fire" : "din",
	"Farores Wind" : "far",
	"Fire Arrows" : "fir",
	"Goron Tunic" : "gor",
	"Megaton Hammer" : "ham",
	"Progressive Hookshot" : "hoo",
	"Hover Boots" : "hov",
	"Iron Boots" : "iro",
	"Kokiri Sword" : "kok",
	"Lens of Truth" : "len",
	"Rutos Letter" : "rut",
	"Light Arrows" : "lig",
	"Magic Meter" : "mag",
	"Mirror Shield" : "mir",
	"Progressive Scale" : "sca",
	"Slingshot" : "sli",
	"Progressive Strength Upgrade" : "str",
	"Prescription" : "pre",
	"Eyeball Frog" : "pre",
	"Eyedrops" : "pre",
	"Claim Check" : "cla",
	"Progressive Wallet" : "wal",
	"Zora Tunic" : "zor",
	"Zeldas Lullaby" : "lul",
	"Eponas Song" : "epo",
	"Sarias Song" : "sar",
	"Song of Time" : "sot",
	"Suns Song" : "sun",
	"Song of Storms" : "sos",
	"Minuet of Forest" : "min",
	"Bolero of Fire" : "bol",
	"Serenade of Water" : "ser",
	"Requiem of Spirit" : "req",
	"Nocturne of Shadow" : "noc",
	"Prelude of Light" : "pre",
	"Bombchus (10)" : "chu",
	"Bombchus (20)" : "chu",
	"Bombchus (5)" : "chu",
	"Small Key (Forest Temple)" : "sk",
	"Small Key (Fire Temple)" : "sk",
	"Small Key (Water Temple)" : "sk",
	"Small Key (Spirit Temple)" : "sk",
	"Small Key (Shadow Temple)" : "sk",
	"Small Key (Bottom of the Well)" : "sk",
	"Small Key (Gerudo Training Ground)" : "sk",
	"Small Key (Ganons Castle)" : "sk",
	"Boss Key (Forest Temple)" : "bk",
	"Boss Key (Fire Temple)" : "bk",
	"Boss Key (Water Temple)" : "bk",
	"Boss Key (Spirit Temple)" : "bk",
	"Boss Key (Shadow Temple)" : "bk"
};
