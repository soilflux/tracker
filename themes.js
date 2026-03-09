function original() {
  for (var i = 0; i < checks.length; i++) {
    var key = checks[i];
    let areaName = checkToAreaMap[checks[i]];
    let imgFile = "url('./images/" + AreaImages[areaName] + ".png')";
    if (imgFile) {
      player[AreaImages[areaName] + "_img"] = imgFile;
      document.getElementById(key).style.backgroundImage = imgFile;
    }
  }
}

const itemToImageMap = {
  "bomb": "./normal/items/bomb.png",
  "bombchus": "./normal/items/chu.png",
  "rutos_letter": "./normal/items/rutos_letter.png",
  "boomerang": "./normal/items/boomerang.png",
  "hookshot": "./normal/items/hookshot.png",
  "bow": "./normal/items/bow.png",
  "goron_bracelet": "./normal/items/goron_bracelet.png",
  "lens": "./normal/items/lens.png",
  "golden_gauntlets": "./normal/items/golden_gauntlets.png",
  "hammer": "./normal/items/hammer.png",
  "iron_boots": "./normal/items/iron_boots.png",
  "kokiri_sword": "./normal/items/kokiri_sword.png",
  "silver_scale": "./normal/items/silver_scale.png",
  "golden_scale": "./normal/items/golden_scale.png",
  "longshot": "./normal/items/longshot.png",
  "silver_gauntlets": "./normal/items/silver_gauntlets.png",
  "mirror_shield": "./normal/items/mirror_shield.png",
  "dins_fire": "./normal/items/dins_fire.png",
  "magic": "./normal/items/magic.png",
  "magic_2": "./normal/items/magic_2.png",
  "hover_boots": "./normal/items/hover_boots.png",
  "light_arrows": "./normal/items/light_arrows.png",
  "fire_arrows": "./normal/items/fire_arrows.png",
  "farores_wind": "./normal/items/farores_wind.png",
  "bottle": "./normal/items/bottle.png",
  "slingshot": "./normal/items/slingshot.png",
  "lullaby": "./normal/items/lullaby.png",
  "eponas": "./normal/items/eponas.png",
  "sarias": "./normal/items/sarias.png",
  "suns": "./normal/items/suns.png",
  "time": "./normal/items/time.png",
  "storms": "./normal/items/storms.png",
  "minuet": "./normal/items/minuet.png",
  "bolero": "./normal/items/bolero.png",
  "serenade": "./normal/items/serenade.png",
  "requiem": "./normal/items/requiem.png",
  "nocturne": "./normal/items/nocturne.png",
  "prelude": "./normal/items/prelude.png",
  "wallet1": "./normal/items/adults_wallet.png",
  "boots": "./normal/items/boots.png",
  "stone_of_agony": "./normal/items/stone_of_agony.png",
  "antidote": "./normal/items/antidote.png",
  "big_poe": "./normal/items/big_poe.png",
  "biggoron_sword": "./normal/items/biggoron_sword.png",
  "blue_chicken": "./normal/items/blue_chicken.png",
  "bomb_bag": "./normal/items/bomb.png",
  "broken_sword": "./normal/items/broken_sword.png",
  "bunny_hood": "./normal/items/bunny_hood.png",
  "chicken1": "./normal/items/chicken1.png",
  "chicken2": "./normal/items/chicken2.png",
  "claim_check": "./normal/items/claim_check.png",
  "deku_shield": "./normal/items/deku_shield.png",
  "egg1": "./normal/items/egg1.png",
  "egg2": "./normal/items/egg2.png",
  "eyeball_frog": "./normal/items/eyeball_frog.png",
  "eyedrops": "./normal/items/eyedrops.png",
  "gerudo_card": "./normal/items/gerudo_card.png",
  "gerudo_mask": "./normal/items/gerudo_mask.png",
  "wallet2": "./normal/items/giants_wallet.png",
  "goron_mask": "./normal/items/goron_mask.png",
  "goron_tunic": "./normal/items/goron_tunic.png",
  "hylian_shield": "./normal/items/hylian_shield.png",
  "ice_arrows": "./normal/items/ice_arrows.png",
  "forest_key_ring": "./normal/items/forest-temple-key.png",
  "fire_key_ring": "./normal/items/fire-temple-key.png",
  "water_key_ring": "./normal/items/water-temple-key.png",
  "spirit_key_ring": "./normal/items/spirit-temple-key.png",
  "shadow_key_ring": "./normal/items/shadow-temple-key.png",
  "gtg_key_ring": "./normal/items/gtg-key.png",
  "well_key_ring": "./normal/items/botw-key.png",
  "ganons_key_ring": "./normal/items/ganon-key.png",
  "keaton_mask": "./normal/items/keaton_mask.png",
  "kokiri_boots": "./normal/items/kokiri_boots.png",
  "kokiri_tunic": "./normal/items/kokiri_tunic.png",
  "magic_bean_pack": "./normal/items/beans.png",
  "mask_of_truth": "./normal/items/mask_of_truth.png",
  "master_sword": "./normal/items/master_sword.png",
  "nayrus_love": "./normal/items/nayrus_love.png",
  "nut": "./normal/items/nut.png",
  "ocarina": "./normal/items/ocarina.png",
  "odd_mushroom": "./normal/items/odd_mushroom.png",
  "poachers_saw": "./normal/items/poachers_saw.png",
  "prescription": "./normal/items/prescription.png",
  "skull_mask": "./normal/items/skull_mask.png",
  "skull_token": "./normal/items/skull_token.png",
  "spooky_mask": "./normal/items/spooky_mask.png",
  "stick": "./normal/items/stick.png",
  "zeldas_letter": "./normal/items/zeldas_letter.png",
  "zora_mask": "./normal/items/zora_mask.png",
  "zora_tunic": "./normal/items/zora_tunic.png",
  "emerald": "./normal/items/emerald.png",
  "ruby": "./normal/items/ruby.png",
  "sapphire": "./normal/items/sapphire.png",
  "forest": "./normal/items/forest.png",
  "fire": "./normal/items/fire.png",
  "water": "./normal/items/water.png",
  "shadow": "./normal/items/shadow.png",
  "spirit": "./normal/items/spirit.png",
  "light": "./normal/items/light.png"
};

