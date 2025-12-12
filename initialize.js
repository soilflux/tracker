var Hinted = {};
var Check={};
var ChecksLockedBy={};
var ChecksPutInLogicBy = {};
var Player={};
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
var Location_Peek={};
var Location_Access={};
var Location_Could_Access={};
var Location_Could_Peek={};
var Logic={};
var Shop_Logic = {};
var Location ={};
var gs = [];
var Area = [];
var Known = [];
var paused = true;
var pausedToD = true;
var timerInitialized = false;
var woth1Locations = [];
var woth2Locations = [];
var woth3Locations = [];
var woth4Locations = [];
var woth5Locations = [];
var woth6Locations = [];
var woth7Locations = [];
var woth8Locations = [];
var thisIsAKey = false;
var thisIsABossKey = false;
var thisIsHinted = false;
var hintedInput = "";
var temptext2 = "";
var removeBKFlag = false;
var mouseInputs_locations = [];
document.getElementById("timerMultiplier").value = 1;
var nerfed = true;
var hamsda = false;
if (localStorage.getItem("hamsda")) {if (localStorage.getItem("hamsda") == "true") {hamsda = true;} else{hamsda = false;};}
if (hamsda) {document.getElementById("hamsdaToggle").innerHTML="Disable Hamsda Tracking";}
var next = document.getElementById("next_check_prediction");
var nextChecks = [];
var nextIndex = 0;
var speedUp = false;
var speedUpTotal = 0;
var timeTotal = 0;
var effectiveSpeedUp = 1;
var animalID = '';
var rainbowFlag = false;
var rainbowFlagFlag = false;
var yamiFailFlag = false;
var yamiFlag = false;
var yamiFlagFlag = false;
var angelFailFlag = false;
var angelFlag = false;
var angelFlagFlag = false;
var acceptControllerInput = [false,false,false,false,false,false];
var toFocus = null;
var inLogicColor = 'chartreuse'
var untracked = 5;
var baitsChecked = 0;
var questCounter = 0;
document.getElementById("bait_probability").onclick = function(){untracked -= 1;}
var simActive = false;
var simOverride = false;
var SpoilerJSON;
var chuCount = 0;
var rupeeCount = 0;
var chusInBigChests = false;
var songItemChecked = true;

var dungeonToEntrance_ER_dict = {}; // given a dungeon, tell which entrance you enter to get to it
var entranceToDungeon_ER_dict = {}; // given a dugeon entrance, tell which dungeon it leads to
var dungs_list2 = {"deku":"Deku", "dodongos":"DC", "jabu":"Jabu", "forest_temple":"Forest", "fire_temple":"Fire", "water_temple":"Water", "shadow_temple":"Shadow", "spirit_temple":"Spirit", "botw":"BotW", "ice":"Ice", "gtg":"GTG"};
var dungs_list = ["deku", "dodongos", "jabu", "forest_temple", "fire_temple", "water_temple", "shadow_temple", "spirit_temple", "botw", "ice", "gtg"];
var dungs_list_short = ["de", "do", "ja", "fo", "fi", "wa", "sh", "sp", "bo", "ic", "gt"];
var dungs_colors = Array(dungs_list.length).fill("white");
for(let d = 0; d < dungs_list.length; d++) {
	dungeonToEntrance_ER_dict[dungs_list[d]] = dungs_list[d];
	entranceToDungeon_ER_dict[dungs_list[d]] = dungs_list[d];
}

document.getElementById("markMedallions").value = "Y-G-R-B-P-O-";
document.getElementById("markStones").value = "112233";


var dungeonSkullSanity = false;
var scrubSanity = false;
if (localStorage.getItem("scrubSanity")) {document.getElementById("scrubSanity").value= localStorage.getItem("scrubSanity");}
if (localStorage.getItem("shopSanity")) {document.getElementById("shopSanity").value = localStorage.getItem("shopSanity");}
if (localStorage.getItem("skullSanity")) {document.getElementById("skullSanity").value = localStorage.getItem("skullSanity");}
if (localStorage.getItem("cowSanity")) {document.getElementById("cowSanity").value = localStorage.getItem("cowSanity");}
if (localStorage.getItem("closedDeku")) {document.getElementById("closedDeku").value	= localStorage.getItem("closedDeku");}
if (localStorage.getItem("closedFountain")) {document.getElementById("closedFountain").value = localStorage.getItem("closedFountain");}
if (localStorage.getItem("blueFireArrows")) {document.getElementById("blueFireArrows").value = localStorage.getItem("blueFireArrows");}
if (localStorage.getItem("keysanity")) {document.getElementById("keysanity").value = localStorage.getItem("keysanity");}
if (localStorage.getItem("ganonBKSetting")) {document.getElementById("ganonBKSetting").value = localStorage.getItem("ganonBKSetting");}
if (localStorage.getItem("ganonsBridge")) {document.getElementById("ganonsBridge").value = localStorage.getItem("ganonsBridge");}
if (localStorage.getItem("bosskeys")) {document.getElementById("bosskeys").value = localStorage.getItem("bosskeys");}
if (localStorage.getItem("shuffleOcarinas")) {document.getElementById("shuffleOcarinas").value = localStorage.getItem("shuffleOcarinas");}
if (localStorage.getItem("shuffleGerudoCard")) {document.getElementById("shuffleGerudoCard").value = localStorage.getItem("shuffleGerudoCard");}
if (localStorage.getItem("shuffleBeanPack")) {document.getElementById("shuffleBeanPack").value = localStorage.getItem("shuffleBeanPack");}
if (localStorage.getItem("preplantedBeans")) {document.getElementById("preplantedBeans").value = localStorage.getItem("preplantedBeans");}
if (localStorage.getItem("shuffleExpensivePurchases")) {document.getElementById("shuffleExpensivePurchases").value = localStorage.getItem("shuffleExpensivePurchases");}
if (localStorage.getItem("csmc")) {document.getElementById("csmc").value = localStorage.getItem("csmc");}
if (localStorage.getItem("hints_type")) {document.getElementById("hints_type").value = localStorage.getItem("hints_type");}
if (localStorage.getItem("simSeed")) {document.getElementById("simSeed").value = localStorage.getItem("simSeed");}
if (localStorage.getItem("presets")) {document.getElementById("presets").value = localStorage.getItem("presets");}
if (localStorage.getItem("erOption")) {document.getElementById("erOption").value = localStorage.getItem("erOption");}
if (localStorage.getItem("FAE_option")) {document.getElementById("FAE_option").value = localStorage.getItem("FAE_option");}
if (document.getElementById("presets").value == "SGL_2025") {songItemChecked = false;}
if (document.getElementById("presets").value == "SGL_2025")
	document.getElementById("markMedallions").value = "Y-frR-B-P-O-";
		
var hintStones = ["Crater: Hint", "Crater: Gr. Hint", "Trail: Gr. Hint", "Trail: Bigo Hint", "Colossus: Hint", "Dodongos: Hint", "Field: Open Gr. Hint", "Field: Remote Gr. Hint", "Field: Destiny Hint", "Valley: Hint", "Hylia: After Valley Hint", "Hylia: Back Right Hint", "Hylia: Back Left Hint", "Hyrule Castle: First Hint", "Hyrule Castle: Second Hint", "Temple of Time: First Hint", "Temple of Time: Second Hint", "Temple of Time: Third Hint", "Temple of Time: Fourth Hint", "Kakariko: Gr. Hint", "Kokiri: Left Deku Hint", "Kokiri: Right Deku Hint", "Kokiri: Gr. Hint", "Kokiri: LW Hint", "Lost Woods: Br. Hint", "Lost Woods: Gr. Hint", "SFM: Sarias Hint", "SFM: Maze 1 Hint", "SFM: Maze 2 Hint", "River: Gr. Hint", "River: Plateau Hint", "River: By ZD Hint", "Domain: Hint", "Fountain: Jabu Hint", "Fountain: By Fairy Hint", "Goron City: Maze Hint", "Goron City: Medigoron Hint", "Graveyard: Hint", "Hyrule Castle: Storms Hint", "Field: Hammer Hint"];

var checkSummary = ["farores_wind", "slingshot1", "slingshot2", "slingshot3", "boomerang", "scale1", "scale2", "rutos_letter", "bottle1", "bottle2", "bottle3", "bottle4", "bomb_bag1", "bomb_bag2", "bomb_bag3", "hammer", "bow1", "bow2", "bow3", "hookshot1", "hookshot2", "strength1", "strength2", "strength3", "mirror_shield", "magic1", "magic2", "iron_boots", "kokiri_sword", "hover_boots", "wallet1", "wallet2", "wallet3", "goron_tunic", "zora_tunic", "dins_fire", "fire_arrows", "lens", "trade", "light_arrows", "ice_arrows", "forest_key_ring", "fire_key_ring", "water_key_ring", "spirit_key_ring", "shadow_key_ring", "well_key_ring", "gtg_key_ring", "ganons_key_ring", "gerudo_card", "magic_bean_pack", "text_zeldasSpot", "text_eponasSpot", "text_sariasSpot", "text_sunsSpot", "text_oot", "text_stormsSpot", "text_minuetSpot", "text_boleroSpot", "text_serenadeSpot", "text_requiemSpot", "text_nocturneSpot", "text_preludeSpot"];
var checkSummaryText = ["Farores", "Slingshot", "Slingshot", "Slingshot", "Boomerang", "Scale", "Scale", "Letter", "Bottle", "Bottle", "Bottle", "Bottle", "Bomb Bag", "Bomb Bag", "Bomb Bag", "Hammer", "Bow", "Bow", "Bow", "Hookshot", "Hookshot", "Strength", "Strength", "Strength", "Mirror Shield", "Magic", "Magic", "Iron Boots", "Kokiri Sword", "Hover Boots", "Wallet", "Wallet", "Wallet", "Goron Tunic", "Zora Tunic", "Dins Fire", "Fire Arrows", "Lens", "Letter", "Trade", "Light Arrows", "Ice Arrows", "Forest Key Ring", "Fire Key Ring", "Water Key Ring", "Spirit Key Ring", "Shadow Key Ring", "Well Key Ring", "GTG Key Ring", "Ganons Key Ring", "Gerudo Card", "Magic Bean Pack"];
var textSongSpots = ["text_zeldasSpot", "text_eponasSpot", "text_sariasSpot", "text_sunsSpot", "text_oot", "text_stormsSpot", "text_minuetSpot", "text_boleroSpot", "text_serenadeSpot", "text_requiemSpot", "text_nocturneSpot", "text_preludeSpot"];
var songSpots = ["zeldasSpot", "eponasSpot", "sariasSpot", "sunsSpot", "oot", "stormsSpot", "minuetSpot", "boleroSpot", "serenadeSpot", "requiemSpot", "nocturneSpot", "preludeSpot"];
var Items = ["farores_wind", "slingshot1", "slingshot2", "slingshot3", "boomerang", "scale1", "scale2", "rutos_letter", "bottle1", "bottle2", "bottle3", "bottle4", "bomb_bag1", "bomb_bag2", "bomb_bag3", "hammer", "bow1", "bow2", "bow3", "hookshot1", "hookshot2", "strength1", "strength2", "strength3", "mirror_shield", "magic1", "magic2", "iron_boots", "kokiri_sword", "hover_boots", "wallet1", "wallet2", "wallet3", "goron_tunic", "zora_tunic", "dins_fire", "fire_arrows", "lens", "prescription", "claim_check", "light_arrows", "ice_arrows", "forest_key_ring", "fire_key_ring", "water_key_ring", "spirit_key_ring", "shadow_key_ring", "well_key_ring", "gtg_key_ring", "ganons_key_ring", "gerudo_card", "magic_bean_pack", "lullaby", "eponas", "suns", "sarias", "storms", "minuet", "bolero", "requiem", "nocturne", "time", "prelude", "serenade"];
var ItemImages = [];
var ItemNames = ["Farores", "Slingshot", "Slingshot", "Slingshot", "Boomerang", "Scale", "Scale", "Letter", "Bottle", "Bottle", "Bottle", "Bottle", "Bomb Bag", "Bomb Bag", "Bomb Bag", "Hammer", "Bow", "Bow", "Bow", "Hookshot", "Hookshot", "Strength", "Strength", "Strength", "Mirror", "Magic", "Magic", "Iron Boots", "Kokiri Sword", "Hover Boots", "Wallet", "Wallet", "Wallet", "Goron Tunic", "Zora Tunic", "Din's Fire", "Fire Arrows", "Lens", "Prescription", "Claim Check", "Light Arrows", "Ice Arrows", "Forest Key Ring", "Fire Key Ring", "Water Key Ring", "Spirit Key Ring", "Shadow Key Ring", "Well Key Ring", "GTG Key Ring", "Ganons Key Ring", "Gerudo Card", "Magic Bean Pack", "Lullaby", "Eponas", "Suns", "Sarias", "Storms", "Minuet", "Bolero", "Requiem", "Nocturne", "Time", "Prelude", "Serenade"];
var hintNames = ["clone", "mrhand", "dhback", "zdgame", "zdtorches", "gv1", "gv2", "labtop", "hba1", "csp1", "csp2", "hyb", "tek", "crb", "grb", "cob", "fop", "chf", "adf", "hyliasun", "poe", "len", "20s", "red", "coi", "cos", "sca", "fla", "wbk", "riv", "fin", "toi", "dea", "was", "wls", "pot", "dan", "lef", "rig", "goh", "gvh", "cuc", "cra", "mea", "1me", "kin", "jab", "sho", "hba", "ffl", "sfl", "3me", "ice", "fou", "kid", "big", "mas", "30s", "40s", "50s", "fr2","toss", "oot", "cas", "ogc", "tar", "fr1", "div", "pil", "shap", "iro", "sh2", "tru", "scr"];
var hintNames2 = ["dlink", "hand", "bdh", "zddiv", "zdfir", "val1", "val2", "laptop", "100", "chspi1", "chspi2", "rut", "atz", "crater", "gybox", "colossusbean", "fop", "chfish", "adfish", "shootthesun", "poes", "lens", "20", "redead", "comp", "cos", "scarecrow", "hammer", "waterbk", "river", "gtgf", "toilet", "deadhand", "waste", "wsl", "pot", "daru", "left", "right", "gchammer", "gvhammer", "cucc", "bol", "min", "tot", "kz", "jabu", "shooting", "1500", "forestfloor", "shadowfloor", "noc", "ser", "fountain", "skullkid", "bgs", "skullmask", "30", "40", "50", "frog","ooti", "oot", "hfa", "gfa", "targ", "frogs1", "dive", "pill", "shapot", "iron", "st", "tru", "scr"];
var hintNames3 = ["me", "dead", "steven", "zddive", "zdfire", "valleyledge", "waterfall", "topoflab", "1000", "cs1", "cs2", "ruto", "atz", "craterbean", "box", "col", "fop", "cfish", "afish", "sunshoot", "poe", "lensgame", "20s", "red", "composer", "cos", "pierre", "flare", "wbk", "riverch", "gtgfin", "gtgtoilet", "dea", "wasteland", "req", "pot", "darunia", "mir", "sil", "gcleft", "gvh", "cucco", "bolero", "minuet", "pre", "kingzora", "boom", "archery", "150", "ffloor", "shfloor", "nocturne", "serenade", "icy", "kid", "trade", "mask", "30s", "40s", "50s", "frogs","gfcb", "oots", "ohc", "ogc", "target", "frog1", "labdive", "pillar", "shp", "iro", "sha2", "tru", "scr"];
var hintNames4 = ["yami", "deha", "steve", "domgame", "domtorches", "gvledge", "gvfall", "topolab", "hba1", "chspirit1", "chspirit2", "bottle", "atz", "crb", "gybean", "colo", "fop", "fish1", "fish2", "shootsun", "poe", "chestgame", "20s", "red", "coi", "cos", "sca", "flaredancer", "wbk", "riverchest", "gtgfinal", "toi", "dea", "wl", "desert", "pot", "dancin", "mirror", "silver", "maze3", "gvh", "cuccos", "cra", "mea", "prelude", "kin", "boomerang", "sho", "150", "ffl", "sfl", "3me", "ice", "fou", "kid", "bigo", "mas", "30s", "40s", "50s", "frogs2","thr", "ootsong", "casf", "gaf", "tar", "fr1", "lab", "pil", "shpot", "irons", "st2", "tru", "scr"];
var hintNames5 = ["darklink", "deadhand", "dhbehind", "domdiv", "domfir", "valledge", "watfall", "labroof", "hba1", "ch1", "ch2", "bot", "atz", "crb", "grb", "colossus", "fop", "fish", "lunker", "ss", "poe", "cmg", "20s", "red", "coi", "cos", "sca", "ham", "wbk", "riv", "fin", "toi", "dea", "was", "colosong", "pot", "dancing", "lefthand", "silvers", "maze3!", "gvh", "chickens", "cra", "mea", "1me", "kin", "rang", "shooting", "150", "ffl", "sfl", "3me", "ice", "fou", "kid", "big", "mas", "30s", "40s", "50s", "fr2","thrown", "oot", "hyf", "ogc", "tar", "fr1", "exp", "pil", "spot", "iro", "lik", "tru", "scr"];
var hintNames6 = ["dl", "dh", "inv", "domdive", "domfire", "valley1", "valley2", "laro","hba1", "chl", "chr", "bot", "atz", "crb", "grb", "colossus", "fop", "chf", "adf", "shoot", "poe", "cmg", "20s", "red", "coi", "cos", "sca", "fla", "wbk", "riv", "fin", "toi", "dea", "was", "wastesong", "pot", "dancing", "lefthand", "righthand", "gch", "gvh", "chicken", "cra", "mea", "1me", "kin", "boo", "shoo", "150", "ffl", "sfl", "3me", "ice", "fou", "kid", "big", "mas", "30s", "40s", "50s", "fr2","ootitem", "oot", "cas", "ogc", "tar", "fr1", "experiment", "pil", "shap", "iro", "sht", "tru", "scr"];
var hintIndexes = ["water_dLink", "well_deadHand", "well_invisible", "zora_diving", "zora_torches", "gerudovalley_box", "gerudovalley_fall", "hylia_lab_top", "gerudo_archery_1", "spirit_childLeft","spirit_childRight", "hylia_bottle", "hyrule_tektite_grotto", "crater_bean", "graveyard_box", "colossus_bean", "ice_bottom_of_fountain", "hylia_child_fishing", "hylia_adult_fishing", "hylia_sun_shoot", "poes", "market_lens_game", "tokens_20", "redead_grave", "composers_grave", "sunsSpot", "fire_scarecrow", "fire_top", "water_bossKey","water_river", "gtg_final", "gtg_toilet", "well_deadHand", "wasteland", "requiemSpot", "goron_pot", "goron_dance", "spirit_leftHand", "spirit_rightHand", "goron_maze_3", "gerudo_hammer", "anjus_chickens", "boleroSpot", "minuetSpot", "preludeSpot", "thaw_king", "jabu_boomerang", "archery_game", "gerudo_archery_2", "forest_floormaster", "shadow_floormaster", "nocturneSpot", "serenadeSpot", "ice_bottom_of_fountain", "skull_kid", "trade_quest", "theater_skull", "tokens_30", "tokens_40", "tokens_50", "frogs_2", "hyrule_ocarina", "oot", "dins_fairy", "g_fairy", "target", "frogs_1", "hylia_lab_dive", "water_pillar", "shadow_pot", "ice_irons", "ganons_shadowTrial2", "theater_truth", "scrub_crater_child"];

