function route_gtg() {
	nextChecks.length = 0;
	nextIndex = 0;
	if (event.button == 2) {nextChecks.push("gtg_lobbyLeft", "gtg_lobbyRight", "gtg_beamos", "gtg_freestanding", "gtg_right2", "gtg_right3", "gtg_keese", "gtg_flamesChest","gtg_left1", "gtg_left2", "gtg_left3", "gtg_left4", "gtg_final", "gtg_stalfos", "gtg_wolfos", "gtg_silvers1", "gtg_silvers2", "gtg_silvers3", "gtg_silvers4", "gtg_eyes", "gtg_aboveEyes", "gtg_left1", "gtg_left2", "gtg_left3", "gtg_left4", "gtg_final","gtg_toilet");}
	if (event.button == 0) {nextChecks.push("gtg_lobbyRight", "gtg_lobbyLeft", "gtg_stalfos", "gtg_wolfos", "gtg_silvers1", "gtg_silvers2", "gtg_silvers3", "gtg_silvers4", "gtg_eyes", "gtg_aboveEyes", "gtg_keese", "gtg_flamesChest", "gtg_freestanding", "gtg_right2", "gtg_right3", "gtg_beamos", "gtg_left1", "gtg_left2", "gtg_left3","gtg_left4", "gtg_final","gtg_toilet");}
	Update();
}