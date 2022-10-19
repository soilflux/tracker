var Hinted = {};
var Check={};
var ChecksLockedBy={};
var ChecksPutInLogicBy = {};
var Game={};
var CouldHave={};
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
var Location_Obtain={};
var Location_Could_Access={};
var Location_Could_Peek={};
var Logic={};
var Shop_Logic = {};
var Location ={};
var gs = [];
var Area = [];
var Known = [];
var paused = true;
var timerInitialized = false;
var woth1Locations = [];
var woth2Locations = [];
var woth3Locations = [];
var woth4Locations = [];
var woth5Locations = [];
var thisIsAKey = false;
var thisIsABossKey = false;
var thisIsHinted = false;
var hintedInput = "";
var temptext2 = "";
var removeBKFlag = false;
var mouseInputs_locations = [];
var nerfed = true;
var hamsda = false;
if (localStorage.getItem("hamsda")) {if (localStorage.getItem("hamsda") == "true") {hamsda = true;} else{hamsda = false;};}
if (hamsda) {document.getElementById("hamsdaToggle").innerHTML="Disable Hamsda Tracking";}
var next = document.getElementById("next_check_prediction");
var nextChecks = [];
var nextIndex = 0;
var acceptControllerInput = [false,false,false,false,false,false];
var toFocus = null;
var inLogicColor = 'chartreuse'

var dungeonSkullSanity = false;
var scrubSanity = false;
if (localStorage.getItem("scrubSanity")) {document.getElementById("scrubSanity").value= localStorage.getItem("scrubSanity");}
if (localStorage.getItem("shopSanity")) {document.getElementById("shopSanity").value = localStorage.getItem("shopSanity");}
if (localStorage.getItem("skullSanity")) {document.getElementById("skullSanity").value = localStorage.getItem("skullSanity");}
if (localStorage.getItem("closedDeku")) {document.getElementById("closedDeku").value	= localStorage.getItem("closedDeku");}
if (localStorage.getItem("ganonBKSetting")) {document.getElementById("ganonBKSetting").value	= localStorage.getItem("ganonBKSetting");}
if (localStorage.getItem("ganonsBridge")) {document.getElementById("ganonsBridge").value = localStorage.getItem("ganonsBridge");}
if (localStorage.getItem("bosskeys")) {document.getElementById("bosskeys").value = localStorage.getItem("bosskeys");}
if (localStorage.getItem("shuffleOcarinas")) {document.getElementById("shuffleOcarinas").value = localStorage.getItem("shuffleOcarinas");}
if (localStorage.getItem("csmc")) {document.getElementById("csmc").value = localStorage.getItem("csmc");}
if (localStorage.getItem("hints_type")) {document.getElementById("hints_type").value = localStorage.getItem("hints_type");}
if (localStorage.getItem("presets")) {document.getElementById("presets").value = localStorage.getItem("presets");}
		
var hintStones = ["Crater: Hint", "Crater: Gr. Hint", "Trail: Gr. Hint", "Trail: Bigo Hint", "Colossus: Hint", "Dodongos: Hint", "Field: Open Gr. Hint", "Field: Remote Gr. Hint", "Field: Destiny Hint", "Valley: Hint", "Hylia: After Valley Hint", "Hylia: Back Right Hint", "Hylia: Back Left Hint", "Hyrule Castle: First Hint", "Hyrule Castle: Second Hint", "Temple of Time: First Hint", "Temple of Time: Second Hint", "Temple of Time: Third Hint", "Temple of Time: Fourth Hint", "Kakariko: Gr. Hint", "Kokiri: Left Deku Hint", "Kokiri: Right Deku Hint", "Kokiri: Gr. Hint", "Kokiri: LW Hint", "Lost Woods: Br. Hint", "Lost Woods: Gr. Hint", "SFM: Sarias Hint", "SFM: Maze 1 Hint", "SFM: Maze 2 Hint", "River: Gr. Hint", "River: Plateau Hint", "River: By ZD Hint", "Domain: Hint", "Fountain: Jabu Hint", "Fountain: By Fairy Hint", "Goron City: Maze Hint", "Goron City: Medigoron Hint", "Graveyard: Hint", "Hyrule Castle: Storms Hint", "Field: Hammer Hint"];

var checkSummary = ["farores_wind", "slingshot1", "slingshot2", "slingshot3", "boomerang", "scale1", "scale2", "rutos_letter", "bottle1", "bottle2", "bottle3", "bomb_bag1", "bomb_bag2", "bomb_bag3", "hammer", "bow1", "bow2", "bow3", "hookshot1", "hookshot2", "strength1", "strength2", "strength3", "mirror_shield", "magic1", "magic2", "iron_boots", "kokiri_sword", "hover_boots", "wallet1", "wallet2", "goron_tunic", "zora_tunic", "dins_fire", "fire_arrows", "lens", "trade", "light_arrows", "text_zeldasSpot", "text_eponasSpot", "text_sariasSpot", "text_sunsSpot", "text_oot", "text_stormsSpot", "text_minuetSpot", "text_boleroSpot", "text_serenadeSpot", "text_requiemSpot", "text_nocturneSpot", "text_preludeSpot"];
var checkSummaryText = ["Farores", "Slingshot", "Slingshot", "Slingshot", "Boomerang", "Scale", "Scale", "Letter", "Bottle", "Bottle", "Bottle", "Bomb Bag", "Bomb Bag", "Bomb Bag", "Hammer", "Bow", "Bow", "Bow", "Hookshot", "Hookshot", "Strength", "Strength", "Strength", "Mirror Shield", "Magic", "Magic", "Iron Boots", "Kokiri Sword", "Hover Boots", "Wallet", "Wallet", "Goron Tunic", "Zora Tunic", "Dins Fire", "Fire Arrows", "Lens", "Letter", "Trade", "Light Arrows"];
var textSongSpots = ["text_zeldasSpot", "text_eponasSpot", "text_sariasSpot", "text_sunsSpot", "text_oot", "text_stormsSpot", "text_minuetSpot", "text_boleroSpot", "text_serenadeSpot", "text_requiemSpot", "text_nocturneSpot", "text_preludeSpot"];
var Items = ["farores_wind", "slingshot1", "slingshot2", "slingshot3", "boomerang", "scale1", "scale2", "rutos_letter", "bottle1", "bottle2", "bottle3", "bomb_bag1", "bomb_bag2", "bomb_bag3", "hammer", "bow1", "bow2", "bow3", "hookshot1", "hookshot2", "strength1", "strength2", "strength3", "mirror_shield", "magic1", "magic2", "iron_boots", "kokiri_sword", "hover_boots", "wallet1", "wallet2", "goron_tunic", "zora_tunic", "dins_fire", "fire_arrows", "lens", "prescription", "claim_check", "light_arrows", "lullaby", "eponas", "suns", "sarias", "storms", "minuet", "bolero", "requiem", "nocturne", "time"];
var ItemImages = [];
var ItemNames = ["Farores", "Slingshot", "Slingshot", "Slingshot", "Boomerang", "Scale", "Scale", "Letter", "Bottle", "Bottle", "Bottle", "Bomb Bag", "Bomb Bag", "Bomb Bag", "Hammer", "Bow", "Bow", "Bow", "Hookshot", "Hookshot", "Strength", "Strength", "Strength", "Mirror", "Magic", "Magic", "Iron Boots", "Kokiri Sword", "Hover Boots", "Wallet", "Wallet", "Goron Tunic", "Zora Tunic", "Din's Fire", "Fire Arrows", "Lens", "Prescription", "Claim Check", "Light Arrows", "Lullaby", "Eponas", "Suns", "Sarias", "Song of Storms", "Minuet", "Bolero", "Requiem", "Nocturne", "Song of Time"];
var hintNames = ["hyb", "tek", "crb", "grb", "cob", "fop", "hyliasun", "poe", "len", "20s", "red", "coi", "cos", "sca", "fla", "wbk", "riv", "fin", "toi", "dea", "was", "wls", "pot", "dan", "lef", "rig", "goh", "gvh", "cuc", "cra", "mea", "1me", "kin", "jab", "sho", "hba", "ffl", "sfl", "3me", "ice", "fou", "kid", "big", "mas", "30s", "40s", "50s", "fr2","toss", "oot", "cas", "ogc", "tar", "fr1", "div", "pil", "shap", "iro", "sh2"];
var hintNames2 = ["rut", "atz", "crater", "gybox", "colossusbean", "fop", "shootthesun", "poes", "lens", "20", "redead", "comp", "cos", "scarecrow", "hammer", "waterbk", "river", "gtgf", "toilet", "deadhand", "waste", "wsl", "pot", "daru", "left", "right", "gchammer", "gvhammer", "cucc", "bol", "min", "tot", "kz", "jabu", "shooting", "1500", "forestfloor", "shadowfloor", "noc", "ser", "fountain", "skullkid", "bgs", "skullmask", "30", "40", "50", "frog","ooti", "oot", "hfa", "gfa", "targ", "frogs1", "dive", "pill", "shapot", "iron", "st"];
var hintNames3 = ["ruto", "atz", "craterbean", "box", "col", "fop", "sunshoot", "poe", "lensgame", "20s", "red", "composer", "cos", "pierre", "flare", "wbk", "riverch", "gtgfin", "gtgtoilet", "dea", "wasteland", "req", "pot", "darunia", "mir", "sil", "gcleft", "gvh", "cucco", "bolero", "minuet", "pre", "kingzora", "boom", "archery", "150", "ffloor", "shfloor", "nocturne", "serenade", "icy", "kid", "trade", "mask", "30s", "40s", "50s", "frogs","gfcb", "oots", "cas", "ogc", "target", "frog1", "div", "pillar", "shp", "iro", "sha2"];
var hintNames4 = ["bottle", "atz", "crb", "gybean", "colo", "fop", "shootsun", "poe", "chestgame", "20s", "red", "coi", "cos", "sca", "flaredancer", "wbk", "riverchest", "gtgfinal", "toi", "dea", "wl", "desert", "pot", "dancin", "mirror", "silver", "maze3", "gvh", "cuccos", "cra", "mea", "prelude", "kin", "boomerang", "sho", "150", "ffl", "sfl", "3me", "ice", "fou", "kid", "bigo", "mas", "30s", "40s", "50s", "frogs2","thr", "ootsong", "casf", "gaf", "tar", "fr1", "div", "pil", "shpot", "irons", "st2"];
var hintNames5 = ["bot", "atz", "crb", "grb", "colossus", "fop", "ss", "poe", "cmg", "20s", "red", "coi", "cos", "sca", "ham", "wbk", "riv", "fin", "toi", "dea", "was", "colosong", "pot", "dancing", "lefthand", "silvers", "maze3!", "gvh", "chickens", "cra", "mea", "1me", "kin", "rang", "shooting", "150", "ffl", "sfl", "3me", "ice", "fou", "kid", "big", "mas", "30s", "40s", "50s", "fr2","thrown", "oot", "hyf", "ogc", "tar", "fr1", "div", "pil", "shap", "iro", "lik"];
var hintNames6 = ["bot", "atz", "crb", "grb", "colossus", "fop", "hss", "poe", "cmg", "20s", "red", "coi", "cos", "sca", "fla", "wbk", "riv", "fin", "toi", "dea", "was", "wastesong", "pot", "dancing", "lefthand", "righthand", "maze3!", "gvh", "chicken", "cra", "mea", "1me", "kin", "boo", "shoo", "150", "ffl", "sfl", "3me", "ice", "fou", "kid", "big", "mas", "30s", "40s", "50s", "fr2","ootitem", "oot", "cas", "ogc", "tar", "fr1", "div", "pil", "shap", "iro", "sht"];
var hintIndexes = ["hylia_bottle", "hyrule_tektite_grotto", "crater_bean", "graveyard_box", "colossus_bean", "ice_bottom_of_fountain", "hylia_sun_shoot", "poes", "market_lens_game", "tokens_20", "redead_grave", "composers_grave", "sunsSpot", "fire_scarecrow", "fire_top", "water_bossKey","water_river", "gtg_final", "gtg_toilet", "well_deadHand", "wasteland", "requiemSpot", "goron_pot", "goron_dance", "spirit_leftHand", "spirit_rightHand", "goron_maze_3", "gerudo_hammer", "anjus_chickens", "boleroSpot", "minuetSpot", "preludeSpot", "thaw_king", "jabu_boomerang", "archery_game", "gerudo_archery_2", "forest_floormaster", "shadow_floormaster", "nocturneSpot", "serenadeSpot", "ice_bottom_of_fountain", "skull_kid", "trade_quest", "theater", "tokens_30", "tokens_40", "tokens_50", "frogs_2", "hyrule_ocarina", "oot", "dins_fairy", "g_fairy", "target", "frogs_1", "hylia_lab_dive", "water_pillar", "shadow_pot", "ice_irons", "ganons_shadowTrial2"];

