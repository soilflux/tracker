function dark_soli() {
	Game.bomb_img= "./images/explosive505050.png";
	Game.rutos_letter_img= "./images/letter505050.png";
	Game.boomerang_img= "./images/boomerang505050.png";
	Game.hookshot_img= "./images/hookshot505050.png";
	Game.bow_img= "./images/bow505050.png";
	Game.goron_bracelet_img= "./images/strength1505050.png";
	Game.lens_img = "./images/lens505050.png";
	Game.golden_gauntlets_img = "./images/strength3505050.png";
	Game.hammer_img= "./images/ham505050.png";
	Game.iron_boots_img= "./images/ironboots505050.png";
	Game.kokiri_sword_img= "./normal/items/kokiri_sword.png";
	Game.silver_scale_img=  "./images/silverscale505050.png"
	Game.golden_scale_img= "./images/goldenscale505050.png";
	Game.longshot_img= "./images/longshot505050.png";
	Game.silver_gauntlets_img= "./images/strength2505050.png";
	Game.mirror_shield_img= "./images/mirrorshield505050.png";
	Game.dins_fire_img= "./images/dinsfirenew505050.png";
	Game.magic_img= "./images/magic505050.png";
	Game.hover_boots_img= "./images/hovers505050.png";
	Game.light_arrows_img= "./images/lightarrow505050.png";
	Game.fire_arrows_img= "./images/firearrows505050.png";
	Game.farores_wind_img = "./images/farores505050.png";
	Game.bottle_img = "./images/bottle505050.png";
	Game.slingshot_img = "./images/slingshot505050.png";
	Game.lullaby_img = "./images/lullaby505050.png";
	Game.eponas_img = "./images/eponas505050.png";
	Game.sarias_img = "./images/sarias505050.png";
	Game.suns_img = "./images/suns505050.png";
	Game.time_img = "./images/sot505050.png";
	Game.storms_img = "./images/sos505050.png";
	Game.minuet_img = "./images/minuet505050.png";
	Game.bolero_img = "./images/bolero505050.png";
	Game.serenade_img = "./images/serenade505050.png";
	Game.requiem_img = "./images/requiem505050.png";
	Game.nocturne_img = "./images/nocturne505050.png";
	Game.prelude_img = "./images/prelude505050.png";
	Game.chu_img = "./images/chux.png";
	
	if(document.getElementById(dekuPlacement +"_req1") != null) {document.getElementById(dekuPlacement +"_req1").src = Game.kokiri_sword_img; }
	if(document.getElementById(dodongosPlacement +"_req1") != null) {document.getElementById(dodongosPlacement +"_req1").src = Game.bomb_img; }
	if(document.getElementById(jabuPlacement +"_req1") != null) {document.getElementById(jabuPlacement +"_req1").src = Game.rutos_letter_img; }
	if(document.getElementById(jabuPlacement +"_req2") != null) {document.getElementById(jabuPlacement +"_req2").src = Game.boomerang_img; }
	if(document.getElementById(forestPlacement +"_req1") != null) {document.getElementById(forestPlacement +"_req1").src = Game.hookshot_img; }
	if(document.getElementById(forestPlacement +"_req2") != null) {document.getElementById(forestPlacement +"_req2").src = Game.bow_img; }
	if(document.getElementById(forestPlacement +"_req3") != null) {document.getElementById(forestPlacement +"_req3").src = Game.goron_bracelet_img; }
	if(document.getElementById(firePlacement +"_req1") != null) {document.getElementById(firePlacement +"_req1").src = Game.hammer_img; }
	if(document.getElementById(waterPlacement +"_req1") != null) {document.getElementById(waterPlacement +"_req1").src = Game.iron_boots_img; }
	if(document.getElementById(waterPlacement +"_req2") != null) {document.getElementById(waterPlacement +"_req2").src = Game.golden_scale_img; }
	if(document.getElementById(waterPlacement +"_req3") != null) {document.getElementById(waterPlacement +"_req3").src = Game.longshot_img; }
	if(document.getElementById(spiritPlacement +"_req1") != null) {document.getElementById(spiritPlacement +"_req1").src = Game.silver_gauntlets_img; }
	if(document.getElementById(spiritPlacement +"_req2") != null) {document.getElementById(spiritPlacement +"_req2").src = Game.mirror_shield_img; }
	if(document.getElementById(spiritPlacement +"_req3") != null) {document.getElementById(spiritPlacement +"_req3").src = Game.bomb_img; }
	if(document.getElementById(spiritPlacement +"_req4") != null) {document.getElementById(spiritPlacement +"_req4").src = Game.hookshot_img; }
	if(document.getElementById(shadowPlacement +"_req1") != null) {document.getElementById(shadowPlacement +"_req1").src = Game.dins_fire_img; }
	if(document.getElementById(shadowPlacement +"_req2") != null) {document.getElementById(shadowPlacement +"_req2").src = Game.magic_img; }
	if(document.getElementById(shadowPlacement +"_req3") != null) {document.getElementById(shadowPlacement +"_req3").src = Game.hover_boots_img; }
	if(document.getElementById(shadowPlacement +"_req4") != null) {document.getElementById(shadowPlacement +"_req4").src = Game.bomb_img; }
	if(document.getElementById(shadowPlacement +"_req5") != null) {document.getElementById(shadowPlacement +"_req5").src = Game.hookshot_img; }
	var temp = 0;
	for (const key of Object.keys(Location_Logic)) {
		if (temp == 256) {break; }	
		if (document.getElementById(key) != null){document.getElementById(key).style.height="21px";}
		if (document.getElementById(key) != null){document.getElementById(key).style.width="29px";}
		document.getElementById("normalColumn1").style.width="110px";
		document.getElementById("normalColumn2").style.width="110px";
		document.getElementById("normalColumn3").style.width="110px";
		document.getElementById("woth_info").style.left="956px";
		document.getElementById("timer").style.left="1000px";
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
	document.getElementById("chuButton").src= Game.chu_img;
	document.getElementById("chuButton").style.opacity = 1;
	document.getElementById("gan_req2").src= Game.light_arrows_img;
	document.getElementById("gan_req1").src= Game.magic_img;
	document.getElementById("gan_req3").src= Game.bow_img;
	document.getElementById("lullabyimg").src=Game.lullaby_img;
	document.getElementById("eponasimg").src=Game.eponas_img;
	document.getElementById("sariasimg").src=Game.sarias_img;
	document.getElementById("sunsimg").src=Game.suns_img;
	document.getElementById("sotimg").src=Game.time_img;
	document.getElementById("sosimg").src=Game.storms_img;
	document.getElementById("minuetimg").src=Game.minuet_img;
	document.getElementById("boleroimg").src=Game.bolero_img;
	document.getElementById("serenadeimg").src=Game.serenade_img;
	document.getElementById("requiemimg").src=Game.requiem_img;
	document.getElementById("nocturneimg").src=Game.nocturne_img;
	document.getElementById("preludeimg").src=Game.prelude_img;
	document.getElementById("faroresimg").src= Game.farores_wind_img;
	document.getElementById("firearrowsimg").src= Game.fire_arrows_img;
	document.getElementById("lensimg").src= Game.lens_img;
	document.getElementById("silverscaleimg").src= Game.silver_scale_img;
	document.getElementById("bottleimg").src= Game.bottle_img;
	document.getElementById("slingshotimg").src= Game.slingshot_img;
	document.getElementById("goldengauntletsimg").src= Game.golden_gauntlets_img;
	
	var all = document.getElementsByClassName('songpics');
	for (var i = 0; i < all.length; i++) {
	all[i].style.width="26px";
	all[i].style.height="26px";
	all[i].style.marginLeft="8px";
	all[i].style.marginBottom="2px";
	all[i].style.marginTop="5px";
	}
	document.getElementById("iWantToRemoveThisButton").innerHTML="Appease Viewers";
	
	ItemImages = [Game.farores_wind_img, Game.slingshot_img, Game.slingshot_img, Game.slingshot_img, Game.boomerang_img, Game.silver_scale_img, Game.golden_scale_img, Game.rutos_letter_img, Game.bottle_img, Game.bottle_img, Game.bottle_img, Game.bomb_img, Game.bomb_img, Game.bomb_img, Game.hammer_img, Game.bow_img, Game.bow_img, Game.bow_img, Game.hookshot_img, Game.hookshot_img, Game.goron_bracelet_img, Game.goron_bracelet_img, Game.goron_bracelet_img, Game.mirror_shield_img, Game.magic_img, Game.magic_img, Game.iron_boots_img, Game.kokiri_sword_img, Game.hover_boots_img, Game.wallet1_img, Game.wallet2_img, Game.goron_tunic_img, Game.zora_tunic_img, Game.dins_fire_img, Game.fire_arrows_img, Game.lens_img, Game.prescription_img, Game.claim_check_img, Game.light_arrows_img, Game.lullaby_img, Game.eponas_img, Game.suns_img, Game.sarias_img, Game.storms_img, Game.minuet_img, Game.bolero_img, Game.requiem_img, Game.nocturne_img, Game.time_img];
}

function dark_normie() {
	Game.bomb_img= "./normal/items/bomb.png";
	Game.rutos_letter_img= "./normal/items/rutos_letter.png";
	Game.boomerang_img= "./normal/items/boomerang.png";
	Game.hookshot_img= "./normal/items/hookshot.png";
	Game.bow_img= "./normal/items/bow.png";
	Game.goron_bracelet_img= "./normal/items/goron_bracelet.png";
	Game.lens_img = "./normal/items/lens.png";
	Game.golden_gauntlets_img = "./normal/items/golden_gauntlets.png";
	Game.hammer_img= "./normal/items/hammer.png";
	Game.iron_boots_img= "./normal/items/iron_boots.png";
	Game.kokiri_sword_img= "./normal/items/kokiri_sword.png";
	Game.silver_scale_img=  "./normal/items/silver_scale.png"
	Game.golden_scale_img= "./normal/items/golden_scale.png";
	Game.longshot_img= "./normal/items/longshot.png";
	Game.silver_gauntlets_img= "./normal/items/silver_gauntlets.png";
	Game.mirror_shield_img= "./normal/items/mirror_shield.png";
	Game.dins_fire_img= "./normal/items/dins_fire.png";
	Game.magic_img= "./normal/items/magic.png";
	Game.magic_2_img =".normal/items/magic_2.png";
	Game.hover_boots_img= "./normal/items/hover_boots.png";
	Game.light_arrows_img= "./normal/items/light_arrows.png";
	Game.fire_arrows_img= "./normal/items/fire_arrows.png";
	Game.farores_wind_img = "./normal/items/farores_wind.png";
	Game.bottle_img = "./normal/items/bottle.png";
	Game.slingshot_img = "./normal/items/slingshot.png";
	Game.lullaby_img = "./normal/items/lullaby.png";
	Game.eponas_img = "./normal/items/eponas.png";
	Game.sarias_img = "./normal/items/sarias.png";
	Game.suns_img = "./normal/items/suns.png";
	Game.time_img = "./normal/items/time.png";
	Game.storms_img = "./normal/items/storms.png";
	Game.minuet_img = "./normal/items/minuet.png";
	Game.bolero_img = "./normal/items/bolero.png";
	Game.serenade_img = "./normal/items/serenade.png";
	Game.requiem_img = "./normal/items/requiem.png";
	Game.nocturne_img = "./normal/items/nocturne.png";
	Game.prelude_img = "./normal/items/prelude.png";
	Game.chu_img = "./normal/items/chu.png";
	Game.wallet1_img = "./normal/items/adults_wallet.png";
	Game.boots_img = "./normal/items/boots.png";
	Game.magicarrows_img = "./normal/items/magicarrows.png";
	Game.magicspell_img = "./normal/items/magicspell.png";
	Game.goronzora_img = "./normal/items/goronzora.png";
	
	Game.agony_img = "./normal/items/agony.png";
	Game.antidote_img = "./normal/items/antidote.png";
	Game.arrows30_img = "./normal/items/arrows30.png";
	Game.arrows40_img = "./normal/items/arrows40.png";
	Game.arrows50_img = "./normal/items/arrows50.png";
	Game.big_poe_img = "./normal/items/big_poe.png";
	Game.biggoron_sword_img = "./normal/items/biggoron_sword.png";
	Game.blue_chicken_img = "./normal/items/blue_chicken.png";
	Game.blue_fire_img = "./normal/items/blue_fire.png";
	Game.blue_potion_img = "./normal/items/blue_potion.png";
	Game.bomb_bag_img = "./normal/items/bomb_bag.png";
	Game.bomb_bag_40_img = "./normal/items/bomb_bag_40.png";
	Game.bomb_bag_50_img = "./normal/items/bomb_bag_50.png";
	Game.broken_sword_img = "./normal/items/broken_sword.png";
	Game.bugs_img = "./normal/items/bugs.png";
	Game.bunny_hood_img = "./normal/items/bunny_hood.png";
	Game.chicken1_img = "./normal/items/chicken1.png";
	Game.chicken2_img = "./normal/items/chicken2.png";
	Game.claim_check_img = "./normal/items/claim_check.png";
	Game.deku_shield_img = "./normal/items/deku_shield.png";
	Game.egg1_img = "./normal/items/egg1.png";
	Game.egg2_img = "./normal/items/egg2.png";
	Game.eyeball_frog_img = "./normal/items/eyeball_frog.png";
	Game.eyedrops_img = "./normal/items/eyedrops.png";
	Game.fairy_img = "./normal/items/fairy.png";
	Game.fish_img = "./normal/items/fish.png";
	Game.gerudo_card_img = "./normal/items/gerudo_card.png";
	Game.gerudo_mask_img = "./normal/items/gerudo_mask.png";
	Game.wallet2_img = "./normal/items/giants_wallet.png";
	Game.goron_mask_img = "./normal/items/goron_mask.png";
	Game.goron_tunic_img = "./normal/items/goron_tunic.png";
	Game.green_potion_img = "./normal/items/green_potion.png";
	Game.half_milk_img = "./normal/items/half_milk.png";
	Game.hylian_shield_img = "./normal/items/hylian_shield.png";
	Game.ice_arrows_img = "./normal/items/ice_arrows.png";
	Game.keaton_mask_img = "./normal/items/keaton_mask.png";
	Game.kokiri_boots_img = "./normal/items/kokiri_boots.png";
	Game.kokiri_sword_img = "./normal/items/kokiri_sword.png";
	Game.kokiri_tunic_img = "./normal/items/kokiri_tunic.png";
	Game.magic_2_img = "./normal/items/magic_2.png";
	Game.beans_img = "./normal/items/beans.png";
	Game.mask_of_truth_img = "./normal/items/mask_of_truth.png";
	Game.master_sword_img = "./normal/items/master_sword.png";
	Game.milk_img = "./normal/items/milk.png";
	Game.nayrus_love_img = "./normal/items/nayrus_love.png";
	Game.nut_img = "./normal/items/nut.png";
	Game.ocarina_img = "./normal/items/ocarina.png";
	Game.ocarina_2_img = "./normal/items/ocarina_2.png";
	Game.odd_mushroom_img = "./normal/items/odd_mushroom.png";
	Game.poachers_saw_img = "./normal/items/poachers_saw.png";
	Game.prescription_img = "./normal/items/prescription.png";
	Game.red_potion_img = "./normal/items/red_potion.png";
	Game.seeds_30_img = "./normal/items/seeds_30.png";
	Game.seeds_40_img = "./normal/items/seeds_40.png";
	Game.seeds_50_img = "./normal/items/seeds_50.png";
	Game.skull_mask_img = "./normal/items/skull_mask.png";
	Game.skull_token_img = "./normal/items/skull_token.png";
	Game.small_poe_img = "./normal/items/small_poe.png";
	Game.sold_out_img = "./normal/items/sold_out.png";
	Game.spooky_mask_img = "./normal/items/spooky_mask.png";
	Game.stick_img = "./normal/items/stick.png";
	Game.zeldas_letter_img = "./normal/items/zeldas_letter.png";
	Game.zora_mask_img = "./normal/items/zora_mask.png";
	Game.zora_tunic_img = "./normal/items/zora_tunic.png";
	
	Game.emerald_img = "./normal/items/emerald.png";
	Game.ruby_img = "./normal/items/ruby.png";
	Game.sapphire_img = "./normal/items/sapphire.png";
	Game.forest_img = "./normal/items/forest.png";
	Game.fire_img = "./normal/items/fire.png";
	Game.water_img = "./normal/items/water.png";
	Game.shadow_img = "./normal/items/shadow.png";
	Game.spirit_img = "./normal/items/spirit.png";
	Game.light_img = "./normal/items/light.png";
	
	
	document.getElementById("mouseInputs_bomb_bag").src = Game.bomb_img;
	document.getElementById("mouseInputs_mirror_shield").src = Game.mirror_shield_img;
	document.getElementById("mouseInputs_lens").src = Game.lens_img;
	document.getElementById("mouseInputs_bottle").src = Game.rutos_letter_img;
	document.getElementById("mouseInputs_bow").src = Game.bow_img;
	document.getElementById("mouseInputs_hammer").src = Game.hammer_img;
	document.getElementById("mouseInputs_hookshot").src = Game.hookshot_img;
	document.getElementById("mouseInputs_boomerang").src = Game.boomerang_img;
	document.getElementById("mouseInputs_chus").src = Game.chu_img;
	document.getElementById("mouseInputs_scale").src = Game.silver_scale_img;
	document.getElementById("mouseInputs_magic").src = Game.magic_img;
	document.getElementById("mouseInputs_strength").src = Game.goron_bracelet_img;
	document.getElementById("mouseInputs_slingshot").src = Game.slingshot_img;
	document.getElementById("mouseInputs_magicspell").src = Game.magicspell_img;
	document.getElementById("mouseInputs_magicarrows").src = Game.magicarrows_img;
	document.getElementById("mouseInputs_boots").src = Game.boots_img;
	document.getElementById("mouseInputs_kokiri_sword").src = Game.kokiri_sword_img;
	document.getElementById("mouseInputs_goronzora").src = Game.goronzora_img;
	document.getElementById("mouseInputs_wallet").src = Game.wallet1_img;
	document.getElementById("mouseInputs_prescription").src = Game.prescription_img;
	document.getElementById("mouseInputs_claim_check").src = Game.claim_check_img;
	
	if(document.getElementById(dekuPlacement +"_req1") != null) {document.getElementById(dekuPlacement +"_req1").src = Game.kokiri_sword_img; }
	if(document.getElementById(dodongosPlacement +"_req1") != null) {document.getElementById(dodongosPlacement +"_req1").src = Game.bomb_img; }
	if(document.getElementById(jabuPlacement +"_req1") != null) {document.getElementById(jabuPlacement +"_req1").src = Game.rutos_letter_img; }
	if(document.getElementById(jabuPlacement +"_req2") != null) {document.getElementById(jabuPlacement +"_req2").src = Game.boomerang_img; }
	if(document.getElementById(forestPlacement +"_req1") != null) {document.getElementById(forestPlacement +"_req1").src = Game.hookshot_img; }
	if(document.getElementById(forestPlacement +"_req2") != null) {document.getElementById(forestPlacement +"_req2").src = Game.bow_img; }
	if(document.getElementById(forestPlacement +"_req3") != null) {document.getElementById(forestPlacement +"_req3").src = Game.goron_bracelet_img; }
	if(document.getElementById(firePlacement +"_req1") != null) {document.getElementById(firePlacement +"_req1").src = Game.hammer_img; }
	if(document.getElementById(waterPlacement +"_req1") != null) {document.getElementById(waterPlacement +"_req1").src = Game.iron_boots_img; }
	if(document.getElementById(waterPlacement +"_req2") != null) {document.getElementById(waterPlacement +"_req2").src = Game.golden_scale_img; }
	if(document.getElementById(waterPlacement +"_req3") != null) {document.getElementById(waterPlacement +"_req3").src = Game.longshot_img; }
	if(document.getElementById(spiritPlacement +"_req1") != null) {document.getElementById(spiritPlacement +"_req1").src = Game.silver_gauntlets_img; }
	if(document.getElementById(spiritPlacement +"_req2") != null) {document.getElementById(spiritPlacement +"_req2").src = Game.mirror_shield_img; }
	if(document.getElementById(spiritPlacement +"_req3") != null) {document.getElementById(spiritPlacement +"_req3").src = Game.bomb_img; }
	if(document.getElementById(spiritPlacement +"_req4") != null) {document.getElementById(spiritPlacement +"_req4").src = Game.hookshot_img; }
	if(document.getElementById(shadowPlacement +"_req1") != null) {document.getElementById(shadowPlacement +"_req1").src = Game.dins_fire_img; }
	if(document.getElementById(shadowPlacement +"_req2") != null) {document.getElementById(shadowPlacement +"_req2").src = Game.magic_img; }
	if(document.getElementById(shadowPlacement +"_req3") != null) {document.getElementById(shadowPlacement +"_req3").src = Game.hover_boots_img; }
	if(document.getElementById(shadowPlacement +"_req4") != null) {document.getElementById(shadowPlacement +"_req4").src = Game.bomb_img; }
	if(document.getElementById(shadowPlacement +"_req5") != null) {document.getElementById(shadowPlacement +"_req5").src = Game.hookshot_img; }
	document.getElementById("normalColumn1").style.width="97px";
	document.getElementById("normalColumn2").style.width="97px";
	document.getElementById("normalColumn3").style.width="97px";
	document.getElementById("woth_info").style.left="0px";
	document.getElementById("timer").style.left="240px";
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
		else if (i < AreaIndexes[26]) {document.getElementById(key).style.backgroundImage = "url('./normal/areas/jabu.jpg')";}
	}
	document.getElementById("chuButton").src= Game.chu_img;
	document.getElementById("chuButton").style.opacity = .4;
	document.getElementById("gan_req2").src= Game.light_arrows_img;
	document.getElementById("gan_req1").src= Game.magic_img;
	document.getElementById("gan_req3").src= Game.bow_img;
	document.getElementById("lullabyimg").src=Game.lullaby_img;
	document.getElementById("eponasimg").src=Game.eponas_img;
	document.getElementById("sariasimg").src=Game.sarias_img;
	document.getElementById("sunsimg").src=Game.suns_img;
	document.getElementById("sotimg").src=Game.time_img;
	document.getElementById("sosimg").src=Game.storms_img;
	document.getElementById("minuetimg").src=Game.minuet_img;
	document.getElementById("boleroimg").src=Game.bolero_img;
	document.getElementById("serenadeimg").src=Game.serenade_img;
	document.getElementById("requiemimg").src=Game.requiem_img;
	document.getElementById("nocturneimg").src=Game.nocturne_img;
	document.getElementById("preludeimg").src=Game.prelude_img;
	document.getElementById("faroresimg").src= Game.farores_wind_img;
	document.getElementById("firearrowsimg").src= Game.fire_arrows_img;
	document.getElementById("lensimg").src= Game.lens_img;
	document.getElementById("silverscaleimg").src= Game.silver_scale_img;
	document.getElementById("bottleimg").src= Game.bottle_img;
	document.getElementById("slingshotimg").src= Game.slingshot_img;
	document.getElementById("goldengauntletsimg").src= Game.golden_gauntlets_img;
	var all = document.getElementsByClassName('songpics');
	for (var i = 0; i < all.length; i++) {
	all[i].style.width="38px";
	all[i].style.height="38px";
	all[i].style.marginLeft="1px";
	all[i].style.marginBottom="1px";
	all[i].style.marginTop="1px";
	}
	document.getElementById("iWantToRemoveThisButton").innerHTML="Original";
	
	
	
	ItemImages = [Game.farores_wind_img, Game.slingshot_img, Game.slingshot_img, Game.slingshot_img, Game.boomerang_img, Game.silver_scale_img, Game.golden_scale_img, Game.rutos_letter_img, Game.bottle_img, Game.bottle_img, Game.bottle_img, Game.bomb_img, Game.bomb_img, Game.bomb_img, Game.hammer_img, Game.bow_img, Game.bow_img, Game.bow_img, Game.hookshot_img, Game.hookshot_img, Game.goron_bracelet_img, Game.goron_bracelet_img, Game.goron_bracelet_img, Game.mirror_shield_img, Game.magic_img, Game.magic_img, Game.iron_boots_img, Game.kokiri_sword_img, Game.hover_boots_img, Game.wallet1_img, Game.wallet2_img, Game.goron_tunic_img, Game.zora_tunic_img, Game.dins_fire_img, Game.fire_arrows_img, Game.lens_img, Game.prescription_img, Game.claim_check_img, Game.light_arrows_img, Game.lullaby_img, Game.eponas_img, Game.suns_img, Game.sarias_img, Game.storms_img, Game.minuet_img, Game.bolero_img, Game.requiem_img, Game.nocturne_img, Game.time_img];
}

