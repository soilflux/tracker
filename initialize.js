var Hinted = {};
var Check={};
var ChecksLockedBy={};
var ChecksPutInLogicBy = {};
var Game={};
var Person={};
var Map={};
var UI={};
var Location_Logic ={};
var Location_Locked_Logic={};
var Location_Locked_Logic2={};
var Location_PutIn_Logic={};
var Locked_Logic={};
var Locked_Logic2={};
var PutIn_Logic={};
var Location_Access={};
var Logic={};
var Location ={};
var gs = [];
var Area = [];
var Known = [];
var paused = false;
var woth1Locations = [];
var woth2Locations = [];
var woth3Locations = [];
var woth4Locations = [];
var woth5Locations = [];
var thisIsAKey = false;
var thisIsABossKey = false;
var temptext2 = "";

var AreaIndexes = [0,6,8,13,16,22,28,29,30,31,34,38,45,52,53,60,67,72,76,89,96,101,104,106,107,110,114,128,143,154,174,192,208,230,244];
	var SongIndexes = [0,245,255,0,0,0,244,0,253,0,252,0,0,246,0,0,0,249,247,248,0,0,251,0,0,0,0,0,0,0,0,0,0,0];
	var SongIndexes2 = [0,245,255,0,0,0,244,0,253,0,252,0,0,250,0,0,0,249,254,248,0,0,251,0,0,0,0,0,0,0,0,0,0,0];
		
	var hintStones = ["Crater: Hint", "Crater: Gr. Hint", "Trail: Gr. Hint", "Trail: Bigo Hint", "Colossus: Hint", "Dodongos: Hint", "Field: Open Gr. Hint", "Field: Remote Gr. Hint", "Field: Destiny Hint", "Valley: Hint", "Hylia: After Valley Hint", "Hylia: Back Right Hint", "Hylia: Back Left Hint", "Hyrule Castle: First Hint", "Hyrule Castle: Second Hint", "Temple of Time: First Hint", "Temple of Time: Second Hint", "Temple of Time: Third Hint", "Temple of Time: Fourth Hint", "Kakariko: Gr. Hint", "Kokiri: Left Deku Hint", "Kokiri: Right Deku Hint", "Kokiri: Gr. Hint", "Kokiri: LW Hint", "Lost Woods: Br. Hint", "Lost Woods: Gr. Hint", "SFM: Sarias Hint", "SFM: Maze 1 Hint", "SFM: Maze 2 Hint", "River: Gr. Hint", "River: Plateau Hint", "River: By ZD Hint", "Domain: Hint", "Fountain: Jabu Hint", "Fountain: By Fairy Hint", "Goron City: Maze Hint", "Goron City: Medigoron Hint", "Graveyard: Hint", "Hyrule Castle: Storms Hint", "Field: Hammer Hint"];
	
	var checkSummary = ["farores_wind", "slingshot1", "slingshot2", "slingshot3", "boomerang", "scale1", "scale2", "rutos_letter", "bottle1", "bottle2", "bottle3", "bomb_bag1", "bomb_bag2", "bomb_bag3", "hammer", "bow1", "bow2", "bow3", "hookshot1", "hookshot2", "strength1", "strength2", "strength3", "mirror_shield", "magic1", "magic2", "iron_boots", "hover_boots", "wallet1", "wallet2", "goron_tunic", "zora_tunic", "dins_fire", "fire_arrows", "lens_of_truth", "trade", "light_arrows", "text_zeldasSpot", "text_eponasSpot", "text_sariasSpot", "text_sunsSpot", "text_oot", "text_stormsSpot", "text_minuetSpot", "text_boleroSpot", "text_serenadeSpot", "text_requiemSpot", "text_nocturneSpot", "text_preludeSpot"];
	var checkSummaryText = ["Farores", "Slingshot", "Slingshot", "Slingshot", "Boomerang", "Scale", "Scale", "Letter", "Bottle", "Bottle", "Bottle", "Bomb Bag", "Bomb Bag", "Bomb Bag", "Hammer", "Bow", "Bow", "Bow", "Hookshot", "Hookshot", "Strength", "Strength", "Strength"];
	var Items = ["farores_wind", "slingshot1", "slingshot2", "slingshot3", "boomerang", "scale1", "scale2", "rutos_letter", "bottle1", "bottle2", "bottle3", "bomb_bag1", "bomb_bag2", "bomb_bag3", "hammer", "bow1", "bow2", "bow3", "hookshot1", "hookshot2", "strength1", "strength2", "strength3", "mirror_shield", "magic1", "magic2", "iron_boots", "hover_boots", "wallet1", "wallet2", "goron_tunic", "zora_tunic", "dins_fire", "fire_arrows", "lens_of_truth", "prescription", "claim_check", "light_arrows", "lullaby", "eponas", "suns_song", "sarias", "song_of_storms", "minuet", "bolero", "requiem", "nocturne", "song_of_time"];
	var ItemNames = ["Farores", "Slingshot", "Slingshot", "Slingshot", "Boomerang", "Scale", "Scale", "Letter", "Bottle", "Bottle", "Bottle", "Bomb Bag", "Bomb Bag", "Bomb Bag", "Hammer", "Bow", "Bow", "Bow", "Hookshot", "Hookshot", "Strength", "Strength", "Strength", "Mirror", "Magic", "Magic", "Iron Boots", "Hover Boots", "Wallet", "Wallet", "Goron Tunic", "Zora Tunic", "Din's Fire", "Fire Arrows", "Lens", "Prescription", "Claim Check", "Light Arrows", "Lullaby", "Eponas", "Suns", "Sarias", "Song of Storms", "Minuet", "Bolero", "Requiem", "Nocturne", "Song of Time"];
	var hintNames = ["hyb", "tek", "crb", "grb", "cob", "fop", "hyliasun", "poe", "len", "20s", "red", "coi", "cos", "sca", "fla", "wbk", "riv", "fin", "toi", "dea", "was", "wls", "pot", "dan", "lef", "rig", "goh", "gvh", "cuc", "cra", "mea", "1me", "kin", "jab", "sho", "hba", "ffl", "sfl", "3me", "ice", "fou", "kid", "big", "mas", "30s", "40s", "50s", "fr2", "oot"];
	var hintNames2 = ["rut", "atz", "crater", "gybox", "colossusbean", "fop", "shootthesun", "poes", "lens", "20", "redead", "comp", "cos", "scarecrow", "hammer", "waterbk", "river", "gtgf", "toilet", "deadhand", "waste", "wsl", "pot", "daru", "left", "right", "gchammer", "gvhammer", "cucc", "bol", "min", "tot", "kz", "jabu", "shooting", "1500", "forestfloor", "shadowfloor", "noc", "ser", "fountain", "skullkid", "bgs", "skullmask", "30", "40", "50", "frog", "oot"];
	var hintNames3 = ["ruto", "atz", "craterbean", "box", "col", "fop", "sunshoot", "poe", "lensgame", "20s", "red", "composer", "cos", "pierre", "flare", "wbk", "riverch", "gtgfin", "gtgtoilet", "dea", "wasteland", "req", "pot", "darunia", "mir", "sil", "gcleft", "gvh", "cucco", "bolero", "minuet", "pre", "kingzora", "boom", "archery", "150", "ffloor", "shfloor", "nocturne", "serenade", "icy", "kid", "trade", "mask", "30s", "40s", "50s", "frogs", "oot"];
	var hintNames4 = ["bottle", "atz", "crb", "gybean", "colo", "fop", "shootsun", "poe", "chestgame", "20s", "red", "coi", "cos", "sca", "flaredancer", "wbk", "riverchest", "gtgfinal", "toi", "dea", "wl", "desert", "pot", "dancin", "mirror", "silver", "maze3", "gvh", "cuccos", "cra", "mea", "prelude", "kin", "boomerang", "sho", "150", "ffl", "sfl", "3me", "ice", "fou", "kid", "big", "mas", "30s", "40s", "50s", "frogs2", "oot"];
	var hintNames5 = ["bot", "atz", "crb", "grb", "colossus", "fop", "ss", "poe", "cmg", "20s", "red", "coi", "cos", "sca", "fla", "wbk", "riv", "fin", "toi", "dea", "was", "colosong", "pot", "dancing", "lefthand", "silvers", "maze3!", "gvh", "chickens", "cra", "mea", "1me", "kin", "rang", "shooting", "150", "ffl", "sfl", "3me", "ice", "fou", "kid", "big", "mas", "30s", "40s", "50s", "fr2", "oot"];
	var hintNames6 = ["bot", "atz", "crb", "grb", "colossus", "fop", "hss", "poe", "cmg", "20s", "red", "coi", "cos", "sca", "fla", "wbk", "riv", "fin", "toi", "dea", "was", "wastesong", "pot", "dancing", "lefthand", "righthand", "maze3!", "gvh", "chicken", "cra", "mea", "1me", "kin", "boo", "shoo", "150", "ffl", "sfl", "3me", "ice", "fou", "kid", "big", "mas", "30s", "40s", "50s", "fr2", "oot"];
	var hintIndexes = ["hylia_bottle", "hyrule_tektite_grotto", "crater_bean", "graveyard_box", "colossus_bean", "ice_bottom_of_fountain", "hylia_sun_shoot", "poes", "market_lens_game", "tokens_20", "suns_grave", "fire_grave", "sunsSpot", "fire12", "fire15", "water10","water8", "gtg21", "gtg22", "well8", "wasteland", "requiemSpot", "goron_pot", "goron_dance", "spirit7", "spirit14", "goron_maze_3", "gerudo_hammer", "anjus_chickens", "boleroSpot", "minuetSpot", "preludeSpot", "thaw_king", "jabu_boomerang", "archery_game", "gerudo_archery_2", "forest8", "shadow17", "nocturneSpot", "serenadeSpot", "ice_bottom_of_fountain", "skull_kid", "trade_quest", "theater", "tokens_30", "tokens_40", "tokens_50", "frogs_2", "oot"];
	var inputs = ["x", "sk", "bk", "bom", "boo", "bot", "bow", "din", "far", "fir", "gor", "ham", "hoo", "hov", "iro", "len", "rut", "lig", "mag", "mir", "sca", "sli", "str", "pre", "cla", "wal", "zor", "lul", "epo", "sar", "sot", "sun", "sos", "min", "bol", "ser", "req", "noc", "pre"];