const areaToImageMap = {
  "Kokiri": "./normal/areas/kokiri.jpg",
  "Ranch": "./normal/areas/ranch.jpg",
  "Field": "./normal/areas/field.jpg",
  "Valley": "./normal/areas/valley.jpg",
  "Hylia": "./normal/areas/hylia.jpg",
  "Market": "./normal/areas/market.jpg",
  "Hyr Cas": "./normal/areas/hyrule_castle.jpg",
  "OGC": "./normal/areas/ogc.jpg",
  "ToT": "./normal/areas/tot.jpg",
  "Fountain": "./normal/areas/fountain.jpg",
  "Ice": "./normal/areas/ice.jpg",
  "Deku": "./normal/areas/deku.jpg",
  "Lost Woods": "./normal/areas/lost_woods.jpg",
  "SFM": "./normal/areas/sfm.jpg",
  "Goron City": "./normal/areas/goron.jpg",
  "Dodongos": "./normal/areas/dodongos.jpg",
  "Trail": "./normal/areas/dmt.jpg",
  "Crater": "./normal/areas/dmc.jpg",
  "Kakariko": "./normal/areas/kakariko.jpg",
  "Graveyard": "./normal/areas/graveyard.jpg",
  "River": "./normal/areas/river.jpg",
  "Domain": "./normal/areas/domain.jpg",
  "Colossus": "./normal/areas/colossus.jpg",
  "Wasteland": "./normal/areas/wasteland.jpg",
  "Fortress": "./normal/areas/fortress.jpg",
  "Jabu": "./normal/areas/jabu.jpg",
  "Forest": "./normal/areas/forest.jpg",
  "Fire": "./normal/areas/fire.jpg",
  "Water": "./normal/areas/water.jpg",
  "Shadow": "./normal/areas/shadow.jpg",
  "Spirit": "./normal/areas/spirit.jpg",
  "Well": "./normal/areas/well.jpg",
  "GTG": "./normal/areas/gtg.jpg",
  "Ganon's": "./normal/areas/ganons.jpg"
};

