function Update() {

	if(Game.theme == "dark" && Game.themeChange) {
		if (Person.isBoring != true) {
			Game.bomb_bag_img= "https://i.imgur.com/Szzkd7F.png";
			Game.letter_img= "https://i.imgur.com/iJIaSHd.png";
			Game.boomerang_img= "https://i.imgur.com/7hFOlue.png";
			Game.hookshot_img= "https://i.imgur.com/rxxwYMo.png";
			Game.bow_img= "https://i.imgur.com/2epNjhW.png";
			Game.goron_bracelet_img= "https://i.imgur.com/Z54r5V4.png";
			Game.hammer_img= "https://i.imgur.com/Kd3ocEG.png";
			Game.iron_boots_img= "https://i.imgur.com/XGfzsLq.png";
			Game.golden_scale_img= "https://i.imgur.com/RzHFZO0.png";
			Game.longshot_img= "https://i.imgur.com/bnHAV6n.png";
			Game.silver_gauntlets_img= "https://i.imgur.com/xuLKMEz.png";
			Game.mirror_shield_img= "https://i.imgur.com/rE6YCpS.png";
			Game.dins_fire_img= "https://i.imgur.com/yVKrH5F.png";
			Game.magic_meter_img= "https://i.imgur.com/rtHPkHm.png";
			Game.hover_boots_img= "https://i.imgur.com/9Y8VU3w.png";
			document.getElementById("gan_req2").src="https://i.imgur.com/ryADixy.png";
			document.getElementById("gan_req1").src="https://i.imgur.com/rtHPkHm.png";
			document.getElementById("gan_req3").src="https://i.imgur.com/2epNjhW.png";
			document.getElementById("lullabyimg").src="https://i.imgur.com/W5BH8Kx.png";
			document.getElementById("eponasimg").src="https://i.imgur.com/GK2Wz4B.png";
			document.getElementById("sariasimg").src="https://i.imgur.com/LwXDhSl.png";
			document.getElementById("sunsimg").src="https://i.imgur.com/aD6smol.png";
			document.getElementById("sotimg").src="https://i.imgur.com/yxe0Ig2.png";
			document.getElementById("sosimg").src="https://i.imgur.com/ZXOSeAb.png";
			document.getElementById("minuetimg").src="https://i.imgur.com/zlHK7ia.png";
			document.getElementById("boleroimg").src="https://i.imgur.com/4HjyZki.png";
			document.getElementById("serenadeimg").src="https://i.imgur.com/TExRzzb.png";
			document.getElementById("requiemimg").src="https://i.imgur.com/wczkkXu.png";
			document.getElementById("nocturneimg").src="https://i.imgur.com/uoKC8f9.png";
			document.getElementById("preludeimg").src="https://i.imgur.com/Smte0D8.png";
			document.getElementById("faroresimg").src="https://i.imgur.com/nUPfeZt.png";
			document.getElementById("bottleimg").src="https://i.imgur.com/2a90Fgd.png";
			document.getElementById("firearrowsimg").src="https://i.imgur.com/caxHISp.png";
			document.getElementById("silverscaleimg").src="https://i.imgur.com/wK17k2u.png";
		}
		else {
			Game.bomb_bag_img= "https://i.imgur.com/Crv3yEP.png";
			Game.letter_img= "https://i.imgur.com/U5I0eI3.png";
			Game.boomerang_img= "https://i.imgur.com/t3Yh4u9.png";
			Game.hookshot_img= "https://i.imgur.com/OsimO2I.png";
			Game.bow_img= "https://i.imgur.com/Q1A4IKm.png";
			Game.goron_bracelet_img= "https://i.imgur.com/eNhXvnn.png";
			Game.hammer_img= "https://i.imgur.com/87SDP6J.png";
			Game.iron_boots_img= "https://i.imgur.com/BdwilDO.png";
			Game.golden_scale_img= "https://i.imgur.com/b74ulVL.png";
			Game.longshot_img= "https://i.imgur.com/niB4C6a.png";
			Game.silver_gauntlets_img= "https://i.imgur.com/nGTIfUH.png";
			Game.mirror_shield_img= "https://i.imgur.com/tra2ZuV.png";
			Game.dins_fire_img= "https://i.imgur.com/jJldvdx.png";
			Game.magic_meter_img= "https://i.imgur.com/QRvECAU.png";
			Game.hover_boots_img= "https://i.imgur.com/CAodFbs.png";
			document.getElementById("gan_req2").src="https://i.imgur.com/TsCBezD.png";
			document.getElementById("gan_req1").src="https://i.imgur.com/QRvECAU.png";
			document.getElementById("gan_req3").src="https://i.imgur.com/Q1A4IKm.png";
			document.getElementById("lullabyimg").src="https://i.imgur.com/xY1N3Bl.png";
			document.getElementById("eponasimg").src="https://i.imgur.com/rmRRvB6.png";
			document.getElementById("sariasimg").src="https://i.imgur.com/0XvMkF9.png";
			document.getElementById("sunsimg").src="https://i.imgur.com/k2f8UDu.png";
			document.getElementById("sotimg").src="https://i.imgur.com/iW2aPfR.png";
			document.getElementById("sosimg").src="https://i.imgur.com/JUIqB9o.png";
			document.getElementById("minuetimg").src="https://i.imgur.com/mUPUwnV.png";
			document.getElementById("boleroimg").src="https://i.imgur.com/vjYXIbi.png";
			document.getElementById("serenadeimg").src="https://i.imgur.com/4pjNCKa.png";
			document.getElementById("requiemimg").src="https://i.imgur.com/xSjs2qm.png";
			document.getElementById("nocturneimg").src="https://i.imgur.com/13pSyWB.png";
			document.getElementById("preludeimg").src="https://i.imgur.com/cl7N7z9.png";
			document.getElementById("faroresimg").src="https://i.imgur.com/L3ddFVs.png";
			document.getElementById("bottleimg").src="https://i.imgur.com/d2LSzw7.png";
			document.getElementById("firearrowsimg").src="https://i.imgur.com/vpGexj9.png";
			document.getElementById("silverscaleimg").src="https://i.imgur.com/QfdjqYK.png";
		}
		Game.themeChange = false;
		document.getElementById("checks_remaining").style.color="lightblue";
		document.getElementById("logically_accessible").style.color="chartreuse";
		var all = document.getElementsByClassName('logic_check_text');
		for (var i = 0; i < all.length; i++) {
		all[i].style.color = 'chartreuse';
		}
		if(document.getElementById('text_kok_eme') != null) {document.getElementById('text_kok_eme').style.color = 'lightgreen';}
		if(document.getElementById('text_gor_rub') != null) {document.getElementById('text_gor_rub').style.color = '#ff4d4d';}
		if(document.getElementById('text_zor_sap') != null) {document.getElementById('text_zor_sap').style.color = 'lightblue';}
		if(document.getElementById('text_for_med') != null) {document.getElementById('text_for_med').style.color = 'lightgreen';}
		if(document.getElementById('text_fir_med') != null) {document.getElementById('text_fir_med').style.color = '#ff4d4d';}
		if(document.getElementById('text_wat_med') != null) {document.getElementById('text_wat_med').style.color = 'lightblue';}
		if(document.getElementById('text_gan') != null) {document.getElementById('text_gan').style.color = '#660000';}
		document.body.style.backgroundColor = "#505050";
	}
	if(Game.theme == "light" && Game.themeChange) {
		Game.bomb_bag_img= "https://i.imgur.com/TszSBld.png";
		Game.letter_img= "https://i.imgur.com/WAY6Qpc.png";
		Game.boomerang_img= "https://i.imgur.com/jH5MR3n.png";
		Game.hookshot_img= "https://i.imgur.com/HHCTVla.png";
		Game.bow_img= "https://i.imgur.com/muCeqKm.png";
		Game.goron_bracelet_img= "https://i.imgur.com/y0ob3bv.png";
		Game.hammer_img= "https://i.imgur.com/w3sKOvf.png";
		Game.iron_boots_img= "https://i.imgur.com/qqczH2p.png";
		Game.golden_scale_img= "https://i.imgur.com/HVbSHKl.png";
		Game.longshot_img= "https://i.imgur.com/Ps6X4TE.png";
		Game.silver_gauntlets_img= "https://i.imgur.com/WFBtJD9.png";
		Game.mirror_shield_img= "https://i.imgur.com/5hVMn18.png";
		Game.dins_fire_img= "https://i.imgur.com/zcRc5ZI.png";
		Game.magic_meter_img= "https://i.imgur.com/uAyOlX8.png";
		Game.hover_boots_img= "https://i.imgur.com/DSzo0JN.png";
		document.getElementById("gan_req2").src="https://i.imgur.com/NsuqX43.png";
		document.getElementById("gan_req1").src="https://i.imgur.com/uAyOlX8.png";
		document.getElementById("gan_req3").src="https://i.imgur.com/muCeqKm.png";
		document.getElementById("lullabyimg").src="https://i.imgur.com/YR9myZe.png";
		document.getElementById("eponasimg").src="https://i.imgur.com/w3nXfAG.png";
		document.getElementById("sariasimg").src="https://i.imgur.com/fv5lW8e.png";
		document.getElementById("sunsimg").src="https://i.imgur.com/dcKwhmK.png";
		document.getElementById("sotimg").src="https://i.imgur.com/RbWhLBu.png";
		document.getElementById("sosimg").src="https://i.imgur.com/95t5vSg.png";
		document.getElementById("minuetimg").src="https://i.imgur.com/LJeEBv1.png";
		document.getElementById("boleroimg").src="https://i.imgur.com/lgiLXiB.png";
		document.getElementById("serenadeimg").src="https://i.imgur.com/cLZzDJg.png";
		document.getElementById("requiemimg").src="https://i.imgur.com/n38tJMR.png";
		document.getElementById("nocturneimg").src="https://i.imgur.com/n7G7lp9.png";
		document.getElementById("preludeimg").src="https://i.imgur.com/UYT3RVO.png";
		document.getElementById("faroresimg").src="https://i.imgur.com/m1jPMOS.png";
		document.getElementById("bottleimg").src="https://i.imgur.com/EU8ScXb.png";
		document.getElementById("firearrowsimg").src="https://i.imgur.com/qvfA9cA.png";
		document.getElementById("silverscaleimg").src="https://i.imgur.com/CG4IIo0.png";
		Game.themeChange = false;
		document.getElementById("logically_accessible").style.color="darkgreen";
		document.getElementById("checks_remaining").style.color="blue";
		var all = document.getElementsByClassName('logic_check_text');
		for (var i = 0; i < all.length; i++) {
		all[i].style.color = 'darkgreen';
		}
		if(document.getElementById('text_kok_eme') != null) {document.getElementById('text_kok_eme').style.color = 'green';}
		if(document.getElementById('text_gor_rub') != null) {document.getElementById('text_gor_rub').style.color = 'red';}
		if(document.getElementById('text_zor_sap') != null) {document.getElementById('text_zor_sap').style.color = 'blue';}
		if(document.getElementById('text_for_med') != null) {document.getElementById('text_for_med').style.color = 'green';}
		if(document.getElementById('text_fir_med') != null) {document.getElementById('text_fir_med').style.color = 'red';}
		if(document.getElementById('text_wat_med') != null) {document.getElementById('text_wat_med').style.color = 'blue';}
		if(document.getElementById('text_gan') != null) {document.getElementById('text_gan').style.color = '#990000';}
		document.body.style.backgroundColor = "white";
	}

	if(Game.current_forest_keys == 5) {
		for (var i = 1; i <= 11; i++) {
			str = "forest" + i;
		if(document.getElementById("img1_"+str) != null) {document.getElementById("img1_"+str).className="dot_span";}
		}
	}
	if(Game.forest_boss_key == true) {
		for (var i = 1; i <= 13; i++) {
			str = "forest" + i;
		if(document.getElementById("img2_"+str) != null) {document.getElementById("img2_"+str).className="dot_span";}
		}
	}
	if(Game.current_fire_keys == 8) {
		for (var i = 1; i <= 15; i++) {
			str = "fire" + i;
		if(document.getElementById("img1_"+str) != null) {document.getElementById("img1_"+str).className="dot_span";}
		}
	}
	if(Game.fire_boss_key == true) {
		for (var i = 1; i <= 15; i++) {
			if (i == 6) {continue;}
			str = "fire" + i;
		if(document.getElementById("img2_"+str) != null) {document.getElementById("img2_"+str).className="dot_span";}
		}
	}
	if(Game.current_water_keys == 6) {
		for (var i = 1; i <= 11; i++) {
			str = "water" + i;
		if(document.getElementById("img1_"+str) != null) {document.getElementById("img1_"+str).className="dot_span";}
		}
	}
	if(Game.water_boss_key == true) {
		for (var i = 1; i <= 10; i++) {
			str = "water" + i;
		if(document.getElementById("img2_"+str) != null) {document.getElementById("img2_"+str).className="dot_span";}
		}
	}
	if(Game.current_spirit_keys == 5) {
		for (var i = 1; i <= 20; i++) {
			if(i == 7 || i >= 17){continue;}
			str = "spirit" + i;
			if(document.getElementById("img1_"+str) != null) {document.getElementById("img1_"+str).className="dot_span";}
		}
	}
	if(Game.spirit_boss_key == true) {
		for (var i = 1; i <= 20; i++) {
			if(i == 7 || i == 17 || i == 20){continue;}
			str = "spirit" + i;
		if(document.getElementById("img2_"+str) != null) {document.getElementById("img2_"+str).className="dot_span";}
		}
	}
	if(Game.current_shadow_keys == 5) {
		for (var i = 1; i <= 17; i++) {
			str = "shadow" + i;
			if(document.getElementById("img1_"+str) != null) {document.getElementById("img1_"+str).className="dot_span";}
		}
	}
	
	if(Game.shadow_boss_key == true) {
		for (var i = 1; i <= 17; i++) {
			str = "shadow" + i;
		if(document.getElementById("img2_"+str) != null) {document.getElementById("img2_"+str).className="dot_span";}
		}
	}
	if(Game.current_ganons_keys == 2) {
		for (var i = 1; i <= 16; i++) {
			str = "ganons" + i;
			if(document.getElementById("img1_"+str) != null) {document.getElementById("img1_"+str).className="dot_span";}
		}
	}
	if(Game.ganons_boss_key == true) {
		for (var i = 1; i <= 16; i++) {
			str = "ganons" + i;
		if(document.getElementById("img2_"+str) != null) {document.getElementById("img2_"+str).className="dot_span";}
		}
	}
	if(Game.current_gtg_keys == 9) {
		for (var i = 1; i <= 22; i++) {
			if (i == 21) {continue;}
			str = "gtg" + i;
			if(document.getElementById("img1_"+str) != null) {document.getElementById("img1_"+str).className="dot_span";}
		}
	}
	if(Game.current_well_keys == 3) {
		for (var i = 1; i <= 14; i++) {
			if (i == 12 || i == 13) {continue;}
			str = "well" + i;
			if(document.getElementById("img1_"+str) != null) {document.getElementById("img1_"+str).className="dot_span";}
		}
	}

	if(Game.kokiri_sword == true) {Logic.kokiri_sword = Location_Logic[Location.kokiri_sword];}
	
	if(Game.farores_wind == true) {Logic.farores_wind = Location_Logic[Location.farores_wind];} else{Logic.farores_wind = false;}
	
	if(Game.slingshot == true) {Logic.slingshot1 = Location_Logic[Location.slingshot1];} 
	if(Game.slingshot2 == true) {Logic.slingshot2 = Location_Logic[Location.slingshot2];}
	if(Game.slingshot3 == true) {Logic.slingshot3 = Location_Logic[Location.slingshot3];}
	Logic.slingshot = Logic.slingshot1 || Logic.slingshot2 || Logic.slingshot3;
	
	if(Game.boomerang == true) {Logic.boomerang = Location_Logic[Location.boomerang];} else{Logic.boomerang = false;}
	
	if(Game.rutos_letter == true) {Logic.rutos_letter = Location_Logic[Location.rutos_letter];} else{Logic.rutos_letter = false;}
	if(Game.bottle1 == true) {Logic.bottle1 = Location_Logic[Location.bottle1];}
	if(Game.bottle2 == true) {Logic.bottle2 = Location_Logic[Location.bottle2];}
	if(Game.bottle3 == true) {Logic.bottle3 = Location_Logic[Location.bottle3];}
	Logic.bottle = (Logic.rutos_letter && ((Logic.bomb_bag && Logic.lullaby) || Logic.silver_scale)) || Logic.bottle1 || Logic.bottle2 || Logic.bottle3;
	
	if(Game.silver_scale == true) {Logic.scale1 = Location_Logic[Location.scale1]; }
	if(Game.golden_scale == true) {Logic.scale2 = Location_Logic[Location.scale2]; }
	Logic.silver_scale = Logic.scale1 || Logic.scale2;
	Logic.golden_scale = Logic.scale1 && Logic.scale2;
	
	if(Game.bomb_bag == true) {Logic.bomb_bag1 = Location_Logic[Location.bomb_bag1];}
	if(Game.bomb_bag2 == true) {Logic.bomb_bag2 = Location_Logic[Location.bomb_bag2];}
	if(Game.bomb_bag3 == true) {Logic.bomb_bag3 = Location_Logic[Location.bomb_bag3];}
	Logic.bomb_bag = Logic.bomb_bag1 || Logic.bomb_bag2 || Logic.bomb_bag3;
	
	if(Game.hammer == true) {Logic.hammer = Location_Logic[Location.hammer];} else{Logic.hammer= false;}
	
	if(Game.bow == true) {Logic.bow1 = Location_Logic[Location.bow1];}
	if(Game.bow2 == true) {Logic.bow2 = Location_Logic[Location.bow2];}
	if(Game.bow3 == true) {Logic.bow3 = Location_Logic[Location.bow3];}
	Logic.bow = Logic.bow1 || Logic.bow2 || Logic.bow3;
	
	if(Game.hookshot == true) {Logic.hookshot1 = Location_Logic[Location.hookshot1];}
	if(Game.longshot == true) {Logic.hookshot2 = Location_Logic[Location.hookshot2];}
	Logic.hookshot = Logic.hookshot1 || Logic.hookshot2;
	Logic.longshot = Logic.hookshot1 && Logic.hookshot2;
	
	if(Game.goron_bracelet == true) {Logic.strength1 = Location_Logic[Location.strength1];}
	if(Game.silver_gauntlets == true) {Logic.strength2 = Location_Logic[Location.strength2];}
	if(Game.gold_gauntlets == true) {Logic.strength3 = Location_Logic[Location.strength3];}
	Logic.goron_bracelet = Logic.strength1 || Logic.strength2 || Logic.strength3;
	Logic.silver_gauntlets = (Logic.strength1 && Logic.strength2) || (Logic.strength1 && Logic.strength3) || (Logic.strength2 && Logic.strength3)
	Logic.golden_gauntlets = Logic.strength1 && Logic.strength2 && Logic.strength3;
	
	if(Game.mirror_shield == true) {Logic.mirror_shield = Location_Logic[Location.mirror_shield];} else{Logic.mirror_shield = false;}
	
	if(Game.big_poe == true) {Logic.big_poe = Location_Logic[Location.big1];} else{Logic.big_poe= false;}
	
	if(Game.iron_boots == true) {Logic.iron_boots = Location_Logic[Location.iron_boots];} else{Logic.iron_boots = false;}
	if(Game.hover_boots == true) {Logic.hover_boots = Location_Logic[Location.hover_boots];} else{Logic.hover_boots = false;}
	
	if(Game.magic == true) {Logic.magic1 = Location_Logic[Location.magic1];}
	if(Game.magic2 == true) {Logic.magic2 = Location_Logic[Location.magic2];}
	Logic.magic = Logic.magic1 || Logic.magic2;
	
	if(Game.dins_fire == true) {Logic.dins_fire = Location_Logic[Location.dins_fire];} else{Logic.dins_fire = false;}
	if(Game.fire_arrows == true) {Logic.fire_arrows = Location_Logic[Location.fire_arrows];} else{Logic.fire_arrows = false;}
	
	if(Game.wallet1 == true) {Logic.wallet1 = Location_Logic[Location.wallet1];}
	if(Game.wallet2 == true) {Logic.wallet2 = Location_Logic[Location.wallet2];}
	Logic.adults_wallet = Logic.wallet1 || Logic.wallet2;
	Logic.giants_wallet = Logic.wallet1 && Logic.wallet2;
	
	if(Game.goron_tunic == true) {Logic.goron_tunic = Location_Logic[Location.goron_tunic];} else{Logic.goron_tunic = false;}
	if(Game.zora_tunic == true) {Logic.zora_tunic = Location_Logic[Location.zora_tunic];} else{Logic.zora_tunic = false;}
	if(Game.lens_of_truth == true) {Logic.lens_of_truth = Location_Logic[Location.lens_of_truth];} else{Logic.lens_of_truth = false;}
	if(Game.stone_of_agony == true) {Logic.stone_of_agony = Location_Logic[Location.stone_of_agony];} else{Logic.stone_of_agony = false;}
	if(Game.prescription == true) {Logic.prescription = Location_Logic[Location.prescription];} else{Logic.prescription = false;}
	if(Game.claim_check == true) {Logic.claim_check = Location_Logic[Location.claim_check];} else{Logic.claim_check = false;}
	
	if(Game.light_arrows == true) {Logic.light_arrows = Location_Logic[Location.light_arrows];}
	
	if(Game.lullaby == true) {Logic.lullaby = Location_Logic[Location.lullaby]; }
	if(Game.eponas == true) {Logic.eponas = Location_Logic[Location.eponas]; }
	if(Game.sarias == true) {Logic.sarias = Location_Logic[Location.sarias]; }
	if(Game.suns_song == true) {Logic.suns_song = Location_Logic[Location.suns_song]; }
	if(Game.song_of_time == true) {Logic.song_of_time = Location_Logic[Location.song_of_time]; }
	if(Game.song_of_storms == true) {Logic.song_of_storms = Location_Logic[Location.song_of_storms]; }
	if(Game.minuet == true) {Logic.minuet = Location_Logic[Location.minuet]; }
	if(Game.bolero == true) {Logic.bolero = Location_Logic[Location.bolero]; }
	if(Game.serenade == true) {Logic.serenade = Location_Logic[Location.serenade]; }
	if(Game.requiem == true) {Logic.requiem = Location_Logic[Location.requiem]; }
	if(Game.nocturne == true) {Logic.nocturne = Location_Logic[Location.nocturne]; }
	if(Game.prelude == true) {Logic.prelude = Location_Logic[Location.prelude]; }
	
	if(Game.forest_boss_key == true) {Logic.forest_boss_key = Location_Logic[Location.forest_boss_key]; }
	if(Game.fire_boss_key == true) {Logic.fire_boss_key = Location_Logic[Location.fire_boss_key]; }
	if(Game.water_boss_key == true) {Logic.water_boss_key = Location_Logic[Location.water_boss_key]; }
	if(Game.spirit_boss_key == true) {Logic.spirit_boss_key = Location_Logic[Location.spirit_boss_key]; }
	if(Game.shadow_boss_key == true) {Logic.shadow_boss_key = Location_Logic[Location.shadow_boss_key]; }
	
	if(Logic.forest_medallion_location == "deku") {Logic.forest_medallion = Location_Logic.deku_queen_gohma;}
	if(Logic.forest_medallion_location == "dodongos") {Logic.forest_medallion = Location_Logic.dodongos_king_dodongo;}
	if(Logic.forest_medallion_location == "jabu") {Logic.forest_medallion = Location_Logic.jabu_barinade;}
	if(Logic.forest_medallion_location == "forest") {Logic.forest_medallion = Location_Logic.forest14;}
	if(Logic.forest_medallion_location == "fire") {Logic.forest_medallion = Location_Logic.fire6;}
	if(Logic.forest_medallion_location == "water") {Logic.forest_medallion = Location_Logic.water11;}
	if(Logic.forest_medallion_location == "spirit") {Logic.forest_medallion = Location_Logic.spirit20;}
	if(Logic.forest_medallion_location == "shadow") {Logic.forest_medallion = Location_Logic.shadow18;}
	if(Logic.forest_medallion_location == "pocket") {Logic.forest_medallion = true;}
	
	if(Logic.fire_medallion_location == "deku") {Logic.fire_medallion = Location_Logic.deku_queen_gohma;}
	if(Logic.fire_medallion_location == "dodongos") {Logic.fire_medallion = Location_Logic.dodongos_king_dodongo;}
	if(Logic.fire_medallion_location == "jabu") {Logic.fire_medallion = Location_Logic.jabu_barinade;}
	if(Logic.fire_medallion_location == "forest") {Logic.fire_medallion = Location_Logic.forest14;}
	if(Logic.fire_medallion_location == "fire") {Logic.fire_medallion = Location_Logic.fire6;}
	if(Logic.fire_medallion_location == "water") {Logic.fire_medallion = Location_Logic.water11;}
	if(Logic.fire_medallion_location == "spirit") {Logic.fire_medallion = Location_Logic.spirit20;}
	if(Logic.fire_medallion_location == "shadow") {Logic.fire_medallion = Location_Logic.shadow18;}
	if(Logic.fire_medallion_location == "pocket") {Logic.fire_medallion = true;}
	
	if(Logic.water_medallion_location == "deku") {Logic.water_medallion = Location_Logic.deku_queen_gohma;}
	if(Logic.water_medallion_location == "dodongos") {Logic.water_medallion = Location_Logic.dodongos_king_dodongo;}
	if(Logic.water_medallion_location == "jabu") {Logic.water_medallion = Location_Logic.jabu_barinade;}
	if(Logic.water_medallion_location == "forest") {Logic.water_medallion = Location_Logic.forest14;}
	if(Logic.water_medallion_location == "fire") {Logic.water_medallion = Location_Logic.fire6;}
	if(Logic.water_medallion_location == "water") {Logic.water_medallion = Location_Logic.water11;}
	if(Logic.water_medallion_location == "spirit") {Logic.water_medallion = Location_Logic.spirit20;}
	if(Logic.water_medallion_location == "shadow") {Logic.water_medallion = Location_Logic.shadow18;}
	if(Logic.water_medallion_location == "pocket") {Logic.water_medallion = true;}

	Logic.shadow_medallion = false;
	Logic.spirit_medallion = false;
	for (var i = 1; i <=3; i++) {
		str = "generic" + i;
		str2 = "gen" + i;
		if(Logic[str] == "deku") {Logic[str2] = Location_Logic.deku_queen_gohma; if(document.getElementById("text_deku").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.deku_queen_gohma;} if(document.getElementById("text_deku").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = true;}}
		if(Logic[str] == "dodongos") {Logic[str2] = Location_Logic.dodongos_king_dodongo; if(document.getElementById("text_dod").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.dodongos_king_dodongo;} if(document.getElementById("text_dod").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = true;}}
		if(Logic[str] == "jabu") {Logic[str2] = Location_Logic.jabu_barinade; if(document.getElementById("text_jabu").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.jabu_barinade;} if(document.getElementById("text_jabu").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = true;}}
		if(Logic[str] == "forest") {Logic[str2] = Location_Logic.forest14; if(document.getElementById("text_forest").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.forest14;} if(document.getElementById("text_forest").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = true;}}
		if(Logic[str] == "fire") {Logic[str2] = Location_Logic.fire6; if(document.getElementById("text_fire").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.fire6;} if(document.getElementById("text_fire").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = true;}}
		if(Logic[str] == "water") {Logic[str2] = Location_Logic.water11; if(document.getElementById("text_water").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.water11;} if(document.getElementById("text_water").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = true;}}
		if(Logic[str] == "spirit") {Logic[str2] = Location_Logic.spirit20; if(document.getElementById("text_spirit").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.spirit20;} if(document.getElementById("text_spirit").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = true;}}
		if(Logic[str] == "shadow") {Logic[str2] = Location_Logic.shadow18; if(document.getElementById("text_shadow").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.shadow18;} if(document.getElementById("text_shadow").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = true;}}
		if(Logic[str] == "pocket") {Logic[str2] = true; if(document.getElementById("text_pocket").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = true;} if(document.getElementById("text_pocket").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = true;}}
	}
	
	if(Logic.emerald == "deku") {Logic.kokiri_emerald = Location_Logic.deku_queen_gohma;}
	if(Logic.emerald == "dodongos") {Logic.kokiri_emerald = Location_Logic.dodongos_king_dodongo;}
	if(Logic.emerald == "jabu") {Logic.kokiri_emerald = Location_Logic.jabu_barinade;}
	if(Logic.emerald == "forest") {Logic.kokiri_emerald = Location_Logic.forest14;}
	if(Logic.emerald == "fire") {Logic.kokiri_emerald = Location_Logic.fire6;}
	if(Logic.emerald == "water") {Logic.kokiri_emerald = Location_Logic.water11;}
	if(Logic.emerald == "spirit") {Logic.kokiri_emerald = Location_Logic.spirit20;}
	if(Logic.emerald == "shadow") {Logic.kokiri_emerald = Location_Logic.shadow18;}
	if(Logic.emerald == "pocket") {Logic.kokiri_emerald = true;}
	
	if(Logic.ruby == "deku") {Logic.goron_ruby = Location_Logic.deku_queen_gohma;}
	if(Logic.ruby == "dodongos") {Logic.goron_ruby = Location_Logic.dodongos_king_dodongo;}
	if(Logic.ruby == "jabu") {Logic.goron_ruby = Location_Logic.jabu_barinade;}
	if(Logic.ruby == "forest") {Logic.goron_ruby = Location_Logic.forest14;}
	if(Logic.ruby == "fire") {Logic.goron_ruby = Location_Logic.fire6;}
	if(Logic.ruby == "water") {Logic.goron_ruby = Location_Logic.water11;}
	if(Logic.ruby == "spirit") {Logic.goron_ruby = Location_Logic.spirit20;}
	if(Logic.ruby == "shadow") {Logic.goron_ruby = Location_Logic.shadow18;}
	if(Logic.ruby == "pocket") {Logic.goron_ruby = true;}
	
	if(Logic.sapphire == "deku") {Logic.zora_sapphire = Location_Logic.deku_queen_gohma;}
	if(Logic.sapphire == "dodongos") {Logic.zora_sapphire = Location_Logic.dodongos_king_dodongo;}
	if(Logic.sapphire == "jabu") {Logic.zora_sapphire = Location_Logic.jabu_barinade;}
	if(Logic.sapphire == "forest") {Logic.zora_sapphire = Location_Logic.forest14;}
	if(Logic.sapphire == "fire") {Logic.zora_sapphire = Location_Logic.fire6;}
	if(Logic.sapphire == "water") {Logic.zora_sapphire = Location_Logic.water11;}
	if(Logic.sapphire == "spirit") {Logic.zora_sapphire = Location_Logic.spirit20;}
	if(Logic.sapphire == "shadow") {Logic.zora_sapphire = Location_Logic.shadow18;}
	if(Logic.sapphire == "pocket") {Logic.zora_sapphire = true;}
	
	if(document.getElementById("img_emerald").style.opacity=="1") {Logic.kokiri_emerald = true;}
	if(document.getElementById("img_ruby").style.opacity=="1") {Logic.goron_ruby = true;}
	if(document.getElementById("img_sapphire").style.opacity=="1") {Logic.zora_sapphire = true;}
	if(document.getElementById("img_forest").style.opacity=="1") {Logic.forest_medallion = true;}
	if(document.getElementById("img_fire").style.opacity=="1") {Logic.fire_medallion = true;}
	if(document.getElementById("img_water").style.opacity=="1") {Logic.water_medallion = true;}
	if(document.getElementById("img_shadow").style.opacity=="1") {Logic.shadow_medallion = true;}
	if(document.getElementById("img_spirit").style.opacity=="1") {Logic.spirit_medallion = true;}
	if(document.getElementById("img_light").style.opacity=="1") {Logic.light_medallion = true;}
	
	var i;
for (i = 1; i <= 6; i++) {
	str = "forceLogic" + i;
	if(document.getElementById(str).value == "bom") {Logic.bomb_bag = true;}
	if(document.getElementById(str).value == "far") {Logic.farores_wind = true;}
	if(document.getElementById(str).value == "sli") {Logic.slingshot = true;}
	if(document.getElementById(str).value == "boo") {Logic.boomerang = true;}
	if(document.getElementById(str).value == "sc1") {Logic.silver_scale = true;}
	if(document.getElementById(str).value == "sc2") {Logic.golden_scale = true;}
	if(document.getElementById(str).value == "rut") {Logic.rutos_letter = true;}
	if(document.getElementById(str).value == "bot") {Logic.bottle = true;}
	if(document.getElementById(str).value == "big") {Logic.big_poe = true;}
	if(document.getElementById(str).value == "ham") {Logic.hammer = true;}
	if(document.getElementById(str).value == "bow") {Logic.bow = true;}
	if(document.getElementById(str).value == "ho2") {Logic.longshot = true;}
	if(document.getElementById(str).value == "ho1") {Logic.hookshot = true;}
	if(document.getElementById(str).value == "gor") {Logic.goron_tunic= true;}
	if(document.getElementById(str).value == "zor") {Logic.zora_tunic= true;}
	if(document.getElementById(str).value == "st1") {Logic.goron_bracelet = true;}
	if(document.getElementById(str).value == "st2") {Logic.silver_gauntlets = true;}
	if(document.getElementById(str).value == "st3") {Logic.golden_gauntlets= true;}
	if(document.getElementById(str).value == "iro") {Logic.iron_boots = true;}
	if(document.getElementById(str).value == "hov") {Logic.hover_boots = true;}
	if(document.getElementById(str).value == "wa1") {Logic.adults_wallet = true;}
	if(document.getElementById(str).value == "wa2") {Logic.giants_wallet = true;}
	if(document.getElementById(str).value == "mag") {Logic.magic = true;}
	if(document.getElementById(str).value == "din") {Logic.dins_fire = true;}
	if(document.getElementById(str).value == "fir") {Logic.fire_arrows = true;}
	if(document.getElementById(str).value == "len") {Logic.lens_of_truth = true;}
	if(document.getElementById(str).value == "pre") {Logic.prescription = true;}
	if(document.getElementById(str).value == "cla") {Logic.claim_check = true;}
}
	
	Logic.can_enter_jabu = Logic.rutos_letter && ((Logic.lullaby && Logic.bomb_bag) || Logic.silver_scale)
	Logic.child_can_enter_river = Logic.bomb_bag || Logic.silver_scale;
	Logic.fortress_access = Logic.eponas || Logic.longshot;
	Logic.can_save_carpenters = Logic.fortress_access && ((Logic.bow || Logic.hookshot || Logic.hover_boots) || true) /*fast carpenter fix**/;
	Logic.can_cross_quicksand = Logic.fortress_access && (Logic.longshot || Logic.hover_boots);
	Logic.can_enter_colossus = (Logic.can_cross_quicksand && (Logic.brackets || Logic.can_see)) || Logic.requiem;
	Logic.can_use_fire = (Logic.dins_fire || (Logic.bow && Logic.fire_arrows)) && Logic.magic;
	Logic.can_use_dins = Logic.dins_fire && Logic.magic;
	Logic.can_use_farores = Logic.farores_wind && Logic.magic;
	Logic.can_see = Logic.lens_of_truth && Logic.magic;
	Logic.can_blast_or_smash = Logic.bomb_bag || Logic.hammer;
	Logic.can_enter_dodongos_adult = Logic.can_blast_or_smash || Logic.goron_bracelet;
	Logic.can_enter_dodongos_child = Logic.bomb_bag || Logic.goron_bracelet;
	Logic.can_reach_dodongos_bomb_bag_chest_child = (Logic.bomb_bag || Logic.goron_bracelet) && Logic.slingshot
	Logic.can_reach_dodongos_bomb_bag_chest_adult = Logic.can_enter_dodongos_child ;//&& (Logic.bow || Logic.longshot || Logic.hover_boots)
	Logic.can_reach_dodongos_bomb_bag_chest = Logic.can_reach_dodongos_bomb_bag_chest_child || Logic.can_reach_dodongos_bomb_bag_chest_adult;
	Logic.can_enter_shadow= Logic.nocturne && Logic.can_use_dins && (Logic.hover_boots || Logic.hookshot) ;//&& Logic.can_see;
	Logic.can_cross_shadow_gap= Logic.can_enter_shadow && Logic.hover_boots;
	Logic.can_bomb_shadow_wall = Logic.can_cross_shadow_gap && Logic.bomb_bag;
	Logic.can_pass_shadow_hookshot_door = Logic.can_bomb_shadow_wall && Logic.hookshot;
	Logic.can_ride_shadow_boat = Logic.can_pass_shadow_hookshot_door && Logic.lullaby;
	Logic.can_beat_shadow_boss = Logic.can_ride_shadow_boat && (Logic.bow || Logic.longshot);
	Logic.can_stop_link_the_goron = Logic.bomb_bag || Logic.bow || Logic.goron_bracelet;
	Logic.ice_access = Logic.rutos_letter && Logic.lullaby && Logic.child_can_enter_river;
	Logic.reverse_crater = (Logic.hover_boots || Logic.hookshot || Logic.child_can_enter_river) && Logic.bolero;
	Logic.can_enter_fire_temple = (Logic.crater_by_city && (Logic.hookshot || Logic.hover_boots)) || Logic.bolero
	Logic.crater_by_city = Logic.bow || Logic.bomb_bag || Logic.goron_bracelet || Logic.reverse_crater ||(Logic.hammer && Logic.hover_boots) || (Logic.longshot && Logic.goron_tunic && Logic.hammer);
	Logic.crater_top = Logic.crater_by_city || Logic.hammer;
	Logic.can_enter_adult_spirit = Logic.can_enter_colossus && Logic.silver_gauntlets;
	Logic.can_enter_ganons = Logic.forest_medallion && Logic.fire_medallion && Logic.water_medallion && Logic.gen1 && Logic.gen2 && Logic.gen3;
	Logic.can_climb_fire_temple = Logic.can_enter_fire_temple && Logic.fire_keys >=3 && Logic.can_wear_goron_tunic && Logic.goron_bracelet && (Logic.bow || Logic.hookshot || Logic.bomb_bag); 
	Logic.can_enter_water = Logic.hookshot && Logic.iron_boots;
	Logic.middle_water = Logic.can_enter_water && Logic.lullaby && (Logic.bow || Logic.can_use_dins || Logic.water_keys >= 5);
	Logic.projectile_both = Logic.bomb_bag || ((Logic.slingshot || Logic.boomerang) && (Logic.bow || Logic.hookshot));
	Logic.projectile_child = Logic.bomb_bag || Logic.slingshot || Logic.boomerang;
	Logic.projectile_adult = Logic.bomb_bag || Logic.bow || Logic.hookshot;
	Logic.can_wear_goron_tunic = Logic.goron_tunic || (Logic.adults_wallet && (Logic.bomb_bag || Logic.goron_bracelet || Logic.bow));
	Logic.can_wear_zora_tunic = Logic.zora_tunic || (Logic.giants_wallet && (Logic.lullaby && Logic.bottle));
	
	Logic.current_forest_keys = 0;
	for (i = 1; i <= 14; i++) {
		str = "forest" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_forest_keys +=1;}
	}
	Logic.current_fire_keys = 0;
	for (i = 1; i <= 15; i++) {
		str = "fire" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_fire_keys +=1;}
	}
	
	Logic.current_water_keys = 0;
	for (i = 1; i <= 11; i++) {
		str = "water" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_water_keys +=1;}
	}
	
	Logic.current_spirit_keys = 0;
	for (i = 1; i <= 20; i++) {
		str = "spirit" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_spirit_keys +=1;}
	}
	
	Logic.current_shadow_keys = 0;
	for (i = 1; i <= 18; i++) {
		str = "shadow" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_shadow_keys +=1;}
	}
	
	Logic.current_gtg_keys = 0;
	for (i = 1; i <= 22; i++) {
		str = "gtg" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_gtg_keys +=1;}
	}
	
	Logic.current_well_keys = 0;
	for (i = 1; i <= 14; i++) {
		str = "well" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_well_keys +=1;}
	}
	
	if ((Logic.song_of_time || Logic.bow) && Logic.hookshot) {Logic.min_forest_keys = 1;}
	if (/*(Logic.song_of_time || Logic.iron_boots || Logic.golden_scale) &&*/ Logic.hookshot && Logic.bow && Logic.goron_bracelet && (Logic.hover_boots || Logic.forest_keys >= 2)) {Logic.min_forest_keys = 5; Logic.forest_boss_key = true;}
	Logic.forest_keys = Math.max(Logic.min_forest_keys,Logic.current_forest_keys);
	
	if (Logic.can_enter_fire_temple && Logic.hammer && Logic.can_wear_goron_tunic && Logic.hover_boots) {Logic.min_fire_keys =2;}
	if (Logic.can_enter_fire_temple && Logic.hammer && Logic.can_wear_goron_tunic && Logic.bomb_bag && Logic.hover_boots) {Logic.min_fire_keys =3;}
	if (Logic.can_enter_fire_temple && Logic.hammer && Logic.can_wear_goron_tunic && Logic.bomb_bag && Logic.goron_bracelet && Logic.hover_boots) {Logic.min_fire_keys =4;}
	if (Logic.can_enter_fire_temple && Logic.hammer && Logic.can_wear_goron_tunic && Logic.bomb_bag && Logic.goron_bracelet && Logic.bow && Logic.hover_boots) {Logic.min_fire_keys =5;}
	if (Logic.can_enter_fire_temple && Logic.hammer && Logic.can_wear_goron_tunic && Logic.bomb_bag && Logic.goron_bracelet && Logic.bow && Logic.hookshot && Logic.hover_boots) {
		Logic.min_fire_keys =8;
		Logic.fire_boss_key = true;
		}
	Logic.fire_keys = Math.max(Logic.min_fire_keys,Logic.current_fire_keys);
	
	Logic.water_chests = 0;
	if (Location_Logic.water1){Logic.water_chests +=1;}
	if (Location_Logic.water2){Logic.water_chests +=1;}
	if (Location_Logic.water3){Logic.water_chests +=1;}
	if (Location_Logic.water4){Logic.water_chests +=1;}
	if (Location_Logic.water5){Logic.water_chests +=1;}
	if (Location_Logic.water6){Logic.water_chests +=1;}
	if (Location_Logic.water7){Logic.water_chests +=1;}
	if (Location_Logic.water8){Logic.water_chests +=1;}
	if (Location_Logic.water9){Logic.water_chests +=1;}
	if (Location_Logic.water10){Logic.water_chests +=1;}
	if (Location_Logic.water11){Logic.water_chests +=1;}
	Logic.min_water_keys = Math.min((Logic.water_chests -3),6);
	if (Logic.lullaby && Logic.iron_boots && Logic.longshot && Logic.goron_bracelet && Logic.bow && Logic.bomb_bag && Logic.can_wear_zora_tunic) {
		Logic.min_water_keys = 5;
		if (Logic.song_of_time) {
			Logic.water_boss_key = true;
		}
	}
	Logic.water_keys = Math.max(Logic.min_water_keys,Logic.current_water_keys);
	
	if (Logic.nocturne && Logic.can_use_dins && Logic.hover_boots && Logic.bomb_bag && Logic.goron_bracelet) {Logic.min_shadow_keys = 2;}
	if (Logic.nocturne && Logic.can_use_dins && Logic.hover_boots && Logic.hookshot && Logic.bomb_bag && Logic.goron_bracelet) {Logic.min_shadow_keys = 4;}
	if (Logic.nocturne && Logic.can_use_dins && Logic.hover_boots && Logic.hookshot && Logic.bomb_bag && Logic.goron_bracelet && Logic.lullaby) {
		Logic.min_shadow_keys = 5;
		Logic.shadow_boss_key = true;
	}
	Logic.shadow_keys = Math.max(Logic.min_shadow_keys,Logic.current_shadow_keys);
	
	if(Logic.requiem && Logic.hookshot && (Logic.slingshot || Logic.boomerang) && Logic.silver_gauntlets && Logic.lullaby) {Logic.min_spirit_keys = 1;}
	if(Logic.requiem && (Logic.slingshot || Logic.boomerang) && Logic.bomb_bag && Logic.can_use_fire && Logic.hookshot && Logic.lullaby && Logic.silver_gauntlets) {Logic.min_spirit_keys = 4;}
	if(Logic.requiem && (Logic.slingshot || Logic.boomerang) && Logic.bomb_bag && Logic.can_use_fire && Logic.mirror_shield && Logic.hookshot && Logic.lullaby && Logic.silver_gauntlets) {
		Logic.min_spirit_keys = 5;
		if (Logic.bow) {
			Logic.spirit_boss_key = true;
		}
	}
	Logic.spirit_keys = Math.max(Logic.min_spirit_keys,Logic.current_spirit_keys);
	

	if(Logic.can_save_carpenters && Logic.hookshot && Logic.bow && Logic.song_of_time && Logic.silver_gauntlets && (Logic.hammer || Logic.bomb_bag || Logic.iron_boots)) {Logic.min_gtg_keys = 5;}
	if(Logic.can_save_carpenters && Logic.hookshot && Logic.bow && Logic.song_of_time && Logic.silver_gauntlets && ((Logic.hammer && Logic.bomb_bag) || (Logic.iron_boots && Logic.hammer) || (Logic.iron_boots && Logic.bomb_bag))) {Logic.min_gtg_keys = 8;}
	if(Logic.can_save_carpenters && Logic.hookshot && Logic.bow && Logic.song_of_time && Logic.silver_gauntlets && Logic.hammer && Logic.bomb_bag && Logic.iron_boots) {Logic.min_gtg_keys = 9;}
	Logic.gtg_keys = Math.max(Logic.min_gtg_keys,Logic.current_gtg_keys);
	
	if(Logic.bomb_bag && Logic.lullaby && Logic.song_of_storms) {Logic.min_well_keys = 3;}
	Logic.well_keys = Math.max(Logic.min_well_keys,Logic.current_well_keys);
	
	const keys = Object.keys(Location_Logic)
	var temp = 0;
