function original() {
  player.bomb_img = "./images/explosive.png";
  player.rutos_letter_img = "./images/letter.png";
  player.boomerang_img = "./images/boomerang.png";
  player.hookshot_img = "./images/hookshot.png";
  player.bow_img = "./images/bow.png";
  player.goron_bracelet_img = "./images/strength1.png";
  player.lens_img = "./images/lens.png";
  player.golden_gauntlets_img = "./images/strength3.png";
  player.hammer_img = "./images/ham.png";
  player.iron_boots_img = "./images/ironboots.png";
  player.kokiri_sword_img = "./normal/items/kokiri_sword.png";
  player.silver_scale_img = "./images/silverscale.png"
  player.golden_scale_img = "./images/goldenscale.png";
  player.longshot_img = "./images/longshot.png";
  player.silver_gauntlets_img = "./images/strength2.png";
  player.mirror_shield_img = "./images/mirrorshield.png";
  player.dins_fire_img = "./images/dinsfire.png";
  player.magic_img = "./images/magic.png";
  player.hover_boots_img = "./images/hovers.png";
  player.light_arrows_img = "./images/lightarrow.png";
  player.ice_arrows_img = "./normal/items/ice_arrows.png";
  player.forest_key_img = "./normal/items/forest-temple-key.png";
  player.fire_key_img = "./normal/items/fire-temple-key.png";
  player.water_key_img = "./normal/items/water-temple-key.png";
  player.spirit_key_img = "./normal/items/spirit-temple-key.png";
  player.shadow_key_img = "./normal/items/shadow-temple-key.png";
  player.gtg_key_img = "./normal/items/gtg-key.png";
  player.well_key_img = "./normal/items/botw-key.png";
  player.ganon_key_img = "./normal/items/ganon-key.png";
  player.fire_arrows_img = "./images/firearrows.png";
  player.farores_wind_img = "./images/farores.png";
  player.bottle_img = "./images/bottle.png";
  player.slingshot_img = "./images/slingshot.png";
  player.lullaby_img = "./images/lullaby.png";
  player.eponas_img = "./images/eponas.png";
  player.sarias_img = "./images/sarias.png";
  player.suns_img = "./images/suns.png";
  player.time_img = "./images/sot.png";
  player.storms_img = "./images/sos.png";
  player.minuet_img = "./images/minuet.png";
  player.bolero_img = "./images/bolero.png";
  player.serenade_img = "./images/serenade.png";
  player.requiem_img = "./images/requiem.png";
  player.nocturne_img = "./images/nocturne.png";
  player.prelude_img = "./images/prelude.png";
  player.chu_img = "./images/chu.png";

  if (document.getElementById(dekuPlacement + "_req1") != null) { document.getElementById(dekuPlacement + "_req1").src = player.kokiri_sword_img; }
  if (document.getElementById(dodongosPlacement + "_req1") != null) { document.getElementById(dodongosPlacement + "_req1").src = player.bomb_img; }
  if (document.getElementById(jabuPlacement + "_req1") != null) { document.getElementById(jabuPlacement + "_req1").src = player.rutos_letter_img; }
  if (document.getElementById(jabuPlacement + "_req2") != null) { document.getElementById(jabuPlacement + "_req2").src = player.boomerang_img; }
  if (document.getElementById(forestPlacement + "_req1") != null) { document.getElementById(forestPlacement + "_req1").src = player.hookshot_img; }
  if (document.getElementById(forestPlacement + "_req2") != null) { document.getElementById(forestPlacement + "_req2").src = player.bow_img; }
  if (document.getElementById(forestPlacement + "_req3") != null) { document.getElementById(forestPlacement + "_req3").src = player.goron_bracelet_img; }
  if (document.getElementById(firePlacement + "_req1") != null) { document.getElementById(firePlacement + "_req1").src = player.hammer_img; }
  if (document.getElementById(waterPlacement + "_req1") != null) { document.getElementById(waterPlacement + "_req1").src = player.iron_boots_img; }
  if (document.getElementById(waterPlacement + "_req2") != null) { document.getElementById(waterPlacement + "_req2").src = player.golden_scale_img; }
  if (document.getElementById(waterPlacement + "_req3") != null) { document.getElementById(waterPlacement + "_req3").src = player.longshot_img; }
  if (document.getElementById(spiritPlacement + "_req1") != null) { document.getElementById(spiritPlacement + "_req1").src = player.silver_gauntlets_img; }
  if (document.getElementById(spiritPlacement + "_req2") != null) { document.getElementById(spiritPlacement + "_req2").src = player.mirror_shield_img; }
  if (document.getElementById(spiritPlacement + "_req3") != null) { document.getElementById(spiritPlacement + "_req3").src = player.bomb_img; }
  if (document.getElementById(spiritPlacement + "_req4") != null) { document.getElementById(spiritPlacement + "_req4").src = player.hookshot_img; }
  if (document.getElementById(shadowPlacement + "_req1") != null) { document.getElementById(shadowPlacement + "_req1").src = player.dins_fire_img; }
  if (document.getElementById(shadowPlacement + "_req2") != null) { document.getElementById(shadowPlacement + "_req2").src = player.magic_img; }
  if (document.getElementById(shadowPlacement + "_req3") != null) { document.getElementById(shadowPlacement + "_req3").src = player.hover_boots_img; }
  if (document.getElementById(shadowPlacement + "_req4") != null) { document.getElementById(shadowPlacement + "_req4").src = player.bomb_img; }
  if (document.getElementById(shadowPlacement + "_req5") != null) { document.getElementById(shadowPlacement + "_req5").src = player.hookshot_img; }
  var temp = 0;
  for (var i = 0; i < checks.length; i++) {
    var key = checks[i];
    let areaName = checkToAreaMap[checks[i]];
    let imgFile = "url('./images/" + AreaImages[areaName] + ".png')";
    if (imgFile) {
      player[AreaImages[areaName] + "_img"] = imgFile;
      document.getElementById(key).style.backgroundImage = imgFile;
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

  if (document.getElementById(dekuPlacement + "_req1") != null) { document.getElementById(dekuPlacement + "_req1").src = player.kokiri_sword_img; }
  if (document.getElementById(dodongosPlacement + "_req1") != null) { document.getElementById(dodongosPlacement + "_req1").src = player.bomb_img; }
  if (document.getElementById(jabuPlacement + "_req1") != null) { document.getElementById(jabuPlacement + "_req1").src = player.rutos_letter_img; }
  if (document.getElementById(jabuPlacement + "_req2") != null) { document.getElementById(jabuPlacement + "_req2").src = player.boomerang_img; }
  if (document.getElementById(forestPlacement + "_req1") != null) { document.getElementById(forestPlacement + "_req1").src = player.hookshot_img; }
  if (document.getElementById(forestPlacement + "_req2") != null) { document.getElementById(forestPlacement + "_req2").src = player.bow_img; }
  if (document.getElementById(forestPlacement + "_req3") != null) { document.getElementById(forestPlacement + "_req3").src = player.goron_bracelet_img; }
  if (document.getElementById(firePlacement + "_req1") != null) { document.getElementById(firePlacement + "_req1").src = player.hammer_img; }
  if (document.getElementById(waterPlacement + "_req1") != null) { document.getElementById(waterPlacement + "_req1").src = player.iron_boots_img; }
  if (document.getElementById(waterPlacement + "_req2") != null) { document.getElementById(waterPlacement + "_req2").src = player.golden_scale_img; }
  if (document.getElementById(waterPlacement + "_req3") != null) { document.getElementById(waterPlacement + "_req3").src = player.longshot_img; }
  if (document.getElementById(spiritPlacement + "_req1") != null) { document.getElementById(spiritPlacement + "_req1").src = player.silver_gauntlets_img; }
  if (document.getElementById(spiritPlacement + "_req2") != null) { document.getElementById(spiritPlacement + "_req2").src = player.mirror_shield_img; }
  if (document.getElementById(spiritPlacement + "_req3") != null) { document.getElementById(spiritPlacement + "_req3").src = player.bomb_img; }
  if (document.getElementById(spiritPlacement + "_req4") != null) { document.getElementById(spiritPlacement + "_req4").src = player.hookshot_img; }
  if (document.getElementById(shadowPlacement + "_req1") != null) { document.getElementById(shadowPlacement + "_req1").src = player.dins_fire_img; }
  if (document.getElementById(shadowPlacement + "_req2") != null) { document.getElementById(shadowPlacement + "_req2").src = player.magic_img; }
  if (document.getElementById(shadowPlacement + "_req3") != null) { document.getElementById(shadowPlacement + "_req3").src = player.hover_boots_img; }
  if (document.getElementById(shadowPlacement + "_req4") != null) { document.getElementById(shadowPlacement + "_req4").src = player.bomb_img; }
  if (document.getElementById(shadowPlacement + "_req5") != null) { document.getElementById(shadowPlacement + "_req5").src = player.hookshot_img; }
  for (var i = 0; i < checks.length; i++) {
    var key = checks[i];
    let areaName = checkToAreaMap[checks[i]];
    let imgFile = "url('./normal/areas/" + AreaImages[areaName] + ".jpg')";
    if (imgFile) {
      player[areaName + "_img"] = imgFile;
      document.getElementById(key).style.backgroundImage = imgFile;
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