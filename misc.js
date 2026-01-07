function highlight(x) {
	var item = "";
	if (document.getElementById(x.id).src.endsWith(Player.kokiri_sword_img.substring(2))){item = "kokiri_sword";}
	if (document.getElementById(x.id).src.endsWith(Player.bomb_img.substring(2))){item = "bomb_bag";}
	if (document.getElementById(x.id).src.endsWith(Player.iron_boots_img.substring(2))){item = "iron_boots";}
	if (document.getElementById(x.id).src.endsWith(Player.hover_boots_img.substring(2))){item = "hover_boots";}
	if (document.getElementById(x.id).src.endsWith(Player.hookshot_img.substring(2))){item = "hookshot";}
	if (document.getElementById(x.id).src.endsWith(Player.bow_img.substring(2))){item = "bow";}
	if (document.getElementById(x.id).src.endsWith(Player.goron_bracelet_img.substring(2))){item = "strength";}
	if (document.getElementById(x.id).src.endsWith(Player.hammer_img.substring(2))){item = "hammer";}
	if (document.getElementById(x.id).src.endsWith(Player.golden_scale_img.substring(2))){item = "scale";}
	if (document.getElementById(x.id).src.endsWith(Player.silver_gauntlets_img.substring(2))){item = "strength";}
	if (document.getElementById(x.id).src.endsWith(Player.magic_img.substring(2))){item = "magic";}
	if (document.getElementById(x.id).src.endsWith(Player.longshot_img.substring(2))){item = "hookshot";}
	if (document.getElementById(x.id).src.endsWith(Player.mirror_shield_img.substring(2))){item = "mirror_shield";}
	if (document.getElementById(x.id).src.endsWith(Player.dins_fire_img.substring(2))){item = "dins_fire";}
	if (document.getElementById(x.id).src.endsWith(Player.rutos_letter_img.substring(2))){item = "rutos_letter";}
	if (document.getElementById(x.id).src.endsWith(Player.boomerang_img.substring(2))){item = "boomerang";}
	if (document.getElementById(x.id).src.endsWith(Player.lens_img.substring(2))){item = "lens";}
	if (document.getElementById(x.id).src.endsWith(Player.golden_gauntlets_img.substring(2))){item = "strength";}
	if (document.getElementById(x.id).src.endsWith(Player.silver_scale_img.substring(2))){item = "scale";}
	if (document.getElementById(x.id).src.endsWith(Player.light_arrows_img.substring(2))){item = "light_arrows";}
	if (document.getElementById(x.id).src.endsWith(Player.fire_arrows_img.substring(2))){item = "fire_arrows";}
	if (document.getElementById(x.id).src.endsWith(Player.farores_wind_img.substring(2))){item = "farores_wind";}
	if (document.getElementById(x.id).src.endsWith(Player.bottle_img.substring(2))){item = "bottle";}
	if (document.getElementById(x.id).src.endsWith(Player.slingshot_img.substring(2))){item = "slingshot";}
	if (document.getElementById(x.id).src.endsWith(Player.lullaby_img.substring(2))){item = "lullaby";}
	if (document.getElementById(x.id).src.endsWith(Player.eponas_img.substring(2))){item = "eponas";}
	if (document.getElementById(x.id).src.endsWith(Player.sarias_img.substring(2))){item = "sarias";}
	if (document.getElementById(x.id).src.endsWith(Player.suns_img.substring(2))){item = "suns_song";}
	if (document.getElementById(x.id).src.endsWith(Player.time_img.substring(2))){item = "song_of_time";}
	if (document.getElementById(x.id).src.endsWith(Player.storms_img.substring(2))){item = "song_of_storms";}
	if (document.getElementById(x.id).src.endsWith(Player.minuet_img.substring(2))){item = "minuet";}
	if (document.getElementById(x.id).src.endsWith(Player.bolero_img.substring(2))){item = "bolero";}
	if (document.getElementById(x.id).src.endsWith(Player.serenade_img.substring(2))){item = "serenade";}
	if (document.getElementById(x.id).src.endsWith(Player.requiem_img.substring(2))){item = "requiem";}
	if (document.getElementById(x.id).src.endsWith(Player.nocturne_img.substring(2))){item = "nocturne";}
	if (document.getElementById(x.id).src.endsWith(Player.prelude_img.substring(2))){item = "prelude";}
	
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
		flag = false;
		if (item == "scale" || item == "bomb_bag" || item == "bow" || item == "wallet" || item == "strength" || item == "hookshot" || item == "slingshot" || item == "magic") {item = item + '1'}
		if (!searchItems.includes(ItemNames[Items.indexOf(item)])) {
			for (i = 0; i < l; i++) {
				if (searchingFors[i].id == "searchingFor_" + item) {
					searchingFors[i].style.display = "inline-block";
					searchingFors[i].src = event.target.src;
					searchItems.push(ItemNames[Items.indexOf(item)])
					flag = true;
					break;
				}
			}
			if (!flag) {
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
		}
		else {
			for (i = 0; i < l; i++) {
			  if (searchingFors[i].id == "searchingFor_" + item) {
				  searchingFors[i].style.display = "none";
				  searchItems.splice(searchItems.indexOf(ItemNames[Items.indexOf(item)]),1)
				  break;
			  }
			}
		}
	}
	
	else if (event.button == 0) {
	
		if (x.id == "silverscaleimg") {
			if (Player.golden_scale == true) {
				Player.scale1 = false; 
				Player.scale2 = false;
				document.getElementById(x.id).src = Player.silver_scale_img;
				x.style.opacity = .2;
			}
			else if (x.style.opacity == 1) {
				Player.scale2 = true;
				document.getElementById(x.id).src = Player.golden_scale_img;
			} 
			else {
				Player.scale1 = true;
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
			if (document.getElementById(x.id).src.endsWith(Player.kokiri_sword_img.substring(2))){Player.kokiri_sword = true;}
			if (document.getElementById(x.id).src.endsWith(Player.bomb_img.substring(2))){Player.bomb_bag1 = true; }
			if (document.getElementById(x.id).src.endsWith(Player.iron_boots_img.substring(2))){Player.iron_boots = true;}
			if (document.getElementById(x.id).src.endsWith(Player.hover_boots_img.substring(2))){Player.hover_boots = true;}
			if (document.getElementById(x.id).src.endsWith(Player.hookshot_img.substring(2))){Player.hookshot1 = true;}
			if (document.getElementById(x.id).src.endsWith(Player.bow_img.substring(2))){Player.bow1 = true;}
			if (document.getElementById(x.id).src.endsWith(Player.goron_bracelet_img.substring(2))){Player.strength1 = true;}
			if (document.getElementById(x.id).src.endsWith(Player.hammer_img.substring(2))){Player.hammer = true;}
			if (document.getElementById(x.id).src.endsWith(Player.golden_scale_img.substring(2))){Player.scale1 = true; Player.scale2 = true;}
			if (document.getElementById(x.id).src.endsWith(Player.silver_gauntlets_img.substring(2))){Player.strength1 = true; Player.strength2 = true;}
			if (document.getElementById(x.id).src.endsWith(Player.magic_img.substring(2))){Player.magic1 = true;}
			if (document.getElementById(x.id).src.endsWith(Player.longshot_img.substring(2))){Player.hookshot1 = true; Player.hookshot2 = true;}
			if (document.getElementById(x.id).src.endsWith(Player.mirror_shield_img.substring(2))){Player.mirror_shield = true;}
			if (document.getElementById(x.id).src.endsWith(Player.dins_fire_img.substring(2))){Player.dins_fire = true;}
			if (document.getElementById(x.id).src.endsWith(Player.rutos_letter_img.substring(2))){Player.rutos_letter = true;}
			if (document.getElementById(x.id).src.endsWith(Player.boomerang_img.substring(2))){Player.boomerang = true;}
			if (document.getElementById(x.id).src.endsWith(Player.lens_img.substring(2))){Player.lens = true;}
			if (document.getElementById(x.id).src.endsWith(Player.golden_gauntlets_img.substring(2))){Player.strength1 = true; Player.strength2 = true; Player.strength3 = true;}
			if (document.getElementById(x.id).src.endsWith(Player.silver_scale_img.substring(2))){Player.scale1 = true;}
			if (document.getElementById(x.id).src.endsWith(Player.light_arrows_img.substring(2))){Player.light_arrows = true;}
			if (document.getElementById(x.id).src.endsWith(Player.fire_arrows_img.substring(2))){Player.fire_arrows = true;}
			if (document.getElementById(x.id).src.endsWith(Player.farores_wind_img.substring(2))){Player.farores_wind = true;}
			if (document.getElementById(x.id).src.endsWith(Player.bottle_img.substring(2))){Player.bottle1 = true;}
			if (document.getElementById(x.id).src.endsWith(Player.slingshot_img.substring(2))){Player.slingshot1 = true;}
			if (document.getElementById(x.id).src.endsWith(Player.lullaby_img.substring(2))){Player.lullaby = true;}
			if (document.getElementById(x.id).src.endsWith(Player.eponas_img.substring(2))){Player.eponas = true;}
			if (document.getElementById(x.id).src.endsWith(Player.sarias_img.substring(2))){Player.sarias = true;}
			if (document.getElementById(x.id).src.endsWith(Player.suns_img.substring(2))){Player.suns = true;}
			if (document.getElementById(x.id).src.endsWith(Player.time_img.substring(2))){Player.time = true;}
			if (document.getElementById(x.id).src.endsWith(Player.storms_img.substring(2))){Player.storms = true;}
			if (document.getElementById(x.id).src.endsWith(Player.minuet_img.substring(2))){Player.minuet = true;}
			if (document.getElementById(x.id).src.endsWith(Player.bolero_img.substring(2))){Player.bolero = true;}
			if (document.getElementById(x.id).src.endsWith(Player.serenade_img.substring(2))){Player.serenade = true;}
			if (document.getElementById(x.id).src.endsWith(Player.requiem_img.substring(2))){Player.requiem = true;}
			if (document.getElementById(x.id).src.endsWith(Player.nocturne_img.substring(2))){Player.nocturne = true;}
			if (document.getElementById(x.id).src.endsWith(Player.prelude_img.substring(2))){Player.prelude = true;}
		}
		else {
			if (document.getElementById(x.id).src.endsWith(Player.kokiri_sword_img.substring(2))){Player.kokiri_sword = false; }
			if (document.getElementById(x.id).src.endsWith(Player.bomb_img.substring(2))){Player.bomb_bag1 = false; }
			if (document.getElementById(x.id).src.endsWith(Player.iron_boots_img.substring(2))){Player.iron_boots = false;}
			if (document.getElementById(x.id).src.endsWith(Player.hover_boots_img.substring(2))){Player.hover_boots = false;}
			if (document.getElementById(x.id).src.endsWith(Player.hookshot_img.substring(2))){Player.hookshot1 = false; Player.hookshot2 = false;}
			if (document.getElementById(x.id).src.endsWith(Player.bow_img.substring(2))){Player.bow1 = false;}
			if (document.getElementById(x.id).src.endsWith(Player.goron_bracelet_img.substring(2))){Player.strength1 = false; Player.strength2 = false; Player.strength3 = false;}
			if (document.getElementById(x.id).src.endsWith(Player.hammer_img.substring(2))){Player.hammer = false;}
			if (document.getElementById(x.id).src.endsWith(Player.golden_scale_img.substring(2))){Player.scale2 = false;}
			if (document.getElementById(x.id).src.endsWith(Player.silver_gauntlets_img.substring(2))){Player.strength2 = false; Player.strength3 = false;}
			if (document.getElementById(x.id).src.endsWith(Player.magic_img.substring(2))){Player.magic1 = false;}
			if (document.getElementById(x.id).src.endsWith(Player.longshot_img.substring(2))){Player.hookshot2 = false;}
			if (document.getElementById(x.id).src.endsWith(Player.mirror_shield_img.substring(2))){Player.mirror_shield = false;}
			if (document.getElementById(x.id).src.endsWith(Player.dins_fire_img.substring(2))){Player.dins_fire = false;}
			if (document.getElementById(x.id).src.endsWith(Player.rutos_letter_img.substring(2))){Player.rutos_letter = false;}
			if (document.getElementById(x.id).src.endsWith(Player.boomerang_img.substring(2))){Player.boomerang = false;}
			if (document.getElementById(x.id).src.endsWith(Player.lens_img.substring(2))){Player.lens = false;}
			if (document.getElementById(x.id).src.endsWith(Player.golden_gauntlets_img.substring(2))){Player.strength3 = false;}
			if (document.getElementById(x.id).src.endsWith(Player.silver_scale_img.substring(2))){Player.scale1 = false;}
			if (document.getElementById(x.id).src.endsWith(Player.light_arrows_img.substring(2))){Player.light_arrows = false;}
			if (document.getElementById(x.id).src.endsWith(Player.fire_arrows_img.substring(2))){Player.fire_arrows = false;}
			if (document.getElementById(x.id).src.endsWith(Player.farores_wind_img.substring(2))){Player.farores_wind = false;}
			if (document.getElementById(x.id).src.endsWith(Player.bottle_img.substring(2))){Player.bottle1 = false;}
			if (document.getElementById(x.id).src.endsWith(Player.slingshot_img.substring(2))){Player.slingshot1 = false;}
			if (document.getElementById(x.id).src.endsWith(Player.lullaby_img.substring(2))){Player.lullaby = false;}
			if (document.getElementById(x.id).src.endsWith(Player.eponas_img.substring(2))){Player.eponas = false;}
			if (document.getElementById(x.id).src.endsWith(Player.sarias_img.substring(2))){Player.sarias = false;}
			if (document.getElementById(x.id).src.endsWith(Player.suns_img.substring(2))){Player.suns = Player.suns = false;}
			if (document.getElementById(x.id).src.endsWith(Player.time_img.substring(2))){Player.time = false;}
			if (document.getElementById(x.id).src.endsWith(Player.storms_img.substring(2))){Player.storms = false;}
			if (document.getElementById(x.id).src.endsWith(Player.minuet_img.substring(2))){Player.minuet = false;}
			if (document.getElementById(x.id).src.endsWith(Player.bolero_img.substring(2))){Player.bolero = false;}
			if (document.getElementById(x.id).src.endsWith(Player.serenade_img.substring(2))){Player.serenade = false;}
			if (document.getElementById(x.id).src.endsWith(Player.requiem_img.substring(2))){Player.requiem = false;}
			if (document.getElementById(x.id).src.endsWith(Player.nocturne_img.substring(2))){Player.nocturne = false;}
			if (document.getElementById(x.id).src.endsWith(Player.prelude_img.substring(2))){Player.prelude = false;}
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

function highlightDungeonEntrance(element) {
	idx = parseInt(element.dataset.idx, 10);
	if (Number.isNaN(idx) || idx < 0 || idx >= dungs_colors.length) return;

	if (event.button == 0) {  // left click
		// If strike-though, don't bother changing color.
		if (dungs_strike[idx] == "line-through") return;

		new_color = dungs_colors[idx] == "white" ? "yellow" : "white";
		dungs_colors[idx] = new_color;
		element.style.color = new_color;
	} if (event.button == 2) {  // right click
		strike = dungs_strike[idx] == "none" ? "line-through" : "none";
		dungs_strike[idx] = strike;
		element.style.textDecoration = strike;
		element.style.color = strike == "none" ? dungs_colors[idx] : "gray";
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
	if (Player.theme == "dark") {Player.theme = "light"}
	else {Player.theme = "dark"}
	Player.themeChange = true;
	Update();
	}
function trackAnimalQuest() {
	questCounter += 1;
  document.getElementById("quest1").disabled = true;
  if (lastCheck[lastCheck.length-1].startsWith("forest_")) forestItems+=1;
  
  if (forestItems >= 4
  && !quest1Flag
  && document.getElementById("quest1").style.display != "none"
  && document.getElementById("quest1").value == "4ForestItems") {
    quest1Flag = true;
    if (!simActive) quest1Mults[animalRNG] += 0.21;
    else quest1Mults[animalRNG] += 0.21/4;
    localStorage.setItem("quest1Mults", JSON.stringify(quest1Mults));
  }
  
  if (Player.slingshot
  && !Player.bomb_bag 
  && !quest1Flag
  && document.getElementById("quest1").style.display != "none"
  && document.getElementById("quest1").value == "slingshotBeforeBombbag") {
    quest1Flag = true;
    if (!simActive) quest1Mults[animalRNG] += 0.07;
    else quest1Mults[animalRNG] += 0.07/4;
    localStorage.setItem("quest1Mults", JSON.stringify(quest1Mults));
  }
  
  if (Player.bomb_bag3
  && Player.slingshot3
  && !quest1Flag
  && document.getElementById("quest1").style.display != "none"
  && document.getElementById("quest1").value == "3BombbagsAnd3Slingshots") {
    quest1Flag = true;
    if (!simActive) quest1Mults[animalRNG] += 0.14;
    else quest1Mults[animalRNG] += 0.14/4;
    localStorage.setItem("quest1Mults", JSON.stringify(quest1Mults));
  }
  
  if (Player.nocturne && Math.random() < Math.min(rolledAnimalsLevel/200,0.125) && !yamiFailFlag) {
    document.getElementById("linso54").style.filter = "brightness(1.5) invert(100%)"; 
    yamiFlag = true;
  }
  else if (Player.nocturne) {
    yamiFailFlag = true;
  }
  
  if (Player.requiem && Math.random() < Math.min(rolledAnimalsLevel/200,0.125) && !angelFailFlag) {
    angelFlag = true;
    document.getElementById('halo').style.opacity = 1;
  }
  else if (Player.requiem) {
    angelFailFlag = true;
  }
    
	if (questCounter >= 20) {     
    if (simActive && document.getElementById("simSeed").value > 0) document.getElementById("simSeed").value =  parseInt(document.getElementById("simSeed").value) + 1;
    
		if (!simActive) savedAnimalXP[animalRNG] += 1;
    else savedAnimalXP[animalRNG] += 0.25;
		questCounter = -100000
		localStorage.setItem("animalXP", JSON.stringify(savedAnimalXP));
	}
  
  if (questCounter <-9000 && yamiFlag && !yamiFlagFlag) {
    if (!simActive) yamiMults[animalRNG] += 0.2;
    else yamiMults[animalRNG] += 0.2/4;
    yamiFlagFlag = true;
    yamiMults[animalRNG] = parseFloat(yamiMults[animalRNG].toFixed(1))
    localStorage.setItem("yamiMults", JSON.stringify(yamiMults));
  }
  
  if (questCounter <-9000 && angelFlag && !angelFlagFlag) {
    if (!simActive) angelMults[animalRNG] += 0.2;
    else angelMults[animalRNG] += 0.2/4;
    angelFlagFlag = true;
    angelMults[animalRNG] = parseFloat(angelMults[animalRNG].toFixed(1))
    localStorage.setItem("angelMults", JSON.stringify(angelMults));
  }
  
  if (questCounter <-9000 && rainbowFlag && !rainbowFlagFlag) {
    if (!simActive) rainbowMults[animalRNG] += 1;
    else rainbowMults[animalRNG] += 1/4;
    rainbowFlagFlag = true;
    localStorage.setItem("rainbowMults", JSON.stringify(rainbowMults));
  }
}	
function whoAmI() {
	if(Person.type == "soli") {
		Person.type = "normie";
		localStorage.setItem("type", "normie");
		Player.themeChange = true;
		Update();
	}
	else if (Person.type == "normie") {
		Person.type = "soli";
		localStorage.setItem("type", "soli");
		Player.themeChange = true;
		Update();
	}
}

function altThemeControl() {
	if (colorTheme == "dark") {colorTheme = "light"; localStorage.setItem("theme", colorTheme); document.getElementById("altThemeControl").innerHTML = "Light Theme";}
	else {colorTheme = "dark"; localStorage.setItem("theme", colorTheme); document.getElementById("altThemeControl").innerHTML = "Dark Theme";}
}

function wothSizeToggle() {
	button = document.getElementById("wothSizeToggle");

	isBig = document.getElementById("woth_info").classList.toggle("big");
	if (isBig) {
		button.textContent = "Small WotH Font";
		localStorage.setItem("wothSize", "big");
	} else {
		button.textContent = "Large WotH Font";
		localStorage.setItem("wothSize", "small");
	}
}

function areaTitlesToggle() {
	// This assumes all titles are in the same state; either all hidden or all visible.
	columns = ["normalColumn1", "normalColumn2", "normalColumn3"];
	columns.forEach(columnStr => {
		column = document.getElementById(columnStr);
		area_titles = column.querySelectorAll(".area_titles");
		area_titles.forEach(element => {
			element.classList.toggle("hidden");
		});

		area_titles_breaks = column.querySelectorAll(".area_titles_break");
		area_titles_breaks.forEach(element => {
			element.classList.toggle("hidden");
		});
	})

	button = document.getElementById("areaTitlesToggle");
	isHidden = document.getElementById("title_kokiri").classList.contains("hidden");
	if (isHidden) {
		button.textContent = "Show Location Headers";
		localStorage.setItem("showAreaTitles", "false");
	} else {
		button.textContent = "Hide Location Headers";
		localStorage.setItem("showAreaTitles", "true");
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
	if(Player.has_chus == false) {
		Player.has_chus = true;
		if (Person.type == "soli") {document.getElementById("chuButton").src = "./images/chuo.png";}
		else {document.getElementById("chuButton").style.opacity = 1;}
		
		document.getElementById("linso23").click();
	}
	else if(Player.has_chus == true) {
		Player.has_chus = false;
		if (Person.type == "soli") {document.getElementById("chuButton").src = "./images/chux.png";}
		else {document.getElementById("chuButton").style.opacity = .4;}
		
		document.getElementById("linso23").click();
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

function isLetter(s){
	return s.match("^[a-zA-Z\(\)]+$");    
}

function isUpperCase(str) {
	if(!isLetter(str))
		return false;
	return str === str.toUpperCase();
}

function isLowerCase(str) {
	if(!isLetter(str))
		return false;
	return str === str.toLowerCase();
}

function timerControl() {
	pauseFlag = true;
	if (paused) {paused = false; document.getElementById("timerControl").innerHTML = "Pause";}
	else {paused = true; document.getElementById("timerControl").innerHTML = "Resume";}
	timerStuff();
}

function timerControlToD() {
	pauseFlagToD = true;
	if (pausedToD) {pausedToD = false;}
	else {pausedToD = true;}
	timerToD(-1);
}

function colorWothAreasControl() {
	colorWothAreas = !colorWothAreas;
	if(colorWothAreas)
		document.getElementById("colorWothAreasControl").innerHTML = "Plain WotHs"; 
	else
		document.getElementById("colorWothAreasControl").innerHTML = "Highlight WotHs"; 
	
	Update();
}

function hamsdaToggle() {
	hamsda = !hamsda;
	localStorage.setItem("hamsda", hamsda);
	if (!hamsda)
		document.getElementById("hamsdaToggle").innerHTML = "Enable Hamsda Tracking"; 
	else
		document.getElementById("hamsdaToggle").innerHTML = "Disable Hamsda Tracking"; 
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
	localStorage.setItem("cowSanity", document.getElementById("cowSanity").value);
	localStorage.setItem("closedDeku", document.getElementById("closedDeku").value);
	localStorage.setItem("closedFountain", document.getElementById("closedFountain").value);
	localStorage.setItem("blueFireArrows", document.getElementById("blueFireArrows").value);
	localStorage.setItem("keysanity", document.getElementById("keysanity").value);
	localStorage.setItem("ganonBKSetting", document.getElementById("ganonBKSetting").value);
	localStorage.setItem("ganonsBridge", document.getElementById("ganonsBridge").value);
	localStorage.setItem("bosskeys", document.getElementById("bosskeys").value);
	localStorage.setItem("presets", document.getElementById("presets").value);
	localStorage.setItem("shuffleOcarinas", document.getElementById("shuffleOcarinas").value);
	localStorage.setItem("shuffleGerudoCard", document.getElementById("shuffleGerudoCard").value);
	localStorage.setItem("shuffleBeanPack", document.getElementById("shuffleBeanPack").value);
	localStorage.setItem("preplantedBeans", document.getElementById("preplantedBeans").value);
	localStorage.setItem("shuffleExpensivePurchases", document.getElementById("shuffleExpensivePurchases").value);
	localStorage.setItem("csmc", document.getElementById("csmc").value);
	localStorage.setItem("erOption", document.getElementById("erOption").value);
	localStorage.setItem("FAE_option", document.getElementById("FAE_option").value);
	localStorage.setItem("hints_type", document.getElementById("hints_type").value);
  localStorage.setItem("simSeed", document.getElementById("simSeed").value);
  localStorage.setItem("desiredAnimal", document.getElementById("desiredAnimal").value);
  localStorage.setItem("quest1", document.getElementById("quest1").value);
	localStorage.setItem("highlightWoths", colorWothAreas);
}

function linsoControl() {
	if (linso) {
		linso = false; 
		localStorage.setItem("linso", linso); 
		document.getElementById("linsoControl").innerHTML = "Show LinSo"; 
		document.getElementById("soli_woth_info").appendChild(document.getElementById("woth_info")); 
		document.getElementById("woth_info").style.top = "560px"; document.getElementById("woth_info").style.marginLeft = "0px";
		document.getElementById("confirmed_logically_required").style.top = "850px"; document.getElementById("confirmed_logically_required").style.left = "735px";
    document.getElementById("checkSummaryColumn2").style.top = "-320px"; document.getElementById("checkSummaryColumn2").style.left = "250px";
    
	}
	else {
		linso = true; 
		localStorage.setItem("linso", linso); 
		document.getElementById("linsoControl").innerHTML = "Hide LinSo"; 
		document.getElementById("linsoColumn").appendChild(document.getElementById("woth_info")); 
		document.getElementById("woth_info").style.top = "400px"; document.getElementById("woth_info").style.marginLeft = "3px";
		document.getElementById("confirmed_logically_required").style.top = "730px"; document.getElementById("confirmed_logically_required").style.left = "970px";
    document.getElementById("checkSummaryColumn2").style.top = "0px"; document.getElementById("checkSummaryColumn2").style.left = "0px";
	}
}

function inaccessibleControl() {
	if (hideInaccessible) {hideInaccessible = false; localStorage.setItem("hideInaccessible", hideInaccessible); document.getElementById("inaccessibleControl").innerHTML = "Hide Inaccessible";}
	else {hideInaccessible = true; localStorage.setItem("hideInaccessible", hideInaccessible); document.getElementById("inaccessibleControl").innerHTML = "Show Inaccessible";}
}

function coopControl() {
	if (coopmode) {coopmode = false; document.getElementById("coopControl").innerHTML = "coopmode";}
	else {coopmode = true; document.getElementById("coopControl").innerHTML = "solitude"; document.getElementById("skullSanity").value = "DUNGEON"; document.getElementById("scrubSanity").value = "ON"; document.getElementById("ganonsBridge").value = "OPEN"; document.getElementById("ganonBKSetting").value = "LACS"; document.getElementById("shopSanity").value = 4;} 
}

function linso_counter() {
	if (event.button == 0 || token_click == 0) {Player.tokens += 1;}
	if (event.button == 2 || token_click == 2) {Player.tokens -= 1;}
	document.getElementById("linso_counter").innerHTML = "" + Player.tokens;
	token_click = 4;
	midUpdate();
}

function toggleHint(loc) {
	if(loc.id == "trade_location" && !Known["prescription"] && !Known["claim_check"])
		return;

	var theLocation = "";
	var item = "";
	var thisIsASong = false;
	if (loc.className == "logic_check_text" || loc.className == "ool_check_text" || loc.className == "access_check_text" || loc.className == "known_check_text") { // song click
		theLocation = loc.id.slice(5); 
		item = Check[theLocation];
		thisIsASong = true;
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
		if(!event.ctrlKey && (event.which == 1 || event.which == undefined)) { // left click, toggle if this item hinted by a sometimes hint or not
			if(!simActive || simOverride) {
			
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
			else {
				var input = "";
				var temp_item = "";
				if(SpoilerJSON["locations"][LocationToSpoilerName[theLocation]]["item"] != undefined) {
					input = SpoilerItemToInput[SpoilerJSON["locations"][LocationToSpoilerName[theLocation]]["item"]];
					temp_item = SpoilerJSON["locations"][LocationToSpoilerName[theLocation]]["item"];
				}
				else if (SpoilerItemToInput[SpoilerJSON["locations"][LocationToSpoilerName[theLocation]]] != undefined) {
					input = SpoilerItemToInput[SpoilerJSON["locations"][LocationToSpoilerName[theLocation]]];
					temp_item = SpoilerJSON["locations"][LocationToSpoilerName[theLocation]];
				}
				else {
					input = "pre";
					temp_item = SpoilerJSON["locations"][LocationToSpoilerName[theLocation]];
				}
				
				if(Check[theLocation] != "unknown") {
					if(loc.id != "trade_location"){
						if(loc.innerHTML.includes("Big Poe"))
							Player.big_poe = !Player.big_poe;
					
						Player[item] = !Player[item];
					}
					else {
						if(Known["prescription"])
							Player["prescription"] = !Player["prescription"];
						else if(Known["claim_check"])
							Player["claim_check"] = !Player["claim_check"];
					}
				}
				else {
					document.getElementById(theLocation).value = input;
					document.getElementById("simLog").value = LocationToSpoilerName[theLocation] + " -> " + temp_item + "\n" + document.getElementById("simLog").value;
				}
			}
		}
		else if(event.which == 3) { // right click, toggle if you have it or not (Game dictionary)
			if(!simActive || Check[theLocation] != "unknown" || !thisIsASong) {
				if(loc.id != "trade_location"){
					if(loc.innerHTML.includes("Big Poe"))
						Player.big_poe = !Player.big_poe;
				
					Player[item] = !Player[item];
				}
				else {
					if(Known["prescription"])
						Player["prescription"] = !Player["prescription"];
					else if(Known["claim_check"])
						Player["claim_check"] = !Player["claim_check"];
				}
			}
		}
		else if(event.which == 2) { // middle click, toggle if the item is in logic or not
			if(Known[item]) {
				if((ManualInLogicItems[item] == undefined || ManualInLogicItems[item] == false) && (ManualOutOfLogicItems[item] == undefined || ManualOutOfLogicItems[item] == false)) {
					ManualInLogicItems[item] = true;
					ManualOutOfLogicItems[item] = false;
				}
				else if (ManualInLogicItems[item] == true) {
					ManualOutOfLogicItems[item] = true;
					ManualInLogicItems[item] = false;
				}
				else {
					ManualInLogicItems[item] = false;
					ManualOutOfLogicItems[item] = false;
				}
			}
		}
		else if(event.ctrlKey && event.which == 1) {
			
			if (Check[theLocation] == "small_key") {
				if (theLocation.startsWith("forest")) {Player.current_forest_keys -= 1;}
				if (theLocation.startsWith("fire")) {Player.current_fire_keys -= 1;}
				if (theLocation.startsWith("water")) {Player.current_water_keys -= 1;}
				if (theLocation.startsWith("spirit")) {Player.current_spirit_keys -= 1;}
				if (theLocation.startsWith("shadow")) {Player.current_shadow_keys -= 1;}
				if (theLocation.startsWith("gtg")) {Player.current_gtg_keys -= 1;}
				if (theLocation.startsWith("well")) {Player.current_well_keys -= 1;}
				if (theLocation.startsWith("ganons")) {Player.current_ganons_keys -= 1;}
			}
			
			if (Check[theLocation] == "boss_key") {
				if (theLocation.startsWith("forest")) {Player.forest_boss_key = false;}
				if (theLocation.startsWith("fire")) {Player.fire_boss_key = false;}
				if (theLocation.startsWith("water")) {Player.water_boss_key = false;}
				if (theLocation.startsWith("spirit")) {Player.spirit_boss_key = false;}
				if (theLocation.startsWith("shadow")) {Player.shadow_boss_key = false;}
			}

			if (Check[theLocation] != "unknown" && Check[theLocation] != "small_key" && Check[theLocation] != "boss_key")
			{
				if (theLocation.startsWith("forest")) {Player.forest_checks_remaining += 1;}
				if (theLocation.startsWith("fire")) {Player.fire_checks_remaining += 1;}
				if (theLocation.startsWith("water")) {Player.water_checks_remaining += 1;}
				if (theLocation.startsWith("spirit")) {Player.spirit_checks_remaining += 1;}
				if (theLocation.startsWith("shadow")) {Player.shadow_checks_remaining += 1;}
				if (theLocation.startsWith("gtg")) {Player.gtg_checks_remaining += 1;}
				if (theLocation.startsWith("well")) {Player.well_checks_remaining += 1;}
				if (Check[theLocation] == "claim_check" || Check[theLocation] == "prescription") {
					document.getElementById("trade_location").innerHTML = "Trade &#8594; ";
				}
				else if (Check[theLocation] == "lullaby" || Check[theLocation] == "eponas" || Check[theLocation] == "sarias" || Check[theLocation] == "suns" || Check[theLocation] == "time" || Check[theLocation] == "storms" || Check[theLocation] == "minuet" || Check[theLocation] == "bolero" || Check[theLocation] == "serenade" || Check[theLocation] == "nocturne" || Check[theLocation] == "requiem" || Check[theLocation] == "prelude") {
					document.getElementById("text_" + theLocation).innerHTML = document.getElementById("text_" + theLocation).innerHTML.split(': ')[0];
					Player.checks_remaining -= 1;
				}
				else if (Check[theLocation] != "junk" && Check[theLocation] != "ultra") {
					document.getElementById(Check[theLocation] + "_location").innerHTML = checkSummaryText[Items.findIndex(element => element == Check[theLocation])] + " &#8594; ";
				}
			}
			
			forcedDisplay[Locations.indexOf(theLocation)] = false;
			for (var i = 0; i < AreaIndexes.length; i++) {
				if (Locations.indexOf(theLocation) >= AreaIndexes[i] && Locations.indexOf(theLocation) < AreaIndexes[i+1]) {document.getElementById(theLocation).style.backgroundImage = backgrounds[i]; break;}
			}
			
			Location[Check[theLocation]] = "unknown";
			Player[Check[theLocation]] = false;
			Known[Check[theLocation]] = false;
			Logic[Check[theLocation]] = false;
			Check[theLocation] = "unknown";
			document.getElementById(theLocation).value = "";
			
			var t = lastCheck.indexOf(theLocation);
			if (t > -1) {
			  lastCheck.splice(t, 1);
			}
			
			midUpdate();
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

function gsArrayBuilder() {
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

function timerStuff() {
	var d = new Date();
	if (paused && pauseFlag) {pauseInitial = d.getTime(); pauseFlag = false;}
	if (!paused && pauseFlag) {pauseTotal += d.getTime() - pauseInitial; pauseFlag = false;}
	if (!paused) {if (speedUp) {speedUpTotal += 1;} timeTotal+=1; effectiveSpeedUp = (document.getElementById("timerMultiplier").value-1)*speedUpTotal/timeTotal+1; var tempTime = Math.floor((d.getTime() - pauseTotal - initialTime)*effectiveSpeedUp/1000);} else {var tempTime = Math.floor((pauseInitial - pauseTotal - initialTime)*document.getElementById("timerMultiplier").value/1000);}
	if (paused && !timerInitialized) {var temptime = 0;} else if (!paused && !timerInitialized) {timerInitialized = true;}
	tempHours = Math.floor(tempTime / 3600);
	tempMinutes = Math.floor((tempTime % 3600)/ 60);
	tempSeconds = Math.floor((tempTime % 3600)% 60);
	document.getElementById("timer").innerHTML = "";
	if (tempHours > 0) {document.getElementById("timer").innerHTML += tempHours + ":";}
	if (tempHours > 0 && tempMinutes == 0) {document.getElementById("timer").innerHTML += "00:"} if (tempMinutes > 0) {if (tempMinutes < 10 && tempHours > 0) {document.getElementById("timer").innerHTML += "0";} document.getElementById("timer").innerHTML += tempMinutes + ":";}
	if (tempSeconds < 10 && (tempMinutes > 0 || tempHours > 0)) {document.getElementById("timer").innerHTML += "0";}
	document.getElementById("timer").innerHTML += tempSeconds;
}

function timerToD(timeSet) {
    var d = new Date();
    if (timeSet > lastToDpass) {pauseTotalToD -= (timeSet - lastToDpass)*1000;}
    if (timeSet < lastToDpass && timeSet >= 0) {pauseTotalToD += (lastToDpass - timeSet)*1000;}
	if (pausedToD && pauseFlagToD) {pauseInitialToD = d.getTime(); pauseFlagToD = false;}
	if (!pausedToD && pauseFlagToD) {pauseTotalToD += d.getTime() - pauseInitialToD; pauseFlagToD = false;}
	if (!pausedToD) {var totalToDpass = Math.floor((d.getTime() - pauseTotalToD - initialTime)/1000);} else {var totalToDpass = Math.abs(Math.floor((pauseInitialToD - pauseTotalToD - initialTime)/1000));}
    totalToDpass %=240;//85,155
    lastToDpass = totalToDpass;
    if (totalToDpass<85) {totalToDpass += 155; document.getElementById("timerToD").style.color = 'lightblue';}
    else {document.getElementById("timerToD").style.color = 'yellow';}
	document.getElementById("timerToD").innerHTML = 240-totalToDpass;
}

function saveToD() {
    if (event.button == 0){savedToD = 240-parseInt(document.getElementById("timerToD").innerHTML);}
    if (event.button == 2){timerToD(savedToD);}
}

document.onkeydown = function(e) {
	if (e.which == 19) {
		timerControl();
	}
    if (e.which == 188) {
		timerControlToD();
	}
	if (e.ctrlKey && e.which == 90) {
		e.preventDefault();
		Undo();
	}
	if (e.which == 187) {
		token_click = 0; linso_counter();
		e.preventDefault();
	}
	if (e.which == 189) {
		token_click = 2; linso_counter();
		e.preventDefault();
	}
	if (e.ctrlKey && e.which == 65) {
		if(!nerfed)
			circusControl();
		else
			colorWothAreasControl();
	}
	if (e.which == 32 && e.target == document.body) {
		e.preventDefault();
	}
	if (e.which >= 112 && e.which <= 123 && e.which != 116 && e.which != 122) {
		e.preventDefault();
	}
}

document.body.onmousedown = function(e) { if (e.button === 1) return false; }

// For returning users, automatically show patch notes on initialize when a new version is available.
function showNewPatchNotes() {
	const patchNotesModal = document.getElementById('patchNotesModal');
	const currentVersion = parseInt(patchNotesModal.dataset.version);

	// Don't force patch notes to pop up for new user.
	if (!localStorage.getItem("version")) {
		localStorage.setItem("version", currentVersion);
		return;
	}
	
	const userVersion =  localStorage.getItem("version");
	if (userVersion < currentVersion) {
  		patchNotesModal.style.display = "block";
		localStorage.setItem("version", currentVersion);
	}
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function incrementChus() {
    chuCount += 1;
    document.getElementById("chuCount").innerHTML = "Chus: " + chuCount;
}
function decrementChus() {
    chuCount -= 1;
    chuCount = Math.max(chuCount,0);
    document.getElementById("chuCount").innerHTML = "Chus: " + chuCount;
}
function modifyRupees(amount) {
    if (event.button == 2) {
        rupeeCount -= amount;
    }
    else {
        rupeeCount += amount;
    }
    var cap = 99;
    if (Player.adults_wallet) {cap = 200;}
    if (Player.giants_wallet) {cap = 500;}
    rupeeCount = Math.max(rupeeCount,0);
    rupeeCount = Math.min(rupeeCount,cap);
    document.getElementById("rupeeCount").innerHTML = rupeeCount;
}
String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function Undo() {
	if(lastCheck.length < 2)
		return;
	
	if (Check[lastCheck[lastCheck.length-1]] == "small_key") {
		if (lastCheck[lastCheck.length-1].startsWith("forest")) {Player.current_forest_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("fire")) {Player.current_fire_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("water")) {Player.current_water_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("spirit")) {Player.current_spirit_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("shadow")) {Player.current_shadow_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("gtg")) {Player.current_gtg_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("well")) {Player.current_well_keys -= 1;}
		if (lastCheck[lastCheck.length-1].startsWith("ganons")) {Player.current_ganons_keys -= 1;}
	}
	
	if (Check[lastCheck[lastCheck.length-1]] == "boss_key") {
		if (lastCheck[lastCheck.length-1].startsWith("forest")) {Player.forest_boss_key = false;}
		if (lastCheck[lastCheck.length-1].startsWith("fire")) {Player.fire_boss_key = false;}
		if (lastCheck[lastCheck.length-1].startsWith("water")) {Player.water_boss_key = false;}
		if (lastCheck[lastCheck.length-1].startsWith("spirit")) {Player.spirit_boss_key = false;}
		if (lastCheck[lastCheck.length-1].startsWith("shadow")) {Player.shadow_boss_key = false;}
	}

	if (Check[lastCheck[lastCheck.length-1]] != "unknown" && Check[lastCheck[lastCheck.length-1]] != "small_key" && Check[lastCheck[lastCheck.length-1]] != "boss_key")
	{
		if (lastCheck[lastCheck.length-1].startsWith("forest")) {Player.forest_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("fire")) {Player.fire_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("water")) {Player.water_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("spirit")) {Player.spirit_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("shadow")) {Player.shadow_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("gtg")) {Player.gtg_checks_remaining += 1;}
		if (lastCheck[lastCheck.length-1].startsWith("well")) {Player.well_checks_remaining += 1;}
		if (Check[lastCheck[lastCheck.length-1]] == "claim_check" || Check[lastCheck[lastCheck.length-1]] == "prescription") {
			document.getElementById("trade_location").innerHTML = "Trade &#8594; ";
		}
		else if (Check[lastCheck[lastCheck.length-1]] == "lullaby" || Check[lastCheck[lastCheck.length-1]] == "eponas" || Check[lastCheck[lastCheck.length-1]] == "sarias" || Check[lastCheck[lastCheck.length-1]] == "suns" || Check[lastCheck[lastCheck.length-1]] == "time" || Check[lastCheck[lastCheck.length-1]] == "storms" || Check[lastCheck[lastCheck.length-1]] == "minuet" || Check[lastCheck[lastCheck.length-1]] == "bolero" || Check[lastCheck[lastCheck.length-1]] == "serenade" || Check[lastCheck[lastCheck.length-1]] == "nocturne" || Check[lastCheck[lastCheck.length-1]] == "requiem" || Check[lastCheck[lastCheck.length-1]] == "prelude") {
			document.getElementById("text_" + lastCheck[lastCheck.length-1]).innerHTML = document.getElementById("text_" + lastCheck[lastCheck.length-1]).innerHTML.split(': ')[0];
			Player.checks_remaining -= 1;
		}
		else if (Check[lastCheck[lastCheck.length-1]] != "junk" && Check[lastCheck[lastCheck.length-1]] != "ultra") {
			document.getElementById(Check[lastCheck[lastCheck.length-1]] + "_location").innerHTML = checkSummaryText[Items.findIndex(element => element == Check[lastCheck[lastCheck.length-1]])] + " &#8594; ";
		}
	}
	
	forcedDisplay[Locations.indexOf(lastCheck[lastCheck.length-1])] = false;
	for (var i = 0; i < AreaIndexes.length; i++) {
		if (Locations.indexOf(lastCheck[lastCheck.length-1]) >= AreaIndexes[i] && Locations.indexOf(lastCheck[lastCheck.length-1]) < AreaIndexes[i+1]) {document.getElementById(lastCheck[lastCheck.length-1]).style.backgroundImage = backgrounds[i]; break;}
	}
	
	Location[Check[lastCheck[lastCheck.length-1]]] = "unknown";
	Player[Check[lastCheck[lastCheck.length-1]]] = false;
	Known[Check[lastCheck[lastCheck.length-1]]] = false;
	Logic[Check[lastCheck[lastCheck.length-1]]] = false;
	Check[lastCheck[lastCheck.length-1]] = "unknown";
	document.getElementById(lastCheck[lastCheck.length-1]).value = "";
	lastCheck.pop();
	midUpdate();
}