function route_deku() {
	nextChecks.length = 0;
	nextIndex = 0;
	nextChecks.push("deku_lobby", "deku_slingshot", "deku_slingshot_room_side", "deku_compass", "deku_compass_room_side", "deku_basement", "deku_queen_gohma");
	Update();
} 

function route_dodongos() {
	nextChecks.length = 0;
	nextIndex = 0;
	nextChecks.push("dodongos_map", "dodongos_compass", "dodongos_bomb_flower_platform", "dodongos_bomb_bag", "dodongos_end_of_bridge", "dodongos_above_king");
	Update();
}

function route_jabu() {
	nextChecks.length = 0;
	nextIndex = 0;
	nextChecks.push("jabu_map", "jabu_compass", "jabu_boomerang", "jabu_barinade");
	Update();
}

function route_forest() {
	nextChecks.length = 0;
	nextIndex = 0;
	if (event.button == 2) {nextChecks.push("forest_first", "forest_stalfos", "forest_midCourtyard", "forest_highCourtyard", "forest_lowCourtyard", "forest_blockRoom", "forest_floormaster", "forest_bossKey","forest_red", "forest_bow", "forest_blue", "forest_fallingCeiling", "forest_nearBoss", "forest_phantomGanon");}
	if (event.button == 0) {nextChecks.push("forest_first", "forest_stalfos", "forest_midCourtyard", "forest_highCourtyard", "forest_lowCourtyard", "forest_blockRoom", "forest_floormaster", "forest_bossKey","forest_red", "forest_bow", "forest_blue", "forest_fallingCeiling", "forest_nearBoss", "forest_phantomGanon");}
	Update();
}

function route_fire() {
	nextChecks.length = 0;
	nextIndex = 0;
	if (event.button == 2) {nextChecks.push("fire_nearBoss", "fire_volvagia", "fire_lavaOpen", "fire_lavaBomb", "fire_volvagia", "fire_lowerMaze", "fire_sideRoom", "fire_map", "fireupperMaze", "fire_shortcut", "fire_volvagia", "fire_scarecrow", "fire_compass", "fire_volvagia", "fire_top", "fire_sotGoron", "fire_top", "fire_volvagia");}
	if (event.button == 0) {nextChecks.push("fire_nearBoss", "fire_volvagia", "fire_lavaOpen", "fire_lavaBomb", "fire_volvagia", "fire_lowerMaze", "fire_sideRoom", "fire_map", "fireupperMaze", "fire_shortcut", "fire_volvagia", "fire_scarecrow", "fire_compass", "fire_volvagia", "fire_top", "fire_sotGoron", "fire_top", "fire_volvagia");}
	Update();
}

function route_water() {
	nextChecks.length = 0;
	nextIndex = 0;
	if (event.button == 2) {nextChecks.push("water_compass", "water_map", "water_cracked", "water_torches", "water_bossKey", "water_compass", "water_block", "water_bossKey", "water_pillar", "water_dLink", "water_river","water_dragon", "water_morpha");}
	if (event.button == 0) {nextChecks.push("water_compass", "water_map", "water_cracked", "water_torches", "water_bossKey", "water_compass", "water_block", "water_bossKey", "water_pillar", "water_dLink", "water_river","water_dragon", "water_morpha");}
	Update();
}

function route_spirit() {
	nextChecks.length = 0;
	nextIndex = 0;
	if (event.button == 2) {nextChecks.push("spirit_adultLeft", "spirit_adultRight", "spirit_rotatingMirror1", "spirit_rotatingMirror2", "spirit_map", "spiritLullabyHand", "spiritChildClimb1", "spirit_childClimb2","spirit_lullabyHigh", "spirit_nearFourArmos", "spirit_invisible1", "spirit_invisible2", "spirit_leftHand", "spirit_rightHand", "spirit_bossKey", "spirit_tippyTop", "spirit_twinrova");}
	if (event.button == 0) {nextChecks.push("spirit_childLeft", "spirit_childRight", "spirit_childClimb1", "spirit_childClimb2", "spirit_map", "spirit_sunRoom", "spirit_rightHand");}
	Update();
}