var Items2 = ["junk", "small_key", "boss_key", "bomb_bag", "bombchus", "boomerang", "bottle", "bottle", "bow", "dins_fire", "farores_wind", "fire_arrows", "goron_tunic", "hammer", "hookshot", "hover_boots", "iron_boots", "kokiri_sword", "lens", "rutos_letter", "light_arrows", "magic", "mirror_shield", "scale", "slingshot", "strength", "prescription", "claim_check", "wallet", "zora_tunic", "lullaby", "eponas", "sarias", "time", "suns", "storms", "minuet", "bolero", "serenade", "requiem", "nocturne", "prelude"];
var ItemNames2 = ["Junk", "Small Key", "Boss Key", "Bomb Bag", "Bombchus", "Boomerang", "Bottle", "Big Poe", "Bow", "Din's Fire", "Farores", "Fire Arrows", "Goron Tunic", "Hammer", "Hookshot", "Hover Boots", "Iron Boots", "Kokiri Sword", "Lens", "Ruto's Letter", "Light Arrows", "Magic", "Mirror Shield", "Scale", "Slingshot", "Strength", "Prescription", "Claim Check", "Wallet", "Zora Tunic", "Lullaby", "Epona's", "Saria's", "Time", "Sun's", "Storms", "Minuet", "Bolero", "Serenade", "Requiem", "Nocturne", "Prelude"];
var inputs = ["x", "sk", "bk", "bom", "chu", "boo", "bot", "big", "bow", "din", "far", "fir", "gor", "ham", "hoo", "hov", "iro", "kok", "len", "rut", "lig", "mag", "mir", "sca", "sli", "str", "pre", "cla", "wal", "zor", "lul", "epo", "sar", "sot", "sun", "sos", "min", "bol", "ser", "req", "noc", "pre"];
var songInputs = ["lul", "epo", "sar", "sot", "sun", "sos", "min", "bol", "ser", "req", "noc", "pre"];
var itemInputs = ["x", "sk", "bk", "bom", "chu", "boo", "bot", "big", "bow", "din", "far", "fir", "gor", "ham", "hoo", "hov", "iro", "kok", "len", "rut", "lig", "mag", "mir", "sca", "sli", "str", "pre", "cla", "wal", "zor"];
var inputNames = ["Junk", "Small Key", "Boss Key", "Bomb Bag", "Bombchus", "Boomerang", "Bottle", "Big Poe", "Bow", "Din's Fire", "Farore's Wind", "Fire Arrows", "Goron Tunic", "Hammer", "Progressive Hookshot", "Hover Boots", "Iron Boots", "Kokiri Sword", "Lens", "Ruto's Letter", "Light Arrows", "Magic", "Mirror Shield", "Progressive Scale", "Slingshot", "Progressive Strength", "Prescription", "Claim Check", "Progressive Wallet", "Zora Tunic", "Lullaby", "Epona's Song", "Saria's Song", "Song of Time", "Sun's Song", "Song of Storms", "Minuet", "Bolero", "Serenade", "Requiem", "Nocturne", "Prelude"];
var DuplicateItems = ["slingshot", "scale", "bottle", "bomb_bag", "bow", "hookshot", "strength", "magic", "wallet"];
var spawnInputs = ["dmcl", "dmcf", "dmcu", "dmtf","dmtfool", "gf", "zd", "zr", "hf", "sfm", "noct", "fish", "ogc","ogcool", "gcshop", "zdshop", "kakr" ];
var spawnNames = ["DMC by Goron City", "DMC fountain", "DMC by trail", "trail fairy","trail fairy(ool)", "fortress", "domain", "river", "dins fairy", "sfm", "nocturne", "fishing", "ogc fairy","ogc fairy(ool)", "goron shop", "domain shop", "kak rooftop"];

var parent = document.getElementById("inputConfig");
for (var i = 0; i < inputs.length; i++) {
	if (localStorage.getItem(inputNames[i])) {inputs[i] = localStorage.getItem(inputNames[i]);}
	var elem = document.createElement("input"); elem.id = inputNames[i]; elem.value = inputs[i]; elem.className = "settings_small"; parent.appendChild(elem);
	var elem = document.createElement("small"); elem.id = "text_" + inputNames[i]; elem.className = "check_text"; elem.innerHTML = inputNames[i]; parent.appendChild(elem);
	var elem = document.createElement("br"); elem.id = "br_" + inputNames[i]; parent.appendChild(elem);
}
var parent = document.getElementById("inputConfig2");
for (var i = 0; i < spawnInputs.length; i++) {
	if (localStorage.getItem(spawnNames[i])) {spawnInputs[i] = localStorage.getItem(spawnNames[i]);}
	var elem = document.createElement("input"); elem.id = spawnNames[i]; elem.value = spawnInputs[i]; elem.className = "custom_spawn"; parent.appendChild(elem);
	var elem = document.createElement("small"); elem.id = "text_" + spawnNames[i]; elem.className = "check_text"; elem.innerHTML = spawnNames[i]; parent.appendChild(elem);
	var elem = document.createElement("br"); elem.id = "br_" + spawnNames[i]; parent.appendChild(elem);
}

controllerConfigNames =["","","","","",""];
controllerConfigDescriptions =["controllerJunk","controllerKey","controllerBosskey", "controllerItem","controllerSkip","controllerAcceptInputs"];
var parent = document.getElementById("inputConfig3");
for (var i = 0; i < controllerConfigNames.length; i++) {
	if (localStorage.getItem(controllerConfigNames[i])) {controllerConfigNames[i] = localStorage.getItem(controllerConfigNames[i]);}
	var elem = document.createElement("input"); elem.id = controllerConfigDescriptions[i]; elem.value = controllerConfigNames[i]; elem.className = "custom_spawn"; parent.appendChild(elem);
	var elem = document.createElement("small"); elem.id = "text_" + controllerConfigDescriptions[i]; elem.className = "check_text"; elem.innerHTML = controllerConfigDescriptions[i].substring(10); parent.appendChild(elem);
	var elem = document.createElement("br"); elem.id = "br_" + controllerConfigDescriptions[i]; parent.appendChild(elem);
}

for (var i = 3; i < Items2.length; i++) {
	if (Items2[i] != "slingshot" && Items2[i] != "bomb_bag" && Items2[i] != "bow" && Items2[i] != "hookshot" && Items2[i] != "wallet" && Items2[i] != "strength" && Items2[i] != "bottle" && Items2[i] != "scale" && Items2[i] != "magic") {Known[Items2[i]] = false;} else {Known[Items2[i]] = true;}
	Known[Items2[i] + 1] = false;
	Known[Items2[i] + 2] = false;
	Known[Items2[i] + 3] = false;
	Known[Items2[i] + 4] = false;
	Known[Items2[i] + 5] = false;
}
	
