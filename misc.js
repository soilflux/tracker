function highlight(x) {
  var item = "";
  if (document.getElementById(x.id).src.endsWith(player.kokiri_sword_img.substring(2))) { item = "kokiri_sword"; }
  if (document.getElementById(x.id).src.endsWith(player.bomb_img.substring(2))) { item = "bomb_bag"; }
  if (document.getElementById(x.id).src.endsWith(player.iron_boots_img.substring(2))) { item = "iron_boots"; }
  if (document.getElementById(x.id).src.endsWith(player.hover_boots_img.substring(2))) { item = "hover_boots"; }
  if (document.getElementById(x.id).src.endsWith(player.hookshot_img.substring(2))) { item = "hookshot"; }
  if (document.getElementById(x.id).src.endsWith(player.bow_img.substring(2))) { item = "bow"; }
  if (document.getElementById(x.id).src.endsWith(player.goron_bracelet_img.substring(2))) { item = "strength"; }
  if (document.getElementById(x.id).src.endsWith(player.hammer_img.substring(2))) { item = "hammer"; }
  if (document.getElementById(x.id).src.endsWith(player.golden_scale_img.substring(2))) { item = "scale"; }
  if (document.getElementById(x.id).src.endsWith(player.silver_gauntlets_img.substring(2))) { item = "strength"; }
  if (document.getElementById(x.id).src.endsWith(player.magic_img.substring(2))) { item = "magic"; }
  if (document.getElementById(x.id).src.endsWith(player.longshot_img.substring(2))) { item = "hookshot"; }
  if (document.getElementById(x.id).src.endsWith(player.mirror_shield_img.substring(2))) { item = "mirror_shield"; }
  if (document.getElementById(x.id).src.endsWith(player.dins_fire_img.substring(2))) { item = "dins_fire"; }
  if (document.getElementById(x.id).src.endsWith(player.rutos_letter_img.substring(2))) { item = "rutos_letter"; }
  if (document.getElementById(x.id).src.endsWith(player.boomerang_img.substring(2))) { item = "boomerang"; }
  if (document.getElementById(x.id).src.endsWith(player.lens_img.substring(2))) { item = "lens"; }
  if (document.getElementById(x.id).src.endsWith(player.golden_gauntlets_img.substring(2))) { item = "strength"; }
  if (document.getElementById(x.id).src.endsWith(player.silver_scale_img.substring(2))) { item = "scale"; }
  if (document.getElementById(x.id).src.endsWith(player.light_arrows_img.substring(2))) { item = "light_arrows"; }
  if (document.getElementById(x.id).src.endsWith(player.fire_arrows_img.substring(2))) { item = "fire_arrows"; }
  if (document.getElementById(x.id).src.endsWith(player.farores_wind_img.substring(2))) { item = "farores_wind"; }
  if (document.getElementById(x.id).src.endsWith(player.bottle_img.substring(2))) { item = "bottle"; }
  if (document.getElementById(x.id).src.endsWith(player.slingshot_img.substring(2))) { item = "slingshot"; }
  if (document.getElementById(x.id).src.endsWith(player.lullaby_img.substring(2))) { item = "lullaby"; }
  if (document.getElementById(x.id).src.endsWith(player.eponas_img.substring(2))) { item = "eponas"; }
  if (document.getElementById(x.id).src.endsWith(player.sarias_img.substring(2))) { item = "sarias"; }
  if (document.getElementById(x.id).src.endsWith(player.suns_img.substring(2))) { item = "suns_song"; }
  if (document.getElementById(x.id).src.endsWith(player.time_img.substring(2))) { item = "song_of_time"; }
  if (document.getElementById(x.id).src.endsWith(player.storms_img.substring(2))) { item = "song_of_storms"; }
  if (document.getElementById(x.id).src.endsWith(player.minuet_img.substring(2))) { item = "minuet"; }
  if (document.getElementById(x.id).src.endsWith(player.bolero_img.substring(2))) { item = "bolero"; }
  if (document.getElementById(x.id).src.endsWith(player.serenade_img.substring(2))) { item = "serenade"; }
  if (document.getElementById(x.id).src.endsWith(player.requiem_img.substring(2))) { item = "requiem"; }
  if (document.getElementById(x.id).src.endsWith(player.nocturne_img.substring(2))) { item = "nocturne"; }
  if (document.getElementById(x.id).src.endsWith(player.prelude_img.substring(2))) { item = "prelude"; }

  if (event.button == 2) {
    searchingFors = document.getElementsByClassName("searchingFor_images");
    l = searchingFors.length;
    flag = false;
    if (item == "scale" || item == "bomb_bag" || item == "bow" || item == "wallet" || item == "strength" || item == "hookshot" || item == "slingshot" || item == "magic") { item = item + '1' }
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
          if (searchingFors[i].style.display == "none" || searchingFors[i].style.visibility == "hidden") {
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
          searchItems.splice(searchItems.indexOf(ItemNames[Items.indexOf(item)]), 1)
          break;
        }
      }
    }
  }

  else if (event.button == 0) {

    if (x.id == "silverscaleimg") {
      if (player.golden_scale == true) {
        player.scale1 = false;
        player.scale2 = false;
        document.getElementById(x.id).src = player.silver_scale_img;
        x.style.opacity = .2;
      }
      else if (x.style.opacity == 1) {
        player.scale2 = true;
        document.getElementById(x.id).src = player.golden_scale_img;
      }
      else {
        player.scale1 = true;
        x.style.opacity = 1;
      }
    }
    else {
      if (x.style.opacity == 1) { x.style.opacity = .2; }
      else { x.style.opacity = 1; }
    }
    if (x.id == "for_med") {
      if (x.style.opacity == 1) { logic.forest_medallion = true; }
    }
    else if (document.getElementById(x.id).style.opacity == 1) {
      if (document.getElementById(x.id).src.endsWith(player.kokiri_sword_img.substring(2))) { player.kokiri_sword = true; }
      if (document.getElementById(x.id).src.endsWith(player.bomb_img.substring(2))) { player.bomb_bag1 = true; }
      if (document.getElementById(x.id).src.endsWith(player.iron_boots_img.substring(2))) { player.iron_boots = true; }
      if (document.getElementById(x.id).src.endsWith(player.hover_boots_img.substring(2))) { player.hover_boots = true; }
      if (document.getElementById(x.id).src.endsWith(player.hookshot_img.substring(2))) { player.hookshot1 = true; }
      if (document.getElementById(x.id).src.endsWith(player.bow_img.substring(2))) { player.bow1 = true; }
      if (document.getElementById(x.id).src.endsWith(player.goron_bracelet_img.substring(2))) { player.strength1 = true; }
      if (document.getElementById(x.id).src.endsWith(player.hammer_img.substring(2))) { player.hammer = true; }
      if (document.getElementById(x.id).src.endsWith(player.golden_scale_img.substring(2))) { player.scale1 = true; player.scale2 = true; }
      if (document.getElementById(x.id).src.endsWith(player.silver_gauntlets_img.substring(2))) { player.strength1 = true; player.strength2 = true; }
      if (document.getElementById(x.id).src.endsWith(player.magic_img.substring(2))) { player.magic1 = true; }
      if (document.getElementById(x.id).src.endsWith(player.longshot_img.substring(2))) { player.hookshot1 = true; player.hookshot2 = true; }
      if (document.getElementById(x.id).src.endsWith(player.mirror_shield_img.substring(2))) { player.mirror_shield = true; }
      if (document.getElementById(x.id).src.endsWith(player.dins_fire_img.substring(2))) { player.dins_fire = true; }
      if (document.getElementById(x.id).src.endsWith(player.rutos_letter_img.substring(2))) { player.rutos_letter = true; }
      if (document.getElementById(x.id).src.endsWith(player.boomerang_img.substring(2))) { player.boomerang = true; }
      if (document.getElementById(x.id).src.endsWith(player.lens_img.substring(2))) { player.lens = true; }
      if (document.getElementById(x.id).src.endsWith(player.golden_gauntlets_img.substring(2))) { player.strength1 = true; player.strength2 = true; player.strength3 = true; }
      if (document.getElementById(x.id).src.endsWith(player.silver_scale_img.substring(2))) { player.scale1 = true; }
      if (document.getElementById(x.id).src.endsWith(player.light_arrows_img.substring(2))) { player.light_arrows = true; }
      if (document.getElementById(x.id).src.endsWith(player.fire_arrows_img.substring(2))) { player.fire_arrows = true; }
      if (document.getElementById(x.id).src.endsWith(player.farores_wind_img.substring(2))) { player.farores_wind = true; }
      if (document.getElementById(x.id).src.endsWith(player.bottle_img.substring(2))) { player.bottle1 = true; }
      if (document.getElementById(x.id).src.endsWith(player.slingshot_img.substring(2))) { player.slingshot1 = true; }
      if (document.getElementById(x.id).src.endsWith(player.lullaby_img.substring(2))) { player.lullaby = true; }
      if (document.getElementById(x.id).src.endsWith(player.eponas_img.substring(2))) { player.eponas = true; }
      if (document.getElementById(x.id).src.endsWith(player.sarias_img.substring(2))) { player.sarias = true; }
      if (document.getElementById(x.id).src.endsWith(player.suns_img.substring(2))) { player.suns = true; }
      if (document.getElementById(x.id).src.endsWith(player.time_img.substring(2))) { player.time = true; }
      if (document.getElementById(x.id).src.endsWith(player.storms_img.substring(2))) { player.storms = true; }
      if (document.getElementById(x.id).src.endsWith(player.minuet_img.substring(2))) { player.minuet = true; }
      if (document.getElementById(x.id).src.endsWith(player.bolero_img.substring(2))) { player.bolero = true; }
      if (document.getElementById(x.id).src.endsWith(player.serenade_img.substring(2))) { player.serenade = true; }
      if (document.getElementById(x.id).src.endsWith(player.requiem_img.substring(2))) { player.requiem = true; }
      if (document.getElementById(x.id).src.endsWith(player.nocturne_img.substring(2))) { player.nocturne = true; }
      if (document.getElementById(x.id).src.endsWith(player.prelude_img.substring(2))) { player.prelude = true; }
      if (document.getElementById(x.id).src.endsWith(player.chu_img.substring(2))) { player.bombchus1 = true; }
    }
    else {
      if (document.getElementById(x.id).src.endsWith(player.kokiri_sword_img.substring(2))) { player.kokiri_sword = false; }
      if (document.getElementById(x.id).src.endsWith(player.bomb_img.substring(2))) { player.bomb_bag1 = false; }
      if (document.getElementById(x.id).src.endsWith(player.iron_boots_img.substring(2))) { player.iron_boots = false; }
      if (document.getElementById(x.id).src.endsWith(player.hover_boots_img.substring(2))) { player.hover_boots = false; }
      if (document.getElementById(x.id).src.endsWith(player.hookshot_img.substring(2))) { player.hookshot1 = false; player.hookshot2 = false; }
      if (document.getElementById(x.id).src.endsWith(player.bow_img.substring(2))) { player.bow1 = false; }
      if (document.getElementById(x.id).src.endsWith(player.goron_bracelet_img.substring(2))) { player.strength1 = false; player.strength2 = false; player.strength3 = false; }
      if (document.getElementById(x.id).src.endsWith(player.hammer_img.substring(2))) { player.hammer = false; }
      if (document.getElementById(x.id).src.endsWith(player.golden_scale_img.substring(2))) { player.scale2 = false; }
      if (document.getElementById(x.id).src.endsWith(player.silver_gauntlets_img.substring(2))) { player.strength2 = false; player.strength3 = false; }
      if (document.getElementById(x.id).src.endsWith(player.magic_img.substring(2))) { player.magic1 = false; }
      if (document.getElementById(x.id).src.endsWith(player.longshot_img.substring(2))) { player.hookshot2 = false; }
      if (document.getElementById(x.id).src.endsWith(player.mirror_shield_img.substring(2))) { player.mirror_shield = false; }
      if (document.getElementById(x.id).src.endsWith(player.dins_fire_img.substring(2))) { player.dins_fire = false; }
      if (document.getElementById(x.id).src.endsWith(player.rutos_letter_img.substring(2))) { player.rutos_letter = false; }
      if (document.getElementById(x.id).src.endsWith(player.boomerang_img.substring(2))) { player.boomerang = false; }
      if (document.getElementById(x.id).src.endsWith(player.lens_img.substring(2))) { player.lens = false; }
      if (document.getElementById(x.id).src.endsWith(player.golden_gauntlets_img.substring(2))) { player.strength3 = false; }
      if (document.getElementById(x.id).src.endsWith(player.silver_scale_img.substring(2))) { player.scale1 = false; }
      if (document.getElementById(x.id).src.endsWith(player.light_arrows_img.substring(2))) { player.light_arrows = false; }
      if (document.getElementById(x.id).src.endsWith(player.fire_arrows_img.substring(2))) { player.fire_arrows = false; }
      if (document.getElementById(x.id).src.endsWith(player.farores_wind_img.substring(2))) { player.farores_wind = false; }
      if (document.getElementById(x.id).src.endsWith(player.bottle_img.substring(2))) { player.bottle1 = false; }
      if (document.getElementById(x.id).src.endsWith(player.slingshot_img.substring(2))) { player.slingshot1 = false; }
      if (document.getElementById(x.id).src.endsWith(player.lullaby_img.substring(2))) { player.lullaby = false; }
      if (document.getElementById(x.id).src.endsWith(player.eponas_img.substring(2))) { player.eponas = false; }
      if (document.getElementById(x.id).src.endsWith(player.sarias_img.substring(2))) { player.sarias = false; }
      if (document.getElementById(x.id).src.endsWith(player.suns_img.substring(2))) { player.suns = player.suns = false; }
      if (document.getElementById(x.id).src.endsWith(player.time_img.substring(2))) { player.time = false; }
      if (document.getElementById(x.id).src.endsWith(player.storms_img.substring(2))) { player.storms = false; }
      if (document.getElementById(x.id).src.endsWith(player.minuet_img.substring(2))) { player.minuet = false; }
      if (document.getElementById(x.id).src.endsWith(player.bolero_img.substring(2))) { player.bolero = false; }
      if (document.getElementById(x.id).src.endsWith(player.serenade_img.substring(2))) { player.serenade = false; }
      if (document.getElementById(x.id).src.endsWith(player.requiem_img.substring(2))) { player.requiem = false; }
      if (document.getElementById(x.id).src.endsWith(player.nocturne_img.substring(2))) { player.nocturne = false; }
      if (document.getElementById(x.id).src.endsWith(player.prelude_img.substring(2))) { player.prelude = false; }
      if (document.getElementById(x.id).src.endsWith(player.chu_img.substring(2))) { player.bombchus1 = false; }
    }


    if (x.id == "fir_med" && x.style.opacity == 1) { logic.fire_medallion = true; }
    if (x.id == "wat_med" && x.style.opacity == 1) { logic.water_medallion = true; }
    if (x.id == "spi_med" && x.style.opacity == 1) { logic.spirit_medallion = true; }
    if (x.id == "sha_med" && x.style.opacity == 1) { logic.shadow_medallion = true; }
    if (x.id == "lit_med" && x.style.opacity == 1) { logic.light_medallion = true; }

    if (x.id == "kok_eme" && x.style.opacity == 1) { logic.kokiri_emerald = true; }
    if (x.id == "gor_rub" && x.style.opacity == 1) { logic.goron_ruby = true; }
    if (x.id == "zor_sap" && x.style.opacity == 1) { logic.zora_sapphire = true; }
  }
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