var Items2 = ["junk", "small_key", "boss_key", "bomb_bag", "bombchus", "boomerang", "bottle", "bottle", "bow", "dins_fire", "farores_wind", "fire_arrows", "goron_tunic", "hammer", "hookshot", "hover_boots", "iron_boots", "kokiri_sword", "lens", "rutos_letter", "light_arrows", "magic", "mirror_shield", "scale", "slingshot", "strength", "prescription", "claim_check", "wallet", "zora_tunic", "ice_arrows", "forest_key_ring", "fire_key_ring", "water_key_ring", "spirit_key_ring", "shadow_key_ring", "well_key_ring", "gtg_key_ring", "ganons_key_ring", "gerudo_card", "magic_bean_pack", "lullaby", "eponas", "sarias", "time", "suns", "storms", "minuet", "bolero", "serenade", "requiem", "nocturne", "prelude"];
var ItemNames2 = ["Junk", "Small Key", "Boss Key", "Bomb Bag", "Bombchus", "Boomerang", "Bottle", "Big Poe", "Bow", "Din's Fire", "Farores", "Fire Arrows", "Goron Tunic", "Hammer", "Hookshot", "Hover Boots", "Iron Boots", "Kokiri Sword", "Lens", "Ruto's Letter", "Light Arrows", "Magic", "Mirror Shield", "Scale", "Slingshot", "Strength", "Prescription", "Claim Check", "Wallet", "Zora Tunic", "Ice Arrows", "Forest Key Ring", "Fire Key Ring", "Water Key Ring", "Spirit Key Ring", "Shadow Key Ring", "Well Key Ring", "GTG Key Ring", "Ganons Key Ring", "Gerudo Card", "Magic Bean Pack", "Lullaby", "Epona's", "Saria's", "Time", "Sun's", "Storms", "Minuet", "Bolero", "Serenade", "Requiem", "Nocturne", "Prelude"];
var inputs = ["x", "sk", "bk", "bom", "chu", "boo", "bot", "big", "bow", "din", "far", "fir", "gor", "ham", "hoo", "hov", "iro", "kok", "len", "rut", "lig", "mag", "mir", "sca", "sli", "str", "scr", "cla", "wal", "zor", "ice", "fok", "fik", "wak", "spk", "shk", "wek", "gek", "gak", "ger", "bea", "lul", "epo", "sar", "sot", "sun", "sos", "min", "bol", "ser", "req", "noc", "pre"];
var songInputs = ["lul", "epo", "sar", "sot", "sun", "sos", "min", "bol", "ser", "req", "noc", "pre"];
var itemInputs = ["x", "sk", "bk", "bom", "chu", "boo", "bot", "big", "bow", "din", "far", "fir", "gor", "ham", "hoo", "hov", "iro", "kok", "len", "rut", "lig", "mag", "mir", "sca", "sli", "str", "scr", "cla", "wal", "zor", "ice", "fok", "fik", "wak", "spk", "shk", "wek", "gek", "gak", "ger", "bea"];
var inputNames = ["Junk", "Small Key", "Boss Key", "Bomb Bag", "Bombchus", "Boomerang", "Bottle", "Big Poe", "Bow", "Din's Fire", "Farore's Wind", "Fire Arrows", "Goron Tunic", "Hammer", "Progressive Hookshot", "Hover Boots", "Iron Boots", "Kokiri Sword", "Lens", "Ruto's Letter", "Light Arrows", "Magic", "Mirror Shield", "Progressive Scale", "Slingshot", "Progressive Strength", "Prescription", "Claim Check", "Progressive Wallet", "Zora Tunic", "Ice Arrows", "Forest Key Ring", "Fire Key Ring", "Water Key Ring", "Spirit Key Ring", "Shadow Key Ring", "Well Key Ring", "GTG Key Ring", "Ganons Key Ring", "Gerudo Card", "Magic Bean Pack", "Lullaby", "Epona's Song", "Saria's Song", "Song of Time", "Sun's Song", "Song of Storms", "Minuet", "Bolero", "Serenade", "Requiem", "Nocturne", "Prelude"];
var DuplicateItems = ["slingshot", "scale", "bottle", "bomb_bag", "bow", "hookshot", "strength", "magic", "wallet"];
var spawnInputs = ["dmcl", "dmcf", "dmcu", "dmtf","dmtfool", "gf", "waste", "col", "zd", "zr", "zf", "zff", "zffool", "hf", "sfm", "noct", "fish", "ogc","ogcool", "gcshop", "zdshop", "kakr" ];
var spawnNames = ["DMC by Goron City", "DMC fountain", "DMC by trail", "trail fairy", "trail fairy(ool)", "fortress", "waste", "colossus", "domain", "river", "fountain", "fountain fairy", "fountain fairy(ool)", "dins fairy", "sfm", "nocturne", "fishing", "ogc fairy","ogc fairy(ool)", "goron shop", "domain shop", "kak rooftop"];