function route_shadow() {
	nextChecks.length = 0;
	nextIndex = 0;
	if (event.button == 2) {nextChecks.push("shadow_map", "shadow_hovers", "shadow_compass", "shadow_earlySilvers", "shadow_spinning1", "shadow_spinning2", "shadow_spikesLower", "shadow_spikesUpper", "shadow_spikesSwitch", "shadow_pot", "shadow_redeadSilvers", "shadow_pot", "shadow_wind", "shadow_bombable", "shadow_gibdos", "shadow_dins1", "shadow_dins2", "shadow_floormaster", "shadow_bongo");}
	if (event.button == 0) {nextChecks.push("shadow_map", "shadow_hovers", "shadow_compass", "shadow_earlySilvers", "shadow_spinning1", "shadow_spinning2", "shadow_spikesLower", "shadow_spikesUpper", "shadow_spikesSwitch", "shadow_pot", "shadow_redeadSilvers", "shadow_pot", "shadow_wind", "shadow_bombable", "shadow_gibdos", "shadow_dins1", "shadow_dins2", "shadow_floormaster", "shadow_bongo");}
	Update();
}

function route_well() {
	nextChecks.length = 0;
	nextIndex = 0;
	if (event.button == 2) {nextChecks.push("well_backBombable", "well_waterLeft", "well_coffin", "well_centerBig", "well_fakeLeft", "well_frontBombable", "well_waterFront", "well_invisible", "well_deadHand", "well_waterFront", "well_fakeRight", "well_centerSmall", "well_locked1", "well_locked2", "well_basement");}
	if (event.button == 0) {nextChecks.push("well_backBombable", "well_waterLeft", "well_coffin", "well_centerBig", "well_fakeLeft", "well_frontBombable", "well_waterFront", "well_invisible", "well_deadHand", "well_waterFront", "well_fakeRight", "well_centerSmall", "well_locked1", "well_locked2", "well_basement");}
	Update();
}

function route_ice() {
	nextChecks.length = 0;
	nextIndex = 0;
	nextChecks.push("ice_glacier_hp", "ice_bottom_of_fountain", "ice_map", "ice_hp", "ice_compass", "ice_irons");
	Update();
}

function route_gtg() {
	nextChecks.length = 0;
	nextIndex = 0;
	if (event.button == 2) {nextChecks.push("gtg_lobbyLeft", "gtg_lobbyRight", "gtg_beamos", "gtg_freestanding", "gtg_right2", "gtg_right3", "gtg_keese", "gtg_flamesChest","gtg_left1", "gtg_left2", "gtg_left3", "gtg_left4", "gtg_final", "gtg_stalfos", "gtg_wolfos", "gtg_silvers1", "gtg_silvers2", "gtg_silvers3", "gtg_silvers4", "gtg_eyes", "gtg_aboveEyes", "gtg_left1", "gtg_left2", "gtg_left3", "gtg_left4", "gtg_final","gtg_toilet");}
	if (event.button == 0) {nextChecks.push("gtg_lobbyRight", "gtg_lobbyLeft", "gtg_stalfos", "gtg_wolfos", "gtg_silvers1", "gtg_silvers2", "gtg_silvers3", "gtg_silvers4", "gtg_eyes", "gtg_aboveEyes", "gtg_keese", "gtg_flamesChest", "gtg_freestanding", "gtg_right2", "gtg_right3", "gtg_beamos", "gtg_left1", "gtg_left2", "gtg_left3","gtg_left4", "gtg_final","gtg_toilet");}
	Update();
}

function route_ganons() {
	nextChecks.length = 0;
	nextIndex = 0;
	if (event.button == 2) {nextChecks.push("ganons_lightTrial1", "ganons_lightTrial2", "ganons_lightTrial3", "ganons_lightTrial4", "ganons_lightTrial5", "ganons_lightTrial6", "ganons_lightTrial7", "ganons_lightLullaby", "ganons_spiritTrial1", "ganons_spiritTrial2", "ganons_forestTrial", "ganons_waterTrial1", "ganons_waterTrial2", "ganons_shadowTrial1", "ganons_shadowTrial2", "ganons_lightTrial1", "ganons_lightTrial2", "ganons_lightTrial3", "ganons_lightTrial4", "ganons_lightTrial5", "ganons_lightTrial6", "ganons_lightTrial7", "ganons_lightLullaby");}
	if (event.button == 0) {nextChecks.push("ganons_lightTrial1", "ganons_lightTrial2", "ganons_lightTrial3", "ganons_lightTrial4", "ganons_lightTrial5", "ganons_lightTrial6", "ganons_lightTrial7", "ganons_lightLullaby", "ganons_spiritTrial1", "ganons_spiritTrial2", "ganons_forestTrial", "ganons_waterTrial1", "ganons_waterTrial2", "ganons_shadowTrial1", "ganons_shadowTrial2", "ganons_lightTrial1", "ganons_lightTrial2", "ganons_lightTrial3", "ganons_lightTrial4", "ganons_lightTrial5", "ganons_lightTrial6", "ganons_lightTrial7", "ganons_lightLullaby");}
	Update();
}

