function processInputs() {
  thisIsHinted = false;
  var peeked = false;
  hinted = false;
  for (var i = 0; i < checks.length; i++) {
    const locationId = checks[i];

    // Break early if check is already known.
    if (checkToItemMap[locationId] != "unknown") {
      if (!checkedYet[i - 1]) {
        checkedYet[i - 1] = true;
        let checkArea = checkToAreaMap[locationId];
        let checkName = checkNames[i];
        if (locationId.startsWith("h_")) {
          checkName = checkName + " Hint";
        }
        else {

        }
        checkLog += `${timerHours}h ${timerMinutes}m ${timerSeconds}s ${checkArea}: ${checkName}\n`;
      }
      continue;
    }
    let input = document.getElementById(locationId).value;
    let item = inputToItemMap[input.toLowerCase()];

    // Break early if no user input.
    if (input == '' || input == "???") {
      continue;
    }

    const inputType = checkInputType(input);
    switch (inputType) {
      case "path": handlePathInput(input, locationId); midUpdate(); continue;
      case "barren": handleBarrenInput(input, locationId); midUpdate(); continue;
      case "always": handleAlwaysInput(input, locationId); continue;
      case "sometimes": handleSometimesInput(input, locationId); continue;
      case "dual": handleDualInput(input, locationId); continue;
      case "entrances": handleEntrancesInput(input, locationId); midUpdate(); continue;
      case "medallions": handleMedallionsInput(input, locationId); midUpdate(); continue;
    }

    // Break early if input is invalid.
    if (!item) {
      continue;
    }

    // don't allow inputting the same item twice if it's not a duplicate item
    if (!DuplicateItems.includes(item) && knownItems[item]) {
      continue;
    }

    // if it is a duplicate item and all copies are already known, don't allow the input
    if (item == "bombs" && knownItems["bombs3"]) continue;
    if (item == "bow" && knownItems["bow3"]) continue;
    if (item == "sling" && knownItems["sling3"]) continue;
    if (item == "strength" && knownItems["strength3"]) continue;
    if (item == "bottle" && knownItems["bottle4"]) continue;
    if (item == "hookshot" && knownItems["hookshot2"]) continue;
    if (item == "magic" && knownItems["magic2"]) continue;
    if (item == "scale" && knownItems["scale2"]) continue;
    if (item == "wallet" && knownItems["wallet3"]) continue;
    if ((item == "prescription" || item == "claim_check") && (knownItems["prescription"] || knownItems["claim_check"])) continue;

    if (isLowerCase(input.charAt(0)) && isUpperCase(input.charAt(input.length - 1))) {
      peeked = true;
      document.getElementById(locationId).value = input.toLowerCase();
    }
    else if (isUpperCase(input.charAt(0))) {
      hinted = true;
      document.getElementById(locationId).value = input.toLowerCase();
    }

    if (item == "junk") {
      if (isBoss.includes(locationId) && hinted) {
        checkToItemMap[locationId] = "junk";
        forcedDisplay[i] = true;
        continue;
      }
      document.getElementById("text_" + locationId).dispatchEvent(new Event('mousedown'));
      flash();
      continue;
    }
    if (item == "small_key") {
      if (!hinted) {
        document.getElementById("text_" + locationId).dispatchEvent(new Event('mousedown'));
      }
      else {
        checkToItemMap[locationId] = "small_key";
        forcedDisplay[i] = true;
      }
      continue;
    }
    if (item == "boss_key") {
      if (!hinted) {
        document.getElementById("text_" + locationId).dispatchEvent(new Event('mousedown'));
      }
      else {
        checkToItemMap[locationId] = "boss_key";
        forcedDisplay[i] = true;
      }
      continue;
    }
    for (var k = 0; k <= 5; k++) {
      if (k == 0) { var duplicate = ""; }
      else { var duplicate = k + ""; }
      if (!knownItems[item + duplicate]) {
        checkToItemMap[document.getElementById(locationId).id] = item + duplicate;
        itemToCheckMap[item + duplicate] = document.getElementById(locationId).id;
        if (item == "prescription" || item == "claim_check") {
          document.getElementById("trade_location").innerHTML = itemToNameMap[item] + " &#8594; " + checkToAreaMap[locationId] + ": " + checkNames[i];
        } else if (item == "big_poe") {
          document.getElementById("bottle" + duplicate + "_location").innerHTML = itemToNameMap[item] + " &#8594; " + checkToAreaMap[locationId] + ": " + checkNames[i];
        } else if (!songs.includes(item)) {
          document.getElementById(item + duplicate + "_location").innerHTML = itemToNameMap[item] + " &#8594; " + checkToAreaMap[locationId] + ": " + checkNames[i];
        }
        knownItems[item + duplicate] = true;
        if (item == "big_poe") { knownItems.big_poe = true; itemToCheckMap.big_poe = document.getElementById(locationId).id; }
        if (!hinted && !peeked) {
          player[item + duplicate] = true;
          if (item == "big_poe")
            player["big_poe"] = true;
        }
        if (hinted) { isCheckHinted[locationId] = true; }
        if (hintedInput == input)
          thisIsHinted = true;
        junkItem(document.getElementById(locationId));
        if (!player[item + duplicate]) { forcedDisplay[i] = true; document.getElementById(locationId).style.backgroundImage = ""; document.getElementById(locationId).value = document.getElementById(locationId).value.toUpperCase() }
        thisIsHinted = false;
        hintedInput = "";
        areaToItemsMap[checkToAreaMap[locationId]].push(item);
        trackAnimalQuest();
        break;
      }
    }
  }
}

function checkInputType(input) {
  switch (input[0]) {
    case "1": return "path";
    case "2": return "always";
    case "3": return "sometimes";
    case "4": return "dual";
    case "5": return "barren";
    case "9": return "entrance";
    case "0": return "medallions";
    default: return "item";
  }
}

function handlePathInput(input, locationId) {
  input = input.slice(1);
  Object.keys(areaInputs).forEach(key => {
    if (input.startsWith(key)) {
      input = input.replace(key, "");
      for (var j = 0; j < pathInputs.length; j++) {
        if (input.startsWith(pathInputs[j])) {
          let wothNum = 8;
          for (var k = 1; k < wothNum; k++) {
            if (document.getElementById("woth_input" + k).value == "") {
              document.getElementById("woth_input" + k).value = areaInputs[key];
              document.getElementById("path_boss" + k).value = pathInputs[j];
              document.getElementById(locationId).value = "";
              wothAndBarrenProcessing();
              flash();
              break;
            }
          }
        }
      }
    }
  });
}
function handleBarrenInput(input, locationId) {
  input = input.slice(1);
  Object.keys(areaInputs).forEach(key => {
    if (input.startsWith(key)) {
      let barrenNum = 8;
      for (var j = 1; j < barrenNum; j++) {
        if (document.getElementById("barren_input" + j).value == "") {
          document.getElementById("barren_input" + j).value = areaInputs[key];
          document.getElementById(locationId).value = "";
          wothAndBarrenProcessing();
          flash();
          break;
        }
      }
    }
  });
}
function handleAlwaysInput(input, locationId) {
  if (input[1] === input[0]) {
    input = input.slice(2) + "x";
  }
  else {
    input = input.slice(1);
  }
  Object.keys(alwaysTable).forEach(key => {
    if (input.startsWith(key)) {
      input = input.slice(1);
      if (inputToItemMap[input]) {
        document.getElementById(alwaysTable[key]).value = input.charAt(0).toUpperCase() + input.slice(1);
        document.getElementById(locationId).value = "";
        flash();
      }
    }
  });
}
function handleSometimesInput(input, locationId) {
  if (input[1] === input[0]) {
    input = input.slice(2) + "x";
  }
  else {
    input = input.slice(1);
  }
  Object.keys(sometimesTableReduced).forEach(key => {
    if (input.startsWith(key)) {
      input = input.slice(2);
      if (inputToItemMap[input.slice(0, 1)]) {
        document.getElementById(sometimesTableReduced[key]).value = input.charAt(0).toUpperCase() + input.slice(1);
        document.getElementById(locationId).value = "";
        flash();
      }
    }
  });
}
function handleDualInput(input, locationId) {
  if (input[1] === input[0]) {
    input = input.slice(2) + "xx";
  }
  else {
    input = input.slice(1);
  }
  Object.keys(dualTable).forEach(key => {
    if (input.startsWith(key)) {
      input = input.slice(2);
      let firstInput = input.charAt(0).toUpperCase();
      if (!input.startsWith("a") && !input.startsWith("q") && !input.startsWith("x")) {
        firstInput += input.charAt(1);
        input = input.slice(2);
      }
      else {
        input = input.slice(1);
      }
      if (inputToItemMap[input]) {
        document.getElementById(dualTable[key][0]).value = firstInput;
        document.getElementById(dualTable[key][1]).value = input.charAt(0).toUpperCase() + input.slice(1);
        document.getElementById(locationId).value = "";
        flash();
      }
    }
  });
}
function handleEntrancesInput(input, locationId) {
  input = input.slice(1);
  if (input.length == 22) {
    document.getElementById("mark_ER_Dungeons").value = input;
    document.getElementById(locationId).value = "";
    updateDungeonER();
    flash();
  }
}
function handleMedallionsInput(input, locationId) {
  input = input.slice(1);
  if (input.length == 12) {
    document.getElementById("markMedallions").value = input;
    document.getElementById(locationId).value = "";
    stoneMedallionInput();
    flash();
  }
}

function hideCheck(locationId) {
  if (rules.listSorting == "dynamic") {
    document.getElementById(locationId).style.display = "none";
    document.getElementById("text_" + locationId).style.display = "none";
    document.getElementById("br_" + locationId).style.display = "none";
  }
  else {
    document.getElementById(locationId).style.visibility = "hidden";
    document.getElementById(locationId).style.display = "inline-block";
    document.getElementById("text_" + locationId).style.display = "inline-block";
    document.getElementById("br_" + locationId).style.display = "inline-block";
    document.getElementById("text_" + locationId).style.visibility = "hidden";
    document.getElementById("br_" + locationId).style.visibility = "hidden";
  }
}