var parent = document.getElementById("inputConfig");
for (var i = 0; i < inputs.length; i++) {
	if (localStorage.getItem(inputNames[i])) {
        inputs[i] = localStorage.getItem(inputNames[i]);
        if (i >= inputs.length) {
        songInputs[i-itemInputs.length] = localStorage.getItem(inputNames[i])
        }
        else {
            itemInputs[i] = localStorage.getItem(inputNames[i])
        }
    }
    inputs[inputNames.indexOf("Prescription")] = "scr"
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

controllerConfigNames =["","","","","","","",""];
controllerConfigDescriptions =["controllerJunk","controllerKey","controllerBosskey", "controllerItem","controllerSkip","controllerAcceptInputs","controllerToD","controllerSpeedUp"];
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
var tabPicSources = ["./tab_pics/circus_tent.png", "./tab_pics/camel.png", "./tab_pics/tiger.png", "./tab_pics/clown.png", "./tab_pics/elephant.png", "./tab_pics/leopard.png", "./tab_pics/rhino.png" , "./tab_pics/juggler.png", "./tab_pics/zebra.png", "./tab_pics/bear.png", "./tab_pics/crocodile.png", "./tab_pics/monkey.png", "./tab_pics/hippo.png", "./tab_pics/seal.png", "./tab_pics/llama.png", "./tab_pics/dog.png", "./tab_pics/horse.png", "./tab_pics/cat.png", "./tab_pics/kurama.png", "./tab_pics/merry.png", "./tab_pics/articuno.png"]
var tabPicSourcesRB = ["./tab_pics/circus_tentRB.png", "./tab_pics/camelRB.png", "./tab_pics/tigerRB.png", "./tab_pics/clownRB.png", "./tab_pics/elephantRB.png", "./tab_pics/leopardRB.png", "./tab_pics/rhinoRB.png" , "./tab_pics/jugglerRB.png", "./tab_pics/zebraRB.png", "./tab_pics/bearRB.png", "./tab_pics/crocodileRB.png", "./tab_pics/monkeyRB.png", "./tab_pics/hippoRB.png", "./tab_pics/sealRB.png", "./tab_pics/llamaRB.png", "./tab_pics/dogRB.png", "./tab_pics/horseRB.png", "./tab_pics/catRB.png", "./tab_pics/kuramaRB.png", "./tab_pics/merryRB.png", "./tab_pics/articunoRB.png"]
var numberOfAnimals = 18;
var animalXP = new Array(numberOfAnimals).fill(0);
var savedAnimalXP = new Array(numberOfAnimals).fill(0);
if (localStorage.getItem("animalXP")) {
    savedAnimalXP = JSON.parse(localStorage.getItem("animalXP"));
    for (var i = 0; i<savedAnimalXP.length; i++) {
        if (savedAnimalXP[i]>1000) {savedAnimalXP[i] = 100;}
        savedAnimalXP[i] = Math.floor(savedAnimalXP[i]);
        animalXP[i] = savedAnimalXP[i];
    }
}
var yamiMults = new Array(numberOfAnimals).fill(1);
if (localStorage.getItem("yamiMults")) {
    savedYamiMults = JSON.parse(localStorage.getItem("yamiMults"));
    for (var i = 0; i<savedYamiMults.length; i++) {
        yamiMults[i] = savedYamiMults[i];
    }
}
for (var i = 0; i < animalXP.length; i++) {
    animalXP[i] *= yamiMults[i];
}

var angelMults = new Array(numberOfAnimals).fill(1);
if (localStorage.getItem("angelMults")) {
    savedAngelMults = JSON.parse(localStorage.getItem("angelMults"));
    for (var i = 0; i<savedAngelMults.length; i++) {
        angelMults[i] = savedAngelMults[i];
    }
}
for (var i = 0; i < animalXP.length; i++) {
    animalXP[i] *= angelMults[i];
}

var rainbowMults = new Array(numberOfAnimals).fill(1);
if (localStorage.getItem("rainbowMults")) {
    savedrainbowMults = JSON.parse(localStorage.getItem("rainbowMults"));
    for (var i = 0; i<savedrainbowMults.length; i++) {
        rainbowMults[i] = savedrainbowMults[i];
    }
}
for (var i = 0; i < animalXP.length; i++) {
    animalXP[i] *= rainbowMults[i];
}

var myAnimalXP = {"circus_tent":animalXP[0], "camel":animalXP[1], "tiger":animalXP[2], "clown":animalXP[3], "elephant":animalXP[4], "leopard":animalXP[5], "rhino":animalXP[6], "juggler":animalXP[7], "zebra":animalXP[8], "bear":animalXP[9], "crocodile":animalXP[10], "monkey":animalXP[11], "hippo":animalXP[12], "seal":animalXP[13], "llama":animalXP[14], "dog":animalXP[15], "horse":animalXP[16], "cat":animalXP[17], "kurama":animalXP[18], "merry":animalXP[19], "articuno":animalXP[20]} 
localStorage.setItem("myAnimalXP", JSON.stringify(myAnimalXP));

var animalRNG = Math.floor(Math.random() * tabPicSources.length)
Player.logically_accessible = 0;
var d = new Date();
var pauseTotal = 0;
var pauseInitial = 0;
var pauseFlag = true;
var pauseTotalToD = -130*1000;
var pauseInitialToD = 0;
var pauseFlagToD = true;
var timeSet = -1;
var lastToDpass = 0;
var savedToD = 130;
var initialTime = d.getTime();
var goodCheckPercent = 0;
var timeStart = d.getTime();
var timeCurrent;	
var timeFuture;
var timeFinal;
var timeLost =0;
var tMinutes = 0;
var tSeconds = 0;
var linso = true;
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
	
Player.unknown = false;
Player.small_key = true;
Player.boss_key = true;
	
Player.emerald = false;
Player.ruby = false;
Player.sapphire = false;
	
var hasChangedMedal = false;
	
Player.tokens = 0;
token_click = 4;
	
Player.kokiri_sword = false;
Player.farores_wind = false;
Player.slingshot1= false;
Player.slingshot1= false;
Player.slingshot2= false;
Player.slingshot3= false;
Player.boomerang = false;
Player.rutos_letter = false;
Player.bottle1 = false;
Player.bottle2 = false;
Player.bottle3 = false;
Player.bottle4 = false;
Player.big_poe = false;
Player.scale1 = false;
Player.scale2 = false;
Player.bomb_bag1 = false;
Player.bomb_bag2 = false;
Player.bomb_bag3 = false;
Player.hammer = false;
Player.bow1 = false;
Player.bow2 = false;
Player.bow3 = false;
Player.hookshot = false;
Player.longshot = false;
Player.iron_boots = false;
Player.hover_boots = false;
Player.magic = false;
Player.magic1 = false;
Player.magic2 = false;
Player.dins_fire = false;
Player.fire_arrows = false;
Player.goron_bracelet = false;
Player.silver_gauntlets = false;
Player.golden_gauntlets = false;
Player.mirror_shield = false;
Player.wallet1 = false;
Player.wallet2 = false;
Player.wallet3 = false;
Player.goron_tunic = false;
Player.zora_tunic = false;
Player.lens = false;
Player.stone_of_agony = false;
Player.trade = false;
Player.prescription = false;
Player.claim_check = false;
Player.lullaby = false;
Player.eponas = false;
Player.sarias = false;
Player.suns = false;
Player.time = false;
Player.storms = false;
Player.minuet = false;
Player.bolero = false;
Player.serenade = false;
Player.requiem = false;
Player.nocturne = false;
Player.prelude = false;
	
Player.min_forest_keys=0;
Player.current_forest_keys=0;
Player.forest_keys = 0;
Player.min_fire_keys=0;
Player.current_fire_keys=0;
Player.fire_keys = 0;
Player.min_water_keys=0;
Player.current_water_keys=0;
Player.water_keys = 0;
Player.min_spirit_keys=0;
Player.current_spirit_keys=0;
Player.spirit_keys = 0;
Player.min_shadow_keys=0;
Player.current_shadow_keys=0;
Player.shadow_keys = 0;
Player.min_ganons_keys=0;
Player.current_ganons_keys=0;
Player.ganons_keys = 0;
Player.min_gtg_keys=0;
Player.current_gtg_keys=0;
Player.gtg_keys = 0;
Player.min_well_keys=0;
Player.current_well_keys=0;
Player.well_keys = 0;		
Player.deku_checks_remaining = 7;
Player.dodongos_checks_remaining = 7;
Player.jabu_checks_remaining = 4;
Player.forest_checks_remaining = 8;
Player.fire_checks_remaining = 6;
Player.water_checks_remaining = 4;
Player.shadow_checks_remaining = 12;
Player.spirit_checks_remaining = 14;
Player.gtg_checks_remaining = 13;
Player.well_checks_remaining = 11;
Player.ganons_checks_remaining = 14;
Player.forest_boss_key = false;
Player.fire_boss_key = false;
Player.water_boss_key = false;
Player.spirit_boss_key = false;
Player.shadow_boss_key = false;
Player.forest_key_ring = false;
Player.fire_key_ring = false;
Player.water_key_ring = false;
Player.spirit_key_ring = false;
Player.shadow_key_ring = false;
Player.well_key_ring = false;
Player.gtg_key_ring = false;
Player.ganons_key_ring = false;
Player.gerudo_card = false;
Player.magic_bean_pack = false;

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
CouldHave.forest_key_ring = false;
CouldHave.fire_key_ring = false;
CouldHave.water_key_ring = false;
CouldHave.spirit_key_ring = false;
CouldHave.shadow_key_ring = false;
CouldHave.well_key_ring = false;
CouldHave.gtg_key_ring = false;
CouldHave.ganons_key_ring = false;
CouldHave.gerudo_card = false;
CouldHave.magic_bean_pack = false;
	
Player.checks_remaining=196;
Player.logically_accessible=35;
Player.forest_logically_accessible=0;
Player.fire_logically_accessible=0;
Player.water_logically_accessible=0;
Player.spirit_logically_accessible=0;
Player.shadow_logically_accessible=0;
Player.gtg_logically_accessible=0;
Player.well_logically_accessible=0;
Player.ganons_logically_accessible=0;
	
Player.kokiri_sword_img= "./normal/items/kokiri_sword.png";
Player.bomb_img= "./images/explosive505050.png";
Player.rutos_letter_img= "./images/letter505050.png";
Player.boomerang_img= "./images/boomerang505050.png";
Player.hookshot_img= "./images/hookshot505050.png";
Player.bow_img= "./images/bow505050.png";
Player.goron_bracelet_img= "./images/strength1505050.png";
Player.hammer_img= "./images/ham505050.png";
Player.iron_boots_img= "./images/ironboots505050.png";
Player.silver_scale_img=  "./images/silverscale505050.png"
Player.golden_scale_img= "./images/goldenscale505050.png";
Player.longshot_img= "./images/longshot505050.png";
Player.silver_gauntlets_img= "./images/strength2505050.png";
Player.mirror_shield_img= "./images/mirrorshield505050.png";
Player.dins_fire_img= "./images/dinsfirenew505050.png";
Player.magic_img= "./images/magic505050.png";
Player.hover_boots_img= "./images/hovers505050.png";
Player.theme = "dark";
Player.themeChange = false;
Player.changetheme = 1;
	
Player.has_chus = false;
	
var tempTime = 0;
var tempHours = 0;
var tempMinutes = 0;
var tempSeconds = 0;
	
var Locations = [
	"mido_1", "mido_2", "mido_3", "mido_4", "kokiri_sword", "shop_kokiri_TL", "shop_kokiri_TR", "shop_kokiri_BR", "shop_kokiri_BL", "gs_kokiri_child", "gs_kokiri_soil", "gs_kokiri_adult", "kokiri_storms", "cow_kokiri", "h_deku_left", "h_deku_right", "h_near_lw", "h_kokiri_storms",
	"talons_chickens", "gs_lon_lon_tree", "back_of_ranch", "scrub_ranch_1", "scrub_ranch_2", "scrub_ranch_3", "gs_lon_lon_window", "gs_lon_lon_shed", "gs_lon_lon_back_wall","cow_ranch1", "cow_ranch2", "cow_ranch3", "cow_ranch4", 
	"hyrule_marketGrotto", "hyrule_tektite_grotto", "hyrule_hp_scrub", "hyrule_openGrotto", "hyrule_remoteGrotto", "gs_outside_kakariko", "gs_near_gerudo", "hyrule_ocarina", "cow_field", "h_hyrule_remoteGrotto", "h_hyrule_openGrotto", "h_hyrule_marketGrotto", "h_hyrule_web",
	"gerudovalley_box", "gerudovalley_fall", "gs_valley_small_bridge", "gs_valley_bean", "gs_valley_pillar", "gs_valley_tent", "gerudo_hammer", "scrub_gv_1", "scrub_gv_2", "cow_valley", "h_valley",
	"scrub_lake_1", "scrub_lake_2", "scrub_lake_3", "hylia_child_fishing", "hylia_bottle", "gs_hylia_bean", "gs_hylia_lab_wall", "gs_hylia_island", "hylia_adult_fishing", "hylia_lab_top", "gs_hylia_lab_crate", "hylia_lab_dive", "gs_hylia_tree", "hylia_sun_shoot", "h_lab", "h_back_right_lake", "h_back_left_lake",
	"gs_market", "shop_market_bazaar_TL", "shop_market_bazaar_TR", "shop_market_bazaar_BR", "shop_market_bazaar_BL", "shop_market_potion_TL", "shop_market_potion_TR", "shop_market_potion_BR", "shop_market_potion_BL", "shop_market_chu_TL", "shop_market_chu_TR", "shop_market_chu_BR", "shop_market_chu_BL", "market_slingshot_game", "richard", "market_bowling_1", "market_bowling_2", "market_lens_game", "poes", "h_tot_1", "h_tot_2", "h_tot_3", "h_tot_4",
	"gs_hyrule_castle_tree", "dins_fairy", "gs_hyrule_castle_grotto", "h_castle_1", "h_castle_2", "h_castle_sos",
	"gs_ogc", "g_fairy",
	"lacs",
	"gs_fountain_above_log", "gs_fountain_tree", "fountain_fairy", "ice_glacier_hp", "ice_bottom_of_fountain", "gs_fountain_hidden_cave", "h_fountain_fairy", "h_fountain",
	"gs_ice_spinning_scythe", "ice_map", "gs_ice_hp_room", "ice_hp", "ice_compass", "gs_ice_block_room", "ice_irons",
	"deku_lobby", "deku_slingshot", "deku_slingshot_room_side", "deku_compass", "deku_compass_room_side", "gs_deku_compass", "gs_deku_basement_gate", "gs_deku_basement_vines", "deku_basement", "gs_deku_basement_back", "deku_queen_gohma",
	"lost_woods_fairy_ocarina", "target", "ocarina_game", "lw_generic", "scrub_lw_1", "scrub_lw_2", "gs_lost_woods_bean_2", "lost_woods_scrub_grotto", "scrub_lw_3", "gs_lost_woods_bean_1", "skull_kid", "bridge_scrub", "gs_lost_woods_above_stage", "theater_skull", "theater_truth", "h_lw_bridge", "h_lw_generic",
	"wolfos_grotto", "gs_sacred_forest", "scrub_sfm_1", "scrub_sfm_2", "h_saria", "h_sfm_1", "h_sfm_2",
	"shop_goron_TL", "shop_goron_TR", "shop_goron_BR", "shop_goron_BL", "rolling_goron", "goron_dance", "goron_pot", "goron_maze_1", "goron_maze_2", "gs_goron_maze", "goron_maze_3", "gs_goron_center", "goron_link", "scrub_goron_1", "scrub_goron_2", "scrub_goron_3", "goron_medigoron", "h_goron_maze", "h_medigoron",
	"gs_dodongos_east_side", "gs_dodongos_scarecrow", "scrub_dodongos_1", "scrub_dodongos_2", "dodongos_map", "dodongos_compass", "gs_dodongos_above_stairs", "gs_dodongos_stair_vines", "dodongos_bomb_flower_platform", "scrub_dodongos_3", "scrub_dodongos_4", "dodongos_bomb_bag", "dodongos_end_of_bridge", "gs_dodongos_before_king", "dodongos_above_king", "dodongos_king_dodongo", "h_dodongos",
	"trail_dodongos_top", "gs_trail_bombable_wall", "trail_bombable", "trail_storms", "trail_fairy", "trade_quest", "gs_trail_hail_path", "gs_trail_above_dodongos", "gs_trail_soil","cow_trail", "h_trail_storms", "h_biggoron",
	"crater_bean", "scrub_crater_1", "scrub_crater_2", "scrub_crater_3", "crater_hammer_fairy", "crater_nook_hp", "crater_grotto", "gs_crater_soil", "gs_crater_crate", "scrub_crater_child", "h_crater_grotto", "h_crater_wall",
	"shop_kakariko_bazaar_TL", "shop_kakariko_bazaar_TR", "shop_kakariko_bazaar_BR", "shop_kakariko_bazaar_BL", "shop_kakariko_potion_TL", "shop_kakariko_potion_TR", "shop_kakariko_potion_BR", "shop_kakariko_potion_BL", "man_on_roof", "kakariko_grotto", "kakariko_hag", "windmill", "anju", "kakariko_cow_house", "archery_game", "redead_grotto", "anjus_chickens", "gs_kakariko_tree", "gs_kakariko_guard_house", "gs_kakariko_tower", "gs_kakariko_construction", "gs_kakariko_skulltula_house", "gs_kakariko_impas", "cow_kakariko", "tokens_10", "tokens_20", "tokens_30", "tokens_40", "tokens_50", "h_kakariko_grotto",
	"shield_grave", "graveyard_box", "race_1", "race_2", "gravedigging_tour", "gs_graveyard_soil", "gs_graveyard_wall", "redead_grave", "composers_grave","h_nocturne",
	"gs_river_tree", "scrub_river_1", "scrub_river_2", "river_bean_salesman", "river_pillar", "frogs_1", "river_grotto", "gs_river_near_grotto", "gs_river_above_bridge", "river_ledge", "gs_river_ladder", "frogs_2", "h_river_grotto", "h_river_pillar", "h_river_domain",
	"shop_domain_TL", "shop_domain_TR", "shop_domain_BR", "shop_domain_BL", "zora_torches", "zora_diving", "thaw_king", "gs_domain", "h_domain",
	"colossus_bean", "colossus_fairy", "gs_colossus_soil", "gs_colossus_hill", "gs_colossus_tree", "scrub_colossus_1", "scrub_colossus_2", "h_colossus",
	"gs_wasteland", "wasteland_carpet", "wasteland",
	"fortress_card", "gs_fortress_top", "gerudo_roof", "gerudo_archery_1", "gerudo_archery_2", "gs_fortress_archery", 
	"gs_jabu_vines", "scrub_jabu", "jabu_map", "jabu_compass", "jabu_boomerang", "gs_jabu_near_octo_1", "gs_jabu_near_octo_2", "gs_jabu_near_boss", "jabu_barinade",
	"forest_first", "gs_forest_first", "gs_forest_lobby", "forest_stalfos", "forest_midCourtyard", "gs_forest_outdoor_east", "forest_highCourtyard", "forest_lowCourtyard", "forest_blockRoom", "forest_bossKey", "forest_floormaster", "gs_forest_outdoor_west", "forest_red", "forest_bow", "forest_blue", "forest_fallingCeiling", "forest_nearBoss", "gs_forest_basement", "forest_phantomGanon",
	"fire_nearBoss", "gs_fire_basement", "fire_hammer1", "fire_hammer2", "fire_lavaOpen", "gs_fire_time", "fire_lavaBomb", "fire_volvagia", "fire_lowerMaze", "gs_fire_bomb_wall", "fire_sideRoom", "fire_map", "fire_upperMaze", "fire_shortcut", "gs_fire_scarecrow_1", "gs_fire_scarecrow_2", "fire_scarecrow", "fire_compass", "fire_sotGoron", "fire_top",
	"spirit_childLeft", "spirit_childRight", "gs_spirit_metal_fence", "spirit_childClimb1", "gs_spirit_child_climb", "spirit_childClimb2", "spirit_map", "spirit_sunRoom", "gs_spirit_before_child_knuckle", "spirit_rightHand", "spirit_adultLeft", "gs_spirit_boulder_room", "spirit_adultRight", "spirit_rotatingMirror1", "spirit_rotatingMirror2", "spirit_lullabyHand", "spirit_lullabyHigh", "gs_spirit_lobby", "spirit_nearFourArmos", "spirit_invisible1", "spirit_invisible2", "spirit_leftHand", "spirit_bossKey", "spirit_tippyTop", "spirit_twinrova",
	"shadow_map", "shadow_hovers", "shadow_compass", "shadow_earlySilvers", "gs_shadow_like_like", "shadow_spinning1", "shadow_spinning2", "shadow_spikesLower", "gs_shadow_crusher", "shadow_spikesUpper", "shadow_spikesSwitch", "shadow_redeadSilvers", "gs_shadow_giant_pot", "shadow_pot", "shadow_wind", "shadow_bombable", "shadow_gibdos", "gs_shadow_near_boat", "shadow_dins1", "shadow_dins2", "gs_shadow_three_pots", "shadow_floormaster", "shadow_bongo",
	"water_compass", "water_map", "water_cracked", "water_torches", "gs_water_near_boss_key", "water_bossKey", "gs_water_south_basement", "water_block", "gs_water_central", "water_pillar", "gs_water_platform_room", "water_dLink", "gs_water_river", "water_river", "water_dragon", "water_morpha",
	"scrub_ganons_1", "scrub_ganons_2", "scrub_ganons_3", "scrub_ganons_4", "ganons_lightTrial1", "ganons_lightTrial2", "ganons_lightTrial3", "ganons_lightTrial4", "ganons_lightTrial5", "ganons_lightTrial6", "ganons_lightTrial7", "ganons_lightTrialLullaby", "ganons_spiritTrial1", "ganons_spiritTrial2", "ganons_forestTrial", "ganons_waterTrial1", "ganons_waterTrial2", "ganons_shadowTrial1", "ganons_shadowTrial2", "ganons_bossKey",
	"gtg_lobbyLeft", "gtg_lobbyRight", "gtg_stalfos", "gtg_wolfos", "gtg_silvers1", "gtg_silvers2", "gtg_silvers3", "gtg_silvers4", "gtg_eyes", "gtg_aboveEyes", "gtg_keese", "gtg_flamesChest", "gtg_freestanding", "gtg_right2", "gtg_right3", "gtg_beamos", "gtg_left1",  "gtg_left2", "gtg_left3", "gtg_left4", "gtg_final", "gtg_toilet",
	"well_fakeLeft", "well_frontBombable", "well_centerBig", "well_fakeRight", "well_centerSmall", "well_backBombable", "well_waterLeft", "well_coffin", "well_waterFront", "well_invisible", "well_deadHand", "gs_well_west_inner", "gs_well_east_inner", "well_locked1", "well_locked2", "gs_well_like_like", "well_basement",
	"zeldasSpot", "eponasSpot", "sariasSpot", "stormsSpot", "sunsSpot", "boleroSpot", "minuetSpot", "requiemSpot", "serenadeSpot", "preludeSpot", "nocturneSpot", "oot"
];
soliLinsoSongOrderConvert = [1,2,3,6,4,8,7,11,9,12,10,5];
	
var Names = [
	/*Kokiri*/"Midos", "Midos", "Midos", "Midos", "Sword", "Shop 1", "Shop 2", "Shop 3", "Shop 4", "*Exit", "*Soil", "*Adult", "Storms", "Cow", "Deku L", "Deku R", "Near LW", "SoS",
	/*Ranch*/"Talon", "*Tree", "Silo", "Scrub", "Scrub", "Scrub", "*Window", "*Shed", "*Back", "Cow", "Cow", "Cow", "Cow",
	/*Field*/"Market", "Tektite", "Scrub", "Open", "Remote", "*NearKak", "*Near GV", "OoT Item", "Cow", "Remote", "Open", "Destiny", "Webs",
	/*Valley*/"Crate", "Waterfall", "*Bridge", "*Soil", "*Pillar", "*Tent", "Hammer", "Scrub", "Scrub", "Cow", "Valley",
	/*Lake*/"Scrub", "Scrub", "Scrub", "Ch. Fish", "Bottle", "*Soil", "*Lab Wall", "*Island", "Ad. Fish", "Lab Top", "*Crate", "Lab Dive", "*Tree", "ShootSun", "Lab", "Lake R", "Lake L",
	/*Market*/"*Guard", "Bazaar 1", "Bazaar 2", "Bazaar 3", "Bazaar 4", "Potion 1", "Potion 2", "Potion 3", "Potion 4", "Chu 1", "Chu 2", "Chu 3", "Chu 4", "Sling", "Richard", "Bowling", "Bowling", "TCG", "Big Poes", "ToT 1", "ToT 2", "ToT 3", "ToT 4",
	/*Hyrule Castle*/"*Tree", "Fairy", "*Storms", "Castle 1", "Castle 2", "Castle SoS",
	/*Ganon's Castle*/"*Skull", "Fairy",
	/*Temple of Time*/"LACS",
	/*Fountain*/"*Log", "*Tree", "Fairy", "Glacier", "IcyWaters", "*Cave", "Fairy", "Near Jabu",
	/*Ice*/"*Spinning", "Map", "*HP", "HP", "Compass", "*Blocks", "Irons",
	/*Deku*/"Lobby", "Slingshot", "Slingshot", "Compass", "Compass", "*Compass", "*Gate", "*Vines", "Basement", "*Back", "Queen",
	/*Lost Woods*/"F Ocarina", "Target", "Memory", "Generic", "Stage Scr", "Stage Scr", "*Soil", "Scrub Gr.", "Scrub Gr+", "*Soil", "Saria Kid", "Br Scrub", "*Adult", "SklMask", "Truth", "Bridge", "Generic",
	/*Sacred Forest Meadow*/"Wolfos", "*Skull", "Scrub", "Scrub", "Saria", "Maze 1", "Maze 2",
	/*Goron City*/"Shop 1", "Shop 2", "Shop 3", "Shop 4", "Rolling", "Darunia", "Pot", "Maze", "Maze", "*Maze", "Left Maze", "*Center", "LinkGor", "Scrub", "Scrub", "Scrub", "Medigor", "Maze", "Medigor",
	/*Dodongos*/"*Keese", "*Pierre", "Scrub R", "Scrub L", "Lobby", "Stairs", "*Nook", "*Vines", "Bomb bag", "Scrub 2F", "Scrub 2F", "Bomb bag", "Bridge", "*Last", "Abv KD", "KD", "Dodongos",
	/*Trail*/"Above DC", "*Wall", "BombWall", "Storms", "Fairy", "Biggoron", "*Hail", "*Flower", "*Soil", "Cow", "SoS", "Biggoron",
	/*Crater*/"Volcano", "Scrub", "Scrub", "Scrub", "Fairy", "Wall", "Grotto", "*Soil", "*Crate", "Ch. Scrub", "Grotto", "Wall",
	/*Kakariko*/"Bazaar 1", "Bazaar 2", "Bazaar 3", "Bazaar 4", "Potion 1", "Potion 2", "Potion 3", "Potion 4", "Roof", "Rear Gr", "Hag", "Windmill", "Anju", "Cow", "Archery", "Redead", "Cuccos", "*Tree", "*Guard", "*Tower", "*Archery", "*GS house", "*Impas", "Cow Milk", "Ten", "Twenty", "Thirty", "Fourty", "Fifty", "Grotto", //reasoning for skull check naming being a little weird is just because unleash animals needs enough characters to work properly(maybe not worth supporting)
	/*Graveyard*/"Shield", "Box", "Race", "Race", "DampeDig", "*Soil", "*Wall", "Sun Grave", "Composer", "Nocturne",
	/*River*/"*Tree", "Scrub", "Scrub", "Bean", "Lower", "Frogs 1", "Grotto", "*Near Gr", "*Bridge", "Upper", "*Ladder", "Frogs 2", "Grotto", "Pillar", "Water",
	/*Domain*/"Shop 1", "Shop 2", "Shop 3", "Shop 4", "Torches", "Diving", "KZ", "*Skull", "Domain",
	/*Colossus*/"Arch", "Fairy", "*Soil", "*Hill", "*Tree", "Scrub", "Scrub", "Colossus",
	/*Wasteland*/"*Skull", "Carpet", "Torches",
	/*Fortress*/"Card", "*Fort", "Roof", "1000", "1500", "*Target", 
	/*Jabu Jabu*/"*Vines", "Scrub", "Map", "Compass", "Rang", "*B4 Octo", "*B4 Octo", "*B4 Boss", "Barinade",
	/*Forest Temple*/"First", "*First", "*Lobby", "Stalfos", "C Plat", "*C Plat", "C Bubble", "C Well", "Push Eye", "BK", "Flrmaster", "*Arch", "Red", "Bow", "Blue", "Falling", "Basement", "*Base", "Phantom",
	/*Fire Temple*/"Near Boss", "*Hammer", "Hammer", "Hammer", "Lav Left", "*SoT", "Lav Right", "Volvagia", "Low Cell", "*Maze", "Low Cell", "Map", "High Cell", "Shortcut", "*Pierre", "*Pierre", "Pierre", "Compass", "HighGoron", "Hammer",
	/*Spirit Temple*/"Ch. Left", "Ch. Right", "*Fence", "Ch. Climb", "*Ch Climb", "Ch. Climb", "Map", "Sun Room", "*B4 Knuck", "Silvers", "Ad. Left", "*SoT", "Ad. Right", "Ad. Climb", "Ad. Climb", "LullaHand", "LullaHigh", "*Main", "4 Armos", "Invisible", "Invisible", "Mirror", "BK", "Tippy Top", "Twinrova",
	/*Shadow Temple*/"Map", "Hovers", "Gibdos", "Spin Blade", "*Spinning", "Inv Blade", "Inv Blade", "Crusher L", "*Crusher", "Crusher H", "Crusher H", "Redeads", "*Pot", "Pot", "Wind", "Bombable", "Gibdos", "*Boat", "Dins", "Dins", "*3 Pots", "Floor", "Bongo",
	/*Water Temple*/"Compass", "Map", "Cracked", "Torches", "*Near BK", "BK", "*S Base", "Block", "*Pillar", "Central P", "*Plats", "D Link", "*River", "River", "Dragon", "Morpha",
	/*Ganon's Castle*/"Scrub", "Scrub", "Scrub", "Scrub", "Light 1", "Light 2", "Light 3", "Light 4", "Light 5", "Light 6", "Light Clr", "Light Lul", "Spirit 1", "Spirit 2", "Forest", "Water 1", "Water 2", "Shadow 1", "Shadow 2", "BK",
	/*Gerudo Training Grounds*/"Lobby", "Lobby", "Stalfos", "Wolfos", "Silvers", "Silvers", "Silvers", "Silvers", "Eyes", "Abv Eyes", "Enemies", "Fire", "R1", "R2", "R3", "Beamos", "L1",  "L2", "L3", "L4", "Final", "Toilet",
	/*Bottom of the Well*/"Fake L", "Bomb", "Center", "Fake R", "Center", "Bomb back", "Water L", "Coffin", "Water F", "Dead Hand", "Dead Hand", "*Door L", "*Door R", "Locked 1", "Locked 2", "*Locked", "Basement",
	/*Songs*/"Zelda", "Malon", "Saria", "Windmill", "Grave", "Crater", "Ad. SFM", "Colossus", "Ice", "1 Med", "3 Med", "OoT Song"
];
var alwaysHints = ["tokens_30", "tokens_40", "tokens_50", "oot", "trade_quest", "frogs_2", "theater_skull"];

var AreaIndexes = [0,18,31,44,55,72,95,101,103,104,112,119,130,147,154,173,190,202,214,244,254,269,278,286,289,290,295,304,323,343,368,391,407,427,449,466];
var SongIndexes = [1000,467,477,1000,1000,1000,466,1000,475,1000,474,1000,1000,468,1000,1000,10000,471,469,470,1000,1000,473,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000];
var SongIndexes2 = [1000,467,477,1000,1000,1000,466,1000,475,1000,474,1000,1000,472,1000,1000,1000,471,476,470,1000,1000,473,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000];
	
var lastItem = 465;
var lastSong = 477;
	
Location.med1 = "unknown";
Location.med2 = "unknown";
Location.med3 = "unknown";
Location.med4 = "unknown"; 
Location.med5 = "unknown";
Location.med6 = "unknown";
	
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
	"Kokiri",
	"Ranch",
	"Field",
	"Valley",
	"Hylia",
	"Market",
	"Hyr Cas",
	"OGC",
	"ToT",
	"Fountain",
	"Ice",
	"Deku",
	"Lost Woods",
	"SFM",
	"Goron City",
	"Dodongos",
	"Trail",
	"Crater",
	"Kakariko",
	"Graveyard",
	"River",
	"Domain",
	"Colossus",
	"Wasteland",
	"Thieves",
	"Fortress",
	"Jabu",
	"Forest",
	"Fire",
	"Spirit",
	"Shadow",
	"Water",
	"Ganon's",
	"GTG",
	"Well" 
];

