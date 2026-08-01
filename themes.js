const itemToImageMap = {
  "chus": "chu",
  "rutos_letter": "rutos_letter",
  "boomerang": "boomerang",
  "hookshot": "hookshot",
  "bow": "bow",
  "goron_bracelet": "goron_bracelet",
  "lens": "lens",
  "golden_gauntlets": "golden_gauntlets",
  "hammer": "hammer",
  "irons": "iron_boots",
  "kokiri_sword": "kokiri_sword",
  "silver_scale": "silver_scale",
  "golden_scale": "golden_scale",
  "longshot": "longshot",
  "silver_gauntlets": "silver_gauntlets",
  "mirror": "mirror_shield",
  "dins": "dins_fire",
  "magic": "magic",
  "magic_2": "magic_2",
  "hovers": "hover_boots",
  "light_arrows": "light_arrows",
  "fire_arrows": "fire_arrows",
  "farores": "farores_wind",
  "bottle": "bottle",
  "sling": "slingshot",
  "lullaby": "lullaby",
  "eponas": "eponas",
  "sarias": "sarias",
  "suns": "suns",
  "time": "time",
  "storms": "storms",
  "minuet": "minuet",
  "bolero": "bolero",
  "serenade": "serenade",
  "requiem": "requiem",
  "nocturne": "nocturne",
  "prelude": "prelude",
  "wallet1": "adults_wallet",
  "boots": "boots",
  "stone_of_agony": "stone_of_agony",
  "antidote": "antidote",
  "big_poe": "big_poe",
  "biggoron_sword": "biggoron_sword",
  "blue_chicken": "blue_chicken",
  "bombs": "bomb",
  "broken_sword": "broken_sword",
  "bunny_hood": "bunny_hood",
  "chicken1": "chicken1",
  "chicken2": "chicken2",
  "claim_check": "claim_check",
  "deku_shield": "deku_shield",
  "egg1": "egg1",
  "egg2": "egg2",
  "eyeball_frog": "eyeball_frog",
  "eyedrops": "eyedrops",
  "gerudo_card": "gerudo_card",
  "gerudo_mask": "gerudo_mask",
  "wallet2": "giants_wallet",
  "goron_mask": "goron_mask",
  "goron_tunic": "goron_tunic",
  "hylian_shield": "hylian_shield",
  "ice_arrows": "ice_arrows",
  "forest_key_ring": "forest-temple-key",
  "fire_key_ring": "fire-temple-key",
  "water_key_ring": "water-temple-key",
  "spirit_key_ring": "spirit-temple-key",
  "shadow_key_ring": "shadow-temple-key",
  "gtg_key_ring": "gtg-key",
  "well_key_ring": "botw-key",
  "ganons_key_ring": "ganon-key",
  "keaton_mask": "keaton_mask",
  "kokiri_boots": "kokiri_boots",
  "kokiri_tunic": "kokiri_tunic",
  "magic_bean_pack": "beans",
  "mask_of_truth": "mask_of_truth",
  "master_sword": "master_sword",
  "nayrus_love": "nayrus_love",
  "nut": "nut",
  "ocarina": "ocarina",
  "odd_mushroom": "odd_mushroom",
  "poachers_saw": "poachers_saw",
  "prescription": "prescription",
  "skull_mask": "skull_mask",
  "skull_token": "skull_token",
  "spooky_mask": "spooky_mask",
  "stick": "stick",
  "zeldas_letter": "zeldas_letter",
  "zora_mask": "zora_mask",
  "zora_tunic": "zora_tunic",
  "emerald": "emerald",
  "ruby": "ruby",
  "sapphire": "sapphire",
  "forestMedallion": "forest",
  "fireMedallion": "fire",
  "waterMedallion": "water",
  "shadow": "shadow",
  "spirit": "spirit",
  "light": "light"
};