function stoneMedallionInput() {
  var str = document.getElementById("markStones").value.substring(0, 2);

  dekuPlacement = "unknown";
  dodongosPlacement = "unknown";
  jabuPlacement = "unknown";
  forestPlacement = "unknown";
  firePlacement = "unknown";
  waterPlacement = "unknown";
  spiritPlacement = "unknown";
  shadowPlacement = "unknown";
  pocketPlacement = "unknown";

  for (var i = 1; i <= 9; i++) {

    logic["dung" + i] = "unknown";
    if (!document.getElementById("markMedallions").value.includes("-")) document.getElementById("dung" + i + "_icon").src = dungIconSources[i - 1];

    if (str == "de") { logic["dung" + i] = "deku"; document.getElementById("text_dung" + i).innerHTML = "dek"; dekuPlacement = "dung" + i; }
    else if (str == "do") { logic["dung" + i] = "dodongos"; document.getElementById("text_dung" + i).innerHTML = "dod"; dodongosPlacement = "dung" + i; }
    else if (str == "ja") { logic["dung" + i] = "jabu"; document.getElementById("text_dung" + i).innerHTML = "jab"; jabuPlacement = "dung" + i; }
    else if (str == "fo") { logic["dung" + i] = "forest"; document.getElementById("text_dung" + i).innerHTML = "for"; forestPlacement = "dung" + i; }
    else if (str == "fi") { logic["dung" + i] = "fire"; document.getElementById("text_dung" + i).innerHTML = "fir"; firePlacement = "dung" + i; }
    else if (str == "wa") { logic["dung" + i] = "water"; document.getElementById("text_dung" + i).innerHTML = "wat"; waterPlacement = "dung" + i; }
    else if (str == "sh") { logic["dung" + i] = "shadow"; document.getElementById("text_dung" + i).innerHTML = "sha"; shadowPlacement = "dung" + i; }
    else if (str == "sp") { logic["dung" + i] = "spirit"; document.getElementById("text_dung" + i).innerHTML = "spi"; spiritPlacement = "dung" + i; }
    else if (str == "fr" || str == "kk") { logic["dung" + i] = "pocket"; document.getElementById("text_dung" + i).innerHTML = "pok"; pocketPlacement = "dung" + i; }

    if (i == 1) { str = document.getElementById("markStones").value.substring(2, 4); }
    else if (i == 2) { str = document.getElementById("markStones").value.substring(4, 6); }
    else if (i == 3) { str = document.getElementById("markMedallions").value.substring(0, 2); if (document.getElementById("markMedallions").value.length >= 12) { str = document.getElementById("markMedallions").value.substring(2, 4); } }
    else if (i == 4) { str = document.getElementById("markMedallions").value.substring(2, 4); if (document.getElementById("markMedallions").value.length >= 12) { str = document.getElementById("markMedallions").value.substring(4, 6); } }
    else if (i == 5) { str = document.getElementById("markMedallions").value.substring(4, 6); if (document.getElementById("markMedallions").value.length >= 12) { str = document.getElementById("markMedallions").value.substring(6, 8); } }
    else if (i == 6) { str = document.getElementById("markMedallions").value.substring(6, 8); if (document.getElementById("markMedallions").value.length >= 12) { str = document.getElementById("markMedallions").value.substring(8, 10); } }
    else if (i == 7) { str = document.getElementById("markMedallions").value.substring(8, 10); if (document.getElementById("markMedallions").value.length >= 12) { str = document.getElementById("markMedallions").value.substring(10, 12); } }
    else if (i == 8) { str = document.getElementById("markMedallions").value.substring(10, 12); if (document.getElementById("markMedallions").value.length >= 12) { str = document.getElementById("markMedallions").value.substring(0, 2); } }
  }

  if (logic.dung7 != "unknown") { logic.shadow_medallion = logic.dung7; document.getElementById("text_dung7").style.color = "rgb(238, 130, 238)"; document.getElementById("dung7_icon").src = "./normal/items/shadow.png"; }
  if (logic.dung8 != "unknown") { logic.spirit_medallion = logic.dung8; document.getElementById("text_dung8").style.color = "rgb(255, 165, 0)"; document.getElementById("dung8_icon").src = "./normal/items/spirit.png"; }

  for (var i = 1; i <= 9; i++) {
    if (dekuPlacement == "unknown" && logic["dung" + i] == "unknown") { if (logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown" && logic.dung7 != "unknown" && logic.dung8 != "unknown" && logic.dung9 != "unknown") { logic["dung" + i] = "deku"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i - 1]; } else if (logic.dung1 != "unknown" && logic.dung2 != "unknown" && logic.dung3 != "unknown" && logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown") { logic["dung" + i] = "deku"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8]; } document.getElementById("text_dung" + i).innerHTML = "dek"; dekuPlacement = "dung" + i; }
    else if (dodongosPlacement == "unknown" && logic["dung" + i] == "unknown") { if (logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown" && logic.dung7 != "unknown" && logic.dung8 != "unknown" && logic.dung9 != "unknown") { logic["dung" + i] = "dodongos"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i - 1]; } else if (logic.dung1 != "unknown" && logic.dung2 != "unknown" && logic.dung3 != "unknown" && logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown") { logic["dung" + i] = "dodongos"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8]; } document.getElementById("text_dung" + i).innerHTML = "dod"; dodongosPlacement = "dung" + i; }
    else if (jabuPlacement == "unknown" && logic["dung" + i] == "unknown") { if (logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown" && logic.dung7 != "unknown" && logic.dung8 != "unknown" && logic.dung9 != "unknown") { logic["dung" + i] = "jabu"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i - 1]; } else if (logic.dung1 != "unknown" && logic.dung2 != "unknown" && logic.dung3 != "unknown" && logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown") { logic["dung" + i] = "jabu"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8]; } document.getElementById("text_dung" + i).innerHTML = "jab"; jabuPlacement = "dung" + i; }
    else if (forestPlacement == "unknown" && logic["dung" + i] == "unknown") { if (logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown" && logic.dung7 != "unknown" && logic.dung8 != "unknown" && logic.dung9 != "unknown") { logic["dung" + i] = "forest"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i - 1]; } else if (logic.dung1 != "unknown" && logic.dung2 != "unknown" && logic.dung3 != "unknown" && logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown") { logic["dung" + i] = "forest"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8]; } document.getElementById("text_dung" + i).innerHTML = "for"; forestPlacement = "dung" + i; }
    else if (firePlacement == "unknown" && logic["dung" + i] == "unknown") { if (logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown" && logic.dung7 != "unknown" && logic.dung8 != "unknown" && logic.dung9 != "unknown") { logic["dung" + i] = "fire"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i - 1]; } else if (logic.dung1 != "unknown" && logic.dung2 != "unknown" && logic.dung3 != "unknown" && logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown") { logic["dung" + i] = "fire"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8]; } document.getElementById("text_dung" + i).innerHTML = "fir"; firePlacement = "dung" + i; }
    else if (waterPlacement == "unknown" && logic["dung" + i] == "unknown") { if (logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown" && logic.dung7 != "unknown" && logic.dung8 != "unknown" && logic.dung9 != "unknown") { logic["dung" + i] = "water"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i - 1]; } else if (logic.dung1 != "unknown" && logic.dung2 != "unknown" && logic.dung3 != "unknown" && logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown") { logic["dung" + i] = "water"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8]; } document.getElementById("text_dung" + i).innerHTML = "wat"; waterPlacement = "dung" + i; }
    else if (shadowPlacement == "unknown" && logic["dung" + i] == "unknown") { if (logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown" && logic.dung7 != "unknown" && logic.dung8 != "unknown" && logic.dung9 != "unknown") { logic["dung" + i] = "shadow"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i - 1]; } else if (logic.dung1 != "unknown" && logic.dung2 != "unknown" && logic.dung3 != "unknown" && logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown") { logic["dung" + i] = "shadow"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8]; } document.getElementById("text_dung" + i).innerHTML = "sha"; shadowPlacement = "dung" + i; }
    else if (spiritPlacement == "unknown" && logic["dung" + i] == "unknown") { if (logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown" && logic.dung7 != "unknown" && logic.dung8 != "unknown" && logic.dung9 != "unknown") { logic["dung" + i] = "spirit"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i - 1]; } else if (logic.dung1 != "unknown" && logic.dung2 != "unknown" && logic.dung3 != "unknown" && logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown") { logic["dung" + i] = "spirit"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8]; } document.getElementById("text_dung" + i).innerHTML = "spi"; spiritPlacement = "dung" + i; }
    else if (pocketPlacement == "unknown" && logic["dung" + i] == "unknown") { if (logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown" && logic.dung7 != "unknown" && logic.dung8 != "unknown" && logic.dung9 != "unknown") { logic["dung" + i] = "pocket"; document.getElementById("dung" + i + "_icon").src = dungIconSources[i - 1]; } else if (logic.dung1 != "unknown" && logic.dung2 != "unknown" && logic.dung3 != "unknown" && logic.dung4 != "unknown" && logic.dung5 != "unknown" && logic.dung6 != "unknown") { logic["dung" + i] = "pocket"; document.getElementById("dung" + i + "_icon").src = dungIconSources[8]; } document.getElementById("text_dung" + i).innerHTML = "pok"; pocketPlacement = "dung" + i; }
  }

  logic.emerald = logic.dung1;
  logic.ruby = logic.dung2;
  logic.sapphire = logic.dung3;
  logic.forest_medallion_location = logic.dung4;
  logic.fire_medallion_location = logic.dung5;
  logic.water_medallion_location = logic.dung6;
  logic.generic1 = logic.dung7;
  logic.generic2 = logic.dung8;
  logic.generic3 = logic.dung9;

  updateChecklistRewards();
  dungeonHeaderVisibility();
}

function dungeonHeaderVisibility() {
  let visibleChecks = [];
  for (var i = 0; i < checks.length; i++) {
    if (document.getElementById(checks[i]).style.visibility == "visible" && document.getElementById(checks[i]).style.display != "none") {
      visibleChecks.push(checks[i]);
    }
  }
  const elements = document.querySelectorAll('[data-dungeon]');
  elements.forEach((el) => {
    if (visibleChecks.some(item => item.includes(el.dataset.dungeon + "_"))) {
      el.style.visibility = "visible";
      el.style.display = "inline-block";
    }
    else {
      if (rules.listSorting == "fixed") {
        el.style.visibility = "hidden";
      }
      else {
        el.style.display = "none";
      }
    }
  });
}

function updateChecklistRewards() {
  const rewardList = ["emerald", "ruby", "sapphire", "forest", "fire", "water", "shadow", "spirit", "light"];

  const validDungeons = new Set(["deku", "dodongos", "jabu", "forest", "fire", "water", "shadow", "spirit"]);

  rewardList.forEach((rewardName, index) => {
    const logicKey = "dung" + (index + 1);

    const dungeonName = logic[logicKey];

    if (dungeonName && validDungeons.has(dungeonName)) {
      const element = document.getElementById("reward_" + dungeonName);

      if (element) {
        element.src = itemToImageMap[rewardName];
        element.style.visibility = "visible";
      }
    }
  });
}

function updateSpawnInputs() {
  if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("DMC by Goron City")].toLowerCase()) { Spawn.child_lower_dmc = true; } else { Spawn.child_lower_dmc = false; }
  if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("DMC fountain")].toLowerCase()) { Spawn.child_lower_dmc = true; Spawn.child_lower_dmc_fairy = true; } else { Spawn.child_lower_dmc_fairy = false; }
  if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("DMC by trail")].toLowerCase()) { Spawn.child_upper_dmc = true; } else { Spawn.child_upper_dmc = false; }
  if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("trail fairy")].toLowerCase()) { Spawn.child_upper_dmc = true; Spawn.child_dmt_fairy = true; } else { Spawn.child_dmt_fairy = false; }
  if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("trail fairy(ool)")].toLowerCase()) { Spawn.child_upper_dmc = true; Spawn.child_dmt_fairy = true; Spawn.child_dmt_fairy_ool = true; } else { Spawn.child_dmt_fairy_ool = false; }
  if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fortress")].toLowerCase()) { Spawn.child_gv_gf = true; } else { Spawn.child_gv_gf = false; }
  if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("waste")].toLowerCase()) { Spawn.child_wasteland = true; } else { Spawn.child_wasteland = false; }
  if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("dins fairy")].toLowerCase()) { Spawn.child_hyrule_fairy = true; } else { Spawn.child_hyrule_fairy = false; }
  if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("domain")].toLowerCase()) { Spawn.child_zd = true; } else { Spawn.child_zd = false; }
  if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("river")].toLowerCase()) { Spawn.child_zr = true; } else { Spawn.child_zr = false; }
  if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("colossus")].toLowerCase()) { Spawn.child_colossus = true; } else { Spawn.child_colossus = false; }
  if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fountain")].toLowerCase()) { Spawn.child_zf = true; } else { Spawn.child_zf = false; }
  if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fountain fairy")].toLowerCase()) { Spawn.child_zf_fairy = true; Spawn.child_zf = true; } else { Spawn.child_zf_fairy = false; }
  if (document.getElementById("markChildLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fountain fairy(ool)")].toLowerCase()) { Spawn.child_zf_fairy_ool = true; Spawn.child_zf = true; } else { Spawn.child_zf_fairy_ool = false; }

  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("DMC by Goron City")].toLowerCase()) { Spawn.adult_lower_dmc = true; } else { Spawn.adult_lower_dmc = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("DMC fountain")].toLowerCase()) { Spawn.adult_lower_dmc_fairy = true; Spawn.adult_lower_dmc = true; } else { Spawn.adult_lower_dmc_fairy = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("DMC by trail")].toLowerCase()) { Spawn.adult_upper_dmc = true; } else { Spawn.adult_upper_dmc = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("trail fairy")].toLowerCase()) { Spawn.adult_upper_dmc = true; Spawn.adult_dmt_fairy = true; } else { Spawn.adult_dmt_fairy = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("trail fairy(ool)")].toLowerCase()) { Spawn.adult_upper_dmc = true; Spawn.adult_dmt_fairy = true; Spawn.adult_dmt_fairy_ool = true; } else { Spawn.adult_dmt_fairy_ool = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fortress")].toLowerCase()) { Spawn.adult_gf = true; } else { Spawn.adult_gf = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("waste")].toLowerCase()) { Spawn.adult_wasteland = true; } else { Spawn.adult_wasteland = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("goron shop")].toLowerCase()) { Spawn.adult_gc_shop = true; } else { Spawn.adult_gc_shop = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("nocturne")].toLowerCase()) { Spawn.adult_nocturne = true; } else { Spawn.adult_nocturne = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fishing")].toLowerCase()) { Spawn.adult_fishing = true; } else { Spawn.adult_fishing = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("sfm")].toLowerCase()) { Spawn.adult_meadow = true; } else { Spawn.adult_meadow = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("domain")].toLowerCase()) { Spawn.adult_zd = true; } else { Spawn.adult_zd = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("domain shop")].toLowerCase()) { Spawn.adult_zd_shop = true; Spawn.adult_zd = true; } else { Spawn.adult_zd_shop = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("ogc fairy")].toLowerCase()) { Spawn.adult_ogc = true; } else { Spawn.adult_ogc = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("ogc fairy(ool)")].toLowerCase()) { Spawn.adult_ogc_ool = true; Spawn.adult_ogc = true; } else { Spawn.adult_ogc_ool = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("kak rooftop")].toLowerCase()) { Spawn.adult_kak_roof = true; } else { Spawn.adult_kak_roof = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("colossus")].toLowerCase()) { Spawn.adult_colossus = true; } else { Spawn.adult_colossus = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fountain")].toLowerCase()) { Spawn.adult_zf = true; } else { Spawn.adult_zf = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fountain fairy")].toLowerCase()) { Spawn.adult_zf_fairy = true; Spawn.adult_zf = true; } else { Spawn.adult_zf_fairy = false; }
  if (document.getElementById("markAdultLocation").value.toLowerCase() == spawnInputs[spawnNames.indexOf("fountain fairy(ool)")].toLowerCase()) { Spawn.adult_zf_fairy_ool = true; Spawn.adult_zf = true; } else { Spawn.adult_zf_fairy_ool = false; }
}