var AreaNamesLong = [
	"",
	"Kokiri Forest",
	"Lon Lon Ranch",
	"Hyrule Field",
	"Gerudo Valley",
	"Lake Hylia",
	"the Market",
	"Hyrule Castle",
	"outside Ganon's Castle",
	"the Temple of Time",
	"Zora's Fountain",
	"the Ice Cavern",
	"the Deku Tree",
	"the Lost Woods",
	"the Sacred Forest Meadow",
	"Goron City",
	"Dodongo's Cavern",
	"Death Mountain Trail",
	"Death Mountain Crater",
	"Kakariko Village",
	"the Graveyard",
	"Zora's River",
	"Zora's Domain",
	"the Desert Colossus",
	"the Haunted Wasteland",
	"Thieves' Hideout",
	"Gerudo's Fortress",
	"Jabu Jabu's Belly",
	"the Forest Temple",
	"the Fire Temple",
	"the Spirit Temple",
	"the Shadow Temple",
	"the Water Temple",
	"inside Ganon's Castle",
	"Gerudo Training Ground",
	"Bottom of the Well" 
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
Logic.wallet3 = false;

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
Locked_Logic2.forced_shadow_boss_key = false;
Logic.light_arrows = false;
Logic.ice_arrows = false;
Logic.forest_key_ring = false;
Logic.fire_key_ring = false;
Logic.water_key_ring = false;
Logic.spirit_key_ring = false;
Logic.shadow_key_ring = false;
Logic.well_key_ring = false;
Logic.gtg_key_ring = false;
Logic.ganons_key_ring = false;
Logic.gerudo_card = false;
Logic.magic_bean_pack = false;
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
Spawn.child_wasteland = false;
//Spawn.child_nocturne = false;
Spawn.child_hyrule_fairy = false;
Spawn.child_zd = false;
Spawn.child_zr = false;
Spawn.child_colossus = false;
Spawn.child_zf = false;
Spawn.child_zf_fairy = false;
Spawn.child_zf_fairy_ool = false;

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
Spawn.adult_wasteland = false;
Spawn.adult_colossus = false;
Spawn.adult_zf = false;
Spawn.adult_zf_fairy = false;
Spawn.adult_zf_fairy_ool = false;

//RULES
Rules = {};
Rules.kzSkip = true;
  
var woth1 = "unknown";
var woth2 = "unknown";
var woth3 = "unknown";
var woth4 = "unknown";
var woth5 = "unknown";
var woth6 = "unknown";
var woth7 = "unknown";
var woth8 = "unknown";

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
var WotH = new Array(36).fill(0);
var forcedDisplay = new Array(1024).fill(false);
var checkedYet = new Array(1024).fill(false);
var readYet = new Array(42).fill(false);
var AreaAge = new Array(36).fill(0);
var AreaWotHAge = new Array(36).fill(0);
var wothCount = new Array(36).fill(0);
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
var childRoute1 = ["ocarina_game", "lw_generic", "lost_woods_scrub_grotto", "wolfos_grotto", "bridge_scrub", "target", "skull_kid", "kokiri_storms", "rolling_goron", "goron_dance", "goron_pot", "river_pillar", "river_grotto", "river_ledge", "frogs_1", "frogs_2", "zora_diving", "zora_torches", "hylia_child_fishing"];
var childRoute2 = ["market_slingshot_game", "market_bowling_1", "market_bowling_2","dins_fairy","market_lens_game"];

var parent = document.getElementById("normalColumn1");

var backgrounds = ["url('./normal/areas/kokiri.jpg')","url('./normal/areas/ranch.jpg')","url('./normal/areas/field.jpg')","url('./normal/areas/valley.jpg')","url('./normal/areas/hylia.jpg')","url('./normal/areas/market.jpg')","url('./normal/areas/hyrule_castle.jpg')",
"url('./normal/areas/ogc.jpg')","url('./normal/areas/tot.jpg')","url('./normal/areas/fountain.jpg')","url('./normal/areas/ice.jpg')","url('./normal/areas/deku.jpg')","url('./normal/areas/lost_woods.jpg')","url('./normal/areas/sfm.jpg')",
"url('./normal/areas/goron.jpg')","url('./normal/areas/dodongos.jpg')","url('./normal/areas/dmt.jpg')","url('./normal/areas/dmc.jpg')","url('./normal/areas/kakariko.jpg')","url('./normal/areas/graveyard.jpg')",
"url('./normal/areas/river.jpg')","url('./normal/areas/domain.jpg')","url('./normal/areas/colossus.jpg')","url('./normal/areas/wasteland.jpg')","url('./normal/areas/fortress.jpg')","url('./normal/areas/fortress.jpg')","url('./normal/areas/jabu.jpg')", "url('./normal/areas/forest.jpg')", "url('./normal/areas/fire.jpg')", "url('./normal/areas/spirit.jpg')", "url('./normal/areas/shadow.jpg')", "url('./normal/areas/water.jpg')", "url('./normal/areas/ganons.jpg')", "url('./normal/areas/gtg.jpg')", "url('./normal/areas/well.jpg')"
]

var background = "url('./normal/areas/kokiri.jpg')";
var elem = document.createElement("small"); elem.id = "title_kokiri"; elem.className = "area_titles"; elem.innerHTML = "Kokiri  "; parent.appendChild(elem);
var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
for (var i = 0; i<Locations.length; i++) {
	if (i == AreaIndexes[1]) {
		background = "url('./normal/areas/ranch.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "kokiri_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_ranch"; elem.className = "area_titles"; elem.innerHTML = "Lon Lon"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
(elem);
	}
	if (i == AreaIndexes[2]) {
		background = "url('./normal/areas/field.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "ranch_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_field"; elem.className = "area_titles"; elem.innerHTML = "Field   "; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[3]) {
		background = "url('./normal/areas/valley.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "field_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_valley"; elem.className = "area_titles"; elem.innerHTML = "Valley"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[4]) {
		background = "url('./normal/areas/hylia.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "valley_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_hylia"; elem.className = "area_titles"; elem.innerHTML = "Lake"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[5]) {
		background = "url('./normal/areas/market.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "hylia_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_market"; elem.className = "area_titles"; elem.innerHTML = "Market"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[6]) {
		background = "url('./normal/areas/hyrule_castle.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "market_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_hcastle"; elem.className = "area_titles"; elem.innerHTML = "Castle"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[7]) {
		background = "url('./normal/areas/ogc.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "hyrule_castle_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_outG"; elem.className = "area_titles"; elem.innerHTML = "OGC"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[8]) {
		background = "url('./normal/areas/tot.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "ogc_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_ToT"; elem.className = "area_titles"; elem.innerHTML = "ToT"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[9]) {
		background = "url('./normal/areas/fountain.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "tot_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_fountain"; elem.className = "area_titles"; elem.innerHTML = "Fountain"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[10]) {
		background = "url('./normal/areas/ice.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "fountain_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_ice"; elem.className = "area_titles"; elem.innerHTML = "Ice"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[11]) {
		background = "url('./normal/areas/deku.jpg')";
		parent = document.getElementById("normalColumn2");
		var elem = document.createElement("small"); elem.id = "title_deku"; elem.className = "area_titles"; elem.innerHTML = "Deku"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[12]) {
		background = "url('./normal/areas/lost_woods.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "deku_break"; parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_lostwoods"; elem.className = "area_titles"; elem.innerHTML = "Lost Woods"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[13]) {
		background = "url('./normal/areas/sfm.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "lost_woods_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_sfm"; elem.className = "area_titles"; elem.innerHTML = "SFM"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[14]) {
		background = "url('./normal/areas/goron.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "sfm_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_gcity"; elem.className = "area_titles"; elem.innerHTML = "Goron"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[15]) {
		background = "url('./normal/areas/dodongos.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "goron_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_dodongos"; elem.className = "area_titles"; elem.innerHTML = "DC"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[16]) {
		background = "url('./normal/areas/dmt.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "dodongos_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_trail"; elem.className = "area_titles"; elem.innerHTML = "Trail"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[17]) {
		background = "url('./normal/areas/dmc.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "dmt_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_crater"; elem.className = "area_titles"; elem.innerHTML = "Crater"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[18]) {
		background = "url('./normal/areas/kakariko.jpg')";
		parent = document.getElementById("normalColumn3");
		var elem = document.createElement("small"); elem.id = "title_kakariko"; elem.className = "area_titles"; elem.innerHTML = "Kakariko"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[19]) {
		background = "url('./normal/areas/graveyard.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "kakariko_break"; parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_graveyard"; elem.className = "area_titles"; elem.innerHTML = "Graveyard"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[20]) {
		background = "url('./normal/areas/river.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "graveyard_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_river"; elem.className = "area_titles"; elem.innerHTML = "River"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[21]) {
		background = "url('./normal/areas/domain.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "river_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_domain"; elem.className = "area_titles"; elem.innerHTML = "Domain"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[22]) {
		background = "url('./normal/areas/colossus.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "domain_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_colossus"; elem.className = "area_titles"; elem.innerHTML = "Colossus"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[23]) {
		background = "url('./normal/areas/wasteland.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "colossus_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_wasteland"; elem.className = "area_titles"; elem.innerHTML = "Wasteland"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[24]) {
		background = "url('./normal/areas/fortress.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "wasteland_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_fortress"; elem.className = "area_titles"; elem.innerHTML = "Fortress"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[25]) {
		background = "url('./normal/areas/fortress.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "thieves_break";  parent.appendChild(elem);
	}
	if (i == AreaIndexes[26]) {
		background = "url('./normal/areas/jabu.jpg')";
		var elem = document.createElement("br"); elem.className = "half_break"; elem.id = "fortress_break";  parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "title_jabu"; elem.className = "area_titles"; elem.innerHTML = "Jabu"; parent.appendChild(elem);
		var elem = document.createElement("br"); elem.className = "big_break"; parent.appendChild(elem);
	}
	if (i == AreaIndexes[27]) {
		parent = document.getElementById("dung1"); background = "url('./normal/areas/forest.jpg')";
		var elem = document.createElement("small"); elem.id = "title_forest"; elem.className = "area_titles"; elem.innerHTML = "For"; elem.onmousedown = route_forest; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "forest"; elem.className = "superdot"; elem.onclick = junkUltra; elem.innerHTML = "8"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "forestSKs"; elem.className = "superdotSK"; elem.innerHTML = "5"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "forestBKs"; elem.className = "superdotBK"; elem.innerHTML = "1"; parent.appendChild(elem);
		var elem = document.createElement("br"); parent.appendChild(elem);
	}
	if (i == AreaIndexes[28]) {
		background = "url('./normal/areas/fire.jpg')";
		var elem = document.createElement("small"); elem.id = "title_fire"; elem.className = "area_titles"; elem.innerHTML = "Fir"; elem.onmousedown = route_fire; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "fire"; elem.className = "superdot"; elem.onclick = junkUltra; elem.innerHTML = "6"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "fireSKs"; elem.className = "superdotSK"; elem.innerHTML = "8"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "fireBKs"; elem.className = "superdotBK"; elem.innerHTML = "1"; parent.appendChild(elem);
		var elem = document.createElement("br"); parent.appendChild(elem);
	}
	if (i == AreaIndexes[29]) {
		background = "url('./normal/areas/spirit.jpg')";
		parent = document.getElementById("dung2");
		var elem = document.createElement("small"); elem.id = "title_spirit"; elem.className = "area_titles"; elem.innerHTML = "Spi"; elem.onmousedown = route_spirit; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "spirit"; elem.className = "superdot"; elem.onclick = junkUltra; elem.innerHTML = "14"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "spiritSKs"; elem.className = "superdotSK"; elem.innerHTML = "5"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "spiritBKs"; elem.className = "superdotBK"; elem.innerHTML = "1"; parent.appendChild(elem);
		var elem = document.createElement("br"); parent.appendChild(elem);
	}
	if (i == AreaIndexes[30]) {
		background = "url('./normal/areas/shadow.jpg')";
		var elem = document.createElement("small"); elem.id = "title_shadow"; elem.className = "area_titles"; elem.innerHTML = "Sha"; elem.onmousedown = route_shadow; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "shadow"; elem.className = "superdot"; elem.onclick = junkUltra; elem.innerHTML = "8"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "shadowSKs"; elem.className = "superdotSK"; elem.innerHTML = "5"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "shadowBKs"; elem.className = "superdotBK"; elem.innerHTML = "1"; parent.appendChild(elem);
		var elem = document.createElement("br"); parent.appendChild(elem);
	}
	if (i == AreaIndexes[31]) {
		background = "url('./normal/areas/water.jpg')";
		parent = document.getElementById("dung3");
		var elem = document.createElement("small"); elem.id = "title_water"; elem.className = "area_titles"; elem.innerHTML = "Wat"; elem.onmousedown = route_water; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "water"; elem.className = "superdot"; elem.onclick = junkUltra; elem.innerHTML = "4"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "waterSKs"; elem.className = "superdotSK"; elem.innerHTML = "6"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "waterBKs"; elem.className = "superdotBK"; elem.innerHTML = "1"; parent.appendChild(elem);
		var elem = document.createElement("br"); parent.appendChild(elem);
	}
	if (i == AreaIndexes[32]) {
		background = "url('./normal/areas/ganons.jpg')";
		var elem = document.createElement("small"); elem.id = "title_ganons"; elem.className = "area_titles"; elem.innerHTML = "Gan"; elem.onmousedown = route_ganons; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "ganons"; elem.className = "superdot"; elem.onclick = junkUltra; elem.innerHTML = "14"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "ganonsSKs"; elem.className = "superdotSK"; elem.innerHTML = "2"; parent.appendChild(elem);
		var elem = document.createElement("br"); parent.appendChild(elem);
	}
	if (i == AreaIndexes[33]) {
		background = "url('./normal/areas/gtg.jpg')";
		parent = document.getElementById("dung4");
		var elem = document.createElement("small"); elem.id = "title_gtg"; elem.className = "area_titles"; elem.innerHTML = "GTG"; elem.onmousedown = route_gtg; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "gtg"; elem.className = "superdot"; elem.onclick = junkUltra; elem.innerHTML = "13"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "gtgSKs"; elem.className = "superdotSK"; elem.innerHTML = "9"; parent.appendChild(elem);
		var elem = document.createElement("br"); parent.appendChild(elem);
	}
	if (i == AreaIndexes[34]) {
		background = "url('./normal/areas/well.jpg')";
		var elem = document.createElement("small"); elem.id = "title_well"; elem.className = "area_titles"; elem.innerHTML = "Well"; elem.onmousedown = route_well; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "well"; elem.className = "superdot"; elem.onclick = junkUltra; elem.innerHTML = "11"; parent.appendChild(elem);
		var elem = document.createElement("span"); elem.id = "wellSKs"; elem.className = "superdotSK"; elem.innerHTML = "3"; parent.appendChild(elem);
		var elem = document.createElement("br"); parent.appendChild(elem);
	}
	if (i < AreaIndexes[35]) {
		var elem = document.createElement("input"); elem.id = Locations[i]; elem.onmousedown = mouse_input; if (i < AreaIndexes[35]) {elem.style.backgroundImage = background; elem.className = "picture_input"; } else {elem.className = "check_input";} parent.appendChild(elem);
		var elem = document.createElement("small"); elem.id = "text_" + Locations[i]; elem.className = "check_text"; elem.onmousedown = junk; elem.innerHTML = Names[i]; /*if (elem.id.includes("text_gs_")) {elem.style.textDecoration = "underline overline";} if (elem.id.includes("text_scrub")) {elem.style.textDecoration = "underline overline";}*/ parent.appendChild(elem);
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

locationLogic();

var linsoOrder = ["stick", "nut", "bomb", "bow", "fire_arrows", "dins_fire", "slingshot", "ocarina", "chu", "hookshot", "ice_arrows", "farores_wind", "boomerang", "lens", "beans", "hammer", "light_arrows", "nayrus_love", "rutos_letter", "bottle1", "bottle2", "bottle3", "egg1", "egg2", "kokiri_sword", "master_sword", "biggoron_sword", "circus", "skull_token", "skull_counter", "deku_shield", "hylian_shield", "mirror_shield", "magic", "adults_wallet", "gerudo_card", "kokiri_tunic", "goron_tunic", "zora_tunic", "agony", "silver_scale", "goron_bracelet", "kokiri_boots", "iron_boots", "hover_boots", "emerald", "ruby", "sapphire", "forest", "fire", "water", "gen1", "gen2", "gen3"];
var linsoOrder2 = ["lullaby", "eponas", "sarias", "suns", "time", "storms", "minuet", "bolero", "serenade", "nocturne", "requiem", "prelude"];

changeThemes();
changeThemes();
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
		if (linsoOrder[linsoOrderIncrement].startsWith("bottle")) {elem.src = Player.bottle_img;}
		else if (linsoOrder[linsoOrderIncrement].startsWith("gen1")) {elem.src = Player.shadow_img;}
		else if (linsoOrder[linsoOrderIncrement].startsWith("gen2")) {elem.src = Player.spirit_img;}
		else if (linsoOrder[linsoOrderIncrement].startsWith("gen3")) {elem.src = Player.light_img;}
		else if (linsoOrder[linsoOrderIncrement].startsWith("circus")) {
      animalID = elem.id;
			animalLV = animalXP.slice(0);
            highestXPAnimals=Object.keys(myAnimalXP).sort(function(a, b) {return -(myAnimalXP[a] - myAnimalXP[b])});
            for (var n = 0; n < highestXPAnimals.length; n++) {
                thisAnimalsLevel = Math.max(Math.floor(2.5*Math.sqrt(myAnimalXP[highestXPAnimals[n]])-1),0);
                for (var m = 0; m < thisAnimalsLevel; m++) {
                    if (Math.random() < 0.5) {
                        if (tabPicSources[animalRNG].includes(highestXPAnimals[n])) {n=1000000000; m=1000000000}
                        else animalRNG = Math.floor(Math.random() * tabPicSources.length)
                    }
                }
            }
      rolledAnimalsLevel = Math.max(Math.floor(2.5*Math.sqrt(animalXP[animalRNG])-1),0);     
            
			elem.src = tabPicSources[animalRNG]; 
      elem.onclick = toggleLinsoGoMode;
       
      if (Math.random()<Math.min(rolledAnimalsLevel/1000,0.5)) {
        elem.src = tabPicSourcesRB[animalRNG];
        rainbowFlag = true;
      }
      document.getElementById("seedsDone").innerHTML =  'seeds as companion: ' + savedAnimalXP[animalRNG];   
      document.getElementById("rainbowChance").innerHTML =  'rainbow aminalution: ' + (Math.min(rolledAnimalsLevel/1000,0.5)*100).toFixed(1) + '%';     
      document.getElementById("rainbowMult").innerHTML =  'rainbow XP multiplier: ' + rainbowMults[animalRNG];   
      document.getElementById("yamiChance").innerHTML =  'yami aminalution: ' + (Math.min(rolledAnimalsLevel/200,0.125)*100).toFixed(1) + '%'; 
      document.getElementById("yamiMult").innerHTML =  'yami XP multiplier: ' + yamiMults[animalRNG]; 
      document.getElementById("angelChance").innerHTML =  'angel aminalution: ' + (Math.min(rolledAnimalsLevel/200,0.125)*100).toFixed(1) + '%'; 
      document.getElementById("angelMult").innerHTML =  'angel XP multiplier: ' + angelMults[animalRNG];        
      
         
      
			document.getElementById("animalLV").innerHTML = elem.src.slice(44,elem.src.length-4).replace("RB","") + " LVL " + rolledAnimalsLevel;
            if (tabPicSources[animalRNG].includes(highestXPAnimals[0])) document.getElementById("rollChance").innerHTML += "roll chance:" + ((1-Math.pow((numberOfAnimals-1)/numberOfAnimals,rolledAnimalsLevel/2+1))*100).toFixed(1) + "%";
    }
		else {elem.src = Player[linsoOrder[linsoOrderIncrement] + "_img"];}
		Player[linsoOrder[linsoOrderIncrement]] = false;
		if (linsoOrder[linsoOrderIncrement] == "kokiri_boots" || linsoOrder[linsoOrderIncrement] == "kokiri_tunic" || linsoOrder[linsoOrderIncrement] == "skull_token") {Player[linsoOrder[linsoOrderIncrement]] = true;}
		elem.style.position = "absolute";
		elem.style.left = -32 + j*41 + "px";
		elem.style.top = tempTop + i*40 + "px";
		if (linsoOrder[linsoOrderIncrement].startsWith("circus")) {elem.style.opacity =0;} else {elem.style.opacity = .3; elem.style.filter = "grayscale(100%)";}
		if (linsoOrder[linsoOrderIncrement] == "skull_token") {elem.onmousedown = linso_counter;} else if (!linsoOrder[linsoOrderIncrement].startsWith("circus")) {elem.onclick = linSoClick;}
		if (linsoOrder[linsoOrderIncrement].startsWith("circus")) {
			var elem2 = document.createElement("IMG");
			elem2.style.position = "absolute";
			elem2.style.left = -154 + j*41 + "px";
			elem2.style.top = tempTop -  122 + i*40 + "px";
      elem2.style.height = "280px";
	  	elem2.style.width = "280px";
			elem2.id = "linsoLight";
			elem2.src = "./normal/linsoLight.png";
			elem2.style.opacity = 0;
			document.getElementById("linsoColumn").appendChild(elem2); 
      
      var elem3 = document.createElement("IMG");
      elem3.style.position = "absolute";
			elem3.style.left = -29 + j*41 + "px";
			elem3.style.top = tempTop -17 + i*40 + "px";
			elem3.id = "halo";
			elem3.src = "./normal/halo.png";
			elem3.style.opacity = 0;
      elem3.style.height = "28px";
	  	elem3.style.width = "28px";
			document.getElementById("linsoColumn").appendChild(elem3); 
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
	elem.src = Player[linsoOrder2[linsoOrderIncrement] + "_img"];
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
var LocationToSpoilerName = {
	"mido_1": "KF Midos Top Left Chest",
	"mido_2": "KF Midos Top Right Chest",
	"mido_3": "KF Midos Bottom Left Chest",
	"mido_4": "KF Midos Bottom Right Chest",
	"kokiri_sword": "KF Kokiri Sword Chest",
	"kokiri_storms": "KF Storms Grotto Chest",
	"talons_chickens": "LLR Talons Chickens",
	"back_of_ranch": "LLR Freestanding PoH",
	"hyrule_remoteGrotto": "HF Southeast Grotto Chest",
	"hyrule_openGrotto": "HF Open Grotto Chest",
	"hyrule_hp_scrub": "HF Deku Scrub Grotto",
	"hyrule_marketGrotto": "HF Near Market Grotto Chest",
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
	"lw_generic": "LW Near Shortcuts Grotto Chest",
	"lost_woods_scrub_grotto": "LW Deku Scrub Grotto Front",
	"bridge_scrub": "LW Deku Scrub Near Bridge",
	"target": "LW Target in Woods",
	"skull_kid": "LW Skull Kid",
	"theater_skull": "Deku Theater Skull Mask",
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
	"kakariko_cow_house": "Kak Impas House Freestanding PoH",
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
	"race_1": "Graveyard Dampe Race Hookshot Chest",
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
	"h_kokiri_storms" : "KF (Storms Grotto)",
	"h_hyrule_remoteGrotto" : "HF (Southeast Grotto)",
	"h_hyrule_openGrotto" : "HF (Open Grotto)",
	"h_hyrule_marketGrotto" : "HF (Near Market Grotto)",
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
	"h_lw_generic" : "LW (Near Shortcuts Grotto)",
	"h_saria" : "SFM (Saria)",
	"h_sfm_1" : "SFM (Maze Upper)",
	"h_sfm_2" : "SFM (Maze Lower)",
	"h_goron_maze" : "GC (Maze)",
	"h_medigoron" : "GC (Medigoron)",
	"h_dodongos" : "Dodongos Cavern (Bombable Wall)",
	"h_trail_storms" : "DMT (Storms Grotto)",
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

var SpoilerLocationToLocationName = {
	"KF Midos Top Left Chest": "mido_1",
	"KF Midos Top Right Chest": "mido_2",
	"KF Midos Bottom Left Chest": "mido_3",
	"KF Midos Bottom Right Chest": "mido_4",
	"KF Kokiri Sword Chest": "kokiri_sword",
	"KF Storms Grotto Chest": "kokiri_storms",
	"LLR Talons Chickens": "talons_chickens",
	"LLR Freestanding PoH": "back_of_ranch",
	"HF Southeast Grotto Chest": "hyrule_remoteGrotto",
	"HF Open Grotto Chest": "hyrule_openGrotto",
	"HF Deku Scrub Grotto": "hyrule_hp_scrub",
	"HF Near Market Grotto Chest": "hyrule_marketGrotto",
	"HF Tektite Grotto Freestanding PoH": "hyrule_tektite_grotto",
	"GV Crate Freestanding PoH": "gerudovalley_box",
	"GV Waterfall Freestanding PoH": "gerudovalley_fall",
	"GV Chest": "gerudo_hammer",
	"LH Child Fishing": "hylia_child_fishing",
	"LH Underwater Item": "hylia_bottle",
	"LH Adult Fishing": "hylia_adult_fishing",
	"LH Freestanding PoH": "hylia_lab_top",
	"LH Lab Dive": "hylia_lab_dive",
	"LH Sun": "hylia_sun_shoot",
	"Market Shooting Gallery Reward": "market_slingshot_game",
	"Market Lost Dog": "richard",
	"Market Bombchu Bowling First Prize": "market_bowling_1",
	"Market Bombchu Bowling Second Prize": "market_bowling_2",
	"Market Treasure Chest Game Reward": "market_lens_game",
	"Market 10 Big Poes": "poes",
	"ToT Light Arrows Cutscene": "lacs",
	"HC Great Fairy Reward": "dins_fairy",
	"OGC Great Fairy Reward": "g_fairy",
	"ZF Great Fairy Reward": "fountain_fairy",
	"ZF Iceberg Freestanding PoH": "ice_glacier_hp",
	"ZF Bottom Freestanding PoH": "ice_bottom_of_fountain",
	"Ice Cavern Map Chest": "ice_map",
	"Ice Cavern Compass Chest": "ice_compass",
	"Ice Cavern Freestanding PoH": "ice_hp",
	"Ice Cavern Iron Boots Chest": "ice_irons",
	"Deku Tree Map Chest": "deku_lobby",
	"Deku Tree Slingshot Chest": "deku_slingshot",
	"Deku Tree Slingshot Room Side Chest": "deku_slingshot_room_side",
	"Deku Tree Compass Chest": "deku_compass",
	"Deku Tree Compass Room Side Chest": "deku_compass_room_side",
	"Deku Tree Basement Chest": "deku_basement",
	"Deku Tree Queen Gohma Heart": "deku_queen_gohma",
	"LW Ocarina Memory Game": "ocarina_game",
	"LW Near Shortcuts Grotto Chest": "lw_generic",
	"LW Deku Scrub Grotto Front": "lost_woods_scrub_grotto",
	"LW Deku Scrub Near Bridge": "bridge_scrub",
	"LW Target in Woods": "target",
	"LW Skull Kid": "skull_kid",
	"Deku Theater Skull Mask": "theater_skull",
	"SFM Wolfos Grotto Chest": "wolfos_grotto",
	"GC Rolling Goron as Child": "rolling_goron",
	"GC Darunias Joy": "goron_dance",
	"GC Pot Freestanding PoH": "goron_pot",
	"GC Maze Center Chest": "goron_maze_1",
	"GC Maze Right Chest": "goron_maze_2",
	"GC Maze Left Chest": "goron_maze_3",
	"GC Rolling Goron as Adult": "goron_link",
	"Dodongos Cavern Map Chest": "dodongos_map",
	"Dodongos Cavern Compass Chest": "dodongos_compass",
	"Dodongos Cavern Bomb Flower Platform Chest": "dodongos_bomb_flower_platform",
	"Dodongos Cavern Bomb Bag Chest": "dodongos_bomb_bag",
	"Dodongos Cavern End of Bridge Chest": "dodongos_end_of_bridge",
	"Dodongos Cavern Boss Room Chest": "dodongos_above_king",
	"Dodongos Cavern King Dodongo Heart": "dodongos_king_dodongo",
	"DMT Chest": "trail_bombable",
	"DMT Freestanding PoH": "trail_dodongos_top",
	"DMT Storms Grotto Chest": "trail_storms",
	"DMT Great Fairy Reward": "trail_fairy",
	"DMT Biggoron": "trade_quest",
	"DMC Volcano Freestanding PoH": "crater_bean",
	"DMC Great Fairy Reward": "crater_hammer_fairy",
	"DMC Upper Grotto Chest": "crater_grotto",
	"DMC Wall Freestanding PoH": "crater_nook_hp",
	"Kak Man on Roof": "man_on_roof",
	"Kak Open Grotto Chest": "kakariko_grotto",
	"Kak Windmill Freestanding PoH": "windmill",
	"Kak Anju as Adult": "anju",
	"Kak Impas House Freestanding PoH": "kakariko_cow_house",
	"Kak Shooting Gallery Reward": "archery_game",
	"Kak Redead Grotto Chest": "redead_grotto",
	"Kak Anju as Child": "anjus_chickens",
	"Kak 10 Gold Skulltula Reward": "tokens_10",
	"Kak 20 Gold Skulltula Reward": "tokens_20",
	"Kak 30 Gold Skulltula Reward": "tokens_30",
	"Kak 40 Gold Skulltula Reward": "tokens_40",
	"Kak 50 Gold Skulltula Reward": "tokens_50",
	"Graveyard Shield Grave Chest": "shield_grave",
	"Graveyard Dampe Gravedigging Tour": "gravedigging_tour",
	"Graveyard Heart Piece Grave Chest": "redead_grave",
	"Graveyard Royal Familys Tomb Chest": "composers_grave",
	"Graveyard Freestanding PoH": "graveyard_box",
	"Graveyard Dampe Race Hookshot Chest": "race_1",
	"Graveyard Dampe Race Freestanding PoH": "race_2",
	"ZR Near Open Grotto Freestanding PoH": "river_pillar",
	"ZR Frogs in the Rain": "frogs_1",
	"ZR Open Grotto Chest": "river_grotto",
	"ZR Near Domain Freestanding PoH": "river_ledge",
	"ZR Frogs Ocarina Game": "frogs_2",
	"ZD Diving Minigame": "zora_diving",
	"ZD Chest": "zora_torches",
	"ZD King Zora Thawed": "thaw_king",
	"Colossus Freestanding PoH": "colossus_bean",
	"Colossus Great Fairy Reward": "colossus_fairy",
	"Wasteland Chest": "wasteland",
	"GF Chest": "gerudo_roof",
	"GF HBA 1000 Points": "gerudo_archery_1",
	"GF HBA 1500 Points": "gerudo_archery_2",
	"Jabu Jabus Belly Boomerang Chest": "jabu_boomerang",
	"Jabu Jabus Belly Map Chest": "jabu_map",
	"Jabu Jabus Belly Compass Chest": "jabu_compass",
	"Jabu Jabus Belly Barinade Heart": "jabu_barinade",
	"Forest Temple First Room Chest": "forest_first",
	"Forest Temple First Stalfos Chest": "forest_stalfos",
	"Forest Temple Raised Island Courtyard Chest": "forest_midCourtyard",
	"Forest Temple Map Chest": "forest_highCourtyard",
	"Forest Temple Well Chest": "forest_lowCourtyard",
	"Forest Temple Eye Switch Chest": "forest_blockRoom",
	"Forest Temple Boss Key Chest": "forest_bossKey",
	"Forest Temple Floormaster Chest": "forest_floormaster",
	"Forest Temple Red Poe Chest": "forest_red",
	"Forest Temple Bow Chest": "forest_bow",
	"Forest Temple Blue Poe Chest": "forest_blue",
	"Forest Temple Falling Ceiling Room Chest": "forest_fallingCeiling",
	"Forest Temple Basement Chest": "forest_nearBoss",
	"Forest Temple Phantom Ganon Heart": "forest_phantomGanon",
	"Fire Temple Near Boss Chest": "fire_nearBoss",
	"Fire Temple Flare Dancer Chest": "fire_hammer1",
	"Fire Temple Boss Key Chest": "fire_hammer2",
	"Fire Temple Big Lava Room Lower Open Door Chest": "fire_lavaOpen",
	"Fire Temple Big Lava Room Blocked Door Chest": "fire_lavaBomb",
	"Fire Temple Volvagia Heart": "fire_volvagia",
	"Fire Temple Boulder Maze Lower Chest": "fire_lowerMaze",
	"Fire Temple Boulder Maze Side Room Chest": "fire_sideRoom",
	"Fire Temple Map Chest": "fire_map",
	"Fire Temple Boulder Maze Upper Chest": "fire_upperMaze",
	"Fire Temple Boulder Maze Shortcut Chest": "fire_shortcut",
	"Fire Temple Scarecrow Chest": "fire_scarecrow",
	"Fire Temple Compass Chest": "fire_compass",
	"Fire Temple Highest Goron Chest": "fire_sotGoron",
	"Fire Temple Megaton Hammer Chest": "fire_top",
	"Water Temple Compass Chest": "water_compass",
	"Water Temple Map Chest": "water_map",
	"Water Temple Cracked Wall Chest": "water_cracked",
	"Water Temple Torches Chest": "water_torches",
	"Water Temple Central Bow Target Chest": "water_block",
	"Water Temple Central Pillar Chest": "water_pillar",
	"Water Temple Longshot Chest": "water_dLink",
	"Water Temple River Chest": "water_river",
	"Water Temple Dragon Chest": "water_dragon",
	"Water Temple Boss Key Chest": "water_bossKey",
	"Water Temple Morpha Heart": "water_morpha",
	"Spirit Temple Child Bridge Chest": "spirit_childLeft",
	"Spirit Temple Child Early Torches Chest": "spirit_childRight",
	"Spirit Temple Child Climb North Chest": "spirit_childClimb1",
	"Spirit Temple Child Climb East Chest": "spirit_childClimb2",
	"Spirit Temple Map Chest": "spirit_map",
	"Spirit Temple Sun Block Room Chest": "spirit_sunRoom",
	"Spirit Temple Silver Gauntlets Chest": "spirit_rightHand",
	"Spirit Temple Compass Chest": "spirit_adultLeft",
	"Spirit Temple Early Adult Right Chest": "spirit_adultRight",
	"Spirit Temple First Mirror Left Chest": "spirit_rotatingMirror1",
	"Spirit Temple First Mirror Right Chest": "spirit_rotatingMirror2",
	"Spirit Temple Statue Room Hand Chest": "spirit_lullabyHand",
	"Spirit Temple Statue Room Northeast Chest": "spirit_lullabyHigh",
	"Spirit Temple Near Four Armos Chest": "spirit_nearFourArmos",
	"Spirit Temple Hallway Right Invisible Chest": "spirit_invisible1",
	"Spirit Temple Hallway Left Invisible Chest": "spirit_invisible2",
	"Spirit Temple Mirror Shield Chest": "spirit_leftHand",
	"Spirit Temple Boss Key Chest": "spirit_bossKey",
	"Spirit Temple Topmost Chest": "spirit_tippyTop",
	"Spirit Temple Twinrova Heart": "spirit_twinrova",
	"Shadow Temple Map Chest": "shadow_map",
	"Shadow Temple Hover Boots Chest": "shadow_hovers",
	"Shadow Temple Compass Chest": "shadow_compass",
	"Shadow Temple Early Silver Rupee Chest": "shadow_earlySilvers",
	"Shadow Temple Invisible Blades Visible Chest": "shadow_spinning1",
	"Shadow Temple Invisible Blades Invisible Chest": "shadow_spinning2",
	"Shadow Temple Falling Spikes Lower Chest": "shadow_spikesLower",
	"Shadow Temple Falling Spikes Upper Chest": "shadow_spikesUpper",
	"Shadow Temple Falling Spikes Switch Chest": "shadow_spikesSwitch",
	"Shadow Temple Invisible Spikes Chest": "shadow_redeadSilvers",
	"Shadow Temple Freestanding Key": "shadow_pot",
	"Shadow Temple Wind Hint Chest": "shadow_wind",
	"Shadow Temple After Wind Hidden Chest": "shadow_bombable",
	"Shadow Temple After Wind Enemy Chest": "shadow_gibdos",
	"Shadow Temple Spike Walls Left Chest": "shadow_dins1",
	"Shadow Temple Boss Key Chest": "shadow_dins2",
	"Shadow Temple Invisible Floormaster Chest": "shadow_floormaster",
	"Shadow Temple Bongo Bongo Heart": "shadow_bongo",
	"Ganons Castle Light Trial First Left Chest": "ganons_lightTrial1",
	"Ganons Castle Light Trial Second Left Chest": "ganons_lightTrial2",
	"Ganons Castle Light Trial Third Left Chest": "ganons_lightTrial3",
	"Ganons Castle Light Trial First Right Chest": "ganons_lightTrial4",
	"Ganons Castle Light Trial Second Right Chest": "ganons_lightTrial5",
	"Ganons Castle Light Trial Third Right Chest": "ganons_lightTrial6",
	"Ganons Castle Light Trial Invisible Enemies Chest": "ganons_lightTrial7",
	"Ganons Castle Light Trial Lullaby Chest": "ganons_lightTrialLullaby",
	"Ganons Castle Spirit Trial Crystal Switch Chest": "ganons_spiritTrial1",
	"Ganons Castle Spirit Trial Invisible Chest": "ganons_spiritTrial2",
	"Ganons Castle Forest Trial Chest": "ganons_forestTrial",
	"Ganons Castle Water Trial Left Chest": "ganons_waterTrial1",
	"Ganons Castle Water Trial Right Chest": "ganons_waterTrial2",
	"Ganons Castle Shadow Trial Front Chest": "ganons_shadowTrial1",
	"Ganons Castle Shadow Trial Golden Gauntlets Chest": "ganons_shadowTrial2",
	"Ganons Tower Boss Key Chest": "ganons_bossKey",
	"Gerudo Training Ground Lobby Left Chest": "gtg_lobbyLeft",
	"Gerudo Training Ground Lobby Right Chest": "gtg_lobbyRight",
	"Gerudo Training Ground Stalfos Chest": "gtg_stalfos",
	"Gerudo Training Ground Before Heavy Block Chest": "gtg_wolfos",
	"Gerudo Training Ground Heavy Block First Chest": "gtg_silvers1",
	"Gerudo Training Ground Heavy Block Second Chest": "gtg_silvers2",
	"Gerudo Training Ground Heavy Block Third Chest": "gtg_silvers3",
	"Gerudo Training Ground Heavy Block Fourth Chest": "gtg_silvers4",
	"Gerudo Training Ground Eye Statue Chest": "gtg_eyes",
	"Gerudo Training Ground Near Scarecrow Chest": "gtg_aboveEyes",
	"Gerudo Training Ground Hammer Room Clear Chest": "gtg_keese",
	"Gerudo Training Ground Hammer Room Switch Chest": "gtg_flamesChest",
	"Gerudo Training Ground Freestanding Key": "gtg_freestanding",
	"Gerudo Training Ground Maze Right Central Chest": "gtg_right2",
	"Gerudo Training Ground Maze Right Side Chest": "gtg_right3",
	"Gerudo Training Ground Beamos Chest": "gtg_beamos",
	"Gerudo Training Ground Hidden Ceiling Chest": "gtg_left1",
	"Gerudo Training Ground Maze Path First Chest": "gtg_left2",
	"Gerudo Training Ground Maze Path Second Chest": "gtg_left3",
	"Gerudo Training Ground Maze Path Third Chest": "gtg_left4",
	"Gerudo Training Ground Maze Path Final Chest": "gtg_final",
	"Gerudo Training Ground Underwater Silver Rupee Chest": "gtg_toilet",
	"Bottom of the Well Right Bottom Fake Wall Chest": "well_fakeRight",
	"Bottom of the Well Center Skulltula Chest": "well_centerSmall",
	"Bottom of the Well Back Left Bombable Chest": "well_backBombable",
	"Bottom of the Well Underwater Left Chest": "well_waterLeft",
	"Bottom of the Well Freestanding Key": "well_coffin",
	"Bottom of the Well Compass Chest": "well_centerBig",
	"Bottom of the Well Front Left Fake Wall Chest": "well_fakeLeft",
	"Bottom of the Well Front Center Bombable Chest": "well_frontBombable",
	"Bottom of the Well Underwater Front Chest": "well_waterFront",
	"Bottom of the Well Lens of Truth Chest": "well_deadHand",
	"Bottom of the Well Invisible Chest": "well_invisible",
	"Bottom of the Well Fire Keese Chest": "well_locked1",
	"Bottom of the Well Like Like Chest": "well_locked2",
	"Bottom of the Well Map Chest": "well_basement",
	"Song from Impa": "zeldasSpot",
	"Song from Malon": "eponasSpot",
	"Song from Saria": "sariasSpot",
	"Song from Windmill": "stormsSpot",
	"Song from Royal Familys Tomb": "sunsSpot",
	"Sheik in Crater": "boleroSpot",
	"Sheik in Forest": "minuetSpot",
	"Sheik at Colossus": "requiemSpot",
	"Sheik in Ice Cavern": "serenadeSpot",
	"Sheik at Temple": "preludeSpot",
	"Sheik in Kakariko": "nocturneSpot",
	"Song from Ocarina of Time": "oot",
	"KF (Deku Tree Left)": "h_deku_left",
	"KF (Deku Tree Right)": "h_deku_right",
	"KF (Outside Storms)": "h_near_lw",
	"KF (Storms Grotto)": "h_kokiri_storms",
	"HF (Southeast Grotto)": "h_hyrule_remoteGrotto",
	"HF (Open Grotto)": "h_hyrule_openGrotto",
	"HF (Near Market Grotto)": "h_hyrule_marketGrotto",
	"HF (Cow Grotto)": "h_hyrule_web",
	"GV (Waterfall)": "h_valley",
	"LH (Lab)": "h_lab",
	"LH (Southeast Corner)": "h_back_right_lake",
	"LH (Southwest Corner)": "h_back_left_lake",
	"ToT (Left)": "h_tot_1",
	"ToT (Left-Center)": "h_tot_2",
	"ToT (Right-Center)": "h_tot_3",
	"ToT (Right)": "h_tot_4",
	"HC (Malon)": "h_castle_1",
	"HC (Rock Wall)": "h_castle_2",
	"HC (Storms Grotto)": "h_castle_sos",
	"ZF (Fairy)": "h_fountain_fairy",
	"ZF (Jabu)": "h_fountain",
	"LW (Bridge)": "h_lw_bridge",
	"LW (Near Shortcuts Grotto)": "h_lw_generic",
	"SFM (Saria)": "h_saria",
	"SFM (Maze Upper)": "h_sfm_1",
	"SFM (Maze Lower)": "h_sfm_2",
	"GC (Maze)": "h_goron_maze",
	"GC (Medigoron)": "h_medigoron",
	"Dodongos Cavern (Bombable Wall)": "h_dodongos",
	"DMT (Storms Grotto)": "h_trail_storms",
	"DMT (Biggoron)": "h_biggoron",
	"DMC (Upper Grotto)": "h_crater_grotto",
	"DMC (Bombable Wall)": "h_crater_wall",
	"Kak (Open Grotto)": "h_kakariko_grotto",
	"Graveyard (Shadow Temple)": "h_nocturne",
	"ZR (Open Grotto)": "h_river_grotto",
	"ZR (Near Grottos)": "h_river_pillar",
	"ZR (Near Domain)": "h_river_domain",
	"ZD (Mweep)": "h_domain",
	"Colossus (Spirit Temple)": "h_colossus"
};

var SpoilerItemToInput = {
	"Bomb Bag" : inputs[inputNames.indexOf("Bomb Bag")],
	"Boomerang" : inputs[inputNames.indexOf("Boomerang")],
	"Bottle" : inputs[inputNames.indexOf("Bottle")],
	"Bottle with Red Potion" : inputs[inputNames.indexOf("Bottle")],
	"Bottle with Green Potion" : inputs[inputNames.indexOf("Bottle")],
	"Bottle with Blue Potion" : inputs[inputNames.indexOf("Bottle")],
	"Bottle with Fairy" : inputs[inputNames.indexOf("Bottle")],
	"Bottle with Bugs" : inputs[inputNames.indexOf("Bottle")],
	"Bottle with Fish" : inputs[inputNames.indexOf("Bottle")],
	"Bottle with Milk" : inputs[inputNames.indexOf("Bottle")],
	"Bottle with Poe" : inputs[inputNames.indexOf("Bottle")],
	"Bottle with Blue Fire" : inputs[inputNames.indexOf("Bottle")],
	"Bottle with Big Poe" : inputs[inputNames.indexOf("Big Poe")],
	"Bow" : inputs[inputNames.indexOf("Bow")],
	"Dins Fire" : inputs[inputNames.indexOf("Din's Fire")],
	"Farores Wind" : inputs[inputNames.indexOf("Farore's Wind")],
	"Fire Arrows" : inputs[inputNames.indexOf("Fire Arrows")],
	"Goron Tunic" : inputs[inputNames.indexOf("Goron Tunic")],
	"Megaton Hammer" : inputs[inputNames.indexOf("Hammer")],
	"Progressive Hookshot" : inputs[inputNames.indexOf("Progressive Hookshot")],
	"Hover Boots" : inputs[inputNames.indexOf("Hover Boots")],
	"Iron Boots" : inputs[inputNames.indexOf("Iron Boots")],
	"Kokiri Sword" : inputs[inputNames.indexOf("Kokiri Sword")],
	"Lens of Truth" : inputs[inputNames.indexOf("Lens")],
	"Rutos Letter" : inputs[inputNames.indexOf("Ruto's Letter")],
	"Light Arrows" : inputs[inputNames.indexOf("Light Arrows")],
	"Magic Meter" : inputs[inputNames.indexOf("Magic")],
	"Mirror Shield" : inputs[inputNames.indexOf("Mirror Shield")],
	"Progressive Scale" : inputs[inputNames.indexOf("Progressive Scale")],
	"Slingshot" : inputs[inputNames.indexOf("Slingshot")],
	"Progressive Strength Upgrade" : inputs[inputNames.indexOf("Progressive Strength")],
	"Prescription" : inputs[inputNames.indexOf("Prescription")],
	"Eyeball Frog" : inputs[inputNames.indexOf("Prescription")],
	"Eyedrops" : inputs[inputNames.indexOf("Prescription")],
	"Claim Check" : inputs[inputNames.indexOf("Claim Check")],
	"Progressive Wallet" : inputs[inputNames.indexOf("Progressive Wallet")],
	"Zora Tunic" : inputs[inputNames.indexOf("Zora Tunic")],
	"Zeldas Lullaby" : inputs[inputNames.indexOf("Lullaby")],
	"Eponas Song" : inputs[inputNames.indexOf("Epona's Song")],
	"Sarias Song" : inputs[inputNames.indexOf("Saria's Song")],
	"Song of Time" : inputs[inputNames.indexOf("Song of Time")],
	"Suns Song" : inputs[inputNames.indexOf("Sun's Song")],
	"Song of Storms" : inputs[inputNames.indexOf("Song of Storms")],
	"Minuet of Forest" : inputs[inputNames.indexOf("Minuet")],
	"Bolero of Fire" : inputs[inputNames.indexOf("Bolero")],
	"Serenade of Water" : inputs[inputNames.indexOf("Serenade")],
	"Requiem of Spirit" : inputs[inputNames.indexOf("Requiem")],
	"Nocturne of Shadow" : inputs[inputNames.indexOf("Nocturne")],
	"Prelude of Light" : inputs[inputNames.indexOf("Prelude")],
	"Bombchus (10)" : inputs[inputNames.indexOf("Bombchus")],
	"Bombchus (20)" : inputs[inputNames.indexOf("Bombchus")],
	"Bombchus (5)" : inputs[inputNames.indexOf("Bombchus")],
	"Small Key (Forest Temple)" : inputs[inputNames.indexOf("Small Key")],
	"Small Key (Fire Temple)" : inputs[inputNames.indexOf("Small Key")],
	"Small Key (Water Temple)" : inputs[inputNames.indexOf("Small Key")],
	"Small Key (Spirit Temple)" : inputs[inputNames.indexOf("Small Key")],
	"Small Key (Shadow Temple)" : inputs[inputNames.indexOf("Small Key")],
	"Small Key (Bottom of the Well)" : inputs[inputNames.indexOf("Small Key")],
	"Small Key (Gerudo Training Ground)" : inputs[inputNames.indexOf("Small Key")],
	"Small Key (Ganons Castle)" : inputs[inputNames.indexOf("Small Key")],
	"Boss Key (Forest Temple)" : inputs[inputNames.indexOf("Boss Key")],
	"Boss Key (Fire Temple)" : inputs[inputNames.indexOf("Boss Key")],
	"Boss Key (Water Temple)" : inputs[inputNames.indexOf("Boss Key")],
	"Boss Key (Spirit Temple)" : inputs[inputNames.indexOf("Boss Key")],
	"Boss Key (Shadow Temple)" : inputs[inputNames.indexOf("Boss Key")]
};

var SpoilerAreaToInput = {
	"Kokiri Forest" : "kok",
	"Lon Lon Ranch" : "ran",
	"Hyrule Field" : "fie",
	"Gerudo Valley" : "gv",
	"Lake Hylia" : "lak",
	"Market" : "mar",
	"Hyrule Castle" : "cas",
	"outside Ganon's Castle" : "ogc",
	"Temple of Time" : "tot",
	"Zora's Fountain" : "zf",
	"Ice Cavern" : "ice",
	"Deku Tree" : "dek",
	"Lost Woods" : "lw",
	"Sacred Forest Meadow" : "sfm",
	"Goron City" : "gor",
	"Dodongo's Cavern" : "dc",
	"Death Mountain Trail" : "dmt",
	"Haunted Wasteland" : "was",
	"Thieves' Hideout" : "thi",
	"Gerudo's Fortress" : "gf",
	"Kakariko Village" : "kak",
	"Graveyard" : "gra",
	"Zora's River" : "zr",
	"Zora's Domain" : "zd",
	"Desert Colossus" : "col",
	"Death Mountain Crater" : "dmc",
	"Jabu Jabu's Belly" : "jab",
	"Forest Temple" : "for",
	"Fire Temple" : "fir",
	"Water Temple" : "wat",
	"Spirit Temple" : "spi",
	"Shadow Temple" : "sha",
	"inside Ganon's Castle" : "gan",
	"Gerudo Training Ground" : "gtg",
	"Bottom of the Well" : "wel"
}

var SpoilerHintLocationToInput = {
	"ZF Bottom Freestanding PoH" : "icy",
	"LH Sun" : "ss",
	"Market 10 Big Poes" : "poe",
	"Market Treasure Chest Game Reward" : "len",
	"Kak 20 Gold Skulltula Reward" : "20",
	"Song from Royal Familys Tomb" : "cos",
	"Graveyard Royal Familys Tomb Chest" : "coi",
	"Graveyard Heart Piece Grave Chest" : "red",
	"Fire Temple Scarecrow Chest" : "sca",
	"Fire Temple Megaton Hammer Chest" : "ham",
	"Water Temple Boss Key Chest" : "wbk",
	"Water Temple River Chest" : "riv",
	"Gerudo Training Ground Maze Path Final Chest" : "fin",
	"Gerudo Training Ground Underwater Silver Rupee Chest" : "toi",
	"Bottom of the Well Dead Hand Room" : "dea",
	"Wasteland Chest" : "was",
	"Sheik at Colossus" : "req",
	"GC Pot Freestanding PoH" : "pot",
	"GC Darunias Joy" : "dan",
	"Spirit Temple Mirror Shield Chest" : "lef",
	"Spirit Temple Silver Gauntlets Chest" : "rig",
	"GC Maze Left Chest" : "goh",
	"GV Chest" : "gvh",
	"Kak Anju as Child" : "cuc",
	"Sheik in Crater" : "bol",
	"Sheik in Forest" : "min",
	"Sheik at Temple" : "pre",
	"ZD King Zora Thawed" : "kz",
	"Jabu Jabus Belly Boomerang Chest" : "boo",
	"Kak Shooting Gallery Reward" : "shoo",
	"GF HBA 1500 Points" : "1500",
	"Forest Temple Floormaster Chest" : "ffl",
	"Shadow Temple Invisible Floormaster Chest" : "sfl",
	"Sheik in Kakariko" : "noc",
	"Sheik in Ice Cavern" : "ser",
	"LW Skull Kid" : "kid",
	"DMT Biggoron" : "big",
	"Deku Theater Skull Mask" : "mas",
	"Kak 30 Gold Skulltula Reward" : "30",
	"Kak 40 Gold Skulltula Reward" : "40",
	"Kak 50 Gold Skulltula Reward" : "50",
	"ZR Frogs Ocarina Game" : "fr2",
	"HF Ocarina of Time Item" : "ooti",
	"Song from Ocarina of Time" : "oot",
	"HC Great Fairy Reward" : "cas",
	"OGC Great Fairy Reward" : "ogc",
	"LW Target in Woods" : "tar",
	"ZR Frogs in the Rain" : "fr1",
	"LH Lab Dive" : "div",
	"Water Temple Central Pillar Chest" : "pil",
	"Shadow Temple Freestanding Key" : "shpot",
	"Ice Cavern Iron Boots Chest" : "iro",
	"Ganons Castle Shadow Trial Golden Gauntlets Chest" : "sh2"
}
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
if (localStorage.getItem(controllerConfigDescriptions[6])) {document.getElementById(controllerConfigDescriptions[6]).value = localStorage.getItem(controllerConfigDescriptions[6]);}
if (localStorage.getItem(controllerConfigDescriptions[7])) {document.getElementById(controllerConfigDescriptions[7]).value = localStorage.getItem(controllerConfigDescriptions[7]);}
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
        if (document.getElementById(controllerConfigDescriptions[6]) === document.activeElement) {document.getElementById(controllerConfigDescriptions[6]).value = i; localStorage.setItem(controllerConfigDescriptions[6], document.getElementById(controllerConfigDescriptions[6]).value);}
        if (document.getElementById(controllerConfigDescriptions[7]) === document.activeElement) {document.getElementById(controllerConfigDescriptions[7]).value = i; localStorage.setItem(controllerConfigDescriptions[7], document.getElementById(controllerConfigDescriptions[7]).value);}
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
            console.log(i);
			if (document.getElementById(controllerConfigDescriptions[4]).value == i) {console.log("hi"); nextChecks.splice(nextIndex,1); pressCooldown[i][j] = true; acceptControllerInput[j] = false;}
			midUpdate();
		}
		if (document.getElementById(controllerConfigDescriptions[5]).value == i) {acceptControllerInput[j] = true; pressCooldown[i][j] = true;}
        if (document.getElementById(controllerConfigDescriptions[6]).value == i) {timerControlToD(); pressCooldown[i][j] = true; acceptControllerInput[j] = false;}
        if (document.getElementById(controllerConfigDescriptions[7]).value == i) {speedUp = !speedUp; if(speedUp) document.getElementById("timer").style.color="orange"; else document.getElementById("timer").style.color="white"; pressCooldown[i][j] = true; acceptControllerInput[j] = false;}
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
                    if (document.getElementById(controllerConfigDescriptions[6]) === document.activeElement) {document.getElementById(controllerConfigDescriptions[6]).value = i + controller.axes[i].toFixed(2); localStorage.setItem(controllerConfigDescriptions[6], document.getElementById(controllerConfigDescriptions[6]).value);}
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
if (localStorage.getItem("highlightWoths") == "true") {colorWothAreasControl();}

window.onbeforeunload = popup;
function popup() {
  return '';
}
document.documentElement.spellcheck = false;
document.getElementById("hintInput").innerHTML = "30 \n40 \n50 \noot \nnoc \nbig \nfr2 \nmas \n";
if (document.getElementById("presets").value == "SGL_2025") {
	document.getElementById("hintInput").innerHTML = "20 \n30 \n40 x\n50 x\nnoc \nfr2 \nmas \nLIGHT precomp.\n3 dual: \n6 some: \n";
	document.getElementById("preludeSpot").value = "pre";
}
if (document.getElementById("presets").value == "TRUTH")
	document.getElementById("hintInput").innerHTML = "30 \n40 \n50 \noot \nnoc \nbig \nfr2 \nmas x\ntru \n";
if (document.getElementById("presets").value == "LEAGUE_S9") {
	document.getElementById("hintInput").innerHTML = "30 \n40 \n50 \noot \nnoc \nbig \nfr2 \nmas \n";
	document.getElementById("zeldasSpot").value = "pre";
}
if (document.getElementById("presets").value == "S7" || document.getElementById("presets").value == "TRUTH") {
	document.getElementById("markChildLocation").value = "kok";
	document.getElementById("markAdultLocation").value = "tot";
}
window.addEventListener("gamepadconnected", connecthandler);
window.addEventListener("gamepaddisconnected", disconnecthandler);

if (!haveEvents) {
 setInterval(scangamepads, 500);
}
document.getElementById("linso54").style.opacity = 1;
document.getElementById("linso11").click();
document.getElementById("linso12").click();
document.getElementById("linso22").click();
document.getElementById("linso52").click();
document.getElementById("linso61").click();
Player.zeldas_letter = true;

linsoControl(); linsoControl();
setInterval(slowUpdate,3000);
setInterval(midUpdate,500);
setInterval(fastUpdate,100);
setInterval(updateControllerStatus,1000/60);
Update(); midUpdate(); midUpdate(); fastUpdate();