function highlight(x) {
	var item = "";
	if (document.getElementById(x.id).src.endsWith(Game.kokiri_sword_img.substring(2))){item = "kokiri_sword";}
	if (document.getElementById(x.id).src.endsWith(Game.bomb_img.substring(2))){item = "bomb_bag";}
	if (document.getElementById(x.id).src.endsWith(Game.iron_boots_img.substring(2))){item = "iron_boots";}
	if (document.getElementById(x.id).src.endsWith(Game.hover_boots_img.substring(2))){item = "hover_boots";}
	if (document.getElementById(x.id).src.endsWith(Game.hookshot_img.substring(2))){item = "hookshot";}
	if (document.getElementById(x.id).src.endsWith(Game.bow_img.substring(2))){item = "bow";}
	if (document.getElementById(x.id).src.endsWith(Game.goron_bracelet_img.substring(2))){item = "strength";}
	if (document.getElementById(x.id).src.endsWith(Game.hammer_img.substring(2))){item = "hammer";}
	if (document.getElementById(x.id).src.endsWith(Game.golden_scale_img.substring(2))){item = "scale";}
	if (document.getElementById(x.id).src.endsWith(Game.silver_gauntlets_img.substring(2))){item = "strength";}
	if (document.getElementById(x.id).src.endsWith(Game.magic_img.substring(2))){item = "magic";}
	if (document.getElementById(x.id).src.endsWith(Game.longshot_img.substring(2))){item = "hookshot";}
	if (document.getElementById(x.id).src.endsWith(Game.mirror_shield_img.substring(2))){item = "mirror_shield";}
	if (document.getElementById(x.id).src.endsWith(Game.dins_fire_img.substring(2))){item = "dins_fire";}
	if (document.getElementById(x.id).src.endsWith(Game.rutos_letter_img.substring(2))){item = "rutos_letter";}
	if (document.getElementById(x.id).src.endsWith(Game.boomerang_img.substring(2))){item = "boomerang";}
	if (document.getElementById(x.id).src.endsWith(Game.lens_img.substring(2))){item = "lens";}
	if (document.getElementById(x.id).src.endsWith(Game.golden_gauntlets_img.substring(2))){item = "strength";}
	if (document.getElementById(x.id).src.endsWith(Game.silver_scale_img.substring(2))){item = "scale";}
	if (document.getElementById(x.id).src.endsWith(Game.light_arrows_img.substring(2))){item = "light_arrows";}
	if (document.getElementById(x.id).src.endsWith(Game.fire_arrows_img.substring(2))){item = "fire_arrows";}
	if (document.getElementById(x.id).src.endsWith(Game.farores_wind_img.substring(2))){item = "farores_wind";}
	if (document.getElementById(x.id).src.endsWith(Game.bottle_img.substring(2))){item = "bottle";}
	if (document.getElementById(x.id).src.endsWith(Game.slingshot_img.substring(2))){item = "slingshot";}
	if (document.getElementById(x.id).src.endsWith(Game.lullaby_img.substring(2))){item = "lullaby";}
	if (document.getElementById(x.id).src.endsWith(Game.eponas_img.substring(2))){item = "eponas";}
	if (document.getElementById(x.id).src.endsWith(Game.sarias_img.substring(2))){item = "sarias";}
	if (document.getElementById(x.id).src.endsWith(Game.suns_img.substring(2))){item = "suns_song";}
	if (document.getElementById(x.id).src.endsWith(Game.time_img.substring(2))){item = "song_of_time";}
	if (document.getElementById(x.id).src.endsWith(Game.storms_img.substring(2))){item = "song_of_storms";}
	if (document.getElementById(x.id).src.endsWith(Game.minuet_img.substring(2))){item = "minuet";}
	if (document.getElementById(x.id).src.endsWith(Game.bolero_img.substring(2))){item = "bolero";}
	if (document.getElementById(x.id).src.endsWith(Game.serenade_img.substring(2))){item = "serenade";}
	if (document.getElementById(x.id).src.endsWith(Game.requiem_img.substring(2))){item = "requiem";}
	if (document.getElementById(x.id).src.endsWith(Game.nocturne_img.substring(2))){item = "nocturne";}
	if (document.getElementById(x.id).src.endsWith(Game.prelude_img.substring(2))){item = "prelude";}
	
	if (mouseInputs_locations.length != 0 && event.button == 0) {
		
		Check[mouseInputs_locations[0]] = "unknown";
		document.getElementById(mouseInputs_locations[0]).value = inputs[Items2.indexOf(item)];
		mouseInputs_locations.shift();
		Update();
		return;
	}
	
	if (event.button == 2) {
		searchingFors = document.getElementsByClassName("searchingFor_images");
		l = searchingFors.length;
		if (item == "scale" || item == "bomb_bag" || item == "bow" || item == "wallet" || item == "strength" || item == "hookshot" || item == "slingshot" || item == "magic") {item = item + '1'}
		for (i = 0; i < l; i++) {
		  if (searchingFors[i].style.display == "none") {
			  searchingFors[i].id = "searchingFor_" + item;
			  searchingFors[i].style.display = "inline-block";
			  searchingFors[i].src = event.target.src;
			  searchItems.push(ItemNames[Items.indexOf(item)])
			  break;
		  }
		}
	}
	
	else if (event.button == 0) {
	
		if (x.id == "silverscaleimg") {
			if (Game.golden_scale == true) {
				Game.scale1 = false; 
				Game.scale2 = false;
				document.getElementById(x.id).src = Game.silver_scale_img;
				x.style.opacity = .2;
			}
			else if (x.style.opacity == 1) {
				Game.scale2 = true;
				document.getElementById(x.id).src = Game.golden_scale_img;
			} 
			else {
				Game.scale1 = true;
				x.style.opacity = 1;
			}
		}
		else {
			if (x.style.opacity == 1){x.style.opacity =.2;}
			else {x.style.opacity =1;}
		}
		if (x.id == "for_med") {
			if (x.style.opacity == 1) {Logic.forest_medallion = true;}
		}
		else if (document.getElementById(x.id).style.opacity == 1) {
			if (document.getElementById(x.id).src.endsWith(Game.kokiri_sword_img.substring(2))){Game.kokiri_sword = true;}
			if (document.getElementById(x.id).src.endsWith(Game.bomb_img.substring(2))){Game.bomb_bag1 = true; }
			if (document.getElementById(x.id).src.endsWith(Game.iron_boots_img.substring(2))){Game.iron_boots = true;}
			if (document.getElementById(x.id).src.endsWith(Game.hover_boots_img.substring(2))){Game.hover_boots = true;}
			if (document.getElementById(x.id).src.endsWith(Game.hookshot_img.substring(2))){Game.hookshot1 = true;}
			if (document.getElementById(x.id).src.endsWith(Game.bow_img.substring(2))){Game.bow1 = true;}
			if (document.getElementById(x.id).src.endsWith(Game.goron_bracelet_img.substring(2))){Game.strength1 = true;}
			if (document.getElementById(x.id).src.endsWith(Game.hammer_img.substring(2))){Game.hammer = true;}
			if (document.getElementById(x.id).src.endsWith(Game.golden_scale_img.substring(2))){Game.scale2 = true;}
			if (document.getElementById(x.id).src.endsWith(Game.silver_gauntlets_img.substring(2))){Game.strength1 = true; Game.strength2 = true;}
			if (document.getElementById(x.id).src.endsWith(Game.magic_img.substring(2))){Game.magic1 = true;}
			if (document.getElementById(x.id).src.endsWith(Game.longshot_img.substring(2))){Game.hookshot1 = true; Game.hookshot2 = true;}
			if (document.getElementById(x.id).src.endsWith(Game.mirror_shield_img.substring(2))){Game.mirror_shield = true;}
			if (document.getElementById(x.id).src.endsWith(Game.dins_fire_img.substring(2))){Game.dins_fire = true;}
			if (document.getElementById(x.id).src.endsWith(Game.rutos_letter_img.substring(2))){Game.rutos_letter = true;}
			if (document.getElementById(x.id).src.endsWith(Game.boomerang_img.substring(2))){Game.boomerang = true;}
			if (document.getElementById(x.id).src.endsWith(Game.lens_img.substring(2))){Game.lens = true;}
			if (document.getElementById(x.id).src.endsWith(Game.golden_gauntlets_img.substring(2))){Game.strength1 = true; Game.strength2 = true; Game.strength3 = true;}
			if (document.getElementById(x.id).src.endsWith(Game.silver_scale_img.substring(2))){Game.scale1 = true;}
			if (document.getElementById(x.id).src.endsWith(Game.light_arrows_img.substring(2))){Game.light_arrows = true;}
			if (document.getElementById(x.id).src.endsWith(Game.fire_arrows_img.substring(2))){Game.fire_arrows = true;}
			if (document.getElementById(x.id).src.endsWith(Game.farores_wind_img.substring(2))){Game.farores_wind = true;}
			if (document.getElementById(x.id).src.endsWith(Game.bottle_img.substring(2))){Game.bottle1 = true;}
			if (document.getElementById(x.id).src.endsWith(Game.slingshot_img.substring(2))){Game.slingshot1 = true;}
			if (document.getElementById(x.id).src.endsWith(Game.lullaby_img.substring(2))){Game.lullaby = true;}
			if (document.getElementById(x.id).src.endsWith(Game.eponas_img.substring(2))){Game.eponas = true;}
			if (document.getElementById(x.id).src.endsWith(Game.sarias_img.substring(2))){Game.sarias = true;}
			if (document.getElementById(x.id).src.endsWith(Game.suns_img.substring(2))){Game.suns = true;}
			if (document.getElementById(x.id).src.endsWith(Game.time_img.substring(2))){Game.time = true;}
			if (document.getElementById(x.id).src.endsWith(Game.storms_img.substring(2))){Game.storms = true;}
			if (document.getElementById(x.id).src.endsWith(Game.minuet_img.substring(2))){Game.minuet = true;}
			if (document.getElementById(x.id).src.endsWith(Game.bolero_img.substring(2))){Game.bolero = true;}
			if (document.getElementById(x.id).src.endsWith(Game.serenade_img.substring(2))){Game.serenade = true;}
			if (document.getElementById(x.id).src.endsWith(Game.requiem_img.substring(2))){Game.requiem = true;}
			if (document.getElementById(x.id).src.endsWith(Game.nocturne_img.substring(2))){Game.nocturne = true;}
			if (document.getElementById(x.id).src.endsWith(Game.prelude_img.substring(2))){Game.prelude = true;}
		}
		else {
			if (document.getElementById(x.id).src.endsWith(Game.kokiri_sword_img.substring(2))){Game.kokiri_sword = false; }
			if (document.getElementById(x.id).src.endsWith(Game.bomb_img.substring(2))){Game.bomb_bag1 = false; }
			if (document.getElementById(x.id).src.endsWith(Game.iron_boots_img.substring(2))){Game.iron_boots = false;}
			if (document.getElementById(x.id).src.endsWith(Game.hover_boots_img.substring(2))){Game.hover_boots = false;}
			if (document.getElementById(x.id).src.endsWith(Game.hookshot_img.substring(2))){Game.hookshot1 = false; Game.hookshot2 = false;}
			if (document.getElementById(x.id).src.endsWith(Game.bow_img.substring(2))){Game.bow1 = false;}
			if (document.getElementById(x.id).src.endsWith(Game.goron_bracelet_img.substring(2))){Game.strength1 = false; Game.strength2 = false; Game.strength3 = false;}
			if (document.getElementById(x.id).src.endsWith(Game.hammer_img.substring(2))){Game.hammer = false;}
			if (document.getElementById(x.id).src.endsWith(Game.golden_scale_img.substring(2))){Game.scale2 = false;}
			if (document.getElementById(x.id).src.endsWith(Game.silver_gauntlets_img.substring(2))){Game.strength2 = false; Game.strength3 = false;}
			if (document.getElementById(x.id).src.endsWith(Game.magic_img.substring(2))){Game.magic1 = false;}
			if (document.getElementById(x.id).src.endsWith(Game.longshot_img.substring(2))){Game.hookshot2 = false;}
			if (document.getElementById(x.id).src.endsWith(Game.mirror_shield_img.substring(2))){Game.mirror_shield = false;}
			if (document.getElementById(x.id).src.endsWith(Game.dins_fire_img.substring(2))){Game.dins_fire = false;}
			if (document.getElementById(x.id).src.endsWith(Game.rutos_letter_img.substring(2))){Game.rutos_letter = false;}
			if (document.getElementById(x.id).src.endsWith(Game.boomerang_img.substring(2))){Game.boomerang = false;}
			if (document.getElementById(x.id).src.endsWith(Game.lens_img.substring(2))){Game.lens = false;}
			if (document.getElementById(x.id).src.endsWith(Game.golden_gauntlets_img.substring(2))){Game.strength3 = false;}
			if (document.getElementById(x.id).src.endsWith(Game.silver_scale_img.substring(2))){Game.scale1 = false;}
			if (document.getElementById(x.id).src.endsWith(Game.light_arrows_img.substring(2))){Game.light_arrows = false;}
			if (document.getElementById(x.id).src.endsWith(Game.fire_arrows_img.substring(2))){Game.fire_arrows = false;}
			if (document.getElementById(x.id).src.endsWith(Game.farores_wind_img.substring(2))){Game.farores_wind = false;}
			if (document.getElementById(x.id).src.endsWith(Game.bottle_img.substring(2))){Game.bottle1 = false;}
			if (document.getElementById(x.id).src.endsWith(Game.slingshot_img.substring(2))){Game.slingshot1 = false;}
			if (document.getElementById(x.id).src.endsWith(Game.lullaby_img.substring(2))){Game.lullaby = false;}
			if (document.getElementById(x.id).src.endsWith(Game.eponas_img.substring(2))){Game.eponas = false;}
			if (document.getElementById(x.id).src.endsWith(Game.sarias_img.substring(2))){Game.sarias = false;}
			if (document.getElementById(x.id).src.endsWith(Game.suns_img.substring(2))){Game.suns = Game.suns = false;}
			if (document.getElementById(x.id).src.endsWith(Game.time_img.substring(2))){Game.time = false;}
			if (document.getElementById(x.id).src.endsWith(Game.storms_img.substring(2))){Game.storms = false;}
			if (document.getElementById(x.id).src.endsWith(Game.minuet_img.substring(2))){Game.minuet = false;}
			if (document.getElementById(x.id).src.endsWith(Game.bolero_img.substring(2))){Game.bolero = false;}
			if (document.getElementById(x.id).src.endsWith(Game.serenade_img.substring(2))){Game.serenade = false;}
			if (document.getElementById(x.id).src.endsWith(Game.requiem_img.substring(2))){Game.requiem = false;}
			if (document.getElementById(x.id).src.endsWith(Game.nocturne_img.substring(2))){Game.nocturne = false;}
			if (document.getElementById(x.id).src.endsWith(Game.prelude_img.substring(2))){Game.prelude = false;}
		}
		
		
		if (x.id == "fir_med" && x.style.opacity==1) {Logic.fire_medallion = true;}
		if (x.id == "wat_med" && x.style.opacity==1) {Logic.water_medallion = true;}
		if (x.id == "spi_med" && x.style.opacity==1) {Logic.spirit_medallion = true;}
		if (x.id == "sha_med" && x.style.opacity==1) {Logic.shadow_medallion = true;}
		if (x.id == "lit_med" && x.style.opacity==1) {Logic.light_medallion = true;}
		
		if (x.id == "kok_eme" && x.style.opacity==1) {Logic.kokiri_emerald = true;}
		if (x.id == "gor_rub" && x.style.opacity==1) {Logic.goron_ruby = true;}
		if (x.id == "zor_sap" && x.style.opacity==1) {Logic.zora_sapphire = true;}
	}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function changeTheme() {
	if (Game.theme == "dark") {Game.theme = "light"}
	else {Game.theme = "dark"}
	Game.themeChange = true;
	Update();
	}
	
function whoAmI() {
	if(Person.type == "soli") {
		Person.type = "normie";
		localStorage.setItem("type", "normie");
		Game.themeChange = true;
		Update();
	}
	else if (Person.type == "normie") {
		Person.type = "soli";
		localStorage.setItem("type", "soli");
		Game.themeChange = true;
		Update();
	}
}
	
function identifyMedal(x) {
	hasChangedMedal = true;
	if (x.style.color == "yellow") {
		x.style.color = "rgb(238, 130, 238)";
	}
	else if (x.style.color == "rgb(238, 130, 238)") {
		x.style.color = "rgb(255, 165, 0)";
	}
	else if (x.style.color == "rgb(255, 165, 0)") {
		x.style.color = "yellow";
	}
}

function toggleSettings() {
	if(Logic.brackets) {
		Logic.brackets = false;
		document.getElementById("SettingsToggle").innerHTML = "Switch to Brackets";
		Update();
	}
	else {
		Logic.brackets = true;
		document.getElementById("SettingsToggle").innerHTML = "Switch to Weekly";
		Update();
	}
}

function enableChus() {
	if(Game.has_chus == false) {
		Game.has_chus = true;
		if (Person.type == "soli") {document.getElementById("chuButton").src = "./images/chuo.png";}
		else {document.getElementById("chuButton").style.opacity = 1;}
	}
	else if(Game.has_chus == true) {
		Game.has_chus = false;
		if (Person.type == "soli") {document.getElementById("chuButton").src = "./images/chux.png";}
		else {document.getElementById("chuButton").style.opacity = .4;}
	}
}

function download() {
        var a = document.body.appendChild(
            document.createElement("a")
        );
        var textToWrite = textBlock;
        a.download = "route.txt"; 
        textToWrite = textToWrite.replace(/\n/g, "%0D%0A"); 
        a.href = "data:text/plain," + textToWrite;
        a.click();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeThirdLetter(string) {
    return string.charAt(0) + string.charAt(1) + string.charAt(2).toUpperCase();
}	

function isUpperCase(str) {
    return str === str.toUpperCase();
}

function isLowerCase(str) {
    return str === str.toLowerCase();
}

function timerControl() {
	pauseFlag = true;
	if (paused) {paused = false; document.getElementById("timerControl").innerHTML = "Pause";}
	else {paused = true; document.getElementById("timerControl").innerHTML = "Resume";}
	timer_stuff();
}

function colorWothAreasControl() {
	if(!colorWothAreas)
		document.getElementById("colorWothAreasControl").innerHTML = "Plain WotHs"; 
	else
		document.getElementById("colorWothAreasControl").innerHTML = "Highlight WotHs"; 
	colorWothAreas = !colorWothAreas;
	
	Update();
}

function circusControl() {
	if (!linsoGoMode) {document.getElementById("linso54").src = "./circus-tent_1f3aa.png";}
	
	if (circus) {
		circus = false; 
		document.getElementById("circusControl").innerHTML = "Unleash Animals"; 
		if (!linsoGoMode) {document.getElementById("linso54").style.opacity = 0;
		}
	}
	
	else if (!nerfed) {
		circus = true; 
		document.getElementById("circusControl").innerHTML = "Send Back to Circus"; 
		if (!linsoGoMode) {
			document.getElementById("linso54").style.opacity = 1;
			}
	}
	
	Update();
}

function nerfControl() {
	if (nerfed) {
		document.getElementById("linso54").style.opacity = 0;
		nerfed = false; 
		document.getElementById("nerfControl").innerHTML = "Nerf My Tracker"; 
		document.getElementById("circusControl").style.display = "inline-block"; 
		document.getElementById("skullsInLogicList").style.display = "inline-block"; 
		document.getElementById("confirmed_logically_required").style.display = "inline-block";
		document.getElementById("forceIntoLogic").style.display = "inline-block";
		document.getElementById("forceLogic1").style.display = "inline-block";
		document.getElementById("forceLogic2").style.display = "inline-block";
		document.getElementById("forceLogic3").style.display = "inline-block";
		document.getElementById("forceLogic4").style.display = "inline-block";
		document.getElementById("forceOutOfLogic").style.display = "inline-block";
		document.getElementById("forceOutOfLogic1").style.display = "inline-block";
		document.getElementById("forceOutOfLogic2").style.display = "inline-block";
		document.getElementById("forceOutOfLogic3").style.display = "inline-block";
		document.getElementById("forceOutOfLogic4").style.display = "inline-block";
	}
	else {
		document.getElementById("linso54").style.opacity = 1;
		nerfed = true; 
		document.getElementById("nerfControl").innerHTML = "Buff My Tracker"; 
		document.getElementById("circusControl").style.display = "none"; 
		document.getElementById("skullsInLogicList").style.display = "none"; 
		document.getElementById("confirmed_logically_required").style.display = "none"; 
		circus = false; document.getElementById("circusControl").innerHTML = "Unleash Animals"; if (!linsoGoMode) {document.getElementById("linso54").style.opacity = 0;}
		document.getElementById("forceIntoLogic").style.display = "none";
		document.getElementById("forceLogic1").style.display = "none";
		document.getElementById("forceLogic2").style.display = "none";
		document.getElementById("forceLogic3").style.display = "none";
		document.getElementById("forceLogic4").style.display = "none";
		document.getElementById("forceOutOfLogic").style.display = "none";
		document.getElementById("forceOutOfLogic1").style.display = "none";
		document.getElementById("forceOutOfLogic2").style.display = "none";
		document.getElementById("forceOutOfLogic3").style.display = "none";
		document.getElementById("forceOutOfLogic4").style.display = "none";
	}
		
	Update();
}

function saveStuff() {
	localStorage.setItem("scrubSanity", document.getElementById("scrubSanity").value);
	localStorage.setItem("shopSanity", document.getElementById("shopSanity").value);
	localStorage.setItem("skullSanity", document.getElementById("skullSanity").value);
	localStorage.setItem("closedDeku", document.getElementById("closedDeku").value);
	localStorage.setItem("ganonBKSetting", document.getElementById("ganonBKSetting").value);
	localStorage.setItem("ganonsBridge", document.getElementById("ganonsBridge").value);
	localStorage.setItem("bosskeys", document.getElementById("bosskeys").value);
	localStorage.setItem("presets", document.getElementById("presets").value);
	localStorage.setItem("shuffleOcarinas", document.getElementById("shuffleOcarinas").value);
	localStorage.setItem("csmc", document.getElementById("csmc").value);
	localStorage.setItem("hints_type", document.getElementById("hints_type").value);
}

function linsoControl() {
	if (linso) {
		linso = false; 
		localStorage.setItem("linso", linso); 
		document.getElementById("linsoControl").innerHTML = "Show LinSo"; 
		document.getElementById("soli_woth_info").appendChild(document.getElementById("woth_info")); 
		document.getElementById("woth_info").style.top = "560px"; document.getElementById("woth_info").style.marginLeft = "0px";
		document.getElementById("confirmed_logically_required").style.top = "850px"; document.getElementById("confirmed_logically_required").style.left = "735px";
	}
	else {
		linso = true; 
		localStorage.setItem("linso", linso); 
		document.getElementById("linsoControl").innerHTML = "Hide LinSo"; 
		document.getElementById("linsoColumn").appendChild(document.getElementById("woth_info")); 
		document.getElementById("woth_info").style.top = "400px"; document.getElementById("woth_info").style.marginLeft = "3px";
		document.getElementById("confirmed_logically_required").style.top = "730px"; document.getElementById("confirmed_logically_required").style.left = "970px";
	}
}

function inaccessibleControl() {
	if (hideInaccessible) {hideInaccessible = false; localStorage.setItem("hideInaccessible", hideInaccessible); document.getElementById("inaccessibleControl").innerHTML = "Hide Inaccessible";}
	else {hideInaccessible = true; localStorage.setItem("hideInaccessible", hideInaccessible); document.getElementById("inaccessibleControl").innerHTML = "Show Inaccessible";}
}

function coopControl() {
	if (coopmode) {coopmode = false; document.getElementById("coopControl").innerHTML = "coopmode";}
	else {coopmode = true; document.getElementById("coopControl").innerHTML = "solitude"; document.getElementById("skullSanity").value = "DUNGEON"; document.getElementById("scrubSanity").value = "ON"; document.getElementById("ganonsBridge").value = "ALWAYS"; document.getElementById("ganonBKSetting").value = "LACS"; document.getElementById("shopSanity").value = 4;} 
}

function linso_counter() {
	if (event.button == 0 || token_click == 0) {Game.tokens += 1;}
	if (event.button == 2 || token_click == 2) {Game.tokens -= 1;}
	document.getElementById("linso_counter").innerHTML = "" + Game.tokens;
	token_click = 4;
	midUpdate();
}

function toggleHint(loc) {
	if(loc.id == "trade_location" && !Known["prescription"] && !Known["claim_check"])
		return;

	var theLocation = "";
	var item = "";
	if (loc.className == "logic_check_text" || loc.className == "ool_check_text" || loc.className == "access_check_text") { // song click
		theLocation = loc.id.slice(5); 
		item = Check[theLocation];
	} 
	else { // check summary text click
		item = loc.id.slice(0, -9); 
		
		if(item == "trade" && Known["prescription"])
			item = "prescription";
		else if(item == "trade" && Known["claim_check"])
			item = "claim_check";
		
		theLocation = Location[item];
	}
	
	if (item == "sos") {item = "storms";}
	if (item == "suns") {item = "suns";}
	if (item == "sot") {item = "time";}
	
	if(MarkedWotHItemArrow == null) {
		if(event.which == 1 || event.which == undefined) { // left click, toggle if this item hinted by a sometimes hint or not
			var itemText = "";
			
			if (item == "serenade") {itemText = "Serenade";} 
			else if (item == "prelude") {itemText = "Prelude"} 
			else {itemText = ItemNames[Items.indexOf(item)];}
			
			if (item != "unknown" && theLocation != "unknown") {
				Hinted[theLocation] = !Hinted[theLocation];
				
				// get the hinted text for this item and location
				if (loc.className == "logic_check_text" || loc.className == "ool_check_text" || loc.className == "access_check_text") {
					text = Names[Locations.indexOf(theLocation)] + ":  " + itemText + "<br>";
				}
				else {
					text = Names[Locations.indexOf(theLocation)] + ":  " + ItemNames[Items.indexOf(item)] + "<br>";
				}
				
				/*if (Hinted[theLocation]) { // if it is now hinted, add the hinted text
					var hintText = document.createElement("small");
					hintText.innerHTML = text;
					document.getElementById("notes").insertBefore(hintText, document.getElementById("notes").firstChild);
				}
				else { // if it is no longer hinted, remove the hinted text
					for (i = 0; i < document.getElementById("notes").children.length; i++) {
						if (document.getElementById("notes").children[i].innerHTML == text) {
							document.getElementById("notes").children[i].remove();
							break;
						}
					}
				}*/
			}
		}
		else if(event.which == 3) { // right click, toggle if you have it or not (Game dictionary)
			if(loc.id != "trade_location"){
				if(loc.innerHTML.includes("Big Poe"))
					Game.big_poe = !Game.big_poe;
			
				Game[item] = !Game[item];
			}
			else {
				if(Known["prescription"])
					Game["prescription"] = !Game["prescription"];
				else if(Known["claim_check"])
					Game["claim_check"] = !Game["claim_check"];
			}
		}
		else if(event.which == 2) { // middle click, toggle if the item is in logic or not
			if(Known[item]) {
				if(ManualOutOfLogicItems[item] == undefined || ManualOutOfLogicItems[item] == false)
					ManualOutOfLogicItems[item] = true;
				else
					ManualOutOfLogicItems[item] = false;
			}
		}
	}
	else {
		var itemToAdd = document.getElementById(MarkedWotHItemArrow).getAttribute("data-item");
		
		if(event.which == 1) {
			for (var j = 0; j < Items.length; j++) {
				if(Items[j] == itemToAdd) {
					if(ManualWotHItemLocked[Items[j]] == undefined)
						ManualWotHItemLocked[Items[j]] = [];
					if(ManualWotHItemPutInLogic[Items[j]] == undefined)
						ManualWotHItemPutInLogic[Items[j]] = [];
					if(item != itemToAdd) {
						if(ManualWotHItemPutInLogic[Items[j]].includes(item))
							ManualWotHItemPutInLogic[Items[j]].splice(ManualWotHItemPutInLogic[Items[j]].indexOf(item), 1);
						if(ManualWotHItemLocked[Items[j]].includes(item))
							ManualWotHItemLocked[Items[j]].splice(ManualWotHItemLocked[Items[j]].indexOf(item), 1);
						else
							ManualWotHItemLocked[Items[j]].push(item);
					}
				}
			}
		}
		else if(event.which == 3) {
			for (var j = 0; j < Items.length; j++) {
				if(Items[j] == itemToAdd) {
					if(ManualWotHItemPutInLogic[Items[j]] == undefined)
						ManualWotHItemPutInLogic[Items[j]] = [];
					if(ManualWotHItemLocked[Items[j]] == undefined)
						ManualWotHItemLocked[Items[j]] = [];
					if(item != itemToAdd) {
						if(ManualWotHItemLocked[Items[j]].includes(item))
							ManualWotHItemLocked[Items[j]].splice(ManualWotHItemLocked[Items[j]].indexOf(item), 1);
						if(ManualWotHItemPutInLogic[Items[j]].includes(item))
							ManualWotHItemPutInLogic[Items[j]].splice(ManualWotHItemPutInLogic[Items[j]].indexOf(item), 1);
						else
							ManualWotHItemPutInLogic[Items[j]].push(item);
					}
				}
			}
		}
		MarkedWotHItemArrow = null;
	}
	midUpdate();
}

function gs_array_builder() {
	gs[1] = Location_Logic.gs_kokiri_child;
	gs[2] = Location_Logic.gs_kokiri_soil;
	gs[3] = Location_Logic.gs_kokiri_adult;
	gs[4] = Location_Logic.gs_market;
	gs[5] = Location_Logic.gs_lost_woods_bean_1;
	gs[6] = Location_Logic.gs_lost_woods_bean_2;
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
	gs[24] = Location_Logic.gs_graveyard_soil;
	gs[25] = Location_Logic.gs_trail_soil;
	gs[26] = Location_Logic.gs_trail_bombable_wall;
	gs[27] = Location_Logic.gs_trail_hail_path;
	gs[28] = Location_Logic.gs_trail_above_dodongos;
	gs[29] = Location_Logic.gs_goron_center;
	gs[30] = Location_Logic.gs_goron_maze;
	gs[31] = Location_Logic.gs_crater_crate;
	gs[32] = Location_Logic.gs_crater_soil;
	gs[33] = Location_Logic.gs_river_ladder;
	gs[34] = Location_Logic.gs_river_near_grotto;
	gs[35] = Location_Logic.gs_river_above_bridge;
	gs[36] = Location_Logic.gs_river_tree;
	gs[37] = Location_Logic.gs_domain;
	gs[38] = Location_Logic.gs_fountain_above_log;
	gs[39] = Location_Logic.gs_fountain_tree;
	gs[40] = Location_Logic.gs_fountain_hidden_cave;
	gs[41] = Location_Logic.gs_hylia_bean;
	gs[42] = Location_Logic.gs_hylia_lab_wall;
	gs[43] = Location_Logic.gs_hylia_island;
	gs[44] = Location_Logic.gs_hylia_tree;
	gs[45] = Location_Logic.gs_hylia_lab_crate;
	gs[46] = Location_Logic.gs_valley_small_bridge;
	gs[47] = Location_Logic.gs_valley_bean;
	gs[48] = Location_Logic.gs_valley_tent;
	gs[49] = Location_Logic.gs_valley_pillar;
	gs[50] = Location_Logic.gs_fortress_archery;
	gs[51] = Location_Logic.gs_fortress_top;
	gs[52] = Location_Logic.gs_wasteland;
	gs[53] = Location_Logic.gs_colossus_soil;
	gs[54] = Location_Logic.gs_colossus_tree;
	gs[55] = Location_Logic.gs_colossus_hill;
	gs[56] = Location_Logic.gs_ogc;
	gs[57] = Location_Logic.gs_deku_basement_back;
	gs[58] = Location_Logic.gs_deku_basement_gate;
	gs[59] = Location_Logic.gs_deku_basement_vines;
	gs[60] = Location_Logic.gs_deku_compass;
	gs[61] = Location_Logic.gs_dodongos_east_side;
	gs[62] = Location_Logic.gs_dodongos_stair_vines;
	gs[63] = Location_Logic.gs_dodongos_above_stairs;
	gs[64] = Location_Logic.gs_dodongos_scarecrow;
	gs[65] = Location_Logic.gs_dodongos_before_king;
	gs[66] = Location_Logic.gs_jabu_vines;
	gs[67] = Location_Logic.gs_jabu_near_octo_1;
	gs[68] = Location_Logic.gs_jabu_near_octo_2;
	gs[69] = Location_Logic.gs_jabu_near_boss;
	gs[70] = Location_Logic.gs_forest_first;
	gs[71] = Location_Logic.gs_forest_lobby;
	gs[72] = Location_Logic.gs_forest_outdoor_east;
	gs[73] = Location_Logic.gs_forest_outdoor_west;
	gs[74] = Location_Logic.gs_forest_basement;
	gs[75] = Location_Logic.gs_fire_time;
	gs[76] = Location_Logic.gs_fire_bomb_wall;
	gs[77] = Location_Logic.gs_fire_scarecrow_1;
	gs[78] = Location_Logic.gs_fire_scarecrow_2;
	gs[79] = Location_Logic.gs_fire_basement;
	gs[80] = Location_Logic.gs_water_south_basement;
	gs[81] = Location_Logic.gs_water_river;
	gs[82] = Location_Logic.gs_water_central;
	gs[83] = Location_Logic.gs_water_near_boss_key;
	gs[84] = Location_Logic.gs_water_platform_room;
	gs[85] = Location_Logic.gs_spirit_metal_fence;
	gs[86] = Location_Logic.gs_spirit_before_child_knuckle;
	gs[87] = Location_Logic.gs_spirit_boulder_room;
	gs[88] = Location_Logic.gs_spirit_lobby;
	gs[89] = Location_Logic.gs_spirit_child_climb;
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
}

function timer_stuff() {
	var d = new Date();
	if (paused && pauseFlag) {pauseInitial = d.getTime(); pauseFlag = false;}
	if (!paused && pauseFlag) {pauseTotal += d.getTime() - pauseInitial; pauseFlag = false;}
	if (!paused) {var tempTime = Math.floor((d.getTime() - pauseTotal - initialTime)/1000);} else {var tempTime = Math.floor((pauseInitial - pauseTotal - initialTime)/1000);}
	if (paused && !timerInitialized) {var temptime = 0;} else if (!paused && !timerInitialized) {timerInitialized = true;}
	tempHours = Math.floor(tempTime / 3600);
	tempMinutes = Math.floor((tempTime % 3600) / 60);
	tempSeconds = Math.floor((tempTime % 3600) % 60);
	document.getElementById("timer").innerHTML = "";
	if (tempHours > 0) {document.getElementById("timer").innerHTML += tempHours + ":";}
	if (tempHours > 0 && tempMinutes == 0) {document.getElementById("timer").innerHTML += "00:"} if (tempMinutes > 0) {if (tempMinutes < 10 && tempHours > 0) {document.getElementById("timer").innerHTML += "0";} document.getElementById("timer").innerHTML += tempMinutes + ":";}
	if (tempSeconds < 10 && (tempMinutes > 0 || tempHours > 0)) {document.getElementById("timer").innerHTML += "0";}
	document.getElementById("timer").innerHTML += tempSeconds;
}

document.onkeydown = function(e) {
	if (e.which == 19) {
		timerControl();
	}
	if (e.ctrlKey && e.which == 90) {
		e.preventDefault();
		Undo();
	}
	if (e.which == 187) {
		token_click = 0; linso_counter();
	}
	if (e.which == 189) {
		token_click = 2; linso_counter();
	}
	if (e.ctrlKey && e.which == 65) {
		if(!nerfed)
			circusControl();
		else
			colorWothAreasControl();
	}
	if (e.which >= 112 && e.which <= 123 && e.which != 116 && e.which != 122) {
		e.preventDefault();
	}
}

document.body.onmousedown = function(e) { if (e.button === 1) return false; }

function refreshVersion() {
	var version = 21;
	var elements = document.getElementsByClassName('patchNotes');
	var currentVersion = parseInt(elements[1].id.substring(2));
	if (localStorage.getItem("version")) {version = localStorage.getItem("version");}
	for (var i = version; i <= currentVersion; i++) {
		document.getElementById("pn" + i).style.color = "orange";
		document.getElementById("pn" + i).style.fontWeight = "bold";
		document.getElementById("pn" + i).style.fontSize = "20px";
	}
	localStorage.setItem("version",currentVersion+1);
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function Undo() {
	if (Check[lastCheck[lastCheck.length-1]] == "small_key") {
		if (lastCheck[lastCheck.length-1].startsWith("forest")) {Game.current_forest_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("fire")) {Game.current_fire_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("water")) {Game.current_water_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("spirit")) {Game.current_spirit_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("shadow")) {Game.current_shadow_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("gtg")) {Game.current_gtg_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("well")) {Game.current_well_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("ganons")) {Game.current_ganons_keys -= 1;}
	}
	
	if (Check[lastCheck[lastCheck.length-1]] == "boss_key") {
		if (lastCheck[lastCheck.length-1].startsWith("forest")) {Game.forest_boss_key = false;}
		if (lastCheck[lastCheck.length-1].startsWith("fire")) {Game.fire_boss_key = false;}
		if (lastCheck[lastCheck.length-1].startsWith("water")) {Game.water_boss_key = false;}
		if (lastCheck[lastCheck.length-1].startsWith("spirit")) {Game.spirit_boss_key = false;}
		if (lastCheck[lastCheck.length-1].startsWith("shadow")) {Game.shadow_boss_key = false;}
	}

	if (Check[lastCheck[lastCheck.length-1]] != "unknown" && Check[lastCheck[lastCheck.length-1]] != "small_key" && Check[lastCheck[lastCheck.length-1]] != "boss_key")
	{
		if (lastCheck[lastCheck.length-1].startsWith("forest")) {Game.forest_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("fire")) {Game.fire_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("water")) {Game.water_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("spirit")) {Game.spirit_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("shadow")) {Game.shadow_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("gtg")) {Game.gtg_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("well")) {Game.well_checks_remaining += 1;}
		if (Check[lastCheck[lastCheck.length-1]] == "claim_check" || Check[lastCheck[lastCheck.length-1]] == "prescription") {
			document.getElementById("trade_location").innerHTML = "Trade -> ";
			document.getElementById("trade_location").style.color = "black";
		}
		else if (Check[lastCheck[lastCheck.length-1]] == "lullaby" || Check[lastCheck[lastCheck.length-1]] == "eponas" || Check[lastCheck[lastCheck.length-1]] == "sarias" || Check[lastCheck[lastCheck.length-1]] == "suns" || Check[lastCheck[lastCheck.length-1]] == "time" || Check[lastCheck[lastCheck.length-1]] == "storms" || Check[lastCheck[lastCheck.length-1]] == "minuet" || Check[lastCheck[lastCheck.length-1]] == "bolero" || Check[lastCheck[lastCheck.length-1]] == "serenade" || Check[lastCheck[lastCheck.length-1]] == "nocturne" || Check[lastCheck[lastCheck.length-1]] == "requiem" || Check[lastCheck[lastCheck.length-1]] == "prelude") {
			document.getElementById("text_" + lastCheck[lastCheck.length-1]).innerHTML = document.getElementById("text_" + lastCheck[lastCheck.length-1]).innerHTML.split(': ')[0];
			Game.checks_remaining -= 1;
		}
		else if (Check[lastCheck[lastCheck.length-1]] != "junk") {
			document.getElementById(Check[lastCheck[lastCheck.length-1]] + "_location").innerHTML = document.getElementById(Check[lastCheck[lastCheck.length-1]] + "_location").innerHTML.split('-&gt; ')[0] + "-> ";
		}
	}
	Location[Check[lastCheck[lastCheck.length-1]]] = "unknown";
	Game[Check[lastCheck[lastCheck.length-1]]] = false;
	Known[Check[lastCheck[lastCheck.length-1]]] = false;
	Logic[Check[lastCheck[lastCheck.length-1]]] = false;
	Check[lastCheck[lastCheck.length-1]] = "unknown";
	document.getElementById(lastCheck[lastCheck.length-1]).value = "";
	lastCheck.pop();
	midUpdate();
}