function junk() {
  var type = event.button;
  var locationId = event.target.id;
  locationId = locationId.substring('text_'.length);
  var locationIndex = checks.indexOf(locationId);

  if (!simActive) {
    if (type == 0 && !event.altKey && checkToItemMap[locationId] == "unknown") {
      if (locationId.includes("forest_") && player.forest_checks_remaining != 0) { player.forest_checks_remaining -= 1; }
      else if (locationId.includes("fire_") && player.fire_checks_remaining != 0 && locationId != "fire_grave") { player.fire_checks_remaining -= 1; }
      else if (locationId.includes("water_") && player.water_checks_remaining != 0) { player.water_checks_remaining -= 1; }
      else if (locationId.includes("spirit_") && player.spirit_checks_remaining != 0) { player.spirit_checks_remaining -= 1; }
      else if (locationId.includes("shadow_") && player.shadow_checks_remaining != 0) { player.shadow_checks_remaining -= 1; }
      else if (locationId.includes("ganons_") && player.ganons_checks_remaining != 0) { player.ganons_checks_remaining -= 1; }
      else if (locationId.includes("gtg_") && player.gtg_checks_remaining != 0) { player.gtg_checks_remaining -= 1; }
      else if (locationId.includes("well_") && player.well_checks_remaining != 0) { player.well_checks_remaining -= 1; }
      checkToItemMap[locationId] = "junk";
    }

    else if (type == 1 || (type == 0 && event.altKey) || document.getElementById(locationId).value.toLowerCase() == itemToInputMap["boss_key"]) {
      if (locationId.includes("forest_") && !player.forest_boss_key) { player.forest_boss_key = true; itemToCheckMap.forest_boss_key = locationId; }
      else if (locationId.includes("fire_") && !player.fire_boss_key) { player.fire_boss_key = true; itemToCheckMap.fire_boss_key = locationId; }
      else if (locationId.includes("water_") && !player.water_boss_key) { player.water_boss_key = true; itemToCheckMap.water_boss_key = locationId; }
      else if (locationId.includes("spirit_") && !player.spirit_boss_key) { player.spirit_boss_key = true; itemToCheckMap.spirit_boss_key = locationId; }
      else if (locationId.includes("shadow_") && !player.shadow_boss_key) { player.shadow_boss_key = true; itemToCheckMap.shadow_boss_key = locationId; }
      else if (locationId.includes("ganons_") && !player.ganons_boss_key) { player.ganons_boss_key = true; itemToCheckMap.ganons_boss_key = locationId; }
      else {
        if (locationId.startsWith("shop_")) { if (shopLogic[locationId] == "giants_wallet") { shopLogic[locationId] = "accessible" } else if (shopLogic[locationId] == "accessible") { shopLogic[locationId] = "adults_wallet" } else { shopLogic[locationId] = "giants_wallet" } }
        return;
      }
      checkToItemMap[locationId] = "boss_key";
    }

    else if ((type == 2 && !event.altKey) || document.getElementById(locationId).value.toLowerCase() == itemToInputMap["small_key"]) {
      if (locationId.includes("forest_") && player.current_forest_keys < 5) { player.current_forest_keys += 1; }
      else if (locationId.includes("fire_") && player.current_fire_keys < 8) { player.current_fire_keys += 1; }
      else if (locationId.includes("water_") && player.current_water_keys < 6) { player.current_water_keys += 1; }
      else if (locationId.includes("spirit_") && player.current_spirit_keys < 5) { player.current_spirit_keys += 1; }
      else if (locationId.includes("shadow_") && player.current_shadow_keys < 5) { player.current_shadow_keys += 1; }
      else if (locationId.includes("gtg_") && player.current_gtg_keys < 9) { player.current_gtg_keys += 1; }
      else if (locationId.includes("well_") && player.current_well_keys < 3) { player.current_well_keys += 1; }
      else if (locationId.includes("ganons_") && player.current_ganons_keys < 2) { player.current_ganons_keys += 1; }
      else {
        if ((type == 2 && !event.altKey)) {
          if (event.target.style.color == "magenta") { event.target.style.color = "green"; }
          else { event.target.style.color = "magenta"; event.target.style.opacity = "1" }
        }
        return;
      }
      checkToItemMap[locationId] = "small_key";
    }
    else if (type == 2 && event.altKey) {
      if (event.target.style.color == "magenta") { event.target.style.color = "green"; }
      else { event.target.style.color = "magenta"; event.target.style.opacity = "1" }
      return;
    }
    else if (checkToItemMap[locationId] == "unknown") {
      checkToItemMap[locationId] = "junk";
    }

    hideCheck(locationId);

    if (forcedDisplay[locationIndex]) {
      forcedDisplay[locationIndex] = false;
      player[checkToItemMap[locationId]] = true;
      Update();
    }

    if (checkToItemMap[locationId] != "junk") { midUpdate(); }
    lastCheck.push(locationId);
    Update();

    if (!thisIsHinted && !hinted) {
      highlightNextCheck(locationId);
    }
  }
  else {
    // Sim active
    if (LocationToSpoilerName[locationId] == undefined)
      console.log(locationId + " is not a known location in the sim");

    if (((locationId == "kokiri_storms" && Area[AreaNames.indexOf("Kokiri")] != "barren") || ((locationId == "hyrule_remoteGrotto" || locationId == "hyrule_openGrotto" || locationId == "hyrule_marketGrotto") && Area[AreaNames.indexOf("Field")] != "barren") || (locationId == "lw_generic" && Area[AreaNames.indexOf("Lost Woods")] != "barren") || (locationId == "crater_grotto" && Area[AreaNames.indexOf("Crater")] != "barren") || (locationId == "kakariko_grotto" && Area[AreaNames.indexOf("Kakariko")] != "barren") || (locationId == "river_grotto" && Area[AreaNames.indexOf("River")] != "barren") || (locationId == "trail_storms" && Area[AreaNames.indexOf("Trail")] != "barren")) && checkToItemMap["h_" + locationId] != "junk") {
      document.getElementById("text_" + "h_" + locationId).dispatchEvent(new Event('mousedown'));
    }
    var spoilerBossName = "";
    if (locationId == "deku_queen_gohma") spoilerBossName = "Queen Gohma";
    if (locationId == "dodongos_king_dodongo") spoilerBossName = "King Dodongo";
    if (locationId == "jabu_barinade") spoilerBossName = "Barinade";
    if (locationId == "forest_phantomGanon") spoilerBossName = "Phantom Ganon";
    if (locationId == "fire_volvagia") spoilerBossName = "Volvagia";
    if (locationId == "water_morpha") spoilerBossName = "Morpha";
    if (locationId == "spirit_twinrova") spoilerBossName = "Twinrova";
    if (locationId == "shadow_bongo") spoilerBossName = "Bongo Bongo";

    if (spoilerBossName != "") {
      if (SpoilerJSON["locations"][spoilerBossName] == "Light Medallion") document.getElementById("markMedallions").value = document.getElementById("markMedallions").value.replaceAt(0, rewardInputDict[spoilerBossName]);
      if (SpoilerJSON["locations"][spoilerBossName] == "Forest Medallion") document.getElementById("markMedallions").value = document.getElementById("markMedallions").value.replaceAt(2, rewardInputDict[spoilerBossName]);
      if (SpoilerJSON["locations"][spoilerBossName] == "Fire Medallion") document.getElementById("markMedallions").value = document.getElementById("markMedallions").value.replaceAt(4, rewardInputDict[spoilerBossName]);
      if (SpoilerJSON["locations"][spoilerBossName] == "Water Medallion") document.getElementById("markMedallions").value = document.getElementById("markMedallions").value.replaceAt(6, rewardInputDict[spoilerBossName]);
      if (SpoilerJSON["locations"][spoilerBossName] == "Shadow Medallion") document.getElementById("markMedallions").value = document.getElementById("markMedallions").value.replaceAt(8, rewardInputDict[spoilerBossName]);
      if (SpoilerJSON["locations"][spoilerBossName] == "Spirit Medallion") document.getElementById("markMedallions").value = document.getElementById("markMedallions").value.replaceAt(10, rewardInputDict[spoilerBossName]);
      if (SpoilerJSON["locations"][spoilerBossName] == "Kokiri Emerald") document.getElementById("markStones").value = document.getElementById("markStones").value.replaceAt(0, rewardInputDict[spoilerBossName]);
      if (SpoilerJSON["locations"][spoilerBossName] == "Goron Ruby") document.getElementById("markStones").value = document.getElementById("markStones").value.replaceAt(2, rewardInputDict[spoilerBossName]);
      if (SpoilerJSON["locations"][spoilerBossName] == "Zora Sapphire") document.getElementById("markStones").value = document.getElementById("markStones").value.replaceAt(4, rewardInputDict[spoilerBossName]);
    }

    if (!locationId.startsWith("h_")) {
      // clicked an item check, not a gossip hint

      var input = "";

      if (LocationToSpoilerName[locationId] != undefined) {
        if (SpoilerJSON["locations"][LocationToSpoilerName[locationId]]["item"] != undefined)
          input = SpoilerItemToInput[SpoilerJSON["locations"][LocationToSpoilerName[locationId]]["item"]];
        else
          input = SpoilerItemToInput[SpoilerJSON["locations"][LocationToSpoilerName[locationId]]];
      }

      if (input == undefined || document.getElementById(locationId).value.toLowerCase() == inputs[inputNames.indexOf("Boss Key")] || document.getElementById(locationId).value.toLowerCase() == inputs[inputNames.indexOf("Small Key")] || document.getElementById(locationId).value == inputs[ItemNames2.indexOf("Bombchus")] || (input == inputs[ItemNames2.indexOf("Bombchus")] && type == 2 && !LocationToSpoilerName[locationId].includes("Freestanding"))) {

        if (document.getElementById(locationId).value.toLowerCase() != inputs[inputNames.indexOf("Boss Key")] && document.getElementById(locationId).value.toLowerCase() != inputs[inputNames.indexOf("Small Key")]) {
          if (locationId.includes("forest_") && player.forest_checks_remaining != 0) { player.forest_checks_remaining -= 1; }
          else if (locationId.includes("fire_") && player.fire_checks_remaining != 0 && locationId != "fire_grave") { player.fire_checks_remaining -= 1; }
          else if (locationId.includes("water_") && player.water_checks_remaining != 0) { player.water_checks_remaining -= 1; }
          else if (locationId.includes("spirit_") && player.spirit_checks_remaining != 0) { player.spirit_checks_remaining -= 1; }
          else if (locationId.includes("shadow_") && player.shadow_checks_remaining != 0) { player.shadow_checks_remaining -= 1; }
          else if (locationId.includes("ganons_") && player.ganons_checks_remaining != 0) { player.ganons_checks_remaining -= 1; }
          else if (locationId.includes("gtg_") && player.gtg_checks_remaining != 0) { player.gtg_checks_remaining -= 1; }
          else if (locationId.includes("well_") && player.well_checks_remaining != 0) { player.well_checks_remaining -= 1; }
          else if (!songChecks.includes(locationId)) { }
          else { return; }
          checkToItemMap[locationId] = "junk";
        }

        else if (document.getElementById(locationId).value.toLowerCase() == inputs[inputNames.indexOf("Boss Key")]) {
          if (locationId.includes("forest_") && !player.forest_boss_key) { player.forest_boss_key = true; itemToCheckMap.forest_boss_key = locationId; }
          else if (locationId.includes("fire_") && !player.fire_boss_key) { player.fire_boss_key = true; itemToCheckMap.fire_boss_key = locationId; }
          else if (locationId.includes("water_") && !player.water_boss_key) { player.water_boss_key = true; itemToCheckMap.water_boss_key = locationId; }
          else if (locationId.includes("spirit_") && !player.spirit_boss_key) { player.spirit_boss_key = true; itemToCheckMap.spirit_boss_key = locationId; }
          else if (locationId.includes("shadow_") && !player.shadow_boss_key) { player.shadow_boss_key = true; itemToCheckMap.shadow_boss_key = locationId; }
          else if (locationId.includes("ganons_") && !player.ganons_boss_key) { player.ganons_boss_key = true; itemToCheckMap.ganons_boss_key = locationId; }
          else {
            if (locationId.startsWith("shop_")) { if (shopLogic[locationId] == "giants_wallet") { shopLogic[locationId] = "accessible" } else if (shopLogic[locationId] == "accessible") { shopLogic[locationId] = "adults_wallet" } else { shopLogic[locationId] = "giants_wallet" } }
            return;
          }
          checkToItemMap[locationId] = "boss_key";
        }

        else if (document.getElementById(locationId).value.toLowerCase() == inputs[inputNames.indexOf("Small Key")]) {
          if (locationId.includes("forest_") && player.current_forest_keys < 5) { player.current_forest_keys += 1; }
          else if (locationId.includes("fire_") && player.current_fire_keys < 8) { player.current_fire_keys += 1; }
          else if (locationId.includes("water_") && player.current_water_keys < 6) { player.current_water_keys += 1; }
          else if (locationId.includes("spirit_") && player.current_spirit_keys < 5) { player.current_spirit_keys += 1; }
          else if (locationId.includes("shadow_") && player.current_shadow_keys < 5) { player.current_shadow_keys += 1; }
          else if (locationId.includes("gtg_") && player.current_gtg_keys < 9) { player.current_gtg_keys += 1; }
          else if (locationId.includes("well_") && player.current_well_keys < 3) { player.current_well_keys += 1; }
          else if (locationId.includes("ganons_") && player.current_ganons_keys < 2) { player.current_ganons_keys += 1; }
          else { return; }
          checkToItemMap[locationId] = "small_key";
        }
        if (SpoilerJSON["locations"][LocationToSpoilerName[locationId]]["item"] != undefined)
          item = SpoilerJSON["locations"][LocationToSpoilerName[locationId]]["item"].replaceAll("Small Key (Gerudo Training Ground)", "Small Key (GTG)");
        else
          item = SpoilerJSON["locations"][LocationToSpoilerName[locationId]].replaceAll("Small Key (Gerudo Training Ground)", "Small Key (GTG)");
        if (item.startsWith("Rupee")) { var count = item.replace(/[^0-9]/g, ""); modifyRupees(parseInt(count)); }
        document.getElementById(locationId).style.display = "none";
        document.getElementById("text_" + locationId).style.display = "none";
        document.getElementById("br_" + locationId).style.display = "none";

        if (forcedDisplay[locationIndex]) { forcedDisplay[locationIndex] = false; player[checkToItemMap[locationId]] = true; Update(); }

        lastCheck.push(locationId);

        if (input == inputs[ItemNames2.indexOf("Bombchus")] && type == 2 && (LocationToSpoilerName[locationId].includes("Freestanding") || LocationToSpoilerName[locationId].includes("LH Underwater Item")))
          document.getElementById("simLog").value = LocationToSpoilerName[locationId] + " -> Bombchus (peeked)\n" + document.getElementById("simLog").value;
      }
      else if ((type == 0 && checkToItemMap[locationId] == "unknown") || document.getElementById(locationId).value.toLowerCase() == inputs[ItemNames2.indexOf("Bombchus")]) {
        // left click, get the item
        if (input != inputs[inputNames.indexOf("Boss Key")] && input != inputs[inputNames.indexOf("Small Key")])
          document.getElementById(locationId).value = input;

        else if (input == inputs[inputNames.indexOf("Boss Key")]) {
          if (locationId.includes("forest_") && !player.forest_boss_key) { player.forest_boss_key = true; itemToCheckMap.forest_boss_key = locationId; }
          else if (locationId.includes("fire_") && !player.fire_boss_key) { player.fire_boss_key = true; itemToCheckMap.fire_boss_key = locationId; }
          else if (locationId.includes("water_") && !player.water_boss_key) { player.water_boss_key = true; itemToCheckMap.water_boss_key = locationId; }
          else if (locationId.includes("spirit_") && !player.spirit_boss_key) { player.spirit_boss_key = true; itemToCheckMap.spirit_boss_key = locationId; }
          else if (locationId.includes("shadow_") && !player.shadow_boss_key) { player.shadow_boss_key = true; itemToCheckMap.shadow_boss_key = locationId; }
          else if (locationId.includes("ganons_") && !player.ganons_boss_key) { player.ganons_boss_key = true; itemToCheckMap.ganons_boss_key = locationId; }
          else {
            if (locationId.startsWith("shop_")) { if (shopLogic[locationId] == "giants_wallet") { shopLogic[locationId] = "accessible" } else if (shopLogic[locationId] == "accessible") { shopLogic[locationId] = "adults_wallet" } else { shopLogic[locationId] = "giants_wallet" } }
            return;
          }
          checkToItemMap[locationId] = "boss_key";
        }

        else if (input == inputs[inputNames.indexOf("Small Key")]) {
          if (locationId.includes("forest_") && player.current_forest_keys < 5) { player.current_forest_keys += 1; }
          else if (locationId.includes("fire_") && player.current_fire_keys < 8) { player.current_fire_keys += 1; }
          else if (locationId.includes("water_") && player.current_water_keys < 6) { player.current_water_keys += 1; }
          else if (locationId.includes("spirit_") && player.current_spirit_keys < 5) { player.current_spirit_keys += 1; }
          else if (locationId.includes("shadow_") && player.current_shadow_keys < 5) { player.current_shadow_keys += 1; }
          else if (locationId.includes("gtg_") && player.current_gtg_keys < 9) { player.current_gtg_keys += 1; }
          else if (locationId.includes("well_") && player.current_well_keys < 3) { player.current_well_keys += 1; }
          else if (locationId.includes("ganons_") && player.current_ganons_keys < 2) { player.current_ganons_keys += 1; }
          else { return; }
          checkToItemMap[locationId] = "small_key";
        }

        if (SpoilerJSON["locations"][LocationToSpoilerName[locationId]]["item"] != undefined)
          item = SpoilerJSON["locations"][LocationToSpoilerName[locationId]]["item"].replaceAll("Small Key (Gerudo Training Ground)", "Small Key (GTG)");
        else
          item = SpoilerJSON["locations"][LocationToSpoilerName[locationId]].replaceAll("Small Key (Gerudo Training Ground)", "Small Key (GTG)");
        document.getElementById("simLog").value = LocationToSpoilerName[locationId] + " -> " + item + "\n" + document.getElementById("simLog").value;
        if (item.startsWith("Bombchus")) { var count = item.replace(/[^0-9]/g, ""); chuCount += parseInt(count); document.getElementById("chuCount").innerHTML = "Chus: " + chuCount; }
      }
      else if (type == 2 && checkToItemMap[locationId] == "unknown" && document.getElementById(locationId).value != "???") {
        // right click, peek the item

        var temp_item = "";
        if (SpoilerJSON["locations"][LocationToSpoilerName[locationId]]["item"] != undefined)
          temp_item = SpoilerJSON["locations"][LocationToSpoilerName[locationId]]["item"].replaceAll("Small Key (Gerudo Training Ground)", "Small Key (GTG)");
        else
          temp_item = SpoilerJSON["locations"][LocationToSpoilerName[locationId]].replaceAll("Small Key (Gerudo Training Ground)", "Small Key (GTG)");

        if (LocationToSpoilerName[locationId].includes("Freestanding") || LocationToSpoilerName[locationId].includes("LH Underwater Item") || temp_item.includes("Small Key") || temp_item.includes("Boss Key")) {
          item = SpoilerJSON["locations"][LocationToSpoilerName[locationId]].replaceAll("Small Key (Gerudo Training Ground)", "Small Key (GTG)");
          document.getElementById(locationId).value = input.charAt(0) + input.charAt(1) + input.charAt(2).toUpperCase();

          if (input == inputs[ItemNames2.indexOf("Bombchus")])
            item = "Bombchus";
        }
        else {
          item = "unknown big chest";
          document.getElementById(locationId).value = "???";
        }
        document.getElementById("simLog").value = LocationToSpoilerName[locationId] + " -> " + item + " (peeked)\n" + document.getElementById("simLog").value;
      }
      else if (checkToItemMap[locationId] != "unknown" && checkToItemMap[locationId] != "junk" && forcedDisplay[locationIndex]) {
        forcedDisplay[locationIndex] = false;
        player[checkToItemMap[locationId]] = true;
      }
    }
    else {
      // clicked a gossip hint
      hint = SpoilerJSON["gossip_stones"][LocationToSpoilerName[locationId]]["text"].replaceAll("#", "");
      simProcessHint(hint, locationId);
      document.getElementById("simLog").value = hint.replaceAll("Small Key (Gerudo Training Ground)", "Small Key (GTG)") + "\n" + document.getElementById("simLog").value;
      checkToItemMap[locationId] = "junk";
      document.getElementById(locationId).style.display = "none";
      document.getElementById("text_" + locationId).style.display = "none";
      document.getElementById("br_" + locationId).style.display = "none";
      lastCheck.push(locationId);
    }
    Update();
  }
}