var dungeonStrings = ["deku", "dodongos", "jabu", "forest", "fire", "water", "spirit", "shadow"];
var bossStrings = ["deku_queen_gohma", "dodongos_king_dodongo", "jabu_barinade", "forest14", "fire6", "water11", "spirit20", "shadow18"]

var age = "child";
var hinted = false;
var dekutod = false;
var lastCheck = ["start"];
Check.start = "unknown";
var safetyMod = 1;
var progressivePool = 30;
var progressiveAvail = 5;

var dekuPlacement = "unknown";
var dodongosPlacement = "unknown";
var jabuPlacement = "unknown";
var forestPlacement = "unknown";
var firePlacement = "unknown";
var waterPlacement = "unknown";
var spiritPlacement = "unknown";
var shadowPlacement = "unknown";
var pocketPlacement = "unknown";

var dungIconSources = ["./normal/emerald.png", "./normal/ruby.png", "./normal/sapphire.png", "./normal/forest_medallion.png", "./normal/fire_medallion.png", "./normal/water_medallion.png", "./normal/shadow_medallion.png", "./normal/spirit_medallion.png", "./normal/light_medallion.png"];
document.getElementById("stonePic").src = dungIconSources[Math.floor(Math.random() * 3)];
document.getElementById("medallionPic").src = dungIconSources[Math.floor(Math.random() * 6)+3];

