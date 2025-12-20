function dark_soli() {
	Player.bomb_img= "./images/explosive505050.png";
	Player.rutos_letter_img= "./images/letter505050.png";
	Player.boomerang_img= "./images/boomerang505050.png";
	Player.hookshot_img= "./images/hookshot505050.png";
	Player.bow_img= "./images/bow505050.png";
	Player.goron_bracelet_img= "./images/strength1505050.png";
	Player.lens_img = "./images/lens505050.png";
	Player.golden_gauntlets_img = "./images/strength3505050.png";
	Player.hammer_img= "./images/ham505050.png";
	Player.iron_boots_img= "./images/ironboots505050.png";
	Player.kokiri_sword_img= "./normal/items/kokiri_sword.png";
	Player.silver_scale_img=  "./images/silverscale505050.png"
	Player.golden_scale_img= "./images/goldenscale505050.png";
	Player.longshot_img= "./images/longshot505050.png";
	Player.silver_gauntlets_img= "./images/strength2505050.png";
	Player.mirror_shield_img= "./images/mirrorshield505050.png";
	Player.dins_fire_img= "./images/dinsfirenew505050.png";
	Player.magic_img= "./images/magic505050.png";
	Player.hover_boots_img= "./images/hovers505050.png";
	Player.light_arrows_img= "./images/lightarrow505050.png";
	Player.ice_arrows_img = "./normal/items/ice_arrows.png";
	Player.forest_key_img = "./normal/items/forest-temple-key.png";
	Player.fire_key_img = "./normal/items/fire-temple-key.png";
	Player.water_key_img = "./normal/items/water-temple-key.png";
	Player.spirit_key_img = "./normal/items/spirit-temple-key.png";
	Player.shadow_key_img = "./normal/items/shadow-temple-key.png";
	Player.gtg_key_img = "./normal/items/gtg-key.png";
	Player.well_key_img = "./normal/items/botw-key.png";
	Player.ganon_key_img = "./normal/items/ganon-key.png";
	Player.fire_arrows_img= "./images/firearrows505050.png";
	Player.farores_wind_img = "./images/farores505050.png";
	Player.bottle_img = "./images/bottle505050.png";
	Player.slingshot_img = "./images/slingshot505050.png";
	Player.lullaby_img = "./images/lullaby505050.png";
	Player.eponas_img = "./images/eponas505050.png";
	Player.sarias_img = "./images/sarias505050.png";
	Player.suns_img = "./images/suns505050.png";
	Player.time_img = "./images/sot505050.png";
	Player.storms_img = "./images/sos505050.png";
	Player.minuet_img = "./images/minuet505050.png";
	Player.bolero_img = "./images/bolero505050.png";
	Player.serenade_img = "./images/serenade505050.png";
	Player.requiem_img = "./images/requiem505050.png";
	Player.nocturne_img = "./images/nocturne505050.png";
	Player.prelude_img = "./images/prelude505050.png";
	Player.chu_img = "./images/chux.png";
	
	if(document.getElementById(dekuPlacement +"_req1") != null) {document.getElementById(dekuPlacement +"_req1").src = Player.kokiri_sword_img; }
	if(document.getElementById(dodongosPlacement +"_req1") != null) {document.getElementById(dodongosPlacement +"_req1").src = Player.bomb_img; }
	if(document.getElementById(jabuPlacement +"_req1") != null) {document.getElementById(jabuPlacement +"_req1").src = Player.rutos_letter_img; }
	if(document.getElementById(jabuPlacement +"_req2") != null) {document.getElementById(jabuPlacement +"_req2").src = Player.boomerang_img; }
	if(document.getElementById(forestPlacement +"_req1") != null) {document.getElementById(forestPlacement +"_req1").src = Player.hookshot_img; }
	if(document.getElementById(forestPlacement +"_req2") != null) {document.getElementById(forestPlacement +"_req2").src = Player.bow_img; }
	if(document.getElementById(forestPlacement +"_req3") != null) {document.getElementById(forestPlacement +"_req3").src = Player.goron_bracelet_img; }
	if(document.getElementById(firePlacement +"_req1") != null) {document.getElementById(firePlacement +"_req1").src = Player.hammer_img; }
	if(document.getElementById(waterPlacement +"_req1") != null) {document.getElementById(waterPlacement +"_req1").src = Player.iron_boots_img; }
	if(document.getElementById(waterPlacement +"_req2") != null) {document.getElementById(waterPlacement +"_req2").src = Player.golden_scale_img; }
	if(document.getElementById(waterPlacement +"_req3") != null) {document.getElementById(waterPlacement +"_req3").src = Player.longshot_img; }
	if(document.getElementById(spiritPlacement +"_req1") != null) {document.getElementById(spiritPlacement +"_req1").src = Player.silver_gauntlets_img; }
	if(document.getElementById(spiritPlacement +"_req2") != null) {document.getElementById(spiritPlacement +"_req2").src = Player.mirror_shield_img; }
	if(document.getElementById(spiritPlacement +"_req3") != null) {document.getElementById(spiritPlacement +"_req3").src = Player.bomb_img; }
	if(document.getElementById(spiritPlacement +"_req4") != null) {document.getElementById(spiritPlacement +"_req4").src = Player.hookshot_img; }
	if(document.getElementById(shadowPlacement +"_req1") != null) {document.getElementById(shadowPlacement +"_req1").src = Player.dins_fire_img; }
	if(document.getElementById(shadowPlacement +"_req2") != null) {document.getElementById(shadowPlacement +"_req2").src = Player.magic_img; }
	if(document.getElementById(shadowPlacement +"_req3") != null) {document.getElementById(shadowPlacement +"_req3").src = Player.hover_boots_img; }
	if(document.getElementById(shadowPlacement +"_req4") != null) {document.getElementById(shadowPlacement +"_req4").src = Player.bomb_img; }
	if(document.getElementById(shadowPlacement +"_req5") != null) {document.getElementById(shadowPlacement +"_req5").src = Player.hookshot_img; }
	var temp = 0;
	for (const key of Object.keys(Location_Logic)) {
		if (temp == 256) {break; }	
		if (document.getElementById(key) != null){document.getElementById(key).style.height="21px";}
		if (document.getElementById(key) != null){document.getElementById(key).style.width="29px";}
		document.getElementById("normalColumn1").style.width="110px";
		document.getElementById("normalColumn2").style.width="110px";
		document.getElementById("normalColumn3").style.width="110px";
		document.getElementById("scrollable_section").style.left="956px";
		document.getElementById("timer").style.left="900px";
		document.getElementById("skulls_in_logic").style.left="867px";
		document.getElementById("dung4_icon").style.left="928px";
		document.getElementById("dung5_icon").style.left="928px";
		document.getElementById("dung6_icon").style.left="928px";
		document.getElementById("dung7_icon").style.left="928px";
		document.getElementById("dung8_icon").style.left="928px";
		document.getElementById("dung9_icon").style.left="928px";
		if (temp >= 0 && temp <=5) {document.getElementById(key).style.backgroundImage = "url('./images/c3nWMsM.png')";}
		if (temp >= 6 && temp <=7) {document.getElementById(key).style.backgroundImage = "url('./images/lxT1gSk.png')";}
		if (temp >= 8 && temp <=12) {document.getElementById(key).style.backgroundImage = "url('./images/sjT5Hai.png')";}
		if (temp >= 13 && temp <=15) {document.getElementById(key).style.backgroundImage = "url('./images/sEKZt65.png')";}
		if (temp >= 16 && temp <=21) {document.getElementById(key).style.backgroundImage = "url('./images/BofwN1y.png')";}
		if (temp >= 22 && temp <=27) {document.getElementById(key).style.backgroundImage = "url('./images/hrb0r0b.png')";}
		if (temp >= 28 && temp <=28) {document.getElementById(key).style.backgroundImage = "url('./images/sYlOOIK.png')";}
		if (temp >= 29 && temp <=29) {document.getElementById(key).style.backgroundImage = "url('./images/s7mKEc9.png')";}
		if (temp >= 30 && temp <=30) {document.getElementById(key).style.backgroundImage = "url('./images/fEshagY.jpg')";}
		if (temp >= 31 && temp <=33) {document.getElementById(key).style.backgroundImage = "url('./images/5lUtq7c.png')";}
		if (temp >= 34 && temp <=37) {document.getElementById(key).style.backgroundImage = "url('./images/zjCXaML.png')";}
		if (temp >= 38 && temp <=44) {document.getElementById(key).style.backgroundImage = "url('./images/9BaI5JJ.png')";}
		if (temp >= 45 && temp <=51) {document.getElementById(key).style.backgroundImage = "url('./images/mv5QLem.png')";}
		if (temp >= 52 && temp <=52) {document.getElementById(key).style.backgroundImage = "url('./images/S4OentL.png')";}
		if (temp >= 53 && temp <=59) {document.getElementById(key).style.backgroundImage = "url('./images/i37Ey8I.png')";}
		if (temp >= 60 && temp <=66) {document.getElementById(key).style.backgroundImage = "url('./images/9btLMfb.png')";}
		if (temp >= 67 && temp <=71) {document.getElementById(key).style.backgroundImage = "url('./images/sEKZt65.png')";}
		if (temp >= 72 && temp <=75) {document.getElementById(key).style.backgroundImage = "url('./images/Wf1f3BM.png')";}
		if (temp >= 76 && temp <=88) {document.getElementById(key).style.backgroundImage = "url('./images/M5hCjWo.png')";}
		if (temp >= 89 && temp <=95) {document.getElementById(key).style.backgroundImage = "url('./images/bOYOCRS.png')";}
		if (temp >= 96 && temp <=100) {document.getElementById(key).style.backgroundImage = "url('./images/hm7rWKb.png')";}
		if (temp >= 101 && temp <=103) {document.getElementById(key).style.backgroundImage = "url('./images/9BwSTvK.png')";}
		if (temp >= 104 && temp <=105) {document.getElementById(key).style.backgroundImage = "url('./images/kf4Nhow.png')";}
		if (temp >= 106 && temp <=106) {document.getElementById(key).style.backgroundImage = "url('./images/gQAN9po.png')";}
		if (temp >= 107 && temp <=109) {document.getElementById(key).style.backgroundImage = "url('./images/O8YMJ5E.png')";}
		if (temp >= 110 && temp <=113) {document.getElementById(key).style.backgroundImage = "url('./images/5RniyE6.png')";}
	temp +=1;
	}
	document.getElementById("chuButton").src= Player.chu_img;
	document.getElementById("chuButton").style.opacity = 1;
	document.getElementById("gan_req2").src= Player.light_arrows_img;
	document.getElementById("gan_req1").src= Player.magic_img;
	document.getElementById("gan_req3").src= Player.bow_img;
	document.getElementById("lullabyimg").src=Player.lullaby_img;
	document.getElementById("eponasimg").src=Player.eponas_img;
	document.getElementById("sariasimg").src=Player.sarias_img;
	document.getElementById("sunsimg").src=Player.suns_img;
	document.getElementById("sotimg").src=Player.time_img;
	document.getElementById("sosimg").src=Player.storms_img;
	document.getElementById("minuetimg").src=Player.minuet_img;
	document.getElementById("boleroimg").src=Player.bolero_img;
	document.getElementById("serenadeimg").src=Player.serenade_img;
	document.getElementById("requiemimg").src=Player.requiem_img;
	document.getElementById("nocturneimg").src=Player.nocturne_img;
	document.getElementById("preludeimg").src=Player.prelude_img;
	document.getElementById("faroresimg").src= Player.farores_wind_img;
	document.getElementById("firearrowsimg").src= Player.fire_arrows_img;
	document.getElementById("lensimg").src= Player.lens_img;
	document.getElementById("silverscaleimg").src= Player.silver_scale_img;
	document.getElementById("bottleimg").src= Player.bottle_img;
	document.getElementById("slingshotimg").src= Player.slingshot_img;
	document.getElementById("goldengauntletsimg").src= Player.golden_gauntlets_img;
	
	var all = document.getElementsByClassName('songpics');
	for (var i = 0; i < all.length; i++) {
	all[i].style.width="26px";
	all[i].style.height="26px";
	all[i].style.marginLeft="8px";
	all[i].style.marginBottom="2px";
	all[i].style.marginTop="5px";
	}
	document.getElementById("iWantToRemoveThisButton").innerHTML="Appease Viewers";
	
	ItemImages = [Player.farores_wind_img, Player.slingshot_img, Player.slingshot_img, Player.slingshot_img, Player.boomerang_img, Player.silver_scale_img, Player.silver_scale_img, Player.rutos_letter_img, Player.bottle_img, Player.bottle_img, Player.bottle_img, Player.bottle_img, Player.bomb_img, Player.bomb_img, Player.bomb_img, Player.hammer_img, Player.bow_img, Player.bow_img, Player.bow_img, Player.hookshot_img, Player.hookshot_img, Player.goron_bracelet_img, Player.goron_bracelet_img, Player.goron_bracelet_img, Player.mirror_shield_img, Player.magic_img, Player.magic_img, Player.iron_boots_img, Player.kokiri_sword_img, Player.hover_boots_img, Player.wallet1_img, Player.wallet1_img, Player.wallet1_img, Player.goron_tunic_img, Player.zora_tunic_img, Player.dins_fire_img, Player.fire_arrows_img, Player.lens_img, Player.prescription_img, Player.claim_check_img, Player.light_arrows_img, Player.ice_arrows_img, Player.biggoron_sword_img, Player.nayrus_love_img, Player.stone_of_agony_img, Player.forest_key_img, Player.fire_key_img, Player.water_key_img, Player.spirit_key_img, Player.shadow_key_img, Player.well_key_img, Player.gtg_key_img, Player.ganon_key_img, Player.gerudo_card_img, Player.beans_img, Player.lullaby_img, Player.eponas_img, Player.suns_img, Player.sarias_img, Player.storms_img, Player.minuet_img, Player.bolero_img, Player.requiem_img, Player.nocturne_img, Player.time_img, Player.prelude_img, Player.serenade_img];
}