const areaToImageMap = {
  "Kokiri": "kokiri",
  "Ranch": "ranch",
  "Field": "field",
  "Valley": "valley",
  "Hylia": "hylia",
  "Market": "market",
  "Hyr Cas": "hyrule_castle",
  "OGC": "ogc",
  "ToT": "tot",
  "Fountain": "fountain",
  "Ice": "ice",
  "Deku": "deku",
  "Lost Woods": "lost_woods",
  "SFM": "sfm",
  "Goron City": "goron",
  "Dodongos": "dodongos",
  "Trail": "dmt",
  "Crater": "dmc",
  "Kakariko": "kakariko",
  "Graveyard": "graveyard",
  "River": "river",
  "Domain": "domain",
  "Colossus": "colossus",
  "Wasteland": "wasteland",
  "Fortress": "fortress",
  "Jabu": "jabu",
  "Forest": "forest",
  "Fire": "fire",
  "Water": "water",
  "Shadow": "shadow",
  "Spirit": "spirit",
  "Well": "well",
  "GTG": "gtg",
  "Ganon's": "ganons"
};

const itemImages = [
  itemToImageMap["farores"],
  itemToImageMap["sling"],
  itemToImageMap["sling"],
  itemToImageMap["sling"],
  itemToImageMap["boomerang"],
  itemToImageMap["silver_scale"],
  itemToImageMap["silver_scale"],
  itemToImageMap["rutos_letter"],
  itemToImageMap["bottle"],
  itemToImageMap["bottle"],
  itemToImageMap["bottle"],
  itemToImageMap["bottle"],
  itemToImageMap["bombs"],
  itemToImageMap["bombs"],
  itemToImageMap["bombs"],
  itemToImageMap["chus"],
  itemToImageMap["chus"],
  itemToImageMap["chus"],
  itemToImageMap["chus"],
  itemToImageMap["chus"],
  itemToImageMap["hammer"],
  itemToImageMap["bow"],
  itemToImageMap["bow"],
  itemToImageMap["bow"],
  itemToImageMap["hookshot"],
  itemToImageMap["longshot"],
  itemToImageMap["goron_bracelet"],
  itemToImageMap["silver_gauntlets"],
  itemToImageMap["golden_gauntlets"],
  itemToImageMap["mirror"],
  itemToImageMap["magic"],
  itemToImageMap["magic_2"],
  itemToImageMap["irons"],
  itemToImageMap["kokiri_sword"],
  itemToImageMap["hovers"],
  itemToImageMap["wallet1"],
  itemToImageMap["wallet1"],
  itemToImageMap["wallet2"],
  itemToImageMap["goron_tunic"],
  itemToImageMap["zora_tunic"],
  itemToImageMap["dins"],
  itemToImageMap["fire_arrows"],
  itemToImageMap["lens"],
  itemToImageMap["prescription"],
  itemToImageMap["claim_check"],
  itemToImageMap["light_arrows"],
  itemToImageMap["ice_arrows"],
  itemToImageMap["biggoron_sword"],
  itemToImageMap["nayrus_love"],
  itemToImageMap["stone_of_agony"],
  itemToImageMap["forest_key_ring"],
  itemToImageMap["fire_key_ring"],
  itemToImageMap["water_key_ring"],
  itemToImageMap["spirit_key_ring"],
  itemToImageMap["shadow_key_ring"],
  itemToImageMap["well_key_ring"],
  itemToImageMap["gtg_key_ring"],
  itemToImageMap["ganons_key_ring"],
  itemToImageMap["gerudo_card"],
  itemToImageMap["magic_bean_pack"],
  itemToImageMap["lullaby"],
  itemToImageMap["eponas"],
  itemToImageMap["suns"],
  itemToImageMap["sarias"],
  itemToImageMap["storms"],
  itemToImageMap["minuet"],
  itemToImageMap["bolero"],
  itemToImageMap["requiem"],
  itemToImageMap["nocturne"],
  itemToImageMap["time"],
  itemToImageMap["prelude"],
  itemToImageMap["serenade"]
];

function getImagePath(areaOrItem) {
  const directory = itemToImageMap[areaOrItem] ? "items" : "areas";
  areaOrItem = itemToImageMap[areaOrItem] ?? areaToImageMap[areaOrItem];
  if (directory == 'areas') return `url('./${rules.theme}/${directory}/${areaOrItem}.png')`;
  else return `./${rules.theme}/${directory}/${areaOrItem}.png`
}

function original() {
  for (var i = 0; i < checks.length; i++) {
    var key = checks[i];
    let areaName = checkToAreaMap[checks[i]];
    let imgFile = getImagePath(areaName);
    if (imgFile) {
      document.getElementById(key).style.backgroundImage = imgFile;
    }
  }
}