var dekuRequired = .73;
var dodongosRequired = .73;
var jabuRequired = .73;
var forestRequired = .73;
var fireRequired = .73;
var waterRequired = .73;
var spiritRequired = .73;
var shadowRequired = .73;
var stoneRequired = .2;
var songRequired = .4;

var hookshotRequired = 1;
var longshotRequired = .7;
var ironsRequired = .4;
var letterRequired = .9;
var boomerangRequired = .7;
var strength1Required = .9;
var strength2Required = .7;
var hammerRequired = .7;
var bowRequired = 1;
var magicRequired = 1;
var lightsRequired = 1;
var mirrorRequired = .7;
var dinsRequired = .5;
var hoversRequired = .7;
var knowMode = hookshotRequired + longshotRequired + ironsRequired + letterRequired + boomerangRequired + strength1Required*.85 + strength2Required*.85 + hammerRequired + bowRequired*.5 + magicRequired*.7 + lightsRequired * .5 + mirrorRequired + dinsRequired + hoversRequired;

Game.logically_accessible = 0;
var d = new Date();
var pauseTotal = 0;
var pauseInitial = 0;
var pauseFlag = false;
var initialTime = d.getTime();
var goodCheckPercent = 0;
var timeStart = d.getTime();
var timeCurrent;	
var timeFuture;
var timeFinal;
var timeLost =0;
var tMinutes = 0;
var tSeconds = 0;
//document.getElementById("go_input").value = 9;
	
	if (localStorage.getItem("type")) {Person.type = localStorage.getItem("type");} else{Person.type = "normie";}
	Logic.brackets = false;
	
	document.getElementById("text_dung7").style.color = "yellow";
	document.getElementById("text_dung8").style.color = "yellow";
	document.getElementById("text_dung9").style.color = "yellow";
	
	Game.unknown = false;
	Game.small_key = true;
	Game.boss_key = true;
	
	Game.emerald = false;
	Game.ruby = false;
	Game.sapphire = false;
	
	var hasChangedMedal = false;
	
	Game.kokiri_sword = false;
	Game.farores_wind = false;
	Game.slingshot1= false;
	Game.slingshot1= false;
	Game.slingshot2= false;
	Game.slingshot3= false;
	Game.boomerang = false;
	Game.rutos_letter = false;
	Game.bottle1 = false;
	Game.bottle2 = false;
	Game.bottle3 = false;
	Game.big_poe = false;
	Game.scale1 = false;
	Game.scale2 = false;
	Game.bomb_bag1 = false;
	Game.bomb_bag2 = false;
	Game.bomb_bag3 = false;
	Game.hammer = false;
	Game.bow1 = false;
	Game.bow2 = false;
	Game.bow3 = false;
	Game.hookshot = false;
	Game.longshot = false;
	Game.iron_boots = false;
	Game.hover_boots = false;
	Game.magic = false;
	Game.magic1 = false;
	Game.magic2 = false;
	Game.dins_fire = false;
	Game.fire_arrows = false;
	Game.goron_bracelet = false;
	Game.silver_gauntlets = false;
	Game.golden_gauntlets = false;
	Game.mirror_shield = false;
	Game.wallet1 = false;
	Game.wallet2 = false;
	Game.goron_tunic = false;
	Game.zora_tunic = false;
	Game.lens_of_truth = false;
	Game.stone_of_agony = false;
	Game.trade = false;
	Game.prescription = false;
	Game.claim_check = false;
	Game.lullaby = false;
	Game.eponas = false;
	Game.sarias = false;
	Game.suns_song = false;
	Game.song_of_time = false;
	Game.song_of_storms = false;
	Game.minuet = false;
	Game.bolero = false;
	Game.serenade = false;
	Game.requiem = false;
	Game.nocturne = false;
	Game.prelude = false;
	
	Game.min_forest_keys=0;
	Game.current_forest_keys=0;
	Game.forest_keys = 0;
	Game.min_fire_keys=0;
	Game.current_fire_keys=0;
	Game.fire_keys = 0;
	Game.min_water_keys=0;
	Game.current_water_keys=0;
	Game.water_keys = 0;
	Game.min_spirit_keys=0;
	Game.current_spirit_keys=0;
	Game.spirit_keys = 0;
	Game.min_shadow_keys=0;
	Game.current_shadow_keys=0;
	Game.shadow_keys = 0;
	Game.min_ganons_keys=0;
	Game.current_ganons_keys=0;
	Game.ganons_keys = 0;
	Game.min_gtg_keys=0;
	Game.current_gtg_keys=0;
	Game.gtg_keys = 0;
	Game.min_well_keys=0;
	Game.current_well_keys=0;
	Game.well_keys = 0;		
	Game.deku_checks_remaining = 7;
	Game.dodongos_checks_remaining = 7;
	Game.jabu_checks_remaining = 4;
	Game.forest_checks_remaining = 8;
	Game.fire_checks_remaining = 6;
	Game.water_checks_remaining = 4;
	Game.shadow_checks_remaining = 12;
	Game.spirit_checks_remaining = 14;
	Game.gtg_checks_remaining = 13;
	Game.well_checks_remaining = 11;
	Game.ganons_checks_remaining = 14;
	
	Game.checks_remaining=196;
	Game.logically_accessible=35;
	Game.forest_logically_accessible=0;
	Game.fire_logically_accessible=0;
	Game.water_logically_accessible=0;
	Game.spirit_logically_accessible=0;
	Game.shadow_logically_accessible=0;
	Game.gtg_logically_accessible=0;
	Game.well_logically_accessible=0;
	Game.ganons_logically_accessible=0;
	
	Game.bomb_bag_img= "./images/explosive505050.png";
	Game.letter_img= "./images/letter505050.png";
	Game.boomerang_img= "./images/boomerang505050.png";
	Game.hookshot_img= "./images/hookshot505050.png";
	Game.bow_img= "./images/bow505050.png";
	Game.goron_bracelet_img= "./images/strength1505050.png";
	Game.hammer_img= "./images/ham505050.png";
	Game.iron_boots_img= "./images/ironboots505050.png";
	Game.silver_scale_img=  "./images/silverscale505050.png"
	Game.golden_scale_img= "./images/goldenscale505050.png";
	Game.longshot_img= "./images/longshot505050.png";
	Game.silver_gauntlets_img= "./images/strength2505050.png";
	Game.mirror_shield_img= "./images/mirrorshield505050.png";
	Game.dins_fire_img= "./images/dinsfirenew505050.png";
	Game.magic_meter_img= "./images/magic505050.png";
	Game.hover_boots_img= "./images/hovers505050.png";
	Game.theme = "dark";
	Game.themeChange = false;
	Game.changetheme = 1;
	
	Game.has_chus = false;
	
	var tempTime = 0;
	var tempHours = 0;
	var tempMinutes = 0;
	var tempSeconds = 0;
	
	var Locations = [
		"mido_1", "mido_2", "mido_3", "mido_4", "kokiri_sword", "kokiri_song_of_storms",
		"talons_chickens", "back_of_ranch",
		"hyrule_forest_boulder", "hyrule_open_grotto", "hyrule_hp_scrub", "hyrule_boulder_of_destiny", "hyrule_tektite_grotto",
		"gerudovalley_box", "gerudovalley_waterfall", "gerudo_hammer",
		"hylia_child_fishing", "hylia_bottle", "hylia_adult_fishing", "hylia_lab_top", "hylia_lab_dive", "hylia_sun_shoot",
		"market_slingshot_game", "richard", "market_bowling_1", "market_bowling_2","market_lens_game","poes",
		"dins_fairy",
		"g_fairy",
		"lacs",
		"fountain_fairy", "ice_glacier_hp", "ice_bottom_of_fountain",
		"ice_map", "ice_compass", "ice_hp", "ice_irons",
		"deku_lobby", "deku_slingshot", "deku_slingshot_room_side", "deku_compass", "deku_compass_room_side", "deku_basement", "deku_queen_gohma",
		"ocarina_game", "lost_woods_grotto", "lost_woods_scrub_grotto", "bridge_scrub", "target", "skull_kid", "theater",
		"wolfos_grotto",
		"rolling_goron", "goron_dance", "goron_pot", "goron_maze_1", "goron_maze_2", "goron_maze_3", "goron_link",
		"dodongos_map", "dodongos_compass", "dodongos_bomb_flower_platform", "dodongos_bomb_bag", "dodongos_end_of_bridge", "dodongos_above_king", "dodongos_king_dodongo",
		"trail_bombable", "trail_dodongos_top", "trail_song_of_storms", "crater_peak_fairy", "trade_quest",
		"crater_bean", "crater_hammer_fairy", "crater_grotto", "crater_nook_hp",
		"man_on_roof", "kakariko_grotto", "windmill", "anju", "cow_house", "archery_game", "redead_grotto", "anjus_chickens", "tokens_10", "tokens_20", "tokens_30", "tokens_40", "tokens_50",
		"shield_grave", "gravedigging_tour", "suns_grave", "fire_grave", "graveyard_box", "race_1", "race_2",
		"river_pillar", "river_grotto", "river_ledge", "frogs_1", "frogs_2",
		"zora_diving", "zora_torches", "thaw_king",
		"colossus_bean", "colossus_fairy",
		"wasteland",
		"gerudo_roof", "gerudo_archery_1", "gerudo_archery_2",
		"jabu_boomerang", "jabu_map", "jabu_compass", "jabu_barinade",
		"forest1", "forest2", "forest3", "forest4", "forest5", "forest6", "forest7", "forest8", "forest9", "forest10", "forest11", "forest12", "forest13", "forest14",
		"fire1", "fire2", "fire3", "fire4", "fire5", "fire6", "fire7", "fire8", "fire9", "fire10", "fire11", "fire12", "fire13", "fire14", "fire15",
		"water1", "water2", "water3", "water4", "water5", "water6", "water7", "water8", "water9", "water10", "water11",
		"spirit1", "spirit2", "spirit3", "spirit4", "spirit5", "spirit6", "spirit7", "spirit8", "spirit9", "spirit10", "spirit11", "spirit12", "spirit13", "spirit14", "spirit15", "spirit16", "spirit17", "spirit18", "spirit19", "spirit20",
		"shadow1", "shadow2", "shadow3", "shadow4", "shadow5", "shadow6", "shadow7", "shadow8", "shadow9", "shadow10", "shadow11", "shadow12", "shadow13", "shadow14", "shadow15", "shadow16", "shadow17", "shadow18",
		"ganons1", "ganons2", "ganons3", "ganons4", "ganons5", "ganons6", "ganons7", "ganons8", "ganons9", "ganons10", "ganons11", "ganons12", "ganons13", "ganons14", "ganons15", "ganons16",
		"gtg1", "gtg2", "gtg3", "gtg4", "gtg5", "gtg6", "gtg7", "gtg8", "gtg9", "gtg10", "gtg12", "gtg11", "gtg13", "gtg14", "gtg15", "gtg16", "gtg17",  "gtg18", "gtg19", "gtg20", "gtg21", "gtg22",
		"well1", "well5", "well2", "well3", "well4", "well6", "well11", "well7", "well10", "well8", "well9", "well12", "well13", "well14",
		"zeldasSpot", "eponasSpot", "sariasSpot", "stormsSpot", "sunsSpot", "boleroSpot", "minuetSpot", "requiemSpot", "serenadeSpot", "preludeSpot", "nocturneSpot", "oot"
		];
		
		var backUp = [];
		
		for (var i = 0; i < Locations.length; i++) {
			Check[Locations[i]] = "unknown";
			backUp.push(document.getElementById("text_" + Locations[i]).innerHTML);
		}
		
		for (var i = 0; i < Items.length; i++) {
			Location[Items[i]] = "unknown";
		}
		
		Location.med1 = "unknown";
		Location.med2 = "unknown";
		Location.med3 = "unknown";
		Location.med4 = "unknown"; 
		Location.med5 = "unknown";
		Location.med6 = "unknown";
		
		var Names = [
		"Kokiri: Mido's 1", "Kokiri: Mido's 2", "Kokiri: Mido's 3", "Kokiri: Mido's 4", "Kokiri: Sword", "Kokiri: SoS",
		"Ranch: T's Chicks", "Ranch: Back",
		"Field: Remote Gr.", "Field: Open Gr.", "Field: Scrub Gr.", "Field: Near Market", "Field: Tektite(ATZ)",
		"Valley: Box", "Valley: Waterfall", "Valley: Rocks",
		"Hylia: Ch. Fishing", "Hylia: Bottle", "Hylia: Ad. Fishing", "Hylia: LabTop", "Hylia: Divin'", "Hylia: Shootin'",
		"Market: Slingin'", "Market: Big Rich", "Market: Bowlin' 1", "Market: Bowlin' 2","Market: Chest Game","Market: Poes",
		"Hyrule Castle: Fairy",
		"Outside G's: Fairy",
		"Temple of Time: LACS",
		"Fountain: Fairy", "Fountain: Glacier", "Fountain: Divin'",
		"Ice: Map", "Ice: Compass", "Ice: HP", "Ice: Irons",
		"Deku: Lobby", "Deku: Sling 1", "Deku: Sling 2", "Deku: Compass 1", "Deku: Compass 2", "Deku: Basement", "Deku: Queen",
		"Lost Woods: Ocarina", "Lost Woods: Generic", "Lost Woods: Scrub Gr.", "Lost Woods: Br. Scrub", "Lost Woods: Target", "Lost Woods: Saria Kid", "Lost Woods: Skull Mask",
		"SFM: Wolfos Gr.",
		"Goron City: Big Rollin'", "Goron City: Dancin'", "Goron City: Chuckin'", "Goron City: Maze 1", "Goron City: Maze 2", "Goron City: Maze 3!", "Goron City: Lil Rollin'",
		"Dodongos: Map", "Dodongos: Compass", "Dodongos: Platform", "Dodongos: Bomb Bag", "Dodongos: Bridge", "Dodongos: Above King", "Dodongos: King",
		"Trail: Wall", "Trail: Top", "Trail: SoS", "Trail: Fairy", "Trail: Biggoron",
		"Crater: Bean", "Crater: Fairy", "Crater: Grotto", "Crater: Nook",
		"Kakariko: Roof", "Kakariko: Back Grotto", "Kakariko: Windmill", "Kakariko: Anju", "Kakariko: Cow", "Kakariko: Archery", "Kakariko: Redead Gr.", "Kakariko: Chickens", "Kakariko: 10", "Kakariko: 20", "Kakariko: 30", "Kakariko: 40", "Kakariko: 50",
		"Graveyard: Shield", "Graveyard: Digging", "Graveyard: Suns", "Graveyard: Fire", "Graveyard: Box", "Graveyard: Race 1", "Graveyard: Race 2",
		"River: Pillar", "River: Grotto", "River: Ledge", "River: Frogs 1", "River: Frogs 2",
		"Domain: Divin'", "Domain: Torches", "Domain: King",
		"Colossus: Bean", "Colossus: Fairy",
		"Wasteland: Check",
		"Fortress: Roof", "Fortress: Archery 1", "Fortress: Archery 2",
		"Jabu: Boomerang", "Jabu: Map", "Jabu: Compass", "Jabu: Barinade",
		"Forest: First", "Forest: 2 Stalfos", "Forest: Court. Hookshot", "Forest: Court. High", "Forest: Court. Low", "Forest: Shoot", "Forest: BK", "Forest: Floormasta", "Forest: Red", "Forest: Bow", "Forest: Blue", "Forest: Falling", "Forest: Near Boss", "Forest: Phantom Ganon",
		"Fire: Near Boss", "Fire: Hammer 1", "Fire: Hammer 2", "Fire: Lava Open", "Fire: Lava Bomb", "Fire: Volva", "Fire: Boulda Low", "Fire: Boulda Side", "Fire: Map", "Fire: Boulda Uppa", "Fire: Boulda Bomb", "Fire: Scarecrow", "Fire: Compass", "Fire: SoT Goron", "Fire: MEGA",
		"Water: Compass", "Water: Map", "Water: Cracked", "Water: Torches", "Water: Bow Block", "Water: Pillar", "Water: Dark Link", "Water: Riva", "Water: Dragin'", "Water: BK", "Water: Morpha",
		"Spirit: Child Left", "Spirit: Child Right", "Spirit: Child Climb 1", "Spirit: Child Climb 2", "Spirit: Map", "Spirit: Sun Room", "Spirit: Right Hand", "Spirit: Adult Left", "Spirit: Adult Right", "Spirit: Mirror 1", "Spirit: Mirror 2", "Spirit: Lullaby Hand", "Spirit: Lullaby High", "Spirit: Mirror Room", "Spirit: Invisi 1", "Spirit: Invisi 2", "Spirit: Left Hand", "Spirit: BK", "Spirit: Tippy Top", "Spirit: Twinrova",
		"Shadow: Map", "Shadow: Hover Boots", "Shadow: Compass", "Shadow: Early Silvs", "Shadow: Spinning 1", "Shadow: Spinning 2", "Shadow: Spike Lower", "Shadow: Spike Uppa", "Shadow: Spike Switch", "Shadow: Mid Silvs", "Shadow: Freestanding", "Shadow: Wind", "Shadow: AW Bomb", "Shadow: AW Enemies", "Shadow: Dins 1", "Shadow: Dins 2", "Shadow: Floormasta", "Shadow: Bongo",
		"Ganon's: Light 1", "Ganon's: Light 2", "Ganon's: Light 3", "Ganon's: Light 4", "Ganon's: Light 5", "Ganon's: Light 6", "Ganon's: Light Enemies", "Ganon's: Light Lullaby", "Ganon's: Spirit 1", "Ganon's: Spirit 2", "Ganon's: Forest", "Ganon's: Water 1", "Ganon's: Water 2", "Ganon's: Shadow 1", "Ganon's: Shadow 2", "Ganon's: BK",
		"GTG: Lobby Left", "GTG: Lobby Right", "GTG: Stalfos", "GTG: Wolfos", "GTG: Silvers 1", "GTG: Silvers 2", "GTG: Silvers 3", "GTG: Silvers 4", "GTG: Eyes", "GTG: Above Eyes", "GTG: Keese+Slugs", "GTG: Hammer", "GTG: Freestanding", "GTG: Right 1", "GTG: Right 2", "GTG: Beamos", "GTG: Left 1",  "GTG: Left 2", "GTG: Left 3", "GTG: Left 4", "GTG: Final", "GTG: Toilet",
		"Well: Fake Right", "Well: Center Small", "Well: Back Bomb", "Well: Water Left", "Well: Freestanding", "Well: Center Big", "Well: Fake Left", "Well: Front Bomb", "Well: Water Front", "Well: Dead Hand", "Well: Invisible", "Well: Locked 1", "Well: Locked 2", "Well: Basement",
		"Zelda", "Malon", "Saria", "Windmill", "Grave", "Crater", "Meadow", "Colossus", "Ice", "1 Medallion", "3 Medallion", "Ocarina of Time"
		];
		
	var	gsText = [
		"",
		"Kokiri Child",
		"Kokiri Soil",
		"Kokiri Adult", 
		"Market",
		"Lost Woods Soil 1",
		"Lost Woods Soil 2",
		"Lost Woods Above Stage",
		"Sacred Forest",
		"Outside Kakariko",
		"Field near Valley",
		"Hyrule Castle Tree",
		"Hyrule Castle Grotto",
		"Lon Lon Tree", 
		"Lon Lon Shed", 
		"Lon Lon Window", 
		"Lon Lon Back Wall", 
		"Kakariko Construction", 
		"Kakariko Skull House", 
		"Kakariko Guard House",
		"Kakariko Tree",
		"Kakariko Tower",
		"Kakariko Impa's House",
		"Graveyard Wall", 
		"Graveyard Box",
		"Trail Soil",
		"Trail Wall", 
		"Trail Hail",
		"Trail Dodo Top",
		"Goron City Maze", 
		"Goron City Center",
		"Crater Crate",
		"Crater Soil",
		"River Ladder",
		"River Near Grotto",
		"River Above Bridge",
		"River Tree",
		"Domain",
		"Fountain Above Log",
		"Fountain Tree",
		"Fountain Hidden Cave",
		"Hylia Soil",
		"Hylia Lab Wall",
		"Hylia Island",
		"Hylia Tree",
		"Hylia Lab",
		"Valley Small Bridge",
		"Valley Soil",
		"Valley Tent",
		"Valley Pillar",
		"Fortress Target",
		"Fortress Wall",
		"Wasteland",
		"Colossus Soil",
		"Colossus Tree", 
		"Colossus Hill",
		"Outside Ganon's",
		"Deku Basement Back",
		"Deku Gate",
		"Deku Vines",
		"Deku Compass",
		"Dodongo's East",
		"Dodongo's Stair Vines",
		"Dodongo's Stair Nook",
		"Dodongo's Scarecrow",
		"Dodongo's Near King",
		"Jabu Vines",
		"Jabu Near Octo 1",
		"Jabu Near Octo 2",
		"Jabu Near Barinade",
		"Forest First",
		"Forest Lobby",
		"Forest East Courtyard",
		"Forest West Courtyard",
		"Forest Basement",
		"Fire Song of Time",
		"Fire Bomb Wall",
		"Fire Scarecrow 1", 
		"Fire Scarecrow 2",
		"Fire First Floor",
		"Water South Basement",
		"Water River",
		"Water Central",
		"Water Near BK",
		"Water Before DL",
		"Spirit Metal Fence",
		"Spirit Before Child Knuckle",
		"Spirit Bouldas",
		"Spirit Lobby",
		"Spirit Child Climb",
		"Shadow Like Like",
		"Shadow Crusher",
		"Shadow Giant Pot",
		"Shadow Near Boat", 
		"Shadow 3 Pots",
		"Well West Inner",
		"Well East Inner",
		"Well Cage",
		"Ice Scythe",
		"Ice Near HP",
		"Ice Block Room"		
	];
		
		var AreaNames= [
		"",
		"Kokiri" ,
		"Ranch" ,
		"Field" ,
		"Valley" ,
		"Hylia" ,
		"Market" ,
		"Hyr Cas" ,
		"OGC" ,
		"ToT" ,
		"Fountain" ,
		"Ice" ,
		"Deku" ,
		"Lost Woods" ,
		"SFM" ,
		"Goron City" ,
		"Dodongos" ,
		"Trail" ,
		"Crater" ,
		"Kakariko" ,
		"Graveyard" ,
		"River" ,
		"Domain" ,
		"Colossus" ,
		"Wasteland" ,
		"Fortress" ,
		"Jabu" ,
		"Forest" ,
		"Fire" ,
		"Water" ,
		"Spirit" ,
		"Shadow" ,
		"Ganon's" ,
		"GTG" ,
		"Well" 
		];
	
	Logic.bottle = false;
	Logic.big_poe = false;
	Logic.scale1 = false;
	Logic.scale2 = false;
	Logic.bomb_bag1 = false;
	Logic.bomb_bag2 = false;
	Logic.bomb_bag3 = false;
	Logic.bow1 = false;
	Logic.bow2 = false;
	Logic.bow3 = false;
	Logic.hookshot1 = false;
	Logic.hookshot2 = false;
	Logic.strength1 = false;
	Logic.strength2 = false;
	Logic.strength3 = false;
	Logic.magic1 = false;
	Logic.magic2 = false;
	Logic.slingshot1 = false;
	Logic.slingshot2 = false;
	Logic.slingshot3 = false;
	Logic.wallet1 = false;
	Logic.wallet2 = false;
	
	Logic.kokiri_sword = false;
	Logic.farores_wind = false;
	Logic.slingshot= false;
	Logic.boomerang = false;
	Logic.rutos_letter = false;
	Logic.silver_scale = false;
	Logic.golden_scale = false;
	Logic.bomb_bag = false;
	Logic.hammer = false;
	Logic.bow = false;
	Logic.hookshot1 = false;
	Logic.hookshot2 = false;
	Logic.iron_boots = false;
	Logic.hover_boots = false;
	Logic.magic = false;
	Logic.dins_fire = false;
	Logic.fire_arrows = false;
	Logic.goron_bracelet = false;
	Logic.silver_gauntlets = false;
	Logic.golden_gauntlets = false;
	Logic.mirror_shield = false;
	Logic.adults_wallet = false;
	Logic.giants_wallet = false;
	Logic.goron_tunic = false;
	Logic.zora_tunic = false;
	Logic.lens_of_truth = false;
	Logic.stone_of_agony = false;
	Logic.trade = false;
	Logic.prescription = false;
	Logic.claim_check = false;
	Logic.trade = false;
	Locked_Logic2.forced_fire_keys=8;
	Locked_Logic2.forced_water_keys=6;
	Locked_Logic2.forced_spirit_keys=5;
	Locked_Logic2.forced_shadow_keys=5;
	Locked_Logic2.forced_ganons_keys=3;
	Locked_Logic2.forced_gtg_keys=9;
	Locked_Logic2.forced_well_keys=3;
	Locked_Logic2.forced_forest_boss_key = false;
	Locked_Logic2.forced_fire_boss_key = false;
	Locked_Logic2.forced_water_boss_key = false;
	Locked_Logic2.forced_spirit_boss_key = false;
	Locked_Logic2.forced_shadow_boss_key = false;Logic.light_arrows = false;
	Logic.lullaby = false;
	Logic.eponas = false;
	Logic.sarias = false;
	Logic.suns_song = false;
	Logic.song_of_time = false;
	Logic.song_of_storms = false;
	Logic.minuet = false;
	Logic.bolero = false;
	Logic.serenade = false;
	Logic.requiem = false;
	Logic.nocturne = false;
	Logic.prelude = false;
	Logic.forest_medallion = false;
	Logic.fire_medallion = false;
	Logic.water_medallion = false;
	Logic.spirit_medallion = false;
	Logic.shadow_medallion = false;
	Logic.light_medallion = false;
	Logic.emerald = false;
	Logic.ruby = false;
	Logic.sapphire = false;
	Logic.kokiri_emerald = false;
	Logic.goron_ruby = false;
	Logic.zora_sapphire = false;
	
	Logic.forest_medallion_location = "unknown";
	Logic.fire_medallion_location  = "unknown";
	Logic.water_medallion_location  = "unknown";
	Logic.generic1 = "unknown";
	Logic.generic2 = "unknown";
	Logic.generic3 = "unknown";
	Logic.emerald = "unknown";
	Logic.ruby  = "unknown";
	Logic.sapphire  = "unknown";
	
	Logic.min_forest_keys=0;
	Logic.current_forest_keys=0;
	Logic.forest_keys = 0;
	Logic.min_fire_keys=0;
	Logic.current_fire_keys=0;
	Logic.fire_keys = 0;
	Logic.min_water_keys=0;
	Logic.current_water_keys=0;
	Logic.water_keys = 0;
	Logic.min_spirit_keys=0;
	Logic.current_spirit_keys=0;
	Logic.spirit_keys = 0;
	Logic.min_shadow_keys=0;
	Logic.current_shadow_keys=0;
	Logic.shadow_keys = 0;
	Logic.min_ganons_keys=0;
	Logic.current_ganons_keys=0;
	Logic.ganons_keys = 0;
	Logic.min_gtg_keys=0;
	Logic.current_gtg_keys=0;
	Logic.gtg_keys = 0;
	Logic.min_well_keys=0;
	Logic.current_well_keys=0;
	Logic.well_keys = 0;
	Logic.forced_forest_keys=0;
	Logic.forced_fire_keys=0;
	Logic.forced_water_keys=0;
	Logic.forced_spirit_keys=0;
	Logic.forced_shadow_keys=0;
	Logic.forced_ganons_keys=0;
	Logic.forced_gtg_keys=0;
	Logic.forced_well_keys=0;
	Logic.forced_forest_boss_key = false;
	Logic.forced_fire_boss_key = false;
	Logic.forced_water_boss_key = false;
	Logic.forced_spirit_boss_key = false;
	Logic.forced_shadow_boss_key = false;
	Locked_Logic.forced_forest_keys=0;
	Locked_Logic.forced_fire_keys=0;
	Locked_Logic.forced_water_keys=0;
	Locked_Logic.forced_spirit_keys=0;
	Locked_Logic.forced_shadow_keys=0;
	Locked_Logic.forced_ganons_keys=0;
	Locked_Logic.forced_gtg_keys=0;
	Locked_Logic.forced_well_keys=0;
	Locked_Logic.forced_forest_boss_key = false;
	Locked_Logic.forced_fire_boss_key = false;
	Locked_Logic.forced_water_boss_key = false;
	Locked_Logic.forced_spirit_boss_key = false;
	Locked_Logic.forced_shadow_boss_key = false;
	Locked_Logic2.forced_forest_keys=5;
	Locked_Logic2.forced_fire_keys=8;
	Locked_Logic2.forced_water_keys=6;
	Locked_Logic2.forced_spirit_keys=5;
	Locked_Logic2.forced_shadow_keys=5;
	Locked_Logic2.forced_ganons_keys=2;
	Locked_Logic2.forced_gtg_keys=9;
	Locked_Logic2.forced_well_keys=3;
	Locked_Logic2.forced_forest_boss_key = false;
	Locked_Logic2.forced_fire_boss_key = false;
	Locked_Logic2.forced_water_boss_key = false;
	Locked_Logic2.forced_spirit_boss_key = false;
	Locked_Logic2.forced_shadow_boss_key = false;
	PutIn_Logic.forced_forest_keys=0;
	PutIn_Logic.forced_fire_keys=0;
	PutIn_Logic.forced_water_keys=0;
	PutIn_Logic.forced_spirit_keys=0;
	PutIn_Logic.forced_shadow_keys=0;
	PutIn_Logic.forced_ganons_keys=0;
	PutIn_Logic.forced_gtg_keys=0;
	PutIn_Logic.forced_well_keys=0;
	PutIn_Logic.forced_forest_boss_key = false;
	PutIn_Logic.forced_fire_boss_key = false;
	PutIn_Logic.forced_water_boss_key = false;
	PutIn_Logic.forced_spirit_boss_key = false;
	PutIn_Logic.forced_shadow_boss_key = false;
	
	Logic.forest_boss_key = false;
	Logic.fire_boss_key = false;
	Logic.water_boss_key = false;
	Logic.spirit_boss_key = false;
	Logic.shadow_boss_key = false;
	Logic.ganons_boss_key = false;
	  
	var woth1 = "unknown";
	var woth2 = "unknown";
	var woth3 = "unknown";
	var woth4 = "unknown";
	var woth5 = "unknown";	
	
	var WotHItems = [];
	var WotH = new Array(35).fill(0);
    var checkedYet = new Array(256).fill(false);
	var readYet = new Array(42).fill(false);
	var AreaAge = new Array(35).fill(0);
	var AreaWotHAge = new Array(35).fill(0);
	var wothCount = new Array(35).fill(0);
	var textBlock = '';
	var circus = false;
	var hideInaccessible = true;
	var coopmode = false;
	if (localStorage.getItem("hideInaccessible") != null) {if (localStorage.getItem("hideInaccessible") == "false"){hideInaccessible = false; document.getElementById("inaccessibleControl").innerHTML = "Hide Inaccessible"};}
	
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal2 = document.getElementById("myModal2");