function whoAmI() {
  if (person.type == "soli") {
    person.type = "normie";
    localStorage.setItem("type", "normie");
    player.themeChange = true;
    Update();
  }
  else if (person.type == "normie") {
    person.type = "soli";
    localStorage.setItem("type", "soli");
    player.themeChange = true;
    Update();
  }
}

function altThemeControl() {
  if (colorTheme == "dark") { colorTheme = "light"; localStorage.setItem("theme", colorTheme); document.getElementById("altThemeControl").innerHTML = "Light Theme"; }
  else { colorTheme = "dark"; localStorage.setItem("theme", colorTheme); document.getElementById("altThemeControl").innerHTML = "Dark Theme"; }
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
    button.textContent = "Show itemToCheckMap Headers";
    localStorage.setItem("showAreaTitles", "false");
  } else {
    button.textContent = "Hide itemToCheckMap Headers";
    localStorage.setItem("showAreaTitles", "true");
  }
}

function toggleSettings() {
  if (logic.brackets) {
    logic.brackets = false;
    document.getElementById("SettingsToggle").innerHTML = "Switch to Brackets";
    Update();
  }
  else {
    logic.brackets = true;
    document.getElementById("SettingsToggle").innerHTML = "Switch to Weekly";
    Update();
  }
}

function inputPresets() {
  if (document.getElementById("inputPresets").value == "LEGACY") {
    inputs = ["x", "sk", "bk", "bom", "chu", "boo", "bot", "big", "bow", "din", "far", "fir", "gor", "ham", "hoo", "hov", "iro", "kok", "len", "rut", "lig", "mag", "mir", "sca", "sli", "str", "scr", "cla", "wal", "zor", "ice", "bgs", "nay", "sto", "fok", "fik", "wak", "spk", "shk", "wek", "gek", "gak", "ger", "bea", "lul", "epo", "sar", "sot", "sun", "sos", "min", "bol", "ser", "req", "noc", "pre"];
  }
  else if (document.getElementById("inputPresets").value == "RECOMMENDED") {
    inputs = ["x", "a", "q", "bm", "ch", "bo", "bt", "bi", "bw", "di", "fa", "fi", "go", "ha", "ho", "hv", "ir", "ko", "le", "ru", "li", "ma", "mr", "sc", "sl", "st", "ip", "cl", "wa", "zo", "ic", "bg", "na", "ny", "5fo", "5fi", "5wa", "5sp", "5sh", "5we", "5ge", "5ga", "ge", "be", "lu", "ep", "sa", "ti", "su", "so", "mi", "bl", "se", "re", "no", "pr"];
  }

  var parent = document.getElementById("inputConfig");
  for (var i = 0; i < inputs.length; i++) {
    if (document.getElementById("inputPresets").value == "CUSTOM") {
      if (localStorage.getItem(inputNames[i])) {
        inputs[i] = localStorage.getItem(inputNames[i]);
      }
    }
    document.getElementById(inputNames[i]).value = inputs[i];
  }
}