function dark_normie() {
	Player.bomb_img= "./normal/items/bomb.png";
	Player.rutos_letter_img= "./normal/items/rutos_letter.png";
	Player.boomerang_img= "./normal/items/boomerang.png";
	Player.hookshot_img= "./normal/items/hookshot.png";
	Player.bow_img= "./normal/items/bow.png";
	Player.goron_bracelet_img= "./normal/items/goron_bracelet.png";
	Player.lens_img = "./normal/items/lens.png";
	Player.golden_gauntlets_img = "./normal/items/golden_gauntlets.png";
	Player.hammer_img= "./normal/items/hammer.png";
	Player.iron_boots_img= "./normal/items/iron_boots.png";
	Player.kokiri_sword_img= "./normal/items/kokiri_sword.png";
	Player.silver_scale_img=  "./normal/items/silver_scale.png"
	Player.golden_scale_img= "./normal/items/golden_scale.png";
	Player.longshot_img= "./normal/items/longshot.png";
	Player.silver_gauntlets_img= "./normal/items/silver_gauntlets.png";
	Player.mirror_shield_img= "./normal/items/mirror_shield.png";
	Player.dins_fire_img= "./normal/items/dins_fire.png";
	Player.magic_img= "./normal/items/magic.png";
	Player.magic_2_img =".normal/items/magic_2.png";
	Player.hover_boots_img= "./normal/items/hover_boots.png";
	Player.light_arrows_img= "./normal/items/light_arrows.png";
	Player.fire_arrows_img= "./normal/items/fire_arrows.png";
	Player.farores_wind_img = "./normal/items/farores_wind.png";
	Player.bottle_img = "./normal/items/bottle.png";
	Player.slingshot_img = "./normal/items/slingshot.png";
	Player.lullaby_img = "./normal/items/lullaby.png";
	Player.eponas_img = "./normal/items/eponas.png";
	Player.sarias_img = "./normal/items/sarias.png";
	Player.suns_img = "./normal/items/suns.png";
	Player.time_img = "./normal/items/time.png";
	Player.storms_img = "./normal/items/storms.png";
	Player.minuet_img = "./normal/items/minuet.png";
	Player.bolero_img = "./normal/items/bolero.png";
	Player.serenade_img = "./normal/items/serenade.png";
	Player.requiem_img = "./normal/items/requiem.png";
	Player.nocturne_img = "./normal/items/nocturne.png";
	Player.prelude_img = "./normal/items/prelude.png";
	Player.chu_img = "./normal/items/chu.png";
	Player.wallet1_img = "./normal/items/adults_wallet.png";
	Player.boots_img = "./normal/items/boots.png";
	Player.magicarrows_img = "./normal/items/magicarrows.png";
	Player.magicspell_img = "./normal/items/magicspell.png";
	Player.goronzora_img = "./normal/items/goronzora.png";
	
	Player.stone_of_agony_img = "./normal/items/stone_of_agony.png";
	Player.antidote_img = "./normal/items/antidote.png";
	Player.arrows30_img = "./normal/items/arrows30.png";
	Player.arrows40_img = "./normal/items/arrows40.png";
	Player.arrows50_img = "./normal/items/arrows50.png";
	Player.big_poe_img = "./normal/items/big_poe.png";
	Player.biggoron_sword_img = "./normal/items/biggoron_sword.png";
	Player.blue_chicken_img = "./normal/items/blue_chicken.png";
	Player.blue_fire_img = "./normal/items/blue_fire.png";
	Player.blue_potion_img = "./normal/items/blue_potion.png";
	Player.bomb_bag_img = "./normal/items/bomb_bag.png";
	Player.bomb_bag_40_img = "./normal/items/bomb_bag_40.png";
	Player.bomb_bag_50_img = "./normal/items/bomb_bag_50.png";
	Player.broken_sword_img = "./normal/items/broken_sword.png";
	Player.bugs_img = "./normal/items/bugs.png";
	Player.bunny_hood_img = "./normal/items/bunny_hood.png";
	Player.chicken1_img = "./normal/items/chicken1.png";
	Player.chicken2_img = "./normal/items/chicken2.png";
	Player.claim_check_img = "./normal/items/claim_check.png";
	Player.deku_shield_img = "./normal/items/deku_shield.png";
	Player.egg1_img = "./normal/items/egg1.png";
	Player.egg2_img = "./normal/items/egg2.png";
	Player.eyeball_frog_img = "./normal/items/eyeball_frog.png";
	Player.eyedrops_img = "./normal/items/eyedrops.png";
	Player.fairy_img = "./normal/items/fairy.png";
	Player.fish_img = "./normal/items/fish.png";
	Player.gerudo_card_img = "./normal/items/gerudo_card.png";
	Player.gerudo_mask_img = "./normal/items/gerudo_mask.png";
	Player.wallet2_img = "./normal/items/giants_wallet.png";
	Player.goron_mask_img = "./normal/items/goron_mask.png";
	Player.goron_tunic_img = "./normal/items/goron_tunic.png";
	Player.green_potion_img = "./normal/items/green_potion.png";
	Player.half_milk_img = "./normal/items/half_milk.png";
	Player.hylian_shield_img = "./normal/items/hylian_shield.png";
	Player.ice_arrows_img = "./normal/items/ice_arrows.png";
	Player.forest_key_img = "./normal/items/forest-temple-key.png";
	Player.fire_key_img = "./normal/items/fire-temple-key.png";
	Player.water_key_img = "./normal/items/water-temple-key.png";
	Player.spirit_key_img = "./normal/items/spirit-temple-key.png";
	Player.shadow_key_img = "./normal/items/shadow-temple-key.png";
	Player.gtg_key_img = "./normal/items/gtg-key.png";
	Player.well_key_img = "./normal/items/botw-key.png";
	Player.ganon_key_img = "./normal/items/ganon-key.png";
	Player.keaton_mask_img = "./normal/items/keaton_mask.png";
	Player.kokiri_boots_img = "./normal/items/kokiri_boots.png";
	Player.kokiri_sword_img = "./normal/items/kokiri_sword.png";
	Player.kokiri_tunic_img = "./normal/items/kokiri_tunic.png";
	Player.magic_2_img = "./normal/items/magic_2.png";
	Player.beans_img = "./normal/items/beans.png";
	Player.mask_of_truth_img = "./normal/items/mask_of_truth.png";
	Player.master_sword_img = "./normal/items/master_sword.png";
	Player.milk_img = "./normal/items/milk.png";
	Player.nayrus_love_img = "./normal/items/nayrus_love.png";
	Player.nut_img = "./normal/items/nut.png";
	Player.ocarina_img = "./normal/items/ocarina.png";
	Player.ocarina_2_img = "./normal/items/ocarina_2.png";
	Player.odd_mushroom_img = "./normal/items/odd_mushroom.png";
	Player.poachers_saw_img = "./normal/items/poachers_saw.png";
	Player.prescription_img = "./normal/items/prescription.png";
	Player.red_potion_img = "./normal/items/red_potion.png";
	Player.seeds_30_img = "./normal/items/seeds_30.png";
	Player.seeds_40_img = "./normal/items/seeds_40.png";
	Player.seeds_50_img = "./normal/items/seeds_50.png";
	Player.skull_mask_img = "./normal/items/skull_mask.png";
	Player.skull_token_img = "./normal/items/skull_token.png";
	Player.small_poe_img = "./normal/items/small_poe.png";
	Player.sold_out_img = "./normal/items/sold_out.png";
	Player.spooky_mask_img = "./normal/items/spooky_mask.png";
	Player.stick_img = "./normal/items/stick.png";
	Player.zeldas_letter_img = "./normal/items/zeldas_letter.png";
	Player.zora_mask_img = "./normal/items/zora_mask.png";
	Player.zora_tunic_img = "./normal/items/zora_tunic.png";
	
	Player.emerald_img = "./normal/items/emerald.png";
	Player.ruby_img = "./normal/items/ruby.png";
	Player.sapphire_img = "./normal/items/sapphire.png";
	Player.forest_img = "./normal/items/forest.png";
	Player.fire_img = "./normal/items/fire.png";
	Player.water_img = "./normal/items/water.png";
	Player.shadow_img = "./normal/items/shadow.png";
	Player.spirit_img = "./normal/items/spirit.png";
	Player.light_img = "./normal/items/light.png";
	
	
	//document.getElementById("mouseInputs_bomb_bag").src = Player.bomb_img;
	//document.getElementById("mouseInputs_mirror_shield").src = Player.mirror_shield_img;
	//document.getElementById("mouseInputs_lens").src = Player.lens_img;
	//document.getElementById("mouseInputs_bottle").src = Player.rutos_letter_img;
	//document.getElementById("mouseInputs_bow").src = Player.bow_img;
	//document.getElementById("mouseInputs_hammer").src = Player.hammer_img;
	//document.getElementById("mouseInputs_hookshot").src = Player.hookshot_img;
	//document.getElementById("mouseInputs_boomerang").src = Player.boomerang_img;
	//document.getElementById("mouseInputs_chus").src = Player.chu_img;
	//document.getElementById("mouseInputs_scale").src = Player.silver_scale_img;
	//document.getElementById("mouseInputs_magic").src = Player.magic_img;
	//document.getElementById("mouseInputs_strength").src = Player.goron_bracelet_img;
	//document.getElementById("mouseInputs_slingshot").src = Player.slingshot_img;
	//document.getElementById("mouseInputs_magicspell").src = Player.magicspell_img;
	//document.getElementById("mouseInputs_magicarrows").src = Player.magicarrows_img;
	//document.getElementById("mouseInputs_boots").src = Player.boots_img;
	//document.getElementById("mouseInputs_kokiri_sword").src = Player.kokiri_sword_img;
	//document.getElementById("mouseInputs_goronzora").src = Player.goronzora_img;
	//document.getElementById("mouseInputs_wallet").src = Player.wallet1_img;
	//document.getElementById("mouseInputs_prescription").src = Player.prescription_img;
	//document.getElementById("mouseInputs_claim_check").src = Player.claim_check_img;
	
	if(document.getElementById(dekuPlacement +"_req1") != null) {document.getElementById(dekuPlacement +"_req1").src = Player.kokiri_sword_img; }
	if(document.getElementById(dodongosPlacement +"_req1") != null) {document.getElementById(dodongosPlacement +"_req1").src = Player.bomb_img; }
	if(document.getElementById(jabuPlacement +"_req1") != null) {document.getElementById(jabuPlacement +"_req1").src = Player.rutos_letter_img; }
	if(document.getElementById(jabuPlacement +"_req2") != null) {document.getElementById(jabuPlacement +"_req2").src = Player.boomerang_img; }
	if(document.getElementById(forestPlacement +"_req1") != null) {document.getElementById(forestPlacement +"_req1").src = Player.hookshot_img; }
	if(document.getElementById(forestPlacement +"_req2") != null) {document.getElementById(forestPlacement +"_req2").src = Player.bow_img; }
	if(document.getElementById(forestPlacement +"_req3") != null) {document.getElementById(forestPlacement +"_req3").src = Player.goron_bracelet_img; }
	if(document.getElementById(firePlacement +"_req1") != null) {document.getElementById(firePlacement +"_req1").src = Player.hammer_img; }
	if(document.getElementById(waterPlacement +"_req1") != null) {document.getElementById(waterPlacement +"_req1").src = Player.iron_boots_img; }
	if(document.getElementById(waterPlacement +"_req2") != null) {document.getElementById(waterPlacement +"_req2").src = Player.golden_scale_img; }
	if(document.getElementById(waterPlacement +"_req3") != null) {document.getElementById(waterPlacement +"_req3").src = Player.longshot_img; }
	if(document.getElementById(spiritPlacement +"_req1") != null) {document.getElementById(spiritPlacement +"_req1").src = Player.silver_gauntlets_img; }
	if(document.getElementById(spiritPlacement +"_req2") != null) {document.getElementById(spiritPlacement +"_req2").src = Player.mirror_shield_img; }
	if(document.getElementById(spiritPlacement +"_req3") != null) {document.getElementById(spiritPlacement +"_req3").src = Player.bomb_img; }
	if(document.getElementById(spiritPlacement +"_req4") != null) {document.getElementById(spiritPlacement +"_req4").src = Player.hookshot_img; }
	if(document.getElementById(shadowPlacement +"_req1") != null) {document.getElementById(shadowPlacement +"_req1").src = Player.dins_fire_img; }
	if(document.getElementById(shadowPlacement +"_req2") != null) {document.getElementById(shadowPlacement +"_req2").src = Player.magic_img; }
	if(document.getElementById(shadowPlacement +"_req3") != null) {document.getElementById(shadowPlacement +"_req3").src = Player.hover_boots_img; }
	if(document.getElementById(shadowPlacement +"_req4") != null) {document.getElementById(shadowPlacement +"_req4").src = Player.bomb_img; }
	if(document.getElementById(shadowPlacement +"_req5") != null) {document.getElementById(shadowPlacement +"_req5").src = Player.hookshot_img; }
	document.getElementById("normalColumn1").style.width="97px";
	document.getElementById("normalColumn2").style.width="97px";
	document.getElementById("normalColumn3").style.width="97px";
	document.getElementById("scrollable_section").style.left="0px";
	document.getElementById("timer").style.left="-140px";
	document.getElementById("tokens_acquired").style.left="732px";
	document.getElementById("skulls_in_logic").style.left="871px";
	document.getElementById("dung4_icon").style.left="948px";
	document.getElementById("dung5_icon").style.left="948px";
	document.getElementById("dung6_icon").style.left="948px";
	document.getElementById("dung7_icon").style.left="948px";
	document.getElementById("dung8_icon").style.left="948px";
	document.getElementById("dung9_icon").style.left="948px";
	for (var i = 0; i < Locations.length; i++) {
		var key = Locations[i];
		if (document.getElementById(key) != null){document.getElementById(key).style.height="22px";}
		if (document.getElementById(key) != null){document.getElementById(key).style.width="30px";}
		if (i < AreaIndexes[1]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/kokiri.jpg')";}
		else if (i < AreaIndexes[2]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/ranch.jpg')";}
		else if (i < AreaIndexes[3]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/field.jpg')";}
		else if (i < AreaIndexes[4]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/valley.jpg')";}
		else if (i < AreaIndexes[5]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/hylia.jpg')";}
		else if (i < AreaIndexes[6]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/market.jpg')";}
		else if (i < AreaIndexes[7]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/hyrule_castle.jpg')";}
		else if (i < AreaIndexes[8]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/ogc.jpg')";}
		else if (i < AreaIndexes[9]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/tot.jpg')";}
		else if (i < AreaIndexes[10]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/fountain.jpg')";}
		else if (i < AreaIndexes[11]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/ice.jpg')";}
		else if (i < AreaIndexes[12]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/deku.jpg')";}
		else if (i < AreaIndexes[13]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/lost_woods.jpg')";}
		else if (i < AreaIndexes[14]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/sfm.jpg')";}
		else if (i < AreaIndexes[15]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/goron.jpg')";}
		else if (i < AreaIndexes[16]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/dodongos.jpg')";}
		else if (i < AreaIndexes[17]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/dmt.jpg')";}
		else if (i < AreaIndexes[18]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/dmc.jpg')";}
		else if (i < AreaIndexes[19]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/kakariko.jpg')";}
		else if (i < AreaIndexes[20]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/graveyard.jpg')";}
		else if (i < AreaIndexes[21]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/river.jpg')";}
		else if (i < AreaIndexes[22]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/domain.jpg')";}
		else if (i < AreaIndexes[23]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/colossus.jpg')";}
		else if (i < AreaIndexes[24]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/wasteland.jpg')";}
		else if (i < AreaIndexes[25]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/fortress.jpg')";}
		else if (i < AreaIndexes[26]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/fortress.jpg')";}
		else if (i < AreaIndexes[27]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/jabu.jpg')";}
	}
	document.getElementById("chuButton").src= Player.chu_img;
	document.getElementById("chuButton").style.opacity = .4;
	document.getElementById("gan_req2").src= Player.light_arrows_img;
	document.getElementById("gan_req1").src= Player.magic_img;
	document.getElementById("gan_req3").src= Player.bow_img;
	document.getElementById("lullabyimg").src=Player.lullaby_img;
	document.getElementById("eponasimg").src=Player.eponas_img;
	document.getElementById("sariasimg").src=Player.sarias_img;
	document.getElementById("sunsimg").src=Player.suns_img;
	document.getElementById("sotimg").src=Player.time_img;
	document.getElementById("sosimg").src=Player.storms_img;
	document.getElementById("minuetimg").src=Player.minuet_img;
	document.getElementById("boleroimg").src=Player.bolero_img;
	document.getElementById("serenadeimg").src=Player.serenade_img;
	document.getElementById("requiemimg").src=Player.requiem_img;
	document.getElementById("nocturneimg").src=Player.nocturne_img;
	document.getElementById("preludeimg").src=Player.prelude_img;
	document.getElementById("faroresimg").src= Player.farores_wind_img;
	document.getElementById("firearrowsimg").src= Player.fire_arrows_img;
	document.getElementById("lensimg").src= Player.lens_img;
	document.getElementById("silverscaleimg").src= Player.silver_scale_img;
	document.getElementById("bottleimg").src= Player.bottle_img;
	document.getElementById("slingshotimg").src= Player.slingshot_img;
	document.getElementById("goldengauntletsimg").src= Player.golden_gauntlets_img;
	var all = document.getElementsByClassName('songpics');
	for (var i = 0; i < all.length; i++) {
	all[i].style.width="38px";
	all[i].style.height="38px";
	all[i].style.marginLeft="1px";
	all[i].style.marginBottom="1px";
	all[i].style.marginTop="1px";
	}
	document.getElementById("iWantToRemoveThisButton").innerHTML="Original";
	
	
	
	ItemImages = [Player.farores_wind_img, Player.slingshot_img, Player.slingshot_img, Player.slingshot_img, Player.boomerang_img, Player.silver_scale_img, Player.silver_scale_img, Player.rutos_letter_img, Player.bottle_img, Player.bottle_img, Player.bottle_img, Player.bottle_img, Player.bomb_img, Player.bomb_img, Player.bomb_img, Player.hammer_img, Player.bow_img, Player.bow_img, Player.bow_img, Player.hookshot_img, Player.hookshot_img, Player.goron_bracelet_img, Player.goron_bracelet_img, Player.goron_bracelet_img, Player.mirror_shield_img, Player.magic_img, Player.magic_img, Player.iron_boots_img, Player.kokiri_sword_img, Player.hover_boots_img, Player.wallet1_img, Player.wallet1_img, Player.wallet1_img, Player.goron_tunic_img, Player.zora_tunic_img, Player.dins_fire_img, Player.fire_arrows_img, Player.lens_img, Player.prescription_img, Player.claim_check_img, Player.light_arrows_img, Player.ice_arrows_img, Player.biggoron_sword_img, Player.nayrus_love_img, Player.stone_of_agony_img, Player.forest_key_img, Player.fire_key_img, Player.water_key_img, Player.spirit_key_img, Player.shadow_key_img, Player.well_key_img, Player.gtg_key_img, Player.ganon_key_img, Player.gerudo_card_img, Player.beans_img, Player.lullaby_img, Player.eponas_img, Player.suns_img, Player.sarias_img, Player.storms_img, Player.minuet_img, Player.bolero_img, Player.requiem_img, Player.nocturne_img, Player.time_img, Player.prelude_img, Player.serenade_img];
}

function changeThemes() {
	if(Player.theme == "dark" && Player.themeChange) {
		if (Person.type == "soli") {dark_soli();}
		else if (Person.type == "normie") {dark_normie();}	
		dark_theme();
	}
	if(Player.theme == "light" && Player.themeChange) {
		light_theme();
	}
	
	if (Player.changetheme == 1) {Player.themeChange = true; Player.changetheme = 0;}
	
	
	
	if(colorTheme == "light") {
		document.getElementById('row').style.backgroundColor = '#576166';
		document.querySelectorAll('.hint_input').forEach(e => {e.style.backgroundColor = '#404040'; e.style.color = 'white';});
		document.querySelectorAll('.meh_input').forEach(e => {e.style.backgroundColor = '#404040'; e.style.color = 'white';});
		document.querySelectorAll('.super_hint_input').forEach(e => {e.style.backgroundColor = '#404040'; e.style.color = 'white';});
		document.querySelectorAll('.checked_text_summary_ool').forEach(e => {e.style.color = 'black';});
		document.querySelectorAll('.check_input').forEach(e => {e.style.backgroundColor = '#404040'; e.style.color = 'white';});
		document.querySelectorAll('.alt_hint_input').forEach(e => {e.style.backgroundColor = '#404040'; e.style.color = 'white';});
		document.querySelectorAll('.layout_input').forEach(e => {e.style.backgroundColor = '#404040'; e.style.color = 'white';});
		document.querySelectorAll('.mark_spawn').forEach(e => {e.style.backgroundColor = '#404040'; e.style.color = 'white';});
		document.querySelectorAll('.simLog').forEach(e => {e.style.backgroundColor = '#404040'; e.style.color = 'white';});
		document.querySelectorAll('.ool_check_text').forEach(e => {e.style.color = 'black';});
		document.querySelectorAll('.ool_check_text2').forEach(e => {e.style.color = 'black';});
	}
	else {
		document.getElementById('row').style.backgroundColor = '#3b4144';
		document.querySelectorAll('.hint_input').forEach(e => {e.style.backgroundColor = '#181818'; e.style.color = 'white';});
		document.querySelectorAll('.meh_input').forEach(e => {e.style.backgroundColor = '#181818'; e.style.color = 'white';});
		document.querySelectorAll('.super_hint_input').forEach(e => {e.style.backgroundColor = '#181818'; e.style.color = 'white';});
		document.querySelectorAll('.checked_text_summary_ool').forEach(e => {e.style.color = 'white';});
		document.querySelectorAll('.check_input').forEach(e => {e.style.backgroundColor = '#181818'; e.style.color = 'magenta';});
		document.querySelectorAll('.alt_hint_input').forEach(e => {e.style.backgroundColor = '#181818'; e.style.color = 'white';});
		document.querySelectorAll('.layout_input').forEach(e => {e.style.backgroundColor = '#181818'; e.style.color = 'white';});
		document.querySelectorAll('.mark_spawn').forEach(e => {e.style.backgroundColor = '#181818'; e.style.color = 'white';});
		document.querySelectorAll('.ool_check_text').forEach(e => {e.style.color = 'white';});
		document.querySelectorAll('.ool_check_text2').forEach(e => {e.style.color = 'white';});
		document.querySelectorAll('.simLog').forEach(e => {e.style.backgroundColor = '#181818'; e.style.color = 'white';});
	}
}

function dark_theme() {
	Player.themeChange = false;
	document.getElementById("checks_remaining").style.color="lightblue";
	document.getElementById("logically_accessible").style.color=inLogicColor;
	var all = document.getElementsByClassName('logic_check_text');
	for (var i = 0; i < all.length; i++) {
	all[i].style.color = inLogicColor;
	}
	if(document.getElementById('text_dung1') != null) {document.getElementById('text_dung1').style.color = 'lightgreen';}
	if(document.getElementById('text_dung2') != null) {document.getElementById('text_dung2').style.color = '#ff4d4d';}
	if(document.getElementById('text_dung3') != null) {document.getElementById('text_dung3').style.color = 'lightblue';}
	if(document.getElementById('text_dung4') != null) {document.getElementById('text_dung4').style.color = 'lightgreen';}
	if(document.getElementById('text_dung5') != null) {document.getElementById('text_dung5').style.color = '#ff4d4d';}
	if(document.getElementById('text_dung6') != null) {document.getElementById('text_dung6').style.color = 'lightblue';}
	if(document.getElementById('text_gan') != null) {document.getElementById('text_gan').style.color = '#FFA3B8';}
	document.body.style.backgroundColor = "";
}


function light_theme() {
	Player.themeChange = false;
	document.getElementById("logically_accessible").style.color="darkgreen";
	document.getElementById("checks_remaining").style.color="blue";
	var all = document.getElementsByClassName('logic_check_text');
	for (var i = 0; i < all.length; i++) {
	all[i].style.color = 'darkgreen';
	}
	if(document.getElementById('text_dung1') != null) {document.getElementById('text_dung1').style.color = 'green';}
	if(document.getElementById('text_dung2') != null) {document.getElementById('text_dung2').style.color = 'red';}
	if(document.getElementById('text_dung3') != null) {document.getElementById('text_dung3').style.color = 'blue';}
	if(document.getElementById('text_dung4') != null) {document.getElementById('text_dung4').style.color = 'green';}
	if(document.getElementById('text_dung5') != null) {document.getElementById('text_dung5').style.color = 'red';}
	if(document.getElementById('text_dung6') != null) {document.getElementById('text_dung6').style.color = 'blue';}
	if(document.getElementById('text_gan') != null) {document.getElementById('text_gan').style.color = '#990000';}
	document.body.style.backgroundColor = "white";
}