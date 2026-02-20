function refreshLogicForStuff() {
  if (knownItems.kokiri_sword == true) { logic.kokiri_sword = locationLogic[itemToCheckMap.kokiri_sword]; } else { logic.kokiri_sword = false; }

  if (knownItems.farores_wind == true) { logic.farores_wind = locationLogic[itemToCheckMap.farores_wind]; } else { logic.farores_wind = false; }

  if (knownItems.slingshot1 == true) { logic.slingshot1 = locationLogic[itemToCheckMap.slingshot1]; }
  if (knownItems.slingshot2 == true) { logic.slingshot2 = locationLogic[itemToCheckMap.slingshot2]; }
  if (knownItems.slingshot3 == true) { logic.slingshot3 = locationLogic[itemToCheckMap.slingshot3]; }
  logic.slingshot = logic.slingshot1 || logic.slingshot2 || logic.slingshot3;

  if (knownItems.boomerang == true) { logic.boomerang = locationLogic[itemToCheckMap.boomerang]; } else { logic.boomerang = false; }

  if (knownItems.rutos_letter == true) { logic.rutos_letter = locationLogic[itemToCheckMap.rutos_letter]; } else { logic.rutos_letter = false; }
  if (knownItems.bottle1 == true) { logic.bottle1 = locationLogic[itemToCheckMap.bottle1]; }
  if (knownItems.bottle2 == true) { logic.bottle2 = locationLogic[itemToCheckMap.bottle2]; }
  if (knownItems.bottle3 == true) { logic.bottle3 = locationLogic[itemToCheckMap.bottle3]; }
  if (knownItems.bottle4 == true) { logic.bottle4 = locationLogic[itemToCheckMap.bottle4]; }
  logic.bottle = (logic.rutos_letter && logic.child_can_enter_domain) || logic.bottle1 || logic.bottle2 || logic.bottle3 || logic.bottle4;

  if (knownItems.scale1 == true) { logic.scale1 = locationLogic[itemToCheckMap.scale1]; }
  if (knownItems.scale2 == true) { logic.scale2 = locationLogic[itemToCheckMap.scale2]; }
  logic.silver_scale = logic.scale1 || logic.scale2;
  logic.golden_scale = logic.scale1 && logic.scale2;

  if (knownItems.bomb_bag1 == true) { logic.bomb_bag1 = locationLogic[itemToCheckMap.bomb_bag1]; }
  if (knownItems.bomb_bag2 == true) { logic.bomb_bag2 = locationLogic[itemToCheckMap.bomb_bag2]; }
  if (knownItems.bomb_bag3 == true) { logic.bomb_bag3 = locationLogic[itemToCheckMap.bomb_bag3]; }
  logic.bomb_bag = logic.bomb_bag1 || logic.bomb_bag2 || logic.bomb_bag3;

  if (knownItems.hammer == true) { logic.hammer = locationLogic[itemToCheckMap.hammer]; } else { logic.hammer = false; }

  if (knownItems.bow1 == true) { logic.bow1 = locationLogic[itemToCheckMap.bow1]; }
  if (knownItems.bow2 == true) { logic.bow2 = locationLogic[itemToCheckMap.bow2]; }
  if (knownItems.bow3 == true) { logic.bow3 = locationLogic[itemToCheckMap.bow3]; }
  logic.bow = logic.bow1 || logic.bow2 || logic.bow3;

  if (knownItems.hookshot1 == true) { logic.hookshot1 = locationLogic[itemToCheckMap.hookshot1]; }
  if (knownItems.hookshot2 == true) { logic.hookshot2 = locationLogic[itemToCheckMap.hookshot2]; }
  logic.hookshot = logic.hookshot1 || logic.hookshot2;
  logic.longshot = logic.hookshot1 && logic.hookshot2;
  if (knownItems.strength1 == true) { logic.strength1 = locationLogic[itemToCheckMap.strength1]; }
  if (knownItems.strength2 == true) { logic.strength2 = locationLogic[itemToCheckMap.strength2]; }
  if (knownItems.strength3 == true) { logic.strength3 = locationLogic[itemToCheckMap.strength3]; }
  logic.goron_bracelet = logic.strength1 || logic.strength2 || logic.strength3;
  logic.silver_gauntlets = (logic.strength1 && logic.strength2) || (logic.strength1 && logic.strength3) || (logic.strength2 && logic.strength3)
  logic.golden_gauntlets = logic.strength1 && logic.strength2 && logic.strength3;

  if (knownItems.mirror_shield == true) { logic.mirror_shield = locationLogic[itemToCheckMap.mirror_shield]; } else { logic.mirror_shield = false; }

  if (knownItems.big_poe == true) { logic.big_poe = locationLogic[itemToCheckMap.big_poe]; } else { logic.big_poe = false; }

  if (knownItems.iron_boots == true) { logic.iron_boots = locationLogic[itemToCheckMap.iron_boots]; } else { logic.iron_boots = false; }
  if (knownItems.hover_boots == true) { logic.hover_boots = locationLogic[itemToCheckMap.hover_boots]; } else { logic.hover_boots = false; }

  if (knownItems.magic1 == true) { logic.magic1 = locationLogic[itemToCheckMap.magic1]; }
  if (knownItems.magic2 == true) { logic.magic2 = locationLogic[itemToCheckMap.magic2]; }
  logic.magic = logic.magic1 || logic.magic2;

  if (knownItems.dins_fire == true) { logic.dins_fire = locationLogic[itemToCheckMap.dins_fire]; } else { logic.dins_fire = false; }
  if (knownItems.fire_arrows == true) { logic.fire_arrows = locationLogic[itemToCheckMap.fire_arrows]; } else { logic.fire_arrows = false; }

  if (knownItems.wallet1 == true) { logic.wallet1 = locationLogic[itemToCheckMap.wallet1]; }
  if (knownItems.wallet2 == true) { logic.wallet2 = locationLogic[itemToCheckMap.wallet2]; }
  if (knownItems.wallet3 == true) { logic.wallet3 = locationLogic[itemToCheckMap.wallet3]; }
  logic.adults_wallet = logic.wallet1 || logic.wallet2 || logic.wallet3;
  logic.giants_wallet = (logic.wallet1 && logic.wallet2) || (logic.wallet1 && logic.wallet3) || (logic.wallet2 && logic.wallet3);
  logic.tycoon_wallet = logic.wallet1 && logic.wallet2 && logic.wallet3;

  if (knownItems.goron_tunic == true) { logic.goron_tunic = locationLogic[itemToCheckMap.goron_tunic]; } else { logic.goron_tunic = false; }
  if (knownItems.zora_tunic == true) { logic.zora_tunic = locationLogic[itemToCheckMap.zora_tunic]; } else { logic.zora_tunic = false; }
  if (knownItems.lens == true) { logic.lens = locationLogic[itemToCheckMap.lens]; } else { logic.lens = false; }
  if (knownItems.stone_of_agony == true) { logic.stone_of_agony = locationLogic[itemToCheckMap.stone_of_agony]; } else { logic.stone_of_agony = false; }
  if (knownItems.prescription == true) { logic.prescription = locationLogic[itemToCheckMap.prescription]; } else { logic.prescription = false; }
  if (knownItems.claim_check == true) { logic.claim_check = locationLogic[itemToCheckMap.claim_check]; } else { logic.claim_check = false; }
  logic.trade = logic.claim_check || logic.prescription;

  if (knownItems.light_arrows == true) { logic.light_arrows = locationLogic[itemToCheckMap.light_arrows]; }
  if (knownItems.ice_arrows == true) { logic.ice_arrows = locationLogic[itemToCheckMap.ice_arrows]; }
  if (knownItems.forest_key_ring == true) { logic.forest_key_ring = locationLogic[itemToCheckMap.forest_key_ring]; }
  if (knownItems.fire_key_ring == true) { logic.fire_key_ring = locationLogic[itemToCheckMap.fire_key_ring]; }
  if (knownItems.water_key_ring == true) { logic.water_key_ring = locationLogic[itemToCheckMap.water_key_ring]; }
  if (knownItems.spirit_key_ring == true) { logic.spirit_key_ring = locationLogic[itemToCheckMap.spirit_key_ring]; }
  if (knownItems.shadow_key_ring == true) { logic.shadow_key_ring = locationLogic[itemToCheckMap.shadow_key_ring]; }
  if (knownItems.well_key_ring == true) { logic.well_key_ring = locationLogic[itemToCheckMap.well_key_ring]; }
  if (knownItems.gtg_key_ring == true) { logic.gtg_key_ring = locationLogic[itemToCheckMap.gtg_key_ring]; }
  if (knownItems.ganons_key_ring == true) { logic.ganons_key_ring = locationLogic[itemToCheckMap.ganons_key_ring]; }
  if (knownItems.gerudo_card == true) { logic.gerudo_card = locationLogic[itemToCheckMap.gerudo_card]; }
  if (knownItems.magic_bean_pack == true) { logic.magic_bean_pack = locationLogic[itemToCheckMap.magic_bean_pack]; }

  if (knownItems.lullaby == true) { logic.lullaby = locationLogic[itemToCheckMap.lullaby]; }
  if (knownItems.eponas == true) { logic.eponas = locationLogic[itemToCheckMap.eponas]; }
  if (knownItems.sarias == true) { logic.sarias = locationLogic[itemToCheckMap.sarias]; }
  if (knownItems.suns == true) { logic.suns = locationLogic[itemToCheckMap.suns]; }
  if (knownItems.time == true) { logic.time = locationLogic[itemToCheckMap.time]; }
  if (knownItems.storms == true) { logic.storms = locationLogic[itemToCheckMap.storms]; }
  if (knownItems.minuet == true) { logic.minuet = locationLogic[itemToCheckMap.minuet]; }
  if (knownItems.bolero == true) { logic.bolero = locationLogic[itemToCheckMap.bolero]; }
  if (knownItems.serenade == true) { logic.serenade = locationLogic[itemToCheckMap.serenade]; }
  if (knownItems.requiem == true) { logic.requiem = locationLogic[itemToCheckMap.requiem]; }
  if (knownItems.nocturne == true) { logic.nocturne = locationLogic[itemToCheckMap.nocturne]; }
  if (knownItems.prelude == true) { logic.prelude = locationLogic[itemToCheckMap.prelude]; }



  player.bomb_bag = false;
  if (player.bomb_bag1 || player.bomb_bag2 || player.bomb_bag3) { player.bomb_bag = true; }

  player.bombchus = false;
  if (player.bombchus1 || player.bombchus2 || player.bombchus3 || player.bombchus4 || player.bombchus5) { player.bombchus = true; }

  player.bow = false;
  if (player.bow1 || player.bow2 || player.bow3) { player.bow = true; }

  player.bottle = false;
  if (player.bottle1 || player.bottle2 || player.bottle3 || player.bottle4) { player.bottle = true; }

  player.trade = false;
  if (player.prescription || player.claim_check) { player.trade = true; }

  player.hookshot = false;
  if (player.hookshot1 || player.hookshot2) { player.hookshot = true; }

  player.longshot = false;
  if (player.hookshot1 && player.hookshot2) { player.longshot = true; }

  player.slingshot = false;
  if (player.slingshot1 || player.slingshot2 || player.slingshot3) { player.slingshot = true; }

  player.adults_wallet = false;
  if (player.wallet1 || player.wallet2 || player.wallet3) { player.adults_wallet = true; }

  player.giants_wallet = false;
  if ((player.wallet1 && player.wallet2) || (player.wallet1 && player.wallet3) || (player.wallet2 && player.wallet3)) { player.giants_wallet = true; }

  player.tycoon_wallet = false;
  if (player.wallet1 && player.wallet2 && player.wallet3) { player.tycoon_wallet = true; }

  player.goron_bracelet = false;
  if (player.strength1 || player.strength2 || player.strength3) { player.goron_bracelet = true; }

  player.silver_gauntlets = false;
  if (player.strength1 && player.strength3) { player.silver_gauntlets = true; }
  else if (player.strength2 && player.strength3) { player.silver_gauntlets = true; }
  else if (player.strength1 && player.strength2) { player.silver_gauntlets = true; }

  player.golden_gauntlets = false;
  if (player.strength1 && player.strength2 && player.strength3) { player.golden_gauntlets = true; }

  player.silver_scale = false;
  if (player.scale1 || player.scale2) { player.silver_scale = true; }

  player.golden_scale = false;
  if (player.scale1 && player.scale2) { player.golden_scale = true; }

  if (player.golden_scale == true) { document.getElementById("silverscaleimg").src = player.golden_scale_img; }
  else { document.getElementById("silverscaleimg").src = player.silver_scale_img; }

  player.magic = false;
  if (player.magic1 || player.magic2) { player.magic = true; }

  player.double_magic = false;
  if (player.magic1 && player.magic2) { player.double_magic = true; }


  for (var q = 0; q < 30; q++) {
    for (var i = 0; i < Items.length; i++) {
      if (locationCouldAccess[itemToCheckMap[Items[i]]] || player[Items[i]])
        couldHave[Items[i]] = true;
      else
        couldHave[Items[i]] = false;
    }

    if (locationCouldAccess[itemToCheckMap["big_poe"]] || player["big_poe"])
      couldHave["big_poe"] = true;
    else
      couldHave["big_poe"] = false;
  }

  couldHave.bomb_bag = false;
  if (couldHave.bomb_bag1 || couldHave.bomb_bag2 || couldHave.bomb_bag3) { couldHave.bomb_bag = true; }

  couldHave.bow = false;
  if (couldHave.bow1 || couldHave.bow2 || couldHave.bow3) { couldHave.bow = true; }

  couldHave.trade = false;
  if (couldHave.prescription || couldHave.claim_check) { couldHave.trade = true; }

  couldHave.hookshot = false;
  if (couldHave.hookshot1 || couldHave.hookshot2) { couldHave.hookshot = true; }

  couldHave.longshot = false;
  if (couldHave.hookshot1 && couldHave.hookshot2) { couldHave.longshot = true; }

  couldHave.slingshot = false;
  if (couldHave.slingshot1 || couldHave.slingshot2 || couldHave.slingshot3) { couldHave.slingshot = true; }

  couldHave.adults_wallet = false;
  if (couldHave.wallet1 || couldHave.wallet2 || couldHave.wallet3) { couldHave.adults_wallet = true; }

  couldHave.giants_wallet = false;
  if ((couldHave.wallet1 && couldHave.wallet2) || (couldHave.wallet1 && couldHave.wallet3) || (couldHave.wallet2 && couldHave.wallet3)) { couldHave.giants_wallet = true; }

  couldHave.tycoon_wallet = false;
  if (couldHave.wallet1 && couldHave.wallet2 && couldHave.wallet3) { couldHave.tycoon_wallet = true; }

  couldHave.goron_bracelet = false;
  if (couldHave.strength1 || couldHave.strength2 || couldHave.strength3) { couldHave.goron_bracelet = true; }

  couldHave.silver_gauntlets = false;
  if (couldHave.strength1 && couldHave.strength3) { couldHave.silver_gauntlets = true; }
  else if (couldHave.strength2 && couldHave.strength3) { couldHave.silver_gauntlets = true; }
  else if (couldHave.strength1 && couldHave.strength2) { couldHave.silver_gauntlets = true; }

  couldHave.golden_gauntlets = false;
  if (couldHave.strength1 && couldHave.strength2 && couldHave.strength3) { couldHave.golden_gauntlets = true; }

  couldHave.silver_scale = false;
  if (couldHave.scale1 || couldHave.scale2) { couldHave.silver_scale = true; }

  couldHave.golden_scale = false;
  if (couldHave.scale1 && couldHave.scale2) { couldHave.golden_scale = true; }

  couldHave.magic = false;
  if (couldHave.magic1 || couldHave.magic2) { couldHave.magic = true; }

  logic.forest_boss_key = logic.forced_forest_boss_key;
  logic.fire_boss_key = logic.forced_fire_boss_key;
  logic.water_boss_key = logic.forced_water_boss_key;
  logic.spirit_boss_key = logic.forced_spirit_boss_key;
  logic.shadow_boss_key = logic.forced_shadow_boss_key;
  logic.ganons_boss_key = logic.forced_ganons_boss_key;
  couldHave.forest_boss_key = logic.forced_forest_boss_key;
  couldHave.fire_boss_key = logic.forced_fire_boss_key;
  couldHave.water_boss_key = logic.forced_water_boss_key;
  couldHave.spirit_boss_key = logic.forced_spirit_boss_key;
  couldHave.shadow_boss_key = logic.forced_shadow_boss_key;
  if (player.forest_boss_key == true) { logic.forest_boss_key = locationLogic[itemToCheckMap.forest_boss_key]; couldHave.forest_boss_key = true; }
  if (player.fire_boss_key == true) { logic.fire_boss_key = locationLogic[itemToCheckMap.fire_boss_key]; couldHave.fire_boss_key = true; }
  if (player.water_boss_key == true) { logic.water_boss_key = locationLogic[itemToCheckMap.water_boss_key]; couldHave.water_boss_key = true; }
  if (player.spirit_boss_key == true) { logic.spirit_boss_key = locationLogic[itemToCheckMap.spirit_boss_key]; couldHave.spirit_boss_key = true; }
  if (player.shadow_boss_key == true) { logic.shadow_boss_key = locationLogic[itemToCheckMap.shadow_boss_key]; couldHave.shadow_boss_key = true; }

  if (nerfed) {
    logic.bomb_bag = false;
    if (player.bomb_bag1 || player.bomb_bag2 || player.bomb_bag3 || couldHave.bomb_bag1 || couldHave.bomb_bag2 || couldHave.bomb_bag3) { logic.bomb_bag = true; }

    logic.bow = false;
    if (player.bow1 || player.bow2 || player.bow3 || couldHave.bow1 || couldHave.bow2 || couldHave.bow3) { logic.bow = true; }

    logic.bottle = false;
    if (player.bottle1 || player.bottle2 || player.bottle3 || player.bottle4 || couldHave.bottle1 || couldHave.bottle2 || couldHave.bottle3 || couldHave.bottle4 || (player.rutos_letter && player.child_can_enter_domain) || (couldHave.rutos_letter && couldHave.child_can_enter_domain)) { logic.bottle = true; }

    logic.trade = false;
    if (player.prescription || player.claim_check || couldHave.prescription || couldHave.claim_check) { logic.trade = true; }

    logic.hookshot = false;
    if (player.hookshot1 || player.hookshot2 || couldHave.hookshot1 || couldHave.hookshot2) { logic.hookshot = true; }

    logic.longshot = false;
    if ((player.hookshot1 || couldHave.hookshot1) && (player.hookshot2 || couldHave.hookshot2)) { logic.longshot = true; }

    logic.slingshot = false;
    if (player.slingshot1 || player.slingshot2 || player.slingshot3 || couldHave.slingshot1 || couldHave.slingshot2 || couldHave.slingshot3) { logic.slingshot = true; }

    logic.adults_wallet = false;
    if (player.wallet1 || player.wallet2 || couldHave.wallet1 || couldHave.wallet2 || couldHave.wallet3 || couldHave.wallet3) { logic.adults_wallet = true; }

    logic.giants_wallet = false;
    if (((player.wallet1 || couldHave.wallet1) && (player.wallet2 || couldHave.wallet2)) || ((player.wallet1 || couldHave.wallet1) && (player.wallet3 || couldHave.wallet3)) || ((player.wallet2 || couldHave.wallet2) && (player.wallet3 || couldHave.wallet3))) { logic.giants_wallet = true; }

    logic.tycoon_wallet = false;
    if ((player.wallet1 || couldHave.wallet1) && (player.wallet2 || couldHave.wallet2) && (player.wallet3 || couldHave.wallet3)) { logic.tycoon_wallet = true; }

    logic.goron_bracelet = false;
    if (player.strength1 || player.strength2 || player.strength3 || couldHave.strength1 || couldHave.strength2 || couldHave.strength3) { logic.goron_bracelet = true; }

    logic.silver_gauntlets = false;
    if ((player.strength1 || couldHave.strength1) && (player.strength3 || couldHave.strength3)) { logic.silver_gauntlets = true; }
    else if ((player.strength2 || couldHave.strength2) && (player.strength3 || couldHave.strength3)) { logic.silver_gauntlets = true; }
    else if ((player.strength1 || couldHave.strength1) && (player.strength2 || couldHave.strength2)) { logic.silver_gauntlets = true; }

    logic.golden_gauntlets = false;
    if ((player.strength1 || couldHave.strength1) && (player.strength2 || couldHave.strength2) && (player.strength3 || couldHave.strength3)) { logic.golden_gauntlets = true; }

    logic.silver_scale = false;
    if (player.scale1 || player.scale2 || couldHave.scale1 || couldHave.scale2) { logic.silver_scale = true; }

    logic.golden_scale = false;
    if ((player.scale1 || couldHave.scale1) && (player.scale2 || couldHave.scale2)) { logic.golden_scale = true; }

    logic.magic = false;
    if (player.magic1 || player.magic2 || couldHave.magic1 || couldHave.magic2) { logic.magic = true; }

    logic.double_magic = false;
    if ((player.magic1 || couldHave.magic1) && (player.magic2 || couldHave.magic2)) { logic.double_magic = true; }

    logic.kokiri_sword = player.kokiri_sword || couldHave.kokiri_sword;
    logic.farores_wind = player.farores_wind || couldHave.farores_wind;
    logic.boomerang = player.boomerang || couldHave.boomerang;
    logic.rutos_letter = player.rutos_letter || couldHave.rutos_letter;
    logic.hammer = player.hammer || couldHave.hammer;
    logic.mirror_shield = player.mirror_shield || couldHave.mirror_shield;
    logic.big_poe = player.big_poe || couldHave.big_poe;
    logic.iron_boots = player.iron_boots || couldHave.iron_boots;
    logic.hover_boots = player.hover_boots || couldHave.hover_boots;
    logic.dins_fire = player.dins_fire || couldHave.dins_fire;
    logic.fire_arrows = player.fire_arrows || couldHave.fire_arrows;
    logic.goron_tunic = player.goron_tunic || couldHave.goron_tunic;
    logic.zora_tunic = player.zora_tunic || couldHave.zora_tunic;
    logic.lens = player.lens || couldHave.lens;
    logic.stone_of_agony = player.stone_of_agony || couldHave.stone_of_agony;
    logic.prescription = player.prescription || couldHave.prescription;
    logic.claim_check = player.claim_check || couldHave.claim_check;
    logic.light_arrows = player.light_arrows || couldHave.light_arrows;
    logic.ice_arrows = player.ice_arrows || couldHave.ice_arrows;
    logic.forest_key_ring = player.forest_key_ring || couldHave.forest_key_ring;
    logic.fire_key_ring = player.fire_key_ring || couldHave.fire_key_ring;
    logic.water_key_ring = player.water_key_ring || couldHave.water_key_ring;
    logic.spirit_key_ring = player.spirit_key_ring || couldHave.spirit_key_ring;
    logic.shadow_key_ring = player.shadow_key_ring || couldHave.shadow_key_ring;
    logic.well_key_ring = player.well_key_ring || couldHave.well_key_ring;
    logic.gtg_key_ring = player.gtg_key_ring || couldHave.gtg_key_ring;
    logic.ganons_key_ring = player.ganons_key_ring || couldHave.ganons_key_ring;
    logic.gerudo_card = player.gerudo_card || couldHave.gerudo_card;
    logic.magic_bean_pack = player.magic_bean_pack || couldHave.magic_bean_pack;
    logic.lullaby = player.lullaby || couldHave.lullaby;
    logic.eponas = player.eponas || couldHave.eponas;
    logic.sarias = player.sarias || couldHave.sarias;
    logic.suns = player.suns || couldHave.suns;
    logic.time = player.time || couldHave.time;
    logic.storms = player.storms || couldHave.storms;
    logic.minuet = player.minuet || couldHave.minuet;
    logic.bolero = player.bolero || couldHave.bolero;
    logic.serenade = player.serenade || couldHave.serenade;
    logic.requiem = player.requiem || couldHave.requiem;
    logic.nocturne = player.nocturne || couldHave.nocturne;
    logic.prelude = player.prelude || couldHave.prelude;

    logic.forest_boss_key = player.forest_boss_key || couldHave.forest_boss_key;
    logic.fire_boss_key = player.fire_boss_key || couldHave.fire_boss_key;
    logic.water_boss_key = player.water_boss_key || couldHave.water_boss_key;
    logic.spirit_boss_key = player.spirit_boss_key || couldHave.spirit_boss_key;
    logic.shadow_boss_key = player.shadow_boss_key || couldHave.shadow_boss_key;
  }

  player.forest = false;
  couldHave.forest = false;
  locationAccess.forest_medallion_location = false;
  if (logic.forest_medallion_location == "deku") { if (checkToItemMap.deku_queen_gohma != "unknown") { player.forest = true; } logic.forest_medallion = locationLogic.deku_queen_gohma; locationAccess.forest_medallion_location = locationAccess.deku_queen_gohma; couldHave.forest = locationCouldAccess.deku_queen_gohma; }
  else if (logic.forest_medallion_location == "dodongos") { if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.forest = true; } logic.forest_medallion = locationLogic.dodongos_king_dodongo; locationAccess.forest_medallion_location = locationAccess.dodongos_king_dodongo; couldHave.forest = locationCouldAccess.dodongos_king_dodongo; }
  else if (logic.forest_medallion_location == "jabu") { if (checkToItemMap.jabu_barinade != "unknown") { player.forest = true; } logic.forest_medallion = locationLogic.jabu_barinade; locationAccess.forest_medallion_location = locationAccess.jabu_barinade; couldHave.forest = locationCouldAccess.jabu_barinade; }
  else if (logic.forest_medallion_location == "forest") { if (checkToItemMap.forest_phantomGanon != "unknown") { player.forest = true; } logic.forest_medallion = locationLogic.forest_phantomGanon; locationAccess.forest_medallion_location = locationAccess.forest_phantomGanon; couldHave.forest = locationCouldAccess.forest_phantomGanon; }
  else if (logic.forest_medallion_location == "fire") { if (checkToItemMap.fire_volvagia != "unknown") { player.forest = true; } logic.forest_medallion = locationLogic.fire_volvagia; locationAccess.forest_medallion_location = locationAccess.fire_volvagia; couldHave.forest = locationCouldAccess.fire_volvagia; }
  else if (logic.forest_medallion_location == "water") { if (checkToItemMap.water_morpha != "unknown") { player.forest = true; } logic.forest_medallion = locationLogic.water_morpha; locationAccess.forest_medallion_location = locationAccess.water_morpha; couldHave.forest = locationCouldAccess.water_morpha; }
  else if (logic.forest_medallion_location == "spirit") { if (checkToItemMap.spirit_twinrova != "unknown") { player.forest = true; } logic.forest_medallion = locationLogic.spirit_twinrova; locationAccess.forest_medallion_location = locationAccess.spirit_twinrova; couldHave.forest = locationCouldAccess.spirit_twinrova; }
  else if (logic.forest_medallion_location == "shadow") { if (checkToItemMap.shadow_bongo != "unknown") { player.forest = true; } logic.forest_medallion = locationLogic.shadow_bongo; locationAccess.forest_medallion_location = locationAccess.shadow_bongo; couldHave.forest = locationCouldAccess.shadow_bongo; }
  else if (logic.forest_medallion_location == "pocket") { player.forest = true; logic.forest_medallion = true; locationAccess.forest_medallion_location = true; couldHave.forest = true; }
  else { logic.forest_medallion_location == "unknown"; logic.forest_medallion = false; }

  player.fire = false;
  couldHave.fire = false;
  locationAccess.fire_medallion_location = false;
  if (logic.fire_medallion_location == "deku") { if (checkToItemMap.deku_queen_gohma != "unknown") { player.fire = true; } logic.fire_medallion = locationLogic.deku_queen_gohma; locationAccess.fire_medallion_location = locationAccess.deku_queen_gohma; couldHave.fire = locationCouldAccess.deku_queen_gohma; }
  else if (logic.fire_medallion_location == "dodongos") { if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.fire = true; } logic.fire_medallion = locationLogic.dodongos_king_dodongo; locationAccess.fire_medallion_location = locationAccess.dodongos_king_dodongo; couldHave.fire = locationCouldAccess.dodongos_king_dodongo; }
  else if (logic.fire_medallion_location == "jabu") { if (checkToItemMap.jabu_barinade != "unknown") { player.fire = true; } logic.fire_medallion = locationLogic.jabu_barinade; locationAccess.fire_medallion_location = locationAccess.jabu_barinade; couldHave.fire = locationCouldAccess.jabu_barinade; }
  else if (logic.fire_medallion_location == "forest") { if (checkToItemMap.forest_phantomGanon != "unknown") { player.fire = true; } logic.fire_medallion = locationLogic.forest_phantomGanon; locationAccess.fire_medallion_location = locationAccess.forest_phantomGanon; couldHave.fire = locationCouldAccess.forest_phantomGanon; }
  else if (logic.fire_medallion_location == "fire") { if (checkToItemMap.fire_volvagia != "unknown") { player.fire = true; } logic.fire_medallion = locationLogic.fire_volvagia; locationAccess.fire_medallion_location = locationAccess.fire_volvagia; couldHave.fire = locationCouldAccess.fire_volvagia; }
  else if (logic.fire_medallion_location == "water") { if (checkToItemMap.water_morpha != "unknown") { player.fire = true; } logic.fire_medallion = locationLogic.water_morpha; locationAccess.fire_medallion_location = locationAccess.water_morpha; couldHave.fire = locationCouldAccess.water_morpha; }
  else if (logic.fire_medallion_location == "spirit") { if (checkToItemMap.spirit_twinrova != "unknown") { player.fire = true; } logic.fire_medallion = locationLogic.spirit_twinrova; locationAccess.fire_medallion_location = locationAccess.spirit_twinrova; couldHave.fire = locationCouldAccess.spirit_twinrova; }
  else if (logic.fire_medallion_location == "shadow") { if (checkToItemMap.shadow_bongo != "unknown") { player.fire = true; } logic.fire_medallion = locationLogic.shadow_bongo; locationAccess.fire_medallion_location = locationAccess.shadow_bongo; couldHave.fire = locationCouldAccess.shadow_bongo; }
  else if (logic.fire_medallion_location == "pocket") { player.fire = true; logic.fire_medallion = true; locationAccess.fire_medallion_location = true; couldHave.fire = true; }
  else { logic.fire_medallion_location == "unknown"; logic.fire_medallion = false; }

  player.water = false;
  couldHave.water = false;
  locationAccess.water_medallion_location = false;
  if (logic.water_medallion_location == "deku") { if (checkToItemMap.deku_queen_gohma != "unknown") { player.water = true; } logic.water_medallion = locationLogic.deku_queen_gohma; locationAccess.water_medallion_location = locationAccess.deku_queen_gohma; couldHave.water = locationCouldAccess.deku_queen_gohma; }
  else if (logic.water_medallion_location == "dodongos") { if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.water = true; } logic.water_medallion = locationLogic.dodongos_king_dodongo; locationAccess.water_medallion_location = locationAccess.dodongos_king_dodongo; couldHave.water = locationCouldAccess.dodongos_king_dodongo; }
  else if (logic.water_medallion_location == "jabu") { if (checkToItemMap.jabu_barinade != "unknown") { player.water = true; } logic.water_medallion = locationLogic.jabu_barinade; locationAccess.water_medallion_location = locationAccess.jabu_barinade; couldHave.water = locationCouldAccess.jabu_barinade; }
  else if (logic.water_medallion_location == "forest") { if (checkToItemMap.forest_phantomGanon != "unknown") { player.water = true; } logic.water_medallion = locationLogic.forest_phantomGanon; locationAccess.water_medallion_location = locationAccess.forest_phantomGanon; couldHave.water = locationCouldAccess.forest_phantomGanon; }
  else if (logic.water_medallion_location == "fire") { if (checkToItemMap.fire_volvagia != "unknown") { player.water = true; } logic.water_medallion = locationLogic.fire_volvagia; locationAccess.water_medallion_location = locationAccess.fire_volvagia; couldHave.water = locationCouldAccess.fire_volvagia; }
  else if (logic.water_medallion_location == "water") { if (checkToItemMap.water_morpha != "unknown") { player.water = true; } logic.water_medallion = locationLogic.water_morpha; locationAccess.water_medallion_location = locationAccess.water_morpha; couldHave.water = locationCouldAccess.water_morpha; }
  else if (logic.water_medallion_location == "spirit") { if (checkToItemMap.spirit_twinrova != "unknown") { player.water = true; } logic.water_medallion = locationLogic.spirit_twinrova; locationAccess.water_medallion_location = locationAccess.spirit_twinrova; couldHave.water = locationCouldAccess.spirit_twinrova; }
  else if (logic.water_medallion_location == "shadow") { if (checkToItemMap.shadow_bongo != "unknown") { player.water = true; } logic.water_medallion = locationLogic.shadow_bongo; locationAccess.water_medallion_location = locationAccess.shadow_bongo; couldHave.water = locationCouldAccess.shadow_bongo; }
  else if (logic.water_medallion_location == "pocket") { player.water = true; logic.water_medallion = true; locationAccess.water_medallion_location = true; couldHave.water = true; }
  else { logic.water_medallion_location == "unknown"; logic.water_medallion = false; }

  logic.shadow_medallion = false;
  logic.spirit_medallion = false;
  logic.light_medallion = false;
  player.shadow_medallion = false;
  player.spirit_medallion = false;
  player.light_medallion = false;
  couldHave.shadow_medallion = false;
  couldHave.spirit_medallion = false;
  couldHave.light_medallion = false;
  locationAccess.shadow_medallion_location = false;
  locationAccess.spirit_medallion_location = false;
  locationAccess.light_medallion_location = false;
  for (var i = 1; i <= 3; i++) {
    str = "generic" + i;
    str2 = "gen" + i;
    player[str2] = false;
    if (logic[str] == "deku") { if (checkToItemMap.deku_queen_gohma != "unknown") { player[str2] = true; } logic[str2] = locationLogic.deku_queen_gohma; if (document.getElementById("text_" + dekuPlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(dekuPlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = locationLogic.deku_queen_gohma; couldHave.shadow_medallion = locationCouldAccess.deku_queen_gohma; locationAccess.shadow_medallion_location = locationAccess.deku_queen_gohma; if (checkToItemMap.deku_queen_gohma != "unknown") { player.shadow_medallion = true; }; } else if (document.getElementById("text_" + dekuPlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(dekuPlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = locationLogic.deku_queen_gohma; couldHave.spirit_medallion = locationCouldAccess.deku_queen_gohma; locationAccess.spirit_medallion_location = locationAccess.deku_queen_gohma; if (checkToItemMap.deku_queen_gohma != "unknown") { player.spirit_medallion = true; }; } else { logic.light_medallion = locationLogic.deku_queen_gohma; if (checkToItemMap.deku_queen_gohma != "unknown") { player.light_medallion = true; }; couldHave.light_medallion = locationCouldAccess.deku_queen_gohma; locationAccess.light_medallion_location = player[checkToItemMap["deku_queen_gohma"]]; } }
    else if (logic[str] == "dodongos") { if (checkToItemMap.dodongos_king_dodongo != "unknown") { player[str2] = true; } logic[str2] = locationLogic.dodongos_king_dodongo; if (document.getElementById("text_" + dodongosPlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(dodongosPlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = locationLogic.dodongos_king_dodongo; couldHave.shadow_medallion = locationCouldAccess.dodongos_king_dodongo; locationAccess.shadow_medallion_location = locationAccess.dodongos_king_dodongo; if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.shadow_medallion = true; }; } else if (document.getElementById("text_" + dodongosPlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(dodongosPlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = locationLogic.dodongos_king_dodongo; couldHave.spirit_medallion = locationCouldAccess.dodongos_king_dodongo; locationAccess.spirit_medallion_location = locationAccess.dodongos_king_dodongo; if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.spirit_medallion = true; }; } else { logic.light_medallion = locationLogic.dodongos_king_dodongo; if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.light_medallion = true; }; couldHave.light_medallion = locationCouldAccess.dodongos_king_dodongo; locationAccess.light_medallion_location = player[checkToItemMap["dodongos_king_dodongo"]]; } }
    else if (logic[str] == "jabu") { if (checkToItemMap.jabu_barinade != "unknown") { player[str2] = true; } logic[str2] = locationLogic.jabu_barinade; if (document.getElementById("text_" + jabuPlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(jabuPlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = locationLogic.jabu_barinade; couldHave.shadow_medallion = locationCouldAccess.jabu_barinade; locationAccess.shadow_medallion_location = locationAccess.jabu_barinade; if (checkToItemMap.jabu_barinade != "unknown") { player.shadow_medallion = true; }; } else if (document.getElementById("text_" + jabuPlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(jabuPlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = locationLogic.jabu_barinade; couldHave.spirit_medallion = locationCouldAccess.jabu_barinade; locationAccess.spirit_medallion_location = locationAccess.jabu_barinade; if (checkToItemMap.jabu_barinade != "unknown") { player.spirit_medallion = true; }; } else { logic.light_medallion = locationLogic.jabu_barinade; if (checkToItemMap.jabu_barinade != "unknown") { player.light_medallion = true; }; couldHave.light_medallion = locationCouldAccess.jabu_barinade; locationAccess.light_medallion_location = player[checkToItemMap["jabu_barinade"]]; } }
    else if (logic[str] == "forest") { if (checkToItemMap.forest_phantomGanon != "unknown") { player[str2] = true; } logic[str2] = locationLogic.forest_phantomGanon; if (document.getElementById("text_" + forestPlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(forestPlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = locationLogic.forest_phantomGanon; couldHave.shadow_medallion = locationCouldAccess.forest_phantomGanon; locationAccess.shadow_medallion_location = locationAccess.forest_phantomGanon; if (checkToItemMap.forest_phantomGanon != "unknown") { player.shadow_medallion = true; }; } else if (document.getElementById("text_" + forestPlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(forestPlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = locationLogic.forest_phantomGanon; couldHave.spirit_medallion = locationCouldAccess.forest_phantomGanon; locationAccess.spirit_medallion_location = locationAccess.forest_phantomGanon; if (checkToItemMap.forest_phantomGanon != "unknown") { player.spirit_medallion = true; }; } else { logic.light_medallion = locationLogic.forest_phantomGanon; if (checkToItemMap.forest_phantomGanon != "unknown") { player.light_medallion = true; }; couldHave.light_medallion = locationCouldAccess.forest_phantomGanon; locationAccess.light_medallion_location = player[checkToItemMap["forest_phantomGanon"]]; } }
    else if (logic[str] == "fire") { if (checkToItemMap.fire_volvagia != "unknown") { player[str2] = true; } logic[str2] = locationLogic.fire_volvagia; if (document.getElementById("text_" + firePlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(firePlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = locationLogic.fire_volvagia; couldHave.shadow_medallion = locationCouldAccess.fire_volvagia; locationAccess.shadow_medallion_location = locationAccess.fire_volvagia; if (checkToItemMap.fire_volvagia != "unknown") { player.shadow_medallion = true; }; } else if (document.getElementById("text_" + firePlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(firePlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = locationLogic.fire_volvagia; couldHave.spirit_medallion = locationCouldAccess.fire_volvagia; locationAccess.spirit_medallion_location = locationAccess.fire_volvagia; if (checkToItemMap.fire_volvagia != "unknown") { player.spirit_medallion = true; }; } else { logic.light_medallion = locationLogic.fire_volvagia; if (checkToItemMap.fire_volvagia != "unknown") { player.light_medallion = true; }; couldHave.light_medallion = locationCouldAccess.fire_volvagia; locationAccess.light_medallion_location = player[checkToItemMap["fire_volvagia"]]; } }
    else if (logic[str] == "water") { if (checkToItemMap.water_morpha != "unknown") { player[str2] = true; } logic[str2] = locationLogic.water_morpha; if (document.getElementById("text_" + waterPlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(waterPlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = locationLogic.water_morpha; couldHave.shadow_medallion = locationCouldAccess.water_morpha; locationAccess.shadow_medallion_location = locationAccess.water_morpha; if (checkToItemMap.water_morpha != "unknown") { player.shadow_medallion = true; }; } else if (document.getElementById("text_" + waterPlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(waterPlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = locationLogic.water_morpha; couldHave.spirit_medallion = locationCouldAccess.water_morpha; locationAccess.spirit_medallion_location = locationAccess.water_morpha; if (checkToItemMap.water_morpha != "unknown") { player.spirit_medallion = true; }; } else { logic.light_medallion = locationLogic.water_morpha; if (checkToItemMap.water_morpha != "unknown") { player.light_medallion = true; }; couldHave.light_medallion = locationCouldAccess.water_morpha; locationAccess.light_medallion_location = player[checkToItemMap["water_morpha"]]; } }
    else if (logic[str] == "spirit") { if (checkToItemMap.spirit_twinrova != "unknown") { player[str2] = true; } logic[str2] = locationLogic.spirit_twinrova; if (document.getElementById("text_" + spiritPlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(spiritPlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = locationLogic.spirit_twinrova; couldHave.shadow_medallion = locationCouldAccess.spirit_twinrova; locationAccess.shadow_medallion_location = locationAccess.spirit_twinrova; if (checkToItemMap.spirit_twinrova != "unknown") { player.shadow_medallion = true; }; } else if (document.getElementById("text_" + spiritPlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(spiritPlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = locationLogic.spirit_twinrova; couldHave.spirit_medallion = locationCouldAccess.spirit_twinrova; locationAccess.spirit_medallion_location = locationAccess.spirit_twinrova; if (checkToItemMap.spirit_twinrova != "unknown") { player.spirit_medallion = true; }; } else { logic.light_medallion = locationLogic.spirit_twinrova; if (checkToItemMap.spirit_twinrova != "unknown") { player.light_medallion = true; }; couldHave.light_medallion = locationCouldAccess.spirit_twinrova; locationAccess.light_medallion_location = player[checkToItemMap["spirit_twinrova"]]; } }
    else if (logic[str] == "shadow") { if (checkToItemMap.shadow_bongo != "unknown") { player[str2] = true; } logic[str2] = locationLogic.shadow_bongo; if (document.getElementById("text_" + shadowPlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(shadowPlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = locationLogic.shadow_bongo; couldHave.shadow_medallion = locationCouldAccess.shadow_bongo; locationAccess.shadow_medallion_location = locationAccess.shadow_bongo; if (checkToItemMap.shadow_bongo != "unknown") { player.shadow_medallion = true; }; } else if (document.getElementById("text_" + shadowPlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(shadowPlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = locationLogic.shadow_bongo; couldHave.spirit_medallion = locationCouldAccess.shadow_bongo; locationAccess.spirit_medallion_location = locationAccess.shadow_bongo; if (checkToItemMap.shadow_bongo != "unknown") { player.spirit_medallion = true; }; } else { logic.light_medallion = locationLogic.shadow_bongo; if (checkToItemMap.shadow_bongo != "unknown") { player.light_medallion = true; }; couldHave.light_medallion = locationCouldAccess.shadow_bongo; locationAccess.light_medallion_location = player[checkToItemMap["shadow_bongo"]]; } }
    else if (logic[str] == "pocket") { player[str2] = true; logic[str2] = true; if (document.getElementById("text_" + pocketPlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(pocketPlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = true; couldHave.shadow_medallion = true; locationAccess.shadow_medallion_location = true; player.shadow_medallion = true; } else if (document.getElementById("text_" + pocketPlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(pocketPlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = true; couldHave.spirit_medallion = true; locationAccess.spirit_medallion_location = true; player.spirit_medallion = true; } else { logic.light_medallion = true; player.light_medallion = true; couldHave.light_medallion = true; locationAccess.light_medallion_location = true; } }
    else { logic[str2] = false; }
  }

  player.emerald = false;
  couldHave.emerald = false;
  locationAccess.emerald_location = false;
  if (logic.emerald == "deku") { if (checkToItemMap.deku_queen_gohma != "unknown") { player.emerald = true; } logic.kokiri_emerald = locationLogic.deku_queen_gohma; locationAccess.emerald_location = locationAccess.deku_queen_gohma; couldHave.emerald = locationCouldAccess.deku_queen_gohma; }
  if (logic.emerald == "dodongos") { if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.emerald = true; } logic.kokiri_emerald = locationLogic.dodongos_king_dodongo; locationAccess.emerald_location = locationAccess.dodongos_king_dodongo; couldHave.emerald = locationCouldAccess.dodongos_king_dodongo; }
  if (logic.emerald == "jabu") { if (checkToItemMap.jabu_barinade != "unknown") { player.emerald = true; } logic.kokiri_emerald = locationLogic.jabu_barinade; locationAccess.emerald_location = locationAccess.jabu_barinade; couldHave.emerald = locationCouldAccess.jabu_barinade; }
  if (logic.emerald == "forest") { if (checkToItemMap.forest_phantomGanon != "unknown") { player.emerald = true; } logic.kokiri_emerald = locationLogic.forest_phantomGanon; locationAccess.emerald_location = locationAccess.forest_phantomGanon; couldHave.emerald = locationCouldAccess.forest_phantomGanon; }
  if (logic.emerald == "fire") { if (checkToItemMap.fire_volvagia != "unknown") { player.emerald = true; } logic.kokiri_emerald = locationLogic.fire_volvagia; locationAccess.emerald_location = locationAccess.fire_volvagia; couldHave.emerald = locationCouldAccess.fire_volvagia; }
  if (logic.emerald == "water") { if (checkToItemMap.water_morpha != "unknown") { player.emerald = true; } logic.kokiri_emerald = locationLogic.water_morpha; locationAccess.emerald_location = locationAccess.water_morpha; couldHave.emerald = locationCouldAccess.water_morpha; }
  if (logic.emerald == "spirit") { if (checkToItemMap.spirit_twinrova != "unknown") { player.emerald = true; } logic.kokiri_emerald = locationLogic.spirit_twinrova; locationAccess.emerald_location = locationAccess.spirit_twinrova; couldHave.emerald = locationCouldAccess.spirit_twinrova; }
  if (logic.emerald == "shadow") { if (checkToItemMap.shadow_bongo != "unknown") { player.emerald = true; } logic.kokiri_emerald = locationLogic.shadow_bongo; locationAccess.emerald_location = locationAccess.shadow_bongo; couldHave.emerald = locationCouldAccess.shadow_bongo; }
  if (logic.emerald == "pocket") { player.emerald = true; logic.kokiri_emerald = true; locationAccess.emerald_location = true; couldHave.emerald = true; }

  player.ruby = false;
  couldHave.ruby = false;
  locationAccess.ruby_location = false;
  if (logic.ruby == "deku") { if (checkToItemMap.deku_queen_gohma != "unknown") { player.ruby = true; } logic.goron_ruby = locationLogic.deku_queen_gohma; locationAccess.ruby_location = locationAccess.deku_queen_gohma; couldHave.ruby = locationCouldAccess.deku_queen_gohma; }
  if (logic.ruby == "dodongos") { if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.ruby = true; } logic.goron_ruby = locationLogic.dodongos_king_dodongo; locationAccess.ruby_location = locationAccess.dodongos_king_dodongo; couldHave.ruby = locationCouldAccess.dodongos_king_dodongo; }
  if (logic.ruby == "jabu") { if (checkToItemMap.jabu_barinade != "unknown") { player.ruby = true; } logic.goron_ruby = locationLogic.jabu_barinade; locationAccess.ruby_location = locationAccess.jabu_barinade; couldHave.ruby = locationCouldAccess.jabu_barinade; }
  if (logic.ruby == "forest") { if (checkToItemMap.forest_phantomGanon != "unknown") { player.ruby = true; } logic.goron_ruby = locationLogic.forest_phantomGanon; locationAccess.ruby_location = locationAccess.forest_phantomGanon; couldHave.ruby = locationCouldAccess.forest_phantomGanon; }
  if (logic.ruby == "fire") { if (checkToItemMap.fire_volvagia != "unknown") { player.ruby = true; } logic.goron_ruby = locationLogic.fire_volvagia; locationAccess.ruby_location = locationAccess.fire_volvagia; couldHave.ruby = locationCouldAccess.fire_volvagia; }
  if (logic.ruby == "water") { if (checkToItemMap.water_morpha != "unknown") { player.ruby = true; } logic.goron_ruby = locationLogic.water_morpha; locationAccess.ruby_location = locationAccess.water_morpha; couldHave.ruby = locationCouldAccess.water_morpha; }
  if (logic.ruby == "spirit") { if (checkToItemMap.spirit_twinrova != "unknown") { player.ruby = true; } logic.goron_ruby = locationLogic.spirit_twinrova; locationAccess.ruby_location = locationAccess.spirit_twinrova; couldHave.ruby = locationCouldAccess.spirit_twinrova; }
  if (logic.ruby == "shadow") { if (checkToItemMap.shadow_bongo != "unknown") { player.ruby = true; } logic.goron_ruby = locationLogic.shadow_bongo; locationAccess.ruby_location = locationAccess.shadow_bongo; couldHave.ruby = locationCouldAccess.shadow_bongo; }
  if (logic.ruby == "pocket") { player.ruby = true; logic.goron_ruby = true; locationAccess.ruby_location = true; couldHave.ruby = true; }

  player.sapphire = false;
  couldHave.sapphire = false;
  locationAccess.sapphire_location = false;
  if (logic.sapphire == "deku") { if (checkToItemMap.deku_queen_gohma != "unknown") { player.sapphire = true; } logic.zora_sapphire = locationLogic.deku_queen_gohma; locationAccess.sapphire_location = locationAccess.deku_queen_gohma; couldHave.sapphire = locationCouldAccess.deku_queen_gohma; }
  if (logic.sapphire == "dodongos") { if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.sapphire = true; } logic.zora_sapphire = locationLogic.dodongos_king_dodongo; locationAccess.sapphire_location = locationAccess.dodongos_king_dodongo; couldHave.sapphire = locationCouldAccess.dodongos_king_dodongo; }
  if (logic.sapphire == "jabu") { if (checkToItemMap.jabu_barinade != "unknown") { player.sapphire = true; } logic.zora_sapphire = locationLogic.jabu_barinade; locationAccess.sapphire_location = locationAccess.jabu_barinade; couldHave.sapphire = locationCouldAccess.jabu_barinade; }
  if (logic.sapphire == "forest") { if (checkToItemMap.forest_phantomGanon != "unknown") { player.sapphire = true; } logic.zora_sapphire = locationLogic.forest_phantomGanon; locationAccess.sapphire_location = locationAccess.forest_phantomGanon; couldHave.sapphire = locationCouldAccess.forest_phantomGanon; }
  if (logic.sapphire == "fire") { if (checkToItemMap.fire_volvagia != "unknown") { player.sapphire = true; } logic.zora_sapphire = locationLogic.fire_volvagia; locationAccess.sapphire_location = locationAccess.fire_volvagia; couldHave.sapphire = locationCouldAccess.fire_volvagia; }
  if (logic.sapphire == "water") { if (checkToItemMap.water_morpha != "unknown") { player.sapphire = true; } logic.zora_sapphire = locationLogic.water_morpha; locationAccess.sapphire_location = locationAccess.water_morpha; couldHave.sapphire = locationCouldAccess.water_morpha; }
  if (logic.sapphire == "spirit") { if (checkToItemMap.spirit_twinrova != "unknown") { player.sapphire = true; } logic.zora_sapphire = locationLogic.spirit_twinrova; locationAccess.sapphire_location = locationAccess.spirit_twinrova; couldHave.sapphire = locationCouldAccess.spirit_twinrova; }
  if (logic.sapphire == "shadow") { if (checkToItemMap.shadow_bongo != "unknown") { player.sapphire = true; } logic.zora_sapphire = locationLogic.shadow_bongo; locationAccess.sapphire_location = locationAccess.shadow_bongo; couldHave.sapphire = locationCouldAccess.shadow_bongo; }
  if (logic.sapphire == "pocket") { player.sapphire = true; logic.zora_sapphire = true; locationAccess.sapphire_location = true; couldHave.sapphire = true; }


  if (logic.emerald == "unknown") { logic.kokiri_emerald = false; }
  if (logic.ruby == "unknown") { logic.goron_ruby = false; }
  if (logic.sapphire == "unknown") { logic.zora_sapphire = false; }
  if (logic.forest_medallion_location == "unknown") { logic.forest_medallion = false; }
  if (logic.fire_medallion_location == "unknown") { logic.fire_medallion = false; }
  if (logic.water_medallion_location == "unknown") { logic.water_medallion = false; }

  if (rules.smallKeys != "remove" && rules.smallKeys != "keyRings") {
    const dungeons = [
      { name: "Forest", key: "forest" },
      { name: "Fire", key: "fire" },
      { name: "Water", key: "water" },
      { name: "Spirit", key: "spirit" },
      { name: "Shadow", key: "shadow" },
      { name: "Ganon's", key: "ganons" },
      { name: "GTG", key: "gtg" },
      { name: "Well", key: "well" }
    ];

    dungeons.forEach(dungeon => {
      logic[`current_${dungeon.key}_keys`] = logic[`forced_${dungeon.key}_keys`];

      areaToCheckMap[dungeon.name].forEach(loc => {
        if (checkToItemMap[loc] === "small_key" && locationLogic[loc]) {
          logic[`current_${dungeon.key}_keys`] += 1;
        }
      });
    });
    const updateBossKeyLogic = (areaName, logicProperty, bossLocation) => {
      if (logic[logicProperty]) return;

      const locations = areaToCheckMap[areaName] || [];
      let foundMissingBK = false;

      for (const loc of locations) {
        if (loc === bossLocation || loc.includes("gs_")) continue;

        if (!locationLogic[loc] && (checkToItemMap[loc] === "boss_key" || checkToItemMap[loc] === "unknown")) {
          foundMissingBK = true;
          break;
        }
      }
      logic[logicProperty] = !foundMissingBK;
    };

    const dungeonData = {
      Forest: {
        key: "forest",
        max: 5,
        boss: "forest_phantomGanon",
        tiers: [
          ["forest_first", "forest_stalfos", "forest_midCourtyard", "forest_highCourtyard", "forest_lowCourtyard"],
          ["forest_blockRoom", "forest_floormaster"],
          ["forest_bossKey"],
          ["forest_red", "forest_bow", "forest_blue"]
        ]
      },
      Fire: {
        key: "fire",
        max: 8,
        boss: "fire_volvagia",
        condition: () => (logic.can_wear_goron_tunic && logic.hammer && logic.hover_boots) ||
          (checkToItemMap["fire_volvagia"] !== "small_key" && checkToItemMap["fire_volvagia"] !== "unknown"),
        tiers: [
          ["fire_nearBoss", "fire_hammer1", "fire_hammer2"],
          ["fire_lavaOpen", "fire_lavaBomb"],
          [],
          ["fire_lowerMaze", "fire_sideRoom"],
          ["fire_map"],
          ["fire_upperMaze", "fire_shortcut", "fire_scarecrow"]
        ],
        bkSpecial: (loc) => checkToItemMap[loc] === "boss_key" && (checkToItemMap["fire_volvagia"] === "small_key" || checkToItemMap["fire_volvagia"] === "unknown")
      },
      Water: {
        key: "water",
        max: 6,
        boss: "water_morpha",
        condition: () => (logic.longshot && logic.iron_boots) ||
          (checkToItemMap["water_morpha"] !== "small_key" && checkToItemMap["water_morpha"] !== "unknown"),
        tiers: [
          ["water_compass", "water_map", "water_cracked", "water_torches", "water_block", "water_pillar", "water_dragon"]
        ],
        bkSpecial: (loc) => checkToItemMap[loc] === "boss_key" && (checkToItemMap["water_morpha"] === "small_key" || checkToItemMap["water_morpha"] === "unknown")
      },
      Spirit: {
        key: "spirit",
        max: 5,
        boss: "spirit_twinrova",
        tiers: [
          ["spirit_childLeft", "spirit_childRight", "spirit_adultLeft", "spirit_adultRight"],
          ["spirit_childClimb1", "spirit_childClimb2", "spirit_map", "spirit_sunRoom"],
          [],
          ["spirit_rightHand", "spirit_rotatingMirror1", "spirit_rotatingMirror2", "spirit_lullabyHigh", "spirit_lullabyHand"],
          ["spirit_nearFourArmos", "spirit_invisible1", "spirit_invisible2", "spirit_leftHand"],
          ["spirit_bossKey", "spirit_tippyTop"]
        ]
      },
      Shadow: {
        key: "shadow",
        max: 5,
        boss: "shadow_bongo",
        tiers: [
          ["shadow_map", "shadow_hovers", "shadow_compass", "shadow_earlySilvers"],
          ["shadow_spinning1", "shadow_spinning2", "shadow_spikesLower", "shadow_spikesUpper", "shadow_spikesSwitch"],
          ["shadow_pot", "shadow_redeadSilvers"],
          ["shadow_wind", "shadow_bombable", "shadow_gibdos"],
          ["shadow_dins1", "shadow_dins2", "shadow_floormaster"]
        ]
      },
      GTG: {
        key: "gtg",
        max: 9,
        tiers: [
          ["gtg_lobbyLeft", "gtg_lobbyRight", "gtg_stalfos", "gtg_wolfos", "gtg_silvers1", "gtg_silvers2", "gtg_silvers3", "gtg_silvers4", "gtg_eyes", "gtg_aboveEyes", "gtg_keese", "gtg_flamesChest", "gtg_freestanding", "gtg_right2", "gtg_right3", "gtg_beamos", "gtg_toilet"],
          [], [], ["gtg_left1"], ["gtg_left2"], [], ["gtg_left3"], ["gtg_left4"]
        ]
      }
    };


    Object.entries(dungeonData).forEach(([name, data]) => {
      const currentKeyProp = `current_${data.key}_keys`;
      const minKeyProp = `min_${data.key}_keys`;
      const finalKeyProp = `${data.key}_keys`;

      if (logic[currentKeyProp] < data.max) {
        if (!data.condition || data.condition()) {
          let found = false;
          for (let i = 0; i < data.tiers.length; i++) {
            for (const loc of data.tiers[i]) {
              const isKey = checkToItemMap[loc] === "small_key" || checkToItemMap[loc] === "unknown";
              const isSpecialBK = data.bkSpecial ? data.bkSpecial(loc) : false;

              if (!locationLogic[loc] && (isKey || isSpecialBK)) {
                logic[minKeyProp] = i;
                found = true;
                break;
              }
            }
            if (found) break;
          }
          if (!found) logic[minKeyProp] = data.max;
        } else if (data.key === "water") {
          logic.min_water_keys = 0;
        }
      }
      logic[finalKeyProp] = Math.max(logic[minKeyProp] || 0, logic[currentKeyProp]);

      if (data.boss) {
        updateBossKeyLogic(name, `${data.key}_boss_key`, data.boss);
      }
    });

    if (logic.current_ganons_keys < 2) {
      const needsKeys = areaToCheckMap["Ganon's"].some(loc =>
        loc !== "ganons_lightTrialLullaby" && !locationLogic[loc] && (checkToItemMap[loc] === "small_key" || checkToItemMap[loc] === "unknown")
      );
      logic.min_ganons_keys = needsKeys ? 0 : 2;
    }
    if (logic.can_enter_ganons && logic.golden_gauntlets) logic.min_ganons_keys = 1;
    logic.ganons_keys = Math.max(logic.min_ganons_keys, logic.current_ganons_keys);

    if (logic.current_well_keys < 3) {
      const needsKeys = areaToCheckMap["Well"].some(loc =>
        !["well_locked1", "well_locked2"].includes(loc) && !loc.includes("gs_") &&
        !locationLogic[loc] && (checkToItemMap[loc] === "small_key" || checkToItemMap[loc] === "unknown")
      );
      logic.min_well_keys = needsKeys ? 0 : 3;
    }
    logic.well_keys = Math.max(logic.min_well_keys, logic.current_well_keys);
  }

  if (rules.smallKeys == "keyRings" && !player.forest_key_ring) {
    logic.forest_keys = player.current_forest_keys = 0;
    logic.forest_boss_key = player.forest_boss_key = false;
  }
  if (rules.smallKeys == "keyRings" && !player.fire_key_ring) {
    logic.fire_keys = player.current_fire_keys = 0;
    logic.fire_boss_key = player.fire_boss_key = false;
  }
  if (rules.smallKeys == "keyRings" && !player.water_key_ring) {
    logic.water_keys = player.current_water_keys = 0;
    logic.water_boss_key = player.water_boss_key = false;
  }
  if (rules.smallKeys == "keyRings" && !player.shadow_key_ring) {
    logic.shadow_keys = player.current_shadow_keys = 0;
    logic.shadow_boss_key = player.shadow_boss_key = false;
  }
  if (rules.smallKeys == "keyRings" && !player.spirit_key_ring) {
    logic.spirit_keys = player.current_spirit_keys = 0;
    logic.spirit_boss_key = player.spirit_boss_key = false;
  }
  if (rules.smallKeys == "keyRings" && !player.gtg_key_ring) {
    logic.gtg_keys = player.current_gtg_keys = 0;
  }
  if (rules.smallKeys == "keyRings" && !player.well_key_ring) {
    logic.well_keys = player.current_well_keys = 0;
  }
  if (rules.smallKeys == "keyRings" && !player.ganons_key_ring) {
    logic.ganons_keys = player.current_ganons_keys = 0;
  }
}

function logicShortcuts() {
  logic.child_can_enter_river = logic.bomb_bag || logic.silver_scale || Spawn.child_zd || Spawn.child_zr;
  logic.bean_access = ((logic.child_can_enter_river && rules.beans == "vanilla") || (logic.magic_bean_pack && rules.beans == "shuffled") || (rules.preplantBeans == "on"));
  logic.child_can_enter_domain = (logic.child_can_enter_river && logic.lullaby) || logic.silver_scale || Spawn.child_zd;
  logic.jabu_entrance_access = ((logic.rutos_letter || rules.fountain == "open") && logic.child_can_enter_domain) || Spawn.child_zf;
  logic.can_hit_jabu_switch = logic.jabu_access && logic.bomb_bag || ((logic.boomerang || logic.slingshot) && logic.jabu_child_access) || ((logic.hookshot || logic.bow) && logic.jabu_adult_access);
  logic.fortress_access = logic.eponas || logic.longshot || Spawn.adult_gf || Spawn.adult_wasteland || (Spawn.child_gv_gf && logic.kokiri_sword);
  logic.can_save_carpenters = (Spawn.child_gv_gf && logic.kokiri_sword) || (logic.fortress_access && ((logic.bow || logic.hookshot || logic.hover_boots) || true)) /*fast carpenter fix**/;
  logic.gtg_entrance_access = (logic.can_save_carpenters && rules.gerudoCard == "vanilla") || (logic.fortress_access && logic.gerudo_card && rules.gerudoCard == "shuffled");
  logic.can_cross_quicksand = logic.fortress_access && (logic.longshot || logic.hover_boots) && (rules.gerudoCard == "vanilla" || logic.gerudo_card || Spawn.adult_wasteland);
  logic.can_enter_colossus = (logic.can_cross_quicksand && (logic.brackets || logic.can_see)) || logic.requiem || Spawn.child_colossus || Spawn.adult_colossus || locationLogic.spirit_leftHand || locationLogic.spirit_rightHand;
  logic.can_enter_child_colossus = logic.requiem || Spawn.child_colossus || locationLogic.spirit_rightHand;
  logic.can_use_fire = (logic.dins_fire || (logic.bow && logic.fire_arrows)) && logic.magic;
  logic.can_use_dins = logic.dins_fire && logic.magic;
  logic.can_shoot_blue_fire_arrows = logic.ice_arrows && logic.bow && logic.magic && rules.blueFireArrows == "on";
  logic.can_use_farores = logic.farores_wind && logic.magic;
  logic.can_see = logic.lens && logic.magic;
  logic.can_blast_or_smash = logic.bomb_bag || logic.hammer;
  logic.can_enter_child_dodongos = logic.bomb_bag || logic.goron_bracelet;
  logic.can_break_dodongos_wall = logic.dodongos_access && (logic.goron_bracelet || logic.bomb_bag || (logic.dodongos_adult_access && logic.hammer));
  logic.dodongos_climb = logic.can_break_dodongos_wall && (logic.bomb_bag || logic.goron_bracelet || logic.can_use_dins);
  logic.can_enter_shadow_entrance = (logic.nocturne || Spawn.adult_nocturne) && logic.can_use_dins;//&& logic.can_see;
  logic.can_cross_shadow_gap = logic.shadow_temple_adult_access && logic.hover_boots;
  logic.can_bomb_shadow_wall = logic.can_cross_shadow_gap && logic.bomb_bag && (rules.smallKeys != "keyRings" || couldHave.shadow_key_ring);
  logic.can_pass_shadow_hookshot_door = logic.can_bomb_shadow_wall && logic.hookshot;
  logic.can_ride_shadow_boat = logic.can_pass_shadow_hookshot_door && logic.lullaby;
  logic.can_beat_shadow_boss = logic.can_ride_shadow_boat && (logic.bow || logic.longshot);
  logic.can_stop_link_the_goron = logic.bomb_bag || logic.bow || logic.goron_bracelet;
  logic.can_enter_adult_domain = logic.lullaby || Spawn.adult_zd;
  logic.ice_entrance_access = (logic.can_enter_adult_domain && ((logic.rutos_letter && logic.child_can_enter_domain) || rules.fountain == "open")) || Spawn.adult_zf;
  logic.reverse_crater = (logic.hover_boots || logic.hookshot || logic.child_can_enter_river) && logic.bolero;
  logic.can_enter_fire_temple_entrance = (logic.crater_by_city && (logic.hookshot || logic.hover_boots)) || logic.bolero;
  logic.crater_by_city = logic.bow || logic.bomb_bag || logic.goron_bracelet || logic.reverse_crater || ((logic.hammer || Spawn.adult_upper_dmc) && logic.hover_boots) || (logic.longshot && logic.goron_tunic && (logic.hammer || Spawn.adult_upper_dmc)) || Spawn.adult_lower_dmc;
  logic.crater_top = logic.crater_by_city || logic.hammer || Spawn.adult_upper_dmc;
  logic.can_push_spirit_silver_block = logic.spirit_temple_adult_access && logic.silver_gauntlets;
  logic.can_pass_mido_as_adult = logic.minuet || logic.sarias || Spawn.adult_meadow;
  logic.can_enter_forest_temple_entrance = logic.can_pass_mido_as_adult && logic.hookshot;
  logic.can_enter_well_entrance = logic.storms;

  logic.medalCount = 0; if (logic.forest_medallion) { logic.medalCount += 1; } if (logic.fire_medallion) { logic.medalCount += 1; } if (logic.water_medallion) { logic.medalCount += 1; } if (logic.shadow_medallion) { logic.medalCount += 1; } if (logic.spirit_medallion) { logic.medalCount += 1; } if (logic.light_medallion) { logic.medalCount += 1; }
  logic.stoneCount = 0; if (logic.kokiri_emerald) { logic.stoneCount += 1; } if (logic.goron_ruby) { logic.stoneCount += 1; } if (logic.zora_sapphire) { logic.stoneCount += 1; }
  logic.rewardCount = logic.medalCount + logic.stoneCount;
  logic.can_enter_ganons = (logic.medalCount == 6 && rules.bridge == "allMeds") || rules.bridge == "open" || (rules.bridge == "fiveMedals" && logic.medalCount >= 5) || (rules.bridge == "fourMedals" && logic.medalCount >= 4) || (rules.bridge == "threeMedals" && logic.medalCount >= 3) || (rules.bridge == "twoMedals" && logic.medalCount >= 2) || (rules.bridge == "threeStones" && logic.stoneCount == 3) || (rules.bridge == "1Reward" && logic.rewardCount >= 1) || (rules.bridge == "twoRewards" && logic.rewardCount >= 2) || (rules.bridge == "threeRewards" && logic.rewardCount >= 3) || (rules.bridge == "fourRewards" && logic.rewardCount >= 4) || (rules.bridge == "fiveRewards" && logic.rewardCount >= 5) || (rules.bridge == "sixRewards" && logic.rewardCount >= 6) || (rules.bridge == "sevenRewards" && logic.rewardCount >= 7) || (rules.bridge == "eightRewards" && logic.rewardCount >= 8) || (rules.bridge == "nineRewards" && logic.rewardCount >= 9) || (rules.bridge == "vanilla" && logic.spirit_medallion && logic.shadow_medallion && logic.light_arrows);

  logic.can_climb_fire_temple = logic.fire_temple_adult_access && logic.fire_keys >= 3 && logic.can_wear_goron_tunic && logic.goron_bracelet && (logic.bow || logic.hookshot || logic.bomb_bag);
  logic.can_enter_water_entrance = (logic.hookshot && logic.iron_boots) || (logic.longshot && logic.golden_scale);
  logic.can_do_water_checks = logic.water_temple_adult_access && logic.iron_boots;
  logic.middle_water = logic.can_do_water_checks && logic.lullaby && (logic.bow || logic.can_use_dins);
  logic.projectile_both = logic.bomb_bag || ((logic.slingshot || logic.boomerang) && (logic.bow || logic.hookshot));
  logic.projectile_child = logic.bomb_bag || logic.slingshot || logic.boomerang;
  logic.projectile_adult = logic.bomb_bag || logic.bow || logic.hookshot;
  logic.can_wear_goron_tunic = logic.goron_tunic || (logic.adults_wallet && (logic.bomb_bag || logic.goron_bracelet || logic.bow || Spawn.adult_gc_shop));
  logic.can_wear_zora_tunic = logic.zora_tunic || (logic.giants_wallet && (((logic.lullaby || Spawn.adult_zd) && logic.bottle) || Spawn.adult_zd_shop));
  logic.child_can_get_past_mido = rules.deku == "open" || logic.kokiri_sword;
  logic.can_enter_deku_entrance = logic.child_can_get_past_mido;

  player.child_can_enter_river = player.bomb_bag || player.bombchus || player.silver_scale || Spawn.child_zd || Spawn.child_zr;
  player.child_can_enter_domain = player.silver_scale || Spawn.child_zd || Spawn.child_zr || player.bomb_bag || player.bombchus;
  player.bean_access = ((player.child_can_enter_river && rules.beans == "vanilla") || (player.magic_bean_pack && rules.beans == "shuffled") || (rules.preplantBeans == "on"));
  player.jabu_entrance_access = (player.child_can_enter_domain && (player.rutos_letter || rules.fountain == "open")) || Spawn.child_zf;
  player.can_hit_jabu_switch = player.jabu_access && player.bomb_bag || player.bombchus || ((player.boomerang || player.slingshot) && player.jabu_child_access) || ((player.hookshot || player.bow) && player.jabu_adult_access);

  player.fortress_access = player.eponas || player.longshot || player.requiem || Spawn.adult_gf || Spawn.adult_wasteland || (rules.valleyWithHook == "allowed" && player.hookshot);
  player.can_save_carpenters = Spawn.child_gv_gf || (player.fortress_access && ((player.bow || player.hookshot || player.hover_boots) || true)) /*fast carpenter fix**/;
  player.gtg_entrance_access = (player.can_save_carpenters && rules.gerudoCard == "vanilla") || (player.fortress_access && player.gerudo_card && rules.gerudoCard == "shuffled");
  player.can_cross_quicksand = player.fortress_access && (rules.gerudoCard == "vanilla" || player.gerudo_card);
  player.can_enter_colossus = (player.can_cross_quicksand) || player.requiem || Spawn.child_colossus || Spawn.adult_colossus || Spawn.adult_wasteland || Spawn.child_wasteland || locationAccess.spirit_leftHand || locationAccess.spirit_rightHand;
  player.can_enter_child_colossus = player.requiem || Spawn.child_colossus || Spawn.child_wasteland || locationAccess.spirit_rightHand;
  player.can_use_fire_arrows = player.fire_arrows && player.magic && player.bow;
  player.can_use_fire = (player.dins_fire || (player.bow && player.fire_arrows)) && player.magic;
  player.can_use_dins = player.dins_fire && player.magic;
  player.can_shoot_blue_fire_arrows = player.ice_arrows && player.bow && player.magic && rules.blueFireArrows == "on";
  player.can_use_farores = player.farores_wind && player.magic;
  player.can_use_bottle = (player.bottle1 || player.bottle2 || player.bottle3 || player.bottle4 || (player.rutos_letter && player.child_can_enter_river));
  player.can_see = player.lens && player.magic;
  player.can_use_explosives = player.bomb_bag || player.bombchus;
  player.can_blast_or_smash = player.bomb_bag || player.hammer || player.bombchus;
  player.can_enter_child_dodongos = player.bomb_bag || player.goron_bracelet || player.bombchus;
  player.can_break_dodongos_wall = player.dodongos_access && (player.bomb_bag || player.bombchus || player.goron_bracelet || (player.dodongos_adult_access && (player.hammer || player.can_shoot_blue_fire_arrows)));
  player.dodongos_climb = player.can_break_dodongos_wall && (player.bomb_bag || player.bombchus || player.goron_bracelet || player.can_use_dins || (player.dodongos_adult_access && player.bow));
  player.can_enter_shadow_entrance = (player.nocturne || Spawn.adult_nocturne) && (player.can_use_dins || (rules.fae == "allowed" && player.can_use_fire));//&& player.can_see;
  player.can_cross_shadow_gap = player.shadow_temple_adult_access && player.hover_boots;
  player.can_bomb_shadow_wall = player.can_cross_shadow_gap && (player.bomb_bag || player.bombchus) && (rules.smallKeys != "keyRings" || player.shadow_key_ring);
  player.can_pass_shadow_hookshot_door = player.can_bomb_shadow_wall && player.hookshot;
  player.can_ride_shadow_boat = player.can_pass_shadow_hookshot_door && player.lullaby;
  player.can_beat_shadow_boss = player.can_ride_shadow_boat && (player.bow || player.longshot || player.bombchus) && player.shadow_boss_key;
  player.can_stop_link_the_goron = player.bomb_bag || player.bow || player.goron_bracelet || player.bombchus;
  player.can_enter_adult_domain = player.lullaby || player.hover_boots || Spawn.adult_zd;
  player.ice_entrance_access = (player.can_enter_adult_domain && ((player.rutos_letter && player.child_can_enter_domain) || rules.fountain == "open" || rules.kzSkip)) || Spawn.adult_zf;
  player.reverse_crater = (player.hover_boots || player.hookshot || player.child_can_enter_river) && player.bolero;
  player.crater_by_city = player.can_stop_link_the_goron || player.reverse_crater || player.hammer || (player.longshot && player.hammer) || Spawn.adult_lower_dmc;
  player.crater_top = player.crater_by_city || player.hammer || Spawn.adult_upper_dmc;
  player.can_enter_fire_temple_entrance = (player.crater_by_city && (player.hookshot || player.hover_boots)) || player.bolero;
  player.can_push_spirit_silver_block = player.spirit_temple_adult_access && player.silver_gauntlets;
  player.can_enter_forest_temple_entrance = player.hookshot;
  player.can_enter_well_entrance = player.storms;

  player.medalCount = 0; if (player.forest) { player.medalCount += 1; } if (player.fire) { player.medalCount += 1; } if (player.water) { player.medalCount += 1; } if (player.shadow_medallion) { player.medalCount += 1; } if (player.spirit_medallion) { player.medalCount += 1; } if (player.light_medallion) { player.medalCount += 1; }
  player.stoneCount = 0; if (player.emerald) { player.stoneCount += 1; } if (player.ruby) { player.stoneCount += 1; } if (player.sapphire) { player.stoneCount += 1; }
  player.rewardCount = player.medalCount + player.stoneCount;
  player.can_enter_ganons = (player.medalCount == 6 && rules.bridge == "allMeds") || rules.bridge == "open" || (rules.bridge == "fiveMedals" && player.medalCount >= 5) || (rules.bridge == "fourMedals" && player.medalCount >= 4) || (rules.bridge == "threeMedals" && player.medalCount >= 3) || (rules.bridge == "twoMedals" && player.medalCount >= 2) || (rules.bridge == "threeStones" && player.stoneCount == 3) || (rules.bridge == "1Reward" && player.rewardCount >= 1) || (rules.bridge == "twoRewards" && player.rewardCount >= 2) || (rules.bridge == "threeRewards" && player.rewardCount >= 3) || (rules.bridge == "fourRewards" && player.rewardCount >= 4) || (rules.bridge == "fiveRewards" && player.rewardCount >= 5) || (rules.bridge == "sixRewards" && player.rewardCount >= 6) || (rules.bridge == "sevenRewards" && player.rewardCount >= 7) || (rules.bridge == "eightRewards" && player.rewardCount >= 8) || (rules.bridge == "nineRewards" && player.rewardCount >= 9) || (rules.bridge == "vanilla" && player.spirit_medallion && player.shadow_medallion && player.light_arrows);

  player.can_climb_fire_temple = player.fire_temple_adult_access && player.current_fire_keys >= 3 && (player.bow || player.hookshot || player.bomb_bag || player.bombchus);
  player.can_enter_water_entrance = player.hookshot && (player.iron_boots || player.golden_scale);
  player.can_do_water_checks = player.water_temple_adult_access && (player.iron_boots || player.longshot);
  player.middle_water = player.can_do_water_checks && player.lullaby && (player.bow || player.can_use_dins || player.current_water_keys >= 1);
  player.projectile_both = player.bomb_bag || player.bombchus || ((player.slingshot || player.boomerang) && (player.bow || player.hookshot));
  player.projectile_child = player.bomb_bag || player.bombchus || player.slingshot || player.boomerang;
  player.projectile_adult = player.bomb_bag || player.bombchus || player.bow || player.hookshot;
  player.can_wear_goron_tunic = true;
  player.can_wear_zora_tunic = true;
  player.can_climb_gtg_hole = player.hookshot || player.hover_boots || player.bomb_bag;

  player.child_can_get_past_mido = rules.deku == "open" || player.kokiri_sword;
  player.can_enter_deku_entrance = player.child_can_get_past_mido;

  couldHave.child_can_enter_river = couldHave.bomb_bag || player.bombchus || couldHave.silver_scale || Spawn.child_zd || Spawn.child_zr;
  couldHave.bean_access = ((couldHave.child_can_enter_river && rules.beans == "vanilla") || (couldHave.magic_bean_pack && rules.beans == "shuffled") || (rules.preplantBeans == "on"));
  couldHave.child_can_enter_domain = couldHave.silver_scale || Spawn.child_zd || Spawn.child_zr || couldHave.bomb_bag || player.bombchus;
  couldHave.jabu_entrance_access = (couldHave.child_can_enter_domain && (couldHave.rutos_letter || rules.fountain == "open")) || Spawn.child_zf;
  couldHave.can_hit_jabu_switch = couldHave.jabu_access && couldHave.bomb_bag || player.bombchus || ((couldHave.boomerang || couldHave.slingshot) && couldHave.jabu_child_access) || ((couldHave.hookshot || couldHave.bow) && couldHave.jabu_adult_access);

  couldHave.fortress_access = couldHave.eponas || couldHave.longshot || couldHave.requiem || Spawn.adult_gf || Spawn.adult_wasteland || (rules.valleyWithHook == "allowed" && couldHave.hookshot);
  couldHave.can_save_carpenters = Spawn.child_gv_gf || (couldHave.fortress_access && ((couldHave.bow || couldHave.hookshot || couldHave.hover_boots) || true)) /*fast carpenter fix**/;
  couldHave.gtg_entrance_access = (couldHave.can_save_carpenters && rules.gerudoCard == "vanilla") || (couldHave.fortress_access && couldHave.gerudo_card && rules.gerudoCard == "shuffled");
  couldHave.can_cross_quicksand = couldHave.fortress_access && (rules.gerudoCard == "vanilla" || couldHave.gerudo_card);
  couldHave.can_enter_colossus = (couldHave.can_cross_quicksand) || couldHave.requiem || Spawn.child_colossus || Spawn.adult_colossus || Spawn.adult_wasteland || Spawn.child_wasteland || locationCouldAccess.spirit_leftHand || locationCouldAccess.spirit_rightHand;
  couldHave.can_enter_child_colossus = couldHave.requiem || Spawn.child_colossus || Spawn.child_wasteland || locationCouldAccess.spirit_rightHand;
  couldHave.can_use_fire = (couldHave.dins_fire || (couldHave.bow && couldHave.fire_arrows)) && couldHave.magic;
  couldHave.can_use_dins = couldHave.dins_fire && couldHave.magic;
  couldHave.can_shoot_blue_fire_arrows = couldHave.ice_arrows && couldHave.bow && couldHave.magic && rules.blueFireArrows == "on";
  couldHave.can_use_farores = couldHave.farores_wind && couldHave.magic;
  couldHave.can_use_bottle = (couldHave.bottle1 || couldHave.bottle2 || couldHave.bottle3 || couldHave.bottle4 || (couldHave.rutos_letter && couldHave.child_can_enter_river));
  couldHave.can_see = couldHave.lens && couldHave.magic;
  couldHave.can_blast_or_smash = couldHave.bomb_bag || couldHave.hammer || player.bombchus;
  couldHave.can_enter_child_dodongos = couldHave.bomb_bag || couldHave.goron_bracelet || player.bombchus;
  couldHave.can_break_dodongos_wall = couldHave.dodongos_access && (couldHave.bomb_bag || player.bombchus || couldHave.goron_bracelet || (couldHave.dodongos_adult_access && (couldHave.hammer || couldHave.can_shoot_blue_fire_arrows)))
  couldHave.dodongos_climb = couldHave.can_break_dodongos_wall && (couldHave.bomb_bag || player.bombchus || couldHave.goron_bracelet || couldHave.can_use_dins || (player.dodongos_adult_access && couldHave.bow));
  couldHave.can_enter_shadow_entrance = (couldHave.nocturne || Spawn.adult_nocturne) && (couldHave.can_use_dins || (rules.fae == "allowed" && player.can_use_fire));//&& couldHave.can_see;
  couldHave.can_cross_shadow_gap = couldHave.shadow_temple_adult_access && couldHave.hover_boots;
  couldHave.can_bomb_shadow_wall = couldHave.can_cross_shadow_gap && (couldHave.bomb_bag || player.bombchus) && (rules.smallKeys != "keyRings" || couldHave.shadow_key_ring);
  couldHave.can_pass_shadow_hookshot_door = couldHave.can_bomb_shadow_wall && couldHave.hookshot;
  couldHave.can_ride_shadow_boat = couldHave.can_pass_shadow_hookshot_door && couldHave.lullaby;
  couldHave.can_beat_shadow_boss = couldHave.can_ride_shadow_boat && (couldHave.bow || couldHave.longshot || player.bombchus || couldHave.bomb_bag) && (rules.dungeonEr != "ganonsExcluded" || player.shadow_boss_key);
  couldHave.can_stop_link_the_goron = couldHave.bomb_bag || couldHave.bow || couldHave.goron_bracelet || player.bombchus;
  couldHave.ice_entrance_access = (couldHave.can_enter_adult_domain && ((couldHave.rutos_letter && couldHave.child_can_enter_domain) || rules.fountain == "open" || rules.kzSkip)) || Spawn.adult_zf;
  couldHave.can_enter_adult_domain = couldHave.lullaby || couldHave.hover_boots || Spawn.adult_zd;
  couldHave.reverse_crater = (couldHave.hover_boots || couldHave.hookshot || couldHave.child_can_enter_river) && couldHave.bolero;
  couldHave.crater_by_city = couldHave.can_stop_link_the_goron || couldHave.reverse_crater || couldHave.hammer || (couldHave.longshot && couldHave.hammer) || Spawn.adult_lower_dmc;
  couldHave.crater_top = couldHave.crater_by_city || couldHave.hammer || Spawn.adult_upper_dmc;
  couldHave.can_enter_fire_temple_entrance = (couldHave.crater_by_city && (couldHave.hookshot || couldHave.hover_boots)) || couldHave.bolero;
  couldHave.can_push_spirit_silver_block = couldHave.spirit_temple_adult_access && couldHave.silver_gauntlets;
  couldHave.can_enter_forest_temple_entrance = couldHave.hookshot;
  couldHave.can_enter_well_entrance = couldHave.storms;

  couldHave.medalCount = 0; if (couldHave.forest || player.forest || locationAccess.forest_medallion_location) { couldHave.medalCount += 1; } if (couldHave.fire || player.fire || locationAccess.fire_medallion_location) { couldHave.medalCount += 1; } if (couldHave.water || player.water || locationAccess.water_medallion_location) { couldHave.medalCount += 1; } if (player.shadow_medallion || couldHave.shadow_medallion || locationAccess.shadow_medallion_location) { couldHave.medalCount += 1; } if (player.spirit_medallion || couldHave.spirit_medallion || locationAccess.spirit_medallion_location) { couldHave.medalCount += 1; } if (player.light_medallion || couldHave.light_medallion || locationPeek.light_medallion_location) { couldHave.medalCount += 1; }
  couldHave.stoneCount = 0; if (couldHave.emerald || player.emerald || locationAccess.emerald_location) { couldHave.stoneCount += 1; } if (couldHave.ruby || player.ruby || locationAccess.ruby_location) { couldHave.stoneCount += 1; } if (couldHave.sapphire || player.sapphire || locationAccess.sapphire_location) { couldHave.stoneCount += 1; }
  couldHave.rewardCount = couldHave.medalCount + couldHave.stoneCount;
  couldHave.can_enter_ganons = (couldHave.medalCount == 6 && rules.bridge == "allMeds") || rules.bridge == "open" || (rules.bridge == "fiveMedals" && couldHave.medalCount >= 5) || (rules.bridge == "fourMedals" && couldHave.medalCount >= 4) || (rules.bridge == "threeMedals" && couldHave.medalCount >= 3) || (rules.bridge == "twoMedals" && couldHave.medalCount >= 2) || (rules.bridge == "threeStones" && couldHave.stoneCount == 3) || (rules.bridge == "1Reward" && couldHave.rewardCount >= 1) || (rules.bridge == "twoRewards" && couldHave.rewardCount >= 2) || (rules.bridge == "threeRewards" && couldHave.rewardCount >= 3) || (rules.bridge == "fourRewards" && couldHave.rewardCount >= 4) || (rules.bridge == "fiveRewards" && couldHave.rewardCount >= 5) || (rules.bridge == "sixRewards" && couldHave.rewardCount >= 6) || (rules.bridge == "sevenRewards" && couldHave.rewardCount >= 7) || (rules.bridge == "eightRewards" && couldHave.rewardCount >= 8) || (rules.bridge == "nineRewards" && couldHave.rewardCount >= 9) || (rules.bridge == "vanilla" && (player.spirit_medallion || couldHave.spirit_medallion || locationAccess.spirit_medallion_location) && (player.shadow_medallion || couldHave.shadow_medallion || locationAccess.shadow_medallion_location) && couldHave.light_arrows);

  couldHave.can_climb_fire_temple = couldHave.fire_temple_adult_access && (player.current_fire_keys >= 3 || (couldHave.hammer && (couldHave.bomb_bag || player.bombchus))) && (couldHave.bow || couldHave.hookshot || couldHave.bomb_bag || player.bombchus) && (rules.smallKeys != "keyRings" || couldHave.fire_key_ring);
  couldHave.can_enter_water_entrance = couldHave.hookshot && (couldHave.iron_boots || couldHave.golden_scale);
  couldHave.can_do_water_checks = couldHave.water_temple_adult_access && (couldHave.iron_boots || couldHave.longshot);
  couldHave.middle_water = couldHave.can_do_water_checks && couldHave.lullaby && (couldHave.bow || couldHave.can_use_dins || player.current_water_keys >= 1);
  couldHave.projectile_both = couldHave.bomb_bag || player.bombchus || ((couldHave.slingshot || couldHave.boomerang) && (couldHave.bow || couldHave.hookshot));
  couldHave.projectile_child = couldHave.bomb_bag || player.bombchus || couldHave.slingshot || couldHave.boomerang;
  couldHave.projectile_adult = couldHave.bomb_bag || player.bombchus || couldHave.bow || couldHave.hookshot;
  couldHave.can_wear_goron_tunic = true;
  couldHave.can_wear_zora_tunic = true;
  couldHave.can_climb_gtg_hole = couldHave.hookshot || couldHave.hover_boots || couldHave.bomb_bag;
  couldHave.child_can_get_past_mido = rules.deku == "open" || couldHave.kokiri_sword;
  couldHave.can_enter_deku_entrance = couldHave.child_can_get_past_mido;
}
function updateLocationLogic() {
  {
    const {
      storms, can_blast_or_smash, golden_scale, iron_boots, kokiri_emerald, goron_ruby, zora_sapphire, fortress_access, hammer, silver_scale,
      hookshot, bean_access, longshot, bow, bomb_bag, can_see, eponas, bottle, big_poe, lullaby, golden_gauntlets, shadow_medallion,
      spirit_medallion, ice_entrance_access, ice_adult_access, can_shoot_blue_fire_arrows, ice_access, giants_wallet, deku_access,
      deku_child_access, slingshot, deku_adult_access, can_use_fire, can_pass_mido_as_adult, sarias, can_use_dins, can_stop_link_the_goron,
      goron_bracelet, adults_wallet, can_break_dodongos_wall, dodongos_climb, dodongos_adult_access, bolero, prescription, claim_check, crater_top,
      hover_boots, crater_by_city, gold_skulltulas, suns, child_can_enter_river, time, child_can_enter_domain, can_enter_adult_domain, requiem,
      can_enter_colossus, can_cross_quicksand, can_save_carpenters, gtg_entrance_access, can_hit_jabu_switch, boomerang, jabu_child_access,
      forest_temple_access, forest_temple_adult_access, forest_keys, forest_temple_child_access, forest_boss_key, fire_temple_access,
      fire_temple_adult_access, fire_key_ring, fire_keys, fire_boss_key, can_wear_goron_tunic, can_climb_fire_temple, can_do_water_checks,
      middle_water, water_temple_child_access, can_wear_zora_tunic, water_keys, water_boss_key, spirit_temple_child_access,
      spirit_temple_access, spirit_keys, silver_gauntlets, can_push_spirit_silver_block, mirror_shield, spirit_boss_key,
      can_cross_shadow_gap, can_bomb_shadow_wall, shadow_keys, can_pass_shadow_hookshot_door, can_ride_shadow_boat, can_beat_shadow_boss,
      ganons_keys, fire_arrows, magic, gtg_access, gtg_adult_access, gtg_child_access, gtg_keys, botw_child_access, well_keys,
      can_enter_fire_temple_entrance, forest_medallion, fire_medallion, projectile_both, water_medallion, can_enter_ganons, jabu_entrance_access, shadow_temple_adult_access
    } = logic;
    const {
      adult_fishing, child_hyrule_fairy, adult_ogc, child_zf_fairy, adult_zf_fairy, child_zf, child_lower_dmc, child_lower_dmc_fairy, child_dmt_fairy_ool,
      child_upper_dmc, adult_lower_dmc_fairy, adult_zd, adult_kak_roof, child_dmt_fairy, adult_dmt_fairy,
    } = Spawn;

    locationLogic.kokiri_mido_1 = true;
    locationLogic.kokiri_mido_2 = true;
    locationLogic.kokiri_mido_3 = true;
    locationLogic.kokiri_mido_4 = true;
    locationLogic.kokiri_sword = true;
    locationLogic.kokiri_storms = storms;
    locationLogic.talons_chickens = true;
    locationLogic.back_of_ranch = true;
    locationLogic.hyrule_remoteGrotto = can_blast_or_smash;
    locationLogic.hyrule_openGrotto = true;
    locationLogic.hyrule_hp_scrub = can_blast_or_smash;
    locationLogic.hyrule_marketGrotto = can_blast_or_smash;
    locationLogic.hyrule_tektite_grotto = can_blast_or_smash && (golden_scale || iron_boots);
    locationLogic.hyrule_ocarina = kokiri_emerald && goron_ruby && zora_sapphire;
    locationLogic.gerudovalley_box = true;
    locationLogic.gerudovalley_fall = true;
    locationLogic.gerudo_hammer = fortress_access && hammer;
    locationLogic.hylia_child_fishing = true;
    locationLogic.hylia_bottle = silver_scale;
    locationLogic.hylia_adult_fishing = hookshot || bean_access || adult_fishing;
    locationLogic.hylia_lab_top = hookshot || bean_access;
    locationLogic.hylia_lab_dive = golden_scale;
    locationLogic.hylia_sun_shoot = longshot && bow;
    locationLogic.market_slingshot_game = true;
    locationLogic.richard = true;
    locationLogic.market_bowling_1 = bomb_bag;
    locationLogic.market_bowling_2 = bomb_bag;
    locationLogic.market_lens_game = can_see;
    locationLogic.poes = (bow && eponas && bottle) || big_poe;
    locationLogic.dins_fairy = (bomb_bag || child_hyrule_fairy) && lullaby;
    locationLogic.g_fairy = (golden_gauntlets || adult_ogc) && lullaby;
    locationLogic.lacs = shadow_medallion && spirit_medallion;
    locationLogic.fountain_fairy = ((ice_entrance_access && bomb_bag) || child_zf_fairy || adult_zf_fairy || (bomb_bag && child_zf)) && lullaby;
    locationLogic.glacier_hp = ice_entrance_access;
    locationLogic.bottom_of_fountain = ice_entrance_access && iron_boots;
    locationLogic.ice_map = ice_adult_access && (bottle || can_shoot_blue_fire_arrows);
    locationLogic.ice_compass = ice_access && (bottle || can_shoot_blue_fire_arrows) && (ice_adult_access || giants_wallet);
    locationLogic.ice_hp = ice_access && (bottle || can_shoot_blue_fire_arrows) && (ice_adult_access || giants_wallet);
    locationLogic.ice_irons = ice_access && (bottle || can_shoot_blue_fire_arrows) && (ice_adult_access || giants_wallet);
    locationLogic.deku_lobby = deku_access;
    locationLogic.deku_slingshot = deku_access;
    locationLogic.deku_slingshot_room_side = deku_access;
    locationLogic.deku_compass = deku_access;
    locationLogic.deku_compass_room_side = deku_access;
    locationLogic.deku_basement = deku_access;
    if (rules.preset == "sgl2025")
      locationLogic.deku_queen_gohma = deku_access;
    else
      locationLogic.deku_queen_gohma = deku_access && ((deku_child_access && slingshot) || (deku_adult_access && can_use_fire));
    locationLogic.lost_woods_fairy_ocarina = true;
    locationLogic.ocarina_game = true;
    locationLogic.lw_generic = can_blast_or_smash;
    locationLogic.lost_woods_scrub_grotto = bomb_bag || (can_pass_mido_as_adult && hammer);
    locationLogic.bridge_scrub = true;
    locationLogic.target = slingshot;
    locationLogic.skull_kid = sarias;
    locationLogic.theater_skull = true;
    locationLogic.theater_truth = kokiri_emerald && goron_ruby && zora_sapphire && sarias;
    locationLogic.wolfos_grotto = bomb_bag || (can_pass_mido_as_adult && hammer);
    locationLogic.rolling_goron = bomb_bag;
    locationLogic.goron_dance = (lullaby || child_lower_dmc) && sarias;
    locationLogic.goron_pot = bomb_bag && (lullaby || can_use_dins || child_lower_dmc);
    locationLogic.goron_maze_1 = can_blast_or_smash || silver_gauntlets;
    locationLogic.goron_maze_2 = can_blast_or_smash || silver_gauntlets;
    locationLogic.goron_maze_3 = hammer || silver_gauntlets;
    locationLogic.goron_link = can_stop_link_the_goron;
    locationLogic.goron_medigoron = (can_blast_or_smash || goron_bracelet) && adults_wallet;
    locationLogic.dodongos_map = can_break_dodongos_wall;
    locationLogic.dodongos_compass = can_break_dodongos_wall;
    locationLogic.dodongos_bomb_flower_platform = dodongos_climb;
    locationLogic.dodongos_bomb_bag = dodongos_climb;
    locationLogic.dodongos_end_of_bridge = dodongos_climb && (bomb_bag || (dodongos_adult_access && hammer));
    locationLogic.dodongos_above_king = dodongos_climb && bomb_bag;
    locationLogic.dodongos_king_dodongo = dodongos_climb && bomb_bag;
    locationLogic.trail_bombable = can_blast_or_smash;
    locationLogic.trail_top = true;
    locationLogic.trail_storms = storms;
    locationLogic.trail_fairy = (can_blast_or_smash || child_dmt_fairy || adult_dmt_fairy) && lullaby;
    locationLogic.trade_quest = ((((ice_access && bottle) || ((giants_wallet || can_enter_ganons) && (lullaby || adult_zd) && bottle)) && prescription) || claim_check) && crater_top;
    locationLogic.crater_bean = (bolero && bean_access) || (hover_boots && crater_by_city);
    locationLogic.crater_hammer_fairy = ((crater_by_city && hammer) || child_lower_dmc_fairy || adult_lower_dmc_fairy) && lullaby;
    locationLogic.crater_grotto = can_blast_or_smash;
    locationLogic.crater_nook_hp = crater_top || child_upper_dmc;
    locationLogic.man_on_roof = true;
    locationLogic.kakariko_grotto = true;
    locationLogic.kakariko_hag = adults_wallet;
    locationLogic.windmill = true;
    locationLogic.anju = true;
    locationLogic.kakariko_cow_house = true;
    locationLogic.archery_game = bow;
    locationLogic.redead_grotto = can_blast_or_smash;
    locationLogic.anjus_chickens = true;
    locationLogic.tokens_10 = gold_skulltulas >= 10;
    locationLogic.tokens_20 = gold_skulltulas >= 20;
    locationLogic.tokens_30 = gold_skulltulas >= 30;
    locationLogic.tokens_40 = gold_skulltulas >= 40;
    locationLogic.tokens_50 = gold_skulltulas >= 50;
    locationLogic.shield_grave = true;
    locationLogic.gravedigging_tour = true;
    locationLogic.redead_grave = suns;
    locationLogic.composers_grave = lullaby && can_use_fire;
    locationLogic.graveyard_box = bean_access || longshot;
    locationLogic.race_1 = true;
    locationLogic.race_2 = true;
    locationLogic.river_bean_salesman = child_can_enter_river;
    locationLogic.river_pillar = child_can_enter_river || hover_boots || rules.preplantBeans == "on";
    locationLogic.river_grotto = true;
    locationLogic.river_ledge = child_can_enter_river || hover_boots;
    locationLogic.frogs_1 = child_can_enter_river && storms;
    locationLogic.frogs_2 = child_can_enter_river && (storms && lullaby && eponas && sarias && suns && time);
    locationLogic.zora_diving = child_can_enter_domain;
    locationLogic.zora_torches = child_can_enter_domain;
    locationLogic.thaw_king = can_enter_adult_domain && ((bottle && (ice_access || giants_wallet || can_enter_ganons)) || can_shoot_blue_fire_arrows);
    locationLogic.colossus_bean = requiem && bean_access;
    locationLogic.colossus_fairy = can_enter_colossus && bomb_bag && lullaby;
    locationLogic.wasteland = can_cross_quicksand && can_use_fire;
    locationLogic.wasteland_carpet = can_cross_quicksand && adults_wallet;
    locationLogic.fortress_card = can_save_carpenters;
    locationLogic.gerudo_roof = fortress_access && (hookshot || hover_boots);
    locationLogic.gerudo_archery_1 = eponas && bow && gtg_entrance_access;
    locationLogic.gerudo_archery_2 = eponas && bow && gtg_entrance_access;
    locationLogic.jabu_boomerang = can_hit_jabu_switch;
    locationLogic.jabu_map = can_hit_jabu_switch && boomerang && jabu_child_access;
    locationLogic.jabu_compass = can_hit_jabu_switch && boomerang && jabu_child_access;
    locationLogic.jabu_barinade = can_hit_jabu_switch && boomerang && jabu_child_access;
    locationLogic.forest_first = forest_temple_access;
    locationLogic.forest_stalfos = forest_temple_access;
    locationLogic.forest_midCourtyard = forest_temple_adult_access && ((((time || bow || (hover_boots && forest_keys >= 1)) && hookshot)) || (goron_bracelet && (bow || can_use_dins) && forest_keys >= 5));
    locationLogic.forest_highCourtyard = forest_temple_access && (time || (forest_temple_adult_access && ((bow && hookshot) || (hover_boots && forest_keys >= 1) || (goron_bracelet && (bow || can_use_dins) && forest_keys >= 5))));
    locationLogic.forest_lowCourtyard = forest_temple_access && (time || (forest_temple_adult_access && ((bow && hookshot) || (hover_boots && forest_keys >= 1) || (goron_bracelet && (bow || can_use_dins) && forest_keys >= 5))));
    locationLogic.forest_blockRoom = forest_temple_adult_access && forest_keys >= 1 && (bow || (forest_temple_child_access && slingshot)) && goron_bracelet;
    locationLogic.forest_bossKey = forest_temple_adult_access && forest_keys >= 2 && bow && goron_bracelet;
    locationLogic.forest_floormaster = forest_temple_adult_access && ((bow && goron_bracelet && forest_keys >= 2) || (hover_boots && forest_keys >= 1));
    locationLogic.forest_red = forest_temple_adult_access && goron_bracelet && bow && forest_keys >= 3;
    locationLogic.forest_bow = forest_temple_adult_access && goron_bracelet && forest_keys >= 3;
    locationLogic.forest_blue = forest_temple_adult_access && goron_bracelet && bow && forest_keys >= 3;
    locationLogic.forest_fallingCeiling = forest_temple_adult_access && goron_bracelet && (bow || can_use_dins) && forest_keys >= 5;
    locationLogic.forest_nearBoss = forest_temple_adult_access && goron_bracelet && bow && forest_keys >= 5;
    locationLogic.forest_phantomGanon = forest_temple_adult_access && goron_bracelet && bow && forest_keys >= 5 && forest_boss_key;
    locationLogic.fire_nearBoss = fire_temple_access;
    locationLogic.fire_hammer1 = fire_temple_adult_access && hammer && (rules.smallKeys != "keyRings" || fire_key_ring);
    locationLogic.fire_hammer2 = fire_temple_adult_access && hammer && (rules.smallKeys != "keyRings" || fire_key_ring);
    locationLogic.fire_lavaOpen = fire_temple_access && fire_keys >= 1;
    locationLogic.fire_lavaBomb = fire_temple_adult_access && fire_keys >= 1 && bomb_bag;
    locationLogic.fire_volvagia = fire_temple_adult_access && fire_boss_key && hammer && can_wear_goron_tunic && (hover_boots || (fire_keys >= 7 && (time || bomb_bag)));
    locationLogic.fire_lowerMaze = can_climb_fire_temple;
    locationLogic.fire_sideRoom = can_climb_fire_temple;
    locationLogic.fire_map = can_climb_fire_temple && ((fire_keys >= 4 && bow) || fire_keys >= 5);
    locationLogic.fire_upperMaze = can_climb_fire_temple && fire_keys >= 5;
    locationLogic.fire_shortcut = can_climb_fire_temple && fire_keys >= 5 && bomb_bag;
    locationLogic.fire_scarecrow = can_climb_fire_temple && fire_keys >= 5 && hookshot;
    locationLogic.fire_compass = can_climb_fire_temple && fire_keys >= 6;
    locationLogic.fire_sotGoron = can_climb_fire_temple && (fire_keys >= 7 || (fire_keys >= 6 && hover_boots)) && hammer && (time || bomb_bag);
    locationLogic.fire_top = can_climb_fire_temple && (fire_keys >= 7 || (fire_keys >= 6 && hammer && hover_boots)) && bomb_bag;
    locationLogic.water_compass = can_do_water_checks && hookshot;
    locationLogic.water_map = can_do_water_checks;
    locationLogic.water_cracked = middle_water && bomb_bag;
    locationLogic.water_torches = can_do_water_checks && lullaby && (bow || can_use_dins || water_temple_child_access);
    locationLogic.water_block = can_do_water_checks && lullaby && bow && goron_bracelet && (hover_boots || longshot) && hookshot;
    locationLogic.water_pillar = middle_water && can_wear_zora_tunic && hookshot;
    locationLogic.water_dLink = can_do_water_checks && water_keys >= 5 && hookshot;
    locationLogic.water_river = can_do_water_checks && water_keys >= 5 && time && bow && hookshot;
    locationLogic.water_dragon = can_do_water_checks && ((water_keys >= 5 && time && bow) || (goron_bracelet && lullaby)) && hookshot;
    locationLogic.water_bossKey = can_do_water_checks && longshot && water_keys >= 5 && ((bomb_bag && goron_bracelet) || hover_boots);
    locationLogic.water_morpha = can_do_water_checks && water_boss_key && longshot;
    locationLogic.spirit_childLeft = spirit_temple_child_access && (slingshot || boomerang);
    locationLogic.spirit_childRight = spirit_temple_child_access && (slingshot || boomerang);
    locationLogic.spirit_childClimb1 = spirit_temple_access && (spirit_keys >= 1 && projectile_both);
    locationLogic.spirit_childClimb2 = spirit_temple_access && (spirit_keys >= 1 && projectile_both);
    locationLogic.spirit_map = spirit_temple_access && (spirit_keys >= 5 && spirit_temple_child_access && bomb_bag) || (spirit_keys >= 3 && silver_gauntlets && can_use_fire) || (bomb_bag && spirit_keys >= 1 && can_use_fire);
    locationLogic.spirit_sunRoom = spirit_temple_access && (spirit_keys >= 5 && spirit_temple_child_access && bomb_bag) || (spirit_keys >= 3 && silver_gauntlets && can_use_fire) || (bomb_bag && spirit_keys >= 1 && can_use_fire);
    locationLogic.spirit_rightHand = spirit_temple_access && ((spirit_keys >= 3 && longshot && bomb_bag) || spirit_keys >= 5) && ((spirit_temple_child_access && bomb_bag) || (can_push_spirit_silver_block && (bow || hookshot || bomb_bag)));
    locationLogic.spirit_adultLeft = can_push_spirit_silver_block && hookshot && lullaby;
    locationLogic.spirit_adultRight = can_push_spirit_silver_block && (bow || hookshot || bomb_bag);
    locationLogic.spirit_rotatingMirror1 = can_push_spirit_silver_block && spirit_keys >= 3;
    locationLogic.spirit_rotatingMirror2 = can_push_spirit_silver_block && spirit_keys >= 3;
    locationLogic.spirit_lullabyHand = can_push_spirit_silver_block && spirit_keys >= 3 && lullaby;
    locationLogic.spirit_lullabyHigh = can_push_spirit_silver_block && spirit_keys >= 3 && lullaby && (hookshot || hover_boots);
    locationLogic.spirit_nearFourArmos = can_push_spirit_silver_block && spirit_keys >= 4 && bomb_bag && mirror_shield;
    locationLogic.spirit_invisible1 = can_push_spirit_silver_block && spirit_keys >= 4 && bomb_bag;
    locationLogic.spirit_invisible2 = can_push_spirit_silver_block && spirit_keys >= 4 && bomb_bag;
    locationLogic.spirit_leftHand = can_push_spirit_silver_block && spirit_keys >= 4 && bomb_bag;
    locationLogic.spirit_bossKey = can_push_spirit_silver_block && spirit_keys >= 5 && bow && lullaby && hookshot;
    locationLogic.spirit_tippyTop = can_push_spirit_silver_block && spirit_keys >= 5 && mirror_shield;
    locationLogic.spirit_twinrova = can_push_spirit_silver_block && spirit_keys >= 5 && mirror_shield && bomb_bag && spirit_boss_key && hookshot;
    locationLogic.shadow_map = shadow_temple_adult_access && (hover_boots || hookshot);
    locationLogic.shadow_hovers = shadow_temple_adult_access && (hover_boots || hookshot);
    locationLogic.shadow_compass = can_cross_shadow_gap;
    locationLogic.shadow_earlySilvers = can_cross_shadow_gap;
    locationLogic.shadow_spinning1 = can_bomb_shadow_wall;
    locationLogic.shadow_spinning2 = can_bomb_shadow_wall;
    locationLogic.shadow_spikesLower = can_bomb_shadow_wall;
    locationLogic.shadow_spikesUpper = can_bomb_shadow_wall && goron_bracelet;
    locationLogic.shadow_spikesSwitch = can_bomb_shadow_wall && goron_bracelet;
    locationLogic.shadow_redeadSilvers = can_bomb_shadow_wall && shadow_keys >= 2;
    locationLogic.shadow_pot = can_bomb_shadow_wall && hookshot && shadow_keys >= 2;
    locationLogic.shadow_wind = can_pass_shadow_hookshot_door && shadow_keys >= 3;
    locationLogic.shadow_bombable = can_pass_shadow_hookshot_door && shadow_keys >= 3;
    locationLogic.shadow_gibdos = can_pass_shadow_hookshot_door && shadow_keys >= 3;
    locationLogic.shadow_dins1 = can_ride_shadow_boat && shadow_keys >= 4 && can_use_dins;
    locationLogic.shadow_dins2 = can_ride_shadow_boat && shadow_keys >= 4 && can_use_dins;
    locationLogic.shadow_floormaster = can_ride_shadow_boat && shadow_keys >= 4;
    locationLogic.shadow_bongo = can_beat_shadow_boss && shadow_keys >= 5;
    locationLogic.ganons_lightTrial1 = can_enter_ganons && golden_gauntlets;
    locationLogic.ganons_lightTrial2 = can_enter_ganons && golden_gauntlets;
    locationLogic.ganons_lightTrial3 = can_enter_ganons && golden_gauntlets;
    locationLogic.ganons_lightTrial4 = can_enter_ganons && golden_gauntlets;
    locationLogic.ganons_lightTrial5 = can_enter_ganons && golden_gauntlets;
    locationLogic.ganons_lightTrial6 = can_enter_ganons && golden_gauntlets;
    locationLogic.ganons_lightTrial7 = can_enter_ganons && golden_gauntlets;
    locationLogic.ganons_lightTrialLullaby = can_enter_ganons && golden_gauntlets && lullaby && ganons_keys >= 1;
    locationLogic.ganons_spiritTrial1 = can_enter_ganons && hookshot;
    locationLogic.ganons_spiritTrial2 = can_enter_ganons && hookshot && bomb_bag;
    locationLogic.ganons_forestTrial = can_enter_ganons;
    locationLogic.ganons_waterTrial1 = can_enter_ganons;
    locationLogic.ganons_waterTrial2 = can_enter_ganons;
    locationLogic.ganons_shadowTrial1 = can_enter_ganons && ((bow && fire_arrows && magic) || hookshot || hover_boots || time);
    locationLogic.ganons_shadowTrial2 = can_enter_ganons && ((bow && fire_arrows && magic) || (longshot && (hover_boots || can_use_dins)));
    locationLogic.ganons_bossKey = can_enter_ganons;
    locationLogic.gtg_lobbyLeft = gtg_access && ((bow && gtg_adult_access) || (slingshot && gtg_child_access));
    locationLogic.gtg_lobbyRight = gtg_access && ((bow && gtg_adult_access) || (slingshot && gtg_child_access));
    locationLogic.gtg_stalfos = gtg_access;
    locationLogic.gtg_wolfos = gtg_adult_access && hookshot;
    locationLogic.gtg_silvers1 = gtg_adult_access && hookshot && silver_gauntlets;
    locationLogic.gtg_silvers2 = gtg_adult_access && hookshot && silver_gauntlets;
    locationLogic.gtg_silvers3 = gtg_adult_access && hookshot && silver_gauntlets;
    locationLogic.gtg_silvers4 = gtg_adult_access && hookshot && silver_gauntlets;
    locationLogic.gtg_eyes = gtg_adult_access && hookshot && bow;
    locationLogic.gtg_aboveEyes = gtg_adult_access && hookshot && bow;
    locationLogic.gtg_keese = gtg_adult_access && hookshot
    locationLogic.gtg_flamesChest = gtg_adult_access && hookshot && hammer;
    locationLogic.gtg_freestanding = gtg_access && (gtg_keys >= 9 || (bomb_bag && (time || gtg_child_access)) || (hookshot && time));
    locationLogic.gtg_right2 = gtg_access && (gtg_keys >= 9 || (bomb_bag && (time || gtg_child_access)) || (hookshot && time));
    locationLogic.gtg_right3 = gtg_access && (gtg_keys >= 9 || (bomb_bag && (time || gtg_child_access)) || (hookshot && time));
    locationLogic.gtg_beamos = gtg_access && bomb_bag;
    locationLogic.gtg_left1 = gtg_access && gtg_keys >= 3;
    locationLogic.gtg_left2 = gtg_access && gtg_keys >= 4;
    locationLogic.gtg_left3 = gtg_access && gtg_keys >= 6;
    locationLogic.gtg_left4 = gtg_access && gtg_keys >= 7;
    locationLogic.gtg_final = gtg_access && gtg_keys >= 9;
    locationLogic.gtg_toilet = gtg_adult_access && iron_boots && time && hookshot;
    locationLogic.well_fakeRight = botw_child_access;;
    locationLogic.well_centerSmall = botw_child_access;;
    locationLogic.well_backBombable = botw_child_access && bomb_bag;
    locationLogic.well_waterLeft = botw_child_access && lullaby;
    locationLogic.well_coffin = botw_child_access;
    locationLogic.well_centerBig = botw_child_access;;
    locationLogic.well_fakeLeft = botw_child_access;;
    locationLogic.well_frontBombable = botw_child_access && bomb_bag;
    locationLogic.well_waterFront = botw_child_access && lullaby;
    locationLogic.well_deadHand = botw_child_access && lullaby;
    locationLogic.well_invisible = botw_child_access && lullaby;
    locationLogic.well_locked1 = botw_child_access && well_keys >= 3;
    locationLogic.well_locked2 = botw_child_access && well_keys >= 3;
    locationLogic.well_basement = botw_child_access && (bomb_bag || ((well_keys >= 3 || can_use_dins) && goron_bracelet));
    locationLogic.lullabyCheck = true;
    locationLogic.eponasCheck = true;
    locationLogic.sariasCheck = true;
    locationLogic.stormsCheck = true;
    locationLogic.sunsCheck = lullaby;
    locationLogic.boleroCheck = can_enter_fire_temple_entrance;
    locationLogic.minuetCheck = can_pass_mido_as_adult;
    locationLogic.requiemCheck = can_enter_colossus;
    locationLogic.serenadeCheck = ice_access && (bottle || can_shoot_blue_fire_arrows) && (ice_adult_access || giants_wallet);
    locationLogic.preludeCheck = forest_medallion;
    locationLogic.nocturneCheck = forest_medallion && fire_medallion && water_medallion;
    locationLogic.oot = kokiri_emerald && goron_ruby && zora_sapphire;
    locationLogic.scrub_dodongos_1 = can_break_dodongos_wall;
    locationLogic.scrub_dodongos_2 = can_break_dodongos_wall;
    locationLogic.scrub_dodongos_3 = can_break_dodongos_wall && bomb_bag;
    locationLogic.scrub_dodongos_4 = can_break_dodongos_wall && bomb_bag;
    locationLogic.scrub_jabu = can_hit_jabu_switch;
    locationLogic.scrub_ganons_1 = can_enter_ganons;
    locationLogic.scrub_ganons_2 = can_enter_ganons;
    locationLogic.scrub_ganons_3 = can_enter_ganons;
    locationLogic.scrub_ganons_4 = can_enter_ganons;
    locationLogic.scrub_river_1 = storms;
    locationLogic.scrub_river_2 = storms;
    locationLogic.scrub_sfm_1 = storms;
    locationLogic.scrub_sfm_2 = storms;
    locationLogic.scrub_lake_1 = true;
    locationLogic.scrub_lake_2 = true;
    locationLogic.scrub_lake_3 = true;
    locationLogic.scrub_lw_1 = true;
    locationLogic.scrub_lw_2 = true;
    locationLogic.scrub_lw_3 = can_blast_or_smash;
    locationLogic.scrub_colossus_1 = silver_gauntlets && can_enter_colossus;
    locationLogic.scrub_colossus_2 = silver_gauntlets && can_enter_colossus;
    locationLogic.scrub_crater_1 = hammer && crater_by_city;
    locationLogic.scrub_crater_2 = hammer && crater_by_city;
    locationLogic.scrub_crater_3 = hammer && crater_by_city;
    locationLogic.scrub_crater_child = bomb_bag || child_upper_dmc || child_lower_dmc || child_lower_dmc_fairy || child_dmt_fairy || child_dmt_fairy_ool || hammer;
    locationLogic.scrub_goron_1 = time || (can_wear_goron_tunic && hookshot);
    locationLogic.scrub_goron_2 = time || (can_wear_goron_tunic && hookshot);
    locationLogic.scrub_goron_3 = time || (can_wear_goron_tunic && hookshot);
    locationLogic.scrub_ranch_1 = true;
    locationLogic.scrub_ranch_2 = true;
    locationLogic.scrub_ranch_3 = true;
    locationLogic.scrub_gv_1 = fortress_access && storms;
    locationLogic.scrub_gv_2 = fortress_access && storms;
    locationLogic.shop_kokiri_TL = logic[shopLogic.shop_kokiri_TL];
    locationLogic.shop_kokiri_TR = logic[shopLogic.shop_kokiri_TR];
    locationLogic.shop_kokiri_BR = logic[shopLogic.shop_kokiri_BR];
    locationLogic.shop_kokiri_BL = logic[shopLogic.shop_kokiri_BL];
    locationLogic.shop_market_bazaar_TL = logic[shopLogic.shop_market_bazaar_TL];
    locationLogic.shop_market_bazaar_TR = logic[shopLogic.shop_market_bazaar_TR];
    locationLogic.shop_market_bazaar_BR = logic[shopLogic.shop_market_bazaar_BR];
    locationLogic.shop_market_bazaar_BL = logic[shopLogic.shop_market_bazaar_BL];
    locationLogic.shop_market_potion_TL = logic[shopLogic.shop_market_potion_TL];
    locationLogic.shop_market_potion_TR = logic[shopLogic.shop_market_potion_TR];
    locationLogic.shop_market_potion_BR = logic[shopLogic.shop_market_potion_BR];
    locationLogic.shop_market_potion_BL = logic[shopLogic.shop_market_potion_BL];
    locationLogic.shop_market_chu_TL = logic[shopLogic.shop_market_chu_TL];
    locationLogic.shop_market_chu_TR = logic[shopLogic.shop_market_chu_TR];
    locationLogic.shop_market_chu_BR = logic[shopLogic.shop_market_chu_BR];
    locationLogic.shop_market_chu_BL = logic[shopLogic.shop_market_chu_BL];
    locationLogic.shop_kakariko_bazaar_TL = logic[shopLogic.shop_kakariko_bazaar_TL];
    locationLogic.shop_kakariko_bazaar_TR = logic[shopLogic.shop_kakariko_bazaar_TR];
    locationLogic.shop_kakariko_bazaar_BR = logic[shopLogic.shop_kakariko_bazaar_BR];
    locationLogic.shop_kakariko_bazaar_BL = logic[shopLogic.shop_kakariko_bazaar_BL];
    locationLogic.shop_kakariko_potion_TL = logic[shopLogic.shop_kakariko_potion_TL];
    locationLogic.shop_kakariko_potion_TR = logic[shopLogic.shop_kakariko_potion_TR];
    locationLogic.shop_kakariko_potion_BR = logic[shopLogic.shop_kakariko_potion_BR];
    locationLogic.shop_kakariko_potion_BL = logic[shopLogic.shop_kakariko_potion_BL];
    locationLogic.shop_goron_TL = logic[shopLogic.shop_goron_TL] && (lullaby || can_stop_link_the_goron || bomb_bag || can_use_dins);
    locationLogic.shop_goron_TR = logic[shopLogic.shop_goron_TR] && (lullaby || can_stop_link_the_goron || bomb_bag || can_use_dins);
    locationLogic.shop_goron_BR = logic[shopLogic.shop_goron_BR] && (lullaby || can_stop_link_the_goron || bomb_bag || can_use_dins);
    locationLogic.shop_goron_BL = logic[shopLogic.shop_goron_BL] && (lullaby || can_stop_link_the_goron || bomb_bag || can_use_dins);
    locationLogic.shop_domain_TL = logic[shopLogic.shop_domain_TL] && ((bomb_bag && lullaby) || silver_scale || (lullaby && ((can_enter_ganons && bottle) || jabu_entrance_access || (giants_wallet && bottle))));
    locationLogic.shop_domain_TR = logic[shopLogic.shop_domain_TR] && ((bomb_bag && lullaby) || silver_scale || (lullaby && ((can_enter_ganons && bottle) || jabu_entrance_access || (giants_wallet && bottle))));
    locationLogic.shop_domain_BR = logic[shopLogic.shop_domain_BR] && ((bomb_bag && lullaby) || silver_scale || (lullaby && ((can_enter_ganons && bottle) || jabu_entrance_access || (giants_wallet && bottle))));
    locationLogic.shop_domain_BL = logic[shopLogic.shop_domain_BL] && ((bomb_bag && lullaby) || silver_scale || (lullaby && ((can_enter_ganons && bottle) || jabu_entrance_access || (giants_wallet && bottle))));
    locationLogic.cow_kokiri = eponas;
    locationLogic.cow_ranch1 = eponas;
    locationLogic.cow_ranch2 = eponas;
    locationLogic.cow_ranch3 = eponas;
    locationLogic.cow_ranch4 = eponas;
    locationLogic.cow_field = eponas && ((hammer && can_use_fire) || (bomb_bag && can_use_dins));
    locationLogic.cow_valley = eponas;
    locationLogic.cow_trail = eponas && can_blast_or_smash;
    locationLogic.cow_kakariko = eponas;

    locationLogic.gs_kokiri_child = true;
    locationLogic.gs_kokiri_soil = bottle;
    locationLogic.gs_kokiri_adult = hookshot;
    locationLogic.gs_market = true;
    locationLogic.gs_lost_woods_bean_1 = bottle;
    locationLogic.gs_lost_woods_bean_2 = bottle;
    locationLogic.gs_lost_woods_above_stage = bean_access && can_pass_mido_as_adult;
    locationLogic.gs_sacred_forest = hookshot && can_pass_mido_as_adult;
    locationLogic.gs_outside_kakariko = (boomerang && bomb_bag) || (can_blast_or_smash && hookshot);
    locationLogic.gs_near_gerudo = (hammer && can_use_fire && hookshot) || (can_use_dins && bomb_bag && boomerang);
    locationLogic.gs_hyrule_castle_tree = true;
    locationLogic.gs_hyrule_castle_grotto = storms && bomb_bag && boomerang;
    locationLogic.gs_lon_lon_tree = true;
    locationLogic.gs_lon_lon_shed = true;
    locationLogic.gs_lon_lon_window = boomerang;
    locationLogic.gs_lon_lon_back_wall = boomerang;
    locationLogic.gs_kakariko_construction = true;
    locationLogic.gs_kakariko_skulltula_house = true;
    locationLogic.gs_kakariko_guard_house = true;
    locationLogic.gs_kakariko_tree = true;
    locationLogic.gs_kakariko_tower = bomb_bag || slingshot;
    locationLogic.gs_kakariko_impas = hookshot || adult_kak_roof;
    locationLogic.gs_graveyard_wall = boomerang;
    locationLogic.gs_graveyard_soil = bottle;
    locationLogic.gs_trail_soil = bottle && (bomb_bag || goron_bracelet);
    locationLogic.gs_trail_bombable_wall = can_blast_or_smash;
    locationLogic.gs_trail_hail_path = hammer;
    locationLogic.gs_trail_above_dodongos = hammer;
    locationLogic.gs_goron_center = true;
    locationLogic.gs_goron_maze = bomb_bag;
    locationLogic.gs_crater_crate = can_blast_or_smash || child_upper_dmc;
    locationLogic.gs_crater_soil = bottle && bolero;
    locationLogic.gs_river_ladder = child_can_enter_river;
    locationLogic.gs_river_near_grotto = hookshot;
    locationLogic.gs_river_above_bridge = hookshot;
    locationLogic.gs_river_tree = true;
    locationLogic.gs_domain = (lullaby || adult_zd) && (hookshot || magic || bow);
    locationLogic.gs_fountain_above_log = jabu_entrance_access && boomerang;
    locationLogic.gs_fountain_tree = jabu_entrance_access;
    locationLogic.gs_fountain_hidden_cave = ice_entrance_access && silver_gauntlets && hookshot && can_blast_or_smash;
    locationLogic.gs_hylia_bean = bottle;
    locationLogic.gs_hylia_lab_wall = boomerang;
    locationLogic.gs_hylia_island = true;
    locationLogic.gs_hylia_tree = longshot;
    locationLogic.gs_hylia_lab_crate = iron_boots && hookshot;
    locationLogic.gs_valley_small_bridge = boomerang;
    locationLogic.gs_valley_bean = bottle;
    locationLogic.gs_valley_tent = fortress_access && hookshot;
    locationLogic.gs_valley_pillar = fortress_access && hookshot;
    locationLogic.gs_fortress_archery = fortress_access && hookshot;
    locationLogic.gs_fortress_top = fortress_access;
    locationLogic.gs_wasteland = hookshot && can_cross_quicksand;
    locationLogic.gs_colossus_soil = bottle && requiem;
    locationLogic.gs_colossus_tree = hookshot && can_enter_colossus;
    locationLogic.gs_colossus_hill = (requiem && bean_access) || (longshot && can_enter_colossus);
    locationLogic.gs_ogc = true;
    locationLogic.gs_deku_basement_back = deku_access && boomerang && bomb_bag && slingshot;
    locationLogic.gs_deku_basement_gate = deku_access;
    locationLogic.gs_deku_basement_vines = deku_access && (slingshot || boomerang || bomb_bag || can_use_dins);
    locationLogic.gs_deku_compass = deku_access;
    locationLogic.gs_dodongos_east_side = can_break_dodongos_wall;
    locationLogic.gs_dodongos_stair_vines = dodongos_climb;
    locationLogic.gs_dodongos_above_stairs = (dodongos_climb && hookshot) || (boomerang && (bomb_bag || goron_bracelet));
    locationLogic.gs_dodongos_scarecrow = can_break_dodongos_wall && hookshot;
    locationLogic.gs_dodongos_before_king = bomb_bag;
    locationLogic.gs_jabu_vines = can_hit_jabu_switch;
    locationLogic.gs_jabu_near_octo_1 = can_hit_jabu_switch && boomerang;
    locationLogic.gs_jabu_near_octo_2 = can_hit_jabu_switch && boomerang;
    locationLogic.gs_jabu_near_boss = can_hit_jabu_switch && boomerang;
    locationLogic.gs_forest_first = forest_temple_adult_access && hookshot;
    locationLogic.gs_forest_lobby = forest_temple_adult_access && hookshot;
    locationLogic.gs_forest_outdoor_east = forest_temple_adult_access && hookshot && ((bow || time) || (forest_keys >= 1 && hover_boots));
    locationLogic.gs_forest_outdoor_west = forest_temple_adult_access && hookshot && (((bow || time) && longshot) || (forest_keys >= 1 && hover_boots) || (forest_keys >= 2 && goron_bracelet && bow))
    locationLogic.gs_forest_basement = forest_temple_adult_access && hookshot && bow && goron_bracelet && forest_keys >= 5;
    locationLogic.gs_fire_time = fire_temple_adult_access && fire_keys >= 1 && time;
    locationLogic.gs_fire_bomb_wall = can_climb_fire_temple && goron_bracelet && bomb_bag;
    locationLogic.gs_fire_scarecrow_1 = can_climb_fire_temple && goron_bracelet && fire_keys >= 5 && hookshot;
    locationLogic.gs_fire_scarecrow_2 = can_climb_fire_temple && goron_bracelet && fire_keys >= 5 && hookshot;
    locationLogic.gs_fire_basement = fire_temple_adult_access && hammer;
    locationLogic.gs_water_south_basement = can_do_water_checks && bomb_bag && lullaby && hookshot;
    locationLogic.gs_water_river = can_do_water_checks && time && water_keys >= 5 && hookshot;
    locationLogic.gs_water_central = middle_water && longshot;
    locationLogic.gs_water_near_boss_key = can_do_water_checks && longshot && lullaby && water_keys >= 4;
    locationLogic.gs_water_platform_room = can_do_water_checks && longshot && lullaby && water_keys >= 4;
    locationLogic.gs_spirit_metal_fence = spirit_temple_child_access && (boomerang || slingshot);
    locationLogic.gs_spirit_before_child_knuckle = spirit_temple_access && (bomb_bag && boomerang && hookshot && spirit_keys >= 1) || (boomerang && spirit_keys >= 5 && bomb_bag && spirit_temple_child_access) || (hookshot && silver_gauntlets && spirit_keys >= 3);
    locationLogic.gs_spirit_boulder_room = can_push_spirit_silver_block && time && (bow || hookshot || bomb_bag);
    locationLogic.gs_spirit_lobby = can_push_spirit_silver_block && spirit_keys >= 3 && (hookshot || hover_boots);
    locationLogic.gs_spirit_child_climb = spirit_temple_access && spirit_keys >= 1;
    locationLogic.gs_shadow_like_like = can_bomb_shadow_wall;
    locationLogic.gs_shadow_crusher = can_bomb_shadow_wall && hookshot;
    locationLogic.gs_shadow_giant_pot = can_bomb_shadow_wall && shadow_keys >= 2 && hookshot;
    locationLogic.gs_shadow_near_boat = can_pass_shadow_hookshot_door && longshot && shadow_keys >= 4;
    locationLogic.gs_shadow_three_pots = can_ride_shadow_boat;
    locationLogic.gs_well_west_inner = boomerang && well_keys >= 3;
    locationLogic.gs_well_east_inner = boomerang && well_keys >= 3;
    locationLogic.gs_well_like_like = boomerang && well_keys >= 3;
    locationLogic.gs_ice_spinning_scythe = ice_access && hookshot;
    locationLogic.gs_ice_hp_room = ice_access && (bottle || can_shoot_blue_fire_arrows) && hookshot;
    locationLogic.gs_ice_block_room = ice_access && (bottle || can_shoot_blue_fire_arrows) && hookshot;
  }
  for (let i = 0, Access = locationAccess, Has = player; i < 2; i++) {
    Access.kokiri_sword = true;
    Access.kokiri_mido_1 = true;
    Access.kokiri_mido_2 = true;
    Access.kokiri_mido_3 = true;
    Access.kokiri_mido_4 = true;
    Access.talons_chickens = true;
    Access.back_of_ranch = true;
    Access.hyrule_remoteGrotto = Has.can_blast_or_smash;
    Access.hyrule_openGrotto = true;
    Access.hyrule_hp_scrub = Has.can_blast_or_smash;
    Access.hyrule_marketGrotto = Has.can_blast_or_smash;
    Access.hyrule_tektite_grotto = Has.can_blast_or_smash && (Has.golden_scale || Has.iron_boots);
    Access.hyrule_ocarina = (Has.emerald || Has.emerald || Access.emerald_location) && (Has.ruby || Has.ruby || Access.ruby_location) && (Has.sapphire || Has.sapphire || Access.sapphire_location);
    Access.gerudovalley_box = true;
    Access.gerudovalley_fall = true;
    Access.hylia_child_fishing = true;
    Access.hylia_bottle = Has.silver_scale;
    Access.hylia_adult_fishing = Has.hookshot || Has.bean_access || Spawn.adult_fishing;
    Access.hylia_lab_top = Has.hookshot || Has.bean_access;
    Access.hylia_lab_dive = Has.golden_scale || (Has.hookshot && Has.iron_boots);
    Access.hylia_sun_shoot = Has.bow && Has.longshot;
    Access.market_slingshot_game = true;
    Access.richard = true;
    Access.market_bowling_1 = Has.bomb_bag;
    Access.market_bowling_2 = Has.bomb_bag;
    Access.market_lens_game = Has.can_see;
    Access.poes = (Has.bow && (Has.can_use_bottle || Has.jabu_entrance_access)) || Has.big_poe;
    Access.dins_fairy = (Has.bomb_bag || player.bombchus || Spawn.child_hyrule_fairy) && Has.lullaby;
    Access.g_fairy = (Has.golden_gauntlets || Spawn.adult_ogc) && Has.lullaby;
    Access.lacs = (Has.gen1 || Has.shadow_medallion || Access.shadow_medallion_location) && (Has.gen2 || Has.spirit_medallion || Access.spirit_medallion_location);
    Access.river_bean_salesman = Has.child_can_enter_river;
    Access.river_pillar = true;
    Access.river_grotto = true;
    Access.river_ledge = true;
    Access.frogs_1 = Has.child_can_enter_river && Has.storms;
    Access.frogs_2 = Has.child_can_enter_river && (Has.storms && Has.lullaby && Has.eponas && Has.sarias && Has.suns && Has.time);
    Access.zora_diving = Has.child_can_enter_domain;
    Access.zora_torches = Has.child_can_enter_domain;
    Access.lost_woods_fairy_ocarina = true;
    Access.ocarina_game = true;
    Access.lw_generic = Has.can_blast_or_smash;
    Access.lost_woods_scrub_grotto = Has.can_blast_or_smash;
    Access.wolfos_grotto = Has.can_blast_or_smash;
    Access.bridge_scrub = true;
    Access.skull_kid = Has.sarias;
    Access.target = Has.slingshot;
    Access.theater_skull = true;
    Access.theater_truth = (Has.emerald || Has.emerald || Access.emerald_location) && (Has.ruby || Has.ruby || Access.ruby_location) && (Has.sapphire || Has.sapphire || Access.sapphire_location) && Has.sarias;
    Access.kokiri_storms = Has.storms;
    Access.rolling_goron = Has.bomb_bag || player.bombchus || Has.goron_bracelet;
    Access.goron_pot = (Has.bomb_bag || Has.goron_bracelet || player.bombchus) && (Has.lullaby || Has.can_use_dins || Spawn.child_lower_dmc || Spawn.child_lower_dmc_fairy);
    Access.goron_dance = (Has.lullaby || Spawn.child_lower_dmc || Spawn.child_lower_dmc_fairy) && Has.sarias;
    Access.goron_maze_1 = Has.can_blast_or_smash || Has.silver_gauntlets;
    Access.goron_maze_2 = Has.can_blast_or_smash || Has.silver_gauntlets;
    Access.goron_maze_3 = Has.hammer || Has.silver_gauntlets || ((Has.bomb_bag || player.bombchus) && Has.hover_boots);
    Access.goron_link = Has.can_stop_link_the_goron;
    Access.goron_medigoron = (Has.can_blast_or_smash || Has.goron_bracelet) && Has.adults_wallet;
    Access.trail_bombable = Has.can_blast_or_smash || Has.goron_bracelet;
    Access.trail_top = true;
    Access.trail_storms = Has.storms;
    Access.crater_bean = (Has.bolero && Has.bean_access) || (Has.crater_top && Has.hover_boots);
    Access.crater_hammer_fairy = ((Has.crater_by_city && Has.hammer) || Spawn.child_lower_dmc_fairy || Spawn.adult_lower_dmc_fairy || Spawn.child_lower_dmc || Spawn.adult_lower_dmc) && Has.lullaby;
    Access.crater_nook_hp = Has.crater_top || Spawn.child_upper_dmc;
    Access.crater_grotto = Has.can_blast_or_smash;
    Access.trail_fairy = (Has.can_blast_or_smash || Spawn.child_dmt_fairy || Spawn.adult_dmt_fairy || Spawn.child_dmt_fairy_ool || Spawn.adult_dmt_fairy_ool) && Has.lullaby;
    Access.trade_quest = (((Access.thaw_king || (Has.giants_wallet && Has.lullaby && (Has.can_use_bottle || Has.jabu_entrance_access))) && Has.prescription) || Has.claim_check) && Has.crater_top;
    Access.gerudo_hammer = Has.fortress_access && Has.hammer;
    Access.fortress_card = Has.can_save_carpenters;
    Access.gerudo_roof = Has.fortress_access && (Has.hookshot || Has.hover_boots);
    Access.gerudo_archery_1 = Has.eponas && Has.bow && Has.gtg_entrance_access;
    Access.gerudo_archery_2 = Has.eponas && Has.bow && Has.gtg_entrance_access;
    Access.wasteland = (Has.can_cross_quicksand || Has.requiem) && Has.can_use_fire;
    Access.wasteland_carpet = (Has.can_cross_quicksand || Has.requiem) && Has.adults_wallet;
    Access.colossus_fairy = Has.can_enter_colossus && (Has.bomb_bag || player.bombchus) && Has.lullaby;
    Access.colossus_bean = Has.requiem && Has.bean_access;
    Access.man_on_roof = true;//Has.hookshot;
    Access.kakariko_grotto = true;
    Access.kakariko_hag = Has.adults_wallet;
    Access.windmill = true;//Has.boomerang || Has.time;
    Access.anju = true;
    Access.kakariko_cow_house = true;
    Access.redead_grotto = Has.can_blast_or_smash;
    Access.archery_game = Has.bow;
    Access.anjus_chickens = true;
    Access.tokens_10 = logic.gold_skulltulas >= 10 || Has.tokens >= 10; //these are temporary because access logic for skulls isn't done yet
    Access.tokens_20 = logic.gold_skulltulas >= 20 || Has.tokens >= 20;
    Access.tokens_30 = logic.gold_skulltulas >= 30 || Has.tokens >= 30;
    Access.tokens_40 = logic.gold_skulltulas >= 40 || Has.tokens >= 40;
    Access.tokens_50 = logic.gold_skulltulas >= 50 || Has.tokens >= 50;
    Access.gravedigging_tour = true;
    Access.graveyard_box = Has.bean_access || Has.longshot || Has.boomerang;
    Access.shield_grave = true;
    Access.redead_grave = Has.suns;
    Access.composers_grave = Has.lullaby;
    Access.race_1 = true;
    Access.race_2 = true;
    Access.deku_lobby = Has.deku_access;
    Access.deku_slingshot = Has.deku_access;
    Access.deku_slingshot_room_side = Has.deku_access;
    Access.deku_compass = Has.deku_access;
    Access.deku_compass_room_side = Has.deku_access;
    Access.deku_basement = Has.deku_access;
    Access.deku_queen_gohma = Has.deku_access && (Has.deku_child_access || (Has.deku_adult_access && (Has.can_use_fire || Has.bow)))
    Access.dodongos_map = Has.can_break_dodongos_wall;
    Access.dodongos_compass = Has.can_break_dodongos_wall;
    Access.dodongos_bomb_flower_platform = Has.dodongos_climb;
    Access.dodongos_bomb_bag = Has.dodongos_climb;
    Access.dodongos_end_of_bridge = Has.dodongos_climb && (Has.bomb_bag || player.bombchus || (Has.dodongos_adult_access && Has.hammer));
    Access.dodongos_above_king = Has.dodongos_climb && (Has.bomb_bag || player.bombchus);
    Access.dodongos_king_dodongo = Has.dodongos_climb && (Has.bomb_bag || player.bombchus);
    Access.jabu_boomerang = Has.can_hit_jabu_switch;
    Access.jabu_map = Has.can_hit_jabu_switch && Has.boomerang && Has.jabu_child_access;
    Access.jabu_compass = Has.can_hit_jabu_switch && Has.boomerang && Has.jabu_child_access;
    Access.jabu_barinade = Has.can_hit_jabu_switch && Has.boomerang && Has.jabu_child_access;
    Access.fountain_fairy = ((Has.ice_entrance_access && (Has.bomb_bag || player.bombchus || (Has.hammer && Has.silver_gauntlets))) || Spawn.child_zf_fairy || Spawn.adult_zf_fairy || ((Has.bomb_bag || player.bombchus) && Spawn.child_zf)) && Has.lullaby;
    Access.glacier_hp = Has.ice_entrance_access;
    Access.ice_map = Has.ice_access && (Has.can_use_bottle || Has.can_shoot_blue_fire_arrows) && (Has.ice_adult_access || player.bombchus || Has.bomb_bag);
    Access.ice_hp = Has.ice_access && (Has.can_use_bottle || Has.can_shoot_blue_fire_arrows) && (Has.ice_adult_access || player.bombchus || Has.bomb_bag || Has.giants_wallet);
    Access.ice_compass = Has.ice_access && (Has.can_use_bottle || Has.can_shoot_blue_fire_arrows) && (Has.ice_adult_access || player.bombchus || Has.bomb_bag || Has.giants_wallet);
    Access.ice_irons = Has.ice_access && (Has.can_use_bottle || Has.can_shoot_blue_fire_arrows) && (Has.ice_adult_access || player.bombchus || Has.bomb_bag || Has.giants_wallet);
    Access.bottom_of_fountain = Has.ice_entrance_access && Has.iron_boots;
    Access.thaw_king = Has.can_enter_adult_domain && ((Has.can_use_bottle && (Has.ice_access || Has.giants_wallet || Has.can_enter_ganons)) || Has.can_shoot_blue_fire_arrows);
    Access.forest_first = Has.forest_temple_access;
    Access.forest_stalfos = Has.forest_temple_access;
    Access.forest_midCourtyard = Has.forest_temple_adult_access && (((Has.time && (Has.hover_boots || Has.hookshot)) || (Has.bow && Has.hookshot) || ((Has.hover_boots || Has.goron_bracelet) && player.current_forest_keys >= 1 && (Has.hover_boots || Has.hookshot))) || (Has.goron_bracelet && (Has.bow || Has.can_use_dins) && player.current_forest_keys >= 5));
    Access.forest_highCourtyard = Has.forest_temple_access && (Has.time || (Has.forest_temple_adult_access && ((Has.bow && Has.hookshot) || ((Has.hover_boots || Has.goron_bracelet) && player.current_forest_keys >= 1) || (Has.goron_bracelet && (Has.bow || Has.can_use_dins) && player.current_forest_keys >= 5))));
    Access.forest_lowCourtyard = Has.forest_temple_access && (Has.time || (Has.forest_temple_adult_access && ((Has.bow && Has.hookshot) || ((Has.hover_boots || Has.goron_bracelet) && player.current_forest_keys >= 1) || (Has.goron_bracelet && (Has.bow || Has.can_use_dins) && player.current_forest_keys >= 5))));
    Access.forest_blockRoom = Has.forest_temple_adult_access && player.current_forest_keys >= 1 && (Has.bow || (Has.forest_temple_child_access && Has.slingshot)) && Has.goron_bracelet && (rules.smallKeys != "keyRings" || Has.forest_key_ring);
    Access.forest_bossKey = Has.forest_temple_adult_access && player.current_forest_keys >= 2 && Has.bow && Has.goron_bracelet && (rules.smallKeys != "keyRings" || Has.forest_key_ring);
    Access.forest_floormaster = Has.forest_temple_adult_access && ((Has.bow && Has.goron_bracelet && player.current_forest_keys >= 2) || ((Has.hover_boots || Has.goron_bracelet) && player.current_forest_keys >= 1)) && (rules.smallKeys != "keyRings" || Has.forest_key_ring);
    Access.forest_red = Has.forest_temple_adult_access && Has.goron_bracelet && Has.bow && player.current_forest_keys >= 3 && (rules.smallKeys != "keyRings" || Has.forest_key_ring);
    Access.forest_bow = Has.forest_temple_adult_access && Has.goron_bracelet && player.current_forest_keys >= 3 && (rules.smallKeys != "keyRings" || Has.forest_key_ring);
    Access.forest_blue = Has.forest_temple_adult_access && Has.goron_bracelet && Has.bow && player.current_forest_keys >= 3 && (rules.smallKeys != "keyRings" || Has.forest_key_ring);
    Access.forest_fallingCeiling = Has.forest_temple_adult_access && Has.goron_bracelet && (Has.bow || Has.can_use_dins) && player.current_forest_keys >= 5 && (rules.smallKeys != "keyRings" || Has.forest_key_ring);
    Access.forest_nearBoss = Has.forest_temple_adult_access && Has.goron_bracelet && Has.bow && player.current_forest_keys >= 5 && (rules.smallKeys != "keyRings" || Has.forest_key_ring);
    Access.forest_phantomGanon = Has.forest_temple_adult_access && Has.goron_bracelet && Has.bow && player.current_forest_keys >= 5 && player.forest_boss_key && (rules.smallKeys != "keyRings" || Has.forest_key_ring);
    Access.fire_nearBoss = Has.fire_temple_access;
    Access.fire_hammer1 = Has.fire_temple_adult_access && Has.hammer && (rules.smallKeys != "keyRings" || Has.fire_key_ring);
    Access.fire_hammer2 = Has.fire_temple_adult_access && Has.hammer && (rules.smallKeys != "keyRings" || Has.fire_key_ring);
    Access.fire_lavaOpen = Has.fire_temple_access && player.current_fire_keys >= 1 && (rules.smallKeys != "keyRings" || Has.fire_key_ring);
    Access.fire_lavaBomb = Has.fire_temple_access && player.current_fire_keys >= 1 && (Has.bomb_bag || (player.bombchus && Has.fire_temple_adult_access)) && (rules.smallKeys != "keyRings" || Has.fire_key_ring);
    Access.fire_volvagia = Has.fire_temple_adult_access && player.fire_boss_key && Has.hammer && (rules.smallKeys != "keyRings" || Has.fire_key_ring);
    Access.fire_lowerMaze = Has.can_climb_fire_temple;
    Access.fire_sideRoom = Has.can_climb_fire_temple;
    Access.fire_map = Has.can_climb_fire_temple && ((player.current_fire_keys >= 4 && Has.bow) || player.current_fire_keys >= 5);
    Access.fire_upperMaze = Has.can_climb_fire_temple && player.current_fire_keys >= 5;
    Access.fire_shortcut = Has.can_climb_fire_temple && player.current_fire_keys >= 5 && (Has.bomb_bag || player.bombchus);
    Access.fire_scarecrow = Has.can_climb_fire_temple && player.current_fire_keys >= 5 && Has.hookshot;
    Access.fire_compass = Has.can_climb_fire_temple && player.current_fire_keys >= 6;
    Access.fire_sotGoron = Has.can_climb_fire_temple && (player.current_fire_keys >= 7 || (player.current_fire_keys >= 6)) && Has.hammer && (Has.time || Has.bomb_bag || player.bombchus);
    Access.fire_top = Has.can_climb_fire_temple && (player.current_fire_keys >= 7 || (player.current_fire_keys >= 6)) && (Has.bomb_bag || player.bombchus);
    Access.water_compass = Has.water_temple_adult_access && ((Has.lullaby && Has.longshot) || Has.iron_boots);
    Access.water_map = Has.can_do_water_checks;
    Access.water_cracked = Has.can_do_water_checks && (Has.lullaby || (Has.iron_boots && player.bombchus)) && (Has.bomb_bag || player.bombchus);
    Access.water_torches = Has.can_do_water_checks && Has.lullaby && (Has.bow || Has.can_use_dins || Has.water_temple_child_access);
    Access.water_block = Has.can_do_water_checks && Has.lullaby && (((Has.bow && Has.hookshot) || (Has.hover_boots && Has.bomb_bag)) && Has.goron_bracelet);
    Access.water_pillar = Has.middle_water && Has.iron_boots && Has.hookshot;
    Access.water_dLink = Has.can_do_water_checks && player.current_water_keys >= 2 && Has.hookshot && (rules.smallKeys != "keyRings" || Has.water_key_ring);
    Access.water_river = Has.can_do_water_checks && player.current_water_keys >= 2 && Has.time && Has.bow && Has.hookshot && (rules.smallKeys != "keyRings" || Has.water_key_ring);
    Access.water_dragon = Has.can_do_water_checks && ((player.current_water_keys >= 2 && Has.hookshot && Has.time && Has.bow) || (Has.goron_bracelet && Has.lullaby && ((Has.iron_boots && Has.hookshot) || player.bombchus) && (Has.silver_scale || Has.iron_boots)));
    Access.water_bossKey = Has.can_do_water_checks && (Has.lullaby || Has.iron_boots) && (Has.longshot || Has.hover_boots) && player.current_water_keys >= 2 && (rules.smallKeys != "keyRings" || Has.water_key_ring);
    Access.water_morpha = Has.water_temple_adult_access && Has.water_boss_key && (rules.waterHop == "allowed" || Has.longshot);
    Access.spirit_childLeft = Has.spirit_temple_child_access && (Has.slingshot || Has.boomerang || player.bombchus);
    Access.spirit_childRight = Has.spirit_temple_child_access && (Has.slingshot || Has.boomerang || player.bombchus);
    Access.spirit_childClimb1 = Has.spirit_temple_access && player.current_spirit_keys >= 1 && ((Has.projectile_child && Has.spirit_temple_child_access) || (Has.projectile_adult && Has.silver_gauntlets)) && (rules.smallKeys != "keyRings" || Has.spirit_key_ring);
    Access.spirit_childClimb2 = Has.spirit_temple_access && player.current_spirit_keys >= 1 && ((Has.projectile_child && Has.spirit_temple_child_access) || (Has.projectile_adult && Has.silver_gauntlets)) && (rules.smallKeys != "keyRings" || Has.spirit_key_ring);
    Access.spirit_map = Has.spirit_temple_access && player.current_spirit_keys >= 1 && ((Has.spirit_temple_child_access && (Has.bomb_bag || player.bombchus)) || (((Has.can_use_fire || Has.bow) && Has.silver_gauntlets))) && (rules.smallKeys != "keyRings" || Has.spirit_key_ring);
    Access.spirit_sunRoom = Has.spirit_temple_access && player.current_spirit_keys >= 1 && ((Has.spirit_temple_child_access && (Has.bomb_bag || player.bombchus)) || (((Has.can_use_fire || Has.bow) && Has.silver_gauntlets))) && (rules.smallKeys != "keyRings" || Has.spirit_key_ring);
    Access.spirit_rightHand = Has.spirit_temple_access && player.current_spirit_keys >= 2 && ((Has.spirit_temple_child_access && (Has.bomb_bag || player.bombchus)) || (Has.can_push_spirit_silver_block && (Has.bow || Has.hookshot || player.bombchus))) && (rules.smallKeys != "keyRings" || Has.spirit_key_ring);
    Access.spirit_adultLeft = Has.can_push_spirit_silver_block && Has.hookshot && Has.lullaby;
    Access.spirit_adultRight = Has.can_push_spirit_silver_block && (Has.bow || Has.hookshot || player.bombchus);
    Access.spirit_rotatingMirror1 = Has.can_push_spirit_silver_block && player.current_spirit_keys >= 1 && (rules.smallKeys != "keyRings" || Has.spirit_key_ring);
    Access.spirit_rotatingMirror2 = Has.can_push_spirit_silver_block && player.current_spirit_keys >= 1 && (rules.smallKeys != "keyRings" || Has.spirit_key_ring);
    Access.spirit_lullabyHand = Has.can_push_spirit_silver_block && player.current_spirit_keys >= 1 && Has.lullaby && (rules.smallKeys != "keyRings" || Has.spirit_key_ring);
    Access.spirit_lullabyHigh = Has.can_push_spirit_silver_block && player.current_spirit_keys >= 1 && Has.lullaby && (Has.hookshot || Has.hover_boots) && (rules.smallKeys != "keyRings" || Has.spirit_key_ring);
    Access.spirit_nearFourArmos = Has.can_push_spirit_silver_block && player.current_spirit_keys >= 2 && (Has.bomb_bag || player.bombchus) && Has.mirror_shield && (rules.smallKeys != "keyRings" || Has.spirit_key_ring);
    Access.spirit_invisible1 = Has.can_push_spirit_silver_block && player.current_spirit_keys >= 2 && (Has.bomb_bag || player.bombchus) && (rules.smallKeys != "keyRings" || Has.spirit_key_ring);//&& Has.can_see;
    Access.spirit_invisible2 = Has.can_push_spirit_silver_block && player.current_spirit_keys >= 2 && (Has.bomb_bag || player.bombchus) && (rules.smallKeys != "keyRings" || Has.spirit_key_ring);//&& Has.can_see;
    Access.spirit_leftHand = Has.can_push_spirit_silver_block && player.current_spirit_keys >= 2 && (Has.bomb_bag || player.bombchus) && (rules.smallKeys != "keyRings" || Has.spirit_key_ring);
    Access.spirit_bossKey = Has.can_push_spirit_silver_block && player.current_spirit_keys >= 3 && Has.lullaby && (rules.smallKeys != "keyRings" || Has.spirit_key_ring);
    Access.spirit_tippyTop = Has.can_push_spirit_silver_block && player.current_spirit_keys >= 3 && Has.mirror_shield && (rules.smallKeys != "keyRings" || Has.spirit_key_ring);
    Access.spirit_twinrova = Has.can_push_spirit_silver_block && player.current_spirit_keys >= 3 && Has.mirror_shield && (Has.bomb_bag || player.bombchus) && player.spirit_boss_key && Has.hookshot && (rules.smallKeys != "keyRings" || Has.spirit_key_ring);
    Access.shadow_map = Has.shadow_temple_adult_access && (Has.hover_boots || Has.hookshot);
    Access.shadow_hovers = Has.shadow_temple_adult_access && (Has.hover_boots || Has.hookshot);
    Access.shadow_compass = Has.can_cross_shadow_gap;
    Access.shadow_earlySilvers = Has.can_cross_shadow_gap;
    Access.shadow_spinning1 = Has.can_bomb_shadow_wall;
    Access.shadow_spinning2 = Has.can_bomb_shadow_wall;
    Access.shadow_spikesLower = Has.can_bomb_shadow_wall;
    Access.shadow_spikesUpper = Has.can_bomb_shadow_wall;
    Access.shadow_spikesSwitch = Has.can_bomb_shadow_wall;
    Access.shadow_redeadSilvers = Has.can_bomb_shadow_wall && player.current_shadow_keys >= 2;
    Access.shadow_pot = Has.can_bomb_shadow_wall && Has.hookshot && player.current_shadow_keys >= 2;
    Access.shadow_wind = Has.can_pass_shadow_hookshot_door && player.current_shadow_keys >= 3;
    Access.shadow_bombable = Has.can_pass_shadow_hookshot_door && player.current_shadow_keys >= 3;
    Access.shadow_gibdos = Has.can_pass_shadow_hookshot_door && player.current_shadow_keys >= 3;
    Access.shadow_dins1 = Has.can_ride_shadow_boat && Has.can_use_dins && player.current_shadow_keys >= 4;
    Access.shadow_dins2 = Has.can_ride_shadow_boat && Has.can_use_dins && player.current_shadow_keys >= 4;
    Access.shadow_floormaster = Has.can_ride_shadow_boat && player.current_shadow_keys >= 4;
    Access.shadow_bongo = Has.can_beat_shadow_boss && player.current_shadow_keys >= 5 && (Has.shadow_boss_key || rules.preset != "TRUTH");
    Access.ganons_lightTrial1 = Has.can_enter_ganons && Has.golden_gauntlets;
    Access.ganons_lightTrial2 = Has.can_enter_ganons && Has.golden_gauntlets;
    Access.ganons_lightTrial3 = Has.can_enter_ganons && Has.golden_gauntlets;
    Access.ganons_lightTrial4 = Has.can_enter_ganons && Has.golden_gauntlets;
    Access.ganons_lightTrial5 = Has.can_enter_ganons && Has.golden_gauntlets;
    Access.ganons_lightTrial6 = Has.can_enter_ganons && Has.golden_gauntlets;
    Access.ganons_lightTrial7 = Has.can_enter_ganons && Has.golden_gauntlets;//&& Has.can_see;
    Access.ganons_lightTrialLullaby = Has.can_enter_ganons && Has.golden_gauntlets && Has.lullaby && player.current_ganons_keys >= 1 && (rules.smallKeys != "keyRings" || Has.ganons_key_ring);
    Access.ganons_spiritTrial1 = Has.can_enter_ganons;
    Access.ganons_spiritTrial2 = Has.can_enter_ganons && (player.bombchus || Has.bow);//&& Has.can_see;
    Access.ganons_forestTrial = Has.can_enter_ganons;
    Access.ganons_waterTrial1 = Has.can_enter_ganons;
    Access.ganons_waterTrial2 = Has.can_enter_ganons;
    Access.ganons_shadowTrial1 = Has.can_enter_ganons && ((Has.bow && Has.fire_arrows && Has.magic) || Has.hookshot || Has.hover_boots || Has.time);
    Access.ganons_shadowTrial2 = Has.can_enter_ganons && ((Has.bow && Has.fire_arrows && Has.magic) || (Has.longshot && (Has.hover_boots || Has.can_use_dins)));
    Access.ganons_bossKey = Has.can_enter_ganons;
    Access.gtg_lobbyLeft = Has.gtg_access && ((Has.bow && Has.gtg_adult_access) || (Has.slingshot && Has.gtg_child_access));
    Access.gtg_lobbyRight = Has.gtg_access && ((Has.bow && Has.gtg_adult_access) || (Has.slingshot && Has.gtg_child_access));
    Access.gtg_stalfos = Has.gtg_access;
    Access.gtg_wolfos = Has.gtg_access;
    Access.gtg_silvers1 = Has.gtg_adult_access && Has.can_climb_gtg_hole && Has.silver_gauntlets;//&& Has.can_see ;
    Access.gtg_silvers2 = Has.gtg_adult_access && Has.can_climb_gtg_hole && Has.silver_gauntlets;//&& Has.can_see ;
    Access.gtg_silvers3 = Has.gtg_adult_access && Has.can_climb_gtg_hole && Has.silver_gauntlets;//&& Has.can_see ;
    Access.gtg_silvers4 = Has.gtg_adult_access && Has.can_climb_gtg_hole && Has.silver_gauntlets;//&& Has.can_see ;
    Access.gtg_eyes = Has.gtg_adult_access && Has.can_climb_gtg_hole && Has.bow;  //((Has.bomb_bag || player.current_gtg_keys >= 9) && Has.hammer));
    Access.gtg_aboveEyes = Has.gtg_adult_access && Has.can_climb_gtg_hole && Has.bow;//&& Has.can_see;
    Access.gtg_keese = Has.gtg_adult_access && Has.can_climb_gtg_hole;// && (Has.can_see || (Has.bomb_bag || player.current_gtg_keys >= 9)) ;
    Access.gtg_flamesChest = Has.gtg_adult_access && Has.can_climb_gtg_hole/*&& Has.can_see*/;
    Access.gtg_freestanding = Has.gtg_access && (player.current_gtg_keys >= 2 || ((Has.bomb_bag || player.bombchus) && (Has.time || Has.gtg_child_access)) || (Has.can_climb_gtg_hole /*&& Has.can_see*/ && Has.time));
    Access.gtg_right2 = Has.gtg_access && (player.current_gtg_keys >= 2 || ((Has.bomb_bag || player.bombchus) && (Has.time || Has.gtg_child_access)) || (Has.can_climb_gtg_hole /*&& Has.can_see*/ && Has.time));
    Access.gtg_right3 = Has.gtg_access && (player.current_gtg_keys >= 2 || ((Has.bomb_bag || player.bombchus) && (Has.time || Has.gtg_child_access)) || (Has.can_climb_gtg_hole /*&& Has.can_see*/ && Has.time));
    Access.gtg_beamos = Has.gtg_access && (Has.bomb_bag || player.bombchus);
    Access.gtg_left1 = Has.gtg_access && player.current_gtg_keys >= 1 && (rules.smallKeys != "keyRings" || Has.gtg_key_ring);//&& Has.can_see;
    Access.gtg_left2 = Has.gtg_access && player.current_gtg_keys >= 2 && (rules.smallKeys != "keyRings" || Has.gtg_key_ring);
    Access.gtg_left3 = Has.gtg_access && player.current_gtg_keys >= 4 && (rules.smallKeys != "keyRings" || Has.gtg_key_ring);
    Access.gtg_left4 = Has.gtg_access && player.current_gtg_keys >= 5 && (rules.smallKeys != "keyRings" || Has.gtg_key_ring);
    Access.gtg_final = Has.gtg_access && player.current_gtg_keys >= 7 && (rules.smallKeys != "keyRings" || Has.gtg_key_ring);
    Access.gtg_toilet = Has.gtg_adult_access && Has.iron_boots && Has.time && Has.hookshot /*&& Has.can_see*/;
    Access.well_fakeRight = Has.botw_child_access;//&& Has.can_see;
    Access.well_backBombable = Has.botw_child_access && (Has.bomb_bag || player.bombchus);
    Access.well_waterLeft = Has.botw_child_access && Has.lullaby;
    Access.well_coffin = Has.botw_child_access;
    Access.well_centerSmall = Has.botw_child_access;//&& Has.can_see;
    Access.well_centerBig = Has.botw_child_access;//&& Has.can_see;
    Access.well_frontBombable = Has.botw_child_access && (Has.bomb_bag || player.bombchus);
    Access.well_deadHand = Has.botw_child_access && Has.lullaby;//&& Has.kokiri_sword;
    Access.well_invisible = Has.botw_child_access && Has.lullaby;//&& Has.can_see ;
    Access.well_waterFront = Has.botw_child_access && Has.lullaby;
    Access.well_fakeLeft = Has.botw_child_access;//&& Has.can_see;
    Access.well_locked1 = Has.botw_child_access && (player.current_well_keys >= 1 || (Has.lullaby && (Has.bomb_bag || player.bombchus))) && (rules.smallKeys != "keyRings" || Has.well_key_ring);//&& Has.can_see ;
    Access.well_locked2 = Has.botw_child_access && (player.current_well_keys >= 1 || (Has.lullaby && (Has.bomb_bag || player.bombchus))) && (rules.smallKeys != "keyRings" || Has.well_key_ring);//&& Has.can_see ;
    Access.well_basement = Has.botw_child_access && ((Has.bomb_bag || player.bombchus) || (((/*Has.can_see &&*/ player.current_well_keys >= 1) || Has.can_use_dins) && Has.goron_bracelet));
    Access.lullabyCheck = true;
    Access.eponasCheck = true;
    Access.sariasCheck = true;
    Access.stormsCheck = true;
    Access.sunsCheck = Has.lullaby;
    Access.boleroCheck = Has.can_enter_fire_temple_entrance;
    Access.minuetCheck = true;
    Access.requiemCheck = Has.can_enter_colossus;
    Access.serenadeCheck = Has.ice_access && (Has.can_use_bottle || Has.can_shoot_blue_fire_arrows) && (Has.ice_adult_access || player.bombchus || Has.bomb_bag || Has.giants_wallet);
    Access.preludeCheck = Has.forest || Has.forest || Access.forest_medallion_location;
    Access.nocturneCheck = (Has.forest || Has.forest || Access.forest_medallion_location) && (Has.fire || Has.fire || Access.fire_medallion_location) && (Has.water || Has.water || Access.water_medallion_location);
    Access.oot = (Has.emerald || Has.emerald || Access.emerald_location) && (Has.ruby || Has.ruby || Access.ruby_location) && (Has.sapphire || Has.sapphire || Access.sapphire_location);
    Access.scrub_dodongos_1 = Has.can_break_dodongos_wall;
    Access.scrub_dodongos_2 = Has.can_break_dodongos_wall;
    Access.scrub_dodongos_3 = Has.dodongos_climb && (Has.bomb_bag || player.bombchus || Has.goron_bracelet);
    Access.scrub_dodongos_4 = Has.dodongos_climb && (Has.bomb_bag || player.bombchus || Has.goron_bracelet);
    Access.scrub_jabu = Has.can_hit_jabu_switch;
    Access.scrub_ganons_1 = Has.can_enter_ganons;
    Access.scrub_ganons_2 = Has.can_enter_ganons;
    Access.scrub_ganons_3 = Has.can_enter_ganons;
    Access.scrub_ganons_4 = Has.can_enter_ganons;
    Access.scrub_river_1 = Has.storms;
    Access.scrub_river_2 = Has.storms;
    Access.scrub_sfm_1 = Has.storms;
    Access.scrub_sfm_2 = Has.storms;
    Access.scrub_lake_1 = true;
    Access.scrub_lake_2 = true;
    Access.scrub_lake_3 = true;
    Access.scrub_lw_1 = true;
    Access.scrub_lw_2 = true;
    Access.scrub_lw_3 = Has.can_blast_or_smash;
    Access.scrub_colossus_1 = Has.silver_gauntlets && Has.can_enter_colossus;
    Access.scrub_colossus_2 = Has.silver_gauntlets && Has.can_enter_colossus;
    Access.scrub_crater_1 = Has.hammer;
    Access.scrub_crater_2 = Has.hammer;
    Access.scrub_crater_3 = Has.hammer;
    Access.scrub_crater_child = Has.bomb_bag || Spawn.child_upper_dmc || Spawn.child_lower_dmc || Spawn.child_lower_dmc_fairy || Spawn.child_dmt_fairy || Spawn.child_dmt_fairy_ool || Has.hammer || player.bombchus;
    Access.scrub_goron_1 = Has.time || Has.hookshot;
    Access.scrub_goron_2 = Has.time || Has.hookshot;
    Access.scrub_goron_3 = Has.time || Has.hookshot;
    Access.scrub_ranch_1 = true;
    Access.scrub_ranch_2 = true;
    Access.scrub_ranch_3 = true;
    Access.scrub_gv_1 = Has.fortress_access && Has.storms;
    Access.scrub_gv_2 = Has.fortress_access && Has.storms;
    Access.shop_kokiri_TL = true;
    Access.shop_kokiri_TR = true;
    Access.shop_kokiri_BR = true;
    Access.shop_kokiri_BL = true;
    Access.shop_market_bazaar_TL = true;
    Access.shop_market_bazaar_TR = true;
    Access.shop_market_bazaar_BR = true;
    Access.shop_market_bazaar_BL = true;
    Access.shop_market_potion_TL = true;
    Access.shop_market_potion_TR = true;
    Access.shop_market_potion_BR = true;
    Access.shop_market_potion_BL = true;
    Access.shop_market_chu_TL = true;
    Access.shop_market_chu_TR = true;
    Access.shop_market_chu_BR = true;
    Access.shop_market_chu_BL = true;
    Access.shop_kakariko_bazaar_TL = true;
    Access.shop_kakariko_bazaar_TR = true;
    Access.shop_kakariko_bazaar_BR = true;
    Access.shop_kakariko_bazaar_BL = true;
    Access.shop_kakariko_potion_TL = true;
    Access.shop_kakariko_potion_TR = true;
    Access.shop_kakariko_potion_BR = true;
    Access.shop_kakariko_potion_BL = true;
    Access.shop_goron_TL = Has.lullaby || Has.can_stop_link_the_goron || Has.bomb_bag || Has.can_use_dins || player.bombchus;
    Access.shop_goron_TR = Has.lullaby || Has.can_stop_link_the_goron || Has.bomb_bag || Has.can_use_dins || player.bombchus;
    Access.shop_goron_BR = Has.lullaby || Has.can_stop_link_the_goron || Has.bomb_bag || Has.can_use_dins || player.bombchus;
    Access.shop_goron_BL = Has.lullaby || Has.can_stop_link_the_goron || Has.bomb_bag || Has.can_use_dins || player.bombchus;
    Access.shop_domain_TL = (Has.bomb_bag && Has.lullaby) || Has.silver_scale || (Has.lullaby && ((Has.can_enter_ganons && Has.can_use_bottle) || Has.jabu_entrance_access || (Has.giants_wallet && Has.can_use_bottle)));
    Access.shop_domain_TR = (Has.bomb_bag && Has.lullaby) || Has.silver_scale || (Has.lullaby && ((Has.can_enter_ganons && Has.can_use_bottle) || Has.jabu_entrance_access || (Has.giants_wallet && Has.can_use_bottle)));
    Access.shop_domain_BR = (Has.bomb_bag && Has.lullaby) || Has.silver_scale || (Has.lullaby && ((Has.can_enter_ganons && Has.can_use_bottle) || Has.jabu_entrance_access || (Has.giants_wallet && Has.can_use_bottle)));
    Access.shop_domain_BL = (Has.bomb_bag && Has.lullaby) || Has.silver_scale || (Has.lullaby && ((Has.can_enter_ganons && Has.can_use_bottle) || Has.jabu_entrance_access || (Has.giants_wallet && Has.can_use_bottle)));
    Access.cow_kokiri = Has.eponas;
    Access.cow_ranch1 = Has.eponas;
    Access.cow_ranch2 = Has.eponas;
    Access.cow_ranch3 = Has.eponas;
    Access.cow_ranch4 = Has.eponas;
    Access.cow_field = Has.eponas && ((Has.hammer && Has.can_use_fire) || (Has.bomb_bag && Has.can_use_dins));
    Access.cow_valley = Has.eponas;
    Access.cow_trail = Has.eponas && Has.can_blast_or_smash;
    Access.cow_kakariko = Has.eponas;

    Access.gs_kokiri_child = true;
    Access.gs_kokiri_soil = Has.can_use_bottle;
    Access.gs_kokiri_adult = Has.hookshot || Has.hover_boots;
    Access.gs_market = true;
    Access.gs_lost_woods_bean_1 = Has.can_use_bottle;
    Access.gs_lost_woods_bean_2 = Has.can_use_bottle;
    Access.gs_lost_woods_above_stage = Has.bean_access || (Has.hookshot && (player.bombchus || Has.bow)) || Has.longshot;
    Access.gs_sacred_forest = Has.hookshot;
    Access.gs_outside_kakariko = (Has.boomerang && (Has.bomb_bag || player.bombchus)) || (Has.can_blast_or_smash && Has.hookshot);
    Access.gs_near_gerudo = (Has.hammer && Has.can_use_fire && Has.hookshot) || (Has.can_use_dins && (Has.bomb_bag || player.bombchus) && Has.boomerang);
    Access.gs_hyrule_castle_tree = true;
    Access.gs_hyrule_castle_grotto = Has.storms && Has.boomerang;
    Access.gs_lon_lon_tree = true;
    Access.gs_lon_lon_shed = true;
    Access.gs_lon_lon_window = Has.boomerang;
    Access.gs_lon_lon_back_wall = Has.boomerang;
    Access.gs_kakariko_construction = true;
    Access.gs_kakariko_skulltula_house = true;
    Access.gs_kakariko_guard_house = true;
    Access.gs_kakariko_tree = true;
    Access.gs_kakariko_tower = true;
    Access.gs_kakariko_impas = Has.hookshot || Spawn.adult_kak_roof || Has.hover_boots;
    Access.gs_graveyard_wall = Has.boomerang;
    Access.gs_graveyard_soil = Has.can_use_bottle;
    Access.gs_trail_soil = Has.can_use_bottle && ((Has.bomb_bag || player.bombchus) || Has.goron_bracelet);
    Access.gs_trail_bombable_wall = Has.can_blast_or_smash;
    Access.gs_trail_hail_path = Has.can_stop_link_the_goron || Has.hammer || Spawn.adult_upper_dmc || Spawn.adult_lower_dmc || Spawn.lower_dmc_fairy || Spawn.adult_dmt_fairy || Spawn.adult_dmt_fairy_ool;
    Access.gs_trail_above_dodongos = true;
    Access.gs_goron_center = true;
    Access.gs_goron_maze = Has.bomb_bag || player.bombchus;
    Access.gs_crater_crate = Has.can_blast_or_smash || Spawn.child_upper_dmc;
    Access.gs_crater_soil = Has.can_use_bottle && Has.bolero;
    Access.gs_river_ladder = Has.child_can_enter_river;
    Access.gs_river_near_grotto = Has.hookshot;
    Access.gs_river_above_bridge = Has.hookshot;
    Access.gs_river_tree = true;
    Access.gs_domain = (Has.lullaby || Spawn.adult_zd || Has.hover_boots);
    Access.gs_fountain_above_log = Has.jabu_entrance_access && Has.boomerang;
    Access.gs_fountain_tree = Has.jabu_entrance_access;
    Access.gs_fountain_hidden_cave = Has.ice_entrance_access && Has.silver_gauntlets && Has.hookshot && Has.can_blast_or_smash;
    Access.gs_hylia_bean = Has.can_use_bottle;
    Access.gs_hylia_lab_wall = true;
    Access.gs_hylia_island = true;
    Access.gs_hylia_tree = Has.longshot;
    Access.gs_hylia_lab_crate = Has.iron_boots && Has.hookshot;
    Access.gs_valley_small_bridge = Has.boomerang;
    Access.gs_valley_bean = Has.can_use_bottle;
    Access.gs_valley_tent = Has.fortress_access && Has.hookshot;
    Access.gs_valley_pillar = Has.fortress_access && Has.hookshot;
    Access.gs_fortress_archery = Has.fortress_access && Has.hookshot;
    Access.gs_fortress_top = Has.fortress_access;
    Access.gs_wasteland = (Has.hookshot || Has.bomb_bag) && (Has.can_cross_quicksand || Has.can_enter_colossus);
    Access.gs_colossus_soil = Has.can_use_bottle && Has.requiem;
    Access.gs_colossus_tree = Has.hookshot && Has.can_enter_colossus;
    Access.gs_colossus_hill = (Has.requiem && Has.bean_access) || (Has.hookshot && Has.can_enter_colossus);
    Access.gs_ogc = true;
    Access.gs_deku_basement_back = Has.deku_access && Has.boomerang && (Has.bomb_bag || player.bombchus);
    Access.gs_deku_basement_gate = Has.deku_access;
    Access.gs_deku_basement_vines = Has.deku_access;
    Access.gs_deku_compass = Has.deku_access;
    Access.gs_dodongos_east_side = Has.can_break_dodongos_wall;
    Access.gs_dodongos_stair_vines = Has.dodongos_climb;
    Access.gs_dodongos_above_stairs = Has.dodongos_climb && (Has.hookshot || Has.boomerang);
    Access.gs_dodongos_scarecrow = Has.can_break_dodongos_wall;
    Access.gs_dodongos_before_king = (Has.bomb_bag || player.bombchus);
    Access.gs_jabu_vines = Has.can_hit_jabu_switch;
    Access.gs_jabu_near_octo_1 = Has.can_hit_jabu_switch && Has.boomerang;
    Access.gs_jabu_near_octo_2 = Has.can_hit_jabu_switch && Has.boomerang;
    Access.gs_jabu_near_boss = Has.can_hit_jabu_switch && Has.boomerang;
    Access.gs_forest_first = Has.forest_temple_adult_access && Has.hookshot;
    Access.gs_forest_lobby = Has.forest_temple_adult_access && Has.hookshot;
    Access.gs_forest_outdoor_east = Has.forest_temple_adult_access && Has.hookshot && ((Has.bow || Has.time) || (player.current_forest_keys >= 1 && Has.hover_boots));
    Access.gs_forest_outdoor_west = Has.forest_temple_adult_access && Has.hookshot && (((Has.bow || Has.time) && Has.longshot) || (player.current_forest_keys >= 1 && Has.hover_boots) || (player.current_forest_keys >= 2 && Has.goron_bracelet && Has.bow))
    Access.gs_forest_basement = Has.forest_temple_adult_access && Has.hookshot && Has.bow && Has.goron_bracelet && player.current_forest_keys >= 5;
    Access.gs_fire_time = Has.fire_temple_adult_access && player.current_fire_keys >= 1;
    Access.gs_fire_bomb_wall = Has.can_climb_fire_temple && (Has.bomb_bag || player.bombchus);
    Access.gs_fire_scarecrow_1 = Has.can_climb_fire_temple && player.current_fire_keys >= 5 && Has.hookshot;
    Access.gs_fire_scarecrow_2 = Has.can_climb_fire_temple && player.current_fire_keys >= 5 && Has.hookshot;
    Access.gs_fire_basement = Has.fire_temple_adult_access && Has.hammer;
    Access.gs_water_south_basement = Has.can_do_water_checks && (Has.bomb_bag || player.bombchus) && Has.lullaby && Has.hookshot;
    Access.gs_water_river = Has.can_do_water_checks && Has.time && player.current_water_keys >= 2 && Has.hookshot;
    Access.gs_water_central = Has.middle_water && (Has.longshot || (Has.can_use_farores && Has.hookshot));
    Access.gs_water_near_boss_key = Has.can_do_water_checks && (Has.longshot || Has.hover_boots) && (Has.lullaby || Has.iron_boots) && player.current_water_keys >= 1;
    Access.gs_water_platform_room = Has.can_do_water_checks && Has.hookshot && player.current_water_keys >= 1;
    Access.gs_spirit_metal_fence = Has.spirit_temple_child_access && (Has.boomerang || Has.slingshot || player.bombchus);
    Access.gs_spirit_before_child_knuckle = Has.spirit_temple_access && ((Has.bomb_bag || player.bombchus) && Has.boomerang && player.current_spirit_keys >= 1 && Has.spirit_temple_child_access) || (Has.hookshot && Has.silver_gauntlets && player.current_spirit_keys >= 1);
    Access.gs_spirit_boulder_room = Has.can_push_spirit_silver_block && Has.time && (Has.bow || Has.hookshot || player.bombchus);
    Access.gs_spirit_lobby = Has.can_push_spirit_silver_block && player.current_spirit_keys >= 1 && (Has.hookshot || Has.hover_boots);
    Access.gs_spirit_child_climb = Has.spirit_temple_access && player.current_spirit_keys >= 1;
    Access.gs_shadow_like_like = Has.can_bomb_shadow_wall;
    Access.gs_shadow_crusher = Has.can_bomb_shadow_wall && (Has.hookshot || Has.bomb_bag);
    Access.gs_shadow_giant_pot = Has.can_bomb_shadow_wall && player.current_shadow_keys >= 2 && Has.hookshot;
    Access.gs_shadow_near_boat = Has.can_pass_shadow_hookshot_door && Has.longshot && player.current_shadow_keys >= 4;
    Access.gs_shadow_three_pots = Has.can_ride_shadow_boat;
    Access.gs_well_west_inner = Has.botw_child_access && Has.boomerang && (player.current_well_keys >= 1 || (Has.lullaby && (Has.bomb_bag || player.bombchus))) && (rules.smallKeys != "keyRings" || Has.well_key_ring);
    Access.gs_well_east_inner = Has.botw_child_access && Has.boomerang && (player.current_well_keys >= 1 || (Has.lullaby && (Has.bomb_bag || player.bombchus))) && (rules.smallKeys != "keyRings" || Has.well_key_ring);
    Access.gs_well_like_like = Has.botw_child_access && (player.current_well_keys >= 1 || (Has.lullaby && (Has.bomb_bag || player.bombchus))) && (rules.smallKeys != "keyRings" || Has.well_key_ring);
    Access.gs_ice_spinning_scythe = Has.ice_access && Has.hookshot;
    Access.gs_ice_hp_room = Has.ice_access && (Has.can_use_bottle || Has.can_shoot_blue_fire_arrows) && Has.hookshot;
    Access.gs_ice_block_room = Has.ice_access && (Has.can_use_bottle || Has.can_shoot_blue_fire_arrows) && (Has.hookshot || (Has.hover_boots && Has.bow));

    Access = locationCouldAccess;
    Has = couldHave;
  }

  locationCouldAccess.forest_first = couldHave.forest_temple_access;
  locationCouldAccess.forest_stalfos = couldHave.forest_temple_access;
  locationCouldAccess.forest_midCourtyard = couldHave.forest_temple_adult_access && ((couldHave.time && (couldHave.hover_boots || couldHave.hookshot) || (couldHave.bow && couldHave.hookshot) || ((couldHave.hover_boots || couldHave.goron_bracelet) && player.current_forest_keys >= 1 && (couldHave.hover_boots || couldHave.hookshot))));
  locationCouldAccess.forest_highCourtyard = couldHave.forest_temple_access && (couldHave.time || (couldHave.forest_temple_adult_access && (((couldHave.hover_boots || couldHave.goron_bracelet) && player.current_forest_keys >= 1) || (couldHave.bow && couldHave.hookshot/* && (couldHave.iron_boots || couldHave.scale2 || couldHave.longshot)*/))));
  locationCouldAccess.forest_lowCourtyard = couldHave.forest_temple_access && (couldHave.time || (couldHave.forest_temple_adult_access && (((couldHave.hover_boots || couldHave.goron_bracelet) && player.current_forest_keys >= 1) || (couldHave.bow && couldHave.hookshot/* && (couldHave.iron_boots || couldHave.scale2 || couldHave.longshot)*/))));
  locationCouldAccess.forest_blockRoom = couldHave.forest_temple_adult_access && (couldHave.bow || (couldHave.forest_temple_child_access && couldHave.slingshot)) && couldHave.goron_bracelet && (rules.smallKeys != "keyRings" || couldHave.forest_key_ring);
  locationCouldAccess.forest_bossKey = couldHave.forest_temple_adult_access && couldHave.bow && couldHave.goron_bracelet && (rules.smallKeys != "keyRings" || couldHave.forest_key_ring);
  locationCouldAccess.forest_floormaster = couldHave.forest_temple_adult_access && ((couldHave.bow && couldHave.goron_bracelet) || ((couldHave.hover_boots || couldHave.goron_bracelet) && player.current_forest_keys >= 1)) && (rules.smallKeys != "keyRings" || couldHave.forest_key_ring);
  locationCouldAccess.forest_red = couldHave.forest_temple_adult_access && couldHave.goron_bracelet && couldHave.bow && (rules.smallKeys != "keyRings" || couldHave.forest_key_ring);
  locationCouldAccess.forest_bow = couldHave.forest_temple_adult_access && couldHave.goron_bracelet && (rules.smallKeys != "keyRings" || couldHave.forest_key_ring);
  locationCouldAccess.forest_blue = couldHave.forest_temple_adult_access && couldHave.goron_bracelet && couldHave.bow && (rules.smallKeys != "keyRings" || couldHave.forest_key_ring);
  locationCouldAccess.forest_fallingCeiling = couldHave.forest_temple_adult_access && couldHave.goron_bracelet && (couldHave.bow || couldHave.can_use_dins) && (rules.smallKeys != "keyRings" || couldHave.forest_key_ring);
  locationCouldAccess.forest_nearBoss = couldHave.forest_temple_adult_access && couldHave.goron_bracelet && couldHave.bow && (rules.smallKeys != "keyRings" || couldHave.forest_key_ring);
  locationCouldAccess.forest_phantomGanon = couldHave.forest_temple_adult_access && couldHave.goron_bracelet && couldHave.bow && (rules.smallKeys != "keyRings" || couldHave.forest_key_ring);
  locationCouldAccess.fire_nearBoss = couldHave.fire_temple_access;
  locationCouldAccess.fire_hammer1 = couldHave.fire_temple_adult_access && couldHave.hammer && (rules.smallKeys != "keyRings" || couldHave.fire_key_ring);
  locationCouldAccess.fire_hammer2 = couldHave.fire_temple_adult_access && couldHave.hammer && (rules.smallKeys != "keyRings" || couldHave.fire_key_ring);
  locationCouldAccess.fire_lavaOpen = couldHave.fire_temple_access && (player.current_fire_keys >= 1 || (couldHave.hammer && couldHave.fire_temple_adult_access)) && (rules.smallKeys != "keyRings" || couldHave.fire_key_ring);
  locationCouldAccess.fire_lavaBomb = couldHave.fire_temple_access && (player.current_fire_keys >= 1 || (couldHave.hammer && couldHave.fire_temple_adult_access)) && (couldHave.bomb_bag || (player.bombchus && couldHave.fire_temple_adult_access)) && (rules.smallKeys != "keyRings" || couldHave.fire_key_ring);
  locationCouldAccess.fire_volvagia = couldHave.fire_temple_adult_access && ((player.fire_boss_key && couldHave.hammer) || (couldHave.hammer && couldHave.bow && couldHave.hookshot && (couldHave.bomb_bag || player.bombchus))) && (rules.smallKeys != "keyRings" || couldHave.fire_key_ring);
  locationCouldAccess.fire_lowerMaze = couldHave.can_climb_fire_temple;
  locationCouldAccess.fire_sideRoom = couldHave.can_climb_fire_temple;
  locationCouldAccess.fire_map = couldHave.can_climb_fire_temple && (((player.current_fire_keys >= 4 && couldHave.bow) || player.current_fire_keys >= 5) || couldHave.bow);
  locationCouldAccess.fire_upperMaze = couldHave.can_climb_fire_temple && (player.current_fire_keys >= 5 || (couldHave.bow && (couldHave.bomb_bag || player.bombchus)));
  locationCouldAccess.fire_shortcut = couldHave.can_climb_fire_temple && ((player.current_fire_keys >= 5 && (couldHave.bomb_bag || player.bombchus)) || (couldHave.hammer && couldHave.bow && (couldHave.bomb_bag || player.bombchus)));
  locationCouldAccess.fire_scarecrow = couldHave.can_climb_fire_temple && ((player.current_fire_keys >= 5 && couldHave.hookshot) || (couldHave.hammer && couldHave.bow && couldHave.hookshot && (couldHave.bomb_bag || player.bombchus)));
  locationCouldAccess.fire_compass = couldHave.can_climb_fire_temple && (player.current_fire_keys >= 6 || (couldHave.hammer && couldHave.bow && couldHave.hookshot && (couldHave.bomb_bag || player.bombchus)));
  locationCouldAccess.fire_sotGoron = couldHave.can_climb_fire_temple && ((player.current_fire_keys >= 7 || (player.current_fire_keys >= 6)) && couldHave.hammer && (couldHave.time || couldHave.bomb_bag || player.bombchus || couldHave.hover_boots) || (couldHave.hammer && couldHave.bow && couldHave.hookshot && (couldHave.bomb_bag || player.bombchus)));
  locationCouldAccess.fire_top = couldHave.can_climb_fire_temple && ((player.current_fire_keys >= 7 || (player.current_fire_keys >= 6)) && (couldHave.bomb_bag || player.bombchus) || (couldHave.hammer && couldHave.bow && couldHave.hookshot && (couldHave.bomb_bag || player.bombchus)));
  locationCouldAccess.water_compass = couldHave.water_temple_adult_access && ((couldHave.lullaby && couldHave.longshot) || couldHave.iron_boots);
  locationCouldAccess.water_map = couldHave.can_do_water_checks;
  locationCouldAccess.water_cracked = couldHave.can_do_water_checks && (couldHave.lullaby || (couldHave.iron_boots && player.bombchus)) && (couldHave.bomb_bag || player.bombchus);
  locationCouldAccess.water_torches = couldHave.can_do_water_checks && couldHave.lullaby && (couldHave.bow || couldHave.can_use_dins || couldHave.water_temple_child_access);
  locationCouldAccess.water_block = couldHave.can_do_water_checks && couldHave.lullaby && ((couldHave.bow || couldHave.hover_boots) && couldHave.goron_bracelet);
  locationCouldAccess.water_pillar = couldHave.can_do_water_checks && couldHave.middle_water && couldHave.iron_boots;
  locationCouldAccess.water_dLink = couldHave.can_do_water_checks && couldHave.hookshot && (player.current_water_keys >= 2 || (couldHave.lullaby && couldHave.bow && couldHave.goron_bracelet && (couldHave.bomb_bag || player.bombchus))) && (rules.smallKeys != "keyRings" || couldHave.water_key_ring);
  locationCouldAccess.water_river = couldHave.can_do_water_checks && couldHave.hookshot && (player.current_water_keys >= 2 || (couldHave.lullaby && couldHave.bow && couldHave.goron_bracelet && (couldHave.bomb_bag || player.bombchus))) && couldHave.time && couldHave.bow && (rules.smallKeys != "keyRings" || couldHave.water_key_ring);
  locationCouldAccess.water_dragon = couldHave.can_do_water_checks && ((player.current_water_keys >= 2 && couldHave.hookshot && couldHave.time && couldHave.bow) || (couldHave.goron_bracelet && couldHave.lullaby && ((couldHave.iron_boots && couldHave.hookshot) || player.bombchus || couldHave.bomb_bag) && (couldHave.silver_scale || couldHave.iron_boots)));
  locationCouldAccess.water_bossKey = couldHave.can_do_water_checks && (couldHave.lullaby || couldHave.iron_boots) && (couldHave.longshot || couldHave.hover_boots) && (player.current_water_keys >= 2 || (couldHave.lullaby && couldHave.bow && couldHave.goron_bracelet && (couldHave.bomb_bag || player.bombchus))) && (rules.smallKeys != "keyRings" || couldHave.water_key_ring);
  locationCouldAccess.water_morpha = couldHave.can_do_water_checks && (player.water_boss_key || (couldHave.lullaby && couldHave.bow && couldHave.goron_bracelet && couldHave.iron_boots && (couldHave.bomb_bag || player.bombchus) && couldHave.time) && (couldHave.longshot || couldHave.hover_boots)) && (rules.waterHop == "allowed" || couldHave.longshot) && (rules.smallKeys != "keyRings" || couldHave.water_key_ring);
  locationCouldAccess.spirit_childLeft = couldHave.spirit_temple_child_access && (couldHave.slingshot || couldHave.boomerang || (couldHave.bomb_bag || player.bombchus));
  locationCouldAccess.spirit_childRight = couldHave.spirit_temple_child_access && (couldHave.slingshot || couldHave.boomerang || (couldHave.bomb_bag || player.bombchus));
  locationCouldAccess.spirit_childClimb1 = (player.current_spirit_keys >= 1 && ((couldHave.projectile_child && couldHave.spirit_temple_child_access) || (couldHave.projectile_adult && couldHave.silver_gauntlets))) || (locationCouldAccess.spirit_childLeft && locationCouldAccess.spirit_childRight && locationCouldAccess.spirit_adultLeft && locationCouldAccess.spirit_adultRight) && (rules.smallKeys != "keyRings" || couldHave.spirit_key_ring);
  locationCouldAccess.spirit_childClimb2 = (player.current_spirit_keys >= 1 && ((couldHave.projectile_child && couldHave.spirit_temple_child_access) || (couldHave.projectile_adult && couldHave.silver_gauntlets))) || (locationCouldAccess.spirit_childLeft && locationCouldAccess.spirit_childRight && locationCouldAccess.spirit_adultLeft && locationCouldAccess.spirit_adultRight) && (rules.smallKeys != "keyRings" || couldHave.spirit_key_ring);
  locationCouldAccess.spirit_map = (player.current_spirit_keys >= 1 && ((couldHave.spirit_temple_child_access && (couldHave.bomb_bag || player.bombchus)) || (((couldHave.can_use_fire || couldHave.bow) && couldHave.silver_gauntlets)))) || (locationCouldAccess.spirit_childLeft && locationCouldAccess.spirit_childRight && locationCouldAccess.spirit_adultLeft && locationCouldAccess.spirit_adultRight && (rules.smallKeys != "keyRings" || couldHave.spirit_key_ring));
  locationCouldAccess.spirit_sunRoom = (player.current_spirit_keys >= 1 && ((couldHave.spirit_temple_child_access && (couldHave.bomb_bag || player.bombchus)) || (((couldHave.can_use_fire || couldHave.bow) && couldHave.silver_gauntlets)))) || (locationCouldAccess.spirit_childLeft && locationCouldAccess.spirit_childRight && locationCouldAccess.spirit_adultLeft && locationCouldAccess.spirit_adultRight) && (rules.smallKeys != "keyRings" || couldHave.spirit_key_ring);
  locationCouldAccess.spirit_rightHand = player.current_spirit_keys >= 2 && ((couldHave.can_push_spirit_silver_block && couldHave.projectile_adult) || (couldHave.spirit_temple_child_access && (couldHave.bomb_bag || player.bombchus))) && (rules.smallKeys != "keyRings" || couldHave.spirit_key_ring);
  locationCouldAccess.spirit_adultLeft = couldHave.can_push_spirit_silver_block && couldHave.hookshot && couldHave.lullaby;
  locationCouldAccess.spirit_adultRight = couldHave.can_push_spirit_silver_block && (couldHave.bow || couldHave.hookshot || (couldHave.bomb_bag || player.bombchus));
  locationCouldAccess.spirit_rotatingMirror1 = couldHave.can_push_spirit_silver_block && (player.current_spirit_keys >= 1) || (locationCouldAccess.spirit_childLeft && locationCouldAccess.spirit_childRight && locationCouldAccess.spirit_adultLeft && locationCouldAccess.spirit_adultRight) && (rules.smallKeys != "keyRings" || couldHave.spirit_key_ring);
  locationCouldAccess.spirit_rotatingMirror2 = couldHave.can_push_spirit_silver_block && (player.current_spirit_keys >= 1) || (locationCouldAccess.spirit_childLeft && locationCouldAccess.spirit_childRight && locationCouldAccess.spirit_adultLeft && locationCouldAccess.spirit_adultRight) && (rules.smallKeys != "keyRings" || couldHave.spirit_key_ring);
  locationCouldAccess.spirit_lullabyHand = couldHave.can_push_spirit_silver_block && (player.current_spirit_keys >= 1 || (locationCouldAccess.spirit_childLeft && locationCouldAccess.spirit_childRight && locationCouldAccess.spirit_adultLeft && locationCouldAccess.spirit_adultRight)) && couldHave.lullaby && (rules.smallKeys != "keyRings" || couldHave.spirit_key_ring);
  locationCouldAccess.spirit_lullabyHigh = couldHave.can_push_spirit_silver_block && (player.current_spirit_keys >= 1 || (locationCouldAccess.spirit_childLeft && locationCouldAccess.spirit_childRight && locationCouldAccess.spirit_adultLeft && locationCouldAccess.spirit_adultRight)) && couldHave.lullaby && (rules.smallKeys != "keyRings" || couldHave.spirit_key_ring);
  locationCouldAccess.spirit_nearFourArmos = couldHave.can_push_spirit_silver_block && player.current_spirit_keys >= 2 && (couldHave.bomb_bag || player.bombchus) && couldHave.mirror_shield && (rules.smallKeys != "keyRings" || couldHave.spirit_key_ring);
  locationCouldAccess.spirit_invisible1 = couldHave.can_push_spirit_silver_block && player.current_spirit_keys >= 2 && (couldHave.bomb_bag || player.bombchus) && (rules.smallKeys != "keyRings" || couldHave.spirit_key_ring); //&& couldHave.can_see;
  locationCouldAccess.spirit_invisible2 = couldHave.can_push_spirit_silver_block && player.current_spirit_keys >= 2 && (couldHave.bomb_bag || player.bombchus) && (rules.smallKeys != "keyRings" || couldHave.spirit_key_ring); //&& couldHave.can_see;
  locationCouldAccess.spirit_leftHand = couldHave.can_push_spirit_silver_block && player.current_spirit_keys >= 2 && (couldHave.bomb_bag || player.bombchus) && (rules.smallKeys != "keyRings" || couldHave.spirit_key_ring);
  locationCouldAccess.spirit_bossKey = couldHave.can_push_spirit_silver_block && player.current_spirit_keys >= 3 && couldHave.lullaby && (rules.smallKeys != "keyRings" || couldHave.spirit_key_ring);
  locationCouldAccess.spirit_tippyTop = couldHave.can_push_spirit_silver_block && player.current_spirit_keys >= 3 && couldHave.mirror_shield && (rules.smallKeys != "keyRings" || couldHave.spirit_key_ring);
  locationCouldAccess.spirit_twinrova = couldHave.can_push_spirit_silver_block && player.current_spirit_keys >= 3 && couldHave.mirror_shield && (couldHave.bomb_bag || player.bombchus) && player.spirit_boss_key && couldHave.hookshot && (rules.smallKeys != "keyRings" || couldHave.spirit_key_ring);
  locationCouldAccess.shadow_map = couldHave.shadow_temple_adult_access && (couldHave.hover_boots || couldHave.hookshot);
  locationCouldAccess.shadow_hovers = couldHave.shadow_temple_adult_access && (couldHave.hover_boots || couldHave.hookshot);
  locationCouldAccess.shadow_compass = couldHave.can_cross_shadow_gap;
  locationCouldAccess.shadow_earlySilvers = couldHave.can_cross_shadow_gap;
  locationCouldAccess.shadow_spinning1 = couldHave.can_bomb_shadow_wall;
  locationCouldAccess.shadow_spinning2 = couldHave.can_bomb_shadow_wall;
  locationCouldAccess.shadow_spikesLower = couldHave.can_bomb_shadow_wall;
  locationCouldAccess.shadow_spikesUpper = couldHave.can_bomb_shadow_wall;
  locationCouldAccess.shadow_spikesSwitch = couldHave.can_bomb_shadow_wall;
  locationCouldAccess.shadow_redeadSilvers = couldHave.can_bomb_shadow_wall;
  locationCouldAccess.shadow_pot = couldHave.can_bomb_shadow_wall && couldHave.hookshot;
  locationCouldAccess.shadow_wind = couldHave.can_pass_shadow_hookshot_door;
  locationCouldAccess.shadow_bombable = couldHave.can_pass_shadow_hookshot_door;
  locationCouldAccess.shadow_gibdos = couldHave.can_pass_shadow_hookshot_door;
  locationCouldAccess.shadow_dins1 = couldHave.can_ride_shadow_boat && couldHave.can_use_dins;
  locationCouldAccess.shadow_dins2 = couldHave.can_ride_shadow_boat && couldHave.can_use_dins;
  locationCouldAccess.shadow_floormaster = couldHave.can_ride_shadow_boat;
  locationCouldAccess.shadow_bongo = couldHave.can_beat_shadow_boss;

  locationCouldAccess.ganons_spiritTrial2 = couldHave.can_enter_ganons && (couldHave.bomb_bag || player.bombchus || couldHave.bow);//&& couldHave.can_see;

  Object.assign(locationPeek, locationAccess);
  Object.assign(locationCouldPeek, locationCouldAccess);

  for (let i = 0, Peek = locationPeek, Has = player; i < 2; i++) {
    Peek.hyrule_tektite_grotto = Has.can_blast_or_smash;
    Peek.hylia_bottle = true;
    Peek.hylia_sun_shoot = Has.bow;
    Peek.crater_bean = Has.bolero || Has.crater_top || Spawn.child_upper_dmc || Spawn.child_lower_dmc || Spawn.child_dmt_fairy || Spawn.child_lower_dmc_fairy || Spawn.adult_lower_dmc || Spawn.adult_lower_dmc_fairy || Spawn.adult_upper_dmc || Spawn.adult_lower_dmc_fairy;
    Peek.crater_nook_hp = Has.crater_top || Has.bolero || Spawn.child_upper_dmc || Spawn.child_lower_dmc || Spawn.child_dmt_fairy || Spawn.child_lower_dmc_fairy || Spawn.adult_lower_dmc || Spawn.adult_lower_dmc_fairy || Spawn.adult_upper_dmc || Spawn.adult_lower_dmc_fairy;
    Peek.colossus_fairy = Has.can_enter_colossus && (Has.bomb_bag || player.bombchus) && Has.lullaby;
    Peek.colossus_bean = Has.can_enter_colossus;
    Peek.tokens_20 = logic.gold_skulltulas >= 20 || Has.tokens >= 20 || rules.preset == "sgl2025";
    Peek.tokens_30 = logic.gold_skulltulas >= 30 || Has.tokens >= 30 || rules.preset == "S8" || rules.preset == "sgl2025" || rules.preset == "truth" || rules.preset == "leagueS9" || rules.preset == "s9";
    Peek.tokens_40 = logic.gold_skulltulas >= 40 || Has.tokens >= 40 || rules.preset == "S7" || rules.preset == "S8" || rules.preset == "truth" || rules.preset == "leagueS9" || rules.preset == "s9";
    Peek.tokens_50 = logic.gold_skulltulas >= 50 || Has.tokens >= 50 || rules.preset == "S7" || rules.preset == "S8" || rules.preset == "truth" || rules.preset == "leagueS9" || rules.preset == "s9";
    Peek.graveyard_box = true;//Has.bean_access || Has.longshot || Has.boomerang;
    Peek.bottom_of_fountain = Has.ice_entrance_access;
    Peek.kakariko_hag = true;
    Peek.goron_medigoron = (Has.can_blast_or_smash || Has.goron_bracelet);
    Peek.wasteland_carpet = (Has.can_cross_quicksand || Has.requiem);

    Peek.h_deku_left = true;
    Peek.h_deku_right = true;
    Peek.h_near_lw = true;
    Peek.h_kokiri_storms = Has.storms;
    Peek.h_hyrule_remoteGrotto = Has.can_blast_or_smash;
    Peek.h_hyrule_openGrotto = true;
    Peek.h_hyrule_marketGrotto = Has.can_blast_or_smash;
    Peek.h_hyrule_web = (Has.hammer && Has.can_use_fire) || ((Has.bomb_bag || player.bombchus) && Has.can_use_dins)
    Peek.h_valley = true;
    Peek.h_lab = true;
    Peek.h_back_right_lake = true;
    Peek.h_back_left_lake = true;
    Peek.h_tot_1 = true;
    Peek.h_tot_2 = true;
    Peek.h_tot_3 = true;
    Peek.h_tot_4 = true;
    Peek.h_castle_1 = true;
    Peek.h_castle_2 = true;
    Peek.h_castle_sos = Has.storms && (Has.bomb_bag || player.bombchus);
    Peek.h_fountain_fairy = Has.ice_entrance_access || Has.jabu_entrance_access;
    Peek.h_fountain = Has.ice_entrance_access || Has.jabu_entrance_access;
    Peek.h_lw_bridge = true;
    Peek.h_lw_generic = Has.can_blast_or_smash;
    Peek.h_saria = true;
    Peek.h_sfm_1 = true;
    Peek.h_sfm_2 = true;
    Peek.h_goron_maze = Has.can_blast_or_smash;
    Peek.h_medigoron = Has.can_blast_or_smash;
    Peek.h_dodongos = Has.can_break_dodongos_wall;
    Peek.h_trail_storms = Has.storms;
    Peek.h_biggoron = Has.crater_top;
    Peek.h_crater_grotto = Has.can_blast_or_smash;
    Peek.h_crater_wall = Has.bomb_bag || player.bombchus;
    Peek.h_kakariko_grotto = true;
    Peek.h_nocturne = Has.nocturne;
    Peek.h_river_grotto = true;
    Peek.h_river_pillar = true;
    Peek.h_river_domain = true;
    Peek.h_domain = Has.lullaby || Has.hover_boots || Has.child_can_enter_domain;
    Peek.h_crater_grotto = Has.can_blast_or_smash;
    Peek.h_colossus = Has.requiem || Has.eponas || Has.longshot;
    Peek.gs_kokiri_adult = Has.hookshot || Has.hover_boots || Has.bow || player.bombchus || Has.bomb_bag || Has.can_use_dins;
    Peek.gs_lost_woods_above_stage = Has.bean_access || player.bombchus || Has.bow || Has.longshot || Has.can_use_dins;
    Peek.gs_sacred_forest = Has.hookshot || player.bombchus || Has.bomb_bag || Has.bow || Has.can_use_dins;
    Peek.gs_outside_kakariko = ((Has.boomerang || Has.slingshot || Has.can_use_dins) && (Has.bomb_bag || player.bombchus)) || (Has.can_blast_or_smash && (Has.hookshot || Has.bow || Has.can_use_dins)) || player.bombchus || Has.bomb_bag;
    Peek.gs_near_gerudo = (Has.hammer && (Has.can_use_fire || player.bombchus || Has.bow)) || ((Has.bomb_bag || player.bombchus) && (Has.can_use_dins || Has.slingshot || player.bombchus));
    Peek.gs_hyrule_castle_grotto = Has.storms && (Has.boomerang || player.bombchus || Has.slingshot || Has.can_use_dins || Has.bomb_bag);
    Peek.gs_lon_lon_window = Has.boomerang || player.bombchus || Has.slingshot;
    Peek.gs_lon_lon_back_wall = Has.boomerang || player.bombchus || Has.slingshot || Has.can_use_dins || Has.bomb_bag;
    Peek.gs_kakariko_impas = Has.hookshot || Spawn.adult_kak_roof || Has.hover_boots || player.bombchus;
    Peek.gs_graveyard_wall = Has.boomerang || player.bombchus || Has.slingshot || Has.can_use_dins || Has.bomb_bag;
    Peek.gs_river_near_grotto = Has.hookshot || player.bombchus || Has.bow || Has.can_use_dins || Has.bomb_bag;
    Peek.gs_river_above_bridge = Has.hookshot || player.bombchus || Has.bow;
    Peek.gs_fountain_above_log = Has.jabu_entrance_access && (Has.boomerang || player.bombchus || Has.slingshot || Has.can_use_dins || Has.bomb_bag);
    Peek.gs_fountain_hidden_cave = Has.ice_entrance_access && Has.silver_gauntlets && (Has.hookshot || player.bombchus || Has.bow || Has.can_use_dins || Has.bomb_bag) && Has.can_blast_or_smash;
    Peek.gs_hylia_tree = Has.longshot || player.bombchus;
    Peek.gs_valley_small_bridge = true;
    Peek.gs_valley_tent = Has.fortress_access && (Has.hookshot || player.bombchus || Has.bow || Has.can_use_dins || Has.bomb_bag);
    Peek.gs_valley_pillar = Has.fortress_access && (Has.hookshot || player.bombchus || Has.bow);
    Peek.gs_fortress_archery = Has.fortress_access && (Has.hookshot || player.bombchus || Has.bow);
    Peek.gs_wasteland = (Has.hookshot || player.bombchus || Has.bow || Has.can_use_dins || Has.bomb_bag) && (Has.can_cross_quicksand || Has.can_enter_colossus);
    Peek.gs_colossus_tree = (Has.hookshot || player.bombchus || Has.bow || Has.can_use_dins || Has.bomb_bag) && Has.can_enter_colossus;
    Peek.gs_colossus_hill = (Has.requiem && Has.bean_access) || ((Has.hookshot || player.bombchus || Has.bow) && Has.can_enter_colossus);
    Peek.gs_deku_basement_back = Has.deku_access && (Has.bomb_bag || player.bombchus);
    Peek.gs_dodongos_above_stairs = Has.dodongos_climb && (Has.hookshot || Has.boomerang || player.bombchus || Has.slingshot || Has.bow || Has.dins_fire || Has.bomb_bag);
    Peek.gs_jabu_near_octo_1 = Has.can_hit_jabu_switch && (Has.boomerang || Has.slingshot);
    Peek.gs_jabu_near_octo_2 = Has.can_hit_jabu_switch && (Has.boomerang || Has.slingshot);
    Peek.gs_forest_outdoor_west = Has.forest_temple_adult_access && (Has.hookshot || Has.bow || (Has.time && player.bombchus));
    Peek.gs_water_central = Has.middle_water && (Has.longshot || (Has.can_use_farores && Has.hookshot) || player.bombchus || Has.bow);
    Peek.gs_spirit_before_child_knuckle = Has.spirit_temple_access && ((Has.bomb_bag || player.bombchus) && (Has.boomerang || Has.slingshot || player.bombchus) && player.current_spirit_keys >= 1 && Has.spirit_temple_child_access) || ((Has.hookshot || Has.bow || player.bombchus || Has.can_use_dins) && Has.silver_gauntlets && player.current_spirit_keys >= 1);
    Peek.gs_spirit_boulder_room = Has.can_push_spirit_silver_block && (Has.bow || Has.hookshot || player.bombchus);
    Peek.gs_spirit_lobby = Has.spirit_temple_access && (Has.can_push_spirit_silver_block && player.current_spirit_keys >= 1 && (Has.hookshot || Has.hover_boots || Has.bow)) || ((Has.bomb_bag || player.bombchus) && Has.slingshot && player.current_spirit_keys >= 1 && Has.spirit_temple_child_access);
    Peek.gs_shadow_crusher = Has.can_bomb_shadow_wall;
    Peek.gs_shadow_near_boat = Has.can_pass_shadow_hookshot_door && (Has.longshot || Has.bow || player.bombchus) && player.current_shadow_keys >= 4;
    Peek.gs_well_west_inner = Has.botw_child_access && player.current_well_keys >= 1;
    Peek.gs_well_east_inner = Has.botw_child_access && player.current_well_keys >= 1;
    Peek.gs_ice_spinning_scythe = Has.ice_access && (Has.hookshot || Has.bow || player.bombchus || Has.bomb_bag || Has.can_use_dins);
    Peek.gs_ice_hp_room = Has.ice_access && (Has.can_use_bottle || Has.can_shoot_blue_fire_arrows) && (Has.hookshot || Has.bow || player.bombchus || Has.bomb_bag || Has.can_use_dins);
    Peek.gs_ice_block_room = Has.ice_access && (Has.can_use_bottle || Has.can_shoot_blue_fire_arrows) && (Has.hookshot || Has.bow || player.bombchus || Has.bomb_bag || Has.can_use_dins);

    if (rules.csmc == "on") {
      Peek.goron_maze_1 = true;
      Peek.goron_maze_2 = true;
      Peek.goron_maze_3 = true;
      Peek.trail_bombable = true;
      Peek.gerudo_hammer = Has.fortress_access;
      Peek.gerudo_roof = Has.fortress_access;
      Peek.dodongos_end_of_bridge = Has.can_break_dodongos_wall;
      Peek.forest_midCourtyard = Has.forest_temple_access && ((Has.time || (Has.forest_temple_adult_access && (Has.bow || ((Has.hover_boots || Has.goron_bracelet) && player.current_forest_keys >= 1)) || (Has.goron_bracelet && (Has.bow || Has.can_use_dins) && player.current_forest_keys >= 5))));
      Peek.forest_blockRoom = Has.forest_temple_access && player.current_forest_keys >= 1 && ((Has.forest_temple_adult_access && Has.bow) || (Has.forest_temple_child_access && Has.slingshot));
      Peek.fire_hammer2 = Has.fire_temple_access;
      Peek.fire_upperMaze = Has.can_climb_fire_temple;
      Peek.fire_shortcut = Has.can_climb_fire_temple;
      Peek.water_cracked = Has.can_do_water_checks;
      Peek.water_block = Has.water_temple_adult_access;
      Peek.water_river = Has.can_do_water_checks && player.current_water_keys >= 2 && Has.time && Has.hookshot;
      Peek.spirit_adultLeft = Has.can_push_spirit_silver_block && Has.lullaby && (Has.bow || Has.hookshot || Has.bomb_bag || player.bombchus);
      Peek.spirit_rightHand = Has.can_enter_colossus;
      Peek.shadow_dins1 = Has.can_ride_shadow_boat && player.current_shadow_keys >= 4;
      Peek.shadow_dins2 = Has.can_ride_shadow_boat && player.current_shadow_keys >= 4;
      Peek.ganons_shadowTrial1 = Has.can_enter_ganons;
      Peek.gtg_aboveEyes = Has.gtg_access;//&& Has.can_see;
      Peek.gtg_freestanding = Has.gtg_access && (player.current_gtg_keys >= 2 || (Has.bomb_bag || player.bombchus) || (Has.can_climb_gtg_hole /*&& Has.can_see*/));
      Peek.gtg_right2 = Has.gtg_access;
      Peek.gtg_right3 = Has.gtg_access;
      Peek.gtg_left1 = Has.gtg_access && (player.current_gtg_keys >= 1 || (Has.gtg_adult_access && Has.can_climb_gtg_hole && Has.bow));
      Peek.gtg_left2 = Has.gtg_access;
      Peek.gtg_left3 = Has.gtg_access;
      Peek.gtg_left4 = Has.gtg_access;
      Peek.gtg_final = Has.gtg_access;
      Peek.well_backBombable = Has.botw_child_access;
      Peek.well_waterLeft = Has.botw_child_access;
      Peek.well_frontBombable = Has.botw_child_access;
      Peek.well_waterFront = Has.botw_child_access;
      Peek.well_locked2 = Has.botw_child_access;//&& Has.can_see ;
      Peek.well_basement = Has.botw_child_access;
    }

    Peek = locationCouldPeek;
    Has = couldHave;
  }
}