var btn = document.getElementById("skulls_in_logic");

var span = document.getElementsByClassName("close")[1];

btn.onclick = function() {
  modal2.style.display = "block";
}

span.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

var modal3 = document.getElementById("myModal3");

var btn = document.getElementById("locationCodes");

var span = document.getElementsByClassName("close")[2];

btn.onclick = function() {
  modal3.style.display = "block";
}

span.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

for (var i = 0; i < 244; i++) {
	Check[Location[i]] = "unknown";
}
	
for (i=0; i < Items.length; i++) {
	ChecksLockedBy[Items[i]] = checksLockedByItem(Items[i]);
}
	
for (i=0; i < Items.length; i++) {
	ChecksLockedBy[Items[i]] = [];
}
for (i=0; i < Items.length; i++) {
	ChecksPutInLogicBy[Items[i]] = [];
}

var childRoute1Value = 0;
var childRoute1 = ["ocarina_game", "lost_woods_grotto", "lost_woods_scrub_grotto", "wolfos_grotto", "bridge_scrub", "target", "skull_kid", "kokiri_song_of_storms", "rolling_goron", "goron_dance", "goron_pot", "river_pillar", "river_grotto", "river_ledge", "frogs_1", "frogs_2", "zora_diving", "zora_torches", "hylia_child_fishing"];
var childRoute2 = ["market_slingshot_game", "market_bowling_1", "market_bowling_2","dins_fairy","market_lens_game"];

setInterval(slowUpdate,5000);
setInterval(Update,250);
Update();Update();Update();