function handleThemes() {
	if(Game.theme == "dark" && Game.themeChange) {
		if (Person.type == "soli") {dark_soli();}
		else if (Person.type == "normie") {dark_normie();}	
		dark_theme();
	}
	if(Game.theme == "light" && Game.themeChange) {
		light_theme();
	}
	
	if (Game.changetheme == 1) {Game.themeChange = true; Game.changetheme = 0;}
}

function dark_theme() {
	Game.themeChange = false;
	document.getElementById("checks_remaining").style.color="lightblue";
	document.getElementById("logically_accessible").style.color="chartreuse";
	var all = document.getElementsByClassName('logic_check_text');
	for (var i = 0; i < all.length; i++) {
	all[i].style.color = 'chartreuse';
	}
	if(document.getElementById('text_dung1') != null) {document.getElementById('text_dung1').style.color = 'lightgreen';}
	if(document.getElementById('text_dung2') != null) {document.getElementById('text_dung2').style.color = '#ff4d4d';}
	if(document.getElementById('text_dung3') != null) {document.getElementById('text_dung3').style.color = 'lightblue';}
	if(document.getElementById('text_dung4') != null) {document.getElementById('text_dung4').style.color = 'lightgreen';}
	if(document.getElementById('text_dung5') != null) {document.getElementById('text_dung5').style.color = '#ff4d4d';}
	if(document.getElementById('text_dung6') != null) {document.getElementById('text_dung6').style.color = 'lightblue';}
	if(document.getElementById('text_gan') != null) {document.getElementById('text_gan').style.color = '#660000';}
	document.body.style.backgroundColor = "#505050";
}


function light_theme() {
	Game.themeChange = false;
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