function junkUltra() {
  if (!simActive) {
    const area = event.target.id.replace("SKs", "").replace("gtg", "GTG").replace("sfm", "SFM").replace("ganons", "ganon's"); //:)
    player["current_" + area + "_keys"] = 99;
    if (player[area + "_boss_key"] == false) {
      logic["forced_" + area + "_boss_key"] = true;
      player[area + "_boss_key"] = true;
    }
    areaToCheckMap[capitalizeFirstLetter(area)].forEach(loc => {
      if (checkToItemMap[loc] == "unknown") { checkToItemMap[loc] = "ultra"; }
      hideCheck(loc);
      lastCheck.push(loc);
    });
    midUpdate();
  }
}

function junkItem(x) {
  let locationId = x.id;


  hideCheck(locationId);
  lastCheck.push(locationId);
  midUpdate();
  flash();

  if (!thisIsHinted && !hinted) {
    highlightNextCheck(locationId);
  }
}

function highlightNextCheck(locationId) {
  let d = new Date();
  if ((d.getTime() - ageSetStamp) > 30000) {
    age = "";
  }
  if (adult.includes(locationId)) {
    age = "adult";
    ageSetStamp = d.getTime();
  }
  else if (child.includes(locationId)) {
    age = "child";
    ageSetStamp = d.getTime();
  }

  let checkArea = checkToAreaMap[locationId];

  for (const loc of areaToCheckMap[checkArea].slice(areaToCheckMap[checkArea].indexOf(locationId))) {
    if (isAGoodCheckSuggestion(loc)) {
      toFocus = document.getElementById(loc);
      return;
    }
  }

  for (let i = checks.indexOf(areaToCheckMap[checkArea][0]); i < checks.length; i++) {
    if (isAGoodCheckSuggestion(checks[i])) {
      toFocus = document.getElementById(checks[i]);
      return;
    }
  }

  function isAGoodCheckSuggestion(loc) {
    if (loc == "theater_skull") {
      return false;
    }

    if ((age == "child" && adult.includes(loc)) || (age == "adult" && child.includes(loc))) {
      return false;
    }

    if (document.getElementById(loc).style.display != "none" && document.getElementById(loc).style.visibility != "hidden" && document.getElementById(loc).value == "" && checkPeek[loc]) {
      return true;
    }
  }
}

function keyDungeonInfo() {
  const dungeonConfig = {
    forest: { maxSK: 5, hasBK: true },
    fire: { maxSK: 8, hasBK: true },
    water: { maxSK: 6, hasBK: true },
    spirit: { maxSK: 5, hasBK: true },
    shadow: { maxSK: 5, hasBK: true },
    ganons: { maxSK: 2, hasBK: false },
    gtg: { maxSK: 9, hasBK: false },
    well: { maxSK: 3, hasBK: false }
  };

  Object.entries(dungeonConfig).forEach(([key, config]) => {
    document.getElementById(key).textContent = player[`${key}_checks_remaining`];

    const currentKeys = player[`current_${key}_keys`];
    document.getElementById(`${key}SKs`).textContent = config.maxSK - currentKeys;

    if (config.hasBK) {
      const hasKey = player[`${key}_boss_key`];
      document.getElementById(`${key}BKs`).textContent = hasKey ? 0 : 1;
    }
  });
}

function areaBreaks() {
  const breaks = document.querySelectorAll('br.area_breaks');
  breaks.forEach((br, index) => {
    let prev = br.previousElementSibling;
    while (prev && window.getComputedStyle(prev).display === 'none') {
      prev = prev.previousElementSibling;
    }
    if (prev && prev.tagName === 'BR' && !prev.classList.contains('area_breaks')) {
      br.style.display = "inline-block";
    } else {
      br.style.display = "none";
    }
  });
}

function itemHighlights() {
  const songs = ["lullaby", "eponas", "sarias", "suns", "time", "storms", "minuet", "bolero", "serenade", "requiem", "nocturne", "prelude"];
  songs.forEach(song => {
    const img = document.getElementById(song + "img");
    if (img) {
      img.style.filter = player[song] ? "contrast(100%)" : "contrast(0%)";
      img.style.opacity = player[song] ? "1" : "0.7";
    }
  });
}

function dungeonHighlights() {
  if (player.forestMedallion) { document.getElementById("dung4_icon").style.opacity = 1; document.getElementById("text_dung4").style.opacity = dimmed; } else { document.getElementById("dung4_icon").style.opacity = dimmed; document.getElementById("text_dung4").style.opacity = 1; }
  if (player.fireMedallion) { document.getElementById("dung5_icon").style.opacity = 1; document.getElementById("text_dung5").style.opacity = dimmed; } else { document.getElementById("dung5_icon").style.opacity = dimmed; document.getElementById("text_dung5").style.opacity = 1; }
  if (player.waterMedallion) { document.getElementById("dung6_icon").style.opacity = 1; document.getElementById("text_dung6").style.opacity = dimmed; } else { document.getElementById("dung6_icon").style.opacity = dimmed; document.getElementById("text_dung6").style.opacity = 1; }
  if (player.gen1) { document.getElementById("dung7_icon").style.opacity = 1; document.getElementById("text_dung7").style.opacity = dimmed; } else { document.getElementById("dung7_icon").style.opacity = dimmed; document.getElementById("text_dung7").style.opacity = 1; }
  if (player.gen2) { document.getElementById("dung8_icon").style.opacity = 1; document.getElementById("text_dung8").style.opacity = dimmed; } else { document.getElementById("dung8_icon").style.opacity = dimmed; document.getElementById("text_dung8").style.opacity = 1; }
  if (player.gen3) { document.getElementById("dung9_icon").style.opacity = 1; document.getElementById("text_dung9").style.opacity = dimmed; } else { document.getElementById("dung9_icon").style.opacity = dimmed; document.getElementById("text_dung9").style.opacity = 1; }
  if (player.emerald) { document.getElementById("dung1_icon").style.opacity = 1; document.getElementById("text_dung1").style.opacity = dimmed; } else { document.getElementById("dung1_icon").style.opacity = dimmed; document.getElementById("text_dung1").style.opacity = 1; }
  if (player.ruby) { document.getElementById("dung2_icon").style.opacity = 1; document.getElementById("text_dung2").style.opacity = dimmed; } else { document.getElementById("dung2_icon").style.opacity = dimmed; document.getElementById("text_dung2").style.opacity = 1; }
  if (player.sapphire) { document.getElementById("dung3_icon").style.opacity = 1; document.getElementById("text_dung3").style.opacity = dimmed; } else { document.getElementById("dung3_icon").style.opacity = dimmed; document.getElementById("text_dung3").style.opacity = 1; }

  if (checkToItemMap.deku_queen_gohma != "unknown") { if (document.getElementById("text_" + dekuPlacement) != null) { document.getElementById(dekuPlacement + "_icon").style.opacity = 1; document.getElementById("text_" + dekuPlacement).style.opacity = dimmed } }
  if (checkToItemMap.dodongos_king_dodongo != "unknown") { if (document.getElementById("text_" + dodongosPlacement) != null) { document.getElementById(dodongosPlacement + "_icon").style.opacity = 1; document.getElementById("text_" + dodongosPlacement).style.opacity = dimmed } }
  if (checkToItemMap.jabu_barinade != "unknown") { if (document.getElementById("text_" + jabuPlacement) != null) { document.getElementById(jabuPlacement + "_icon").style.opacity = 1; document.getElementById("text_" + jabuPlacement).style.opacity = dimmed } }
  if (checkToItemMap.forest_phantomGanon != "unknown") { if (document.getElementById("text_" + forestPlacement) != null) { document.getElementById(forestPlacement + "_icon").style.opacity = 1; document.getElementById("text_" + forestPlacement).style.opacity = dimmed } }
  if (checkToItemMap.fire_volvagia != "unknown") { if (document.getElementById("text_" + firePlacement) != null) { document.getElementById(firePlacement + "_icon").style.opacity = 1; document.getElementById("text_" + firePlacement).style.opacity = dimmed } }
  if (checkToItemMap.water_morpha != "unknown") { if (document.getElementById("text_" + waterPlacement) != null) { document.getElementById(waterPlacement + "_icon").style.opacity = 1; document.getElementById("text_" + waterPlacement).style.opacity = dimmed } }
  if (checkToItemMap.spirit_twinrova != "unknown") { if (document.getElementById("text_" + spiritPlacement) != null) { document.getElementById(spiritPlacement + "_icon").style.opacity = 1; document.getElementById("text_" + spiritPlacement).style.opacity = dimmed } }
  if (checkToItemMap.shadow_bongo != "unknown") { if (document.getElementById("text_" + shadowPlacement) != null) { document.getElementById(shadowPlacement + "_icon").style.opacity = 1; document.getElementById("text_" + shadowPlacement).style.opacity = dimmed } }
  if (document.getElementById("text_" + pocketPlacement) != null) { document.getElementById(pocketPlacement + "_icon").style.opacity = 1; document.getElementById("text_" + pocketPlacement).style.opacity = dimmed }
}

