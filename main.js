function Update() {
	const keys = Object.keys(Location_Logic);
	if(Game.theme == "dark" && Game.themeChange) {
		if (Person.type == "soli") {
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
			if(document.getElementById("dod_req1") != null) {document.getElementById("dod_req1").src = Game.bomb_bag_img; }
			if(document.getElementById("jab_req1") != null) {document.getElementById("jab_req1").src = Game.letter_img; }
			if(document.getElementById("jab_req2") != null) {document.getElementById("jab_req2").src = Game.boomerang_img; }
			if(document.getElementById("for_req1") != null) {document.getElementById("for_req1").src = Game.hookshot_img; }
			if(document.getElementById("for_req2") != null) {document.getElementById("for_req2").src = Game.bow_img; }
			if(document.getElementById("for_req3") != null) {document.getElementById("for_req3").src = Game.goron_bracelet_img; }
			if(document.getElementById("fir_req1") != null) {document.getElementById("fir_req1").src = Game.hammer_img; }
			if(document.getElementById("wat_req1") != null) {document.getElementById("wat_req1").src = Game.iron_boots_img; }
			if(document.getElementById("wat_req2") != null) {document.getElementById("wat_req2").src = Game.golden_scale_img; }
			if(document.getElementById("wat_req3") != null) {document.getElementById("wat_req3").src = Game.longshot_img; }
			if(document.getElementById("spi_req1") != null) {document.getElementById("spi_req1").src = Game.silver_gauntlets_img; }
			if(document.getElementById("spi_req2") != null) {document.getElementById("spi_req2").src = Game.mirror_shield_img; }
			if(document.getElementById("spi_req3") != null) {document.getElementById("spi_req3").src = Game.bomb_bag_img; }
			if(document.getElementById("spi_req4") != null) {document.getElementById("spi_req4").src = Game.hookshot_img; }
			if(document.getElementById("sha_req1") != null) {document.getElementById("sha_req1").src = Game.dins_fire_img; }
			if(document.getElementById("sha_req2") != null) {document.getElementById("sha_req2").src = Game.magic_meter_img; }
			if(document.getElementById("sha_req3") != null) {document.getElementById("sha_req3").src = Game.hover_boots_img; }
			if(document.getElementById("sha_req4") != null) {document.getElementById("sha_req4").src = Game.bomb_bag_img; }
			if(document.getElementById("sha_req5") != null) {document.getElementById("sha_req5").src = Game.hookshot_img; }
			var temp = 0;
			for (const key of keys) {
				if (temp == 256) {break; }	
				if (document.getElementById(key) != null){document.getElementById(key).style.height="21px";}
				if (document.getElementById(key) != null){document.getElementById(key).style.width="29px";}
				document.getElementById("normalColumn1").style.width="125px";
				document.getElementById("normalColumn2").style.width="125px";
				document.getElementById("normalColumn3").style.width="125px";
				document.getElementById("chuButton").style.left="913px";
				document.getElementById("woth_info").style.left="956px";
				document.getElementById("timer").style.left="800px";
				document.getElementById("skulls_in_logic").style.left="867px";
				document.getElementById("forest_medallion").style.left="928px";
				document.getElementById("fire_medallion").style.left="928px";
				document.getElementById("water_medallion").style.left="928px";
				document.getElementById("gen1_medallion").style.left="928px";
				document.getElementById("gen2_medallion").style.left="928px";
				document.getElementById("gen3_medallion").style.left="928px";
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
		else if (Person.type == "normie") {
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
			if(document.getElementById("dod_req1") != null) {document.getElementById("dod_req1").src = Game.bomb_bag_img; }
			if(document.getElementById("jab_req1") != null) {document.getElementById("jab_req1").src = Game.letter_img; }
			if(document.getElementById("jab_req2") != null) {document.getElementById("jab_req2").src = Game.boomerang_img; }
			if(document.getElementById("for_req1") != null) {document.getElementById("for_req1").src = Game.hookshot_img; }
			if(document.getElementById("for_req2") != null) {document.getElementById("for_req2").src = Game.bow_img; }
			if(document.getElementById("for_req3") != null) {document.getElementById("for_req3").src = Game.goron_bracelet_img; }
			if(document.getElementById("fir_req1") != null) {document.getElementById("fir_req1").src = Game.hammer_img; }
			if(document.getElementById("wat_req1") != null) {document.getElementById("wat_req1").src = Game.iron_boots_img; }
			if(document.getElementById("wat_req2") != null) {document.getElementById("wat_req2").src = Game.golden_scale_img; }
			if(document.getElementById("wat_req3") != null) {document.getElementById("wat_req3").src = Game.longshot_img; }
			if(document.getElementById("spi_req1") != null) {document.getElementById("spi_req1").src = Game.silver_gauntlets_img; }
			if(document.getElementById("spi_req2") != null) {document.getElementById("spi_req2").src = Game.mirror_shield_img; }
			if(document.getElementById("spi_req3") != null) {document.getElementById("spi_req3").src = Game.bomb_bag_img; }
			if(document.getElementById("spi_req4") != null) {document.getElementById("spi_req4").src = Game.hookshot_img; }
			if(document.getElementById("sha_req1") != null) {document.getElementById("sha_req1").src = Game.dins_fire_img; }
			if(document.getElementById("sha_req2") != null) {document.getElementById("sha_req2").src = Game.magic_meter_img; }
			if(document.getElementById("sha_req3") != null) {document.getElementById("sha_req3").src = Game.hover_boots_img; }
			if(document.getElementById("sha_req4") != null) {document.getElementById("sha_req4").src = Game.bomb_bag_img; }
			if(document.getElementById("sha_req5") != null) {document.getElementById("sha_req5").src = Game.hookshot_img; }
			var temp = 0;
			document.getElementById("normalColumn1").style.width="132px";
			document.getElementById("normalColumn2").style.width="132px";
			document.getElementById("normalColumn3").style.width="132px";
			document.getElementById("chuButton").style.left="933px";
			document.getElementById("woth_info").style.left="976px";
			document.getElementById("timer").style.left="820px";
			document.getElementById("skulls_in_logic").style.left="889px";
			document.getElementById("forest_medallion").style.left="948px";
			document.getElementById("fire_medallion").style.left="948px";
			document.getElementById("water_medallion").style.left="948px";
			document.getElementById("gen1_medallion").style.left="948px";
			document.getElementById("gen2_medallion").style.left="948px";
			document.getElementById("gen3_medallion").style.left="948px";
			for (const key of keys) {
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
		else if (Person.type = "tagnia") {
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
			if(document.getElementById("dod_req1") != null) {document.getElementById("dod_req1").src = Game.bomb_bag_img; }
			if(document.getElementById("jab_req1") != null) {document.getElementById("jab_req1").src = Game.letter_img; }
			if(document.getElementById("jab_req2") != null) {document.getElementById("jab_req2").src = Game.boomerang_img; }
			if(document.getElementById("for_req1") != null) {document.getElementById("for_req1").src = Game.hookshot_img; }
			if(document.getElementById("for_req2") != null) {document.getElementById("for_req2").src = Game.bow_img; }
			if(document.getElementById("for_req3") != null) {document.getElementById("for_req3").src = Game.goron_bracelet_img; }
			if(document.getElementById("fir_req1") != null) {document.getElementById("fir_req1").src = Game.hammer_img; }
			if(document.getElementById("wat_req1") != null) {document.getElementById("wat_req1").src = Game.iron_boots_img; }
			if(document.getElementById("wat_req2") != null) {document.getElementById("wat_req2").src = Game.golden_scale_img; }
			if(document.getElementById("wat_req3") != null) {document.getElementById("wat_req3").src = Game.longshot_img; }
			if(document.getElementById("spi_req1") != null) {document.getElementById("spi_req1").src = Game.silver_gauntlets_img; }
			if(document.getElementById("spi_req2") != null) {document.getElementById("spi_req2").src = Game.mirror_shield_img; }
			if(document.getElementById("spi_req3") != null) {document.getElementById("spi_req3").src = Game.bomb_bag_img; }
			if(document.getElementById("spi_req4") != null) {document.getElementById("spi_req4").src = Game.hookshot_img; }
			if(document.getElementById("sha_req1") != null) {document.getElementById("sha_req1").src = Game.dins_fire_img; }
			if(document.getElementById("sha_req2") != null) {document.getElementById("sha_req2").src = Game.magic_meter_img; }
			if(document.getElementById("sha_req3") != null) {document.getElementById("sha_req3").src = Game.hover_boots_img; }
			if(document.getElementById("sha_req4") != null) {document.getElementById("sha_req4").src = Game.bomb_bag_img; }
			if(document.getElementById("sha_req5") != null) {document.getElementById("sha_req5").src = Game.hookshot_img; }
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
		if(document.getElementById("dod_req1") != null) {document.getElementById("dod_req1").src = Game.bomb_bag_img; }
			if(document.getElementById("jab_req1") != null) {document.getElementById("jab_req1").src = Game.letter_img; }
			if(document.getElementById("jab_req2") != null) {document.getElementById("jab_req2").src = Game.boomerang_img; }
			if(document.getElementById("for_req1") != null) {document.getElementById("for_req1").src = Game.hookshot_img; }
			if(document.getElementById("for_req2") != null) {document.getElementById("for_req2").src = Game.bow_img; }
			if(document.getElementById("for_req3") != null) {document.getElementById("for_req3").src = Game.goron_bracelet_img; }
			if(document.getElementById("fir_req1") != null) {document.getElementById("fir_req1").src = Game.hammer_img; }
			if(document.getElementById("wat_req1") != null) {document.getElementById("wat_req1").src = Game.iron_boots_img; }
			if(document.getElementById("wat_req2") != null) {document.getElementById("wat_req2").src = Game.golden_scale_img; }
			if(document.getElementById("wat_req3") != null) {document.getElementById("wat_req3").src = Game.longshot_img; }
			if(document.getElementById("spi_req1") != null) {document.getElementById("spi_req1").src = Game.silver_gauntlets_img; }
			if(document.getElementById("spi_req2") != null) {document.getElementById("spi_req2").src = Game.mirror_shield_img; }
			if(document.getElementById("spi_req3") != null) {document.getElementById("spi_req3").src = Game.bomb_bag_img; }
			if(document.getElementById("spi_req4") != null) {document.getElementById("spi_req4").src = Game.hookshot_img; }
			if(document.getElementById("sha_req1") != null) {document.getElementById("sha_req1").src = Game.dins_fire_img; }
			if(document.getElementById("sha_req2") != null) {document.getElementById("sha_req2").src = Game.magic_meter_img; }
			if(document.getElementById("sha_req3") != null) {document.getElementById("sha_req3").src = Game.hover_boots_img; }
			if(document.getElementById("sha_req4") != null) {document.getElementById("sha_req4").src = Game.bomb_bag_img; }
			if(document.getElementById("sha_req5") != null) {document.getElementById("sha_req5").src = Game.hookshot_img; }
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

	if(Known.kokiri_sword == true) {Logic.kokiri_sword = Location_Logic[Location.kokiri_sword];}
	
	if(Known.farores_wind == true) {Logic.farores_wind = Location_Logic[Location.farores_wind];} else{Logic.farores_wind = false;}
	
	if(Known.slingshot1 == true) {Logic.slingshot1 = Location_Logic[Location.slingshot1];} 
	if(Known.slingshot2 == true) {Logic.slingshot2 = Location_Logic[Location.slingshot2];}
	if(Known.slingshot3 == true) {Logic.slingshot3 = Location_Logic[Location.slingshot3];}
	Logic.slingshot = Logic.slingshot1 || Logic.slingshot2 || Logic.slingshot3;
	
	if(Known.boomerang == true) {Logic.boomerang = Location_Logic[Location.boomerang];} else{Logic.boomerang = false;}
	
	if(Known.rutos_letter == true) {Logic.rutos_letter = Location_Logic[Location.rutos_letter];} else{Logic.rutos_letter = false;}
	if(Known.bottle1 == true) {Logic.bottle1 = Location_Logic[Location.bottle1];}
	if(Known.bottle2 == true) {Logic.bottle2 = Location_Logic[Location.bottle2];}
	if(Known.bottle3 == true) {Logic.bottle3 = Location_Logic[Location.bottle3];}
	Logic.bottle = (Logic.rutos_letter && ((Logic.bomb_bag && Logic.lullaby) || Logic.silver_scale)) || Logic.bottle1 || Logic.bottle2 || Logic.bottle3;
	
	if(Known.scale1 == true) {Logic.scale1 = Location_Logic[Location.scale1]; }
	if(Known.scale2 == true) {Logic.scale2 = Location_Logic[Location.scale2]; }
	if(Game.scale2 == true) {document.getElementById("silverscaleimg").src = Game.golden_scale_img;}
	Logic.silver_scale = Logic.scale1 || Logic.scale2;
	Logic.golden_scale = Logic.scale1 && Logic.scale2;
	
	if(Known.bomb_bag1 == true) {Logic.bomb_bag1 = Location_Logic[Location.bomb_bag1];}
	if(Known.bomb_bag2 == true) {Logic.bomb_bag2 = Location_Logic[Location.bomb_bag2];}
	if(Known.bomb_bag3 == true) {Logic.bomb_bag3 = Location_Logic[Location.bomb_bag3];}
	Logic.bomb_bag = Logic.bomb_bag1 || Logic.bomb_bag2 || Logic.bomb_bag3;
	
	if(Known.hammer == true) {Logic.hammer = Location_Logic[Location.hammer];} else{Logic.hammer= false;}
	
	if(Known.bow1 == true) {Logic.bow1 = Location_Logic[Location.bow1];}
	if(Known.bow2 == true) {Logic.bow2 = Location_Logic[Location.bow2];}
	if(Known.bow3 == true) {Logic.bow3 = Location_Logic[Location.bow3];}
	Logic.bow = Logic.bow1 || Logic.bow2 || Logic.bow3;
	
	if(Known.hookshot1 == true) {Logic.hookshot1 = Location_Logic[Location.hookshot1];}
	if(Known.hookshot2 == true) {Logic.hookshot2 = Location_Logic[Location.hookshot2];}
	Logic.hookshot = Logic.hookshot1 || Logic.hookshot2;
	Logic.longshot = Logic.hookshot1 && Logic.hookshot2;
	if(Known.strength1 == true) {Logic.strength1 = Location_Logic[Location.strength1];}
	if(Known.strength2 == true) {Logic.strength2 = Location_Logic[Location.strength2];}
	if(Known.strength3 == true) {Logic.strength3 = Location_Logic[Location.strength3];}
	Logic.goron_bracelet = Logic.strength1 || Logic.strength2 || Logic.strength3;
	Logic.silver_gauntlets = (Logic.strength1 && Logic.strength2) || (Logic.strength1 && Logic.strength3) || (Logic.strength2 && Logic.strength3)
	Logic.golden_gauntlets = Logic.strength1 && Logic.strength2 && Logic.strength3;
	
	if(Known.mirror_shield == true) {Logic.mirror_shield = Location_Logic[Location.mirror_shield];} else{Logic.mirror_shield = false;}
	
	if(Known.big_poe == true) {Logic.big_poe = Location_Logic[Location.big1];} else{Logic.big_poe= false;}
	
	if(Known.iron_boots == true) {Logic.iron_boots = Location_Logic[Location.iron_boots];} else{Logic.iron_boots = false;}
	if(Known.hover_boots == true) {Logic.hover_boots = Location_Logic[Location.hover_boots];} else{Logic.hover_boots = false;}
	
	if(Known.magic1 == true) {Logic.magic1 = Location_Logic[Location.magic1];}
	if(Known.magic2 == true) {Logic.magic2 = Location_Logic[Location.magic2];}
	Logic.magic = Logic.magic1 || Logic.magic2;
	
	if(Known.dins_fire == true) {Logic.dins_fire = Location_Logic[Location.dins_fire];} else{Logic.dins_fire = false;}
	if(Known.fire_arrows == true) {Logic.fire_arrows = Location_Logic[Location.fire_arrows];} else{Logic.fire_arrows = false;}
	
	if(Known.wallet1 == true) {Logic.wallet1 = Location_Logic[Location.wallet1];}
	if(Known.wallet2 == true) {Logic.wallet2 = Location_Logic[Location.wallet2];}
	Logic.adults_wallet = Logic.wallet1 || Logic.wallet2;
	Logic.giants_wallet = Logic.wallet1 && Logic.wallet2;
	
	if(Known.goron_tunic == true) {Logic.goron_tunic = Location_Logic[Location.goron_tunic];} else{Logic.goron_tunic = false;}
	if(Known.zora_tunic == true) {Logic.zora_tunic = Location_Logic[Location.zora_tunic];} else{Logic.zora_tunic = false;}
	if(Known.lens_of_truth == true) {Logic.lens_of_truth = Location_Logic[Location.lens_of_truth];} else{Logic.lens_of_truth = false;}
	if(Known.stone_of_agony == true) {Logic.stone_of_agony = Location_Logic[Location.stone_of_agony];} else{Logic.stone_of_agony = false;}
	if(Known.prescription == true) {Logic.prescription = Location_Logic[Location.prescription];} else{Logic.prescription = false;}
	if(Known.claim_check == true) {Logic.claim_check = Location_Logic[Location.claim_check];} else{Logic.claim_check = false;}
	
	if(Known.light_arrows == true) {Logic.light_arrows = Location_Logic[Location.light_arrows];}
	
	if(Known.lullaby == true) {Logic.lullaby = Location_Logic[Location.lullaby]; }
	if(Known.eponas == true) {Logic.eponas = Location_Logic[Location.eponas]; }
	if(Known.sarias == true) {Logic.sarias = Location_Logic[Location.sarias]; }
	if(Known.suns_song == true) {Logic.suns_song = Location_Logic[Location.suns_song]; }
	if(Known.song_of_time == true) {Logic.song_of_time = Location_Logic[Location.song_of_time]; }
	if(Known.song_of_storms == true) {Logic.song_of_storms = Location_Logic[Location.song_of_storms]; }
	if(Known.minuet == true) {Logic.minuet = Location_Logic[Location.minuet]; }
	if(Known.bolero == true) {Logic.bolero = Location_Logic[Location.bolero]; }
	if(Known.serenade == true) {Logic.serenade = Location_Logic[Location.serenade]; }
	if(Known.requiem == true) {Logic.requiem = Location_Logic[Location.requiem]; }
	if(Known.nocturne == true) {Logic.nocturne = Location_Logic[Location.nocturne]; }
	if(Known.prelude == true) {Logic.prelude = Location_Logic[Location.prelude]; }
	
	Logic.forest_boss_key = Logic.forced_forest_boss_key;
	Logic.fire_boss_key = Logic.forced_fire_boss_key;
	Logic.water_boss_key = Logic.forced_water_boss_key;
	Logic.spirit_boss_key = Logic.forced_spirit_boss_key;
	Logic.shadow_boss_key = Logic.forced_shadow_boss_key;
	if(Game.forest_boss_key == true) {Logic.forest_boss_key = Location_Logic[Location.forest_boss_key]; }
	if(Game.fire_boss_key == true) {Logic.fire_boss_key = Location_Logic[Location.fire_boss_key]; }
	if(Game.water_boss_key == true) {Logic.water_boss_key = Location_Logic[Location.water_boss_key]; }
	if(Game.spirit_boss_key == true) {Logic.spirit_boss_key = Location_Logic[Location.spirit_boss_key]; }
	if(Game.shadow_boss_key == true) {Logic.shadow_boss_key = Location_Logic[Location.shadow_boss_key]; }
	
	if(Logic.forest_medallion_location == "deku") {if (document.getElementById("deku_queen_gohma") == null) {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.deku_queen_gohma; Location.forest_medallion = "deku_queen_gohma";}
	if(Logic.forest_medallion_location == "dodongos") {if (document.getElementById("dodongos_king_dodongo") == null) {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.dodongos_king_dodongo;Location.forest_medallion = "dodongos_king_dodongo";}
	if(Logic.forest_medallion_location == "jabu") {if (document.getElementById("jabu_barinade") == null) {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.jabu_barinade; Location.forest_medallion = "jabu_barinade";}
	if(Logic.forest_medallion_location == "forest") {if (document.getElementById("forest14") == null) {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.forest14; Location.forest_medallion = "forest14";}
	if(Logic.forest_medallion_location == "fire") {if (document.getElementById("fire6") == null) {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.fire6; Location.forest_medallion = "fire6";}
	if(Logic.forest_medallion_location == "water") {if (document.getElementById("water11") == null) {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.water11; Location.forest_medallion = "water11";}
	if(Logic.forest_medallion_location == "spirit") {if (document.getElementById("spirit20") == null) {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.spirit20; Location.forest_medallion = "spirit20";}
	if(Logic.forest_medallion_location == "shadow") {if (document.getElementById("shadow18") == null) {Game.forest_medallion = true;} Logic.forest_medallion = Location_Logic.shadow18; Location.forest_medallion = "shadow18";}
	if(Logic.forest_medallion_location == "pocket") {Game.forest_medallion = true; Logic.forest_medallion = true;}
	
	if(Logic.fire_medallion_location == "deku") {if (document.getElementById("deku_queen_gohma") == null) {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.deku_queen_gohma; Location.fire_medallion = "deku_queen_gohma";}
	if(Logic.fire_medallion_location == "dodongos") {if (document.getElementById("dodongos_king_dodongo") == null) {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.dodongos_king_dodongo; Location.fire_medallion = "dodongos_king_dodongo";}
	if(Logic.fire_medallion_location == "jabu") {if (document.getElementById("jabu_barinade") == null) {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.jabu_barinade; Location.fire_medallion = "jabu_barinade";}
	if(Logic.fire_medallion_location == "forest") {if (document.getElementById("forest14") == null) {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.forest14; Location.fire_medallion = "forest14";}
	if(Logic.fire_medallion_location == "fire") {if (document.getElementById("fire6") == null) {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.fire6; Location.fire_medallion = "fire6";}
	if(Logic.fire_medallion_location == "water") {if (document.getElementById("water11") == null) {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.water11; Location.fire_medallion = "water11";}
	if(Logic.fire_medallion_location == "spirit") {if (document.getElementById("spirit20") == null) {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.spirit20; Location.fire_medallion = "spirit20";}
	if(Logic.fire_medallion_location == "shadow") {if (document.getElementById("shadow18") == null) {Game.fire_medallion = true;} Logic.fire_medallion = Location_Logic.shadow18; Location.fire_medallion = "shadow18";}
	if(Logic.fire_medallion_location == "pocket") {Game.fire_medallion = true; Logic.fire_medallion = true;}
	
	if(Logic.water_medallion_location == "deku") {if (document.getElementById("deku_queen_gohma") == null) {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.deku_queen_gohma; Location.water_medallion = "deku_queen_gohma";}
	if(Logic.water_medallion_location == "dodongos") {if (document.getElementById("dodongos_king_dodongo") == null) {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.dodongos_king_dodongo; Location.water_medallion = "dodongos_king_dodongo";}
	if(Logic.water_medallion_location == "jabu") {if (document.getElementById("jabu_barinade") == null) {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.jabu_barinade; Location.water_medallion = "jabu_barinade";}
	if(Logic.water_medallion_location == "forest") {if (document.getElementById("forest14") == null) {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.forest14; Location.water_medallion = "forest14";}
	if(Logic.water_medallion_location == "fire") {if (document.getElementById("fire6") == null) {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.fire6; Location.water_medallion = "fire6";}
	if(Logic.water_medallion_location == "water") {if (document.getElementById("water11") == null) {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.water11; Location.water_medallion = "water11";}
	if(Logic.water_medallion_location == "spirit") {if (document.getElementById("spirit20") == null) {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.spirit20; Location.water_medallion = "spirit20";}
	if(Logic.water_medallion_location == "shadow") {if (document.getElementById("shadow18") == null) {Game.water_medallion = true;} Logic.water_medallion = Location_Logic.shadow18; Location.water_medallion = "shadow18";}
	if(Logic.water_medallion_location == "pocket") {Game.water_medallion = true; Logic.water_medallion = true;}

	Logic.shadow_medallion = false;
	Logic.spirit_medallion = false;
	for (var i = 1; i <=3; i++) {
		str = "generic" + i;
		str2 = "gen" + i;
		if(Logic[str] == "deku") {if (document.getElementById("deku_queen_gohma") == null) {Game[str2] = true;} Logic[str2] = Location_Logic.deku_queen_gohma; Location[str2] = "deku_queen_gohma"; if(document.getElementById("text_deku").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.deku_queen_gohma;} if(document.getElementById("text_deku").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.deku_queen_gohma;}}
		if(Logic[str] == "dodongos") {if (document.getElementById("dodongos_king_dodongo") == null) {Game[str2] = true;} Logic[str2] = Location_Logic.dodongos_king_dodongo; Location[str2] = "dodongos_king_dodongo"; if(document.getElementById("text_dodongos").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.dodongos_king_dodongo;} if(document.getElementById("text_dodongos").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.dodongos_king_dodongo;}}
		if(Logic[str] == "jabu") {if (document.getElementById("jabu_barinade") == null) {Game[str2] = true;} Logic[str2] = Location_Logic.jabu_barinade; Location[str2] = "jabu_barinade"; if(document.getElementById("text_jabu").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.jabu_barinade;} if(document.getElementById("text_jabu").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.jabu_barinade;}}
		if(Logic[str] == "forest") {if (document.getElementById("forest14") == null) {Game[str2] = true;} Logic[str2] = Location_Logic.forest14; Location[str2] = "forest14"; if(document.getElementById("text_forest").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.forest14;} if(document.getElementById("text_forest").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.forest14;}}
		if(Logic[str] == "fire") {if (document.getElementById("fire6") == null) {Game[str2] = true;} Logic[str2] = Location_Logic.fire6; Location[str2] = "fire6"; if(document.getElementById("text_fire").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.fire6;} if(document.getElementById("text_fire").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.fire6;}}
		if(Logic[str] == "water") {if (document.getElementById("water11") == null) {Game[str2] = true;} Logic[str2] = Location_Logic.water11; Location[str2] = "water11"; if(document.getElementById("text_water").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.water11;} if(document.getElementById("text_water").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.water11;}}
		if(Logic[str] == "spirit") {if (document.getElementById("spirit20") == null) {Game[str2] = true;} Logic[str2] = Location_Logic.spirit20; Location[str2] = "spirit20"; if(document.getElementById("text_spirit").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.spirit20;} if(document.getElementById("text_spirit").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.spirit20;}}
		if(Logic[str] == "shadow") {if (document.getElementById("shadow18") == null) {Game[str2] = true;} Logic[str2] = Location_Logic.shadow18; Location[str2] = "shadow18"; if(document.getElementById("text_shadow").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = Location_Logic.shadow18;} if(document.getElementById("text_shadow").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = Location_Logic.shadow18;}}
		if(Logic[str] == "pocket") {Game[str2] = true; Logic[str2] = true; if(document.getElementById("text_pocket").style.color=="rgb(238, 130, 238)") {Logic.shadow_medallion = true;} if(document.getElementById("text_pocket").style.color=="rgb(255, 165, 0)") {Logic.spirit_medallion = true;}}
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
	
	
	if(Logic.emerald == "unknown") {Logic.kokiri_emerald = false;}
	if(Logic.ruby == "unknown") {Logic.goron_ruby = false;}
	if(Logic.sapphire == "unknown") {Logic.zora_sapphire = false;}
	if(Logic.forest_medallion_location == "unknown") {Logic.forest_medallion = false;}
	if(Logic.fire_medallion_location == "unknown") {Logic.fire_medallion = false;}
	if(Logic.water_medallion_location == "unknown") {Logic.water_medallion = false;}
	var i;
for (i = 1; i <= 4; i++) {
	str = "forceLogic" + i;
	if(document.getElementById(str).value == "bom") {Logic.bomb_bag = true;}
	if(document.getElementById(str).value == "far") {Logic.farores_wind = true;}
	if(document.getElementById(str).value == "sli") {Logic.slingshot = true;}
	if(document.getElementById(str).value == "boo") {Logic.boomerang = true;}
	if(document.getElementById(str).value == "sca") {if(!Logic.silver_scale) {Logic.silver_scale = true;} else if(!Logic.golden_scale){Logic.golden_scale = true;}}
	if(document.getElementById(str).value == "rut") {Logic.rutos_letter = true;}
	if(document.getElementById(str).value == "bot") {Logic.bottle = true;}
	if(document.getElementById(str).value == "big") {Logic.big_poe = true;}
	if(document.getElementById(str).value == "ham") {Logic.hammer = true;}
	if(document.getElementById(str).value == "bow") {Logic.bow = true;}
	if(document.getElementById(str).value == "hoo") {if(!Logic.hookshot) {Logic.hookshot = true;} else if(!Logic.longshot){Logic.longshot = true;}}
	if(document.getElementById(str).value == "gor") {Logic.goron_tunic= true;}
	if(document.getElementById(str).value == "zor") {Logic.zora_tunic= true;}
	if(document.getElementById(str).value == "str") {if(!Logic.goron_bracelet) {Logic.goron_bracelet = true;} else if(!Logic.silver_gauntlets){Logic.silver_gauntlets = true;} else if(!Logic.golden_gauntlets){Logic.golden_gauntlets = true;}}
	if(document.getElementById(str).value == "iro") {Logic.iron_boots = true;}
	if(document.getElementById(str).value == "hov") {Logic.hover_boots = true;}
	if(document.getElementById(str).value == "wal") {if(!Logic.adults_wallet) {Logic.adults_wallet = true;} else if(!Logic.giants_wallet){Logic.giants_wallet = true;}}
	if(document.getElementById(str).value == "mag") {Logic.magic = true;}
	if(document.getElementById(str).value == "din") {Logic.dins_fire = true;}
	if(document.getElementById(str).value == "fir") {Logic.fire_arrows = true;}
	if(document.getElementById(str).value == "len") {Logic.lens_of_truth = true;}
	if(document.getElementById(str).value == "pre") {Logic.prescription = true;}
	if(document.getElementById(str).value == "cla") {Logic.claim_check = true;}
	if(document.getElementById(str).value == "1me") {Logic.forest_medallion = true;}
	if(document.getElementById(str).value == "3me") {Logic.forest_medallion = true; Logic.fire_medallion = true; Logic.water_medallion = true;}
	if(document.getElementById(str).value == "oot") {Logic.kokiri_emerald = true; Logic.goron_ruby = true; Logic.zora_sapphire = true;}
	if(document.getElementById(str).value == "lul") {Logic.lullaby = true;}
	if(document.getElementById(str).value == "epo") {Logic.eponas = true;}
	if(document.getElementById(str).value == "sar") {Logic.sarias = true;}
	if(document.getElementById(str).value == "sun") {Logic.suns_song = true;}
	if(document.getElementById(str).value == "sot") {Logic.song_of_time = true;}
	if(document.getElementById(str).value == "sos") {Logic.song_of_storms = true;}
	if(document.getElementById(str).value == "min") {Logic.minuet = true;}
	if(document.getElementById(str).value == "bol") {Logic.bolero = true;}
	if(document.getElementById(str).value == "noc") {Logic.nocturne = true;}
	if(document.getElementById(str).value == "req") {Logic.requiem = true;}
}
for (i = 1; i <= 4; i++) {
	str = "forceOutOfLogic" + i;
	if(document.getElementById(str).value == "bom") {Logic.bomb_bag = false;}
	if(document.getElementById(str).value == "far") {Logic.farores_wind = false;}
	if(document.getElementById(str).value == "sli") {Logic.slingshot = false;}
	if(document.getElementById(str).value == "boo") {Logic.boomerang = false;}
	if(document.getElementById(str).value == "sca") {if(Logic.golden_scale) {Logic.golden_scale = false;} else if(Logic.silver_scale){Logic.silver_scale = false;}}
	if(document.getElementById(str).value == "rut") {Logic.rutos_letter = false;}
	if(document.getElementById(str).value == "bot") {Logic.bottle = false;}
	if(document.getElementById(str).value == "big") {Logic.big_poe = false;}
	if(document.getElementById(str).value == "ham") {Logic.hammer = false;}
	if(document.getElementById(str).value == "bow") {Logic.bow = false;}
	if(document.getElementById(str).value == "hoo") {if(Logic.longshot) {Logic.longshot = false;} else if(Logic.hookshot){Logic.hookshot = false;}}
	if(document.getElementById(str).value == "gor") {Logic.goron_tunic= false;}
	if(document.getElementById(str).value == "zor") {Logic.zora_tunic= false;}
	if(document.getElementById(str).value == "str") {if(Logic.golden_gauntlets) {Logic.golden_gauntlets = false;} else if(Logic.silver_gauntlets){Logic.silver_gauntlets = false;} else if(Logic.goron_bracelet){Logic.goron_bracelet = false;}}
	if(document.getElementById(str).value == "iro") {Logic.iron_boots = false;}
	if(document.getElementById(str).value == "hov") {Logic.hover_boots = false;}
	if(document.getElementById(str).value == "wal") {if(Logic.giants_wallet) {Logic.giants_wallet = false;} else if(Logic.adults_wallet){Logic.adults_wallet = false;}}
	if(document.getElementById(str).value == "mag") {Logic.magic = false;}
	if(document.getElementById(str).value == "din") {Logic.dins_fire = false;}
	if(document.getElementById(str).value == "fir") {Logic.fire_arrows = false;}
	if(document.getElementById(str).value == "len") {Logic.lens_of_truth = false;}
	if(document.getElementById(str).value == "pre") {Logic.prescription = false;}
	if(document.getElementById(str).value == "cla") {Logic.claim_check = false;}
	if(document.getElementById(str).value == "1me") {Logic.forest_medallion = false;}
	if(document.getElementById(str).value == "3me") {Logic.forest_medallion = false; Logic.fire_medallion = false; Logic.water_medallion = false;}
	if(document.getElementById(str).value == "oot") {Logic.kokiri_emerald = false; Logic.goron_ruby = false; Logic.zora_sapphire = false;}
	if(document.getElementById(str).value == "lul") {Logic.lullaby = false;}
	if(document.getElementById(str).value == "epo") {Logic.eponas = false;}
	if(document.getElementById(str).value == "sar") {Logic.sarias = false;}
	if(document.getElementById(str).value == "sun") {Logic.suns_song = false;}
	if(document.getElementById(str).value == "sot") {Logic.song_of_time = false;}
	if(document.getElementById(str).value == "sos") {Logic.song_of_storms = false;}
	if(document.getElementById(str).value == "min") {Logic.minuet = false;}
	if(document.getElementById(str).value == "bol") {Logic.bolero = false;}
	if(document.getElementById(str).value == "noc") {Logic.nocturne = false;}
	if(document.getElementById(str).value == "req") {Logic.requiem = false;}
}

	for(var i = 0; i <= 36; i++){
		str = checkSummary[i] + "_location";
		
		if (checkSummary[i] == "trade" && (Logic.prescription || Logic.claim_check)) {var exception = true;} else {var exception = false;}
		
		if (Logic[checkSummary[i]] || exception) {document.getElementById(str).className = "logic_check_text2";}
		else {document.getElementById(str).className = "ool_check_text2";}
	}
	
	Logic.can_enter_jabu = Logic.rutos_letter && ((Logic.lullaby && Logic.bomb_bag) || Logic.silver_scale) && (Logic.boomerang || Logic.bomb_bag || Logic.slingshot);
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
	Logic.can_enter_dodongos = Logic.can_blast_or_smash || Logic.goron_bracelet;
	Logic.dodongos_climb = Logic.can_enter_dodongos && (Logic.bomb_bag || Logic.goron_bracelet || Logic.can_use_dins);
	Logic.can_enter_shadow = Logic.nocturne && Logic.can_use_dins && (Logic.hover_boots || Logic.hookshot) ;//&& Logic.can_see;
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
	Logic.middle_water = Logic.can_enter_water && Logic.lullaby && (Logic.bow || Logic.can_use_dins);
	Logic.projectile_both = Logic.bomb_bag || ((Logic.slingshot || Logic.boomerang) && (Logic.bow || Logic.hookshot));
	Logic.projectile_child = Logic.bomb_bag || Logic.slingshot || Logic.boomerang;
	Logic.projectile_adult = Logic.bomb_bag || Logic.bow || Logic.hookshot;
	Logic.can_wear_goron_tunic = Logic.goron_tunic || (Logic.adults_wallet && (Logic.bomb_bag || Logic.goron_bracelet || Logic.bow));
	Logic.can_wear_zora_tunic = Logic.zora_tunic || (Logic.giants_wallet && (Logic.lullaby && Logic.bottle));

	Game.can_enter_jabu = Game.rutos_letter && (Game.bomb_bag1 || Game.has_chus || Game.scale1)
	Game.child_can_enter_river = Game.bomb_bag1 || Game.has_chus || Game.scale1;
	Game.fortress_access = Game.eponas || Game.longshot || Game.requiem;
	Game.can_save_carpenters = Game.fortress_access && ((Game.bow1 || Game.hookshot || Game.hover_boots) || true) /*fast carpenter fix**/;
	Game.can_cross_quicksand = Game.fortress_access;
	Game.can_enter_colossus = (Game.can_cross_quicksand) || Game.requiem;
	Game.can_use_fire = (Game.dins_fire || (Game.bow1 && Game.fire_arrows)) && Game.magic1;
	Game.can_use_dins = Game.dins_fire && Game.magic1;
	Game.can_use_farores = Game.farores_wind && Game.magic1;
	Game.can_see = Game.lens_of_truth && Game.magic1;
	Game.can_blast_or_smash = Game.bomb_bag1 || Game.hammer || Game.has_chus;
	Game.can_enter_dodongos = Game.can_blast_or_smash || Game.goron_bracelet || ((Game.bottle1 || Game.can_enter_jabu) && Game.giants_wallet);
	Game.dodongos_climb	= Game.can_enter_dodongos && (Game.bomb_bag1 || Game.has_chus || Game.goron_bracelet || Game.can_use_dins);
	Game.can_enter_shadow= Game.nocturne && Game.can_use_fire && (Game.hover_boots || Game.hookshot) ;//&& Game.can_see;
	Game.can_cross_shadow_gap= Game.can_enter_shadow && Game.hover_boots;
	Game.can_bomb_shadow_wall = Game.can_cross_shadow_gap && (Game.bomb_bag1 || Game.has_chus);
	Game.can_pass_shadow_hookshot_door = Game.can_bomb_shadow_wall && Game.hookshot;
	Game.can_ride_shadow_boat = Game.can_pass_shadow_hookshot_door && Game.lullaby;
	Game.can_beat_shadow_boss = Game.can_ride_shadow_boat && (Game.bow1 || Game.longshot);
	Game.can_stop_link_the_goron = Game.bomb_bag1 || Game.bow1 || Game.goron_bracelet || Game.has_chus;
	Game.ice_access = Game.rutos_letter && Game.lullaby && Game.child_can_enter_river;
	Game.reverse_crater = (Game.hover_boots || Game.hookshot || Game.child_can_enter_river) && Game.bolero;
	Game.can_enter_fire_temple = (Game.crater_by_city && (Game.hookshot || Game.hover_boots)) || Game.bolero;
	Game.crater_by_city = Game.bow1 || Game.bomb_bag1 || Game.goron_bracelet || Game.reverse_crater || (Game.hammer && Game.hover_boots) || (Game.goron_tunic && Game.longshot && Game.hammer);
	Game.crater_top = Game.crater_by_city || Game.hammer;
	Game.can_enter_adult_spirit = Game.can_enter_colossus && Game.silver_gauntlets;
	Game.can_enter_ganons = Game.forest_medallion && Game.fire_medallion && Game.water_medallion && Game.gen1 && Game.gen2 && Game.gen3;
	Game.can_climb_fire_temple = Game.can_enter_fire_temple && Game.current_fire_keys >=3 && (Game.bow1 || Game.hookshot || Game.bomb_bag1);
	Game.can_enter_water = (Game.hookshot && Game.iron_boots) || (Game.longshot && Game.golden_scale);
	Game.middle_water = Game.can_enter_water && Game.lullaby && (Game.bow1 || Game.can_use_dins);
	Game.projectile_both = Game.bomb_bag1 || Game.has_chus || ((Game.slingshot1 || Game.boomerang) && (Game.bow1 || Game.hookshot));
	Game.projectile_child = Game.bomb_bag1 || Game.has_chus || Game.slingshot1 || Game.boomerang;
	Game.projectile_adult = Game.bomb_bag1 || Game.has_chus || Game.bow1 || Game.hookshot;
	Game.can_wear_goron_tunic = true;
	Game.can_wear_zora_tunic = true;
	Game.can_climb_gtg_hole = Game.hookshot || Game.hover_boots || Game.bomb_bag1;
	Game.giants_wallet = Game.wallet1 && Game.wallet2;
	
	Logic.current_forest_keys = Logic.forced_forest_keys;
	for (i = 1; i <= 14; i++) {
		str = "forest" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_forest_keys +=1;}
	}
	Logic.current_fire_keys = Logic.forced_fire_keys;
	for (i = 1; i <= 15; i++) {
		str = "fire" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_fire_keys +=1;}
	}
	
	Logic.current_water_keys = Logic.forced_water_keys;
	for (i = 1; i <= 11; i++) {
		str = "water" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_water_keys +=1;}
	}
	
	Logic.current_spirit_keys = Logic.forced_spirit_keys;
	for (i = 1; i <= 20; i++) {
		str = "spirit" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_spirit_keys +=1;}
	}
	
	Logic.current_shadow_keys = Logic.forced_shadow_keys;
	for (i = 1; i <= 18; i++) {
		str = "shadow" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_shadow_keys +=1;}
	}
	
	Logic.current_ganons_keys = Logic.forced_ganons_keys;
	for (i = 1; i <= 16; i++) {
		str = "ganons" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_ganons_keys +=1;}
	}
	
	Logic.current_gtg_keys = Logic.forced_gtg_keys;
	for (i = 1; i <= 22; i++) {
		str = "gtg" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_gtg_keys +=1;}
	}
	
	Logic.current_well_keys = Logic.forced_well_keys;
	for (i = 1; i <= 14; i++) {
		str = "well" + i;
		if (Check[str] == "small_key" && Location_Logic[str]) {Logic.current_well_keys +=1;}
	}
	
	if (Logic.current_forest_keys < 5) {
		var for_keys = [[1,2,3,4,5], [6,8], [7], [9,10,11]]
		var done = false;
		for (i = 0; i < for_keys.length; i++) {
			for (j = 0; j < for_keys[i].length; j++) {
				str = "forest" + for_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
					Logic.min_forest_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_forest_keys = 5;}
	}
	Logic.forest_keys = Math.max(Logic.min_forest_keys,Logic.current_forest_keys);
	if (!Logic.forest_boss_key) {
		var bk = true;
		for (i = 1; i <= 13; i++) {
			str = "forest" + i;
			if (!Location_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		Logic.forest_boss_key = bk;
	}

	if (Logic.current_fire_keys < 8 && ((Logic.can_wear_goron_tunic && Logic.hammer && Logic.hover_boots) || (Check["fire6"] != "small_key" && Check["fire6"] != "unknown"))) {
		var fir_keys = [[1,2,3], [4,5],[], [7,8],[9], [10,11,12], [13,14,15]]
		var done = false;
		for (i = 0; i < fir_keys.length; i++) {
			for (j = 0; j < fir_keys[i].length; j++) {
				str = "fire" + fir_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" || Check[str] == "unknown" || (Check[str] == "boss_key" && (Check["fire6"] == "small_key" || tCheck["fire6"] == "unknown")))) {
					Logic.min_fire_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		
		if (!done) {Logic.min_fire_keys = 8;}
	}
	Logic.fire_keys = Math.max(Logic.min_fire_keys,Logic.current_fire_keys);
	if (!Logic.fire_boss_key) {
		var bk = true;
		for (i = 1; i <= 15; i++) {
			if (i == 6) {
				continue;
			}
			str = "fire" + i;
			if (!Location_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		Logic.fire_boss_key = bk;
	}
	
	if (Logic.current_water_keys < 6 && (Logic.longshot && Logic.iron_boots || (Check["water11"] != "small_key" && Check["water11"] != "unknown"))) {
		var wat_keys = [[1,2,3,4,5,6,9]]
		var done = false;
		for (i = 0; i < wat_keys.length; i++) {
			for (j = 0; j < wat_keys[i].length; j++) {
				str = "water" + wat_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown"|| (Check[str] == "boss_key" && (Check["water11"] == "small_key" || Check["water11"] == "unknown")))) {
					Logic.min_water_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_water_keys = 6;}
	}
	Logic.water_keys = Math.max(Logic.min_water_keys,Logic.current_water_keys);
	if (!Logic.water_boss_key) {
		var bk = true;
		for (i = 1; i <= 10; i++) {
			str = "water" + i;
			if (!Location_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		Logic.water_boss_key = bk;
	}
	if (Logic.current_spirit_keys < 5) {
		var spi_keys = [[1,2,8,9], [3,4,5,6], [], [7,10,11,12,13],[14,15,16,17],[18,19]]
		var done = false;
		for (i = 0; i < spi_keys.length; i++) {
			for (j = 0; j < spi_keys[i].length; j++) {
				str = "spirit" + spi_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
					Logic.min_spirit_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_spirit_keys = 5;}
	}
	Logic.spirit_keys = Math.max(Logic.min_spirit_keys,Logic.current_spirit_keys);
	if (!Logic.spirit_boss_key) {
		var bk = true;
		for (i = 1; i <= 19; i++) {
			str = "spirit" + i;
			if (!Location_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		Logic.spirit_boss_key = bk;
	}
	if (Logic.current_shadow_keys < 5) {
		var sha_keys = [[1,2,3,4], [5,6,7,8,9], [10,11],[12,13,14],[15,16,17]]
		var done = false;
		for (i = 0; i < sha_keys.length; i++) {
			for (j = 0; j < sha_keys[i].length; j++) {
				str = "shadow" + sha_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
					Logic.min_shadow_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_shadow_keys = 5;}
	}
	Logic.shadow_keys = Math.max(Logic.min_shadow_keys,Logic.current_shadow_keys);
	if (!Logic.shadow_boss_key) {
		var bk = true;
		for (i = 1; i <= 17; i++) {
			str = "shadow" + i;
			if (!Location_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		Logic.shadow_boss_key = bk;
	}
	if (Logic.current_ganons_keys < 2) {
		Logic.min_ganons_keys = 2;
		var done = false;
		for (i = 1; i <= 16; i++) {
			if (i == 8) {continue;}
			str = "ganons" + i;
			if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
				Logic.min_ganons_keys = 0;
				break;
			}
		}
	}
	Logic.ganons_keys = Math.max(Logic.min_ganons_keys,Logic.current_ganons_keys);
	if (Logic.current_gtg_keys < 9) {
		var ger_keys = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,22], [],[],[17],[18],[],[19],[20]]
		var done = false;
		for (i = 0; i < ger_keys.length; i++) {
			for (j = 0; j < ger_keys[i].length; j++) {
				str = "gtg" + ger_keys[i][j];
				if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
					Logic.min_gtg_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {Logic.min_gtg_keys = 9;}
	}
	Logic.gtg_keys = Math.max(Logic.min_gtg_keys,Logic.current_gtg_keys);
	if (Logic.current_well_keys < 3) {
		Logic.min_well_keys = 3;
		for (i = 1; i <= 14; i++) {
			if (i == 12 || i == 13) {continue;}
			str = "well" + i;
			if (!(Location_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
				Logic.min_well_keys = 0;
				break;
			}
		}
	}
	Logic.well_keys = Math.max(Logic.min_well_keys,Logic.current_well_keys);
	
	if(Logic.can_enter_ganons && Logic.golden_gauntlets) {Logic.min_ganons_keys = 1;}
	Logic.ganons_keys = Math.max(Logic.min_ganons_keys,Logic.current_ganons_keys);
	
	if (dekuRequired != 1) {dekuRequired = stoneRequired;}
	if (dodongosRequired != 1) {dodongosRequired = stoneRequired;}
	if (jabuRequired != 1) {jabuRequired = stoneRequired; letterRequired = stoneRequired + (1-stoneRequired) * songRequired;}
	else {letterRequired = 1; boomerangRequired = 1;}
	if (forestRequired != 1) {forestRequired = stoneRequired; strength1Required = stoneRequired;}
	else {strength1Required = 1;}
	if (fireRequired != 1) {fireRequired = stoneRequired; hammerRequired = stoneRequired;}
	else {hammerRequired = 1;}
	if (waterRequired != 1) {waterRequired = stoneRequired; longshotRequired = stoneRequired; ironsRequired = stoneRequired * .6;}
	else {longshotRequired = 1; ironsRequired = .6;}
	if (spiritRequired != 1) {spiritRequired = stoneRequired; strength1Required = stoneRequired; strength2Required = stoneRequired; mirrorRequired = stoneRequired;}
	else {strength1Required = 1; strength2Required = 1; mirrorRequired = 1;}
	if (shadowRequired != 1) {shadowRequired = stoneRequired; dinsRequired = stoneRequired * .75; hoversRequired = stoneRequired;}
	else {dinsRequired = .75; hoversRequired = 1;}
	knowMode = 0;
	if (!Known.hookshot1) {knowMode += hookshotRequired;}
	if (!Known.hookshot2) {knowMode += longshotRequired;}
	if (!Known.iron_boots) {knowMode += ironsRequired;}
	if (!Known.rutos_letter) {knowMode += letterRequired;}
	if (!Known.boomerang) {knowMode += boomerangRequired;}
	if (!Known.strength1) {knowMode += strength1Required*.85;}
	if (!Known.strength2) {knowMode += strength2Required*.85;}
	if (!Known.hammer) {knowMode += hammerRequired;}
	if (!Known.bow1) {knowMode += bowRequired*.5;}
	if (!Known.magic1) {knowMode += magicRequired*.7;}
	if (!Known.light_arrows) {knowMode += lightsRequired * .5;}
	if (!Known.mirror_shield) {knowMode += mirrorRequired;}
	if (!Known.dins_fire) {knowMode += dinsRequired;}
    if (!Known.hover_boots) {knowMode += hoversRequired;}
	
	
	var temp = 0;
	var d = new Date();
	if (paused && pauseFlag) {pauseInitial = d.getTime(); pauseFlag = false;}
	if (!paused && pauseFlag) {pauseTotal += d.getTime() - pauseInitial; pauseFlag = false;}
	if (!paused) {var tempTime = Math.floor((d.getTime() - pauseTotal - initialTime)/1000);} else {var tempTime = Math.floor((pauseInitial - pauseTotal - initialTime)/1000);}
	var tempHours = Math.floor(tempTime / 3600);
	var tempMinutes = Math.floor((tempTime % 3600) / 60);
	var tempSeconds = Math.floor((tempTime % 3600) % 60);
	document.getElementById("timer").innerHTML = "";
	if (tempHours > 0) {document.getElementById("timer").innerHTML += tempHours + ":";}
	if (tempHours > 0 && tempMinutes == 0) {document.getElementById("timer").innerHTML += "00:"} if (tempMinutes > 0) {if (tempMinutes < 10 && tempHours > 0) {document.getElementById("timer").innerHTML += "0";} document.getElementById("timer").innerHTML += tempMinutes + ":";}
	if (tempSeconds < 10 && (tempMinutes > 0 || tempHours > 0)) {document.getElementById("timer").innerHTML += "0";}
	document.getElementById("timer").innerHTML += tempSeconds;
	var str = document.getElementById("next").value;
	
	
	if (str.length == 3) {
		for (var i = 0; i < Names.length; i++) {
			if (document.getElementById("text_next").innerHTML == Names[i]) {
				if (document.getElementById(Locations[i]) == null) {
				document.getElementById("next").value = "";
				str = "";
				lastCheck = Locations[i];
				}
				else {
				document.getElementById(Locations[i]).value = str;
				}
			}
		}
	}
	
/*var str = document.getElementById("next").value;
if (str.length > 3) {
	for (var i = 0; i < hintStones.length; i++) {
		if (document.getElementById("text_next").innerHTML == hintStones[i]) {
			loc = str.substring(0,3);
			des = str.substring(3);
			if (loc == "oot") {if (des == "x") {} else {document.getElementById("oot").value = des;} if (document.getElementById("oot") == null){lastCheck = hintStones[i];}}
		}
	}
}
*/
	
document.getElementById("text_next").innerHTML = next_check(lastCheck);
var temptext2 = "";	
var peeked = false;
for (const key of keys) {
	if (temp == 256) {break; }
	temp +=1;
	if(document.getElementById(key) == null && checkedYet[temp-1] == false) {checkedYet[temp - 1] = true; textBlock += "" + tempHours + "h " + tempMinutes + "m " + tempSeconds + "s " + Names[temp-1] + "\n"};
	if(document.getElementById(key) == null) {continue;}
	hinted = false;
	if (isUpperCase(document.getElementById(key).value.charAt(2)) && document.getElementById(key).value.length == 3) {
		peeked = true;
		document.getElementById(key).value = document.getElementById(key).value.toLowerCase();
	}
	else if (isUpperCase(document.getElementById(key).value.charAt(0)) && document.getElementById(key).value.length == 3){
		hinted = true;
		document.getElementById(key).value = document.getElementById(key).value.toLowerCase();
	}

	if (temp <= 244) { 
 
	if (document.getElementById(key).value == "far" && !Known.farores_wind) {Check[document.getElementById(key).id] = "farores_wind"; Location.farores_wind = document.getElementById(key).id; document.getElementById("farores_wind_location").innerHTML = "Farores -> " + Names[temp-1]; Known.farores_wind = true; if (!hinted && !peeked) {Game.farores_wind = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Farores" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	
	if (document.getElementById(key).value == "sli" && !Known.slingshot1) {Check[document.getElementById(key).id] = "slingshot"; Location.slingshot1 = document.getElementById(key).id; document.getElementById("slingshot1_location").innerHTML = "Slingshot -> " + Names[temp-1]; Known.slingshot1 = true; if (!hinted && !peeked) {Game.slingshot1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Slingshot" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "sli" && !Known.slingshot2) {Check[document.getElementById(key).id] = "slingshot"; Location.slingshot2 = document.getElementById(key).id; document.getElementById("slingshot2_location").innerHTML = "Slingshot -> " + Names[temp-1]; Known.slingshot2 = true; if (!hinted && !peeked) {Game.slingshot2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Slingshot" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "sli" && !Known.slingshot3) {Check[document.getElementById(key).id] = "slingshot";Location.slingshot3 = document.getElementById(key).id; document.getElementById("slingshot3_location").innerHTML = "Slingshot -> " + Names[temp-1]; Known.slingshot3 = true; if (!hinted && !peeked) {Game.slingshot3 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Slingshot" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	
	if (document.getElementById(key).value == "boo" && !Known.boomerang) {Check[document.getElementById(key).id] = "boomerang"; Location.boomerang = document.getElementById(key).id; document.getElementById("boomerang_location").innerHTML = "Boomerang -> " + Names[temp-1]; Known.boomerang = true; if (!hinted && !peeked) {Game.boomerang = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Boomerang" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	
	if (document.getElementById(key).value == "sca" && !Known.scale1) {Check[document.getElementById(key).id] = "scale"; Location.scale1 = document.getElementById(key).id; document.getElementById("scale1_location").innerHTML = "Scale -> " + Names[temp-1]; Known.scale1 = true; if (!hinted && !peeked) {Game.scale1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Scale" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "sca" && !Known.scale2) {Check[document.getElementById(key).id] = "scale";Location.scale2 = document.getElementById(key).id; document.getElementById("scale2_location").innerHTML = "Scale -> " + Names[temp-1]; Known.scale2 = true; if (!hinted && !peeked) {Game.scale2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Scale" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	
	if (document.getElementById(key).value == "rut" && !Known.rutos_letter) {Check[document.getElementById(key).id] = "rutos_letter"; Location.rutos_letter = document.getElementById(key).id; document.getElementById("rutos_letter_location").innerHTML = "Letter -> " + Names[temp-1]; Known.rutos_letter = true; if (!hinted && !peeked) {Game.rutos_letter = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Letter" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	
	if (document.getElementById(key).value == "bot" && !Known.bottle1) {Check[document.getElementById(key).id] = "bottle"; Location.bottle1 = document.getElementById(key).id; document.getElementById("bottle1_location").innerHTML = "Bottle -> " + Names[temp-1]; Known.bottle1 = true; if (!hinted && !peeked) {Game.bottle1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bottle" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "bot" && !Known.bottle2) {Check[document.getElementById(key).id] = "bottle"; Location.bottle2 = document.getElementById(key).id; document.getElementById("bottle2_location").innerHTML = "Bottle -> " + Names[temp-1]; Known.bottle2 = true; if (!hinted && !peeked) {Game.bottle2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bottle" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "bot" && !Known.bottle3) {Check[document.getElementById(key).id] = "bottle"; Location.bottle3 = document.getElementById(key).id; document.getElementById("bottle3_location").innerHTML = "Bottle -> " + Names[temp-1]; Known.bottle3 = true; if (!hinted && !peeked) {Game.bottle3 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bottle" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	
	if (document.getElementById(key).value == "big" && !Known.bottle1) {Check[document.getElementById(key).id] = "big_poe";Location.bottle1 = document.getElementById(key).id; Location.big1= document.getElementById(key).id; document.getElementById("bottle1_location").innerHTML = "Big Poe -> " + Names[temp-1]; Known.bottle1 = true; Known.big_poe = true; if (!hinted && !peeked) {Game.bottle1 = true; Game.big_poe = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Big Poe" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "big" && !Known.bottle2) {Check[document.getElementById(key).id] = "big_poe"; Location.bottle2 = document.getElementById(key).id; Location.big1= document.getElementById(key).id; document.getElementById("bottle2_location").innerHTML = "Big Poe -> " + Names[temp-1]; Known.bottle1 = true; Known.big_poe = true; if (!hinted && !peeked) {Game.bottle2 = true; Game.big_poe = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Big Poe" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "big" && !Known.bottle3) {Check[document.getElementById(key).id] = "big_poe";Location.bottle3 = document.getElementById(key).id; Location.big1= document.getElementById(key).id; document.getElementById("bottle3_location").innerHTML = "Big Poe -> " + Names[temp-1]; Known.bottle1 = true; Known.big_poe = true; if (!hinted && !peeked) {Game.bottle3 = true; Game.big_poe = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Big Poe" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	
	if (document.getElementById(key).value == "bom" && !Known.bomb_bag1) {Check[document.getElementById(key).id] = "bomb_bag"; Location.bomb_bag1 = document.getElementById(key).id; document.getElementById("bomb_bag1_location").innerHTML = "Bomb Bag -> " + Names[temp-1]; Known.bomb_bag1 = true; if (!hinted && !peeked) {Game.bomb_bag1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bomb Bag" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))} continue;}
	else if (document.getElementById(key).value == "bom" && !Known.bomb_bag2) {Check[document.getElementById(key).id] = "bomb_bag"; Location.bomb_bag2 = document.getElementById(key).id; document.getElementById("bomb_bag2_location").innerHTML = "Bomb Bag -> " + Names[temp-1]; Known.bomb_bag2 = true; if (!hinted && !peeked) {Game.bomb_bag2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bomb Bag" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "bom" && !Known.bomb_bag3) {Check[document.getElementById(key).id] = "bomb_bag"; Location.bomb_bag3 = document.getElementById(key).id; document.getElementById("bomb_bag3_location").innerHTML = "Bomb Bag -> " + Names[temp-1]; Known.bomb_bag3 = true; if (!hinted && !peeked) {Game.bomb_bag3 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bomb Bag" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "ham" && !Known.hammer) {Check[document.getElementById(key).id] = "hammer"; Location.hammer = document.getElementById(key).id; document.getElementById("hammer_location").innerHTML = "Hammer -> " + Names[temp-1]; Known.hammer = true; if (!hinted && !peeked) {Game.hammer = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Hammer" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "bow" && !Known.bow1) {Check[document.getElementById(key).id] = "bow"; Location.bow1 = document.getElementById(key).id; document.getElementById("bow1_location").innerHTML = "Bow -> " + Names[temp-1]; Known.bow1 = true; if (!hinted && !peeked) {Game.bow1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bow" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "bow" && !Known.bow2) {Check[document.getElementById(key).id] = "bow"; Location.bow2 = document.getElementById(key).id; document.getElementById("bow2_location").innerHTML = "Bow -> " + Names[temp-1]; Known.bow2 = true; if (!hinted && !peeked) {Game.bow2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bow" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "bow" && !Known.bow3) {Check[document.getElementById(key).id] = "bow";Location.bow3 = document.getElementById(key).id; document.getElementById("bow3_location").innerHTML = "Bow -> " + Names[temp-1]; Known.bow3 = true; if (!hinted && !peeked) {Game.bow3 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Bow" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "hoo" && !Known.hookshot1) {Check[document.getElementById(key).id] = "hookshot";Location.hookshot1 = document.getElementById(key).id; document.getElementById("hookshot1_location").innerHTML = "Hookshot -> " + Names[temp-1]; Known.hookshot1 = true; if (!hinted && !peeked) {Game.hookshot1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Hookshot" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "hoo" && !Known.hookshot2) {Check[document.getElementById(key).id] = "hookshot";Location.hookshot2 = document.getElementById(key).id; document.getElementById("hookshot2_location").innerHTML = "Hookshot -> " + Names[temp-1]; Known.hookshot2 = true; if (!hinted && !peeked) {Game.hookshot2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Hookshot" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "str" && !Known.strength1) {Check[document.getElementById(key).id] = "strength"; Location.strength1 = document.getElementById(key).id; document.getElementById("strength1_location").innerHTML = "Strength -> " + Names[temp-1]; Known.strength1 = true; if (!hinted && !peeked) {Game.strength1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Strength" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "str" && !Known.strength2) {Check[document.getElementById(key).id] = "strength"; Location.strength2 = document.getElementById(key).id; document.getElementById("strength2_location").innerHTML = "Strength -> " + Names[temp-1]; Known.strength2 = true; if (!hinted && !peeked) {Game.strength2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Strength" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "str" && !Known.strength3) {Check[document.getElementById(key).id] = "strength";Location.strength3 = document.getElementById(key).id; document.getElementById("strength3_location").innerHTML = "Strength -> " + Names[temp-1]; Known.strength3 = true; if (!hinted && !peeked) {Game.strength3 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Strength" + "<br />";}if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "mir" && !Known.mirror_shield) {Check[document.getElementById(key).id] = "mirror_shield"; Location.mirror_shield = document.getElementById(key).id; document.getElementById("mirror_shield_location").innerHTML = "Mirror Shield -> " + Names[temp-1]; Known.mirror_shield = true; if (!hinted && !peeked) {Game.mirror_shield = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Mirror Shield" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "mag" && !Known.magic1) {Check[document.getElementById(key).id] = "magic"; Location.magic1 = document.getElementById(key).id; document.getElementById("magic1_location").innerHTML = "Magic -> " + Names[temp-1]; Known.magic1 = true; if (!hinted && !peeked) {Game.magic1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Magic" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "mag" && !Known.magic2) {Check[document.getElementById(key).id] = "magic"; Location.magic2 = document.getElementById(key).id; document.getElementById("magic2_location").innerHTML = "Magic -> " + Names[temp-1]; Known.magic2 = true; if (!hinted && !peeked) {Game.magic2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Magic" + "<br />";}if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "iro" && !Known.iron_boots) {Check[document.getElementById(key).id] = "iron_boots";Location.iron_boots = document.getElementById(key).id; document.getElementById("iron_boots_location").innerHTML = "Iron Boots -> " + Names[temp-1]; Known.iron_boots = true; if (!hinted && !peeked) {Game.iron_boots = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Iron Boots" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "hov" && !Known.hover_boots) {Check[document.getElementById(key).id] = "hover_boots";Location.hover_boots = document.getElementById(key).id; document.getElementById("hover_boots_location").innerHTML = "Hover Boots -> " + Names[temp-1]; Known.hover_boots = true; if (!hinted && !peeked) {Game.hover_boots = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Hover Boots" + "<br />";}if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "wal" && !Known.wallet1) {Check[document.getElementById(key).id] = "wallet";Location.wallet1 = document.getElementById(key).id; document.getElementById("wallet1_location").innerHTML = "Wallet -> " + Names[temp-1]; Known.wallet1 = true; if (!hinted && !peeked) {Game.wallet1 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Wallet" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	else if (document.getElementById(key).value == "wal" && !Known.wallet2) {Check[document.getElementById(key).id] = "wallet";Location.wallet2 = document.getElementById(key).id; document.getElementById("wallet2_location").innerHTML = "Wallet -> " + Names[temp-1]; Known.wallet2 = true; if (!hinted && !peeked) {Game.wallet2 = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Wallet" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "gor" && !Known.goron_tunic) {Check[document.getElementById(key).id] = "goron_tunic";Location.goron_tunic = document.getElementById(key).id; document.getElementById("goron_tunic_location").innerHTML = "Goron Tunic -> " + Names[temp-1]; Known.goron_tunic = true; if (!hinted && !peeked) {Game.goron_tunic = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Goron Tunic" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "zor" && !Known.zora_tunic) {Check[document.getElementById(key).id] = "zora_tunic";Location.zora_tunic = document.getElementById(key).id; document.getElementById("zora_tunic_location").innerHTML = "Zora Tunic -> " + Names[temp-1]; Known.zora_tunic = true; if (!hinted && !peeked) {Game.zora_tunic = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Zora Tunic" + "<br />";}if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "din" && !Known.dins_fire) {Check[document.getElementById(key).id] = "dins_fire";Location.dins_fire = document.getElementById(key).id; document.getElementById("dins_fire_location").innerHTML = "Dins Fire -> " + Names[temp-1]; Known.dins_fire = true; if (!hinted && !peeked) {Game.dins_fire = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Din's Fire" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "fir" && !Known.fire_arrows) {Check[document.getElementById(key).id] = "fire_arrows"; Location.fire_arrows = document.getElementById(key).id; document.getElementById("fire_arrows_location").innerHTML = "Fire Arrows -> " + Names[temp-1]; Known.fire_arrows = true; if (!hinted && !peeked) {Game.fire_arrows = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Fire Arrows" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "len" && !Known.lens_of_truth) {Check[document.getElementById(key).id] = "lens_of_truth";Location.lens_of_truth = document.getElementById(key).id; document.getElementById("lens_of_truth_location").innerHTML = "Lens -> " + Names[temp-1]; Known.lens_of_truth = true; if (!hinted && !peeked) {Game.lens_of_truth = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Lens" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "sto" && !Known.stone_of_agony) {Location.stone_of_agony = document.getElementById(key).id; Known.stone_of_agony = true; if (!hinted && !peeked) {Game.stone_of_agony = true;} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if ((document.getElementById(key).value == "pre" || document.getElementById(key).value == "eye" || document.getElementById(key).value == "dro") && (!Known.prescription || !Known.claim_check)) {Check[document.getElementById(key).id] = "prescription";Location.prescription = document.getElementById(key).id; document.getElementById("trade_location").innerHTML = "Prescription -> " + Names[temp-1]; Known.prescription = true; if (!hinted && !peeked) {Game.prescription = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Prescription" + "<br />";}if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	if (document.getElementById(key).value == "cla" && (!Known.prescription || !Known.claim_check)) {Check[document.getElementById(key).id] = "claim_check";Location.claim_check = document.getElementById(key).id; document.getElementById("trade_location").innerHTML = "Claim -> " + Names[temp-1]; Known.claim_check = true; if (!hinted && !peeked) {Game.claim_check = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Claim Check" + "<br />";} if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	if (document.getElementById(key).value == "lig" && !Known.light_arrows) {Check[document.getElementById(key).id] = "light_arrows"; Location.light_arrows = document.getElementById(key).id; document.getElementById("light_arrows_location").innerHTML = "Light Arrows -> " + Names[temp-1]; Known.light_arrows = true; if (!hinted && !peeked) {Game.light_arrows = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1].split(': ')[1] + ":  Light Arrows" + "<br />";}if (temp <= 38) {junkB1(document.getElementById(key))} else if (temp<=76) {junkB2(document.getElementById(key))} else if (temp <= 114){junkB3(document.getElementById(key))} else if (temp <= 154) {junkB5(document.getElementById(key))} else if (temp <= 208){ junkB6(document.getElementById(key))} else{junkB7(document.getElementById(key))}continue;}
	
	}
	else {
	if (document.getElementById(key).value == "lul" && !Known.lullaby) {Check[document.getElementById(key).id] = "lullaby";Location.lullaby = document.getElementById(key).id; Known.lullaby = true; if (!hinted && !peeked) {Game.lullaby = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Lullaby" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Lullaby"; backUp[temp-1] += ": Lullaby"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "epo" && !Known.eponas) {Check[document.getElementById(key).id] = "eponas";Location.eponas = document.getElementById(key).id; Known.eponas = true; if (!hinted && !peeked) {Game.eponas = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Eponas" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Epona's"; backUp[temp-1] += ": Epona's"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "sar" && !Known.sarias) {Check[document.getElementById(key).id] = "sarias";Location.sarias = document.getElementById(key).id; Known.sarias = true; if (!hinted && !peeked) {Game.sarias = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Sarias" + "<br />";}var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Saria's"; backUp[temp-1] += ": Saria's"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "sun" && !Known.suns_song) {Check[document.getElementById(key).id] = "suns";Location.suns_song = document.getElementById(key).id; Known.suns_song = true; if (!hinted && !peeked) {Game.suns_song = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Suns" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Sun's"; backUp[temp-1] += ": Sun's"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "sot" && !Known.song_of_time) {Check[document.getElementById(key).id] = "sot";Location.song_of_time = document.getElementById(key).id; Known.song_of_time = true; if (!hinted && !peeked) {Game.song_of_time = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Time" + "<br />";}var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Time"; backUp[temp-1] += ": Time"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "sos" && !Known.song_of_storms) {Check[document.getElementById(key).id] = "sos"; Location.song_of_storms = document.getElementById(key).id; Known.song_of_storms = true; if (!hinted && !peeked) {Game.song_of_storms = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Storms" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Storms"; backUp[temp-1] += ": Storms"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "min" && !Known.minuet) {Check[document.getElementById(key).id] = "minuet"; Location.minuet = document.getElementById(key).id; Known.minuet = true; if (!hinted && !peeked) {Game.minuet = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Minuet" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Minuet"; backUp[temp-1] += ": Minuet"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "bol" && !Known.bolero) {Check[document.getElementById(key).id] = "bolero";Location.bolero = document.getElementById(key).id; Known.bolero = true; if (!hinted && !peeked) {Game.bolero = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Bolero" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Bolero"; backUp[temp-1] += ": Bolero"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "ser" && !Known.serenade) {Check[document.getElementById(key).id] = "serenade";Location.serenade = document.getElementById(key).id; Known.serenade = true; if (!hinted && !peeked) {Game.serenade = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Serenade" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Serenade"; backUp[temp-1] += ": Serenade"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "req" && !Known.requiem) {Check[document.getElementById(key).id] = "requiem";Location.requiem = document.getElementById(key).id; Known.requiem = true; if (!hinted && !peeked) {Game.requiem = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Requiem" + "<br />";}var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Requiem"; backUp[temp-1] += ": Requiem"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "noc" && !Known.nocturne) {Check[document.getElementById(key).id] = "nocturne";Location.nocturne = document.getElementById(key).id; Known.nocturne = true; if (!hinted && !peeked) {Game.nocturne = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Nocturne" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Nocturne"; backUp[temp-1] += ": Nocturne"; junkBS(document.getElementById(key)); continue;}
	if (document.getElementById(key).value == "pre" && !Known.prelude) {Check[document.getElementById(key).id] = "prelude";Location.prelude = document.getElementById(key).id; Known.prelude = true; if (!hinted && !peeked) {Game.prelude = true;} if (hinted) {Hinted[key] = true;} if (hinted || peeked) {temptext2 += Names[temp - 1] + ": Prelude" + "<br />";} var change = "text_" + document.getElementById(key).id; document.getElementById(change).innerHTML += ": Prelude"; backUp[temp-1] += ": Prelude"; junkBS(document.getElementById(key)); continue;}
	}
}
if (temptext2 != "") {
	var hintText = document.createElement("small");
	hintText.innerHTML = temptext2;
	document.getElementById("notes").insertBefore(hintText, document.getElementById("notes").firstChild);
	temptext2 = "";
}


if (Game.hookshot1 && Game.hookshot2) {
	Game.longshot = true;
}
if (Game.hookshot1 || Game.hookshot2) {
	Game.hookshot = true;
}

if (Game.strength1 && Game.strength2 && Game.strength3) {Game.golden_gauntlets = true;}
if (Game.strength1 && Game.strength3) {Game.silver_gauntlets = true;}
if (Game.strength2 && Game.strength3) {Game.silver_gauntlets = true;}
if (Game.strength1 && Game.strength2) {Game.silver_gauntlets = true;}
if (Game.strength1 || Game.strength2 || Game.strength3) {Game.goron_bracelet = true;}

for( var i = 1; i <= 34; i++) {
Area[i] = "normal";
}

for (var i = 1; i <= 5; i++) {
	var str = document.getElementById("woth_input" + i).value;
	str = str.replace("2","");
	if (str == "kok" || str == "kf" || str == "koki" || str == "kfc") {if (Area[1] == "4woth") {Area[1] = "5woth";} else if (Area[1] == "3woth") {Area[1] = "4woth";} else if (Area[1] == "2woth") {Area[1] = "3woth";} else if (Area[1] == "woth") {Area[1] = "2woth";} else {Area[1] = "woth";}}
	if (str == "llr" || str == "ranch" || str == "lon" || str == "ran") {if (Area[2] == "4woth") {Area[2] = "5woth";} else if (Area[2] == "3woth") {Area[2] = "4woth";} else if (Area[2] == "2woth") {Area[2] = "3woth";} else if (Area[2] == "woth") {Area[2] = "2woth";} else {Area[2] = "woth";}} 
	if (str == "fie" || str == "hf" || str == "field") {if (Area[3] == "4woth") {Area[3] = "5woth";} else if (Area[3] == "3woth") {Area[3] = "4woth";} else if (Area[3] == "2woth") {Area[3] = "3woth";} else if (Area[3] == "woth") {Area[3] = "2woth";} else {Area[3] = "woth";}} 
	if (str == "gv" || str == "val" || str == "valley") {if (Area[4] == "4woth") {Area[4] = "5woth";} else if (Area[4] == "3woth") {Area[4] = "4woth";} else if (Area[4] == "2woth") {Area[4] = "3woth";} else if (Area[4] == "woth") {Area[4] = "2woth";} else {Area[4] = "woth";}} 
	if (str == "hyl" || str == "hylia" || str == "lh") {if (Area[5] == "4woth") {Area[5] = "5woth";} else if (Area[5] == "3woth") {Area[5] = "4woth";} else if (Area[5] == "2woth") {Area[5] = "3woth";} else if (Area[5] == "woth") {Area[5] = "2woth";} else {Area[5] = "woth";}} 
	if (str == "mkt" || str == "market" || str == "mar") {if (Area[6] == "4woth") {Area[6] = "5woth";} else if (Area[6] == "3woth") {Area[6] = "4woth";} else if (Area[6] == "2woth") {Area[6] = "3woth";} else if (Area[6] == "woth") {Area[6] = "2woth";} else {Area[6] = "woth";}} 
	if (str == "hyr c" || str == "hcast" || str == "hc") {if (Area[7] == "4woth") {Area[7] = "5woth";} else if (Area[7] == "3woth") {Area[7] = "4woth";} else if (Area[7] == "2woth") {Area[7] = "3woth";} else if (Area[7] == "woth") {Area[7] = "2woth";} else {Area[7] = "woth";}} 
	if (str == "ogc" || str == "out g" || str == "gfairy" || str == "og" || str == "out") {if (Area[8] == "4woth") {Area[8] = "5woth";} else if (Area[8] == "3woth") {Area[8] = "4woth";} else if (Area[8] == "2woth") {Area[8] = "3woth";} else if (Area[8] == "woth") {Area[8] = "2woth";} else {Area[8] = "woth";}} 
	if (str == "tot" || str == "temple" || str == "time") {if (Area[9] == "4woth") {Area[9] = "5woth";} else if (Area[9] == "3woth") {Area[9] = "4woth";} else if (Area[9] == "2woth") {Area[9] = "3woth";} else if (Area[9] == "woth") {Area[9] = "2woth";} else {Area[9] = "woth";}} 
	if (str == "fountain" || str == "fount" || str == "fou" || str == "zf") {if (Area[10] == "4woth") {Area[10] = "5woth";} else if (Area[10] == "3woth") {Area[10] = "4woth";} else if (Area[10] == "2woth") {Area[10] = "3woth";} else if (Area[10] == "woth") {Area[10] = "2woth";} else {Area[10] = "woth";}} 
	if (str == "ice" || str == "ic" || str == "cavern") {if (Area[11] == "4woth") {Area[11] = "5woth";} else if (Area[11] == "3woth") {Area[11] = "4woth";} else if (Area[11] == "2woth") {Area[11] = "3woth";} else if (Area[11] == "woth") {Area[11] = "2woth";} else {Area[11] = "woth";}} 
	if (str == "deku" || str == "dek" || str == "dt") {if (Area[12] == "4woth") {Area[12] = "5woth";} else if (Area[12] == "3woth") {Area[12] = "4woth";} else if (Area[12] == "2woth") {Area[12] = "3woth";} else if (Area[12] == "woth") {Area[12] = "2woth";} else {Area[12] = "woth";}} 
	if (str == "lw" || str == "lost" || str == "woods") {if (Area[13] == "4woth") {Area[13] = "5woth";} else if (Area[13] == "3woth") {Area[13] = "4woth";} else if (Area[13] == "2woth") {Area[13] = "3woth";} else if (Area[13] == "woth") {Area[13] = "2woth";} else {Area[13] = "woth";}} 
	if (str == "sfm" || str == "mea" || str == "mead") {if (Area[14] == "4woth") {Area[14] = "5woth";} else if (Area[14] == "3woth") {Area[14] = "4woth";} else if (Area[14] == "2woth") {Area[14] = "3woth";} else if (Area[14] == "woth") {Area[14] = "2woth";} else {Area[14] = "woth";}} 
	if (str == "gor" || str == "gc" || str == "goron") {if (Area[15] == "4woth") {Area[15] = "5woth";} else if (Area[15] == "3woth") {Area[15] = "4woth";} else if (Area[15] == "2woth") {Area[15] = "3woth";} else if (Area[15] == "woth") {Area[15] = "2woth";} else {Area[15] = "woth";}} 
	if (str == "dod" || str == "dodo" || str == "dc") {if (Area[16] == "4woth") {Area[16] = "5woth";} else if (Area[16] == "3woth") {Area[16] = "4woth";} else if (Area[16] == "2woth") {Area[16] = "3woth";} else if (Area[16] == "woth") {Area[16] = "2woth";} else {Area[16] = "woth";}} 
	if (str == "tra" || str == "trail" || str == "dmt") {if (Area[17] == "4woth") {Area[17] = "5woth";} else if (Area[17] == "3woth") {Area[17] = "4woth";} else if (Area[17] == "2woth") {Area[17] = "3woth";} else if (Area[17] == "woth") {Area[17] = "2woth";} else {Area[17] = "woth";}} 
	if (str == "cra" || str == "crater" || str == "dmc") {if (Area[18] == "4woth") {Area[18] = "5woth";} else if (Area[18] == "3woth") {Area[18] = "4woth";} else if (Area[18] == "2woth") {Area[18] = "3woth";} else if (Area[18] == "woth") {Area[18] = "2woth";} else {Area[18] = "woth";}} 
	if (str == "kak" || str == "kaki" || str == "kv") {if (Area[19] == "4woth") {Area[19] = "5woth";} else if (Area[19] == "3woth") {Area[19] = "4woth";} else if (Area[19] == "2woth") {Area[19] = "3woth";} else if (Area[19] == "woth") {Area[19] = "2woth";} else {Area[19] = "woth";}} 
	if (str == "gra" || str == "grave" || str == "gy") {if (Area[20] == "4woth") {Area[20] = "5woth";} else if (Area[20] == "3woth") {Area[20] = "4woth";} else if (Area[20] == "2woth") {Area[20] = "3woth";} else if (Area[20] == "woth") {Area[20] = "2woth";} else {Area[20] = "woth";}} 
	if (str == "riv" || str == "river" || str == "zr") {if (Area[21] == "4woth") {Area[21] = "5woth";} else if (Area[21] == "3woth") {Area[21] = "4woth";} else if (Area[21] == "2woth") {Area[21] = "3woth";} else if (Area[21] == "woth") {Area[21] = "2woth";} else {Area[21] = "woth";}} 
	if (str == "dom" || str == "domain" || str == "zd") {if (Area[22] == "4woth") {Area[22] = "5woth";} else if (Area[22] == "3woth") {Area[22] = "4woth";} else if (Area[22] == "2woth") {Area[22] = "3woth";} else if (Area[22] == "woth") {Area[22] = "2woth";} else {Area[22] = "woth";}} 
	if (str == "col" || str == "colo" || str == "colossus" || str == "co") {if (Area[23] == "4woth") {Area[23] = "5woth";} else if (Area[23] == "3woth") {Area[23] = "4woth";} else if (Area[23] == "2woth") {Area[23] = "3woth";} else if (Area[23] == "woth") {Area[23] = "2woth";} else {Area[23] = "woth";}} 
	if (str == "was" || str == "waste" || str == "wl" || str == "hw") {if (Area[24] == "4woth") {Area[24] = "5woth";} else if (Area[24] == "3woth") {Area[24] = "4woth";} else if (Area[24] == "2woth") {Area[24] = "3woth";} else if (Area[24] == "woth") {Area[24] = "2woth";} else {Area[24] = "woth";}} 
	if (str == "fort" || str == "fortress" || str == "gf") {if (Area[25] == "4woth") {Area[25] = "5woth";} else if (Area[25] == "3woth") {Area[25] = "4woth";} else if (Area[25] == "2woth") {Area[25] = "3woth";} else if (Area[25] == "woth") {Area[25] = "2woth";} else {Area[25] = "woth";}} 
	if (str == "jab" || str == "jabu" || str == "jjb" || str == "jj") {if (Area[26] == "4woth") {Area[26] = "5woth";} else if (Area[26] == "3woth") {Area[26] = "4woth";} else if (Area[26] == "2woth") {Area[26] = "3woth";} else if (Area[26] == "woth") {Area[26] = "2woth";} else {Area[26] = "woth";}} 
	if (str == "for" || str == "forest" || str == "fot" || str == "fo") {if (Area[27] == "4woth") {Area[27] = "5woth";} else if (Area[27] == "3woth") {Area[27] = "4woth";} else if (Area[27] == "2woth") {Area[27] = "3woth";} else if (Area[27] == "woth") {Area[27] = "2woth";} else {Area[27] = "woth";}} 
	if (str == "fir" || str == "fire" || str == "fit" || str == "fi") {if (Area[28] == "4woth") {Area[28] = "5woth";} else if (Area[28] == "3woth") {Area[28] = "4woth";} else if (Area[28] == "2woth") {Area[28] = "3woth";} else if (Area[28] == "woth") {Area[28] = "2woth";} else {Area[28] = "woth";}} 
	if (str == "wat" || str == "wata" || str == "water" || str == "wa") {if (Area[29] == "4woth") {Area[29] = "5woth";} else if (Area[29] == "3woth") {Area[29] = "4woth";} else if (Area[29] == "2woth") {Area[29] = "3woth";} else if (Area[29] == "woth") {Area[29] = "2woth";} else {Area[29] = "woth";}} 
	if (str == "spi" || str == "spirit" || str == "sprt" || str == "sp") {if (Area[30] == "4woth") {Area[30] = "5woth";} else if (Area[30] == "3woth") {Area[30] = "4woth";} else if (Area[30] == "2woth") {Area[30] = "3woth";} else if (Area[30] == "woth") {Area[30] = "2woth";} else {Area[30] = "woth";}} 
	if (str == "sha" || str == "shadow" || str == "shad" || str == "sh") {if (Area[31] == "4woth") {Area[31] = "5woth";} else if (Area[31] == "3woth") {Area[31] = "4woth";} else if (Area[31] == "2woth") {Area[31] = "3woth";} else if (Area[31] == "woth") {Area[31] = "2woth";} else {Area[31] = "woth";}} 
	if (str == "gan" || str == "gan c" || str == "ganons" || str == "ganon" || str == "ga") {if (Area[32] == "4woth") {Area[32] = "5woth";} else if (Area[32] == "3woth") {Area[32] = "4woth";} else if (Area[32] == "2woth") {Area[32] = "3woth";} else if (Area[32] == "woth") {Area[32] = "2woth";} else {Area[32] = "woth";}} 
	if (str == "gtg" || str == "tg" || str == "gt") {if (Area[33] == "4woth") {Area[33] = "5woth";} else if (Area[33] == "3woth") {Area[33] = "4woth";} else if (Area[33] == "2woth") {Area[33] = "3woth";} else if (Area[33] == "woth") {Area[33] = "2woth";} else {Area[33] = "woth";}} 
	if (str == "well" || str == "botw" || str == "wel") {if (Area[34] == "4woth") {Area[34] = "5woth";} else if (Area[34] == "3woth") {Area[34] = "4woth";} else if (Area[34] == "2woth") {Area[34] = "3woth";} else if (Area[34] == "woth") {Area[34] = "2woth";} else {Area[34] = "woth";}}
	if (i <= 3) {
		var str2 = document.getElementById("barren_input" + i).value;
		if (str2 == "kok" || str2 == "kf" || str2 == "koki" || str2 == "kfc") {Area[1] = "barren";}
		if (str2 == "llr" || str2 == "ranch" || str2 == "lon" || str2 == "ran") {Area[2] = "barren";} 
		if (str2 == "fie" || str2 == "hf" || str2 == "field") {Area[3] = "barren";} 
		if (str2 == "gv" || str2 == "val" || str2 == "valley") {Area[4] = "barren";} 
		if (str2 == "hyl" || str2 == "hylia" || str2 == "lh") {Area[5] = "barren";} 
		if (str2 == "mkt" || str2 == "market" || str2 == "mar") {Area[6] = "barren";} 
		if (str2 == "hyr c" || str2 == "hcast" || str2 == "hc") {Area[7] = "barren";} 
		if (str2 == "ogc" || str2 == "out g" || str2 == "gfairy" || str2 == "og" || str2 == "out") {Area[8] = "barren";} 
		if (str2 == "tot" || str2 == "temple" || str2 == "time") {Area[9] = "barren";} 
		if (str2 == "fountain" || str2 == "fount" || str2 == "fou" || str2 == "zf") {Area[10] = "barren";} 
		if (str2 == "ice" || str2 == "ic" || str2 == "cavern") {Area[11] = "barren";} 
		if (str2 == "deku" || str2 == "dek" || str2 == "dt") {Area[12] = "barren";} 
		if (str2 == "lw" || str2 == "lost" || str2 == "woods") {Area[13] = "barren";} 
		if (str2 == "sfm" || str2 == "mea" || str2 == "mead") {Area[14] = "barren";} 
		if (str2 == "gor" || str2 == "gc" || str2 == "goron") {Area[15] = "barren";} 
		if (str2 == "dod" || str2 == "dodo" || str2 == "dc") {Area[16] = "barren";} 
		if (str2 == "tra" || str2 == "trail" || str2 == "dmt") {Area[17] = "barren";} 
		if (str2 == "cra" || str2 == "crater" || str2 == "dmc") {Area[18] = "barren";} 
		if (str2 == "kak" || str2 == "kaki" || str2 == "kv") {Area[19] = "barren";} 
		if (str2 == "gra" || str2 == "grave" || str2 == "gy") {Area[20] = "barren";} 
		if (str2 == "riv" || str2 == "river" || str2 == "zr") {Area[21] = "barren";} 
		if (str2 == "dom" || str2 == "domain" || str2 == "zd") {Area[22] = "barren";} 
		if (str2 == "col" || str2 == "colo" || str2 == "colossus" || str2 == "co") {Area[23] = "barren";} 
		if (str2 == "was" || str2 == "waste" || str2 == "wl" || str2 == "hw") {Area[24] = "barren";} 
		if (str2 == "fort" || str2 == "fortress" || str2 == "gf") {Area[25] = "barren";} 
		if (str2 == "jab" || str2 == "jabu" || str2 == "jjb" || str2 == "jj") {Area[26] = "barren";} 
		if (str2 == "for" || str2 == "forest" || str2 == "fot" || str2 == "fo") {Area[27] = "barren";} 
		if (str2 == "fir" || str2 == "fire" || str2 == "fit" || str2 == "fi") {Area[28] = "barren";} 
		if (str2 == "wat" || str2 == "wata" || str2 == "water" || str2 == "wa") {Area[29] = "barren";} 
		if (str2 == "spi" || str2 == "spirit" || str2 == "sprt" || str2 == "sp") {Area[30] = "barren";} 
		if (str2 == "sha" || str2 == "shadow" || str2 == "shad" || str2 == "sh") {Area[31] = "barren";} 
		if (str2 == "gan" || str2 == "gan c" || str2 == "ganons" || str2 == "ganon" || str2 == "ga") {Area[32] = "barren";} 
		if (str2 == "gtg" || str2 == "tg" || str2 == "gt") {Area[33] = "barren";} 
		if (str2 == "well" || str2 == "botw" || str2 == "wel") {Area[34] = "barren";} 
	}
}

for(var i = 0; i < checkSummary.length; i++) {
		if (i <= 36 ){
			str = checkSummary[i] + "_location";
			if (checkSummary[i] == "trade") {
				if (!Logic.prescription && !Logic.claim_check) {document.getElementById(str).style.fontWeight = "normal"; document.getElementById(str).style.fontSize = "14px";}
				else if (Logic.prescription || Logic.claim_check) { document.getElementById(str).style.fontWeight = "bold"; document.getElementById(str).style.fontSize = "16px";}
			}
			else {
				if (!Logic[checkSummary[i]]) { document.getElementById(str).style.fontWeight = "normal"; document.getElementById(str).style.fontSize = "14px";}
				else if (Logic[checkSummary[i]]) {document.getElementById(str).style.fontWeight = "bold"; document.getElementById(str).style.fontSize = "16px";}
			}
		}
		else {
			str = checkSummary[i];
		}
		if (Game[checkSummary[i]] || i > 36) { 
			if (i <= 36) {
				if (Logic[checkSummary[i]]) {
					document.getElementById(str).style.color = "chartreuse";
				}
				else {
					document.getElementById(str).style.color = "black";
				}
			}
		}
}
//"ff8080"
AreaColors = ["", "00ff88", " aaaa00", " ffff00", " ffaa00", " 00aaff", " aaaaaa", " 84FFFF", " FE0404", " ffffff", " 70ffff", " aaffff", " 996000", " 009000", " 80ff80", " ffcc00", " B35705", " 573E02", " ff5050", " 678C8A", " 8f8493", " 5DB8FE", " 00ffff", " cccc90", " cccc30", " ffff90", " ff0080", " 5FAF36", " ff0000", " 00cccc", " ffff50", " c900c9", " 990000", " ffcc60", " ff00ff"];
WotHColors = ["", "9cc4d9", "white", "b19cd9","d09cd9","cyan"];

for (var i = 1; i <= 34; i++) {
	if (Area[i] == "woth" && AreaWotHAge[i] != 1) {
		if (woth1 == "unknown" || !Area[AreaNames.indexOf(woth1)].includes("woth")) {document.getElementById("woth1_title").innerHTML = AreaNames[i]; woth1 = AreaNames[i];}
		else if (woth2 == "unknown" || !Area[AreaNames.indexOf(woth2)].includes("woth")) {document.getElementById("woth2_title").innerHTML = AreaNames[i]; woth2 = AreaNames[i];}
		else if (woth3 == "unknown" || !Area[AreaNames.indexOf(woth3)].includes("woth")) {document.getElementById("woth3_title").innerHTML = AreaNames[i]; woth3 = AreaNames[i];}
		else if (woth4 == "unknown" || !Area[AreaNames.indexOf(woth4)].includes("woth")) {document.getElementById("woth4_title").innerHTML = AreaNames[i]; woth4 = AreaNames[i];}
		else if (woth5 == "unknown" || !Area[AreaNames.indexOf(woth5)].includes("woth")) {document.getElementById("woth5_title").innerHTML = AreaNames[i]; woth5 = AreaNames[i];}
		AreaWotHAge[i] = 1;
	}
	else if (Area[i] == "2woth" && AreaWotHAge[i] != 2) {		
		if (woth1 == "unknown" || !Area[AreaNames.indexOf(woth1)].includes("woth")) {woth1 = AreaNames[i];}
		else if (woth2 == "unknown" || !Area[AreaNames.indexOf(woth2)].includes("woth")) {woth2 = AreaNames[i];}
		else if (woth3 == "unknown" || !Area[AreaNames.indexOf(woth3)].includes("woth")) {woth3 = AreaNames[i];}
		else if (woth4 == "unknown" || !Area[AreaNames.indexOf(woth4)].includes("woth")) {woth4 = AreaNames[i];}
		else if (woth5 == "unknown" || !Area[AreaNames.indexOf(woth5)].includes("woth")) {woth5 = AreaNames[i];}
		AreaWotHAge[i] = 2;
	}
	else if (Area[i] == "3woth" && AreaWotHAge[i] != 3) {		
		if (woth1 == "unknown" || !Area[AreaNames.indexOf(woth1)].includes("woth")) {woth1 = AreaNames[i];}
		else if (woth2 == "unknown" || !Area[AreaNames.indexOf(woth2)].includes("woth")) {woth2 = AreaNames[i];}
		else if (woth3 == "unknown" || !Area[AreaNames.indexOf(woth3)].includes("woth")) {woth3 = AreaNames[i];}
		else if (woth4 == "unknown" || !Area[AreaNames.indexOf(woth4)].includes("woth")) {woth4 = AreaNames[i];}
		else if (woth5 == "unknown" || !Area[AreaNames.indexOf(woth5)].includes("woth")) {woth5 = AreaNames[i];}
		AreaWotHAge[i] = 3;
	}
	else if (Area[i] == "4woth" && AreaWotHAge[i] != 4) {		
		if (woth1 == "unknown" || !Area[AreaNames.indexOf(woth1)].includes("woth")) {woth1 = AreaNames[i];}
		else if (woth2 == "unknown" || !Area[AreaNames.indexOf(woth2)].includes("woth")) {woth2 = AreaNames[i];}
		else if (woth3 == "unknown" || !Area[AreaNames.indexOf(woth3)].includes("woth")) {woth3 = AreaNames[i];}
		else if (woth4 == "unknown" || !Area[AreaNames.indexOf(woth4)].includes("woth")) {woth4 = AreaNames[i];}
		else if (woth5 == "unknown" || !Area[AreaNames.indexOf(woth5)].includes("woth")) {woth5 = AreaNames[i];}
		AreaWotHAge[i] = 4;
	}
	else if (Area[i] == "5woth" && AreaWotHAge[i] != 5) {		
		if (woth1 == "unknown" || !Area[AreaNames.indexOf(woth1)].includes("woth")) {woth1 = AreaNames[i];}
		else if (woth2 == "unknown" || !Area[AreaNames.indexOf(woth2)].includes("woth")) {woth2 = AreaNames[i];}
		else if (woth3 == "unknown" || !Area[AreaNames.indexOf(woth3)].includes("woth")) {woth3 = AreaNames[i];}
		else if (woth4 == "unknown" || !Area[AreaNames.indexOf(woth4)].includes("woth")) {woth4 = AreaNames[i];}
		else if (woth5 == "unknown" || !Area[AreaNames.indexOf(woth5)].includes("woth")) {woth5 = AreaNames[i];}
		AreaWotHAge[i] = 5;
	}
	else if (Area[i] == "normal" || Area[i] == "barren") {
		if (woth1 == AreaNames[i]) {woth1 = "unknown"}
		if (woth2 == AreaNames[i]) {woth2 = "unknown"}
		if (woth3 == AreaNames[i]) {woth3 = "unknown"}
		if (woth4 == AreaNames[i]) {woth4 = "unknown"}
		if (woth5 == AreaNames[i]) {woth5 = "unknown"}
	AreaWotHAge[i] = 0;	
	}
}
if (!WotHItems.includes("forest_medallion")) { WotHItems.push("forest_medallion");}
if (!WotHItems.includes("fire_medallion")) { WotHItems.push("fire_medallion");}
if (!WotHItems.includes("water_medallion")) { WotHItems.push("water_medallion");}
if (!WotHItems.includes("gen1")) { WotHItems.push("gen1");}
if (!WotHItems.includes("gen2")) { WotHItems.push("gen2");}
if (!WotHItems.includes("gen3")) { WotHItems.push("gen3");}
if (!WotHItems.includes("light_arrows")) {WotHItems.push("light_arrows");}
	if (Known.bow1 && Known.bow2 && Known.bow3) {
		if (ChecksLockedBy.bow1.includes(Location.bow2) && ChecksLockedBy.bow1.includes(Location.bow3)) {if (!WotHItems.includes("bow1")) {WotHItems.push("bow1")}}
		if (ChecksLockedBy.bow2.includes(Location.bow1) && ChecksLockedBy.bow2.includes(Location.bow3)) {if (!WotHItems.includes("bow2")) {WotHItems.push("bow2")}}
		if (ChecksLockedBy.bow3.includes(Location.bow2) && ChecksLockedBy.bow3.includes(Location.bow1)) {if (!WotHItems.includes("bow3")) {WotHItems.push("bow3")}}
		}
	if (ChecksLockedBy.magic1.includes(Location.magic2)) {if (!WotHItems.includes("magic1")) {WotHItems.push("magic1")}}
	if (ChecksLockedBy.magic2.includes(Location.magic1)) {if (!WotHItems.includes("magic2")) {WotHItems.push("magic2")}}
	for (var i = 0; i<Items.length; i++) {
		if (Items[i] != null) {
			for (var j = 0; j<WotHItems.length; j++){
				if (Location[WotHItems[j]] != null) {
					if (ChecksLockedBy[Items[i]].includes(Location[WotHItems[j]])) {
							if (!WotHItems.includes(Items[i])) {WotHItems.push(Items[i]);}
					}
				}
			}
		}
	}
	for (var i = 1; i <= 34; i++) {
		
		var tempnumber1 = 1;
		var tempnumber2 = 0;
		var tempnumber3 = 1;
		var tempbool = false;
	
		
		if (woth1 == AreaNames[i] || woth2 == AreaNames[i] || woth3 == AreaNames[i] || woth4 == AreaNames[i] || woth5 == AreaNames[i]) {
			
			if (woth1 == AreaNames[i]) {tempnumber2 = 1;}
			else if (woth2 == AreaNames[i]) {tempnumber2 = 2;}
			else if (woth3 == AreaNames[i]) {tempnumber2 = 3;}
			else if (woth4 == AreaNames[i]) {tempnumber2 = 4;}
			else if (woth5 == AreaNames[i]) {tempnumber2 = 5;}
			var tempArray = [];
			document.getElementById("woth" + tempnumber2 + "_text" + 1).innerHTML="";
			document.getElementById("woth" + tempnumber2 + "_text" + 2).innerHTML="";
			document.getElementById("woth" + tempnumber2 + "_text" + 3).innerHTML="";
			document.getElementById("woth" + tempnumber2 + "_text" + 4).innerHTML="";
			document.getElementById("woth" + tempnumber2 + "_text" + 5).innerHTML="";
			document.getElementById("woth" + tempnumber2 + "_text" + 6).innerHTML="";
			if (Location.farores_wind != null && (Hinted[Location.farores_wind] == false || typeof Hinted[Location.farores_wind] == "undefined")) {if (Locations.indexOf(Location.farores_wind) >= AreaIndexes[i-1] && Locations.indexOf(Location.farores_wind) < AreaIndexes[i]) {if (WotHItems.includes("farores_wind")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;}document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Farores"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.farores_wind.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("farores_wind"); }} 	
			if (Location.slingshot1 != null && (Hinted[Location.slingshot1] == false || typeof Hinted[Location.slingshot1] == "undefined")) {if (Locations.indexOf(Location.slingshot1) >= AreaIndexes[i-1] && Locations.indexOf(Location.slingshot1) < AreaIndexes[i]) {if (Logic.slingshot2 && !ChecksPutInLogicBy.slingshot1.includes(Location.slingshot2)){} else if (Logic.slingshot3 && !ChecksPutInLogicBy.slingshot1.includes(Location.slingshot3)) {} else {if (WotHItems.includes("slingshot1")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Slingshot"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.slingshot1.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("slingshot1"); }}} 	
			if (Location.slingshot2 != null && (Hinted[Location.slingshot2] == false || typeof Hinted[Location.slingshot2] == "undefined")) {if (Locations.indexOf(Location.slingshot2) >= AreaIndexes[i-1] && Locations.indexOf(Location.slingshot2) < AreaIndexes[i]) {if (Logic.slingshot3 && !ChecksPutInLogicBy.slingshot2.includes(Location.slingshot3)){} else if (Logic.slingshot1 && !ChecksPutInLogicBy.slingshot2.includes(Location.slingshot1)) {} else {if (WotHItems.includes("slingshot2")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Slingshot"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.slingshot2.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("slingshot2"); }}} 	
			if (Location.slingshot3 != null && (Hinted[Location.slingshot3] == false || typeof Hinted[Location.slingshot3] == "undefined")) {if (Locations.indexOf(Location.slingshot3) >= AreaIndexes[i-1] && Locations.indexOf(Location.slingshot3) < AreaIndexes[i]) {if (Logic.slingshot1 && !ChecksPutInLogicBy.slingshot3.includes(Location.slingshot1)){} else if (Logic.slingshot2 && !ChecksPutInLogicBy.slingshot3.includes(Location.slingshot2)) {} else {if (WotHItems.includes("slingshot3")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Slingshot"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.slingshot3.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("slingshot3"); }}} 	
			if (Location.boomerang != null && (Hinted[Location.boomerang] == false || typeof Hinted[Location.boomerang] == "undefined")) {if (Locations.indexOf(Location.boomerang) >= AreaIndexes[i-1] && Locations.indexOf(Location.boomerang) < AreaIndexes[i]) {if (WotHItems.includes("boomerang")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Boomerang"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.boomerang.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("boomerang"); }} 	
			if (Location.scale1 != null && (Hinted[Location.scale1] == false || typeof Hinted[Location.scale1] == "undefined")) {if (Locations.indexOf(Location.scale1) >= AreaIndexes[i-1] && Locations.indexOf(Location.scale1) < AreaIndexes[i]) {if (WotHItems.includes("scale1")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Scale"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.scale1.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("scale1"); }} 	 
			if (Location.scale2 != null && (Hinted[Location.scale2] == false || typeof Hinted[Location.scale2] == "undefined")) {if (Locations.indexOf(Location.scale2) >= AreaIndexes[i-1] && Locations.indexOf(Location.scale2) < AreaIndexes[i]) {if (WotHItems.includes("scale2")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Scale"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.scale2.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("scale2"); }} 	
			if (Location.bomb_bag1 != null && (Hinted[Location.bomb_bag1] == false || typeof Hinted[Location.bomb_bag1] == "undefined")) {if (Locations.indexOf(Location.bomb_bag1) >= AreaIndexes[i-1] && Locations.indexOf(Location.bomb_bag1) < AreaIndexes[i]) {if (Logic.bomb_bag2 && !ChecksPutInLogicBy.bomb_bag1.includes(Location.bomb_bag2)){} else if (Logic.bomb_bag3 && !ChecksPutInLogicBy.bomb_bag1.includes(Location.bomb_bag3)) {} else {if (WotHItems.includes("bomb_bag1")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Bomb Bag"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.bomb_bag1.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("bomb_bag1"); }}} 	
			if (Location.bomb_bag2 != null && (Hinted[Location.bomb_bag2] == false || typeof Hinted[Location.bomb_bag2] == "undefined")) {if (Locations.indexOf(Location.bomb_bag2) >= AreaIndexes[i-1] && Locations.indexOf(Location.bomb_bag2) < AreaIndexes[i]) {if (Logic.bomb_bag3 && !ChecksPutInLogicBy.bomb_bag2.includes(Location.bomb_bag3)){} else if (Logic.bomb_bag1 && !ChecksPutInLogicBy.bomb_bag2.includes(Location.bomb_bag1)) {} else {if (WotHItems.includes("bomb_bag2")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Bomb Bag"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.bomb_bag2.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("bomb_bag2"); }}} 	
			if (Location.bomb_bag3 != null && (Hinted[Location.bomb_bag3] == false || typeof Hinted[Location.bomb_bag3] == "undefined")) {if (Locations.indexOf(Location.bomb_bag3) >= AreaIndexes[i-1] && Locations.indexOf(Location.bomb_bag3) < AreaIndexes[i]) {if (Logic.bomb_bag1 && !ChecksPutInLogicBy.bomb_bag3.includes(Location.bomb_bag1)){} else if (Logic.bomb_bag2 && !ChecksPutInLogicBy.bomb_bag3.includes(Location.bomb_bag2)) {} else {if (WotHItems.includes("bomb_bag3")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Bomb Bag"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.bomb_bag3.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("bomb_bag3"); }}} 	
			if (Location.bow1 != null && (Hinted[Location.bow1] == false || typeof Hinted[Location.bow1] == "undefined")) {if (Locations.indexOf(Location.bow1) >= AreaIndexes[i-1] && Locations.indexOf(Location.bow1) < AreaIndexes[i]) {if (Logic.bow2 && !ChecksPutInLogicBy.bow1.includes(Location.bow2)){} else if (Logic.bow3 && !ChecksPutInLogicBy.bow1.includes(Location.bow3)) {} else {if (WotHItems.includes("bow1")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Bow"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.bow1.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("bow1"); }}} 	
			if (Location.bow2 != null && (Hinted[Location.bow2] == false || typeof Hinted[Location.bow2] == "undefined")) {if (Locations.indexOf(Location.bow2) >= AreaIndexes[i-1] && Locations.indexOf(Location.bow2) < AreaIndexes[i]) {if (Logic.bow3 && !ChecksPutInLogicBy.bow2.includes(Location.bow3)){} else if (Logic.bow1 && !ChecksPutInLogicBy.bow2.includes(Location.bow1)) {} else {if (WotHItems.includes("bow2")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Bow"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.bow2.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("bow2"); }}} 	
			if (Location.bow3 != null && (Hinted[Location.bow3] == false || typeof Hinted[Location.bow3] == "undefined")) {if (Locations.indexOf(Location.bow3) >= AreaIndexes[i-1] && Locations.indexOf(Location.bow3) < AreaIndexes[i]) {if (Logic.bow1 && !ChecksPutInLogicBy.bow3.includes(Location.bow1)){} else if (Logic.bow2 && !ChecksPutInLogicBy.bow3.includes(Location.bow2)) {} else {if (WotHItems.includes("bow3")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Bow"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.bow3.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("bow3"); }}} 	
			if (Location.hookshot1 != null && (Hinted[Location.hookshot1] == false || typeof Hinted[Location.hookshot1] == "undefined")) {if (Locations.indexOf(Location.hookshot1) >= AreaIndexes[i-1] && Locations.indexOf(Location.hookshot1) < AreaIndexes[i]) {if (WotHItems.includes("hookshot1")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Hookshot"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.hookshot1.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("hookshot1"); }} 	
			if (Location.hookshot2 != null && (Hinted[Location.hookshot2] == false || typeof Hinted[Location.hookshot2] == "undefined")) {if (Locations.indexOf(Location.hookshot2) >= AreaIndexes[i-1] && Locations.indexOf(Location.hookshot2) < AreaIndexes[i]) {if (WotHItems.includes("hookshot2")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Hookshot"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.hookshot2.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("hookshot2"); }} 	
			if (Location.strength1 != null && (Hinted[Location.strength1] == false || typeof Hinted[Location.strength1] == "undefined")) {if (Locations.indexOf(Location.strength1) >= AreaIndexes[i-1] && Locations.indexOf(Location.strength1) < AreaIndexes[i]) {if (WotHItems.includes("strength1")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Strength"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.strength1.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("strength1"); }} 	
			if (Location.strength2 != null && (Hinted[Location.strength2] == false || typeof Hinted[Location.strength2] == "undefined")) {if (Locations.indexOf(Location.strength2) >= AreaIndexes[i-1] && Locations.indexOf(Location.strength2) < AreaIndexes[i]) {if (WotHItems.includes("strength2")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Strength"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.strength2.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("strength2"); }} 	
			if (Location.strength3 != null && (Hinted[Location.strength3] == false || typeof Hinted[Location.strength3] == "undefined")) {if (Locations.indexOf(Location.strength3) >= AreaIndexes[i-1] && Locations.indexOf(Location.strength3) < AreaIndexes[i]) {if (WotHItems.includes("strength3")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Strength"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.strength3.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("strength3"); }} 	 
			if (Location.magic1 != null && (Hinted[Location.magic1] == false || typeof Hinted[Location.magic1] == "undefined")) {if (Locations.indexOf(Location.magic1) >= AreaIndexes[i-1] && Locations.indexOf(Location.magic1) < AreaIndexes[i]) {if (Logic.magic2 && !ChecksPutInLogicBy.magic1.includes(Location.magic2)){} else {if (WotHItems.includes("magic1")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Magic"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.magic1.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("magic1"); }}} 	 
			if (Location.magic2 != null && (Hinted[Location.magic2] == false || typeof Hinted[Location.magic2] == "undefined")) {if (Locations.indexOf(Location.magic2) >= AreaIndexes[i-1] && Locations.indexOf(Location.magic2) < AreaIndexes[i]) {if (Logic.magic1 && !ChecksPutInLogicBy.magic2.includes(Location.magic1)){} else {if (WotHItems.includes("magic2")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Magic"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.magic2.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("magic2"); }}} 	
			if (Location.wallet1 != null && (Hinted[Location.wallet1] == false || typeof Hinted[Location.wallet1] == "undefined")) {if (Locations.indexOf(Location.wallet1) >= AreaIndexes[i-1] && Locations.indexOf(Location.wallet1) < AreaIndexes[i]) {if (WotHItems.includes("wallet1")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Wallet"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.wallet1.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("wallet1"); }} 	
			if (Location.wallet2 != null && (Hinted[Location.wallet2] == false || typeof Hinted[Location.wallet2] == "undefined")) {if (Locations.indexOf(Location.wallet2) >= AreaIndexes[i-1] && Locations.indexOf(Location.wallet2) < AreaIndexes[i]) {if (WotHItems.includes("wallet2")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Wallet"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.wallet2.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("wallet2"); }} 	 
			if (Location.bottle1 != null && (Hinted[Location.bottle1] == false || typeof Hinted[Location.bottle1] == "undefined")) {if (Locations.indexOf(Location.bottle1) >= AreaIndexes[i-1] && Locations.indexOf(Location.bottle1) < AreaIndexes[i]) {if (Location.bottle2 != null && !ChecksPutInLogicBy.bottle1.includes(Location.bottle2)){} else if (Location.bottle3 != null && !ChecksPutInLogicBy.bottle1.includes(Location.bottle3)) {} else {if (WotHItems.includes("bottle1")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Bottle"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.bottle1.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("bottle1"); }}} 	
			if (Location.bottle2 != null && (Hinted[Location.bottle2] == false || typeof Hinted[Location.bottle2] == "undefined")) {if (Locations.indexOf(Location.bottle2) >= AreaIndexes[i-1] && Locations.indexOf(Location.bottle2) < AreaIndexes[i]) {if (Location.bottle3 != null && !ChecksPutInLogicBy.bottle2.includes(Location.bottle3)){} else if (Location.bottle1 != null && !ChecksPutInLogicBy.bottle2.includes(Location.bottle1)) {} else {if (WotHItems.includes("bottle2")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Bottle"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.bottle2.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("bottle2"); }}}
			if (Location.bottle3 != null && (Hinted[Location.bottle3] == false || typeof Hinted[Location.bottle3] == "undefined")) {if (Locations.indexOf(Location.bottle3) >= AreaIndexes[i-1] && Locations.indexOf(Location.bottle3) < AreaIndexes[i]) {if (Location.bottle1 != null && !ChecksPutInLogicBy.bottle3.includes(Location.bottle1)){} else if (Location.bottle2 != null && !ChecksPutInLogicBy.bottle3.includes(Location.bottle2)) {} else {if (WotHItems.includes("bottle3")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Bottle"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.bottle3.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("bottle3"); }}} 	
			if (Location.rutos_letter != null && (Hinted[Location.rutos_letter] == false || typeof Hinted[Location.rutos_letter] == "undefined")) {if (Locations.indexOf(Location.rutos_letter) >= AreaIndexes[i-1] && Locations.indexOf(Location.rutos_letter) < AreaIndexes[i]) {if (WotHItems.includes("rutos_letter")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Letter"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.rutos_letter.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("rutos_letter"); }} 	
			if (Location.hammer != null && (Hinted[Location.hammer] == false || typeof Hinted[Location.hammer] == "undefined")) {if (Locations.indexOf(Location.hammer) >= AreaIndexes[i-1] && Locations.indexOf(Location.hammer) < AreaIndexes[i]) {if (WotHItems.includes("hammer")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Hammer"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.hammer.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("hammer"); }} 	 
			if (Location.mirror_shield != null && (Hinted[Location.mirror_shield] == false || typeof Hinted[Location.mirror_shield] == "undefined")) {if (Locations.indexOf(Location.mirror_shield) >= AreaIndexes[i-1] && Locations.indexOf(Location.mirror_shield) < AreaIndexes[i]) {if (WotHItems.includes("mirror_shield")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Mirror"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.mirror_shield.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("mirror_shield"); }} 	 
			if (Location.iron_boots != null && (Hinted[Location.iron_boots] == false || typeof Hinted[Location.iron_boots] == "undefined")) {if (Locations.indexOf(Location.iron_boots) >= AreaIndexes[i-1] && Locations.indexOf(Location.iron_boots) < AreaIndexes[i]) {if (WotHItems.includes("iron_boots")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Irons"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.iron_boots.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("iron_boots"); }} 	 
			if (Location.hover_boots != null && (Hinted[Location.hover_boots] == false || typeof Hinted[Location.hover_boots] == "undefined")) {if (Locations.indexOf(Location.hover_boots) >= AreaIndexes[i-1] && Locations.indexOf(Location.hover_boots) < AreaIndexes[i]) {if (WotHItems.includes("hover_boots")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Hovers"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.hover_boots.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("hover_boots"); }} 	
			if (Location.goron_tunic != null && (Hinted[Location.goron_tunic] == false || typeof Hinted[Location.goron_tunic] == "undefined")) {if (Locations.indexOf(Location.goron_tunic) >= AreaIndexes[i-1] && Locations.indexOf(Location.goron_tunic) < AreaIndexes[i]) {if (WotHItems.includes("goron_tunic")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Goron Tunic"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.goron_tunic.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("goron_tunic"); }} 	
			if (Location.zora_tunic != null && (Hinted[Location.zora_tunic] == false || typeof Hinted[Location.zora_tunic] == "undefined")) {if (Locations.indexOf(Location.zora_tunic) >= AreaIndexes[i-1] && Locations.indexOf(Location.zora_tunic) < AreaIndexes[i]) {if (WotHItems.includes("zora_tunic")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Zora Tunic"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.zora_tunic.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("zora_tunic"); }} 	 
			if (Location.dins_fire != null && (Hinted[Location.dins_fire] == false || typeof Hinted[Location.dins_fire] == "undefined")) {if (Locations.indexOf(Location.dins_fire) >= AreaIndexes[i-1] && Locations.indexOf(Location.dins_fire) < AreaIndexes[i]) {if (WotHItems.includes("dins_fire")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Din's Fire"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.dins_fire.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("dins_fire"); }} 	
			if (Location.fire_arrows != null && (Hinted[Location.fire_arrows] == false || typeof Hinted[Location.fire_arrows] == "undefined")) {if (Locations.indexOf(Location.fire_arrows) >= AreaIndexes[i-1] && Locations.indexOf(Location.fire_arrows) < AreaIndexes[i]) {if (WotHItems.includes("fire_arrows")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Fire Arrows "; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.fire_arrows.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("fire_arrows"); }} 	
			if (Location.lens_of_truth != null && (Hinted[Location.lens_of_truth] == false || typeof Hinted[Location.lens_of_truth] == "undefined")) {if (Locations.indexOf(Location.lens_of_truth) >= AreaIndexes[i-1] && Locations.indexOf(Location.lens_of_truth) < AreaIndexes[i]) {if (WotHItems.includes("lens_of_truth")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Lens"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.lens_of_truth.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("lens_of_truth"); }} 	
			if (Location.light_arrows != null && (Hinted[Location.light_arrows] == false || typeof Hinted[Location.light_arrows] == "undefined")) {if (Locations.indexOf(Location.light_arrows) >= AreaIndexes[i-1] && Locations.indexOf(Location.light_arrows) < AreaIndexes[i]) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1; document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Light Arrows"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.light_arrows.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("light_arrows"); }} 	
			if (Location.prescription != null && (Hinted[Location.prescription] == false || typeof Hinted[Location.prescription] == "undefined")) {if (Locations.indexOf(Location.prescription) >= AreaIndexes[i-1] && Locations.indexOf(Location.prescription) < AreaIndexes[i]) {if (WotHItems.includes("prescription")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Prescription"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.prescription.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("prescription"); }} 	
			if (Location.claim_check != null && (Hinted[Location.claim_check] == false || typeof Hinted[Location.claim_check] == "undefined")) {if (Locations.indexOf(Location.claim_check) >= AreaIndexes[i-1] && Locations.indexOf(Location.claim_check) < AreaIndexes[i]) {if (WotHItems.includes("claim_check")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Claim Check"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.claim_check.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("claim_check"); }} 	 
			if (Location.lullaby != null && (Hinted[Location.lullaby] == false || typeof Hinted[Location.lullaby] == "undefined")) {if (Locations.indexOf(Location.lullaby) == SongIndexes[i-1] || Locations.indexOf(Location.lullaby) == SongIndexes2[i-1]) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1; document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Lullaby"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.lullaby.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1;}}
			//if (Location.lullaby != null && Hinted[Location.lullaby] == false || typeof Hinted[Location.lullaby] == "undefined")) {if (Locations.indexOf(Location.lullaby) == SongIndexes[i-1] || Locations.indexOf(Location.lullaby) == SongIndexes2[i-1]) {if (WotHItems.includes("lullaby")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Lullaby"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.lullaby.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("lullaby"); }} 	 
			if (Location.eponas != null && (Hinted[Location.eponas] == false || typeof Hinted[Location.eponas] == "undefined")) {if (Locations.indexOf(Location.eponas) == SongIndexes[i-1] || Locations.indexOf(Location.eponas) == SongIndexes2[i-1]) {if (WotHItems.includes("eponas")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Eponas"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.eponas.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("eponas"); }} 	 
			if (Location.sarias != null && (Hinted[Location.sarias] == false || typeof Hinted[Location.sarias] == "undefined")) {if (Locations.indexOf(Location.sarias) == SongIndexes[i-1] || Locations.indexOf(Location.sarias) == SongIndexes2[i-1]) {if (WotHItems.includes("sarias")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Sarias"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.sarias.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("sarias"); }} 	 
			if (Location.suns_song != null && (Hinted[Location.suns_song] == false || typeof Hinted[Location.suns_song] == "undefined")) {if (Locations.indexOf(Location.suns_song) == SongIndexes[i-1] || Locations.indexOf(Location.suns_song) == SongIndexes2[i-1]) {if (WotHItems.includes("suns_song")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Suns"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.suns_song.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("suns_song"); }} 	
			if (Location.song_of_time != null && (Hinted[Location.song_of_time] == false || typeof Hinted[Location.song_of_time] == "undefined")) {if (Locations.indexOf(Location.song_of_time) == SongIndexes[i-1] || Locations.indexOf(Location.song_of_time) == SongIndexes2[i-1]) {if (WotHItems.includes("song_of_time")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Time"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.song_of_time.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("song_of_time"); }} 	 
			if (Location.song_of_storms != null && (Hinted[Location.song_of_storms] == false || typeof Hinted[Location.song_of_storms] == "undefined")) {if (Locations.indexOf(Location.song_of_storms) == SongIndexes[i-1] || Locations.indexOf(Location.song_of_storms) == SongIndexes2[i-1]) {if (WotHItems.includes("song_of_storms")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Storms"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.song_of_storms.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("song_of_storms"); }} 	 
			if (Location.minuet != null && (Hinted[Location.minuet] == false || typeof Hinted[Location.minuet] == "undefined")) {if (Locations.indexOf(Location.minuet) == SongIndexes[i-1] || Locations.indexOf(Location.minuet) == SongIndexes2[i-1]) {if (WotHItems.includes("minuet")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Minuet"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.minuet.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("minuet"); }} 	 
			if (Location.bolero != null && (Hinted[Location.bolero] == false || typeof Hinted[Location.bolero] == "undefined")) {if (Locations.indexOf(Location.bolero) == SongIndexes[i-1] || Locations.indexOf(Location.bolero) == SongIndexes2[i-1]) {if (WotHItems.includes("bolero")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Bolero"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.bolero.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("bolero"); }} 	 
			if (Location.requiem != null && (Hinted[Location.requiem] == false || typeof Hinted[Location.requiem] == "undefined")) {if (Locations.indexOf(Location.requiem) == SongIndexes[i-1] || Locations.indexOf(Location.requiem) == SongIndexes2[i-1]) {if (WotHItems.includes("requiem")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Requiem"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.requiem.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("requiem"); }} 
			if (Location.nocturne != null && (Hinted[Location.nocturne] == false || typeof Hinted[Location.nocturne] == "undefined")) {if (Locations.indexOf(Location.nocturne) == SongIndexes[i-1] || Locations.indexOf(Location.nocturne) == SongIndexes2[i-1]) {if (WotHItems.includes("nocturne")) {document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).className = "woth_item_text"; tempnumber3 +=1;} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML = "Nocturne"; for (var j = 0; j < Items.length; j++) {if (ChecksLockedBy.nocturne.includes(Location[Items[j]])){document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += ", " + ItemNames[j];}} document.getElementById("woth" + tempnumber2 + "_text" + tempnumber1).innerHTML += " <br />"; tempnumber1 += 1; tempArray.push("nocturne"); }} 	
			
			var tempArray2 = [];
			for (k = 0; k < tempArray.length; k++) {
				var tempArray3 = [];
				for (l = 0; l < ChecksPutInLogicBy[tempArray[k]].length; l++) {
					if (document.getElementById(ChecksPutInLogicBy[tempArray[k]][l]) != null) {
						tempArray3.push(ChecksPutInLogicBy[tempArray[k]][l]);
					}
				}
				tempArray2.push.apply(tempArray2, tempArray3);
			}
			
			document.getElementById("woth" + tempnumber2 + "_title").style.color= WotHColors[tempnumber2];
			if (AreaWotHAge[i] < tempnumber3) {
				document.getElementById("woth" + tempnumber2 + "_title").style.opacity = .2;
				if (tempnumber2 == 1) {woth1Locations =[];}
				if (tempnumber2 == 2) {woth2Locations = [];}
				if (tempnumber2 == 3) {woth3Locations = [];}
				if (tempnumber2 == 4) {woth4Locations =[];}
				if (tempnumber2 == 5) {woth5Locations = [];}
			}
			if (AreaWotHAge[i] >= tempnumber3) {
				document.getElementById("woth" + tempnumber2 + "_title").style.opacity = 1;
				if (tempnumber2 == 1) {woth1Locations = tempArray2.slice(0);}
				if (tempnumber2 == 2) {woth2Locations = tempArray2.slice(0);}
				if (tempnumber2 == 3) {woth3Locations = tempArray2.slice(0);}
				if (tempnumber2 == 4) {woth4Locations = tempArray2.slice(0);}
				if (tempnumber2 == 5) {woth5Locations = tempArray2.slice(0);}
			}
		}
		
	}	
	
for (var i = 1; i <= 34; i++) {
	
	if (Area[i] == "barren") {AreaAge[i] += 1;}
	else {AreaAge[i] = 0;}
	
	if (AreaAge[i] == 10) {
		hinted = true;
		if (i == 1) {
			if(document.getElementById("text_" + Locations[0]) != null) {document.getElementById("text_" + Locations[0]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[1]) != null) {document.getElementById("text_" + Locations[1]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[2]) != null) {document.getElementById("text_" + Locations[2]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[3]) != null) {document.getElementById("text_" + Locations[3]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[4]) != null) {document.getElementById("text_" + Locations[4]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[5]) != null) {document.getElementById("text_" + Locations[5]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 2) {
			if(document.getElementById("text_" + Locations[6]) != null) {document.getElementById("text_" + Locations[6]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[7]) != null) {document.getElementById("text_" + Locations[7]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 3) {
			if(document.getElementById("text_" + Locations[8]) != null) {document.getElementById("text_" + Locations[8]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[9]) != null) {document.getElementById("text_" + Locations[9]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[10]) != null) {document.getElementById("text_" + Locations[10]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[11]) != null) {document.getElementById("text_" + Locations[11]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[12]) != null) {document.getElementById("text_" + Locations[12]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 4) {
			if(document.getElementById("text_" + Locations[13]) != null) {document.getElementById("text_" + Locations[13]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[14]) != null) {document.getElementById("text_" + Locations[14]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[15]) != null) {document.getElementById("text_" + Locations[15]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 5) {
			if(document.getElementById("text_" + Locations[16]) != null) {document.getElementById("text_" + Locations[16]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[17]) != null) {document.getElementById("text_" + Locations[17]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[18]) != null) {document.getElementById("text_" + Locations[18]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[19]) != null) {document.getElementById("text_" + Locations[19]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[20]) != null) {document.getElementById("text_" + Locations[20]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[21]) != null) {document.getElementById("text_" + Locations[21]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 6) {
			if(document.getElementById("text_" + Locations[22]) != null) {document.getElementById("text_" + Locations[22]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[23]) != null) {document.getElementById("text_" + Locations[23]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[24]) != null) {document.getElementById("text_" + Locations[24]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[25]) != null) {document.getElementById("text_" + Locations[25]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[26]) != null) {document.getElementById("text_" + Locations[26]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[27]) != null) {document.getElementById("text_" + Locations[27]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 7) {
			if(document.getElementById("text_" + Locations[28]) != null) {document.getElementById("text_" + Locations[28]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 8) {
			if(document.getElementById("text_" + Locations[29]) != null) {document.getElementById("text_" + Locations[29]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 9) {
			if(document.getElementById("text_" + Locations[30]) != null) {document.getElementById("text_" + Locations[30]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 10) {
			if(document.getElementById("text_" + Locations[31]) != null) {document.getElementById("text_" + Locations[31]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[32]) != null) {document.getElementById("text_" + Locations[32]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[33]) != null) {document.getElementById("text_" + Locations[33]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 11) {
			if(document.getElementById("text_" + Locations[34]) != null) {document.getElementById("text_" + Locations[34]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[35]) != null) {document.getElementById("text_" + Locations[35]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[36]) != null) {document.getElementById("text_" + Locations[36]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[37]) != null) {document.getElementById("text_" + Locations[37]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 12) {
			if(document.getElementById("text_" + Locations[38]) != null) {document.getElementById("text_" + Locations[38]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[39]) != null) {document.getElementById("text_" + Locations[39]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[40]) != null) {document.getElementById("text_" + Locations[40]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[41]) != null) {document.getElementById("text_" + Locations[41]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[42]) != null) {document.getElementById("text_" + Locations[42]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[43]) != null) {document.getElementById("text_" + Locations[43]).dispatchEvent(new Event('mousedown'));}
			Game.deku_checks_remaining = 0;
			Game.checks_remaining -= 1;
		}
		if (i == 13) {
			if(document.getElementById("text_" + Locations[45]) != null) {document.getElementById("text_" + Locations[45]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[46]) != null) {document.getElementById("text_" + Locations[46]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[47]) != null) {document.getElementById("text_" + Locations[47]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[48]) != null) {document.getElementById("text_" + Locations[48]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[49]) != null) {document.getElementById("text_" + Locations[49]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[50]) != null) {document.getElementById("text_" + Locations[50]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[51]) != null) {document.getElementById("text_" + Locations[51]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 14) {
			if(document.getElementById("text_" + Locations[52]) != null) {document.getElementById("text_" + Locations[52]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 15) {
			if(document.getElementById("text_" + Locations[53]) != null) {document.getElementById("text_" + Locations[53]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[54]) != null) {document.getElementById("text_" + Locations[54]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[55]) != null) {document.getElementById("text_" + Locations[55]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[56]) != null) {document.getElementById("text_" + Locations[56]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[57]) != null) {document.getElementById("text_" + Locations[57]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[58]) != null) {document.getElementById("text_" + Locations[58]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[59]) != null) {document.getElementById("text_" + Locations[59]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 16) {
			if(document.getElementById("text_" + Locations[60]) != null) {document.getElementById("text_" + Locations[60]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[61]) != null) {document.getElementById("text_" + Locations[61]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[62]) != null) {document.getElementById("text_" + Locations[62]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[63]) != null) {document.getElementById("text_" + Locations[63]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[64]) != null) {document.getElementById("text_" + Locations[64]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[65]) != null) {document.getElementById("text_" + Locations[65]).dispatchEvent(new Event('mousedown'));}
			Game.dodongos_checks_remaining = 0;
			Game.checks_remaining -= 1;
		}
		if (i == 17) {
			if(document.getElementById("text_" + Locations[67]) != null) {document.getElementById("text_" + Locations[67]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[68]) != null) {document.getElementById("text_" + Locations[68]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[69]) != null) {document.getElementById("text_" + Locations[69]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[70]) != null) {document.getElementById("text_" + Locations[70]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[71]) != null) {document.getElementById("text_" + Locations[71]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 18) {
			if(document.getElementById("text_" + Locations[72]) != null) {document.getElementById("text_" + Locations[72]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[73]) != null) {document.getElementById("text_" + Locations[73]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[74]) != null) {document.getElementById("text_" + Locations[74]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[75]) != null) {document.getElementById("text_" + Locations[75]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 19) {
			if(document.getElementById("text_" + Locations[76]) != null) {document.getElementById("text_" + Locations[76]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[77]) != null) {document.getElementById("text_" + Locations[77]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[78]) != null) {document.getElementById("text_" + Locations[78]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[79]) != null) {document.getElementById("text_" + Locations[79]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[80]) != null) {document.getElementById("text_" + Locations[80]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[81]) != null) {document.getElementById("text_" + Locations[81]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[82]) != null) {document.getElementById("text_" + Locations[82]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[83]) != null) {document.getElementById("text_" + Locations[83]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[84]) != null) {document.getElementById("text_" + Locations[84]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[85]) != null) {document.getElementById("text_" + Locations[85]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[86]) != null) {document.getElementById("text_" + Locations[86]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[87]) != null) {document.getElementById("text_" + Locations[87]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[88]) != null) {document.getElementById("text_" + Locations[88]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 20) {
			if(document.getElementById("text_" + Locations[89]) != null) {document.getElementById("text_" + Locations[89]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[90]) != null) {document.getElementById("text_" + Locations[90]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[91]) != null) {document.getElementById("text_" + Locations[91]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[92]) != null) {document.getElementById("text_" + Locations[92]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[93]) != null) {document.getElementById("text_" + Locations[93]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[94]) != null) {document.getElementById("text_" + Locations[94]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[95]) != null) {document.getElementById("text_" + Locations[95]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 21) {
			if(document.getElementById("text_" + Locations[96]) != null) {document.getElementById("text_" + Locations[96]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[97]) != null) {document.getElementById("text_" + Locations[97]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[98]) != null) {document.getElementById("text_" + Locations[98]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[99]) != null) {document.getElementById("text_" + Locations[99]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[100]) != null) {document.getElementById("text_" + Locations[100]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 22) {
			if(document.getElementById("text_" + Locations[101]) != null) {document.getElementById("text_" + Locations[101]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[102]) != null) {document.getElementById("text_" + Locations[102]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[103]) != null) {document.getElementById("text_" + Locations[103]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 23) {
			if(document.getElementById("text_" + Locations[104]) != null) {document.getElementById("text_" + Locations[104]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[105]) != null) {document.getElementById("text_" + Locations[105]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 24) {
			if(document.getElementById("text_" + Locations[106]) != null) {document.getElementById("text_" + Locations[106]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 25) {
			if(document.getElementById("text_" + Locations[107]) != null) {document.getElementById("text_" + Locations[107]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[108]) != null) {document.getElementById("text_" + Locations[108]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[109]) != null) {document.getElementById("text_" + Locations[109]).dispatchEvent(new Event('mousedown'));}
		}
		if (i == 26) {
			if(document.getElementById("text_" + Locations[110]) != null) {document.getElementById("text_" + Locations[110]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[111]) != null) {document.getElementById("text_" + Locations[111]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[112]) != null) {document.getElementById("text_" + Locations[112]).dispatchEvent(new Event('mousedown'));}
			Game.jabu_checks_remaining = 0;
			Game.checks_remaining -= 1;
		}
		if (i == 27) {
			Game.checks_remaining -= Game.forest_checks_remaining;
			Game.forest_checks_remaining = 0;
		}
		if (i == 28) {
			Game.checks_remaining -= Game.fire_checks_remaining;
			Game.fire_checks_remaining = 0;
		}
		if (i == 29) {
			Game.checks_remaining -= Game.water_checks_remaining;
			Game.water_checks_remaining = 0;
		}
		if (i == 30) {
			Game.checks_remaining -= Game.spirit_checks_remaining;
			Game.spirit_checks_remaining = 0;
		}
		if (i == 31) {
			Game.checks_remaining -= Game.shadow_checks_remaining;
			Game.shadow_checks_remaining = 0;
		}
		if (i == 32) {
			document.getElementById("ganons").click();
		}
		if (i == 33) {
			Game.checks_remaining -= Game.gtg_checks_remaining;
			Game.gtg_checks_remaining = 0;
		}
		if (i == 34) {
			Game.checks_remaining -= Game.well_checks_remaining;
			Game.well_checks_remaining = 0;
		}
		hinted = false;
	}
}

if (Game.magic1 && Game.light_arrows && Game.bow1 && Game.ganons_checks_remaining > 0) {
	document.getElementById("ganons").click();
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
	else if (first == "fr" || first == "kk") {Logic.emerald = "pocket"; }
	
	if (second == "de") {Logic.ruby = "deku"; }
	else if (second == "do") {Logic.ruby = "dodongos"; }
	else if (second == "ja") {Logic.ruby = "jabu"; }
	else if (second == "fo") {Logic.ruby = "forest"; }
	else if (second == "fi") {Logic.ruby = "fire"; }
	else if (second == "wa") {Logic.ruby = "water"; }
	else if (second == "sp") {Logic.ruby = "spirit"; }
	else if (second == "sh") {Logic.ruby = "shadow"; }
	else if (second == "fr" || second == "kk") {Logic.ruby = "pocket"; }
	
	if (third == "de") {Logic.sapphire = "deku"; }
	else if (third == "do") {Logic.sapphire = "dodongos"; }
	else if (third == "ja") {Logic.sapphire = "jabu"; }
	else if (third == "fo") {Logic.sapphire = "forest"; }
	else if (third == "fi") {Logic.sapphire = "fire"; }
	else if (third == "wa") {Logic.sapphire = "water"; }
	else if (third == "sp") {Logic.sapphire = "spirit"; }
	else if (third == "sh") {Logic.sapphire = "shadow"; }
	else if (third == "fr" || third == "kk") {Logic.sapphire = "pocket"; }
	if(Logic.emerald.length > 0 && Logic.ruby.length > 0 && Logic.sapphire.length> 0 && Logic.emerald != "unknown" && Logic.ruby != "unknown" && Logic.sapphire != "unknown") {
		parent.removeChild(child);
		if (first == "de") {Logic.emerald = "deku"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "dek"; document.getElementById("text_kok_eme").id = "text_deku";}
	else if (first == "do") {Logic.emerald = "dodongos"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "dod"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.bomb_bag_img; document.getElementById("kok_eme_req1").id = "dod_req1"; document.getElementById("text_kok_eme").id = "text_dodongos";}
	else if (first == "ja") {Logic.emerald = "jabu"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "jab"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req2").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.letter_img; document.getElementById("kok_eme_req2").src=Game.boomerang_img; document.getElementById("kok_eme_req1").id = "jab_req1"; document.getElementById("kok_eme_req2").id = "jab_req2"; document.getElementById("text_kok_eme").id = "text_jabu";}
	else if (first == "fo") {Logic.emerald = "forest"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "for"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req2").className = "requirements"; document.getElementById("kok_eme_req3").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.hookshot_img; document.getElementById("kok_eme_req2").src=Game.bow_img; document.getElementById("kok_eme_req3").src=Game.goron_bracelet_img; document.getElementById("kok_eme_req1").id = "for_req1"; document.getElementById("kok_eme_req2").id = "for_req2"; document.getElementById("kok_eme_req3").id = "for_req3"; document.getElementById("text_kok_eme").id = "text_forest";}
	else if (first == "fi") {Logic.emerald = "fire"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "fir"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.hammer_img; document.getElementById("kok_eme_req1").id = "fir_req1"; document.getElementById("text_kok_eme").id = "text_fire";}
	else if (first == "wa") {Logic.emerald = "water"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "wat"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req2").className = "requirements"; document.getElementById("kok_eme_req3").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.iron_boots_img; document.getElementById("kok_eme_text2").innerHTML ="/"; document.getElementById("kok_eme_req2").src=Game.golden_scale_img; document.getElementById("kok_eme_text3").innerHTML = "+"; document.getElementById("kok_eme_req3").src=Game.longshot_img; document.getElementById("kok_eme_req1").id = "wat_req1"; document.getElementById("kok_eme_req2").id = "wat_req2"; document.getElementById("kok_eme_req3").id = "wat_req3"; document.getElementById("text_kok_eme").id = "text_water";}
	else if (first == "sp") {Logic.emerald = "spirit"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "spi"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req2").className = "requirements"; document.getElementById("kok_eme_req3").className = "requirements"; document.getElementById("kok_eme_req4").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.silver_gauntlets_img; document.getElementById("kok_eme_req2").src=Game.mirror_shield_img; document.getElementById("kok_eme_req3").src=Game.bomb_bag_img; document.getElementById("kok_eme_req4").src=Game.hookshot_img; document.getElementById("kok_eme_req1").id = "spi_req1"; document.getElementById("kok_eme_req2").id = "spi_req2"; document.getElementById("kok_eme_req3").id = "spi_req3"; document.getElementById("kok_eme_req4").id = "spi_req4"; document.getElementById("text_kok_eme").id = "text_spirit";}
	else if (first == "sh") {Logic.emerald = "shadow"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "sha"; document.getElementById("kok_eme_req1").className = "requirements"; document.getElementById("kok_eme_req2").className = "requirements"; document.getElementById("kok_eme_req3").className = "requirements"; document.getElementById("kok_eme_req4").className = "requirements"; document.getElementById("kok_eme_req5").className = "requirements"; document.getElementById("kok_eme_req1").src=Game.dins_fire_img; document.getElementById("kok_eme_req2").src =Game.magic_meter_img; document.getElementById("kok_eme_req3").src=Game.hover_boots_img; document.getElementById("kok_eme_req4").src=Game.bomb_bag_img; document.getElementById("kok_eme_req5").src=Game.hookshot_img; document.getElementById("kok_eme_req1").id = "sha_req1"; document.getElementById("kok_eme_req2").id = "sha_req2"; document.getElementById("kok_eme_req3").id = "sha_req3"; document.getElementById("kok_eme_req4").id = "sha_req4"; document.getElementById("kok_eme_req5").id = "sha_req5"; document.getElementById("text_kok_eme").id = "text_shadow";}
	else if (first == "fr" || first == "kk") {Logic.emerald = "pocket"; document.getElementById("text_kok_eme").className="greenstone"; document.getElementById("text_kok_eme").innerHTML = "pok"; document.getElementById("text_kok_eme").id = "text_pocket";}
	
	if (second == "de") {Logic.ruby = "deku"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "dek"; document.getElementById("text_gor_rub").id = "text_deku";}
	else if (second == "do") {Logic.ruby = "dodongos"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "dod"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.bomb_bag_img; document.getElementById("gor_rub_req1").id = "dod_req1"; document.getElementById("text_gor_rub").id = "text_dodongos";}
	else if (second == "ja") {Logic.ruby = "jabu"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "jab"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req2").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.letter_img; document.getElementById("gor_rub_req2").src=Game.boomerang_img; document.getElementById("gor_rub_req1").id = "jab_req1"; document.getElementById("gor_rub_req2").id = "jab_req2"; document.getElementById("text_gor_rub").id = "text_jabu";}
	else if (second == "fo") {Logic.ruby = "forest"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "for"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req2").className = "requirements"; document.getElementById("gor_rub_req3").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.hookshot_img; document.getElementById("gor_rub_req2").src=Game.bow_img; document.getElementById("gor_rub_req3").src=Game.goron_bracelet_img; document.getElementById("gor_rub_req1").id = "for_req1"; document.getElementById("gor_rub_req2").id = "for_req2"; document.getElementById("gor_rub_req3").id = "for_req3"; document.getElementById("text_gor_rub").id = "text_forest";}
	else if (second == "fi") {Logic.ruby = "fire"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "fir"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.hammer_img; document.getElementById("gor_rub_req1").id = "fir_req1"; document.getElementById("text_gor_rub").id = "text_fire";}
	else if (second == "wa") {Logic.ruby = "water"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "wat"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req2").className = "requirements"; document.getElementById("gor_rub_req3").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.iron_boots_img; document.getElementById("gor_rub_text2").innerHTML ="/"; document.getElementById("gor_rub_req2").src=Game.golden_scale_img; document.getElementById("gor_rub_text3").innerHTML = "+"; document.getElementById("gor_rub_req3").src=Game.longshot_img; document.getElementById("gor_rub_req1").id = "wat_req1"; document.getElementById("gor_rub_req2").id = "wat_req2"; document.getElementById("gor_rub_req3").id = "wat_req3"; document.getElementById("text_gor_rub").id = "text_water";}
	else if (second == "sp") {Logic.ruby = "spirit"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "spi"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req2").className = "requirements"; document.getElementById("gor_rub_req3").className = "requirements"; document.getElementById("gor_rub_req4").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.silver_gauntlets_img; document.getElementById("gor_rub_req2").src=Game.mirror_shield_img; document.getElementById("gor_rub_req3").src=Game.bomb_bag_img; document.getElementById("gor_rub_req4").src=Game.hookshot_img; document.getElementById("gor_rub_req1").id = "spi_req1"; document.getElementById("gor_rub_req2").id = "spi_req2"; document.getElementById("gor_rub_req3").id = "spi_req3"; document.getElementById("gor_rub_req4").id = "spi_req4"; document.getElementById("text_gor_rub").id = "text_spirit";}
	else if (second == "sh") {Logic.ruby = "shadow"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "sha"; document.getElementById("gor_rub_req1").className = "requirements"; document.getElementById("gor_rub_req2").className = "requirements"; document.getElementById("gor_rub_req3").className = "requirements"; document.getElementById("gor_rub_req4").className = "requirements"; document.getElementById("gor_rub_req5").className = "requirements"; document.getElementById("gor_rub_req1").src=Game.dins_fire_img; document.getElementById("gor_rub_req2").src =Game.magic_meter_img; document.getElementById("gor_rub_req3").src=Game.hover_boots_img; document.getElementById("gor_rub_req4").src=Game.bomb_bag_img; document.getElementById("gor_rub_req5").src=Game.hookshot_img; document.getElementById("gor_rub_req1").id = "sha_req1"; document.getElementById("gor_rub_req2").id = "sha_req2"; document.getElementById("gor_rub_req3").id = "sha_req3"; document.getElementById("gor_rub_req4").id = "sha_req4"; document.getElementById("gor_rub_req5").id = "sha_req5"; document.getElementById("text_gor_rub").id = "text_shadow";}
	else if (second == "fr" || second == "kk") {Logic.ruby = "pocket"; document.getElementById("text_gor_rub").className="redstone"; document.getElementById("text_gor_rub").innerHTML = "pok"; document.getElementById("text_gor_rub").id = "text_pocket";}
	
	if (third == "de") {Logic.sapphire = "deku"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "dek"; document.getElementById("text_zor_sap").id = "text_deku";}
	else if (third == "do") {Logic.sapphire = "dodongos"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "dod"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.bomb_bag_img; document.getElementById("zor_sap_req1").id = "dod_req1"; document.getElementById("text_zor_sap").id = "text_dodongos";}
	else if (third == "ja") {Logic.sapphire = "jabu"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "jab"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req2").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.letter_img; document.getElementById("zor_sap_req2").src=Game.boomerang_img; document.getElementById("zor_sap_req1").id = "jab_req1"; document.getElementById("zor_sap_req2").id = "jab_req2"; document.getElementById("text_zor_sap").id = "text_jabu";}
	else if (third == "fo") {Logic.sapphire = "forest"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "for"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req2").className = "requirements"; document.getElementById("zor_sap_req3").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.hookshot_img; document.getElementById("zor_sap_req2").src=Game.bow_img; document.getElementById("zor_sap_req3").src=Game.goron_bracelet_img; document.getElementById("zor_sap_req1").id = "for_req1"; document.getElementById("zor_sap_req2").id = "for_req2"; document.getElementById("zor_sap_req3").id = "for_req3"; document.getElementById("text_zor_sap").id = "text_forest";}
	else if (third == "fi") {Logic.sapphire = "fire"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "fir"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.hammer_img; document.getElementById("zor_sap_req1").id = "fir_req1"; document.getElementById("text_zor_sap").id = "text_fire";}
	else if (third == "wa") {Logic.sapphire = "water"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "wat"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req2").className = "requirements"; document.getElementById("zor_sap_req3").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.iron_boots_img; document.getElementById("zor_sap_text2").innerHTML ="/"; document.getElementById("zor_sap_req2").src=Game.golden_scale_img; document.getElementById("zor_sap_text3").innerHTML = "+"; document.getElementById("zor_sap_req3").src=Game.longshot_img; document.getElementById("zor_sap_req1").id = "wat_req1"; document.getElementById("zor_sap_req2").id = "wat_req2"; document.getElementById("zor_sap_req3").id = "wat_req3"; document.getElementById("text_zor_sap").id = "text_water";}
	else if (third == "sp") {Logic.sapphire = "spirit"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "spi"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req2").className = "requirements"; document.getElementById("zor_sap_req3").className = "requirements"; document.getElementById("zor_sap_req4").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.silver_gauntlets_img; document.getElementById("zor_sap_req2").src=Game.mirror_shield_img; document.getElementById("zor_sap_req3").src=Game.bomb_bag_img; document.getElementById("zor_sap_req4").src=Game.hookshot_img; document.getElementById("zor_sap_req1").id = "spi_req1"; document.getElementById("zor_sap_req2").id = "spi_req2"; document.getElementById("zor_sap_req3").id = "spi_req3"; document.getElementById("zor_sap_req4").id = "spi_req4"; document.getElementById("text_zor_sap").id = "text_spirit";}
	else if (third == "sh") {Logic.sapphire = "shadow"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "sha"; document.getElementById("zor_sap_req1").className = "requirements"; document.getElementById("zor_sap_req2").className = "requirements"; document.getElementById("zor_sap_req3").className = "requirements"; document.getElementById("zor_sap_req4").className = "requirements"; document.getElementById("zor_sap_req5").className = "requirements"; document.getElementById("zor_sap_req1").src=Game.dins_fire_img; document.getElementById("zor_sap_req2").src =Game.magic_meter_img; document.getElementById("zor_sap_req3").src=Game.hover_boots_img; document.getElementById("zor_sap_req4").src=Game.bomb_bag_img; document.getElementById("zor_sap_req5").src=Game.hookshot_img; document.getElementById("zor_sap_req1").id = "sha_req1"; document.getElementById("zor_sap_req2").id = "sha_req2"; document.getElementById("zor_sap_req3").id = "sha_req3"; document.getElementById("zor_sap_req4").id = "sha_req4"; document.getElementById("zor_sap_req5").id = "sha_req5"; document.getElementById("text_zor_sap").id = "text_shadow";}
	else if (third == "fr" || third == "kk") {Logic.sapphire = "pocket"; document.getElementById("text_zor_sap").className="bluestone"; document.getElementById("text_zor_sap").innerHTML = "pok"; document.getElementById("text_zor_sap").id = "text_pocket";}
		}
}
}
var tempstring = "";
if (document.getElementById("markMedallions") != null) {tempstring = document.getElementById("markMedallions").value;}
if((tempstring.length == 6 && document.getElementById("markStones") == null) || tempstring.length == 12) 	{
	var str = tempstring;
	var first = str.substring(0,2);
	var second = str.substring(2,4);
	var third = str.substring(4,6);
	var fourth = str.substring(6,8);
	var fifth = str.substring(8,10);
	var sixth = str.substring(10,12);
	var parent = document.getElementById("info_column");
	var child = document.getElementById("markMedallions");
	
	
	if (first == "de") {Logic.forest_medallion_location = "deku"; dekuRequired = 1;}
	else if (first == "do") {Logic.forest_medallion_location = "dodongos"; dodongosRequired = 1;}
	else if (first == "ja") {Logic.forest_medallion_location = "jabu"; jabuRequired = 1;}
	else if (first == "fo") {Logic.forest_medallion_location = "forest"; forestRequired = 1;}
	else if (first == "fi") {Logic.forest_medallion_location = "fire"; fireRequired = 1;}
	else if (first == "wa") {Logic.forest_medallion_location = "water"; waterRequired = 1;}
	else if (first == "sp") {Logic.forest_medallion_location = "spirit"; spiritRequired = 1;}
	else if (first == "sh") {Logic.forest_medallion_location = "shadow"; shadowRequired = 1;}
	else if (first == "fr" || first == "kk") {Logic.forest_medallion_location = "pocket"; }
	
	if (second == "de") {Logic.fire_medallion_location = "deku"; dekuRequired = 1;}
	else if (second == "do") {Logic.fire_medallion_location = "dodongos"; dodongosRequired = 1;}
	else if (second == "ja") {Logic.fire_medallion_location = "jabu"; jabuRequired = 1;}
	else if (second == "fo") {Logic.fire_medallion_location = "forest"; forestRequired = 1;}
	else if (second == "fi") {Logic.fire_medallion_location = "fire"; fireRequired = 1;}
	else if (second == "wa") {Logic.fire_medallion_location = "water"; waterRequired = 1;}
	else if (second == "sp") {Logic.fire_medallion_location = "spirit"; spiritRequired = 1;}
	else if (second == "sh") {Logic.fire_medallion_location = "shadow"; shadowRequired = 1;}
	else if (second == "fr" || second == "kk") {Logic.fire_medallion_location = "pocket"; }
	
	if (third == "de") {Logic.water_medallion_location = "deku"; dekuRequired = 1;}
	else if (third == "do") {Logic.water_medallion_location = "dodongos"; dodongosRequired = 1;}
	else if (third == "ja") {Logic.water_medallion_location = "jabu"; jabuRequired = 1;}
	else if (third == "fo") {Logic.water_medallion_location = "forest"; forestRequired = 1;}
	else if (third == "fi") {Logic.water_medallion_location = "fire"; fireRequired = 1;}
	else if (third == "wa") {Logic.water_medallion_location = "water"; waterRequired = 1;}
	else if (third == "sp") {Logic.water_medallion_location = "spirit"; spiritRequired = 1;}
	else if (third == "sh") {Logic.water_medallion_location = "shadow"; shadowRequired = 1;}
	else if (third == "fr" || third == "kk") {Logic.water_medallion_location = "pocket"; }
	
	if (fourth == "de") {Logic.generic1 = "deku"; dekuRequired = 1;}
	else if (fourth == "do") {Logic.generic1 = "dodongos"; dodongosRequired = 1;}
	else if (fourth == "ja") {Logic.generic1 = "jabu"; jabuRequired = 1;}
	else if (fourth == "fo") {Logic.generic1 = "forest"; forestRequired = 1;}
	else if (fourth == "fi") {Logic.generic1 = "fire"; fireRequired = 1;}
	else if (fourth == "wa") {Logic.generic1 = "water"; waterRequired = 1;}
	else if (fourth == "sp") {Logic.generic1 = "spirit"; spiritRequired = 1;}
	else if (fourth == "sh") {Logic.generic1 = "shadow"; shadowRequired = 1;}
	else if (fourth == "fr" || fourth == "kk") {Logic.generic1 = "pocket"; }
	
	if (fifth == "de") {Logic.generic2 = "deku"; dekuRequired = 1;}
	else if (fifth == "do") {Logic.generic2 = "dodongos"; dodongosRequired = 1;}
	else if (fifth == "ja") {Logic.generic2 = "jabu"; jabuRequired = 1;}
	else if (fifth == "fo") {Logic.generic2 = "forest"; forestRequired = 1;}
	else if (fifth == "fi") {Logic.generic2 = "fire"; fireRequired = 1;}
	else if (fifth == "wa") {Logic.generic2 = "water"; waterRequired = 1;}
	else if (fifth == "sp") {Logic.generic2 = "spirit"; spiritRequired = 1;}
	else if (fifth == "sh") {Logic.generic2 = "shadow"; shadowRequired = 1;}
	else if (fifth == "fr" || fifth == "kk") {Logic.generic2 = "pocket"; }
	
	if (sixth == "de") {Logic.generic3 = "deku"; dekuRequired = 1;}
	else if (sixth == "do") {Logic.generic3 = "dodongos"; dodongosRequired = 1;}
	else if (sixth == "ja") {Logic.generic3 = "jabu"; jabuRequired = 1;}
	else if (sixth == "fo") {Logic.generic3 = "forest"; forestRequired = 1;}
	else if (sixth == "fi") {Logic.generic3 = "fire"; fireRequired = 1;}
	else if (sixth == "wa") {Logic.generic3 = "water"; waterRequired = 1;}
	else if (sixth == "sp") {Logic.generic3 = "spirit"; spiritRequired = 1;}
	else if (sixth == "sh") {Logic.generic3 = "shadow"; shadowRequired = 1;}
	else if (sixth == "fr" || sixth == "kk") {Logic.generic3 = "pocket"; }
	if((Logic.forest_medallion_location != "unknown" && Logic.fire_medallion_location != "unknown" && Logic.water_medallion_location != "unknown" && tempstring.length == 6) || Logic.forest_medallion_location != "unknown" && Logic.fire_medallion_location != "unknown" && Logic.water_medallion_location != "unknown" && Logic.generic1 != "unknown" && Logic.generic2 != "unknown" && Logic.generic3 != "unknown") {
		parent.removeChild(child);
		if (tempstring.length == 12) {
			var temp = first;
			first = second;
			second = third;
			third = fourth;
			fourth = fifth;
			fifth = sixth;
			sixth = temp;
			temp = Logic.forest_medallion_location;
			Logic.forest_medallion_location = Logic.fire_medallion_location;
			Logic.fire_medallion_location = Logic.water_medallion_location;
			Logic.water_medallion_location = Logic.generic1;
			Logic.generic1 = Logic.generic2;
			Logic.generic2 = Logic.generic3;
			Logic.generic3 = temp;
		}
		if (first == "de") {Logic.forest_medallion_location = "deku"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "dek"; document.getElementById("text_for_med").id = "text_deku";}
		else if (first == "do") {Logic.forest_medallion_location = "dodongos"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "dod"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req1").src = Game.bomb_bag_img; ; document.getElementById("for_med_req1").id = "dod_req1"; document.getElementById("text_for_med").id = "text_dodongos";}
		else if (first == "ja") {Logic.forest_medallion_location = "jabu"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "jab"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req2").className = "requirements"; document.getElementById("for_med_req1").src=Game.letter_img; document.getElementById("for_med_req2").src=Game.boomerang_img; document.getElementById("for_med_req1").id = "jab_req1"; document.getElementById("for_med_req2").id = "jab_req2"; document.getElementById("text_for_med").id = "text_jabu";}
		else if (first == "fo") {Logic.forest_medallion_location = "forest"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "for"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req2").className = "requirements"; document.getElementById("for_med_req3").className = "requirements"; document.getElementById("for_med_req1").src=Game.hookshot_img; document.getElementById("for_med_req2").src=Game.bow_img; document.getElementById("for_med_req3").src=Game.goron_bracelet_img; document.getElementById("for_med_req1").id = "for_req1"; document.getElementById("for_med_req2").id = "for_req2"; document.getElementById("for_med_req3").id = "for_req3"; document.getElementById("text_for_med").id = "text_forest";}
		else if (first == "fi") {Logic.forest_medallion_location = "fire"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "fir"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req1").src=Game.hammer_img; document.getElementById("for_med_req1").id = "fir_req1"; document.getElementById("text_for_med").id = "text_fire";}
		else if (first == "wa") {Logic.forest_medallion_location = "water"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "wat"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req2").className = "requirements"; document.getElementById("for_med_req3").className = "requirements"; document.getElementById("for_med_req1").src=Game.iron_boots_img; document.getElementById("for_med_text2").innerHTML ="/"; document.getElementById("for_med_req2").src=Game.golden_scale_img; document.getElementById("for_med_text3").innerHTML = "+"; document.getElementById("for_med_req3").src=Game.longshot_img; document.getElementById("for_med_req1").id = "wat_req1"; document.getElementById("for_med_req2").id = "wat_req2"; document.getElementById("for_med_req3").id = "wat_req3"; document.getElementById("text_for_med").id = "text_water";}
		else if (first == "sp") {Logic.forest_medallion_location = "spirit"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "spi"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req2").className = "requirements"; document.getElementById("for_med_req3").className = "requirements"; document.getElementById("for_med_req4").className = "requirements"; document.getElementById("for_med_req1").src=Game.silver_gauntlets_img; document.getElementById("for_med_req2").src=Game.mirror_shield_img; document.getElementById("for_med_req3").src = Game.bomb_bag_img; document.getElementById("for_med_req4").src=Game.hookshot_img; document.getElementById("for_med_req1").id = "spi_req1"; document.getElementById("for_med_req2").id = "spi_req2"; document.getElementById("for_med_req3").id = "spi_req3"; document.getElementById("for_med_req4").id = "spi_req4"; document.getElementById("text_for_med").id = "text_spirit";}
		else if (first == "sh") {Logic.forest_medallion_location = "shadow"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "sha"; document.getElementById("for_med_req1").className = "requirements"; document.getElementById("for_med_req2").className = "requirements"; document.getElementById("for_med_req3").className = "requirements"; document.getElementById("for_med_req4").className = "requirements"; document.getElementById("for_med_req5").className = "requirements"; document.getElementById("for_med_req1").src=Game.dins_fire_img; document.getElementById("for_med_req2").src=Game.magic_meter_img; document.getElementById("for_med_req3").src=Game.hover_boots_img; document.getElementById("for_med_req4").src = Game.bomb_bag_img; document.getElementById("for_med_req5").src=Game.hookshot_img; document.getElementById("for_med_req1").id = "sha_req1"; document.getElementById("for_med_req2").id = "sha_req2"; document.getElementById("for_med_req3").id = "sha_req3"; document.getElementById("for_med_req4").id = "sha_req4"; document.getElementById("for_med_req5").id = "sha_req5"; document.getElementById("text_for_med").id = "text_shadow";}
		else if (first == "fr" || first == "kk") {Logic.forest_medallion_location = "pocket"; document.getElementById("text_for_med").className="forest_medallion"; document.getElementById("text_for_med").innerHTML = "pok"; document.getElementById("text_for_med").id = "text_pocket";}
		if (second == "de") {Logic.fire_medallion_location = "deku"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "dek"; document.getElementById("text_fir_med").id = "text_deku";}
		else if (second == "do") {Logic.fire_medallion_location = "dodongos"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "dod"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req1").src = Game.bomb_bag_img; document.getElementById("fir_med_req1").id = "dod_req1"; document.getElementById("text_fir_med").id = "text_dodongos";}
		else if (second == "ja") {Logic.fire_medallion_location = "jabu"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "jab"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req2").className = "requirements"; document.getElementById("fir_med_req1").src=Game.letter_img; document.getElementById("fir_med_req2").src=Game.boomerang_img; document.getElementById("fir_med_req1").id = "jab_req1"; document.getElementById("fir_med_req2").id = "jab_req2"; document.getElementById("text_fir_med").id = "text_jabu";}
		else if (second == "fo") {Logic.fire_medallion_location = "forest"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "for"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req2").className = "requirements"; document.getElementById("fir_med_req3").className = "requirements"; document.getElementById("fir_med_req1").src=Game.hookshot_img; document.getElementById("fir_med_req2").src=Game.bow_img; document.getElementById("fir_med_req3").src=Game.goron_bracelet_img; document.getElementById("fir_med_req1").id = "for_req1"; document.getElementById("fir_med_req2").id = "for_req2"; document.getElementById("fir_med_req3").id = "for_req3"; document.getElementById("text_fir_med").id = "text_forest";}
		else if (second == "fi") {Logic.fire_medallion_location = "fire"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "fir"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req1").src=Game.hammer_img; document.getElementById("fir_med_req1").id = "fir_req1"; document.getElementById("text_fir_med").id = "text_fire";}
		else if (second == "wa") {Logic.fire_medallion_location = "water"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "wat";  document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req2").className = "requirements"; document.getElementById("fir_med_req3").className = "requirements"; document.getElementById("fir_med_req1").src=Game.iron_boots_img; document.getElementById("fir_med_text2").innerHTML ="/"; document.getElementById("fir_med_req2").src=Game.golden_scale_img; document.getElementById("fir_med_text3").innerHTML = "+"; document.getElementById("fir_med_req3").src=Game.longshot_img; document.getElementById("fir_med_req1").id = "wat_req1"; document.getElementById("fir_med_req2").id = "wat_req2"; document.getElementById("fir_med_req3").id = "wat_req3"; document.getElementById("text_fir_med").id = "text_water";}
		else if (second == "sp") {Logic.fire_medallion_location = "spirit"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "spi"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req2").className = "requirements"; document.getElementById("fir_med_req3").className = "requirements"; document.getElementById("fir_med_req4").className = "requirements"; document.getElementById("fir_med_req1").src=Game.silver_gauntlets_img; document.getElementById("fir_med_req2").src=Game.mirror_shield_img; document.getElementById("fir_med_req3").src = Game.bomb_bag_img; document.getElementById("fir_med_req4").src=Game.hookshot_img;  document.getElementById("fir_med_req1").id = "spi_req1"; document.getElementById("fir_med_req2").id = "spi_req2"; document.getElementById("fir_med_req3").id = "spi_req3"; document.getElementById("fir_med_req4").id = "spi_req4"; document.getElementById("text_fir_med").id = "text_spirit";}
		else if (second == "sh") {Logic.fire_medallion_location = "shadow"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "sha"; document.getElementById("fir_med_req1").className = "requirements"; document.getElementById("fir_med_req2").className = "requirements"; document.getElementById("fir_med_req3").className = "requirements"; document.getElementById("fir_med_req4").className = "requirements"; document.getElementById("fir_med_req5").className = "requirements"; document.getElementById("fir_med_req1").src=Game.dins_fire_img; document.getElementById("fir_med_req2").src=Game.magic_meter_img; document.getElementById("fir_med_req3").src=Game.hover_boots_img; document.getElementById("fir_med_req4").src = Game.bomb_bag_img; document.getElementById("fir_med_req5").src=Game.hookshot_img; document.getElementById("fir_med_req1").id = "sha_req1"; document.getElementById("fir_med_req2").id = "sha_req2"; document.getElementById("fir_med_req3").id = "sha_req3"; document.getElementById("fir_med_req4").id = "sha_req4"; document.getElementById("fir_med_req5").id = "sha_req5"; document.getElementById("text_fir_med").id = "text_shadow";}
		else if (second == "fr" || second == "kk") {Logic.fire_medallion_location = "pocket"; document.getElementById("text_fir_med").className="fire_medallion"; document.getElementById("text_fir_med").innerHTML = "pok"; document.getElementById("text_fir_med").id = "text_pocket";}
		if (third == "de") {Logic.water_medallion_location = "deku"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "dek"; document.getElementById("text_wat_med").id = "text_deku";}
		else if (third == "do") {Logic.water_medallion_location = "dodongos"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "dod"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req1").src = Game.bomb_bag_img; document.getElementById("wat_med_req1").id = "dod_req1"; document.getElementById("text_wat_med").id = "text_dodongos";}
		else if (third == "ja") {Logic.water_medallion_location = "jabu"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "jab"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req2").className = "requirements"; document.getElementById("wat_med_req1").src=Game.letter_img; document.getElementById("wat_med_req2").src=Game.boomerang_img; document.getElementById("wat_med_req1").id = "jab_req1"; document.getElementById("wat_med_req2").id = "jab_req2"; document.getElementById("text_wat_med").id = "text_jabu";}
		else if (third == "fo") {Logic.water_medallion_location = "forest"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "for"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req2").className = "requirements"; document.getElementById("wat_med_req3").className = "requirements"; document.getElementById("wat_med_req1").src=Game.hookshot_img; document.getElementById("wat_med_req2").src=Game.bow_img; document.getElementById("wat_med_req3").src=Game.goron_bracelet_img; document.getElementById("wat_med_req1").id = "for_req1"; document.getElementById("wat_med_req2").id = "for_req2"; document.getElementById("wat_med_req3").id = "for_req3"; document.getElementById("text_wat_med").id = "text_forest";}
		else if (third == "fi") {Logic.water_medallion_location = "fire"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "fir"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req1").src=Game.hammer_img; document.getElementById("wat_med_req1").id = "fir_req1"; document.getElementById("text_wat_med").id = "text_fire";}
		else if (third == "wa") {Logic.water_medallion_location = "water"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "wat";  document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req2").className = "requirements"; document.getElementById("wat_med_req3").className = "requirements"; document.getElementById("wat_med_req1").src=Game.iron_boots_img; document.getElementById("wat_med_text2").innerHTML ="/"; document.getElementById("wat_med_req2").src=Game.golden_scale_img; document.getElementById("wat_med_text3").innerHTML = "+"; document.getElementById("wat_med_req3").src=Game.longshot_img; document.getElementById("wat_med_req1").id = "wat_req1"; document.getElementById("wat_med_req2").id = "wat_req2"; document.getElementById("wat_med_req3").id = "wat_req3"; document.getElementById("text_wat_med").id = "text_water";}
		else if (third == "sp") {Logic.water_medallion_location = "spirit"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "spi"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req2").className = "requirements"; document.getElementById("wat_med_req3").className = "requirements"; document.getElementById("wat_med_req4").className = "requirements"; document.getElementById("wat_med_req1").src=Game.silver_gauntlets_img; document.getElementById("wat_med_req2").src=Game.mirror_shield_img; document.getElementById("wat_med_req3").src = Game.bomb_bag_img; document.getElementById("wat_med_req4").src=Game.hookshot_img; document.getElementById("wat_med_req1").id = "spi_req1"; document.getElementById("wat_med_req2").id = "spi_req2"; document.getElementById("wat_med_req3").id = "spi_req3"; document.getElementById("wat_med_req4").id = "spi_req4"; document.getElementById("text_wat_med").id = "text_spirit";}
		else if (third == "sh") {Logic.water_medallion_location = "shadow"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "sha"; document.getElementById("wat_med_req1").className = "requirements"; document.getElementById("wat_med_req2").className = "requirements"; document.getElementById("wat_med_req3").className = "requirements"; document.getElementById("wat_med_req4").className = "requirements"; document.getElementById("wat_med_req5").className = "requirements"; document.getElementById("wat_med_req1").src=Game.dins_fire_img; document.getElementById("wat_med_req2").src=Game.magic_meter_img; document.getElementById("wat_med_req3").src=Game.hover_boots_img; document.getElementById("wat_med_req4").src = Game.bomb_bag_img; document.getElementById("wat_med_req5").src=Game.hookshot_img; document.getElementById("wat_med_req1").id = "sha_req1"; document.getElementById("wat_med_req2").id = "sha_req2"; document.getElementById("wat_med_req3").id = "sha_req3"; document.getElementById("wat_med_req4").id = "sha_req4"; document.getElementById("wat_med_req5").id = "sha_req5"; document.getElementById("text_wat_med").id = "text_shadow";}
		else if (third == "fr" || third == "kk") {Logic.water_medallion_location = "pocket"; document.getElementById("text_wat_med").className="water_medallion"; document.getElementById("text_wat_med").innerHTML = "pok"; document.getElementById("text_wat_med").id = "text_pocket";}
		if (tempstring.length == 6) {
			if (Logic.emerald != "deku" && Logic.ruby != "deku" && Logic.sapphire != "deku" && Logic.forest_medallion_location != "deku" && Logic.fire_medallion_location != "deku" && Logic.water_medallion_location != "deku") {Logic.generic1 = "deku"; dekuRequired = 1; document.getElementById("text_gen_med1").innerHTML = "dek"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("text_gen_med1").id = "text_deku";}
			else if (Logic.emerald != "dodongos" && Logic.ruby != "dodongos" && Logic.sapphire != "dodongos" && Logic.forest_medallion_location != "dodongos" && Logic.fire_medallion_location != "dodongos" && Logic.water_medallion_location != "dodongos") {Logic.generic1 = "dodongos"; dodongosRequired = 1; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("text_gen_med1").innerHTML = "dod"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req1").src = Game.bomb_bag_img;  document.getElementById("gen_med1_req1").id = "dod_req1"; document.getElementById("text_gen_med1").id = "text_dodongos";}
			else if (Logic.emerald != "jabu" && Logic.ruby != "jabu" && Logic.sapphire != "jabu" && Logic.forest_medallion_location != "jabu" && Logic.fire_medallion_location!= "jabu" && Logic.water_medallion_location != "jabu") {Logic.generic1 = "jabu"; jabuRequired = 1; document.getElementById("text_gen_med1").innerHTML = "jab"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.letter_img; document.getElementById("gen_med1_req2").src=Game.boomerang_img; document.getElementById("gen_med1_req1").id = "jab_req1"; document.getElementById("gen_med1_req2").id = "jab_req2"; document.getElementById("text_gen_med1").id = "text_jabu";}
			else if (Logic.emerald != "forest" && Logic.ruby != "forest" && Logic.sapphire != "forest" && Logic.forest_medallion_location != "forest" && Logic.fire_medallion_location != "forest" && Logic.water_medallion_location != "forest") {Logic.generic1 = "forest"; forestRequired = 1; document.getElementById("text_gen_med1").innerHTML = "for"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.hookshot_img; document.getElementById("gen_med1_req2").src=Game.bow_img; document.getElementById("gen_med1_req3").src=Game.goron_bracelet_img; document.getElementById("gen_med1_req1").id = "for_req1"; document.getElementById("gen_med1_req2").id = "for_req2"; document.getElementById("gen_med1_req3").id = "for_req3"; document.getElementById("text_gen_med1").id = "text_forest";}
			else if (Logic.emerald != "fire" && Logic.ruby != "fire" && Logic.sapphire != "fire" && Logic.forest_medallion_location != "fire" && Logic.fire_medallion_location != "fire" && Logic.water_medallion_location != "fire") {Logic.generic1 = "fire"; fireRequired = 1; document.getElementById("text_gen_med1").innerHTML = "fir"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.hammer_img; document.getElementById("gen_med1_req1").id = "fir_req1"; document.getElementById("text_gen_med1").id = "text_fire";}
			else if (Logic.emerald != "water" && Logic.ruby != "water" && Logic.sapphire != "water" && Logic.forest_medallion_location != "water" && Logic.fire_medallion_location != "water" && Logic.water_medallion_location != "water") {Logic.generic1 = "water"; waterRequired = 1; document.getElementById("text_gen_med1").innerHTML = "wat"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.iron_boots_img; document.getElementById("gen_med1_text2").innerHTML ="/"; document.getElementById("gen_med1_req2").src=Game.golden_scale_img; document.getElementById("gen_med1_text3").innerHTML = "+"; document.getElementById("gen_med1_req3").src=Game.longshot_img; document.getElementById("gen_med1_req1").id = "wat_req1"; document.getElementById("gen_med1_req2").id = "wat_req2"; document.getElementById("gen_med1_req3").id = "wat_req3"; document.getElementById("text_gen_med1").id = "text_water";}
			else if (Logic.emerald != "spirit" && Logic.ruby != "spirit" && Logic.sapphire != "spirit" && Logic.forest_medallion_location != "spirit" && Logic.fire_medallion_location != "spirit" && Logic.water_medallion_location != "spirit") {Logic.generic1 = "spirit"; spiritRequired = 1; document.getElementById("text_gen_med1").innerHTML = "spi"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req4").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.silver_gauntlets_img; document.getElementById("gen_med1_req2").src=Game.mirror_shield_img; document.getElementById("gen_med1_req3").src = Game.bomb_bag_img; document.getElementById("gen_med1_req4").src=Game.hookshot_img; document.getElementById("gen_med1_req1").id = "spi_req1"; document.getElementById("gen_med1_req2").id = "spi_req2"; document.getElementById("gen_med1_req3").id = "spi_req3"; document.getElementById("gen_med1_req4").id = "spi_req4"; document.getElementById("text_gen_med1").id = "text_spirit";}
			else if (Logic.emerald != "shadow" && Logic.ruby != "shadow" && Logic.sapphire != "shadow" && Logic.forest_medallion_location != "shadow" && Logic.fire_medallion_location != "shadow" && Logic.water_medallion_location != "shadow") {Logic.generic1 = "shadow"; shadowRequired = 1; document.getElementById("text_gen_med1").innerHTML = "sha"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req4").className = "requirements"; document.getElementById("gen_med1_req5").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.dins_fire_img; document.getElementById("gen_med1_req2").src=Game.magic_meter_img; document.getElementById("gen_med1_req3").src=Game.hover_boots_img; document.getElementById("gen_med1_req4").src = Game.bomb_bag_img; document.getElementById("gen_med1_req5").src=Game.hookshot_img; document.getElementById("gen_med1_req1").id = "sha_req1"; document.getElementById("gen_med1_req2").id = "sha_req2"; document.getElementById("gen_med1_req3").id = "sha_req3"; document.getElementById("gen_med1_req4").id = "sha_req4"; document.getElementById("gen_med1_req5").id = "sha_req5"; document.getElementById("text_gen_med1").id = "text_shadow";}
			else if (Logic.emerald != "pocket" && Logic.ruby != "pocket" && Logic.sapphire != "pocket" && Logic.forest_medallion_location != "pocket" && Logic.fire_medallion_location != "pocket" && Logic.water_medallion_location != "pocket") {Logic.generic1 = "pocket"; document.getElementById("text_gen_med1").innerHTML = "pok"; document.getElementById("text_gen_med1").className="generic_medallion"; document.getElementById("text_gen_med1").id = "text_pocket";}
			if (Logic.generic1 != "deku" && Logic.emerald != "deku" && Logic.ruby != "deku" && Logic.sapphire != "deku" && Logic.forest_medallion_location != "deku" && Logic.fire_medallion_location != "deku" && Logic.water_medallion_location != "deku") {Logic.generic2 = "deku"; dekuRequired = 1; document.getElementById("text_gen_med2").innerHTML = "dek"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("text_gen_med2").id = "text_deku";}
			else if (Logic.generic1 != "dodongos" && Logic.emerald != "dodongos" && Logic.ruby != "dodongos" && Logic.sapphire != "dodongos" && Logic.forest_medallion_location != "dodongos" && Logic.fire_medallion_location != "dodongos" && Logic.water_medallion_location != "dodongos") {Logic.generic2 = "dodongos"; dodongosRequired = 1; document.getElementById("text_gen_med2").innerHTML = "dod"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req1").src = Game.bomb_bag_img;  document.getElementById("gen_med2_req1").id = "dod_req1"; document.getElementById("text_gen_med2").id = "text_dodongos";}
			else if (Logic.generic1 != "jabu" && Logic.emerald != "jabu" && Logic.ruby != "jabu" && Logic.sapphire != "jabu" && Logic.forest_medallion_location != "jabu" && Logic.fire_medallion_location != "jabu" && Logic.water_medallion_location != "jabu") {Logic.generic2 = "jabu"; jabuRequired = 1; document.getElementById("text_gen_med2").innerHTML = "jab"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.letter_img; document.getElementById("gen_med2_req2").src=Game.boomerang_img; document.getElementById("gen_med2_req1").id = "jab_req1"; document.getElementById("gen_med2_req2").id = "jab_req2"; document.getElementById("text_gen_med2").id = "text_jabu";}
			else if (Logic.generic1 != "forest" && Logic.emerald != "forest" && Logic.ruby != "forest" && Logic.sapphire != "forest" && Logic.forest_medallion_location != "forest" && Logic.fire_medallion_location != "forest" && Logic.water_medallion_location != "forest") {Logic.generic2 = "forest"; forestRequired = 1; document.getElementById("text_gen_med2").innerHTML = "for"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.hookshot_img; document.getElementById("gen_med2_req2").src=Game.bow_img; document.getElementById("gen_med2_req3").src=Game.goron_bracelet_img; document.getElementById("gen_med2_req1").id = "for_req1"; document.getElementById("gen_med2_req2").id = "for_req2"; document.getElementById("gen_med2_req3").id = "for_req3"; document.getElementById("text_gen_med2").id = "text_forest";}
			else if (Logic.generic1 != "fire" && Logic.emerald != "fire" && Logic.ruby != "fire" && Logic.sapphire != "fire" && Logic.forest_medallion_location != "fire" && Logic.fire_medallion_location != "fire" && Logic.water_medallion_location != "fire") {Logic.generic2 = "fire"; fireRequired = 1; document.getElementById("text_gen_med2").innerHTML = "fir"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.hammer_img; document.getElementById("gen_med2_req1").id = "fir_req1"; document.getElementById("text_gen_med2").id = "text_fire";}
			else if (Logic.generic1 != "water" && Logic.emerald != "water" && Logic.ruby != "water" && Logic.sapphire != "water" && Logic.forest_medallion_location != "water" && Logic.fire_medallion_location != "water" && Logic.water_medallion_location != "water") {Logic.generic2 = "water"; waterRequired = 1; document.getElementById("text_gen_med2").innerHTML = "wat"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.iron_boots_img; document.getElementById("gen_med2_text2").innerHTML ="/"; document.getElementById("gen_med2_req2").src=Game.golden_scale_img; document.getElementById("gen_med2_text3").innerHTML = "+"; document.getElementById("gen_med2_req3").src=Game.longshot_img; document.getElementById("gen_med2_req1").id = "wat_req1"; document.getElementById("gen_med2_req2").id = "wat_req2"; document.getElementById("gen_med2_req3").id = "wat_req3"; document.getElementById("text_gen_med2").id = "text_water";}
			else if (Logic.generic1 != "spirit" && Logic.emerald != "spirit" && Logic.ruby != "spirit" && Logic.sapphire != "spirit" && Logic.forest_medallion_location != "spirit" && Logic.fire_medallion_location != "spirit" && Logic.water_medallion_location != "spirit") {Logic.generic2 = "spirit"; spiritRequired = 1; document.getElementById("text_gen_med2").innerHTML = "spi"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req4").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.silver_gauntlets_img; document.getElementById("gen_med2_req2").src=Game.mirror_shield_img; document.getElementById("gen_med2_req3").src = Game.bomb_bag_img; document.getElementById("gen_med2_req4").src=Game.hookshot_img; document.getElementById("gen_med2_req1").id = "spi_req1"; document.getElementById("gen_med2_req2").id = "spi_req2"; document.getElementById("gen_med2_req3").id = "spi_req3"; document.getElementById("gen_med2_req4").id = "spi_req4"; document.getElementById("text_gen_med2").id = "text_spirit";}
			else if (Logic.generic1 != "shadow" && Logic.emerald != "shadow" && Logic.ruby != "shadow" && Logic.sapphire != "shadow" && Logic.forest_medallion_location != "shadow" && Logic.fire_medallion_location != "shadow" && Logic.water_medallion_location != "shadow") {Logic.generic2 = "shadow"; shadowRequired = 1; document.getElementById("text_gen_med2").innerHTML = "sha"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req4").className = "requirements"; document.getElementById("gen_med2_req5").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.dins_fire_img; document.getElementById("gen_med2_req2").src=Game.magic_meter_img; document.getElementById("gen_med2_req3").src=Game.hover_boots_img; document.getElementById("gen_med2_req4").src = Game.bomb_bag_img; document.getElementById("gen_med2_req5").src=Game.hookshot_img; document.getElementById("gen_med2_req1").id = "sha_req1"; document.getElementById("gen_med2_req2").id = "sha_req2"; document.getElementById("gen_med2_req3").id = "sha_req3"; document.getElementById("gen_med2_req4").id = "sha_req4"; document.getElementById("gen_med2_req5").id = "sha_req5"; document.getElementById("text_gen_med2").id = "text_shadow";}
			else if (Logic.generic1 != "pocket" && Logic.emerald != "pocket" && Logic.ruby != "pocket" && Logic.sapphire != "pocket" && Logic.forest_medallion_location != "pocket" && Logic.fire_medallion_location != "pocket" && Logic.water_medallion_location != "pocket") {Logic.generic2 = "pocket"; document.getElementById("text_gen_med2").innerHTML = "pok"; document.getElementById("text_gen_med2").className="generic_medallion"; document.getElementById("text_gen_med2").id = "text_pocket";}
			if (Logic.generic1 != "deku" && Logic.generic2 != "deku" && Logic.emerald != "deku" && Logic.ruby != "deku" && Logic.sapphire != "deku" && Logic.forest_medallion_location != "deku" && Logic.fire_medallion_location != "deku" && Logic.water_medallion_location != "deku") {Logic.generic3 = "deku"; dekuRequired = 1; document.getElementById("text_gen_med3").innerHTML = "dek"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").id = "text_deku";}
			else if (Logic.generic1 != "dodongos" && Logic.generic2 != "dodongos" && Logic.emerald != "dodongos" && Logic.ruby != "dodongos" && Logic.sapphire != "dodongos" && Logic.forest_medallion_location != "dodongos" && Logic.fire_medallion_location != "dodongos" && Logic.water_medallion_location != "dodongos") {Logic.generic3 = "dodongos"; dodongosRequired = 1; document.getElementById("text_gen_med3").innerHTML = "dod"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req1").src = Game.bomb_bag_img;  document.getElementById("gen_med3_req1").id = "dod_req1"; document.getElementById("text_gen_med3").id = "text_dodongos";}
			else if (Logic.generic1 != "jabu" && Logic.generic2 != "jabu" && Logic.emerald != "jabu" && Logic.ruby != "jabu" && Logic.sapphire != "jabu" && Logic.forest_medallion_location != "jabu" && Logic.fire_medallion_location != "jabu" && Logic.water_medallion_location != "jabu") {Logic.generic3 = "jabu"; jabuRequired = 1; document.getElementById("text_gen_med3").innerHTML = "jab"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.letter_img; document.getElementById("gen_med3_req2").src=Game.boomerang_img; document.getElementById("gen_med3_req1").id = "jab_req1"; document.getElementById("gen_med3_req2").id = "jab_req2"; document.getElementById("text_gen_med3").id = "text_jabu";}
			else if (Logic.generic1 != "forest" && Logic.generic2 != "forest" && Logic.emerald != "forest" && Logic.ruby != "forest" && Logic.sapphire != "forest" && Logic.forest_medallion_location != "forest" && Logic.fire_medallion_location != "forest" && Logic.water_medallion_location != "forest") {Logic.generic3 = "forest"; forestRequired = 1; document.getElementById("text_gen_med3").innerHTML = "for"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.hookshot_img; document.getElementById("gen_med3_req2").src=Game.bow_img; document.getElementById("gen_med3_req3").src=Game.goron_bracelet_img; document.getElementById("gen_med3_req1").id = "for_req1"; document.getElementById("gen_med3_req2").id = "for_req2"; document.getElementById("gen_med3_req3").id = "for_req3"; document.getElementById("text_gen_med3").id = "text_forest";}
			else if (Logic.generic1 != "fire" && Logic.generic2 != "fire" && Logic.emerald != "fire" && Logic.ruby != "fire" && Logic.sapphire != "fire" && Logic.forest_medallion_location != "fire" && Logic.fire_medallion_location != "fire" && Logic.water_medallion_location != "fire") {Logic.generic3 = "fire"; fireRequired = 1; document.getElementById("text_gen_med3").innerHTML = "fir"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.hammer_img; document.getElementById("gen_med3_req1").id = "fir_req1"; document.getElementById("text_gen_med3").id = "text_fire";}
			else if (Logic.generic1 != "water" && Logic.generic2 != "water" && Logic.emerald != "water" && Logic.ruby != "water" && Logic.sapphire != "water" && Logic.forest_medallion_location != "water" && Logic.fire_medallion_location != "water" && Logic.water_medallion_location != "water") {Logic.generic3 = "water"; waterRequired = 1; document.getElementById("text_gen_med3").innerHTML = "wat"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.iron_boots_img; document.getElementById("gen_med3_text2").innerHTML ="/"; document.getElementById("gen_med3_req2").src=Game.golden_scale_img; document.getElementById("gen_med3_text3").innerHTML = "+"; document.getElementById("gen_med3_req3").src=Game.longshot_img; document.getElementById("gen_med3_req1").id = "wat_req1"; document.getElementById("gen_med3_req2").id = "wat_req2"; document.getElementById("gen_med3_req3").id = "wat_req3"; document.getElementById("text_gen_med3").id = "text_water";}
			else if (Logic.generic1 != "spirit" && Logic.generic2 != "spirit" && Logic.emerald != "spirit" && Logic.ruby != "spirit" && Logic.sapphire != "spirit" && Logic.forest_medallion_location != "spirit" && Logic.fire_medallion_location != "spirit" && Logic.water_medallion_location != "spirit") {Logic.generic3 = "spirit"; spiritRequired = 1; document.getElementById("text_gen_med3").innerHTML = "spi"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req4").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.silver_gauntlets_img; document.getElementById("gen_med3_req2").src=Game.mirror_shield_img; document.getElementById("gen_med3_req3").src = Game.bomb_bag_img; document.getElementById("gen_med3_req4").src=Game.hookshot_img; document.getElementById("gen_med3_req1").id = "spi_req1"; document.getElementById("gen_med3_req2").id = "spi_req2"; document.getElementById("gen_med3_req3").id = "spi_req3"; document.getElementById("gen_med3_req4").id = "spi_req4"; document.getElementById("text_gen_med3").id = "text_spirit";}
			else if (Logic.generic1 != "shadow" && Logic.generic2 != "shadow" && Logic.emerald != "shadow" && Logic.ruby != "shadow" && Logic.sapphire != "shadow" && Logic.forest_medallion_location != "shadow" && Logic.fire_medallion_location != "shadow" && Logic.water_medallion_location != "shadow") {Logic.generic3 = "shadow"; shadowRequired = 1; document.getElementById("text_gen_med3").innerHTML = "sha"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req4").className = "requirements"; document.getElementById("gen_med3_req5").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.dins_fire_img; document.getElementById("gen_med3_req2").src=Game.magic_meter_img; document.getElementById("gen_med3_req3").src=Game.hover_boots_img; document.getElementById("gen_med3_req4").src = Game.bomb_bag_img; document.getElementById("gen_med3_req5").src=Game.hookshot_img; document.getElementById("gen_med3_req1").id = "sha_req1"; document.getElementById("gen_med3_req2").id = "sha_req2"; document.getElementById("gen_med3_req3").id = "sha_req3"; document.getElementById("gen_med3_req4").id = "sha_req4"; document.getElementById("gen_med3_req5").id = "sha_req5"; document.getElementById("text_gen_med3").id = "text_shadow";}
			else if (Logic.generic1 != "pocket" && Logic.generic2 != "pocket" && Logic.emerald != "pocket" && Logic.ruby != "pocket" && Logic.sapphire != "pocket" && Logic.forest_medallion_location != "pocket" && Logic.fire_medallion_location != "pocket" && Logic.water_medallion_location != "pocket") {Logic.generic3 = "pocket"; document.getElementById("text_gen_med3").innerHTML = "pok"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").id = "text_pocket";}
		}
		else {
			document.getElementById("text_gen_med1").style.color = "rgb(238, 130, 238)";
			document.getElementById("gen1_medallion").src = "./normal/shadow_medallion.png";
			document.getElementById("text_gen_med2").style.color = "rgb(255, 165, 0)";
			document.getElementById("gen2_medallion").src = "./normal/spirit_medallion.png";
			document.getElementById("text_gen_med3").style.color = "yellow";
			document.getElementById("gen3_medallion").src = "./normal/light_medallion.png";
			if (fourth == "de") {Logic.generic1 = "deku"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "dek"; document.getElementById("text_gen_med1").id = "text_deku";}
			else if (fourth == "do") {Logic.generic1 = "dodongos"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "dod"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req1").src = Game.bomb_bag_img; document.getElementById("gen_med1_req1").id = "dod_req1"; document.getElementById("text_gen_med1").id = "text_dodongos";}
			else if (fourth == "ja") {Logic.generic1 = "jabu"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "jab"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.letter_img; document.getElementById("gen_med1_req2").src=Game.boomerang_img; document.getElementById("gen_med1_req1").id = "jab_req1"; document.getElementById("gen_med1_req2").id = "jab_req2"; document.getElementById("text_gen_med1").id = "text_jabu";}
			else if (fourth == "fo") {Logic.generic1 = "forest"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "for"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.hookshot_img; document.getElementById("gen_med1_req2").src=Game.bow_img; document.getElementById("gen_med1_req3").src=Game.goron_bracelet_img; document.getElementById("gen_med1_req1").id = "for_req1"; document.getElementById("gen_med1_req2").id = "for_req2"; document.getElementById("gen_med1_req3").id = "for_req3"; document.getElementById("text_gen_med1").id = "text_forest";}
			else if (fourth == "fi") {Logic.generic1 = "fire"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "fir"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.hammer_img; document.getElementById("gen_med1_req1").id = "fir_req1"; document.getElementById("text_gen_med1").id = "text_fire";}
			else if (fourth == "wa") {Logic.generic1 = "water"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "wat";  document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.iron_boots_img; document.getElementById("gen_med1_text2").innerHTML ="/"; document.getElementById("gen_med1_req2").src=Game.golden_scale_img; document.getElementById("gen_med1_text3").innerHTML = "+"; document.getElementById("gen_med1_req3").src=Game.longshot_img; document.getElementById("gen_med1_req1").id = "wat_req1"; document.getElementById("gen_med1_req2").id = "wat_req2"; document.getElementById("gen_med1_req3").id = "wat_req3"; document.getElementById("text_gen_med1").id = "text_water";}
			else if (fourth == "sp") {Logic.generic1 = "spirit"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "spi"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req4").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.silver_gauntlets_img; document.getElementById("gen_med1_req2").src=Game.mirror_shield_img; document.getElementById("gen_med1_req3").src = Game.bomb_bag_img; document.getElementById("gen_med1_req4").src=Game.hookshot_img; document.getElementById("gen_med1_req1").id = "spi_req1"; document.getElementById("gen_med1_req2").id = "spi_req2"; document.getElementById("gen_med1_req3").id = "spi_req3"; document.getElementById("gen_med1_req4").id = "spi_req4"; document.getElementById("text_gen_med1").id = "text_spirit";}
			else if (fourth == "sh") {Logic.generic1 = "shadow"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "sha"; document.getElementById("gen_med1_req1").className = "requirements"; document.getElementById("gen_med1_req2").className = "requirements"; document.getElementById("gen_med1_req3").className = "requirements"; document.getElementById("gen_med1_req4").className = "requirements"; document.getElementById("gen_med1_req5").className = "requirements"; document.getElementById("gen_med1_req1").src=Game.dins_fire_img; document.getElementById("gen_med1_req2").src=Game.magic_meter_img; document.getElementById("gen_med1_req3").src=Game.hover_boots_img; document.getElementById("gen_med1_req4").src = Game.bomb_bag_img; document.getElementById("gen_med1_req5").src=Game.hookshot_img; document.getElementById("gen_med1_req1").id = "sha_req1"; document.getElementById("gen_med1_req2").id = "sha_req2"; document.getElementById("gen_med1_req3").id = "sha_req3"; document.getElementById("gen_med1_req4").id = "sha_req4"; document.getElementById("gen_med1_req5").id = "sha_req5"; document.getElementById("text_gen_med1").id = "text_shadow";}
			else if (fourth == "fr" || fourth == "kk") {Logic.generic1 = "pocket"; document.getElementById("text_gen_med1").className="shadow_medallion"; document.getElementById("text_gen_med1").innerHTML = "pok"; document.getElementById("text_gen_med1").id = "text_pocket";}
			if (fifth == "de") {Logic.generic2 = "deku"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "dek"; document.getElementById("text_gen_med2").id = "text_deku";}
			else if (fifth == "do") {Logic.generic2 = "dodongos"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "dod"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req1").src = Game.bomb_bag_img; document.getElementById("gen_med2_req1").id = "dod_req1"; document.getElementById("text_gen_med2").id = "text_dodongos";}
			else if (fifth == "ja") {Logic.generic2 = "jabu"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "jab"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.letter_img; document.getElementById("gen_med2_req2").src=Game.boomerang_img; document.getElementById("gen_med2_req1").id = "jab_req1"; document.getElementById("gen_med2_req2").id = "jab_req2"; document.getElementById("text_gen_med2").id = "text_jabu";}
			else if (fifth == "fo") {Logic.generic2 = "forest"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "for"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.hookshot_img; document.getElementById("gen_med2_req2").src=Game.bow_img; document.getElementById("gen_med2_req3").src=Game.goron_bracelet_img; document.getElementById("gen_med2_req1").id = "for_req1"; document.getElementById("gen_med2_req2").id = "for_req2"; document.getElementById("gen_med2_req3").id = "for_req3"; document.getElementById("text_gen_med2").id = "text_forest";}
			else if (fifth == "fi") {Logic.generic2 = "fire"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "fir"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.hammer_img; document.getElementById("gen_med2_req1").id = "fir_req1"; document.getElementById("text_gen_med2").id = "text_fire";}
			else if (fifth == "wa") {Logic.generic2 = "water"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "wat";  document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.iron_boots_img; document.getElementById("gen_med2_text2").innerHTML ="/"; document.getElementById("gen_med2_req2").src=Game.golden_scale_img; document.getElementById("gen_med2_text3").innerHTML = "+"; document.getElementById("gen_med2_req3").src=Game.longshot_img; document.getElementById("gen_med2_req1").id = "wat_req1"; document.getElementById("gen_med2_req2").id = "wat_req2"; document.getElementById("gen_med2_req3").id = "wat_req3"; document.getElementById("text_gen_med2").id = "text_water";}
			else if (fifth == "sp") {Logic.generic2 = "spirit"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "spi"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req4").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.silver_gauntlets_img; document.getElementById("gen_med2_req2").src=Game.mirror_shield_img; document.getElementById("gen_med2_req3").src = Game.bomb_bag_img; document.getElementById("gen_med2_req4").src=Game.hookshot_img; document.getElementById("gen_med2_req1").id = "spi_req1"; document.getElementById("gen_med2_req2").id = "spi_req2"; document.getElementById("gen_med2_req3").id = "spi_req3"; document.getElementById("gen_med2_req4").id = "spi_req4"; document.getElementById("text_gen_med2").id = "text_spirit";}
			else if (fifth == "sh") {Logic.generic2 = "shadow"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "sha"; document.getElementById("gen_med2_req1").className = "requirements"; document.getElementById("gen_med2_req2").className = "requirements"; document.getElementById("gen_med2_req3").className = "requirements"; document.getElementById("gen_med2_req4").className = "requirements"; document.getElementById("gen_med2_req5").className = "requirements"; document.getElementById("gen_med2_req1").src=Game.dins_fire_img; document.getElementById("gen_med2_req2").src=Game.magic_meter_img; document.getElementById("gen_med2_req3").src=Game.hover_boots_img; document.getElementById("gen_med2_req4").src = Game.bomb_bag_img; document.getElementById("gen_med2_req5").src=Game.hookshot_img; document.getElementById("gen_med2_req1").id = "sha_req1"; document.getElementById("gen_med2_req2").id = "sha_req2"; document.getElementById("gen_med2_req3").id = "sha_req3"; document.getElementById("gen_med2_req4").id = "sha_req4"; document.getElementById("gen_med2_req5").id = "sha_req5"; document.getElementById("text_gen_med2").id = "text_shadow";}
			else if (fifth == "fr" || fifth == "kk") {Logic.generic2 = "pocket"; document.getElementById("text_gen_med2").className="spirit_medallion"; document.getElementById("text_gen_med2").innerHTML = "pok"; document.getElementById("text_gen_med2").id = "text_pocket";}
			if (sixth == "de") {Logic.generic3 = "deku"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "dek"; document.getElementById("text_gen_med3").id = "text_deku";}
			else if (sixth == "do") {Logic.generic3 = "dodongos"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "dod"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req1").src = Game.bomb_bag_img; document.getElementById("gen_med3_req1").id = "dod_req1"; document.getElementById("text_gen_med3").id = "text_dodongos";}
			else if (sixth == "ja") {Logic.generic3 = "jabu"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "jab"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.letter_img; document.getElementById("gen_med3_req2").src=Game.boomerang_img; document.getElementById("gen_med3_req1").id = "jab_req1"; document.getElementById("gen_med3_req2").id = "jab_req2"; document.getElementById("text_gen_med3").id = "text_jabu";}
			else if (sixth == "fo") {Logic.generic3 = "forest"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "for"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.hookshot_img; document.getElementById("gen_med3_req2").src=Game.bow_img; document.getElementById("gen_med3_req3").src=Game.goron_bracelet_img; document.getElementById("gen_med3_req1").id = "for_req1"; document.getElementById("gen_med3_req2").id = "for_req2"; document.getElementById("gen_med3_req3").id = "for_req3"; document.getElementById("text_gen_med3").id = "text_forest";}
			else if (sixth == "fi") {Logic.generic3 = "fire"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "fir"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.hammer_img; document.getElementById("gen_med3_req1").id = "fir_req1"; document.getElementById("text_gen_med3").id = "text_fire";}
			else if (sixth == "wa") {Logic.generic3 = "water"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "wat";  document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.iron_boots_img; document.getElementById("gen_med3_text2").innerHTML ="/"; document.getElementById("gen_med3_req2").src=Game.golden_scale_img; document.getElementById("gen_med3_text3").innerHTML = "+"; document.getElementById("gen_med3_req3").src=Game.longshot_img; document.getElementById("gen_med3_req1").id = "wat_req1"; document.getElementById("gen_med3_req2").id = "wat_req2"; document.getElementById("gen_med3_req3").id = "wat_req3"; document.getElementById("text_gen_med3").id = "text_water";}
			else if (sixth == "sp") {Logic.generic3 = "spirit"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "spi"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req4").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.silver_gauntlets_img; document.getElementById("gen_med3_req2").src=Game.mirror_shield_img; document.getElementById("gen_med3_req3").src = Game.bomb_bag_img; document.getElementById("gen_med3_req4").src=Game.hookshot_img; document.getElementById("gen_med3_req1").id = "spi_req1"; document.getElementById("gen_med3_req2").id = "spi_req2"; document.getElementById("gen_med3_req3").id = "spi_req3"; document.getElementById("gen_med3_req4").id = "spi_req4"; document.getElementById("text_gen_med3").id = "text_spirit";}
			else if (sixth == "sh") {Logic.generic3 = "shadow"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "sha"; document.getElementById("gen_med3_req1").className = "requirements"; document.getElementById("gen_med3_req2").className = "requirements"; document.getElementById("gen_med3_req3").className = "requirements"; document.getElementById("gen_med3_req4").className = "requirements"; document.getElementById("gen_med3_req5").className = "requirements"; document.getElementById("gen_med3_req1").src=Game.dins_fire_img; document.getElementById("gen_med3_req2").src=Game.magic_meter_img; document.getElementById("gen_med3_req3").src=Game.hover_boots_img; document.getElementById("gen_med3_req4").src = Game.bomb_bag_img; document.getElementById("gen_med3_req5").src=Game.hookshot_img; document.getElementById("gen_med3_req1").id = "sha_req1"; document.getElementById("gen_med3_req2").id = "sha_req2"; document.getElementById("gen_med3_req3").id = "sha_req3"; document.getElementById("gen_med3_req4").id = "sha_req4"; document.getElementById("gen_med3_req5").id = "sha_req5"; document.getElementById("text_gen_med3").id = "text_shadow";}
			else if (sixth == "fr" || sixth == "kk") {Logic.generic3 = "pocket"; document.getElementById("text_gen_med3").className="generic_medallion"; document.getElementById("text_gen_med3").innerHTML = "pok"; document.getElementById("text_gen_med3").id = "text_pocket";}
			document.getElementById("markStones").value = "";
			if (first != "de" && second != "de" && third != "de" && fourth != "de" && fifth != "de" && sixth != "de") {document.getElementById("markStones").value += "de"}
			if (first != "do" && second != "do" && third != "do" && fourth != "do" && fifth != "do" && sixth != "do") {document.getElementById("markStones").value += "do"}
			if (first != "ja" && second != "ja" && third != "ja" && fourth != "ja" && fifth != "ja" && sixth != "ja") {document.getElementById("markStones").value += "ja"}
			if (first != "fo" && second != "fo" && third != "fo" && fourth != "fo" && fifth != "fo" && sixth != "fo") {document.getElementById("markStones").value += "fo"}
			if (first != "fi" && second != "fi" && third != "fi" && fourth != "fi" && fifth != "fi" && sixth != "fi") {document.getElementById("markStones").value += "fi"}
			if (first != "wa" && second != "wa" && third != "wa" && fourth != "wa" && fifth != "wa" && sixth != "wa") {document.getElementById("markStones").value += "wa"}
			if (first != "sh" && second != "sh" && third != "sh" && fourth != "sh" && fifth != "sh" && sixth != "sh") {document.getElementById("markStones").value += "sh"}
			if (first != "sp" && second != "sp" && third != "sp" && fourth != "sp" && fifth != "sp" && sixth != "sp") {document.getElementById("markStones").value += "sp"}
			if (first != "fr" && first != "kk" && second != "fr" && second != "kk" && third != "fr" && third != "kk" && fourth != "fr" && fourth != "kk" && fifth != "fr" && fifth != "kk" && sixth != "fr" && sixth != "kk" ) {document.getElementById("markStones").value += "fr"}
		}
		
	}
}
	if (document.getElementById("text_" + Logic.forest_medallion_location) != null) {if (document.getElementById("text_" + Logic.forest_medallion_location).style.opacity == 1) {document.getElementById("forest_medallion").style.opacity=.2;}}
	if (document.getElementById("text_" + Logic.forest_medallion_location) != null) {if (document.getElementById("text_" + Logic.forest_medallion_location).style.opacity == .2) {document.getElementById("forest_medallion").style.opacity=1;}}
	if (document.getElementById("text_" + Logic.fire_medallion_location) != null) {if (document.getElementById("text_" + Logic.fire_medallion_location).style.opacity == 1) {document.getElementById("fire_medallion").style.opacity=.2;}}
	if (document.getElementById("text_" + Logic.fire_medallion_location) != null) {if (document.getElementById("text_" + Logic.fire_medallion_location).style.opacity == .2) {document.getElementById("fire_medallion").style.opacity=1;}}
	if (document.getElementById("text_" + Logic.water_medallion_location) != null) {if (document.getElementById("text_" + Logic.water_medallion_location).style.opacity == 1) {document.getElementById("water_medallion").style.opacity=.2;}}
	if (document.getElementById("text_" + Logic.water_medallion_location) != null) {if (document.getElementById("text_" + Logic.water_medallion_location).style.opacity == .2) {document.getElementById("water_medallion").style.opacity=1;}}
	if (document.getElementById("text_" + Logic.generic1) != null) {if (document.getElementById("text_" + Logic.generic1).style.opacity == 1) {document.getElementById("gen1_medallion").style.opacity=.2;}}
	if (document.getElementById("text_" + Logic.generic1) != null) {if (document.getElementById("text_" + Logic.generic1).style.opacity == .2) {document.getElementById("gen1_medallion").style.opacity=1;}}
	if (document.getElementById("text_" + Logic.generic2) != null) {if (document.getElementById("text_" + Logic.generic2).style.opacity == 1) {document.getElementById("gen2_medallion").style.opacity=.2;}}
	if (document.getElementById("text_" + Logic.generic2) != null) {if (document.getElementById("text_" + Logic.generic2).style.opacity == .2) {document.getElementById("gen2_medallion").style.opacity=1;}}
	if (document.getElementById("text_" + Logic.generic3) != null) {if (document.getElementById("text_" + Logic.generic3).style.opacity == 1) {document.getElementById("gen3_medallion").style.opacity=.2;}}
	if (document.getElementById("text_" + Logic.generic3) != null) {if (document.getElementById("text_" + Logic.generic3).style.opacity == .2) {document.getElementById("gen3_medallion").style.opacity=1;}}
	
	Location_Logic.mido_1 = true;
	Location_Logic.mido_2 = true;
	Location_Logic.mido_3 = true;
	Location_Logic.mido_4 = true;
	Location_Logic.kokiri_sword = true;
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
	Location_Logic.g_fairy = Logic.golden_gauntlets && Logic.lullaby;
	Location_Logic.lacs = Logic.shadow_medallion && Logic.spirit_medallion;
	Location_Logic.fountain_fairy = Logic.ice_access && Logic.bomb_bag;
	Location_Logic.ice_glacier_hp = Logic.ice_access;
	Location_Logic.ice_bottom_of_fountain = Logic.ice_access && Logic.iron_boots;
	Location_Logic.ice_map = Logic.ice_access;
	Location_Logic.ice_compass = Logic.ice_access;
	Location_Logic.ice_hp = Logic.ice_access;
	Location_Logic.ice_irons = Logic.ice_access;
	Location_Logic.deku_lobby = true;
	Location_Logic.deku_slingshot = true;
	Location_Logic.deku_slingshot_room_side = true;
	Location_Logic.deku_compass = true;
	Location_Logic.deku_compass_room_side = true;
	Location_Logic.deku_basement = true;
	Location_Logic.deku_queen_gohma = Logic.slingshot;
	Location_Logic.ocarina_game = true;
	Location_Logic.lost_woods_grotto = Logic.can_blast_or_smash;
	Location_Logic.lost_woods_scrub_grotto = Logic.bomb_bag || (Logic.sarias || Logic.minuet) && Logic.hammer;
	Location_Logic.bridge_scrub = true;
	Location_Logic.target = Logic.slingshot;
	Location_Logic.skull_kid = Logic.sarias;
	Location_Logic.theater = true;
	Location_Logic.wolfos_grotto = Logic.bomb_bag || (Logic.sarias || Logic.minuet) && Logic.hammer;
	Location_Logic.rolling_goron = Logic.bomb_bag;
	Location_Logic.goron_dance = Logic.lullaby && Logic.sarias;
	Location_Logic.goron_pot = (Logic.bomb_bag || Logic.goron_bracelet) && (Logic.lullaby || Logic.can_use_dins);
	Location_Logic.goron_maze_1 = Logic.can_blast_or_smash || Logic.silver_gauntlets;
	Location_Logic.goron_maze_2 = Logic.can_blast_or_smash || Logic.silver_gauntlets;
	Location_Logic.goron_maze_3 = Logic.hammer || Logic.silver_gauntlets;
	Location_Logic.goron_link = Logic.can_stop_link_the_goron;
	Location_Logic.dodongos_map = Logic.can_enter_dodongos;
	Location_Logic.dodongos_compass = Logic.can_enter_dodongos;
	Location_Logic.dodongos_bomb_flower_platform = Logic.dodongos_climb;
	Location_Logic.dodongos_bomb_bag = Logic.dodongos_climb;
	Location_Logic.dodongos_end_of_bridge = Logic.dodongos_climb && Logic.can_blast_or_smash;
	Location_Logic.dodongos_above_king = Logic.bomb_bag;
	Location_Logic.dodongos_king_dodongo = Logic.bomb_bag;
	Location_Logic.trail_bombable = Logic.can_blast_or_smash;
	Location_Logic.trail_dodongos_top = true;
	Location_Logic.trail_song_of_storms = Logic.song_of_storms;
	Location_Logic.crater_peak_fairy = Logic.can_blast_or_smash && Logic.lullaby;
	Location_Logic.trade_quest = Location_Logic.trade_quest = (((Logic.ice_access || ((Logic.giants_wallet || Logic.can_enter_ganons) && Logic.lullaby && Logic.bottle)) && Logic.prescription) || Logic.claim_check) && Logic.crater_top;
	Location_Logic.crater_bean = (Logic.bolero && Logic.child_can_enter_river) || (Logic.hover_boots && Logic.crater_by_city);
	Location_Logic.crater_hammer_fairy = Logic.crater_by_city && Logic.hammer && Logic.lullaby;
	Location_Logic.crater_grotto = Logic.can_blast_or_smash;
	Location_Logic.crater_nook_hp = Logic.crater_top;
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
	Location_Logic.shield_grave = true;
	Location_Logic.gravedigging_tour = true;
	Location_Logic.suns_grave = Logic.suns_song;
	Location_Logic.fire_grave = Logic.lullaby && Logic.can_use_fire;
	Location_Logic.graveyard_box = Logic.child_can_enter_river || Logic.longshot;
	Location_Logic.race_1 = true;
	Location_Logic.race_2 = true;
	Location_Logic.river_pillar = Logic.child_can_enter_river || Logic.hover_boots;
	Location_Logic.river_grotto = true;
	Location_Logic.river_ledge = Logic.child_can_enter_river || Logic.hover_boots;
	Location_Logic.frogs_1 = Logic.child_can_enter_river && Logic.song_of_storms;
	Location_Logic.frogs_2 = Logic.child_can_enter_river && (Logic.song_of_storms && Logic.lullaby && Logic.eponas && Logic.sarias && Logic.suns_song && Logic.song_of_time);
	Location_Logic.zora_diving = (Logic.lullaby && Logic.bomb_bag) || Logic.silver_scale;
	Location_Logic.zora_torches = (Logic.lullaby && Logic.bomb_bag) || Logic.silver_scale;
	Location_Logic.thaw_king = Logic.ice_access || (Logic.bottle && (Logic.giants_wallet || Logic.can_enter_ganons) && Logic.lullaby);
	Location_Logic.colossus_bean = Logic.requiem && Logic.child_can_enter_river;
	Location_Logic.colossus_fairy = Logic.can_enter_colossus && Logic.bomb_bag && Logic.lullaby;
	Location_Logic.wasteland = Logic.can_cross_quicksand && Logic.can_use_fire;
	Location_Logic.gerudo_roof = Logic.fortress_access && (Logic.hookshot || Logic.hover_boots);
	Location_Logic.gerudo_archery_1 = Logic.eponas && Logic.bow;
	Location_Logic.gerudo_archery_2 = Logic.eponas && Logic.bow;
	Location_Logic.jabu_boomerang = Logic.can_enter_jabu;
	Location_Logic.jabu_map = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.jabu_compass = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.jabu_barinade = Logic.can_enter_jabu && Logic.boomerang;
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
	Location_Logic.spirit7 = (Logic.spirit_keys >=3 && Logic.longshot && Logic.bomb_bag) || Logic.spirit_keys == 5;
	Location_Logic.spirit8 = Logic.can_enter_adult_spirit && Logic.hookshot && Logic.lullaby;
	Location_Logic.spirit9 = Logic.can_enter_adult_spirit && (Logic.bow || Logic.hookshot || Logic.bomb_bag);
	Location_Logic.spirit10 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3;
	Location_Logic.spirit11 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3;
	Location_Logic.spirit12 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3 && Logic.lullaby;
	Location_Logic.spirit13 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=3 && Logic.lullaby && (Logic.hookshot || Logic.hover_boots);
	Location_Logic.spirit14 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag && Logic.mirror_shield;
	Location_Logic.spirit15 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag ;//&& Logic.can_see;
	Location_Logic.spirit16 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag ;//&& Logic.can_see;
	Location_Logic.spirit17 = Logic.can_enter_adult_spirit && Logic.spirit_keys >=4 && Logic.bomb_bag;
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
	Location_Logic.shadow11 = Logic.can_bomb_shadow_wall && Logic.hookshot && Logic.shadow_keys >=2;
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
	Location_Logic.gtg12 = Logic.can_save_carpenters && Logic.hookshot/*&& Logic.can_see*/;
	Location_Logic.gtg11 = Logic.can_save_carpenters && Logic.hookshot && Logic.hammer;// && (Logic.can_see || (Logic.bomb_bag || Logic.gtg_keys == 9)) ;
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
	Location_Logic.well5 = Logic.song_of_storms ;//&& Logic.can_see;
	Location_Logic.well2 = Logic.song_of_storms && Logic.bomb_bag;
	Location_Logic.well3 = Logic.song_of_storms && Logic.lullaby;
	Location_Logic.well4 = Logic.song_of_storms;
	Location_Logic.well6 = Logic.song_of_storms ;//&& Logic.can_see;
	Location_Logic.well11 = Logic.song_of_storms ;//&& Logic.can_see;
	Location_Logic.well7 = Logic.song_of_storms && Logic.bomb_bag;
	Location_Logic.well10 = Logic.song_of_storms && Logic.lullaby;
	Location_Logic.well8 = Logic.song_of_storms && Logic.lullaby ;//&& Logic.kokiri_sword;
	Location_Logic.well9 = Logic.song_of_storms && Logic.lullaby ;//&& Logic.can_see ;
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
	Location_Logic.gs_lost_woods_above_stage = (Logic.bomb_bag || Logic.silver_scale) && (Logic.sarias || Logic.minuet);
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
	Location_Logic.gs_zora_river_tree = true;
	Location_Logic.gs_domain = Logic.lullaby && (Logic.hookshot || Logic.magic || Logic.bow);
	Location_Logic.gs_fountain_above_log = Logic.rutos_letter && (Logic.silver_scale || (Logic.bomb_bag && Logic.lullaby)) && Logic.boomerang;
	Location_Logic.gs_fountain_tree = Logic.rutos_letter && (Logic.silver_scale || (Logic.bomb_bag && Logic.lullaby))
	Location_Logic.gs_fountain_hidden_cave = Logic.ice_access && Logic.silver_gauntlets && Logic.hookshot && Logic.can_blast_or_smash;
	Location_Logic.gs_hylia_bean = Logic.bottle;
	Location_Logic.gs_hylia_lab_wall = Logic.boomerang;
	Location_Logic.gs_hylia_island = true;
	Location_Logic.gs_hylia_tree = Logic.longshot;
	Location_Logic.gs_lab_crate = Logic.iron_boots && Logic.hookshot;
	Location_Logic.gs_valley_small_bridge = Logic.boomerang;
	Location_Logic.gs_valley_bean = Logic.bottle;
	Location_Logic.gs_valley_tent = Logic.fortress_access && Logic.hookshot;
	Location_Logic.gs_valley_pillar = Logic.fortress_access && Logic.hookshot;
	Location_Logic.gs_fortress_archery = Logic.fortress_access && Logic.hookshot;
	Location_Logic.gs_fortress_top = Logic.fortress_access;
	Location_Logic.gs_wasteland_structure = Logic.hookshot && Logic.can_cross_quicksand;
	Location_Logic.gs_colossus_bean = Logic.bottle && Logic.requiem;
	Location_Logic.gs_colossus_tree = Logic.hookshot && Logic.can_enter_colossus;
	Location_Logic.gs_colossus_hill = (Logic.requiem && (Logic.bomb_bag || Logic.silver_scale)) || (Logic.longshot && Logic.can_enter_colossus);
	Location_Logic.gs_ganons = true;
	Location_Logic.gs_deku_basement_back = Logic.boomerang && Logic.bomb_bag && Logic.slingshot;
	Location_Logic.gs_deku_basement_gate = true;
	Location_Logic.gs_deku_basement_vines = Logic.slingshot || Logic.boomerang || Logic.bomb_bag || Logic.can_use_dins;
	Location_Logic.gs_deku_compass = true;
	Location_Logic.gs_dodongos_east_side = Logic.can_enter_dodongos;
	Location_Logic.gs_dodongos_stair_room = Logic.dodongos_climb;
	Location_Logic.gs_dodongos_above_stairs = (Logic.dodongos_climb && Logic.hookshot) || (Logic.boomerang && (Logic.bomb_bag || Logic.goron_bracelet));
	Location_Logic.gs_dodongos_scarecrow = Logic.can_enter_dodongos && Logic.hookshot;
	Location_Logic.gs_dodongos_before_king = Logic.bomb_bag;
	Location_Logic.gs_jabu_vines = Logic.can_enter_jabu;
	Location_Logic.gs_jabu_near_octo1 = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.gs_jabu_near_octo2 = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.gs_jabu_near_boss = Logic.can_enter_jabu && Logic.boomerang;
	Location_Logic.gs_forest_first = (Logic.minuet || Logic.sarias) && Logic.hookshot;
	Location_Logic.gs_forest_lobby = (Logic.minuet || Logic.sarias) && Logic.hookshot;
	Location_Logic.gs_forest_outdoor_east = (Logic.minuet || Logic.sarias) && Logic.hookshot && ((Logic.bow || Logic.song_of_time) || (Logic.forest_keys >= 1 && Logic.hover_boots));
	Location_Logic.gs_forest_outdoor_west = (Logic.minuet || Logic.sarias) && Logic.hookshot && (((Logic.bow || Logic.song_of_time) && Logic.longshot) || (Logic.forest_keys >= 1 && Logic.hover_boots) || (Logic.forest_keys >= 2 && Logic.goron_bracelet && Logic.bow))
	Location_Logic.gs_forest_basement = (Logic.minuet || Logic.sarias) && Logic.bow && Logic.goron_bracelet && Logic.forest_keys == 5;
	Location_Logic.gs_fire_song_of_time = Logic.can_enter_fire_temple && Logic.fire_keys >= 1 && Logic.song_of_time;
	Location_Logic.gs_fire_bomb_wall = Logic.can_climb_fire_temple && Logic.goron_bracelet && Logic.bomb_bag;
	Location_Logic.gs_fire_scarecrow1 = Logic.can_climb_fire_temple && Logic.goron_bracelet && Logic.fire_keys >=5 && Logic.hookshot;
	Location_Logic.gs_fire_scarecrow2 = Logic.can_climb_fire_temple && Logic.goron_bracelet && Logic.fire_keys >=5 && Logic.hookshot;
	Location_Logic.gs_fire_basement = Logic.can_enter_fire_temple && Logic.hammer;
	Location_Logic.gs_water_south_basement = Logic.can_enter_water && Logic.bomb_bag && Logic.lullaby;
	Location_Logic.gs_water_river = Logic.can_enter_water && Logic.song_of_time && Logic.water_keys >= 5;
	Location_Logic.gs_water_central = Logic.middle_water && Logic.longshot || Logic.can_use_farores;
	Location_Logic.gs_water_near_boss_key = Logic.can_enter_water && Logic.longshot && Logic.lullaby && Logic.water_keys >=4;
	Location_Logic.gs_water_platform_room = Logic.can_enter_water && Logic.longshot && Logic.lullaby && Logic.water_keys >=4;
	Location_Logic.gs_spirit_metal_fence = Logic.requiem && (Logic.boomerang || Logic.slingshot);
	Location_Logic.gs_spirit_before_child_knuckle = (Logic.bomb_bag && Logic.boomerang && Logic.hookshot && Logic.spirit_keys >= 1) || (Logic.boomerang && Logic.spirit_keys == 5 && Logic.bomb_bag && Logic.requiem) || (Logic.hookshot && Logic.silver_gauntlets && Logic.spirit_keys >= 3);
	Location_Logic.gs_spirit_boulder_room = Logic.can_enter_adult_spirit && Logic.song_of_time && (Logic.bow || Logic.hookshot || Logic.bomb_bag);
	Location_Logic.gs_spirit_temple_lobby = Logic.can_enter_adult_spirit && Logic.spirit_keys >= 3 && (Logic.hookshot || Logic.hover_boots);
	Location_Logic.gs_spirit_bomb_for_light_room = Logic.spirit_keys >= 1;
	Location_Logic.gs_shadow_like_like = Logic.can_bomb_shadow_wall;
	Location_Logic.gs_shadow_crusher = Logic.can_bomb_shadow_wall && Logic.hookshot;
	Location_Logic.gs_shadow_giant_pot = Logic.can_bomb_shadow_wall && Logic.shadow_keys >=2 && Logic.hookshot;
	Location_Logic.gs_shadow_near_boat = Logic.can_pass_shadow_hookshot_door && Logic.longshot && Logic.shadow_keys >=4;
	Location_Logic.gs_shadow_three_pots = Logic.can_ride_shadow_boat;
	Location_Logic.gs_well_west_inner = Logic.boomerang /*&& Logic.can_see*/ && Logic.well_keys >=3;
	Location_Logic.gs_well_east_inner = Logic.boomerang /*&& Logic.can_see*/ && Logic.well_keys >=3;
	Location_Logic.gs_well_like_like = Logic.boomerang /*&& Logic.can_see*/ && Logic.well_keys >=3;
	Location_Logic.gs_ice_spinning_scythe = Logic.ice_access && Logic.hookshot;
	Location_Logic.gs_ice_hp_room = Logic.ice_access && Logic.hookshot;
	Location_Logic.gs_ice_block_room = Logic.ice_access && Logic.hookshot;

	Location_Access.kokiri_sword = true;
	Location_Access.mido_1 = true;
	Location_Access.mido_2 = true;
	Location_Access.mido_3 = true;
	Location_Access.mido_4 = true;
	Location_Access.talons_chickens = true;
	Location_Access.back_of_ranch = true;
	Location_Access.hyrule_forest_boulder = Game.can_blast_or_smash;
	Location_Access.hyrule_open_grotto = true;
	Location_Access.hyrule_hp_scrub = Game.can_blast_or_smash;;
	Location_Access.hyrule_boulder_of_destiny = Game.can_blast_or_smash;;
	Location_Access.hyrule_tektite_grotto = Game.can_blast_or_smash;
	Location_Access.gerudovalley_box = true;
	Location_Access.gerudovalley_waterfall = true;
	Location_Access.hylia_child_fishing = true;
	Location_Access.hylia_bottle = true;
	Location_Access.hylia_adult_fishing = Game.hookshot || Game.child_can_enter_river;
	Location_Access.hylia_lab_top = Game.hookshot || Game.child_can_enter_river;
	Location_Access.hylia_lab_dive = Game.scale2 || (Game.hookshot && Game.iron_boots);
	Location_Access.hylia_sun_shoot = Game.bow1;
	Location_Access.market_slingshot_game = true;
	Location_Access.richard = true;
	Location_Access.market_bowling_1 = Game.bomb_bag1;
	Location_Access.market_bowling_2 = Game.bomb_bag1;
	Location_Access.market_lens_game = Game.can_see;
	Location_Access.poes= (Game.bow1 && Game.eponas && (Game.bottle1 || Game.can_enter_jabu)) || Game.big_poe;
	Location_Access.dins_fairy = (Game.bomb_bag1 || Game.has_chus) && Game.lullaby;
	Location_Access.g_fairy = Game.golden_gauntlets && Game.lullaby;
	Location_Access.lacs = false;
	Location_Access.river_pillar = true;
	Location_Access.river_grotto = true;
	Location_Access.river_ledge = true;
	Location_Access.frogs_1 = Game.child_can_enter_river && Game.song_of_storms;
	Location_Access.frogs_2 = Game.child_can_enter_river && (Game.song_of_storms && Game.lullaby && Game.eponas && Game.sarias && Game.suns_song && Game.song_of_time);
	Location_Access.zora_diving = Game.child_can_enter_river;
	Location_Access.zora_torches = Game.child_can_enter_river;
	Location_Access.ocarina_game = true;
	Location_Access.lost_woods_grotto = Game.can_blast_or_smash;
	Location_Access.lost_woods_scrub_grotto = Game.can_blast_or_smash;
	Location_Access.wolfos_grotto = Game.can_blast_or_smash;
	Location_Access.bridge_scrub = true;
	Location_Access.skull_kid = Game.sarias;
	Location_Access.target = Game.slingshot1;
	Location_Access.theater = true;
	Location_Access.kokiri_song_of_storms = Game.song_of_storms;
	Location_Access.rolling_goron = Game.bomb_bag1 || Game.has_chus || Game.goron_bracelet;
	Location_Access.goron_pot = (Game.bomb_bag1 || Game.goron_bracelet) && (Game.lullaby || Game.can_use_dins);
	Location_Access.goron_dance = Game.lullaby && Game.sarias;
	Location_Access.goron_maze_1 = Game.can_blast_or_smash || Game.silver_gauntlets;
	Location_Access.goron_maze_2 = Game.can_blast_or_smash || Game.silver_gauntlets;
	Location_Access.goron_maze_3 = Game.hammer || Game.silver_gauntlets || ((Game.bomb_bag1 || Game.has_chus) && Game.hover_boots);
	Location_Access.goron_link = Game.can_stop_link_the_goron;
	Location_Access.trail_bombable = Game.can_blast_or_smash;
	Location_Access.trail_dodongos_top = true;
	Location_Access.trail_song_of_storms = Game.song_of_storms;
	Location_Access.crater_bean = Game.bolero || Game.crater_top;
	Location_Access.crater_hammer_fairy = Game.crater_by_city && Game.hammer && Game.lullaby;
	Location_Access.crater_nook_hp = Game.crater_top || Game.bolero;
	Location_Access.crater_grotto = Game.can_blast_or_smash;
	Location_Access.crater_peak_fairy = Game.can_blast_or_smash && Game.lullaby;
	Location_Access.trade_quest = (((Game.ice_access || (Game.giants_wallet && Game.lullaby && (Game.bottle1 || Game.can_enter_jabu))) && Game.prescription) || Game.claim_check) && Game.crater_top;
	Location_Access.gerudo_hammer = Game.fortress_access && Game.hammer;
	Location_Access.gerudo_roof = Game.fortress_access && (Game.hookshot || Game.hover_boots);
	Location_Access.gerudo_archery_1 = Game.eponas && Game.bow1;
	Location_Access.gerudo_archery_2 = Game.eponas && Game.bow1;
	Location_Access.wasteland = (Game.can_cross_quicksand || Game.requiem) && Game.can_use_fire;
	Location_Access.colossus_fairy = Game.can_enter_colossus && (Game.bomb_bag1 || Game.has_chus) && Game.lullaby;
	Location_Access.colossus_bean = Game.can_enter_colossus;
	Location_Access.man_on_roof = true;//Game.hookshot;
	Location_Access.kakariko_grotto = true;
	Location_Access.windmill = true;//Game.boomerang || Game.song_of_time;
	Location_Access.anju = true;
	Location_Access.cow_house = true;
	Location_Access.redead_grotto = Game.can_blast_or_smash;
	Location_Access.archery_game = Game.bow1;
	Location_Access.anjus_chickens = true;
	Location_Access.tokens_10 = false;
	Location_Access.tokens_20 = false;
	Location_Access.tokens_30 = false;
	Location_Access.tokens_40 = false;
	Location_Access.tokens_50 = false;
	Location_Access.gravedigging_tour = true;
	Location_Access.graveyard_box = Game.child_can_enter_river || Game.longshot || Game.boomerang;
	Location_Access.shield_grave = true;
	Location_Access.suns_grave = Game.suns_song;
	Location_Access.fire_grave = Game.lullaby;
	Location_Access.race_1 = true;
	Location_Access.race_2 = true;
	Location_Access.deku_lobby = true;
	Location_Access.deku_slingshot = true;
	Location_Access.deku_slingshot_room_side = true;
	Location_Access.deku_compass = true;
	Location_Access.deku_compass_room_side = true;
	Location_Access.deku_basement = true;
	Location_Access.deku_queen_gohma = true;
	Location_Access.dodongos_map = Game.can_enter_dodongos;
	Location_Access.dodongos_compass = Game.can_enter_dodongos;
	Location_Access.dodongos_bomb_flower_platform = Game.dodongos_climb;
	Location_Access.dodongos_bomb_bag = Game.dodongos_climb;
	Location_Access.dodongos_end_of_bridge = (Game.dodongos_climb && Game.can_blast_or_smash)
	Location_Access.dodongos_above_king = Game.dodongos_climb && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.dodongos_king_dodongo = Game.dodongos_climb && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.jabu_boomerang = Game.can_enter_jabu && (Game.boomerang || Game.bomb_bag1 || Game.slingshot1 || Game.has_chus);
	Location_Access.jabu_map = Game.can_enter_jabu && Game.boomerang;
	Location_Access.jabu_compass = Game.can_enter_jabu && Game.boomerang;
	Location_Access.jabu_barinade = Game.can_enter_jabu && Game.boomerang;
	Location_Access.fountain_fairy = Game.ice_access && (Game.bomb_bag1|| Game.has_chus);
	Location_Access.ice_glacier_hp = Game.ice_access;
	Location_Access.ice_map = Game.ice_access;
	Location_Access.ice_hp = Game.ice_access;
	Location_Access.ice_compass = Game.ice_access;
	Location_Access.ice_irons = Game.ice_access;
	Location_Access.ice_bottom_of_fountain = Game.ice_access;
	Location_Access.thaw_king = Game.ice_access || (document.getElementById("bottleimg").style.opacity == 1 && Game.giants_wallet && Game.lullaby);
	Location_Access.forest1 = Game.hookshot;
	Location_Access.forest2 = Game.hookshot;
	Location_Access.forest3 = Game.hookshot && (Game.song_of_time || Game.bow1 || ((Game.hover_boots || Game.goron_bracelet) && Game.current_forest_keys>=1));
	Location_Access.forest4 = Game.hookshot && (Game.song_of_time || ((Game.hover_boots || Game.goron_bracelet) && Game.current_forest_keys>=1) || (Game.bow1/* && (Game.iron_boots || Game.golden_scale || Game.longshot)*/));
	Location_Access.forest5 = Game.hookshot && (Game.song_of_time || ((Game.hover_boots || Game.goron_bracelet) && Game.current_forest_keys>=1) || (Game.bow1/* && (Game.iron_boots || Game.golden_scale || Game.longshot)*/));
	Location_Access.forest6 = Game.hookshot && Game.current_forest_keys >= 1 && Game.bow1 && Game.goron_bracelet;
	Location_Access.forest7 = Game.hookshot && Game.current_forest_keys >= 2 && Game.bow1 && Game.goron_bracelet;
	Location_Access.forest8 = Game.hookshot && ((Game.bow1 && Game.goron_bracelet && Game.current_forest_keys >=2) || ((Game.hover_boots || Game.goron_bracelet) && Game.current_forest_keys >=1));
	Location_Access.forest9 = Game.hookshot && Game.goron_bracelet && Game.bow1 && Game.current_forest_keys>=3;
	Location_Access.forest10 = Game.hookshot && Game.goron_bracelet && Game.current_forest_keys>=3;
	Location_Access.forest11 = Game.hookshot && Game.goron_bracelet && Game.bow1 && Game.current_forest_keys>=3;
	Location_Access.forest12 = Game.hookshot && Game.goron_bracelet && (Game.bow1 || Game.can_use_dins) && Game.current_forest_keys>=5;
	Location_Access.forest13 = Game.hookshot && Game.goron_bracelet && Game.bow1 && Game.current_forest_keys>=5;
	Location_Access.forest14 = Game.hookshot && Game.goron_bracelet && Game.bow1 && Game.current_forest_keys>=5 && Game.forest_boss_key;
	Location_Access.fire1 = Game.can_enter_fire_temple;
	Location_Access.fire2 = Game.can_enter_fire_temple && Game.hammer;
	Location_Access.fire3 = Game.can_enter_fire_temple && Game.hammer;
	Location_Access.fire4 = Game.can_enter_fire_temple && Game.current_fire_keys >=1;
	Location_Access.fire5 = Game.can_enter_fire_temple && Game.current_fire_keys >=1 && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.fire6 = Game.can_enter_fire_temple && Game.fire_boss_key && Game.hammer;
	Location_Access.fire7 = Game.can_climb_fire_temple;
	Location_Access.fire8 = Game.can_climb_fire_temple;
	Location_Access.fire9 = Game.can_climb_fire_temple && ((Game.current_fire_keys >= 4 && Game.bow1) || Game.current_fire_keys>=5);
	Location_Access.fire10 = Game.can_climb_fire_temple && Game.current_fire_keys>=5;
	Location_Access.fire11 = Game.can_climb_fire_temple && Game.current_fire_keys>=5 && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.fire12 = Game.can_climb_fire_temple && Game.current_fire_keys>=5 && Game.hookshot;
	Location_Access.fire13 = Game.can_climb_fire_temple && Game.current_fire_keys>=6;
	Location_Access.fire14 = Game.can_climb_fire_temple && (Game.current_fire_keys>=7 || (Game.current_fire_keys>=6)) && Game.hammer && (Game.song_of_time || Game.bomb_bag1 || Game.has_chus);
	Location_Access.fire15 = Game.can_climb_fire_temple && (Game.current_fire_keys>=7 || (Game.current_fire_keys >= 6)) && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.water1 = Game.can_enter_water;
	Location_Access.water2 = Game.can_enter_water;
	Location_Access.water3 = Game.can_enter_water && Game.lullaby && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.water4 = Game.can_enter_water && Game.lullaby && (Game.bow1 || Game.can_use_dins);
	Location_Access.water5 = Game.can_enter_water && Game.lullaby && Game.bow1 && Game.goron_bracelet && (Game.hover_boots || Game.longshot);
	Location_Access.water6 = Game.middle_water;
	Location_Access.water7 = Game.current_water_keys >= 2 && Game.lullaby;
	Location_Access.water8 = Game.current_water_keys >= 2 && Game.lullaby && Game.song_of_time && Game.bow1;
	Location_Access.water9 = Game.can_enter_water && Game.lullaby && ((Game.current_water_keys >= 2 && Game.song_of_time && Game.bow1) || Game.goron_bracelet);
	Location_Access.water10 = Game.can_enter_water && Game.lullaby && Game.longshot && Game.current_water_keys >= 2;
	Location_Access.water11 = Game.can_enter_water && Game.water_boss_key && Game.longshot ;
	Location_Access.spirit1 = Game.requiem && (Game.slingshot1 || Game.boomerang || Game.has_chus);
	Location_Access.spirit2 = Game.requiem && (Game.slingshot1 || Game.boomerang || Game.has_chus);
	Location_Access.spirit3 = Game.current_spirit_keys >= 1 && ((Game.projectile_child && Game.requiem) || (Game.projectile_adult && Game.silver_gauntlets));
	Location_Access.spirit4 = Game.current_spirit_keys >= 1 && ((Game.projectile_child && Game.requiem) || (Game.projectile_adult && Game.silver_gauntlets));
	Location_Access.spirit5 = Game.current_spirit_keys >= 1 && ((Game.requiem && (Game.bomb_bag1 || Game.has_chus)) || (Game.can_use_fire && Game.silver_gauntlets));
	Location_Access.spirit6 = Game.current_spirit_keys >= 1 && ((Game.requiem && (Game.bomb_bag1 || Game.has_chus)) || (Game.can_use_fire && Game.silver_gauntlets));
	Location_Access.spirit7 = Game.current_spirit_keys >= 2;
	Location_Access.spirit8 = Game.can_enter_adult_spirit && Game.hookshot && Game.lullaby;
	Location_Access.spirit9 = Game.can_enter_adult_spirit && (Game.bow1 || Game.hookshot || (Game.bomb_bag1 || Game.has_chus));
	Location_Access.spirit10 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=1;
	Location_Access.spirit11 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=1;
	Location_Access.spirit12 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=1 && Game.lullaby;
	Location_Access.spirit13 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=1 && Game.lullaby && (Game.hookshot || Game.hover_boots);
	Location_Access.spirit14 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=2 && (Game.bomb_bag1 || Game.has_chus) && Game.mirror_shield;
	Location_Access.spirit15 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=2 && (Game.bomb_bag1 || Game.has_chus) ;//&& Game.can_see;
	Location_Access.spirit16 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=2 && (Game.bomb_bag1 || Game.has_chus) ;//&& Game.can_see;
	Location_Access.spirit17 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=2 && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.spirit18 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=3 && Game.bow1 && Game.lullaby && Game.hookshot;
	Location_Access.spirit19 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=3 && Game.mirror_shield;
	Location_Access.spirit20 = Game.can_enter_adult_spirit && Game.current_spirit_keys >=3 && Game.mirror_shield && (Game.bomb_bag1 || Game.has_chus) && Game.spirit_boss_key && Game.hookshot;
	Location_Access.shadow1 = Game.can_enter_shadow;
	Location_Access.shadow2 = Game.can_enter_shadow;
	Location_Access.shadow3 = Game.can_cross_shadow_gap;
	Location_Access.shadow4 = Game.can_cross_shadow_gap;
	Location_Access.shadow5 = Game.can_bomb_shadow_wall;
	Location_Access.shadow6 = Game.can_bomb_shadow_wall;
	Location_Access.shadow7 = Game.can_bomb_shadow_wall;
	Location_Access.shadow8 = Game.can_bomb_shadow_wall;
	Location_Access.shadow9 = Game.can_bomb_shadow_wall;
	Location_Access.shadow10 = Game.can_bomb_shadow_wall && Game.current_shadow_keys >=2;
	Location_Access.shadow11 = Game.can_bomb_shadow_wall && Game.hookshot && Game.current_shadow_keys >=2;
	Location_Access.shadow12 = Game.can_pass_shadow_hookshot_door && Game.current_shadow_keys >=3;
	Location_Access.shadow13 = Game.can_pass_shadow_hookshot_door && Game.current_shadow_keys >=3;
	Location_Access.shadow14 = Game.can_pass_shadow_hookshot_door && Game.current_shadow_keys >=3;
	Location_Access.shadow15 = Game.can_ride_shadow_boat && Game.can_use_dins && Game.current_shadow_keys >=4;
	Location_Access.shadow16 = Game.can_ride_shadow_boat && Game.can_use_dins && Game.current_shadow_keys >=4;
	Location_Access.shadow17 = Game.can_ride_shadow_boat && Game.current_shadow_keys >=4;
	Location_Access.shadow18 = Game.can_beat_shadow_boss && Game.current_shadow_keys >=5;
	Location_Access.ganons1 = Game.can_enter_ganons && Game.golden_gauntlets;
	Location_Access.ganons2 = Game.can_enter_ganons && Game.golden_gauntlets;
	Location_Access.ganons3 = Game.can_enter_ganons && Game.golden_gauntlets;
	Location_Access.ganons4 = Game.can_enter_ganons && Game.golden_gauntlets;
	Location_Access.ganons5 = Game.can_enter_ganons && Game.golden_gauntlets;
	Location_Access.ganons6 = Game.can_enter_ganons && Game.golden_gauntlets;
	Location_Access.ganons7 = Game.can_enter_ganons && Game.golden_gauntlets ;//&& Game.can_see;
	Location_Access.ganons8 = Game.can_enter_ganons && Game.golden_gauntlets && Game.lullaby && Game.current_ganons_keys >= 1;
	Location_Access.ganons9 = Game.can_enter_ganons;
	Location_Access.ganons10 = Game.can_enter_ganons && (Game.bomb_bag1 || Game.has_chus);//&& Game.can_see;
	Location_Access.ganons11 = Game.can_enter_ganons;
	Location_Access.ganons12 = Game.can_enter_ganons;
	Location_Access.ganons13 = Game.can_enter_ganons;
	Location_Access.ganons14 = Game.can_enter_ganons;
	Location_Access.ganons15 = Game.can_enter_ganons && (Game.longshot || ((Game.fire_arrows && Game.magic) || (Game.hover_boots && Game.can_use_dins)));
	Location_Access.ganons16 = Game.can_enter_ganons;
	Location_Access.gtg1 = Game.can_save_carpenters && Game.bow1;
	Location_Access.gtg2 = Game.can_save_carpenters && Game.bow1;
	Location_Access.gtg3 = Game.can_save_carpenters;
	Location_Access.gtg4 = Game.can_save_carpenters;
	Location_Access.gtg5 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.silver_gauntlets ;//&& Game.can_see ;
	Location_Access.gtg6 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.silver_gauntlets ;//&& Game.can_see ;
	Location_Access.gtg7 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.silver_gauntlets ;//&& Game.can_see ;
	Location_Access.gtg8 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.silver_gauntlets ;//&& Game.can_see ;
	Location_Access.gtg9 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.bow1;  //((Game.bomb_bag1 || Game.current_gtg_keys == 9) && Game.hammer));
	Location_Access.gtg10 = Game.can_save_carpenters && Game.can_climb_gtg_hole && Game.bow1;//&& Game.can_see;
	Location_Access.gtg11 = Game.can_save_carpenters && Game.can_climb_gtg_hole;// && (Game.can_see || (Game.bomb_bag1 || Game.current_gtg_keys == 9)) ;
	Location_Access.gtg12 = Game.can_save_carpenters && Game.can_climb_gtg_hole/*&& Game.can_see*/;
	Location_Access.gtg13 = Game.can_save_carpenters && (Game.current_gtg_keys >= 2 || ((Game.bomb_bag1 || Game.has_chus) && Game.song_of_time) || (Game.can_climb_gtg_hole /*&& Game.can_see*/ && Game.song_of_time));
	Location_Access.gtg14 = Game.can_save_carpenters && (Game.current_gtg_keys >= 2 || ((Game.bomb_bag1 || Game.has_chus) && Game.song_of_time) || (Game.can_climb_gtg_hole /*&& Game.can_see*/ && Game.song_of_time));
	Location_Access.gtg15 = Game.can_save_carpenters && (Game.current_gtg_keys >= 2 || ((Game.bomb_bag1 || Game.has_chus) && Game.song_of_time) || (Game.can_climb_gtg_hole /*&& Game.can_see*/ && Game.song_of_time));
	Location_Access.gtg16 = Game.can_save_carpenters && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.gtg17 = Game.can_save_carpenters && Game.current_gtg_keys >= 1 ;//&& Game.can_see;
	Location_Access.gtg18 = Game.can_save_carpenters && Game.current_gtg_keys >= 2;
	Location_Access.gtg19 = Game.can_save_carpenters && Game.current_gtg_keys >= 4;
	Location_Access.gtg20 = Game.can_save_carpenters && Game.current_gtg_keys >= 5;
	Location_Access.gtg21 = Game.can_save_carpenters && Game.current_gtg_keys >= 7;
	Location_Access.gtg22 = Game.can_save_carpenters && Game.iron_boots && Game.song_of_time && Game.hookshot /*&& Game.can_see*/;
	Location_Access.well1 = Game.song_of_storms ;//&& Game.can_see;
	Location_Access.well2 = Game.song_of_storms && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.well3 = Game.song_of_storms && Game.lullaby;
	Location_Access.well4 = Game.song_of_storms;
	Location_Access.well5 = Game.song_of_storms ;//&& Game.can_see;
	Location_Access.well6 = Game.song_of_storms ;//&& Game.can_see;
	Location_Access.well7 = Game.song_of_storms && (Game.bomb_bag1 || Game.has_chus);
	Location_Access.well8 = Game.song_of_storms && Game.lullaby ;//&& Game.kokiri_sword;
	Location_Access.well9 = Game.song_of_storms && Game.lullaby ;//&& Game.can_see ;
	Location_Access.well10 = Game.song_of_storms && Game.lullaby;
	Location_Access.well11 = Game.song_of_storms ;//&& Game.can_see;
	Location_Access.well12 = Game.song_of_storms && Game.current_well_keys >= 1;//&& Game.can_see ;
	Location_Access.well13 = Game.song_of_storms && Game.current_well_keys >= 1;//&& Game.can_see ;
	Location_Access.well14 = Game.song_of_storms && ((Game.bomb_bag1 || Game.has_chus) || (((/*Game.can_see &&*/ Game.current_well_keys >= 1) || Game.can_use_dins) && Game.goron_bracelet));
	Location_Access.zeldasSpot = true;
	Location_Access.eponasSpot = true;
	Location_Access.sariasSpot = true;
	Location_Access.stormsSpot = true;
	Location_Access.sunsSpot = Game.lullaby;
	Location_Access.boleroSpot = Game.can_enter_fire_temple;
	Location_Access.minuetSpot = true;
	Location_Access.requiemSpot = Game.can_enter_colossus;
	Location_Access.serenadeSpot = Game.ice_access;
	Location_Access.preludeSpot = Game.forest_medallion;
	Location_Access.nocturneSpot = Game.forest_medallion && Game.fire_medallion && Game.water_medallion;
	Location_Access.oot = Game.kokiri_emerald && Game.goron_ruby && Game.zora_sapphire;


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
	gs[36] = Location_Logic.gs_zora_river_tree;
	gs[37] = Location_Logic.gs_domain;
	gs[38] = Location_Logic.gs_fountain_above_log;
	gs[39] = Location_Logic.gs_fountain_tree;
	gs[40] = Location_Logic.gs_fountain_hidden_cave;
	gs[41] = Location_Logic.gs_hylia_bean;
	gs[42] = Location_Logic.gs_hylia_lab_wall;
	gs[43] = Location_Logic.gs_hylia_island;
	gs[44] = Location_Logic.gs_hylia_tree;
	gs[45] = Location_Logic.gs_lab_crate;
	gs[46] = Location_Logic.gs_valley_small_bridge;
	gs[47] = Location_Logic.gs_valley_bean;
	gs[48] = Location_Logic.gs_valley_tent;
	gs[49] = Location_Logic.gs_valley_pillar;
	gs[50] = Location_Logic.gs_fortress_archery;
	gs[51] = Location_Logic.gs_fortress_top;
	gs[52] = Location_Logic.gs_wasteland_structure;
	gs[53] = Location_Logic.gs_colossus_bean;
	gs[54] = Location_Logic.gs_colossus_tree;
	gs[55] = Location_Logic.gs_colossus_hill;
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
	document.getElementById("skullsTextBlock").innerHTML = "";
	for (i = 1; i<=100; i++) {
		if (gs[i] == true) {Logic.gold_skulltulas +=1; document.getElementById("skullsTextBlock").innerHTML += gsText[i] + "<br />" ;};
	}
	document.getElementById("skulls_in_logic").innerHTML = "Skulls: " + Logic.gold_skulltulas;

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
	var colorChange = false;
	for (const key of keys) {
		if (temp == 256) {break; }
		temp +=1;
		str = "text_" + key;
		if (document.getElementById(str) != null) {if (document.getElementById(str).style.color == "orange") {colorChange = true;} else {colorChange = false;}} else {colorChange = false;}
		if(document.getElementById(str) == null) {continue;}
		if(Location_Logic[key] == true) {
			document.getElementById(str).className= "logic_check_text";
			document.getElementById(str).innerHTML = backUp[temp-1];
			if ((!woth1Locations.includes(key) && !woth2Locations.includes(key) && !woth3Locations.includes(key) && !woth4Locations.includes(key) && !woth5Locations.includes(key)) || !circus) {document.getElementById(str).style.color = "chartreuse";}
			else {
				var woths = [woth1Locations.includes(key), woth2Locations.includes(key), woth3Locations.includes(key), woth4Locations.includes(key), woth5Locations.includes(key)];
				var i;
				var j;
				var k;
				var text = document.getElementById(str).innerHTML;
				document.getElementById(str).innerHTML = ""
				for (i = 0; i < text.length; i++) {
					for (j = 0; j < woths.length; j++) {
						if (woths[j]) {
							let charElem = document.createElement("span");
							charElem.style.color = WotHColors[j+1];
							charElem.innerHTML = text[i];
							document.getElementById(str).appendChild(charElem);
							for (k = j + 1; k < woths.length; k++) {
								if (woths[k]) {
									woths[j] = false;
								}
							}
							break;
						}
					}
				}
			}
			if(document.getElementById(key) != null) {
				if (temp <= 242) {Game.logically_accessible += 1;}
				if (temp == 44 && Game.deku_checks_remaining == 0) {Game.logically_accessible -= 1;}
			    if (temp == 66 && Game.dodongos_checks_remaining == 0) {Game.logically_accessible -= 1;}
				if (temp == 113 && Game.jabu_checks_remaining == 0) {Game.logically_accessible -= 1;}
				if (temp >= 115 && temp <= 128) {Game.forest_logically_accessible += 1;}
				if (temp >= 129 && temp <= 143) {Game.fire_logically_accessible += 1;}
				if (temp >= 144 && temp <= 154) {Game.water_logically_accessible += 1;}
				if (temp >= 155 && temp <= 174) {Game.spirit_logically_accessible += 1;}
				if (temp >= 175 && temp <= 192) {Game.shadow_logically_accessible += 1;}
				if (temp >= 193 && temp <= 208) {Game.ganons_logically_accessible += 1;}
				if (temp >= 209 && temp <= 230) {Game.gtg_logically_accessible += 1;}
				if (temp >= 231 && temp <= 244) {Game.well_logically_accessible += 1;}
			}
		}
		else if (Location_Access[key] == true) {
			document.getElementById(str).className= "access_check_text";
			document.getElementById(str).style.color ="yellow";
		}
		else {
			document.getElementById(str).className= "ool_check_text";
			document.getElementById(str).style.color ="black";
		}
		if (colorChange) {document.getElementById(str).style.color = "orange";}
	}
	
	document.getElementById("forest").innerHTML = "" + Game.forest_checks_remaining;
	document.getElementById("fire").innerHTML = "" + Game.fire_checks_remaining;
	document.getElementById("water").innerHTML = "" + Game.water_checks_remaining;
	document.getElementById("spirit").innerHTML = "" + Game.spirit_checks_remaining;
	document.getElementById("shadow").innerHTML = "" + Game.shadow_checks_remaining;
	document.getElementById("ganons").innerHTML = "" + Game.ganons_checks_remaining;
	document.getElementById("gtg").innerHTML = "" + Game.gtg_checks_remaining;
	document.getElementById("well").innerHTML = "" + Game.well_checks_remaining;
	
	document.getElementById("forestSKs").innerHTML = "" + (5 - Game.current_forest_keys);
	document.getElementById("fireSKs").innerHTML = "" + (8 - Game.current_fire_keys);
	document.getElementById("waterSKs").innerHTML = "" + (6 - Game.current_water_keys);
	document.getElementById("spiritSKs").innerHTML = "" + (5 - Game.current_spirit_keys);
	document.getElementById("shadowSKs").innerHTML = "" + (5 - Game.current_shadow_keys);
	document.getElementById("ganonsSKs").innerHTML = "" + (2 - Game.current_ganons_keys);
	document.getElementById("gtgSKs").innerHTML = "" + (9 - Game.current_gtg_keys);
	document.getElementById("wellSKs").innerHTML = "" + (3 - Game.current_well_keys);
	
	if (Game.forest_boss_key) {document.getElementById("forestBKs").innerHTML = 0;} else {document.getElementById("forestBKs").innerHTML = 1;}
	if (Game.fire_boss_key) {document.getElementById("fireBKs").innerHTML = 0;} else {document.getElementById("fireBKs").innerHTML = 1;}
	if (Game.water_boss_key) {document.getElementById("waterBKs").innerHTML = 0;} else {document.getElementById("waterBKs").innerHTML = 1;}
	if (Game.spirit_boss_key) {document.getElementById("spiritBKs").innerHTML = 0;} else {document.getElementById("spiritBKs").innerHTML = 1;}
	if (Game.shadow_boss_key) {document.getElementById("shadowBKs").innerHTML = 0;} else {document.getElementById("shadowBKs").innerHTML = 1;}
	if (Game.ganons_boss_key) {document.getElementById("ganonsBKs").innerHTML = 0;} else {document.getElementById("ganonsBKs").innerHTML = 1;}
	
	/*if(Location_Logic.deku_queen_gohma == true) {document.getElementById("dekuLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("dekuLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.dodongos_king_dodongo == true) {document.getElementById("dodongosLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("dodongosLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.jabu_barinade == true) {document.getElementById("jabuLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("jabuLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.forest14 == true) {document.getElementById("forestLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("forestLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.fire6 == true) {document.getElementById("fireLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("fireLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.water11 == true) {document.getElementById("waterLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("waterLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.spirit20 == true) {document.getElementById("spiritLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("spiritLogic").style.backgroundColor = "palevioletred";}
	if(Location_Logic.shadow18 == true) {document.getElementById("shadowLogic").style.backgroundColor = "chartreuse";} else {document.getElementById("shadowLogic").style.backgroundColor = "palevioletred";}**/
	
	var temptext = document.getElementById("unread").innerHTML.split("Unread: ");
	temptext[1] = "";
	if (document.getElementById("tokens_30") != null) temptext[1] += "30 "; 
	if (document.getElementById("tokens_40") != null) temptext[1] += "40 "; 
	if (document.getElementById("tokens_50") != null) temptext[1] += "50 "; 
	if (document.getElementById("oot") != null) temptext[1] += "OoT "; 
	if (document.getElementById("trade_quest") != null) temptext[1] += "Bigo "; 
	if (document.getElementById("frogs_2") != null) temptext[1] += "Frogs2 "; 
	if (document.getElementById("theater") != null) temptext[1] += "Mask ";  
	document.getElementById("unread").innerHTML = temptext[0] + "Unread: " + temptext[1];
	
	if (Game.forest_checks_remaining >=0 && (Game.forest_checks_remaining < Game.forest_logically_accessible)) {Game.logically_accessible -= (Game.forest_logically_accessible - Game.forest_checks_remaining);}
	if (Game.fire_checks_remaining >=0 && (Game.fire_checks_remaining < Game.fire_logically_accessible)) {Game.logically_accessible -= (Game.fire_logically_accessible - Game.fire_checks_remaining);}
	if (Game.water_checks_remaining >=0 && (Game.water_checks_remaining < Game.water_logically_accessible)) {Game.logically_accessible -= (Game.water_logically_accessible - Game.water_checks_remaining);}
	if (Game.spirit_checks_remaining >=0 && (Game.spirit_checks_remaining < Game.spirit_logically_accessible)) {Game.logically_accessible -= (Game.spirit_logically_accessible - Game.spirit_checks_remaining);}
	if (Game.shadow_checks_remaining >=0 && (Game.shadow_checks_remaining < Game.shadow_logically_accessible)) {Game.logically_accessible -= (Game.shadow_logically_accessible - Game.shadow_checks_remaining);}
	if (Game.gtg_checks_remaining >=0 && (Game.gtg_checks_remaining < Game.gtg_logically_accessible)) {Game.logically_accessible -= (Game.gtg_logically_accessible - Game.gtg_checks_remaining);}
	if (Game.well_checks_remaining >=0 && (Game.well_checks_remaining < Game.well_logically_accessible)) {Game.logically_accessible -= (Game.well_logically_accessible - Game.well_checks_remaining);}
	if (Game.ganons_checks_remaining >=0 && (Game.ganons_checks_remaining < Game.ganons_logically_accessible)) {Game.logically_accessible -= (Game.ganons_logically_accessible - Game.ganons_checks_remaining);}
	
	
	if (Game.bomb_bag1) {if(document.getElementById("dod_req1") != null) {document.getElementById("dod_req1").style.opacity =1; } if(document.getElementById("sha_req4") != null) {document.getElementById("sha_req4").style.opacity =1; } if(document.getElementById("spi_req3") != null) {document.getElementById("spi_req3").style.opacity =1; }}
	if (Game.magic1) {document.getElementById("gan_req1").style.opacity=1; if(document.getElementById("sha_req2") != null) {document.getElementById("sha_req2").style.opacity =1; }}
	if (Game.light_arrows) {document.getElementById("gan_req2").style.opacity=1;}
	if (Game.bow1) {document.getElementById("gan_req3").style.opacity=1; if(document.getElementById("for_req2") != null) {document.getElementById("for_req2").style.opacity =1; }}
	if (Game.hookshot) {if(document.getElementById("for_req1") != null) {document.getElementById("for_req1").style.opacity =1; } if(document.getElementById("sha_req5") != null) {document.getElementById("sha_req5").style.opacity =1; } if(document.getElementById("spi_req4") != null) {document.getElementById("spi_req4").style.opacity =1; }}
	if (Game.goron_bracelet) {if(document.getElementById("for_req3") != null) {document.getElementById("for_req3").style.opacity =1; }}
	if (Game.hammer) {if(document.getElementById("fir_req1") != null) {document.getElementById("fir_req1").style.opacity =1; }}
	if (Game.rutos_letter) {if(document.getElementById("jab_req1") != null) {document.getElementById("jab_req1").style.opacity =1; }}
	if (Game.boomerang) {if(document.getElementById("jab_req2") != null) {document.getElementById("jab_req2").style.opacity =1; }}
	if (Game.iron_boots) {if(document.getElementById("wat_req1") != null) {document.getElementById("wat_req1").style.opacity =1; }}
	if (Game.scale2) {if(document.getElementById("wat_req2") != null) {document.getElementById("wat_req2").style.opacity =1; }}
	if (Game.longshot) {if(document.getElementById("wat_req3") != null) {document.getElementById("wat_req3").style.opacity =1; }}
	if (Game.silver_gauntlets) {if(document.getElementById("spi_req1") != null) {document.getElementById("spi_req1").style.opacity =1; }}
	if (Game.mirror_shield) {if(document.getElementById("spi_req2") != null) {document.getElementById("spi_req2").style.opacity =1; }}
	if (Game.dins_fire) {if(document.getElementById("sha_req1") != null) {document.getElementById("sha_req1").style.opacity =1; }}
	if (Game.hover_boots) {if(document.getElementById("sha_req3") != null) {document.getElementById("sha_req3").style.opacity =1; }}
	
	if (!Game.bomb_bag1) {if(document.getElementById("dod_req1") != null) {document.getElementById("dod_req1").style.opacity =.2; } if(document.getElementById("sha_req4") != null) {document.getElementById("sha_req4").style.opacity =.2; } if(document.getElementById("spi_req3") != null) {document.getElementById("spi_req3").style.opacity =.2; }}
	if (!Game.magic1) {document.getElementById("gan_req1").style.opacity = .2; if(document.getElementById("sha_req2") != null) {document.getElementById("sha_req2").style.opacity =.2; }}
	if (!Game.light_arrows) {document.getElementById("gan_req2").style.opacity = .2;}
	if (!Game.bow1) {document.getElementById("gan_req3").style.opacity = .2; if(document.getElementById("for_req2") != null) {document.getElementById("for_req2").style.opacity =.2; }}
	if (!Game.hookshot) {if(document.getElementById("for_req1") != null) {document.getElementById("for_req1").style.opacity =.2; } if(document.getElementById("sha_req5") != null) {document.getElementById("sha_req5").style.opacity =.2; } if(document.getElementById("spi_req4") != null) {document.getElementById("spi_req4").style.opacity =.2; }}
	if (!Game.goron_bracelet) {if(document.getElementById("for_req3") != null) {document.getElementById("for_req3").style.opacity =.2; }}
	if (!Game.hammer) {if(document.getElementById("fir_req1") != null) {document.getElementById("fir_req1").style.opacity =.2; }}
	if (!Game.rutos_letter) {if(document.getElementById("jab_req1") != null) {document.getElementById("jab_req1").style.opacity =.2; }}
	if (!Game.boomerang) {if(document.getElementById("jab_req2") != null) {document.getElementById("jab_req2").style.opacity =.2; }}
	if (!Game.iron_boots) {if(document.getElementById("wat_req1") != null) {document.getElementById("wat_req1").style.opacity =.2; }}
	if (!Game.scale2) {if(document.getElementById("wat_req2") != null) {document.getElementById("wat_req2").style.opacity =.2; }}
	if (!Game.longshot) {if(document.getElementById("wat_req3") != null) {document.getElementById("wat_req3").style.opacity =.2; }}
	if (!Game.silver_gauntlets) {if(document.getElementById("spi_req1") != null) {document.getElementById("spi_req1").style.opacity =.2; }}
	if (!Game.mirror_shield) {if(document.getElementById("spi_req2") != null) {document.getElementById("spi_req2").style.opacity =.2; }}
	if (!Game.dins_fire) {if(document.getElementById("sha_req1") != null) {document.getElementById("sha_req1").style.opacity =.2; }}
	if (!Game.hover_boots) {if(document.getElementById("sha_req3") != null) {document.getElementById("sha_req3").style.opacity =.2; }}
	
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
	if (Game.scale1) {document.getElementById("silverscaleimg").style.opacity =1;}
	if (Game.lens_of_truth) {document.getElementById("lensimg").style.opacity =1;}
	if (Game.golden_gauntlets) {document.getElementById("goldengauntletsimg").style.opacity =1;}
	if (Game.slingshot1) {document.getElementById("slingshotimg").style.opacity =1;}
	
	/**if (Game.minuet) {document.getElementById("min_note").style.opacity = 1;}
	if (Game.bolero) {document.getElementById("bol_note").style.opacity = 1;}
	if (Game.serenade) {document.getElementById("ser_note").style.opacity = 1;}
	if (Game.requiem) {document.getElementById("req_note").style.opacity = 1;}
	if (Game.nocturne) {document.getElementById("noc_note").style.opacity = 1;}
	if (Game.prelude) {document.getElementById("pre_note").style.opacity = 1;}*/
	
	if (document.getElementById("deku_queen_gohma") == null) {if (document.getElementById("text_deku") != null) {document.getElementById("text_deku").style.opacity=.2}}
	if (document.getElementById("dodongos_king_dodongo") == null) {if (document.getElementById("text_dodongos") != null) {document.getElementById("text_dodongos").style.opacity=.2}}
	if (document.getElementById("jabu_barinade") == null) {if (document.getElementById("text_jabu") != null) {document.getElementById("text_jabu").style.opacity=.2}}
	if (document.getElementById("forest14") == null) {if (document.getElementById("text_forest") != null) {document.getElementById("text_forest").style.opacity=.2}}
	if (document.getElementById("fire6") == null) {if (document.getElementById("text_fire") != null) {document.getElementById("text_fire").style.opacity=.2}}
	if (document.getElementById("water11") == null) {if (document.getElementById("text_water") != null) {document.getElementById("text_water").style.opacity=.2}}
	if (document.getElementById("spirit20") == null) {if (document.getElementById("text_spirit") != null) {document.getElementById("text_spirit").style.opacity=.2}}
	if (document.getElementById("shadow18") == null) {if (document.getElementById("text_shadow") != null) {document.getElementById("text_shadow").style.opacity=.2}}
	if (document.getElementById("text_pocket") != null) {document.getElementById("text_pocket").style.opacity=.2}
	
	if (document.getElementById("kokiri_break") != null && document.getElementById("mido_1") == null && document.getElementById("mido_2") == null && document.getElementById("mido_3") == null && document.getElementById("mido_4") == null && document.getElementById("kokiri_sword") == null && document.getElementById("kokiri_song_of_storms") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("kokiri_break"));}
	if (document.getElementById("ranch_break") != null && document.getElementById("talons_chickens") == null && document.getElementById("back_of_ranch") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("ranch_break"));}
	if (document.getElementById("field_break") != null && document.getElementById("hyrule_forest_boulder") == null && document.getElementById("hyrule_open_grotto") == null && document.getElementById("hyrule_hp_scrub") == null && document.getElementById("hyrule_boulder_of_destiny") == null && document.getElementById("hyrule_tektite_grotto") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("field_break"));}
	if (document.getElementById("valley_break") != null && document.getElementById("gerudovalley_box") == null && document.getElementById("gerudovalley_waterfall") == null && document.getElementById("gerudo_hammer") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("valley_break"));}
	if (document.getElementById("hylia_break") != null && document.getElementById("hylia_child_fishing") == null && document.getElementById("hylia_bottle") == null && document.getElementById("hylia_adult_fishing") == null && document.getElementById("hylia_lab_top") == null && document.getElementById("hylia_lab_dive") == null && document.getElementById("hylia_sun_shoot") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("hylia_break"));}
	if (document.getElementById("market_break") != null && document.getElementById("market_slingshot_game") == null && document.getElementById("richard") == null && document.getElementById("market_bowling_1") == null && document.getElementById("market_bowling_2") == null && document.getElementById("market_lens_game") == null && document.getElementById("poes") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("market_break"));}
	if (document.getElementById("dfairy_break") != null && document.getElementById("dins_fairy") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("dfairy_break"));}
	if (document.getElementById("gfairy_break") != null && document.getElementById("g_fairy") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("gfairy_break"));}
	if (document.getElementById("tot_break") != null && document.getElementById("lacs") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("tot_break"));}
	if (document.getElementById("fountain_break") != null && document.getElementById("fountain_fairy") == null && document.getElementById("ice_glacier_hp") == null && document.getElementById("ice_bottom_of_fountain") == null) {document.getElementById("normalColumn1").removeChild(document.getElementById("fountain_break"));}
	if (document.getElementById("deku_break") != null && document.getElementById("deku_lobby") == null && document.getElementById("deku_slingshot") == null && document.getElementById("deku_slingshot_room_side") == null && document.getElementById("deku_compass") == null && document.getElementById("deku_basement") == null && document.getElementById("deku_queen_gohma") == null) {document.getElementById("normalColumn2").removeChild(document.getElementById("deku_break"));}
	if (document.getElementById("lostwoods_break") != null && document.getElementById("ocarina_game") == null && document.getElementById("lost_woods_grotto") == null && document.getElementById("lost_woods_scrub_grotto") == null && document.getElementById("bridge_scrub") == null && document.getElementById("target") == null && document.getElementById("skull_kid") == null && document.getElementById("theater") == null) {document.getElementById("normalColumn2").removeChild(document.getElementById("lostwoods_break"));}
	if (document.getElementById("sfm_break") != null && document.getElementById("wolfos_grotto") == null) {document.getElementById("normalColumn2").removeChild(document.getElementById("sfm_break"));}
	if (document.getElementById("gcity_break") != null && document.getElementById("rolling_goron") == null && document.getElementById("goron_dance") == null && document.getElementById("goron_pot") == null && document.getElementById("goron_maze_1") == null && document.getElementById("goron_maze_2") == null && document.getElementById("goron_maze_3") == null && document.getElementById("goron_link") == null) {document.getElementById("normalColumn2").removeChild(document.getElementById("gcity_break"));}
	if (document.getElementById("dodongos_break") != null && document.getElementById("dodongos_map") == null && document.getElementById("dodongos_compass") == null && document.getElementById("dodongos_bomb_flower_platform") == null && document.getElementById("dodongos_bomb_bag") == null && document.getElementById("dodongos_end_of_bridge") == null && document.getElementById("dodongos_above_king") == null && document.getElementById("dodongos_king_dodongo") == null) {document.getElementById("normalColumn2").removeChild(document.getElementById("dodongos_break"));}
	if (document.getElementById("trail_break") != null && document.getElementById("trail_bombable") == null && document.getElementById("trail_dodongos_top") == null && document.getElementById("trail_song_of_storms") == null && document.getElementById("crater_peak_fairy") == null && document.getElementById("trade_quest") == null) {document.getElementById("normalColumn2").removeChild(document.getElementById("trail_break"));}
	if (document.getElementById("kakariko_break") != null && document.getElementById("man_on_roof") == null && document.getElementById("kakariko_grotto") == null && document.getElementById("windmill") == null && document.getElementById("anju") == null && document.getElementById("cow_house") == null && document.getElementById("archery_game") == null && document.getElementById("redead_grotto") == null && document.getElementById("anjus_chickens") == null && document.getElementById("tokens_10") == null && document.getElementById("tokens_20") == null && document.getElementById("tokens_30") == null && document.getElementById("tokens_40") == null && document.getElementById("tokens_50") == null) {document.getElementById("normalColumn3").removeChild(document.getElementById("kakariko_break"));}
	if (document.getElementById("graveyard_break") != null && document.getElementById("shield_grave") == null && document.getElementById("gravedigging_tour") == null && document.getElementById("suns_grave") == null && document.getElementById("fire_grave") == null && document.getElementById("graveyard_box") == null && document.getElementById("race_1") == null && document.getElementById("race_2") == null) {document.getElementById("normalColumn3").removeChild(document.getElementById("graveyard_break"));}
	if (document.getElementById("river_break") != null && document.getElementById("river_pillar") == null && document.getElementById("river_grotto") == null && document.getElementById("river_ledge") == null && document.getElementById("frogs_1") == null && document.getElementById("frogs_2") == null) {document.getElementById("normalColumn3").removeChild(document.getElementById("river_break"));}
	if (document.getElementById("domain_break") != null && document.getElementById("zora_diving") == null && document.getElementById("zora_torches") == null && document.getElementById("thaw_king") == null) {document.getElementById("normalColumn3").removeChild(document.getElementById("domain_break"));}
	if (document.getElementById("colossus_break") != null && document.getElementById("colossus_bean") == null && document.getElementById("colossus_fairy") == null) {document.getElementById("normalColumn3").removeChild(document.getElementById("colossus_break"));}
	if (document.getElementById("wasteland_break") != null && document.getElementById("wasteland") == null) {document.getElementById("normalColumn3").removeChild(document.getElementById("wasteland_break"));}
	if (document.getElementById("fortress_break") != null && document.getElementById("gerudo_roof") == null && document.getElementById("gerudo_archery_1") == null && document.getElementById("gerudo_archery_2") == null) {document.getElementById("normalColumn3").removeChild(document.getElementById("fortress_break"));}
	 
	if (Game.changetheme == 1) {Game.themeChange = true; Game.changetheme = 0;}
	
			
		/*
	if(!Game.song_of_storms) {Game.logically_accessible -=11;}
	else{
		if (Game.bomb_bag1 && Game.lullaby && Game.can_see && Game.kokiri_sword) {}
		else{
			Game.logically_accessible -= 2;
		if (!Game.bomb_bag1 && !Game.goron_bracelet) {Game.logically_accessible -=3*.75}
		else if (!Game.bomb_bag1) {Game.logically_accessible -=2*.75}
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
        
        
        
var Hinted = {};
var Check={};
var ChecksLockedBy={};
var ChecksPutInLogicBy = {};
var Game={};
var Person={};
var Map={};
var UI={};
var Location_Logic ={};
var Location_Locked_Logic={};
var Location_Locked_Logic2={};
var Location_PutIn_Logic={};
var Locked_Logic={};
var Locked_Logic2={};
var PutIn_Logic={};
var Location_Access={};
var Logic={};
var Location ={};
var gs = [];
var Area = [];
var Known = [];
var paused = false;
var woth1Locations = [];
var woth2Locations = [];
var woth3Locations = [];
var woth4Locations = [];
var woth5Locations = [];



var age = "child";
var hinted = false;
var dekutod = false;
var lastCheck = "start";
var safetyMod = 1;
var progressivePool = 30;
var progressiveAvail = 5;

var dekuRequired = .73;
var dodongosRequired = .73;
var jabuRequired = .73;
var forestRequired = .73;
var fireRequired = .73;
var waterRequired = .73;
var spiritRequired = .73;
var shadowRequired = .73;
var stoneRequired = .2;
var songRequired = .4;

var hookshotRequired = 1;
var longshotRequired = .7;
var ironsRequired = .4;
var letterRequired = .9;
var boomerangRequired = .7;
var strength1Required = .9;
var strength2Required = .7;
var hammerRequired = .7;
var bowRequired = 1;
var magicRequired = 1;
var lightsRequired = 1;
var mirrorRequired = .7;
var dinsRequired = .5;
var hoversRequired = .7;
var knowMode = hookshotRequired + longshotRequired + ironsRequired + letterRequired + boomerangRequired + strength1Required*.85 + strength2Required*.85 + hammerRequired + bowRequired*.5 + magicRequired*.7 + lightsRequired * .5 + mirrorRequired + dinsRequired + hoversRequired;

Game.logically_accessible = 0;
var d = new Date();
var pauseTotal = 0;
var pauseInitial = 0;
var pauseFlag = false;
var initialTime = d.getTime();
var goodCheckPercent = 0;
var timeStart = d.getTime();
var timeCurrent;	
var timeFuture;
var timeFinal;
var timeLost =0;
var tMinutes = 0;
var tSeconds = 0;
//document.getElementById("go_input").value = 9;
	
	if (localStorage.getItem("type")) {Person.type = localStorage.getItem("type");} else{Person.type = "normie";}
	Logic.brackets = false;
	
	document.getElementById("text_gen_med1").style.color = "yellow";
	document.getElementById("text_gen_med2").style.color = "yellow";
	document.getElementById("text_gen_med3").style.color = "yellow";
	
	Game.kokiri_sword = false;
	Game.farores_wind = false;
	Game.slingshot1= false;
	Game.slingshot1= false;
	Game.slingshot2= false;
	Game.slingshot3= false;
	Game.boomerang = false;
	Game.rutos_letter = false;
	Game.bottle1 = false;
	Game.bottle2 = false;
	Game.bottle3 = false;
	Game.big_poe = false;
	Game.scale1 = false;
	Game.scale2 = false;
	Game.bomb_bag1 = false;
	Game.bomb_bag2 = false;
	Game.bomb_bag3 = false;
	Game.hammer = false;
	Game.bow1 = false;
	Game.bow2 = false;
	Game.bow3 = false;
	Game.hookshot = false;
	Game.longshot = false;
	Game.iron_boots = false;
	Game.hover_boots = false;
	Game.magic = false;
	Game.magic1 = false;
	Game.magic2 = false;
	Game.dins_fire = false;
	Game.fire_arrows = false;
	Game.goron_bracelet = false;
	Game.silver_gauntlets = false;
	Game.golden_gauntlets = false;
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
	Game.deku_checks_remaining = 7;
	Game.dodongos_checks_remaining = 7;
	Game.jabu_checks_remaining = 4;
	Game.forest_checks_remaining = 8;
	Game.fire_checks_remaining = 6;
	Game.water_checks_remaining = 4;
	Game.shadow_checks_remaining = 12;
	Game.spirit_checks_remaining = 14;
	Game.gtg_checks_remaining = 13;
	Game.well_checks_remaining = 11;
	Game.ganons_checks_remaining = 13;
	
	Game.checks_remaining=195;
	Game.logically_accessible=35;
	Game.forest_logically_accessible=0;
	Game.fire_logically_accessible=0;
	Game.water_logically_accessible=0;
	Game.spirit_logically_accessible=0;
	Game.shadow_logically_accessible=0;
	Game.gtg_logically_accessible=0;
	Game.well_logically_accessible=0;
	Game.ganons_logically_accessible=0;
	
	Game.bomb_bag_img= "./images/explosive505050.png";
	Game.letter_img= "./images/letter505050.png";
	Game.boomerang_img= "./images/boomerang505050.png";
	Game.hookshot_img= "./images/hookshot505050.png";
	Game.bow_img= "./images/bow505050.png";
	Game.goron_bracelet_img= "./images/strength1505050.png";
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
	Game.theme = "dark";
	Game.themeChange = false;
	Game.changetheme = 1;
	
	Game.has_chus = false;
	
	var tempTime = 0;
	
	var Locations = [
		"mido_1", "mido_2", "mido_3", "mido_4", "kokiri_sword", "kokiri_song_of_storms",
		"talons_chickens", "back_of_ranch",
		"hyrule_forest_boulder", "hyrule_open_grotto", "hyrule_hp_scrub", "hyrule_boulder_of_destiny", "hyrule_tektite_grotto",
		"gerudovalley_box", "gerudovalley_waterfall", "gerudo_hammer",
		"hylia_child_fishing", "hylia_bottle", "hylia_adult_fishing", "hylia_lab_top", "hylia_lab_dive", "hylia_sun_shoot",
		"market_slingshot_game", "richard", "market_bowling_1", "market_bowling_2","market_lens_game","poes",
		"dins_fairy",
		"g_fairy",
		"lacs",
		"fountain_fairy", "ice_glacier_hp", "ice_bottom_of_fountain",
		"ice_map", "ice_compass", "ice_hp", "ice_irons",
		"deku_lobby", "deku_slingshot", "deku_slingshot_room_side", "deku_compass", "deku_compass_room_side", "deku_basement", "deku_queen_gohma",
		"ocarina_game", "lost_woods_grotto", "lost_woods_scrub_grotto", "bridge_scrub", "target", "skull_kid", "theater",
		"wolfos_grotto",
		"rolling_goron", "goron_dance", "goron_pot", "goron_maze_1", "goron_maze_2", "goron_maze_3", "goron_link",
		"dodongos_map", "dodongos_compass", "dodongos_bomb_flower_platform", "dodongos_bomb_bag", "dodongos_end_of_bridge", "dodongos_above_king", "dodongos_king_dodongo",
		"trail_bombable", "trail_dodongos_top", "trail_song_of_storms", "crater_peak_fairy", "trade_quest",
		"crater_bean", "crater_hammer_fairy", "crater_grotto", "crater_nook_hp",
		"man_on_roof", "kakariko_grotto", "windmill", "anju", "cow_house", "archery_game", "redead_grotto", "anjus_chickens", "tokens_10", "tokens_20", "tokens_30", "tokens_40", "tokens_50",
		"shield_grave", "gravedigging_tour", "suns_grave", "fire_grave", "graveyard_box", "race_1", "race_2",
		"river_pillar", "river_grotto", "river_ledge", "frogs_1", "frogs_2",
		"zora_diving", "zora_torches", "thaw_king",
		"colossus_bean", "colossus_fairy",
		"wasteland",
		"gerudo_roof", "gerudo_archery_1", "gerudo_archery_2",
		"jabu_boomerang", "jabu_map", "jabu_compass", "jabu_barinade",
		"forest1", "forest2", "forest3", "forest4", "forest5", "forest6", "forest7", "forest8", "forest9", "forest10", "forest11", "forest12", "forest13", "forest14",
		"fire1", "fire2", "fire3", "fire4", "fire5", "fire6", "fire7", "fire8", "fire9", "fire10", "fire11", "fire12", "fire13", "fire14", "fire15",
		"water1", "water2", "water3", "water4", "water5", "water6", "water7", "water8", "water9", "water10", "water11",
		"spirit1", "spirit2", "spirit3", "spirit4", "spirit5", "spirit6", "spirit7", "spirit8", "spirit9", "spirit10", "spirit11", "spirit12", "spirit13", "spirit14", "spirit15", "spirit16", "spirit17", "spirit18", "spirit19", "spirit20",
		"shadow1", "shadow2", "shadow3", "shadow4", "shadow5", "shadow6", "shadow7", "shadow8", "shadow9", "shadow10", "shadow11", "shadow12", "shadow13", "shadow14", "shadow15", "shadow16", "shadow17", "shadow18",
		"ganons1", "ganons2", "ganons3", "ganons4", "ganons5", "ganons6", "ganons7", "ganons8", "ganons9", "ganons10", "ganons11", "ganons12", "ganons13", "ganons14", "ganons15", "ganons16",
		"gtg1", "gtg2", "gtg3", "gtg4", "gtg5", "gtg6", "gtg7", "gtg8", "gtg9", "gtg10", "gtg12", "gtg11", "gtg13", "gtg14", "gtg15", "gtg16", "gtg17",  "gtg18", "gtg19", "gtg20", "gtg21", "gtg22",
		"well1", "well5", "well2", "well3", "well4", "well6", "well11", "well7", "well10", "well8", "well9", "well12", "well13", "well14",
		"zeldasSpot", "eponasSpot", "sariasSpot", "stormsSpot", "sunsSpot", "boleroSpot", "minuetSpot", "requiemSpot", "serenadeSpot", "preludeSpot", "nocturneSpot", "oot"
		];
		
		var backUp = [];
		
		for (var i = 0; i < Locations.length; i++) {
			Check[Locations[i]] = "unknown";
			Location[Locations[i]] = "unknown";
			backUp.push(document.getElementById("text_" + Locations[i]).innerHTML);
		}
		
		var Names = [
		"Kokiri: Mido's 1", "Kokiri: Mido's 2", "Kokiri: Mido's 3", "Kokiri: Mido's 4", "Kokiri: Sword", "Kokiri: SoS",
		"Ranch: T's Chicks", "Ranch: Back",
		"Field: Remote Gr.", "Field: Open Gr.", "Field: Scrub Gr.", "Field: Destiny", "Field: ATZ",
		"Valley: Box", "Valley: Waterfall", "Valley: Rocks",
		"Hylia: Ch. Fishing", "Hylia: Bottle", "Hylia: Ad. Fishing", "Hylia: LabTop", "Hylia: Divin'", "Hylia: Shootin'",
		"Market: Slingin'", "Market: Big Rich", "Market: Bowlin' 1", "Market: Bowlin' 2","Market: Chest Game","Market: Poes",
		"Hyrule Castle: Fairy",
		"Outside G's: Fairy",
		"Temple of Time: LACS",
		"Fountain: Fairy", "Fountain: Glacier", "Fountain: Bottom",
		"Ice: Map", "Ice: Compass", "Ice: HP", "Ice: Irons",
		"Deku: Lobby", "Deku: Sling 1", "Deku: Sling 2", "Deku: Compass 1", "Deku: Compass 2", "Deku: Basement", "Deku: Queen",
		"Lost Woods: Ocarina", "Lost Woods: Generic", "Lost Woods: Scrub Gr.", "Lost Woods: Br. Scrub", "Lost Woods: Target", "Lost Woods: Saria Kid", "Lost Woods: Skull Mask",
		"SFM: Wolfos Gr.",
		"Goron City: Big Rollin'", "Goron City: Dancin'", "Goron City: Chuckin'", "Goron City: Maze 1", "Goron City: Maze 2", "Goron City: Maze 3!", "Goron City: Lil Rollin'",
		"Dodongos: Map", "Dodongos: Compass", "Dodongos: Platform", "Dodongos: Bomb Bag", "Dodongos: Bridge", "Dodongos: Above King", "Dodongos: King",
		"Trail: Wall", "Trail: Top", "Trail: SoS", "Trail: Fairy", "Trail: Biggoron",
		"Crater: Bean", "Crater: Fairy", "Crater: Grotto", "Crater: Nook",
		"Kakariko: Roof", "Kakariko: Back Grotto", "Kakariko: Windmill", "Kakariko: Anju", "Kakariko: Cow", "Kakariko: Archery", "Kakariko: Redead Gr.", "Kakariko: Chickens", "Kakariko: 10", "Kakariko: 20", "Kakariko: 30", "Kakariko: 40", "Kakariko: 50",
		"Graveyard: Shield", "Graveyard: Digging", "Graveyard: Suns", "Graveyard: Fire", "Graveyard: Box", "Graveyard: Race 1", "Graveyard: Race 2",
		"River: Pillar", "River: Grotto", "River: Ledge", "River: Frogs 1", "River: Frogs 2",
		"Domain: Divin'", "Domain: Lit", "Domain: big guy",
		"Colossus: Bean", "Colossus: Fairy",
		"Wasteland: Check",
		"Fortress: Roof", "Fortress: Archery 1", "Fortress: Archery 2",
		"Jabu: Boomerang", "Jabu: Map", "Jabu: Compass", "Jabu: Barinade",
		"Forest: First", "Forest: 2 Stalfos", "Forest: Court. Hookshot", "Forest: Court. High", "Forest: Court. Low", "Forest: Shoot", "Forest: BK", "Forest: Floormasta", "Forest: Red", "Forest: Bow", "Forest: Blue", "Forest: Falling", "Forest: Near Boss", "Forest: Phantom Ganon",
		"Fire: Near Boss", "Fire: Hammer 1", "Fire: Hammer 2", "Fire: Lava Open", "Fire: Lava Bomb", "Fire: Volva", "Fire: Boulda Low", "Fire: Boulda Side", "Fire: Map", "Fire: Boulda Uppa", "Fire: Boulda Bomb", "Fire: Scarecrow", "Fire: Compass", "Fire: SoT Goron", "Fire: MEGA",
		"Water: Compass", "Water: Map", "Water: Cracked", "Water: Torches", "Water: Bow Block", "Water: Pillar", "Water: Dark Link", "Water: Riva", "Water: Dragin'", "Water: BK", "Water: Morpha",
		"Spirit: Child Left", "Spirit: Child Right", "Spirit: Child Climb 1", "Spirit: Child Climb 2", "Spirit: Map", "Spirit: Sun Room", "Spirit: Right Hand", "Spirit: Adult Left", "Spirit: Adult Right", "Spirit: Mirror 1", "Spirit: Mirror 2", "Spirit: Lullaby Hand", "Spirit: Lullaby High", "Spirit: Mirror Room", "Spirit: Invisi 1", "Spirit: Invisi 2", "Spirit: Left Hand", "Spirit: BK", "Spirit: Tippy Top", "Spirit: Twinrova",
		"Shadow: Map", "Shadow: Hover Boots", "Shadow: Compass", "Shadow: Early Silvs", "Shadow: Spinning 1", "Shadow: Spinning 2", "Shadow: Spike Lower", "Shadow: Spike Uppa", "Shadow: Spike Switch", "Shadow: Mid Silvs", "Shadow: Freestanding", "Shadow: Wind", "Shadow: AW Bomb", "Shadow: AW Enemies", "Shadow: Dins 1", "Shadow: Dins 2", "Shadow: Floormasta", "Shadow: Bongo",
		"Ganon's: Light 1", "Ganon's: Light 2", "Ganon's: Light 3", "Ganon's: Light 4", "Ganon's: Light 5", "Ganon's: Light 6", "Ganon's: Light Enemies", "Ganon's: Light Lullaby", "Ganon's: Spirit 1", "Ganon's: Spirit 2", "Ganon's: Forest", "Ganon's: Water 1", "Ganon's: Water 2", "Ganon's: Shadow 1", "Ganon's: Shadow 2", "Ganon's: BK",
		"GTG: Lobby Left", "GTG: Lobby Right", "GTG: Stalfos", "GTG: Wolfos", "GTG: Silvers 1", "GTG: Silvers 2", "GTG: Silvers 3", "GTG: Silvers 4", "GTG: Eyes", "GTG: Above Eyes", "GTG: Keese+Slugs", "GTG: Hammer", "GTG: Freestanding", "GTG: Right 1", "GTG: Right 2", "GTG: Beamos", "GTG: Left 1",  "GTG: Left 2", "GTG: Left 3", "GTG: Left 4", "GTG: Final", "GTG: Toilet",
		"Well: Fake Right", "Well: Center Small", "Well: Back Bomb", "Well: Water Left", "Well: Freestanding", "Well: Center Big", "Well: Fake Left", "Well: Front Bomb", "Well: Water Front", "Well: Dead Hand", "Well: Invisible", "Well: Locked 1", "Well: Locked 2", "Well: Basement",
		"Zelda", "Malon", "Saria", "Windmill", "Grave", "Crater", "Meadow", "Colossus", "Ice", "1 Medallion", "3 Medallion", "Ocarina of Time"
		];
		
	var	gsText = [
		"",
		"Kokiri Child",
		"Kokiri Soil",
		"Kokiri Adult", 
		"Market",
		"Lost Woods Soil 1",
		"Lost Woods Soil 2",
		"Lost Woods Above Stage",
		"Sacred Forest",
		"Outside Kakariko",
		"Field near Valley",
		"Hyrule Castle Tree",
		"Hyrule Castle Grotto",
		"Lon Lon Tree", 
		"Lon Lon Shed", 
		"Lon Lon Window", 
		"Lon Lon Back Wall", 
		"Kakariko Construction", 
		"Kakariko Skull House", 
		"Kakariko Guard House",
		"Kakariko Tree",
		"Kakariko Tower",
		"Kakariko Impa's House",
		"Graveyard Wall", 
		"Graveyard Box",
		"Trail Soil",
		"Trail Wall", 
		"Trail Hail",
		"Trail Dodo Top",
		"Goron City Maze", 
		"Goron City Center",
		"Crater Crate",
		"Crater Soil",
		"River Ladder",
		"River Near Grotto",
		"River Above Bridge",
		"River Tree",
		"Domain",
		"Fountain Above Log",
		"Fountain Tree",
		"Fountain Hidden Cave",
		"Hylia Soil",
		"Hylia Lab Wall",
		"Hylia Island",
		"Hylia Tree",
		"Hylia Lab",
		"Valley Small Bridge",
		"Valley Soil",
		"Valley Tent",
		"Valley Pillar",
		"Fortress Target",
		"Fortress Wall",
		"Wasteland",
		"Colossus Soil",
		"Colossus Tree", 
		"Colossus Hill",
		"Outside Ganon's",
		"Deku Basement Back",
		"Deku Gate",
		"Deku Vines",
		"Deku Compass",
		"Dodongo's East",
		"Dodongo's Stair Vines",
		"Dodongo's Stair Nook",
		"Dodongo's Scarecrow",
		"Dodongo's Near King",
		"Jabu Vines",
		"Jabu Near Octo 1",
		"Jabu Near Octo 2",
		"Jabu Near Barinade",
		"Forest First",
		"Forest Lobby",
		"Forest East Courtyard",
		"Forest West Courtyard",
		"Forest Basement",
		"Fire Song of Time",
		"Fire Bomb Wall",
		"Fire Scarecrow 1", 
		"Fire Scarecrow 2",
		"Fire First Floor",
		"Water South Basement",
		"Water River",
		"Water Central",
		"Water Near BK",
		"Water Before DL",
		"Spirit Metal Fence",
		"Spirit Before Child Knuckle",
		"Spirit Bouldas",
		"Spirit Lobby",
		"Spirit Child Climb",
		"Shadow Like Like",
		"Shadow Crusher",
		"Shadow Giant Pot",
		"Shadow Near Boat", 
		"Shadow 3 Pots",
		"Well West Inner",
		"Well East Inner",
		"Well Cage",
		"Ice Scythe",
		"Ice Near HP",
		"Ice Block Room"		
	];
		
		var AreaNames= [
		"",
		"Kokiri" ,
		"Ranch" ,
		"Field" ,
		"Valley" ,
		"Hylia" ,
		"Market" ,
		"Hyr Cas" ,
		"OGC" ,
		"ToT" ,
		"Fountain" ,
		"Ice" ,
		"Deku" ,
		"Lost Woods" ,
		"SFM" ,
		"Goron City" ,
		"Dodongos" ,
		"Trail" ,
		"Crater" ,
		"Kakariko" ,
		"Graveyard" ,
		"River" ,
		"Domain" ,
		"Colossus" ,
		"Wasteland" ,
		"Fortress" ,
		"Jabu" ,
		"Forest" ,
		"Fire" ,
		"Water" ,
		"Spirit" ,
		"Shadow" ,
		"Ganon's" ,
		"GTG" ,
		"Well" 
		];
		
	var AreaIndexes = [0,6,8,13,16,22,28,29,30,31,34,38,45,52,53,60,67,72,76,89,96,101,104,106,107,110,114,128,144,155,175,193,208,230,244];
	var SongIndexes = [0,245,255,0,0,0,244,0,253,0,252,0,0,246,0,0,0,249,247,248,0,0,251,0,0,0,0,0,0,0,0,0,0,0];
	var SongIndexes2 = [0,245,255,0,0,0,244,0,253,0,252,0,0,250,0,0,0,249,254,248,0,0,251,0,0,0,0,0,0,0,0,0,0,0];
		
	var hintStones = ["Crater: Hint", "Crater: Gr. Hint", "Trail: Gr. Hint", "Trail: Bigo Hint", "Colossus: Hint", "Dodongos: Hint", "Field: Open Gr. Hint", "Field: Remote Gr. Hint", "Field: Destiny Hint", "Valley: Hint", "Hylia: After Valley Hint", "Hylia: Back Right Hint", "Hylia: Back Left Hint", "Hyrule Castle: First Hint", "Hyrule Castle: Second Hint", "Temple of Time: First Hint", "Temple of Time: Second Hint", "Temple of Time: Third Hint", "Temple of Time: Fourth Hint", "Kakariko: Gr. Hint", "Kokiri: Left Deku Hint", "Kokiri: Right Deku Hint", "Kokiri: Gr. Hint", "Kokiri: LW Hint", "Lost Woods: Br. Hint", "Lost Woods: Gr. Hint", "SFM: Sarias Hint", "SFM: Maze 1 Hint", "SFM: Maze 2 Hint", "River: Gr. Hint", "River: Plateau Hint", "River: By ZD Hint", "Domain: Hint", "Fountain: Jabu Hint", "Fountain: By Fairy Hint", "Goron City: Maze Hint", "Goron City: Medigoron Hint", "Graveyard: Hint", "Hyrule Castle: Storms Hint", "Field: Hammer Hint"];
	
	var checkSummary = ["farores_wind", "slingshot1", "slingshot2", "slingshot3", "boomerang", "scale1", "scale2", "rutos_letter", "bottle1", "bottle2", "bottle3", "bomb_bag1", "bomb_bag2", "bomb_bag3", "hammer", "bow1", "bow2", "bow3", "hookshot1", "hookshot2", "strength1", "strength2", "strength3", "mirror_shield", "magic1", "magic2", "iron_boots", "hover_boots", "wallet1", "wallet2", "goron_tunic", "zora_tunic", "dins_fire", "fire_arrows", "lens_of_truth", "trade", "light_arrows", "text_zeldasSpot", "text_eponasSpot", "text_sariasSpot", "text_sunsSpot", "text_oot", "text_stormsSpot", "text_minuetSpot", "text_boleroSpot", "text_serenadeSpot", "text_requiemSpot", "text_nocturneSpot", "text_preludeSpot"];
	var Items = ["farores_wind", "slingshot1", "slingshot2", "slingshot3", "boomerang", "scale1", "scale2", "rutos_letter", "bottle1", "bottle2", "bottle3", "bomb_bag1", "bomb_bag2", "bomb_bag3", "hammer", "bow1", "bow2", "bow3", "hookshot1", "hookshot2", "strength1", "strength2", "strength3", "mirror_shield", "magic1", "magic2", "iron_boots", "hover_boots", "wallet1", "wallet2", "goron_tunic", "zora_tunic", "dins_fire", "fire_arrows", "lens_of_truth", "prescription", "claim_check", "light_arrows", "lullaby", "eponas", "suns_song", "sarias", "song_of_storms", "minuet", "bolero", "requiem", "nocturne", "song_of_time"];
	var ItemNames = ["Farores", "Slingshot", "Slingshot", "Slingshot", "Boomerang", "Scale", "Scale", "Letter", "Bottle", "Bottle", "Bottle", "Bomb Bag", "Bomb Bag", "Bomb Bag", "Hammer", "Bow", "Bow", "Bow", "Hookshot", "Hookshot", "Strength", "Strength", "Strength", "Mirror", "Magic", "Magic", "Iron Boots", "Hover Boots", "Wallet", "Wallet", "Goron Tunic", "Zora Tunic", "Din's Fire", "Fire Arrows", "Lens", "Prescription", "Claim Check", "Light Arrows", "Lullaby", "Eponas", "Suns", "Sarias", "Song of Storms", "Minuet", "Bolero", "Requiem", "Nocturne", "Song of Time"];
	
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
	Logic.hookshot1 = false;
	Logic.hookshot2 = false;
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
	Logic.trade = false;
	Logic.prescription = false;
	Logic.claim_check = false;
	Locked_Logic2.forced_fire_keys=8;
	Locked_Logic2.forced_water_keys=6;
	Locked_Logic2.forced_spirit_keys=5;
	Locked_Logic2.forced_shadow_keys=5;
	Locked_Logic2.forced_ganons_keys=3;
	Locked_Logic2.forced_gtg_keys=9;
	Locked_Logic2.forced_well_keys=3;
	Locked_Logic2.forced_forest_boss_key = false;
	Locked_Logic2.forced_fire_boss_key = false;
	Locked_Logic2.forced_water_boss_key = false;
	Locked_Logic2.forced_spirit_boss_key = false;
	Locked_Logic2.forced_shadow_boss_key = false;Logic.light_arrows = false;
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
	
	Logic.forest_medallion_location = "unknown";
	Logic.fire_medallion_location  = "unknown";
	Logic.water_medallion_location  = "unknown";
	Logic.generic1 = "unknown";
	Logic.generic2 = "unknown";
	Logic.generic3 = "unknown";
	Logic.emerald = "unknown";
	Logic.ruby  = "unknown";
	Logic.sapphire  = "unknown";
	
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
	Logic.forced_forest_keys=0;
	Logic.forced_fire_keys=0;
	Logic.forced_water_keys=0;
	Logic.forced_spirit_keys=0;
	Logic.forced_shadow_keys=0;
	Logic.forced_ganons_keys=0;
	Logic.forced_gtg_keys=0;
	Logic.forced_well_keys=0;
	Logic.forced_forest_boss_key = false;
	Logic.forced_fire_boss_key = false;
	Logic.forced_water_boss_key = false;
	Logic.forced_spirit_boss_key = false;
	Logic.forced_shadow_boss_key = false;
	Locked_Logic.forced_forest_keys=0;
	Locked_Logic.forced_fire_keys=0;
	Locked_Logic.forced_water_keys=0;
	Locked_Logic.forced_spirit_keys=0;
	Locked_Logic.forced_shadow_keys=0;
	Locked_Logic.forced_ganons_keys=0;
	Locked_Logic.forced_gtg_keys=0;
	Locked_Logic.forced_well_keys=0;
	Locked_Logic.forced_forest_boss_key = false;
	Locked_Logic.forced_fire_boss_key = false;
	Locked_Logic.forced_water_boss_key = false;
	Locked_Logic.forced_spirit_boss_key = false;
	Locked_Logic.forced_shadow_boss_key = false;
	Locked_Logic2.forced_forest_keys=5;
	Locked_Logic2.forced_fire_keys=8;
	Locked_Logic2.forced_water_keys=6;
	Locked_Logic2.forced_spirit_keys=5;
	Locked_Logic2.forced_shadow_keys=5;
	Locked_Logic2.forced_ganons_keys=2;
	Locked_Logic2.forced_gtg_keys=9;
	Locked_Logic2.forced_well_keys=3;
	Locked_Logic2.forced_forest_boss_key = false;
	Locked_Logic2.forced_fire_boss_key = false;
	Locked_Logic2.forced_water_boss_key = false;
	Locked_Logic2.forced_spirit_boss_key = false;
	Locked_Logic2.forced_shadow_boss_key = false;
	PutIn_Logic.forced_forest_keys=0;
	PutIn_Logic.forced_fire_keys=0;
	PutIn_Logic.forced_water_keys=0;
	PutIn_Logic.forced_spirit_keys=0;
	PutIn_Logic.forced_shadow_keys=0;
	PutIn_Logic.forced_ganons_keys=0;
	PutIn_Logic.forced_gtg_keys=0;
	PutIn_Logic.forced_well_keys=0;
	PutIn_Logic.forced_forest_boss_key = false;
	PutIn_Logic.forced_fire_boss_key = false;
	PutIn_Logic.forced_water_boss_key = false;
	PutIn_Logic.forced_spirit_boss_key = false;
	PutIn_Logic.forced_shadow_boss_key = false;
	
	Logic.forest_boss_key = false;
	Logic.fire_boss_key = false;
	Logic.water_boss_key = false;
	Logic.spirit_boss_key = false;
	Logic.shadow_boss_key = false;
	Logic.ganons_boss_key = false;
	
	var bombLockedItems = [];
	var boomerangLockedItems = [];
	var bottleLockedItems = [];
	var bowLockedItems = [];
	var dinsLockedItems = [];
	var faroresLockedItems = [];
	var fireArrowsLockedItems = [];
	var goronLockedItems = [];
	var hammerLockedItems = [];
	var hookshot1LockedItems = [];
	var hookshot2LockedItems = [];
	var hoverLockedItems = [];
	var ironLockedItems = [];
	var lensLockedItems = [];
	var letterLockedItems = [];
	var magicLockedItems = [];
	var mirrorLockedItems = [];
	var scale1LockedItems = [];
	var scale2LockedItems = [];
	var slingshotLockedItems = [];
	var strength1LockedItems = [];
	var strength2LockedItems = [];
	var strength3LockedItems = [];
	var tradeLockedItems = [];
	var wallet1LockedItems = [];
	var wallet2LockedItems = [];
	var zoraLockedItems = [];
	var lullabyLockedItems = [];
	var eponasLockedItems = [];
	var sariasLockedItems = [];
	var sunsLockedItems = [];
	var sotLockedItems = [];
	var sosLockedItems = [];
	var minuetLockedItems =[];
	var boleroLockedItems = [];
	var requiemLockedItems = [];
	var nocturneLockedItems = [];
	  
	var woth1 = "unknown";
	var woth2 = "unknown";
	var woth3 = "unknown";
	var woth4 = "unknown";
	var woth5 = "unknown";	
	
	var WotHItems = [];
	var WotH = new Array(35).fill(0);
    var checkedYet = new Array(256).fill(false);
	var readYet = new Array(42).fill(false);
	var AreaAge = new Array(35).fill(0);
	var AreaWotHAge = new Array(35).fill(0);
	var wothCount = new Array(35).fill(0);
	var textBlock = '';
	var circus = false;
	
	for (var i = 0; i < 244; i++) {
		Check[Location[i]] = "unknown";
	}

function junk(x) {
	var type = event.button;
	var str = x.id;
	str = str.substring('text_'.length);
	var temp = Locations.indexOf(str);
	
	if(type == 0 && !event.altKey) {
		if(str.startsWith("forest") && Game.forest_checks_remaining != 0) {Game.forest_checks_remaining -=1;}
		else if(str.startsWith("fire") && Game.fire_checks_remaining != 0 && str != "fire_grave") {Game.fire_checks_remaining -=1;}
		else if(str.startsWith("water") && Game.water_checks_remaining != 0) {Game.water_checks_remaining -=1;}
		else if(str.startsWith("spirit") && Game.spirit_checks_remaining != 0) {Game.spirit_checks_remaining -=1;}
		else if(str.startsWith("shadow") && Game.shadow_checks_remaining != 0) {Game.shadow_checks_remaining -=1;}
		else if(str.startsWith("ganons") && Game.ganons_checks_remaining != 0) {Game.ganons_checks_remaining -=1;}
		else if(str.startsWith("gtg") && Game.gtg_checks_remaining != 0) {Game.gtg_checks_remaining -=1;}
		else if(str.startsWith("well") && Game.well_checks_remaining != 0) {Game.well_checks_remaining -=1;}
		else if(temp < 114){}
		else {return;}
		Check[str]="junk";
		if (temp == 44 && Game.deku_checks_remaining == 0) {Game.checks_remaining +=1;}
		if (temp == 66 && Game.dodongos_checks_remaining == 0) {Game.checks_remaining +=1;}
		if (temp == 113 && Game.jabu_checks_remaining == 0) {Game.checks_remaining +=1;}
		Game.checks_remaining -= 1;
	}
	
	else if(type == 1 || (type == 0 && event.altKey)) {
		if(str.startsWith("forest") && !Game.forest_boss_key) {Game.forest_boss_key = true; Location.forest_boss_key = str;}
		else if(str.startsWith("fire") && !Game.fire_boss_key) {Game.fire_boss_key = true; Location.fire_boss_key = str;}
		else if(str.startsWith("water") && !Game.water_boss_key) {Game.water_boss_key = true; Location.water_boss_key = str;}
		else if(str.startsWith("spirit") && !Game.spirit_boss_key) {Game.spirit_boss_key = true; Location.spirit_boss_key = str;}
		else if(str.startsWith("shadow") && !Game.shadow_boss_key) {Game.shadow_boss_key = true; Location.shadow_boss_key = str;}
		else if(str.startsWith("ganons") && !Game.ganons_boss_key) {Game.ganons_boss_key = true; Location.ganons_boss_key = str;}
		else {return;}
		Check[str]="boss_key";
	}
	
	else if (type == 2 && !event.altKey) {
		if(str.startsWith("forest") && Game.current_forest_keys < 5) {Game.current_forest_keys +=1;}
		else if(str.startsWith("fire") && Game.current_fire_keys < 8) {Game.current_fire_keys +=1;}
		else if(str.startsWith("water") && Game.current_water_keys < 6) {Game.current_water_keys +=1;}
		else if(str.startsWith("spirit") && Game.current_spirit_keys < 5) {Game.current_spirit_keys +=1;}
		else if(str.startsWith("shadow") && Game.current_shadow_keys < 5) {Game.current_shadow_keys +=1;}
		else if(str.startsWith("gtg") && Game.current_gtg_keys < 9) {Game.current_gtg_keys +=1;}
		else if(str.startsWith("well") && Game.current_well_keys < 3) {Game.current_well_keys +=1;}
		else if(str.startsWith("ganons") && Game.current_ganons_keys < 2) {Game.current_ganons_keys +=1;}
		else {
		if (x.style.color == "orange") {x.style.color = "pink";}
		else {x.style.color = "orange";}
		return;
		}
		Check[str]="small_key";
	}
	else if (type == 2 && event.altKey) {
		if (x.style.color == "orange") {x.style.color = "pink";}
		else {x.style.color = "orange";}
		return;
	}
	else {
		Check[str]="junk";
		Game.checks_remaining -=1;
	}
	
	var delete1 = str;
	var delete2 = "text_" + str;
	var delete3 = "br_" + str;
	
	if(temp < 38) {var parent = document.getElementById("normalColumn1");} else if (temp < 76) {var parent = document.getElementById("normalColumn2");} else if (temp < 114) {var parent = document.getElementById("normalColumn3");} else if (temp < 154) {var parent = document.getElementById("dung1");} else if (temp < 208) {var parent = document.getElementById("dung2");} else {var parent = document.getElementById("dung3");}
	
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
	if (!hinted) {
		lastCheck = str;
	}
	Update();Update();Update();
}	

function junkUltra(x) {
	if (x.id == "forest") {var temp = 14; var temp2 = Game.forest_checks_remaining; Game.forest_checks_remaining = 0; var parent = document.getElementById("dung1"); Logic.forced_forest_keys = 5 - Game.current_forest_keys; if (Game.forest_boss_key == false) {Logic.forced_forest_boss_key = true;}}
	if (x.id == "fire") {var temp = 15; var temp2 = Game.fire_checks_remaining; Game.fire_checks_remaining = 0; var parent = document.getElementById("dung1"); Logic.forced_fire_keys = 8 - Game.current_fire_keys; if (Game.fire_boss_key == false) {Logic.forced_fire_boss_key = true;}}
	if (x.id == "water") {var temp = 11; var temp2 = Game.water_checks_remaining; Game.water_checks_remaining = 0; var parent = document.getElementById("dung1"); Logic.forced_water_keys = 6 - Game.current_water_keys; if (Game.water_boss_key == false) {Logic.forced_water_boss_key = true;}}
	if (x.id == "spirit") {var temp = 20; var temp2 = Game.spirit_checks_remaining; Game.spirit_checks_remaining = 0; var parent = document.getElementById("dung2"); Logic.forced_spirit_keys = 5 - Game.current_spirit_keys; if (Game.spirit_boss_key == false) {Logic.forced_spirit_boss_key = true;}}
	if (x.id == "shadow") {var temp = 18; var temp2 = Game.shadow_checks_remaining; Game.shadow_checks_remaining = 0; var parent = document.getElementById("dung2"); Logic.forced_shadow_keys = 5 - Game.current_shadow_keys; if (Game.shadow_boss_key == false) {Logic.forced_shadow_boss_key = true;}}
	if (x.id == "ganons") {var temp = 16; var temp2 = Game.ganons_checks_remaining; Game.ganons_checks_remaining = 0; var parent = document.getElementById("dung2"); Logic.forced_ganons_keys = 2 - Game.current_ganons_keys; if (Game.ganons_boss_key == false) {Logic.ganons_boss_key = true;}}
	if (x.id == "gtg") {var temp = 22; var temp2 = Game.gtg_checks_remaining; Game.gtg_checks_remaining = 0; var parent = document.getElementById("dung3"); Logic.forced_gtg_keys = 5 - Game.current_gtg_keys;}
	if (x.id == "well") {var temp = 14; var temp2 = Game.well_checks_remaining; Game.well_checks_remaining = 0; var parent = document.getElementById("dung3"); Logic.forced_well_keys = 5 - Game.current_well_keys;}
	for (var i = 1; i <= temp; i++){
		var str2 = x.id + i;
		var delete1 = "img1_" + str2;
		var delete2 = "img2_" + str2;
		var delete3 = str2;
		var delete4 = "text_" + str2;
		var delete5 = "br_" + str2;
		var delete6 = "span_" + str2;
		var delete7 = "img3_" + str2;
		var delete8 = "span2_" + str2;
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
	}
		Game.checks_remaining -= temp2;
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
var temp = false;
if(str2.startsWith('forest') && Game.forest_checks_remaining != 0) {Game.forest_checks_remaining -= 1; temp = true;}
if(str2.startsWith('fire') && Game.fire_checks_remaining != 0) {Game.fire_checks_remaining -= 1; temp = true;}
if(str2.startsWith('water') && Game.water_checks_remaining != 0) {Game.water_checks_remaining -= 1; temp = true;}
if (!temp) {return;}
document.getElementById(delete4).innerHTML += ": " +x.value;
var parent = document.getElementById("dung1");
	Game.checks_remaining -=1;
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
var temp = false;
if(str2.startsWith('shadow') && Game.shadow_checks_remaining != 0) {Game.shadow_checks_remaining -= 1; temp = true;}
if(str2.startsWith('spirit') && Game.spirit_checks_remaining != 0) {Game.spirit_checks_remaining -= 1; temp = true;}
if(str2.startsWith('ganons') && Game.ganons_checks_remaining != 0) {Game.ganons_checks_remaining -= 1; temp = true;}
if (!temp) {return;}
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
var temp = false;
if(str2.startsWith('gtg') && Game.gtg_checks_remaining != 0) {Game.gtg_checks_remaining -= 1; temp = true;}
if(str2.startsWith('well') && Game.well_checks_remaining != 0) {Game.well_checks_remaining -= 1; temp = true;}
if (!temp) {return;}
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
	if (x.id == "silverscaleimg") {
		if (Game.scale2 == true) {
			Game.scale1 = false; 
			Game.scale2 = false;
			document.getElementById(x.id).src = Game.silver_scale_img;
			x.style.opacity = .2;
		}
		else if (x.style.opacity == 1) {
			Game.scale2 = true;
			document.getElementById(x.id).src = Game.golden_scale_img;
		} 
		else {
			Game.scale1 = true;
			x.style.opacity = 1;
		}
	}
	else {
		if (x.style.opacity == 1){x.style.opacity =.2;}
		else {x.style.opacity =1;}
	}
	if (x.id == "for_med") {
		if (x.style.opacity == 1) {Game.forest_medallion = true;} else {Game.forest_medallion = false;}
	}
	else if (document.getElementById(x.id).style.opacity == 1) {
		if (document.getElementById(x.id).src.endsWith(Game.bomb_bag_img.substring(2))){Game.bomb_bag1 = true; }
		if (document.getElementById(x.id).src.endsWith(Game.iron_boots_img.substring(2))){Game.iron_boots = true;}
		if (document.getElementById(x.id).src.endsWith(Game.hover_boots_img.substring(2))){Game.hover_boots = true;}
		if (document.getElementById(x.id).src.endsWith(Game.hookshot_img.substring(2))){Game.hookshot = true;}
		if (document.getElementById(x.id).src.endsWith(Game.bow_img.substring(2))){Game.bow1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.goron_bracelet_img.substring(2))){Game.goron_bracelet = true;}
		if (document.getElementById(x.id).src.endsWith(Game.hammer_img.substring(2))){Game.hammer = true;}
		if (document.getElementById(x.id).src.endsWith(Game.golden_scale_img.substring(2))){Game.scale2 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.silver_gauntlets_img.substring(2))){Game.silver_gauntlets = true;}
		if (document.getElementById(x.id).src.endsWith(Game.magic_meter_img.substring(2))){Game.magic1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.longshot_img.substring(2))){Game.longshot = true;}
		if (document.getElementById(x.id).src.endsWith(Game.mirror_shield_img.substring(2))){Game.mirror_shield = true;}
		if (document.getElementById(x.id).src.endsWith(Game.dins_fire_img.substring(2))){Game.dins_fire = true;}
		if (document.getElementById(x.id).src.endsWith(Game.letter_img.substring(2))){Game.rutos_letter = true;}
		if (document.getElementById(x.id).src.endsWith(Game.boomerang_img.substring(2))){Game.boomerang = true;}
		if (document.getElementById(x.id).src.endsWith(Game.lens_img.substring(2))){Game.lens_of_truth = true;}
		if (document.getElementById(x.id).src.endsWith(Game.golden_gauntlets_img.substring(2))){Game.golden_gauntlets = true;}
		if (document.getElementById(x.id).src.endsWith(Game.silver_scale_img.substring(2))){Game.scale1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.light_arrows_img.substring(2))){Game.light_arrows = true;}
		if (document.getElementById(x.id).src.endsWith(Game.fire_arrows_img.substring(2))){Game.fire_arrows = true;}
		if (document.getElementById(x.id).src.endsWith(Game.farores_wind_img.substring(2))){Game.farores_wind = true;}
		if (document.getElementById(x.id).src.endsWith(Game.bottle_img.substring(2))){Game.bottle1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.slingshot_img.substring(2))){Game.slingshot1 = true;}
		if (document.getElementById(x.id).src.endsWith(Game.lullaby_img.substring(2))){Game.lullaby = true;}
		if (document.getElementById(x.id).src.endsWith(Game.eponas_img.substring(2))){Game.eponas = true;}
		if (document.getElementById(x.id).src.endsWith(Game.sarias_img.substring(2))){Game.sarias = true;}
		if (document.getElementById(x.id).src.endsWith(Game.suns_img.substring(2))){Game.suns = true;}
		if (document.getElementById(x.id).src.endsWith(Game.sot_img.substring(2))){Game.sot = true;}
		if (document.getElementById(x.id).src.endsWith(Game.sos_img.substring(2))){Game.sos = true;}
		if (document.getElementById(x.id).src.endsWith(Game.minuet_img.substring(2))){Game.minuet = true;}
		if (document.getElementById(x.id).src.endsWith(Game.bolero_img.substring(2))){Game.bolero = true;}
		if (document.getElementById(x.id).src.endsWith(Game.serenade_img.substring(2))){Game.serenade = true;}
		if (document.getElementById(x.id).src.endsWith(Game.requiem_img.substring(2))){Game.requiem = true;}
		if (document.getElementById(x.id).src.endsWith(Game.nocturne_img.substring(2))){Game.nocturne = true;}
		if (document.getElementById(x.id).src.endsWith(Game.prelude_img.substring(2))){Game.prelude = true;}
	}
	else {
		if (document.getElementById(x.id).src.endsWith(Game.bomb_bag_img.substring(2))){Game.bomb_bag1 = false; }
		if (document.getElementById(x.id).src.endsWith(Game.iron_boots_img.substring(2))){Game.iron_boots = false;}
		if (document.getElementById(x.id).src.endsWith(Game.hover_boots_img.substring(2))){Game.hover_boots = false;}
		if (document.getElementById(x.id).src.endsWith(Game.hookshot_img.substring(2))){Game.hookshot = false;}
		if (document.getElementById(x.id).src.endsWith(Game.bow_img.substring(2))){Game.bow1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.goron_bracelet_img.substring(2))){Game.goron_bracelet = false;}
		if (document.getElementById(x.id).src.endsWith(Game.hammer_img.substring(2))){Game.hammer = false;}
		if (document.getElementById(x.id).src.endsWith(Game.golden_scale_img.substring(2))){Game.scale2 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.silver_gauntlets_img.substring(2))){Game.silver_gauntlets = false;}
		if (document.getElementById(x.id).src.endsWith(Game.magic_meter_img.substring(2))){Game.magic1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.longshot_img.substring(2))){Game.longshot = false;}
		if (document.getElementById(x.id).src.endsWith(Game.mirror_shield_img.substring(2))){Game.mirror_shield = false;}
		if (document.getElementById(x.id).src.endsWith(Game.dins_fire_img.substring(2))){Game.dins_fire = false;}
		if (document.getElementById(x.id).src.endsWith(Game.letter_img.substring(2))){Game.rutos_letter = false;}
		if (document.getElementById(x.id).src.endsWith(Game.boomerang_img.substring(2))){Game.boomerang = false;}
		if (document.getElementById(x.id).src.endsWith(Game.lens_img.substring(2))){Game.lens_of_truth = false;}
		if (document.getElementById(x.id).src.endsWith(Game.golden_gauntlets_img.substring(2))){Game.golden_gauntlets = false;}
		if (document.getElementById(x.id).src.endsWith(Game.silver_scale_img.substring(2))){Game.scale1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.light_arrows_img.substring(2))){Game.light_arrows = false;}
		if (document.getElementById(x.id).src.endsWith(Game.fire_arrows_img.substring(2))){Game.fire_arrows = false;}
		if (document.getElementById(x.id).src.endsWith(Game.farores_wind_img.substring(2))){Game.farores_wind = false;}
		if (document.getElementById(x.id).src.endsWith(Game.bottle_img.substring(2))){Game.bottle1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.slingshot_img.substring(2))){Game.slingshot1 = false;}
		if (document.getElementById(x.id).src.endsWith(Game.lullaby_img.substring(2))){Game.lullaby = false;}
		if (document.getElementById(x.id).src.endsWith(Game.eponas_img.substring(2))){Game.eponas = false;}
		if (document.getElementById(x.id).src.endsWith(Game.sarias_img.substring(2))){Game.sarias = false;}
		if (document.getElementById(x.id).src.endsWith(Game.suns_img.substring(2))){Game.suns = false;}
		if (document.getElementById(x.id).src.endsWith(Game.sot_img.substring(2))){Game.sot = false;}
		if (document.getElementById(x.id).src.endsWith(Game.sos_img.substring(2))){Game.sos = false;}
		if (document.getElementById(x.id).src.endsWith(Game.minuet_img.substring(2))){Game.minuet = false;}
		if (document.getElementById(x.id).src.endsWith(Game.bolero_img.substring(2))){Game.bolero = false;}
		if (document.getElementById(x.id).src.endsWith(Game.serenade_img.substring(2))){Game.serenade = false;}
		if (document.getElementById(x.id).src.endsWith(Game.requiem_img.substring(2))){Game.requiem = false;}
		if (document.getElementById(x.id).src.endsWith(Game.nocturne_img.substring(2))){Game.nocturne = false;}
		if (document.getElementById(x.id).src.endsWith(Game.prelude_img.substring(2))){Game.prelude = false;}
	}
	
	
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

var modal = document.getElementById("myModal2");

var btn = document.getElementById("skulls_in_logic");

var span = document.getElementsByClassName("close")[1];

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
	
function whoAmI() {
	if(Person.type == "soli") {
		Person.type = "normie";
		localStorage.setItem("type", "normie");
		Game.themeChange = true;
		Update();
	}
	else if (Person.type == "tagnia") {
		Person.type = "soli";
		localStorage.setItem("type", "soli");
		Game.themeChange = true;
		Update();
	}
	else if (Person.type == "normie") {
		Person.type = "tagnia";
		localStorage.setItem("type", "tagnia");
		Game.themeChange = true;
		Update();
	}
}
	
function identifyMedal(x) {
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

function toggleSettings() {
	if(Logic.brackets) {
		Logic.brackets = false;
		document.getElementById("SettingsToggle").innerHTML = "Switch to Brackets";
		Update();
	}
	else {
		Logic.brackets = true;
		document.getElementById("SettingsToggle").innerHTML = "Switch to Weekly";
		Update();
	}
}

function enableChus() {
	if(Game.has_chus == false) {
		Game.has_chus = true;
		if (Person.type == "soli") {document.getElementById("chuButton").src = "./images/chuo.png";}
		else {document.getElementById("chuButton").style.opacity = 1;}
	}
	else if(Game.has_chus == true) {
		Game.has_chus = false;
		if (Person.type == "soli") {document.getElementById("chuButton").src = "./images/chux.png";}
		else {document.getElementById("chuButton").style.opacity = .4;}
	}
}


 function download() {
        var a = document.body.appendChild(
            document.createElement("a")
        );
        var textToWrite = textBlock;
        a.download = "route.txt"; 
        textToWrite = textToWrite.replace(/\n/g, "%0D%0A"); 
        a.href = "data:text/plain," + textToWrite;
        a.click();
    }
	
function hint() {
	document.getElementById("next").style.display = "none"; document.getElementById("text_next").style.color = "pink";
}
function peak() {
	document.getElementById("next").style.display = "none"; document.getElementById("text_next").style.color = "A5F2F3";
}
function check() {
	document.getElementById("next").style.display = "inline-block"; document.getElementById("text_next").style.color = "lightblue";
}

function prompt() {
	document.getElementById("next").style.display = "none"; document.getElementById("text_next").style.color = "orange";
}	
function order() {
	document.getElementById("next").style.display = "none"; document.getElementById("text_next").style.color = "red";
}
	
function switchAge() {
	if (age == "child") {
		document.getElementById("ageButton").src = "./images/man_1f468.png";
		age = "adult";
		lastCheck = "adult"
	}
	else {
		document.getElementById("ageButton").src = "./images/child_1f9d2.png";
		age = "child";
		lastCheck = "child";
	}
}
	
function isUpperCase(str) {
    return str === str.toUpperCase();
}

function safetyLevel() {
	if (document.getElementById("safetyButton").innerHTML == "Be Safe") {
		document.getElementById("safetyButton").innerHTML = "Go Pepega";
		safetyMod = 1.6;
	}
	else if (document.getElementById("safetyButton").innerHTML == "Go Pepega") {
		document.getElementById("safetyButton").innerHTML = "Aim Intervention";
		safetyMod = 9001;
	}
	else if (document.getElementById("safetyButton").innerHTML == "Aim Intervention") {
		document.getElementById("safetyButton").innerHTML = "risky";
		safetyMod = .65;
	}
	else if (document.getElementById("safetyButton").innerHTML == "risky") {
		document.getElementById("safetyButton").innerHTML = "Be Safe";
		safetyMod = 1;
	}
}

var childRoute1 = ["ocarina_game", "lost_woods_grotto", "lost_woods_scrub_grotto", "wolfos_grotto", "bridge_scrub", "target", "skull_kid", "kokiri_song_of_storms", "rolling_goron", "goron_dance", "goron_pot", "river_pillar", "river_grotto", "river_ledge", "frogs_1", "frogs_2", "zora_diving", "zora_torches", "hylia_child_fishing"];
var childRoute2 = ["market_slingshot_game", "market_bowling_1", "market_bowling_2","dins_fairy","market_lens_game"];
/*sq + hint + sos = 62
sq + hint + sos + enter lw = 72
sq + enter lw = 43
enter lw > saria kid = 20
enter lw > saria kid + turn right = 27
enter lw > turn right = 6
enter lw > ock > gc area = 56
enter lw > gc area = 9
enter lw > target > gc area = 16
enter lw > gc = 12
enter lw > hint + generic = 25
generic > scrub = 34
generic > scrub + wolfos = 75
enter lw > hint + generic + gc = 33
gc > 3ch w/ chus = 100
gc > 3ch w/ chus > midoarea = 119
gc > 3ch w/o chus > midoarea = 130
enter lw > hint + generic + midoarea = 33
gc > rolldance w/o chus = 66*/



var childRoute1Value = 0;


function detour(x,y) {
	if ((Game.checks_remaining + progressiveAvail * 5 + progressivePool * 3 + Game.logically_accessible * 3) / knowMode / safetyMod / Math.max(10,x)^.2 > 1) {return true;} 
	else {return false;}
}

function junk_next() {
	var str = document.getElementById("text_next").innerHTML;
		for (var i = 0; i < Names.length; i++) {
			if (str == Names[i]) {
					junk(document.getElementById("text_" + Locations[i]));
					return;
			}
		}
	if (str == "Enough for Deku?") {
		if (event.button == 0) {
			lastCheck = "deku";
			dekutod = true;
			Update();
			return;
		}
		else if (event.button == 2) {
			lastCheck = "nodeku";
			dekutod = false;
			Update();
			return;
		}
	}
	if (str == "GV SQ?") {
		if (event.button == 0) {
			lastCheck = "gvsq";
			if(document.getElementById("text_" + Locations[13]) != null) {document.getElementById("text_" + Locations[13]).dispatchEvent(new Event('mousedown'));}
			if(document.getElementById("text_" + Locations[14]) != null) {document.getElementById("text_" + Locations[14]).dispatchEvent(new Event('mousedown'));}
			Update();
			return;
		}
		else if (event.button == 2) {
			lastCheck = "gerudovalley_waterfall";
			Update();
			return;
		}
	}
	if (str == "Go Adult") {
		if (event.button == 0) {
			document.getElementById("ageButton").click();
			Update();
			return;
		}
	}
	if (str == "Go Child") {
		if (event.button == 0) {
			document.getElementById("ageButton").click();
			Update();
			return;
		}
	}
	for (var i = 0; i < hintStones.length; i++) {
		if (document.getElementById("text_next").innerHTML == hintStones[i]) {
			readYet[i] = true;
			lastCheck = hintStones[i];
			Update();
			return;
		}
	}
	
}

function warp() {

}


function next_check(x) {
	if (document.getElementById("mido_1") != null) {check(); return "Kokiri: Mido's 1"}
	if (document.getElementById("mido_2") != null) {check(); return "Kokiri: Mido's 2"}
	if (document.getElementById("mido_3") != null) {check(); return "Kokiri: Mido's 3"}
	if (document.getElementById("mido_4") != null) {check(); return "Kokiri: Mido's 4"}
	if (x.startsWith("mido")) {
		if (Check.mido_1 != "junk" || Check.mido_2 != "junk" || Check.mido_3 != "junk" || Check.mido_4 != "junk") {check(); return "Kokiri: Sword"}
		else {prompt(); return "Enough for Deku?"}
	}
	if (x == "deku") {hint(); return "Kokiri: Left Deku Hint";}
	
	if (x == "nodeku" && Game.has_chus) {hint(); return "Field: Remote Gr. Hint";}
	if (x == "nodeku") {hint(); return "Field: Open Gr. Hint";}
	
	if (x == "Kokiri: Left Deku Hint") {hint(); return "Kokiri: Right Deku Hint";}
	
	if (x == "Field: Open Gr. Hint" && !checkedYet[10] && Area[3] != "barren") {check(); return "Field: Open Gr.";}
	if (x == "Field: Open Gr. Hint") {check(); lastCheck = "hyrule_open_grotto"; Update(); return;}
	
	if (x == "hyrule_open_grotto") {
		if (Game.has_chus && !checkedYet[10] && Area[3] != "barren" && detour(60,3)) {check(); return "Field: Scrub Gr.";}
		if (Game.has_chus && !checkedYet[9] && Area[3] != "barren" && detour(60,3)) {check(); return "Field: Remote Gr.";}
		if (!dekutod && !readYet[11] && Logic.water_medallion_location == "unknown" && Check.zeldasSpot == null) {hint(); return "Hylia: After Valley Hint";}
		if (dekutod && !checkedYet[14] && Area[4] != "barren" && Logic.water_medallion_location == "unknown" && Check.zeldasSpot == null) {check(); return "Valley: Box";}
		if (!checkedYet[24] && Area[6] != "barren" && Logic.water_medallion_location == "unknown" && Check.zeldasSpot == null) {check(); return "Market: Big Rich";}
		if (!readYet[14] && Logic.water_medallion_location == "unknown" && Check.zeldasSpot == null) {hint(); return "Hyrule Castle: First Hint";}
	}
	
	if (x == "Field: Remote Gr. Hint" && !checkedYet[9] && Area[3] != "barren") {check(); return "Field: Remote Gr.";}
	if (x == "Field: Remote Gr. Hint") {check(); lastCheck = "hyrule_forest_boulder"; Update(); return;}
	
	if (x == "hyrule_forest_boulder") {
		if (!checkedYet[245] && (readYet[7]) && age == "child" && !checkedYet[24] && Area[6] != "barren") {check(); return "Market: Big Rich";}
		if (!checkedYet[245] && (readYet[7]) && age == "child" && (checkedYet[24] || Area[6] == "barren")) {hint(); return "Hyrule Castle: First Hint";}
		if (!checkedYet[245] && !readYet[7] && age == "child") {check(); return "Field: Open Gr."}
		if (!detour(3,10)) {check(); return "Field: Open Gr.";}
		if (!detour(3,11)) {check(); return "Field: Scrub Gr.";}
		return warp();
	}
	
	if (x == "Kokiri: Left Deku Hint") {
		return "Kokiri: Right Deku Hint";
	}
	if (x == "Kokiri: Right Deku Hint" && Area[12] != "barren") {
		check(); return "Deku: Lobby"; 
	}
	
	if (x == "deku_lobby") {
		if (!detour(37,12,40)) {
			check(); return "Deku: Sling 1";
		}
		return warp();
	}
	if (x == "deku_slingshot") {
		if (!detour(6,12,41)) {
			check(); return "Deku: Sling 2";
		}
		return warp();
	}
	if (x == "deku_slingshot_room_side") {
		if (!detour(50,12,42)) {
			check(); return "Deku: Compass 1";
		}
		return warp();
	}
	if (x == "deku_compass") {
		if (!detour(18,12,43)) {
			check(); return "Deku: Compass 2";
		}
		return warp();
	}
	if (x == "deku_compass_room_side") {
		if (!detour(34,12,44)) {
			check(); return "Deku: Basement";
		}
		return warp();
	}
	if (x == "deku_basement") {
		if (!detour(90,12,45)) {
			check(); return "Deku: Queen";
		}
		return warp();
	}
	if (x == "deku_queen_gohma") {
		if (!checkedYet[254] && !readYet[5] && Game.requiem) {hint(); return "Colossus: Hint";}
		if (checkedYet[245] && !checkedYet[247] && !readYet[24]) {hint(); return "Kokiri: LW Hint";}
		if (checkedYet[245] && checkedYet[247]) {order(); return "Go Adult";}
		if (!checkedYet[245] && !checkedYet[9] && Area[3] != "barren" && Game.has_chus) {hint(); return "Field: Remote Gr. Hint";}
		if (!checkedYet[245] && !checkedYet[10] && Area[3] != "barren") {hint(); return "Field: Open Gr. Hint";}
		if (!checkedYet[245] && !checkedYet[14] && Area[4] != "barren" && Area[5] != "barren") {check(); return "Valley: Box";}
		if (!checkedYet[245] && !checkedYet[14] && Area[4] != "barren" && Area[5] == "barren") {prompt(); return "GV SQ?";}
		if (!checkedYet[245] && !checkedYet[24] && Area[6] != "barren") {check(); return "Market: Big Rich";}
		return warp();
	}
	
	//DODONGOS
	if (x == "dodongos_map") {
		if (Game.has_chus && !detour(30,16,62)) {check(); return "Dodongos: Compass";}
		if (dodongosRequired > .9 && Game.has_chus) {check(); return "Dodongos: King";}
		if (!detour(0,19,77)) {check(); return "Kakariko: Roof";} if (!detour(0,19,79)) {check(); return "Kakariko: Windmill";} if (!checkedYet[248]) {check(); return "Windmill";}
		if (!Game.bolero && (Game.hover_boots || Game.hookshot) && (Game.has_chus || Game.goron_bracelet || Game.bow || Game.can_use_dins) && !checkedYet[250]) {
			if (!detour(8,17,69) && Game.has_chus) {check(); return "Trail: Wall"} if (!detour(0,17,68)) {check(); return "Trail: Top"} if (!detour(20,17,70) && Game.song_of_storms) {hint(); return "Trail: Gr. Hint"}
			if (!detour(15,15,59) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 3!";} if (!detour(20,15,57) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 1";}
			if (!detour(3,18,73) && !Game.hover_boots) {peak(); return "Peak Crater Bean";} if (!detour(3,18,73) && Game.hover_boots) {check(); return "Crater: Bean";} if (!checkedYet[252]) {check(); return "Crater";}
		}
		if (Game.minuet && (Game.has_chus || Game.hammer) && !checkedYet[253]) {check(); return "Meadow";}
		if (Game.bolero && (Game.hookshot || Game.hover_boots) && !checkedYet[252]) {check(); return "Crater";}
		return warp();
	}
	if (x == "dodongos_compass") {
		if (Game.has_chus && !detour(30,16,62)) {check(); return "Dodongos: Compass";}
		if (dodongosRequired > .9 && Game.has_chus) {check(); return "Dodongos: Platform";}
		if (!detour(0,19,77)) {check(); return "Kakariko: Roof";} if (!detour(0,19,79)) {check(); return "Kakariko: Windmill";} if (!checkedYet[248]) {check(); return "Windmill";}
		if (!Game.bolero && (Game.hover_boots || Game.hookshot) && (Game.has_chus || Game.goron_bracelet || Game.bow || Game.can_use_dins) && !checkedYet[250]) {
			if (!detour(8,17,69) && Game.has_chus) {check(); return "Trail: Wall"} if (!detour(0,17,68)) {check(); return "Trail: Top"} if (!detour(20,17,70) && Game.song_of_storms) {hint(); return "Trail: Gr. Hint"}
			if (!detour(15,15,59) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 3!";} if (!detour(20,15,57) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 1";}
			if (!detour(3,18,73) && !Game.hover_boots) {peak(); return "Peak Crater Bean";} if (!detour(3,18,73) && Game.hover_boots) {check(); return "Crater: Bean";} if (!checkedYet[252]) {check(); return "Crater";}
		}
		if (Game.minuet && (Game.has_chus || Game.hammer) && !checkedYet[253]) {check(); return "Meadow";}
		if (Game.bolero && (Game.hookshot || Game.hover_boots) && !checkedYet[252]) {check(); return "Crater";}
		return warp();
	}
	if (x == "dodongos_bomb_flower_platform") {
		if (Game.has_chus && !detour(30,16,62)) {check(); return "Dodongos: Bomb Bag";}
		if (dodongosRequired > .9 && Game.has_chus) {check(); return "Dodongos: King";}
		if (!detour(0,19,77)) {check(); return "Kakariko: Roof";} if (!detour(0,19,79)) {check(); return "Kakariko: Windmill";} if (!checkedYet[248]) {check(); return "Windmill";}
		if (!Game.bolero && (Game.hover_boots || Game.hookshot) && (Game.has_chus || Game.goron_bracelet || Game.bow || Game.can_use_dins) && !checkedYet[250]) {
			if (!detour(8,17,69) && Game.has_chus) {check(); return "Trail: Wall"} if (!detour(0,17,68)) {check(); return "Trail: Top"} if (!detour(20,17,70) && Game.song_of_storms) {hint(); return "Trail: Gr. Hint"}
			if (!detour(15,15,59) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 3!";} if (!detour(20,15,57) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 1";}
			if (!detour(3,18,73) && !Game.hover_boots) {peak(); return "Peak Crater Bean";} if (!detour(3,18,73) && Game.hover_boots) {check(); return "Crater: Bean";} if (!checkedYet[252]) {check(); return "Crater";}
		}
		if (Game.minuet && (Game.has_chus || Game.hammer) && !checkedYet[253]) {check(); return "Meadow";}
		if (Game.bolero && (Game.hookshot || Game.hover_boots) && !checkedYet[252]) {check(); return "Crater";}
		return warp();
	}
	if (x == "dodongos_bomb_bag") {
		if (Game.has_chus && !detour(30,16,62)) {check(); return "Dodongos: Bridge";}
		if (dodongosRequired > .9 && Game.has_chus) {check(); return "Dodongos: King";}
		if (!detour(0,19,77)) {check(); return "Kakariko: Roof";} if (!detour(0,19,79)) {check(); return "Kakariko: Windmill";} if (!checkedYet[248]) {check(); return "Windmill";}
		if (!Game.bolero && (Game.hover_boots || Game.hookshot) && (Game.has_chus || Game.goron_bracelet || Game.bow || Game.can_use_dins) && !checkedYet[250]) {
			if (!detour(8,17,69) && Game.has_chus) {check(); return "Trail: Wall"} if (!detour(0,17,68)) {check(); return "Trail: Top"} if (!detour(20,17,70) && Game.song_of_storms) {hint(); return "Trail: Gr. Hint"}
			if (!detour(15,15,59) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 3!";} if (!detour(20,15,57) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 1";}
			if (!detour(3,18,73) && !Game.hover_boots) {peak(); return "Peak Crater Bean";} if (!detour(3,18,73) && Game.hover_boots) {check(); return "Crater: Bean";} if (!checkedYet[252]) {check(); return "Crater";}
		}
		if (Game.minuet && (Game.has_chus || Game.hammer) && !checkedYet[253]) {check(); return "Meadow";}
		if (Game.bolero && (Game.hookshot || Game.hover_boots) && !checkedYet[252]) {check(); return "Crater";}
		return warp();
	}
	if (x == "dodongos_end_of_bridge") {
		if (Game.has_chus && !detour(30,16,62)) {check(); return "Dodongos: Above King";}
		if (dodongosRequired > .9 && Game.has_chus) {check(); return "Dodongos: King";}
		if (!detour(0,19,77)) {check(); return "Kakariko: Roof";} if (!detour(0,19,79)) {check(); return "Kakariko: Windmill";} if (!checkedYet[248]) {check(); return "Windmill";}
		if (!Game.bolero && (Game.hover_boots || Game.hookshot) && (Game.has_chus || Game.goron_bracelet || Game.bow || Game.can_use_dins) && !checkedYet[250]) {
			if (!detour(8,17,69) && Game.has_chus) {check(); return "Trail: Wall"} if (!detour(0,17,68)) {check(); return "Trail: Top"} if (!detour(20,17,70) && Game.song_of_storms) {hint(); return "Trail: Gr. Hint"}
			if (!detour(15,15,59) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 3!";} if (!detour(20,15,57) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 1";}
			if (!detour(3,18,73) && !Game.hover_boots) {peak(); return "Peak Crater Bean";} if (!detour(3,18,73) && Game.hover_boots) {check(); return "Crater: Bean";} if (!checkedYet[252]) {check(); return "Crater";}
		}
		if (Game.minuet && (Game.has_chus || Game.hammer) && !checkedYet[253]) {check(); return "Meadow";}
		if (Game.bolero && (Game.hookshot || Game.hover_boots) && !checkedYet[252]) {check(); return "Crater";}
		return warp();
	}
	if (x == "dodongos_above_king") {
		if ((dodongosRequired > .9 || !detour(30,16,62)) && Game.has_chus) {check(); return "Dodongos: King";}
		if (!detour(0,19,77)) {check(); return "Kakariko: Roof";} if (!detour(0,19,79)) {check(); return "Kakariko: Windmill";} if (!checkedYet[248]) {check(); return "Windmill";}
		if (!Game.bolero && (Game.hover_boots || Game.hookshot) && (Game.has_chus || Game.goron_bracelet || Game.bow || Game.can_use_dins) && !checkedYet[250]) {
			if (!detour(8,17,69) && Game.has_chus) {check(); return "Trail: Wall"} if (!detour(0,17,68)) {check(); return "Trail: Top"} if (!detour(20,17,70) && Game.song_of_storms) {hint(); return "Trail: Gr. Hint"}
			if (!detour(15,15,59) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 3!";} if (!detour(20,15,57) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 1";}
			if (!detour(3,18,73) && !Game.hover_boots) {peak(); return "Peak Crater Bean";} if (!detour(3,18,73) && Game.hover_boots) {check(); return "Crater: Bean";} if (!checkedYet[252]) {check(); return "Crater";}
		}
		if (Game.minuet && (Game.has_chus || Game.hammer) && !checkedYet[253]) {check(); return "Meadow";}
		if (Game.bolero && (Game.hookshot || Game.hover_boots) && !checkedYet[252]) {check(); return "Crater";}
		return warp();
	}
	if (x == "dodongos_king_dodongo") {
		if (!detour(0,19,77)) {check(); return "Kakariko: Roof";} if (!detour(0,19,79)) {check(); return "Kakariko: Windmill";} if (!checkedYet[248]) {check(); return "Windmill";}
		if (!Game.bolero && (Game.hover_boots || Game.hookshot) && (Game.has_chus || Game.goron_bracelet || Game.bow || Game.can_use_dins) && !checkedYet[250]) {
			if (!detour(8,17,69) && Game.has_chus) {check(); return "Trail: Wall"} if (!detour(0,17,68)) {check(); return "Trail: Top"} if (!detour(20,17,70) && Game.song_of_storms) {hint(); return "Trail: Gr. Hint"}
			if (!detour(15,15,59) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 3!";} if (!detour(20,15,57) && Game.has_chus || Game.silver_gauntlets || Game.hammer) {check(); return "Goron City: Maze 1";}
			if (!detour(3,18,73) && !Game.hover_boots) {peak(); return "Peak Crater Bean";} if (!detour(3,18,73) && Game.hover_boots) {check(); return "Crater: Bean";} if (!checkedYet[252]) {check(); return "Crater";}
		}
		if (Game.minuet && (Game.has_chus || Game.hammer) && !checkedYet[253]) {check(); return "Meadow";}
		if (Game.bolero && (Game.hookshot || Game.hover_boots) && !checkedYet[252]) {check(); return "Crater";}
		return warp();
	}
	
	//JABU
	if (x == "jabu_map") {
		if (!detour(30,26,111)) {check(); "Jabu: Compass";}
		if (jabuRequired > .9) {check(); "Jabu: Barinade";}
		return warp();
	}
	if (x == "jabu_compass") {
		if (!detour(30,26,112)) {check(); "Jabu: Boomerang";}
		if (jabuRequired > .9) {check(); "Jabu: Barinade";}
		return warp();
	}
	if (x == "jabu_boomerang") {
		if (!detour(240,26,113) || jabuRequired > .9) {check(); "Jabu: Barinade";}
		return warp();
	}
	if (x == "jabu_barinade") {
		if (!detour(45,10,32)) {hint(); "Fountain: By Fairy Hint";}
		return warp();
	}
	
	//FOREST
	if (x == "forest1") {
		if (!detour(59,27,115)) {check(); "Forest: Stalfos";}
		if ((!detour(40,14,53) && Game.can_blast_or_smash && checkedYet[247]) || (!detour(40,14,53) && Game.can_blast_or_smash && checkedYet[247]) || (!detour(40,13,48) && Game.can_blast_or_smash && checkedYet[247]) || ((Game.can_blast_or_smash || Game.can_use_dins) && !checkedYet[250]) && !readYet[29]) {hint(); "SFM: Maze 2 Hint"}
		if (!detour(40,14,53) && Game.can_blast_or_smash && checkedYet[247]) {check(); "SFM: Wolfos Gr.";}
		if (!detour(40,13,48) && Game.can_blast_or_smash && checkedYet[247]) {check(); "Lost Woods: Scrub Gr.";}
		return warp();
	}
	
}	

	function isCheckWotH (checks) {
	if (checks.includes("bomb_bag")) {if(isBombBagWotH()) {return true;}}
	if (checks.includes("boomerang")) {if(isBoomerangWotH()) {return true;};}
	if (checks.includes("bottle")) {if(isBottleWotH()) {return true;};}
	if (checks.includes("bow")) {if(isBowWotH()) {return true;};}
	if (checks.includes("dins_fire")) {if(isDinsWotH()) {return true;};}
	if (checks.includes("farores_wind")) {if(isFaroresWotH()) {return true;};}
	if (checks.includes("fire_arrows")) {if(isFireArrowWotH()) {return true;};}
	if (checks.includes("goron_tunic")) {if(isGoronWotH()) {return true;};}
	if (checks.includes("hammer")) {if(isHammerWotH()) {return true;};}
	if (checks.includes("hookshot")) {if(isHookshotWotH()) {return true;};}
	if (checks.includes("hover_boots")) {if(isHoverWotH()) {return true;};}
	if (checks.includes("iron_boots")) {if(isIronWotH()) {return true;};}
	if (checks.includes("lens_of_truth")) {if(isLensWotH()) {return true;};}
	if (checks.includes("rutos_letter")) {if(isLetterWotH()) {return true;};}
	if (checks.includes("magic")) {if(isMagicWotH()) {return true;};}
	if (checks.includes("mirror_shield")) {if(isMirrorWotH()) {return true;};}
	if (checks.includes("scale")) {if(isScaleWotH()) {return true;};}
	if (checks.includes("slingshot")) {if(isSlingshotWotH()) {return true;};}
	if (checks.includes("strength")) {if(isStrengthWotH()) {return true;};}
	if (checks.includes("prescription") || checks.includes("claim_check")) {if(isTradeWotH()) {return true;};}
	if (checks.includes("wallet")) {if(isWalletWotH()) {return true;};}
	if (checks.includes("zora_tunic")) {if(isZoraWotH()) {return true;};}
	return false;
}
function lockedItems(arr,str) {
	var points = 0;
	points = 0; if (arr.includes(Location.bomb_bag1)){points +=1;} if (arr.includes(Location.bomb_bag2)){points +=1;} if (arr.includes(Location.bomb_bag3)){points +=1;} if (str == "bombs") {points += 1;} if (points == 3) {if (!arr.includes("bombs")) {arr.push("bombs");}}
	if (arr.includes(Location.boomerang)) {if (!arr.includes("boomerang")) {arr.push("boomerang");}}
	points = 0; if (arr.includes(Location.bottle1)){points +=1;} if (arr.includes(Location.bottle2)){points +=1;} if (arr.includes(Location.bottle3)){points +=1;} if (str == "bottle") {points += 1;} if (points == 3) {if (!arr.includes("bottle")) {arr.push("bottle");}}
	points = 0; if (arr.includes(Location.bow1)){points +=1;} if (arr.includes(Location.bow2)){points +=1;} if (arr.includes(Location.bow3)){points +=1;} if (str == "bow") {points += 1;} if (points == 3) {if (!arr.includes("bow")) {arr.push("bow");}}
	if (arr.includes(Location.dins_fire)) {if (!arr.includes("dins_fire")) {arr.push("dins_fire");}}
	if (arr.includes(Location.farores_wind)) {if (!arr.includes("farores_wind")) {arr.push("farores_wind");}}
	if (arr.includes(Location.fire_arrows)) {if (!arr.includes("fire_arrows")) {arr.push("fire_arrows");}}
	points = 0; if (arr.includes(Location.goron_tunic)) points += 1; if (arr.includes(Location.wallet1)) points += 1; if (arr.includes(Location.wallet2)) points += 1; if (str == "goron_tunic" || str == "wallet") {points+=1;} if (points == 3) {if (!arr.includes("goron_tunic")) {arr.push("goron_tunic");} if (!arr.includes("wallet1")) {arr.push("wallet1");}}
	if (arr.includes(Location.hammer)) {if (!arr.includes("hammer")) {arr.push("hammer");}}
	points = 0; if (arr.includes(Location.hookshot1)){points +=1;} if (arr.includes(Location.hookshot2)){points +=1;} if (str == "hookshot") {points += 1;} if (points == 2) {if (!arr.includes("hookshot")) {arr.push("hookshot");}}
	if (arr.includes(Location.hookshot)) {if (!arr.includes("longshot")) {arr.push("longshot");}}
	if (arr.includes(Location.hover_boots)) {if (!arr.includes("hover_boots")) {arr.push("hover_boots");}}
	if (arr.includes(Location.iron_boots)) {if (!arr.includes("iron_boots")) {arr.push("iron_boots");}}
	if (arr.includes(Location.lens_of_truth)) {if (!arr.includes("lens_of_truth")) {arr.push("lens_of_truth");}}
	if (arr.includes(Location.rutos_letter)) {if (!arr.includes("rutos_letter")) {arr.push("rutos_letter");}}
	points = 0; if (arr.includes(Location.magic1)){points +=1;} if (arr.includes(Location.magic2)){points +=1;} if (str == "magic") {points += 1;} if (points == 2) {if (!arr.includes("magic")) {arr.push("magic");}}
	if (arr.includes(Location.mirror_shield)) {if (!arr.includes("mirror_shield")) {arr.push("mirror_shield");}}
	points = 0; if (arr.includes(Location.scale1)){points +=1;} if (arr.includes(Location.scale2)){points +=1;} if (str == "scale") {points += 1;} if (points == 2) {if (!arr.includes("scale")) {arr.push("scale");}}
	points = 0; if (arr.includes(Location.slingshot1)){points +=1;} if (arr.includes(Location.slingshot2)){points +=1;} if (arr.includes(Location.slingshot3)){points +=1;} if (str == "slingshot") {points += 1;} if (points == 3) {if (!arr.includes("slingshot")) {arr.push("slingshot");}}
	points = 0; if (arr.includes(Location.strength1)){points +=1;} if (arr.includes(Location.strength2)){points +=1;} if (arr.includes(Location.strength3)){points +=1;} if (str == "strength") {points += 1;} if (points == 3) {if (!arr.includes("strength1")) {arr.push("strength1");}}
	points = 0; if (arr.includes(Location.strength1)){points +=1;} if (arr.includes(Location.strength2)){points +=1;} if (arr.includes(Location.strength3)){points +=1;} if (str == "strength") {points += 1;} if (points == 2) {if (!arr.includes("strength2")) {arr.push("strength2");}}
	points = 0; if (arr.includes(Location.strength1)){points +=1;} if (arr.includes(Location.strength2)){points +=1;} if (arr.includes(Location.strength3)){points +=1;} if (points == 1) {if (!arr.includes("strength3")) {arr.push("strength3");}}
	if (arr.includes(Location.prescription) || arr.includes(Location.claim_check)) {if (!arr.includes("trade")) {arr.push("trade");}}
	points = 0; if (arr.includes(Location.wallet1)){points +=1;} if (arr.includes(Location.wallet2)){points +=1;} if (str == "wallet") {points += 1;} if (points == 2) {if (!arr.includes("wallet1")) {arr.push("wallet1");}}
	points = 0; if (arr.includes(Location.wallet1)){points +=1;} if (arr.includes(Location.wallet2)){points +=1;} if (points == 1) {if (!arr.includes("wallet2")) {arr.push("wallet2");}}
	points = 0; if (arr.includes(Location.zora_tunic)) {points += 1;} if (arr.includes(Location.wallet1)) {points += 1;} if (arr.includes(Location.wallet2)) {points += 1}; if (str == "zora_tunic" || str == "wallet") {points+=1;} if (points >= 2) {if (!arr.includes("zora_tunic")) {arr.push("zora_tunic");} if (!arr.includes("wallet2")) {arr.push("wallet2");}}
	return;
	}
function checksLockedByItem(item) {
	const keys3 = Object.keys(Location_Locked_Logic2);
	
	for (const key of keys3) {
		temp += 1;
		if (temp == 256) {break;} 
		Location_Locked_Logic2[key] = false;
	}
	
	
	var tempArray = [];
	var temp = 20;
	while (temp > 0) {
    temp -= 1;
	
	if(Known.farores_wind == true) {Locked_Logic2.farores_wind = Location_Locked_Logic2[Location.farores_wind];} else {Locked_Logic2.farores_wind = true;} if(item == "farores_wind") {Locked_Logic2.farores_wind = false;} 
	 
	if(Known.slingshot1 == true) {Locked_Logic2.slingshot1 = Location_Locked_Logic2[Location.slingshot1];} else {Locked_Logic2.slingshot1 = true;} if(item == "slingshot1") {Locked_Logic2.slingshot1 = false;} 
	if(Known.slingshot2 == true) {Locked_Logic2.slingshot2 = Location_Locked_Logic2[Location.slingshot2];} else {Locked_Logic2.slingshot2 = true;} if(item == "slingshot2") {Locked_Logic2.slingshot2 = false;} 
	if(Known.slingshot3 == true) {Locked_Logic2.slingshot3 = Location_Locked_Logic2[Location.slingshot3];} else {Locked_Logic2.slingshot3 = true;} if(item == "slingshot3") {Locked_Logic2.slingshot3 = false;} 
	Locked_Logic2.slingshot = Locked_Logic2.slingshot1 || Locked_Logic2.slingshot2 || Locked_Logic2.slingshot3; 
	 
	if(Known.boomerang == true) {Locked_Logic2.boomerang = Location_Locked_Logic2[Location.boomerang];} else {Locked_Logic2.boomerang = true;} if(item == "boomerang") {Locked_Logic2.boomerang = false;} 
	
	if(Known.rutos_letter == true) {Locked_Logic2.rutos_letter = Location_Locked_Logic2[Location.rutos_letter];} else {Locked_Logic2.rutos_letter = true;} if(item == "rutos_letter") {Locked_Logic2.rutos_letter = false;} 
	if(Known.bottle1 == true) {Locked_Logic2.bottle1 = Location_Locked_Logic2[Location.bottle1];} else {Locked_Logic2.bottle1 = true;} if(item == "bottle1") {Locked_Logic2.bottle1 = false;} 
	if(Known.bottle2 == true) {Locked_Logic2.bottle2 = Location_Locked_Logic2[Location.bottle2];} else {Locked_Logic2.bottle2 = true;} if(item == "bottle2") {Locked_Logic2.bottle2 = false;} 
	if(Known.bottle3 == true) {Locked_Logic2.bottle3 = Location_Locked_Logic2[Location.bottle3];} else {Locked_Logic2.bottle3 = true;} if(item == "bottle3") {Locked_Logic2.bottle3 = false;} 
	Locked_Logic2.bottle = (Locked_Logic2.rutos_letter && ((Locked_Logic2.bomb_bag && Locked_Logic2.lullaby) || Locked_Logic2.silver_scale)) || Locked_Logic2.bottle1 || Locked_Logic2.bottle2 || Locked_Logic2.bottle3;
	
	if(Known.scale1 == true) {Locked_Logic2.scale1 = Location_Locked_Logic2[Location.scale1]; } else {Locked_Logic2.scale1 = true;} if(item == "scale1") {Locked_Logic2.scale1 = false;}  
	if(Known.scale2 == true) {Locked_Logic2.scale2 = Location_Locked_Logic2[Location.scale2]; } else {Locked_Logic2.scale2 = true;} if(item == "scale2") {Locked_Logic2.scale2 = false;} 
	if(Game.scale2 == true) {document.getElementById("silverscaleimg").src = Game.golden_scale_img;}
	Locked_Logic2.silver_scale = Locked_Logic2.scale1 || Locked_Logic2.scale2; 
	Locked_Logic2.golden_scale = Locked_Logic2.scale1 && Locked_Logic2.scale2; 
	if(Known.bomb_bag1 == true) {Locked_Logic2.bomb_bag1 = Location_Locked_Logic2[Location.bomb_bag1];} else {Locked_Logic2.bomb_bag1 = true;} if(item == "bomb_bag1") {Locked_Logic2.bomb_bag1 = false;} 
	if(Known.bomb_bag2 == true) {Locked_Logic2.bomb_bag2 = Location_Locked_Logic2[Location.bomb_bag2];} else {Locked_Logic2.bomb_bag2 = true;} if(item == "bomb_bag2") {Locked_Logic2.bomb_bag2 = false;} 
	if(Known.bomb_bag3 == true) {Locked_Logic2.bomb_bag3 = Location_Locked_Logic2[Location.bomb_bag3];} else {Locked_Logic2.bomb_bag3 = true;} if(item == "bomb_bag3") {Locked_Logic2.bomb_bag3 = false;} 
	Locked_Logic2.bomb_bag = Locked_Logic2.bomb_bag1 || Locked_Logic2.bomb_bag2 || Locked_Logic2.bomb_bag3;
	
	if(Known.hammer == true) {Locked_Logic2.hammer = Location_Locked_Logic2[Location.hammer];} else {Locked_Logic2.hammer = true;} if(item == "hammer") {Locked_Logic2.hammer = false;} 
	 
	if(Known.bow1 == true) {Locked_Logic2.bow1 = Location_Locked_Logic2[Location.bow1];} else {Locked_Logic2.bow1 = true;} if(item == "bow1") {Locked_Logic2.bow1 = false;} 
	if(Known.bow2 == true) {Locked_Logic2.bow2 = Location_Locked_Logic2[Location.bow2];} else {Locked_Logic2.bow2 = true;} if(item == "bow2") {Locked_Logic2.bow2 = false;} 
	if(Known.bow3 == true) {Locked_Logic2.bow3 = Location_Locked_Logic2[Location.bow3];} else {Locked_Logic2.bow3 = true;} if(item == "bow3") {Locked_Logic2.bow3 = false;} 
	Locked_Logic2.bow = Locked_Logic2.bow1 || Locked_Logic2.bow2 || Locked_Logic2.bow3;
	
	if(Known.hookshot1 == true) {Locked_Logic2.hookshot1 = Location_Locked_Logic2[Location.hookshot1];} else {Locked_Logic2.hookshot1 = true;} if(item == "hookshot1") {Locked_Logic2.hookshot1 = false;} 
	if(Known.hookshot2 == true) {Locked_Logic2.hookshot2 = Location_Locked_Logic2[Location.hookshot2];} else {Locked_Logic2.hookshot2 = true;} if(item == "hookshot2") {Locked_Logic2.hookshot2 = false;} 
	Locked_Logic2.hookshot = Locked_Logic2.hookshot1 || Locked_Logic2.hookshot2;
	Locked_Logic2.longshot = Locked_Logic2.hookshot1 && Locked_Logic2.hookshot2;
	
	if(Known.strength1 == true) {Locked_Logic2.strength1 = Location_Locked_Logic2[Location.strength1];} else {Locked_Logic2.strength1 = true;} if(item == "strength1") {Locked_Logic2.strength1 = false;} 
	if(Known.strength2 == true) {Locked_Logic2.strength2 = Location_Locked_Logic2[Location.strength2];} else {Locked_Logic2.strength2 = true;} if(item == "strength2") {Locked_Logic2.strength2 = false;} 
	if(Known.strength3 == true) {Locked_Logic2.strength3 = Location_Locked_Logic2[Location.strength3];} else {Locked_Logic2.strength3 = true;} if(item == "strength3") {Locked_Logic2.strength3 = false;} 
	Locked_Logic2.goron_bracelet = Locked_Logic2.strength1 || Locked_Logic2.strength2 || Locked_Logic2.strength3;
	Locked_Logic2.silver_gauntlets = (Locked_Logic2.strength1 && Locked_Logic2.strength2) || (Locked_Logic2.strength1 && Locked_Logic2.strength3) || (Locked_Logic2.strength2 && Locked_Logic2.strength3);
	Locked_Logic2.golden_gauntlets = Locked_Logic2.strength1 && Locked_Logic2.strength2 && Locked_Logic2.strength3;
	
	if(Known.mirror_shield == true) {Locked_Logic2.mirror_shield = Location_Locked_Logic2[Location.mirror_shield];} else {Locked_Logic2.mirror_shield = true;} if(item == "mirror_shield") {Locked_Logic2.mirror_shield = false;}   
	
	if(Known.big_poe == true) {Locked_Logic2.big_poe = Location_Locked_Logic2[Location.big1];} else {Locked_Logic2.big_poe = true;} if(item == "big_poe") {Locked_Logic2.big_poe = false;}  
	
	if(Known.iron_boots == true) {Locked_Logic2.iron_boots = Location_Locked_Logic2[Location.iron_boots];} else {Locked_Logic2.iron_boots = true;} if(item == "iron_boots") {Locked_Logic2.iron_boots = false;} 
	if(Known.hover_boots == true) {Locked_Logic2.hover_boots = Location_Locked_Logic2[Location.hover_boots];} else {Locked_Logic2.hover_boots = true;} if(item == "hover_boots") {Locked_Logic2.hover_boots = false;} 
	
	if(Known.magic1 == true) {Locked_Logic2.magic1 = Location_Locked_Logic2[Location.magic1];} else {Locked_Logic2.magic1 = true;} if(item == "magic1") {Locked_Logic2.magic1 = false;} 
	if(Known.magic2 == true) {Locked_Logic2.magic2 = Location_Locked_Logic2[Location.magic2];} else {Locked_Logic2.magic2 = true;} if(item == "magic2") {Locked_Logic2.magic2 = false;} 
	Locked_Logic2.magic = Locked_Logic2.magic1 || Locked_Logic2.magic2; 
	
	if(Known.dins_fire == true) {Locked_Logic2.dins_fire = Location_Locked_Logic2[Location.dins_fire];} else {Locked_Logic2.dins_fire = true;} if(item == "dins_fire") {Locked_Logic2.dins_fire = false;} 
	if(Known.fire_arrows == true) {Locked_Logic2.fire_arrows = Location_Locked_Logic2[Location.fire_arrows];} else {Locked_Logic2.fire_arrows = true;} if(item == "fire_arrows") {Locked_Logic2.fire_arrows = false;} 
	
	if(Known.wallet1 == true) {Locked_Logic2.wallet1 = Location_Locked_Logic2[Location.wallet1];} else {Locked_Logic2.wallet1 = true;} if(item == "wallet1") {Locked_Logic2.wallet1 = false;}  
	if(Known.wallet2 == true) {Locked_Logic2.wallet2 = Location_Locked_Logic2[Location.wallet2];} else {Locked_Logic2.wallet2 = true;} if(item == "wallet2") {Locked_Logic2.wallet2 = false;} 
	Locked_Logic2.adults_wallet = Locked_Logic2.wallet1 || Locked_Logic2.wallet2; 
	Locked_Logic2.giants_wallet = Locked_Logic2.wallet1 && Locked_Logic2.wallet2; 
	
	if(Known.goron_tunic == true) {Locked_Logic2.goron_tunic = Location_Locked_Logic2[Location.goron_tunic];}  else {Locked_Logic2.goron_tunic = true;} if(item == "goron_tunic") {Locked_Logic2.goron_tunic = false;} 
	if(Known.zora_tunic == true) {Locked_Logic2.zora_tunic = Location_Locked_Logic2[Location.zora_tunic];} else {Locked_Logic2.zora_tunic = true;}  if(item == "zora_tunic") {Locked_Logic2.zora_tunic = false;} 
	if(Known.lens_of_truth == true) {Locked_Logic2.lens_of_truth = Location_Locked_Logic2[Location.lens_of_truth];} else {Locked_Logic2.lens_of_truth = true;} if(item == "lens_of_truth") {Locked_Logic2.lens_of_truth = false;} 
	if(Known.prescription == true) {Locked_Logic2.prescription = Location_Locked_Logic2[Location.prescription];} else if (Known.claim_check == true) {Locked_Logic2.prescription = false;} else {Locked_Logic2.prescription = true;} if(item == "prescription") {Locked_Logic2.prescription = false;} 
	if(Known.claim_check == true) {Locked_Logic2.claim_check = Location_Locked_Logic2[Location.claim_check];} else if (Known.prescription == true) {Locked_Logic2.claim_check = false;} else {Locked_Logic2.claim_check = true;} if(item == "claim_check") {Locked_Logic2.claim_check = false;} 
	
	if(Known.light_arrows == true) {Locked_Logic2.light_arrows = Location_Locked_Logic2[Location.light_arrows];} else {Locked_Logic2.light_arrows = true;} if(item == "light_arrows") {Locked_Logic2.light_arrows = false;} 
	if(Known.lullaby == true) {Locked_Logic2.lullaby = Location_Locked_Logic2[Location.lullaby]; } else {Locked_Logic2.lullaby = true;} if(item == "lullaby") {Locked_Logic2.lullaby = false;} 
	if(Known.eponas == true) {Locked_Logic2.eponas = Location_Locked_Logic2[Location.eponas]; } else {Locked_Logic2.eponas = true;} if(item == "eponas") {Locked_Logic2.eponas = false;}  
	if(Known.sarias == true) {Locked_Logic2.sarias = Location_Locked_Logic2[Location.sarias]; } else {Locked_Logic2.sarias = true;} if(item == "sarias") {Locked_Logic2.sarias = false;} 
	if(Known.suns_song == true) {Locked_Logic2.suns_song = Location_Locked_Logic2[Location.suns_song]; } else {Locked_Logic2.suns_song = true;} if(item == "suns_song") {Locked_Logic2.suns_song = false;} 
	if(Known.song_of_time == true) {Locked_Logic2.song_of_time = Location_Locked_Logic2[Location.song_of_time]; } else {Locked_Logic2.song_of_time = true;} if(item == "song_of_time") {Locked_Logic2.song_of_time = false;} 
	if(Known.song_of_storms == true) {Locked_Logic2.song_of_storms = Location_Locked_Logic2[Location.song_of_storms]; } else {Locked_Logic2.song_of_storms = true;} if(item == "song_of_storms") {Locked_Logic2.song_of_storms = false;} 
	if(Known.minuet == true) {Locked_Logic2.minuet = Location_Locked_Logic2[Location.minuet]; } else {Locked_Logic2.minuet = true;} if(item == "minuet") {Locked_Logic2.minuet = false;} 
	if(Known.bolero == true) {Locked_Logic2.bolero = Location_Locked_Logic2[Location.bolero]; } else {Locked_Logic2.bolero = true;} if(item == "bolero") {Locked_Logic2.bolero = false;} 
	if(Known.serenade == true) {Locked_Logic2.serenade = Location_Locked_Logic2[Location.serenade]; }  
	if(Known.requiem == true) {Locked_Logic2.requiem = Location_Locked_Logic2[Location.requiem]; } else {Locked_Logic2.requiem = true;} if(item == "requiem") {Locked_Logic2.requiem = false;} 
	if(Known.nocturne == true) {Locked_Logic2.nocturne = Location_Locked_Logic2[Location.nocturne]; } else {Locked_Logic2.nocturne = true;} if(item == "nocturne") {Locked_Logic2.nocturne = false;}  
	if(Known.prelude == true) {Locked_Logic2.prelude = Location_Locked_Logic2[Location.prelude]; }  
	
	Locked_Logic2.can_enter_jabu = Locked_Logic2.rutos_letter && ((Locked_Logic2.lullaby && Locked_Logic2.bomb_bag) || Locked_Logic2.silver_scale) && (Locked_Logic2.boomerang || Locked_Logic2.bomb_bag || Locked_Logic2.slingshot);
	Locked_Logic2.child_can_enter_river = Locked_Logic2.bomb_bag || Locked_Logic2.silver_scale;
	Locked_Logic2.fortress_access = Locked_Logic2.eponas || Locked_Logic2.longshot;
	Locked_Logic2.can_save_carpenters = Locked_Logic2.fortress_access && ((Locked_Logic2.bow || Locked_Logic2.hookshot || Locked_Logic2.hover_boots) || true) /*fast carpenter fix**/;
	Locked_Logic2.can_cross_quicksand = Locked_Logic2.fortress_access && (Locked_Logic2.longshot || Locked_Logic2.hover_boots);
	Locked_Logic2.can_enter_colossus = (Locked_Logic2.can_cross_quicksand && (Locked_Logic2.brackets || Locked_Logic2.can_see)) || Locked_Logic2.requiem;
	Locked_Logic2.can_use_fire = (Locked_Logic2.dins_fire || (Locked_Logic2.bow && Locked_Logic2.fire_arrows)) && Locked_Logic2.magic;
	Locked_Logic2.can_use_dins = Locked_Logic2.dins_fire && Locked_Logic2.magic;
	Locked_Logic2.can_use_farores = Locked_Logic2.farores_wind && Locked_Logic2.magic;
	Locked_Logic2.can_see = Locked_Logic2.lens_of_truth && Locked_Logic2.magic;
	Locked_Logic2.can_blast_or_smash = Locked_Logic2.bomb_bag || Locked_Logic2.hammer;
	Locked_Logic2.can_enter_dodongos = Locked_Logic2.can_blast_or_smash || Locked_Logic2.goron_bracelet;
	Locked_Logic2.dodongos_climb = Locked_Logic2.can_enter_dodongos && (Locked_Logic2.bomb_bag || Locked_Logic2.goron_bracelet || Locked_Logic2.can_use_dins);
	Locked_Logic2.can_enter_shadow = Locked_Logic2.nocturne && Locked_Logic2.can_use_dins && (Locked_Logic2.hover_boots || Locked_Logic2.hookshot) ;//&& Locked_Logic2.can_see;
	Locked_Logic2.can_cross_shadow_gap= Locked_Logic2.can_enter_shadow && Locked_Logic2.hover_boots;
	Locked_Logic2.can_bomb_shadow_wall = Locked_Logic2.can_cross_shadow_gap && Locked_Logic2.bomb_bag;
	Locked_Logic2.can_pass_shadow_hookshot_door = Locked_Logic2.can_bomb_shadow_wall && Locked_Logic2.hookshot;
	Locked_Logic2.can_ride_shadow_boat = Locked_Logic2.can_pass_shadow_hookshot_door && Locked_Logic2.lullaby;
	Locked_Logic2.can_beat_shadow_boss = Locked_Logic2.can_ride_shadow_boat && (Locked_Logic2.bow || Locked_Logic2.longshot);
	Locked_Logic2.can_stop_link_the_goron = Locked_Logic2.bomb_bag || Locked_Logic2.bow || Locked_Logic2.goron_bracelet;
	Locked_Logic2.ice_access = Locked_Logic2.rutos_letter && Locked_Logic2.lullaby && Locked_Logic2.child_can_enter_river;
	Locked_Logic2.reverse_crater = (Locked_Logic2.hover_boots || Locked_Logic2.hookshot || Locked_Logic2.child_can_enter_river) && Locked_Logic2.bolero;
	Locked_Logic2.can_enter_fire_temple = (Locked_Logic2.crater_by_city && (Locked_Logic2.hookshot || Locked_Logic2.hover_boots)) || Locked_Logic2.bolero
	Locked_Logic2.crater_by_city = Locked_Logic2.bow || Locked_Logic2.bomb_bag || Locked_Logic2.goron_bracelet || Locked_Logic2.reverse_crater ||(Locked_Logic2.hammer && Locked_Logic2.hover_boots) || (Locked_Logic2.longshot && Locked_Logic2.goron_tunic && Locked_Logic2.hammer);
	Locked_Logic2.crater_top = Locked_Logic2.crater_by_city || Locked_Logic2.hammer;
	Locked_Logic2.can_enter_adult_spirit = Locked_Logic2.can_enter_colossus && Locked_Logic2.silver_gauntlets;
	Locked_Logic2.can_enter_ganons = Locked_Logic2.forest_medallion && Locked_Logic2.fire_medallion && Locked_Logic2.water_medallion && Locked_Logic2.gen1 && Locked_Logic2.gen2 && Locked_Logic2.gen3;
	Locked_Logic2.can_climb_fire_temple = Locked_Logic2.can_enter_fire_temple && Locked_Logic2.fire_keys >=3 && Locked_Logic2.can_wear_goron_tunic && Locked_Logic2.goron_bracelet && (Locked_Logic2.bow || Locked_Logic2.hookshot || Locked_Logic2.bomb_bag);
	Locked_Logic2.can_enter_water = Locked_Logic2.hookshot && Locked_Logic2.iron_boots;
	Locked_Logic2.middle_water = Locked_Logic2.can_enter_water && Locked_Logic2.lullaby && (Locked_Logic2.bow || Locked_Logic2.can_use_dins);
	Locked_Logic2.projectile_both = Locked_Logic2.bomb_bag || ((Locked_Logic2.slingshot || Locked_Logic2.boomerang) && (Locked_Logic2.bow || Locked_Logic2.hookshot));
	Locked_Logic2.projectile_child = Locked_Logic2.bomb_bag || Locked_Logic2.slingshot || Locked_Logic2.boomerang;
	Locked_Logic2.projectile_adult = Locked_Logic2.bomb_bag || Locked_Logic2.bow || Locked_Logic2.hookshot;
	Locked_Logic2.can_wear_goron_tunic = Locked_Logic2.goron_tunic || (Locked_Logic2.adults_wallet && (Locked_Logic2.bomb_bag || Locked_Logic2.goron_bracelet || Locked_Logic2.bow));
	Locked_Logic2.can_wear_zora_tunic = Locked_Logic2.zora_tunic || (Locked_Logic2.giants_wallet && (Locked_Logic2.lullaby && Locked_Logic2.bottle));
	
	var max = 0;
	for (h = 1; h<3; h++) {
		max = 0;
		Locked_Logic2.current_forest_keys = Locked_Logic2.forced_forest_keys;
		for (i = 1; i <= 14; i++) {
			str = "forest" + i;
			if (Check[str] == "small_key" && !Location_Locked_Logic2[str]) {Locked_Logic2.current_forest_keys -=1;}
			if ((Check[str] == "small_key" || Check[str] == "unknown") && Location_Locked_Logic2[str]) {max += 1;}
		}
		Location_Locked_Logic2.forest1 = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot;
		Location_Locked_Logic2.forest2 = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot;
		Location_Locked_Logic2.forest3 = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot && (Locked_Logic2.song_of_time || Locked_Logic2.bow || (Locked_Logic2.hover_boots && Locked_Logic2.forest_keys>=1));
		Location_Locked_Logic2.forest4 = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot && (Locked_Logic2.song_of_time || (Locked_Logic2.hover_boots && Locked_Logic2.forest_keys>=1) || (Locked_Logic2.bow/* && (Locked_Logic2.iron_boots || Locked_Logic2.golden_scale || Locked_Logic2.longshot)*/));
		Location_Locked_Logic2.forest5 = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot && (Locked_Logic2.song_of_time || (Locked_Logic2.hover_boots && Locked_Logic2.forest_keys>=1) || (Locked_Logic2.bow/* && (Locked_Logic2.iron_boots || Locked_Logic2.golden_scale || Locked_Logic2.longshot)*/));
		Location_Locked_Logic2.forest6 = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot && Locked_Logic2.forest_keys >= 1 && Locked_Logic2.bow && Locked_Logic2.goron_bracelet;
		Location_Locked_Logic2.forest7 = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot && Locked_Logic2.forest_keys >= 2 && Locked_Logic2.bow && Locked_Logic2.goron_bracelet;
		Location_Locked_Logic2.forest8 = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot && ((Locked_Logic2.bow && Locked_Logic2.goron_bracelet && Locked_Logic2.forest_keys >=2) || (Locked_Logic2.hover_boots && Locked_Logic2.forest_keys >=1));
		Location_Locked_Logic2.forest9 = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot && Locked_Logic2.goron_bracelet && Locked_Logic2.bow && Locked_Logic2.forest_keys>=3;
		Location_Locked_Logic2.forest10 = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot && Locked_Logic2.goron_bracelet && Locked_Logic2.forest_keys>=3;
		Location_Locked_Logic2.forest11 = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot && Locked_Logic2.goron_bracelet && Locked_Logic2.bow && Locked_Logic2.forest_keys>=3;
		Location_Locked_Logic2.forest12 = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot && Locked_Logic2.goron_bracelet && (Locked_Logic2.bow || Locked_Logic2.can_use_dins) && Locked_Logic2.forest_keys>=5;
		Location_Locked_Logic2.forest13 = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot && Locked_Logic2.goron_bracelet && Locked_Logic2.bow && Locked_Logic2.forest_keys>=5;
		Location_Locked_Logic2.forest14 = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot && Locked_Logic2.goron_bracelet && Locked_Logic2.bow && Locked_Logic2.forest_keys>=5 && Locked_Logic2.forest_boss_key;		
	}
	Locked_Logic2.forest_keys = Math.min(Locked_Logic2.current_forest_keys, max);

	for (h = 1; h<3; h++) {
		max = 0;
		Locked_Logic2.current_fire_keys = Locked_Logic2.forced_fire_keys;
		for (i = 1; i <= 15; i++) {
			str = "fire" + i;
			if (Check[str] == "small_key" && !Location_Locked_Logic2[str]) {Locked_Logic2.current_fire_keys -=1;}
			if ((Check[str] == "small_key" || Check[str] == "unknown") && Location_Locked_Logic2[str]) {max += 1;}
		}
		Location_Locked_Logic2.fire1 = Locked_Logic2.can_enter_fire_temple;
		Location_Locked_Logic2.fire2 = Locked_Logic2.can_enter_fire_temple && Locked_Logic2.hammer;
		Location_Locked_Logic2.fire3 = Locked_Logic2.can_enter_fire_temple && Locked_Logic2.hammer;
		Location_Locked_Logic2.fire4 = Locked_Logic2.can_enter_fire_temple && Locked_Logic2.fire_keys >=1;
		Location_Locked_Logic2.fire5 = Locked_Logic2.can_enter_fire_temple && Locked_Logic2.fire_keys >=1 && Locked_Logic2.bomb_bag;
		Location_Locked_Logic2.fire6 = Locked_Logic2.can_enter_fire_temple && Locked_Logic2.fire_boss_key && Locked_Logic2.hammer && Locked_Logic2.can_wear_goron_tunic && (Locked_Logic2.hover_boots || (Locked_Logic2.fire_keys >=7 && (Locked_Logic2.song_of_time || Locked_Logic2.bomb_bag)));
		Location_Locked_Logic2.fire7 = Locked_Logic2.can_climb_fire_temple;
		Location_Locked_Logic2.fire8 = Locked_Logic2.can_climb_fire_temple;
		Location_Locked_Logic2.fire9 = Locked_Logic2.can_climb_fire_temple && ((Locked_Logic2.fire_keys >= 4 && Locked_Logic2.bow) || Locked_Logic2.fire_keys>=5);
		Location_Locked_Logic2.fire10 = Locked_Logic2.can_climb_fire_temple && Locked_Logic2.fire_keys>=5;
		Location_Locked_Logic2.fire11 = Locked_Logic2.can_climb_fire_temple && Locked_Logic2.fire_keys>=5 && Locked_Logic2.bomb_bag;
		Location_Locked_Logic2.fire12 = Locked_Logic2.can_climb_fire_temple && Locked_Logic2.fire_keys>=5 && Locked_Logic2.hookshot;
		Location_Locked_Logic2.fire13 = Locked_Logic2.can_climb_fire_temple && Locked_Logic2.fire_keys>=6;
		Location_Locked_Logic2.fire14 = Locked_Logic2.can_climb_fire_temple && (Locked_Logic2.fire_keys>=7 || (Locked_Logic2.fire_keys>=6 && Locked_Logic2.hover_boots)) && Locked_Logic2.hammer && (Locked_Logic2.song_of_time || Locked_Logic2.bomb_bag);
		Location_Locked_Logic2.fire15 = Locked_Logic2.can_climb_fire_temple && (Locked_Logic2.fire_keys>=7 || (Locked_Logic2.fire_keys >= 6 && Locked_Logic2.hover_boots)) && Locked_Logic2.bomb_bag;
	}
	Locked_Logic2.fire_keys = Math.min(Locked_Logic2.current_fire_keys, max);

	for (h = 1; h<3; h++) {
		max = 0;
		Locked_Logic2.current_water_keys = Locked_Logic2.forced_water_keys;
		for (i = 1; i <= 11; i++) {
			str = "water" + i;
			if (Check[str] == "small_key" && !Location_Locked_Logic2[str]) {Locked_Logic2.current_water_keys -=1;}
			if ((Check[str] == "small_key" || Check[str] == "unknown") && Location_Locked_Logic2[str]) {max += 1;}
		}
		Location_Locked_Logic2.water1 = Locked_Logic2.can_enter_water;
		Location_Locked_Logic2.water2 = Locked_Logic2.can_enter_water;
		Location_Locked_Logic2.water3 = Locked_Logic2.middle_water && Locked_Logic2.bomb_bag;
		Location_Locked_Logic2.water4 = Locked_Logic2.can_enter_water && Locked_Logic2.lullaby && (Locked_Logic2.bow || Locked_Logic2.can_use_dins);
		Location_Locked_Logic2.water5 = Locked_Logic2.can_enter_water && Locked_Logic2.lullaby && Locked_Logic2.bow && Locked_Logic2.goron_bracelet && (Locked_Logic2.hover_boots || Locked_Logic2.longshot);
		Location_Locked_Logic2.water6 = Locked_Logic2.middle_water && Locked_Logic2.can_wear_zora_tunic;
		Location_Locked_Logic2.water7 = Locked_Logic2.water_keys >= 5 && Locked_Logic2.lullaby;
		Location_Locked_Logic2.water8 = Locked_Logic2.water_keys >= 5 && Locked_Logic2.lullaby && Locked_Logic2.song_of_time && Locked_Logic2.bow;
		Location_Locked_Logic2.water9 = Locked_Logic2.can_enter_water && Locked_Logic2.lullaby && ((Locked_Logic2.water_keys >= 5 && Locked_Logic2.song_of_time && Locked_Logic2.bow) || Locked_Logic2.goron_bracelet);
		Location_Locked_Logic2.water10 = Locked_Logic2.can_enter_water && Locked_Logic2.lullaby && Locked_Logic2.longshot && Locked_Logic2.water_keys >= 5 && ((Locked_Logic2.bomb_bag && Locked_Logic2.goron_bracelet) || Locked_Logic2.hover_boots);
		Location_Locked_Logic2.water11 = Locked_Logic2.can_enter_water && Locked_Logic2.water_boss_key && Locked_Logic2.longshot ;
	}
	Locked_Logic2.water_keys = Math.min(Locked_Logic2.current_water_keys, max);
	for (h = 1; h<3; h++) {
		max = 0;
		Locked_Logic2.current_spirit_keys = Locked_Logic2.forced_spirit_keys;
		for (i = 1; i <= 20; i++) {
			str = "spirit" + i;
			if (Check[str] == "small_key" && !Location_Locked_Logic2[str]) {Locked_Logic2.current_spirit_keys -=1;}
			if ((Check[str] == "small_key" || Check[str] == "unknown") && Location_Locked_Logic2[str]) {max += 1;}
		}
		Location_Locked_Logic2.spirit1 = Locked_Logic2.requiem && (Locked_Logic2.slingshot || Locked_Logic2.boomerang);
		Location_Locked_Logic2.spirit2 = Locked_Logic2.requiem && (Locked_Logic2.slingshot || Locked_Logic2.boomerang);
		Location_Locked_Logic2.spirit3 = (Locked_Logic2.spirit_keys >=1 && Locked_Logic2.projectile_both);
		Location_Locked_Logic2.spirit4 = (Locked_Logic2.spirit_keys >=1 && Locked_Logic2.projectile_both);
		Location_Locked_Logic2.spirit5 = (Locked_Logic2.spirit_keys >=5 && Locked_Logic2.requiem && Locked_Logic2.bomb_bag) || (Locked_Logic2.spirit_keys >=3 && Locked_Logic2.silver_gauntlets && Locked_Logic2.can_use_fire) || (Locked_Logic2.bomb_bag && Locked_Logic2.spirit_keys >=1 && Locked_Logic2.can_use_fire);
		Location_Locked_Logic2.spirit6 = (Locked_Logic2.spirit_keys >=5 && Locked_Logic2.requiem && Locked_Logic2.bomb_bag) || (Locked_Logic2.spirit_keys >=3 && Locked_Logic2.silver_gauntlets && Locked_Logic2.can_use_fire) || (Locked_Logic2.bomb_bag && Locked_Logic2.spirit_keys >=1 && Locked_Logic2.can_use_fire);
		Location_Locked_Logic2.spirit7 = (Locked_Logic2.spirit_keys >=3 && Locked_Logic2.longshot && Locked_Logic2.bomb_bag) || Locked_Logic2.spirit_keys >= 5;
		Location_Locked_Logic2.spirit8 = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.hookshot && Locked_Logic2.lullaby;
		Location_Locked_Logic2.spirit9 = Locked_Logic2.can_enter_adult_spirit && (Locked_Logic2.bow || Locked_Logic2.hookshot || Locked_Logic2.bomb_bag);
		Location_Locked_Logic2.spirit10 = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=3;
		Location_Locked_Logic2.spirit11 = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=3;
		Location_Locked_Logic2.spirit12 = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=3 && Locked_Logic2.lullaby;
		Location_Locked_Logic2.spirit13 = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=3 && Locked_Logic2.lullaby && (Locked_Logic2.hookshot || Locked_Logic2.hover_boots);
		Location_Locked_Logic2.spirit14 = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=4 && Locked_Logic2.bomb_bag && Locked_Logic2.mirror_shield;
		Location_Locked_Logic2.spirit15 = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=4 && Locked_Logic2.bomb_bag ;//&& Locked_Logic2.can_see;
		Location_Locked_Logic2.spirit16 = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=4 && Locked_Logic2.bomb_bag ;//&& Locked_Logic2.can_see;
		Location_Locked_Logic2.spirit17 = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=4 && Locked_Logic2.bomb_bag;
		Location_Locked_Logic2.spirit18 = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=5 && Locked_Logic2.bow && Locked_Logic2.lullaby && Locked_Logic2.hookshot;
		Location_Locked_Logic2.spirit19 = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=5 && Locked_Logic2.mirror_shield;
		Location_Locked_Logic2.spirit20 = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >=5 && Locked_Logic2.mirror_shield && Locked_Logic2.bomb_bag && Locked_Logic2.spirit_boss_key && Locked_Logic2.hookshot;
	}
	Locked_Logic2.spirit_keys = Math.min(Locked_Logic2.current_spirit_keys, max);
	for (h = 1; h<3; h++) {
		max = 0;
		Locked_Logic2.current_shadow_keys = Locked_Logic2.forced_shadow_keys;
		for (i = 1; i <= 18; i++) {
			str = "shadow" + i;
			if (Check[str] == "small_key" && !Location_Locked_Logic2[str]) {Locked_Logic2.current_shadow_keys -=1;}
			if ((Check[str] == "small_key" || Check[str] == "unknown") && Location_Locked_Logic2[str]) {max += 1;}
		}
		Location_Locked_Logic2.shadow1 = Locked_Logic2.can_enter_shadow;
		Location_Locked_Logic2.shadow2 = Locked_Logic2.can_enter_shadow;
		Location_Locked_Logic2.shadow3 = Locked_Logic2.can_cross_shadow_gap;
		Location_Locked_Logic2.shadow4 = Locked_Logic2.can_cross_shadow_gap;
		Location_Locked_Logic2.shadow5 = Locked_Logic2.can_bomb_shadow_wall;
		Location_Locked_Logic2.shadow6 = Locked_Logic2.can_bomb_shadow_wall;
		Location_Locked_Logic2.shadow7 = Locked_Logic2.can_bomb_shadow_wall;
		Location_Locked_Logic2.shadow8 = Locked_Logic2.can_bomb_shadow_wall && Locked_Logic2.goron_bracelet;
		Location_Locked_Logic2.shadow9 = Locked_Logic2.can_bomb_shadow_wall && Locked_Logic2.goron_bracelet;
		Location_Locked_Logic2.shadow10 = Locked_Logic2.can_bomb_shadow_wall && Locked_Logic2.shadow_keys >=2;
		Location_Locked_Logic2.shadow11 = Locked_Logic2.can_bomb_shadow_wall && Locked_Logic2.hookshot && Locked_Logic2.shadow_keys >=2;
		Location_Locked_Logic2.shadow12 = Locked_Logic2.can_pass_shadow_hookshot_door && Locked_Logic2.shadow_keys >=3;
		Location_Locked_Logic2.shadow13 = Locked_Logic2.can_pass_shadow_hookshot_door && Locked_Logic2.shadow_keys >=3;
		Location_Locked_Logic2.shadow14 = Locked_Logic2.can_pass_shadow_hookshot_door && Locked_Logic2.shadow_keys >=3;
		Location_Locked_Logic2.shadow15 = Locked_Logic2.can_ride_shadow_boat && Locked_Logic2.shadow_keys >=4;
		Location_Locked_Logic2.shadow16 = Locked_Logic2.can_ride_shadow_boat && Locked_Logic2.shadow_keys >=4;
		Location_Locked_Logic2.shadow17 = Locked_Logic2.can_ride_shadow_boat && Locked_Logic2.shadow_keys >=4;
		Location_Locked_Logic2.shadow18 = Locked_Logic2.can_beat_shadow_boss && Locked_Logic2.shadow_keys >=5;
	}
	Locked_Logic2.shadow_keys = Math.min(Locked_Logic2.current_shadow_keys, max);
	max = 0;
	Locked_Logic2.current_ganons_keys = Locked_Logic2.forced_ganons_keys;
	for (i = 1; i <= 16; i++) {
		str = "ganons" + i;
		if (Check[str] == "small_key" && !Location_Locked_Logic2[str]) {Locked_Logic2.current_ganons_keys -=1;}
		if ((Check[str] == "small_key" || Check[str] == "unknown") && Location_Locked_Logic2[str]) {max += 1;}
	}
	Locked_Logic2.ganons_keys = Math.min(Locked_Logic2.current_ganons_keys, max);
	for (h = 1; h <= 3; h++) {
		max = 0;
		Locked_Logic2.current_gtg_keys = Locked_Logic2.forced_gtg_keys;
		for (i = 1; i <= 22; i++) {
			str = "gtg" + i;
			if (Check[str] == "small_key" && !Location_Locked_Logic2[str]) {Locked_Logic2.current_gtg_keys -=1;}
			if ((Check[str] == "small_key" || Check[str] == "unknown") && Location_Locked_Logic2[str]) {max += 1;}
		}
		Location_Locked_Logic2.gtg1 = Locked_Logic2.can_save_carpenters && Locked_Logic2.bow;
		Location_Locked_Logic2.gtg2 = Locked_Logic2.can_save_carpenters && Locked_Logic2.bow;
		Location_Locked_Logic2.gtg3 = Locked_Logic2.can_save_carpenters;
		Location_Locked_Logic2.gtg4 = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot;
		Location_Locked_Logic2.gtg5 = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot && Locked_Logic2.silver_gauntlets ;//&& Locked_Logic2.can_see ;
		Location_Locked_Logic2.gtg6 = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot && Locked_Logic2.silver_gauntlets ;//&& Locked_Logic2.can_see ;
		Location_Locked_Logic2.gtg7 = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot && Locked_Logic2.silver_gauntlets ;//&& Locked_Logic2.can_see ;
		Location_Locked_Logic2.gtg8 = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot && Locked_Logic2.silver_gauntlets ;//&& Locked_Logic2.can_see ;
		Location_Locked_Logic2.gtg9 = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot && Locked_Logic2.bow;  //((Locked_Logic2.bomb_bag || Locked_Logic2.gtg_keys == 9) && Locked_Logic2.hammer));
		Location_Locked_Logic2.gtg10 = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot && Locked_Logic2.bow ;//&& Locked_Logic2.can_see;
		Location_Locked_Logic2.gtg12 = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot/*&& Locked_Logic2.can_see*/;
		Location_Locked_Logic2.gtg11 = Locked_Logic2.can_save_carpenters && Locked_Logic2.hookshot && Locked_Logic2.hammer;// && (Locked_Logic2.can_see || (Locked_Logic2.bomb_bag || Locked_Logic2.gtg_keys == 9)) ;
		Location_Locked_Logic2.gtg13 = Locked_Logic2.can_save_carpenters && (Locked_Logic2.gtg_keys >= 9 || (Locked_Logic2.bomb_bag && Locked_Logic2.song_of_time) || (Locked_Logic2.hookshot /*&& Locked_Logic2.can_see*/ && Locked_Logic2.song_of_time));
		Location_Locked_Logic2.gtg14 = Locked_Logic2.can_save_carpenters && (Locked_Logic2.gtg_keys >= 9 || (Locked_Logic2.bomb_bag && Locked_Logic2.song_of_time) || (Locked_Logic2.hookshot /*&& Locked_Logic2.can_see*/ && Locked_Logic2.song_of_time));
		Location_Locked_Logic2.gtg15 = Locked_Logic2.can_save_carpenters && (Locked_Logic2.gtg_keys >= 9 || (Locked_Logic2.bomb_bag && Locked_Logic2.song_of_time) || (Locked_Logic2.hookshot /*&& Locked_Logic2.can_see*/ && Locked_Logic2.song_of_time));
		Location_Locked_Logic2.gtg16 = Locked_Logic2.can_save_carpenters && Locked_Logic2.bomb_bag;
		Location_Locked_Logic2.gtg17 = Locked_Logic2.can_save_carpenters && Locked_Logic2.gtg_keys >= 3 ;//&& Locked_Logic2.can_see;
		Location_Locked_Logic2.gtg18 = Locked_Logic2.can_save_carpenters && Locked_Logic2.gtg_keys >= 4;
		Location_Locked_Logic2.gtg19 = Locked_Logic2.can_save_carpenters && Locked_Logic2.gtg_keys >= 6;
		Location_Locked_Logic2.gtg20 = Locked_Logic2.can_save_carpenters && Locked_Logic2.gtg_keys >= 7;
		Location_Locked_Logic2.gtg21 = Locked_Logic2.can_save_carpenters && Locked_Logic2.gtg_keys >= 9;
		Location_Locked_Logic2.gtg22 = Locked_Logic2.can_save_carpenters && Locked_Logic2.iron_boots && Locked_Logic2.song_of_time && Locked_Logic2.hookshot /*&& Locked_Logic2.can_see*/;
	}
	Locked_Logic2.gtg_keys = Math.min(Locked_Logic2.current_gtg_keys, max);
	for (h = 1; h <= 3; h++) {
		max = 0;
		Locked_Logic2.current_well_keys = Locked_Logic2.forced_well_keys;
		for (i = 1; i <= 14; i++) {
			str = "well" + i;
			if (Check[str] == "small_key" && !Location_Locked_Logic2[str]) {Locked_Logic2.current_well_keys -=1;}
			if ((Check[str] == "small_key" || Check[str] == "unknown") && Location_Locked_Logic2[str]) {max += 1;}
		}
		Location_Locked_Logic2.well1 = Locked_Logic2.song_of_storms ;//&& Locked_Logic2.can_see;
		Location_Locked_Logic2.well5 = Locked_Logic2.song_of_storms ;//&& Locked_Logic2.can_see;
		Location_Locked_Logic2.well2 = Locked_Logic2.song_of_storms && Locked_Logic2.bomb_bag;
		Location_Locked_Logic2.well3 = Locked_Logic2.song_of_storms && Locked_Logic2.lullaby;
		Location_Locked_Logic2.well4 = Locked_Logic2.song_of_storms;
		Location_Locked_Logic2.well6 = Locked_Logic2.song_of_storms ;//&& Locked_Logic2.can_see;
		Location_Locked_Logic2.well11 = Locked_Logic2.song_of_storms ;//&& Locked_Logic2.can_see;
		Location_Locked_Logic2.well7 = Locked_Logic2.song_of_storms && Locked_Logic2.bomb_bag;
		Location_Locked_Logic2.well10 = Locked_Logic2.song_of_storms && Locked_Logic2.lullaby;
		Location_Locked_Logic2.well8 = Locked_Logic2.song_of_storms && Locked_Logic2.lullaby ;//&& Locked_Logic2.kokiri_sword;
		Location_Locked_Logic2.well9 = Locked_Logic2.song_of_storms && Locked_Logic2.lullaby ;//&& Locked_Logic2.can_see ;
		Location_Locked_Logic2.well12 = Locked_Logic2.song_of_storms && Locked_Logic2.well_keys >= 3 ;//&& Locked_Logic2.can_see ;
		Location_Locked_Logic2.well13 = Locked_Logic2.song_of_storms && Locked_Logic2.well_keys >= 3 ;//&& Locked_Logic2.can_see ;
		Location_Locked_Logic2.well14 = Locked_Logic2.song_of_storms && (Locked_Logic2.bomb_bag || (((/*Locked_Logic2.can_see &&*/ Locked_Logic2.well_keys >= 3) || Locked_Logic2.can_use_dins) && Locked_Logic2.goron_bracelet));
	}
	Locked_Logic2.well_keys = Math.min(Locked_Logic2.current_well_keys, max);
	
	if (!Locked_Logic2.forest_boss_key) {
		var bk = true;
		for (i = 1; i <= 13; i++) {
			str = "forest" + i;
			if (!Location_Locked_Logic2[str] && Check[str] == "boss_key") {
				bk = false;
				break;
			}
		}
		Locked_Logic2.forest_boss_key = bk;
	}
	
	if (!Locked_Logic2.fire_boss_key) {
		var bk = true;
		for (i = 1; i <= 15; i++) {
			if (i == 6) {
				continue;
			}
			str = "fire" + i;
			if (!Location_Locked_Logic2[str] && Check[str] == "boss_key") {
				bk = false;
				break;
			}
		}
		Locked_Logic2.fire_boss_key = bk;
	}
	if (!Locked_Logic2.water_boss_key) {
		var bk = true;
		for (i = 1; i <= 10; i++) {
			str = "water" + i;
			if (!Location_Locked_Logic2[str] && Check[str] == "boss_key") {
				bk = false;
				break;
			}
		}
		Locked_Logic2.water_boss_key = bk;
	}
	if (!Locked_Logic2.spirit_boss_key) {
		var bk = true;
		for (i = 1; i <= 19; i++) {
			str = "spirit" + i;
			if (!Location_Locked_Logic2[str] && Check[str] == "boss_key") {
				bk = false;
				break;
			}
		}
		Locked_Logic2.spirit_boss_key = bk;
	}
	if (!Locked_Logic2.shadow_boss_key) {
		var bk = true;
		for (i = 1; i <= 17; i++) {
			str = "shadow" + i;
			if (!Location_Locked_Logic2[str] && Check[str] == "boss_key") {
				bk = false;
				break;
			}
		}
		Locked_Logic2.shadow_boss_key = bk;
	}
/*	Locked_Logic2.forest_boss_key = Locked_Logic2.forced_forest_boss_key;
	Locked_Logic2.fire_boss_key = Locked_Logic2.forced_fire_boss_key;
	Locked_Logic2.water_boss_key = Locked_Logic2.forced_water_boss_key;
	Locked_Logic2.spirit_boss_key = Locked_Logic2.forced_spirit_boss_key;
	Locked_Logic2.shadow_boss_key = Locked_Logic2.forced_shadow_boss_key; */
	if(Game.forest_boss_key == true) {Locked_Logic2.forest_boss_key = Location_Locked_Logic2[Location.forest_boss_key]; }
	if(Game.fire_boss_key == true) {Locked_Logic2.fire_boss_key = Location_Locked_Logic2[Location.fire_boss_key]; }
	if(Game.water_boss_key == true) {Locked_Logic2.water_boss_key = Location_Locked_Logic2[Location.water_boss_key]; }
	if(Game.spirit_boss_key == true) {Locked_Logic2.spirit_boss_key = Location_Locked_Logic2[Location.spirit_boss_key]; }
	if(Game.shadow_boss_key == true) {Locked_Logic2.shadow_boss_key = Location_Locked_Logic2[Location.shadow_boss_key]; }
	Locked_Logic2.forest_medallion = true;
	Locked_Logic2.fire_medallion = true;
	Locked_Logic2.water_medallion = true;
	Locked_Logic2.gen1 = true;
	Locked_Logic2.gen2 = true;
	Locked_Logic2.gen3 = true;
	
	if(Logic.forest_medallion_location == "deku") {if (document.getElementById("deku_queen_gohma") == null) {Game.forest_medallion = true;} Locked_Logic2.forest_medallion = Location_Locked_Logic2.deku_queen_gohma;}
	if(Logic.forest_medallion_location == "dodongos") {if (document.getElementById("dodongos_king_dodongo") == null) {Game.forest_medallion = true;} Locked_Logic2.forest_medallion = Location_Locked_Logic2.dodongos_king_dodongo;}
	if(Logic.forest_medallion_location == "jabu") {if (document.getElementById("jabu_barinade") == null) {Game.forest_medallion = true;} Locked_Logic2.forest_medallion = Location_Locked_Logic2.jabu_barinade;}
	if(Logic.forest_medallion_location == "forest") {if (document.getElementById("forest14") == null) {Game.forest_medallion = true;} Locked_Logic2.forest_medallion = Location_Locked_Logic2.forest14;}
	if(Logic.forest_medallion_location == "fire") {if (document.getElementById("fire6") == null) {Game.forest_medallion = true;} Locked_Logic2.forest_medallion = Location_Locked_Logic2.fire6;}
	if(Logic.forest_medallion_location == "water") {if (document.getElementById("water11") == null) {Game.forest_medallion = true;} Locked_Logic2.forest_medallion = Location_Locked_Logic2.water11;}
	if(Logic.forest_medallion_location == "spirit") {if (document.getElementById("spirit20") == null) {Game.forest_medallion = true;} Locked_Logic2.forest_medallion = Location_Locked_Logic2.spirit20;}
	if(Logic.forest_medallion_location == "shadow") {if (document.getElementById("shadow18") == null) {Game.forest_medallion = true;} Locked_Logic2.forest_medallion = Location_Locked_Logic2.shadow18;}
	if(Logic.forest_medallion_location == "pocket") {Game.forest_medallion = true; Locked_Logic2.forest_medallion = true;}
	
	if(Logic.fire_medallion_location == "deku") {if (document.getElementById("deku_queen_gohma") == null) {Game.fire_medallion = true;} Locked_Logic2.fire_medallion = Location_Locked_Logic2.deku_queen_gohma;}
	if(Logic.fire_medallion_location == "dodongos") {if (document.getElementById("dodongos_king_dodongo") == null) {Game.fire_medallion = true;} Locked_Logic2.fire_medallion = Location_Locked_Logic2.dodongos_king_dodongo;}
	if(Logic.fire_medallion_location == "jabu") {if (document.getElementById("jabu_barinade") == null) {Game.fire_medallion = true;} Locked_Logic2.fire_medallion = Location_Locked_Logic2.jabu_barinade;}
	if(Logic.fire_medallion_location == "forest") {if (document.getElementById("forest14") == null) {Game.fire_medallion = true;} Locked_Logic2.fire_medallion = Location_Locked_Logic2.forest14;}
	if(Logic.fire_medallion_location == "fire") {if (document.getElementById("fire6") == null) {Game.fire_medallion = true;} Locked_Logic2.fire_medallion = Location_Locked_Logic2.fire6;}
	if(Logic.fire_medallion_location == "water") {if (document.getElementById("water11") == null) {Game.fire_medallion = true;} Locked_Logic2.fire_medallion = Location_Locked_Logic2.water11;}
	if(Logic.fire_medallion_location == "spirit") {if (document.getElementById("spirit20") == null) {Game.fire_medallion = true;} Locked_Logic2.fire_medallion = Location_Locked_Logic2.spirit20;}
	if(Logic.fire_medallion_location == "shadow") {if (document.getElementById("shadow18") == null) {Game.fire_medallion = true;} Locked_Logic2.fire_medallion = Location_Locked_Logic2.shadow18;}
	if(Logic.fire_medallion_location == "pocket") {Game.fire_medallion = true; Locked_Logic2.fire_medallion = true;}
	
	if(Logic.water_medallion_location == "deku") {if (document.getElementById("deku_queen_gohma") == null) {Game.water_medallion = true;} Locked_Logic2.water_medallion = Location_Locked_Logic2.deku_queen_gohma;}
	if(Logic.water_medallion_location == "dodongos") {if (document.getElementById("dodongos_king_dodongo") == null) {Game.water_medallion = true;} Locked_Logic2.water_medallion = Location_Locked_Logic2.dodongos_king_dodongo;}
	if(Logic.water_medallion_location == "jabu") {if (document.getElementById("jabu_barinade") == null) {Game.water_medallion = true;} Locked_Logic2.water_medallion = Location_Locked_Logic2.jabu_barinade;}
	if(Logic.water_medallion_location == "forest") {if (document.getElementById("forest14") == null) {Game.water_medallion = true;} Locked_Logic2.water_medallion = Location_Locked_Logic2.forest14;}
	if(Logic.water_medallion_location == "fire") {if (document.getElementById("fire6") == null) {Game.water_medallion = true;} Locked_Logic2.water_medallion = Location_Locked_Logic2.fire6;}
	if(Logic.water_medallion_location == "water") {if (document.getElementById("water11") == null) {Game.water_medallion = true;} Locked_Logic2.water_medallion = Location_Locked_Logic2.water11;}
	if(Logic.water_medallion_location == "spirit") {if (document.getElementById("spirit20") == null) {Game.water_medallion = true;} Locked_Logic2.water_medallion = Location_Locked_Logic2.spirit20;}
	if(Logic.water_medallion_location == "shadow") {if (document.getElementById("shadow18") == null) {Game.water_medallion = true;} Locked_Logic2.water_medallion = Location_Locked_Logic2.shadow18;}
	if(Logic.water_medallion_location == "pocket") {Game.water_medallion = true; Locked_Logic2.water_medallion = true;}

	Locked_Logic2.shadow_medallion = true;
	Locked_Logic2.spirit_medallion = true;
	for (var i = 1; i <=3; i++) {
		str = "generic" + i;
		str2 = "gen" + i;
		if(Logic[str] == "deku") {if (document.getElementById("deku_queen_gohma") == null) {Game[str2] = true;} Locked_Logic2[str2] = Location_Locked_Logic2.deku_queen_gohma; if(document.getElementById("text_deku").style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = Location_Locked_Logic2.deku_queen_gohma;} if(document.getElementById("text_deku").style.color=="rgb(255, 165, 0)") {Locked_Logic2.spirit_medallion = Location_Locked_Logic2.deku_queen_gohma;}}
		if(Logic[str] == "dodongos") {if (document.getElementById("dodongos_king_dodongo") == null) {Game[str2] = true;} Locked_Logic2[str2] = Location_Locked_Logic2.dodongos_king_dodongo; if(document.getElementById("text_dodongos").style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = Location_Locked_Logic2.dodongos_king_dodongo;} if(document.getElementById("text_dodongos").style.color=="rgb(255, 165, 0)") {Locked_Logic2.spirit_medallion = Location_Locked_Logic2.dodongos_king_dodongo;}}
		if(Logic[str] == "jabu") {if (document.getElementById("jabu_barinade") == null) {Game[str2] = true;} Locked_Logic2[str2] = Location_Locked_Logic2.jabu_barinade; if(document.getElementById("text_jabu").style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = Location_Locked_Logic2.jabu_barinade;} if(document.getElementById("text_jabu").style.color=="rgb(255, 165, 0)") {Locked_Logic2.spirit_medallion = Location_Locked_Logic2.jabu_barinade;}}
		if(Logic[str] == "forest") {if (document.getElementById("forest14") == null) {Game[str2] = true;} Locked_Logic2[str2] = Location_Locked_Logic2.forest14; if(document.getElementById("text_forest").style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = Location_Locked_Logic2.forest14;} if(document.getElementById("text_forest").style.color=="rgb(255, 165, 0)") {Location_Locked_Logic2.forest14;}}
		if(Logic[str] == "fire") {if (document.getElementById("fire6") == null) {Game[str2] = true;} Locked_Logic2[str2] = Location_Locked_Logic2.fire6; if(document.getElementById("text_fire").style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = Location_Locked_Logic2.fire6;} if(document.getElementById("text_fire").style.color=="rgb(255, 165, 0)") {Locked_Logic2.spirit_medallion = Location_Locked_Logic2.fire6;}}
		if(Logic[str] == "water") {if (document.getElementById("water11") == null) {Game[str2] = true;} Locked_Logic2[str2] = Location_Locked_Logic2.water11; if(document.getElementById("text_water").style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = Location_Locked_Logic2.water11;} if(document.getElementById("text_water").style.color=="rgb(255, 165, 0)") {Locked_Logic2.spirit_medallion = Location_Locked_Logic2.water11;}}
		if(Logic[str] == "spirit") {if (document.getElementById("spirit20") == null) {Game[str2] = true;} Locked_Logic2[str2] = Location_Locked_Logic2.spirit20; if(document.getElementById("text_spirit").style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = Location_Locked_Logic2.spirit20;} if(document.getElementById("text_spirit").style.color=="rgb(255, 165, 0)") {Locked_Logic2.spirit_medallion = Location_Locked_Logic2.spirit20;}}
		if(Logic[str] == "shadow") {if (document.getElementById("shadow18") == null) {Game[str2] = true;} Locked_Logic2[str2] = Location_Locked_Logic2.shadow18; if(document.getElementById("text_shadow").style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = Location_Locked_Logic2.shadow18;} if(document.getElementById("text_shadow").style.color=="rgb(255, 165, 0)") {Locked_Logic2.spirit_medallion = Location_Locked_Logic2.shadow18;}}
		if(Logic[str] == "pocket") {Game[str2] = true; Locked_Logic2[str2] = true; if(document.getElementById("text_pocket").style.color=="rgb(238, 130, 238)") {Locked_Logic2.shadow_medallion = true;} if(document.getElementById("text_pocket").style.color=="rgb(255, 165, 0)") {Locked_Logic2.spirit_medallion = true;}}
	}
	
	Locked_Logic2.kokiri_emerald = true;
	Locked_Logic2.goron_ruby = true;
	Locked_Logic2.zora_sapphire = true;
	if(Logic.emerald == "deku") {Locked_Logic2.kokiri_emerald = Location_Locked_Logic2.deku_queen_gohma;}
	if(Logic.emerald == "dodongos") {Locked_Logic2.kokiri_emerald = Location_Locked_Logic2.dodongos_king_dodongo;}
	if(Logic.emerald == "jabu") {Locked_Logic2.kokiri_emerald = Location_Locked_Logic2.jabu_barinade;}
	if(Logic.emerald == "forest") {Locked_Logic2.kokiri_emerald = Location_Locked_Logic2.forest14;}
	if(Logic.emerald == "fire") {Locked_Logic2.kokiri_emerald = Location_Locked_Logic2.fire6;}
	if(Logic.emerald == "water") {Locked_Logic2.kokiri_emerald = Location_Locked_Logic2.water11;}
	if(Logic.emerald == "spirit") {Locked_Logic2.kokiri_emerald = Location_Locked_Logic2.spirit20;}
	if(Logic.emerald == "shadow") {Locked_Logic2.kokiri_emerald = Location_Locked_Logic2.shadow18;}
	if(Logic.emerald == "pocket") {Locked_Logic2.kokiri_emerald = true;}
	
	if(Logic.ruby == "deku") {Locked_Logic2.goron_ruby = Location_Locked_Logic2.deku_queen_gohma;}
	if(Logic.ruby == "dodongos") {Locked_Logic2.goron_ruby = Location_Locked_Logic2.dodongos_king_dodongo;}
	if(Logic.ruby == "jabu") {Locked_Logic2.goron_ruby = Location_Locked_Logic2.jabu_barinade;}
	if(Logic.ruby == "forest") {Locked_Logic2.goron_ruby = Location_Locked_Logic2.forest14;}
	if(Logic.ruby == "fire") {Locked_Logic2.goron_ruby = Location_Locked_Logic2.fire6;}
	if(Logic.ruby == "water") {Locked_Logic2.goron_ruby = Location_Locked_Logic2.water11;}
	if(Logic.ruby == "spirit") {Locked_Logic2.goron_ruby = Location_Locked_Logic2.spirit20;}
	if(Logic.ruby == "shadow") {Locked_Logic2.goron_ruby = Location_Locked_Logic2.shadow18;}
	if(Logic.ruby == "pocket") {Locked_Logic2.goron_ruby = true;}
	
	if(Logic.sapphire == "deku") {Locked_Logic2.zora_sapphire = Location_Locked_Logic2.deku_queen_gohma;}
	if(Logic.sapphire == "dodongos") {Locked_Logic2.zora_sapphire = Location_Locked_Logic2.dodongos_king_dodongo;}
	if(Logic.sapphire == "jabu") {Locked_Logic2.zora_sapphire = Location_Locked_Logic2.jabu_barinade;}
	if(Logic.sapphire == "forest") {Locked_Logic2.zora_sapphire = Location_Locked_Logic2.forest14;}
	if(Logic.sapphire == "fire") {Locked_Logic2.zora_sapphire = Location_Locked_Logic2.fire6;}
	if(Logic.sapphire == "water") {Locked_Logic2.zora_sapphire = Location_Locked_Logic2.water11;}
	if(Logic.sapphire == "spirit") {Locked_Logic2.zora_sapphire = Location_Locked_Logic2.spirit20;}
	if(Logic.sapphire == "shadow") {Locked_Logic2.zora_sapphire = Location_Locked_Logic2.shadow18;}
	if(Logic.sapphire == "pocket") {Locked_Logic2.zora_sapphire = true;}

	
	Location_Locked_Logic2.mido_1 = true;
	Location_Locked_Logic2.mido_2 = true;
	Location_Locked_Logic2.mido_3 = true;
	Location_Locked_Logic2.mido_4 = true;
	Location_Locked_Logic2.kokiri_sword = true;
	Location_Locked_Logic2.kokiri_song_of_storms = Locked_Logic2.song_of_storms;
	Location_Locked_Logic2.talons_chickens = true;
	Location_Locked_Logic2.back_of_ranch = true;
	Location_Locked_Logic2.hyrule_forest_boulder = Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.hyrule_open_grotto = true;
	Location_Locked_Logic2.hyrule_hp_scrub = Locked_Logic2.can_blast_or_smash;;
	Location_Locked_Logic2.hyrule_boulder_of_destiny = Locked_Logic2.can_blast_or_smash;;
	Location_Locked_Logic2.hyrule_tektite_grotto = Locked_Logic2.can_blast_or_smash && (Locked_Logic2.golden_scale || Locked_Logic2.iron_boots);
	Location_Locked_Logic2.gerudovalley_box = true;
	Location_Locked_Logic2.gerudovalley_waterfall = true;
	Location_Locked_Logic2.gerudo_hammer = Locked_Logic2.fortress_access && Locked_Logic2.hammer;
	Location_Locked_Logic2.hylia_child_fishing = true;
	Location_Locked_Logic2.hylia_bottle = Locked_Logic2.silver_scale;
	Location_Locked_Logic2.hylia_adult_fishing = Locked_Logic2.hookshot || Locked_Logic2.child_can_enter_river;
	Location_Locked_Logic2.hylia_lab_top = Locked_Logic2.hookshot || Locked_Logic2.child_can_enter_river;
	Location_Locked_Logic2.hylia_lab_dive = Locked_Logic2.golden_scale;
	Location_Locked_Logic2.hylia_sun_shoot = Locked_Logic2.longshot && Locked_Logic2.bow;
	Location_Locked_Logic2.market_slingshot_game = true;
	Location_Locked_Logic2.richard = true;
	Location_Locked_Logic2.market_bowling_1 = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.market_bowling_2 = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.market_lens_game = Locked_Logic2.can_see;
	Location_Locked_Logic2.poes= (Locked_Logic2.bow && Locked_Logic2.eponas && Locked_Logic2.bottle) || Locked_Logic2.big_poe;
	Location_Locked_Logic2.dins_fairy = Locked_Logic2.bomb_bag && Locked_Logic2.lullaby;
	Location_Locked_Logic2.g_fairy = Locked_Logic2.golden_gauntlets && Locked_Logic2.lullaby;
	Location_Locked_Logic2.lacs = Locked_Logic2.shadow_medallion && Locked_Logic2.spirit_medallion;
	Location_Locked_Logic2.fountain_fairy = Locked_Logic2.ice_access && Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.ice_glacier_hp = Locked_Logic2.ice_access;
	Location_Locked_Logic2.ice_bottom_of_fountain = Locked_Logic2.ice_access && Locked_Logic2.iron_boots;
	Location_Locked_Logic2.ice_map = Locked_Logic2.ice_access;
	Location_Locked_Logic2.ice_compass = Locked_Logic2.ice_access;
	Location_Locked_Logic2.ice_hp = Locked_Logic2.ice_access;
	Location_Locked_Logic2.ice_irons = Locked_Logic2.ice_access;
	Location_Locked_Logic2.deku_lobby = true;
	Location_Locked_Logic2.deku_slingshot = true;
	Location_Locked_Logic2.deku_slingshot_room_side = true;
	Location_Locked_Logic2.deku_compass = true;
	Location_Locked_Logic2.deku_compass_room_side = true;
	Location_Locked_Logic2.deku_basement = true;
	Location_Locked_Logic2.deku_queen_gohma = Locked_Logic2.slingshot;
	Location_Locked_Logic2.ocarina_game = true;
	Location_Locked_Logic2.lost_woods_grotto = Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.lost_woods_scrub_grotto = Locked_Logic2.bomb_bag || (Locked_Logic2.sarias || Locked_Logic2.minuet) && Locked_Logic2.hammer;
	Location_Locked_Logic2.bridge_scrub = true;
	Location_Locked_Logic2.target = Locked_Logic2.slingshot;
	Location_Locked_Logic2.skull_kid = Locked_Logic2.sarias;
	Location_Locked_Logic2.theater = true;
	Location_Locked_Logic2.wolfos_grotto = Locked_Logic2.bomb_bag || (Locked_Logic2.sarias || Locked_Logic2.minuet) && Locked_Logic2.hammer;
	Location_Locked_Logic2.rolling_goron = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.goron_dance = Locked_Logic2.lullaby && Locked_Logic2.sarias;
	Location_Locked_Logic2.goron_pot = (Locked_Logic2.bomb_bag || Locked_Logic2.goron_bracelet) && (Locked_Logic2.lullaby || Locked_Logic2.can_use_dins);
	Location_Locked_Logic2.goron_maze_1 = Locked_Logic2.can_blast_or_smash || Locked_Logic2.silver_gauntlets;
	Location_Locked_Logic2.goron_maze_2 = Locked_Logic2.can_blast_or_smash || Locked_Logic2.silver_gauntlets;
	Location_Locked_Logic2.goron_maze_3 = Locked_Logic2.hammer || Locked_Logic2.silver_gauntlets;
	Location_Locked_Logic2.goron_link = Locked_Logic2.can_stop_link_the_goron;
	Location_Locked_Logic2.dodongos_map = Locked_Logic2.can_enter_dodongos;
	Location_Locked_Logic2.dodongos_compass = Locked_Logic2.can_enter_dodongos;
	Location_Locked_Logic2.dodongos_bomb_flower_platform = Locked_Logic2.dodongos_climb;
	Location_Locked_Logic2.dodongos_bomb_bag = Locked_Logic2.dodongos_climb;
	Location_Locked_Logic2.dodongos_end_of_bridge = Locked_Logic2.dodongos_climb && Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.dodongos_above_king = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.dodongos_king_dodongo = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.trail_bombable = Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.trail_dodongos_top = true;
	Location_Locked_Logic2.trail_song_of_storms = Locked_Logic2.song_of_storms;
	Location_Locked_Logic2.crater_peak_fairy = Locked_Logic2.can_blast_or_smash && Locked_Logic2.lullaby;
	Location_Locked_Logic2.trade_quest = Location_Locked_Logic2.trade_quest = (((Locked_Logic2.ice_access || ((Locked_Logic2.giants_wallet || Locked_Logic2.can_enter_ganons) && Locked_Logic2.lullaby && Locked_Logic2.bottle)) && Locked_Logic2.prescription) || Locked_Logic2.claim_check) && Locked_Logic2.crater_top;
	Location_Locked_Logic2.crater_bean = (Locked_Logic2.bolero && Locked_Logic2.child_can_enter_river) || (Locked_Logic2.hover_boots && Locked_Logic2.crater_by_city);
	Location_Locked_Logic2.crater_hammer_fairy = Locked_Logic2.crater_by_city && Locked_Logic2.hammer && Locked_Logic2.lullaby;
	Location_Locked_Logic2.crater_grotto = Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.crater_nook_hp = Locked_Logic2.crater_top;
	Location_Locked_Logic2.man_on_roof = true;//Locked_Logic2.hookshot;
	Location_Locked_Logic2.kakariko_grotto = true;
	Location_Locked_Logic2.windmill = true;//Locked_Logic2.boomerang || Locked_Logic2.song_of_time;
	Location_Locked_Logic2.anju = true;
	Location_Locked_Logic2.cow_house = true;
	Location_Locked_Logic2.archery_game = Locked_Logic2.bow;
	Location_Locked_Logic2.redead_grotto = Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.anjus_chickens = true;
	Location_Locked_Logic2.tokens_10 = Locked_Logic2.gold_skulltulas >= 10;
	Location_Locked_Logic2.tokens_20 = Locked_Logic2.gold_skulltulas >= 20;
	Location_Locked_Logic2.tokens_30 = Locked_Logic2.gold_skulltulas >= 30;
	Location_Locked_Logic2.tokens_40 = Locked_Logic2.gold_skulltulas >= 40;
	Location_Locked_Logic2.tokens_50 = Locked_Logic2.gold_skulltulas >= 50;
	Location_Locked_Logic2.shield_grave = true;
	Location_Locked_Logic2.gravedigging_tour = true;
	Location_Locked_Logic2.suns_grave = Locked_Logic2.suns_song;
	Location_Locked_Logic2.fire_grave = Locked_Logic2.lullaby && Locked_Logic2.can_use_fire;
	Location_Locked_Logic2.graveyard_box = Locked_Logic2.child_can_enter_river || Locked_Logic2.longshot;
	Location_Locked_Logic2.race_1 = true;
	Location_Locked_Logic2.race_2 = true;
	Location_Locked_Logic2.river_pillar = Locked_Logic2.child_can_enter_river || Locked_Logic2.hover_boots;
	Location_Locked_Logic2.river_grotto = true;
	Location_Locked_Logic2.river_ledge = Locked_Logic2.child_can_enter_river || Locked_Logic2.hover_boots;
	Location_Locked_Logic2.frogs_1 = Locked_Logic2.child_can_enter_river && Locked_Logic2.song_of_storms;
	Location_Locked_Logic2.frogs_2 = Locked_Logic2.child_can_enter_river && (Locked_Logic2.song_of_storms && Locked_Logic2.lullaby && Locked_Logic2.eponas && Locked_Logic2.sarias && Locked_Logic2.suns_song && Locked_Logic2.song_of_time);
	Location_Locked_Logic2.zora_diving = (Locked_Logic2.lullaby && Locked_Logic2.bomb_bag) || Locked_Logic2.silver_scale;
	Location_Locked_Logic2.zora_torches = (Locked_Logic2.lullaby && Locked_Logic2.bomb_bag) || Locked_Logic2.silver_scale;
	Location_Locked_Logic2.thaw_king = Locked_Logic2.ice_access || (Locked_Logic2.bottle && (Locked_Logic2.giants_wallet || Locked_Logic2.can_enter_ganons) && Locked_Logic2.lullaby);
	Location_Locked_Logic2.colossus_bean = Locked_Logic2.requiem && Locked_Logic2.child_can_enter_river;
	Location_Locked_Logic2.colossus_fairy = Locked_Logic2.can_enter_colossus && Locked_Logic2.bomb_bag && Locked_Logic2.lullaby;
	Location_Locked_Logic2.wasteland = Locked_Logic2.can_cross_quicksand && Locked_Logic2.can_use_fire;
	Location_Locked_Logic2.gerudo_roof = Locked_Logic2.fortress_access && (Locked_Logic2.hookshot || Locked_Logic2.hover_boots);
	Location_Locked_Logic2.gerudo_archery_1 = Locked_Logic2.eponas && Locked_Logic2.bow;
	Location_Locked_Logic2.gerudo_archery_2 = Locked_Logic2.eponas && Locked_Logic2.bow;
	Location_Locked_Logic2.jabu_boomerang = Locked_Logic2.can_enter_jabu;
	Location_Locked_Logic2.jabu_map = Locked_Logic2.can_enter_jabu && Locked_Logic2.boomerang;
	Location_Locked_Logic2.jabu_compass = Locked_Logic2.can_enter_jabu && Locked_Logic2.boomerang;
	Location_Locked_Logic2.jabu_barinade = Locked_Logic2.can_enter_jabu && Locked_Logic2.boomerang;
	Location_Locked_Logic2.ganons1 = Locked_Logic2.can_enter_ganons && Locked_Logic2.golden_gauntlets;
	Location_Locked_Logic2.ganons2 = Locked_Logic2.can_enter_ganons && Locked_Logic2.golden_gauntlets;
	Location_Locked_Logic2.ganons3 = Locked_Logic2.can_enter_ganons && Locked_Logic2.golden_gauntlets;
	Location_Locked_Logic2.ganons4 = Locked_Logic2.can_enter_ganons && Locked_Logic2.golden_gauntlets;
	Location_Locked_Logic2.ganons5 = Locked_Logic2.can_enter_ganons && Locked_Logic2.golden_gauntlets;
	Location_Locked_Logic2.ganons6 = Locked_Logic2.can_enter_ganons && Locked_Logic2.golden_gauntlets;
	Location_Locked_Logic2.ganons7 = Locked_Logic2.can_enter_ganons && Locked_Logic2.golden_gauntlets ;//&& Locked_Logic2.can_see;
	Location_Locked_Logic2.ganons8 = Locked_Logic2.can_enter_ganons && Locked_Logic2.golden_gauntlets && Locked_Logic2.lullaby && Locked_Logic2.ganons_keys >= 1;
	Location_Locked_Logic2.ganons9 = Locked_Logic2.can_enter_ganons;
	Location_Locked_Logic2.ganons10 = Locked_Logic2.can_enter_ganons && Locked_Logic2.bomb_bag;//&& Locked_Logic2.can_see;
	Location_Locked_Logic2.ganons11 = Locked_Logic2.can_enter_ganons;
	Location_Locked_Logic2.ganons12 = Locked_Logic2.can_enter_ganons;
	Location_Locked_Logic2.ganons13 = Locked_Logic2.can_enter_ganons;
	Location_Locked_Logic2.ganons14 = Locked_Logic2.can_enter_ganons;
	Location_Locked_Logic2.ganons15 = Locked_Logic2.can_enter_ganons && (Locked_Logic2.longshot || ((Locked_Logic2.fire_arrows && Locked_Logic2.magic) || (Locked_Logic2.hover_boots && Locked_Logic2.can_use_dins)));
	Location_Locked_Logic2.ganons16 = Locked_Logic2.can_enter_ganons;
	Location_Locked_Logic2.zeldasSpot = true;
	Location_Locked_Logic2.eponasSpot = true;
	Location_Locked_Logic2.sariasSpot = true;
	Location_Locked_Logic2.stormsSpot = true;
	Location_Locked_Logic2.sunsSpot = Locked_Logic2.lullaby;
	Location_Locked_Logic2.boleroSpot = Locked_Logic2.can_enter_fire_temple;
	Location_Locked_Logic2.minuetSpot = Locked_Logic2.minuet || Locked_Logic2.sarias;
	Location_Locked_Logic2.requiemSpot = Locked_Logic2.can_enter_colossus;
	Location_Locked_Logic2.serenadeSpot = Locked_Logic2.ice_access;
	Location_Locked_Logic2.preludeSpot = Locked_Logic2.forest_medallion;
	Location_Locked_Logic2.nocturneSpot = Locked_Logic2.forest_medallion && Locked_Logic2.fire_medallion && Locked_Logic2.water_medallion;
	Location_Locked_Logic2.oot = Locked_Logic2.kokiri_emerald && Locked_Logic2.goron_ruby && Locked_Logic2.zora_sapphire;
	
	Location_Locked_Logic2.gs_kokiri_child = true;
	Location_Locked_Logic2.gs_kokiri_bean = Locked_Logic2.bottle;
	Location_Locked_Logic2.gs_kokiri_adult = Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_market = true;
	Location_Locked_Logic2.gs_lost_woods_bean1 = Locked_Logic2.bottle;
	Location_Locked_Logic2.gs_lost_woods_bean2 = Locked_Logic2.bottle;
	Location_Locked_Logic2.gs_lost_woods_above_stage = (Locked_Logic2.bomb_bag || Locked_Logic2.silver_scale) && (Locked_Logic2.sarias || Locked_Logic2.minuet);
	Location_Locked_Logic2.gs_sacred_forest = Locked_Logic2.hookshot && (Locked_Logic2.sarias || Locked_Logic2.minuet);
	Location_Locked_Logic2.gs_outside_kakariko = (Locked_Logic2.boomerang && Locked_Logic2.bomb_bag) || (Locked_Logic2.can_blast_or_smash && Locked_Logic2.hookshot)
	Location_Locked_Logic2.gs_near_gerudo = (Locked_Logic2.hammer && Locked_Logic2.can_use_fire && Locked_Logic2.hookshot) || (Locked_Logic2.can_use_dins && Locked_Logic2.bomb_bag && Locked_Logic2.boomerang);
	Location_Locked_Logic2.gs_hyrule_castle_tree = true;
	Location_Locked_Logic2.gs_hyrule_castle_grotto = Locked_Logic2.song_of_storms && Locked_Logic2.bomb_bag && Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_lon_lon_tree = true;
	Location_Locked_Logic2.gs_lon_lon_shed = true;
	Location_Locked_Logic2.gs_lon_lon_window = Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_lon_lon_back_wall = Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_kakariko_construction = true;
	Location_Locked_Logic2.gs_kakariko_skulltula_house = true;
	Location_Locked_Logic2.gs_kakariko_guard_house = true;
	Location_Locked_Logic2.gs_kakariko_tree = true;
	Location_Locked_Logic2.gs_kakariko_tower = Locked_Logic2.bomb_bag || Locked_Logic2.slingshot;
	Location_Locked_Logic2.gs_kakariko_impas = Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_graveyard_wall = Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_graveyard_bean = Locked_Logic2.bottle;
	Location_Locked_Logic2.gs_trail_bean = Locked_Logic2.bottle && (Locked_Logic2.bomb_bag || Locked_Logic2.goron_bracelet);
	Location_Locked_Logic2.gs_trail_bombable_wall = Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.gs_trail_hail_path = Locked_Logic2.hammer;
	Location_Locked_Logic2.gs_trail_above_dodongos = Locked_Logic2.hammer;
	Location_Locked_Logic2.gs_goron_city_center = true;
	Location_Locked_Logic2.gs_goron_city_maze = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.gs_crater_crate = Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.gs_crater_bean = Locked_Logic2.bottle && Locked_Logic2.bolero;
	Location_Locked_Logic2.gs_river_ladder = Locked_Logic2.silver_scale || Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.gs_river_near_grotto = Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_river_above_bridge = Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_domain = Locked_Logic2.lullaby && (Locked_Logic2.hookshot || Locked_Logic2.magic || Locked_Logic2.bow);
	Location_Locked_Logic2.gs_fountain_above_log = Locked_Logic2.rutos_letter && (Locked_Logic2.silver_scale || (Locked_Logic2.bomb_bag && Locked_Logic2.lullaby)) && Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_fountain_tree = Locked_Logic2.rutos_letter && (Locked_Logic2.silver_scale || (Locked_Logic2.bomb_bag && Locked_Logic2.lullaby))
	Location_Locked_Logic2.gs_fountain_hidden_cave = Locked_Logic2.ice_access && Locked_Logic2.silver_gauntlets && Locked_Logic2.hookshot && Locked_Logic2.can_blast_or_smash;
	Location_Locked_Logic2.gs_hylia_bean = Locked_Logic2.bottle;
	Location_Locked_Logic2.gs_hylia_lab_wall = Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_hylia_island = true;
	Location_Locked_Logic2.gs_hylia_tree = Locked_Logic2.longshot;
	Location_Locked_Logic2.gs_lab_crate = Locked_Logic2.iron_boots && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_valley_small_bridge = Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_valley_bean = Locked_Logic2.bottle;
	Location_Locked_Logic2.gs_valley_tent = Locked_Logic2.fortress_access && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_valley_pillar = Locked_Logic2.fortress_access && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_fortress_archery = Locked_Logic2.fortress_access && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_fortress_top = Locked_Logic2.fortress_access;
	Location_Locked_Logic2.gs_wasteland_structure = Locked_Logic2.hookshot && Locked_Logic2.can_cross_quicksand;
	Location_Locked_Logic2.gs_colossus_bean = Locked_Logic2.bottle && Locked_Logic2.requiem;
	Location_Locked_Logic2.gs_colossus_tree = Locked_Logic2.hookshot && Locked_Logic2.can_enter_colossus;
	Location_Locked_Logic2.gs_colossus_hill = (Locked_Logic2.requiem && (Locked_Logic2.bomb_bag || Locked_Logic2.silver_scale)) || (Locked_Logic2.longshot && Locked_Logic2.can_enter_colossus);
	Location_Locked_Logic2.gs_zora_river_tree = true;
	Location_Locked_Logic2.gs_ganons = true;
	Location_Locked_Logic2.gs_deku_basement_back = Locked_Logic2.boomerang && Locked_Logic2.bomb_bag && Locked_Logic2.slingshot;
	Location_Locked_Logic2.gs_deku_basement_gate = true;
	Location_Locked_Logic2.gs_deku_basement_vines = Locked_Logic2.slingshot || Locked_Logic2.boomerang || Locked_Logic2.bomb_bag || Locked_Logic2.can_use_dins;
	Location_Locked_Logic2.gs_deku_compass = true;
	Location_Locked_Logic2.gs_dodongos_east_side = Locked_Logic2.can_enter_dodongos;
	Location_Locked_Logic2.gs_dodongos_stair_room = Locked_Logic2.dodongos_climb;
	Location_Locked_Logic2.gs_dodongos_above_stairs = (Locked_Logic2.dodongos_climb && Locked_Logic2.hookshot) || (Locked_Logic2.boomerang && (Locked_Logic2.bomb_bag || Locked_Logic2.goron_bracelet));
	Location_Locked_Logic2.gs_dodongos_scarecrow = Locked_Logic2.can_enter_dodongos && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_dodongos_before_king = Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.gs_jabu_vines = Locked_Logic2.can_enter_jabu;
	Location_Locked_Logic2.gs_jabu_near_octo1 = Locked_Logic2.can_enter_jabu && Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_jabu_near_octo2 = Locked_Logic2.can_enter_jabu && Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_jabu_near_boss = Locked_Logic2.can_enter_jabu && Locked_Logic2.boomerang;
	Location_Locked_Logic2.gs_forest_first = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_forest_lobby = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_forest_outdoor_east = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot && ((Locked_Logic2.bow || Locked_Logic2.song_of_time) || (Locked_Logic2.forest_keys >= 1 && Locked_Logic2.hover_boots));
	Location_Locked_Logic2.gs_forest_outdoor_west = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.hookshot && (((Locked_Logic2.bow || Locked_Logic2.song_of_time) && Locked_Logic2.longshot) || (Locked_Logic2.forest_keys >= 1 && Locked_Logic2.hover_boots) || (Locked_Logic2.forest_keys >= 2 && Locked_Logic2.goron_bracelet && Locked_Logic2.bow))
	Location_Locked_Logic2.gs_forest_basement = (Locked_Logic2.minuet || Locked_Logic2.sarias) && Locked_Logic2.bow && Locked_Logic2.goron_bracelet && Locked_Logic2.forest_keys >= 5;
	Location_Locked_Logic2.gs_fire_song_of_time = Locked_Logic2.can_enter_fire_temple && Locked_Logic2.fire_keys >= 1 && Locked_Logic2.song_of_time;
	Location_Locked_Logic2.gs_fire_bomb_wall = Locked_Logic2.can_climb_fire_temple && Locked_Logic2.goron_bracelet && Locked_Logic2.bomb_bag;
	Location_Locked_Logic2.gs_fire_scarecrow1 = Locked_Logic2.can_climb_fire_temple && Locked_Logic2.goron_bracelet && Locked_Logic2.fire_keys >=5 && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_fire_scarecrow2 = Locked_Logic2.can_climb_fire_temple && Locked_Logic2.goron_bracelet && Locked_Logic2.fire_keys >=5 && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_fire_basement = Locked_Logic2.can_enter_fire_temple && Locked_Logic2.hammer;
	Location_Locked_Logic2.gs_water_south_basement = Locked_Logic2.can_enter_water && Locked_Logic2.bomb_bag && Locked_Logic2.lullaby;
	Location_Locked_Logic2.gs_water_river = Locked_Logic2.can_enter_water && Locked_Logic2.song_of_time && Locked_Logic2.water_keys >= 5;
	Location_Locked_Logic2.gs_water_central = Locked_Logic2.middle_water && Locked_Logic2.longshot || Locked_Logic2.can_use_farores;
	Location_Locked_Logic2.gs_water_near_boss_key = Locked_Logic2.can_enter_water && Locked_Logic2.longshot && Locked_Logic2.lullaby && Locked_Logic2.water_keys >=4;
	Location_Locked_Logic2.gs_water_platform_room = Locked_Logic2.can_enter_water && Locked_Logic2.longshot && Locked_Logic2.lullaby && Locked_Logic2.water_keys >=4;
	Location_Locked_Logic2.gs_spirit_metal_fence = Locked_Logic2.requiem && (Locked_Logic2.boomerang || Locked_Logic2.slingshot);
	Location_Locked_Logic2.gs_spirit_before_child_knuckle = (Locked_Logic2.bomb_bag && Locked_Logic2.boomerang && Locked_Logic2.hookshot && Locked_Logic2.spirit_keys >= 1) || (Locked_Logic2.boomerang && Locked_Logic2.spirit_keys >= 5 && Locked_Logic2.bomb_bag && Locked_Logic2.requiem) || (Locked_Logic2.hookshot && Locked_Logic2.silver_gauntlets && Locked_Logic2.spirit_keys >= 3);
	Location_Locked_Logic2.gs_spirit_boulder_room = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.song_of_time && (Locked_Logic2.bow || Locked_Logic2.hookshot || Locked_Logic2.bomb_bag);
	Location_Locked_Logic2.gs_spirit_temple_lobby = Locked_Logic2.can_enter_adult_spirit && Locked_Logic2.spirit_keys >= 3 && (Locked_Logic2.hookshot || Locked_Logic2.hover_boots);
	Location_Locked_Logic2.gs_spirit_bomb_for_light_room = Locked_Logic2.spirit_keys >= 1;
	Location_Locked_Logic2.gs_shadow_like_like = Locked_Logic2.can_bomb_shadow_wall;
	Location_Locked_Logic2.gs_shadow_crusher = Locked_Logic2.can_bomb_shadow_wall && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_shadow_giant_pot = Locked_Logic2.can_bomb_shadow_wall && Locked_Logic2.shadow_keys >=2 && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_shadow_near_boat = Locked_Logic2.can_pass_shadow_hookshot_door && Locked_Logic2.longshot && Locked_Logic2.shadow_keys >=4;
	Location_Locked_Logic2.gs_shadow_three_pots = Locked_Logic2.can_ride_shadow_boat;
	Location_Locked_Logic2.gs_well_west_inner = Locked_Logic2.boomerang /*&& Locked_Logic2.can_see*/ && Locked_Logic2.well_keys >=3;
	Location_Locked_Logic2.gs_well_east_inner = Locked_Logic2.boomerang /*&& Locked_Logic2.can_see*/ && Locked_Logic2.well_keys >=3;
	Location_Locked_Logic2.gs_well_like_like = Locked_Logic2.boomerang /*&& Locked_Logic2.can_see*/ && Locked_Logic2.well_keys >=3;
	Location_Locked_Logic2.gs_ice_spinning_scythe = Locked_Logic2.ice_access && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_ice_hp_room = Locked_Logic2.ice_access && Locked_Logic2.hookshot;
	Location_Locked_Logic2.gs_ice_block_room = Locked_Logic2.ice_access && Locked_Logic2.hookshot;
	
	gs[1] = Location_Locked_Logic2.gs_kokiri_child;
	gs[2] = Location_Locked_Logic2.gs_kokiri_bean;
	gs[3] = Location_Locked_Logic2.gs_kokiri_adult;
	gs[4] = Location_Locked_Logic2.gs_market;
	gs[5] = Location_Locked_Logic2.gs_lost_woods_bean1;
	gs[6] = Location_Locked_Logic2.gs_lost_woods_bean2;
	gs[7] = Location_Locked_Logic2.gs_lost_woods_above_stage;
	gs[8] = Location_Locked_Logic2.gs_sacred_forest;
	gs[9] = Location_Locked_Logic2.gs_outside_kakariko;
	gs[10] = Location_Locked_Logic2.gs_near_gerudo;
	gs[11] = Location_Locked_Logic2.gs_hyrule_castle_tree;
	gs[12] = Location_Locked_Logic2.gs_hyrule_castle_grotto;
	gs[13] = Location_Locked_Logic2.gs_lon_lon_tree;
	gs[14] = Location_Locked_Logic2.gs_lon_lon_shed;
	gs[15] = Location_Locked_Logic2.gs_lon_lon_window;
	gs[16] = Location_Locked_Logic2.gs_lon_lon_back_wall;
	gs[17] = Location_Locked_Logic2.gs_kakariko_construction;
	gs[18] = Location_Locked_Logic2.gs_kakariko_skulltula_house;
	gs[19] = Location_Locked_Logic2.gs_kakariko_guard_house;
	gs[20] = Location_Locked_Logic2.gs_kakariko_tree;
	gs[21] = Location_Locked_Logic2.gs_kakariko_tower;
	gs[22] = Location_Locked_Logic2.gs_kakariko_impas;
	gs[23] = Location_Locked_Logic2.gs_graveyard_wall;
	gs[24] = Location_Locked_Logic2.gs_graveyard_bean;
	gs[25] = Location_Locked_Logic2.gs_trail_bean;
	gs[26] = Location_Locked_Logic2.gs_trail_bombable_wall;
	gs[27] = Location_Locked_Logic2.gs_trail_hail_path;
	gs[28] = Location_Locked_Logic2.gs_trail_above_dodongos;
	gs[29] = Location_Locked_Logic2.gs_goron_city_center;
	gs[30] = Location_Locked_Logic2.gs_goron_city_maze;
	gs[31] = Location_Locked_Logic2.gs_crater_crate;
	gs[32] = Location_Locked_Logic2.gs_crater_bean;
	gs[33] = Location_Locked_Logic2.gs_river_ladder;
	gs[34] = Location_Locked_Logic2.gs_river_near_grotto;
	gs[35] = Location_Locked_Logic2.gs_river_above_bridge;
	gs[36] = Location_Locked_Logic2.gs_domain;
	gs[37] = Location_Locked_Logic2.gs_fountain_above_log;
	gs[38] = Location_Locked_Logic2.gs_fountain_tree;
	gs[39] = Location_Locked_Logic2.gs_fountain_hidden_cave;
	gs[40] = Location_Locked_Logic2.gs_hylia_bean;
	gs[41] = Location_Locked_Logic2.gs_hylia_lab_wall;
	gs[42] = Location_Locked_Logic2.gs_hylia_island;
	gs[43] = Location_Locked_Logic2.gs_hylia_tree;
	gs[44] = Location_Locked_Logic2.gs_lab_crate;
	gs[45] = Location_Locked_Logic2.gs_valley_small_bridge;
	gs[46] = Location_Locked_Logic2.gs_valley_bean;
	gs[47] = Location_Locked_Logic2.gs_valley_tent;
	gs[48] = Location_Locked_Logic2.gs_valley_pillar;
	gs[49] = Location_Locked_Logic2.gs_fortress_archery;
	gs[50] = Location_Locked_Logic2.gs_fortress_top;
	gs[51] = Location_Locked_Logic2.gs_wasteland_structure;
	gs[52] = Location_Locked_Logic2.gs_colossus_bean;
	gs[53] = Location_Locked_Logic2.gs_colossus_tree;
	gs[54] = Location_Locked_Logic2.gs_colossus_hill;
	gs[55] = Location_Locked_Logic2.gs_zora_river_tree;
	gs[56] = Location_Locked_Logic2.gs_ganons;
	gs[57] = Location_Locked_Logic2.gs_deku_basement_back;
	gs[58] = Location_Locked_Logic2.gs_deku_basement_gate;
	gs[59] = Location_Locked_Logic2.gs_deku_basement_vines;
	gs[60] = Location_Locked_Logic2.gs_deku_compass;
	gs[61] = Location_Locked_Logic2.gs_dodongos_east_side;
	gs[62] = Location_Locked_Logic2.gs_dodongos_stair_room;
	gs[63] = Location_Locked_Logic2.gs_dodongos_above_stairs;
	gs[64] = Location_Locked_Logic2.gs_dodongos_scarecrow;
	gs[65] = Location_Locked_Logic2.gs_dodongos_before_king;
	gs[66] = Location_Locked_Logic2.gs_jabu_vines;
	gs[67] = Location_Locked_Logic2.gs_jabu_near_octo1;
	gs[68] = Location_Locked_Logic2.gs_jabu_near_octo2;
	gs[69] = Location_Locked_Logic2.gs_jabu_near_boss;
	gs[70] = Location_Locked_Logic2.gs_forest_first;
	gs[71] = Location_Locked_Logic2.gs_forest_lobby;
	gs[72] = Location_Locked_Logic2.gs_forest_outdoor_east;
	gs[73] = Location_Locked_Logic2.gs_forest_outdoor_west;
	gs[74] = Location_Locked_Logic2.gs_forest_basement;
	gs[75] = Location_Locked_Logic2.gs_fire_song_of_time;
	gs[76] = Location_Locked_Logic2.gs_fire_bomb_wall;
	gs[77] = Location_Locked_Logic2.gs_fire_scarecrow1;
	gs[78] = Location_Locked_Logic2.gs_fire_scarecrow2;
	gs[79] = Location_Locked_Logic2.gs_fire_basement;
	gs[80] = Location_Locked_Logic2.gs_water_south_basement;
	gs[81] = Location_Locked_Logic2.gs_water_river;
	gs[82] = Location_Locked_Logic2.gs_water_central;
	gs[83] = Location_Locked_Logic2.gs_water_near_boss_key;
	gs[84] = Location_Locked_Logic2.gs_water_platform_room;
	gs[85] = Location_Locked_Logic2.gs_spirit_metal_fence;
	gs[86] = Location_Locked_Logic2.gs_spirit_before_child_knuckle;
	gs[87] = Location_Locked_Logic2.gs_spirit_boulder_room;
	gs[88] = Location_Locked_Logic2.gs_spirit_temple_lobby;
	gs[89] = Location_Locked_Logic2.gs_spirit_bomb_for_light_room;
	gs[90] = Location_Locked_Logic2.gs_shadow_like_like;
	gs[91] = Location_Locked_Logic2.gs_shadow_crusher;
	gs[92] = Location_Locked_Logic2.gs_shadow_giant_pot;
	gs[93] = Location_Locked_Logic2.gs_shadow_near_boat;
	gs[94] = Location_Locked_Logic2.gs_shadow_three_pots;
	gs[95] = Location_Locked_Logic2.gs_well_west_inner;
	gs[96] = Location_Locked_Logic2.gs_well_east_inner;
	gs[97] = Location_Locked_Logic2.gs_well_like_like;
	gs[98] = Location_Locked_Logic2.gs_ice_spinning_scythe;
	gs[99] = Location_Locked_Logic2.gs_ice_hp_room;
	gs[100] = Location_Locked_Logic2.gs_ice_block_room;

	Locked_Logic2.gold_skulltulas = 0;
	var i;
	for (i = 1; i<=100; i++) {
		if (gs[i] == true) {Locked_Logic2.gold_skulltulas +=1;};
	}
	}

	var temp = 0;
	var tempArray = [];
	
	for (const key of keys3) {
		temp += 1;
		if (!Location_Locked_Logic2[key]) {tempArray.push(key);}
		if (temp == 256) {break;} 
	}
	return tempArray;
	
}
function checksPutInLogicByItem(item) {
	const keys4 = Object.keys(Location_PutIn_Logic);
	
	for (const key of keys4) {
		temp += 1;
		if (temp == 256) {break;} 
		Location_PutIn_Logic[key] = false;
	}
	
	var temp = 20;
	var tempArray = [];
	
	while (temp > 0) {
    temp -= 1;
	
	if(Known.farores_wind == true) {PutIn_Logic.farores_wind = Location_PutIn_Logic[Location.farores_wind];} if (item == "farores_wind") {PutIn_Logic.farores_wind = false;}
	 
	if(Known.slingshot1 == true) {PutIn_Logic.slingshot1 = Location_PutIn_Logic[Location.slingshot1];} if (item == "slingshot1") {PutIn_Logic.slingshot1 = false;}
	if(Known.slingshot2 == true) {PutIn_Logic.slingshot2 = Location_PutIn_Logic[Location.slingshot2];} if (item == "slingshot2") {PutIn_Logic.slingshot2 = false;}
	if(Known.slingshot3 == true) {PutIn_Logic.slingshot3 = Location_PutIn_Logic[Location.slingshot3];} if (item == "slingshot3") {PutIn_Logic.slingshot3 = false;}
	PutIn_Logic.slingshot = PutIn_Logic.slingshot1 || PutIn_Logic.slingshot2 || PutIn_Logic.slingshot3; 
	 
	if(Known.boomerang == true) {PutIn_Logic.boomerang = Location_PutIn_Logic[Location.boomerang];} if (item == "boomerang") {PutIn_Logic.boomerang = false;}
	
	if(Known.rutos_letter == true) {PutIn_Logic.rutos_letter = Location_PutIn_Logic[Location.rutos_letter];} if (item == "rutos_letter") {PutIn_Logic.rutos_letter = false;}
	if(Known.bottle1 == true) {PutIn_Logic.bottle1 = Location_PutIn_Logic[Location.bottle1];} if (item == "bottle1") {PutIn_Logic.bottle1 = false;}
	if(Known.bottle2 == true) {PutIn_Logic.bottle2 = Location_PutIn_Logic[Location.bottle2];} if (item == "bottle2") {PutIn_Logic.bottle2 = false;}
	if(Known.bottle3 == true) {PutIn_Logic.bottle3 = Location_PutIn_Logic[Location.bottle3];} if (item == "bottle3") {PutIn_Logic.bottle3 = false;}
	PutIn_Logic.bottle = (PutIn_Logic.rutos_letter && ((PutIn_Logic.bomb_bag && PutIn_Logic.lullaby) || PutIn_Logic.silver_scale)) || PutIn_Logic.bottle1 || PutIn_Logic.bottle2 || PutIn_Logic.bottle3;
	
	if(Known.scale1 == true) {PutIn_Logic.scale1 = Location_PutIn_Logic[Location.scale1]; } if (item == "scale1") {PutIn_Logic.scale1 = false;}
	if(Known.scale2 == true) {PutIn_Logic.scale2 = Location_PutIn_Logic[Location.scale2]; } if (item == "scale2") {PutIn_Logic.scale2 = false;}
	if(Game.scale2 == true) {document.getElementById("silverscaleimg").src = Game.golden_scale_img;}
	PutIn_Logic.silver_scale = PutIn_Logic.scale1 || PutIn_Logic.scale2; 
	PutIn_Logic.golden_scale = PutIn_Logic.scale1 && PutIn_Logic.scale2; 
	
	if(Known.bomb_bag1 == true) {PutIn_Logic.bomb_bag1 = Location_PutIn_Logic[Location.bomb_bag1];} if (item == "bomb_bag1") {PutIn_Logic.bomb_bag1 = false;}
	if(Known.bomb_bag2 == true) {PutIn_Logic.bomb_bag2 = Location_PutIn_Logic[Location.bomb_bag2];} if (item == "bomb_bag2") {PutIn_Logic.bomb_bag2 = false;}
	if(Known.bomb_bag3 == true) {PutIn_Logic.bomb_bag3 = Location_PutIn_Logic[Location.bomb_bag3];} if (item == "bomb_bag3") {PutIn_Logic.bomb_bag3 = false;}
	PutIn_Logic.bomb_bag = PutIn_Logic.bomb_bag1 || PutIn_Logic.bomb_bag2 || PutIn_Logic.bomb_bag3;
	
	if(Known.hammer == true) {PutIn_Logic.hammer = Location_PutIn_Logic[Location.hammer];} if (item == "hammer") {PutIn_Logic.hammer = false;}
	 
	if(Known.bow1 == true) {PutIn_Logic.bow1 = Location_PutIn_Logic[Location.bow1];} if (item == "bow1") {PutIn_Logic.bow1 = false;}
	if(Known.bow2 == true) {PutIn_Logic.bow2 = Location_PutIn_Logic[Location.bow2];} if (item == "bow2") {PutIn_Logic.bow2 = false;}
	if(Known.bow3 == true) {PutIn_Logic.bow3 = Location_PutIn_Logic[Location.bow3];} if (item == "bow3") {PutIn_Logic.bow3 = false;}
	PutIn_Logic.bow = PutIn_Logic.bow1 || PutIn_Logic.bow2 || PutIn_Logic.bow3;
	
	if(Known.hookshot1 == true) {PutIn_Logic.hookshot1 = Location_PutIn_Logic[Location.hookshot1];} if (item == "hookshot1") {PutIn_Logic.hookshot1 = false;}
	if(Known.hookshot2 == true) {PutIn_Logic.hookshot2 = Location_PutIn_Logic[Location.hookshot2];} if (item == "hookshot2") {PutIn_Logic.hookshot2 = false;}
	PutIn_Logic.hookshot = PutIn_Logic.hookshot1 || PutIn_Logic.hookshot2;
	PutIn_Logic.longshot = PutIn_Logic.hookshot1 && PutIn_Logic.hookshot2;
	
	if(Known.strength1 == true) {PutIn_Logic.strength1 = Location_PutIn_Logic[Location.strength1];} if (item == "strength1") {PutIn_Logic.strength1 = false;}
	if(Known.strength2 == true) {PutIn_Logic.strength2 = Location_PutIn_Logic[Location.strength2];} if (item == "strength2") {PutIn_Logic.strength2 = false;}
	if(Known.strength3 == true) {PutIn_Logic.strength3 = Location_PutIn_Logic[Location.strength3];} if (item == "strength3") {PutIn_Logic.strength3 = false;}
	PutIn_Logic.goron_bracelet = PutIn_Logic.strength1 || PutIn_Logic.strength2 || PutIn_Logic.strength3;
	PutIn_Logic.silver_gauntlets = (PutIn_Logic.strength1 && PutIn_Logic.strength2) || (PutIn_Logic.strength1 && PutIn_Logic.strength3) || (PutIn_Logic.strength2 && PutIn_Logic.strength3);
	PutIn_Logic.golden_gauntlets = PutIn_Logic.strength1 && PutIn_Logic.strength2 && PutIn_Logic.strength3;
	
	if(Known.mirror_shield == true) {PutIn_Logic.mirror_shield = Location_PutIn_Logic[Location.mirror_shield];} if (item == "mirror_shield") {PutIn_Logic.mirror_shield = false;}
	
	if(Known.big_poe == true) {PutIn_Logic.big_poe = Location_PutIn_Logic[Location.big1];} if (item == "big1") {PutIn_Logic.big1 = false;}
	
	if(Known.iron_boots == true) {PutIn_Logic.iron_boots = Location_PutIn_Logic[Location.iron_boots];} if (item == "iron_boots") {PutIn_Logic.iron_boots = false;}
	if(Known.hover_boots == true) {PutIn_Logic.hover_boots = Location_PutIn_Logic[Location.hover_boots];} if (item == "hover_boots") {PutIn_Logic.hover_boots = false;}
	
	if(Known.magic1 == true) {PutIn_Logic.magic1 = Location_PutIn_Logic[Location.magic1];} if (item == "magic1") {PutIn_Logic.magic1 = false;}
	if(Known.magic2 == true) {PutIn_Logic.magic2 = Location_PutIn_Logic[Location.magic2];} if (item == "magic2") {PutIn_Logic.magic2 = false;}
	PutIn_Logic.magic = PutIn_Logic.magic1 || PutIn_Logic.magic2; 
	
	if(Known.dins_fire == true) {PutIn_Logic.dins_fire = Location_PutIn_Logic[Location.dins_fire];} if (item == "dins_fire") {PutIn_Logic.dins_fire = false;}
	if(Known.fire_arrows == true) {PutIn_Logic.fire_arrows = Location_PutIn_Logic[Location.fire_arrows];} if (item == "fire_arrows") {PutIn_Logic.fire_arrows = false;}
	
	if(Known.wallet1 == true) {PutIn_Logic.wallet1 = Location_PutIn_Logic[Location.wallet1];} if (item == "wallet1") {PutIn_Logic.wallet1 = false;}
	if(Known.wallet2 == true) {PutIn_Logic.wallet2 = Location_PutIn_Logic[Location.wallet2];} if (item == "wallet2") {PutIn_Logic.wallet2 = false;}
	PutIn_Logic.adults_wallet = PutIn_Logic.wallet1 || PutIn_Logic.wallet2; 
	PutIn_Logic.giants_wallet = PutIn_Logic.wallet1 && PutIn_Logic.wallet2; 
	
	if(Known.goron_tunic == true) {PutIn_Logic.goron_tunic = Location_PutIn_Logic[Location.goron_tunic];} if (item == "goron_tunic") {PutIn_Logic.goron_tunic = false;}
	if(Known.zora_tunic == true) {PutIn_Logic.zora_tunic = Location_PutIn_Logic[Location.zora_tunic];} if (item == "zora_tunic") {PutIn_Logic.zora_tunic = false;}
	if(Known.lens_of_truth == true) {PutIn_Logic.lens_of_truth = Location_PutIn_Logic[Location.lens_of_truth];}  if (item == "lens_of_truth") {PutIn_Logic.lens_of_truth = false;}
	if(Known.prescription == true) {PutIn_Logic.prescription = Location_PutIn_Logic[Location.prescription];} if (item == "prescription") {PutIn_Logic.prescription = false;}
	if(Known.claim_check == true) {PutIn_Logic.claim_check = Location_PutIn_Logic[Location.claim_check];} if (item == "claim_check") {PutIn_Logic.claim_check = false;}
	
	if(Known.light_arrows == true) {PutIn_Logic.light_arrows = Location_PutIn_Logic[Location.light_arrows];} if (item == "light_arrows") {PutIn_Logic.light_arrows = false;}
	
	if(Known.lullaby == true) {PutIn_Logic.lullaby = Location_PutIn_Logic[Location.lullaby]; } if (item == "lullaby") {PutIn_Logic.lullaby = false;}
	if(Known.eponas == true) {PutIn_Logic.eponas = Location_PutIn_Logic[Location.eponas]; } if (item == "eponas") {PutIn_Logic.eponas = false;}
	if(Known.sarias == true) {PutIn_Logic.sarias = Location_PutIn_Logic[Location.sarias]; } if (item == "sarias") {PutIn_Logic.sarias = false;}
	if(Known.suns_song == true) {PutIn_Logic.suns_song = Location_PutIn_Logic[Location.suns_song]; } if (item == "suns_song") {PutIn_Logic.suns_song = false;}
	if(Known.song_of_time == true) {PutIn_Logic.song_of_time = Location_PutIn_Logic[Location.song_of_time]; } if (item == "song_of_time") {PutIn_Logic.song_of_time = false;}
	if(Known.song_of_storms == true) {PutIn_Logic.song_of_storms = Location_PutIn_Logic[Location.song_of_storms]; } if (item == "song_of_storms") {PutIn_Logic.song_of_storms = false;}
	if(Known.minuet == true) {PutIn_Logic.minuet = Location_PutIn_Logic[Location.minuet]; } if (item == "minuet") {PutIn_Logic.minuet = false;}
	if(Known.bolero == true) {PutIn_Logic.bolero = Location_PutIn_Logic[Location.bolero]; } if (item == "bolero") {PutIn_Logic.bolero = false;}
	if(Known.serenade == true) {PutIn_Logic.serenade = Location_PutIn_Logic[Location.serenade]; } if (item == "serenade") {PutIn_Logic.serenade = false;}
	if(Known.requiem == true) {PutIn_Logic.requiem = Location_PutIn_Logic[Location.requiem]; } if (item == "requiem") {PutIn_Logic.requiem = false;}
	if(Known.nocturne == true) {PutIn_Logic.nocturne = Location_PutIn_Logic[Location.nocturne]; } if (item == "nocturne") {PutIn_Logic.nocturne = false;}
	if(Known.prelude == true) {PutIn_Logic.prelude = Location_PutIn_Logic[Location.prelude]; } if (item == "prelude") {PutIn_Logic.prelude = false;}  
	
	PutIn_Logic.can_enter_jabu = PutIn_Logic.rutos_letter && ((PutIn_Logic.lullaby && PutIn_Logic.bomb_bag) || PutIn_Logic.silver_scale) && (PutIn_Logic.boomerang || PutIn_Logic.bomb_bag || PutIn_Logic.slingshot);
	PutIn_Logic.child_can_enter_river = PutIn_Logic.bomb_bag || PutIn_Logic.silver_scale;
	PutIn_Logic.fortress_access = PutIn_Logic.eponas || PutIn_Logic.longshot;
	PutIn_Logic.can_save_carpenters = PutIn_Logic.fortress_access && ((PutIn_Logic.bow || PutIn_Logic.hookshot || PutIn_Logic.hover_boots) || true) /*fast carpenter fix**/;
	PutIn_Logic.can_cross_quicksand = PutIn_Logic.fortress_access && (PutIn_Logic.longshot || PutIn_Logic.hover_boots);
	PutIn_Logic.can_enter_colossus = (PutIn_Logic.can_cross_quicksand && (PutIn_Logic.brackets || PutIn_Logic.can_see)) || PutIn_Logic.requiem;
	PutIn_Logic.can_use_fire = (PutIn_Logic.dins_fire || (PutIn_Logic.bow && PutIn_Logic.fire_arrows)) && PutIn_Logic.magic;
	PutIn_Logic.can_use_dins = PutIn_Logic.dins_fire && PutIn_Logic.magic;
	PutIn_Logic.can_use_farores = PutIn_Logic.farores_wind && PutIn_Logic.magic;
	PutIn_Logic.can_see = PutIn_Logic.lens_of_truth && PutIn_Logic.magic;
	PutIn_Logic.can_blast_or_smash = PutIn_Logic.bomb_bag || PutIn_Logic.hammer;
	PutIn_Logic.can_enter_dodongos = PutIn_Logic.can_blast_or_smash || PutIn_Logic.goron_bracelet;
	PutIn_Logic.dodongos_climb = PutIn_Logic.can_enter_dodongos && (PutIn_Logic.bomb_bag || PutIn_Logic.goron_bracelet || PutIn_Logic.can_use_dins);
	PutIn_Logic.can_enter_shadow = PutIn_Logic.nocturne && PutIn_Logic.can_use_dins && (PutIn_Logic.hover_boots || PutIn_Logic.hookshot) ;//&& PutIn_Logic.can_see;
	PutIn_Logic.can_cross_shadow_gap= PutIn_Logic.can_enter_shadow && PutIn_Logic.hover_boots;
	PutIn_Logic.can_bomb_shadow_wall = PutIn_Logic.can_cross_shadow_gap && PutIn_Logic.bomb_bag;
	PutIn_Logic.can_pass_shadow_hookshot_door = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.hookshot;
	PutIn_Logic.can_ride_shadow_boat = PutIn_Logic.can_pass_shadow_hookshot_door && PutIn_Logic.lullaby;
	PutIn_Logic.can_beat_shadow_boss = PutIn_Logic.can_ride_shadow_boat && (PutIn_Logic.bow || PutIn_Logic.longshot);
	PutIn_Logic.can_stop_link_the_goron = PutIn_Logic.bomb_bag || PutIn_Logic.bow || PutIn_Logic.goron_bracelet;
	PutIn_Logic.ice_access = PutIn_Logic.rutos_letter && PutIn_Logic.lullaby && PutIn_Logic.child_can_enter_river;
	PutIn_Logic.reverse_crater = (PutIn_Logic.hover_boots || PutIn_Logic.hookshot || PutIn_Logic.child_can_enter_river) && PutIn_Logic.bolero;
	PutIn_Logic.can_enter_fire_temple = (PutIn_Logic.crater_by_city && (PutIn_Logic.hookshot || PutIn_Logic.hover_boots)) || PutIn_Logic.bolero
	PutIn_Logic.crater_by_city = PutIn_Logic.bow || PutIn_Logic.bomb_bag || PutIn_Logic.goron_bracelet || PutIn_Logic.reverse_crater ||(PutIn_Logic.hammer && PutIn_Logic.hover_boots) || (PutIn_Logic.longshot && PutIn_Logic.goron_tunic && PutIn_Logic.hammer);
	PutIn_Logic.crater_top = PutIn_Logic.crater_by_city || PutIn_Logic.hammer;
	PutIn_Logic.can_enter_adult_spirit = PutIn_Logic.can_enter_colossus && PutIn_Logic.silver_gauntlets;
	PutIn_Logic.can_enter_ganons = PutIn_Logic.forest_medallion && PutIn_Logic.fire_medallion && PutIn_Logic.water_medallion && PutIn_Logic.gen1 && PutIn_Logic.gen2 && PutIn_Logic.gen3;
	PutIn_Logic.can_climb_fire_temple = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.fire_keys >=3 && PutIn_Logic.can_wear_goron_tunic && PutIn_Logic.goron_bracelet && (PutIn_Logic.bow || PutIn_Logic.hookshot || PutIn_Logic.bomb_bag);
	PutIn_Logic.can_enter_water = PutIn_Logic.hookshot && PutIn_Logic.iron_boots;
	PutIn_Logic.middle_water = PutIn_Logic.can_enter_water && PutIn_Logic.lullaby && (PutIn_Logic.bow || PutIn_Logic.can_use_dins);
	PutIn_Logic.projectile_both = PutIn_Logic.bomb_bag || ((PutIn_Logic.slingshot || PutIn_Logic.boomerang) && (PutIn_Logic.bow || PutIn_Logic.hookshot));
	PutIn_Logic.projectile_child = PutIn_Logic.bomb_bag || PutIn_Logic.slingshot || PutIn_Logic.boomerang;
	PutIn_Logic.projectile_adult = PutIn_Logic.bomb_bag || PutIn_Logic.bow || PutIn_Logic.hookshot;
	PutIn_Logic.can_wear_goron_tunic = PutIn_Logic.goron_tunic || (PutIn_Logic.adults_wallet && (PutIn_Logic.bomb_bag || PutIn_Logic.goron_bracelet || PutIn_Logic.bow));
	PutIn_Logic.can_wear_zora_tunic = PutIn_Logic.zora_tunic || (PutIn_Logic.giants_wallet && (PutIn_Logic.lullaby && PutIn_Logic.bottle));
	
	for (h= 1; h <= 3; h++) {
		PutIn_Logic.current_forest_keys = PutIn_Logic.forced_forest_keys;
		for (i = 1; i <= 14; i++) {
			str = "forest" + i;
			if ((Check[str] == "small_key") && Location_PutIn_Logic[str]) {PutIn_Logic.current_forest_keys +=1;}
		}
		Location_PutIn_Logic.forest1 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot;
		Location_PutIn_Logic.forest2 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot;
		Location_PutIn_Logic.forest3 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && (PutIn_Logic.song_of_time || PutIn_Logic.bow || (PutIn_Logic.hover_boots && PutIn_Logic.forest_keys>=1));
		Location_PutIn_Logic.forest4 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && (PutIn_Logic.song_of_time || (PutIn_Logic.hover_boots && PutIn_Logic.forest_keys>=1) || (PutIn_Logic.bow/* && (PutIn_Logic.iron_boots || PutIn_Logic.golden_scale || PutIn_Logic.longshot)*/));
		Location_PutIn_Logic.forest5 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && (PutIn_Logic.song_of_time || (PutIn_Logic.hover_boots && PutIn_Logic.forest_keys>=1) || (PutIn_Logic.bow/* && (PutIn_Logic.iron_boots || PutIn_Logic.golden_scale || PutIn_Logic.longshot)*/));
		Location_PutIn_Logic.forest6 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.forest_keys >= 1 && PutIn_Logic.bow && PutIn_Logic.goron_bracelet;
		Location_PutIn_Logic.forest7 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.forest_keys >= 2 && PutIn_Logic.bow && PutIn_Logic.goron_bracelet;
		Location_PutIn_Logic.forest8 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && ((PutIn_Logic.bow && PutIn_Logic.goron_bracelet && PutIn_Logic.forest_keys >=2) || (PutIn_Logic.hover_boots && PutIn_Logic.forest_keys >=1));
		Location_PutIn_Logic.forest9 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && PutIn_Logic.bow && PutIn_Logic.forest_keys>=3;
		Location_PutIn_Logic.forest10 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && PutIn_Logic.forest_keys>=3;
		Location_PutIn_Logic.forest11 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && PutIn_Logic.bow && PutIn_Logic.forest_keys>=3;
		Location_PutIn_Logic.forest12 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && (PutIn_Logic.bow || PutIn_Logic.can_use_dins) && PutIn_Logic.forest_keys>=5;
		Location_PutIn_Logic.forest13 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && PutIn_Logic.bow && PutIn_Logic.forest_keys>=5;
		Location_PutIn_Logic.forest14 = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && PutIn_Logic.goron_bracelet && PutIn_Logic.bow && PutIn_Logic.forest_keys>=5 && PutIn_Logic.forest_boss_key;
	}
	for (h= 1; h <= 3; h++) {
		PutIn_Logic.current_fire_keys = PutIn_Logic.forced_fire_keys;
		for (i = 1; i <= 15; i++) {
			str = "fire" + i;
			if ((Check[str] == "small_key") && Location_PutIn_Logic[str]) {PutIn_Logic.current_fire_keys +=1;}
		}
		Location_PutIn_Logic.fire1 = PutIn_Logic.can_enter_fire_temple;
		Location_PutIn_Logic.fire2 = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.hammer;
		Location_PutIn_Logic.fire3 = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.hammer;
		Location_PutIn_Logic.fire4 = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.fire_keys >=1;
		Location_PutIn_Logic.fire5 = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.fire_keys >=1 && PutIn_Logic.bomb_bag;
		Location_PutIn_Logic.fire6 = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.fire_boss_key && PutIn_Logic.hammer && PutIn_Logic.can_wear_goron_tunic && (PutIn_Logic.hover_boots || (PutIn_Logic.fire_keys >=7 && (PutIn_Logic.song_of_time || PutIn_Logic.bomb_bag)));
		Location_PutIn_Logic.fire7 = PutIn_Logic.can_climb_fire_temple;
		Location_PutIn_Logic.fire8 = PutIn_Logic.can_climb_fire_temple;
		Location_PutIn_Logic.fire9 = PutIn_Logic.can_climb_fire_temple && ((PutIn_Logic.fire_keys >= 4 && PutIn_Logic.bow) || PutIn_Logic.fire_keys>=5);
		Location_PutIn_Logic.fire10 = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.fire_keys>=5;
		Location_PutIn_Logic.fire11 = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.fire_keys>=5 && PutIn_Logic.bomb_bag;
		Location_PutIn_Logic.fire12 = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.fire_keys>=5 && PutIn_Logic.hookshot;
		Location_PutIn_Logic.fire13 = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.fire_keys>=6;
		Location_PutIn_Logic.fire14 = PutIn_Logic.can_climb_fire_temple && (PutIn_Logic.fire_keys>=7 || (PutIn_Logic.fire_keys>=6 && PutIn_Logic.hover_boots)) && PutIn_Logic.hammer && (PutIn_Logic.song_of_time || PutIn_Logic.bomb_bag);
		Location_PutIn_Logic.fire15 = PutIn_Logic.can_climb_fire_temple && (PutIn_Logic.fire_keys>=7 || (PutIn_Logic.fire_keys >= 6 && PutIn_Logic.hover_boots)) && PutIn_Logic.bomb_bag;
	}
	for (h= 1; h <= 3; h++) {
		PutIn_Logic.current_water_keys = PutIn_Logic.forced_water_keys;
		for (i = 1; i <= 11; i++) {
			str = "water" + i;
			if ((Check[str] == "small_key") && Location_PutIn_Logic[str]) {PutIn_Logic.current_water_keys +=1;}
		}
		Location_PutIn_Logic.water1 = PutIn_Logic.can_enter_water;
		Location_PutIn_Logic.water2 = PutIn_Logic.can_enter_water;
		Location_PutIn_Logic.water3 = PutIn_Logic.middle_water && PutIn_Logic.bomb_bag;
		Location_PutIn_Logic.water4 = PutIn_Logic.can_enter_water && PutIn_Logic.lullaby && (PutIn_Logic.bow || PutIn_Logic.can_use_dins);
		Location_PutIn_Logic.water5 = PutIn_Logic.can_enter_water && PutIn_Logic.lullaby && PutIn_Logic.bow && PutIn_Logic.goron_bracelet && (PutIn_Logic.hover_boots || PutIn_Logic.longshot);
		Location_PutIn_Logic.water6 = PutIn_Logic.middle_water && PutIn_Logic.can_wear_zora_tunic;
		Location_PutIn_Logic.water7 = PutIn_Logic.water_keys >= 5 && PutIn_Logic.lullaby;
		Location_PutIn_Logic.water8 = PutIn_Logic.water_keys >= 5 && PutIn_Logic.lullaby && PutIn_Logic.song_of_time && PutIn_Logic.bow;
		Location_PutIn_Logic.water9 = PutIn_Logic.can_enter_water && PutIn_Logic.lullaby && ((PutIn_Logic.water_keys >= 5 && PutIn_Logic.song_of_time && PutIn_Logic.bow) || PutIn_Logic.goron_bracelet);
		Location_PutIn_Logic.water10 = PutIn_Logic.can_enter_water && PutIn_Logic.lullaby && PutIn_Logic.longshot && PutIn_Logic.water_keys >= 5 && ((PutIn_Logic.bomb_bag && PutIn_Logic.goron_bracelet) || PutIn_Logic.hover_boots);
		Location_PutIn_Logic.water11 = PutIn_Logic.can_enter_water && PutIn_Logic.water_boss_key && PutIn_Logic.longshot ;
	}
	for (h= 1; h <= 3; h++) {
		PutIn_Logic.current_spirit_keys = PutIn_Logic.forced_spirit_keys;
		for (i = 1; i <= 20; i++) {
			str = "spirit" + i;
			if ((Check[str] == "small_key") && Location_PutIn_Logic[str]) {PutIn_Logic.current_spirit_keys +=1;}
		}
		Location_PutIn_Logic.spirit1 = PutIn_Logic.requiem && (PutIn_Logic.slingshot || PutIn_Logic.boomerang);
		Location_PutIn_Logic.spirit2 = PutIn_Logic.requiem && (PutIn_Logic.slingshot || PutIn_Logic.boomerang);
		Location_PutIn_Logic.spirit3 = (PutIn_Logic.spirit_keys >=1 && PutIn_Logic.projectile_both);
		Location_PutIn_Logic.spirit4 = (PutIn_Logic.spirit_keys >=1 && PutIn_Logic.projectile_both);
		Location_PutIn_Logic.spirit5 = (PutIn_Logic.spirit_keys >=5 && PutIn_Logic.requiem && PutIn_Logic.bomb_bag) || (PutIn_Logic.spirit_keys >=3 && PutIn_Logic.silver_gauntlets && PutIn_Logic.can_use_fire) || (PutIn_Logic.bomb_bag && PutIn_Logic.spirit_keys >=1 && PutIn_Logic.can_use_fire);
		Location_PutIn_Logic.spirit6 = (PutIn_Logic.spirit_keys >=5 && PutIn_Logic.requiem && PutIn_Logic.bomb_bag) || (PutIn_Logic.spirit_keys >=3 && PutIn_Logic.silver_gauntlets && PutIn_Logic.can_use_fire) || (PutIn_Logic.bomb_bag && PutIn_Logic.spirit_keys >=1 && PutIn_Logic.can_use_fire);
		Location_PutIn_Logic.spirit7 = (PutIn_Logic.spirit_keys >=3 && PutIn_Logic.longshot && PutIn_Logic.bomb_bag) || PutIn_Logic.spirit_keys >= 5;
		Location_PutIn_Logic.spirit8 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.hookshot && PutIn_Logic.lullaby;
		Location_PutIn_Logic.spirit9 = PutIn_Logic.can_enter_adult_spirit && (PutIn_Logic.bow || PutIn_Logic.hookshot || PutIn_Logic.bomb_bag);
		Location_PutIn_Logic.spirit10 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=3;
		Location_PutIn_Logic.spirit11 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=3;
		Location_PutIn_Logic.spirit12 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=3 && PutIn_Logic.lullaby;
		Location_PutIn_Logic.spirit13 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=3 && PutIn_Logic.lullaby && (PutIn_Logic.hookshot || PutIn_Logic.hover_boots);
		Location_PutIn_Logic.spirit14 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=4 && PutIn_Logic.bomb_bag && PutIn_Logic.mirror_shield;
		Location_PutIn_Logic.spirit15 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=4 && PutIn_Logic.bomb_bag ;//&& PutIn_Logic.can_see;
		Location_PutIn_Logic.spirit16 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=4 && PutIn_Logic.bomb_bag ;//&& PutIn_Logic.can_see;
		Location_PutIn_Logic.spirit17 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=4 && PutIn_Logic.bomb_bag;
		Location_PutIn_Logic.spirit18 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=5 && PutIn_Logic.bow && PutIn_Logic.lullaby && PutIn_Logic.hookshot;
		Location_PutIn_Logic.spirit19 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=5 && PutIn_Logic.mirror_shield;
		Location_PutIn_Logic.spirit20 = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >=5 && PutIn_Logic.mirror_shield && PutIn_Logic.bomb_bag && PutIn_Logic.spirit_boss_key && PutIn_Logic.hookshot;	
	}
	for (h= 1; h <= 3; h++) {
		PutIn_Logic.current_shadow_keys = PutIn_Logic.forced_shadow_keys;
		for (i = 1; i <= 18; i++) {
			str = "shadow" + i;
			if ((Check[str] == "small_key") && Location_PutIn_Logic[str]) {PutIn_Logic.current_shadow_keys +=1;}
		}
		Location_PutIn_Logic.shadow1 = PutIn_Logic.can_enter_shadow;
		Location_PutIn_Logic.shadow2 = PutIn_Logic.can_enter_shadow;
		Location_PutIn_Logic.shadow3 = PutIn_Logic.can_cross_shadow_gap;
		Location_PutIn_Logic.shadow4 = PutIn_Logic.can_cross_shadow_gap;
		Location_PutIn_Logic.shadow5 = PutIn_Logic.can_bomb_shadow_wall;
		Location_PutIn_Logic.shadow6 = PutIn_Logic.can_bomb_shadow_wall;
		Location_PutIn_Logic.shadow7 = PutIn_Logic.can_bomb_shadow_wall;
		Location_PutIn_Logic.shadow8 = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.goron_bracelet;
		Location_PutIn_Logic.shadow9 = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.goron_bracelet;
		Location_PutIn_Logic.shadow10 = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.shadow_keys >=2;
		Location_PutIn_Logic.shadow11 = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.hookshot && PutIn_Logic.shadow_keys >=2;
		Location_PutIn_Logic.shadow12 = PutIn_Logic.can_pass_shadow_hookshot_door && PutIn_Logic.shadow_keys >=3;
		Location_PutIn_Logic.shadow13 = PutIn_Logic.can_pass_shadow_hookshot_door && PutIn_Logic.shadow_keys >=3;
		Location_PutIn_Logic.shadow14 = PutIn_Logic.can_pass_shadow_hookshot_door && PutIn_Logic.shadow_keys >=3;
		Location_PutIn_Logic.shadow15 = PutIn_Logic.can_ride_shadow_boat && PutIn_Logic.shadow_keys >=4;
		Location_PutIn_Logic.shadow16 = PutIn_Logic.can_ride_shadow_boat && PutIn_Logic.shadow_keys >=4;
		Location_PutIn_Logic.shadow17 = PutIn_Logic.can_ride_shadow_boat && PutIn_Logic.shadow_keys >=4;
		Location_PutIn_Logic.shadow18 = PutIn_Logic.can_beat_shadow_boss && PutIn_Logic.shadow_keys >=5;
	}
	
	PutIn_Logic.current_ganons_keys = PutIn_Logic.forced_ganons_keys;
	for (i = 1; i <= 16; i++) {
		str = "ganons" + i;
		if ((Check[str] == "small_key") && Location_PutIn_Logic[str]) {PutIn_Logic.current_ganons_keys +=1;}
	}
	for (h= 1; h <= 3; h++) {
		PutIn_Logic.current_gtg_keys = PutIn_Logic.forced_gtg_keys;
		for (i = 1; i <= 22; i++) {
			str = "gtg" + i;
			if ((Check[str] == "small_key") && Location_PutIn_Logic[str]) {PutIn_Logic.current_gtg_keys +=1;}
		}
		Location_PutIn_Logic.gtg1 = PutIn_Logic.can_save_carpenters && PutIn_Logic.bow;
		Location_PutIn_Logic.gtg2 = PutIn_Logic.can_save_carpenters && PutIn_Logic.bow;
		Location_PutIn_Logic.gtg3 = PutIn_Logic.can_save_carpenters;
		Location_PutIn_Logic.gtg4 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot;
		Location_PutIn_Logic.gtg5 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.silver_gauntlets ;//&& PutIn_Logic.can_see ;
		Location_PutIn_Logic.gtg6 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.silver_gauntlets ;//&& PutIn_Logic.can_see ;
		Location_PutIn_Logic.gtg7 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.silver_gauntlets ;//&& PutIn_Logic.can_see ;
		Location_PutIn_Logic.gtg8 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.silver_gauntlets ;//&& PutIn_Logic.can_see ;
		Location_PutIn_Logic.gtg9 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.bow;  //((PutIn_Logic.bomb_bag || PutIn_Logic.gtg_keys == 9) && PutIn_Logic.hammer));
		Location_PutIn_Logic.gtg10 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.bow ;//&& PutIn_Logic.can_see;
		Location_PutIn_Logic.gtg12 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot/*&& PutIn_Logic.can_see*/;
		Location_PutIn_Logic.gtg11 = PutIn_Logic.can_save_carpenters && PutIn_Logic.hookshot && PutIn_Logic.hammer;// && (PutIn_Logic.can_see || (PutIn_Logic.bomb_bag || PutIn_Logic.gtg_keys == 9)) ;
		Location_PutIn_Logic.gtg13 = PutIn_Logic.can_save_carpenters && (PutIn_Logic.gtg_keys >= 9 || (PutIn_Logic.bomb_bag && PutIn_Logic.song_of_time) || (PutIn_Logic.hookshot /*&& PutIn_Logic.can_see*/ && PutIn_Logic.song_of_time));
		Location_PutIn_Logic.gtg14 = PutIn_Logic.can_save_carpenters && (PutIn_Logic.gtg_keys >= 9 || (PutIn_Logic.bomb_bag && PutIn_Logic.song_of_time) || (PutIn_Logic.hookshot /*&& PutIn_Logic.can_see*/ && PutIn_Logic.song_of_time));
		Location_PutIn_Logic.gtg15 = PutIn_Logic.can_save_carpenters && (PutIn_Logic.gtg_keys >= 9 || (PutIn_Logic.bomb_bag && PutIn_Logic.song_of_time) || (PutIn_Logic.hookshot /*&& PutIn_Logic.can_see*/ && PutIn_Logic.song_of_time));
		Location_PutIn_Logic.gtg16 = PutIn_Logic.can_save_carpenters && PutIn_Logic.bomb_bag;
		Location_PutIn_Logic.gtg17 = PutIn_Logic.can_save_carpenters && PutIn_Logic.gtg_keys >= 3 ;//&& PutIn_Logic.can_see;
		Location_PutIn_Logic.gtg18 = PutIn_Logic.can_save_carpenters && PutIn_Logic.gtg_keys >= 4;
		Location_PutIn_Logic.gtg19 = PutIn_Logic.can_save_carpenters && PutIn_Logic.gtg_keys >= 6;
		Location_PutIn_Logic.gtg20 = PutIn_Logic.can_save_carpenters && PutIn_Logic.gtg_keys >= 7;
		Location_PutIn_Logic.gtg21 = PutIn_Logic.can_save_carpenters && PutIn_Logic.gtg_keys >= 9;
		Location_PutIn_Logic.gtg22 = PutIn_Logic.can_save_carpenters && PutIn_Logic.iron_boots && PutIn_Logic.song_of_time && PutIn_Logic.hookshot /*&& PutIn_Logic.can_see*/;
	}
	for (h= 1; h <= 3; h++) {
		PutIn_Logic.current_well_keys = PutIn_Logic.forced_well_keys;
		for (i = 1; i <= 14; i++) {
			str = "well" + i;
			if ((Check[str] == "small_key") && Location_PutIn_Logic[str]) {PutIn_Logic.current_well_keys +=1;}
		}
		Location_PutIn_Logic.well1 = PutIn_Logic.song_of_storms ;//&& PutIn_Logic.can_see;
		Location_PutIn_Logic.well5 = PutIn_Logic.song_of_storms ;//&& PutIn_Logic.can_see;
		Location_PutIn_Logic.well2 = PutIn_Logic.song_of_storms && PutIn_Logic.bomb_bag;
		Location_PutIn_Logic.well3 = PutIn_Logic.song_of_storms && PutIn_Logic.lullaby;
		Location_PutIn_Logic.well4 = PutIn_Logic.song_of_storms;
		Location_PutIn_Logic.well6 = PutIn_Logic.song_of_storms ;//&& PutIn_Logic.can_see;
		Location_PutIn_Logic.well11 = PutIn_Logic.song_of_storms ;//&& PutIn_Logic.can_see;
		Location_PutIn_Logic.well7 = PutIn_Logic.song_of_storms && PutIn_Logic.bomb_bag;
		Location_PutIn_Logic.well10 = PutIn_Logic.song_of_storms && PutIn_Logic.lullaby;
		Location_PutIn_Logic.well8 = PutIn_Logic.song_of_storms && PutIn_Logic.lullaby ;//&& PutIn_Logic.kokiri_sword;
		Location_PutIn_Logic.well9 = PutIn_Logic.song_of_storms && PutIn_Logic.lullaby ;//&& PutIn_Logic.can_see ;
		Location_PutIn_Logic.well12 = PutIn_Logic.song_of_storms && PutIn_Logic.well_keys >= 3 ;//&& PutIn_Logic.can_see ;
		Location_PutIn_Logic.well13 = PutIn_Logic.song_of_storms && PutIn_Logic.well_keys >= 3 ;//&& PutIn_Logic.can_see ;
		Location_PutIn_Logic.well14 = PutIn_Logic.song_of_storms && (PutIn_Logic.bomb_bag || (((/*PutIn_Logic.can_see &&*/ PutIn_Logic.well_keys == 3) || PutIn_Logic.can_use_dins) && PutIn_Logic.goron_bracelet));
	}
	if (PutIn_Logic.current_forest_keys < 5) {
		var for_keys = [[1,2,3,4,5], [6,8], [7], [9,10,11]]
		var done = false;
		for (i = 0; i < for_keys.length; i++) {
			for (j = 0; j < for_keys[i].length; j++) {
				str = "forest" + for_keys[i][j];
				if (!(Location_PutIn_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
					PutIn_Logic.min_forest_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {PutIn_Logic.min_forest_keys = 5;}
	}
	PutIn_Logic.forest_keys = Math.max(PutIn_Logic.min_forest_keys,PutIn_Logic.current_forest_keys);
	if (!PutIn_Logic.forest_boss_key) {
		var bk = true;
		for (i = 1; i <= 13; i++) {
			str = "forest" + i;
			if (!Location_PutIn_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		PutIn_Logic.forest_boss_key = bk;
	}
	
	if (PutIn_Logic.current_fire_keys < 8 && ((PutIn_Logic.can_wear_goron_tunic && PutIn_Logic.hammer && PutIn_Logic.hover_boots) || (Check["fire6"] != "small_key" && Check["fire6"] != "unknown"))) {
		var fir_keys = [[1,2,3], [4,5],[], [7,8],[9], [10,11,12], [13,14,15]]
		var done = false;
		for (i = 0; i < fir_keys.length; i++) {
			for (j = 0; j < fir_keys[i].length; j++) {
				str = "fire" + fir_keys[i][j];
				if (!(Location_PutIn_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" || Check[str] == "unknown" || (Check[str] == "boss_key" && (Check["fire6"] == "small_key" || Check["fire6"] == "unknown")))) {
					PutIn_Logic.min_fire_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {PutIn_Logic.min_fire_keys = 8;}
	}
	PutIn_Logic.fire_keys = Math.max(PutIn_Logic.min_fire_keys,PutIn_Logic.current_fire_keys);
	if (!PutIn_Logic.fire_boss_key) {
		var bk = true;
		for (i = 1; i <= 15; i++) {
			if (i == 6) {
				continue;
			}
			str = "fire" + i;
			if (!Location_PutIn_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		PutIn_Logic.fire_boss_key = bk;
	}
	if (PutIn_Logic.current_water_keys < 6 && (PutIn_Logic.longshot && PutIn_Logic.iron_boots || (Check["water11"] != "small_key" && Check["water11"] != "unknown"))) {
		var wat_keys = [[1,2,3,4,5,6,9]]
		var done = false;
		for (i = 0; i < wat_keys.length; i++) {
			for (j = 0; j < wat_keys[i].length; j++) {
				str = "water" + wat_keys[i][j];
				if (!(Location_PutIn_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown"|| (Check[str] == "boss_key" && (Check["water11"] == "small_key" || Check["water11"] == "unknown")))) {
					PutIn_Logic.min_water_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {PutIn_Logic.min_water_keys = 6;}
	}
	PutIn_Logic.water_keys = Math.max(PutIn_Logic.min_water_keys,PutIn_Logic.current_water_keys);
	if (!PutIn_Logic.water_boss_key) {
		var bk = true;
		for (i = 1; i <= 10; i++) {
			str = "water" + i;
			if (!Location_PutIn_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		PutIn_Logic.water_boss_key = bk;
	}
	if (PutIn_Logic.current_spirit_keys < 5) {
		var spi_keys = [[1,2,8,9], [3,4,5,6], [], [7,10,11,12,13],[14,15,16,17],[18,19]]
		var done = false;
		for (i = 0; i < spi_keys.length; i++) {
			for (j = 0; j < spi_keys[i].length; j++) {
				str = "spirit" + spi_keys[i][j];
				if (!(Location_PutIn_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
					PutIn_Logic.min_spirit_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {PutIn_Logic.min_spirit_keys = 5;}
	}
	PutIn_Logic.spirit_keys = Math.max(PutIn_Logic.min_spirit_keys,PutIn_Logic.current_spirit_keys);
	if (!PutIn_Logic.spirit_boss_key) {
		var bk = true;
		for (i = 1; i <= 19; i++) {
			str = "spirit" + i;
			if (!Location_PutIn_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		PutIn_Logic.spirit_boss_key = bk;
	}
	if (PutIn_Logic.current_shadow_keys < 5) {
		var sha_keys = [[1,2,3,4], [5,6,7,8,9], [10,11],[12,13,14],[15,16,17]]
		var done = false;
		for (i = 0; i < sha_keys.length; i++) {
			for (j = 0; j < sha_keys[i].length; j++) {
				str = "shadow" + sha_keys[i][j];
				if (!(Location_PutIn_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
					PutIn_Logic.min_shadow_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {PutIn_Logic.min_shadow_keys = 5;}
	}
	PutIn_Logic.shadow_keys = Math.max(PutIn_Logic.min_shadow_keys,PutIn_Logic.current_shadow_keys);
	if (!PutIn_Logic.shadow_boss_key) {
		var bk = true;
		for (i = 1; i <= 17; i++) {
			str = "shadow" + i;
			if (!Location_PutIn_Logic[str] && (Check[str] == "boss_key" || Check[str] == "unknown")) {
				bk = false;
				break;
			}
		}
		PutIn_Logic.shadow_boss_key = bk;
	}
	if (PutIn_Logic.current_ganons_keys < 2) {
		PutIn_Logic.min_ganons_keys = 2;
		var done = false;
		for (i = 1; i <= 16; i++) {
			if (i == 8) {continue;}
			str = "ganons" + i;
			if (!(Location_PutIn_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
				PutIn_Logic.min_ganons_keys = 0;
				break;
			}
		}
	}
	PutIn_Logic.ganons_keys = Math.max(PutIn_Logic.min_ganons_keys,PutIn_Logic.current_ganons_keys);
	if (PutIn_Logic.current_gtg_keys < 9) {
		var ger_keys = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,22], [],[],[17],[18],[],[19],[20]]
		var done = false;
		for (i = 0; i < ger_keys.length; i++) {
			for (j = 0; j < ger_keys[i].length; j++) {
				str = "gtg" + ger_keys[i][j];
				if (!(Location_PutIn_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
					PutIn_Logic.min_gtg_keys = i;
					done = true;
					break;
				}
			}
			if (done) {break;}
		}
		if (!done) {PutIn_Logic.min_gtg_keys = 9;}
	}
	PutIn_Logic.gtg_keys = Math.max(PutIn_Logic.min_gtg_keys,PutIn_Logic.current_gtg_keys);
	if (PutIn_Logic.current_well_keys < 3) {
		PutIn_Logic.min_well_keys = 3;
		for (i = 1; i <= 14; i++) {
			if (i == 12 || i == 13) {continue;}
			str = "well" + i;
			if (!(Location_PutIn_Logic[str]) && (Check[str] == "small_key" || Check[str] == "unknown" )) {
				PutIn_Logic.min_well_keys = 0;
				break;
			}
		}
	}
	PutIn_Logic.well_keys = Math.max(PutIn_Logic.min_well_keys,PutIn_Logic.current_well_keys);
	
	if(PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets) {PutIn_Logic.min_ganons_keys = 1;}
	PutIn_Logic.ganons_keys = Math.max(PutIn_Logic.min_ganons_keys,PutIn_Logic.current_ganons_keys);
	
/*	PutIn_Logic.forest_boss_key = PutIn_Logic.forced_forest_boss_key;
	PutIn_Logic.fire_boss_key = PutIn_Logic.forced_fire_boss_key;
	PutIn_Logic.water_boss_key = PutIn_Logic.forced_water_boss_key;
	PutIn_Logic.spirit_boss_key = PutIn_Logic.forced_spirit_boss_key;
	PutIn_Logic.shadow_boss_key = PutIn_Logic.forced_shadow_boss_key; */
	if(Game.forest_boss_key == true) {PutIn_Logic.forest_boss_key = Location_PutIn_Logic[Location.forest_boss_key]; }
	if(Game.fire_boss_key == true) {PutIn_Logic.fire_boss_key = Location_PutIn_Logic[Location.fire_boss_key]; }
	if(Game.water_boss_key == true) {PutIn_Logic.water_boss_key = Location_PutIn_Logic[Location.water_boss_key]; }
	if(Game.spirit_boss_key == true) {PutIn_Logic.spirit_boss_key = Location_PutIn_Logic[Location.spirit_boss_key]; }
	if(Game.shadow_boss_key == true) {PutIn_Logic.shadow_boss_key = Location_PutIn_Logic[Location.shadow_boss_key]; }
	PutIn_Logic.forest_medallion = true;
	PutIn_Logic.fire_medallion = true;
	PutIn_Logic.water_medallion = true;
	PutIn_Logic.gen1 = true;
	PutIn_Logic.gen2 = true;
	PutIn_Logic.gen3 = true;
	
	if(Logic.forest_medallion_location == "deku") {if (document.getElementById("deku_queen_gohma") == null) {Game.forest_medallion = true;} PutIn_Logic.forest_medallion = Location_PutIn_Logic.deku_queen_gohma;}
	if(Logic.forest_medallion_location == "dodongos") {if (document.getElementById("dodongos_king_dodongo") == null) {Game.forest_medallion = true;} PutIn_Logic.forest_medallion = Location_PutIn_Logic.dodongos_king_dodongo;}
	if(Logic.forest_medallion_location == "jabu") {if (document.getElementById("jabu_barinade") == null) {Game.forest_medallion = true;} PutIn_Logic.forest_medallion = Location_PutIn_Logic.jabu_barinade;}
	if(Logic.forest_medallion_location == "forest") {if (document.getElementById("forest14") == null) {Game.forest_medallion = true;} PutIn_Logic.forest_medallion = Location_PutIn_Logic.forest14;}
	if(Logic.forest_medallion_location == "fire") {if (document.getElementById("fire6") == null) {Game.forest_medallion = true;} PutIn_Logic.forest_medallion = Location_PutIn_Logic.fire6;}
	if(Logic.forest_medallion_location == "water") {if (document.getElementById("water11") == null) {Game.forest_medallion = true;} PutIn_Logic.forest_medallion = Location_PutIn_Logic.water11;}
	if(Logic.forest_medallion_location == "spirit") {if (document.getElementById("spirit20") == null) {Game.forest_medallion = true;} PutIn_Logic.forest_medallion = Location_PutIn_Logic.spirit20;}
	if(Logic.forest_medallion_location == "shadow") {if (document.getElementById("shadow18") == null) {Game.forest_medallion = true;} PutIn_Logic.forest_medallion = Location_PutIn_Logic.shadow18;}
	if(Logic.forest_medallion_location == "pocket") {Game.forest_medallion = true; PutIn_Logic.forest_medallion = true;}
	
	if(Logic.fire_medallion_location == "deku") {if (document.getElementById("deku_queen_gohma") == null) {Game.fire_medallion = true;} PutIn_Logic.fire_medallion = Location_PutIn_Logic.deku_queen_gohma;}
	if(Logic.fire_medallion_location == "dodongos") {if (document.getElementById("dodongos_king_dodongo") == null) {Game.fire_medallion = true;} PutIn_Logic.fire_medallion = Location_PutIn_Logic.dodongos_king_dodongo;}
	if(Logic.fire_medallion_location == "jabu") {if (document.getElementById("jabu_barinade") == null) {Game.fire_medallion = true;} PutIn_Logic.fire_medallion = Location_PutIn_Logic.jabu_barinade;}
	if(Logic.fire_medallion_location == "forest") {if (document.getElementById("forest14") == null) {Game.fire_medallion = true;} PutIn_Logic.fire_medallion = Location_PutIn_Logic.forest14;}
	if(Logic.fire_medallion_location == "fire") {if (document.getElementById("fire6") == null) {Game.fire_medallion = true;} PutIn_Logic.fire_medallion = Location_PutIn_Logic.fire6;}
	if(Logic.fire_medallion_location == "water") {if (document.getElementById("water11") == null) {Game.fire_medallion = true;} PutIn_Logic.fire_medallion = Location_PutIn_Logic.water11;}
	if(Logic.fire_medallion_location == "spirit") {if (document.getElementById("spirit20") == null) {Game.fire_medallion = true;} PutIn_Logic.fire_medallion = Location_PutIn_Logic.spirit20;}
	if(Logic.fire_medallion_location == "shadow") {if (document.getElementById("shadow18") == null) {Game.fire_medallion = true;} PutIn_Logic.fire_medallion = Location_PutIn_Logic.shadow18;}
	if(Logic.fire_medallion_location == "pocket") {Game.fire_medallion = true; PutIn_Logic.fire_medallion = true;}
	
	if(Logic.water_medallion_location == "deku") {if (document.getElementById("deku_queen_gohma") == null) {Game.water_medallion = true;} PutIn_Logic.water_medallion = Location_PutIn_Logic.deku_queen_gohma;}
	if(Logic.water_medallion_location == "dodongos") {if (document.getElementById("dodongos_king_dodongo") == null) {Game.water_medallion = true;} PutIn_Logic.water_medallion = Location_PutIn_Logic.dodongos_king_dodongo;}
	if(Logic.water_medallion_location == "jabu") {if (document.getElementById("jabu_barinade") == null) {Game.water_medallion = true;} PutIn_Logic.water_medallion = Location_PutIn_Logic.jabu_barinade;}
	if(Logic.water_medallion_location == "forest") {if (document.getElementById("forest14") == null) {Game.water_medallion = true;} PutIn_Logic.water_medallion = Location_PutIn_Logic.forest14;}
	if(Logic.water_medallion_location == "fire") {if (document.getElementById("fire6") == null) {Game.water_medallion = true;} PutIn_Logic.water_medallion = Location_PutIn_Logic.fire6;}
	if(Logic.water_medallion_location == "water") {if (document.getElementById("water11") == null) {Game.water_medallion = true;} PutIn_Logic.water_medallion = Location_PutIn_Logic.water11;}
	if(Logic.water_medallion_location == "spirit") {if (document.getElementById("spirit20") == null) {Game.water_medallion = true;} PutIn_Logic.water_medallion = Location_PutIn_Logic.spirit20;}
	if(Logic.water_medallion_location == "shadow") {if (document.getElementById("shadow18") == null) {Game.water_medallion = true;} PutIn_Logic.water_medallion = Location_PutIn_Logic.shadow18;}
	if(Logic.water_medallion_location == "pocket") {Game.water_medallion = true; PutIn_Logic.water_medallion = true;}

	PutIn_Logic.shadow_medallion = false;
	PutIn_Logic.spirit_medallion = false;
	for (var i = 1; i <=3; i++) {
		str = "generic" + i;
		str2 = "gen" + i;
		if(Logic[str] == "deku") {if (document.getElementById("deku_queen_gohma") == null) {Game[str2] = true;} PutIn_Logic[str2] = Location_PutIn_Logic.deku_queen_gohma; if(document.getElementById("text_deku").style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = Location_PutIn_Logic.deku_queen_gohma;} if(document.getElementById("text_deku").style.color=="rgb(255, 165, 0)") {PutIn_Logic.spirit_medallion = Location_PutIn_Logic.deku_queen_gohma;}}
		if(Logic[str] == "dodongos") {if (document.getElementById("dodongos_king_dodongo") == null) {Game[str2] = true;} PutIn_Logic[str2] = Location_PutIn_Logic.dodongos_king_dodongo; if(document.getElementById("text_dodongos").style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = Location_PutIn_Logic.dodongos_king_dodongo;} if(document.getElementById("text_dodongos").style.color=="rgb(255, 165, 0)") {PutIn_Logic.spirit_medallion = Location_PutIn_Logic.dodongos_king_dodongo;}}
		if(Logic[str] == "jabu") {if (document.getElementById("jabu_barinade") == null) {Game[str2] = true;} PutIn_Logic[str2] = Location_PutIn_Logic.jabu_barinade; if(document.getElementById("text_jabu").style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = Location_PutIn_Logic.jabu_barinade;} if(document.getElementById("text_jabu").style.color=="rgb(255, 165, 0)") {PutIn_Logic.spirit_medallion = Location_PutIn_Logic.jabu_barinade;}}
		if(Logic[str] == "forest") {if (document.getElementById("forest14") == null) {Game[str2] = true;} PutIn_Logic[str2] = Location_PutIn_Logic.forest14; if(document.getElementById("text_forest").style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = Location_PutIn_Logic.forest14;} if(document.getElementById("text_forest").style.color=="rgb(255, 165, 0)") {Location_PutIn_Logic.forest14;}}
		if(Logic[str] == "fire") {if (document.getElementById("fire6") == null) {Game[str2] = true;} PutIn_Logic[str2] = Location_PutIn_Logic.fire6; if(document.getElementById("text_fire").style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = Location_PutIn_Logic.fire6;} if(document.getElementById("text_fire").style.color=="rgb(255, 165, 0)") {PutIn_Logic.spirit_medallion = Location_PutIn_Logic.fire6;}}
		if(Logic[str] == "water") {if (document.getElementById("water11") == null) {Game[str2] = true;} PutIn_Logic[str2] = Location_PutIn_Logic.water11; if(document.getElementById("text_water").style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = Location_PutIn_Logic.water11;} if(document.getElementById("text_water").style.color=="rgb(255, 165, 0)") {PutIn_Logic.spirit_medallion = Location_PutIn_Logic.water11;}}
		if(Logic[str] == "spirit") {if (document.getElementById("spirit20") == null) {Game[str2] = true;} PutIn_Logic[str2] = Location_PutIn_Logic.spirit20; if(document.getElementById("text_spirit").style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = Location_PutIn_Logic.spirit20;} if(document.getElementById("text_spirit").style.color=="rgb(255, 165, 0)") {PutIn_Logic.spirit_medallion = Location_PutIn_Logic.spirit20;}}
		if(Logic[str] == "shadow") {if (document.getElementById("shadow18") == null) {Game[str2] = true;} PutIn_Logic[str2] = Location_PutIn_Logic.shadow18; if(document.getElementById("text_shadow").style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = Location_PutIn_Logic.shadow18;} if(document.getElementById("text_shadow").style.color=="rgb(255, 165, 0)") {PutIn_Logic.spirit_medallion = Location_PutIn_Logic.shadow18;}}
		if(Logic[str] == "pocket") {Game[str2] = true; PutIn_Logic[str2] = true; if(document.getElementById("text_pocket").style.color=="rgb(238, 130, 238)") {PutIn_Logic.shadow_medallion = true;} if(document.getElementById("text_pocket").style.color=="rgb(255, 165, 0)") {PutIn_Logic.spirit_medallion = true;}}
	}
	
	PutIn_Logic.kokiri_emerald = true;
	PutIn_Logic.goron_ruby = true;
	PutIn_Logic.zora_sapphire = true;
	if(Logic.emerald == "deku") {PutIn_Logic.kokiri_emerald = Location_PutIn_Logic.deku_queen_gohma;}
	if(Logic.emerald == "dodongos") {PutIn_Logic.kokiri_emerald = Location_PutIn_Logic.dodongos_king_dodongo;}
	if(Logic.emerald == "jabu") {PutIn_Logic.kokiri_emerald = Location_PutIn_Logic.jabu_barinade;}
	if(Logic.emerald == "forest") {PutIn_Logic.kokiri_emerald = Location_PutIn_Logic.forest14;}
	if(Logic.emerald == "fire") {PutIn_Logic.kokiri_emerald = Location_PutIn_Logic.fire6;}
	if(Logic.emerald == "water") {PutIn_Logic.kokiri_emerald = Location_PutIn_Logic.water11;}
	if(Logic.emerald == "spirit") {PutIn_Logic.kokiri_emerald = Location_PutIn_Logic.spirit20;}
	if(Logic.emerald == "shadow") {PutIn_Logic.kokiri_emerald = Location_PutIn_Logic.shadow18;}
	if(Logic.emerald == "pocket") {PutIn_Logic.kokiri_emerald = true;}
	
	if(Logic.ruby == "deku") {PutIn_Logic.goron_ruby = Location_PutIn_Logic.deku_queen_gohma;}
	if(Logic.ruby == "dodongos") {PutIn_Logic.goron_ruby = Location_PutIn_Logic.dodongos_king_dodongo;}
	if(Logic.ruby == "jabu") {PutIn_Logic.goron_ruby = Location_PutIn_Logic.jabu_barinade;}
	if(Logic.ruby == "forest") {PutIn_Logic.goron_ruby = Location_PutIn_Logic.forest14;}
	if(Logic.ruby == "fire") {PutIn_Logic.goron_ruby = Location_PutIn_Logic.fire6;}
	if(Logic.ruby == "water") {PutIn_Logic.goron_ruby = Location_PutIn_Logic.water11;}
	if(Logic.ruby == "spirit") {PutIn_Logic.goron_ruby = Location_PutIn_Logic.spirit20;}
	if(Logic.ruby == "shadow") {PutIn_Logic.goron_ruby = Location_PutIn_Logic.shadow18;}
	if(Logic.ruby == "pocket") {PutIn_Logic.goron_ruby = true;}
	
	if(Logic.sapphire == "deku") {PutIn_Logic.zora_sapphire = Location_PutIn_Logic.deku_queen_gohma;}
	if(Logic.sapphire == "dodongos") {PutIn_Logic.zora_sapphire = Location_PutIn_Logic.dodongos_king_dodongo;}
	if(Logic.sapphire == "jabu") {PutIn_Logic.zora_sapphire = Location_PutIn_Logic.jabu_barinade;}
	if(Logic.sapphire == "forest") {PutIn_Logic.zora_sapphire = Location_PutIn_Logic.forest14;}
	if(Logic.sapphire == "fire") {PutIn_Logic.zora_sapphire = Location_PutIn_Logic.fire6;}
	if(Logic.sapphire == "water") {PutIn_Logic.zora_sapphire = Location_PutIn_Logic.water11;}
	if(Logic.sapphire == "spirit") {PutIn_Logic.zora_sapphire = Location_PutIn_Logic.spirit20;}
	if(Logic.sapphire == "shadow") {PutIn_Logic.zora_sapphire = Location_PutIn_Logic.shadow18;}
	if(Logic.sapphire == "pocket") {PutIn_Logic.zora_sapphire = true;}
	
	Location_PutIn_Logic.mido_1 = true;
	Location_PutIn_Logic.mido_2 = true;
	Location_PutIn_Logic.mido_3 = true;
	Location_PutIn_Logic.mido_4 = true;
	Location_PutIn_Logic.kokiri_sword = true;
	Location_PutIn_Logic.kokiri_song_of_storms = PutIn_Logic.song_of_storms;
	Location_PutIn_Logic.talons_chickens = true;
	Location_PutIn_Logic.back_of_ranch = true;
	Location_PutIn_Logic.hyrule_forest_boulder = PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.hyrule_open_grotto = true;
	Location_PutIn_Logic.hyrule_hp_scrub = PutIn_Logic.can_blast_or_smash;;
	Location_PutIn_Logic.hyrule_boulder_of_destiny = PutIn_Logic.can_blast_or_smash;;
	Location_PutIn_Logic.hyrule_tektite_grotto = PutIn_Logic.can_blast_or_smash && (PutIn_Logic.golden_scale || PutIn_Logic.iron_boots);
	Location_PutIn_Logic.gerudovalley_box = true;
	Location_PutIn_Logic.gerudovalley_waterfall = true;
	Location_PutIn_Logic.gerudo_hammer = PutIn_Logic.fortress_access && PutIn_Logic.hammer;
	Location_PutIn_Logic.hylia_child_fishing = true;
	Location_PutIn_Logic.hylia_bottle = PutIn_Logic.silver_scale;
	Location_PutIn_Logic.hylia_adult_fishing = PutIn_Logic.hookshot || PutIn_Logic.child_can_enter_river;
	Location_PutIn_Logic.hylia_lab_top = PutIn_Logic.hookshot || PutIn_Logic.child_can_enter_river;
	Location_PutIn_Logic.hylia_lab_dive = PutIn_Logic.golden_scale;
	Location_PutIn_Logic.hylia_sun_shoot = PutIn_Logic.longshot && PutIn_Logic.bow;
	Location_PutIn_Logic.market_slingshot_game = true;
	Location_PutIn_Logic.richard = true;
	Location_PutIn_Logic.market_bowling_1 = PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.market_bowling_2 = PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.market_lens_game = PutIn_Logic.can_see;
	Location_PutIn_Logic.poes= (PutIn_Logic.bow && PutIn_Logic.eponas && PutIn_Logic.bottle) || PutIn_Logic.big_poe;
	Location_PutIn_Logic.dins_fairy = PutIn_Logic.bomb_bag && PutIn_Logic.lullaby;
	Location_PutIn_Logic.g_fairy = PutIn_Logic.golden_gauntlets && PutIn_Logic.lullaby;
	Location_PutIn_Logic.lacs = PutIn_Logic.shadow_medallion && PutIn_Logic.spirit_medallion;
	Location_PutIn_Logic.fountain_fairy = PutIn_Logic.ice_access && PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.ice_glacier_hp = PutIn_Logic.ice_access;
	Location_PutIn_Logic.ice_bottom_of_fountain = PutIn_Logic.ice_access && PutIn_Logic.iron_boots;
	Location_PutIn_Logic.ice_map = PutIn_Logic.ice_access;
	Location_PutIn_Logic.ice_compass = PutIn_Logic.ice_access;
	Location_PutIn_Logic.ice_hp = PutIn_Logic.ice_access;
	Location_PutIn_Logic.ice_irons = PutIn_Logic.ice_access;
	Location_PutIn_Logic.deku_lobby = true;
	Location_PutIn_Logic.deku_slingshot = true;
	Location_PutIn_Logic.deku_slingshot_room_side = true;
	Location_PutIn_Logic.deku_compass = true;
	Location_PutIn_Logic.deku_compass_room_side = true;
	Location_PutIn_Logic.deku_basement = true;
	Location_PutIn_Logic.deku_queen_gohma = PutIn_Logic.slingshot;
	Location_PutIn_Logic.ocarina_game = true;
	Location_PutIn_Logic.lost_woods_grotto = PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.lost_woods_scrub_grotto = PutIn_Logic.bomb_bag || (PutIn_Logic.sarias || PutIn_Logic.minuet) && PutIn_Logic.hammer;
	Location_PutIn_Logic.bridge_scrub = true;
	Location_PutIn_Logic.target = PutIn_Logic.slingshot;
	Location_PutIn_Logic.skull_kid = PutIn_Logic.sarias;
	Location_PutIn_Logic.theater = true;
	Location_PutIn_Logic.wolfos_grotto = PutIn_Logic.bomb_bag || (PutIn_Logic.sarias || PutIn_Logic.minuet) && PutIn_Logic.hammer;
	Location_PutIn_Logic.rolling_goron = PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.goron_dance = PutIn_Logic.lullaby && PutIn_Logic.sarias;
	Location_PutIn_Logic.goron_pot = (PutIn_Logic.bomb_bag || PutIn_Logic.goron_bracelet) && (PutIn_Logic.lullaby || PutIn_Logic.can_use_dins);
	Location_PutIn_Logic.goron_maze_1 = PutIn_Logic.can_blast_or_smash || PutIn_Logic.silver_gauntlets;
	Location_PutIn_Logic.goron_maze_2 = PutIn_Logic.can_blast_or_smash || PutIn_Logic.silver_gauntlets;
	Location_PutIn_Logic.goron_maze_3 = PutIn_Logic.hammer || PutIn_Logic.silver_gauntlets;
	Location_PutIn_Logic.goron_link = PutIn_Logic.can_stop_link_the_goron;
	Location_PutIn_Logic.dodongos_map = PutIn_Logic.can_enter_dodongos;
	Location_PutIn_Logic.dodongos_compass = PutIn_Logic.can_enter_dodongos;
	Location_PutIn_Logic.dodongos_bomb_flower_platform = PutIn_Logic.dodongos_climb;
	Location_PutIn_Logic.dodongos_bomb_bag = PutIn_Logic.dodongos_climb;
	Location_PutIn_Logic.dodongos_end_of_bridge = PutIn_Logic.dodongos_climb && PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.dodongos_above_king = PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.dodongos_king_dodongo = PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.trail_bombable = PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.trail_dodongos_top = true;
	Location_PutIn_Logic.trail_song_of_storms = PutIn_Logic.song_of_storms;
	Location_PutIn_Logic.crater_peak_fairy = PutIn_Logic.can_blast_or_smash && PutIn_Logic.lullaby;
	Location_PutIn_Logic.trade_quest = Location_PutIn_Logic.trade_quest = (((PutIn_Logic.ice_access || ((PutIn_Logic.giants_wallet || PutIn_Logic.can_enter_ganons) && PutIn_Logic.lullaby && PutIn_Logic.bottle)) && PutIn_Logic.prescription) || PutIn_Logic.claim_check) && PutIn_Logic.crater_top;
	Location_PutIn_Logic.crater_bean = (PutIn_Logic.bolero && PutIn_Logic.child_can_enter_river) || (PutIn_Logic.hover_boots && PutIn_Logic.crater_by_city);
	Location_PutIn_Logic.crater_hammer_fairy = PutIn_Logic.crater_by_city && PutIn_Logic.hammer && PutIn_Logic.lullaby;
	Location_PutIn_Logic.crater_grotto = PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.crater_nook_hp = PutIn_Logic.crater_top;
	Location_PutIn_Logic.man_on_roof = true;//PutIn_Logic.hookshot;
	Location_PutIn_Logic.kakariko_grotto = true;
	Location_PutIn_Logic.windmill = true;//PutIn_Logic.boomerang || PutIn_Logic.song_of_time;
	Location_PutIn_Logic.anju = true;
	Location_PutIn_Logic.cow_house = true;
	Location_PutIn_Logic.archery_game = PutIn_Logic.bow;
	Location_PutIn_Logic.redead_grotto = PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.anjus_chickens = true;
	Location_PutIn_Logic.tokens_10 = PutIn_Logic.gold_skulltulas >= 10;
	Location_PutIn_Logic.tokens_20 = PutIn_Logic.gold_skulltulas >= 20;
	Location_PutIn_Logic.tokens_30 = PutIn_Logic.gold_skulltulas >= 30;
	Location_PutIn_Logic.tokens_40 = PutIn_Logic.gold_skulltulas >= 40;
	Location_PutIn_Logic.tokens_50 = PutIn_Logic.gold_skulltulas >= 50;
	Location_PutIn_Logic.shield_grave = true;
	Location_PutIn_Logic.gravedigging_tour = true;
	Location_PutIn_Logic.suns_grave = PutIn_Logic.suns_song;
	Location_PutIn_Logic.fire_grave = PutIn_Logic.lullaby && PutIn_Logic.can_use_fire;
	Location_PutIn_Logic.graveyard_box = PutIn_Logic.child_can_enter_river || PutIn_Logic.longshot;
	Location_PutIn_Logic.race_1 = true;
	Location_PutIn_Logic.race_2 = true;
	Location_PutIn_Logic.river_pillar = PutIn_Logic.child_can_enter_river || PutIn_Logic.hover_boots;
	Location_PutIn_Logic.river_grotto = true;
	Location_PutIn_Logic.river_ledge = PutIn_Logic.child_can_enter_river || PutIn_Logic.hover_boots;
	Location_PutIn_Logic.frogs_1 = PutIn_Logic.child_can_enter_river && PutIn_Logic.song_of_storms;
	Location_PutIn_Logic.frogs_2 = PutIn_Logic.child_can_enter_river && (PutIn_Logic.song_of_storms && PutIn_Logic.lullaby && PutIn_Logic.eponas && PutIn_Logic.sarias && PutIn_Logic.suns_song && PutIn_Logic.song_of_time);
	Location_PutIn_Logic.zora_diving = (PutIn_Logic.lullaby && PutIn_Logic.bomb_bag) || PutIn_Logic.silver_scale;
	Location_PutIn_Logic.zora_torches = (PutIn_Logic.lullaby && PutIn_Logic.bomb_bag) || PutIn_Logic.silver_scale;
	Location_PutIn_Logic.thaw_king = PutIn_Logic.ice_access || (PutIn_Logic.bottle && (PutIn_Logic.giants_wallet || PutIn_Logic.can_enter_ganons) && PutIn_Logic.lullaby);
	Location_PutIn_Logic.colossus_bean = PutIn_Logic.requiem && PutIn_Logic.child_can_enter_river;
	Location_PutIn_Logic.colossus_fairy = PutIn_Logic.can_enter_colossus && PutIn_Logic.bomb_bag && PutIn_Logic.lullaby;
	Location_PutIn_Logic.wasteland = PutIn_Logic.can_cross_quicksand && PutIn_Logic.can_use_fire;
	Location_PutIn_Logic.gerudo_roof = PutIn_Logic.fortress_access && (PutIn_Logic.hookshot || PutIn_Logic.hover_boots);
	Location_PutIn_Logic.gerudo_archery_1 = PutIn_Logic.eponas && PutIn_Logic.bow;
	Location_PutIn_Logic.gerudo_archery_2 = PutIn_Logic.eponas && PutIn_Logic.bow;
	Location_PutIn_Logic.jabu_boomerang = PutIn_Logic.can_enter_jabu;
	Location_PutIn_Logic.jabu_map = PutIn_Logic.can_enter_jabu && PutIn_Logic.boomerang;
	Location_PutIn_Logic.jabu_compass = PutIn_Logic.can_enter_jabu && PutIn_Logic.boomerang;
	Location_PutIn_Logic.jabu_barinade = PutIn_Logic.can_enter_jabu && PutIn_Logic.boomerang;
	Location_PutIn_Logic.ganons1 = PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets;
	Location_PutIn_Logic.ganons2 = PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets;
	Location_PutIn_Logic.ganons3 = PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets;
	Location_PutIn_Logic.ganons4 = PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets;
	Location_PutIn_Logic.ganons5 = PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets;
	Location_PutIn_Logic.ganons6 = PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets;
	Location_PutIn_Logic.ganons7 = PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets ;//&& PutIn_Logic.can_see;
	Location_PutIn_Logic.ganons8 = PutIn_Logic.can_enter_ganons && PutIn_Logic.golden_gauntlets && PutIn_Logic.lullaby && PutIn_Logic.ganons_keys >= 1;
	Location_PutIn_Logic.ganons9 = PutIn_Logic.can_enter_ganons;
	Location_PutIn_Logic.ganons10 = PutIn_Logic.can_enter_ganons && PutIn_Logic.bomb_bag;//&& PutIn_Logic.can_see;
	Location_PutIn_Logic.ganons11 = PutIn_Logic.can_enter_ganons;
	Location_PutIn_Logic.ganons12 = PutIn_Logic.can_enter_ganons;
	Location_PutIn_Logic.ganons13 = PutIn_Logic.can_enter_ganons;
	Location_PutIn_Logic.ganons14 = PutIn_Logic.can_enter_ganons;
	Location_PutIn_Logic.ganons15 = PutIn_Logic.can_enter_ganons && (PutIn_Logic.longshot || ((PutIn_Logic.fire_arrows && PutIn_Logic.magic) || (PutIn_Logic.hover_boots && PutIn_Logic.can_use_dins)));
	Location_PutIn_Logic.ganons16 = PutIn_Logic.can_enter_ganons;
	Location_PutIn_Logic.zeldasSpot = true;
	Location_PutIn_Logic.eponasSpot = true;
	Location_PutIn_Logic.sariasSpot = true;
	Location_PutIn_Logic.stormsSpot = true;
	Location_PutIn_Logic.sunsSpot = PutIn_Logic.lullaby;
	Location_PutIn_Logic.boleroSpot = PutIn_Logic.can_enter_fire_temple;
	Location_PutIn_Logic.minuetSpot = PutIn_Logic.minuet || PutIn_Logic.sarias;
	Location_PutIn_Logic.requiemSpot = PutIn_Logic.can_enter_colossus;
	Location_PutIn_Logic.serenadeSpot = PutIn_Logic.ice_access;
	Location_PutIn_Logic.preludeSpot = PutIn_Logic.forest_medallion;
	Location_PutIn_Logic.nocturneSpot = PutIn_Logic.forest_medallion && PutIn_Logic.fire_medallion && PutIn_Logic.water_medallion;
	Location_PutIn_Logic.oot = PutIn_Logic.kokiri_emerald && PutIn_Logic.goron_ruby && PutIn_Logic.zora_sapphire;
	
	Location_PutIn_Logic.gs_kokiri_child = true;
	Location_PutIn_Logic.gs_kokiri_bean = PutIn_Logic.bottle;
	Location_PutIn_Logic.gs_kokiri_adult = PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_market = true;
	Location_PutIn_Logic.gs_lost_woods_bean1 = PutIn_Logic.bottle;
	Location_PutIn_Logic.gs_lost_woods_bean2 = PutIn_Logic.bottle;
	Location_PutIn_Logic.gs_lost_woods_above_stage = (PutIn_Logic.bomb_bag || PutIn_Logic.silver_scale) && (PutIn_Logic.sarias || PutIn_Logic.minuet);
	Location_PutIn_Logic.gs_sacred_forest = PutIn_Logic.hookshot && (PutIn_Logic.sarias || PutIn_Logic.minuet);
	Location_PutIn_Logic.gs_outside_kakariko = (PutIn_Logic.boomerang && PutIn_Logic.bomb_bag) || (PutIn_Logic.can_blast_or_smash && PutIn_Logic.hookshot)
	Location_PutIn_Logic.gs_near_gerudo = (PutIn_Logic.hammer && PutIn_Logic.can_use_fire && PutIn_Logic.hookshot) || (PutIn_Logic.can_use_dins && PutIn_Logic.bomb_bag && PutIn_Logic.boomerang);
	Location_PutIn_Logic.gs_hyrule_castle_tree = true;
	Location_PutIn_Logic.gs_hyrule_castle_grotto = PutIn_Logic.song_of_storms && PutIn_Logic.bomb_bag && PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_lon_lon_tree = true;
	Location_PutIn_Logic.gs_lon_lon_shed = true;
	Location_PutIn_Logic.gs_lon_lon_window = PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_lon_lon_back_wall = PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_kakariko_construction = true;
	Location_PutIn_Logic.gs_kakariko_skulltula_house = true;
	Location_PutIn_Logic.gs_kakariko_guard_house = true;
	Location_PutIn_Logic.gs_kakariko_tree = true;
	Location_PutIn_Logic.gs_kakariko_tower = PutIn_Logic.bomb_bag || PutIn_Logic.slingshot;
	Location_PutIn_Logic.gs_kakariko_impas = PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_graveyard_wall = PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_graveyard_bean = PutIn_Logic.bottle;
	Location_PutIn_Logic.gs_trail_bean = PutIn_Logic.bottle && (PutIn_Logic.bomb_bag || PutIn_Logic.goron_bracelet);
	Location_PutIn_Logic.gs_trail_bombable_wall = PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.gs_trail_hail_path = PutIn_Logic.hammer;
	Location_PutIn_Logic.gs_trail_above_dodongos = PutIn_Logic.hammer;
	Location_PutIn_Logic.gs_goron_city_center = true;
	Location_PutIn_Logic.gs_goron_city_maze = PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.gs_crater_crate = PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.gs_crater_bean = PutIn_Logic.bottle && PutIn_Logic.bolero;
	Location_PutIn_Logic.gs_river_ladder = PutIn_Logic.silver_scale || PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.gs_river_near_grotto = PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_river_above_bridge = PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_domain = PutIn_Logic.lullaby && (PutIn_Logic.hookshot || PutIn_Logic.magic || PutIn_Logic.bow);
	Location_PutIn_Logic.gs_fountain_above_log = PutIn_Logic.rutos_letter && (PutIn_Logic.silver_scale || (PutIn_Logic.bomb_bag && PutIn_Logic.lullaby)) && PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_fountain_tree = PutIn_Logic.rutos_letter && (PutIn_Logic.silver_scale || (PutIn_Logic.bomb_bag && PutIn_Logic.lullaby))
	Location_PutIn_Logic.gs_fountain_hidden_cave = PutIn_Logic.ice_access && PutIn_Logic.silver_gauntlets && PutIn_Logic.hookshot && PutIn_Logic.can_blast_or_smash;
	Location_PutIn_Logic.gs_hylia_bean = PutIn_Logic.bottle;
	Location_PutIn_Logic.gs_hylia_lab_wall = PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_hylia_island = true;
	Location_PutIn_Logic.gs_hylia_tree = PutIn_Logic.longshot;
	Location_PutIn_Logic.gs_lab_crate = PutIn_Logic.iron_boots && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_valley_small_bridge = PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_valley_bean = PutIn_Logic.bottle;
	Location_PutIn_Logic.gs_valley_tent = PutIn_Logic.fortress_access && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_valley_pillar = PutIn_Logic.fortress_access && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_fortress_archery = PutIn_Logic.fortress_access && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_fortress_top = PutIn_Logic.fortress_access;
	Location_PutIn_Logic.gs_wasteland_structure = PutIn_Logic.hookshot && PutIn_Logic.can_cross_quicksand;
	Location_PutIn_Logic.gs_colossus_bean = PutIn_Logic.bottle && PutIn_Logic.requiem;
	Location_PutIn_Logic.gs_colossus_tree = PutIn_Logic.hookshot && PutIn_Logic.can_enter_colossus;
	Location_PutIn_Logic.gs_colossus_hill = (PutIn_Logic.requiem && (PutIn_Logic.bomb_bag || PutIn_Logic.silver_scale)) || (PutIn_Logic.longshot && PutIn_Logic.can_enter_colossus);
	Location_PutIn_Logic.gs_zora_river_tree = true;
	Location_PutIn_Logic.gs_ganons = true;
	Location_PutIn_Logic.gs_deku_basement_back = PutIn_Logic.boomerang && PutIn_Logic.bomb_bag && PutIn_Logic.slingshot;
	Location_PutIn_Logic.gs_deku_basement_gate = true;
	Location_PutIn_Logic.gs_deku_basement_vines = PutIn_Logic.slingshot || PutIn_Logic.boomerang || PutIn_Logic.bomb_bag || PutIn_Logic.can_use_dins;
	Location_PutIn_Logic.gs_deku_compass = true;
	Location_PutIn_Logic.gs_dodongos_east_side = PutIn_Logic.can_enter_dodongos;
	Location_PutIn_Logic.gs_dodongos_stair_room = PutIn_Logic.dodongos_climb;
	Location_PutIn_Logic.gs_dodongos_above_stairs = (PutIn_Logic.dodongos_climb && PutIn_Logic.hookshot) || (PutIn_Logic.boomerang && (PutIn_Logic.bomb_bag || PutIn_Logic.goron_bracelet));
	Location_PutIn_Logic.gs_dodongos_scarecrow = PutIn_Logic.can_enter_dodongos && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_dodongos_before_king = PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.gs_jabu_vines = PutIn_Logic.can_enter_jabu;
	Location_PutIn_Logic.gs_jabu_near_octo1 = PutIn_Logic.can_enter_jabu && PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_jabu_near_octo2 = PutIn_Logic.can_enter_jabu && PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_jabu_near_boss = PutIn_Logic.can_enter_jabu && PutIn_Logic.boomerang;
	Location_PutIn_Logic.gs_forest_first = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_forest_lobby = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_forest_outdoor_east = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && ((PutIn_Logic.bow || PutIn_Logic.song_of_time) || (PutIn_Logic.forest_keys >= 1 && PutIn_Logic.hover_boots));
	Location_PutIn_Logic.gs_forest_outdoor_west = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.hookshot && (((PutIn_Logic.bow || PutIn_Logic.song_of_time) && PutIn_Logic.longshot) || (PutIn_Logic.forest_keys >= 1 && PutIn_Logic.hover_boots) || (PutIn_Logic.forest_keys >= 2 && PutIn_Logic.goron_bracelet && PutIn_Logic.bow))
	Location_PutIn_Logic.gs_forest_basement = (PutIn_Logic.minuet || PutIn_Logic.sarias) && PutIn_Logic.bow && PutIn_Logic.goron_bracelet && PutIn_Logic.forest_keys >= 5;
	Location_PutIn_Logic.gs_fire_song_of_time = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.fire_keys >= 1 && PutIn_Logic.song_of_time;
	Location_PutIn_Logic.gs_fire_bomb_wall = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.goron_bracelet && PutIn_Logic.bomb_bag;
	Location_PutIn_Logic.gs_fire_scarecrow1 = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.goron_bracelet && PutIn_Logic.fire_keys >=5 && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_fire_scarecrow2 = PutIn_Logic.can_climb_fire_temple && PutIn_Logic.goron_bracelet && PutIn_Logic.fire_keys >=5 && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_fire_basement = PutIn_Logic.can_enter_fire_temple && PutIn_Logic.hammer;
	Location_PutIn_Logic.gs_water_south_basement = PutIn_Logic.can_enter_water && PutIn_Logic.bomb_bag && PutIn_Logic.lullaby;
	Location_PutIn_Logic.gs_water_river = PutIn_Logic.can_enter_water && PutIn_Logic.song_of_time && PutIn_Logic.water_keys >= 5;
	Location_PutIn_Logic.gs_water_central = PutIn_Logic.middle_water && PutIn_Logic.longshot || PutIn_Logic.can_use_farores;
	Location_PutIn_Logic.gs_water_near_boss_key = PutIn_Logic.can_enter_water && PutIn_Logic.longshot && PutIn_Logic.lullaby && PutIn_Logic.water_keys >=4;
	Location_PutIn_Logic.gs_water_platform_room = PutIn_Logic.can_enter_water && PutIn_Logic.longshot && PutIn_Logic.lullaby && PutIn_Logic.water_keys >=4;
	Location_PutIn_Logic.gs_spirit_metal_fence = PutIn_Logic.requiem && (PutIn_Logic.boomerang || PutIn_Logic.slingshot);
	Location_PutIn_Logic.gs_spirit_before_child_knuckle = (PutIn_Logic.bomb_bag && PutIn_Logic.boomerang && PutIn_Logic.hookshot && PutIn_Logic.spirit_keys >= 1) || (PutIn_Logic.boomerang && PutIn_Logic.spirit_keys >= 5 && PutIn_Logic.bomb_bag && PutIn_Logic.requiem) || (PutIn_Logic.hookshot && PutIn_Logic.silver_gauntlets && PutIn_Logic.spirit_keys >= 3);
	Location_PutIn_Logic.gs_spirit_boulder_room = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.song_of_time && (PutIn_Logic.bow || PutIn_Logic.hookshot || PutIn_Logic.bomb_bag);
	Location_PutIn_Logic.gs_spirit_temple_lobby = PutIn_Logic.can_enter_adult_spirit && PutIn_Logic.spirit_keys >= 3 && (PutIn_Logic.hookshot || PutIn_Logic.hover_boots);
	Location_PutIn_Logic.gs_spirit_bomb_for_light_room = PutIn_Logic.spirit_keys >= 1;
	Location_PutIn_Logic.gs_shadow_like_like = PutIn_Logic.can_bomb_shadow_wall;
	Location_PutIn_Logic.gs_shadow_crusher = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_shadow_giant_pot = PutIn_Logic.can_bomb_shadow_wall && PutIn_Logic.shadow_keys >=2 && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_shadow_near_boat = PutIn_Logic.can_pass_shadow_hookshot_door && PutIn_Logic.longshot && PutIn_Logic.shadow_keys >=4;
	Location_PutIn_Logic.gs_shadow_three_pots = PutIn_Logic.can_ride_shadow_boat;
	Location_PutIn_Logic.gs_well_west_inner = PutIn_Logic.boomerang /*&& PutIn_Logic.can_see*/ && PutIn_Logic.well_keys >=3;
	Location_PutIn_Logic.gs_well_east_inner = PutIn_Logic.boomerang /*&& PutIn_Logic.can_see*/ && PutIn_Logic.well_keys >=3;
	Location_PutIn_Logic.gs_well_like_like = PutIn_Logic.boomerang /*&& PutIn_Logic.can_see*/ && PutIn_Logic.well_keys >=3;
	Location_PutIn_Logic.gs_ice_spinning_scythe = PutIn_Logic.ice_access && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_ice_hp_room = PutIn_Logic.ice_access && PutIn_Logic.hookshot;
	Location_PutIn_Logic.gs_ice_block_room = PutIn_Logic.ice_access && PutIn_Logic.hookshot;
	
	gs[1] = Location_PutIn_Logic.gs_kokiri_child;
	gs[2] = Location_PutIn_Logic.gs_kokiri_bean;
	gs[3] = Location_PutIn_Logic.gs_kokiri_adult;
	gs[4] = Location_PutIn_Logic.gs_market;
	gs[5] = Location_PutIn_Logic.gs_lost_woods_bean1;
	gs[6] = Location_PutIn_Logic.gs_lost_woods_bean2;
	gs[7] = Location_PutIn_Logic.gs_lost_woods_above_stage;
	gs[8] = Location_PutIn_Logic.gs_sacred_forest;
	gs[9] = Location_PutIn_Logic.gs_outside_kakariko;
	gs[10] = Location_PutIn_Logic.gs_near_gerudo;
	gs[11] = Location_PutIn_Logic.gs_hyrule_castle_tree;
	gs[12] = Location_PutIn_Logic.gs_hyrule_castle_grotto;
	gs[13] = Location_PutIn_Logic.gs_lon_lon_tree;
	gs[14] = Location_PutIn_Logic.gs_lon_lon_shed;
	gs[15] = Location_PutIn_Logic.gs_lon_lon_window;
	gs[16] = Location_PutIn_Logic.gs_lon_lon_back_wall;
	gs[17] = Location_PutIn_Logic.gs_kakariko_construction;
	gs[18] = Location_PutIn_Logic.gs_kakariko_skulltula_house;
	gs[19] = Location_PutIn_Logic.gs_kakariko_guard_house;
	gs[20] = Location_PutIn_Logic.gs_kakariko_tree;
	gs[21] = Location_PutIn_Logic.gs_kakariko_tower;
	gs[22] = Location_PutIn_Logic.gs_kakariko_impas;
	gs[23] = Location_PutIn_Logic.gs_graveyard_wall;
	gs[24] = Location_PutIn_Logic.gs_graveyard_bean;
	gs[25] = Location_PutIn_Logic.gs_trail_bean;
	gs[26] = Location_PutIn_Logic.gs_trail_bombable_wall;
	gs[27] = Location_PutIn_Logic.gs_trail_hail_path;
	gs[28] = Location_PutIn_Logic.gs_trail_above_dodongos;
	gs[29] = Location_PutIn_Logic.gs_goron_city_center;
	gs[30] = Location_PutIn_Logic.gs_goron_city_maze;
	gs[31] = Location_PutIn_Logic.gs_crater_crate;
	gs[32] = Location_PutIn_Logic.gs_crater_bean;
	gs[33] = Location_PutIn_Logic.gs_river_ladder;
	gs[34] = Location_PutIn_Logic.gs_river_near_grotto;
	gs[35] = Location_PutIn_Logic.gs_river_above_bridge;
	gs[36] = Location_PutIn_Logic.gs_domain;
	gs[37] = Location_PutIn_Logic.gs_fountain_above_log;
	gs[38] = Location_PutIn_Logic.gs_fountain_tree;
	gs[39] = Location_PutIn_Logic.gs_fountain_hidden_cave;
	gs[40] = Location_PutIn_Logic.gs_hylia_bean;
	gs[41] = Location_PutIn_Logic.gs_hylia_lab_wall;
	gs[42] = Location_PutIn_Logic.gs_hylia_island;
	gs[43] = Location_PutIn_Logic.gs_hylia_tree;
	gs[44] = Location_PutIn_Logic.gs_lab_crate;
	gs[45] = Location_PutIn_Logic.gs_valley_small_bridge;
	gs[46] = Location_PutIn_Logic.gs_valley_bean;
	gs[47] = Location_PutIn_Logic.gs_valley_tent;
	gs[48] = Location_PutIn_Logic.gs_valley_pillar;
	gs[49] = Location_PutIn_Logic.gs_fortress_archery;
	gs[50] = Location_PutIn_Logic.gs_fortress_top;
	gs[51] = Location_PutIn_Logic.gs_wasteland_structure;
	gs[52] = Location_PutIn_Logic.gs_colossus_bean;
	gs[53] = Location_PutIn_Logic.gs_colossus_tree;
	gs[54] = Location_PutIn_Logic.gs_colossus_hill;
	gs[55] = Location_PutIn_Logic.gs_zora_river_tree;
	gs[56] = Location_PutIn_Logic.gs_ganons;
	gs[57] = Location_PutIn_Logic.gs_deku_basement_back;
	gs[58] = Location_PutIn_Logic.gs_deku_basement_gate;
	gs[59] = Location_PutIn_Logic.gs_deku_basement_vines;
	gs[60] = Location_PutIn_Logic.gs_deku_compass;
	gs[61] = Location_PutIn_Logic.gs_dodongos_east_side;
	gs[62] = Location_PutIn_Logic.gs_dodongos_stair_room;
	gs[63] = Location_PutIn_Logic.gs_dodongos_above_stairs;
	gs[64] = Location_PutIn_Logic.gs_dodongos_scarecrow;
	gs[65] = Location_PutIn_Logic.gs_dodongos_before_king;
	gs[66] = Location_PutIn_Logic.gs_jabu_vines;
	gs[67] = Location_PutIn_Logic.gs_jabu_near_octo1;
	gs[68] = Location_PutIn_Logic.gs_jabu_near_octo2;
	gs[69] = Location_PutIn_Logic.gs_jabu_near_boss;
	gs[70] = Location_PutIn_Logic.gs_forest_first;
	gs[71] = Location_PutIn_Logic.gs_forest_lobby;
	gs[72] = Location_PutIn_Logic.gs_forest_outdoor_east;
	gs[73] = Location_PutIn_Logic.gs_forest_outdoor_west;
	gs[74] = Location_PutIn_Logic.gs_forest_basement;
	gs[75] = Location_PutIn_Logic.gs_fire_song_of_time;
	gs[76] = Location_PutIn_Logic.gs_fire_bomb_wall;
	gs[77] = Location_PutIn_Logic.gs_fire_scarecrow1;
	gs[78] = Location_PutIn_Logic.gs_fire_scarecrow2;
	gs[79] = Location_PutIn_Logic.gs_fire_basement;
	gs[80] = Location_PutIn_Logic.gs_water_south_basement;
	gs[81] = Location_PutIn_Logic.gs_water_river;
	gs[82] = Location_PutIn_Logic.gs_water_central;
	gs[83] = Location_PutIn_Logic.gs_water_near_boss_key;
	gs[84] = Location_PutIn_Logic.gs_water_platform_room;
	gs[85] = Location_PutIn_Logic.gs_spirit_metal_fence;
	gs[86] = Location_PutIn_Logic.gs_spirit_before_child_knuckle;
	gs[87] = Location_PutIn_Logic.gs_spirit_boulder_room;
	gs[88] = Location_PutIn_Logic.gs_spirit_temple_lobby;
	gs[89] = Location_PutIn_Logic.gs_spirit_bomb_for_light_room;
	gs[90] = Location_PutIn_Logic.gs_shadow_like_like;
	gs[91] = Location_PutIn_Logic.gs_shadow_crusher;
	gs[92] = Location_PutIn_Logic.gs_shadow_giant_pot;
	gs[93] = Location_PutIn_Logic.gs_shadow_near_boat;
	gs[94] = Location_PutIn_Logic.gs_shadow_three_pots;
	gs[95] = Location_PutIn_Logic.gs_well_west_inner;
	gs[96] = Location_PutIn_Logic.gs_well_east_inner;
	gs[97] = Location_PutIn_Logic.gs_well_like_like;
	gs[98] = Location_PutIn_Logic.gs_ice_spinning_scythe;
	gs[99] = Location_PutIn_Logic.gs_ice_hp_room;
	gs[100] = Location_PutIn_Logic.gs_ice_block_room;

	PutIn_Logic.gold_skulltulas = 0;
	var i;
	for (i = 1; i<=100; i++) {
		if (gs[i] == true) {PutIn_Logic.gold_skulltulas +=1;};
	}
	}
	temp = 6;

	var temp = 0;
	
	for (const key of keys4) {
		temp += 1;
		if (Location_Logic[key] && !Location_PutIn_Logic[key]) {tempArray.push(key);}
		if (temp == 256) {break;} 
	}
	return tempArray;
	
}


for (i=0; i < Items.length; i++) {
	ChecksLockedBy[Items[i]] = checksLockedByItem(Items[i]);
	}
function slowUpdate() {
	for (i=0; i < Items.length; i++) {
	if (Location[Items[i]] != null ) {ChecksLockedBy[Items[i]] = checksLockedByItem(Items[i]);}
	}
	for (i=0; i < Items.length; i++) {
	if (Location[Items[i]] != null ) {ChecksPutInLogicBy[Items[i]] = checksPutInLogicByItem(Items[i]);}
	}
}
for (i=0; i < Items.length; i++) {
	ChecksLockedBy[Items[i]] = [];
	}
	for (i=0; i < Items.length; i++) {
	ChecksPutInLogicBy[Items[i]] = [];
	}
function timerControl() {
	pauseFlag = true;
	if (paused) {paused = false; document.getElementById("timerControl").innerHTML = "Pause";}
	else {paused = true; document.getElementById("timerControl").innerHTML = "Resume";}
}
function circusControl() {
	if (circus) {circus = false; document.getElementById("circusControl").innerHTML = "Unleash Animals";}
	else {circus = true; document.getElementById("circusControl").innerHTML = "Send Back to Circus";}
}

function toggleHint(loc) {
	var location = "";
	var item = "";
	var itemText = "";
	if (loc.className == "logic_check_text" || loc.className == "ool_check_text" || loc.className == "access_check_text") {location = loc.id.slice(5); item = Check[location];} else {item = loc.id.slice(0, -9); location = Location[item];}
	if (item == "sos") {item = "song_of_storms";}
	if (item == "suns") {item = "suns_song";}
	if (item == "sot") {item = "song_of_time";}
	if (item == "serenade") {itemText = "Serenade";} else if (item == "prelude") {itemText = "Prelude"} else {itemText = ItemNames[Items.indexOf(item)];}
	if (item != "unknown" && location != undefined) {
		Hinted[location] = !Hinted[location];
		if (loc.className == "logic_check_text" || loc.className == "ool_check_text" || loc.className == "access_check_text") {
			text = Names[Locations.indexOf(location)] + ":  " + itemText + "<br>";
		}
		else {
			text = Names[Locations.indexOf(location)].split(":")[1].slice(1) + ":  " + ItemNames[Items.indexOf(item)] + "<br>";
		}
		if (Hinted[location]) {
			var hintText = document.createElement("small");
			hintText.innerHTML = text;
			document.getElementById("notes").insertBefore(hintText, document.getElementById("notes").firstChild);
		}
		else {
			for (i = 0; i < document.getElementById("notes").children.length; i++) {
				if (document.getElementById("notes").children[i].innerHTML == text) {
					document.getElementById("notes").children[i].remove();
					break;
				}
			}
		}
	}
}

setInterval(Update,250);
setInterval(slowUpdate,5000);
Update();Update();Update();
