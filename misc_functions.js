function highlight(x) {
	if (x.id == "silverscaleimg") {
		if (Game.scale2 == true) {
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
		if (document.getElementById(x.id).src.endsWith(Game.bomb_bag_img.substring(2))){Game.bomb_bag1 = true; }
		if (document.getElementById(x.id).src.endsWith(Game.iron_boots_img.substring(2))){Game.iron_boots = true;}
		if (document.getElementById(x.id).src.endsWith(Game.hover_boots_img.substring(2))){Game.hover_boots = true;}
		if (document.getElementById(x.id).src.endsWith(Game.hookshot_img.substring(2))){Game.hookshot = true;}
		if (document.getElementById(x.id).src.endsWith(Game.bow_img.substring(2))){Game.bow1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.goron_bracelet_img.substring(2))){Game.goron_bracelet = true;}
		if (document.getElementById(x.id).src.endsWith(Game.hammer_img.substring(2))){Game.hammer = true;}
		if (document.getElementById(x.id).src.endsWith(Game.golden_scale_img.substring(2))){Game.scale2 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.silver_gauntlets_img.substring(2))){Game.silver_gauntlets = true;}
		if (document.getElementById(x.id).src.endsWith(Game.magic_meter_img.substring(2))){Game.magic1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.longshot_img.substring(2))){Game.longshot = true;}
		if (document.getElementById(x.id).src.endsWith(Game.mirror_shield_img.substring(2))){Game.mirror_shield = true;}
		if (document.getElementById(x.id).src.endsWith(Game.dins_fire_img.substring(2))){Game.dins_fire = true;}
		if (document.getElementById(x.id).src.endsWith(Game.letter_img.substring(2))){Game.rutos_letter = true;}
		if (document.getElementById(x.id).src.endsWith(Game.boomerang_img.substring(2))){Game.boomerang = true;}
		if (document.getElementById(x.id).src.endsWith(Game.lens_img.substring(2))){Game.lens_of_truth = true;}
		if (document.getElementById(x.id).src.endsWith(Game.golden_gauntlets_img.substring(2))){Game.golden_gauntlets = true;}
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
		if (document.getElementById(x.id).src.endsWith(Game.sot_img.substring(2))){Game.sot = true;}
		if (document.getElementById(x.id).src.endsWith(Game.sos_img.substring(2))){Game.sos = true;}
		if (document.getElementById(x.id).src.endsWith(Game.minuet_img.substring(2))){Game.minuet = true;}
		if (document.getElementById(x.id).src.endsWith(Game.bolero_img.substring(2))){Game.bolero = true;}
		if (document.getElementById(x.id).src.endsWith(Game.serenade_img.substring(2))){Game.serenade = true;}
		if (document.getElementById(x.id).src.endsWith(Game.requiem_img.substring(2))){Game.requiem = true;}
		if (document.getElementById(x.id).src.endsWith(Game.nocturne_img.substring(2))){Game.nocturne = true;}
		if (document.getElementById(x.id).src.endsWith(Game.prelude_img.substring(2))){Game.prelude = true;}
	}
	else {
		if (document.getElementById(x.id).src.endsWith(Game.bomb_bag_img.substring(2))){Game.bomb_bag1 = false; }
		if (document.getElementById(x.id).src.endsWith(Game.iron_boots_img.substring(2))){Game.iron_boots = false;}
		if (document.getElementById(x.id).src.endsWith(Game.hover_boots_img.substring(2))){Game.hover_boots = false;}
		if (document.getElementById(x.id).src.endsWith(Game.hookshot_img.substring(2))){Game.hookshot = false;}
		if (document.getElementById(x.id).src.endsWith(Game.bow_img.substring(2))){Game.bow1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.goron_bracelet_img.substring(2))){Game.goron_bracelet = false;}
		if (document.getElementById(x.id).src.endsWith(Game.hammer_img.substring(2))){Game.hammer = false;}
		if (document.getElementById(x.id).src.endsWith(Game.golden_scale_img.substring(2))){Game.scale2 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.silver_gauntlets_img.substring(2))){Game.silver_gauntlets = false;}
		if (document.getElementById(x.id).src.endsWith(Game.magic_meter_img.substring(2))){Game.magic1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.longshot_img.substring(2))){Game.longshot = false;}
		if (document.getElementById(x.id).src.endsWith(Game.mirror_shield_img.substring(2))){Game.mirror_shield = false;}
		if (document.getElementById(x.id).src.endsWith(Game.dins_fire_img.substring(2))){Game.dins_fire = false;}
		if (document.getElementById(x.id).src.endsWith(Game.letter_img.substring(2))){Game.rutos_letter = false;}
		if (document.getElementById(x.id).src.endsWith(Game.boomerang_img.substring(2))){Game.boomerang = false;}
		if (document.getElementById(x.id).src.endsWith(Game.lens_img.substring(2))){Game.lens_of_truth = false;}
		if (document.getElementById(x.id).src.endsWith(Game.golden_gauntlets_img.substring(2))){Game.golden_gauntlets = false;}
		if (document.getElementById(x.id).src.endsWith(Game.silver_scale_img.substring(2))){Game.scale1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.light_arrows_img.substring(2))){Game.light_arrows = false;}
		if (document.getElementById(x.id).src.endsWith(Game.fire_arrows_img.substring(2))){Game.fire_arrows = false;}
		if (document.getElementById(x.id).src.endsWith(Game.farores_wind_img.substring(2))){Game.farores_wind = false;}
		if (document.getElementById(x.id).src.endsWith(Game.bottle_img.substring(2))){Game.bottle1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.slingshot_img.substring(2))){Game.slingshot1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.lullaby_img.substring(2))){Game.lullaby = false;}
		if (document.getElementById(x.id).src.endsWith(Game.eponas_img.substring(2))){Game.eponas = false;}
		if (document.getElementById(x.id).src.endsWith(Game.sarias_img.substring(2))){Game.sarias = false;}
		if (document.getElementById(x.id).src.endsWith(Game.suns_img.substring(2))){Game.suns = false;}
		if (document.getElementById(x.id).src.endsWith(Game.sot_img.substring(2))){Game.sot = false;}
		if (document.getElementById(x.id).src.endsWith(Game.sos_img.substring(2))){Game.sos = false;}
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
	else if (Person.type == "tagnia") {
		Person.type = "soli";
		localStorage.setItem("type", "soli");
		Game.themeChange = true;
		Update();
	}
	else if (Person.type == "normie") {
		Person.type = "tagnia";
		localStorage.setItem("type", "tagnia");
		Game.themeChange = true;
		Update();
	}
}
	