function setInLogicMaxForDungeons() {
  if (player.forest_checks_remaining >= 0 && (player.forest_checks_remaining < player.forest_logically_accessible)) { player.logically_accessible -= (player.forest_logically_accessible - player.forest_checks_remaining); }
  if (player.fire_checks_remaining >= 0 && (player.fire_checks_remaining < player.fire_logically_accessible)) { player.logically_accessible -= (player.fire_logically_accessible - player.fire_checks_remaining); }
  if (player.water_checks_remaining >= 0 && (player.water_checks_remaining < player.water_logically_accessible)) { player.logically_accessible -= (player.water_logically_accessible - player.water_checks_remaining); }
  if (player.spirit_checks_remaining >= 0 && (player.spirit_checks_remaining < player.spirit_logically_accessible)) { player.logically_accessible -= (player.spirit_logically_accessible - player.spirit_checks_remaining); }
  if (player.shadow_checks_remaining >= 0 && (player.shadow_checks_remaining < player.shadow_logically_accessible)) { player.logically_accessible -= (player.shadow_logically_accessible - player.shadow_checks_remaining); }
  if (player.gtg_checks_remaining >= 0 && (player.gtg_checks_remaining < player.gtg_logically_accessible)) { player.logically_accessible -= (player.gtg_logically_accessible - player.gtg_checks_remaining); }
  if (player.well_checks_remaining >= 0 && (player.well_checks_remaining < player.well_logically_accessible)) { player.logically_accessible -= (player.well_logically_accessible - player.well_checks_remaining); }
  if (player.ganons_checks_remaining >= 0 && (player.ganons_checks_remaining < player.ganons_logically_accessible)) { player.logically_accessible -= (player.ganons_logically_accessible - player.ganons_checks_remaining); }
}
function toggleLinsoGoMode() {
  if (linsoGoMode) { linsoGoMode = false; document.getElementById("linsoLight").style.opacity = 0; }
  else { linsoGoMode = true; document.getElementById("linsoLight").style.opacity = 0.5; }
}

function refreshLinSo() {
  if (rules.linso == "show") {
    document.getElementById("linsoTracker").style.display = "inline-block";
    for (let i = 0; i < songChecks.length; i++) {
      if (checkToItemMap[songChecks[i]] != "unknown") {
        document.getElementById("linsoC" + soliLinsoSongOrderConvert[i]).style.opacity = 1;
      } else {
        document.getElementById("linsoC" + soliLinsoSongOrderConvert[i]).style.opacity = 0;
      }
    }
    var temp = 0;
    for (var i = 1; i <= 11; i++) {
      for (var j = 1; j <= 6; j++) {
        if (i == 10 && j >= 4) {
          document.getElementById("linso" + i + j).innerHTML = document.getElementById("text_dung" + (j - 3)).innerHTML.toUpperCase();
          continue;
        }
        if (i == 11) {
          document.getElementById("linso" + i + j).innerHTML = document.getElementById("text_dung" + (3 + j)).innerHTML.toUpperCase();
          continue;
        }
        if (i > 9) { continue; }
        if (linsoOrder[temp] == "" || linsoOrder[temp] == "circus") { temp += 1; continue; }
        if (linsoOrder[temp] == "" || linsoOrder[temp] == "skull_counter") { temp += 1; continue; }
        if (linsoOrder[temp] == "hookshot") { if (player.hookshot && !player.longshot) { document.getElementById("linso" + i + j).src = itemToImageMap["hookshot"]; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; } else if (player.longshot) { document.getElementById("linso" + i + j).src = itemToImageMap["longshot"]; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; } else { document.getElementById("linso" + i + j).src = itemToImageMap["hookshot"]; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = dimmed; } }
        else if (linsoOrder[temp] == "silver_scale") { if (player.silver_scale && !player.golden_scale) { document.getElementById("linso" + i + j).src = itemToImageMap["silver_scale"]; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; } else if (player.golden_scale) { document.getElementById("linso" + i + j).src = itemToImageMap["golden_scale"]; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; } else { document.getElementById("linso" + i + j).src = itemToImageMap["silver_scale"]; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = dimmed; } }
        else if (linsoOrder[temp] == "adults_wallet") { if (player.tycoon_wallet) { document.getElementById("linso103").style.opacity = 1; } else { document.getElementById("linso103").style.opacity = 0; } if (player.giants_wallet) { document.getElementById("linso" + i + j).src = itemToImageMap["wallet2"]; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; } else if (player.adults_wallet) { document.getElementById("linso" + i + j).src = itemToImageMap["wallet1"]; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; } else { document.getElementById("linso" + i + j).src = itemToImageMap["wallet1"]; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = dimmed; } }
        else if (linsoOrder[temp] == "goron_bracelet") { if (player.golden_gauntlets) { document.getElementById("linso" + i + j).src = itemToImageMap["golden_gauntlets"]; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; } else if (player.silver_gauntlets) { document.getElementById("linso" + i + j).src = itemToImageMap["silver_gauntlets"]; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; } else if (player.goron_bracelet) { document.getElementById("linso" + i + j).src = itemToImageMap["goron_bracelet"]; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; } else { document.getElementById("linso" + i + j).src = itemToImageMap["goron_bracelet"]; document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = dimmed; } }
        else if (linsoOrder[temp] == "egg1" && player.claim_check) { document.getElementById("linso" + i + j).src = itemToImageMap["claim_check"]; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; }
        else if (linsoOrder[temp] == "egg1" && player.eyedrops) { document.getElementById("linso" + i + j).src = player.eyedrops_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; }
        else if (linsoOrder[temp] == "egg1" && player.eyeball_frog) { document.getElementById("linso" + i + j).src = player.eyeball_frog_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; }
        else if (linsoOrder[temp] == "egg1" && player.prescription) { document.getElementById("linso" + i + j).src = itemToImageMap["prescription"]; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; }
        else if (linsoOrder[temp] == "egg2" && player.zeldas_letter) { document.getElementById("linso" + i + j).src = player.zeldas_letter_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; }
        else if (linsoOrder[temp] == "egg2" && player.chicken2) { document.getElementById("linso" + i + j).src = player.chicken2_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; }
        else if (linsoOrder[temp] == "egg2" && player.egg2) { document.getElementById("linso" + i + j).src = player.egg2_img; document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; }
        else if (player[linsoOrder[temp]] || (player[linsoOrder[temp] + 1])) { document.getElementById("linso" + i + j).style.filter = "none"; document.getElementById("linso" + i + j).style.opacity = 1; }
        else { document.getElementById("linso" + i + j).style.filter = "grayscale(100%)"; document.getElementById("linso" + i + j).style.opacity = dimmed; }
        temp += 1;
      }
    }
    temp = 0;
    for (var i = 1; i <= 12; i++) {
      if (player[linsoOrder2[temp]]) { document.getElementById("linsoS" + i).style.filter = "none"; document.getElementById("linsoS" + i).style.opacity = 1; }
      else { document.getElementById("linsoS" + i).style.filter = "grayscale(100%)"; document.getElementById("linsoS" + i).style.opacity = dimmed; }
      temp += 1;
    }
    if (angelFlag) { document.getElementById(animalID).style.opacity = 0.4; }
  }
  else { document.getElementById("linsoTracker").style.display = "none"; }
}

