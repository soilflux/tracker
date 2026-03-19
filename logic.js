function refreshLogicForStuff() {
  logic.kokiri_sword = checkLogic[itemToCheckMap.kokiri_sword] || false;
  logic.farores = checkLogic[itemToCheckMap.farores] || false;

  logic.sling1 = checkLogic[itemToCheckMap.sling1] || false;
  logic.sling2 = checkLogic[itemToCheckMap.sling2] || false;
  logic.sling3 = checkLogic[itemToCheckMap.sling3] || false;
  logic.sling = logic.sling1 || logic.sling2 || logic.sling3;

  logic.boomerang = checkLogic[itemToCheckMap.boomerang] || false;

  logic.rutos_letter = checkLogic[itemToCheckMap.rutos_letter] || false;
  logic.bottle1 = checkLogic[itemToCheckMap.bottle1] || false;
  logic.bottle2 = checkLogic[itemToCheckMap.bottle2] || false;
  logic.bottle3 = checkLogic[itemToCheckMap.bottle3] || false;
  logic.bottle4 = checkLogic[itemToCheckMap.bottle4] || false;
  logic.bottle = (logic.rutos_letter && logic.child_can_enter_domain) || logic.bottle1 || logic.bottle2 || logic.bottle3 || logic.bottle4;

  logic.scale1 = checkLogic[itemToCheckMap.scale1] || false;
  logic.scale2 = checkLogic[itemToCheckMap.scale2] || false;
  logic.silver_scale = logic.scale1 || logic.scale2;
  logic.golden_scale = logic.scale1 && logic.scale2;

  logic.bombs1 = checkLogic[itemToCheckMap.bombs1] || false;
  logic.bombs2 = checkLogic[itemToCheckMap.bombs2] || false;
  logic.bombs3 = checkLogic[itemToCheckMap.bombs3] || false;
  logic.bombs = logic.bombs1 || logic.bombs2 || logic.bombs3;

  logic.chus1 = checkLogic[itemToCheckMap.chus1] || false;
  logic.chus2 = checkLogic[itemToCheckMap.chus2] || false;
  logic.chus3 = checkLogic[itemToCheckMap.chus3] || false;
  logic.chus4 = checkLogic[itemToCheckMap.chus4] || false;
  logic.chus5 = checkLogic[itemToCheckMap.chus5] || false;
  logic.chus = logic.chus1 || logic.chus2 || logic.chus3 || logic.chus4 || logic.chus5;

  logic.hammer = checkLogic[itemToCheckMap.hammer] || false;

  logic.bow1 = checkLogic[itemToCheckMap.bow1] || false;
  logic.bow2 = checkLogic[itemToCheckMap.bow2] || false;
  logic.bow3 = checkLogic[itemToCheckMap.bow3] || false;
  logic.bow = logic.bow1 || logic.bow2 || logic.bow3;

  logic.hookshot1 = checkLogic[itemToCheckMap.hookshot1] || false;
  logic.hookshot2 = checkLogic[itemToCheckMap.hookshot2] || false;
  logic.hookshot = logic.hookshot1 || logic.hookshot2;
  logic.longshot = logic.hookshot1 && logic.hookshot2;

  logic.strength1 = checkLogic[itemToCheckMap.strength1] || false;
  logic.strength2 = checkLogic[itemToCheckMap.strength2] || false;
  logic.strength3 = checkLogic[itemToCheckMap.strength3] || false;
  logic.goron_bracelet = logic.strength1 || logic.strength2 || logic.strength3;
  logic.silver_gauntlets = (logic.strength1 && logic.strength2) || (logic.strength1 && logic.strength3) || (logic.strength2 && logic.strength3);
  logic.golden_gauntlets = logic.strength1 && logic.strength2 && logic.strength3;

  logic.mirror = checkLogic[itemToCheckMap.mirror] || false;
  logic.big_poe = checkLogic[itemToCheckMap.big_poe] || false;
  logic.irons = checkLogic[itemToCheckMap.irons] || false;
  logic.hovers = checkLogic[itemToCheckMap.hovers] || false;

  logic.magic1 = checkLogic[itemToCheckMap.magic1] || false;
  logic.magic2 = checkLogic[itemToCheckMap.magic2] || false;
  logic.magic = logic.magic1 || logic.magic2;

  logic.dins = checkLogic[itemToCheckMap.dins] || false;
  logic.fire_arrows = checkLogic[itemToCheckMap.fire_arrows] || false;

  logic.wallet1 = checkLogic[itemToCheckMap.wallet1] || false;
  logic.wallet2 = checkLogic[itemToCheckMap.wallet2] || false;
  logic.wallet3 = checkLogic[itemToCheckMap.wallet3] || false;
  logic.adults_wallet = logic.wallet1 || logic.wallet2 || logic.wallet3;
  logic.giants_wallet = (logic.wallet1 && logic.wallet2) || (logic.wallet1 && logic.wallet3) || (logic.wallet2 && logic.wallet3);
  logic.tycoon_wallet = logic.wallet1 && logic.wallet2 && logic.wallet3;

  logic.goron_tunic = checkLogic[itemToCheckMap.goron_tunic] || false;
  logic.zora_tunic = checkLogic[itemToCheckMap.zora_tunic] || false;
  logic.lens = checkLogic[itemToCheckMap.lens] || false;
  logic.stone_of_agony = checkLogic[itemToCheckMap.stone_of_agony] || false;
  logic.prescription = checkLogic[itemToCheckMap.prescription] || false;
  logic.claim_check = checkLogic[itemToCheckMap.claim_check] || false;
  logic.trade = logic.claim_check || logic.prescription;

  logic.light_arrows = checkLogic[itemToCheckMap.light_arrows] || false;
  logic.ice_arrows = checkLogic[itemToCheckMap.ice_arrows] || false;
  logic.forest_key_ring = checkLogic[itemToCheckMap.forest_key_ring] || false;
  logic.fire_key_ring = checkLogic[itemToCheckMap.fire_key_ring] || false;
  logic.water_key_ring = checkLogic[itemToCheckMap.water_key_ring] || false;
  logic.spirit_key_ring = checkLogic[itemToCheckMap.spirit_key_ring] || false;
  logic.shadow_key_ring = checkLogic[itemToCheckMap.shadow_key_ring] || false;
  logic.well_key_ring = checkLogic[itemToCheckMap.well_key_ring] || false;
  logic.gtg_key_ring = checkLogic[itemToCheckMap.gtg_key_ring] || false;
  logic.ganons_key_ring = checkLogic[itemToCheckMap.ganons_key_ring] || false;
  logic.gerudo_card = checkLogic[itemToCheckMap.gerudo_card] || false;
  logic.magic_bean_pack = checkLogic[itemToCheckMap.magic_bean_pack] || false;

  logic.lullaby = checkLogic[itemToCheckMap.lullaby] || false;
  logic.eponas = checkLogic[itemToCheckMap.eponas] || false;
  logic.sarias = checkLogic[itemToCheckMap.sarias] || false;
  logic.suns = checkLogic[itemToCheckMap.suns] || false;
  logic.time = checkLogic[itemToCheckMap.time] || false;
  logic.storms = checkLogic[itemToCheckMap.storms] || false;
  logic.minuet = checkLogic[itemToCheckMap.minuet] || false;
  logic.bolero = checkLogic[itemToCheckMap.bolero] || false;
  logic.serenade = checkLogic[itemToCheckMap.serenade] || false;
  logic.requiem = checkLogic[itemToCheckMap.requiem] || false;
  logic.nocturne = checkLogic[itemToCheckMap.nocturne] || false;
  logic.prelude = checkLogic[itemToCheckMap.prelude] || false;



  player.bombs = false;
  if (player.bombs1 || player.bombs2 || player.bombs3) { player.bombs = true; }

  player.chus = false;
  if (player.chus1 || player.chus2 || player.chus3 || player.chus4 || player.chus5) { player.chus = true; }

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

  player.sling = false;
  if (player.sling1 || player.sling2 || player.sling3) { player.sling = true; }

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

  player.magic = false;
  if (player.magic1 || player.magic2) { player.magic = true; }

  player.double_magic = false;
  if (player.magic1 && player.magic2) { player.double_magic = true; }


  for (var q = 0; q < 30; q++) {
    for (var i = 0; i < Items.length; i++) {
      if (checkCouldAccess[itemToCheckMap[Items[i]]] || player[Items[i]])
        couldHave[Items[i]] = true;
      else
        couldHave[Items[i]] = false;
    }

    if (checkCouldAccess[itemToCheckMap["big_poe"]] || player["big_poe"])
      couldHave["big_poe"] = true;
    else
      couldHave["big_poe"] = false;
  }

  couldHave.bombs = false;
  if (couldHave.bombs1 || couldHave.bombs2 || couldHave.bombs3) { couldHave.bombs = true; }

  couldHave.chus = false;
  if (couldHave.chus1 || couldHave.chus2 || couldHave.chus3 || couldHave.chus4 || couldHave.chus5) { couldHave.chus = true; }

  couldHave.bow = false;
  if (couldHave.bow1 || couldHave.bow2 || couldHave.bow3) { couldHave.bow = true; }

  couldHave.trade = false;
  if (couldHave.prescription || couldHave.claim_check) { couldHave.trade = true; }

  couldHave.hookshot = false;
  if (couldHave.hookshot1 || couldHave.hookshot2) { couldHave.hookshot = true; }

  couldHave.longshot = false;
  if (couldHave.hookshot1 && couldHave.hookshot2) { couldHave.longshot = true; }

  couldHave.sling = false;
  if (couldHave.sling1 || couldHave.sling2 || couldHave.sling3) { couldHave.sling = true; }

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
  if (player.forest_boss_key == true) { logic.forest_boss_key = checkLogic[itemToCheckMap.forest_boss_key]; couldHave.forest_boss_key = true; }
  if (player.fire_boss_key == true) { logic.fire_boss_key = checkLogic[itemToCheckMap.fire_boss_key]; couldHave.fire_boss_key = true; }
  if (player.water_boss_key == true) { logic.water_boss_key = checkLogic[itemToCheckMap.water_boss_key]; couldHave.water_boss_key = true; }
  if (player.spirit_boss_key == true) { logic.spirit_boss_key = checkLogic[itemToCheckMap.spirit_boss_key]; couldHave.spirit_boss_key = true; }
  if (player.shadow_boss_key == true) { logic.shadow_boss_key = checkLogic[itemToCheckMap.shadow_boss_key]; couldHave.shadow_boss_key = true; }

  if (nerfed) {
    logic.bombs = false;
    if (player.bombs1 || player.bombs2 || player.bombs3 || couldHave.bombs1 || couldHave.bombs2 || couldHave.bombs3) { logic.bombs = true; }

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

    logic.sling = false;
    if (player.sling1 || player.sling2 || player.sling3 || couldHave.sling1 || couldHave.sling2 || couldHave.sling3) { logic.sling = true; }

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

    logic.kokiri_sword = player.kokiri_sword || couldHave.kokiri_sword;
    logic.farores = player.farores || couldHave.farores;
    logic.boomerang = player.boomerang || couldHave.boomerang;
    logic.rutos_letter = player.rutos_letter || couldHave.rutos_letter;
    logic.hammer = player.hammer || couldHave.hammer;
    logic.mirror = player.mirror || couldHave.mirror;
    logic.big_poe = player.big_poe || couldHave.big_poe;
    logic.irons = player.irons || couldHave.irons;
    logic.hovers = player.hovers || couldHave.hovers;
    logic.dins = player.dins || couldHave.dins;
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

  player.forestMedallion = false;
  couldHave.forestMedallion = false;
  checkAccess.forest_medallion_location = false;
  if (logic.forest_medallion_location == "deku") { if (checkToItemMap.deku_queen_gohma != "unknown") { player.forestMedallion = true; } logic.forest_medallion = checkLogic.deku_queen_gohma; checkAccess.forest_medallion_location = checkAccess.deku_queen_gohma; couldHave.forestMedallion = checkCouldAccess.deku_queen_gohma; }
  else if (logic.forest_medallion_location == "dodongos") { if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.forestMedallion = true; } logic.forest_medallion = checkLogic.dodongos_king_dodongo; checkAccess.forest_medallion_location = checkAccess.dodongos_king_dodongo; couldHave.forestMedallion = checkCouldAccess.dodongos_king_dodongo; }
  else if (logic.forest_medallion_location == "jabu") { if (checkToItemMap.jabu_barinade != "unknown") { player.forestMedallion = true; } logic.forest_medallion = checkLogic.jabu_barinade; checkAccess.forest_medallion_location = checkAccess.jabu_barinade; couldHave.forestMedallion = checkCouldAccess.jabu_barinade; }
  else if (logic.forest_medallion_location == "forest") { if (checkToItemMap.forest_phantomGanon != "unknown") { player.forestMedallion = true; } logic.forest_medallion = checkLogic.forest_phantomGanon; checkAccess.forest_medallion_location = checkAccess.forest_phantomGanon; couldHave.forestMedallion = checkCouldAccess.forest_phantomGanon; }
  else if (logic.forest_medallion_location == "fire") { if (checkToItemMap.fire_volvagia != "unknown") { player.forestMedallion = true; } logic.forest_medallion = checkLogic.fire_volvagia; checkAccess.forest_medallion_location = checkAccess.fire_volvagia; couldHave.forestMedallion = checkCouldAccess.fire_volvagia; }
  else if (logic.forest_medallion_location == "water") { if (checkToItemMap.water_morpha != "unknown") { player.forestMedallion = true; } logic.forest_medallion = checkLogic.water_morpha; checkAccess.forest_medallion_location = checkAccess.water_morpha; couldHave.forestMedallion = checkCouldAccess.water_morpha; }
  else if (logic.forest_medallion_location == "spirit") { if (checkToItemMap.spirit_twinrova != "unknown") { player.forestMedallion = true; } logic.forest_medallion = checkLogic.spirit_twinrova; checkAccess.forest_medallion_location = checkAccess.spirit_twinrova; couldHave.forestMedallion = checkCouldAccess.spirit_twinrova; }
  else if (logic.forest_medallion_location == "shadow") { if (checkToItemMap.shadow_bongo != "unknown") { player.forestMedallion = true; } logic.forest_medallion = checkLogic.shadow_bongo; checkAccess.forest_medallion_location = checkAccess.shadow_bongo; couldHave.forestMedallion = checkCouldAccess.shadow_bongo; }
  else if (logic.forest_medallion_location == "pocket") { player.forestMedallion = true; logic.forest_medallion = true; checkAccess.forest_medallion_location = true; couldHave.forestMedallion = true; }
  else { logic.forest_medallion_location == "unknown"; logic.forest_medallion = false; }

  player.fireMedallion = false;
  couldHave.fireMedallion = false;
  checkAccess.fire_medallion_location = false;
  if (logic.fire_medallion_location == "deku") { if (checkToItemMap.deku_queen_gohma != "unknown") { player.fireMedallion = true; } logic.fire_medallion = checkLogic.deku_queen_gohma; checkAccess.fire_medallion_location = checkAccess.deku_queen_gohma; couldHave.fireMedallion = checkCouldAccess.deku_queen_gohma; }
  else if (logic.fire_medallion_location == "dodongos") { if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.fireMedallion = true; } logic.fire_medallion = checkLogic.dodongos_king_dodongo; checkAccess.fire_medallion_location = checkAccess.dodongos_king_dodongo; couldHave.fireMedallion = checkCouldAccess.dodongos_king_dodongo; }
  else if (logic.fire_medallion_location == "jabu") { if (checkToItemMap.jabu_barinade != "unknown") { player.fireMedallion = true; } logic.fire_medallion = checkLogic.jabu_barinade; checkAccess.fire_medallion_location = checkAccess.jabu_barinade; couldHave.fireMedallion = checkCouldAccess.jabu_barinade; }
  else if (logic.fire_medallion_location == "forest") { if (checkToItemMap.forest_phantomGanon != "unknown") { player.fireMedallion = true; } logic.fire_medallion = checkLogic.forest_phantomGanon; checkAccess.fire_medallion_location = checkAccess.forest_phantomGanon; couldHave.fireMedallion = checkCouldAccess.forest_phantomGanon; }
  else if (logic.fire_medallion_location == "fire") { if (checkToItemMap.fire_volvagia != "unknown") { player.fireMedallion = true; } logic.fire_medallion = checkLogic.fire_volvagia; checkAccess.fire_medallion_location = checkAccess.fire_volvagia; couldHave.fireMedallion = checkCouldAccess.fire_volvagia; }
  else if (logic.fire_medallion_location == "water") { if (checkToItemMap.water_morpha != "unknown") { player.fireMedallion = true; } logic.fire_medallion = checkLogic.water_morpha; checkAccess.fire_medallion_location = checkAccess.water_morpha; couldHave.fireMedallion = checkCouldAccess.water_morpha; }
  else if (logic.fire_medallion_location == "spirit") { if (checkToItemMap.spirit_twinrova != "unknown") { player.fireMedallion = true; } logic.fire_medallion = checkLogic.spirit_twinrova; checkAccess.fire_medallion_location = checkAccess.spirit_twinrova; couldHave.fireMedallion = checkCouldAccess.spirit_twinrova; }
  else if (logic.fire_medallion_location == "shadow") { if (checkToItemMap.shadow_bongo != "unknown") { player.fireMedallion = true; } logic.fire_medallion = checkLogic.shadow_bongo; checkAccess.fire_medallion_location = checkAccess.shadow_bongo; couldHave.fireMedallion = checkCouldAccess.shadow_bongo; }
  else if (logic.fire_medallion_location == "pocket") { player.fireMedallion = true; logic.fire_medallion = true; checkAccess.fire_medallion_location = true; couldHave.fireMedallion = true; }
  else { logic.fire_medallion_location == "unknown"; logic.fire_medallion = false; }

  player.waterMedallion = false;
  couldHave.waterMedallion = false;
  checkAccess.water_medallion_location = false;
  if (logic.water_medallion_location == "deku") { if (checkToItemMap.deku_queen_gohma != "unknown") { player.waterMedallion = true; } logic.water_medallion = checkLogic.deku_queen_gohma; checkAccess.water_medallion_location = checkAccess.deku_queen_gohma; couldHave.waterMedallion = checkCouldAccess.deku_queen_gohma; }
  else if (logic.water_medallion_location == "dodongos") { if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.waterMedallion = true; } logic.water_medallion = checkLogic.dodongos_king_dodongo; checkAccess.water_medallion_location = checkAccess.dodongos_king_dodongo; couldHave.waterMedallion = checkCouldAccess.dodongos_king_dodongo; }
  else if (logic.water_medallion_location == "jabu") { if (checkToItemMap.jabu_barinade != "unknown") { player.waterMedallion = true; } logic.water_medallion = checkLogic.jabu_barinade; checkAccess.water_medallion_location = checkAccess.jabu_barinade; couldHave.waterMedallion = checkCouldAccess.jabu_barinade; }
  else if (logic.water_medallion_location == "forest") { if (checkToItemMap.forest_phantomGanon != "unknown") { player.waterMedallion = true; } logic.water_medallion = checkLogic.forest_phantomGanon; checkAccess.water_medallion_location = checkAccess.forest_phantomGanon; couldHave.waterMedallion = checkCouldAccess.forest_phantomGanon; }
  else if (logic.water_medallion_location == "fire") { if (checkToItemMap.fire_volvagia != "unknown") { player.waterMedallion = true; } logic.water_medallion = checkLogic.fire_volvagia; checkAccess.water_medallion_location = checkAccess.fire_volvagia; couldHave.waterMedallion = checkCouldAccess.fire_volvagia; }
  else if (logic.water_medallion_location == "water") { if (checkToItemMap.water_morpha != "unknown") { player.waterMedallion = true; } logic.water_medallion = checkLogic.water_morpha; checkAccess.water_medallion_location = checkAccess.water_morpha; couldHave.waterMedallion = checkCouldAccess.water_morpha; }
  else if (logic.water_medallion_location == "spirit") { if (checkToItemMap.spirit_twinrova != "unknown") { player.waterMedallion = true; } logic.water_medallion = checkLogic.spirit_twinrova; checkAccess.water_medallion_location = checkAccess.spirit_twinrova; couldHave.waterMedallion = checkCouldAccess.spirit_twinrova; }
  else if (logic.water_medallion_location == "shadow") { if (checkToItemMap.shadow_bongo != "unknown") { player.waterMedallion = true; } logic.water_medallion = checkLogic.shadow_bongo; checkAccess.water_medallion_location = checkAccess.shadow_bongo; couldHave.waterMedallion = checkCouldAccess.shadow_bongo; }
  else if (logic.water_medallion_location == "pocket") { player.waterMedallion = true; logic.water_medallion = true; checkAccess.water_medallion_location = true; couldHave.waterMedallion = true; }
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
  checkAccess.shadow_medallion_location = false;
  checkAccess.spirit_medallion_location = false;
  checkAccess.light_medallion_location = false;
  for (var i = 1; i <= 3; i++) {
    str = "generic" + i;
    str2 = "gen" + i;
    player[str2] = false;
    if (logic[str] == "deku") { if (checkToItemMap.deku_queen_gohma != "unknown") { player[str2] = true; } logic[str2] = checkLogic.deku_queen_gohma; if (document.getElementById("text_" + dekuPlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(dekuPlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = checkLogic.deku_queen_gohma; couldHave.shadow_medallion = checkCouldAccess.deku_queen_gohma; checkAccess.shadow_medallion_location = checkAccess.deku_queen_gohma; if (checkToItemMap.deku_queen_gohma != "unknown") { player.shadow_medallion = true; }; } else if (document.getElementById("text_" + dekuPlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(dekuPlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = checkLogic.deku_queen_gohma; couldHave.spirit_medallion = checkCouldAccess.deku_queen_gohma; checkAccess.spirit_medallion_location = checkAccess.deku_queen_gohma; if (checkToItemMap.deku_queen_gohma != "unknown") { player.spirit_medallion = true; }; } else { logic.light_medallion = checkLogic.deku_queen_gohma; if (checkToItemMap.deku_queen_gohma != "unknown") { player.light_medallion = true; }; couldHave.light_medallion = checkCouldAccess.deku_queen_gohma; checkAccess.light_medallion_location = player[checkToItemMap["deku_queen_gohma"]]; } }
    else if (logic[str] == "dodongos") { if (checkToItemMap.dodongos_king_dodongo != "unknown") { player[str2] = true; } logic[str2] = checkLogic.dodongos_king_dodongo; if (document.getElementById("text_" + dodongosPlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(dodongosPlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = checkLogic.dodongos_king_dodongo; couldHave.shadow_medallion = checkCouldAccess.dodongos_king_dodongo; checkAccess.shadow_medallion_location = checkAccess.dodongos_king_dodongo; if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.shadow_medallion = true; }; } else if (document.getElementById("text_" + dodongosPlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(dodongosPlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = checkLogic.dodongos_king_dodongo; couldHave.spirit_medallion = checkCouldAccess.dodongos_king_dodongo; checkAccess.spirit_medallion_location = checkAccess.dodongos_king_dodongo; if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.spirit_medallion = true; }; } else { logic.light_medallion = checkLogic.dodongos_king_dodongo; if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.light_medallion = true; }; couldHave.light_medallion = checkCouldAccess.dodongos_king_dodongo; checkAccess.light_medallion_location = player[checkToItemMap["dodongos_king_dodongo"]]; } }
    else if (logic[str] == "jabu") { if (checkToItemMap.jabu_barinade != "unknown") { player[str2] = true; } logic[str2] = checkLogic.jabu_barinade; if (document.getElementById("text_" + jabuPlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(jabuPlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = checkLogic.jabu_barinade; couldHave.shadow_medallion = checkCouldAccess.jabu_barinade; checkAccess.shadow_medallion_location = checkAccess.jabu_barinade; if (checkToItemMap.jabu_barinade != "unknown") { player.shadow_medallion = true; }; } else if (document.getElementById("text_" + jabuPlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(jabuPlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = checkLogic.jabu_barinade; couldHave.spirit_medallion = checkCouldAccess.jabu_barinade; checkAccess.spirit_medallion_location = checkAccess.jabu_barinade; if (checkToItemMap.jabu_barinade != "unknown") { player.spirit_medallion = true; }; } else { logic.light_medallion = checkLogic.jabu_barinade; if (checkToItemMap.jabu_barinade != "unknown") { player.light_medallion = true; }; couldHave.light_medallion = checkCouldAccess.jabu_barinade; checkAccess.light_medallion_location = player[checkToItemMap["jabu_barinade"]]; } }
    else if (logic[str] == "forest") { if (checkToItemMap.forest_phantomGanon != "unknown") { player[str2] = true; } logic[str2] = checkLogic.forest_phantomGanon; if (document.getElementById("text_" + forestPlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(forestPlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = checkLogic.forest_phantomGanon; couldHave.shadow_medallion = checkCouldAccess.forest_phantomGanon; checkAccess.shadow_medallion_location = checkAccess.forest_phantomGanon; if (checkToItemMap.forest_phantomGanon != "unknown") { player.shadow_medallion = true; }; } else if (document.getElementById("text_" + forestPlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(forestPlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = checkLogic.forest_phantomGanon; couldHave.spirit_medallion = checkCouldAccess.forest_phantomGanon; checkAccess.spirit_medallion_location = checkAccess.forest_phantomGanon; if (checkToItemMap.forest_phantomGanon != "unknown") { player.spirit_medallion = true; }; } else { logic.light_medallion = checkLogic.forest_phantomGanon; if (checkToItemMap.forest_phantomGanon != "unknown") { player.light_medallion = true; }; couldHave.light_medallion = checkCouldAccess.forest_phantomGanon; checkAccess.light_medallion_location = player[checkToItemMap["forest_phantomGanon"]]; } }
    else if (logic[str] == "fire") { if (checkToItemMap.fire_volvagia != "unknown") { player[str2] = true; } logic[str2] = checkLogic.fire_volvagia; if (document.getElementById("text_" + firePlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(firePlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = checkLogic.fire_volvagia; couldHave.shadow_medallion = checkCouldAccess.fire_volvagia; checkAccess.shadow_medallion_location = checkAccess.fire_volvagia; if (checkToItemMap.fire_volvagia != "unknown") { player.shadow_medallion = true; }; } else if (document.getElementById("text_" + firePlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(firePlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = checkLogic.fire_volvagia; couldHave.spirit_medallion = checkCouldAccess.fire_volvagia; checkAccess.spirit_medallion_location = checkAccess.fire_volvagia; if (checkToItemMap.fire_volvagia != "unknown") { player.spirit_medallion = true; }; } else { logic.light_medallion = checkLogic.fire_volvagia; if (checkToItemMap.fire_volvagia != "unknown") { player.light_medallion = true; }; couldHave.light_medallion = checkCouldAccess.fire_volvagia; checkAccess.light_medallion_location = player[checkToItemMap["fire_volvagia"]]; } }
    else if (logic[str] == "water") { if (checkToItemMap.water_morpha != "unknown") { player[str2] = true; } logic[str2] = checkLogic.water_morpha; if (document.getElementById("text_" + waterPlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(waterPlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = checkLogic.water_morpha; couldHave.shadow_medallion = checkCouldAccess.water_morpha; checkAccess.shadow_medallion_location = checkAccess.water_morpha; if (checkToItemMap.water_morpha != "unknown") { player.shadow_medallion = true; }; } else if (document.getElementById("text_" + waterPlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(waterPlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = checkLogic.water_morpha; couldHave.spirit_medallion = checkCouldAccess.water_morpha; checkAccess.spirit_medallion_location = checkAccess.water_morpha; if (checkToItemMap.water_morpha != "unknown") { player.spirit_medallion = true; }; } else { logic.light_medallion = checkLogic.water_morpha; if (checkToItemMap.water_morpha != "unknown") { player.light_medallion = true; }; couldHave.light_medallion = checkCouldAccess.water_morpha; checkAccess.light_medallion_location = player[checkToItemMap["water_morpha"]]; } }
    else if (logic[str] == "spirit") { if (checkToItemMap.spirit_twinrova != "unknown") { player[str2] = true; } logic[str2] = checkLogic.spirit_twinrova; if (document.getElementById("text_" + spiritPlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(spiritPlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = checkLogic.spirit_twinrova; couldHave.shadow_medallion = checkCouldAccess.spirit_twinrova; checkAccess.shadow_medallion_location = checkAccess.spirit_twinrova; if (checkToItemMap.spirit_twinrova != "unknown") { player.shadow_medallion = true; }; } else if (document.getElementById("text_" + spiritPlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(spiritPlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = checkLogic.spirit_twinrova; couldHave.spirit_medallion = checkCouldAccess.spirit_twinrova; checkAccess.spirit_medallion_location = checkAccess.spirit_twinrova; if (checkToItemMap.spirit_twinrova != "unknown") { player.spirit_medallion = true; }; } else { logic.light_medallion = checkLogic.spirit_twinrova; if (checkToItemMap.spirit_twinrova != "unknown") { player.light_medallion = true; }; couldHave.light_medallion = checkCouldAccess.spirit_twinrova; checkAccess.light_medallion_location = player[checkToItemMap["spirit_twinrova"]]; } }
    else if (logic[str] == "shadow") { if (checkToItemMap.shadow_bongo != "unknown") { player[str2] = true; } logic[str2] = checkLogic.shadow_bongo; if (document.getElementById("text_" + shadowPlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(shadowPlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = checkLogic.shadow_bongo; couldHave.shadow_medallion = checkCouldAccess.shadow_bongo; checkAccess.shadow_medallion_location = checkAccess.shadow_bongo; if (checkToItemMap.shadow_bongo != "unknown") { player.shadow_medallion = true; }; } else if (document.getElementById("text_" + shadowPlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(shadowPlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = checkLogic.shadow_bongo; couldHave.spirit_medallion = checkCouldAccess.shadow_bongo; checkAccess.spirit_medallion_location = checkAccess.shadow_bongo; if (checkToItemMap.shadow_bongo != "unknown") { player.spirit_medallion = true; }; } else { logic.light_medallion = checkLogic.shadow_bongo; if (checkToItemMap.shadow_bongo != "unknown") { player.light_medallion = true; }; couldHave.light_medallion = checkCouldAccess.shadow_bongo; checkAccess.light_medallion_location = player[checkToItemMap["shadow_bongo"]]; } }
    else if (logic[str] == "pocket") { player[str2] = true; logic[str2] = true; if (document.getElementById("text_" + pocketPlacement).style.color == "rgb(238, 130, 238)") { document.getElementById(pocketPlacement + "_icon").src = dungIconSources[6]; logic.shadow_medallion = true; couldHave.shadow_medallion = true; checkAccess.shadow_medallion_location = true; player.shadow_medallion = true; } else if (document.getElementById("text_" + pocketPlacement).style.color == "rgb(255, 165, 0)") { document.getElementById(pocketPlacement + "_icon").src = dungIconSources[7]; logic.spirit_medallion = true; couldHave.spirit_medallion = true; checkAccess.spirit_medallion_location = true; player.spirit_medallion = true; } else { logic.light_medallion = true; player.light_medallion = true; couldHave.light_medallion = true; checkAccess.light_medallion_location = true; } }
    else { logic[str2] = false; }
  }

  player.emerald = false;
  couldHave.emerald = false;
  checkAccess.emerald_location = false;
  if (logic.emerald == "deku") { if (checkToItemMap.deku_queen_gohma != "unknown") { player.emerald = true; } logic.kokiri_emerald = checkLogic.deku_queen_gohma; checkAccess.emerald_location = checkAccess.deku_queen_gohma; couldHave.emerald = checkCouldAccess.deku_queen_gohma; }
  if (logic.emerald == "dodongos") { if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.emerald = true; } logic.kokiri_emerald = checkLogic.dodongos_king_dodongo; checkAccess.emerald_location = checkAccess.dodongos_king_dodongo; couldHave.emerald = checkCouldAccess.dodongos_king_dodongo; }
  if (logic.emerald == "jabu") { if (checkToItemMap.jabu_barinade != "unknown") { player.emerald = true; } logic.kokiri_emerald = checkLogic.jabu_barinade; checkAccess.emerald_location = checkAccess.jabu_barinade; couldHave.emerald = checkCouldAccess.jabu_barinade; }
  if (logic.emerald == "forest") { if (checkToItemMap.forest_phantomGanon != "unknown") { player.emerald = true; } logic.kokiri_emerald = checkLogic.forest_phantomGanon; checkAccess.emerald_location = checkAccess.forest_phantomGanon; couldHave.emerald = checkCouldAccess.forest_phantomGanon; }
  if (logic.emerald == "fire") { if (checkToItemMap.fire_volvagia != "unknown") { player.emerald = true; } logic.kokiri_emerald = checkLogic.fire_volvagia; checkAccess.emerald_location = checkAccess.fire_volvagia; couldHave.emerald = checkCouldAccess.fire_volvagia; }
  if (logic.emerald == "water") { if (checkToItemMap.water_morpha != "unknown") { player.emerald = true; } logic.kokiri_emerald = checkLogic.water_morpha; checkAccess.emerald_location = checkAccess.water_morpha; couldHave.emerald = checkCouldAccess.water_morpha; }
  if (logic.emerald == "spirit") { if (checkToItemMap.spirit_twinrova != "unknown") { player.emerald = true; } logic.kokiri_emerald = checkLogic.spirit_twinrova; checkAccess.emerald_location = checkAccess.spirit_twinrova; couldHave.emerald = checkCouldAccess.spirit_twinrova; }
  if (logic.emerald == "shadow") { if (checkToItemMap.shadow_bongo != "unknown") { player.emerald = true; } logic.kokiri_emerald = checkLogic.shadow_bongo; checkAccess.emerald_location = checkAccess.shadow_bongo; couldHave.emerald = checkCouldAccess.shadow_bongo; }
  if (logic.emerald == "pocket") { player.emerald = true; logic.kokiri_emerald = true; checkAccess.emerald_location = true; couldHave.emerald = true; }

  player.ruby = false;
  couldHave.ruby = false;
  checkAccess.ruby_location = false;
  if (logic.ruby == "deku") { if (checkToItemMap.deku_queen_gohma != "unknown") { player.ruby = true; } logic.goron_ruby = checkLogic.deku_queen_gohma; checkAccess.ruby_location = checkAccess.deku_queen_gohma; couldHave.ruby = checkCouldAccess.deku_queen_gohma; }
  if (logic.ruby == "dodongos") { if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.ruby = true; } logic.goron_ruby = checkLogic.dodongos_king_dodongo; checkAccess.ruby_location = checkAccess.dodongos_king_dodongo; couldHave.ruby = checkCouldAccess.dodongos_king_dodongo; }
  if (logic.ruby == "jabu") { if (checkToItemMap.jabu_barinade != "unknown") { player.ruby = true; } logic.goron_ruby = checkLogic.jabu_barinade; checkAccess.ruby_location = checkAccess.jabu_barinade; couldHave.ruby = checkCouldAccess.jabu_barinade; }
  if (logic.ruby == "forest") { if (checkToItemMap.forest_phantomGanon != "unknown") { player.ruby = true; } logic.goron_ruby = checkLogic.forest_phantomGanon; checkAccess.ruby_location = checkAccess.forest_phantomGanon; couldHave.ruby = checkCouldAccess.forest_phantomGanon; }
  if (logic.ruby == "fire") { if (checkToItemMap.fire_volvagia != "unknown") { player.ruby = true; } logic.goron_ruby = checkLogic.fire_volvagia; checkAccess.ruby_location = checkAccess.fire_volvagia; couldHave.ruby = checkCouldAccess.fire_volvagia; }
  if (logic.ruby == "water") { if (checkToItemMap.water_morpha != "unknown") { player.ruby = true; } logic.goron_ruby = checkLogic.water_morpha; checkAccess.ruby_location = checkAccess.water_morpha; couldHave.ruby = checkCouldAccess.water_morpha; }
  if (logic.ruby == "spirit") { if (checkToItemMap.spirit_twinrova != "unknown") { player.ruby = true; } logic.goron_ruby = checkLogic.spirit_twinrova; checkAccess.ruby_location = checkAccess.spirit_twinrova; couldHave.ruby = checkCouldAccess.spirit_twinrova; }
  if (logic.ruby == "shadow") { if (checkToItemMap.shadow_bongo != "unknown") { player.ruby = true; } logic.goron_ruby = checkLogic.shadow_bongo; checkAccess.ruby_location = checkAccess.shadow_bongo; couldHave.ruby = checkCouldAccess.shadow_bongo; }
  if (logic.ruby == "pocket") { player.ruby = true; logic.goron_ruby = true; checkAccess.ruby_location = true; couldHave.ruby = true; }

  player.sapphire = false;
  couldHave.sapphire = false;
  checkAccess.sapphire_location = false;
  if (logic.sapphire == "deku") { if (checkToItemMap.deku_queen_gohma != "unknown") { player.sapphire = true; } logic.zora_sapphire = checkLogic.deku_queen_gohma; checkAccess.sapphire_location = checkAccess.deku_queen_gohma; couldHave.sapphire = checkCouldAccess.deku_queen_gohma; }
  if (logic.sapphire == "dodongos") { if (checkToItemMap.dodongos_king_dodongo != "unknown") { player.sapphire = true; } logic.zora_sapphire = checkLogic.dodongos_king_dodongo; checkAccess.sapphire_location = checkAccess.dodongos_king_dodongo; couldHave.sapphire = checkCouldAccess.dodongos_king_dodongo; }
  if (logic.sapphire == "jabu") { if (checkToItemMap.jabu_barinade != "unknown") { player.sapphire = true; } logic.zora_sapphire = checkLogic.jabu_barinade; checkAccess.sapphire_location = checkAccess.jabu_barinade; couldHave.sapphire = checkCouldAccess.jabu_barinade; }
  if (logic.sapphire == "forest") { if (checkToItemMap.forest_phantomGanon != "unknown") { player.sapphire = true; } logic.zora_sapphire = checkLogic.forest_phantomGanon; checkAccess.sapphire_location = checkAccess.forest_phantomGanon; couldHave.sapphire = checkCouldAccess.forest_phantomGanon; }
  if (logic.sapphire == "fire") { if (checkToItemMap.fire_volvagia != "unknown") { player.sapphire = true; } logic.zora_sapphire = checkLogic.fire_volvagia; checkAccess.sapphire_location = checkAccess.fire_volvagia; couldHave.sapphire = checkCouldAccess.fire_volvagia; }
  if (logic.sapphire == "water") { if (checkToItemMap.water_morpha != "unknown") { player.sapphire = true; } logic.zora_sapphire = checkLogic.water_morpha; checkAccess.sapphire_location = checkAccess.water_morpha; couldHave.sapphire = checkCouldAccess.water_morpha; }
  if (logic.sapphire == "spirit") { if (checkToItemMap.spirit_twinrova != "unknown") { player.sapphire = true; } logic.zora_sapphire = checkLogic.spirit_twinrova; checkAccess.sapphire_location = checkAccess.spirit_twinrova; couldHave.sapphire = checkCouldAccess.spirit_twinrova; }
  if (logic.sapphire == "shadow") { if (checkToItemMap.shadow_bongo != "unknown") { player.sapphire = true; } logic.zora_sapphire = checkLogic.shadow_bongo; checkAccess.sapphire_location = checkAccess.shadow_bongo; couldHave.sapphire = checkCouldAccess.shadow_bongo; }
  if (logic.sapphire == "pocket") { player.sapphire = true; logic.zora_sapphire = true; checkAccess.sapphire_location = true; couldHave.sapphire = true; }


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
        if (checkToItemMap[loc] === "small_key" && checkLogic[loc]) {
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

        if (!checkLogic[loc] && (checkToItemMap[loc] === "boss_key" || checkToItemMap[loc] === "unknown")) {
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
        condition: () => (logic.can_wear_goron_tunic && logic.hammer && logic.hovers) ||
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
        condition: () => (logic.longshot && logic.irons) ||
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

              if (!checkLogic[loc] && (isKey || isSpecialBK)) {
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
        loc !== "ganons_lightTrialLullaby" && !checkLogic[loc] && (checkToItemMap[loc] === "small_key" || checkToItemMap[loc] === "unknown")
      );
      logic.min_ganons_keys = needsKeys ? 0 : 2;
    }
    if (logic.can_enter_ganons && logic.golden_gauntlets) logic.min_ganons_keys = 1;
    logic.ganons_keys = Math.max(logic.min_ganons_keys, logic.current_ganons_keys);

    if (logic.current_well_keys < 3) {
      const needsKeys = areaToCheckMap["Well"].some(loc =>
        !["well_locked1", "well_locked2"].includes(loc) && !loc.includes("gs_") &&
        !checkLogic[loc] && (checkToItemMap[loc] === "small_key" || checkToItemMap[loc] === "unknown")
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
  logic.child_can_enter_river = logic.bombs || logic.silver_scale || Spawn.child_zd || Spawn.child_zr;
  logic.bean_access = ((logic.child_can_enter_river && rules.beans == "vanilla") || (logic.magic_bean_pack && rules.beans == "shuffled") || (rules.preplantBeans == "on"));
  logic.child_can_enter_domain = (logic.child_can_enter_river && logic.lullaby) || logic.silver_scale || Spawn.child_zd;
  logic.jabu_entrance_access = ((logic.rutos_letter || rules.fountain == "open") && logic.child_can_enter_domain) || Spawn.child_zf;
  logic.can_hit_jabu_switch = logic.jabu_access && logic.bombs || ((logic.boomerang || logic.sling) && logic.jabu_child_access) || ((logic.hookshot || logic.bow) && logic.jabu_adult_access);
  logic.fortress_access = logic.eponas || logic.longshot || Spawn.adult_gf || Spawn.adult_wasteland || (Spawn.child_gv_gf && logic.kokiri_sword);
  logic.can_save_carpenters = (Spawn.child_gv_gf && logic.kokiri_sword) || logic.fortress_access
  logic.gtg_entrance_access = (logic.can_save_carpenters && rules.gerudoCard == "vanilla") || (logic.fortress_access && logic.gerudo_card && rules.gerudoCard == "shuffled");
  logic.can_cross_quicksand = logic.fortress_access && (logic.longshot || logic.hovers) && (rules.gerudoCard == "vanilla" || logic.gerudo_card || Spawn.adult_wasteland);
  logic.can_enter_colossus = (logic.can_cross_quicksand && (logic.brackets || logic.can_see)) || logic.requiem || Spawn.child_colossus || Spawn.adult_colossus || checkLogic.spirit_leftHand || checkLogic.spirit_rightHand;
  logic.can_enter_child_colossus = logic.requiem || Spawn.child_colossus || checkLogic.spirit_rightHand;
  logic.fireMedallion = (logic.dins || (logic.bow && logic.fire_arrows)) && logic.magic;
  logic.can_use_dins = logic.dins && logic.magic;
  logic.can_shoot_blue_fire_arrows = logic.ice_arrows && logic.bow && logic.magic && rules.blueFireArrows == "on";
  logic.can_use_farores = logic.farores && logic.magic;
  logic.can_see = logic.lens && logic.magic;
  logic.can_blast_or_smash = logic.bombs || logic.hammer;
  logic.can_enter_child_dodongos = logic.bombs || logic.goron_bracelet;
  logic.can_break_dodongos_wall = logic.dodongos_access && (logic.goron_bracelet || logic.bombs || (logic.dodongos_adult_access && logic.hammer));
  logic.dodongos_climb = logic.can_break_dodongos_wall && (logic.bombs || logic.goron_bracelet || logic.can_use_dins);
  logic.can_enter_shadow_entrance = (logic.nocturne || Spawn.adult_nocturne) && logic.can_use_dins;
  logic.can_cross_shadow_gap = logic.shadow_temple_adult_access && logic.hovers;
  logic.can_bomb_shadow_wall = logic.can_cross_shadow_gap && logic.bombs && (rules.smallKeys != "keyRings" || couldHave.shadow_key_ring);
  logic.can_pass_shadow_hookshot_door = logic.can_bomb_shadow_wall && logic.hookshot;
  logic.can_ride_shadow_boat = logic.can_pass_shadow_hookshot_door && logic.lullaby;
  logic.can_beat_shadow_boss = logic.can_ride_shadow_boat && (logic.bow || logic.longshot);
  logic.can_stop_link_the_goron = logic.bombs || logic.bow || logic.goron_bracelet;
  logic.can_enter_adult_domain = logic.lullaby || Spawn.adult_zd;
  logic.ice_entrance_access = (logic.can_enter_adult_domain && ((logic.rutos_letter && logic.child_can_enter_domain) || rules.fountain == "open")) || Spawn.adult_zf;
  logic.reverse_crater = (logic.hovers || logic.hookshot || logic.child_can_enter_river) && logic.bolero;
  logic.can_enter_fire_temple_entrance = (logic.crater_by_city && (logic.hookshot || logic.hovers)) || logic.bolero;
  logic.crater_by_city = logic.bow || logic.bombs || logic.goron_bracelet || logic.reverse_crater || ((logic.hammer || Spawn.adult_upper_dmc) && logic.hovers) || (logic.longshot && logic.goron_tunic && (logic.hammer || Spawn.adult_upper_dmc)) || Spawn.adult_lower_dmc;
  logic.crater_top = logic.crater_by_city || logic.hammer || Spawn.adult_upper_dmc;
  logic.can_push_spirit_silver_block = logic.spirit_temple_adult_access && logic.silver_gauntlets;
  logic.can_pass_mido_as_adult = logic.minuet || logic.sarias || Spawn.adult_meadow;
  logic.can_enter_forest_temple_entrance = logic.can_pass_mido_as_adult && logic.hookshot;
  logic.can_enter_well_entrance = logic.storms;

  logic.medalCount = 0; if (logic.forest_medallion) { logic.medalCount += 1; } if (logic.fire_medallion) { logic.medalCount += 1; } if (logic.water_medallion) { logic.medalCount += 1; } if (logic.shadow_medallion) { logic.medalCount += 1; } if (logic.spirit_medallion) { logic.medalCount += 1; } if (logic.light_medallion) { logic.medalCount += 1; }
  logic.stoneCount = 0; if (logic.kokiri_emerald) { logic.stoneCount += 1; } if (logic.goron_ruby) { logic.stoneCount += 1; } if (logic.zora_sapphire) { logic.stoneCount += 1; }
  logic.rewardCount = logic.medalCount + logic.stoneCount;
  logic.can_enter_ganons = (logic.medalCount == 6 && rules.bridge == "allMeds") || rules.bridge == "open" || (rules.bridge == "fiveMedals" && logic.medalCount >= 5) || (rules.bridge == "fourMedals" && logic.medalCount >= 4) || (rules.bridge == "threeMedals" && logic.medalCount >= 3) || (rules.bridge == "twoMedals" && logic.medalCount >= 2) || (rules.bridge == "threeStones" && logic.stoneCount == 3) || (rules.bridge == "1Reward" && logic.rewardCount >= 1) || (rules.bridge == "twoRewards" && logic.rewardCount >= 2) || (rules.bridge == "threeRewards" && logic.rewardCount >= 3) || (rules.bridge == "fourRewards" && logic.rewardCount >= 4) || (rules.bridge == "fiveRewards" && logic.rewardCount >= 5) || (rules.bridge == "sixRewards" && logic.rewardCount >= 6) || (rules.bridge == "sevenRewards" && logic.rewardCount >= 7) || (rules.bridge == "eightRewards" && logic.rewardCount >= 8) || (rules.bridge == "nineRewards" && logic.rewardCount >= 9) || (rules.bridge == "vanilla" && logic.spirit_medallion && logic.shadow_medallion && logic.light_arrows);

  logic.can_climb_fire_temple = logic.fire_temple_adult_access && logic.fire_keys >= 3 && logic.can_wear_goron_tunic && logic.goron_bracelet && (logic.bow || logic.hookshot || logic.bombs);
  logic.can_enter_water_entrance = (logic.hookshot && logic.irons) || (logic.longshot && logic.golden_scale);
  logic.can_do_water_checks = logic.water_temple_adult_access && logic.irons;
  logic.middle_water = logic.can_do_water_checks && logic.lullaby && (logic.bow || logic.can_use_dins);
  logic.projectile_both = logic.bombs || ((logic.sling || logic.boomerang) && (logic.bow || logic.hookshot));
  logic.projectile_child = logic.bombs || logic.sling || logic.boomerang;
  logic.projectile_adult = logic.bombs || logic.bow || logic.hookshot;
  logic.can_wear_goron_tunic = logic.goron_tunic || (logic.adults_wallet && (logic.bombs || logic.goron_bracelet || logic.bow || Spawn.adult_gc_shop));
  logic.can_wear_zora_tunic = logic.zora_tunic || (logic.giants_wallet && (((logic.lullaby || Spawn.adult_zd) && logic.bottle) || Spawn.adult_zd_shop));
  logic.child_can_get_past_mido = rules.deku == "open" || logic.kokiri_sword;
  logic.can_enter_deku_entrance = logic.child_can_get_past_mido;

  player.child_can_enter_river = player.bombs || player.chus || player.silver_scale || Spawn.child_zd || Spawn.child_zr;
  player.child_can_enter_domain = player.silver_scale || Spawn.child_zd || Spawn.child_zr || player.bombs || player.chus;
  player.bean_access = ((player.child_can_enter_river && rules.beans == "vanilla") || (player.magic_bean_pack && rules.beans == "shuffled") || (rules.preplantBeans == "on"));

  player.fortress_access = player.eponas || player.longshot || player.requiem || Spawn.adult_gf || Spawn.adult_wasteland || (rules.valleyWithHook == "allowed" && player.hookshot);
  player.can_save_carpenters = Spawn.child_gv_gf || player.fortress_access
  player.gtg_entrance_access = (player.can_save_carpenters && rules.gerudoCard == "vanilla") || (player.fortress_access && player.gerudo_card && rules.gerudoCard == "shuffled");
  player.can_cross_quicksand = player.fortress_access && (rules.gerudoCard == "vanilla" || player.gerudo_card);
  player.can_enter_colossus = (player.can_cross_quicksand) || player.requiem || Spawn.child_colossus || Spawn.adult_colossus || Spawn.adult_wasteland || Spawn.child_wasteland || checkAccess.spirit_leftHand || checkAccess.spirit_rightHand;
  player.can_enter_child_colossus = player.requiem || Spawn.child_colossus || Spawn.child_wasteland || checkAccess.spirit_rightHand;
  player.can_use_fire_arrows = player.fire_arrows && player.magic && player.bow;
  player.fireMedallion = (player.dins || (player.bow && player.fire_arrows)) && player.magic;
  player.can_use_dins = player.dins && player.magic;
  player.can_shoot_blue_fire_arrows = player.ice_arrows && player.bow && player.magic && rules.blueFireArrows == "on";
  player.can_use_farores = player.farores && player.magic;
  player.can_use_bottle = (player.bottle1 || player.bottle2 || player.bottle3 || player.bottle4 || (player.rutos_letter && player.child_can_enter_river));
  player.can_see = player.lens && player.magic;
  player.can_use_explosives = player.bombs || player.chus;
  player.can_blast_or_smash = player.bombs || player.hammer || player.chus;
  player.can_enter_child_dodongos = player.bombs || player.goron_bracelet || player.chus;
  player.can_stop_link_the_goron = player.bombs || player.bow || player.goron_bracelet || player.chus;
  player.can_enter_adult_domain = player.lullaby || player.hovers || Spawn.adult_zd;
  player.ice_entrance_access = (player.can_enter_adult_domain && ((player.rutos_letter && player.child_can_enter_domain) || rules.fountain == "open" || rules.kzSkip)) || Spawn.adult_zf;
  player.reverse_crater = (player.hovers || player.hookshot || player.child_can_enter_river) && player.bolero;
  player.crater_by_city = player.can_stop_link_the_goron || player.reverse_crater || player.hammer || (player.longshot && player.hammer) || Spawn.adult_lower_dmc;
  player.crater_top = player.crater_by_city || player.hammer || Spawn.adult_upper_dmc;
  player.can_enter_fire_temple_entrance = (player.crater_by_city && (player.hookshot || player.hovers)) || player.bolero;
  player.can_enter_forest_temple_entrance = player.hookshot;
  player.can_enter_well_entrance = player.storms;

  player.medalCount = 0; if (player.forestMedallion) { player.medalCount += 1; } if (player.fireMedallion) { player.medalCount += 1; } if (player.waterMedallion) { player.medalCount += 1; } if (player.shadow_medallion) { player.medalCount += 1; } if (player.spirit_medallion) { player.medalCount += 1; } if (player.light_medallion) { player.medalCount += 1; }
  player.stoneCount = 0; if (player.emerald) { player.stoneCount += 1; } if (player.ruby) { player.stoneCount += 1; } if (player.sapphire) { player.stoneCount += 1; }
  player.rewardCount = player.medalCount + player.stoneCount;
  player.can_enter_ganons = (player.medalCount == 6 && rules.bridge == "allMeds") || rules.bridge == "open" || (rules.bridge == "fiveMedals" && player.medalCount >= 5) || (rules.bridge == "fourMedals" && player.medalCount >= 4) || (rules.bridge == "threeMedals" && player.medalCount >= 3) || (rules.bridge == "twoMedals" && player.medalCount >= 2) || (rules.bridge == "threeStones" && player.stoneCount == 3) || (rules.bridge == "1Reward" && player.rewardCount >= 1) || (rules.bridge == "twoRewards" && player.rewardCount >= 2) || (rules.bridge == "threeRewards" && player.rewardCount >= 3) || (rules.bridge == "fourRewards" && player.rewardCount >= 4) || (rules.bridge == "fiveRewards" && player.rewardCount >= 5) || (rules.bridge == "sixRewards" && player.rewardCount >= 6) || (rules.bridge == "sevenRewards" && player.rewardCount >= 7) || (rules.bridge == "eightRewards" && player.rewardCount >= 8) || (rules.bridge == "nineRewards" && player.rewardCount >= 9) || (rules.bridge == "vanilla" && player.spirit_medallion && player.shadow_medallion && player.light_arrows);

  player.projectile_both = player.bombs || player.chus || ((player.sling || player.boomerang) && (player.bow || player.hookshot));
  player.can_wear_goron_tunic = true;
  player.can_wear_zora_tunic = true;
  player.can_climb_gtg_hole = player.hookshot || player.hovers || player.bombs;

  player.child_can_get_past_mido = rules.deku == "open" || player.kokiri_sword;
  player.can_enter_deku_entrance = player.child_can_get_past_mido;

  couldHave.child_can_enter_river = couldHave.bombs || player.chus || couldHave.silver_scale || Spawn.child_zd || Spawn.child_zr;
  couldHave.bean_access = ((couldHave.child_can_enter_river && rules.beans == "vanilla") || (couldHave.magic_bean_pack && rules.beans == "shuffled") || (rules.preplantBeans == "on"));
  couldHave.child_can_enter_domain = couldHave.silver_scale || Spawn.child_zd || Spawn.child_zr || couldHave.bombs || player.chus;
  couldHave.jabu_entrance_access = (couldHave.child_can_enter_domain && (couldHave.rutos_letter || rules.fountain == "open")) || Spawn.child_zf;
  couldHave.can_hit_jabu_switch = couldHave.jabu_access && couldHave.bombs || player.chus || ((couldHave.boomerang || couldHave.sling) && couldHave.jabu_child_access) || ((couldHave.hookshot || couldHave.bow) && couldHave.jabu_adult_access);

  couldHave.fortress_access = couldHave.eponas || couldHave.longshot || couldHave.requiem || Spawn.adult_gf || Spawn.adult_wasteland || (rules.valleyWithHook == "allowed" && couldHave.hookshot);
  couldHave.can_save_carpenters = Spawn.child_gv_gf || (couldHave.fortress_access && ((couldHave.bow || couldHave.hookshot || couldHave.hovers) || true)) /*fast carpenter fix**/;
  couldHave.gtg_entrance_access = (couldHave.can_save_carpenters && rules.gerudoCard == "vanilla") || (couldHave.fortress_access && couldHave.gerudo_card && rules.gerudoCard == "shuffled");
  couldHave.can_cross_quicksand = couldHave.fortress_access && (rules.gerudoCard == "vanilla" || couldHave.gerudo_card);
  couldHave.can_enter_colossus = (couldHave.can_cross_quicksand) || couldHave.requiem || Spawn.child_colossus || Spawn.adult_colossus || Spawn.adult_wasteland || Spawn.child_wasteland || checkCouldAccess.spirit_leftHand || checkCouldAccess.spirit_rightHand;
  couldHave.can_enter_child_colossus = couldHave.requiem || Spawn.child_colossus || Spawn.child_wasteland || checkCouldAccess.spirit_rightHand;
  couldHave.fireMedallion = (couldHave.dins || (couldHave.bow && couldHave.fire_arrows)) && couldHave.magic;
  couldHave.can_use_dins = couldHave.dins && couldHave.magic;
  couldHave.can_shoot_blue_fire_arrows = couldHave.ice_arrows && couldHave.bow && couldHave.magic && rules.blueFireArrows == "on";
  couldHave.can_use_farores = couldHave.farores && couldHave.magic;
  couldHave.can_use_bottle = (couldHave.bottle1 || couldHave.bottle2 || couldHave.bottle3 || couldHave.bottle4 || (couldHave.rutos_letter && couldHave.child_can_enter_river));
  couldHave.can_see = couldHave.lens && couldHave.magic;
  couldHave.can_blast_or_smash = couldHave.bombs || couldHave.hammer || player.chus;
  couldHave.can_enter_child_dodongos = couldHave.bombs || couldHave.goron_bracelet || player.chus;
  couldHave.can_break_dodongos_wall = couldHave.dodongos_access && (couldHave.bombs || player.chus || couldHave.goron_bracelet || (couldHave.dodongos_adult_access && (couldHave.hammer || couldHave.can_shoot_blue_fire_arrows)))
  couldHave.dodongos_climb = couldHave.can_break_dodongos_wall && (couldHave.bombs || player.chus || couldHave.goron_bracelet || couldHave.can_use_dins || (player.dodongos_adult_access && couldHave.bow));
  couldHave.can_enter_shadow_entrance = (couldHave.nocturne || Spawn.adult_nocturne) && (couldHave.can_use_dins || (rules.fae == "allowed" && player.fireMedallion));//&& couldHave.can_see;
  couldHave.can_cross_shadow_gap = couldHave.shadow_temple_adult_access && couldHave.hovers;
  couldHave.can_bomb_shadow_wall = couldHave.can_cross_shadow_gap && (couldHave.bombs || player.chus) && (rules.smallKeys != "keyRings" || couldHave.shadow_key_ring);
  couldHave.can_pass_shadow_hookshot_door = couldHave.can_bomb_shadow_wall && couldHave.hookshot;
  couldHave.can_ride_shadow_boat = couldHave.can_pass_shadow_hookshot_door && couldHave.lullaby;
  couldHave.can_beat_shadow_boss = couldHave.can_ride_shadow_boat && (couldHave.bow || couldHave.longshot || player.chus || couldHave.bombs) && (rules.dungeonEr != "ganonsExcluded" || player.shadow_boss_key);
  couldHave.can_stop_link_the_goron = couldHave.bombs || couldHave.bow || couldHave.goron_bracelet || player.chus;
  couldHave.ice_entrance_access = (couldHave.can_enter_adult_domain && ((couldHave.rutos_letter && couldHave.child_can_enter_domain) || rules.fountain == "open" || rules.kzSkip)) || Spawn.adult_zf;
  couldHave.can_enter_adult_domain = couldHave.lullaby || couldHave.hovers || Spawn.adult_zd;
  couldHave.reverse_crater = (couldHave.hovers || couldHave.hookshot || couldHave.child_can_enter_river) && couldHave.bolero;
  couldHave.crater_by_city = couldHave.can_stop_link_the_goron || couldHave.reverse_crater || couldHave.hammer || (couldHave.longshot && couldHave.hammer) || Spawn.adult_lower_dmc;
  couldHave.crater_top = couldHave.crater_by_city || couldHave.hammer || Spawn.adult_upper_dmc;
  couldHave.can_enter_fire_temple_entrance = (couldHave.crater_by_city && (couldHave.hookshot || couldHave.hovers)) || couldHave.bolero;
  couldHave.can_push_spirit_silver_block = couldHave.spirit_temple_adult_access && couldHave.silver_gauntlets;
  couldHave.can_enter_forest_temple_entrance = couldHave.hookshot;
  couldHave.can_enter_well_entrance = couldHave.storms;

  couldHave.medalCount = 0; if (couldHave.forestMedallion || player.forestMedallion || checkAccess.forest_medallion_location) { couldHave.medalCount += 1; } if (couldHave.fireMedallion || player.fireMedallion || checkAccess.fire_medallion_location) { couldHave.medalCount += 1; } if (couldHave.waterMedallion || player.waterMedallion || checkAccess.water_medallion_location) { couldHave.medalCount += 1; } if (player.shadow_medallion || couldHave.shadow_medallion || checkAccess.shadow_medallion_location) { couldHave.medalCount += 1; } if (player.spirit_medallion || couldHave.spirit_medallion || checkAccess.spirit_medallion_location) { couldHave.medalCount += 1; } if (player.light_medallion || couldHave.light_medallion || checkPeek.light_medallion_location) { couldHave.medalCount += 1; }
  couldHave.stoneCount = 0; if (couldHave.emerald || player.emerald || checkAccess.emerald_location) { couldHave.stoneCount += 1; } if (couldHave.ruby || player.ruby || checkAccess.ruby_location) { couldHave.stoneCount += 1; } if (couldHave.sapphire || player.sapphire || checkAccess.sapphire_location) { couldHave.stoneCount += 1; }
  couldHave.rewardCount = couldHave.medalCount + couldHave.stoneCount;
  couldHave.can_enter_ganons = (couldHave.medalCount == 6 && rules.bridge == "allMeds") || rules.bridge == "open" || (rules.bridge == "fiveMedals" && couldHave.medalCount >= 5) || (rules.bridge == "fourMedals" && couldHave.medalCount >= 4) || (rules.bridge == "threeMedals" && couldHave.medalCount >= 3) || (rules.bridge == "twoMedals" && couldHave.medalCount >= 2) || (rules.bridge == "threeStones" && couldHave.stoneCount == 3) || (rules.bridge == "1Reward" && couldHave.rewardCount >= 1) || (rules.bridge == "twoRewards" && couldHave.rewardCount >= 2) || (rules.bridge == "threeRewards" && couldHave.rewardCount >= 3) || (rules.bridge == "fourRewards" && couldHave.rewardCount >= 4) || (rules.bridge == "fiveRewards" && couldHave.rewardCount >= 5) || (rules.bridge == "sixRewards" && couldHave.rewardCount >= 6) || (rules.bridge == "sevenRewards" && couldHave.rewardCount >= 7) || (rules.bridge == "eightRewards" && couldHave.rewardCount >= 8) || (rules.bridge == "nineRewards" && couldHave.rewardCount >= 9) || (rules.bridge == "vanilla" && (player.spirit_medallion || couldHave.spirit_medallion || checkAccess.spirit_medallion_location) && (player.shadow_medallion || couldHave.shadow_medallion || checkAccess.shadow_medallion_location) && couldHave.light_arrows);

  couldHave.can_climb_fire_temple = couldHave.fire_temple_adult_access && (player.current_fire_keys >= 3 || (couldHave.hammer && (couldHave.bombs || player.chus))) && (couldHave.bow || couldHave.hookshot || couldHave.bombs || player.chus) && (rules.smallKeys != "keyRings" || couldHave.fire_key_ring);
  couldHave.can_enter_water_entrance = couldHave.hookshot && (couldHave.irons || couldHave.golden_scale);
  couldHave.can_do_water_checks = couldHave.water_temple_adult_access && (couldHave.irons || couldHave.longshot);
  couldHave.middle_water = couldHave.can_do_water_checks && couldHave.lullaby && (couldHave.bow || couldHave.can_use_dins || player.current_water_keys >= 1);
  couldHave.projectile_both = couldHave.bombs || player.chus || ((couldHave.sling || couldHave.boomerang) && (couldHave.bow || couldHave.hookshot));
  couldHave.projectile_child = couldHave.bombs || player.chus || couldHave.sling || couldHave.boomerang;
  couldHave.projectile_adult = couldHave.bombs || player.chus || couldHave.bow || couldHave.hookshot;
  couldHave.can_wear_goron_tunic = true;
  couldHave.can_wear_zora_tunic = true;
  couldHave.can_climb_gtg_hole = couldHave.hookshot || couldHave.hovers || couldHave.bombs;
  couldHave.child_can_get_past_mido = rules.deku == "open" || couldHave.kokiri_sword;
  couldHave.can_enter_deku_entrance = couldHave.child_can_get_past_mido;
}
function updateCheckLogic() {
  {
    const {
      storms, can_blast_or_smash, golden_scale, irons, kokiri_emerald, goron_ruby, zora_sapphire, fortress_access, hammer, silver_scale, hookshot, bean_access, longshot, bow,
      bombs, can_see, eponas, bottle, big_poe, lullaby, golden_gauntlets, shadow_medallion, spirit_medallion, ice_entrance_access, ice_adult_access, can_shoot_blue_fire_arrows,
      ice_access, giants_wallet, deku_access, deku_child_access, sling, deku_adult_access, fire, can_pass_mido_as_adult, sarias, can_use_dins, can_stop_link_the_goron,
      goron_bracelet, adults_wallet, can_break_dodongos_wall, dodongos_climb, dodongos_adult_access, bolero, prescription, claim_check, crater_top, hovers, crater_by_city,
      gold_skulltulas, suns, child_can_enter_river, time, child_can_enter_domain, can_enter_adult_domain, requiem, can_enter_colossus, can_cross_quicksand, can_save_carpenters,
      gtg_entrance_access, can_hit_jabu_switch, boomerang, jabu_child_access, forest_temple_access, forest_temple_adult_access, forest_keys, forest_temple_child_access, forest_boss_key,
      fire_temple_access, fire_temple_adult_access, fire_key_ring, fire_keys, fire_boss_key, can_wear_goron_tunic, can_climb_fire_temple, can_do_water_checks, middle_water,
      water_temple_child_access, can_wear_zora_tunic, water_keys, water_boss_key, spirit_temple_child_access, spirit_temple_access, spirit_keys, silver_gauntlets,
      can_push_spirit_silver_block, mirror, spirit_boss_key, can_cross_shadow_gap, can_bomb_shadow_wall, shadow_keys, can_pass_shadow_hookshot_door, can_ride_shadow_boat,
      can_beat_shadow_boss, ganons_keys, fire_arrows, magic, gtg_access, gtg_adult_access, gtg_child_access, gtg_keys, botw_child_access, well_keys, chus,
      can_enter_fire_temple_entrance, forest_medallion, fire_medallion, projectile_both, water_medallion, can_enter_ganons, jabu_entrance_access, shadow_temple_adult_access
    } = logic;

    checkLogic.kokiri_mido_1 = true;
    checkLogic.kokiri_mido_2 = true;
    checkLogic.kokiri_mido_3 = true;
    checkLogic.kokiri_mido_4 = true;
    checkLogic.kokiri_sword = true;
    checkLogic.kokiri_storms = storms;
    checkLogic.talons_chickens = true;
    checkLogic.back_of_ranch = true;
    checkLogic.hyrule_remoteGrotto = can_blast_or_smash;
    checkLogic.hyrule_openGrotto = true;
    checkLogic.hyrule_hp_scrub = can_blast_or_smash;
    checkLogic.hyrule_marketGrotto = can_blast_or_smash;
    checkLogic.hyrule_tektite_grotto = can_blast_or_smash && (golden_scale || irons);
    checkLogic.hyrule_ocarina = kokiri_emerald && goron_ruby && zora_sapphire;
    checkLogic.gerudovalley_box = true;
    checkLogic.gerudovalley_fall = true;
    checkLogic.gerudo_hammer = fortress_access && hammer;
    checkLogic.hylia_child_fishing = true;
    checkLogic.hylia_bottle = silver_scale;
    checkLogic.hylia_adult_fishing = hookshot || bean_access || Spawn.adult_fishing;
    checkLogic.hylia_lab_top = hookshot || bean_access;
    checkLogic.hylia_lab_dive = golden_scale;
    checkLogic.hylia_sun_shoot = longshot && bow;
    checkLogic.market_slingshot_game = true;
    checkLogic.richard = true;
    checkLogic.market_bowling_1 = bombs || (chus && rules.chusInLogic == "on");
    checkLogic.market_bowling_2 = bombs || (chus && rules.chusInLogic == "on");
    checkLogic.market_lens_game = can_see;
    checkLogic.poes = (bow && eponas && bottle) || big_poe;
    checkLogic.dins_fairy = (bombs || Spawn.child_hyrule_fairy) && lullaby;
    checkLogic.g_fairy = (golden_gauntlets || Spawn.adult_ogc) && lullaby;
    checkLogic.lacs = shadow_medallion && spirit_medallion;
    checkLogic.fountain_fairy = ((ice_entrance_access && bombs) || Spawn.child_zf_fairy || Spawn.adult_zf_fairy || (bombs && Spawn.child_zf)) && lullaby;
    checkLogic.glacier_hp = ice_entrance_access;
    checkLogic.bottom_of_fountain = ice_entrance_access && irons;
    checkLogic.ice_map = ice_adult_access && (bottle || can_shoot_blue_fire_arrows);
    checkLogic.ice_compass = ice_access && (bottle || can_shoot_blue_fire_arrows) && (ice_adult_access || giants_wallet);
    checkLogic.ice_hp = ice_access && (bottle || can_shoot_blue_fire_arrows) && (ice_adult_access || giants_wallet);
    checkLogic.ice_irons = ice_access && (bottle || can_shoot_blue_fire_arrows) && (ice_adult_access || giants_wallet);
    checkLogic.deku_lobby = deku_access;
    checkLogic.deku_slingshot = deku_access;
    checkLogic.deku_slingshot_room_side = deku_access;
    checkLogic.deku_compass = deku_access;
    checkLogic.deku_compass_room_side = deku_access;
    checkLogic.deku_basement = deku_access;
    if (rules.preset == "sgl2025")
      checkLogic.deku_queen_gohma = deku_access;
    else
      checkLogic.deku_queen_gohma = deku_access && ((deku_child_access && sling) || (deku_adult_access && fire));
    checkLogic.lost_woods_fairy_ocarina = true;
    checkLogic.ocarina_game = true;
    checkLogic.lw_generic = can_blast_or_smash;
    checkLogic.lost_woods_scrub_grotto = bombs || (can_pass_mido_as_adult && hammer);
    checkLogic.bridge_scrub = true;
    checkLogic.target = sling;
    checkLogic.skull_kid = sarias;
    checkLogic.theater_skull = true;
    checkLogic.theater_truth = kokiri_emerald && goron_ruby && zora_sapphire && sarias;
    checkLogic.wolfos_grotto = bombs || (can_pass_mido_as_adult && hammer);
    checkLogic.rolling_goron = bombs;
    checkLogic.goron_dance = (lullaby || Spawn.child_lower_dmc) && sarias;
    checkLogic.goron_pot = bombs && (lullaby || can_use_dins || Spawn.child_lower_dmc);
    checkLogic.goron_maze_1 = can_blast_or_smash || silver_gauntlets;
    checkLogic.goron_maze_2 = can_blast_or_smash || silver_gauntlets;
    checkLogic.goron_maze_3 = hammer || silver_gauntlets;
    checkLogic.goron_link = can_stop_link_the_goron;
    checkLogic.goron_medigoron = (can_blast_or_smash || goron_bracelet) && adults_wallet;
    checkLogic.dodongos_map = can_break_dodongos_wall;
    checkLogic.dodongos_compass = can_break_dodongos_wall;
    checkLogic.dodongos_bomb_flower_platform = dodongos_climb;
    checkLogic.dodongos_bombs = dodongos_climb;
    checkLogic.dodongos_end_of_bridge = dodongos_climb && (bombs || (dodongos_adult_access && hammer));
    checkLogic.dodongos_above_king = dodongos_climb && bombs;
    checkLogic.dodongos_king_dodongo = dodongos_climb && bombs;
    checkLogic.trail_bombable = can_blast_or_smash;
    checkLogic.trail_top = true;
    checkLogic.trail_storms = storms;
    checkLogic.trail_fairy = (can_blast_or_smash || Spawn.child_dmt_fairy || Spawn.adult_dmt_fairy) && lullaby;
    checkLogic.trade_quest = ((((ice_access && bottle) || ((giants_wallet || can_enter_ganons) && (lullaby || Spawn.adult_zd) && bottle)) && prescription) || claim_check) && crater_top;
    checkLogic.crater_bean = (bolero && bean_access) || (hovers && crater_by_city);
    checkLogic.crater_hammer_fairy = ((crater_by_city && hammer) || Spawn.child_lower_dmc_fairy || Spawn.adult_lower_dmc_fairy) && lullaby;
    checkLogic.crater_grotto = can_blast_or_smash;
    checkLogic.crater_nook_hp = crater_top || Spawn.child_upper_dmc;
    checkLogic.man_on_roof = true;
    checkLogic.kakariko_grotto = true;
    checkLogic.kakariko_hag = adults_wallet;
    checkLogic.windmill = true;
    checkLogic.anju = true;
    checkLogic.kakariko_cow_house = true;
    checkLogic.archery_game = bow;
    checkLogic.redead_grotto = can_blast_or_smash;
    checkLogic.anjus_chickens = true;
    checkLogic.tokens_10 = gold_skulltulas >= 10;
    checkLogic.tokens_20 = gold_skulltulas >= 20;
    checkLogic.tokens_30 = gold_skulltulas >= 30;
    checkLogic.tokens_40 = gold_skulltulas >= 40;
    checkLogic.tokens_50 = gold_skulltulas >= 50;
    checkLogic.shield_grave = true;
    checkLogic.gravedigging_tour = true;
    checkLogic.redead_grave = suns;
    checkLogic.composers_grave = lullaby && fire;
    checkLogic.graveyard_box = bean_access || longshot;
    checkLogic.race_1 = true;
    checkLogic.race_2 = true;
    checkLogic.river_bean_salesman = child_can_enter_river;
    checkLogic.river_pillar = child_can_enter_river || hovers || rules.preplantBeans == "on";
    checkLogic.river_grotto = true;
    checkLogic.river_ledge = child_can_enter_river || hovers;
    checkLogic.frogs_1 = child_can_enter_river && storms;
    checkLogic.frogs_2 = child_can_enter_river && (storms && lullaby && eponas && sarias && suns && time);
    checkLogic.zora_diving = child_can_enter_domain;
    checkLogic.zora_torches = child_can_enter_domain;
    checkLogic.thaw_king = can_enter_adult_domain && ((bottle && (ice_access || giants_wallet || can_enter_ganons)) || can_shoot_blue_fire_arrows);
    checkLogic.colossus_bean = requiem && bean_access;
    checkLogic.colossus_fairy = can_enter_colossus && bombs && lullaby;
    checkLogic.wasteland = can_cross_quicksand && fire;
    checkLogic.wasteland_carpet = can_cross_quicksand && adults_wallet;
    checkLogic.fortress_card = can_save_carpenters;
    checkLogic.gerudo_roof = fortress_access && (hookshot || hovers);
    checkLogic.gerudo_archery_1 = eponas && bow && gtg_entrance_access;
    checkLogic.gerudo_archery_2 = eponas && bow && gtg_entrance_access;
    checkLogic.jabu_boomerang = can_hit_jabu_switch;
    checkLogic.jabu_map = can_hit_jabu_switch && boomerang && jabu_child_access;
    checkLogic.jabu_compass = can_hit_jabu_switch && boomerang && jabu_child_access;
    checkLogic.jabu_barinade = can_hit_jabu_switch && boomerang && jabu_child_access;
    checkLogic.forest_first = forest_temple_access;
    checkLogic.forest_stalfos = forest_temple_access;
    checkLogic.forest_midCourtyard = forest_temple_adult_access && ((((time || bow || (hovers && forest_keys >= 1)) && hookshot)) || (goron_bracelet && (bow || can_use_dins) && forest_keys >= 5));
    checkLogic.forest_highCourtyard = forest_temple_access && (time || (forest_temple_adult_access && ((bow && hookshot) || (hovers && forest_keys >= 1) || (goron_bracelet && (bow || can_use_dins) && forest_keys >= 5))));
    checkLogic.forest_lowCourtyard = forest_temple_access && (time || (forest_temple_adult_access && ((bow && hookshot) || (hovers && forest_keys >= 1) || (goron_bracelet && (bow || can_use_dins) && forest_keys >= 5))));
    checkLogic.forest_blockRoom = forest_temple_adult_access && forest_keys >= 1 && (bow || (forest_temple_child_access && sling)) && goron_bracelet;
    checkLogic.forest_bossKey = forest_temple_adult_access && forest_keys >= 2 && bow && goron_bracelet;
    checkLogic.forest_floormaster = forest_temple_adult_access && ((bow && goron_bracelet && forest_keys >= 2) || (hovers && forest_keys >= 1));
    checkLogic.forest_red = forest_temple_adult_access && goron_bracelet && bow && forest_keys >= 3;
    checkLogic.forest_bow = forest_temple_adult_access && goron_bracelet && forest_keys >= 3;
    checkLogic.forest_blue = forest_temple_adult_access && goron_bracelet && bow && forest_keys >= 3;
    checkLogic.forest_fallingCeiling = forest_temple_adult_access && goron_bracelet && (bow || can_use_dins) && forest_keys >= 5;
    checkLogic.forest_nearBoss = forest_temple_adult_access && goron_bracelet && bow && forest_keys >= 5;
    checkLogic.forest_phantomGanon = forest_temple_adult_access && goron_bracelet && bow && forest_keys >= 5 && forest_boss_key;
    checkLogic.fire_nearBoss = fire_temple_access;
    checkLogic.fire_hammer1 = fire_temple_adult_access && hammer && (rules.smallKeys != "keyRings" || fire_key_ring);
    checkLogic.fire_hammer2 = fire_temple_adult_access && hammer && (rules.smallKeys != "keyRings" || fire_key_ring);
    checkLogic.fire_lavaOpen = fire_temple_access && fire_keys >= 1;
    checkLogic.fire_lavaBomb = fire_temple_adult_access && fire_keys >= 1 && bombs;
    checkLogic.fire_volvagia = fire_temple_adult_access && fire_boss_key && hammer && can_wear_goron_tunic && (hovers || (fire_keys >= 7 && (time || bombs)));
    checkLogic.fire_lowerMaze = can_climb_fire_temple;
    checkLogic.fire_sideRoom = can_climb_fire_temple;
    checkLogic.fire_map = can_climb_fire_temple && ((fire_keys >= 4 && bow) || fire_keys >= 5);
    checkLogic.fire_upperMaze = can_climb_fire_temple && fire_keys >= 5;
    checkLogic.fire_shortcut = can_climb_fire_temple && fire_keys >= 5 && bombs;
    checkLogic.fire_scarecrow = can_climb_fire_temple && fire_keys >= 5 && hookshot;
    checkLogic.fire_compass = can_climb_fire_temple && fire_keys >= 6;
    checkLogic.fire_sotGoron = can_climb_fire_temple && (fire_keys >= 7 || (fire_keys >= 6 && hovers)) && hammer && (time || bombs);
    checkLogic.fire_top = can_climb_fire_temple && (fire_keys >= 7 || (fire_keys >= 6 && hammer && hovers)) && bombs;
    checkLogic.water_compass = can_do_water_checks && hookshot;
    checkLogic.water_map = can_do_water_checks;
    checkLogic.water_cracked = middle_water && bombs;
    checkLogic.water_torches = can_do_water_checks && lullaby && (bow || can_use_dins || water_temple_child_access);
    checkLogic.water_block = can_do_water_checks && lullaby && bow && goron_bracelet && (hovers || longshot) && hookshot;
    checkLogic.water_pillar = middle_water && can_wear_zora_tunic && hookshot;
    checkLogic.water_dLink = can_do_water_checks && water_keys >= 5 && hookshot;
    checkLogic.water_river = can_do_water_checks && water_keys >= 5 && time && bow && hookshot;
    checkLogic.water_dragon = can_do_water_checks && ((water_keys >= 5 && time && bow) || (goron_bracelet && lullaby)) && hookshot;
    checkLogic.water_bossKey = can_do_water_checks && longshot && water_keys >= 5 && ((bombs && goron_bracelet) || hovers);
    checkLogic.water_morpha = can_do_water_checks && water_boss_key && longshot;
    checkLogic.spirit_childLeft = spirit_temple_child_access && (sling || boomerang);
    checkLogic.spirit_childRight = spirit_temple_child_access && (sling || boomerang);
    checkLogic.spirit_childClimb1 = spirit_temple_access && (spirit_keys >= 1 && projectile_both);
    checkLogic.spirit_childClimb2 = spirit_temple_access && (spirit_keys >= 1 && projectile_both);
    checkLogic.spirit_map = spirit_temple_access && (spirit_keys >= 5 && spirit_temple_child_access && bombs) || (spirit_keys >= 3 && silver_gauntlets && fire) || (bombs && spirit_keys >= 1 && fire);
    checkLogic.spirit_sunRoom = spirit_temple_access && (spirit_keys >= 5 && spirit_temple_child_access && bombs) || (spirit_keys >= 3 && silver_gauntlets && fire) || (bombs && spirit_keys >= 1 && fire);
    checkLogic.spirit_rightHand = spirit_temple_access && ((spirit_keys >= 3 && longshot && bombs) || spirit_keys >= 5) && ((spirit_temple_child_access && bombs) || (can_push_spirit_silver_block && (bow || hookshot || bombs)));
    checkLogic.spirit_adultLeft = can_push_spirit_silver_block && hookshot && lullaby;
    checkLogic.spirit_adultRight = can_push_spirit_silver_block && (bow || hookshot || bombs);
    checkLogic.spirit_rotatingMirror1 = can_push_spirit_silver_block && spirit_keys >= 3;
    checkLogic.spirit_rotatingMirror2 = can_push_spirit_silver_block && spirit_keys >= 3;
    checkLogic.spirit_lullabyHand = can_push_spirit_silver_block && spirit_keys >= 3 && lullaby;
    checkLogic.spirit_lullabyHigh = can_push_spirit_silver_block && spirit_keys >= 3 && lullaby && (hookshot || hovers);
    checkLogic.spirit_nearFourArmos = can_push_spirit_silver_block && spirit_keys >= 4 && bombs && mirror;
    checkLogic.spirit_invisible1 = can_push_spirit_silver_block && spirit_keys >= 4 && bombs;
    checkLogic.spirit_invisible2 = can_push_spirit_silver_block && spirit_keys >= 4 && bombs;
    checkLogic.spirit_leftHand = can_push_spirit_silver_block && spirit_keys >= 4 && bombs;
    checkLogic.spirit_bossKey = can_push_spirit_silver_block && spirit_keys >= 5 && bow && lullaby && hookshot;
    checkLogic.spirit_tippyTop = can_push_spirit_silver_block && spirit_keys >= 5 && mirror;
    checkLogic.spirit_twinrova = can_push_spirit_silver_block && spirit_keys >= 5 && mirror && bombs && spirit_boss_key && hookshot;
    checkLogic.shadow_map = shadow_temple_adult_access && (hovers || hookshot);
    checkLogic.shadow_hovers = shadow_temple_adult_access && (hovers || hookshot);
    checkLogic.shadow_compass = can_cross_shadow_gap;
    checkLogic.shadow_earlySilvers = can_cross_shadow_gap;
    checkLogic.shadow_spinning1 = can_bomb_shadow_wall;
    checkLogic.shadow_spinning2 = can_bomb_shadow_wall;
    checkLogic.shadow_spikesLower = can_bomb_shadow_wall;
    checkLogic.shadow_spikesUpper = can_bomb_shadow_wall && goron_bracelet;
    checkLogic.shadow_spikesSwitch = can_bomb_shadow_wall && goron_bracelet;
    checkLogic.shadow_redeadSilvers = can_bomb_shadow_wall && shadow_keys >= 2;
    checkLogic.shadow_pot = can_bomb_shadow_wall && hookshot && shadow_keys >= 2;
    checkLogic.shadow_wind = can_pass_shadow_hookshot_door && shadow_keys >= 3;
    checkLogic.shadow_bombable = can_pass_shadow_hookshot_door && shadow_keys >= 3;
    checkLogic.shadow_gibdos = can_pass_shadow_hookshot_door && shadow_keys >= 3;
    checkLogic.shadow_dins1 = can_ride_shadow_boat && shadow_keys >= 4 && can_use_dins;
    checkLogic.shadow_dins2 = can_ride_shadow_boat && shadow_keys >= 4 && can_use_dins;
    checkLogic.shadow_floormaster = can_ride_shadow_boat && shadow_keys >= 4;
    checkLogic.shadow_bongo = can_beat_shadow_boss && shadow_keys >= 5;
    checkLogic.ganons_lightTrial1 = can_enter_ganons && golden_gauntlets;
    checkLogic.ganons_lightTrial2 = can_enter_ganons && golden_gauntlets;
    checkLogic.ganons_lightTrial3 = can_enter_ganons && golden_gauntlets;
    checkLogic.ganons_lightTrial4 = can_enter_ganons && golden_gauntlets;
    checkLogic.ganons_lightTrial5 = can_enter_ganons && golden_gauntlets;
    checkLogic.ganons_lightTrial6 = can_enter_ganons && golden_gauntlets;
    checkLogic.ganons_lightTrial7 = can_enter_ganons && golden_gauntlets;
    checkLogic.ganons_lightTrialLullaby = can_enter_ganons && golden_gauntlets && lullaby && ganons_keys >= 1;
    checkLogic.ganons_spiritTrial1 = can_enter_ganons && hookshot;
    checkLogic.ganons_spiritTrial2 = can_enter_ganons && hookshot && bombs;
    checkLogic.ganons_forestTrial = can_enter_ganons;
    checkLogic.ganons_waterTrial1 = can_enter_ganons;
    checkLogic.ganons_waterTrial2 = can_enter_ganons;
    checkLogic.ganons_shadowTrial1 = can_enter_ganons && ((bow && fire_arrows && magic) || hookshot || hovers || time);
    checkLogic.ganons_shadowTrial2 = can_enter_ganons && ((bow && fire_arrows && magic) || (longshot && (hovers || can_use_dins)));
    checkLogic.ganons_bossKey = can_enter_ganons;
    checkLogic.gtg_lobbyLeft = gtg_access && ((bow && gtg_adult_access) || (sling && gtg_child_access));
    checkLogic.gtg_lobbyRight = gtg_access && ((bow && gtg_adult_access) || (sling && gtg_child_access));
    checkLogic.gtg_stalfos = gtg_access;
    checkLogic.gtg_wolfos = gtg_adult_access && hookshot;
    checkLogic.gtg_silvers1 = gtg_adult_access && hookshot && silver_gauntlets;
    checkLogic.gtg_silvers2 = gtg_adult_access && hookshot && silver_gauntlets;
    checkLogic.gtg_silvers3 = gtg_adult_access && hookshot && silver_gauntlets;
    checkLogic.gtg_silvers4 = gtg_adult_access && hookshot && silver_gauntlets;
    checkLogic.gtg_eyes = gtg_adult_access && hookshot && bow;
    checkLogic.gtg_aboveEyes = gtg_adult_access && hookshot && bow;
    checkLogic.gtg_keese = gtg_adult_access && hookshot;
    checkLogic.gtg_flamesChest = gtg_adult_access && hookshot && hammer;
    checkLogic.gtg_freestanding = gtg_access && (gtg_keys >= 9 || (bombs && (time || gtg_child_access)) || (hookshot && time));
    checkLogic.gtg_right2 = gtg_access && (gtg_keys >= 9 || (bombs && (time || gtg_child_access)) || (hookshot && time));
    checkLogic.gtg_right3 = gtg_access && (gtg_keys >= 9 || (bombs && (time || gtg_child_access)) || (hookshot && time));
    checkLogic.gtg_beamos = gtg_access && bombs;
    checkLogic.gtg_left1 = gtg_access && gtg_keys >= 3;
    checkLogic.gtg_left2 = gtg_access && gtg_keys >= 4;
    checkLogic.gtg_left3 = gtg_access && gtg_keys >= 6;
    checkLogic.gtg_left4 = gtg_access && gtg_keys >= 7;
    checkLogic.gtg_final = gtg_access && gtg_keys >= 9;
    checkLogic.gtg_toilet = gtg_adult_access && irons && time && hookshot;
    checkLogic.well_fakeRight = botw_child_access;
    checkLogic.well_centerSmall = botw_child_access;
    checkLogic.well_backBombable = botw_child_access && bombs;
    checkLogic.well_waterLeft = botw_child_access && lullaby;
    checkLogic.well_coffin = botw_child_access;
    checkLogic.well_centerBig = botw_child_access;
    checkLogic.well_fakeLeft = botw_child_access;
    checkLogic.well_frontBombable = botw_child_access && bombs;
    checkLogic.well_waterFront = botw_child_access && lullaby;
    checkLogic.well_deadHand = botw_child_access && lullaby;
    checkLogic.well_invisible = botw_child_access && lullaby;
    checkLogic.well_locked1 = botw_child_access && well_keys >= 3;
    checkLogic.well_locked2 = botw_child_access && well_keys >= 3;
    checkLogic.well_basement = botw_child_access && (bombs || ((well_keys >= 3 || can_use_dins) && goron_bracelet));
    checkLogic.lullabyCheck = true;
    checkLogic.eponasCheck = true;
    checkLogic.sariasCheck = true;
    checkLogic.stormsCheck = true;
    checkLogic.sunsCheck = lullaby;
    checkLogic.boleroCheck = can_enter_fire_temple_entrance;
    checkLogic.minuetCheck = can_pass_mido_as_adult;
    checkLogic.requiemCheck = can_enter_colossus;
    checkLogic.serenadeCheck = ice_access && (bottle || can_shoot_blue_fire_arrows) && (ice_adult_access || giants_wallet);
    checkLogic.preludeCheck = forest_medallion;
    checkLogic.nocturneCheck = forest_medallion && fire_medallion && water_medallion;
    checkLogic.oot = kokiri_emerald && goron_ruby && zora_sapphire;
    checkLogic.scrub_dodongos_1 = can_break_dodongos_wall;
    checkLogic.scrub_dodongos_2 = can_break_dodongos_wall;
    checkLogic.scrub_dodongos_3 = can_break_dodongos_wall && bombs;
    checkLogic.scrub_dodongos_4 = can_break_dodongos_wall && bombs;
    checkLogic.scrub_jabu = can_hit_jabu_switch;
    checkLogic.scrub_ganons_1 = can_enter_ganons;
    checkLogic.scrub_ganons_2 = can_enter_ganons;
    checkLogic.scrub_ganons_3 = can_enter_ganons;
    checkLogic.scrub_ganons_4 = can_enter_ganons;
    checkLogic.scrub_river_1 = storms;
    checkLogic.scrub_river_2 = storms;
    checkLogic.scrub_sfm_1 = storms;
    checkLogic.scrub_sfm_2 = storms;
    checkLogic.scrub_lake_1 = true;
    checkLogic.scrub_lake_2 = true;
    checkLogic.scrub_lake_3 = true;
    checkLogic.scrub_lw_1 = true;
    checkLogic.scrub_lw_2 = true;
    checkLogic.scrub_lw_3 = can_blast_or_smash;
    checkLogic.scrub_colossus_1 = silver_gauntlets && can_enter_colossus;
    checkLogic.scrub_colossus_2 = silver_gauntlets && can_enter_colossus;
    checkLogic.scrub_crater_1 = hammer && crater_by_city;
    checkLogic.scrub_crater_2 = hammer && crater_by_city;
    checkLogic.scrub_crater_3 = hammer && crater_by_city;
    checkLogic.scrub_crater_child = bombs || Spawn.child_upper_dmc || Spawn.child_lower_dmc || Spawn.child_lower_dmc_fairy || Spawn.child_dmt_fairy || Spawn.child_dmt_fairy_ool || hammer;
    checkLogic.scrub_goron_1 = time || (can_wear_goron_tunic && hookshot);
    checkLogic.scrub_goron_2 = time || (can_wear_goron_tunic && hookshot);
    checkLogic.scrub_goron_3 = time || (can_wear_goron_tunic && hookshot);
    checkLogic.scrub_ranch_1 = true;
    checkLogic.scrub_ranch_2 = true;
    checkLogic.scrub_ranch_3 = true;
    checkLogic.scrub_gv_1 = fortress_access && storms;
    checkLogic.scrub_gv_2 = fortress_access && storms;
    checkLogic.shop_kokiri_TL = logic[shopLogic.shop_kokiri_TL];
    checkLogic.shop_kokiri_TR = logic[shopLogic.shop_kokiri_TR];
    checkLogic.shop_kokiri_BR = logic[shopLogic.shop_kokiri_BR];
    checkLogic.shop_kokiri_BL = logic[shopLogic.shop_kokiri_BL];
    checkLogic.shop_market_bazaar_TL = logic[shopLogic.shop_market_bazaar_TL];
    checkLogic.shop_market_bazaar_TR = logic[shopLogic.shop_market_bazaar_TR];
    checkLogic.shop_market_bazaar_BR = logic[shopLogic.shop_market_bazaar_BR];
    checkLogic.shop_market_bazaar_BL = logic[shopLogic.shop_market_bazaar_BL];
    checkLogic.shop_market_potion_TL = logic[shopLogic.shop_market_potion_TL];
    checkLogic.shop_market_potion_TR = logic[shopLogic.shop_market_potion_TR];
    checkLogic.shop_market_potion_BR = logic[shopLogic.shop_market_potion_BR];
    checkLogic.shop_market_potion_BL = logic[shopLogic.shop_market_potion_BL];
    checkLogic.shop_market_chu_TL = logic[shopLogic.shop_market_chu_TL];
    checkLogic.shop_market_chu_TR = logic[shopLogic.shop_market_chu_TR];
    checkLogic.shop_market_chu_BR = logic[shopLogic.shop_market_chu_BR];
    checkLogic.shop_market_chu_BL = logic[shopLogic.shop_market_chu_BL];
    checkLogic.shop_kakariko_bazaar_TL = logic[shopLogic.shop_kakariko_bazaar_TL];
    checkLogic.shop_kakariko_bazaar_TR = logic[shopLogic.shop_kakariko_bazaar_TR];
    checkLogic.shop_kakariko_bazaar_BR = logic[shopLogic.shop_kakariko_bazaar_BR];
    checkLogic.shop_kakariko_bazaar_BL = logic[shopLogic.shop_kakariko_bazaar_BL];
    checkLogic.shop_kakariko_potion_TL = logic[shopLogic.shop_kakariko_potion_TL];
    checkLogic.shop_kakariko_potion_TR = logic[shopLogic.shop_kakariko_potion_TR];
    checkLogic.shop_kakariko_potion_BR = logic[shopLogic.shop_kakariko_potion_BR];
    checkLogic.shop_kakariko_potion_BL = logic[shopLogic.shop_kakariko_potion_BL];
    checkLogic.shop_goron_TL = logic[shopLogic.shop_goron_TL] && (lullaby || can_stop_link_the_goron || bombs || can_use_dins);
    checkLogic.shop_goron_TR = logic[shopLogic.shop_goron_TR] && (lullaby || can_stop_link_the_goron || bombs || can_use_dins);
    checkLogic.shop_goron_BR = logic[shopLogic.shop_goron_BR] && (lullaby || can_stop_link_the_goron || bombs || can_use_dins);
    checkLogic.shop_goron_BL = logic[shopLogic.shop_goron_BL] && (lullaby || can_stop_link_the_goron || bombs || can_use_dins);
    checkLogic.shop_domain_TL = logic[shopLogic.shop_domain_TL] && ((bombs && lullaby) || silver_scale || (lullaby && ((can_enter_ganons && bottle) || jabu_entrance_access || (giants_wallet && bottle))));
    checkLogic.shop_domain_TR = logic[shopLogic.shop_domain_TR] && ((bombs && lullaby) || silver_scale || (lullaby && ((can_enter_ganons && bottle) || jabu_entrance_access || (giants_wallet && bottle))));
    checkLogic.shop_domain_BR = logic[shopLogic.shop_domain_BR] && ((bombs && lullaby) || silver_scale || (lullaby && ((can_enter_ganons && bottle) || jabu_entrance_access || (giants_wallet && bottle))));
    checkLogic.shop_domain_BL = logic[shopLogic.shop_domain_BL] && ((bombs && lullaby) || silver_scale || (lullaby && ((can_enter_ganons && bottle) || jabu_entrance_access || (giants_wallet && bottle))));
    checkLogic.cow_kokiri = eponas;
    checkLogic.cow_ranch1 = eponas;
    checkLogic.cow_ranch2 = eponas;
    checkLogic.cow_ranch3 = eponas;
    checkLogic.cow_ranch4 = eponas;
    checkLogic.cow_field = eponas && ((hammer && fire) || (bombs && can_use_dins));
    checkLogic.cow_valley = eponas;
    checkLogic.cow_trail = eponas && can_blast_or_smash;
    checkLogic.cow_kakariko = eponas;

    checkLogic.gs_kokiri_child = true;
    checkLogic.gs_kokiri_soil = bottle;
    checkLogic.gs_kokiri_adult = hookshot;
    checkLogic.gs_market = true;
    checkLogic.gs_lost_woods_bean_1 = bottle;
    checkLogic.gs_lost_woods_bean_2 = bottle;
    checkLogic.gs_lost_woods_above_stage = bean_access && can_pass_mido_as_adult;
    checkLogic.gs_sacred_forest = hookshot && can_pass_mido_as_adult;
    checkLogic.gs_outside_kakariko = (boomerang && bombs) || (can_blast_or_smash && hookshot);
    checkLogic.gs_near_gerudo = (hammer && fire && hookshot) || (can_use_dins && bombs && boomerang);
    checkLogic.gs_hyrule_castle_tree = true;
    checkLogic.gs_hyrule_castle_grotto = storms && bombs && boomerang;
    checkLogic.gs_lon_lon_tree = true;
    checkLogic.gs_lon_lon_shed = true;
    checkLogic.gs_lon_lon_window = boomerang;
    checkLogic.gs_lon_lon_back_wall = boomerang;
    checkLogic.gs_kakariko_construction = true;
    checkLogic.gs_kakariko_skulltula_house = true;
    checkLogic.gs_kakariko_guard_house = true;
    checkLogic.gs_kakariko_tree = true;
    checkLogic.gs_kakariko_tower = bombs || sling;
    checkLogic.gs_kakariko_impas = hookshot || Spawn.adult_kak_roof;
    checkLogic.gs_graveyard_wall = boomerang;
    checkLogic.gs_graveyard_soil = bottle;
    checkLogic.gs_trail_soil = bottle && (bombs || goron_bracelet);
    checkLogic.gs_trail_bombable_wall = can_blast_or_smash;
    checkLogic.gs_trail_hail_path = hammer;
    checkLogic.gs_trail_above_dodongos = hammer;
    checkLogic.gs_goron_center = true;
    checkLogic.gs_goron_maze = bombs;
    checkLogic.gs_crater_crate = can_blast_or_smash || Spawn.child_upper_dmc;
    checkLogic.gs_crater_soil = bottle && bolero;
    checkLogic.gs_river_ladder = child_can_enter_river;
    checkLogic.gs_river_near_grotto = hookshot;
    checkLogic.gs_river_above_bridge = hookshot;
    checkLogic.gs_river_tree = true;
    checkLogic.gs_domain = (lullaby || Spawn.adult_zd) && (hookshot || magic || bow);
    checkLogic.gs_fountain_above_log = jabu_entrance_access && boomerang;
    checkLogic.gs_fountain_tree = jabu_entrance_access;
    checkLogic.gs_fountain_hidden_cave = ice_entrance_access && silver_gauntlets && hookshot && can_blast_or_smash;
    checkLogic.gs_hylia_bean = bottle;
    checkLogic.gs_hylia_lab_wall = boomerang;
    checkLogic.gs_hylia_island = true;
    checkLogic.gs_hylia_tree = longshot;
    checkLogic.gs_hylia_lab_crate = irons && hookshot;
    checkLogic.gs_valley_small_bridge = boomerang;
    checkLogic.gs_valley_bean = bottle;
    checkLogic.gs_valley_tent = fortress_access && hookshot;
    checkLogic.gs_valley_pillar = fortress_access && hookshot;
    checkLogic.gs_fortress_archery = fortress_access && hookshot;
    checkLogic.gs_fortress_top = fortress_access;
    checkLogic.gs_wasteland = hookshot && can_cross_quicksand;
    checkLogic.gs_colossus_soil = bottle && requiem;
    checkLogic.gs_colossus_tree = hookshot && can_enter_colossus;
    checkLogic.gs_colossus_hill = (requiem && bean_access) || (longshot && can_enter_colossus);
    checkLogic.gs_ogc = true;
    checkLogic.gs_deku_basement_back = deku_access && boomerang && bombs && sling;
    checkLogic.gs_deku_basement_gate = deku_access;
    checkLogic.gs_deku_basement_vines = deku_access && (sling || boomerang || bombs || can_use_dins);
    checkLogic.gs_deku_compass = deku_access;
    checkLogic.gs_dodongos_east_side = can_break_dodongos_wall;
    checkLogic.gs_dodongos_stair_vines = dodongos_climb;
    checkLogic.gs_dodongos_above_stairs = (dodongos_climb && hookshot) || (boomerang && (bombs || goron_bracelet));
    checkLogic.gs_dodongos_scarecrow = can_break_dodongos_wall && hookshot;
    checkLogic.gs_dodongos_before_king = bombs;
    checkLogic.gs_jabu_vines = can_hit_jabu_switch;
    checkLogic.gs_jabu_near_octo_1 = can_hit_jabu_switch && boomerang;
    checkLogic.gs_jabu_near_octo_2 = can_hit_jabu_switch && boomerang;
    checkLogic.gs_jabu_near_boss = can_hit_jabu_switch && boomerang;
    checkLogic.gs_forest_first = forest_temple_adult_access && hookshot;
    checkLogic.gs_forest_lobby = forest_temple_adult_access && hookshot;
    checkLogic.gs_forest_outdoor_east = forest_temple_adult_access && hookshot && ((bow || time) || (forest_keys >= 1 && hovers));
    checkLogic.gs_forest_outdoor_west = forest_temple_adult_access && hookshot && (((bow || time) && longshot) || (forest_keys >= 1 && hovers) || (forest_keys >= 2 && goron_bracelet && bow))
    checkLogic.gs_forest_basement = forest_temple_adult_access && hookshot && bow && goron_bracelet && forest_keys >= 5;
    checkLogic.gs_fire_time = fire_temple_adult_access && fire_keys >= 1 && time;
    checkLogic.gs_fire_bomb_wall = can_climb_fire_temple && goron_bracelet && bombs;
    checkLogic.gs_fire_scarecrow_1 = can_climb_fire_temple && goron_bracelet && fire_keys >= 5 && hookshot;
    checkLogic.gs_fire_scarecrow_2 = can_climb_fire_temple && goron_bracelet && fire_keys >= 5 && hookshot;
    checkLogic.gs_fire_basement = fire_temple_adult_access && hammer;
    checkLogic.gs_water_south_basement = can_do_water_checks && bombs && lullaby && hookshot;
    checkLogic.gs_water_river = can_do_water_checks && time && water_keys >= 5 && hookshot;
    checkLogic.gs_water_central = middle_water && longshot;
    checkLogic.gs_water_near_boss_key = can_do_water_checks && longshot && lullaby && water_keys >= 4;
    checkLogic.gs_water_platform_room = can_do_water_checks && longshot && lullaby && water_keys >= 4;
    checkLogic.gs_spirit_metal_fence = spirit_temple_child_access && (boomerang || sling);
    checkLogic.gs_spirit_before_child_knuckle = spirit_temple_access && (bombs && boomerang && hookshot && spirit_keys >= 1) || (boomerang && spirit_keys >= 5 && bombs && spirit_temple_child_access) || (hookshot && silver_gauntlets && spirit_keys >= 3);
    checkLogic.gs_spirit_boulder_room = can_push_spirit_silver_block && time && (bow || hookshot || bombs);
    checkLogic.gs_spirit_lobby = can_push_spirit_silver_block && spirit_keys >= 3 && (hookshot || hovers);
    checkLogic.gs_spirit_child_climb = spirit_temple_access && spirit_keys >= 1;
    checkLogic.gs_shadow_like_like = can_bomb_shadow_wall;
    checkLogic.gs_shadow_crusher = can_bomb_shadow_wall && hookshot;
    checkLogic.gs_shadow_giant_pot = can_bomb_shadow_wall && shadow_keys >= 2 && hookshot;
    checkLogic.gs_shadow_near_boat = can_pass_shadow_hookshot_door && longshot && shadow_keys >= 4;
    checkLogic.gs_shadow_three_pots = can_ride_shadow_boat;
    checkLogic.gs_well_west_inner = boomerang && well_keys >= 3;
    checkLogic.gs_well_east_inner = boomerang && well_keys >= 3;
    checkLogic.gs_well_like_like = boomerang && well_keys >= 3;
    checkLogic.gs_ice_spinning_scythe = ice_access && hookshot;
    checkLogic.gs_ice_hp_room = ice_access && (bottle || can_shoot_blue_fire_arrows) && hookshot;
    checkLogic.gs_ice_block_room = ice_access && (bottle || can_shoot_blue_fire_arrows) && hookshot;
  }

  const areas = ["deku", "dodongos", "jabu", "forest", "fire", "water", "shadow", "spirit", "well", "gtg", "ice"];
  areas.forEach(name => {
    areaCheckAccess(name, player, "checkAccess");
    areaCheckAccess(name, couldHave, "couldAccess");
  });

  for (let i = 0, Access = checkAccess, Has = player; i < 2; i++) {
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
    Access.hyrule_tektite_grotto = Has.can_blast_or_smash && (Has.golden_scale || Has.irons);
    Access.hyrule_ocarina = (Has.emerald || Has.emerald || Access.emerald_location) && (Has.ruby || Has.ruby || Access.ruby_location) && (Has.sapphire || Has.sapphire || Access.sapphire_location);
    Access.gerudovalley_box = true;
    Access.gerudovalley_fall = true;
    Access.hylia_child_fishing = true;
    Access.hylia_bottle = Has.silver_scale;
    Access.hylia_adult_fishing = Has.hookshot || Has.bean_access || Spawn.adult_fishing;
    Access.hylia_lab_top = Has.hookshot || Has.bean_access;
    Access.hylia_lab_dive = Has.golden_scale || (Has.hookshot && Has.irons);
    Access.hylia_sun_shoot = Has.bow && Has.longshot;
    Access.market_slingshot_game = true;
    Access.richard = true;
    Access.market_bowling_1 = Has.bombs || (Has.chus && rules.chusInLogic == "on");
    Access.market_bowling_2 = Has.bombs || (Has.chus && rules.chusInLogic == "on");
    Access.market_lens_game = Has.can_see;
    Access.poes = (Has.bow && (Has.can_use_bottle || Has.jabu_entrance_access)) || Has.big_poe;
    Access.dins_fairy = (Has.bombs || player.chus || Spawn.child_hyrule_fairy) && Has.lullaby;
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
    Access.target = Has.sling;
    Access.theater_skull = true;
    Access.theater_truth = (Has.emerald || Has.emerald || Access.emerald_location) && (Has.ruby || Has.ruby || Access.ruby_location) && (Has.sapphire || Has.sapphire || Access.sapphire_location) && Has.sarias;
    Access.kokiri_storms = Has.storms;
    Access.rolling_goron = Has.bombs || player.chus || Has.goron_bracelet;
    Access.goron_pot = (Has.bombs || Has.goron_bracelet || player.chus) && (Has.lullaby || Has.can_use_dins || Spawn.child_lower_dmc || Spawn.child_lower_dmc_fairy);
    Access.goron_dance = (Has.lullaby || Spawn.child_lower_dmc || Spawn.child_lower_dmc_fairy) && Has.sarias;
    Access.goron_maze_1 = Has.can_blast_or_smash || Has.silver_gauntlets;
    Access.goron_maze_2 = Has.can_blast_or_smash || Has.silver_gauntlets;
    Access.goron_maze_3 = Has.hammer || Has.silver_gauntlets || ((Has.bombs || player.chus) && Has.hovers);
    Access.goron_link = Has.can_stop_link_the_goron;
    Access.goron_medigoron = (Has.can_blast_or_smash || Has.goron_bracelet) && Has.adults_wallet;
    Access.trail_bombable = Has.can_blast_or_smash || Has.goron_bracelet;
    Access.trail_top = true;
    Access.trail_storms = Has.storms;
    Access.crater_bean = (Has.bolero && Has.bean_access) || (Has.crater_top && Has.hovers);
    Access.crater_hammer_fairy = ((Has.crater_by_city && Has.hammer) || Spawn.child_lower_dmc_fairy || Spawn.adult_lower_dmc_fairy || Spawn.child_lower_dmc || Spawn.adult_lower_dmc) && Has.lullaby;
    Access.crater_nook_hp = Has.crater_top || Spawn.child_upper_dmc;
    Access.crater_grotto = Has.can_blast_or_smash;
    Access.trail_fairy = (Has.can_blast_or_smash || Spawn.child_dmt_fairy || Spawn.adult_dmt_fairy || Spawn.child_dmt_fairy_ool || Spawn.adult_dmt_fairy_ool) && Has.lullaby;
    Access.trade_quest = (((Access.thaw_king || (Has.giants_wallet && Has.lullaby && (Has.can_use_bottle || Has.jabu_entrance_access))) && Has.prescription) || Has.claim_check) && Has.crater_top;
    Access.gerudo_hammer = Has.fortress_access && Has.hammer;
    Access.fortress_card = Has.can_save_carpenters;
    Access.gerudo_roof = Has.fortress_access && (Has.hookshot || Has.hovers);
    Access.gerudo_archery_1 = Has.eponas && Has.bow && Has.gtg_entrance_access;
    Access.gerudo_archery_2 = Has.eponas && Has.bow && Has.gtg_entrance_access;
    Access.wasteland = (Has.can_cross_quicksand || Has.requiem) && Has.fireMedallion;
    Access.wasteland_carpet = (Has.can_cross_quicksand || Has.requiem) && Has.adults_wallet;
    Access.colossus_fairy = Has.can_enter_colossus && (Has.bombs || player.chus) && Has.lullaby;
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
    Access.fountain_fairy = ((Has.ice_entrance_access && (Has.bombs || player.chus || (Has.hammer && Has.silver_gauntlets))) || Spawn.child_zf_fairy || Spawn.adult_zf_fairy || ((Has.bombs || player.chus) && Spawn.child_zf)) && Has.lullaby;
    Access.glacier_hp = Has.ice_entrance_access;
    Access.bottom_of_fountain = Has.ice_entrance_access && Has.irons;
    Access.thaw_king = Has.can_enter_adult_domain && ((Has.can_use_bottle && (Has.ice_access || Has.giants_wallet || Has.can_enter_ganons)) || Has.can_shoot_blue_fire_arrows);
    Access.ganons_lightTrial1 = Has.can_enter_ganons && Has.golden_gauntlets;
    Access.ganons_lightTrial2 = Has.can_enter_ganons && Has.golden_gauntlets;
    Access.ganons_lightTrial3 = Has.can_enter_ganons && Has.golden_gauntlets;
    Access.ganons_lightTrial4 = Has.can_enter_ganons && Has.golden_gauntlets;
    Access.ganons_lightTrial5 = Has.can_enter_ganons && Has.golden_gauntlets;
    Access.ganons_lightTrial6 = Has.can_enter_ganons && Has.golden_gauntlets;
    Access.ganons_lightTrial7 = Has.can_enter_ganons && Has.golden_gauntlets;//&& Has.can_see;
    Access.ganons_lightTrialLullaby = Has.can_enter_ganons && Has.golden_gauntlets && Has.lullaby && player.current_ganons_keys >= 1 && (rules.smallKeys != "keyRings" || Has.ganons_key_ring);
    Access.ganons_spiritTrial1 = Has.can_enter_ganons;
    Access.ganons_spiritTrial2 = Has.can_enter_ganons && (player.chus || Has.bow);//&& Has.can_see;
    Access.ganons_forestTrial = Has.can_enter_ganons;
    Access.ganons_waterTrial1 = Has.can_enter_ganons;
    Access.ganons_waterTrial2 = Has.can_enter_ganons;
    Access.ganons_shadowTrial1 = Has.can_enter_ganons && ((Has.bow && Has.fire_arrows && Has.magic) || Has.hookshot || Has.hovers || Has.time);
    Access.ganons_shadowTrial2 = Has.can_enter_ganons && ((Has.bow && Has.fire_arrows && Has.magic) || (Has.longshot && (Has.hovers || Has.can_use_dins)));
    Access.ganons_bossKey = Has.can_enter_ganons;
    Access.lullabyCheck = true;
    Access.eponasCheck = true;
    Access.sariasCheck = true;
    Access.stormsCheck = true;
    Access.sunsCheck = Has.lullaby;
    Access.boleroCheck = Has.can_enter_fire_temple_entrance;
    Access.minuetCheck = true;
    Access.requiemCheck = Has.can_enter_colossus;
    Access.preludeCheck = Has.forestMedallion || Has.forestMedallion || Access.forest_medallion_location;
    Access.nocturneCheck = (Has.forestMedallion || Has.forestMedallion || Access.forest_medallion_location) && (Has.fireMedallion || Has.fireMedallion || Access.fire_medallion_location) && (Has.waterMedallion || Has.waterMedallion || Access.water_medallion_location);
    Access.oot = (Has.emerald || Has.emerald || Access.emerald_location) && (Has.ruby || Has.ruby || Access.ruby_location) && (Has.sapphire || Has.sapphire || Access.sapphire_location);

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
    Access.scrub_crater_child = Has.bombs || Spawn.child_upper_dmc || Spawn.child_lower_dmc || Spawn.child_lower_dmc_fairy || Spawn.child_dmt_fairy || Spawn.child_dmt_fairy_ool || Has.hammer || player.chus;
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
    Access.shop_goron_TL = Has.lullaby || Has.can_stop_link_the_goron || Has.bombs || Has.can_use_dins || player.chus;
    Access.shop_goron_TR = Has.lullaby || Has.can_stop_link_the_goron || Has.bombs || Has.can_use_dins || player.chus;
    Access.shop_goron_BR = Has.lullaby || Has.can_stop_link_the_goron || Has.bombs || Has.can_use_dins || player.chus;
    Access.shop_goron_BL = Has.lullaby || Has.can_stop_link_the_goron || Has.bombs || Has.can_use_dins || player.chus;
    Access.shop_domain_TL = (Has.bombs && Has.lullaby) || Has.silver_scale || (Has.lullaby && ((Has.can_enter_ganons && Has.can_use_bottle) || Has.jabu_entrance_access || (Has.giants_wallet && Has.can_use_bottle)));
    Access.shop_domain_TR = (Has.bombs && Has.lullaby) || Has.silver_scale || (Has.lullaby && ((Has.can_enter_ganons && Has.can_use_bottle) || Has.jabu_entrance_access || (Has.giants_wallet && Has.can_use_bottle)));
    Access.shop_domain_BR = (Has.bombs && Has.lullaby) || Has.silver_scale || (Has.lullaby && ((Has.can_enter_ganons && Has.can_use_bottle) || Has.jabu_entrance_access || (Has.giants_wallet && Has.can_use_bottle)));
    Access.shop_domain_BL = (Has.bombs && Has.lullaby) || Has.silver_scale || (Has.lullaby && ((Has.can_enter_ganons && Has.can_use_bottle) || Has.jabu_entrance_access || (Has.giants_wallet && Has.can_use_bottle)));
    Access.cow_kokiri = Has.eponas;
    Access.cow_ranch1 = Has.eponas;
    Access.cow_ranch2 = Has.eponas;
    Access.cow_ranch3 = Has.eponas;
    Access.cow_ranch4 = Has.eponas;
    Access.cow_field = Has.eponas && ((Has.hammer && Has.fireMedallion) || (Has.bombs && Has.can_use_dins));
    Access.cow_valley = Has.eponas;
    Access.cow_trail = Has.eponas && Has.can_blast_or_smash;
    Access.cow_kakariko = Has.eponas;

    Access.gs_kokiri_child = true;
    Access.gs_kokiri_soil = Has.can_use_bottle;
    Access.gs_kokiri_adult = Has.hookshot || Has.hovers;
    Access.gs_market = true;
    Access.gs_lost_woods_bean_1 = Has.can_use_bottle;
    Access.gs_lost_woods_bean_2 = Has.can_use_bottle;
    Access.gs_lost_woods_above_stage = Has.bean_access || (Has.hookshot && (player.chus || Has.bow)) || Has.longshot;
    Access.gs_sacred_forest = Has.hookshot;
    Access.gs_outside_kakariko = (Has.boomerang && (Has.bombs || player.chus)) || (Has.can_blast_or_smash && Has.hookshot);
    Access.gs_near_gerudo = (Has.hammer && Has.fireMedallion && Has.hookshot) || (Has.can_use_dins && (Has.bombs || player.chus) && Has.boomerang);
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
    Access.gs_kakariko_impas = Has.hookshot || Spawn.adult_kak_roof || Has.hovers;
    Access.gs_graveyard_wall = Has.boomerang;
    Access.gs_graveyard_soil = Has.can_use_bottle;
    Access.gs_trail_soil = Has.can_use_bottle && ((Has.bombs || player.chus) || Has.goron_bracelet);
    Access.gs_trail_bombable_wall = Has.can_blast_or_smash;
    Access.gs_trail_hail_path = Has.can_stop_link_the_goron || Has.hammer || Spawn.adult_upper_dmc || Spawn.adult_lower_dmc || Spawn.lower_dmc_fairy || Spawn.adult_dmt_fairy || Spawn.adult_dmt_fairy_ool;
    Access.gs_trail_above_dodongos = true;
    Access.gs_goron_center = true;
    Access.gs_goron_maze = Has.bombs || player.chus;
    Access.gs_crater_crate = Has.can_blast_or_smash || Spawn.child_upper_dmc;
    Access.gs_crater_soil = Has.can_use_bottle && Has.bolero;
    Access.gs_river_ladder = Has.child_can_enter_river;
    Access.gs_river_near_grotto = Has.hookshot;
    Access.gs_river_above_bridge = Has.hookshot;
    Access.gs_river_tree = true;
    Access.gs_domain = (Has.lullaby || Spawn.adult_zd || Has.hovers);
    Access.gs_fountain_above_log = Has.jabu_entrance_access && Has.boomerang;
    Access.gs_fountain_tree = Has.jabu_entrance_access;
    Access.gs_fountain_hidden_cave = Has.ice_entrance_access && Has.silver_gauntlets && Has.hookshot && Has.can_blast_or_smash;
    Access.gs_hylia_bean = Has.can_use_bottle;
    Access.gs_hylia_lab_wall = true;
    Access.gs_hylia_island = true;
    Access.gs_hylia_tree = Has.longshot;
    Access.gs_hylia_lab_crate = Has.irons && Has.hookshot;
    Access.gs_valley_small_bridge = Has.boomerang;
    Access.gs_valley_bean = Has.can_use_bottle;
    Access.gs_valley_tent = Has.fortress_access && Has.hookshot;
    Access.gs_valley_pillar = Has.fortress_access && Has.hookshot;
    Access.gs_fortress_archery = Has.fortress_access && Has.hookshot;
    Access.gs_fortress_top = Has.fortress_access;
    Access.gs_wasteland = (Has.hookshot || Has.bombs) && (Has.can_cross_quicksand || Has.can_enter_colossus);
    Access.gs_colossus_soil = Has.can_use_bottle && Has.requiem;
    Access.gs_colossus_tree = Has.hookshot && Has.can_enter_colossus;
    Access.gs_colossus_hill = (Has.requiem && Has.bean_access) || (Has.hookshot && Has.can_enter_colossus);
    Access.gs_ogc = true;

    Access = checkCouldAccess;
    Has = couldHave;
  }

  checkCouldAccess.ganons_spiritTrial2 = couldHave.can_enter_ganons && (couldHave.bombs || player.chus || couldHave.bow);//&& couldHave.can_see;

  for (let i = 0, Peek = checkPeek, Has = player; i < 2; i++) {
    Peek.hyrule_tektite_grotto = Has.can_blast_or_smash;
    Peek.hylia_bottle = true;
    Peek.hylia_sun_shoot = Has.bow;
    Peek.crater_bean = Has.bolero || Has.crater_top || Spawn.child_upper_dmc || Spawn.child_lower_dmc || Spawn.child_dmt_fairy || Spawn.child_lower_dmc_fairy || Spawn.adult_lower_dmc || Spawn.adult_lower_dmc_fairy || Spawn.adult_upper_dmc || Spawn.adult_lower_dmc_fairy;
    Peek.crater_nook_hp = Has.crater_top || Has.bolero || Spawn.child_upper_dmc || Spawn.child_lower_dmc || Spawn.child_dmt_fairy || Spawn.child_lower_dmc_fairy || Spawn.adult_lower_dmc || Spawn.adult_lower_dmc_fairy || Spawn.adult_upper_dmc || Spawn.adult_lower_dmc_fairy;
    Peek.colossus_fairy = Has.can_enter_colossus && (Has.bombs || player.chus) && Has.lullaby;
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
    Peek.h_hyrule_web = (Has.hammer && Has.fireMedallion) || ((Has.bombs || player.chus) && Has.can_use_dins)
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
    Peek.h_castle_sos = Has.storms && (Has.bombs || player.chus);
    Peek.h_fountain_fairy = Has.ice_entrance_access || Has.jabu_entrance_access;
    Peek.h_fountain = Has.ice_entrance_access || Has.jabu_entrance_access;
    Peek.h_lw_bridge = true;
    Peek.h_lw_generic = Has.can_blast_or_smash;
    Peek.h_saria = true;
    Peek.h_sfm_1 = true;
    Peek.h_sfm_2 = true;
    Peek.h_goron_maze = Has.can_blast_or_smash;
    Peek.h_medigoron = Has.can_blast_or_smash;
    Peek.h_trail_storms = Has.storms;
    Peek.h_biggoron = Has.crater_top;
    Peek.h_crater_grotto = Has.can_blast_or_smash;
    Peek.h_crater_wall = Has.bombs || player.chus;
    Peek.h_kakariko_grotto = true;
    Peek.h_nocturne = Has.nocturne;
    Peek.h_river_grotto = true;
    Peek.h_river_pillar = true;
    Peek.h_river_domain = true;
    Peek.h_domain = Has.lullaby || Has.hovers || Has.child_can_enter_domain;
    Peek.h_crater_grotto = Has.can_blast_or_smash;
    Peek.h_colossus = Has.requiem || Has.eponas || Has.longshot;
    Peek.gs_kokiri_adult = Has.hookshot || Has.hovers || Has.bow || player.chus || Has.bombs || Has.can_use_dins;
    Peek.gs_lost_woods_above_stage = Has.bean_access || player.chus || Has.bow || Has.longshot || Has.can_use_dins;
    Peek.gs_sacred_forest = Has.hookshot || player.chus || Has.bombs || Has.bow || Has.can_use_dins;
    Peek.gs_outside_kakariko = ((Has.boomerang || Has.sling || Has.can_use_dins) && (Has.bombs || player.chus)) || (Has.can_blast_or_smash && (Has.hookshot || Has.bow || Has.can_use_dins)) || player.chus || Has.bombs;
    Peek.gs_near_gerudo = (Has.hammer && (Has.fireMedallion || player.chus || Has.bow)) || ((Has.bombs || player.chus) && (Has.can_use_dins || Has.sling || player.chus));
    Peek.gs_hyrule_castle_grotto = Has.storms && (Has.boomerang || player.chus || Has.sling || Has.can_use_dins || Has.bombs);
    Peek.gs_lon_lon_window = Has.boomerang || player.chus || Has.sling;
    Peek.gs_lon_lon_back_wall = Has.boomerang || player.chus || Has.sling || Has.can_use_dins || Has.bombs;
    Peek.gs_kakariko_impas = Has.hookshot || Spawn.adult_kak_roof || Has.hovers || player.chus;
    Peek.gs_graveyard_wall = Has.boomerang || player.chus || Has.sling || Has.can_use_dins || Has.bombs;
    Peek.gs_river_near_grotto = Has.hookshot || player.chus || Has.bow || Has.can_use_dins || Has.bombs;
    Peek.gs_river_above_bridge = Has.hookshot || player.chus || Has.bow;
    Peek.gs_fountain_above_log = Has.jabu_entrance_access && (Has.boomerang || player.chus || Has.sling || Has.can_use_dins || Has.bombs);
    Peek.gs_fountain_hidden_cave = Has.ice_entrance_access && Has.silver_gauntlets && (Has.hookshot || player.chus || Has.bow || Has.can_use_dins || Has.bombs) && Has.can_blast_or_smash;
    Peek.gs_hylia_tree = Has.longshot || player.chus;
    Peek.gs_valley_small_bridge = true;
    Peek.gs_valley_tent = Has.fortress_access && (Has.hookshot || player.chus || Has.bow || Has.can_use_dins || Has.bombs);
    Peek.gs_valley_pillar = Has.fortress_access && (Has.hookshot || player.chus || Has.bow);
    Peek.gs_fortress_archery = Has.fortress_access && (Has.hookshot || player.chus || Has.bow);
    Peek.gs_wasteland = (Has.hookshot || player.chus || Has.bow || Has.can_use_dins || Has.bombs) && (Has.can_cross_quicksand || Has.can_enter_colossus);
    Peek.gs_colossus_tree = (Has.hookshot || player.chus || Has.bow || Has.can_use_dins || Has.bombs) && Has.can_enter_colossus;
    Peek.gs_colossus_hill = (Has.requiem && Has.bean_access) || ((Has.hookshot || player.chus || Has.bow) && Has.can_enter_colossus);

    if (rules.csmc == "on") {
      Peek.goron_maze_1 = true;
      Peek.goron_maze_2 = true;
      Peek.goron_maze_3 = true;
      Peek.trail_bombable = true;
      Peek.gerudo_hammer = Has.fortress_access;
      Peek.gerudo_roof = Has.fortress_access;
      Peek.ganons_shadowTrial1 = Has.can_enter_ganons;
    }

    Peek = checkCouldPeek;
    Has = couldHave;
  }
}

function updateEntranceAccess(dungeon, sim) {
  const entrance = dungeonToEntrance_ER_dict[dungeon];

  switch (entrance) {
    case "deku":
      sim.adult = rules.deku == "open" || sim.kokiri_sword;
      sim.child = rules.deku == "open" || sim.kokiri_sword;
      break;

    case "dodongos":
      sim.adult = true;
      sim.child = sim.bombs || sim.goron_bracelet || sim.chus;
      break;

    case "jabu":
      sim.child_can_enter_domain = sim.silver_scale || Spawn.child_zd || Spawn.child_zr || sim.bombs || sim.chus;
      sim.adult = false;
      sim.child = (sim.child_can_enter_domain && (sim.rutos_letter || rules.fountain == "open")) || sim.child_zf;
      break;

    case "forest":
      sim.adult = sim.hookshot;
      sim.child = false;
      break;

    case "fire":
      sim.can_stop_link_the_goron = sim.bombs || sim.bow || sim.goron_bracelet || sim.chus;
      sim.child_can_enter_river = sim.bombs || sim.chus || sim.silver_scale || Spawn.child_zd || Spawn.child_zr;
      sim.reverse_crater = (sim.hovers || sim.hookshot || sim.child_can_enter_river) && sim.bolero;
      sim.crater_by_city = sim.can_stop_link_the_goron || sim.reverse_crater || sim.hammer || (sim.longshot && sim.hammer) || Spawn.adult_lower_dmc;

      sim.adult = (sim.crater_by_city && (sim.hookshot || sim.hovers)) || sim.bolero;
      sim.child = sim.bolero;
      break;

    case "water":
      sim.adult = sim.hookshot && (sim.irons || sim.golden_scale);
      sim.child = false;
      break;

    case "shadow":
      sim.fireMedallion = (sim.dins || (sim.bow && sim.fire_arrows)) && sim.magic;
      sim.can_use_dins = sim.dins && sim.magic;
      const shadowAccess = (sim.nocturne || Spawn.adult_nocturne) && (sim.can_use_dins || (rules.fae == "allowed" && sim.fireMedallion));

      sim.adult = shadowAccess;
      sim.child = shadowAccess;
      break;

    case "spirit":
      sim.fortress_access = sim.eponas || sim.longshot || sim.requiem || Spawn.adult_gf || Spawn.adult_wasteland || (rules.valleyWithHook == "allowed" && sim.hookshot);
      sim.can_cross_quicksand = sim.fortress_access && (rules.gerudoCard == "vanilla" || sim.gerudo_card);

      sim.adult = sim.can_cross_quicksand || sim.requiem || Spawn.child_colossus || Spawn.adult_colossus || Spawn.adult_wasteland || Spawn.child_wasteland || checkAccess.spirit_leftHand || checkAccess.spirit_rightHand;
      sim.child = sim.requiem || Spawn.child_colossus || Spawn.child_wasteland || checkAccess.spirit_rightHand;
      break;

    case "well":
      sim.adult = sim.storms;
      sim.child = sim.storms;
      break;

    case "ice":
      sim.can_enter_adult_domain = sim.lullaby || sim.hovers || Spawn.adult_zd;
      sim.child_can_enter_domain = sim.silver_scale || Spawn.child_zd || Spawn.child_zr || sim.bombs || sim.chus;

      sim.adult = (sim.can_enter_adult_domain && ((sim.rutos_letter && sim.child_can_enter_domain) || rules.fountain === "open" || rules.kzSkip === "allowed")) || Spawn.adult_zf;
      sim.child = false;
      break;

    case "gtg":
      sim.fortress_access = sim.eponas || sim.longshot || sim.requiem || Spawn.adult_gf || Spawn.adult_wasteland || (rules.valleyWithHook == "allowed" && sim.hookshot);

      sim.adult = (sim.can_save_carpenters && rules.gerudoCard == "vanilla") || (sim.fortress_access && sim.gerudo_card && rules.gerudoCard == "shuffled");
      sim.child = false;
      break;
  }
  sim.entry = sim.adult || sim.child;
}

function unlocksChecksInDungeon() {
  const dungeons = ["deku", "dodongos", "jabu", "forest", "fire", "water", "shadow", "spirit"];
  for (const dungeon of dungeons) {
    const items = [
      "hookshot", "goron_bracelet", "hovers", "bow", "time", "sling", "longshot", "dins", "magic", "irons", "silver_scale", "lullaby", "farores", "bombs", "chus", "hammer",
      "boomerang", "mirror", "silver_gauntlets", "fire_arrows", "bolero", "nocturne", "ice_arrows", "rutos_letter", "golden_scale", "requiem", "gerudo_card", "eponas", "kokiri_sword"
    ];
    if (rules.smallKeys == "keyRings") items.push(`${dungeon}_key_ring`);
    const sim = { ...player };

    const startCount = areaCheckAccess(dungeon, player, "sim");
    let itemsUnlockChecks = [];
    for (const item of items) {
      if (sim[item]) continue;
      if (item == "longshot" && !sim["hookshot"]) continue;
      if (item == "silver_gauntlets" && !sim["goron_bracelet"]) continue;
      if (item == "golden_scale" && !sim["silver_scale"]) continue;
      sim[item] = true;

      sim[`current_${dungeon}_keys`] += Math.round(startCount * 0.45);
      const newCount = areaCheckAccess(dungeon, sim, "sim");
      if (newCount > startCount) {
        itemsUnlockChecks.push({
          name: item,
          count: newCount
        });
      }
      sim[item] = false;
      sim[`current_${dungeon}_keys`] -= Math.round(startCount * 0.45);
    }
    itemsUnlockChecks.sort((a, b) => b.count - a.count);
    updateDungeonItemImages(dungeon, itemsUnlockChecks.map(obj => obj.name));
  }
  updateDungeonItemImages("pocket");
}
function areaCheckAccess(area, sim, type) {
  const keys = (count) => {
    const meetsCount = sim[`current_${area}_keys`] >= count;
    const meetsSetting = rules.smallKeys !== "keyRings" || sim[`${area}_key_ring`];
    return meetsCount && meetsSetting;
  };
  const bossKey = sim[`${area}_boss_key`];
  const { time, bombs, chus, silver_scale, lullaby, silver_gauntlets, magic, requiem, gerudo_card, eponas } = sim;
  const explosives = (bombs || chus);
  const dins = sim.dins && magic;
  const farores = sim.farores && magic;
  const wallet2 = sim.giants_wallet;
  const child_can_enter_river = explosives || silver_scale || Spawn.child_zd || Spawn.child_zr;
  const bottle = sim.bottle || (sim.rutos_letter && child_can_enter_river);
  const strength1 = sim.goron_bracelet;

  updateEntranceAccess(area, sim);
  const { adult, child, entry } = sim;

  const hovers = sim.hovers && adult;
  const bow = sim.bow && adult;
  const hammer = sim.hammer && adult;
  const irons = sim.irons && adult;
  const longshot = sim.longshot && adult;
  const mirror = sim.mirror && adult;
  const ice_arrows = sim.ice_arrows && adult;
  const fire_arrows = sim.fire_arrows && adult;
  const hookshot = sim.hookshot && adult;
  const strength2 = silver_gauntlets && adult;

  const sling = sim.sling && child;
  const boomerang = sim.boomerang && child;

  const fireSource = (dins || (bow && fire_arrows)) && magic;
  const blueFireArrows = ice_arrows && bow && magic && rules.blueFireArrows == "on";

  let checks = {};
  let peeks = {};
  if (!entry) {
    assignChecks(checks, peeks, type);
    return 0;
  }
  if (area === "deku") {
    checks = {
      deku_lobby: true,
      deku_slingshot: true,
      deku_slingshot_room_side: true,
      deku_compass: true,
      deku_compass_room_side: true,
      deku_basement: true,
      deku_queen_gohma: (child || (adult && (fireSource || bow))),
      gs_deku_basement_back: boomerang && explosives,
      gs_deku_basement_gate: true,
      gs_deku_basement_vines: true,
      gs_deku_compass: true,
    }
    if (type !== "sim") {
      peeks.gs_deku_basement_back = explosives;
    }
  } else if (area === "dodongos") {
    const afterWall = explosives || strength1 || hammer || blueFireArrows;
    const floor2 = afterWall && (explosives || strength1 || dins || bow);
    checks = {
      dodongos_map: afterWall,
      dodongos_compass: afterWall,
      dodongos_bomb_flower_platform: floor2,
      dodongos_bombs: floor2,
      dodongos_end_of_bridge: floor2 && (explosives || hammer),
      dodongos_above_king: floor2 && explosives,
      dodongos_king_dodongo: floor2 && explosives,
      gs_dodongos_east_side: afterWall,
      gs_dodongos_stair_vines: floor2,
      gs_dodongos_above_stairs: floor2 && (hookshot || boomerang),
      gs_dodongos_scarecrow: afterWall,
      gs_dodongos_before_king: explosives,
      ...(rules.scrubSanity == "all" && {
        scrub_dodongos_1: afterWall,
        scrub_dodongos_2: afterWall,
        scrub_dodongos_3: floor2 && (explosives || strength1),
        scrub_dodongos_4: floor2 && (explosives || strength1),
      }),
    }
    if (type !== "sim") {
      if (rules.csmc == "on") {
        peeks.dodongos_end_of_bridge = afterWall;
      }
      peeks.h_dodongos = afterWall;
      peeks.gs_dodongos_above_stairs = floor2 && (hookshot || boomerang || explosives || sling || bow || dins);
    }
  } else if (area === "jabu") {
    const afterSwitch = explosives || boomerang || sling || hookshot || bow;
    checks = {
      jabu_boomerang: afterSwitch,
      jabu_map: afterSwitch && boomerang,
      jabu_compass: afterSwitch && boomerang,
      jabu_barinade: afterSwitch && boomerang,
      scrub_jabu: afterSwitch,
      gs_jabu_vines: afterSwitch,
      gs_jabu_near_octo_1: afterSwitch && boomerang,
      gs_jabu_near_octo_2: afterSwitch && boomerang,
      gs_jabu_near_boss: afterSwitch && boomerang,
    }
    if (type !== "sim") {
      peeks.gs_jabu_near_octo_1 = afterSwitch && (boomerang || sling);
      peeks.gs_jabu_near_octo_2 = afterSwitch && (boomerang || sling);
    }
  } else if (area === "forest") {
    const courtyard = time || (bow && hookshot) || ((hovers || strength1) && keys(1))
    const upperCourtyard = (hovers || strength1) && keys(1)
    const afterBlock = adult && strength1;
    checks = {
      forest_first: true,
      forest_stalfos: true,
      forest_midCourtyard: courtyard && ((hookshot || hovers) || (strength1 && (bow || dins) && keys(5))),
      forest_highCourtyard: courtyard,
      forest_lowCourtyard: courtyard,
      forest_blockRoom: afterBlock && keys(1) && (bow || sling),
      forest_bossKey: afterBlock && keys(2) && bow,
      forest_floormaster: upperCourtyard,
      forest_red: afterBlock && bow && keys(3),
      forest_bow: afterBlock && keys(3),
      forest_blue: afterBlock && bow && keys(3),
      forest_fallingCeiling: afterBlock && (bow || dins) && keys(5),
      forest_nearBoss: afterBlock && bow && keys(5),
      forest_phantomGanon: afterBlock && bow && keys(5) && bossKey,
      gs_forest_first: hookshot,
      gs_forest_lobby: hookshot,
      gs_forest_outdoor_east: hookshot && courtyard,
      gs_forest_outdoor_west: (courtyard && longshot) || (upperCourtyard && hookshot),
      gs_forest_basement: afterBlock && hookshot && bow && keys(5),
    }
    if (type !== "sim") {
      if (rules.csmc === "on") {
        peeks.forest_midCourtyard = courtyard;
        peeks.forest_blockRoom = keys(1) && (bow || sling);
      }
      peeks.gs_forest_outdoor_west = (bow && hookshot) || (upperCourtyard && bombs) || (courtyard && (bow || chus));
      peeks.gs_forest_outdoor_east = hookshot || hovers || bow || (time && chus);
    }
  } else if (area === "fire") {
    const afterClimb = adult && keys(3) && (bow || hookshot || explosives);
    checks = {
      fire_nearBoss: true,
      fire_hammer1: hammer && keys(0),
      fire_hammer2: hammer && keys(0),
      fire_lavaOpen: keys(1),
      fire_lavaBomb: keys(1) && (bombs || (chus && adult)),
      fire_volvagia: bossKey && hammer,
      fire_lowerMaze: afterClimb,
      fire_sideRoom: afterClimb,
      fire_map: afterClimb && ((keys(4) && bow) || keys(5)),
      fire_upperMaze: afterClimb && keys(5),
      fire_shortcut: afterClimb && keys(5) && explosives,
      fire_scarecrow: afterClimb && keys(5) && hookshot,
      fire_compass: afterClimb && keys(6),
      fire_sotGoron: afterClimb && keys(6) && hammer && (time || explosives),
      fire_top: afterClimb && keys(6) && explosives,
      gs_fire_time: adult && keys(1),
      gs_fire_bomb_wall: afterClimb && explosives,
      gs_fire_scarecrow_1: afterClimb && keys(5) && hookshot,
      gs_fire_scarecrow_2: afterClimb && keys(5) && hookshot,
      gs_fire_basement: hammer,
    }
    if (type !== "sim") {
      if (rules.csmc === "on") {
        peeks.fire_hammer2 = true;
        peeks.fire_upperMaze = afterClimb;
        peeks.fire_shortcut = afterClimb;
      }
    }
  } else if (area === "water") {
    const drained = lullaby && (irons || longshot);
    const pillar = drained && (bow || dins || keys(1));
    const river = keys(2) && hookshot && time
    checks = {
      water_compass: drained || irons,
      water_map: irons || longshot,
      water_cracked: explosives && (drained || (irons && chus)),
      water_torches: drained && (bow || dins || child),
      water_block: strength1 && (irons || (drained && (bow && hookshot) || (hovers && bombs))),
      water_pillar: pillar && irons && hookshot,
      water_dLink: keys(2) && hookshot,
      water_river: river && bow,
      water_dragon: (river && bow) || (drained && strength1 && ((irons && hookshot) || chus) && (silver_scale || irons)),
      water_bossKey: (drained || irons) && (longshot || hovers) && keys(2),
      water_morpha: adult && bossKey && (rules.waterHop == "allowed" || longshot),
      gs_water_south_basement: drained && explosives && hookshot,
      gs_water_river: river,
      gs_water_central: pillar && (longshot || (farores && hookshot)),
      gs_water_near_boss_key: (drained || irons) && (longshot || hovers) && keys(1),
      gs_water_platform_room: hookshot && keys(1),
    }
    if (type !== "sim") {
      if (rules.csmc === "on") {
        peeks.water_cracked = irons || longshot;
        peeks.water_block = adult;
        peeks.water_river = river;
      }
      peeks.gs_water_central = pillar && (longshot || (farores && hookshot) || chus || bow);
    }
  } else if (area === "shadow") {
    const afterWall = adult && hovers && explosives && keys(1);
    const afterFans = adult && hovers && explosives && hookshot && keys(3);
    const afterBoat = adult && hovers && explosives && hookshot && lullaby && keys(4);
    checks = {
      shadow_map: adult && (hovers || hookshot),
      shadow_hovers: adult && (hovers || hookshot),
      shadow_compass: adult && hovers,
      shadow_earlySilvers: adult && hovers,
      shadow_spinning1: afterWall,
      shadow_spinning2: afterWall,
      shadow_spikesLower: afterWall,
      shadow_spikesUpper: afterWall,
      shadow_spikesSwitch: afterWall,
      shadow_redeadSilvers: afterWall && keys(2),
      shadow_pot: afterWall && hookshot && keys(2),
      shadow_wind: afterFans,
      shadow_bombable: afterFans,
      shadow_gibdos: afterFans,
      shadow_dins1: afterBoat && dins,
      shadow_dins2: afterBoat && dins,
      shadow_floormaster: afterBoat,
      shadow_bongo: afterBoat && (bow || longshot || chus) && bossKey && keys(5),
      gs_shadow_like_like: afterWall,
      gs_shadow_crusher: afterWall && (hookshot || bombs),
      gs_shadow_giant_pot: afterWall && keys(2) && hookshot,
      gs_shadow_near_boat: afterFans && longshot && keys(4),
      gs_shadow_three_pots: afterBoat,
    }
    if (type !== "sim") {
      if (rules.csmc === "on") {
        peeks.shadow_dins1 = afterBoat;
        peeks.shadow_dins2 = afterBoat;
      }
      peeks.gs_shadow_crusher = afterWall;
      peeks.gs_shadow_near_boat = afterFans && (longshot || bow || chus) && keys(4);
    }
  } else if (area === "spirit") {
    const childProjectile = explosives || sling || boomerang;
    const adultProjectile = explosives || bow || hookshot;
    checks = {
      spirit_childLeft: child && (sling || boomerang || chus),
      spirit_childRight: child && (sling || boomerang || chus),
      spirit_childClimb1: keys(1) && ((childProjectile && child) || (adultProjectile && strength2)),
      spirit_childClimb2: keys(1) && ((childProjectile && child) || (adultProjectile && strength2)),
      spirit_map: keys(1) && ((child && explosives) || (((fireSource || bow) && strength2))),
      spirit_sunRoom: keys(1) && ((child && explosives) || (((fireSource || bow) && strength2))),
      spirit_rightHand: keys(2) && ((child && explosives) || (strength2 && (bow || hookshot || chus))),
      spirit_adultLeft: strength2 && hookshot && lullaby,
      spirit_adultRight: strength2 && (bow || hookshot || chus),
      spirit_rotatingMirror1: strength2 && keys(1),
      spirit_rotatingMirror2: strength2 && keys(1),
      spirit_lullabyHand: strength2 && keys(1) && lullaby,
      spirit_lullabyHigh: strength2 && keys(1) && lullaby && (hookshot || hovers),
      spirit_nearFourArmos: strength2 && keys(2) && explosives && mirror,
      spirit_invisible1: strength2 && keys(2) && explosives,
      spirit_invisible2: strength2 && keys(2) && explosives,
      spirit_leftHand: strength2 && keys(2) && explosives,
      spirit_bossKey: strength2 && keys(3) && lullaby,
      spirit_tippyTop: strength2 && keys(3) && mirror,
      spirit_twinrova: strength2 && keys(3) && mirror && explosives && bossKey && hookshot,
      gs_spirit_metal_fence: child && (boomerang || sling || chus),
      gs_spirit_before_child_knuckle: (explosives && boomerang && keys(1) && child) || (hookshot && strength2 && keys(1)),
      gs_spirit_boulder_room: strength2 && time && (bow || hookshot || chus),
      gs_spirit_lobby: strength2 && keys(1) && (hookshot || hovers),
      gs_spirit_child_climb: keys(1),
    }
    const fortress = eponas || longshot || requiem || Spawn.adult_gf || Spawn.adult_wasteland || (rules.valleyWithHook == "allowed" && hookshot);
    const afterQuicksand = fortress && (rules.gerudoCard == "vanilla" || gerudo_card);
    const colossus = afterQuicksand || requiem || Spawn.child_colossus || Spawn.adult_colossus || Spawn.adult_wasteland || Spawn.child_wasteland || checks.spirit_leftHand || checks.spirit_rightHand;
    if (type !== "sim") {
      if (rules.csmc === "on") {
        peeks.spirit_childLeft = child;
        peeks.spirit_childRight = child;
        peeks.spirit_adultLeft = strength2 && lullaby && (bow || hookshot || explosives);
        peeks.spirit_rightHand = colossus;
      }
      peeks.gs_spirit_before_child_knuckle = (explosives && (boomerang || sling || chus) && keys(1) && child) || ((hookshot || bow || chus || dins) && strength2 && keys(1));
      peeks.gs_spirit_boulder_room = strength2 && (bow || hookshot || chus);
      peeks.gs_spirit_lobby = (strength2 && keys(1) && (hookshot || hovers || bow)) || (explosives && sling && keys(1));
    }
  }
  else if (area === "well" && child) {
    checks = {
      well_fakeRight: true,
      well_backBombable: explosives,
      well_waterLeft: lullaby,
      well_coffin: true,
      well_centerSmall: true,
      well_centerBig: true,
      well_frontBombable: explosives,
      well_deadHand: lullaby,
      well_invisible: lullaby,
      well_waterFront: lullaby,
      well_fakeLeft: true,
      well_locked1: keys(1) || (lullaby && explosives),
      well_locked2: keys(1) || (lullaby && explosives),
      well_basement: explosives || ((keys(1) || dins) && strength1),
      gs_well_west_inner: boomerang && keys(1),
      gs_well_east_inner: boomerang && keys(1),
      gs_well_like_like: keys(1),
    }
    if (rules.csmc === "on") {
      peeks.well_backBombable = true;
      peeks.well_waterLeft = true;
      peeks.well_frontBombable = true;
      peeks.well_waterFront = true;
      peeks.well_locked2 = true;
      peeks.well_basement = true;
    }
    peeks.gs_well_west_inner = keys(1);
    peeks.gs_well_east_inner = keys(1);
  }
  else if (area === "gtg") {
    const climb = hookshot || hovers || bombs;
    checks = {
      gtg_lobbyLeft: bow || sling,
      gtg_lobbyRight: bow || sling,
      gtg_stalfos: true,
      gtg_wolfos: true,
      gtg_silvers1: climb && strength2,
      gtg_silvers2: climb && strength2,
      gtg_silvers3: climb && strength2,
      gtg_silvers4: climb && strength2,
      gtg_eyes: climb && bow,
      gtg_aboveEyes: climb && bow,
      gtg_keese: climb,
      gtg_flamesChest: climb,
      gtg_freestanding: keys(2) || (explosives && (time || child)) || (climb && time),
      gtg_right2: keys(2) || (explosives && (time || child)) || (climb && time),
      gtg_right3: keys(2) || (explosives && (time || child)) || (climb && time),
      gtg_beamos: explosives,
      gtg_left1: keys(1),
      gtg_left2: keys(2),
      gtg_left3: keys(4),
      gtg_left4: keys(5),
      gtg_final: keys(7),
      gtg_toilet: irons && time && hookshot,
    }
    if (rules.csmc === "on") {
      peeks.gtg_aboveEyes = true;
      peeks.gtg_freestanding = keys(2) || explosives || climb;
      peeks.gtg_right2 = true;
      peeks.gtg_right3 = true;
      peeks.gtg_left1 = keys(1) || (climb && bow);
      peeks.gtg_left2 = true;
      peeks.gtg_left3 = true;
      peeks.gtg_left4 = true;
      peeks.gtg_final = true;
    }
  }
  else if (area === "ice") {
    checks = {
      ice_map: (bottle || blueFireArrows) && (adult || explosives),
      ice_hp: (bottle || blueFireArrows) && (adult || explosives || wallet2),
      ice_compass: (bottle || blueFireArrows) && (adult || explosives || wallet2),
      ice_irons: (bottle || blueFireArrows) && (adult || explosives || wallet2),
      serenadeCheck: (bottle || blueFireArrows) && (adult || explosives || wallet2),
      gs_ice_spinning_scythe: hookshot,
      gs_ice_hp_room: (bottle || blueFireArrows) && hookshot,
      gs_ice_block_room: (bottle || blueFireArrows) && (hookshot || (hovers && bow)),
    }
    peeks.gs_ice_spinning_scythe = hookshot || bow || explosives || dins;
    peeks.gs_ice_hp_room = (bottle || blueFireArrows) && (hookshot || bow || explosives || dins);
    peeks.gs_ice_block_room = (bottle || blueFireArrows) && (hookshot || bow || explosives || dins);
  }
  
  assignChecks(checks, peeks, type);

  const excludeGs = !rules.skullsanity == "off";
  return Object.entries(checks).filter(([k, v]) => v && (!excludeGs || !k.includes('gs_'))).length;
}
function assignChecks(checks, peeks, type) {
  if (type === "checkAccess") {
    Object.assign(checkAccess, checks);
    Object.assign(checkPeek, peeks);
  }
  else if (type === "couldAccess") {
    Object.assign(checkCouldAccess, checks);
    Object.assign(checkCouldPeek, peeks);
  }
}

function updateDungeonItemImages(dungeon, items) {
  const prefix = window[dungeon + "Placement"];

  for (let i = 0; i < 3; i++) {
    const itemSlotNumber = i + 1;
    const imgElement = document.getElementById(prefix + "_item" + itemSlotNumber);

    if (imgElement) {
      if (dungeon === "pocket") { imgElement.src = ""; continue; }
      const itemName = items[i];
      imgElement.src = itemName ? itemToImageMap[itemName] : "";
    }
  }
}