function saveInputs() {
  for (var i = 0; i < inputs.length; i++) {
    localStorage.setItem(inputNames[i], inputs[i]);
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
  if (paused) { paused = false; document.getElementById("timerControl").innerHTML = "Pause"; }
  else { paused = true; document.getElementById("timerControl").innerHTML = "Resume"; }
  timerStuff();
}

function hamsdaToggle() {
  hamsda = !hamsda;
  localStorage.setItem("hamsda", hamsda);
  if (!hamsda)
    document.getElementById("hamsdaToggle").innerHTML = "Enable Hamsda Tracking";
  else
    document.getElementById("hamsdaToggle").innerHTML = "Disable Hamsda Tracking";
}

function nerfControl() {
  if (nerfed) {
    nerfed = false;
    document.getElementById("skullsInLogicList").style.display = "inline-block";
  }
  else {
    nerfed = true;
    document.getElementById("skullsInLogicList").style.display = "none";
  }
  Update();
}

function saveStuff() {
  localStorage.setItem("simSeed", document.getElementById("simSeed").value);
  localStorage.setItem("desiredAnimal", document.getElementById("desiredAnimal").value);
  localStorage.setItem("quest1", document.getElementById("quest1").value);
  localStorage.setItem("inputPresets", document.getElementById("inputPresets").value);
}

function linsoControl() {
  if (linso) {
    linso = false;
    localStorage.setItem("linso", linso);
    document.getElementById("linsoControl").innerHTML = "Show LinSo";
    document.getElementById("soli_woth_info").appendChild(document.getElementById("woth_info"));
    document.getElementById("woth_info").style.top = "560px"; document.getElementById("woth_info").style.marginLeft = "0px";
    document.getElementById("checkSummaryColumn1").style.top = "45px"; document.getElementById("checkSummaryColumn1").style.left = "1030px";

  }
  else {
    linso = true;
    localStorage.setItem("linso", linso);
    document.getElementById("linsoControl").innerHTML = "Hide LinSo";
    document.getElementById("linsoColumn").appendChild(document.getElementById("woth_info"));
    document.getElementById("woth_info").style.top = "400px"; document.getElementById("woth_info").style.marginLeft = "3px";
    document.getElementById("checkSummaryColumn1").style.top = "0px"; document.getElementById("checkSummaryColumn1").style.left = "550px";
  }
}

function inaccessibleControl() {
  if (hideInaccessible) { hideInaccessible = false; localStorage.setItem("hideInaccessible", hideInaccessible); document.getElementById("inaccessibleControl").innerHTML = "Hide Inaccessible"; }
  else { hideInaccessible = true; localStorage.setItem("hideInaccessible", hideInaccessible); document.getElementById("inaccessibleControl").innerHTML = "Show Inaccessible"; }
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
  if (rules.flashOnInput === "off") {
    return;
  }
  const toFlash = document.getElementById('hintInput');

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
      document.getElementById(lastCheck[lastCheck.length - 1]).style.backgroundImage = player[AreaNames[i] + "_img"];
    }
  }


  itemToCheckMap[checkToItemMap[lastCheck[lastCheck.length - 1]]] = "unknown";
  player[checkToItemMap[lastCheck[lastCheck.length - 1]]] = false;
  knownItems[checkToItemMap[lastCheck[lastCheck.length - 1]]] = false;
  logic[checkToItemMap[lastCheck[lastCheck.length - 1]]] = false;
  checkToItemMap[lastCheck[lastCheck.length - 1]] = "unknown";
  document.getElementById(lastCheck[lastCheck.length - 1]).value = "";
  lastCheck.pop();
  midUpdate();
}