function updateRules() {
  if (rules.preset == "aminalFunhouse") {
    rules.skullSanity = "off";
    rules.scrubSanity = "off";
    rules.shopSanity = "off";
    rules.cowSanity = "off";
    rules.smallKeys = "ownDungeon";
    rules.bossKeys = "remove";
    rules.dungeonEr = "off";
    rules.bridge = "nineRewards";
    rules.ganonBk = "remove";
    rules.deku = "closed";
    rules.fountain = "closed";
    rules.ocarinas = "vanilla";
    rules.gerudoCard = "vanilla";
    rules.beans = "vanilla";
    rules.expensive = "vanilla";
    rules.csmc = "on";
    rules.chusInLogic = "on";
    rules.preplantBeans = "off";
    rules.blueFireArrows = "off";
    rules.hintsType = "path";
    rules.kzSkip = "banned";
    rules.fae = "banned";
    rules.waterHop = "banned";
    rules.valleyWithHook = "banned";
    document.getElementById("barren_input1").style.display = "inline-block";
    document.getElementById("barren_input2").style.display = "inline-block";
    document.getElementById("barren_input3").style.display = "inline-block";
    document.getElementById("barren_input4").style.display = "inline-block";
    document.getElementById("barren_input5").style.display = "inline-block";
    alwaysHints = ["timeCheck", "nocturneCheck", "trade_quest", "frogs_2", "theater_skull", "lacs"];
  }
  else if (rules.preset == "truth") {
    rules.kzSkip = "allowed";
    rules.bossKeys = "ownDungeon";
    rules.ocarinas = "vanilla";
    rules.bridge = "allMeds";
    rules.deku = "closed";
    rules.fountain = "closed";
    rules.blueFireArrows = "on";
    rules.smallKeys = "ownDungeon";
    rules.cowSanity = "off";
    rules.gerudoCard = "vanilla";
    rules.beans = "vanilla";
    rules.expensive = "vanilla";
    rules.ganonBk = "remove";
    rules.preplantBeans = "off";
    rules.csmc = "on";
    rules.chusInLogic = "off";
    rules.shopSanity = "off";
    rules.scrubSanity = "off";
    rules.dungeonEr = "off";
    rules.skullSanity = "off";
    rules.hintsType = "path";
    rules.kzSkip = "allowed";
    rules.fae = "banned";
    rules.waterHop = "banned";
    rules.valleyWithHook = "allowed";
    document.getElementById("barren_input1").style.display = "inline-block";
    document.getElementById("barren_input2").style.display = "inline-block";
    document.getElementById("barren_input3").style.display = "inline-block";
    document.getElementById("barren_input4").style.display = "inline-block";
    document.getElementById("barren_input5").style.display = "none";
    alwaysHints = ["tokens_30", "tokens_40", "tokens_50", "timeCheck", "nocturneCheck", "trade_quest", "frogs_2", "theater_skull", "theater_truth"];
    player.farores = true;
  }
  else if (rules.preset == "leagueS9") {
    rules.kzSkip = "allowed";
    rules.bossKeys = "ownDungeon";
    rules.ocarinas = "vanilla";
    rules.bridge = "fiveMedals";
    rules.deku = "closed";
    rules.fountain = "closed";
    rules.blueFireArrows = "on";
    rules.smallKeys = "ownDungeon";
    rules.cowSanity = "off";
    rules.gerudoCard = "vanilla";
    rules.beans = "vanilla";
    rules.preplantBeans = "off";
    rules.expensive = "shuffled";
    rules.ganonBk = "remove";
    rules.csmc = "on";
    rules.chusInLogic = "off";
    rules.shopSanity = "4";
    rules.scrubSanity = "off";
    rules.dungeonEr = "off";
    rules.skullSanity = "off";
    rules.hintsType = "path";
    rules.kzSkip = "allowed";
    rules.fae = "banned";
    rules.waterHop = "banned";
    rules.valleyWithHook = "allowed";
    document.getElementById("barren_input1").style.display = "inline-block";
    document.getElementById("barren_input2").style.display = "inline-block";
    document.getElementById("barren_input3").style.display = "inline";
    document.getElementById("barren_input4").style.display = "none";
    document.getElementById("barren_input5").style.display = "none";
    alwaysHints = ["tokens_30", "tokens_40", "tokens_50", "timeCheck", "nocturneCheck", "trade_quest", "frogs_2", "theater_skull", "scrub_crater_child"];
    player.farores = true;
    knownItems.farores = true;
    player.lens = true;
    knownItems.lens = true;
    player.light_arrows = true;
    knownItems.light_arrows = true;
  }
  else if (rules.preset == "sgl2025") {
    rules.kzSkip = "allowed";
    rules.bossKeys = "ownDungeon";
    rules.ocarinas = "vanilla";
    rules.bridge = "threeStones";
    rules.deku = "closed";
    rules.fountain = "closed";
    rules.blueFireArrows = "on";
    rules.smallKeys = "ownDungeon";
    rules.cowSanity = "off";
    rules.gerudoCard = "vanilla";
    rules.beans = "vanilla";
    rules.preplantBeans = "off";
    rules.expensive = "vanilla";
    rules.ganonBk = "lacs";
    rules.csmc = "on";
    rules.chusInLogic = "off";
    rules.shopSanity = "off";
    rules.scrubSanity = "off";
    rules.dungeonEr = "off";
    rules.skullSanity = "off";
    rules.hintsType = "path";
    rules.kzSkip = "allowed";
    rules.fae = "banned";
    rules.waterHop = "banned";
    rules.valleyWithHook = "allowed";
    document.getElementById("barren_input1").style.display = "inline-block";
    document.getElementById("barren_input2").style.display = "inline-block";
    document.getElementById("barren_input3").style.display = "inline-block";
    document.getElementById("barren_input4").style.display = "inline-block";
    document.getElementById("barren_input5").style.display = "inline-block";
    document.getElementById("markAdultLocation").value = "tot";
    alwaysHints = ["tokens_20", "tokens_30", "tokens_40", "tokens_50", "nocturneCheck", "frogs_2", "theater_skull"];
    player.prelude = true;
    player.farores = true;
    knownItems.farores = true;
    player.lens = true;
    knownItems.lens = true;
  }
  else if (rules.preset == "s9") {
    rules.skullSanity = "off";
    rules.scrubSanity = "off";
    rules.shopSanity = "off";
    rules.cowSanity = "off";
    rules.smallKeys = "ownDungeon";
    rules.bossKeys = "ownDungeon";
    rules.dungeonEr = "ganonsExcluded";
    rules.bridge = "vanilla";
    rules.ganonBk = "remove";
    rules.deku = "closed";
    rules.fountain = "closed";
    rules.ocarinas = "vanilla";
    rules.gerudoCard = "vanilla";
    rules.beans = "vanilla";
    rules.expensive = "vanilla";
    rules.csmc = "on";
    rules.chusInLogic = "off"
    rules.preplantBeans = "off";
    rules.blueFireArrows = "on";
    rules.hintsType = "path";
    rules.kzSkip = "allowed";
    rules.fae = "allowed";
    rules.waterHop = "allowed";
    rules.valleyWithHook = "allowed";
    document.getElementById("barren_input1").style.display = "inline-block";
    document.getElementById("barren_input2").style.display = "inline-block";
    document.getElementById("barren_input3").style.display = "none";
    document.getElementById("barren_input4").style.display = "none";
    document.getElementById("barren_input5").style.display = "none";
    document.getElementById("markAdultLocation").value = "tot";
    alwaysHints = ["tokens_30", "tokens_40", "tokens_50", "timeCheck", "nocturneCheck", "trade_quest", "frogs_2", "theater_skull"];
  }

  if (rules.preset == "s9")
    document.getElementById("woth_input6").style.display = "inline";
  else
    document.getElementById("woth_input6").style.display = "none";

  if (rules.hintsType == "path") {
    document.getElementById("path_boss1").style.display = "inline-block";
    document.getElementById("path_boss2").style.display = "inline-block";
    document.getElementById("path_boss3").style.display = "inline-block";
    document.getElementById("path_boss4").style.display = "inline-block";
    document.getElementById("path_boss5").style.display = "inline-block";
    if (rules.preset == "s9")
      document.getElementById("path_boss6").style.display = "inline-block";
    else
      document.getElementById("path_boss6").style.display = "none";
    document.getElementById("path_arrow1").style.display = "inline";
    document.getElementById("path_arrow2").style.display = "inline";
    document.getElementById("path_arrow3").style.display = "inline";
    document.getElementById("path_arrow4").style.display = "inline";
    document.getElementById("path_arrow5").style.display = "inline";
    if (rules.preset == "s9")
      document.getElementById("path_arrow6").style.display = "inline";
    else
      document.getElementById("path_arrow6").style.display = "none";
  } else {
    document.getElementById("path_boss1").style.display = "none";
    document.getElementById("path_boss2").style.display = "none";
    document.getElementById("path_boss3").style.display = "none";
    document.getElementById("path_boss4").style.display = "none";
    document.getElementById("path_boss5").style.display = "none";
    document.getElementById("path_boss6").style.display = "none";
    document.getElementById("path_arrow1").style.display = "none";
    document.getElementById("path_arrow2").style.display = "none";
    document.getElementById("path_arrow3").style.display = "none";
    document.getElementById("path_arrow4").style.display = "none";
    document.getElementById("path_arrow5").style.display = "none";
    document.getElementById("path_arrow6").style.display = "none";
  }

  if (rules.blueFireArrows == "off")
    document.getElementById("ice_arrows_location").style.display = "none";
  else
    document.getElementById("ice_arrows_location").style.display = "inline";

  if (rules.fountain == "closed") {
    document.getElementById("rutos_letter_location").style.display = "inline";
    document.getElementById("bottle4_location").style.display = "none";
  } else {
    document.getElementById("rutos_letter_location").style.display = "none";
    document.getElementById("bottle4_location").style.display = "inline";
  }

  if (rules.shopSanity == "OFF")
    document.getElementById("wallet3_location").style.display = "none";
  else
    document.getElementById("wallet3_location").style.display = "inline";

  if (rules.smallKeys == "keyRings") {
    document.getElementById("forest_key_ring_location").style.display = "inline";
    document.getElementById("fire_key_ring_location").style.display = "inline";
    document.getElementById("water_key_ring_location").style.display = "inline";
    document.getElementById("spirit_key_ring_location").style.display = "inline";
    document.getElementById("shadow_key_ring_location").style.display = "inline";
    document.getElementById("well_key_ring_location").style.display = "inline";
    document.getElementById("gtg_key_ring_location").style.display = "inline";
    document.getElementById("ganons_key_ring_location").style.display = "inline";
  } else {
    document.getElementById("forest_key_ring_location").style.display = "none";
    document.getElementById("fire_key_ring_location").style.display = "none";
    document.getElementById("water_key_ring_location").style.display = "none";
    document.getElementById("spirit_key_ring_location").style.display = "none";
    document.getElementById("shadow_key_ring_location").style.display = "none";
    document.getElementById("well_key_ring_location").style.display = "none";
    document.getElementById("gtg_key_ring_location").style.display = "none";
    document.getElementById("ganons_key_ring_location").style.display = "none";
  }

  if (rules.gerudoCard == "shuffled") {
    document.getElementById("gerudo_card_location").style.display = "inline";
  } else {
    document.getElementById("gerudo_card_location").style.display = "none";
  }
  if (rules.beans == "shuffled") {
    document.getElementById("magic_bean_pack_location").style.display = "inline";
  } else {
    document.getElementById("magic_bean_pack_location").style.display = "none";
  }
  if (rules.bossKeys == "remove") {
    player.forest_boss_key = true;
    player.fire_boss_key = true;
    player.water_boss_key = true;
    player.spirit_boss_key = true;
    player.shadow_boss_key = true;
    removeBKFlag = true;
  } else if (removeBKFlag) {
    removeBKFlag = false;
    player.forest_boss_key = false;
    player.fire_boss_key = false;
    player.water_boss_key = false;
    player.spirit_boss_key = false;
    player.shadow_boss_key = false;
  }

  if (rules.highlightInLogicChecks == "on") {
    document.documentElement.style.setProperty('--access-font-color', 'yellow');
    document.documentElement.style.setProperty('--access-opacity', '0.5');
    document.documentElement.style.setProperty('--peek-font-color', 'orange');
  }
  else {
    document.documentElement.style.setProperty('--access-font-color', 'chartreuse');
    document.documentElement.style.setProperty('--access-opacity', '1');
    document.documentElement.style.setProperty('--peek-font-color', 'yellow');
  }

  unusedLocations = [];
  for (const check of checks) {
    if (rules.skullSanity == "off") {
      if (check.startsWith("gs_")) {
        unusedLocations.push(check);
        if (checkAccess[check]) player.tokensAccessible += 1;
      }
    }
    else if (rules.skullSanity == "dungeon") {
      if (check.startsWith("gs_") && (!check.startsWith("gs_deku") && !check.startsWith("gs_dodongos") && !check.startsWith("gs_jabu") && !check.startsWith("gs_forest") && !check.startsWith("gs_fire") && !check.startsWith("gs_water") && !check.startsWith("gs_spirit") && !check.startsWith("gs_shadow") && !check.startsWith("gs_ice") && !check.startsWith("gs_well")))
        unusedLocations.push(check);
    }
    else if (rules.skullSanity == "overworld") {
      if (check.startsWith("gs_deku") || check.startsWith("gs_dodongos") || check.startsWith("gs_jabu") || check.startsWith("gs_forest") || check.startsWith("gs_fire") || check.startsWith("gs_water") || check.startsWith("gs_spirit") || check.startsWith("gs_shadow") || check.startsWith("gs_ice") || check.startsWith("gs_well"))
        unusedLocations.push(check);
    }
    if (rules.scrubSanity == "off") {
      if (check.startsWith("scrub_"))
        unusedLocations.push(check);
    }
    else if (rules.scrubSanity == "overworld") {
      if (check.startsWith("scrub_dodongos") || check.startsWith("scrub_jabu") || check.startsWith("scrub_ganons"))
        unusedLocations.push(check);
    }
    if (rules.shopSanity != "4" && check.startsWith("shop_")) { unusedLocations.push(check); }
    if (rules.cowSanity == "off" && check.startsWith("cow_")) { unusedLocations.push(check); }
    if (document.getElementById("gossips").value != "ON" && check.startsWith("h_")) { unusedLocations.push(check); }
    if (rules.ganonBk == "lacs" && check.startsWith("lacs")) { unusedLocations.push(check); }
    if (rules.ocarinas == "vanilla" && (check.startsWith("hyrule_ocarina") || check.startsWith("lost_woods_fairy_ocarina"))) { unusedLocations.push(check); }
    if (rules.beans == "vanilla" && check.startsWith("river_bean_salesman")) { unusedLocations.push(check); }
    if (rules.gerudoCard == "vanilla" && check.startsWith("fortress_card")) { unusedLocations.push(check); }
    if (rules.preset != "TRUTH" && check.startsWith("theater_truth")) { unusedLocations.push(check); }
    if (rules.expensive == "vanilla" && (check == "goron_medigoron" || check.startsWith("kakariko_hag") || check.startsWith("wasteland_carpet"))) { unusedLocations.push(check); }
  }

  Object.keys(rulesConfig).forEach(key => {
    document.getElementById(key).value = rules[key];
  });
}

function updateLogicInfo() {
  document.getElementById("woth_input1").style.display = "inline";
  document.getElementById("woth_input2").style.display = "inline";
  document.getElementById("woth_input3").style.display = "inline";
  document.getElementById("woth_input4").style.display = "inline";
  document.getElementById("woth_input5").style.display = "inline";

  document.getElementById("biggoron_sword_location").style.display = "none";
  document.getElementById("nayrus_love_location").style.display = "none";
  document.getElementById("stone_of_agony_location").style.display = "none";



  logic.gold_skulltulas = 0;
  var i;
  document.getElementById("skullsInLogicList").innerHTML = "";
  for (i = 1; i <= 100; i++) {
    if (gs[i] == true) { logic.gold_skulltulas += 1; document.getElementById("skullsInLogicList").innerHTML += gsText[i] + "<br />"; };
  }

  player.accessible = 0;
  player.tokensAccessible = 0;

  player.logically_accessible = 0;
  player.forest_logically_accessible = 0;
  player.fire_logically_accessible = 0;
  player.water_logically_accessible = 0;
  player.spirit_logically_accessible = 0;
  player.shadow_logically_accessible = 0;
  player.gtg_logically_accessible = 0;
  player.well_logically_accessible = 0;
  player.ganons_logically_accessible = 0;

  player.forest_checks_remaining = 0;
  player.fire_checks_remaining = 0;
  player.water_checks_remaining = 0;
  player.spirit_checks_remaining = 0;
  player.shadow_checks_remaining = 0;
  player.gtg_checks_remaining = 0;
  player.well_checks_remaining = 0;
  player.ganons_checks_remaining = 0;

  temp = 0;
  var colorChange = false;
  player.checks_remaining = 0;
  for (var i = 0; i < checks.length; i++) {

    if (unusedLocations.includes(checks[i])) {
      document.getElementById(checks[i]).style.display = "none";
      document.getElementById("text_" + checks[i]).style.display = "none";
      document.getElementById("br_" + checks[i]).style.display = "none";
      continue;
    }

    var key = checks[i];
    str = "text_" + key;
    str2 = "br_" + key;

    document.getElementById(key).style.opacity = 1;

    if (key == "preludeCheck" || key == "nocturneCheck" || key == "timeCheck") { document.getElementById(str).style.display = "inline-block"; document.getElementById(str2).style.display = "inline-block"; }

    if (checkToItemMap[key] == "unknown" || forcedDisplay[i] || (coopmode && (checkToItemMap[key] == "small_key" || checkToItemMap[key] == "boss_key"))) {
      document.getElementById(str).style.display = "inline-block";
      document.getElementById(key).style.display = "inline-block";
      document.getElementById(str2).style.display = "inline-block";
      document.getElementById(str).style.visibility = "visible";
      document.getElementById(str2).style.visibility = "visible";
      document.getElementById(key).style.visibility = "visible";
      if (checks[i].includes("forest_")) { player.forest_checks_remaining += 1; }
      else if (checks[i].includes("fire_")) { player.fire_checks_remaining += 1; }
      else if (checks[i].includes("water_")) { player.water_checks_remaining += 1; }
      else if (checks[i].includes("spirit_")) { player.spirit_checks_remaining += 1; }
      else if (checks[i].includes("shadow_")) { player.shadow_checks_remaining += 1; }
      else if (checks[i].includes("gtg_")) { player.gtg_checks_remaining += 1; }
      else if (checks[i].includes("well_")) { player.well_checks_remaining += 1; }
      else if (checks[i].includes("ganons_")) { player.ganons_checks_remaining += 1; }
      else if (!checks[i].includes("h_")) { player.checks_remaining += 1; }
    }

    if (document.getElementById(key).value != "")
      document.getElementById(key).style.backgroundBlendMode = "overlay";
    else
      document.getElementById(key).style.backgroundBlendMode = "";

    if (key.startsWith("h_")) {
      document.getElementById(str).className = "gossip_text";
      if (checkPeek[key] && checkToItemMap[key] != "junk") {
        document.getElementById(str).style.display = "inline-block";
        document.getElementById(str2).style.display = "inline-block";
        document.getElementById(key).style.display = "inline-block";
      }
      else {
        document.getElementById(str).style.display = "none"
        document.getElementById(str2).style.display = "none";
        document.getElementById(key).style.display = "none";
      }
      continue;
    }

    if (songChecks.includes(key)) {
      if (checkToItemMap[key] != "unknown") document.getElementById(key + "Display").style.backgroundColor = "";
      else if (checkToItemMap[key] == "unknown" && checkAccess[key]) document.getElementById(key + "Display").style.backgroundColor = "rgb(0,80,0)";
      else if (checkToItemMap[key] == "unknown") document.getElementById(key + "Display").style.backgroundColor = "rgb(80,0,0)";
    }

    if (document.getElementById(str).style.display != "none" && document.getElementById(str).style.visibility != "hidden") { if (document.getElementById(str).style.color == "orange" || document.getElementById(str).style.color == "magenta") { colorChange = true; } else { colorChange = false; } } else { colorChange = false; }
    if (document.getElementById(str).style.display == "none" || document.getElementById(str).style.visibility == "hidden") { continue; }
    document.getElementById(str).innerHTML = backUp[i];

    let className = "ool-check-text";

    if (checkLogic[key] && rules.highlightInLogicChecks === "on") {
      className = "logic-check-text";
    } else if (checkAccess[key]) {
      className = "access-check-text";
    } else if (checkCouldAccess[key]) {
      className = "could-access-check-text";
    } else if (checkPeek[key]) {
      className = "peek-check-text";
    } else if (checkCouldPeek[key]) {
      className = "could-peek-check-text";
    }

    document.getElementById(str).className = className;

    if (className === "ool-check-text" && rules.inaccessibleChecks === "hide") {
      const ids = [str, key, str2];
      const isDynamic = rules.listSorting === "dynamic";

      ids.forEach(id => {
        const el = document.getElementById(id);
        if (isDynamic) {
          el.style.display = "none";
        } else {
          el.style.visibility = "hidden";
        }
      });
    }

    if (className === "access-check-text") player.accessible += 1;

    if (className === "logic-check-text") {
      if (document.getElementById(key).style.display != "none" && document.getElementById(key).style.visibility != "hidden") {
        player.logically_accessible += 1;
        if (key == "deku_queen_gohma" && player.deku_checks_remaining == 0) { player.logically_accessible -= 1; }
        if (key == "dodongos_king_dodongo" && player.dodongos_checks_remaining == 0) { player.logically_accessible -= 1; }
        if (key == "jabu_barinade" && player.jabu_checks_remaining == 0) { player.logically_accessible -= 1; }
        if (checkToAreaMap[key] == "Forest") { player.forest_logically_accessible += 1; }
        if (checkToAreaMap[key] == "Fire") { player.fire_logically_accessible += 1; }
        if (checkToAreaMap[key] == "Spirit") { player.spirit_logically_accessible += 1; }
        if (checkToAreaMap[key] == "Shadow") { player.shadow_logically_accessible += 1; }
        if (checkToAreaMap[key] == "Water") { player.water_logically_accessible += 1; }
        if (checkToAreaMap[key] == "Ganon's") { player.ganons_logically_accessible += 1; }
        if (checkToAreaMap[key] == "GTG") { player.gtg_logically_accessible += 1; }
        if (checkToAreaMap[key] == "Well") { player.well_logically_accessible += 1; }
      }
    }

    if (colorChange) { document.getElementById(str).style.color = "magenta"; document.getElementById(str).style.opacity = "1"; }
  }

  if (rules.preset == "aminalFunhouse") {
    document.getElementById("text_deku_lobby").style.color = "#FFD700";
    document.getElementById("text_dodongos_above_king").style.color = "#FFD700";
    document.getElementById("text_jabu_map").style.color = "#FFD700";
    document.getElementById("text_forest_bossKey").style.color = "#FFD700";
    document.getElementById("text_fire_hammer1").style.color = "#FFD700";
    document.getElementById("text_water_morpha").style.color = "#FFD700";
    document.getElementById("text_shadow_compass").style.color = "#FFD700";
    document.getElementById("text_spirit_nearFourArmos").style.color = "#FFD700";
  }

  if (rules.smallKeys == "remove" || rules.smallKeys == "keyRings") {
    logic.forest_keys = player.current_forest_keys = 5;
    logic.forest_boss_key = player.forest_boss_key = true;
  }
  if (rules.smallKeys == "remove" || rules.smallKeys == "keyRings") {
    logic.fire_keys = player.current_fire_keys = 8;
    logic.fire_boss_key = player.fire_boss_key = true;
  }
  if (rules.smallKeys == "remove" || rules.smallKeys == "keyRings") {
    logic.water_keys = player.current_water_keys = 6;
    logic.water_boss_key = player.water_boss_key = true;
  }
  if (rules.smallKeys == "remove" || rules.smallKeys == "keyRings") {
    logic.shadow_keys = player.current_shadow_keys = 5;
    logic.shadow_boss_key = player.shadow_boss_key = true;
  }
  if (rules.smallKeys == "remove" || rules.smallKeys == "keyRings") {
    logic.spirit_keys = player.current_spirit_keys = 5;
    logic.spirit_boss_key = player.spirit_boss_key = true;
  }
  if (rules.smallKeys == "remove" || rules.smallKeys == "keyRings") {
    logic.gtg_keys = player.current_gtg_keys = 9;
  }
  if (rules.smallKeys == "remove" || rules.smallKeys == "keyRings") {
    logic.well_keys = player.current_well_keys = 3;
  }
  if (rules.smallKeys == "remove" || rules.smallKeys == "keyRings") {
    logic.ganons_keys = player.current_ganons_keys = 2;
  }

  player.forest_checks_remaining -= 5 - player.current_forest_keys;
  player.fire_checks_remaining -= 8 - player.current_fire_keys
  player.water_checks_remaining -= 6 - player.current_water_keys
  player.spirit_checks_remaining -= 5 - player.current_spirit_keys
  player.shadow_checks_remaining -= 5 - player.current_shadow_keys
  player.gtg_checks_remaining -= 9 - player.current_gtg_keys
  player.well_checks_remaining -= 3 - player.current_well_keys
  player.ganons_checks_remaining -= 2 - player.current_ganons_keys;

  if (!player.forest_boss_key) { player.forest_checks_remaining -= 1; }
  if (!player.fire_boss_key) { player.fire_checks_remaining -= 1; }
  if (!player.water_boss_key) { player.water_checks_remaining -= 1; }
  if (!player.spirit_boss_key) { player.spirit_checks_remaining -= 1; }
  if (!player.shadow_boss_key) { player.shadow_checks_remaining -= 1; }

  player.checks_remaining += player.forest_checks_remaining + player.fire_checks_remaining + player.water_checks_remaining + player.spirit_checks_remaining + player.shadow_checks_remaining + player.gtg_checks_remaining + player.well_checks_remaining + player.ganons_checks_remaining;

  document.getElementById("checks_remaining").innerHTML = player.checks_remaining + " Left";
  document.getElementById("accessible").innerHTML = player.accessible + " Accessible";
  if (!nerfed) { document.getElementById("logically_accessible").innerHTML = player.logically_accessible + " in Logic"; } else { document.getElementById("logically_accessible").innerHTML = "??? in Logic" }
  document.getElementById("tokens_acquired").innerHTML = player.tokens + " Tokens";
  document.getElementById("tokensAccessible").innerHTML = player.tokensAccessible - player.tokens + " Accessible";
  document.getElementById("skulls_in_logic").innerHTML = logic.gold_skulltulas + " in Logic";
}

