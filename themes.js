function dark_soli() {
	Game.bomb_bag_img= "./images/explosive505050.png";
	Game.letter_img= "./images/letter505050.png";
	Game.boomerang_img= "./images/boomerang505050.png";
	Game.hookshot_img= "./images/hookshot505050.png";
	Game.bow_img= "./images/bow505050.png";
	Game.goron_bracelet_img= "./images/strength1505050.png";
	Game.lens_img = "./images/lens505050.png";
	Game.golden_gauntlets_img = "./images/strength3505050.png";
	Game.hammer_img= "./images/ham505050.png";
	Game.iron_boots_img= "./images/ironboots505050.png";
	Game.silver_scale_img=  "./images/silverscale505050.png"
	Game.golden_scale_img= "./images/goldenscale505050.png";
	Game.longshot_img= "./images/longshot505050.png";
	Game.silver_gauntlets_img= "./images/strength2505050.png";
	Game.mirror_shield_img= "./images/mirrorshield505050.png";
	Game.dins_fire_img= "./images/dinsfirenew505050.png";
	Game.magic_meter_img= "./images/magic505050.png";
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
	Game.sot_img = "./images/sot505050.png";
	Game.sos_img = "./images/sos505050.png";
	Game.minuet_img = "./images/minuet505050.png";
	Game.bolero_img = "./images/bolero505050.png";
	Game.serenade_img = "./images/serenade505050.png";
	Game.requiem_img = "./images/requiem505050.png";
	Game.nocturne_img = "./images/nocturne505050.png";
	Game.prelude_img = "./images/prelude505050.png";
	Game.bombchu_img = "./images/chux.png"
	if(document.getElementById(dodongosPlacement +"_req1") != null) {document.getElementById(dodongosPlacement +"_req1").src = Game.bomb_bag_img; }
	if(document.getElementById(jabuPlacement +"_req1") != null) {document.getElementById(jabuPlacement +"_req1").src = Game.letter_img; }
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
	if(document.getElementById(spiritPlacement +"_req3") != null) {document.getElementById(spiritPlacement +"_req3").src = Game.bomb_bag_img; }
	if(document.getElementById(spiritPlacement +"_req4") != null) {document.getElementById(spiritPlacement +"_req4").src = Game.hookshot_img; }
	if(document.getElementById(shadowPlacement +"_req1") != null) {document.getElementById(shadowPlacement +"_req1").src = Game.dins_fire_img; }
	if(document.getElementById(shadowPlacement +"_req2") != null) {document.getElementById(shadowPlacement +"_req2").src = Game.magic_meter_img; }
	if(document.getElementById(shadowPlacement +"_req3") != null) {document.getElementById(shadowPlacement +"_req3").src = Game.hover_boots_img; }
	if(document.getElementById(shadowPlacement +"_req4") != null) {document.getElementById(shadowPlacement +"_req4").src = Game.bomb_bag_img; }
	if(document.getElementById(shadowPlacement +"_req5") != null) {document.getElementById(shadowPlacement +"_req5").src = Game.hookshot_img; }
	var temp = 0;
	for (const key of Object.keys(Location_Logic)) {
		if (temp == 256) {break; }	
		if (document.getElementById(key) != null){document.getElementById(key).style.height="21px";}
		if (document.getElementById(key) != null){document.getElementById(key).style.width="29px";}
		document.getElementById("normalColumn1").style.width="125px";
		document.getElementById("normalColumn2").style.width="125px";
		document.getElementById("normalColumn3").style.width="125px";
		document.getElementById("woth_info").style.left="956px";
		document.getElementById("timer").style.left="800px";
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
	document.getElementById("chuButton").src= Game.bombchu_img;
	document.getElementById("chuButton").style.opacity = 1;
	document.getElementById("gan_req2").src= Game.light_arrows_img;
	document.getElementById("gan_req1").src= Game.magic_meter_img;
	document.getElementById("gan_req3").src= Game.bow_img;
	document.getElementById("lullabyimg").src=Game.lullaby_img;
	document.getElementById("eponasimg").src=Game.eponas_img;
	document.getElementById("sariasimg").src=Game.sarias_img;
	document.getElementById("sunsimg").src=Game.suns_img;
	document.getElementById("sotimg").src=Game.sot_img;
	document.getElementById("sosimg").src=Game.sos_img;
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
	document.getElementById("iWantToRemoveThisButton").innerHTML="Correct Theme";
}

function dark_normie() {
	Game.bomb_bag_img= "./normal/bombbag.png";
	Game.letter_img= "./normal/letter.png";
	Game.boomerang_img= "./normal/boomerang.png";
	Game.hookshot_img= "./normal/hookshot.png";
	Game.bow_img= "./normal/bow.png";
	Game.goron_bracelet_img= "./normal/strength1.png";
	Game.lens_img = "./normal/lens.png";
	Game.golden_gauntlets_img = "./normal/strength3.png";
	Game.hammer_img= "./normal/hammer.png";
	Game.iron_boots_img= "./normal/ironboots.png";
	Game.silver_scale_img=  "./normal/silverscale.png"
	Game.golden_scale_img= "./normal/goldenscale.png";
	Game.longshot_img= "./normal/longshot.png";
	Game.silver_gauntlets_img= "./normal/strength2.png";
	Game.mirror_shield_img= "./normal/mirrorshield.png";
	Game.dins_fire_img= "./normal/dinsfire.png";
	Game.magic_meter_img= "./normal/magic.png";
	Game.hover_boots_img= "./normal/hoverboots.png";
	Game.light_arrows_img= "./normal/lightarrows.png";
	Game.fire_arrows_img= "./normal/firearrows.png";
	Game.farores_wind_img = "./normal/farores.png";
	Game.bottle_img = "./normal/bottle.png";
	Game.golden_gauntlets_img = "./normal/strength3.png";
	Game.lens_img = "./normal/lens.png";
	Game.slingshot_img = "./normal/slingshot.png";
	Game.lullaby_img = "./normal/lullaby.png";
	Game.eponas_img = "./normal/eponas.png";
	Game.sarias_img = "./normal/sarias.png";
	Game.suns_img = "./normal/suns.png";
	Game.sot_img = "./normal/sot.png";
	Game.sos_img = "./normal/sos.png";
	Game.minuet_img = "./normal/minuet.png";
	Game.bolero_img = "./normal/bolero.png";
	Game.serenade_img = "./normal/serenade.png";
	Game.requiem_img = "./normal/requiem.png";
	Game.nocturne_img = "./normal/nocturne.png";
	Game.prelude_img = "./normal/prelude.png";
	Game.bombchu_img = "./normal/bombchu.png";
	if(document.getElementById(dodongosPlacement +"_req1") != null) {document.getElementById(dodongosPlacement +"_req1").src = Game.bomb_bag_img; }
	if(document.getElementById(jabuPlacement +"_req1") != null) {document.getElementById(jabuPlacement +"_req1").src = Game.letter_img; }
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
	if(document.getElementById(spiritPlacement +"_req3") != null) {document.getElementById(spiritPlacement +"_req3").src = Game.bomb_bag_img; }
	if(document.getElementById(spiritPlacement +"_req4") != null) {document.getElementById(spiritPlacement +"_req4").src = Game.hookshot_img; }
	if(document.getElementById(shadowPlacement +"_req1") != null) {document.getElementById(shadowPlacement +"_req1").src = Game.dins_fire_img; }
	if(document.getElementById(shadowPlacement +"_req2") != null) {document.getElementById(shadowPlacement +"_req2").src = Game.magic_meter_img; }
	if(document.getElementById(shadowPlacement +"_req3") != null) {document.getElementById(shadowPlacement +"_req3").src = Game.hover_boots_img; }
	if(document.getElementById(shadowPlacement +"_req4") != null) {document.getElementById(shadowPlacement +"_req4").src = Game.bomb_bag_img; }
	if(document.getElementById(shadowPlacement +"_req5") != null) {document.getElementById(shadowPlacement +"_req5").src = Game.hookshot_img; }
	var temp = 0;
	document.getElementById("normalColumn1").style.width="132px";
	document.getElementById("normalColumn2").style.width="132px";
	document.getElementById("normalColumn3").style.width="132px";
	document.getElementById("woth_info").style.left="976px";
	document.getElementById("timer").style.left="820px";
	document.getElementById("skulls_in_logic").style.left="889px";
	document.getElementById("dung4_icon").style.left="948px";
	document.getElementById("dung5_icon").style.left="948px";
	document.getElementById("dung6_icon").style.left="948px";
	document.getElementById("dung7_icon").style.left="948px";
	document.getElementById("dung8_icon").style.left="948px";
	document.getElementById("dung9_icon").style.left="948px";
	for (const key of Object.keys(Location_Logic)) {
		if (temp == 114) {break; }	
		if (document.getElementById(key) != null){document.getElementById(key).style.height="29px";}
		if (document.getElementById(key) != null){document.getElementById(key).style.width="38px";}
		if (temp >= 0 && temp <=5) {document.getElementById(key).style.backgroundImage = "url('./normal/kokiri.jpg')";}
		if (temp >= 6 && temp <=7) {document.getElementById(key).style.backgroundImage = "url('./normal/cow.jpg')";}
		if (temp >= 8 && temp <=12) {document.getElementById(key).style.backgroundImage = "url('./normal/Hyrule_Field_(Ocarina_of_Time).png')";}
		if (temp >= 13 && temp <=15) {document.getElementById(key).style.backgroundImage = "url('./normal/Gerudo_Valley.png')";}
		if (temp >= 16 && temp <=21) {document.getElementById(key).style.backgroundImage = "url('./normal/Lake_Hylia_(Ocarina_of_Time).png')";}
		if (temp >= 22 && temp <=27) {document.getElementById(key).style.backgroundImage = "url('./normal/market.jpg')";}
		if (temp >= 28 && temp <=28) {document.getElementById(key).style.backgroundImage = "url('./normal/dinsfairy.jpg')";}
		if (temp >= 29 && temp <=29) {document.getElementById(key).style.backgroundImage = "url('./normal/gfairy.jpg')";}
		if (temp >= 30 && temp <=30) {document.getElementById(key).style.backgroundImage = "url('./normal/la.jpg')";}
		if (temp >= 31 && temp <=33) {document.getElementById(key).style.backgroundImage = "url('./normal/fountain.jpg')";}
		if (temp >= 34 && temp <=37) {document.getElementById(key).style.backgroundImage = "url('./normal/ice.jpg')";}
		if (temp >= 38 && temp <=44) {document.getElementById(key).style.backgroundImage = "url('./normal/deku.png')";}
		if (temp >= 45 && temp <=51) {document.getElementById(key).style.backgroundImage = "url('./normal/Skull_Kid_(Ocarina_of_Time).png')";}
		if (temp >= 52 && temp <=52) {document.getElementById(key).style.backgroundImage = "url('./normal/sfm.jpg')";}
		if (temp >= 53 && temp <=59) {document.getElementById(key).style.backgroundImage = "url('./normal/goron.jpg')";}
		if (temp >= 60 && temp <=66) {document.getElementById(key).style.backgroundImage = "url('./normal/0272-Dodongos-Cavern.png')";}
		if (temp >= 67 && temp <=71) {document.getElementById(key).style.backgroundImage = "url('./normal/OoT_Death_Mountain_Trail.jpg')";}
		if (temp >= 72 && temp <=75) {document.getElementById(key).style.backgroundImage = "url('./normal/crater.png')";}
		if (temp >= 76 && temp <=88) {document.getElementById(key).style.backgroundImage = "url('./normal/kakiriko.png')";}
		if (temp >= 89 && temp <=95) {document.getElementById(key).style.backgroundImage = "url('./normal/graveyard.png')";}
		if (temp >= 96 && temp <=100) {document.getElementById(key).style.backgroundImage = "url('./normal/river.jpg')";}
		if (temp >= 101 && temp <=103) {document.getElementById(key).style.backgroundImage = "url('./normal/ZoraThroneRoomOoT.png')";}
		if (temp >= 104 && temp <=105) {document.getElementById(key).style.backgroundImage = "url('./normal/Desertcolossus2.jpg')";}
		if (temp >= 106 && temp <=106) {document.getElementById(key).style.backgroundImage = "url('./normal/Haunted_Wasteland.jpg')";}
		if (temp >= 107 && temp <=109) {document.getElementById(key).style.backgroundImage = "url('./normal/fortress.jpg')";}
		if (temp >= 110 && temp <=113) {document.getElementById(key).style.backgroundImage = "url('./normal/jabu.jpg')";}
	temp +=1;
	}
	document.getElementById("chuButton").src= Game.bombchu_img;
	document.getElementById("chuButton").style.opacity = .4;
	document.getElementById("gan_req2").src= Game.light_arrows_img;
	document.getElementById("gan_req1").src= Game.magic_meter_img;
	document.getElementById("gan_req3").src= Game.bow_img;
	document.getElementById("lullabyimg").src=Game.lullaby_img;
	document.getElementById("eponasimg").src=Game.eponas_img;
	document.getElementById("sariasimg").src=Game.sarias_img;
	document.getElementById("sunsimg").src=Game.suns_img;
	document.getElementById("sotimg").src=Game.sot_img;
	document.getElementById("sosimg").src=Game.sos_img;
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
	document.getElementById("iWantToRemoveThisButton").innerHTML="tagnia";
}

function dark_tagnia() {
	Game.bomb_bag_img= "https://i.imgur.com/TjVjKRn.png";
	Game.letter_img= "https://i.imgur.com/RAP8wMy.png";
	Game.boomerang_img= "https://i.imgur.com/kdy5BRJ.png";
	Game.hookshot_img= "https://i.imgur.com/wZLWSuW.png";
	Game.bow_img= "https://i.imgur.com/gtzNOGr.png";
	Game.goron_bracelet_img= "https://i.imgur.com/KkYqAOL.png";
	Game.hammer_img= "https://i.imgur.com/xYItW1t.png";
	Game.iron_boots_img= "https://i.imgur.com/m3cAI1P.png";
	Game.silver_scale_img= "https://i.imgur.com/s1YGBfp.png";
	Game.golden_scale_img= "https://i.imgur.com/3vEpKLx.png";
	Game.longshot_img= "https://i.imgur.com/3WbyXbi.png";
	Game.silver_gauntlets_img= "https://i.imgur.com/K6198X3.png";
	Game.mirror_shield_img= "https://i.imgur.com/RbIuZyE.png";
	Game.dins_fire_img= "https://i.imgur.com/QlwigGB.png";
	Game.magic_meter_img= "https://i.imgur.com/XRsHr3v.png";
	Game.hover_boots_img= "https://i.imgur.com/INd88ZQ.png";
	if(document.getElementById(dodongosPlacement +"_req1") != null) {document.getElementById(dodongosPlacement +"_req1").src = Game.bomb_bag_img; }
	if(document.getElementById(jabuPlacement +"_req1") != null) {document.getElementById(jabuPlacement +"_req1").src = Game.letter_img; }
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
	if(document.getElementById(spiritPlacement +"_req3") != null) {document.getElementById(spiritPlacement +"_req3").src = Game.bomb_bag_img; }
	if(document.getElementById(spiritPlacement +"_req4") != null) {document.getElementById(spiritPlacement +"_req4").src = Game.hookshot_img; }
	if(document.getElementById(shadowPlacement +"_req1") != null) {document.getElementById(shadowPlacement +"_req1").src = Game.dins_fire_img; }
	if(document.getElementById(shadowPlacement +"_req2") != null) {document.getElementById(shadowPlacement +"_req2").src = Game.magic_meter_img; }
	if(document.getElementById(shadowPlacement +"_req3") != null) {document.getElementById(shadowPlacement +"_req3").src = Game.hover_boots_img; }
	if(document.getElementById(shadowPlacement +"_req4") != null) {document.getElementById(shadowPlacement +"_req4").src = Game.bomb_bag_img; }
	if(document.getElementById(shadowPlacement +"_req5") != null) {document.getElementById(shadowPlacement +"_req5").src = Game.hookshot_img; }
	document.getElementById("gan_req2").src="https://i.imgur.com/1TgxgFJ.png";
	document.getElementById("gan_req1").src=Game.magic_meter_img;
	document.getElementById("gan_req3").src=Game.bow_img;
	document.getElementById("lullabyimg").src="https://i.imgur.com/OXWzSgW.png";
	document.getElementById("eponasimg").src="https://i.imgur.com/ERy6k4d.png";
	document.getElementById("sariasimg").src="https://i.imgur.com/r7zkrIQ.png";
	document.getElementById("sunsimg").src="https://i.imgur.com/cgrvqxW.png";
	document.getElementById("sotimg").src="https://i.imgur.com/cz9mQKV.png";
	document.getElementById("sosimg").src="https://i.imgur.com/CxUPmOZ.png";
	document.getElementById("minuetimg").src="https://i.imgur.com/i67LLTT.png";
	document.getElementById("boleroimg").src="https://i.imgur.com/nmiHshX.png";
	document.getElementById("serenadeimg").src="https://i.imgur.com/xSz72al.png";
	document.getElementById("requiemimg").src="https://i.imgur.com/iThvSVN.png";
	document.getElementById("nocturneimg").src="https://i.imgur.com/VQzHM86.png";
	document.getElementById("preludeimg").src="https://i.imgur.com/awQDIDe.png";
	document.getElementById("faroresimg").src="https://i.imgur.com/D20ZL4Q.png";
	document.getElementById("bottleimg").src="https://i.imgur.com/qvbNLJ5.png";
	document.getElementById("firearrowsimg").src="https://i.imgur.com/bToAQj0.png";
	document.getElementById("silverscaleimg").src="https://i.imgur.com/s1YGBfp.png";
	var all = document.getElementsByClassName('songpics');
	for (var i = 0; i < all.length; i++) {
	all[i].style.width="40px";
	all[i].style.height="40px";
	all[i].style.marginLeft="0px";
	all[i].style.marginBottom="0px";
	all[i].style.marginTop="0px";
	}
	document.getElementById("iWantToRemoveThisButton").innerHTML="Appease Soli";
}

function light_soli() {
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
		if(document.getElementById(dodongosPlacement +"_req1") != null) {document.getElementById(dodongosPlacement +"_req1").src = Game.bomb_bag_img; }
		if(document.getElementById(jabuPlacement +"_req1") != null) {document.getElementById(jabuPlacement +"_req1").src = Game.letter_img; }
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
		if(document.getElementById(spiritPlacement +"_req3") != null) {document.getElementById(spiritPlacement +"_req3").src = Game.bomb_bag_img; }
		if(document.getElementById(spiritPlacement +"_req4") != null) {document.getElementById(spiritPlacement +"_req4").src = Game.hookshot_img; }
		if(document.getElementById(shadowPlacement +"_req1") != null) {document.getElementById(shadowPlacement +"_req1").src = Game.dins_fire_img; }
		if(document.getElementById(shadowPlacement +"_req2") != null) {document.getElementById(shadowPlacement +"_req2").src = Game.magic_meter_img; }
		if(document.getElementById(shadowPlacement +"_req3") != null) {document.getElementById(shadowPlacement +"_req3").src = Game.hover_boots_img; }
		if(document.getElementById(shadowPlacement +"_req4") != null) {document.getElementById(shadowPlacement +"_req4").src = Game.bomb_bag_img; }
		if(document.getElementById(shadowPlacement +"_req5") != null) {document.getElementById(shadowPlacement +"_req5").src = Game.hookshot_img; }
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
}

function handleThemes() {
	if(Game.theme == "dark" && Game.themeChange) {
		if (Person.type == "soli") {dark_soli();}
		else if (Person.type == "normie") {dark_normie();}
		else if (Person.type = "tagnia") {dark_tagnia();}	
		dark_theme();
	}
	if(Game.theme == "light" && Game.themeChange) {
		if (Person.type == "soli") {light_soli();}
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