function normal() {
  player.bomb_img = "./normal/items/bomb.png";
  player.rutos_letter_img = "./normal/items/rutos_letter.png";
  player.boomerang_img = "./normal/items/boomerang.png";
  player.hookshot_img = "./normal/items/hookshot.png";
  player.bow_img = "./normal/items/bow.png";
  player.goron_bracelet_img = "./normal/items/goron_bracelet.png";
  player.lens_img = "./normal/items/lens.png";
  player.golden_gauntlets_img = "./normal/items/golden_gauntlets.png";
  player.hammer_img = "./normal/items/hammer.png";
  player.iron_boots_img = "./normal/items/iron_boots.png";
  player.kokiri_sword_img = "./normal/items/kokiri_sword.png";
  player.silver_scale_img = "./normal/items/silver_scale.png"
  player.golden_scale_img = "./normal/items/golden_scale.png";
  player.longshot_img = "./normal/items/longshot.png";
  player.silver_gauntlets_img = "./normal/items/silver_gauntlets.png";
  player.mirror_shield_img = "./normal/items/mirror_shield.png";
  player.dins_fire_img = "./normal/items/dins_fire.png";
  player.magic_img = "./normal/items/magic.png";
  player.magic_2_img = ".normal/items/magic_2.png";
  player.hover_boots_img = "./normal/items/hover_boots.png";
  player.light_arrows_img = "./normal/items/light_arrows.png";
  player.fire_arrows_img = "./normal/items/fire_arrows.png";
  player.farores_wind_img = "./normal/items/farores_wind.png";
  player.bottle_img = "./normal/items/bottle.png";
  player.slingshot_img = "./normal/items/slingshot.png";
  player.lullaby_img = "./normal/items/lullaby.png";
  player.eponas_img = "./normal/items/eponas.png";
  player.sarias_img = "./normal/items/sarias.png";
  player.suns_img = "./normal/items/suns.png";
  player.time_img = "./normal/items/time.png";
  player.storms_img = "./normal/items/storms.png";
  player.minuet_img = "./normal/items/minuet.png";
  player.bolero_img = "./normal/items/bolero.png";
  player.serenade_img = "./normal/items/serenade.png";
  player.requiem_img = "./normal/items/requiem.png";
  player.nocturne_img = "./normal/items/nocturne.png";
  player.prelude_img = "./normal/items/prelude.png";
  player.chu_img = "./normal/items/chu.png";
  player.wallet1_img = "./normal/items/adults_wallet.png";
  player.boots_img = "./normal/items/boots.png";

  player.stone_of_agony_img = "./normal/items/stone_of_agony.png";
  player.antidote_img = "./normal/items/antidote.png";
  player.big_poe_img = "./normal/items/big_poe.png";
  player.biggoron_sword_img = "./normal/items/biggoron_sword.png";
  player.blue_chicken_img = "./normal/items/blue_chicken.png";
  player.bomb_bag_img = "./normal/items/bomb.png";
  player.broken_sword_img = "./normal/items/broken_sword.png";
  player.bunny_hood_img = "./normal/items/bunny_hood.png";
  player.chicken1_img = "./normal/items/chicken1.png";
  player.chicken2_img = "./normal/items/chicken2.png";
  player.claim_check_img = "./normal/items/claim_check.png";
  player.deku_shield_img = "./normal/items/deku_shield.png";
  player.egg1_img = "./normal/items/egg1.png";
  player.egg2_img = "./normal/items/egg2.png";
  player.eyeball_frog_img = "./normal/items/eyeball_frog.png";
  player.eyedrops_img = "./normal/items/eyedrops.png";
  player.gerudo_card_img = "./normal/items/gerudo_card.png";
  player.gerudo_mask_img = "./normal/items/gerudo_mask.png";
  player.wallet2_img = "./normal/items/giants_wallet.png";
  player.goron_mask_img = "./normal/items/goron_mask.png";
  player.goron_tunic_img = "./normal/items/goron_tunic.png";
  player.hylian_shield_img = "./normal/items/hylian_shield.png";
  player.ice_arrows_img = "./normal/items/ice_arrows.png";
  player.forest_key_img = "./normal/items/forest-temple-key.png";
  player.fire_key_img = "./normal/items/fire-temple-key.png";
  player.water_key_img = "./normal/items/water-temple-key.png";
  player.spirit_key_img = "./normal/items/spirit-temple-key.png";
  player.shadow_key_img = "./normal/items/shadow-temple-key.png";
  player.gtg_key_img = "./normal/items/gtg-key.png";
  player.well_key_img = "./normal/items/botw-key.png";
  player.ganon_key_img = "./normal/items/ganon-key.png";
  player.keaton_mask_img = "./normal/items/keaton_mask.png";
  player.kokiri_boots_img = "./normal/items/kokiri_boots.png";
  player.kokiri_sword_img = "./normal/items/kokiri_sword.png";
  player.kokiri_tunic_img = "./normal/items/kokiri_tunic.png";
  player.magic_2_img = "./normal/items/magic_2.png";
  player.beans_img = "./normal/items/beans.png";
  player.mask_of_truth_img = "./normal/items/mask_of_truth.png";
  player.master_sword_img = "./normal/items/master_sword.png";
  player.nayrus_love_img = "./normal/items/nayrus_love.png";
  player.nut_img = "./normal/items/nut.png";
  player.ocarina_img = "./normal/items/ocarina.png";
  player.odd_mushroom_img = "./normal/items/odd_mushroom.png";
  player.poachers_saw_img = "./normal/items/poachers_saw.png";
  player.prescription_img = "./normal/items/prescription.png";
  player.skull_mask_img = "./normal/items/skull_mask.png";
  player.skull_token_img = "./normal/items/skull_token.png";
  player.spooky_mask_img = "./normal/items/spooky_mask.png";
  player.stick_img = "./normal/items/stick.png";
  player.zeldas_letter_img = "./normal/items/zeldas_letter.png";
  player.zora_mask_img = "./normal/items/zora_mask.png";
  player.zora_tunic_img = "./normal/items/zora_tunic.png";

  player.emerald_img = "./normal/items/emerald.png";
  player.ruby_img = "./normal/items/ruby.png";
  player.sapphire_img = "./normal/items/sapphire.png";
  player.forest_img = "./normal/items/forest.png";
  player.fire_img = "./normal/items/fire.png";
  player.water_img = "./normal/items/water.png";
  player.shadow_img = "./normal/items/shadow.png";
  player.spirit_img = "./normal/items/spirit.png";
  player.light_img = "./normal/items/light.png";

  for (var i = 0; i < checks.length; i++) {
    var key = checks[i];
    let areaName = checkToAreaMap[checks[i]];
    let imgFile = areaToImageMap[areaName];
    if (imgFile) {
      document.getElementById(key).style.backgroundImage = `url("${imgFile}")`;
    }
  }
  document.getElementById("lullabyimg").src = player.lullaby_img;
  document.getElementById("eponasimg").src = player.eponas_img;
  document.getElementById("sariasimg").src = player.sarias_img;
  document.getElementById("sunsimg").src = player.suns_img;
  document.getElementById("timeimg").src = player.time_img;
  document.getElementById("stormsimg").src = player.storms_img;
  document.getElementById("minuetimg").src = player.minuet_img;
  document.getElementById("boleroimg").src = player.bolero_img;
  document.getElementById("serenadeimg").src = player.serenade_img;
  document.getElementById("requiemimg").src = player.requiem_img;
  document.getElementById("nocturneimg").src = player.nocturne_img;
  document.getElementById("preludeimg").src = player.prelude_img;

  ItemImages = [player.farores_wind_img, player.slingshot_img, player.slingshot_img, player.slingshot_img, player.boomerang_img, player.silver_scale_img, player.silver_scale_img, player.rutos_letter_img, player.bottle_img, player.bottle_img, player.bottle_img, player.bottle_img, player.bomb_img, player.bomb_img, player.bomb_img, player.chu_img, player.chu_img, player.chu_img, player.chu_img, player.chu_img, player.hammer_img, player.bow_img, player.bow_img, player.bow_img, player.hookshot_img, player.hookshot_img, player.goron_bracelet_img, player.goron_bracelet_img, player.goron_bracelet_img, player.mirror_shield_img, player.magic_img, player.magic_img, player.iron_boots_img, player.kokiri_sword_img, player.hover_boots_img, player.wallet1_img, player.wallet1_img, player.wallet1_img, player.goron_tunic_img, player.zora_tunic_img, player.dins_fire_img, player.fire_arrows_img, player.lens_img, player.prescription_img, player.claim_check_img, player.light_arrows_img, player.ice_arrows_img, player.biggoron_sword_img, player.nayrus_love_img, player.stone_of_agony_img, player.forest_key_img, player.fire_key_img, player.water_key_img, player.spirit_key_img, player.shadow_key_img, player.well_key_img, player.gtg_key_img, player.ganon_key_img, player.gerudo_card_img, player.beans_img, player.lullaby_img, player.eponas_img, player.suns_img, player.sarias_img, player.storms_img, player.minuet_img, player.bolero_img, player.requiem_img, player.nocturne_img, player.time_img, player.prelude_img, player.serenade_img];
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
  }
}