function searchingFor_tracking() {
  item = event.target.id.replace("searchingFor_", "");
  searchItems.splice(searchItems.indexOf(ItemNames[Items.indexOf(item)]), 1) //Pepega
  event.target.style.display = "none";
}

function updateSummaryText() {

  for (var i = 0; i <= 50; i++) {
    str = checkSummary[i] + "_location";

    var theItem = checkSummary[i];
    if (checkSummary[i] == "trade" && (knownItems.prescription || knownItems.claim_check)) {
      var exception = true;
      if (knownItems.prescription)
        theItem = "prescription";
      else if (knownItems.claim_check)
        theItem = "claim_check";

      if (isCheckHinted[itemToCheckMap[theItem]] && document.getElementById(str).innerHTML.indexOf("*") < 0)
        document.getElementById(str).innerHTML = "* " + document.getElementById(str).innerHTML + " *";
      else if (!isCheckHinted[itemToCheckMap[theItem]])
        document.getElementById(str).innerHTML = document.getElementById(str).innerHTML.replace("* ", "").replace(" *", "");
    }
    else {
      var exception = false;

      if (isCheckHinted[itemToCheckMap[checkSummary[i]]] && document.getElementById(str).innerHTML.indexOf("*") < 0)
        document.getElementById(str).innerHTML = "* " + document.getElementById(str).innerHTML + " *";
      else if (!isCheckHinted[itemToCheckMap[checkSummary[i]]])
        document.getElementById(str).innerHTML = document.getElementById(str).innerHTML.replace("* ", "").replace(" *", "");
    }

    if (!nerfed) {
      if (logic[theItem] || exception) {
        if (player[theItem])
          document.getElementById(str).className = "checked_text_summary";
        else
          document.getElementById(str).className = "checked_text_summary_not_have";
      }
      else {
        if (player[theItem])
          document.getElementById(str).className = "checked_text_summary_have_ool";
        else {
          if (couldHave[theItem])
            document.getElementById(str).className = "checked_text_summary_ool_could_have";
          else
            document.getElementById(str).className = "checked_text_summary_ool";
        }
      }
    }
    else {
      if (player[theItem] || (theItem == "trade" && (knownItems.prescription || knownItems.claim_check)))
        if (ManualOutOfLogicItems[theItem])
          document.getElementById(str).className = "checked_text_summary_have_ool";
        else if (ManualInLogicItems[theItem])
          document.getElementById(str).className = "checked_text_summary";
        else
          document.getElementById(str).className = "checked_text_summary_unknown";
      else if (couldHave[theItem])
        if (ManualOutOfLogicItems[theItem])
          document.getElementById(str).className = "checked_text_summary_ool_could_have";
        else if (ManualInLogicItems[theItem])
          document.getElementById(str).className = "checked_text_summary_not_have";
        else
          document.getElementById(str).className = "checked_text_summary_unknown_not_have";
      else if (knownItems[theItem])
        document.getElementById(str).className = "checked_text_summary_known";
      else
        document.getElementById(str).className = "checked_text_summary_ool";

      if (rules.colorScheme == "dark" && document.getElementById(str).className == "checked_text_summary_ool") {
        document.getElementById(str).style.color = 'white';
      }
      else if (rules.colorScheme == "light" && document.getElementById(str).className == "checked_text_summary_ool") {
        document.getElementById(str).style.color = 'black';
      }
      else {
        document.getElementById(str).style.color = '';
      }
    }
  }

}
function updateProbabilities() {
  var majorLeft = 0;

  var goMode = true;
  if (searchItems.includes("Boomerang") && !knownItems.boomerang) { majorLeft += 1; document.getElementById("searchingFor_boomerang").style.display = "inline-block"; goMode = false; }
  else if (searchItems.includes("Boomerang")) { document.getElementById("searchingFor_boomerang").style.display = "none"; }

  if (searchItems.includes("Letter") && !knownItems.rutos_letter) { majorLeft += 1; document.getElementById("searchingFor_rutos_letter").style.display = "inline-block"; goMode = false; }
  else if (searchItems.includes("Letter")) { document.getElementById("searchingFor_rutos_letter").style.display = "none"; }

  if (searchItems.includes("Hammer") && !knownItems.hammer) { majorLeft += 1; document.getElementById("searchingFor_hammer").style.display = "inline-block"; goMode = false; }
  else if (searchItems.includes("Hammer")) { document.getElementById("searchingFor_hammer").style.display = "none"; }

  if (searchItems.includes("Mirror") && !knownItems.mirror) { majorLeft += 1; document.getElementById("searchingFor_mirror").style.display = "inline-block"; goMode = false; }
  else if (searchItems.includes("Mirror")) { document.getElementById("searchingFor_mirror").style.display = "none"; }

  if (searchItems.includes("Strength") && !knownItems.strength3) {
    document.getElementById("searchingFor_strength1").style.display = "inline-block"; goMode = false;
    if (!knownItems.strength1) { majorLeft += 1; }
    if (!knownItems.strength2) { majorLeft += 1; }
    if (!knownItems.strength3) { majorLeft += 1; }
  }
  else { document.getElementById("searchingFor_strength1").style.display = "none"; }

  if (searchItems.includes("Scale") && !knownItems.scale2) {
    document.getElementById("searchingFor_scale1").style.display = "inline-block"; goMode = false;
    if (!knownItems.scale1) { majorLeft += 1; }
    if (!knownItems.scale2) { majorLeft += 1; }
  }
  else { document.getElementById("searchingFor_scale1").style.display = "none"; }

  if (searchItems.includes("Magic") && !player.magic) {
    document.getElementById("searchingFor_magic1").style.display = "inline-block"; goMode = false;
    if (!knownItems.magic1) { majorLeft += 1; }
    if (!knownItems.magic2) { majorLeft += 1; }
  }
  else { document.getElementById("searchingFor_magic1").style.display = "none"; }

  if (searchItems.includes("Bow") && !player.bow) {
    document.getElementById("searchingFor_bow1").style.display = "inline-block"; goMode = false;
    if (!knownItems.bow1) { majorLeft += 1; }
    if (!knownItems.bow2) { majorLeft += 1; }
    if (!knownItems.bow3) { majorLeft += 1; }
  }
  else { document.getElementById("searchingFor_bow1").style.display = "none"; }

  if (searchItems.includes("Hookshot") && !knownItems.hookshot2) {
    document.getElementById("searchingFor_hookshot1").style.display = "inline-block"; goMode = false;
    if (!knownItems.hookshot1) { majorLeft += 1; }
    if (!knownItems.hookshot2) { majorLeft += 1; }
  }
  else { document.getElementById("searchingFor_hookshot1").style.display = "none"; }

  if (searchItems.includes("Bomb Bag") && !player.bombs) {
    document.getElementById("searchingFor_bombs1").style.display = "inline-block"; goMode = false;
    if (!knownItems.bombs1) { majorLeft += 1; }
    if (!knownItems.bombs2) { majorLeft += 1; }
    if (!knownItems.bombs3) { majorLeft += 1; }
  }
  else { document.getElementById("searchingFor_bombs1").style.display = "none"; }

  if (searchItems.includes("Slingshot")) {
    if (player.sling) { document.getElementById("searchingFor_slingshot1").style.display = "none"; }
    if (!knownItems.sling1) { majorLeft += 1; }
    if (!knownItems.sling2) { majorLeft += 1; }
    if (!knownItems.sling3) { majorLeft += 1; } else { document.getElementById("searchingFor_slingshot1").style.display = "none"; }
  }

  if (searchItems.includes("Din's Fire") && !knownItems.dins) { majorLeft += 1; document.getElementById("searchingFor_dins").style.display = "inline-block"; goMode = false; }
  else if (searchItems.includes("Din's Fire")) { document.getElementById("searchingFor_dins").style.display = "none"; }

  if (searchItems.includes("Hover Boots") && !knownItems.hovers) { majorLeft += 1; document.getElementById("searchingFor_hovers").style.display = "inline-block"; goMode = false; }
  else if (searchItems.includes("Hover Boots")) { document.getElementById("searchingFor_hovers").style.display = "none"; }

  if (searchItems.includes("Kokiri Sword") && !knownItems.kokiri_sword) { majorLeft += 1; document.getElementById("searchingFor_kokiri_sword").style.display = "inline-block"; goMode = false; }
  else if (searchItems.includes("Kokiri Sword")) { document.getElementById("searchingFor_kokiri_sword").style.display = "none"; }

  if (searchItems.includes("Iron Boots") && !knownItems.irons) { majorLeft += 1; document.getElementById("searchingFor_irons").style.display = "inline-block"; goMode = false; }
  else if (searchItems.includes("Iron Boots")) { document.getElementById("searchingFor_irons").style.display = "none"; }

  if (searchItems.includes("Light Arrows") && !knownItems.light_arrows) { majorLeft += 1; document.getElementById("searchingFor_light_arrows").style.display = "inline-block"; goMode = false; }
  else if (searchItems.includes("Light Arrows")) { document.getElementById("searchingFor_light_arrows").style.display = "none"; }

  if (searchItems.includes("Lens") && !knownItems.lens) { majorLeft += 1; document.getElementById("searchingFor_lens").style.display = "inline-block"; goMode = false; }
  else if (searchItems.includes("Lens")) { document.getElementById("searchingFor_lens").style.display = "none"; }

  nChecks = document.getElementById("probability_input").value;
  if (goMode) {
    document.getElementById("linsoLight").style.opacity = 0.5;
    document.getElementById('goMode').style.display = "inline-block";
  }
  else {
    document.getElementById('goMode').style.display = "none";
  }

  const chanceOfFindPerCheck = 1 - Math.pow(1 - majorLeft / (player.checks_remaining - nChecks / 2 + 1 / 2), nChecks);
  const val = Math.min(Math.max(chanceOfFindPerCheck, 0.05), 0.14);
  const percentage = (val - 0.05) / (0.14 - 0.05);
  const hue = percentage * 120;
  document.getElementById("major_probability").style.color = `hsl(${hue}, 100%, 45%)`;

  document.getElementById("theLetterN").innerHTML = "(" + ((1 - Math.pow(1 - majorLeft / (player.checks_remaining - nChecks / 2 + 1 / 2), nChecks)) * 100).toFixed(1) + "%) n"
}