for (const key of keys) {
	if (temp == 256) {break; }
	temp +=1;
	if(document.getElementById(key) == null) {continue;}
	if (temp <= 244) { 
 if (document.getElementById(key).value == "kok" && !Game.kokiri_sword) {Location.kokiri_sword = document.getElementById(key).id; Game.kokiri_sword = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
 
 if (document.getElementById(key).value == "far" && !Game.farores_wind) {Location.farores_wind = document.getElementById(key).id; Game.farores_wind = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	
	if (document.getElementById(key).value == "sli" && !Game.slingshot) {Location.slingshot1 = document.getElementById(key).id; Game.slingshot = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "sli" && !Game.slingshot2) {Location.slingshot2 = document.getElementById(key).id; Game.slingshot2 = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "sli" && !Game.slingshot3) {Location.slingshot3 = document.getElementById(key).id; Game.slingshot3 = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	
	if (document.getElementById(key).value == "boo" && !Game.boomerang) {Location.boomerang = document.getElementById(key).id; Game.boomerang = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	
	if (document.getElementById(key).value == "sca" && !Game.silver_scale) {Location.scale1 = document.getElementById(key).id; Game.silver_scale = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "sca" && !Game.golden_scale) {Location.scale2 = document.getElementById(key).id; Game.golden_scale = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	
	if (document.getElementById(key).value == "rut" && !Game.rutos_letter) {Location.rutos_letter = document.getElementById(key).id; Game.rutos_letter = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	
	if (document.getElementById(key).value == "bot" && !Game.bottle1) {Location.bottle1 = document.getElementById(key).id; Game.bottle1 = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "bot" && !Game.bottle2) {Location.bottle2 = document.getElementById(key).id; Game.bottle2 = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "bot" && !Game.bottle3) {Location.bottle3 = document.getElementById(key).id; Game.bottle3 = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	
	if (document.getElementById(key).value == "big" && !Game.bottle1) {Location.bottle1 = document.getElementById(key).id; Location.big1= document.getElementById(key).id; Game.bottle1 = true; Game.big_poe = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "big" && !Game.bottle2) {Location.bottle2 = document.getElementById(key).id; Location.big1= document.getElementById(key).id; Game.bottle2 = true; Game.big_poe = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "big" && !Game.bottle3) {Location.bottle3 = document.getElementById(key).id; Location.big1= document.getElementById(key).id; Game.bottle3 = true; Game.big_poe = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	
	if (document.getElementById(key).value == "bom" && !Game.bomb_bag) {Location.bomb_bag1 = document.getElementById(key).id; Game.bomb_bag = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "bom" && !Game.bomb_bag2) {Location.bomb_bag2 = document.getElementById(key).id; Game.bomb_bag2 = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "bom" && !Game.bomb_bag3) {Location.bomb_bag3 = document.getElementById(key).id; Game.bomb_bag3 = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "ham" && !Game.hammer) {Location.hammer = document.getElementById(key).id; Game.hammer = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "bow" && !Game.bow) {Location.bow1 = document.getElementById(key).id; Game.bow = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "bow" && !Game.bow2) {Location.bow2 = document.getElementById(key).id; Game.bow2 = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "bow" && !Game.bow3) {Location.bow3 = document.getElementById(key).id; Game.bow3 = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "hoo" && !Game.hookshot) {Location.hookshot1 = document.getElementById(key).id; Game.hookshot = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "hoo" && !Game.longshot) {Location.hookshot2 = document.getElementById(key).id; Game.longshot = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "str" && !Game.goron_bracelet) {Location.strength1 = document.getElementById(key).id; Game.goron_bracelet = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "str" && !Game.silver_gauntlets) {Location.strength2 = document.getElementById(key).id; Game.silver_gauntlets = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "str" && !Game.gold_gauntlets) {Location.strength3 = document.getElementById(key).id; Game.gold_gauntlets = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "mir" && !Game.mirror_shield) {Location.mirror_shield = document.getElementById(key).id; Game.mirror_shield = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "mag" && !Game.magic) {Location.magic1 = document.getElementById(key).id; Game.magic = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "mag" && !Game.magic2) {Location.magic2 = document.getElementById(key).id; Game.magic2 = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "iro" && !Game.iron_boots) {Location.iron_boots = document.getElementById(key).id; Game.iron_boots = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "hov" && !Game.hover_boots) {Location.hover_boots = document.getElementById(key).id; Game.hover_boots = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "wal" && !Game.wallet1) {Location.wallet1 = document.getElementById(key).id; Game.wallet1 = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "wal" && !Game.wallet2) {Location.wallet2 = document.getElementById(key).id; Game.wallet2 = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "gor" && !Game.goron_tunic) {Location.goron_tunic = document.getElementById(key).id; Game.goron_tunic = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "zor" && !Game.zora_tunic) {Location.zora_tunic = document.getElementById(key).id; Game.zora_tunic = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "din" && !Game.dins_fire) {Location.dins_fire = document.getElementById(key).id; Game.dins_fire = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "fir" && !Game.fire_arrows) {Location.fire_arrows = document.getElementById(key).id; Game.fire_arrows = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "len" && !Game.lens_of_truth) {Location.lens_of_truth = document.getElementById(key).id; Game.lens_of_truth = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "sto" && !Game.stone_of_agony) {Location.stone_of_agony = document.getElementById(key).id; Game.stone_of_agony = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if ((document.getElementById(key).value == "pre" || document.getElementById(key).value == "eye" || document.getElementById(key).value == "dro") && (!Game.prescription || !Game.claim_check)) {Location.prescription = document.getElementById(key).id; Game.prescription = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "cla" && (!Game.prescription || !Game.claim_check)) {Location.claim_check = document.getElementById(key).id; Game.claim_check = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "lig" && !Game.light_arrows) {Location.light_arrows = document.getElementById(key).id; Game.light_arrows = true; if (temp <= 31) {junkB1(document.getElementById(key))} else if (temp<=59) {junkB2(document.getElementById(key))} else if (temp <= 84){junkB3(document.getElementById(key))} else if (temp <= 116) {junkB4(document.getElementById(key))} else if (temp <= 156) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	}
	else {
	if (document.getElementById(key).value == "lul" && !Game.lullaby) {Location.lullaby = document.getElementById(key).id; Game.lullaby = true; var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Lullaby"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "epo" && !Game.eponas) {Location.eponas = document.getElementById(key).id; Game.eponas = true; var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Epona's"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "sar" && !Game.sarias) {Location.sarias = document.getElementById(key).id; Game.sarias = true; var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Saria's"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "sun" && !Game.suns_song) {Location.suns_song = document.getElementById(key).id; Game.suns_song = true; var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Sun's"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "sot" && !Game.song_of_time) {Location.song_of_time = document.getElementById(key).id; Game.song_of_time = true; var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Time"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "sos" && !Game.song_of_storms) {Location.song_of_storms = document.getElementById(key).id; Game.song_of_storms = true; var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Storms"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "min" && !Game.minuet) {Location.minuet = document.getElementById(key).id; Game.minuet = true; var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Minuet"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "bol" && !Game.bolero) {Location.bolero = document.getElementById(key).id; Game.bolero = true; var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Bolero"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "ser" && !Game.serenade) {Location.serenade = document.getElementById(key).id; Game.serenade = true; var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Serenade"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "req" && !Game.requiem) {Location.requiem = document.getElementById(key).id; Game.requiem = true; var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Requiem"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "noc" && !Game.nocturne) {Location.nocturne = document.getElementById(key).id; Game.nocturne = true; var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Nocturne"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "pre" && !Game.prelude) {Location.prelude = document.getElementById(key).id; Game.prelude = true; var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Prelude"; junkBS(document.getElementById(key)); continue;}
	}
}

	
if (document.getElementById("markStones") != null) {
	var tempstring = document.getElementById("markStones").value;
if(tempstring.length == 6) 	{
	var str = tempstring;
	var first = str.substring(0,2);
	var second = str.substring(2,4);
	var third = str.substring(4,6);
	var parent = document.getElementById("info_column");
	var child = document.getElementById("markStones");
	
	
	if (first == "de") {Logic.emerald = "deku"; }
	else if (first == "do") {Logic.emerald = "dodongos"; }
	else if (first == "ja") {Logic.emerald = "jabu"; }
	else if (first == "fo") {Logic.emerald = "forest"; }
	else if (first == "fi") {Logic.emerald = "fire"; }
	else if (first == "wa") {Logic.emerald = "water"; }
	else if (first == "sp") {Logic.emerald = "spirit"; }
	else if (first == "sh") {Logic.emerald = "shadow"; }
	else if (first == "fr") {Logic.emerald = "pocket"; }
	
	if (second == "de") {Logic.ruby = "deku"; }
	else if (second == "do") {Logic.ruby = "dodongos"; }
	else if (second == "ja") {Logic.ruby = "jabu"; }
	else if (second == "fo") {Logic.ruby = "forest"; }
	else if (second == "fi") {Logic.ruby = "fire"; }
	else if (second == "wa") {Logic.ruby = "water"; }
	else if (second == "sp") {Logic.ruby = "spirit"; }
	else if (second == "sh") {Logic.ruby = "shadow"; }
	else if (second == "fr") {Logic.ruby = "pocket"; }
	
	if (third == "de") {Logic.sapphire = "deku"; }
	else if (third == "do") {Logic.sapphire = "dodongos"; }
	else if (third == "ja") {Logic.sapphire = "jabu"; }
	else if (third == "fo") {Logic.sapphire = "forest"; }
	else if (third == "fi") {Logic.sapphire = "fire"; }
	else if (third == "wa") {Logic.sapphire = "water"; }
	else if (third == "sp") {Logic.sapphire = "spirit"; }
	else if (third == "sh") {Logic.sapphire = "shadow"; }
	else if (third == "fr") {Logic.sapphire = "pocket"; }
	if(Logic.emerald.length > 0 && Logic.ruby.length > 0 && Logic.sapphire.length> 0) {
		parent.removeChild(child);
		if (first == "de") {Logic.emerald = "deku"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "dek"; document.getElementById("text_kok_eme").id = "text_deku";}
	else if (first == "do") {Logic.emerald = "dodongos"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "dod"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.bomb_bag_img; document.getElementById("kok_eme_req1").id = "dod_req1"; document.getElementById("text_kok_eme").id = "text_dod";}
	else if (first == "ja") {Logic.emerald = "jabu"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "jab"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req2").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.letter_img; document.getElementById("kok_eme_req2").src=Game.boomerang_img; document.getElementById("kok_eme_req1").id = "jab_req1"; document.getElementById("kok_eme_req2").id = "jab_req2"; document.getElementById("text_kok_eme").id = "text_jabu";}
	else if (first == "fo") {Logic.emerald = "forest"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "for"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req2").className = "requirements"; document.getElementById("kok_eme_req3").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.hookshot_img; document.getElementById("kok_eme_req2").src=Game.bow_img; document.getElementById("kok_eme_req3").src=Game.goron_bracelet_img; document.getElementById("kok_eme_req1").id = "for_req1"; document.getElementById("kok_eme_req2").id = "for_req2"; document.getElementById("kok_eme_req3").id = "for_req3"; document.getElementById("text_kok_eme").id = "text_forest";}
	else if (first == "fi") {Logic.emerald = "fire"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "fir"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.hammer_img; document.getElementById("kok_eme_req1").id = "fir_req1"; document.getElementById("text_kok_eme").id = "text_fire";}
	else if (first == "wa") {Logic.emerald = "water"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "wat"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req2").className = "requirements"; document.getElementById("kok_eme_req3").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.iron_boots_img; document.getElementById("kok_eme_text2").innerHTML ="/"; document.getElementById("kok_eme_req2").src=Game.golden_scale_img; document.getElementById("kok_eme_text3").innerHTML = "+"; document.getElementById("kok_eme_req3").src=Game.longshot_img; document.getElementById("kok_eme_req1").id = "wat_req1"; document.getElementById("kok_eme_req2").id = "wat_req2"; document.getElementById("kok_eme_req3").id = "wat_req3"; document.getElementById("text_kok_eme").id = "text_water";}
	else if (first == "sp") {Logic.emerald = "spirit"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "spi"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req2").className = "requirements"; document.getElementById("kok_eme_req3").className = "requirements"; document.getElementById("kok_eme_req4").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.silver_gauntlets_img; document.getElementById("kok_eme_req2").src=Game.mirror_shield_img; document.getElementById("kok_eme_req3").src=Game.bomb_bag_img; document.getElementById("kok_eme_req4").src=Game.hookshot_img; document.getElementById("kok_eme_req1").id = "spi_req1"; document.getElementById("kok_eme_req2").id = "spi_req2"; document.getElementById("kok_eme_req3").id = "spi_req3"; document.getElementById("kok_eme_req4").id = "spi_req4"; document.getElementById("text_kok_eme").id = "text_spirit";}
	else if (first == "sh") {Logic.emerald = "shadow"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "sha"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req2").className = "requirements"; document.getElementById("kok_eme_req3").className = "requirements"; document.getElementById("kok_eme_req4").className = "requirements"; document.getElementById("kok_eme_req5").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.dins_fire_img; document.getElementById("kok_eme_req2").src =Game.magic_meter_img; document.getElementById("kok_eme_req3").src=Game.hover_boots_img; document.getElementById("kok_eme_req4").src=Game.bomb_bag_img; document.getElementById("kok_eme_req5").src=Game.hookshot_img; document.getElementById("kok_eme_req1").id = "sha_req1"; document.getElementById("kok_eme_req2").id = "sha_req2"; document.getElementById("kok_eme_req3").id = "sha_req3"; document.getElementById("kok_eme_req4").id = "sha_req4"; document.getElementById("kok_eme_req5").id = "sha_req5"; document.getElementById("text_kok_eme").id = "text_shadow";}
	else if (first == "fr") {Logic.emerald = "pocket"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "pok"; document.getElementById("text_kok_eme").id = "text_pocket";}
	
	if (second == "de") {Logic.ruby = "deku"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "dek"; document.getElementById("text_gor_rub").id = "text_deku";}
	else if (second == "do") {Logic.ruby = "dodongos"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "dod"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.bomb_bag_img; document.getElementById("gor_rub_req1").id = "dod_req1"; document.getElementById("text_gor_rub").id = "text_dod";}
	else if (second == "ja") {Logic.ruby = "jabu"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "jab"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req2").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.letter_img; document.getElementById("gor_rub_req2").src=Game.boomerang_img; document.getElementById("gor_rub_req1").id = "jab_req1"; document.getElementById("gor_rub_req2").id = "jab_req2"; document.getElementById("text_gor_rub").id = "text_jabu";}
	else if (second == "fo") {Logic.ruby = "forest"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "for"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req2").className = "requirements"; document.getElementById("gor_rub_req3").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.hookshot_img; document.getElementById("gor_rub_req2").src=Game.bow_img; document.getElementById("gor_rub_req3").src=Game.goron_bracelet_img; document.getElementById("gor_rub_req1").id = "for_req1"; document.getElementById("gor_rub_req2").id = "for_req2"; document.getElementById("gor_rub_req3").id = "for_req3"; document.getElementById("text_gor_rub").id = "text_forest";}
	else if (second == "fi") {Logic.ruby = "fire"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "fir"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.hammer_img; document.getElementById("gor_rub_req1").id = "fir_req1"; document.getElementById("text_gor_rub").id = "text_fire";}
	else if (second == "wa") {Logic.ruby = "water"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "wat"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req2").className = "requirements"; document.getElementById("gor_rub_req3").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.iron_boots_img; document.getElementById("gor_rub_text2").innerHTML ="/"; document.getElementById("gor_rub_req2").src=Game.golden_scale_img; document.getElementById("gor_rub_text3").innerHTML = "+"; document.getElementById("gor_rub_req3").src=Game.longshot_img; document.getElementById("gor_rub_req1").id = "wat_req1"; document.getElementById("gor_rub_req2").id = "wat_req2"; document.getElementById("gor_rub_req3").id = "wat_req3"; document.getElementById("text_gor_rub").id = "text_water";}
	else if (second == "sp") {Logic.ruby = "spirit"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "spi"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req2").className = "requirements"; document.getElementById("gor_rub_req3").className = "requirements"; document.getElementById("gor_rub_req4").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.silver_gauntlets_img; document.getElementById("gor_rub_req2").src=Game.mirror_shield_img; document.getElementById("gor_rub_req3").src=Game.bomb_bag_img; document.getElementById("gor_rub_req4").src=Game.hookshot_img; document.getElementById("gor_rub_req1").id = "spi_req1"; document.getElementById("gor_rub_req2").id = "spi_req2"; document.getElementById("gor_rub_req3").id = "spi_req3"; document.getElementById("gor_rub_req4").id = "spi_req4"; document.getElementById("text_gor_rub").id = "text_spirit";}
	else if (second == "sh") {Logic.ruby = "shadow"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "sha"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req2").className = "requirements"; document.getElementById("gor_rub_req3").className = "requirements"; document.getElementById("gor_rub_req4").className = "requirements"; document.getElementById("gor_rub_req5").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.dins_fire_img; document.getElementById("gor_rub_req2").src =Game.magic_meter_img; document.getElementById("gor_rub_req3").src=Game.hover_boots_img; document.getElementById("gor_rub_req4").src=Game.bomb_bag_img; document.getElementById("gor_rub_req5").src=Game.hookshot_img; document.getElementById("gor_rub_req1").id = "sha_req1"; document.getElementById("gor_rub_req2").id = "sha_req2"; document.getElementById("gor_rub_req3").id = "sha_req3"; document.getElementById("gor_rub_req4").id = "sha_req4"; document.getElementById("gor_rub_req5").id = "sha_req5"; document.getElementById("text_gor_rub").id = "text_shadow";}
	else if (second == "fr") {Logic.ruby = "pocket"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "pok"; document.getElementById("text_gor_rub").id = "text_pocket";}
	
	if (third == "de") {Logic.sapphire = "deku"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "dek"; document.getElementById("text_zor_sap").id = "text_deku";}
	else if (third == "do") {Logic.sapphire = "dodongos"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "dod"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.bomb_bag_img; document.getElementById("zor_sap_req1").id = "dod_req1"; document.getElementById("text_zor_sap").id = "text_dod";}
	else if (third == "ja") {Logic.sapphire = "jabu"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "jab"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req2").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.letter_img; document.getElementById("zor_sap_req2").src=Game.boomerang_img; document.getElementById("zor_sap_req1").id = "jab_req1"; document.getElementById("zor_sap_req2").id = "jab_req2"; document.getElementById("text_zor_sap").id = "text_jabu";}
	else if (third == "fo") {Logic.sapphire = "forest"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "for"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req2").className = "requirements"; document.getElementById("zor_sap_req3").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.hookshot_img; document.getElementById("zor_sap_req2").src=Game.bow_img; document.getElementById("zor_sap_req3").src=Game.goron_bracelet_img; document.getElementById("zor_sap_req1").id = "for_req1"; document.getElementById("zor_sap_req2").id = "for_req2"; document.getElementById("zor_sap_req3").id = "for_req3"; document.getElementById("text_zor_sap").id = "text_forest";}
	else if (third == "fi") {Logic.sapphire = "fire"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "fir"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.hammer_img; document.getElementById("zor_sap_req1").id = "fir_req1"; document.getElementById("text_zor_sap").id = "text_fire";}
	else if (third == "wa") {Logic.sapphire = "water"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "wat"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req2").className = "requirements"; document.getElementById("zor_sap_req3").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.iron_boots_img; document.getElementById("zor_sap_text2").innerHTML ="/"; document.getElementById("zor_sap_req2").src=Game.golden_scale_img; document.getElementById("zor_sap_text3").innerHTML = "+"; document.getElementById("zor_sap_req3").src=Game.longshot_img; document.getElementById("zor_sap_req1").id = "wat_req1"; document.getElementById("zor_sap_req2").id = "wat_req2"; document.getElementById("zor_sap_req3").id = "wat_req3"; document.getElementById("text_zor_sap").id = "text_water";}
	else if (third == "sp") {Logic.sapphire = "spirit"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "spi"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req2").className = "requirements"; document.getElementById("zor_sap_req3").className = "requirements"; document.getElementById("zor_sap_req4").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.silver_gauntlets_img; document.getElementById("zor_sap_req2").src=Game.mirror_shield_img; document.getElementById("zor_sap_req3").src=Game.bomb_bag_img; document.getElementById("zor_sap_req4").src=Game.hookshot_img; document.getElementById("zor_sap_req1").id = "spi_req1"; document.getElementById("zor_sap_req2").id = "spi_req2"; document.getElementById("zor_sap_req3").id = "spi_req3"; document.getElementById("zor_sap_req4").id = "spi_req4"; document.getElementById("text_zor_sap").id = "text_spirit";}
	else if (third == "sh") {Logic.sapphire = "shadow"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "sha"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req2").className = "requirements"; document.getElementById("zor_sap_req3").className = "requirements"; document.getElementById("zor_sap_req4").className = "requirements"; document.getElementById("zor_sap_req5").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.dins_fire_img; document.getElementById("zor_sap_req2").src =Game.magic_meter_img; document.getElementById("zor_sap_req3").src=Game.hover_boots_img; document.getElementById("zor_sap_req4").src=Game.bomb_bag_img; document.getElementById("zor_sap_req5").src=Game.hookshot_img; document.getElementById("zor_sap_req1").id = "sha_req1"; document.getElementById("zor_sap_req2").id = "sha_req2"; document.getElementById("zor_sap_req3").id = "sha_req3"; document.getElementById("zor_sap_req4").id = "sha_req4"; document.getElementById("zor_sap_req5").id = "sha_req5"; document.getElementById("text_zor_sap").id = "text_shadow";}
	else if (third == "fr") {Logic.sapphire = "pocket"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "pok"; document.getElementById("text_zor_sap").id = "text_pocket";}
		}
}
}
if (document.getElementById("markMedallions") != null && document.getElementById("markStones") == null) {
	var tempstring = document.getElementById("markMedallions").value;
if(tempstring.length == 6) 	{
	var str = tempstring;
	var first = str.substring(0,2);
	var second = str.substring(2,4);
	var third = str.substring(4,6);
	var parent = document.getElementById("info_column");
	var child = document.getElementById("markMedallions");
	
	
	if (first == "de") {Logic.forest_medallion_location = "deku"; }
	else if (first == "do") {Logic.forest_medallion_location = "dodongos"; }
	else if (first == "ja") {Logic.forest_medallion_location = "jabu"; }
	else if (first == "fo") {Logic.forest_medallion_location = "forest"; }
	else if (first == "fi") {Logic.forest_medallion_location = "fire"; }
	else if (first == "wa") {Logic.forest_medallion_location = "water"; }
	else if (first == "sp") {Logic.forest_medallion_location = "spirit"; }
	else if (first == "sh") {Logic.forest_medallion_location = "shadow"; }
	else if (first == "fr") {Logic.forest_medallion_location = "pocket"; }
	
	if (second == "de") {Logic.fire_medallion_location = "deku"; }
	else if (second == "do") {Logic.fire_medallion_location = "dodongos"; }
	else if (second == "ja") {Logic.fire_medallion_location = "jabu"; }
	else if (second == "fo") {Logic.fire_medallion_location = "forest"; }
	else if (second == "fi") {Logic.fire_medallion_location = "fire"; }
	else if (second == "wa") {Logic.fire_medallion_location = "water"; }
	else if (second == "sp") {Logic.fire_medallion_location = "spirit"; }
	else if (second == "sh") {Logic.fire_medallion_location = "shadow"; }
	else if (second == "fr") {Logic.fire_medallion_location = "pocket"; }
	
	if (third == "de") {Logic.water_medallion_location = "deku"; }
	else if (third == "do") {Logic.water_medallion_location = "dodongos"; }
	else if (third == "ja") {Logic.water_medallion_location = "jabu"; }
	else if (third == "fo") {Logic.water_medallion_location = "forest"; }
	else if (third == "fi") {Logic.water_medallion_location = "fire"; }
	else if (third == "wa") {Logic.water_medallion_location = "water"; }
	else if (third == "sp") {Logic.water_medallion_location = "spirit"; }
	else if (third == "sh") {Logic.water_medallion_location = "shadow"; }
	else if (third == "fr") {Logic.water_medallion_location = "pocket"; }
	if(Logic.forest_medallion_location.length > 0 && Logic.fire_medallion_location.length > 0 && Logic.water_medallion_location.length> 0) {
		parent.removeChild(child);
		if (first == "de") {Logic.forest_medallion_location = "deku"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "dek"; document.getElementById("text_for_med").id = "text_deku";}
	else if (first == "do") {Logic.forest_medallion_location = "dodongos"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "dod"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req1").src = Game.bomb_bag_img; ; document.getElementById("for_med_req1").id = "dod_req1"; document.getElementById("text_for_med").id = "text_dod";}
	else if (first == "ja") {Logic.forest_medallion_location = "jabu"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "jab"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req2").className = "requirements"; document.getElementById("for_med_req1").src=Game.letter_img; document.getElementById("for_med_req2").src=Game.boomerang_img; document.getElementById("for_med_req1").id = "jab_req1"; document.getElementById("for_med_req2").id = "jab_req2"; document.getElementById("text_for_med").id = "text_jabu";}
	else if (first == "fo") {Logic.forest_medallion_location = "forest"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "for"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req2").className = "requirements"; document.getElementById("for_med_req3").className = "requirements"; document.getElementById("for_med_req1").src=Game.hookshot_img; document.getElementById("for_med_req2").src=Game.bow_img; document.getElementById("for_med_req3").src=Game.goron_bracelet_img; document.getElementById("for_med_req1").id = "for_req1"; document.getElementById("for_med_req2").id = "for_req2"; document.getElementById("for_med_req3").id = "for_req3"; document.getElementById("text_for_med").id = "text_forest";}
	else if (first == "fi") {Logic.forest_medallion_location = "fire"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "fir"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req1").src=Game.hammer_img; document.getElementById("for_med_req1").id = "fir_req1"; document.getElementById("text_for_med").id = "text_fire";}
	else if (first == "wa") {Logic.forest_medallion_location = "water"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "wat"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req2").className = "requirements"; document.getElementById("for_med_req3").className = "requirements"; document.getElementById("for_med_req1").src=Game.iron_boots_img; document.getElementById("for_med_text2").innerHTML ="/"; document.getElementById("for_med_req2").src=Game.golden_scale_img; document.getElementById("for_med_text3").innerHTML = "+"; document.getElementById("for_med_req3").src=Game.longshot_img; document.getElementById("for_med_req1").id = "wat_req1"; document.getElementById("for_med_req2").id = "wat_req2"; document.getElementById("for_med_req3").id = "wat_req3"; document.getElementById("text_for_med").id = "text_water";}
	else if (first == "sp") {Logic.forest_medallion_location = "spirit"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "spi"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req2").className = "requirements"; document.getElementById("for_med_req3").className = "requirements"; document.getElementById("for_med_req4").className = "requirements"; document.getElementById("for_med_req1").src=Game.silver_gauntlets_img; document.getElementById("for_med_req2").src=Game.mirror_shield_img; document.getElementById("for_med_req3").src = Game.bomb_bag_img; document.getElementById("for_med_req4").src=Game.hookshot_img; document.getElementById("for_med_req1").id = "spi_req1"; document.getElementById("for_med_req2").id = "spi_req2"; document.getElementById("for_med_req3").id = "spi_req3"; document.getElementById("for_med_req4").id = "spi_req4"; document.getElementById("text_for_med").id = "text_spirit";}
	else if (first == "sh") {Logic.forest_medallion_location = "shadow"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "sha"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req2").className = "requirements"; document.getElementById("for_med_req3").className = "requirements"; document.getElementById("for_med_req4").className = "requirements"; document.getElementById("for_med_req5").className = "requirements"; document.getElementById("for_med_req1").src=Game.dins_fire_img; document.getElementById("for_med_req2").src=Game.magic_meter_img; document.getElementById("for_med_req3").src=Game.hover_boots_img; document.getElementById("for_med_req4").src = Game.bomb_bag_img; document.getElementById("for_med_req5").src=Game.hookshot_img; document.getElementById("for_med_req1").id = "sha_req1"; document.getElementById("for_med_req2").id = "sha_req2"; document.getElementById("for_med_req3").id = "sha_req3"; document.getElementById("for_med_req4").id = "sha_req4"; document.getElementById("for_med_req5").id = "sha_req5"; document.getElementById("text_for_med").id = "text_shadow";}
	else if (first == "fr") {Logic.forest_medallion_location = "pocket"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "pok"; document.getElementById("text_for_med").id = "text_pocket";}
	if (second == "de") {Logic.fire_medallion_location = "deku"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "dek"; document.getElementById("text_fir_med").id = "text_deku";}
	else if (second == "do") {Logic.fire_medallion_location = "dodongos"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "dod"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req1").src = Game.bomb_bag_img; document.getElementById("fir_med_req1").id = "dod_req1"; document.getElementById("text_fir_med").id = "text_dod";}
	else if (second == "ja") {Logic.fire_medallion_location = "jabu"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "jab"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req2").className = "requirements"; document.getElementById("fir_med_req1").src=Game.letter_img; document.getElementById("fir_med_req2").src=Game.boomerang_img; document.getElementById("fir_med_req1").id = "jab_req1"; document.getElementById("fir_med_req2").id = "jab_req2"; document.getElementById("text_fir_med").id = "text_jabu";}
	else if (second == "fo") {Logic.fire_medallion_location = "forest"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "for"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req2").className = "requirements"; document.getElementById("fir_med_req3").className = "requirements"; document.getElementById("fir_med_req1").src=Game.hookshot_img; document.getElementById("fir_med_req2").src=Game.bow_img; document.getElementById("fir_med_req3").src=Game.goron_bracelet_img; document.getElementById("fir_med_req1").id = "for_req1"; document.getElementById("fir_med_req2").id = "for_req2"; document.getElementById("fir_med_req3").id = "for_req3"; document.getElementById("text_fir_med").id = "text_forest";}
	else if (second == "fi") {Logic.fire_medallion_location = "fire"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "fir"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req1").src=Game.hammer_img; document.getElementById("fir_med_req1").id = "fir_req1"; document.getElementById("text_fir_med").id = "text_fire";}
	else if (second == "wa") {Logic.fire_medallion_location = "water"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "wat";  document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req2").className = "requirements"; document.getElementById("fir_med_req3").className = "requirements"; document.getElementById("fir_med_req1").src=Game.iron_boots_img; document.getElementById("fir_med_text2").innerHTML ="/"; document.getElementById("fir_med_req2").src=Game.golden_scale_img; document.getElementById("fir_med_text3").innerHTML = "+"; document.getElementById("fir_med_req3").src=Game.longshot_img; document.getElementById("fir_med_req1").id = "wat_req1"; document.getElementById("fir_med_req2").id = "wat_req2"; document.getElementById("fir_med_req3").id = "wat_req3"; document.getElementById("text_fir_med").id = "text_water";}
	else if (second == "sp") {Logic.fire_medallion_location = "spirit"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "spi"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req2").className = "requirements"; document.getElementById("fir_med_req3").className = "requirements"; document.getElementById("fir_med_req4").className = "requirements"; document.getElementById("fir_med_req1").src=Game.silver_gauntlets_img; document.getElementById("fir_med_req2").src=Game.mirror_shield_img; document.getElementById("fir_med_req3").src = Game.bomb_bag_img; document.getElementById("fir_med_req4").src=Game.hookshot_img;  document.getElementById("fir_med_req1").id = "spi_req1"; document.getElementById("fir_med_req2").id = "spi_req2"; document.getElementById("fir_med_req3").id = "spi_req3"; document.getElementById("fir_med_req4").id = "spi_req4"; document.getElementById("text_fir_med").id = "text_spirit";}
	else if (second == "sh") {Logic.fire_medallion_location = "shadow"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "sha"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req2").className = "requirements"; document.getElementById("fir_med_req3").className = "requirements"; document.getElementById("fir_med_req4").className = "requirements"; document.getElementById("fir_med_req5").className = "requirements"; document.getElementById("fir_med_req1").src=Game.dins_fire_img; document.getElementById("fir_med_req2").src=Game.magic_meter_img; document.getElementById("fir_med_req3").src=Game.hover_boots_img; document.getElementById("fir_med_req4").src = Game.bomb_bag_img; document.getElementById("fir_med_req5").src=Game.hookshot_img; document.getElementById("fir_med_req1").id = "sha_req1"; document.getElementById("fir_med_req2").id = "sha_req2"; document.getElementById("fir_med_req3").id = "sha_req3"; document.getElementById("fir_med_req4").id = "sha_req4"; document.getElementById("fir_med_req5").id = "sha_req5"; document.getElementById("text_fir_med").id = "text_shadow";}
	else if (second == "fr") {Logic.fire_medallion_location = "pocket"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "pok"; document.getElementById("text_fir_med").id = "text_pocket";}
	if (third == "de") {Logic.water_medallion_location = "deku"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "dek"; document.getElementById("text_wat_med").id = "text_deku";}
	else if (third == "do") {Logic.water_medallion_location = "dodongos"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "dod"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req1").src = Game.bomb_bag_img; document.getElementById("wat_med_req1").id = "dod_req1"; document.getElementById("text_wat_med").id = "text_dod";}
	else if (third == "ja") {Logic.water_medallion_location = "jabu"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "jab"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req2").className = "requirements"; document.getElementById("wat_med_req1").src=Game.letter_img; document.getElementById("wat_med_req2").src=Game.boomerang_img; document.getElementById("wat_med_req1").id = "jab_req1"; document.getElementById("wat_med_req2").id = "jab_req2"; document.getElementById("text_wat_med").id = "text_jabu";}
	else if (third == "fo") {Logic.water_medallion_location = "forest"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "for"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req2").className = "requirements"; document.getElementById("wat_med_req3").className = "requirements"; document.getElementById("wat_med_req1").src=Game.hookshot_img; document.getElementById("wat_med_req2").src=Game.bow_img; document.getElementById("wat_med_req3").src=Game.goron_bracelet_img; document.getElementById("wat_med_req1").id = "for_req1"; document.getElementById("wat_med_req2").id = "for_req2"; document.getElementById("wat_med_req3").id = "for_req3"; document.getElementById("text_wat_med").id = "text_forest";}
	else if (third == "fi") {Logic.water_medallion_location = "fire"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "fir"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req1").src=Game.hammer_img; document.getElementById("wat_med_req1").id = "fir_req1"; document.getElementById("text_wat_med").id = "text_fire";}
	else if (third == "wa") {Logic.water_medallion_location = "water"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "wat";  document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req2").className = "requirements"; document.getElementById("wat_med_req3").className = "requirements"; document.getElementById("wat_med_req1").src=Game.iron_boots_img; document.getElementById("wat_med_text2").innerHTML ="/"; document.getElementById("wat_med_req2").src=Game.golden_scale_img; document.getElementById("wat_med_text3").innerHTML = "+"; document.getElementById("wat_med_req3").src=Game.longshot_img; document.getElementById("wat_med_req1").id = "wat_req1"; document.getElementById("wat_med_req2").id = "wat_req2"; document.getElementById("wat_med_req3").id = "wat_req3"; document.getElementById("text_wat_med").id = "text_water";}
	else if (third == "sp") {Logic.water_medallion_location = "spirit"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "spi"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req2").className = "requirements"; document.getElementById("wat_med_req3").className = "requirements"; document.getElementById("wat_med_req4").className = "requirements"; document.getElementById("wat_med_req1").src=Game.silver_gauntlets_img; document.getElementById("wat_med_req2").src=Game.mirror_shield_img; document.getElementById("wat_med_req3").src = Game.bomb_bag_img; document.getElementById("wat_med_req4").src=Game.hookshot_img; document.getElementById("wat_med_req1").id = "spi_req1"; document.getElementById("wat_med_req2").id = "spi_req2"; document.getElementById("wat_med_req3").id = "spi_req3"; document.getElementById("wat_med_req4").id = "spi_req4"; document.getElementById("text_wat_med").id = "text_spirit";}
	else if (third == "sh") {Logic.water_medallion_location = "shadow"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "sha"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req2").className = "requirements"; document.getElementById("wat_med_req3").className = "requirements"; document.getElementById("wat_med_req4").className = "requirements"; document.getElementById("wat_med_req5").className = "requirements"; document.getElementById("wat_med_req1").src=Game.dins_fire_img; document.getElementById("wat_med_req2").src=Game.magic_meter_img; document.getElementById("wat_med_req3").src=Game.hover_boots_img; document.getElementById("wat_med_req4").src = Game.bomb_bag_img; document.getElementById("wat_med_req5").src=Game.hookshot_img; document.getElementById("wat_med_req1").id = "sha_req1"; document.getElementById("wat_med_req2").id = "sha_req2"; document.getElementById("wat_med_req3").id = "sha_req3"; document.getElementById("wat_med_req4").id = "sha_req4"; document.getElementById("wat_med_req5").id = "sha_req5"; document.getElementById("text_wat_med").id = "text_shadow";}
	else if (third == "fr") {Logic.water_medallion_location = "pocket"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "pok"; document.getElementById("text_wat_med").id = "text_pocket";}
	if (Logic.emerald != "deku" && Logic.ruby != "deku" && Logic.sapphire != "deku" && Logic.forest_medallion_location != "deku" && Logic.fire_medallion_location != "deku" && Logic.water_medallion_location != "deku") {Logic.generic1 = "deku"; document.getElementById("text_gen_med1").innerHTML = "dek"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("text_gen_med1").id = "text_deku";}
	else if (Logic.emerald != "dodongos" && Logic.ruby != "dodongos" && Logic.sapphire != "dodongos" && Logic.forest_medallion_location != "dodongos" && Logic.fire_medallion_location != "dodongos" && Logic.water_medallion_location != "dodongos") {Logic.generic1 = "dodongos"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("text_gen_med1").innerHTML = "dod"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req1").src = Game.bomb_bag_img;  document.getElementById("gen_med1_req1").id = "dod_req1"; document.getElementById("text_gen_med1").id = "text_dod";}
	else if (Logic.emerald != "jabu" && Logic.ruby != "jabu" && Logic.sapphire != "jabu" && Logic.forest_medallion_location != "jabu" && Logic.fire_medallion_location!= "jabu" && Logic.water_medallion_location != "jabu") {Logic.generic1 = "jabu"; document.getElementById("text_gen_med1").innerHTML = "jab"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.letter_img; document.getElementById("gen_med1_req2").src=Game.boomerang_img; document.getElementById("gen_med1_req1").id = "jab_req1"; document.getElementById("gen_med1_req2").id = "jab_req2"; document.getElementById("text_gen_med1").id = "text_jabu";}
	else if (Logic.emerald != "forest" && Logic.ruby != "forest" && Logic.sapphire != "forest" && Logic.forest_medallion_location != "forest" && Logic.fire_medallion_location != "forest" && Logic.water_medallion_location != "forest") {Logic.generic1 = "forest"; document.getElementById("text_gen_med1").innerHTML = "for"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.hookshot_img; document.getElementById("gen_med1_req2").src=Game.bow_img; document.getElementById("gen_med1_req3").src=Game.goron_bracelet_img; document.getElementById("gen_med1_req1").id = "for_req1"; document.getElementById("gen_med1_req2").id = "for_req2"; document.getElementById("gen_med1_req3").id = "for_req3"; document.getElementById("text_gen_med1").id = "text_forest";}
	else if (Logic.emerald != "fire" && Logic.ruby != "fire" && Logic.sapphire != "fire" && Logic.forest_medallion_location != "fire" && Logic.fire_medallion_location != "fire" && Logic.water_medallion_location != "fire") {Logic.generic1 = "fire"; document.getElementById("text_gen_med1").innerHTML = "fir"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.hammer_img; document.getElementById("gen_med1_req1").id = "fir_req1"; document.getElementById("text_gen_med1").id = "text_fire";}
	else if (Logic.emerald != "water" && Logic.ruby != "water" && Logic.sapphire != "water" && Logic.forest_medallion_location != "water" && Logic.fire_medallion_location != "water" && Logic.water_medallion_location != "water") {Logic.generic1 = "water"; document.getElementById("text_gen_med1").innerHTML = "wat"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.iron_boots_img; document.getElementById("gen_med1_text2").innerHTML ="/"; document.getElementById("gen_med1_req2").src=Game.golden_scale_img; document.getElementById("gen_med1_text3").innerHTML = "+"; document.getElementById("gen_med1_req3").src=Game.longshot_img; document.getElementById("gen_med1_req1").id = "wat_req1"; document.getElementById("gen_med1_req2").id = "wat_req2"; document.getElementById("gen_med1_req3").id = "wat_req3"; document.getElementById("text_gen_med1").id = "text_water";}
	else if (Logic.emerald != "spirit" && Logic.ruby != "spirit" && Logic.sapphire != "spirit" && Logic.forest_medallion_location != "spirit" && Logic.fire_medallion_location != "spirit" && Logic.water_medallion_location != "spirit") {Logic.generic1 = "spirit"; document.getElementById("text_gen_med1").innerHTML = "spi"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req4").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.silver_gauntlets_img; document.getElementById("gen_med1_req2").src=Game.mirror_shield_img; document.getElementById("gen_med1_req3").src = Game.bomb_bag_img; document.getElementById("gen_med1_req4").src=Game.hookshot_img; document.getElementById("gen_med1_req1").id = "spi_req1"; document.getElementById("gen_med1_req2").id = "spi_req2"; document.getElementById("gen_med1_req3").id = "spi_req3"; document.getElementById("gen_med1_req4").id = "spi_req4"; document.getElementById("text_gen_med1").id = "text_spirit";}
	else if (Logic.emerald != "shadow" && Logic.ruby != "shadow" && Logic.sapphire != "shadow" && Logic.forest_medallion_location != "shadow" && Logic.fire_medallion_location != "shadow" && Logic.water_medallion_location != "shadow") {Logic.generic1 = "shadow"; document.getElementById("text_gen_med1").innerHTML = "sha"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req4").className = "requirements"; document.getElementById("gen_med1_req5").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.dins_fire_img; document.getElementById("gen_med1_req2").src=Game.magic_meter_img; document.getElementById("gen_med1_req3").src=Game.hover_boots_img; document.getElementById("gen_med1_req4").src = Game.bomb_bag_img; document.getElementById("gen_med1_req5").src=Game.hookshot_img; document.getElementById("gen_med1_req1").id = "sha_req1"; document.getElementById("gen_med1_req2").id = "sha_req2"; document.getElementById("gen_med1_req3").id = "sha_req3"; document.getElementById("gen_med1_req4").id = "sha_req4"; document.getElementById("gen_med1_req5").id = "sha_req5"; document.getElementById("text_gen_med1").id = "text_shadow";}
	else if (Logic.emerald != "pocket" && Logic.ruby != "pocket" && Logic.sapphire != "pocket" && Logic.forest_medallion_location != "pocket" && Logic.fire_medallion_location != "pocket" && Logic.water_medallion_location != "pocket") {Logic.generic1 = "pocket"; document.getElementById("text_gen_med1").innerHTML = "pok"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("text_gen_med1").id = "text_pocket";}
	if (Logic.generic1 != "deku" && Logic.emerald != "deku" && Logic.ruby != "deku" && Logic.sapphire != "deku" && Logic.forest_medallion_location != "deku" && Logic.fire_medallion_location != "deku" && Logic.water_medallion_location != "deku") {Logic.generic2 = "deku"; document.getElementById("text_gen_med2").innerHTML = "dek"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("text_gen_med2").id = "text_deku";}
	else if (Logic.generic1 != "dodongos" && Logic.emerald != "dodongos" && Logic.ruby != "dodongos" && Logic.sapphire != "dodongos" && Logic.forest_medallion_location != "dodongos" && Logic.fire_medallion_location != "dodongos" && Logic.water_medallion_location != "dodongos") {Logic.generic2 = "dodongos"; document.getElementById("text_gen_med2").innerHTML = "dod"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req1").src = Game.bomb_bag_img;  document.getElementById("gen_med2_req1").id = "dod_req1"; document.getElementById("text_gen_med2").id = "text_dod";}
	else if (Logic.generic1 != "jabu" && Logic.emerald != "jabu" && Logic.ruby != "jabu" && Logic.sapphire != "jabu" && Logic.forest_medallion_location != "jabu" && Logic.fire_medallion_location != "jabu" && Logic.water_medallion_location != "jabu") {Logic.generic2 = "jabu"; document.getElementById("text_gen_med2").innerHTML = "jab"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.letter_img; document.getElementById("gen_med2_req2").src=Game.boomerang_img; document.getElementById("gen_med2_req1").id = "jab_req1"; document.getElementById("gen_med2_req2").id = "jab_req2"; document.getElementById("text_gen_med2").id = "text_jabu";}
	else if (Logic.generic1 != "forest" && Logic.emerald != "forest" && Logic.ruby != "forest" && Logic.sapphire != "forest" && Logic.forest_medallion_location != "forest" && Logic.fire_medallion_location != "forest" && Logic.water_medallion_location != "forest") {Logic.generic2 = "forest"; document.getElementById("text_gen_med2").innerHTML = "for"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.hookshot_img; document.getElementById("gen_med2_req2").src=Game.bow_img; document.getElementById("gen_med2_req3").src=Game.goron_bracelet_img; document.getElementById("gen_med2_req1").id = "for_req1"; document.getElementById("gen_med2_req2").id = "for_req2"; document.getElementById("gen_med2_req3").id = "for_req3"; document.getElementById("text_gen_med2").id = "text_forest";}
	else if (Logic.generic1 != "fire" && Logic.emerald != "fire" && Logic.ruby != "fire" && Logic.sapphire != "fire" && Logic.forest_medallion_location != "fire" && Logic.fire_medallion_location != "fire" && Logic.water_medallion_location != "fire") {Logic.generic2 = "fire"; document.getElementById("text_gen_med2").innerHTML = "fir"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.hammer_img; document.getElementById("gen_med2_req1").id = "fir_req1"; document.getElementById("text_gen_med2").id = "text_fire";}
	else if (Logic.generic1 != "water" && Logic.emerald != "water" && Logic.ruby != "water" && Logic.sapphire != "water" && Logic.forest_medallion_location != "water" && Logic.fire_medallion_location != "water" && Logic.water_medallion_location != "water") {Logic.generic2 = "water"; document.getElementById("text_gen_med2").innerHTML += "wat"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.iron_boots_img; document.getElementById("gen_med2_text2").innerHTML ="/"; document.getElementById("gen_med2_req2").src=Game.golden_scale_img; document.getElementById("gen_med2_text3").innerHTML = "+"; document.getElementById("gen_med2_req3").src=Game.longshot_img; document.getElementById("gen_med2_req1").id = "wat_req1"; document.getElementById("gen_med2_req2").id = "wat_req2"; document.getElementById("gen_med2_req3").id = "wat_req3"; document.getElementById("text_gen_med2").id = "text_water";}
	else if (Logic.generic1 != "spirit" && Logic.emerald != "spirit" && Logic.ruby != "spirit" && Logic.sapphire != "spirit" && Logic.forest_medallion_location != "spirit" && Logic.fire_medallion_location != "spirit" && Logic.water_medallion_location != "spirit") {Logic.generic2 = "spirit"; document.getElementById("text_gen_med2").innerHTML = "spi"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req4").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.silver_gauntlets_img; document.getElementById("gen_med2_req2").src=Game.mirror_shield_img; document.getElementById("gen_med2_req3").src = Game.bomb_bag_img; document.getElementById("gen_med2_req4").src=Game.hookshot_img; document.getElementById("gen_med2_req1").id = "spi_req1"; document.getElementById("gen_med2_req2").id = "spi_req2"; document.getElementById("gen_med2_req3").id = "spi_req3"; document.getElementById("gen_med2_req4").id = "spi_req4"; document.getElementById("text_gen_med2").id = "text_spirit";}
	else if (Logic.generic1 != "shadow" && Logic.emerald != "shadow" && Logic.ruby != "shadow" && Logic.sapphire != "shadow" && Logic.forest_medallion_location != "shadow" && Logic.fire_medallion_location != "shadow" && Logic.water_medallion_location != "shadow") {Logic.generic2 = "shadow"; document.getElementById("text_gen_med2").innerHTML = "sha"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req4").className = "requirements"; document.getElementById("gen_med2_req5").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.dins_fire_img; document.getElementById("gen_med2_req2").src=Game.magic_meter_img; document.getElementById("gen_med2_req3").src=Game.hover_boots_img; document.getElementById("gen_med2_req4").src = Game.bomb_bag_img; document.getElementById("gen_med2_req5").src=Game.hookshot_img; document.getElementById("gen_med2_req1").id = "sha_req1"; document.getElementById("gen_med2_req2").id = "sha_req2"; document.getElementById("gen_med2_req3").id = "sha_req3"; document.getElementById("gen_med2_req4").id = "sha_req4"; document.getElementById("gen_med2_req5").id = "sha_req5"; document.getElementById("text_gen_med2").id = "text_shadow";}
	else if (Logic.generic1 != "pocket" && Logic.emerald != "pocket" && Logic.ruby != "pocket" && Logic.sapphire != "pocket" && Logic.forest_medallion_location != "pocket" && Logic.fire_medallion_location != "pocket" && Logic.water_medallion_location != "pocket") {Logic.generic2 = "pocket"; document.getElementById("text_gen_med2").innerHTML = "pok"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("text_gen_med2").id = "text_pocket";}
	if (Logic.generic1 != "deku" && Logic.generic2 != "deku" && Logic.emerald != "deku" && Logic.ruby != "deku" && Logic.sapphire != "deku" && Logic.forest_medallion_location != "deku" && Logic.fire_medallion_location != "deku" && Logic.water_medallion_location != "deku") {Logic.generic3 = "deku"; document.getElementById("text_gen_med3").innerHTML = "dek"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").id = "text_deku";}
	else if (Logic.generic1 != "dodongos" && Logic.generic2 != "dodongos" && Logic.emerald != "dodongos" && Logic.ruby != "dodongos" && Logic.sapphire != "dodongos" && Logic.forest_medallion_location != "dodongos" && Logic.fire_medallion_location != "dodongos" && Logic.water_medallion_location != "dodongos") {Logic.generic3 = "dodongos"; document.getElementById("text_gen_med3").innerHTML = "dod"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req1").src = Game.bomb_bag_img;  document.getElementById("gen_med3_req1").id = "dod_req1"; document.getElementById("text_gen_med3").id = "text_dod";}
	else if (Logic.generic1 != "jabu" && Logic.generic2 != "jabu" && Logic.emerald != "jabu" && Logic.ruby != "jabu" && Logic.sapphire != "jabu" && Logic.forest_medallion_location != "jabu" && Logic.fire_medallion_location != "jabu" && Logic.water_medallion_location != "jabu") {Logic.generic3 = "jabu"; document.getElementById("text_gen_med3").innerHTML = "jab"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.letter_img; document.getElementById("gen_med3_req2").src=Game.boomerang_img; document.getElementById("gen_med3_req1").id = "jab_req1"; document.getElementById("gen_med3_req2").id = "jab_req2"; document.getElementById("text_gen_med3").id = "text_jabu";}
	else if (Logic.generic1 != "forest" && Logic.generic2 != "forest" && Logic.emerald != "forest" && Logic.ruby != "forest" && Logic.sapphire != "forest" && Logic.forest_medallion_location != "forest" && Logic.fire_medallion_location != "forest" && Logic.water_medallion_location != "forest") {Logic.generic3 = "forest"; document.getElementById("text_gen_med3").innerHTML = "for"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.hookshot_img; document.getElementById("gen_med3_req2").src=Game.bow_img; document.getElementById("gen_med3_req3").src=Game.goron_bracelet_img; document.getElementById("gen_med3_req1").id = "for_req1"; document.getElementById("gen_med3_req2").id = "for_req2"; document.getElementById("gen_med3_req3").id = "for_req3"; document.getElementById("text_gen_med3").id = "text_forest";}
	else if (Logic.generic1 != "fire" && Logic.generic2 != "fire" && Logic.emerald != "fire" && Logic.ruby != "fire" && Logic.sapphire != "fire" && Logic.forest_medallion_location != "fire" && Logic.fire_medallion_location != "fire" && Logic.water_medallion_location != "fire") {Logic.generic3 = "fire"; document.getElementById("text_gen_med3").innerHTML = "fir"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.hammer_img; document.getElementById("gen_med3_req1").id = "fir_req1"; document.getElementById("text_gen_med3").id = "text_fire";}
	else if (Logic.generic1 != "water" && Logic.generic2 != "water" && Logic.emerald != "water" && Logic.ruby != "water" && Logic.sapphire != "water" && Logic.forest_medallion_location != "water" && Logic.fire_medallion_location != "water" && Logic.water_medallion_location != "water") {Logic.generic3 = "water"; document.getElementById("text_gen_med3").innerHTML = "wat"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.iron_boots_img; document.getElementById("gen_med3_text2").innerHTML ="/"; document.getElementById("gen_med3_req2").src=Game.golden_scale_img; document.getElementById("gen_med3_text3").innerHTML = "+"; document.getElementById("gen_med3_req3").src=Game.longshot_img; document.getElementById("gen_med3_req1").id = "wat_req1"; document.getElementById("gen_med3_req2").id = "wat_req2"; document.getElementById("gen_med3_req3").id = "wat_req3"; document.getElementById("text_gen_med3").id = "text_water";}
	else if (Logic.generic1 != "spirit" && Logic.generic2 != "spirit" && Logic.emerald != "spirit" && Logic.ruby != "spirit" && Logic.sapphire != "spirit" && Logic.forest_medallion_location != "spirit" && Logic.fire_medallion_location != "spirit" && Logic.water_medallion_location != "spirit") {Logic.generic3 = "spirit"; document.getElementById("text_gen_med3").innerHTML = "spi"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req4").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.silver_gauntlets_img; document.getElementById("gen_med3_req2").src=Game.mirror_shield_img; document.getElementById("gen_med3_req3").src = Game.bomb_bag_img; document.getElementById("gen_med3_req4").src=Game.hookshot_img; document.getElementById("gen_med3_req1").id = "spi_req1"; document.getElementById("gen_med3_req2").id = "spi_req2"; document.getElementById("gen_med3_req3").id = "spi_req3"; document.getElementById("gen_med3_req4").id = "spi_req4"; document.getElementById("text_gen_med3").id = "text_spirit";}
	else if (Logic.generic1 != "shadow" && Logic.generic2 != "shadow" && Logic.emerald != "shadow" && Logic.ruby != "shadow" && Logic.sapphire != "shadow" && Logic.forest_medallion_location != "shadow" && Logic.fire_medallion_location != "shadow" && Logic.water_medallion_location != "shadow") {Logic.generic3 = "shadow"; document.getElementById("text_gen_med3").innerHTML = "sha"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req4").className = "requirements"; document.getElementById("gen_med3_req5").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.dins_fire_img; document.getElementById("gen_med3_req2").src=Game.magic_meter_img; document.getElementById("gen_med3_req3").src=Game.hover_boots_img; document.getElementById("gen_med3_req4").src = Game.bomb_bag_img; document.getElementById("gen_med3_req5").src=Game.hookshot_img; document.getElementById("gen_med3_req1").id = "sha_req1"; document.getElementById("gen_med3_req2").id = "sha_req2"; document.getElementById("gen_med3_req3").id = "sha_req3"; document.getElementById("gen_med3_req4").id = "sha_req4"; document.getElementById("gen_med3_req5").id = "sha_req5"; document.getElementById("text_gen_med3").id = "text_shadow";}
	else if (Logic.generic1 != "pocket" && Logic.generic2 != "pocket" && Logic.emerald != "pocket" && Logic.ruby != "pocket" && Logic.sapphire != "pocket" && Logic.forest_medallion_location != "pocket" && Logic.fire_medallion_location != "pocket" && Logic.water_medallion_location != "pocket") {Logic.generic3 = "pocket"; document.getElementById("text_gen_med3").innerHTML = "pok"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").id = "text_pocket";}
		}
}
}
	
	Location_Logic.kokiri_sword = true;
	Location_Logic.mido_1 = true;
	Location_Logic.mido_2 = true;
	Location_Logic.mido_3 = true;
	Location_Logic.mido_4 = true;
	Location_Logic.kokiri_song_of_storms = Logic.song_of_storms;
	Location_Logic.talons_chickens = true;
	Location_Logic.back_of_ranch = true;
	Location_Logic.hyrule_forest_boulder = Logic.can_blast_or_smash;
	Location_Logic.hyrule_open_grotto = true;
	Location_Logic.hyrule_hp_scrub = Logic.can_blast_or_smash;;
	Location_Logic.hyrule_boulder_of_destiny = Logic.can_blast_or_smash;;
	Location_Logic.hyrule_tektite_grotto = Logic.can_blast_or_smash && (Logic.golden_scale || Logic.iron_boots);
	Location_Logic.gerudovalley_box = true;
	Location_Logic.gerudovalley_waterfall = true;
	Location_Logic.gerudo_hammer = Logic.fortress_access && Logic.hammer;
	Location_Logic.hylia_child_fishing = true;
	Location_Logic.hylia_bottle = Logic.silver_scale;
	Location_Logic.hylia_adult_fishing = Logic.hookshot || Logic.child_can_enter_river;
	Location_Logic.hylia_lab_top = Logic.hookshot || Logic.child_can_enter_river;
	Location_Logic.hylia_lab_dive = Logic.golden_scale;
	Location_Logic.hylia_sun_shoot = Logic.longshot && Logic.bow;
	Location_Logic.market_slingshot_game = true;
	Location_Logic.richard = true;
	Location_Logic.market_bowling_1 = Logic.bomb_bag;
	Location_Logic.market_bowling_2 = Logic.bomb_bag;
	Location_Logic.market_lens_game = Logic.can_see;
	Location_Logic.poes= (Logic.bow && Logic.eponas && Logic.bottle) || Logic.big_poe;
	Location_Logic.dins_fairy = Logic.bomb_bag && Logic.lullaby;
	Location_Logic.ganons_fairy = Logic.golden_gauntlets && Logic.lullaby;
	Location_Logic.lacs = Logic.spirit_medallion && Logic.shadow_medallion;
	Location_Logic.river_pillar = Logic.child_can_enter_river || Logic.hover_boots;
	Location_Logic.river_grotto = true;
	Location_Logic.river_ledge = Logic.child_can_enter_river || Logic.hover_boots;
	Location_Logic.frogs_1 = Logic.child_can_enter_river && Logic.song_of_storms;
	Location_Logic.frogs_2 = Logic.child_can_enter_river && (Logic.song_of_storms && Logic.lullaby && Logic.eponas && Logic.sarias && Logic.suns_song && Logic.song_of_time);
	Location_Logic.zora_diving = (Logic.lullaby && Logic.bomb_bag) || Logic.silver_scale;
	Location_Logic.zora_torches = (Logic.lullaby && Logic.bomb_bag) || Logic.silver_scale;
	Location_Logic.thaw_king = Logic.ice_access || (Logic.bottle && Logic.giants_wallet && Logic.lullaby);
	Location_Logic.ocarina_game = true;
	Location_Logic.lost_woods_grotto = Logic.can_blast_or_smash;
	Location_Logic.lost_woods_scrub_grotto = Logic.bomb_bag || (Logic.sarias || Logic.minuet) && Logic.hammer;
	Location_Logic.bridge_scrub = true;
	Location_Logic.skull_kid = Logic.sarias;
	Location_Logic.target = Logic.slingshot;
	Location_Logic.theater = true;
	Location_Logic.wolfos_grotto = Logic.bomb_bag || (Logic.sarias || Logic.minuet) && Logic.hammer;
	Location_Logic.rolling_goron = Logic.bomb_bag;
	Location_Logic.goron_pot = (Logic.bomb_bag || Logic.goron_bracelet) && (Logic.lullaby || Logic.can_use_dins);
	Location_Logic.goron_dance = Logic.lullaby && Logic.sarias;
	Location_Logic.goron_maze_1 = Logic.can_blast_or_smash || Logic.silver_gauntlets;
	Location_Logic.goron_maze_2 = Logic.can_blast_or_smash || Logic.silver_gauntlets;
	Location_Logic.goron_maze_3 = Logic.hammer || Logic.silver_gauntlets;
	Location_Logic.goron_link = Logic.can_stop_link_the_goron;
	Location_Logic.trail_bombable = Logic.can_blast_or_smash;
	Location_Logic.trail_dodongos_top = true;
	Location_Logic.trail_song_of_storms = Logic.song_of_storms;
	Location_Logic.crater_peak_fairy = Logic.can_blast_or_smash && Logic.lullaby;
	Location_Logic.trade_quest = (((Logic.ice_access || (Logic.giants_wallet && Logic.lullaby && Logic.bottle)) && Logic.prescription) || Logic.claim_check) && Logic.crater_top;
	Location_Logic.man_on_roof = true;//Logic.hookshot;
	Location_Logic.kakariko_grotto = true;
	Location_Logic.windmill = true;//Logic.boomerang || Logic.song_of_time;
	Location_Logic.anju = true;
	Location_Logic.cow_house = true;
	Location_Logic.archery_game = Logic.bow;
	Location_Logic.redead_grotto = Logic.can_blast_or_smash;
	Location_Logic.anjus_chickens = true;
	Location_Logic.tokens_10 = Logic.gold_skulltulas >= 10;
	Location_Logic.tokens_20 = Logic.gold_skulltulas >= 20;
	Location_Logic.tokens_30 = Logic.gold_skulltulas >= 30;
	Location_Logic.tokens_40 = Logic.gold_skulltulas >= 40;
	Location_Logic.tokens_50 = Logic.gold_skulltulas >= 50;
	Location_Logic.crater_bean = (Logic.bolero && Logic.child_can_enter_river) || (Logic.hover_boots && Logic.crater_by_city);
	Location_Logic.crater_hammer_fairy = Logic.crater_by_city && Logic.hammer && Logic.lullaby;
	Location_Logic.crater_nook_hp = Logic.crater_top;
	Location_Logic.crater_grotto = Logic.can_blast_or_smash;
	Location_Logic.gerudo_roof = Logic.fortress_access && (Logic.hookshot || Logic.hover_boots);
	Location_Logic.gerudo_archery_1 = Logic.eponas && Logic.bow;
	Location_Logic.gerudo_archery_2 = Logic.eponas && Logic.bow;
	Location_Logic.wasteland = Logic.can_cross_quicksand && Logic.can_use_fire;
	Location_Logic.colossus_bean = Logic.requiem && Logic.child_can_enter_river;
	Location_Logic.colossus_fairy = Logic.can_enter_colossus && Logic.bomb_bag && Logic.lullaby;
	Location_Logic.spirit7 = (Logic.spirit_keys >=3 && Logic.longshot && Logic.bomb_bag) || Logic.spirit_keys == 5;
	Location_Logic.spirit17 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag;
	Location_Logic.gravedigging_tour = true;
	Location_Logic.graveyard_box = Logic.child_can_enter_river || Logic.longshot;
	Location_Logic.shield_grave = true;
	Location_Logic.suns_grave = Logic.suns_song;
	Location_Logic.fire_grave = Logic.lullaby && Logic.can_use_fire;
	Location_Logic.race_1 = true;
	Location_Logic.race_2 = true;
	Location_Logic.deku_lobby = true;
	Location_Logic.deku_slingshot = true;
	Location_Logic.deku_slingshot_room_side = true;
	Location_Logic.deku_compass = true;
	Location_Logic.deku_compass_room_side = true;
	Location_Logic.deku_basement = true;
	Location_Logic.deku_queen_gohma = Logic.slingshot;
	Location_Logic.dodongos_map = Logic.can_enter_dodongos_adult;
	Location_Logic.dodongos_compass = Logic.can_enter_dodongos_adult;
	Location_Logic.dodongos_bomb_flower_platform = Logic.can_enter_dodongos_child;
	Location_Logic.dodongos_bomb_bag = Logic.can_reach_dodongos_bomb_bag_chest;
	Location_Logic.dodongos_end_of_bridge = (Logic.can_reach_dodongos_bomb_bag_chest_adult && (Logic.bomb_bag || Logic.hammer)) || (Logic.can_reach_dodongos_bomb_bag_chest_child && Logic.bomb_bag);
	Location_Logic.dodongos_above_king = Logic.can_reach_dodongos_bomb_bag_chest && Logic.bomb_bag;
	Location_Logic.dodongos_king_dodongo = Logic.can_reach_dodongos_bomb_bag_chest && Logic.bomb_bag;
	Location_Logic.jabu_boomerang = Logic.can_enter_jabu && (Logic.boomerang || Logic.bomb_bag || Logic.slingshot);
	Location_Logic.jabu_map = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.jabu_compass = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.jabu_barinade = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.fountain_fairy = Logic.ice_access && Logic.bomb_bag;
	Location_Logic.ice_glacier_hp = Logic.ice_access;
	Location_Logic.ice_map = Logic.ice_access;
	Location_Logic.ice_hp = Logic.ice_access;
	Location_Logic.ice_compass = Logic.ice_access;
	Location_Logic.ice_irons = Logic.ice_access;
	Location_Logic.ice_bottom_of_fountain = Logic.ice_access && Logic.iron_boots;
	Location_Logic.forest1 = (Logic.minuet || Logic.sarias) && Logic.hookshot;
	Location_Logic.forest2 = (Logic.minuet || Logic.sarias) && Logic.hookshot;
	Location_Logic.forest3 = (Logic.minuet || Logic.sarias) && Logic.hookshot && (Logic.song_of_time || Logic.bow || (Logic.hover_boots && Logic.forest_keys>=1));
	Location_Logic.forest4 = (Logic.minuet || Logic.sarias) && Logic.hookshot && (Logic.song_of_time || (Logic.hover_boots && Logic.forest_keys>=1) || (Logic.bow/* && (Logic.iron_boots || Logic.golden_scale || Logic.longshot)*/));
	Location_Logic.forest5 = (Logic.minuet || Logic.sarias) && Logic.hookshot && (Logic.song_of_time || (Logic.hover_boots && Logic.forest_keys>=1) || (Logic.bow/* && (Logic.iron_boots || Logic.golden_scale || Logic.longshot)*/));
	Location_Logic.forest6 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.forest_keys >= 1 && Logic.bow && Logic.goron_bracelet;
	Location_Logic.forest7 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.forest_keys >= 2 && Logic.bow && Logic.goron_bracelet;
	Location_Logic.forest8 = (Logic.minuet || Logic.sarias) && Logic.hookshot && ((Logic.bow && Logic.goron_bracelet && Logic.forest_keys >=2) || (Logic.hover_boots && Logic.forest_keys >=1));
	Location_Logic.forest9 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && Logic.bow && Logic.forest_keys>=3;
	Location_Logic.forest10 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && Logic.forest_keys>=3;
	Location_Logic.forest11 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && Logic.bow && Logic.forest_keys>=3;
	Location_Logic.forest12 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && (Logic.bow || Logic.can_use_dins) && Logic.forest_keys>=5;
	Location_Logic.forest13 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && Logic.bow && Logic.forest_keys>=5;
	Location_Logic.forest14 = (Logic.minuet || Logic.sarias) && Logic.hookshot && Logic.goron_bracelet && Logic.bow && Logic.forest_keys>=5 && Logic.forest_boss_key;
	Location_Logic.fire1 = Logic.can_enter_fire_temple;
	Location_Logic.fire2 = Logic.can_enter_fire_temple && Logic.hammer;
	Location_Logic.fire3 = Logic.can_enter_fire_temple && Logic.hammer;
	Location_Logic.fire4 = Logic.can_enter_fire_temple && Logic.fire_keys >=1;
	Location_Logic.fire5 = Logic.can_enter_fire_temple && Logic.fire_keys >=1 && Logic.bomb_bag;
	Location_Logic.fire6 = Logic.can_enter_fire_temple && Logic.fire_boss_key && Logic.hammer && Logic.can_wear_goron_tunic && (Logic.hover_boots || (Logic.fire_keys >=7 && (Logic.song_of_time || Logic.bomb_bag)));
	Location_Logic.fire7 = Logic.can_climb_fire_temple;
	Location_Logic.fire8 = Logic.can_climb_fire_temple;
	Location_Logic.fire9 = Logic.can_climb_fire_temple && ((Logic.fire_keys >= 4 && Logic.bow) || Logic.fire_keys>=5);
	Location_Logic.fire10 = Logic.can_climb_fire_temple && Logic.fire_keys>=5;
	Location_Logic.fire11 = Logic.can_climb_fire_temple && Logic.fire_keys>=5 && Logic.bomb_bag;
	Location_Logic.fire12 = Logic.can_climb_fire_temple && Logic.fire_keys>=5 && Logic.hookshot;
	Location_Logic.fire13 = Logic.can_climb_fire_temple && Logic.fire_keys>=6;
	Location_Logic.fire14 = Logic.can_climb_fire_temple && (Logic.fire_keys>=7 || (Logic.fire_keys>=6 && Logic.hover_boots)) && Logic.hammer && (Logic.song_of_time || Logic.bomb_bag);
	Location_Logic.fire15 = Logic.can_climb_fire_temple && (Logic.fire_keys>=7 || (Logic.fire_keys >= 6 && Logic.hover_boots)) && Logic.bomb_bag;
	Location_Logic.water1 = Logic.can_enter_water;
	Location_Logic.water2 = Logic.can_enter_water;
	Location_Logic.water3 = Logic.middle_water && Logic.bomb_bag;
	Location_Logic.water4 = Logic.can_enter_water && Logic.lullaby && (Logic.bow || Logic.can_use_dins);
	Location_Logic.water5 = Logic.can_enter_water && Logic.lullaby && Logic.bow && Logic.goron_bracelet && (Logic.hover_boots || Logic.longshot);
	Location_Logic.water6 = Logic.middle_water && Logic.can_wear_zora_tunic;
	Location_Logic.water7 = Logic.water_keys >= 5 && Logic.lullaby;
	Location_Logic.water8 = Logic.water_keys >= 5 && Logic.lullaby && Logic.song_of_time && Logic.bow;
	Location_Logic.water9 = Logic.can_enter_water && Logic.lullaby && ((Logic.water_keys >= 5 && Logic.song_of_time && Logic.bow) || Logic.goron_bracelet);
	Location_Logic.water10 = Logic.can_enter_water && Logic.lullaby && Logic.longshot && Logic.water_keys >= 5 && ((Logic.bomb_bag && Logic.goron_bracelet) || Logic.hover_boots);
	Location_Logic.water11 = Logic.can_enter_water && Logic.water_boss_key && Logic.longshot ;
	Location_Logic.spirit1 = Logic.requiem && (Logic.slingshot || Logic.boomerang);
	Location_Logic.spirit2 = Logic.requiem && (Logic.slingshot || Logic.boomerang);
	Location_Logic.spirit3 = (Logic.spirit_keys >=1 && Logic.projectile_both);
	Location_Logic.spirit4 = (Logic.spirit_keys >=1 && Logic.projectile_both);
	Location_Logic.spirit5 = (Logic.spirit_keys ==5 && Logic.requiem && Logic.bomb_bag) || (Logic.spirit_keys >=3 && Logic.silver_gauntlets && Logic.can_use_fire) || (Logic.bomb_bag && Logic.spirit_keys >=1 && Logic.can_use_fire);
	Location_Logic.spirit6 = (Logic.spirit_keys ==5 && Logic.requiem && Logic.bomb_bag) || (Logic.spirit_keys >=3 && Logic.silver_gauntlets && Logic.can_use_fire) || (Logic.bomb_bag && Logic.spirit_keys >=1 && Logic.can_use_fire);
	Location_Logic.spirit8 = Logic.can_enter_adult_spirit && Logic.hookshot && Logic.lullaby;
	Location_Logic.spirit9 = Logic.can_enter_adult_spirit && (Logic.bow || Logic.hookshot || Logic.bomb_bag);
	Location_Logic.spirit10 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3;
	Location_Logic.spirit11 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3;
	Location_Logic.spirit12 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3 && Logic.lullaby;
	Location_Logic.spirit13 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3 && Logic.lullaby && (Logic.hookshot || Logic.hover_boots);
	Location_Logic.spirit14 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag && Logic.mirror_shield;
	Location_Logic.spirit15 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag ;//&& Logic.can_see;
	Location_Logic.spirit16 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag ;//&& Logic.can_see;
	Location_Logic.spirit18 = Logic.can_enter_adult_spirit && Logic.spirit_keys ==5 && Logic.bow && Logic.lullaby && Logic.hookshot;
	Location_Logic.spirit19 = Logic.can_enter_adult_spirit && Logic.spirit_keys ==5 && Logic.mirror_shield;
	Location_Logic.spirit20 = Logic.can_enter_adult_spirit && Logic.spirit_keys ==5 && Logic.mirror_shield && Logic.bomb_bag && Logic.spirit_boss_key && Logic.hookshot;
	Location_Logic.shadow1 = Logic.can_enter_shadow;
	Location_Logic.shadow2 = Logic.can_enter_shadow;
	Location_Logic.shadow3 = Logic.can_cross_shadow_gap;
	Location_Logic.shadow4 = Logic.can_cross_shadow_gap;
	Location_Logic.shadow5 = Logic.can_bomb_shadow_wall;
	Location_Logic.shadow6 = Logic.can_bomb_shadow_wall;
	Location_Logic.shadow7 = Logic.can_bomb_shadow_wall;
	Location_Logic.shadow8 = Logic.can_bomb_shadow_wall && Logic.goron_bracelet;
	Location_Logic.shadow9 = Logic.can_bomb_shadow_wall && Logic.goron_bracelet;
	Location_Logic.shadow10 = Logic.can_bomb_shadow_wall && Logic.shadow_keys >=2;
	Location_Logic.shadow11 = Logic.can_bomb_shadow_wall && Logic.shadow_keys >=2;
	Location_Logic.shadow12 = Logic.can_pass_shadow_hookshot_door && Logic.shadow_keys >=3;
	Location_Logic.shadow13 = Logic.can_pass_shadow_hookshot_door && Logic.shadow_keys >=3;
	Location_Logic.shadow14 = Logic.can_pass_shadow_hookshot_door && Logic.shadow_keys >=3;
	Location_Logic.shadow15 = Logic.can_ride_shadow_boat && Logic.shadow_keys >=4;
	Location_Logic.shadow16 = Logic.can_ride_shadow_boat && Logic.shadow_keys >=4;
	Location_Logic.shadow17 = Logic.can_ride_shadow_boat && Logic.shadow_keys >=4;
	Location_Logic.shadow18 = Logic.can_beat_shadow_boss && Logic.shadow_keys >=5;
	Location_Logic.ganons1 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons2 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons3 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons4 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons5 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons6 = Logic.can_enter_ganons && Logic.golden_gauntlets;
	Location_Logic.ganons7 = Logic.can_enter_ganons && Logic.golden_gauntlets ;//&& Logic.can_see;
	Location_Logic.ganons8 = Logic.can_enter_ganons && Logic.golden_gauntlets && Logic.lullaby && Logic.ganons_keys >= 1;
	Location_Logic.ganons9 = Logic.can_enter_ganons;
	Location_Logic.ganons10 = Logic.can_enter_ganons && Logic.bomb_bag;//&& Logic.can_see;
	Location_Logic.ganons11 = Logic.can_enter_ganons;
	Location_Logic.ganons12 = Logic.can_enter_ganons;
	Location_Logic.ganons13 = Logic.can_enter_ganons;
	Location_Logic.ganons14 = Logic.can_enter_ganons;
	Location_Logic.ganons15 = Logic.can_enter_ganons && (Logic.longshot || ((Logic.fire_arrows && Logic.magic) || (Logic.hover_boots && Logic.can_use_dins)));
	Location_Logic.ganons16 = Logic.can_enter_ganons;
	Location_Logic.gtg1 = Logic.can_save_carpenters && Logic.bow;
	Location_Logic.gtg2 = Logic.can_save_carpenters && Logic.bow;
	Location_Logic.gtg3 = Logic.can_save_carpenters;
	Location_Logic.gtg4 = Logic.can_save_carpenters && Logic.hookshot;
	Location_Logic.gtg5 = Logic.can_save_carpenters && Logic.hookshot && Logic.silver_gauntlets ;//&& Logic.can_see ;
	Location_Logic.gtg6 = Logic.can_save_carpenters && Logic.hookshot && Logic.silver_gauntlets ;//&& Logic.can_see ;
	Location_Logic.gtg7 = Logic.can_save_carpenters && Logic.hookshot && Logic.silver_gauntlets ;//&& Logic.can_see ;
	Location_Logic.gtg8 = Logic.can_save_carpenters && Logic.hookshot && Logic.silver_gauntlets ;//&& Logic.can_see ;
	Location_Logic.gtg9 = Logic.can_save_carpenters && Logic.hookshot && Logic.bow;  //((Logic.bomb_bag || Logic.gtg_keys == 9) && Logic.hammer));
	Location_Logic.gtg10 = Logic.can_save_carpenters && Logic.hookshot && Logic.bow ;//&& Logic.can_see;
	Location_Logic.gtg11 = Logic.can_save_carpenters && Logic.hookshot && Logic.hammer;// && (Logic.can_see || (Logic.bomb_bag || Logic.gtg_keys == 9)) ;
	Location_Logic.gtg12 = Logic.can_save_carpenters && Logic.hookshot/*&& Logic.can_see*/;
	Location_Logic.gtg13 = Logic.can_save_carpenters && (Logic.gtg_keys == 9 || (Logic.bomb_bag && Logic.song_of_time) || (Logic.hookshot /*&& Logic.can_see*/ && Logic.song_of_time));
	Location_Logic.gtg14 = Logic.can_save_carpenters && (Logic.gtg_keys == 9 || (Logic.bomb_bag && Logic.song_of_time) || (Logic.hookshot /*&& Logic.can_see*/ && Logic.song_of_time));
	Location_Logic.gtg15 = Logic.can_save_carpenters && (Logic.gtg_keys == 9 || (Logic.bomb_bag && Logic.song_of_time) || (Logic.hookshot /*&& Logic.can_see*/ && Logic.song_of_time));
	Location_Logic.gtg16 = Logic.can_save_carpenters && Logic.bomb_bag;
	Location_Logic.gtg17 = Logic.can_save_carpenters && Logic.gtg_keys >= 3 ;//&& Logic.can_see;
	Location_Logic.gtg18 = Logic.can_save_carpenters && Logic.gtg_keys >= 4;
	Location_Logic.gtg19 = Logic.can_save_carpenters && Logic.gtg_keys >= 6;
	Location_Logic.gtg20 = Logic.can_save_carpenters && Logic.gtg_keys >= 7;
	Location_Logic.gtg21 = Logic.can_save_carpenters && Logic.gtg_keys >= 9;
	Location_Logic.gtg22 = Logic.can_save_carpenters && Logic.iron_boots && Logic.song_of_time && Logic.hookshot /*&& Logic.can_see*/;
	Location_Logic.well1 = Logic.song_of_storms ;//&& Logic.can_see;
	Location_Logic.well2 = Logic.song_of_storms && Logic.bomb_bag;
	Location_Logic.well3 = Logic.song_of_storms && Logic.lullaby;
	Location_Logic.well4 = Logic.song_of_storms;
	Location_Logic.well5 = Logic.song_of_storms ;//&& Logic.can_see;
	Location_Logic.well6 = Logic.song_of_storms ;//&& Logic.can_see;
	Location_Logic.well7 = Logic.song_of_storms && Logic.bomb_bag;
	Location_Logic.well8 = Logic.song_of_storms && Logic.lullaby ;//&& Logic.kokiri_sword;
	Location_Logic.well9 = Logic.song_of_storms && Logic.lullaby ;//&& Logic.can_see ;
	Location_Logic.well10 = Logic.song_of_storms && Logic.lullaby;
	Location_Logic.well11 = Logic.song_of_storms ;//&& Logic.can_see;
	Location_Logic.well12 = Logic.song_of_storms && Logic.well_keys == 3 ;//&& Logic.can_see ;
	Location_Logic.well13 = Logic.song_of_storms && Logic.well_keys == 3 ;//&& Logic.can_see ;
	Location_Logic.well14 = Logic.song_of_storms && (Logic.bomb_bag || (((/*Logic.can_see &&*/ Logic.well_keys == 3) || Logic.can_use_dins) && Logic.goron_bracelet));
	Location_Logic.zeldasSpot = true;
	Location_Logic.eponasSpot = true;
	Location_Logic.sariasSpot = true;
	Location_Logic.stormsSpot = true;
	Location_Logic.sunsSpot = Logic.lullaby;
	Location_Logic.boleroSpot = Logic.can_enter_fire_temple;
	Location_Logic.minuetSpot = Logic.minuet || Logic.sarias;
	Location_Logic.requiemSpot = Logic.can_enter_colossus;
	Location_Logic.serenadeSpot = Logic.ice_access;
	Location_Logic.preludeSpot = Logic.forest_medallion;
	Location_Logic.nocturneSpot = Logic.forest_medallion && Logic.fire_medallion && Logic.water_medallion;
	Location_Logic.oot = Logic.kokiri_emerald && Logic.goron_ruby && Logic.zora_sapphire;
	
	Location_Logic.gs_kokiri_child = true;
	Location_Logic.gs_kokiri_bean = Logic.bottle;
	Location_Logic.gs_kokiri_adult = Logic.hookshot;
	Location_Logic.gs_market = true;
	Location_Logic.gs_lost_woods_bean1 = Logic.bottle;
	Location_Logic.gs_lost_woods_bean2 = Logic.bottle;
	Location_Logic.gs_lost_woods_above_stage = Logic.bomb_bag || Logic.silver_scale;
	Location_Logic.gs_sacred_forest = Logic.hookshot && (Logic.sarias || Logic.minuet);
	Location_Logic.gs_outside_kakariko = (Logic.boomerang && Logic.bomb_bag) || (Logic.can_blast_or_smash && Logic.hookshot)
	Location_Logic.gs_near_gerudo = (Logic.hammer && Logic.can_use_fire && Logic.hookshot) || (Logic.can_use_dins && Logic.bomb_bag && Logic.boomerang);
	Location_Logic.gs_hyrule_castle_tree = true;
	Location_Logic.gs_hyrule_castle_grotto = Logic.song_of_storms && Logic.bomb_bag && Logic.boomerang;
	Location_Logic.gs_lon_lon_tree = true;
	Location_Logic.gs_lon_lon_shed = true;
	Location_Logic.gs_lon_lon_window = Logic.boomerang;
	Location_Logic.gs_lon_lon_back_wall = Logic.boomerang;
	Location_Logic.gs_kakariko_construction = true;
	Location_Logic.gs_kakariko_skulltula_house = true;
	Location_Logic.gs_kakariko_guard_house = true;
	Location_Logic.gs_kakariko_tree = true;
	Location_Logic.gs_kakariko_tower = Logic.bomb_bag || Logic.slingshot;
	Location_Logic.gs_kakariko_impas = Logic.hookshot;
	Location_Logic.gs_graveyard_wall = Logic.boomerang;
	Location_Logic.gs_graveyard_bean = Logic.bottle;
	Location_Logic.gs_trail_bean = Logic.bottle && (Logic.bomb_bag || Logic.goron_bracelet);
	Location_Logic.gs_trail_bombable_wall = Logic.can_blast_or_smash;
	Location_Logic.gs_trail_hail_path = Logic.hammer;
	Location_Logic.gs_trail_above_dodongos = Logic.hammer;
	Location_Logic.gs_goron_city_center = true;
	Location_Logic.gs_goron_city_maze = Logic.bomb_bag;
	Location_Logic.gs_crater_crate = Logic.can_blast_or_smash;
	Location_Logic.gs_crater_bean = Logic.bottle && Logic.bolero;
	Location_Logic.gs_river_ladder = Logic.silver_scale || Logic.bomb_bag;
	Location_Logic.gs_river_near_grotto = Logic.hookshot;
	Location_Logic.gs_river_above_bridge = Logic.hookshot;
	Location_Logic.gs_domain = Logic.lullaby && (Logic.hookshot || Logic.magic || Logic.bow);
	Location_Logic.gs_fountain_above_log = Logic.rutos_letter && (Logic.silver_scale || (Logic.bomb_bag && Logic.lullaby)) && Logic.boomerang;
	Location_Logic.gs_fountain_tree = Logic.rutos_letter && (Logic.silver_scale || (Logic.bomb_bag && Logic.lullaby))
	Location_Logic.gs_fountain_hidden_cave = Logic.rutos_letter && (Logic.silver_scale || (Logic.bomb_bag && Logic.lullaby)) && Logic.silver_gauntlets && Logic.hookshot && Logic.can_blast_or_smash;
	Location_Logic.gs_hylia_bean = Logic.bottle;
	Location_Logic.gs_hylia_lab_wall = Logic.boomerang;
	Location_Logic.gs_hylia_island = true;
	Location_Logic.gs_hylia_tree = Logic.longshot;
	Location_Logic.gs_lab_crate = Logic.iron_boots & Logic.hookshot;
	Location_Logic.gs_valley_small_bridge = Logic.boomerang;
	Location_Logic.gs_valley_bean = Logic.bottle;
	Location_Logic.gs_valley_tent = Logic.fortress_access && Logic.hookshot;
	Location_Logic.gs_valley_pillar = Logic.fortress_access && Logic.hookshot;
	Location_Logic.gs_fortress_archery = Logic.fortress_access && Logic.hookshot;
	Location_Logic.gs_fortress_top = Logic.fortress_access && (Logic.hookshot || Logic.bow || Logic.hover_boots)
	Location_Logic.gs_wasteland_structure = Logic.hookshot && Logic.can_cross_quicksand;
	Location_Logic.gs_colossus_bean = Logic.bottle && Logic.requiem;
	Location_Logic.gs_colossus_tree = Logic.hookshot && Logic.can_enter_colossus;
	Location_Logic.gs_colossus_hill = (Logic.requiem && (Logic.bomb_bag || Logic.silver_scale)) || (Logic.longshot && Logic.can_enter_colossus);
	Location_Logic.gs_zora_river_tree = true;
	Location_Logic.gs_ganons = true;
	Location_Logic.gs_deku_basement_back = Logic.boomerang && Logic.bomb_bag && Logic.slingshot;
	Location_Logic.gs_deku_basement_gate = true;
	Location_Logic.gs_deku_basement_vines = Logic.slingshot || Logic.boomerang || Logic.bomb_bag;
	Location_Logic.gs_deku_compass = true;
	Location_Logic.gs_dodongos_east_side = Logic.can_enter_dodongos_adult;
	Location_Logic.gs_dodongos_stair_room = Logic.can_enter_dodongos_adult;
	Location_Logic.gs_dodongos_above_stairs = Logic.can_reach_dodongos_bomb_bag_chest && (Logic.hookshot || (Logic.boomerang && Logic.can_enter_dodongos_child));
	Location_Logic.gs_dodongos_scarecrow = Logic.can_enter_dodongos_adult && Logic.hookshot;
	Location_Logic.gs_dodongos_before_king = Logic.can_reach_dodongos_bomb_bag_chest && Logic.bomb_bag;
	Location_Logic.gs_jabu_vines = Logic.can_enter_jabu;
	Location_Logic.gs_jabu_near_octo1 = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.gs_jabu_near_octo2 = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.gs_jabu_near_boss = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.gs_forest_first = (Logic.minuet || Logic.sarias) && Logic.hookshot;
	Location_Logic.gs_forest_lobby = (Logic.minuet || Logic.sarias) && Logic.hookshot;
	Location_Logic.gs_forest_outdoor_east = (Logic.minuet || Logic.sarias) && Logic.hookshot && ((Logic.bow || Logic.song_of_time) || (Logic.forest_keys >= 1 && Logic.hover_boots));
	Location_Logic.gs_forest_outdoor_west = (Logic.minuet || Logic.sarias) && Logic.hookshot && (((Logic.bow || Logic.song_of_time) && Logic.longshot) || (Logic.forest_keys >= 1 && Logic.hover_boots) || (Logic.forest_keys >= 2 && Logic.goron_bracelet && Logic.bow))
	Location_Logic.gs_forest_basement = (Logic.minuet || Logic.sarias) && Logic.forest_keys ==5;
	Location_Logic.gs_fire_song_of_time = Logic.can_enter_fire_temple && Logic.fire_keys >= 1 && Logic.song_of_time;
	Location_Logic.gs_fire_bomb_wall = Logic.can_climb_fire && Logic.goron_bracelet && Logic.bomb_bag;
	Location_Logic.gs_fire_scarecrow1 = Logic.can_climb_fire && Logic.goron_bracelet && Logic.fire_keys >=5 && Logic.hookshot;
	Location_Logic.gs_fire_scarecrow2 = Logic.can_climb_fire && Logic.goron_bracelet && Logic.fire_keys >=5 && Logic.hookshot;
	Location_Logic.gs_fire_basement = Logic.can_enter_fire_temple && Logic.hammer;
	Location_Logic.gs_water_south_basement = Logic.can_enter_water && Logic.bomb_bag && Logic.lullaby;
	Location_Logic.gs_water_river = Logic.can_enter_water && Logic.song_of_time && Logic.water_keys == 6;
	Location_Logic.gs_water_central = Logic.middle_water && Logic.longshot || Logic.can_use_farores;
	Location_Logic.gs_water_near_boss_key = Logic.can_enter_water && Logic.longshot && Logic.lullaby && Logic.water_keys >=5;
	Location_Logic.gs_water_platform_room = Logic.can_enter_water && Logic.longshot && Logic.lullaby && Logic.water_keys >=5;
	Location_Logic.gs_spirit_metal_fence = Logic.requiem && (Logic.boomerang || Logic.slingshot);
	Location_Logic.gs_spirit_before_child_knuckle = (Logic.bomb_bag && Logic.boomerang && Logic.hookshot && Logic.spirit_keys >= 1) || (Logic.boomerang && Logic.spirit_keys == 5 && Logic.bomb_bag && Logic.requiem) || (Logic.hookshot && Logic.silver_gauntlets && Logic.spirit_keys >= 3);
	Location_Logic.gs_spirit_boulder_room = Logic.can_enter_adult_spirit && Logic.song_of_time && (Logic.bow || Logic.hookshot || Logic.bomb_bag);
	Location_Logic.gs_spirit_temple_lobby = Logic.can_enter_adult_spirit && Logic.spirit_keys >= 3 && (Logic.hookshot || Logic.hover_boots);
	Location_Logic.gs_spirit_bomb_for_light_room = Logic.spirit_keys >= 1;
	Location_Logic.gs_shadow_like_like = Logic.can_bomb_shadow_wall && Logic.hookshot;
	Location_Logic.gs_shadow_crusher = Logic.can_bomb_shadow_wall && Logic.hookshot;
	Location_Logic.gs_shadow_giant_pot = Logic.can_bomb_shadow_wall && Logic.shadow_keys >=2 && Logic.hookshot;
	Location_Logic.gs_shadow_near_boat = Logic.longshot && Logic.shadow_keys >=4;
	Location_Logic.gs_shadow_three_pots = Logic.can_ride_shadow_boat;
	Location_Logic.gs_well_west_inner = Logic.boomerang /*&& Logic.can_see*/ && Logic.well_keys >=3;
	Location_Logic.gs_well_east_inner = Logic.boomerang /*&& Logic.can_see*/ && Logic.well_keys >=3;
	Location_Logic.gs_well_like_like = Logic.boomerang /*&& Logic.can_see*/ && Logic.well_keys >=3;
	Location_Logic.gs_ice_spinning_scythe = Logic.ice_access && Logic.hookshot;
	Location_Logic.gs_ice_hp_room = Logic.ice_access && Logic.hookshot;
	Location_Logic.gs_ice_block_room = Logic.ice_access && Logic.hookshot;
	
	
	
	
	gs[1] = Location_Logic.gs_kokiri_child;
	gs[2] = Location_Logic.gs_kokiri_bean;
	gs[3] = Location_Logic.gs_kokiri_adult;
	gs[4] = Location_Logic.gs_market;
	gs[5] = Location_Logic.gs_lost_woods_bean1;
	gs[6] = Location_Logic.gs_lost_woods_bean2;
	gs[7] = Location_Logic.gs_lost_woods_above_stage;
	gs[8] = Location_Logic.gs_sacred_forest;
	gs[9] = Location_Logic.gs_outside_kakariko;
	gs[10] = Location_Logic.gs_near_gerudo;
	gs[11] = Location_Logic.gs_hyrule_castle_tree;
	gs[12] = Location_Logic.gs_hyrule_castle_grotto;
	gs[13] = Location_Logic.gs_lon_lon_tree;
	gs[14] = Location_Logic.gs_lon_lon_shed;
	gs[15] = Location_Logic.gs_lon_lon_window;
	gs[16] = Location_Logic.gs_lon_lon_back_wall;
	gs[17] = Location_Logic.gs_kakariko_construction;
	gs[18] = Location_Logic.gs_kakariko_skulltula_house;
	gs[19] = Location_Logic.gs_kakariko_guard_house;
	gs[20] = Location_Logic.gs_kakariko_tree;
	gs[21] = Location_Logic.gs_kakariko_tower;
	gs[22] = Location_Logic.gs_kakariko_impas;
	gs[23] = Location_Logic.gs_graveyard_wall;
	gs[24] = Location_Logic.gs_graveyard_bean;
	gs[25] = Location_Logic.gs_trail_bean;
	gs[26] = Location_Logic.gs_trail_bombable_wall;
	gs[27] = Location_Logic.gs_trail_hail_path;
	gs[28] = Location_Logic.gs_trail_above_dodongos;
	gs[29] = Location_Logic.gs_goron_city_center;
	gs[30] = Location_Logic.gs_goron_city_maze;
	gs[31] = Location_Logic.gs_crater_crate;
	gs[32] = Location_Logic.gs_crater_bean;
	gs[33] = Location_Logic.gs_river_ladder;
	gs[34] = Location_Logic.gs_river_near_grotto;
	gs[35] = Location_Logic.gs_river_above_bridge;
	gs[36] = Location_Logic.gs_domain;
	gs[37] = Location_Logic.gs_fountain_above_log;
	gs[38] = Location_Logic.gs_fountain_tree;
	gs[39] = Location_Logic.gs_fountain_hidden_cave;
	gs[40] = Location_Logic.gs_hylia_bean;
	gs[41] = Location_Logic.gs_hylia_lab_wall;
	gs[42] = Location_Logic.gs_hylia_island;
	gs[43] = Location_Logic.gs_hylia_tree;
	gs[44] = Location_Logic.gs_lab_crate;
	gs[45] = Location_Logic.gs_valley_small_bridge;
	gs[46] = Location_Logic.gs_valley_bean;
	gs[47] = Location_Logic.gs_valley_tent;
	gs[48] = Location_Logic.gs_valley_pillar;
	gs[49] = Location_Logic.gs_fortress_archery;
	gs[50] = Location_Logic.gs_fortress_top;
	gs[51] = Location_Logic.gs_wasteland_structure;
	gs[52] = Location_Logic.gs_colossus_bean;
	gs[53] = Location_Logic.gs_colossus_tree;
	gs[54] = Location_Logic.gs_colossus_hill;
	gs[55] = Location_Logic.gs_zora_river_tree;
	gs[56] = Location_Logic.gs_ganons;
	gs[57] = Location_Logic.gs_deku_basement_back;
	gs[58] = Location_Logic.gs_deku_basement_gate;
	gs[59] = Location_Logic.gs_deku_basement_vines;
	gs[60] = Location_Logic.gs_deku_compass;
	gs[61] = Location_Logic.gs_dodongos_east_side;
	gs[62] = Location_Logic.gs_dodongos_stair_room;
	gs[63] = Location_Logic.gs_dodongos_above_stairs;
	gs[64] = Location_Logic.gs_dodongos_scarecrow;
	gs[65] = Location_Logic.gs_dodongos_before_king;
	gs[66] = Location_Logic.gs_jabu_vines;
	gs[67] = Location_Logic.gs_jabu_near_octo1;
	gs[68] = Location_Logic.gs_jabu_near_octo2;
	gs[69] = Location_Logic.gs_jabu_near_boss;
	gs[70] = Location_Logic.gs_forest_first;
	gs[71] = Location_Logic.gs_forest_lobby;
	gs[72] = Location_Logic.gs_forest_outdoor_east;
	gs[73] = Location_Logic.gs_forest_outdoor_west;
	gs[74] = Location_Logic.gs_forest_basement;
	gs[75] = Location_Logic.gs_fire_song_of_time;
	gs[76] = Location_Logic.gs_fire_bomb_wall;
	gs[77] = Location_Logic.gs_fire_scarecrow1;
	gs[78] = Location_Logic.gs_fire_scarecrow2;
	gs[79] = Location_Logic.gs_fire_basement;
	gs[80] = Location_Logic.gs_water_south_basement;
	gs[81] = Location_Logic.gs_water_river;
	gs[82] = Location_Logic.gs_water_central;
	gs[83] = Location_Logic.gs_water_near_boss_key;
	gs[84] = Location_Logic.gs_water_platform_room;
	gs[85] = Location_Logic.gs_spirit_metal_fence;
	gs[86] = Location_Logic.gs_spirit_before_child_knuckle;
	gs[87] = Location_Logic.gs_spirit_boulder_room;
	gs[88] = Location_Logic.gs_spirit_temple_lobby;
	gs[89] = Location_Logic.gs_spirit_bomb_for_light_room;
	gs[90] = Location_Logic.gs_shadow_like_like;
	gs[91] = Location_Logic.gs_shadow_crusher;
	gs[92] = Location_Logic.gs_shadow_giant_pot;
	gs[93] = Location_Logic.gs_shadow_near_boat;
	gs[94] = Location_Logic.gs_shadow_three_pots;
	gs[95] = Location_Logic.gs_well_west_inner;
	gs[96] = Location_Logic.gs_well_east_inner;
	gs[97] = Location_Logic.gs_well_like_like;
	gs[98] = Location_Logic.gs_ice_spinning_scythe;
	gs[99] = Location_Logic.gs_ice_hp_room;
	gs[100] = Location_Logic.gs_ice_block_room;
	
	Logic.gold_skulltulas = 0;
	var i;
	for (i = 1; i<100; i++) {
		if (gs[i] == true) {Logic.gold_skulltulas +=1;};
	}

	Game.logically_accessible = 0;
	Game.forest_logically_accessible=0;
	Game.fire_logically_accessible=0;
	Game.water_logically_accessible=0;
	Game.spirit_logically_accessible=0;
	Game.shadow_logically_accessible=0;
	Game.gtg_logically_accessible=0;
	Game.well_logically_accessible=0;
	Game.ganons_logically_accessible=0;

	temp = 0;
	for (const key of keys) {
		if (temp == 256) {break; }
		temp +=1;
		str = key + "";
		if(document.getElementById(key) == null) {continue;}
		if(Location_Logic[key] == true) {
			document.getElementById("text_"+ str).className= "logic_check_text"; 
			if(document.getElementById("img3_" + str) != null) {
				if (temp <= 244) {Game.logically_accessible += 1;}
				if (temp >= 117 && temp <= 130) {Game.forest_logically_accessible += 1;}
				if (temp >= 131 && temp <= 145) {Game.fire_logically_accessible += 1;}
				if (temp >= 146 && temp <= 156) {Game.water_logically_accessible += 1;}
				if (temp >= 157 && temp <= 174) {Game.spirit_logically_accessible += 1;}
				if (temp >= 175 && temp <= 192) {Game.shadow_logically_accessible += 1;}
				if (temp >= 193 && temp <= 208) {Game.ganons_logically_accessible += 1;}
				if (temp >= 209 && temp <= 230) {Game.gtg_logically_accessible += 1;}
				if (temp >= 231 && temp <= 244) {Game.well_logically_accessible += 1;}
			}
		}
		else {
			document.getElementById("text_" + str).className= "ool_check_text";
		}
	}
	
	if (Game.forest_checks_remaining >=0 && (Game.forest_checks_remaining < Game.forest_logically_accessible)) {Game.logically_accessible -= (Game.forest_logically_accessible - Game.forest_checks_remaining);}
	if (Game.fire_checks_remaining >=0 && (Game.fire_checks_remaining < Game.fire_logically_accessible)) {Game.logically_accessible -= (Game.fire_logically_accessible - Game.fire_checks_remaining);}
	if (Game.water_checks_remaining >=0 && (Game.water_checks_remaining < Game.water_logically_accessible)) {Game.logically_accessible -= (Game.water_logically_accessible - Game.water_checks_remaining);}
	if (Game.spirit_checks_remaining >=0 && (Game.spirit_checks_remaining < Game.spirit_logically_accessible)) {Game.logically_accessible -= (Game.spirit_logically_accessible - Game.spirit_checks_remaining);}
	if (Game.shadow_checks_remaining >=0 && (Game.shadow_checks_remaining < Game.shadow_logically_accessible)) {Game.logically_accessible -= (Game.shadow_logically_accessible - Game.shadow_checks_remaining);}
	if (Game.gtg_checks_remaining >=0 && (Game.gtg_checks_remaining < Game.gtg_logically_accessible)) {Game.logically_accessible -= (Game.gtg_logically_accessible - Game.gtg_checks_remaining);}
	if (Game.well_checks_remaining >=0 && (Game.well_checks_remaining < Game.well_logically_accessible)) {Game.logically_accessible -= (Game.well_logically_accessible - Game.well_checks_remaining);}
	if (Game.ganons_checks_remaining >=0 && (Game.ganons_checks_remaining < Game.ganons_logically_accessible)) {Game.logically_accessible -= (Game.ganons_logically_accessible - Game.ganons_checks_remaining);}
	
	
	if (Game.bomb_bag) {if(document.getElementById("dod_req1") != null) {document.getElementById("dod_req1").style.opacity =1; } if(document.getElementById("sha_req4") != null) {document.getElementById("sha_req4").style.opacity =1; } if(document.getElementById("spi_req3") != null) {document.getElementById("spi_req3").style.opacity =1; }}
	if (Game.magic) {document.getElementById("gan_req1").style.opacity=1; if(document.getElementById("sha_req2") != null) {document.getElementById("sha_req2").style.opacity =1; }}
	if (Game.light_arrows) {document.getElementById("gan_req2").style.opacity=1;}
	if (Game.bow) {document.getElementById("gan_req3").style.opacity=1; if(document.getElementById("for_req2") != null) {document.getElementById("for_req2").style.opacity =1; }}
	if (Game.hookshot) {if(document.getElementById("for_req1") != null) {document.getElementById("for_req1").style.opacity =1; } if(document.getElementById("sha_req5") != null) {document.getElementById("sha_req5").style.opacity =1; } if(document.getElementById("spi_req4") != null) {document.getElementById("spi_req4").style.opacity =1; }}
	if (Game.goron_bracelet) {if(document.getElementById("for_req3") != null) {document.getElementById("for_req3").style.opacity =1; }}
	if (Game.hammer) {if(document.getElementById("fir_req1") != null) {document.getElementById("fir_req1").style.opacity =1; }}
	if (Game.rutos_letter) {if(document.getElementById("jab_req1") != null) {document.getElementById("jab_req1").style.opacity =1; }}
	if (Game.boomerang) {if(document.getElementById("jab_req2") != null) {document.getElementById("jab_req2").style.opacity =1; }}
	if (Game.iron_boots) {if(document.getElementById("wat_req1") != null) {document.getElementById("wat_req1").style.opacity =1; }}
	if (Game.golden_scale) {if(document.getElementById("wat_req2") != null) {document.getElementById("wat_req2").style.opacity =1; }}
	if (Game.longshot) {if(document.getElementById("wat_req3") != null) {document.getElementById("wat_req3").style.opacity =1; }}
	if (Game.silver_gauntlets) {if(document.getElementById("spi_req1") != null) {document.getElementById("spi_req1").style.opacity =1; }}
	if (Game.mirror_shield) {if(document.getElementById("spi_req2") != null) {document.getElementById("spi_req2").style.opacity =1; }}
	if (Game.dins_fire) {if(document.getElementById("sha_req1") != null) {document.getElementById("sha_req1").style.opacity =1; }}
	if (Game.hover_boots) {if(document.getElementById("sha_req3") != null) {document.getElementById("sha_req3").style.opacity =1; }}
	
	if (Game.lullaby) {document.getElementById("lullabyimg").style.opacity =1;}
	if (Game.eponas) {document.getElementById("eponasimg").style.opacity =1;}
	if (Game.sarias) {document.getElementById("sariasimg").style.opacity =1;}
	if (Game.suns_song) {document.getElementById("sunsimg").style.opacity =1;}
	if (Game.song_of_time) {document.getElementById("sotimg").style.opacity =1;}
	if (Game.song_of_storms) {document.getElementById("sosimg").style.opacity =1;}
	if (Game.minuet) {document.getElementById("minuetimg").style.opacity =1;}
	if (Game.bolero) {document.getElementById("boleroimg").style.opacity =1;}
	if (Game.serenade) {document.getElementById("serenadeimg").style.opacity =1;}
	if (Game.requiem) {document.getElementById("requiemimg").style.opacity =1;}
	if (Game.nocturne) {document.getElementById("nocturneimg").style.opacity =1;}
	if (Game.prelude) {document.getElementById("preludeimg").style.opacity =1;}
	
	if (Game.bottle1 || Logic.bottle) {document.getElementById("bottleimg").style.opacity =1;}
	if (Game.farores_wind) {document.getElementById("faroresimg").style.opacity =1;}
	if (Game.fire_arrows) {document.getElementById("firearrowsimg").style.opacity =1;}
	if (Game.silver_scale) {document.getElementById("silverscaleimg").style.opacity =1;}
	
	/**if (Game.minuet) {document.getElementById("min_note").style.opacity = 1;}
	if (Game.bolero) {document.getElementById("bol_note").style.opacity = 1;}
	if (Game.serenade) {document.getElementById("ser_note").style.opacity = 1;}
	if (Game.requiem) {document.getElementById("req_note").style.opacity = 1;}
	if (Game.nocturne) {document.getElementById("noc_note").style.opacity = 1;}
	if (Game.prelude) {document.getElementById("pre_note").style.opacity = 1;}*/
	
	if (document.getElementById("deku_queen_gohma") == null) {if (document.getElementById("text_deku") != null) {document.getElementById("text_deku").style.opacity=.2}}
	if (document.getElementById("dodongos_king_dodongo") == null) {if (document.getElementById("text_dod") != null) {document.getElementById("text_dod").style.opacity=.2}}
	if (document.getElementById("jabu_barinade") == null) {if (document.getElementById("text_jabu") != null) {document.getElementById("text_jabu").style.opacity=.2}}
	if (document.getElementById("forest14") == null) {if (document.getElementById("text_forest") != null) {document.getElementById("text_forest").style.opacity=.2}}
	if (document.getElementById("fire6") == null) {if (document.getElementById("text_fire") != null) {document.getElementById("text_fire").style.opacity=.2}}
	if (document.getElementById("water11") == null) {if (document.getElementById("text_water") != null) {document.getElementById("text_water").style.opacity=.2}}
	if (document.getElementById("spirit20") == null) {if (document.getElementById("text_spirit") != null) {document.getElementById("text_spirit").style.opacity=.2}}
	if (document.getElementById("shadow18") == null) {if (document.getElementById("text_shadow") != null) {document.getElementById("text_shadow").style.opacity=.2}}
	if (document.getElementById("text_pocket") != null) {document.getElementById("text_pocket").style.opacity=.2}
		/*
	if(!Game.song_of_storms) {Game.logically_accessible -=11;}
	else{
		if (Game.bomb_bag && Game.lullaby && Game.can_see && Game.kokiri_sword) {}
		else{
			Game.logically_accessible -= 2;
		if (!Game.bomb_bag && !Game.goron_bracelet) {Game.logically_accessible -=3*.75}
		else if (!Game.bomb_bag) {Game.logically_accessible -=2*.75}
		if (!Game.lullaby) {Game.logically_accessible -=5*.75}
		else if (!Game.can_see && !Game.kokiri_sword) {Game.logically_accessible -=2*.75}
		else if (Game.can_see && Game.kokiri_sword) {}
		else {Game.logically_accessible -=1*.75}
		if (!Game.can_see) {Game.logically_accessible -=4*.75}
		}
	}
	
		Game.logically_accessible +=1;
		Game.logically_accessible -=11;
		if (Game.can_enter_shadow) {Game.logically_accessible += 2*.58}
		var mult1 = 1;
		var mult2 = 1;
		var mult3 = 1;
		var mult4 = 1;
		if(!Game.goron_bracelet) {mult1 = .7; mult2 = .63; mult3 = .57; mult4 = .5;}
		if (Game.can_cross_shadow_gap) {Game.logically_accessible += 2*.58}
		if (Game.can_bomb_shadow_wall) {Game.logically_accessible += 3*.64+2*.64*mult1; if (Game.goron_bracelet){Game.logically_accessible += 2*.64}}
		if (Game.can_pass_shadow_hookshot_door){Game.logically_accessible += 3*.67*mult2}
		if (Game.can_ride_shadow_boat){Game.logically_accessible += 3*.72*mult3}
		if (Game.can_beat_shadow_boss) {Game.logically_accessible += 1*mult4}
	*/
	
	Game.logically_accessible=Game.logically_accessible.toFixed(0);
	d = new Date();
	timeFuture = d.getTime();
	timeCurrent = timeFuture-timeStart;
	timeCurrent = timeCurrent *3.5/60;
	timeFinal = timeCurrent + timeLost;
	//skipValue = document.getElementById("go_input").value/(Game.checks_remaining-13) * 1508.33334 * 35/Game.logically_accessible;
	if (timeFinal > 0) {document.getElementById("time_difference").style.color="red"; }
	tMinutes = Math.floor(timeFinal / 60000);
	tSeconds = Math.floor(timeFinal % 60000 / 1000);
	//sMinutes = Math.floor(skipValue / 60);
	//sSeconds = Math.floor(skipValue % 60);
	rValue = Math.floor(timeFinal/1000 *1.3 + 60)
	rMinutes = Math.floor(rValue / 60);
	rSeconds = Math.floor(rValue % 60);
	//goodCheckPercent = Math.floor(document.getElementById("go_input").value/(Game.checks_remaining-13)*100);
	document.getElementById("checks_remaining").innerHTML="Remaining: "+Game.checks_remaining;
	document.getElementById("logically_accessible").innerHTML="&nbsp; &nbsp; In Logic: "+Game.logically_accessible;
	//document.getElementById("good_check_percent").innerHTML="&nbsp; &nbsp;&nbsp;" + goodCheckPercent + "%";
	//document.getElementById("time_difference").innerHTML="" + tMinutes + "m" + tSeconds + "s";
	//document.getElementById("skip_req").innerHTML="" + rMinutes + "m" + rSeconds + "s";
	//document.getElementById("skip_value").innerHTML="" + sMinutes + "m" + sSeconds + "s";
    
}
        
        
        

var Check={};
var Game={};
var Person={};
var Map={};
var UI={};
var Location_Logic={};
var Logic={};
var Location ={};
var gs = [];

Game.logically_accessible = 0;
var d = new Date();
var goodCheckPercent = 0;
var timeStart = d.getTime();
var timeCurrent;	
var timeFuture;
var timeFinal;
var timeLost =0;
var tMinutes = 0;
var tSeconds = 0;
//document.getElementById("go_input").value = 9;
	
	Person.isBoring = false;
	
	document.getElementById("text_gen_med1").style.color = "yellow";
	document.getElementById("text_gen_med2").style.color = "yellow";
	document.getElementById("text_gen_med3").style.color = "yellow";
	
	Game.kokiri_sword = false;
	Game.farores_wind = false;
	Game.slingshot= false;
	Game.boomerang = false;
	Game.rutos_letter = false;
	Game.bottle1 = false;
	Game.bottle2 = false;
	Game.bottle3 = false;
	Game.big_poe = false;
	Game.silver_scale = false;
	Game.golden_scale = false;
	Game.bomb_bag = false;
	Game.bomb_bag2 = false;
	Game.bomb_bag3 = false;
	Game.hammer = false;
	Game.bow = false;
	Game.hookshot = false;
	Game.longshot = false;
	Game.iron_boots = false;
	Game.hover_boots = false;
	Game.magic = false;
	Game.dins_fire = false;
	Game.fire_arrows = false;
	Game.goron_bracelet = false;
	Game.silver_gauntlets = false;
	Game.gold_gauntlets = false;
	Game.mirror_shield = false;
	Game.wallet1 = false;
	Game.wallet2 = false;
	Game.goron_tunic = false;
	Game.zora_tunic = false;
	Game.lens_of_truth = false;
	Game.stone_of_agony = false;
	Game.prescription = false;
	Game.claim_check = false;
	Game.lullaby = false;
	Game.eponas = false;
	Game.sarias = false;
	Game.suns_song = false;
	Game.song_of_time = false;
	Game.song_of_storms = false;
	Game.minuet = false;
	Game.bolero = false;
	Game.serenade = false;
	Game.requiem = false;
	Game.nocturne = false;
	Game.prelude = false;
	
	Game.min_forest_keys=0;
	Game.current_forest_keys=0;
	Game.forest_keys = 0;
	Game.min_fire_keys=0;
	Game.current_fire_keys=0;
	Game.fire_keys = 0;
	Game.min_water_keys=0;
	Game.current_water_keys=0;
	Game.water_keys = 0;
	Game.min_spirit_keys=0;
	Game.current_spirit_keys=0;
	Game.spirit_keys = 0;
	Game.min_shadow_keys=0;
	Game.current_shadow_keys=0;
	Game.shadow_keys = 0;
	Game.min_ganons_keys=0;
	Game.current_ganons_keys=0;
	Game.ganons_keys = 0;
	Game.min_gtg_keys=0;
	Game.current_gtg_keys=0;
	Game.gtg_keys = 0;
	Game.min_well_keys=0;
	Game.current_well_keys=0;
	Game.well_keys = 0;		
	Game.forest_checks_remaining = 8;
	Game.fire_checks_remaining = 6;
	Game.water_checks_remaining = 4;
	Game.shadow_checks_remaining = 12;
	Game.spirit_checks_remaining = 14;
	Game.gtg_checks_remaining = 13;
	Game.well_checks_remaining = 11;
	Game.ganons_checks_remaining = 13;
	
	Game.checks_remaining=194;
	Game.logically_accessible=35;
	Game.forest_logically_accessible=0;
	Game.fire_logically_accessible=0;
	Game.water_logically_accessible=0;
	Game.spirit_logically_accessible=0;
	Game.shadow_logically_accessible=0;
	Game.gtg_logically_accessible=0;
	Game.well_logically_accessible=0;
	Game.ganons_logically_accessible=0;
	
	Game.bomb_bag_img= "https://i.imgur.com/TszSBld.png";
	Game.letter_img= "https://i.imgur.com/WAY6Qpc.png";
	Game.boomerang_img= "https://i.imgur.com/jH5MR3n.png";
	Game.hookshot_img= "https://i.imgur.com/HHCTVla.png";
	Game.bow_img= "https://i.imgur.com/muCeqKm.png";
	Game.goron_bracelet_img= "https://i.imgur.com/y0ob3bv.png";
	Game.hammer_img= "https://i.imgur.com/w3sKOvf.png";
	Game.iron_boots_img= "https://i.imgur.com/qqczH2p.png";
	Game.golden_scale_img= "https://i.imgur.com/HVbSHKl.png";
	Game.longshot_img= "https://i.imgur.com/Ps6X4TE.png";
	Game.silver_gauntlets_img= "https://i.imgur.com/WFBtJD9.png";
	Game.mirror_shield_img= "https://i.imgur.com/5hVMn18.png";
	Game.dins_fire_img= "https://i.imgur.com/zcRc5ZI.png";
	Game.magic_meter_img= "https://i.imgur.com/uAyOlX8.png";
	Game.hover_boots_img= "https://i.imgur.com/DSzo0JN.png";
	Game.theme = "dark";
	Game.themeChange = true;
	
	Logic.kokiri_sword = false;
	Logic.farores_wind = false;
	Logic.slingshot= false;
	Logic.boomerang = false;
	Logic.rutos_letter = false;
	Logic.silver_scale = false;
	Logic.golden_scale = false;
	Logic.bomb_bag = false;
	Logic.hammer = false;
	Logic.bow = false;
	Logic.hookshot = false;
	Logic.longshot = false;
	Logic.iron_boots = false;
	Logic.hover_boots = false;
	Logic.magic = false;
	Logic.dins_fire = false;
	Logic.fire_arrows = false;
	Logic.goron_bracelet = false;
	Logic.silver_gauntlets = false;
	Logic.golden_gauntlets = false;
	Logic.mirror_shield = false;
	Logic.adults_wallet = false;
	Logic.giants_wallet = false;
	Logic.goron_tunic = false;
	Logic.zora_tunic = false;
	Logic.lens_of_truth = false;
	Logic.stone_of_agony = false;
	Logic.prescription = false;
	Logic.claim_check = false;
	Logic.light_arrows = false;
	Logic.lullaby = false;
	Logic.eponas = false;
	Logic.sarias = false;
	Logic.suns_song = false;
	Logic.song_of_time = false;
	Logic.song_of_storms = false;
	Logic.minuet = false;
	Logic.bolero = false;
	Logic.serenade = false;
	Logic.requiem = false;
	Logic.nocturne = false;
	Logic.prelude = false;
	Logic.forest_medallion = false;
	Logic.fire_medallion = false;
	Logic.water_medallion = false;
	Logic.spirit_medallion = false;
	Logic.shadow_medallion = false;
	Logic.light_medallion = false;
	Logic.emerald = false;
	Logic.ruby = false;
	Logic.sapphire = false;
	Logic.kokiri_emerald = false;
	Logic.goron_ruby = false;
	Logic.zora_sapphire = false;
	
	Logic.bottle = false;
	Logic.big_poe = false;
	Logic.scale1 = false;
	Logic.scale2 = false;
	Logic.bomb_bag1 = false;
	Logic.bomb_bag2 = false;
	Logic.bomb_bag3 = false;
	Logic.bow1 = false;
	Logic.bow2 = false;
	Logic.bow3 = false;
	Logic.hookshot1 = false;
	Logic.hookshot2 = false;
	Logic.strength1 = false;
	Logic.strength2 = false;
	Logic.strength3 = false;
	Logic.magic1 = false;
	Logic.magic2 = false;
	Logic.slingshot1 = false;
	Logic.slingshot2 = false;
	Logic.slingshot3 = false;
	Logic.wallet1 = false;
	Logic.wallet2 = false;
	
	Logic.min_forest_keys=0;
	Logic.current_forest_keys=0;
	Logic.forest_keys = 0;
	Logic.min_fire_keys=0;
	Logic.current_fire_keys=0;
	Logic.fire_keys = 0;
	Logic.min_water_keys=0;
	Logic.current_water_keys=0;
	Logic.water_keys = 0;
	Logic.min_spirit_keys=0;
	Logic.current_spirit_keys=0;
	Logic.spirit_keys = 0;
	Logic.min_shadow_keys=0;
	Logic.current_shadow_keys=0;
	Logic.shadow_keys = 0;
	Logic.min_ganons_keys=0;
	Logic.current_ganons_keys=0;
	Logic.ganons_keys = 0;
	Logic.min_gtg_keys=0;
	Logic.current_gtg_keys=0;
	Logic.gtg_keys = 0;
	Logic.min_well_keys=0;
	Logic.current_well_keys=0;
	Logic.well_keys = 0;
	
	Logic.forest_boss_key = false;
	Logic.fire_boss_key = false;
	Logic.water_boss_key = false;
	Logic.spirit_boss_key = false;
	Logic.shadow_boss_key = false;
	Logic.ganons_boss_key = false;

function bossKey(x) {
var str = x.id;
var str2 = str.substring('img2_'.length);
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;

var parent = document.getElementById("dung1");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
} 
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
if(str2.startsWith("forest")) {Game.forest_boss_key = true; Location.forest_boss_key = str2}
if(str2.startsWith("fire")) {Game.fire_boss_key = true; Location.fire_boss_key = str2}
if(str2.startsWith("water")) {Game.water_boss_key = true; Location.water_boss_key = str2}
Check[str2]="boss_key";
	Update();Update();Update();
}
function bossKey2(x) {
var str = x.id;
var str2 = str.substring('img2_'.length);
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;

var parent = document.getElementById("dung2");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
} 
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
if(str2.startsWith("spirit")) {Game.spirit_boss_key = true; Location.spirit_boss_key = str2}
if(str2.startsWith("shadow")) {Game.shadow_boss_key = true; Location.shadow_boss_key = str2}
if(str2.startsWith("ganons")) {Game.ganons_boss_key = true; Location.shadow_boss_key = str2}
Check[str2]="boss_key";
	Update();Update();Update();
}
function bossKey3(x) {
var str = x.id;
var str2 = str.substring('img2_'.length);
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;

var parent = document.getElementById("dung3");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
} 
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
Check[str2]="boss_key";
	Update();Update();Update();
}

function smallKey(x) {
var str = x.id;
var str2 = str.substring('img1_'.length);
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;

var parent = document.getElementById("dung1");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
} 
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
if(str2.startsWith("forest")) {Game.current_forest_keys +=1;}
if(str2.startsWith("fire")) {Game.current_fire_keys +=1;}
if(str2.startsWith("water")) {Game.current_water_keys +=1;}
Check[str2]="small_key";
	Update();Update();Update();
}
function smallKey2(x) {
var str = x.id;
var str2 = str.substring('img1_'.length);
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;

var parent = document.getElementById("dung2");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
} 
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
if(str2.startsWith("spirit")) {Game.current_spirit_keys +=1;}
if(str2.startsWith("shadow")) {Game.current_shadow_keys +=1;}
if(str2.startsWith("ganons")) {Game.current_ganons_keys +=1;}
Check[str2]="small_key";
	Update();Update();Update();
}
function smallKey3(x) {
var str = x.id;
var str2 = str.substring('img1_'.length);
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;

var parent = document.getElementById("dung3");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
}
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
} 
if(str2.startsWith("gtg")) {Game.current_gtg_keys +=1;}
if(str2.startsWith("well")) {Game.current_well_keys +=1;}
Check[str2]="small_key";
	Update();Update();Update();
}

function junk1(x) {
var str = x.id;
var str2 = str.substring('img3_'.length);
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;

var parent = document.getElementById("normalColumn1");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
} 
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
Check[str2]="junk";
Game.checks_remaining -=1;
	Update();Update();Update();
}
function junk2(x) {
var str = x.id;
var str2 = str.substring('img3_'.length);
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;

var parent = document.getElementById("normalColumn2");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
} 
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
Check[str2]="junk";
Game.checks_remaining -=1;
	Update();Update();Update();
}
function junk3(x) {
var str = x.id;
var str2 = str.substring('img3_'.length);
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;

var parent = document.getElementById("normalColumn3");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
} 
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
Check[str2]="junk";
Game.checks_remaining -=1;
	Update();Update();Update();
}
function junk4(x) {
var str = x.id;
var str2 = str.substring('img3_'.length);
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;

var parent = document.getElementById("normalColumn4");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
} 
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
Check[str2]="junk";
Game.checks_remaining -=1;
	Update();Update();Update();
}
function junk5(x) {
var str = x.id;
var str2 = str.substring('img3_'.length);
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;

var parent = document.getElementById("dung1");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
}
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
Check[str2]="junk";
if(str2.startsWith('forest')) {Game.forest_checks_remaining -= 1;}
if(str2.startsWith('fire')) {Game.fire_checks_remaining -= 1;}
if(str2.startsWith('water')) {Game.water_checks_remaining -= 1;}
Game.checks_remaining -=1;
	Update();Update();Update();
}
function junk6(x) {
var str = x.id;
var str2 = str.substring('img3_'.length);
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;

var parent = document.getElementById("dung2");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
}
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
} 
if(str2.startsWith('shadow')) {Game.shadow_checks_remaining -= 1;}
if(str2.startsWith('spirit')) {Game.spirit_checks_remaining -= 1;}
if(str2.startsWith('ganons')) {Game.ganons_checks_remaining -= 1;}
Game.checks_remaining -=1;
	Update();Update();Update();
}
function junk7(x) {
var str = x.id;
var str2 = str.substring('img3_'.length);
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;

var parent = document.getElementById("dung3");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete4) !== null) {
	var child = document.getElementById(delete4);
	parent.removeChild(child);
}
if (document.getElementById(delete5) !== null) {
	var child = document.getElementById(delete5);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
}
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
} 
if(str2.startsWith('gtg')) {Game.gtg_checks_remaining -= 1;}
if(str2.startsWith('well')) {Game.well_checks_remaining -= 1;}
Game.checks_remaining -=1;
	Update();Update();Update();
}

function junkB1(x) {
var str2 = x.id;
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;
document.getElementById(delete4).innerHTML += ": " +x.value;
var parent = document.getElementById("normalColumn1");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
} 
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}

Game.checks_remaining -=1;
	Update();Update();Update();
}
function junkB2(x) {
var str2 = x.id;
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;
document.getElementById(delete4).innerHTML += ": " +x.value;
var parent = document.getElementById("normalColumn2");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
} 
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
Game.checks_remaining -=1;
	Update();Update();Update();
}
function junkB3(x) {
var str2 = x.id;
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;
document.getElementById(delete4).innerHTML += ": " +x.value;
var parent = document.getElementById("normalColumn3");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
}
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
} 
Game.checks_remaining -=1;
	Update();Update();Update();
}
function junkB4(x) {
var str2 = x.id;
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;
document.getElementById(delete4).innerHTML += ": " +x.value;
var parent = document.getElementById("normalColumn4");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
}
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
} 
Game.checks_remaining -=1;
	Update();Update();Update();
}
function junkB5(x) {
var str2 = x.id;
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;
document.getElementById(delete4).innerHTML += ": " +x.value;
var parent = document.getElementById("dung1");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
} 
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
	if(str2.startsWith('forest')) {Game.forest_checks_remaining -= 1;}
	if(str2.startsWith('fire')) {Game.fire_checks_remaining -= 1;}
	if(str2.startsWith('water')) {Game.water_checks_remaining -= 1;}
	Game.checks_remaining -=1;
	Update();Update();Update();
}
function junkB6(x) {
var str2 = x.id;
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;
document.getElementById(delete4).innerHTML += ": " +x.value;
var parent = document.getElementById("dung2");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}

if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
} 
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
	if(str2.startsWith('shadow')) {Game.shadow_checks_remaining -= 1;}
	if(str2.startsWith('spirit')) {Game.spirit_checks_remaining -= 1;}
	if(str2.startsWith('ganons')) {Game.ganons_checks_remaining -= 1;}
	Game.checks_remaining -=1;
	Update();Update();Update();
}
function junkB7(x) {
var str2 = x.id;
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var delete4 = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;
document.getElementById(delete4).innerHTML += ": " +x.value;
var parent = document.getElementById("dung3");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}

if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
} 
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
	if(str2.startsWith('gtg')) {Game.gtg_checks_remaining -= 1;}
	if(str2.startsWith('well')) {Game.well_checks_remaining -= 1;}
	Game.checks_remaining -=1;
	Update();Update();Update();
}
function junkBS(x) {
var str2 = x.id;
var delete1 = "img1_" + str2;
var delete2 = "img2_" + str2;
var delete3 = str2;
var change = "text_" + str2;
var delete5 = "br_" + str2;
var delete6 = "span_" + str2;
var delete7 = "img3_" + str2;
var delete8 = "span2_" + str2;

var parent = document.getElementById("songColumn");
if (document.getElementById(delete1) !== null) {
	var child = document.getElementById(delete1);
	parent.removeChild(child);
}
if (document.getElementById(delete2) !== null) {
	var child = document.getElementById(delete2);
	parent.removeChild(child);
}
if (document.getElementById(delete3) !== null) {
	var child = document.getElementById(delete3);
	parent.removeChild(child);
}
if (document.getElementById(delete6) !== null) {
	var child = document.getElementById(delete6);
	parent.removeChild(child);
} 
if (document.getElementById(delete7) !== null) {
	var child = document.getElementById(delete7);
	parent.removeChild(child);
} 
if (document.getElementById(delete8) !== null) {
	var child = document.getElementById(delete8);
	parent.removeChild(child);
}
	Update();Update();Update();
}
function highlight(x) {
	if (x.style.opacity == 1){x.style.opacity =.2;}
	else {x.style.opacity =1;}
	
	if (x.id == "for_med" && x.style.opacity==1) {Logic.forest_medallion = true;}
	if (x.id == "fir_med" && x.style.opacity==1) {Logic.fire_medallion = true;}
	if (x.id == "wat_med" && x.style.opacity==1) {Logic.water_medallion = true;}
	if (x.id == "spi_med" && x.style.opacity==1) {Logic.spirit_medallion = true;}
	if (x.id == "sha_med" && x.style.opacity==1) {Logic.shadow_medallion = true;}
	if (x.id == "lit_med" && x.style.opacity==1) {Logic.light_medallion = true;}
	
	if (x.id == "kok_eme" && x.style.opacity==1) {Logic.kokiri_emerald = true;}
	if (x.id == "gor_rub" && x.style.opacity==1) {Logic.goron_ruby = true;}
	if (x.id == "zor_sap" && x.style.opacity==1) {Logic.zora_sapphire = true;}
}
function get_medallions1(x) {
	setTimeout(function(){
		get_medallions2(x)
		}, 10000);
	Update();Update();Update();
}
function get_stones1(x) {
	setTimeout(function(){
		get_stones2(x)
		}, 10000);
	Update();Update();Update();
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
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function changeTheme() {
	if (Game.theme == "dark") {Game.theme = "light"}
	else {Game.theme = "dark"}
	Game.themeChange = true;
	Update();
	}
	
function iAmBoring() {
	Person.isBoring = true;
	Game.themeChange = true;
	Update();
	}
	
function identifyMedal(x) {
	console.log(x.style.color);
	if (x.style.color == "yellow") {
		x.style.color = "rgb(238, 130, 238)";
	}
	else if (x.style.color == "rgb(238, 130, 238)") {
		x.style.color = "rgb(255, 165, 0)";
	}
	else if (x.style.color == "rgb(255, 165, 0)") {
		x.style.color = "yellow";
	}
}

setInterval(Update,500);
Update();Update();Update();