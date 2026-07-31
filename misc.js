const oldVersionButton = document.getElementById('oldVersion');
oldVersionButton.addEventListener('click', () => {
  window.location.href = 'https://soilflux.github.io/trackerOld/';
});

const exportBtn = document.getElementById('exportBtn');
exportBtn.onclick = async () => {
  await navigator.clipboard.writeText(JSON.stringify(localStorage));
  exportBtn.innerText = "Copied!";
  setTimeout(() => exportBtn.innerText = "Copy Data to Clipboard", 2000);
};


document.getElementById('importBtn').onclick = () => {
  const data = prompt("Paste your exported data here:");
  
  if (data) {
    try {
      const json = JSON.parse(data);
      Object.entries(json).forEach(([k, v]) => localStorage.setItem(k, v));
      alert("Import successful! Refreshing...");
      location.reload(); 
    } catch (e) {
      alert("Invalid data. Make sure you copied the whole string.");
    }
  }
};

function highlight(x) {
  const item = x.id.replace("img","");
  player[item] = !player[item];
  midUpdate();
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

function toCamelCase(str) {
  return str
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .map((word, index) => {
      if (index === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
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
    button.textContent = "Show Area Headers";
    localStorage.setItem("showAreaTitles", "false");
  } else {
    button.textContent = "Hide Area Headers";
    localStorage.setItem("showAreaTitles", "true");
  }
}

function download() {
  var a = document.body.appendChild(
    document.createElement("a")
  );
  var textToWrite = checkLog;
  a.download = "route.txt";
  textToWrite = textToWrite.replace(/\n/g, "%0D%0A");
  a.href = "data:text/plain," + textToWrite;
  a.click();
}

function capitalizeFirstLetter(string) {
  if (string.length > 0) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

function isLetter(s) {
  return s.match("^[a-zA-Z\(\)]+$");
}

function isUpperCase(str) {
  if (!isLetter(str))
    return false;
  return str === str.toUpperCase();
}

function isLowerCase(str) {
  if (!isLetter(str))
    return false;
  return str === str.toLowerCase();
}

function timerControl() {
  pauseFlag = true;
  if (paused) { paused = false; }
  else { paused = true; }
  timerStuff();
}

function saveStuff() {
  localStorage.setItem("simSeed", document.getElementById("simSeed").value);
  localStorage.setItem("desiredAnimal", document.getElementById("desiredAnimal").value);
  localStorage.setItem("quest1", document.getElementById("quest1").value);
}

function coopControl() {
  if (coopmode) { coopmode = false; document.getElementById("coopControl").innerHTML = "coopmode"; }
  else { coopmode = true; document.getElementById("coopControl").innerHTML = "solitude"; document.getElementById("skullSanity").value = "DUNGEON"; document.getElementById("scrubSanity").value = "ON"; document.getElementById("ganonsBridge").value = "OPEN"; rules.ganonBk = "lacs"; document.getElementById("shopSanity").value = 4; }
}

function linso_counter() {
  if (event.button == 0 || token_click == 0) { player.tokens += 1; }
  if (event.button == 2 || token_click == 2) { player.tokens -= 1; }
  document.getElementById("linso_counter").innerHTML = "" + player.tokens;
  token_click = 4;
  midUpdate();
}

function toggleHint(loc) {
  if (loc.id == "trade_location" && !knownItems["prescription"] && !knownItems["claim_check"])
    return;

  var theLocation = "";
  var item = "";
  var thisIsASong = false;
  if (loc.className == "logic_check_text" || loc.className == "ool_check_text" || loc.className == "access_check_text" || loc.className == "known_check_text") { // song click
    theLocation = loc.id.slice(5);
    item = checkToItemMap[theLocation];
    thisIsASong = true;
  }
  else { // check summary text click
    item = loc.id.slice(0, -9);

    if (item == "trade" && knownItems["prescription"])
      item = "prescription";
    else if (item == "trade" && knownItems["claim_check"])
      item = "claim_check";

    theLocation = itemToCheckMap[item];
  }

  if (item == "sos") { item = "storms"; }
  if (item == "suns") { item = "suns"; }
  if (item == "sot") { item = "time"; }

  if (MarkedWotHItemArrow == null) {
    if (!event.ctrlKey && (event.which == 1 || event.which == undefined)) { // left click, toggle if this item hinted by a sometimes hint or not
      if (!simActive || simOverride) {

        var itemText = "";

        if (item == "serenade") { itemText = "Serenade"; }
        else if (item == "prelude") { itemText = "Prelude" }
        else { itemText = ItemNames[Items.indexOf(item)]; }

        if (item != "unknown" && theLocation != "unknown") {
          isCheckHinted[theLocation] = !isCheckHinted[theLocation];

          // get the hinted text for this item and location
          if (loc.className == "logic_check_text" || loc.className == "ool_check_text" || loc.className == "access_check_text") {
            text = checkNames[checks.indexOf(theLocation)] + ":  " + itemText + "<br>";
          }
          else {
            text = checkNames[checks.indexOf(theLocation)] + ":  " + ItemNames[Items.indexOf(item)] + "<br>";
          }
        }
      }
      else {
        var input = "";
        var temp_item = "";
        if (SpoilerJSON["locations"][LocationToSpoilerName[theLocation]]["item"] != undefined) {
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

        if (checkToItemMap[theLocation] != "unknown") {
          if (loc.id != "trade_location") {
            if (loc.innerHTML.includes("Big Poe"))
              player.big_poe = !player.big_poe;

            player[item] = !player[item];
          }
          else {
            if (knownItems["prescription"])
              player["prescription"] = !player["prescription"];
            else if (knownItems["claim_check"])
              player["claim_check"] = !player["claim_check"];
          }
        }
        else {
          document.getElementById(theLocation).value = input;
          document.getElementById("simLog").value = LocationToSpoilerName[theLocation] + " -> " + temp_item + "\n" + document.getElementById("simLog").value;
        }
      }
    }
    else if (event.which == 3) { // right click, toggle if you have it or not (Game dictionary)
      if (!simActive || checkToItemMap[theLocation] != "unknown" || !thisIsASong) {
        if (loc.id != "trade_location") {
          if (loc.innerHTML.includes("Big Poe"))
            player.big_poe = !player.big_poe;

          player[item] = !player[item];
        }
        else {
          if (knownItems["prescription"])
            player["prescription"] = !player["prescription"];
          else if (knownItems["claim_check"])
            player["claim_check"] = !player["claim_check"];
        }
      }
    }
    else if (event.which == 2) { // middle click, toggle if the item is in logic or not
      if (knownItems[item]) {
        if ((ManualInLogicItems[item] == undefined || ManualInLogicItems[item] == false) && (ManualOutOfLogicItems[item] == undefined || ManualOutOfLogicItems[item] == false)) {
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
    else if (event.ctrlKey && event.which == 1) {
      lastCheck.splice(lastCheck.indexOf(theLocation), 1);
      lastCheck.push(theLocation);
      Undo();
    }
  }
  else {
    var itemToAdd = document.getElementById(MarkedWotHItemArrow).getAttribute("data-item");

    if (event.which == 1) {
      for (var j = 0; j < Items.length; j++) {
        if (Items[j] == itemToAdd) {
          if (ManualWotHItemLocked[Items[j]] == undefined)
            ManualWotHItemLocked[Items[j]] = [];
          if (ManualWotHItemPutInLogic[Items[j]] == undefined)
            ManualWotHItemPutInLogic[Items[j]] = [];
          if (item != itemToAdd) {
            if (ManualWotHItemPutInLogic[Items[j]].includes(item))
              ManualWotHItemPutInLogic[Items[j]].splice(ManualWotHItemPutInLogic[Items[j]].indexOf(item), 1);
            if (ManualWotHItemLocked[Items[j]].includes(item))
              ManualWotHItemLocked[Items[j]].splice(ManualWotHItemLocked[Items[j]].indexOf(item), 1);
            else
              ManualWotHItemLocked[Items[j]].push(item);
          }
        }
      }
    }
    else if (event.which == 3) {
      for (var j = 0; j < Items.length; j++) {
        if (Items[j] == itemToAdd) {
          if (ManualWotHItemPutInLogic[Items[j]] == undefined)
            ManualWotHItemPutInLogic[Items[j]] = [];
          if (ManualWotHItemLocked[Items[j]] == undefined)
            ManualWotHItemLocked[Items[j]] = [];
          if (item != itemToAdd) {
            if (ManualWotHItemLocked[Items[j]].includes(item))
              ManualWotHItemLocked[Items[j]].splice(ManualWotHItemLocked[Items[j]].indexOf(item), 1);
            if (ManualWotHItemPutInLogic[Items[j]].includes(item))
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
  gs[1] = checkLogic.gs_kokiri_child;
  gs[2] = checkLogic.gs_kokiri_soil;
  gs[3] = checkLogic.gs_kokiri_adult;
  gs[4] = checkLogic.gs_market;
  gs[5] = checkLogic.gs_lost_woods_bean_1;
  gs[6] = checkLogic.gs_lost_woods_bean_2;
  gs[7] = checkLogic.gs_lost_woods_above_stage;
  gs[8] = checkLogic.gs_sacred_forest;
  gs[9] = checkLogic.gs_outside_kakariko;
  gs[10] = checkLogic.gs_near_gerudo;
  gs[11] = checkLogic.gs_hyrule_castle_tree;
  gs[12] = checkLogic.gs_hyrule_castle_grotto;
  gs[13] = checkLogic.gs_lon_lon_tree;
  gs[14] = checkLogic.gs_lon_lon_shed;
  gs[15] = checkLogic.gs_lon_lon_window;
  gs[16] = checkLogic.gs_lon_lon_back_wall;
  gs[17] = checkLogic.gs_kakariko_construction;
  gs[18] = checkLogic.gs_kakariko_skulltula_house;
  gs[19] = checkLogic.gs_kakariko_guard_house;
  gs[20] = checkLogic.gs_kakariko_tree;
  gs[21] = checkLogic.gs_kakariko_tower;
  gs[22] = checkLogic.gs_kakariko_impas;
  gs[23] = checkLogic.gs_graveyard_wall;
  gs[24] = checkLogic.gs_graveyard_soil;
  gs[25] = checkLogic.gs_trail_soil;
  gs[26] = checkLogic.gs_trail_bombable_wall;
  gs[27] = checkLogic.gs_trail_hail_path;
  gs[28] = checkLogic.gs_trail_above_dodongos;
  gs[29] = checkLogic.gs_goron_center;
  gs[30] = checkLogic.gs_goron_maze;
  gs[31] = checkLogic.gs_crater_crate;
  gs[32] = checkLogic.gs_crater_soil;
  gs[33] = checkLogic.gs_river_ladder;
  gs[34] = checkLogic.gs_river_near_grotto;
  gs[35] = checkLogic.gs_river_above_bridge;
  gs[36] = checkLogic.gs_river_tree;
  gs[37] = checkLogic.gs_domain;
  gs[38] = checkLogic.gs_fountain_above_log;
  gs[39] = checkLogic.gs_fountain_tree;
  gs[40] = checkLogic.gs_fountain_hidden_cave;
  gs[41] = checkLogic.gs_hylia_bean;
  gs[42] = checkLogic.gs_hylia_lab_wall;
  gs[43] = checkLogic.gs_hylia_island;
  gs[44] = checkLogic.gs_hylia_tree;
  gs[45] = checkLogic.gs_hylia_lab_crate;
  gs[46] = checkLogic.gs_valley_small_bridge;
  gs[47] = checkLogic.gs_valley_bean;
  gs[48] = checkLogic.gs_valley_tent;
  gs[49] = checkLogic.gs_valley_pillar;
  gs[50] = checkLogic.gs_fortress_archery;
  gs[51] = checkLogic.gs_fortress_top;
  gs[52] = checkLogic.gs_wasteland;
  gs[53] = checkLogic.gs_colossus_soil;
  gs[54] = checkLogic.gs_colossus_tree;
  gs[55] = checkLogic.gs_colossus_hill;
  gs[56] = checkLogic.gs_ogc;
  gs[57] = checkLogic.gs_deku_basement_back;
  gs[58] = checkLogic.gs_deku_basement_gate;
  gs[59] = checkLogic.gs_deku_basement_vines;
  gs[60] = checkLogic.gs_deku_compass;
  gs[61] = checkLogic.gs_dodongos_east_side;
  gs[62] = checkLogic.gs_dodongos_stair_vines;
  gs[63] = checkLogic.gs_dodongos_above_stairs;
  gs[64] = checkLogic.gs_dodongos_scarecrow;
  gs[65] = checkLogic.gs_dodongos_before_king;
  gs[66] = checkLogic.gs_jabu_vines;
  gs[67] = checkLogic.gs_jabu_near_octo_1;
  gs[68] = checkLogic.gs_jabu_near_octo_2;
  gs[69] = checkLogic.gs_jabu_near_boss;
  gs[70] = checkLogic.gs_forest_first;
  gs[71] = checkLogic.gs_forest_lobby;
  gs[72] = checkLogic.gs_forest_outdoor_east;
  gs[73] = checkLogic.gs_forest_outdoor_west;
  gs[74] = checkLogic.gs_forest_basement;
  gs[75] = checkLogic.gs_fire_time;
  gs[76] = checkLogic.gs_fire_bomb_wall;
  gs[77] = checkLogic.gs_fire_scarecrow_1;
  gs[78] = checkLogic.gs_fire_scarecrow_2;
  gs[79] = checkLogic.gs_fire_basement;
  gs[80] = checkLogic.gs_water_south_basement;
  gs[81] = checkLogic.gs_water_river;
  gs[82] = checkLogic.gs_water_central;
  gs[83] = checkLogic.gs_water_near_boss_key;
  gs[84] = checkLogic.gs_water_platform_room;
  gs[85] = checkLogic.gs_spirit_metal_fence;
  gs[86] = checkLogic.gs_spirit_before_child_knuckle;
  gs[87] = checkLogic.gs_spirit_boulder_room;
  gs[88] = checkLogic.gs_spirit_lobby;
  gs[89] = checkLogic.gs_spirit_child_climb;
  gs[90] = checkLogic.gs_shadow_like_like;
  gs[91] = checkLogic.gs_shadow_crusher;
  gs[92] = checkLogic.gs_shadow_giant_pot;
  gs[93] = checkLogic.gs_shadow_near_boat;
  gs[94] = checkLogic.gs_shadow_three_pots;
  gs[95] = checkLogic.gs_well_west_inner;
  gs[96] = checkLogic.gs_well_east_inner;
  gs[97] = checkLogic.gs_well_like_like;
  gs[98] = checkLogic.gs_ice_spinning_scythe;
  gs[99] = checkLogic.gs_ice_hp_room;
  gs[100] = checkLogic.gs_ice_block_room;
}

function timerStuff() {
  var d = new Date();
  if (paused && pauseFlag) { pauseInitial = d.getTime(); pauseFlag = false; }
  if (!paused && pauseFlag) { pauseTotal += d.getTime() - pauseInitial; pauseFlag = false; }
  if (!paused) {
    var tempTime = Math.floor((d.getTime() - pauseTotal - initialTime) * timerMultiplier / 1000);
  }
  else {
    var tempTime = Math.floor((pauseInitial - pauseTotal - initialTime) * timerMultiplier / 1000);
  }
  if (paused && !timerInitialized) { var temptime = 0; } else if (!paused && !timerInitialized) { timerInitialized = true; }
  timerHours = Math.floor(tempTime / 3600);
  timerMinutes = Math.floor((tempTime % 3600) / 60);
  timerSeconds = Math.floor((tempTime % 3600) % 60);
  document.getElementById("timer").innerHTML = "";
  if (timerHours > 0) { document.getElementById("timer").innerHTML += timerHours + ":"; }
  if (timerHours > 0 && timerMinutes == 0) { document.getElementById("timer").innerHTML += "00:" } if (timerMinutes > 0) { if (timerMinutes < 10 && timerHours > 0) { document.getElementById("timer").innerHTML += "0"; } document.getElementById("timer").innerHTML += timerMinutes + ":"; }
  if (timerSeconds < 10 && (timerMinutes > 0 || timerHours > 0)) { document.getElementById("timer").innerHTML += "0"; }
  document.getElementById("timer").innerHTML += timerSeconds;
}

document.onkeydown = function (e) {
  if (e.which == 19) {
    timerControl();
  }
  if (e.ctrlKey && e.which == 90) {
    e.preventDefault();
    Undo();
  }
  if (e.key === "Tab") {
    if (checks.includes(document.activeElement.id)) {
      highlightNextCheck(document.activeElement.id);
      e.preventDefault();
    }
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
    colorWothAreasControl();
  }
  if (e.which == 32 && e.target == document.body) {
    e.preventDefault();
  }
  if (e.which >= 112 && e.which <= 123 && e.which != 116 && e.which != 122) {
    e.preventDefault();
  }
}

function colorFirstLetter(str, color) {
  if (!str) return "";
  return `<span style="color: ${color};">${str[0]}</span>${str.slice(1)}`;
}

document.body.onmousedown = function (e) { if (e.button === 1) return false; }

// For returning users, automatically show patch notes on initialize when a new version is available.
function showNewPatchNotes() {
  const patchNotesModal = document.getElementById('patchNotesModal');
  const currentVersion = parseInt(patchNotesModal.dataset.version);

  // Don't force patch notes to pop up for new user.
  if (!localStorage.getItem("version")) {
    localStorage.setItem("version", currentVersion);
    return;
  }

  const userVersion = localStorage.getItem("version");
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
  chuCount = Math.max(chuCount, 0);
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
  if (player.adults_wallet) { cap = 200; }
  if (player.giants_wallet) { cap = 500; }
  rupeeCount = Math.max(rupeeCount, 0);
  rupeeCount = Math.min(rupeeCount, cap);
  document.getElementById("rupeeCount").innerHTML = rupeeCount;
}
String.prototype.replaceAt = function (index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function flash() {
  if (rules.flashFeedback === "off") {
    return;
  }
  const toFlash = document.getElementById('checkSummaryColumn1');

  toFlash.classList.add('highlight-flash');

  setTimeout(() => {
    toFlash.classList.remove('highlight-flash');
  }, 100);
}

function Undo() {
  if (lastCheck.length < 2)
    return;

  if (checkToItemMap[lastCheck[lastCheck.length - 1]] == "small_key") {
    if (lastCheck[lastCheck.length - 1].startsWith("forest")) { player.current_forest_keys -= 1; }
    if (lastCheck[lastCheck.length - 1].startsWith("fire")) { player.current_fire_keys -= 1; }
    if (lastCheck[lastCheck.length - 1].startsWith("water")) { player.current_water_keys -= 1; }
    if (lastCheck[lastCheck.length - 1].startsWith("spirit")) { player.current_spirit_keys -= 1; }
    if (lastCheck[lastCheck.length - 1].startsWith("shadow")) { player.current_shadow_keys -= 1; }
    if (lastCheck[lastCheck.length - 1].startsWith("gtg")) { player.current_gtg_keys -= 1; }
    if (lastCheck[lastCheck.length - 1].startsWith("well")) { player.current_well_keys -= 1; }
    if (lastCheck[lastCheck.length - 1].startsWith("ganons")) { player.current_ganons_keys -= 1; }
  }

  if (checkToItemMap[lastCheck[lastCheck.length - 1]] == "boss_key") {
    if (lastCheck[lastCheck.length - 1].startsWith("forest")) { player.forest_boss_key = false; }
    if (lastCheck[lastCheck.length - 1].startsWith("fire")) { player.fire_boss_key = false; }
    if (lastCheck[lastCheck.length - 1].startsWith("water")) { player.water_boss_key = false; }
    if (lastCheck[lastCheck.length - 1].startsWith("spirit")) { player.spirit_boss_key = false; }
    if (lastCheck[lastCheck.length - 1].startsWith("shadow")) { player.shadow_boss_key = false; }
  }

  if (checkToItemMap[lastCheck[lastCheck.length - 1]] != "unknown" && checkToItemMap[lastCheck[lastCheck.length - 1]] != "small_key" && checkToItemMap[lastCheck[lastCheck.length - 1]] != "boss_key") {
    if (lastCheck[lastCheck.length - 1].startsWith("forest")) { player.forest_checks_remaining += 1; }
    if (lastCheck[lastCheck.length - 1].startsWith("fire")) { player.fire_checks_remaining += 1; }
    if (lastCheck[lastCheck.length - 1].startsWith("water")) { player.water_checks_remaining += 1; }
    if (lastCheck[lastCheck.length - 1].startsWith("spirit")) { player.spirit_checks_remaining += 1; }
    if (lastCheck[lastCheck.length - 1].startsWith("shadow")) { player.shadow_checks_remaining += 1; }
    if (lastCheck[lastCheck.length - 1].startsWith("gtg")) { player.gtg_checks_remaining += 1; }
    if (lastCheck[lastCheck.length - 1].startsWith("well")) { player.well_checks_remaining += 1; }
    if (checkToItemMap[lastCheck[lastCheck.length - 1]] == "claim_check" || checkToItemMap[lastCheck[lastCheck.length - 1]] == "prescription") {
      document.getElementById("trade_location").innerHTML = "Trade &#8594; ";
    }
    else if (checkToItemMap[lastCheck[lastCheck.length - 1]] == "lullaby" || checkToItemMap[lastCheck[lastCheck.length - 1]] == "eponas" || checkToItemMap[lastCheck[lastCheck.length - 1]] == "sarias" || checkToItemMap[lastCheck[lastCheck.length - 1]] == "suns" || checkToItemMap[lastCheck[lastCheck.length - 1]] == "time" || checkToItemMap[lastCheck[lastCheck.length - 1]] == "storms" || checkToItemMap[lastCheck[lastCheck.length - 1]] == "minuet" || checkToItemMap[lastCheck[lastCheck.length - 1]] == "bolero" || checkToItemMap[lastCheck[lastCheck.length - 1]] == "serenade" || checkToItemMap[lastCheck[lastCheck.length - 1]] == "nocturne" || checkToItemMap[lastCheck[lastCheck.length - 1]] == "requiem" || checkToItemMap[lastCheck[lastCheck.length - 1]] == "prelude") {
      player.checks_remaining -= 1;
    }
    else if (checkToItemMap[lastCheck[lastCheck.length - 1]] != "junk" && checkToItemMap[lastCheck[lastCheck.length - 1]] != "ultra") {
      document.getElementById(checkToItemMap[lastCheck[lastCheck.length - 1]] + "_location").innerHTML = checkSummaryText[Items.findIndex(element => element == checkToItemMap[lastCheck[lastCheck.length - 1]])] + " &#8594; ";
    }
  }

  forcedDisplay[checks.indexOf(lastCheck[lastCheck.length - 1])] = false;
  for (var i = 0; i < AreaNames.length; i++) {
    if (checkToAreaMap[lastCheck[lastCheck.length - 1]] == AreaNames[i] && !songChecks.includes(lastCheck[lastCheck.length - 1])) {
      document.getElementById(lastCheck[lastCheck.length - 1]).style.backgroundImage = getAreaImagePath(areaToImageMap[areaName]);
    }
  }


  itemToCheckMap[checkToItemMap[lastCheck[lastCheck.length - 1]]] = "unknown";
  player[checkToItemMap[lastCheck[lastCheck.length - 1]]] = false;
  knownItems[checkToItemMap[lastCheck[lastCheck.length - 1]]] = false;
  logic[checkToItemMap[lastCheck[lastCheck.length - 1]]] = false;
  checkToItemMap[lastCheck[lastCheck.length - 1]] = "unknown";
  document.getElementById(lastCheck[lastCheck.length - 1]).value = "";
  areaToItemsMap[checkToAreaMap[lastCheck[lastCheck.length - 1]]].pop();
  lastCheck.pop();
  midUpdate();
}