function updateWothBorders() {
  let AreaSongChecks = [[], [], ["text_eponasCheck"], ["text_timeCheck"], [], [], [], [], [], ["text_preludeCheck"], [], ["text_serenadeCheck"], [], [], ["text_sariasCheck", "text_minuetCheck"], [], [], [], ["text_boleroCheck"], ["text_stormsCheck", "text_nocturneCheck"], ["text_sunsCheck"], [], [], ["text_requiemCheck"], [], [], [], [], [], [], [], [], [], [], [], []];
  let AreaSongChecksWithoutText = [[], [], ["eponasCheck"], ["timeCheck"], [], [], [], [], [], ["preludeCheck"], [], ["serenadeCheck"], [], [], ["sariasCheck", "minuetCheck"], [], [], [], ["boleroCheck"], ["stormsCheck", "nocturneCheck"], ["sunsCheck"], [], [], ["requiemCheck"], [], [], [], [], [], [], [], [], [], [], [], []];

  for (var i = 1; i <= 35; i++) {
    if ((Area[i] == "woth" || Area[i] == "woth1" || Area[i] == "2woth" || Area[i] == "3woth" || Area[i] == "4woth" || Area[i] == "5woth") && colorWothAreas) {
      for (var j = 0; j < AreaSongChecks[i].length; j++) {
        var songText = AreaSongChecks[i][j];
        if ((isCheckHinted[AreaSongChecksWithoutText[i][j]] == false || isCheckHinted[AreaSongChecksWithoutText[i][j]] == undefined) && !alwaysHints.includes(AreaSongChecksWithoutText[i][j])) {
          document.getElementById(songText).style.border = "solid 2px";
        }
        else {
          document.getElementById(songText).style.border = "";
        }
      }

      areaToCheckMap[AreaNames[i]].forEach(loc => {
        if (!alwaysHints.includes(loc) && (isCheckHinted[loc] == false || isCheckHinted[loc] == undefined) && !loc.startsWith("h_")) {
          document.getElementById("text_" + loc).style.border = "solid cyan 1px";
        }
        else
          document.getElementById("text_" + loc).style.border = "";
      });
    }
    else if (Area[i] == "barren") {
      for (var j = 0; j < AreaSongChecks[i].length; j++) {
        var songText = AreaSongChecks[i][j];
        document.getElementById(songText).style.border = "solid 2px red";
      }

      areaToCheckMap[AreaNames[i]].forEach(loc => {
        if (!loc.startsWith("h_"))
          document.getElementById("text_" + loc).style.border = "solid red 1px";
        else
          document.getElementById("text_" + loc).style.border = "";
      });
    }
    else {
      areaToCheckMap[AreaNames[i]]?.forEach(loc => {
        if (checkToItemMap[loc] == "unknown") {
          document.getElementById("text_" + loc).style.border = "none";
        }
      });

      for (var j = 0; j < AreaSongChecks[i].length; j++) {
        var songText = AreaSongChecks[i][j];

        document.getElementById(songText).style.border = "none";
      }

    }
  }
}

function updateUsefulAreaItems() {
  if (player.can_see) {
    highlightFirstVisible("Shadow", "pink");
  }

  if (player.silver_scale) {
    const scaleAreas = ["River", "Domain", "Hylia", "Lost Woods"];
    scaleAreas.forEach(area => highlightFirstVisible(area, "silver"));
  }

  function highlightFirstVisible(areaKey, color) {
    const locations = areaToCheckMap[areaKey] || [];

    for (const loc of locations) {
      const element = document.getElementById(loc);

      if (element?.style.display === "inline-block" && element?.style.visibility === "visible") {
        const textElement = document.getElementById("text_" + loc);
        if (textElement) {
          textElement.innerHTML = colorFirstLetter(textElement.innerHTML, color);
        }
        return true;
      }
    }
    return false;
  }
}

function updateChecklistEntrances() {
  const domIds = ["deku", "dodongos", "jabu", "forest", "fire", "water", "shadow", "spirit", "well", "ice", "gtg"];

  const entranceImages = {
    "deku": { from: "kokiri", to: "deku" },
    "dodongos": { from: "dmt", to: "dodongos" },
    "jabu": { from: "fountain", to: "jabu" },
    "forest": { from: "sfm", to: "forest" },
    "fire": { from: "dmc", to: "fire" },
    "water": { from: "hylia", to: "water" },
    "shadow": { from: "graveyard", to: "shadow" },
    "spirit": { from: "colossus", to: "spirit" },
    "well": { from: "kakariko", to: "well" },
    "ice": { from: "fountain", to: "ice" },
    "gtg": { from: "fortress", to: "gtg" }
  };

  const basePath = "./normal/areas/";

  for (let i = 0; i < dungs_list.length; i++) {
    const dungeonKey = dungs_list[i];
    const elementPrefix = domIds[i];
    const entranceType = dungeonToEntrance_ER_dict[dungeonKey];

    const imageData = entranceImages[entranceType];

    if (imageData) {
      document.getElementById(`${elementPrefix}_from`).src = `${basePath}${imageData.from}.jpg`;
      document.getElementById(`${elementPrefix}_to`).src = `${basePath}${imageData.to}.jpg`;
    }
  }
}

function updateDungeonER() {
  // if dungeon er is off, dungeons go to their intended destinations
  if (rules.dungeonEr != "ganonsExcluded") {
    document.getElementById("dungeon_er_input_div").style.display = "none";
    document.getElementById("dungeons_summary").style.display = "none";

    for (let d = 0; d < dungs_list.length; d++) {
      dungeonToEntrance_ER_dict[dungs_list[d]] = dungs_list[d];
      entranceToDungeon_ER_dict[dungs_list[d]] = dungs_list[d];
    }
  }
  else {
    // else, dungeon er is on, so figure out where each dungeon goes
    document.getElementById("dungeon_er_input_div").style.display = "block";
    document.getElementById("dungeons_summary").style.display = "block";
    document.getElementById("dungeons_summary").innerHTML = "";
    for (let d = 0; d < dungs_list.length; d++) {
      document.getElementById("dungeons_summary").innerHTML += dungs_list2[dungs_list[d]] + " &#8594; ?<br>";
    }

    for (let d = 0; d < dungs_list.length; d++) {
      dungeonToEntrance_ER_dict[dungs_list[d]] = "";
      entranceToDungeon_ER_dict[dungs_list[d]] = "";
    }

    // if er dungeon inputs are valid, update dictionaries
    er_input_string = document.getElementById("mark_ER_Dungeons").value;
    if (er_input_string.length == 22) {

      dungeon_er_inputs = [];
      document.getElementById("dungeons_summary").innerHTML = "<u>Entrance &#8594; Dungeon</u><br>";

      for (i = 0; i < 11; i++) {
        dungeon_er_inputs.push(er_input_string.substring(i * 2, i * 2 + 2));
      }

      for (let d = 0; d < dungs_list.length; d++) {
        entranceToDungeon_ER_dict[dungs_list[d]] = dungs_list[dungs_list_short.indexOf(dungeon_er_inputs[d])];
        dungeonToEntrance_ER_dict[dungs_list[dungs_list_short.indexOf(dungeon_er_inputs[d])]] = dungs_list[d];

        med_str = getDungeonERMedStr(entranceToDungeon_ER_dict[dungs_list[d]])
        color = getDungeonERColor(d);

        document.getElementById("dungeons_summary").innerHTML +=
          med_str + "<span data-idx='" + d + "' style='color:" + color + "; text-decoration:" + dungs_strike[d] + ";' onmousedown='highlightDungeonEntrance(this)'>" +
          dungs_list2[dungs_list[d]] + " &#8594; " + dungs_list2[entranceToDungeon_ER_dict[dungs_list[d]]] + "</span><br>";
      }
    }
  }

  update_dungeon_ER_Logic();
  updateChecklistEntrances();
}

function getDungeonERMedStr(dest) {
  if (rules.preset == "s9") {
    dest_code = dest.substring(0, 2);
    med_str = document.getElementById("markMedallions").value;
    if (dest_code == med_str.substring(0, 2)) {  // light med
      return "<img src='./normal/items/light.png' class='medallions small'>";
    } else if (dest_code == med_str.substring(2, 4)) {  // forest med
      return "<img src='./normal/items/forest.png' class='medallions small'>";
    } else if (dest_code == med_str.substring(4, 6)) {  // fire med
      return "<img src='./normal/items/fire.png' class='medallions small'>";
    } else if (dest_code == med_str.substring(6, 8)) {  // water med
      return "<img src='./normal/items/water.png' class='medallions small'>";
    } else if (dest_code == med_str.substring(8, 10)) {  // shadow med
      return "<img src='./normal/items/shadow.png' class='medallions small'>";
    } else if (dest_code == med_str.substring(10, 12)) {  // spirit med
      return "<img src='./normal/items/spirit.png' class='medallions small'>";
    }
  }
  return "";
}

function getDungeonERColor(i) {
  if (dungs_strike[i] == "line-through") {
    return "gray";
  }

  return dungs_colors[i];
}

function update_dungeon_ER_Logic() {
  for (let d = 0; d < dungs_list.length; d++) {
    logic[dungs_list[d] + "_access"] = false;
    player[dungs_list[d] + "_access"] = false;
    couldHave[dungs_list[d] + "_access"] = false;
  }

  for (let d = 0; d < dungs_list.length; d++) {
    let enter = dungeonToEntrance_ER_dict[dungs_list[d]];

    if (enter == "deku") {
      logic[dungs_list[d] + "_child_access"] = logic.can_enter_deku_entrance;

      if (rules.dungeonEr == "ganonsExcluded") {
        logic[dungs_list[d] + "_adult_access"] = logic.can_enter_deku_entrance;
      }
      else {
        logic[dungs_list[d] + "_adult_access"] = false;
        player[dungs_list[d] + "_adult_access"] = false;
        couldHave[dungs_list[d] + "_adult_access"] = false;
      }
    }
    else if (enter == "dodongos") {
      logic[dungs_list[d] + "_child_access"] = logic.can_enter_child_dodongos;
      logic[dungs_list[d] + "_adult_access"] = true;
    }
    else if (enter == "jabu") {
      logic[dungs_list[d] + "_child_access"] = logic.jabu_entrance_access;
      logic[dungs_list[d] + "_adult_access"] = false;
    }
    else if (enter == "forest") {
      logic[dungs_list[d] + "_child_access"] = false;
      logic[dungs_list[d] + "_adult_access"] = logic.can_enter_forest_temple_entrance;
    }
    else if (enter == "fire") {
      if (rules.dungeonEr == "ganonsExcluded") {
        logic[dungs_list[d] + "_child_access"] = logic.bolero;
      }
      else {
        logic[dungs_list[d] + "_child_access"] = false;
        player[dungs_list[d] + "_child_access"] = false;
        couldHave[dungs_list[d] + "_child_access"] = false;
      }

      logic[dungs_list[d] + "_adult_access"] = logic.can_enter_fire_temple_entrance;
    }
    else if (enter == "water") {
      logic[dungs_list[d] + "_child_access"] = false;
      logic[dungs_list[d] + "_adult_access"] = logic.can_enter_water_entrance;
    }
    else if (enter == "shadow") {
      logic[dungs_list[d] + "_child_access"] = logic.can_enter_shadow_entrance;
      logic[dungs_list[d] + "_adult_access"] = logic.can_enter_shadow_entrance;
    }
    else if (enter == "spirit") {
      logic[dungs_list[d] + "_child_access"] = logic.can_enter_child_colossus;
      logic[dungs_list[d] + "_adult_access"] = logic.can_enter_colossus;
    }
    else if (enter == "well") {
      logic[dungs_list[d] + "_child_access"] = logic.can_enter_well_entrance;

      if (rules.dungeonEr == "ganonsExcluded") {
        logic[dungs_list[d] + "_adult_access"] = logic.can_enter_well_entrance;
      }
      else {
        logic[dungs_list[d] + "_adult_access"] = false;
        player[dungs_list[d] + "_adult_access"] = false;
        couldHave[dungs_list[d] + "_adult_access"] = false;
      }
    }
    else if (enter == "ice") {
      logic[dungs_list[d] + "_child_access"] = false;
      logic[dungs_list[d] + "_adult_access"] = logic.ice_entrance_access;
    }
    else if (enter == "gtg") {
      logic[dungs_list[d] + "_child_access"] = false;
      logic[dungs_list[d] + "_adult_access"] = logic.gtg_entrance_access;
    }

    logic[dungs_list[d] + "_access"] = logic[dungs_list[d] + "_child_access"] || logic[dungs_list[d] + "_adult_access"];
  }
}