var dungeonStrings = ["deku", "dodongos", "jabu", "forest", "fire", "water", "spirit", "shadow"];
var bossStrings = ["deku_queen_gohma", "dodongos_king_dodongo", "jabu_barinade", "forest_phantomGanon", "fire_volvagia", "water_morpha", "spirit_twinrova", "shadow_bongo"]

var age = "child";
var hinted = false;
var lastCheck = ["start"];
Check.start = "unknown";

var dekuPlacement = "unknown";
var dodongosPlacement = "unknown";
var jabuPlacement = "unknown";
var forestPlacement = "unknown";
var firePlacement = "unknown";
var waterPlacement = "unknown";
var spiritPlacement = "unknown";
var shadowPlacement = "unknown";
var pocketPlacement = "unknown";

var dungIconSources = ["./normal/items/emerald.png", "./normal/items/ruby.png", "./normal/items/sapphire.png", "./normal/items/forest.png", "./normal/items/fire.png", "./normal/items/water.png", "./normal/items/shadow.png", "./normal/items/spirit.png", "./normal/items/light.png"];
document.getElementById("stonePic").src = dungIconSources[Math.floor(Math.random() * 3)];
document.getElementById("medallionPic").src = dungIconSources[Math.floor(Math.random() * 6)+3];
var tabPicSources = ["./tab_pics/circus_tent.png", "./tab_pics/camel.png", "./tab_pics/tiger.png", "./tab_pics/clown.png", "./tab_pics/elephant.png", "./tab_pics/lion.png", "./tab_pics/rhino.png" , "./tab_pics/juggler.png", "./tab_pics/zebra.png", "./tab_pics/bear.png", "./tab_pics/crocodile.png", "./tab_pics/monkey.png"]

Game.logically_accessible = 0;
var d = new Date();
var pauseTotal = 0;
var pauseInitial = 0;
var pauseFlag = true;
var initialTime = d.getTime();
var goodCheckPercent = 0;
var timeStart = d.getTime();
var timeCurrent;	
var timeFuture;
var timeFinal;
var timeLost =0;
var tMinutes = 0;
var tSeconds = 0;
var linso = false;
var linsoGoMode = false;
var linsoLightRotation = 0;
if (localStorage.getItem("type")) {Person.type = localStorage.getItem("type");} else{Person.type = "normie";}
Person.type = "normie";
var colorTheme = "dark";
if (localStorage.getItem("theme") != null) {if (localStorage.getItem("theme") == "light"){colorTheme = "light"; document.getElementById("altThemeControl").innerHTML = "Light Theme"};}
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
	
Game.tokens = 0;
token_click = 4;
	
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
Game.wallet3 = false;
Game.goron_tunic = false;
Game.zora_tunic = false;
Game.lens = false;
Game.stone_of_agony = false;
Game.trade = false;
Game.prescription = false;
Game.claim_check = false;
Game.lullaby = false;
Game.eponas = false;
Game.sarias = false;
Game.suns = false;
Game.time = false;
Game.storms = false;
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
Game.forest_boss_key = false;
Game.fire_boss_key = false;
Game.water_boss_key = false;
Game.spirit_boss_key = false;
Game.shadow_boss_key = false;

CouldHave.min_forest_keys=0;
CouldHave.current_forest_keys=0;
CouldHave.forest_keys = 0;
CouldHave.min_fire_keys=0;
CouldHave.current_fire_keys=0;
CouldHave.fire_keys = 0;
CouldHave.min_water_keys=0;
CouldHave.current_water_keys=0;
CouldHave.water_keys = 0;
CouldHave.min_spirit_keys=0;
CouldHave.current_spirit_keys=0;
CouldHave.spirit_keys = 0;
CouldHave.min_shadow_keys=0;
CouldHave.current_shadow_keys=0;
CouldHave.shadow_keys = 0;
CouldHave.min_ganons_keys=0;
CouldHave.current_ganons_keys=0;
CouldHave.ganons_keys = 0;
CouldHave.min_gtg_keys=0;
CouldHave.current_gtg_keys=0;
CouldHave.gtg_keys = 0;
CouldHave.min_well_keys=0;
CouldHave.current_well_keys=0;
CouldHave.well_keys = 0;	
CouldHave.forest_boss_key = false;
CouldHave.fire_boss_key = false;
CouldHave.water_boss_key = false;
CouldHave.spirit_boss_key = false;
CouldHave.shadow_boss_key = false;
	
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
	