function normal() {
  player.chicken2_img = "./normal/items/chicken2.png";
  player.egg2_img = "./normal/items/egg2.png";
  player.eyeball_frog_img = "./normal/items/eyeball_frog.png";
  player.eyedrops_img = "./normal/items/eyedrops.png";
  player.zeldas_letter_img = "./normal/items/zeldas_letter.png";

  for (var i = 0; i < checks.length; i++) {
    var key = checks[i];
    let areaName = checkToAreaMap[checks[i]];
    let imgFile = getImagePath(areaName);
    if (imgFile) {
      document.getElementById(key).style.backgroundImage = imgFile;
    }
  }
  document.getElementById("lullabyimg").src = getImagePath("lullaby");
  document.getElementById("eponasimg").src = getImagePath("eponas");
  document.getElementById("sariasimg").src = getImagePath("sarias");
  document.getElementById("sunsimg").src = getImagePath("suns");
  document.getElementById("timeimg").src = getImagePath("time");
  document.getElementById("stormsimg").src = getImagePath("storms");
  document.getElementById("minuetimg").src = getImagePath("minuet");
  document.getElementById("boleroimg").src = getImagePath("bolero");
  document.getElementById("serenadeimg").src = getImagePath("serenade");
  document.getElementById("requiemimg").src = getImagePath("requiem");
  document.getElementById("nocturneimg").src = getImagePath("nocturne");
  document.getElementById("preludeimg").src = getImagePath("prelude");
}

function updateTheme() {
  if (rules.theme == "original") original();
  else if (rules.theme == "normal") normal();
}

function updateColorScheme() {
  if (rules.colorScheme == "light") {
    document.getElementById('row').style.backgroundColor = '#576166';
    document.querySelectorAll('.hint_input').forEach(e => { e.style.backgroundColor = '#404040'; e.style.color = 'white'; });
    document.querySelectorAll('.super_hint_input').forEach(e => { e.style.backgroundColor = '#404040'; e.style.color = 'white'; });
    document.querySelectorAll('.checked_text_summary_ool').forEach(e => { e.style.color = 'black'; });
    document.querySelectorAll('.check_input').forEach(e => { e.style.backgroundColor = '#404040'; e.style.color = 'white'; });
    document.querySelectorAll('.alt_hint_input').forEach(e => { e.style.backgroundColor = '#404040'; e.style.color = 'white'; });
    document.querySelectorAll('.layout_input').forEach(e => { e.style.backgroundColor = '#404040'; e.style.color = 'white'; });
    document.querySelectorAll('.mark_spawn').forEach(e => { e.style.backgroundColor = '#404040'; e.style.color = 'white'; });
    document.querySelectorAll('.simLog').forEach(e => { e.style.backgroundColor = '#404040'; e.style.color = 'white'; });
    document.querySelectorAll('.ool_check_text').forEach(e => { e.style.color = 'black'; });
    document.documentElement.style.setProperty('--ool-font-color', 'black');
  }
  else {
    document.getElementById('row').style.backgroundColor = '#181818';
    document.querySelectorAll('.hint_input').forEach(e => { e.style.backgroundColor = '#121212'; e.style.color = 'white'; });
    document.querySelectorAll('.super_hint_input').forEach(e => { e.style.backgroundColor = '#121212'; e.style.color = 'white'; });
    document.querySelectorAll('.checked_text_summary_ool').forEach(e => { e.style.color = 'white'; });
    document.querySelectorAll('.check_input').forEach(e => { e.style.backgroundColor = '#121212'; e.style.color = 'magenta'; });
    document.querySelectorAll('.alt_hint_input').forEach(e => { e.style.backgroundColor = '#121212'; e.style.color = 'white'; });
    document.querySelectorAll('.layout_input').forEach(e => { e.style.backgroundColor = '#121212'; e.style.color = 'white'; });
    document.querySelectorAll('.mark_spawn').forEach(e => { e.style.backgroundColor = '#121212'; e.style.color = 'white'; });
    document.querySelectorAll('.ool_check_text').forEach(e => { e.style.color = 'white'; });
    document.querySelectorAll('.simLog').forEach(e => { e.style.backgroundColor = '#121212'; e.style.color = 'white'; });
    document.documentElement.style.setProperty('--ool-font-color', 'white');
  }
}