function identifyMedal(x) {
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

function slowUpdate() {
	for (i=0; i < Items.length; i++) {
	ChecksLockedBy[Items[i]] = checksLockedByItem(Items[i]);
	}
	for (i=0; i < Items.length; i++) {
	if (Location[Items[i]] != null ) {ChecksPutInLogicBy[Items[i]] = checksPutInLogicByItem(Items[i]);}
	}
}

function timerControl() {
	pauseFlag = true;
	if (paused) {paused = false; document.getElementById("timerControl").innerHTML = "Pause";}
	else {paused = true; document.getElementById("timerControl").innerHTML = "Resume";}
}

function circusControl() {
	if (circus) {circus = false; document.getElementById("circusControl").innerHTML = "Unleash Animals";}
	else {circus = true; document.getElementById("circusControl").innerHTML = "Send Back to Circus";}
}

function inaccessibleControl() {
	if (hideInaccessible) {hideInaccessible = false; localStorage.setItem("hideInaccessible", hideInaccessible); document.getElementById("inaccessibleControl").innerHTML = "Hide Inaccessible";}
	else {hideInaccessible = true; localStorage.setItem("hideInaccessible", hideInaccessible); document.getElementById("inaccessibleControl").innerHTML = "Show Inaccessible";}
}

function coopControl() {
	if (coopmode) {coopmode = false; document.getElementById("coopControl").innerHTML = "coopmode";}
	else {coopmode = true; document.getElementById("coopControl").innerHTML = "solitude";}
}

function toggleHint(loc) {
	var location = "";
	var item = "";
	var itemText = "";
	if (loc.className == "logic_check_text" || loc.className == "ool_check_text" || loc.className == "access_check_text") {location = loc.id.slice(5); item = Check[location];} else {item = loc.id.slice(0, -9); location = Location[item];}
	if (item == "sos") {item = "song_of_storms";}
	if (item == "suns") {item = "suns_song";}
	if (item == "sot") {item = "song_of_time";}
	if (item == "serenade") {itemText = "Serenade";} else if (item == "prelude") {itemText = "Prelude"} else {itemText = ItemNames[Items.indexOf(item)];}
	if (item != "unknown" && location != undefined) {
		Hinted[location] = !Hinted[location];
		if (loc.className == "logic_check_text" || loc.className == "ool_check_text" || loc.className == "access_check_text") {
			text = Names[Locations.indexOf(location)] + ":  " + itemText + "<br>";
		}
		else {
			text = Names[Locations.indexOf(location)].split(":")[1].slice(1) + ":  " + ItemNames[Items.indexOf(item)] + "<br>";
		}
		if (Hinted[location]) {
			var hintText = document.createElement("small");
			hintText.innerHTML = text;
			document.getElementById("notes").insertBefore(hintText, document.getElementById("notes").firstChild);
		}
		else {
			for (i = 0; i < document.getElementById("notes").children.length; i++) {
				if (document.getElementById("notes").children[i].innerHTML == text) {
					document.getElementById("notes").children[i].remove();
					break;
				}
			}
		}
	}
}