Game.kokiri_sword_img= "./normal/items/kokiri_sword.png";
Game.bomb_img= "./images/explosive505050.png";
Game.rutos_letter_img= "./images/letter505050.png";
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
Game.magic_img= "./images/magic505050.png";
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
	"mido_1", "mido_2", "mido_3", "mido_4", "kokiri_sword", "shop_kokiri_TL", "shop_kokiri_TR", "shop_kokiri_BR", "shop_kokiri_BL", "gs_kokiri_child", "gs_kokiri_soil", "gs_kokiri_adult", "kokiri_storms",
	"talons_chickens", "gs_lon_lon_tree", "back_of_ranch", "scrub_ranch_1", "scrub_ranch_2", "scrub_ranch_3", "gs_lon_lon_window", "gs_lon_lon_shed", "gs_lon_lon_back_wall", 
	"hyrule_remote_grotto", "hyrule_open_grotto", "hyrule_hp_scrub", "hyrule_boulder_of_destiny", "hyrule_tektite_grotto", "gs_outside_kakariko", "gs_near_gerudo", "hyrule_ocarina",
	"gerudovalley_box", "gerudovalley_fall", "gs_valley_small_bridge", "gs_valley_bean", "gs_valley_pillar", "gs_valley_tent", "gerudo_hammer", "scrub_gv_1", "scrub_gv_2",
	"scrub_lake_1", "scrub_lake_2", "scrub_lake_3", "hylia_child_fishing", "hylia_bottle", "gs_hylia_bean", "gs_hylia_lab_wall", "gs_hylia_island", "hylia_adult_fishing", "hylia_lab_top", "gs_hylia_lab_crate", "hylia_lab_dive", "gs_hylia_tree", "hylia_sun_shoot",
	"gs_market", "shop_market_bazaar_TL", "shop_market_bazaar_TR", "shop_market_bazaar_BR", "shop_market_bazaar_BL", "shop_market_potion_TL", "shop_market_potion_TR", "shop_market_potion_BR", "shop_market_potion_BL", "shop_market_chu_TL", "shop_market_chu_TR", "shop_market_chu_BR", "shop_market_chu_BL", "market_slingshot_game", "richard", "market_bowling_1", "market_bowling_2","market_lens_game","poes",
	"gs_hyrule_castle_tree", "dins_fairy", "gs_hyrule_castle_grotto",
	"gs_ogc", "g_fairy",
	"lacs",
	"gs_fountain_above_log", "gs_fountain_tree", "fountain_fairy", "ice_glacier_hp", "ice_bottom_of_fountain", "gs_fountain_hidden_cave",
	"gs_ice_spinning_scythe", "ice_map", "gs_ice_hp_room", "ice_hp", "ice_compass", "gs_ice_block_room", "ice_irons",
	"deku_lobby", "deku_slingshot", "deku_slingshot_room_side", "deku_compass", "deku_compass_room_side", "gs_deku_compass", "gs_deku_basement_gate", "gs_deku_basement_vines", "deku_basement", "gs_deku_basement_back", "deku_queen_gohma",
	"lost_woods_fairy_ocarina", "target", "ocarina_game", "lost_woods_grotto", "scrub_lw_1", "scrub_lw_2", "gs_lost_woods_bean_2", "lost_woods_scrub_grotto", "scrub_lw_3", "gs_lost_woods_bean_1", "skull_kid", "bridge_scrub", "gs_lost_woods_above_stage", "theater",
	"wolfos_grotto", "gs_sacred_forest", "scrub_sfm_1", "scrub_sfm_2",
	"shop_goron_TL", "shop_goron_TR", "shop_goron_BR", "shop_goron_BL", "rolling_goron", "goron_dance", "goron_pot", "goron_maze_1", "goron_maze_2", "gs_goron_maze", "goron_maze_3", "gs_goron_center", "goron_link", "scrub_goron_1", "scrub_goron_2", "scrub_goron_3",
	"gs_dodongos_east_side", "gs_dodongos_scarecrow", "scrub_dodongos_1", "scrub_dodongos_2", "gs_dodongos_above_stairs", "gs_dodongos_stair_vines", "dodongos_map", "dodongos_compass", "dodongos_bomb_flower_platform", "scrub_dodongos_3", "scrub_dodongos_4", "dodongos_bomb_bag", "dodongos_end_of_bridge", "gs_dodongos_before_king", "dodongos_above_king", "dodongos_king_dodongo",
	"trail_dodongos_top", "gs_trail_bombable_wall", "trail_bombable", "trail_storms", "trail_fairy", "trade_quest", "gs_trail_hail_path", "gs_trail_above_dodongos", "gs_trail_soil",
	"crater_bean", "scrub_crater_1", "scrub_crater_2", "scrub_crater_3", "crater_hammer_fairy", "crater_nook_hp", "crater_grotto", "gs_crater_soil", "gs_crater_crate", 
	"shop_kakariko_bazaar_TL", "shop_kakariko_bazaar_TR", "shop_kakariko_bazaar_BR", "shop_kakariko_bazaar_BL", "shop_kakariko_potion_TL", "shop_kakariko_potion_TR", "shop_kakariko_potion_BR", "shop_kakariko_potion_BL", "man_on_roof", "kakariko_grotto", "windmill", "anju", "cow_house", "archery_game", "redead_grotto", "anjus_chickens", "gs_kakariko_tree", "gs_kakariko_guard_house", "gs_kakariko_tower", "gs_kakariko_construction", "gs_kakariko_skulltula_house", "gs_kakariko_impas", "tokens_10", "tokens_20", "tokens_30", "tokens_40", "tokens_50",
	"shield_grave", "graveyard_box", "race_1", "race_2", "gravedigging_tour", "gs_graveyard_soil", "gs_graveyard_wall", "redead_grave", "composers_grave", 
	"gs_river_tree", "scrub_river_1", "scrub_river_2", "river_pillar", "frogs_1", "river_grotto", "gs_river_near_grotto", "gs_river_above_bridge", "river_ledge", "gs_river_ladder", "frogs_2",
	"shop_domain_TL", "shop_domain_TR", "shop_domain_BR", "shop_domain_BL", "zora_diving", "zora_torches", "thaw_king", "gs_domain",
	"colossus_bean", "colossus_fairy", "gs_colossus_soil", "gs_colossus_hill", "gs_colossus_tree", "scrub_colossus_1", "scrub_colossus_2", 
	"gs_wasteland", "wasteland",
	"gs_fortress_top", "gerudo_roof", "gerudo_archery_1", "gerudo_archery_2", "gs_fortress_archery", 
	"gs_jabu_vines", "scrub_jabu", "jabu_map", "jabu_compass", "jabu_boomerang", "gs_jabu_near_octo_1", "gs_jabu_near_octo_2", "gs_jabu_near_boss", "jabu_barinade",
	"forest_first", "gs_forest_first", "gs_forest_lobby", "forest_stalfos", "forest_midCourtyard", "gs_forest_outdoor_east", "forest_highCourtyard", "forest_lowCourtyard", "forest_blockRoom", "forest_bossKey", "forest_floormaster", "gs_forest_outdoor_west", "forest_red", "forest_bow", "forest_blue", "forest_fallingCeiling", "forest_nearBoss", "gs_forest_basement", "forest_phantomGanon",
	"fire_nearBoss", "gs_fire_basement", "fire_hammer1", "fire_hammer2", "fire_lavaOpen", "gs_fire_time", "fire_lavaBomb", "fire_volvagia", "fire_lowerMaze", "gs_fire_bomb_wall", "fire_sideRoom", "fire_map", "fire_upperMaze", "fire_shortcut", "gs_fire_scarecrow_1", "gs_fire_scarecrow_2", "fire_scarecrow", "fire_compass", "fire_sotGoron", "fire_top",
	"water_compass", "water_map", "water_cracked", "water_torches", "gs_water_south_basement", "water_block", "gs_water_central", "water_pillar", "gs_water_platform_room", "water_dLink", "gs_water_river", "water_river", "water_dragon", "gs_water_near_boss_key", "water_bossKey", "water_morpha",
	"spirit_childLeft", "spirit_childRight", "gs_spirit_metal_fence", "spirit_childClimb1", "gs_spirit_child_climb", "spirit_childClimb2", "spirit_map", "spirit_sunRoom", "gs_spirit_before_child_knuckle", "spirit_rightHand", "spirit_adultLeft", "gs_spirit_boulder_room", "spirit_adultRight", "spirit_rotatingMirror1", "spirit_rotatingMirror2", "spirit_lullabyHand", "spirit_lullabyHigh", "gs_spirit_lobby", "spirit_nearFourArmos", "spirit_invisible1", "spirit_invisible2", "spirit_leftHand", "spirit_bossKey", "spirit_tippyTop", "spirit_twinrova",
	"shadow_map", "shadow_hovers", "shadow_compass", "shadow_earlySilvers", "gs_shadow_like_like", "shadow_spinning1", "shadow_spinning2", "shadow_spikesLower", "gs_shadow_crusher", "shadow_spikesUpper", "shadow_spikesSwitch", "shadow_redeadSilvers", "gs_shadow_giant_pot", "shadow_pot", "shadow_wind", "shadow_bombable", "shadow_gibdos", "gs_shadow_near_boat", "shadow_dins1", "shadow_dins2", "gs_shadow_three_pots", "shadow_floormaster", "shadow_bongo",
	"scrub_ganons_1", "scrub_ganons_2", "scrub_ganons_3", "scrub_ganons_4", "ganons_lightTrial1", "ganons_lightTrial2", "ganons_lightTrial3", "ganons_lightTrial4", "ganons_lightTrial5", "ganons_lightTrial6", "ganons_lightTrial7", "ganons_lightTrialLullaby", "ganons_spiritTrial1", "ganons_spiritTrial2", "ganons_forestTrial", "ganons_waterTrial1", "ganons_waterTrial2", "ganons_shadowTrial1", "ganons_shadowTrial2", "ganons_bossKey",
	"gtg_lobbyLeft", "gtg_lobbyRight", "gtg_stalfos", "gtg_wolfos", "gtg_silvers1", "gtg_silvers2", "gtg_silvers3", "gtg_silvers4", "gtg_eyes", "gtg_aboveEyes", "gtg_keese", "gtg_flamesChest", "gtg_freestanding", "gtg_right2", "gtg_right3", "gtg_beamos", "gtg_left1",  "gtg_left2", "gtg_left3", "gtg_left4", "gtg_final", "gtg_toilet",
	"well_fakeRight", "well_centerSmall", "well_backBombable", "well_waterLeft", "well_coffin", "well_centerBig", "well_fakeLeft", "well_frontBombable", "well_waterFront", "well_deadHand", "well_invisible", "gs_well_west_inner", "gs_well_east_inner", "well_locked1", "well_locked2", "gs_well_like_like", "well_basement",
	"zeldasSpot", "eponasSpot", "sariasSpot", "stormsSpot", "sunsSpot", "boleroSpot", "minuetSpot", "requiemSpot", "serenadeSpot", "preludeSpot", "nocturneSpot", "oot"
];
soliLinsoSongOrderConvert = [1,2,3,6,4,8,7,11,9,12,10,5];
	
var Names = [
	"TL", "TR", "BR", "BL", "Sword", "Shop 1", "Shop 2", "Shop 3", "Shop 4", "Near Exit", "Soil", "Adult", "Storms",
	"Talon", "Tree", "Back", "Left", "Center", "Right", "Window", "Shed", "Back Wall", 
	"Remote", "Open", "Scrub", "Market", "Tektite", "Near Kak", "Near GV", "OoT Item",
	"Box", "Water", "Bridge", "Soil", "Pillar", "Tent", "Rocks", "Left", "Right",
	"Left", "Center", "Right", "C Fish", "Bottle", "Soil", "Lab Wall", "Island", "A Fish", "Labtop", "Crate", "Divin'", "Tree", "Sun",
	"Guard", "Bazaar 1", "Bazaar 2", "Bazaar 3", "Bazaar 4", "Potion 1", "Potion 2", "Potion 3", "Potion 4", "Chu 1", "Chu 2", "Chu 3", "Chu 4", "Sling", "Rich", "Bowl 1", "Bowl 2", "Lens", "Poes",
	"Tree", "D Fairy", "Storms",
	"Skull", "G Fairy",
	"LACS",
	"Log", "Tree", "Fairy", "Glacier", "Divin'", "Cave",
	"Spinning", "Map", "HP", "HP", "Comp", "Blocks", "Irons",
	"Lobby", "Sling 1", "Sling 2", "Comp 1", "Comp 2", "Comp", "Gate", "Vines", "Base", "Back", "Queen",
	"F Ocarina", "Target", "Mem'ry", "Generic", "Stage L", "Stage R", "Stage Soil", "Scrub Gr", "Scrub Gr+", "Br Soil", "Saria Kid", "Br Scrub", "Abv Stage", "Mask",
	"Wolfos", "Skull", "Left", "Right",
	"Shop 1", "Shop 2", "Shop 3", "Shop 4", "Big Rollin'", "Dancin'", "Chuckin'", "Maze 1", "Maze 2", "Maze", "Maze 3!", "Center", "Lil Rollin", "Left", "Center", "Right",
	"Keese", "Scarecrow", "Far", "Lobby", "Nook", "Vines", "Map", "Comp", "Plat", "Left", "Right", "B Bag", "Bridge", "Last", "Above", "King",
	"Top", "Bombable", "Wall", "SoS", "Fairy", "Trade", "Hail", "Flower", "Soil",
	"Bean", "Left", "Center", "Right", "Fairy", "Nook", "Grotto", "Soil", "Crate", 
	"Bazaar 1", "Bazaar 2", "Bazaar 3", "Bazaar 4", "Potion 1", "Potion 2", "Potion 3", "Potion 4", "Roof", "Rear Gr", "Windmill", "Anj", "Cow", "Arch'ry", "Red Gr", "Cuccos", "Tree", "Guard", "Tower", "Construct", "GS House", "Impas", "Ten", "Twenty", "Thirty", "Fourty", "Fifty", //reasoning for skull check naming being a little weird is just because unleash animals needs enough characters to work properly(maybe not worth supporting)
	"Shield", "Box", "Race 1", "Race 2", "Tour", "Soil", "Wall", "Redead", "Fire", 
	"Tree", "Left", "Right", "Pillar", "Frogs 1", "Grotto", "Near Gr", "Bridge", "Ledge", "Ladder", "Frogs 2",
	"Shop 1", "Shop 2", "Shop 3", "Shop 4", "Divin'", "Torches", "King", "Skull",
	"Bean", "Fairy", "Soil", "Hill", "Tree", "Left", "Right", 
	"Skull", "Check",
	"Fort", "Roof", "1000", "1500", "Target", 
	"Vines", "Scrub", "Map", "Comp", "Boom", "B4 Octo L", "B4 Octo R", "Near Boss", "Barinade",
	"First", "First", "Lobby", "Stalfos", "C Mid", "C Mid", "C High", "C Low", "Shoot", "BK", "Floor", "Arch", "Red", "Bow", "Blue", "Falling", "Near Boss", "Base", "Phantom",
	"Near Boss", "Base", "Hammer 1", "Hammer 2", "Lav Open", "SoT", "Lav Bomb", "Volva", "Lower", "Bomb Wall", "Side Room", "Map", "Upper", "Bombable", "Crow 1", "Crow 2", "Crow", "Comp", "SoT", "MEGA",
	"Comp", "Map", "Cracked", "Torches", "S Base", "Block", "Pillar", "Pillar", "Plats", "D Link", "River", "River", "Dragin", "Near BK", "BK", "Morpha",
	"C L", "C R", "Fence", "C Climb 1", "C Climb", "C Climb 2", "Map", "Sun Room", "B4 Knuck", "Silvers", "A L", "SoT", "A R", "Mirror 1", "Mirror 2", "Lul Hand", "Lul High", "Main Room", "4 Armos", "Invisi 1", "Invisi 2", "Mirror", "BK", "Tippy Top", "Twinrova",
	"Map", "Hovers", "Comp", "Early Silvs", "Spinning", "Spinning 1", "Spinning 2", "Spikes L", "Spikes", "Spikes U1", "Spikes U2", "Mid Silvs", "Pot", "Pot", "Wind", "Bombable", "Gibdos", "Near Boat", "Dins 1", "Dins 2", "3 Pots", "Floor", "Bongo",
	"Scrub L", "Scrub LM", "Scrub RM", "Scrub R", "Light 1", "Light 2", "Light 3", "Light 4", "Light 5", "Light 6", "Light Clr", "Light Lul", "Spirit 1", "Spirit 2", "Forest", "Water 1", "Water 2", "Shadow 1", "Shadow 2", "BK",
	"Lobby L", "Lobby R", "Stalfos", "Wolfos", "Silvers 1", "Silvers 2", "Silvers 3", "Silvers 4", "Eyes", "Abv Eyes", "Enemies", "Fire", "R1", "R2", "R3", "Beamos", "L1",  "L2", "L3", "L4", "Final", "Toilet",
	"Fake R", "C Small", "B Bomb", "Water L", "Coffin", "C Big", "Fake L", "F Bomb", "Water F", "D Hand", "Invisi", "Door L", "Door R", "Locked 1", "Locked 2", "Like Like", "Base",
	"Zelda", "Malon", "Saria", "Windmill", "Grave", "Crater", "Meadow", "Colossus", "Ice", "1 Med", "3 Med", "OoT Song"
];
var alwaysHints = ["tokens_30", "tokens_40", "tokens_50", "oot", "trade_quest", "frogs_2", "theater"];

var AreaIndexes = [0,13,22,30,39,53,72,75,77,78,84,91,102,116,120,136,152,161,170,197,206,217,225,232,234,239,248,267,287,303,328,351,371,393,410];
var SongIndexes = [1000,411,421,1000,1000,1000,410,1000,419,1000,418,1000,1000,412,1000,1000,10000,415,413,414,1000,1000,417,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000];
var SongIndexes2 = [1000,411,421,1000,1000,1000,410,1000,419,1000,418,1000,1000,416,1000,1000,1000,415,420,414,1000,1000,417,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000];
	
var lastItem = 409;
var lastSong = 421;
	
	Location.med1 = "unknown";
	Location.med2 = "unknown";
	Location.med3 = "unknown";
	Location.med4 = "unknown"; 
	Location.med5 = "unknown";
	Location.med6 = "unknown";
	
	/*var Names = [
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
	];*/
	
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

Logic.accessible = true;

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
Logic.lens = false;
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
Logic.suns = false;
Logic.time = false;
Logic.storms = false;
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

//SPAWNS
Spawn = {};
Spawn.child_lower_dmc = false;
Spawn.child_lower_dmc_fairy = false;
Spawn.child_upper_dmc = false;
Spawn.child_dmt_fairy = false;
Spawn.child_dmt_fairy_ool = false;
Spawn.child_gv_gf = false;
//Spawn.child_nocturne = false;
Spawn.child_hyrule_fairy = false;
Spawn.child_zd = false;
Spawn.child_zr = false;

Spawn.adult_lower_dmc = false;
Spawn.adult_lower_dmc_fairy = false;
Spawn.adult_upper_dmc = false;
Spawn.adult_dmt_fairy = false;
Spawn.adult_dmt_fairy_ool = false;
Spawn.adult_gf = false;
Spawn.adult_gc_shop = false;
Spawn.adult_nocturne = false;
Spawn.adult_fishing = false;
Spawn.adult_meadow = false;
Spawn.adult_domain_shop = false;
Spawn.adult_domain = false;
Spawn.adult_ogc = false;
Spawn.adult_ogc_ool = false;
Spawn.adult_kak_roof = false;

//RULES
Rules = {};
Rules.kzSkip = false;
  
var woth1 = "unknown";
var woth2 = "unknown";
var woth3 = "unknown";
var woth4 = "unknown";
var woth5 = "unknown";	

var WotHItems = [];
var ManualWotHItems = {};
var ManualInLogicItems = {};
var ManualOutOfLogicItems = {};
var ManualNotWotHItems = {};
var ManualWotHMinorItems = {};
var MarkedWotHItemArrow = null;
var ManualWotHItemLocked = {};
var ManualWotHItemPutInLogic = {};
var pressCooldown = [[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false],[false,false,false,false,false,false]]
var WotH = new Array(35).fill(0);
var forcedDisplay = new Array(256).fill(false);
var checkedYet = new Array(256).fill(false);
var readYet = new Array(42).fill(false);
var AreaAge = new Array(35).fill(0);
var AreaWotHAge = new Array(35).fill(0);
var wothCount = new Array(35).fill(0);
var textBlock = '';
var circus = false;
var colorWothAreas = false;
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

var modal3 = document.getElementById("myModal3");

var btn = document.getElementById("locationCodes");

var span = document.getElementsByClassName("close")[1];

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
var childRoute1 = ["ocarina_game", "lost_woods_grotto", "lost_woods_scrub_grotto", "wolfos_grotto", "bridge_scrub", "target", "skull_kid", "kokiri_storms", "rolling_goron", "goron_dance", "goron_pot", "river_pillar", "river_grotto", "river_ledge", "frogs_1", "frogs_2", "zora_diving", "zora_torches", "hylia_child_fishing"];
var childRoute2 = ["market_slingshot_game", "market_bowling_1", "market_bowling_2","dins_fairy","market_lens_game"];

var parent = document.getElementById("normalColumn1");

var backgrounds = ["url('./normal/areas/kokiri.jpg')","url('./normal/areas/ranch.jpg')","url('./normal/areas/field.jpg')","url('./normal/areas/valley.jpg')","url('./normal/areas/hylia.jpg')","url('./normal/areas/market.jpg')","url('./normal/areas/hyrule_castle.jpg')",
"url('./normal/areas/ogc.jpg')","url('./normal/areas/tot.jpg')","url('./normal/areas/fountain.jpg')","url('./normal/areas/ice.jpg')","url('./normal/areas/deku.jpg')","url('./normal/areas/lost_woods.jpg')","url('./normal/areas/sfm.jpg')",
"url('./normal/areas/goron.jpg')","url('./normal/areas/dodongos.jpg')","url('./normal/areas/dmt.jpg')","url('./normal/areas/dmc.jpg')","url('./normal/areas/kakariko.jpg')","url('./normal/areas/graveyard.jpg')",
"url('./normal/areas/river.jpg')","url('./normal/areas/domain.jpg')","url('./normal/areas/colossus.jpg')","url('./normal/areas/wasteland.jpg')","url('./normal/areas/fortress.jpg')","url('./normal/areas/jabu.jpg')"
]

var background = "url('./normal/areas/kokiri.jpg')";
for (var i = 0; i<Locations.length; i++) {
	if (i == AreaIndexes[1]) {background = "url('./normal/areas/ranch.jpg')"; var elem = document.createElement("br"); elem.id = "kokiri_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[2]) {background = "url('./normal/areas/field.jpg')"; var elem = document.createElement("br"); elem.id = "ranch_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[3]) {background = "url('./normal/areas/valley.jpg')"; var elem = document.createElement("br"); elem.id = "field_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[4]) {background = "url('./normal/areas/hylia.jpg')"; var elem = document.createElement("br"); elem.id = "valley_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[5]) {background = "url('./normal/areas/market.jpg')"; var elem = document.createElement("br"); elem.id = "hylia_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[6]) {background = "url('./normal/areas/hyrule_castle.jpg')"; var elem = document.createElement("br"); elem.id = "market_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[7]) {background = "url('./normal/areas/ogc.jpg')"; var elem = document.createElement("br"); elem.id = "hyrule_castle_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[8]) {background = "url('./normal/areas/tot.jpg')"; var elem = document.createElement("br"); elem.id = "ogc_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[9]) {background = "url('./normal/areas/fountain.jpg')"; var elem = document.createElement("br"); elem.id = "tot_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[10]) {background = "url('./normal/areas/ice.jpg')"; var elem = document.createElement("br"); elem.id = "fountain_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[11]) {background = "url('./normal/areas/deku.jpg')"; parent = document.getElementById("normalColumn2");}
	if (i == AreaIndexes[12]) {background = "url('./normal/areas/lost_woods.jpg')"; var elem = document.createElement("br"); elem.id = "deku_break"; parent.appendChild(elem);}
	if (i == AreaIndexes[13]) {background = "url('./normal/areas/sfm.jpg')"; var elem = document.createElement("br"); elem.id = "lost_woods_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[14]) {background = "url('./normal/areas/goron.jpg')"; var elem = document.createElement("br"); elem.id = "sfm_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[15]) {background = "url('./normal/areas/dodongos.jpg')"; var elem = document.createElement("br"); elem.id = "goron_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[16]) {background = "url('./normal/areas/dmt.jpg')"; var elem = document.createElement("br"); elem.id = "dodongos_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[17]) {background = "url('./normal/areas/dmc.jpg')"; var elem = document.createElement("br"); elem.id = "dmt_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[18]) {background = "url('./normal/areas/kakariko.jpg')"; parent = document.getElementById("normalColumn3");}
	if (i == AreaIndexes[19]) {background = "url('./normal/areas/graveyard.jpg')"; var elem = document.createElement("br"); elem.id = "kakariko_break"; parent.appendChild(elem);}
	if (i == AreaIndexes[20]) {background = "url('./normal/areas/river.jpg')"; var elem = document.createElement("br"); elem.id = "graveyard_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[21]) {background = "url('./normal/areas/domain.jpg')"; var elem = document.createElement("br"); elem.id = "river_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[22]) {background = "url('./normal/areas/colossus.jpg')"; var elem = document.createElement("br"); elem.id = "domain_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[23]) {background = "url('./normal/areas/wasteland.jpg')"; var elem = document.createElement("br"); elem.id = "colossus_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[24]) {background = "url('./normal/areas/fortress.jpg')"; var elem = document.createElement("br"); elem.id = "wasteland_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[25]) {background = "url('./normal/areas/jabu.jpg')"; var elem = document.createElement("br"); elem.id = "fortress_break";  parent.appendChild(elem);}
	if (i == AreaIndexes[26]) {
		parent = document.getElementById("dung1");
		var elem = document.createElement("small"); elem.id = "title_forest"; elem.className = "area_titles"; elem.innerHTML = "For"; elem.onmousedown = route_forest; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "forest"; elem.className = "superdot"; elem.onclick = junkUltra; elem.innerHTML = "8"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "forestSKs"; elem.className = "superdotSK"; elem.innerHTML = "5"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "forestBKs"; elem.className = "superdotBK"; elem.innerHTML = "1"; parent.appendChild(elem);
		var elem = document.createElement("br"); parent.appendChild(elem);
	}
	if (i == AreaIndexes[27]) {
		var elem = document.createElement("small"); elem.id = "title_fire"; elem.className = "area_titles"; elem.innerHTML = "Fir"; elem.onmousedown = route_fire; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "fire"; elem.className = "superdot"; elem.onclick = junkUltra; elem.innerHTML = "6"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "fireSKs"; elem.className = "superdotSK"; elem.innerHTML = "8"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "fireBKs"; elem.className = "superdotBK"; elem.innerHTML = "1"; parent.appendChild(elem);
		var elem = document.createElement("br"); parent.appendChild(elem);
	}
	if (i == AreaIndexes[28]) {
		var elem = document.createElement("small"); elem.id = "title_water"; elem.className = "area_titles"; elem.innerHTML = "Wat"; elem.onmousedown = route_water; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "water"; elem.className = "superdot"; elem.onclick = junkUltra; elem.innerHTML = "4"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "waterSKs"; elem.className = "superdotSK"; elem.innerHTML = "6"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "waterBKs"; elem.className = "superdotBK"; elem.innerHTML = "1"; parent.appendChild(elem);
		var elem = document.createElement("br"); parent.appendChild(elem);
	}
	if (i == AreaIndexes[29]) {
		parent = document.getElementById("dung2");
		var elem = document.createElement("small"); elem.id = "title_spirit"; elem.className = "area_titles"; elem.innerHTML = "Spi"; elem.onmousedown = route_spirit; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "spirit"; elem.className = "superdot"; elem.onclick = junkUltra; elem.innerHTML = "14"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "spiritSKs"; elem.className = "superdotSK"; elem.innerHTML = "5"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "spiritBKs"; elem.className = "superdotBK"; elem.innerHTML = "1"; parent.appendChild(elem);
		var elem = document.createElement("br"); parent.appendChild(elem);
	}
	if (i == AreaIndexes[30]) {
		var elem = document.createElement("small"); elem.id = "title_shadow"; elem.className = "area_titles"; elem.innerHTML = "Sha"; elem.onmousedown = route_shadow; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "shadow"; elem.className = "superdot"; elem.onclick = junkUltra; elem.innerHTML = "8"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "shadowSKs"; elem.className = "superdotSK"; elem.innerHTML = "5"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "shadowBKs"; elem.className = "superdotBK"; elem.innerHTML = "1"; parent.appendChild(elem);
		var elem = document.createElement("br"); parent.appendChild(elem);
	}
	if (i == AreaIndexes[31]) {
		var elem = document.createElement("small"); elem.id = "title_ganons"; elem.className = "area_titles"; elem.innerHTML = "Gan"; elem.onmousedown = route_ganons; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "ganons"; elem.className = "superdot"; elem.onclick = junkUltra; elem.innerHTML = "14"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "ganonsSKs"; elem.className = "superdotSK"; elem.innerHTML = "2"; parent.appendChild(elem);
		var elem = document.createElement("br"); parent.appendChild(elem);
	}
	if (i == AreaIndexes[32]) {
		parent = document.getElementById("dung3");
		var elem = document.createElement("small"); elem.id = "title_gtg"; elem.className = "area_titles"; elem.innerHTML = "GTG"; elem.onmousedown = route_gtg; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "gtg"; elem.className = "superdot"; elem.onclick = junkUltra; elem.innerHTML = "13"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "gtgSKs"; elem.className = "superdotSK"; elem.innerHTML = "9"; parent.appendChild(elem);
		var elem = document.createElement("br"); parent.appendChild(elem);
	}
	if (i == AreaIndexes[33]) {
		var elem = document.createElement("small"); elem.id = "title_well"; elem.className = "area_titles"; elem.innerHTML = "Well"; elem.onmousedown = route_well; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "well"; elem.className = "superdot"; elem.onclick = junkUltra; elem.innerHTML = "11"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "wellSKs"; elem.className = "superdotSK"; elem.innerHTML = "3"; parent.appendChild(elem);
		var elem = document.createElement("br"); parent.appendChild(elem);
	}
	if (i < AreaIndexes[34]) {
		var elem = document.createElement("input"); elem.id = Locations[i]; /*elem.onmousedown = mouse_input;*/ if (i < AreaIndexes[26]) {elem.style.backgroundImage = background; elem.className = "picture_input"; } else {elem.className = "check_input";} parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "text_" + Locations[i]; elem.className = "check_text"; elem.onmousedown = junk; elem.innerHTML = Names[i]; if (elem.id.includes("text_gs_")) {elem.style.textDecoration = "underline overline";} if (elem.id.includes("text_scrub")) {elem.style.textDecoration = "underline overline";} parent.appendChild(elem);
		var elem = document.createElement("br"); elem.id = "br_" + Locations[i]; parent.appendChild(elem);
	}
	else {
		parent = document.getElementById("songs");
		var elem = document.createElement("input"); elem.id = Locations[i]; elem.className = "check_input"; parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "text_" + Locations[i]; elem.className = "check_text"; elem.onmousedown = function() {toggleHint(this);}; elem.innerHTML = Names[i]; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.id = "br_" + Locations[i]; parent.appendChild(elem);
	}
}

var backUp = [];
		
for (var i = 0; i < Locations.length; i++) {
	Check[Locations[i]] = "unknown";
	backUp.push(document.getElementById("text_" + Locations[i]).innerHTML);
	if (Locations[i].startsWith("shop_")) {Shop_Logic[Locations[i]] = "giants_wallet";}
}

for (var i = 0; i < Items.length; i++) {
	Location[Items[i]] = "unknown";
}

location_logic();

var linsoOrder = ["stick", "nut", "bomb", "bow", "fire_arrows", "dins_fire", "slingshot", "ocarina", "chu", "hookshot", "ice_arrows", "farores_wind", "boomerang", "lens", "beans", "hammer", "light_arrows", "nayrus_love", "rutos_letter", "bottle1", "bottle2", "bottle3", "egg1", "egg2", "kokiri_sword", "master_sword", "biggoron_sword", "circus", "skull_token", "skull_counter", "deku_shield", "hylian_shield", "mirror_shield", "magic", "adults_wallet", "gerudo_card", "kokiri_tunic", "goron_tunic", "zora_tunic", "agony", "silver_scale", "goron_bracelet", "kokiri_boots", "iron_boots", "hover_boots", "emerald", "ruby", "sapphire", "forest", "fire", "water", "gen1", "gen2", "gen3"];
var linsoOrder2 = ["lullaby", "eponas", "sarias", "suns", "time", "storms", "minuet", "bolero", "serenade", "nocturne", "requiem", "prelude"];

handleThemes();
handleThemes();
var linsoOrderIncrement = 0;
var tempTop = -32;
for (var i = 1; i <= 11; i++) {
if (i == 5) {tempTop += 9;} if (i == 9) {tempTop += 5;} if (i == 10) {tempTop -= 55;} if (i == 11) {tempTop += 8;}
	for (var j = 1; j <= 6; j++) {
		if (i > 9) {
			if (i == 10 && j < 3) {continue;}
			if (i == 10 && j == 3) {
				var elem = document.createElement("small");
				elem.id = "linso" + i + j;
				elem.style.position = "absolute";
				elem.style.left = 57 + j*41 + "px";
				elem.style.top = tempTop - 81 + i*40 + "px";
				elem.style.fontWeight = "bold";
				elem.style.color = "hotpink";
				elem.style.opacity = 0;
				elem.innerHTML = 999;
				document.getElementById("linsoColumn").appendChild(elem); 
				continue;
			}
			var elem = document.createElement("small");
			elem.id = "linso" + i + j;
			elem.style.position = "absolute";
			if (i == 10) {elem.className = "linsostone";} else {elem.className = "linsomed";}
			if (i == 10) {elem.style.left = -25 + j*41 + "px";} else {elem.style.left = -28 + j*41 + "px";}
			elem.style.top = tempTop + i*40 + "px";
			elem.style.opacity = 1;
			document.getElementById("linsoColumn").appendChild(elem); 
			continue;
		}
		if (linsoOrder[linsoOrderIncrement] == "") {linsoOrderIncrement += 1; continue;}
		if (linsoOrder[linsoOrderIncrement] == "skull_counter") {
			var elem = document.createElement("small");
			elem.innerHTML = "0";
			elem.id = "linso_counter";
			elem.className = "linso_counter"
			elem.style.left = -38 + j*41 + "px";
			elem.style.top = tempTop + i*40 + "px";
			elem.onmousedown = linso_counter;
			document.getElementById("linsoColumn").appendChild(elem); 
			linsoOrderIncrement += 1;
		}
		else {
		var elem = document.createElement("IMG");
		elem.id = "linso" + i + j;
		elem.style.height = "35px";
		elem.style.width = "35px";
		if (linsoOrder[linsoOrderIncrement].startsWith("bottle")) {elem.src = Game.bottle_img;}
		else if (linsoOrder[linsoOrderIncrement].startsWith("gen1")) {elem.src = Game.shadow_img;}
		else if (linsoOrder[linsoOrderIncrement].startsWith("gen2")) {elem.src = Game.spirit_img;}
		else if (linsoOrder[linsoOrderIncrement].startsWith("gen3")) {elem.src = Game.light_img;}
		else if (linsoOrder[linsoOrderIncrement].startsWith("circus")) {elem.src = tabPicSources[Math.floor(Math.random() * tabPicSources.length)]; /*elem.onclick = toggleLinsoGoMode;*/}
		else {elem.src = Game[linsoOrder[linsoOrderIncrement] + "_img"];}
		Game[linsoOrder[linsoOrderIncrement]] = false;
		if (linsoOrder[linsoOrderIncrement] == "kokiri_boots" || linsoOrder[linsoOrderIncrement] == "kokiri_tunic" || linsoOrder[linsoOrderIncrement] == "skull_token") {Game[linsoOrder[linsoOrderIncrement]] = true;}
		elem.style.position = "absolute";
		elem.style.left = -32 + j*41 + "px";
		elem.style.top = tempTop + i*40 + "px";
		if (linsoOrder[linsoOrderIncrement].startsWith("circus")) {elem.style.opacity = 0;} else {elem.style.opacity = .3; elem.style.filter = "grayscale(100%)";}
		if (linsoOrder[linsoOrderIncrement] == "skull_token") {elem.onmousedown = linso_counter;} else if (!linsoOrder[linsoOrderIncrement].startsWith("circus")) {elem.onclick = linSoClick;}
		if (linsoOrder[linsoOrderIncrement].startsWith("circus")) {
			var elem2 = document.createElement("IMG");
			elem2.style.position = "absolute";
			elem2.style.left = -82 + j*41 + "px";
			elem2.style.top = tempTop -  50 + i*40 + "px";
			elem2.id = "linsoLight";
			elem2.src = "./normal/linsoLight.png";
			elem2.style.opacity = 0;
			document.getElementById("linsoColumn").appendChild(elem2); 
		}
		document.getElementById("linsoColumn").appendChild(elem); 
		linsoOrderIncrement += 1;
		}
	}
}
var linsoOrderIncrement = 0;
tempTop = -21;
for (var i = 1; i <= 12; i++) {
	if (linsoOrder[linsoOrderIncrement] == "") {linsoOrderIncrement += 1; continue;}
	var elem = document.createElement("IMG");
	elem.id = "linsoS" + i;
	elem.style.height = "35px";
	elem.style.width = "35px";
	elem.src = Game[linsoOrder2[linsoOrderIncrement] + "_img"];
	elem.style.position = "absolute";
	elem.style.left = 258 + "px";
	elem.style.top = tempTop + i*31 + "px";
	elem.style.opacity = .3;
	elem.style.filter = "grayscale(100%)";
	elem.onclick = linSoClick;
	document.getElementById("linsoColumn").appendChild(elem);
	linsoOrderIncrement += 1;
}

for (var i = 1; i <= 12; i++) {
	var elem = document.createElement("IMG");
	elem.id = "linsoC" + i;
	elem.style.height = "15px";
	elem.style.width = "15px";
	elem.src = "./normal/check.png";
	elem.style.position = "absolute";
	elem.style.left = 278 + "px";
	elem.style.top = tempTop + i*31 + "px";
	elem.style.opacity = 0;
	document.getElementById("linsoColumn").appendChild(elem);
}
var linsoString = false;
if (localStorage.getItem("linso")) {linsoString = localStorage.getItem("linso");}
if (linsoString == "true") {linso = true;}

searchItems = ["Boomerang", "Bomb Bag", "Bow", "Hammer", "Scale", "Hookshot", "Letter", "Strength", "Mirror", "Magic", "Iron Boots", "Kokiri Sword", "Hover Boots", "Din's Fire", "Light Arrows"]
for (var i = 1; i <= 15; i++) {
	var id = 'searchingFor_'+Items[ItemNames.indexOf(searchItems[i-1])]
	document.getElementById("searchingFor_div").innerHTML+='<img id = '+ id +' class = "searchingFor_images" onmousedown = searchingFor_tracking()>'
	document.getElementById(id).src = ItemImages[ItemNames.indexOf(searchItems[i-1])];
	document.getElementById(id).style.display = "inline-block";
}

var haveEvents = 'ongamepadconnected' in window;
var controllers = {};

function connecthandler(e) {
  addgamepad(e.gamepad);
}

function addgamepad(gamepad) {
  controllers[gamepad.index] = gamepad;
}

function disconnecthandler(e) {
  removegamepad(e.gamepad);
}

if (localStorage.getItem(controllerConfigDescriptions[0])) {document.getElementById(controllerConfigDescriptions[0]).value = localStorage.getItem(controllerConfigDescriptions[0]);}
if (localStorage.getItem(controllerConfigDescriptions[1])) {document.getElementById(controllerConfigDescriptions[1]).value = localStorage.getItem(controllerConfigDescriptions[1]);}
if (localStorage.getItem(controllerConfigDescriptions[2])) {document.getElementById(controllerConfigDescriptions[2]).value = localStorage.getItem(controllerConfigDescriptions[2]);}
if (localStorage.getItem(controllerConfigDescriptions[3])) {document.getElementById(controllerConfigDescriptions[3]).value = localStorage.getItem(controllerConfigDescriptions[3]);}
if (localStorage.getItem(controllerConfigDescriptions[4])) {document.getElementById(controllerConfigDescriptions[4]).value = localStorage.getItem(controllerConfigDescriptions[4]);}
if (localStorage.getItem(controllerConfigDescriptions[5])) {document.getElementById(controllerConfigDescriptions[5]).value = localStorage.getItem(controllerConfigDescriptions[5]);}
function updateControllerStatus() {
	if (!haveEvents) {
		scangamepads();
	}

  var i = 0;
  var j;

  for (j in controllers) {
    var controller = controllers[j];

    for (i = 0; i < controller.buttons.length; i++) {
      var val = controller.buttons[i];
      var pressed = val == 1.0;
      if (typeof(val) == "object") {
        pressed = val.pressed;
        val = val.value;
      }
	  
      if (pressed && pressCooldown[i][j] == false) {
		if (document.getElementById(controllerConfigDescriptions[0]) === document.activeElement) {document.getElementById(controllerConfigDescriptions[0]).value = i; localStorage.setItem(controllerConfigDescriptions[0], document.getElementById(controllerConfigDescriptions[0]).value);}
		if (document.getElementById(controllerConfigDescriptions[1]) === document.activeElement) {document.getElementById(controllerConfigDescriptions[1]).value = i; localStorage.setItem(controllerConfigDescriptions[1], document.getElementById(controllerConfigDescriptions[1]).value);}
		if (document.getElementById(controllerConfigDescriptions[2]) === document.activeElement) {document.getElementById(controllerConfigDescriptions[2]).value = i; localStorage.setItem(controllerConfigDescriptions[2], document.getElementById(controllerConfigDescriptions[2]).value);}
		if (document.getElementById(controllerConfigDescriptions[3]) === document.activeElement) {document.getElementById(controllerConfigDescriptions[3]).value = i; localStorage.setItem(controllerConfigDescriptions[3], document.getElementById(controllerConfigDescriptions[3]).value);}
		if (document.getElementById(controllerConfigDescriptions[4]) === document.activeElement) {document.getElementById(controllerConfigDescriptions[4]).value = i; localStorage.setItem(controllerConfigDescriptions[4], document.getElementById(controllerConfigDescriptions[4]).value);}
		if (document.getElementById(controllerConfigDescriptions[5]) === document.activeElement) {document.getElementById(controllerConfigDescriptions[5]).value = i; localStorage.setItem(controllerConfigDescriptions[5], document.getElementById(controllerConfigDescriptions[5]).value);}
		if (acceptControllerInput[j] && nextChecks.length > 0 && nextIndex != 420){
			if (document.getElementById(controllerConfigDescriptions[0]).value == i) {
				var ev1 = new MouseEvent("mousedown", {
					bubbles: true,
					cancelable: false,
					view: window,
					button: 0,
					buttons: 2,
					clientX: document.getElementById("text_" + nextChecks[nextIndex]).getBoundingClientRect().x,
					clientY: document.getElementById("text_" + nextChecks[nextIndex]).getBoundingClientRect().y
				});
				document.getElementById("text_" + nextChecks[nextIndex]).dispatchEvent(ev1);
				pressCooldown[i][j] = true;
				acceptControllerInput[j] = false;
			}
			if (document.getElementById(controllerConfigDescriptions[1]).value == i) {
				var ev1 = new MouseEvent("mousedown", {
					bubbles: true,
					cancelable: false,
					view: window,
					button: 2,
					buttons: 2,
					clientX: document.getElementById("text_" + nextChecks[nextIndex]).getBoundingClientRect().x,
					clientY: document.getElementById("text_" + nextChecks[nextIndex]).getBoundingClientRect().y
				});
				document.getElementById("text_" + nextChecks[nextIndex]).dispatchEvent(ev1);
				pressCooldown[i][j] = true;
				acceptControllerInput[j] = false;
			}
			if (document.getElementById(controllerConfigDescriptions[2]).value == i) {
				var ev1 = new MouseEvent("mousedown", {
					bubbles: true,
					cancelable: false,
					view: window,
					button: 1,
					buttons: 2,
					clientX: document.getElementById("text_" + nextChecks[nextIndex]).getBoundingClientRect().x,
					clientY: document.getElementById("text_" + nextChecks[nextIndex]).getBoundingClientRect().y
				});
				document.getElementById("text_" + nextChecks[nextIndex]).dispatchEvent(ev1);
				pressCooldown[i][j] = true;
				acceptControllerInput[j] = false;
			}
			if (document.getElementById(controllerConfigDescriptions[3]).value == i) {
				var ev1 = new MouseEvent("mousedown", {
					bubbles: true,
					cancelable: false,
					view: window,
					button: 2,
					buttons: 2,
					clientX: document.getElementById(nextChecks[nextIndex]).getBoundingClientRect().x,
					clientY: document.getElementById(nextChecks[nextIndex]).getBoundingClientRect().y
				});
				document.getElementById(nextChecks[nextIndex]).dispatchEvent(ev1);
				pressCooldown[i][j] = true;
				acceptControllerInput[j] = false;
			}
			if (document.getElementById(controllerConfigDescriptions[4]).value == i) {console.log("hi"); nextChecks.splice(nextIndex,1); pressCooldown[i][j] = true; acceptControllerInput[j] = false;}
			midUpdate();
		}
		if (document.getElementById(controllerConfigDescriptions[5]).value == i) {acceptControllerInput[j] = true; pressCooldown[i][j] = true;}
      } else if (!pressed) {
		  if (document.getElementById(controllerConfigDescriptions[5]).value == i) {acceptControllerInput[j] = false;}
		  pressCooldown[i][j] = false;
      } else {
		  
	  }
    }
		if (document.getElementById("readAxes").value == "YES") {
			for (i =0; i < 6; i++) {
				if (i == 4 || i == 3) continue;
				if (controller.axes[i] > .7 || controller.axes[i] < -.7) {
					if (document.getElementById(controllerConfigDescriptions[0]) === document.activeElement) {document.getElementById(controllerConfigDescriptions[0]).value = i + controller.axes[i].toFixed(2); localStorage.setItem(controllerConfigDescriptions[0], document.getElementById(controllerConfigDescriptions[0]).value);}
					if (document.getElementById(controllerConfigDescriptions[1]) === document.activeElement) {document.getElementById(controllerConfigDescriptions[1]).value = i + controller.axes[i].toFixed(2); localStorage.setItem(controllerConfigDescriptions[1], document.getElementById(controllerConfigDescriptions[1]).value);}
					if (document.getElementById(controllerConfigDescriptions[2]) === document.activeElement) {document.getElementById(controllerConfigDescriptions[2]).value = i + controller.axes[i].toFixed(2); localStorage.setItem(controllerConfigDescriptions[2], document.getElementById(controllerConfigDescriptions[2]).value);}
					if (document.getElementById(controllerConfigDescriptions[3]) === document.activeElement) {document.getElementById(controllerConfigDescriptions[3]).value = i + controller.axes[i].toFixed(2); localStorage.setItem(controllerConfigDescriptions[3], document.getElementById(controllerConfigDescriptions[3]).value);}
					if (document.getElementById(controllerConfigDescriptions[4]) === document.activeElement) {document.getElementById(controllerConfigDescriptions[4]).value = i + controller.axes[i].toFixed(2); localStorage.setItem(controllerConfigDescriptions[4], document.getElementById(controllerConfigDescriptions[4]).value);}
					if (document.getElementById(controllerConfigDescriptions[5]) === document.activeElement) {document.getElementById(controllerConfigDescriptions[5]).value = i + controller.axes[i].toFixed(2); localStorage.setItem(controllerConfigDescriptions[5], document.getElementById(controllerConfigDescriptions[5]).value);}
				}
				if (acceptControllerInput[j] && nextChecks.length > 0 && nextIndex != 420){
			if (document.getElementById(controllerConfigDescriptions[0]).value.startsWith(i) && ((document.getElementById(controllerConfigDescriptions[0]).value.includes("-") && controller.axes[i] < -.65) || (!document.getElementById(controllerConfigDescriptions[0]).value.includes("-") && controller.axes[i] > .65))) {
				var ev1 = new MouseEvent("mousedown", {
					bubbles: true,
					cancelable: false,
					view: window,
					button: 0,
					buttons: 2,
					clientX: document.getElementById("text_" + nextChecks[nextIndex]).getBoundingClientRect().x,
					clientY: document.getElementById("text_" + nextChecks[nextIndex]).getBoundingClientRect().y
				});
				document.getElementById("text_" + nextChecks[nextIndex]).dispatchEvent(ev1);
				acceptControllerInput[j] = false;
			}
			if (document.getElementById(controllerConfigDescriptions[1]).value.startsWith(i) && ((document.getElementById(controllerConfigDescriptions[1]).value.includes("-") && controller.axes[i] < -.65) || (!document.getElementById(controllerConfigDescriptions[1]).value.includes("-") && controller.axes[i] > .65))) {
				var ev1 = new MouseEvent("mousedown", {
					bubbles: true,
					cancelable: false,
					view: window,
					button: 2,
					buttons: 2,
					clientX: document.getElementById("text_" + nextChecks[nextIndex]).getBoundingClientRect().x,
					clientY: document.getElementById("text_" + nextChecks[nextIndex]).getBoundingClientRect().y
				});
				document.getElementById("text_" + nextChecks[nextIndex]).dispatchEvent(ev1);
				acceptControllerInput[j] = false;
			}
			if (document.getElementById(controllerConfigDescriptions[2]).value.startsWith(i) && ((document.getElementById(controllerConfigDescriptions[2]).value.includes("-") && controller.axes[i] < -.65) || (!document.getElementById(controllerConfigDescriptions[2]).value.includes("-") && controller.axes[i] > .65))) {
				var ev1 = new MouseEvent("mousedown", {
					bubbles: true,
					cancelable: false,
					view: window,
					button: 1,
					buttons: 2,
					clientX: document.getElementById("text_" + nextChecks[nextIndex]).getBoundingClientRect().x,
					clientY: document.getElementById("text_" + nextChecks[nextIndex]).getBoundingClientRect().y
				});
				document.getElementById("text_" + nextChecks[nextIndex]).dispatchEvent(ev1);
				acceptControllerInput[j] = false;
			}
			if (document.getElementById(controllerConfigDescriptions[3]).value.startsWith(i) && ((document.getElementById(controllerConfigDescriptions[3]).value.includes("-") && controller.axes[i] < -.65) || (!document.getElementById(controllerConfigDescriptions[3]).value.includes("-") && controller.axes[i] > .65))) {
				console.log(nextChecks[nextIndex]);
				var ev1 = new MouseEvent("mousedown", {
					bubbles: true,
					cancelable: false,
					view: window,
					button: 2,
					buttons: 2,
					clientX: document.getElementById(nextChecks[nextIndex]).getBoundingClientRect().x,
					clientY: document.getElementById(nextChecks[nextIndex]).getBoundingClientRect().y
				});
				document.getElementById(nextChecks[nextIndex]).dispatchEvent(ev1);
				acceptControllerInput[j] = false;
				
			}
			if (document.getElementById(controllerConfigDescriptions[4]).value.startsWith(i) && ((document.getElementById(controllerConfigDescriptions[4]).value.includes("-") && controller.axes[i] < -.65) || (!document.getElementById(controllerConfigDescriptions[4]).value.includes("-") && controller.axes[i] > .65))) {nextChecks.splice(nextIndex,1); acceptControllerInput[j] = false;}
			midUpdate();
			}
		}
	}
  }
}

function scangamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
  for (var i = 0; i < gamepads.length; i++) {
    if (gamepads[i]) {
      if (gamepads[i].index in controllers) {
        controllers[gamepads[i].index] = gamepads[i];
      } else {
        addgamepad(gamepads[i]);
      }
    }
  }
}

window.onbeforeunload = popup;
function popup() {
  return '';
}
document.documentElement.spellcheck = false;
document.getElementById("hintInput").innerHTML = "30 \n40 \n50 \noot \nbig \nfr2 \nmas \n";
if (document.getElementById("presets").value == "SGL_2022")
	document.getElementById("hintInput").innerHTML = "30 \n40 x\n50 x\nnoc \nbig \nfr2 \nmas \n";
if (document.getElementById("presets").value == "S6")
	document.getElementById("hintInput").innerHTML = "30 \n40 \n50 \noot \nnoc \nbig \nfr2 \nmas \n";

window.addEventListener("gamepadconnected", connecthandler);
window.addEventListener("gamepaddisconnected", disconnecthandler);

if (!haveEvents) {
 setInterval(scangamepads, 500);
}
document.getElementById("linso54").style.opacity = 1

linsoControl(); linsoControl();
setInterval(slowUpdate,10000);
setInterval(midUpdate,500);
setInterval(fastUpdate,100);
setInterval(updateControllerStatus,1000/60);
Update(); midUpdate(); midUpdate(); fastUpdate();