function wothAndBarrenProcessing() {
	
	NUM_WOTHS = 8;
	for( var i = 1; i <= 35; i++) {
	Area[i] = "normal";
	}
	
	wothAreas = ["", "", "", "", "", "", "", "", ""];
	AreaGoalPathBoss = ["", "", "", "", "", "", "", "", ""];

	for (var i = 1; i <= NUM_WOTHS; i++) {
		var str = document.getElementById("woth_input" + i).value;
		str = str.replace("2","");
		str = str.replace("3","");
		str = str.replace("4","");
		str = str.replace("5","");
		str = str.replace("6","");
		str = str.replace("7","");
		str = str.replace("8","");
		str = str.replace("9","");
		str = str.replace("10","");
		if (str == "kok" || str == "kf" || str == "koki" || str == "kfc") {if (Area[1] == "4woth") {Area[1] = "5woth";} else if (Area[1] == "3woth") {Area[1] = "4woth";} else if (Area[1] == "2woth") {Area[1] = "3woth";} else if (Area[1] == "woth") {Area[1] = "2woth";} else {Area[1] = "woth";} wothAreas[i] = AreaNames[1];}
		if (str == "llr" || str == "ranch" || str == "lon" || str == "ran") {if (Area[2] == "4woth") {Area[2] = "5woth";} else if (Area[2] == "3woth") {Area[2] = "4woth";} else if (Area[2] == "2woth") {Area[2] = "3woth";} else if (Area[2] == "woth") {Area[2] = "2woth";} else {Area[2] = "woth";} wothAreas[i] = AreaNames[2];} 
		if (str == "fie" || str == "hf" || str == "field") {if (Area[3] == "4woth") {Area[3] = "5woth";} else if (Area[3] == "3woth") {Area[3] = "4woth";} else if (Area[3] == "2woth") {Area[3] = "3woth";} else if (Area[3] == "woth") {Area[3] = "2woth";} else {Area[3] = "woth";} wothAreas[i] = AreaNames[3];} 
		if (str == "gv" || str == "val" || str == "valley") {if (Area[4] == "4woth") {Area[4] = "5woth";} else if (Area[4] == "3woth") {Area[4] = "4woth";} else if (Area[4] == "2woth") {Area[4] = "3woth";} else if (Area[4] == "woth") {Area[4] = "2woth";} else {Area[4] = "woth";} wothAreas[i] = AreaNames[4];} 
		if (str == "hyl" || str == "hylia" || str == "lh" || str == "lake" || str == "lak") {if (Area[5] == "4woth") {Area[5] = "5woth";} else if (Area[5] == "3woth") {Area[5] = "4woth";} else if (Area[5] == "2woth") {Area[5] = "3woth";} else if (Area[5] == "woth") {Area[5] = "2woth";} else {Area[5] = "woth";} wothAreas[i] = AreaNames[5];} 
		if (str == "mkt" || str == "market" || str == "mar" || str == "mark") {if (Area[6] == "4woth") {Area[6] = "5woth";} else if (Area[6] == "3woth") {Area[6] = "4woth";} else if (Area[6] == "2woth") {Area[6] = "3woth";} else if (Area[6] == "woth") {Area[6] = "2woth";} else {Area[6] = "woth";} wothAreas[i] = AreaNames[6];} 
		if (str == "hyr c" || str == "hcast" || str == "hc" || str == "cas") {if (Area[7] == "4woth") {Area[7] = "5woth";} else if (Area[7] == "3woth") {Area[7] = "4woth";} else if (Area[7] == "2woth") {Area[7] = "3woth";} else if (Area[7] == "woth") {Area[7] = "2woth";} else {Area[7] = "woth";} wothAreas[i] = AreaNames[7];} 
		if (str == "ogc" || str == "out g" || str == "gfairy" || str == "og" || str == "out") {if (Area[8] == "4woth") {Area[8] = "5woth";} else if (Area[8] == "3woth") {Area[8] = "4woth";} else if (Area[8] == "2woth") {Area[8] = "3woth";} else if (Area[8] == "woth") {Area[8] = "2woth";} else {Area[8] = "woth";} wothAreas[i] = AreaNames[8];} 
		if (str == "tot" || str == "temple" || str == "time") {if (Area[9] == "4woth") {Area[9] = "5woth";} else if (Area[9] == "3woth") {Area[9] = "4woth";} else if (Area[9] == "2woth") {Area[9] = "3woth";} else if (Area[9] == "woth") {Area[9] = "2woth";} else {Area[9] = "woth";} wothAreas[i] = AreaNames[9];} 
		if (str == "fountain" || str == "fount" || str == "fou" || str == "zf") {if (Area[10] == "4woth") {Area[10] = "5woth";} else if (Area[10] == "3woth") {Area[10] = "4woth";} else if (Area[10] == "2woth") {Area[10] = "3woth";} else if (Area[10] == "woth") {Area[10] = "2woth";} else {Area[10] = "woth";} wothAreas[i] = AreaNames[10];} 
		if (str == "ice" || str == "ic" || str == "cavern") {if (Area[11] == "4woth") {Area[11] = "5woth";} else if (Area[11] == "3woth") {Area[11] = "4woth";} else if (Area[11] == "2woth") {Area[11] = "3woth";} else if (Area[11] == "woth") {Area[11] = "2woth";} else {Area[11] = "woth";} wothAreas[i] = AreaNames[11];} 
		if (str == "deku" || str == "dek" || str == "dt") {if (Area[12] == "4woth") {Area[12] = "5woth";} else if (Area[12] == "3woth") {Area[12] = "4woth";} else if (Area[12] == "2woth") {Area[12] = "3woth";} else if (Area[12] == "woth") {Area[12] = "2woth";} else {Area[12] = "woth";} wothAreas[i] = AreaNames[12];} 
		if (str == "lw" || str == "lost" || str == "woods") {if (Area[13] == "4woth") {Area[13] = "5woth";} else if (Area[13] == "3woth") {Area[13] = "4woth";} else if (Area[13] == "2woth") {Area[13] = "3woth";} else if (Area[13] == "woth") {Area[13] = "2woth";} else {Area[13] = "woth";} wothAreas[i] = AreaNames[13];} 
		if (str == "sfm" || str == "mea" || str == "mead") {if (Area[14] == "4woth") {Area[14] = "5woth";} else if (Area[14] == "3woth") {Area[14] = "4woth";} else if (Area[14] == "2woth") {Area[14] = "3woth";} else if (Area[14] == "woth") {Area[14] = "2woth";} else {Area[14] = "woth";} wothAreas[i] = AreaNames[14];} 
		if (str == "gor" || str == "gc" || str == "goron") {if (Area[15] == "4woth") {Area[15] = "5woth";} else if (Area[15] == "3woth") {Area[15] = "4woth";} else if (Area[15] == "2woth") {Area[15] = "3woth";} else if (Area[15] == "woth") {Area[15] = "2woth";} else {Area[15] = "woth";} wothAreas[i] = AreaNames[15];} 
		if (str == "dod" || str == "dodo" || str == "dc") {if (Area[16] == "4woth") {Area[16] = "5woth";} else if (Area[16] == "3woth") {Area[16] = "4woth";} else if (Area[16] == "2woth") {Area[16] = "3woth";} else if (Area[16] == "woth") {Area[16] = "2woth";} else {Area[16] = "woth";} wothAreas[i] = AreaNames[16];} 
		if (str == "tra" || str == "trail" || str == "dmt") {if (Area[17] == "4woth") {Area[17] = "5woth";} else if (Area[17] == "3woth") {Area[17] = "4woth";} else if (Area[17] == "2woth") {Area[17] = "3woth";} else if (Area[17] == "woth") {Area[17] = "2woth";} else {Area[17] = "woth";} wothAreas[i] = AreaNames[17];} 
		if (str == "cra" || str == "crater" || str == "dmc") {if (Area[18] == "4woth") {Area[18] = "5woth";} else if (Area[18] == "3woth") {Area[18] = "4woth";} else if (Area[18] == "2woth") {Area[18] = "3woth";} else if (Area[18] == "woth") {Area[18] = "2woth";} else {Area[18] = "woth";} wothAreas[i] = AreaNames[18];} 
		if (str == "kak" || str == "kaki" || str == "kv") {if (Area[19] == "4woth") {Area[19] = "5woth";} else if (Area[19] == "3woth") {Area[19] = "4woth";} else if (Area[19] == "2woth") {Area[19] = "3woth";} else if (Area[19] == "woth") {Area[19] = "2woth";} else {Area[19] = "woth";} wothAreas[i] = AreaNames[19];} 
		if (str == "gra" || str == "grave" || str == "gy") {if (Area[20] == "4woth") {Area[20] = "5woth";} else if (Area[20] == "3woth") {Area[20] = "4woth";} else if (Area[20] == "2woth") {Area[20] = "3woth";} else if (Area[20] == "woth") {Area[20] = "2woth";} else {Area[20] = "woth";} wothAreas[i] = AreaNames[20];} 
		if (str == "riv" || str == "river" || str == "zr") {if (Area[21] == "4woth") {Area[21] = "5woth";} else if (Area[21] == "3woth") {Area[21] = "4woth";} else if (Area[21] == "2woth") {Area[21] = "3woth";} else if (Area[21] == "woth") {Area[21] = "2woth";} else {Area[21] = "woth";} wothAreas[i] = AreaNames[21];} 
		if (str == "dom" || str == "domain" || str == "zd") {if (Area[22] == "4woth") {Area[22] = "5woth";} else if (Area[22] == "3woth") {Area[22] = "4woth";} else if (Area[22] == "2woth") {Area[22] = "3woth";} else if (Area[22] == "woth") {Area[22] = "2woth";} else {Area[22] = "woth";} wothAreas[i] = AreaNames[22];} 
		if (str == "col" || str == "colo" || str == "colossus" || str == "co") {if (Area[23] == "4woth") {Area[23] = "5woth";} else if (Area[23] == "3woth") {Area[23] = "4woth";} else if (Area[23] == "2woth") {Area[23] = "3woth";} else if (Area[23] == "woth") {Area[23] = "2woth";} else {Area[23] = "woth";} wothAreas[i] = AreaNames[23];} 
		if (str == "was" || str == "waste" || str == "wl" || str == "hw") {if (Area[24] == "4woth") {Area[24] = "5woth";} else if (Area[24] == "3woth") {Area[24] = "4woth";} else if (Area[24] == "2woth") {Area[24] = "3woth";} else if (Area[24] == "woth") {Area[24] = "2woth";} else {Area[24] = "woth";} wothAreas[i] = AreaNames[24];} 
		if (str == "thi" || str == "th" || str == "thieve" || str == "thieves") {if (Area[25] == "4woth") {Area[25] = "5woth";} else if (Area[25] == "3woth") {Area[25] = "4woth";} else if (Area[25] == "2woth") {Area[25] = "3woth";} else if (Area[25] == "woth") {Area[25] = "2woth";} else {Area[25] = "woth";} wothAreas[i] = AreaNames[25];} 
		if (str == "fort" || str == "fortress" || str == "gf") {if (Area[26] == "4woth") {Area[26] = "5woth";} else if (Area[26] == "3woth") {Area[26] = "4woth";} else if (Area[26] == "2woth") {Area[26] = "3woth";} else if (Area[26] == "woth") {Area[26] = "2woth";} else {Area[26] = "woth";} wothAreas[i] = AreaNames[26];} 
		if (str == "jab" || str == "jabu" || str == "jjb" || str == "jj") {if (Area[27] == "4woth") {Area[27] = "5woth";} else if (Area[27] == "3woth") {Area[27] = "4woth";} else if (Area[27] == "2woth") {Area[27] = "3woth";} else if (Area[27] == "woth") {Area[27] = "2woth";} else {Area[27] = "woth";} wothAreas[i] = AreaNames[27];} 
		if (str == "for" || str == "forest" || str == "fot") {if (Area[28] == "4woth") {Area[28] = "5woth";} else if (Area[28] == "3woth") {Area[28] = "4woth";} else if (Area[28] == "2woth") {Area[28] = "3woth";} else if (Area[28] == "woth") {Area[28] = "2woth";} else {Area[28] = "woth";} wothAreas[i] = AreaNames[28];} 
		if (str == "fir" || str == "fire" || str == "fit") {if (Area[29] == "4woth") {Area[29] = "5woth";} else if (Area[29] == "3woth") {Area[29] = "4woth";} else if (Area[29] == "2woth") {Area[29] = "3woth";} else if (Area[29] == "woth") {Area[29] = "2woth";} else {Area[29] = "woth";} wothAreas[i] = AreaNames[29];} 
		if (str == "spi" || str == "spirit" || str == "sprt" || str == "sp") {if (Area[30] == "4woth") {Area[30] = "5woth";} else if (Area[30] == "3woth") {Area[30] = "4woth";} else if (Area[30] == "2woth") {Area[30] = "3woth";} else if (Area[30] == "woth") {Area[30] = "2woth";} else {Area[30] = "woth";} wothAreas[i] = AreaNames[30];} 
		if (str == "sha" || str == "shadow" || str == "shad" || str == "sh") {if (Area[31] == "4woth") {Area[31] = "5woth";} else if (Area[31] == "3woth") {Area[31] = "4woth";} else if (Area[31] == "2woth") {Area[31] = "3woth";} else if (Area[31] == "woth") {Area[31] = "2woth";} else {Area[31] = "woth";} wothAreas[i] = AreaNames[31];} 
		if (str == "wat" || str == "wata" || str == "water") {if (Area[32] == "4woth") {Area[32] = "5woth";} else if (Area[32] == "3woth") {Area[32] = "4woth";} else if (Area[32] == "2woth") {Area[32] = "3woth";} else if (Area[32] == "woth") {Area[32] = "2woth";} else {Area[32] = "woth";} wothAreas[i] = AreaNames[32];} 
		if (str == "gan" || str == "gan c" || str == "ganons" || str == "ganon" || str == "ga") {if (Area[33] == "4woth") {Area[33] = "5woth";} else if (Area[33] == "3woth") {Area[33] = "4woth";} else if (Area[33] == "2woth") {Area[33] = "3woth";} else if (Area[33] == "woth") {Area[33] = "2woth";} else {Area[33] = "woth";} wothAreas[i] = AreaNames[33];} 
		if (str == "gtg" || str == "tg" || str == "gt") {if (Area[34] == "4woth") {Area[34] = "5woth";} else if (Area[34] == "3woth") {Area[34] = "4woth";} else if (Area[34] == "2woth") {Area[34] = "3woth";} else if (Area[34] == "woth") {Area[34] = "2woth";} else {Area[34] = "woth";} wothAreas[i] = AreaNames[34];} 
		if (str == "well" || str == "botw" || str == "wel") {if (Area[35] == "4woth") {Area[35] = "5woth";} else if (Area[35] == "3woth") {Area[35] = "4woth";} else if (Area[35] == "2woth") {Area[35] = "3woth";} else if (Area[35] == "woth") {Area[35] = "2woth";} else {Area[35] = "woth";} wothAreas[i] = AreaNames[35];}
		
		if (document.getElementById("hints_type").value == "PATH") {
			var str3 = document.getElementById("path_boss" + i).value.toLowerCase();
			
			if (str3.startsWith("de") || str3.startsWith("go")) {AreaGoalPathBoss[i] = "Gohma";} 
			if (str3.startsWith("do") || str3.startsWith("kd") || str3.startsWith("dc") || str3.startsWith("ki")) {AreaGoalPathBoss[i] = "Dodongo";} 
			if (str3.startsWith("ja") || str3.startsWith("ba")) {AreaGoalPathBoss[i] = "Barinade";} 
			if (str3.startsWith("fo") || str3.startsWith("ph") || str3.startsWith("pg")) {AreaGoalPathBoss[i] = "PG";} 
			if (str3.startsWith("fi") || str3.startsWith("vo")) {AreaGoalPathBoss[i] = "Volv";} 
			if (str3.startsWith("wa") || str3.startsWith("mo")) {AreaGoalPathBoss[i] = "Morpha";} 
			if (str3.startsWith("sp") || str3.startsWith("tw")) {AreaGoalPathBoss[i] = "Twinrova";} 
			if (str3.startsWith("sh") || str3.startsWith("bo")) {AreaGoalPathBoss[i] = "Bongo";}
			if (str3.startsWith("to")) {AreaGoalPathBoss[i] = "Tower";}
			if (str3.startsWith("ti")) {AreaGoalPathBoss[i] = "Time";}
			if (str3.startsWith("he")) {AreaGoalPathBoss[i] = "Hero";}
			if (str3.startsWith("ev")) {AreaGoalPathBoss[i] = "Evil's Bane";}
			if (str3 == "0") {AreaGoalPathBoss[i] = "0 Important";} 
			if (str3 == "1") {AreaGoalPathBoss[i] = "1 Important";} 
			if (str3 == "2") {AreaGoalPathBoss[i] = "2 Important";} 
			if (str3 == "3") {AreaGoalPathBoss[i] = "3 Important";} 
			if (str3 == "4") {AreaGoalPathBoss[i] = "4 Important";} 
			if (str3 == "5") {AreaGoalPathBoss[i] = "5 Important";} 
			if (str3 == "6") {AreaGoalPathBoss[i] = "6 Important";} 
			if (str3 == "7") {AreaGoalPathBoss[i] = "7 Important";} 
			if (str3 == "8") {AreaGoalPathBoss[i] = "8 Important";} 
			if (str3 == "9") {AreaGoalPathBoss[i] = "9 Important";} 
			if (str3 == "10") {AreaGoalPathBoss[i] = "10 Important";} 
			if (str3.startsWith("lig")) {AreaGoalPathBoss[i] = "Light Arrows";} 
		}
		
		if (i <= 5) {
			var str2 = document.getElementById("barren_input" + i).value;
			if (str2 == "kok" || str2 == "kf" || str2 == "koki" || str2 == "kfc") {Area[1] = "barren";}
			if (str2 == "llr" || str2 == "ranch" || str2 == "lon" || str2 == "ran") {Area[2] = "barren";} 
			if (str2 == "fie" || str2 == "hf" || str2 == "field") {Area[3] = "barren";} 
			if (str2 == "gv" || str2 == "val" || str2 == "valley") {Area[4] = "barren";} 
			if (str2 == "hyl" || str2 == "hylia" || str2 == "lh" || str2 == "lake" || str2 == "lak") {Area[5] = "barren";} 
			if (str2 == "mkt" || str2 == "market" || str2 == "mar" || str2 == "mark") {Area[6] = "barren";} 
			if (str2 == "hyr c" || str2 == "hcast" || str2 == "hc" || str2 == "cas") {Area[7] = "barren";} 
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
			if (str2 == "thi" || str2 == "th" || str2 == "thieve" || str2 == "thieves") {Area[25] = "barren";} 
			if (str2 == "fort" || str2 == "fortress" || str2 == "gf") {Area[26] = "barren";} 
			if (str2 == "jab" || str2 == "jabu" || str2 == "jjb" || str2 == "jj") {Area[27] = "barren";} 
			if (str2 == "for" || str2 == "forest" || str2 == "fot") {Area[28] = "barren";} 
			if (str2 == "fir" || str2 == "fire" || str2 == "fit") {Area[29] = "barren";} 
			if (str2 == "spi" || str2 == "spirit" || str2 == "sprt" || str2 == "sp") {Area[30] = "barren";} 
			if (str2 == "sha" || str2 == "shadow" || str2 == "shad" || str2 == "sh") {Area[31] = "barren";} 
			if (str2 == "wat" || str2 == "wata" || str2 == "water") {Area[32] = "barren";} 
			if (str2 == "gan" || str2 == "gan c" || str2 == "ganons" || str2 == "ganon" || str2 == "ga") {Area[33] = "barren";} 
			if (str2 == "gtg" || str2 == "tg" || str2 == "gt") {Area[34] = "barren";} 
			if (str2 == "well" || str2 == "botw" || str2 == "wel") {Area[35] = "barren";} 
		}
	}
	
	AreaColors = ["", "00ff88", " aaaa00", " ffff00", " ffaa00", " 00aaff", " aaaaaa", " 84FFFF", " FE0404", " ffffff", " 70ffff", " aaffff", " 996000", " 009000", " 80ff80", " ffcc00", " B35705", " 573E02", " ff5050", " 678C8A", " 8f8493", " 5DB8FE", " 00ffff", " cccc90", " cccc30", " ffff90", " ff0080", " 5FAF36", " ff0000", " 00cccc", " ffff50", " c900c9", " 990000", " ffcc60", " ff00ff"];
	WotHColors = ["", "9cc4d9", "white", "b19cd9","d09cd9","cyan","9CD9C4","D9B19C"];

	for (var i = 1; i <= 35; i++) {
		if (Area[i] == "woth" && AreaWotHAge[i] != 1) {
			if (woth1 == "unknown" || !Area[AreaNames.indexOf(woth1)].includes("woth")) {document.getElementById("woth1_title").innerHTML = AreaNames[i]; woth1 = AreaNames[i];}
			else if (woth2 == "unknown" || !Area[AreaNames.indexOf(woth2)].includes("woth")) {document.getElementById("woth2_title").innerHTML = AreaNames[i]; woth2 = AreaNames[i];}
			else if (woth3 == "unknown" || !Area[AreaNames.indexOf(woth3)].includes("woth")) {document.getElementById("woth3_title").innerHTML = AreaNames[i]; woth3 = AreaNames[i];}
			else if (woth4 == "unknown" || !Area[AreaNames.indexOf(woth4)].includes("woth")) {document.getElementById("woth4_title").innerHTML = AreaNames[i]; woth4 = AreaNames[i];}
			else if (woth5 == "unknown" || !Area[AreaNames.indexOf(woth5)].includes("woth")) {document.getElementById("woth5_title").innerHTML = AreaNames[i]; woth5 = AreaNames[i];}
			else if (woth6 == "unknown" || !Area[AreaNames.indexOf(woth6)].includes("woth")) {document.getElementById("woth6_title").innerHTML = AreaNames[i]; woth6 = AreaNames[i];}
			else if (woth7 == "unknown" || !Area[AreaNames.indexOf(woth7)].includes("woth")) {document.getElementById("woth7_title").innerHTML = AreaNames[i]; woth7 = AreaNames[i];}
			else if (woth8 == "unknown" || !Area[AreaNames.indexOf(woth8)].includes("woth")) {document.getElementById("woth8_title").innerHTML = AreaNames[i]; woth8 = AreaNames[i];}
			AreaWotHAge[i] = 1;
		}
		else if (Area[i] == "2woth" && AreaWotHAge[i] != 2) {		
			if (woth1 == "unknown" || !Area[AreaNames.indexOf(woth1)].includes("woth")) {woth1 = AreaNames[i];}
			else if (woth2 == "unknown" || !Area[AreaNames.indexOf(woth2)].includes("woth")) {woth2 = AreaNames[i];}
			else if (woth3 == "unknown" || !Area[AreaNames.indexOf(woth3)].includes("woth")) {woth3 = AreaNames[i];}
			else if (woth4 == "unknown" || !Area[AreaNames.indexOf(woth4)].includes("woth")) {woth4 = AreaNames[i];}
			else if (woth5 == "unknown" || !Area[AreaNames.indexOf(woth5)].includes("woth")) {woth5 = AreaNames[i];}
			else if (woth6 == "unknown" || !Area[AreaNames.indexOf(woth6)].includes("woth")) {woth6 = AreaNames[i];}
			else if (woth7 == "unknown" || !Area[AreaNames.indexOf(woth7)].includes("woth")) {woth7 = AreaNames[i];}
			else if (woth8 == "unknown" || !Area[AreaNames.indexOf(woth8)].includes("woth")) {woth8 = AreaNames[i];}
			AreaWotHAge[i] = 2;
		}
		else if (Area[i] == "3woth" && AreaWotHAge[i] != 3) {		
			if (woth1 == "unknown" || !Area[AreaNames.indexOf(woth1)].includes("woth")) {woth1 = AreaNames[i];}
			else if (woth2 == "unknown" || !Area[AreaNames.indexOf(woth2)].includes("woth")) {woth2 = AreaNames[i];}
			else if (woth3 == "unknown" || !Area[AreaNames.indexOf(woth3)].includes("woth")) {woth3 = AreaNames[i];}
			else if (woth4 == "unknown" || !Area[AreaNames.indexOf(woth4)].includes("woth")) {woth4 = AreaNames[i];}
			else if (woth5 == "unknown" || !Area[AreaNames.indexOf(woth5)].includes("woth")) {woth5 = AreaNames[i];}
			else if (woth6 == "unknown" || !Area[AreaNames.indexOf(woth6)].includes("woth")) {woth6 = AreaNames[i];}
			else if (woth7 == "unknown" || !Area[AreaNames.indexOf(woth7)].includes("woth")) {woth7 = AreaNames[i];}
			else if (woth8 == "unknown" || !Area[AreaNames.indexOf(woth8)].includes("woth")) {woth8 = AreaNames[i];}
			AreaWotHAge[i] = 3;
		}
		else if (Area[i] == "4woth" && AreaWotHAge[i] != 4) {		
			if (woth1 == "unknown" || !Area[AreaNames.indexOf(woth1)].includes("woth")) {woth1 = AreaNames[i];}
			else if (woth2 == "unknown" || !Area[AreaNames.indexOf(woth2)].includes("woth")) {woth2 = AreaNames[i];}
			else if (woth3 == "unknown" || !Area[AreaNames.indexOf(woth3)].includes("woth")) {woth3 = AreaNames[i];}
			else if (woth4 == "unknown" || !Area[AreaNames.indexOf(woth4)].includes("woth")) {woth4 = AreaNames[i];}
			else if (woth5 == "unknown" || !Area[AreaNames.indexOf(woth5)].includes("woth")) {woth5 = AreaNames[i];}
			else if (woth6 == "unknown" || !Area[AreaNames.indexOf(woth6)].includes("woth")) {woth6 = AreaNames[i];}
			else if (woth7 == "unknown" || !Area[AreaNames.indexOf(woth7)].includes("woth")) {woth7 = AreaNames[i];}
			else if (woth8 == "unknown" || !Area[AreaNames.indexOf(woth8)].includes("woth")) {woth8 = AreaNames[i];}
			AreaWotHAge[i] = 4;
		}
		else if (Area[i] == "5woth" && AreaWotHAge[i] != 5) {		
		
			if (woth1 == "unknown" || !Area[AreaNames.indexOf(woth1)].includes("woth")) {woth1 = AreaNames[i];}
			else if (woth2 == "unknown" || !Area[AreaNames.indexOf(woth2)].includes("woth")) {woth2 = AreaNames[i];}
			else if (woth3 == "unknown" || !Area[AreaNames.indexOf(woth3)].includes("woth")) {woth3 = AreaNames[i];}
			else if (woth4 == "unknown" || !Area[AreaNames.indexOf(woth4)].includes("woth")) {woth4 = AreaNames[i];}
			else if (woth5 == "unknown" || !Area[AreaNames.indexOf(woth5)].includes("woth")) {woth5 = AreaNames[i];}
			else if (woth6 == "unknown" || !Area[AreaNames.indexOf(woth6)].includes("woth")) {woth6 = AreaNames[i];}
			else if (woth7 == "unknown" || !Area[AreaNames.indexOf(woth7)].includes("woth")) {woth7 = AreaNames[i];}
			else if (woth8 == "unknown" || !Area[AreaNames.indexOf(woth8)].includes("woth")) {woth8 = AreaNames[i];}
			AreaWotHAge[i] = 5;
		}
		else if (Area[i] == "normal" || Area[i] == "barren") {
			if (woth1 == AreaNames[i]) {woth1 = "unknown"}
			if (woth2 == AreaNames[i]) {woth2 = "unknown"}
			if (woth3 == AreaNames[i]) {woth3 = "unknown"}
			if (woth4 == AreaNames[i]) {woth4 = "unknown"}
			if (woth5 == AreaNames[i]) {woth5 = "unknown"}
			if (woth6 == AreaNames[i]) {woth6 = "unknown"}
			if (woth7 == AreaNames[i]) {woth7 = "unknown"}
			if (woth8 == AreaNames[i]) {woth8 = "unknown"}
		AreaWotHAge[i] = 0;	
		}
	}

	var med_locations_found = 1;
	for (var i =0; i<8; i++) {
			if (Logic.emerald != dungeonStrings[i] && Logic.ruby != dungeonStrings[i] && Logic.sapphire != dungeonStrings[i] && Logic.emerald != "unknown" && Logic.ruby != "unknown" && Logic.sapphire != "unknown") {Location["med" + med_locations_found] = bossStrings[i]; med_locations_found += 1;}
	}

	if (!WotHItems.includes("med1")) { WotHItems.push("med1");}
	if (!WotHItems.includes("med2")) { WotHItems.push("med2");}
	if (!WotHItems.includes("med3")) { WotHItems.push("med3");}
	if (!WotHItems.includes("med4")) { WotHItems.push("med4");}
	if (!WotHItems.includes("med5")) { WotHItems.push("med5");}
	if (!WotHItems.includes("med6")) { WotHItems.push("med6");}
	if (!WotHItems.includes("light_arrows")) {WotHItems.push("light_arrows");}

		if (Known.bow1 && Known.bow2 && Known.bow3) {
			if (ChecksLockedBy.bow1.includes(Location.bow2) && ChecksLockedBy.bow1.includes(Location.bow3)) {if (!WotHItems.includes("bow1")) {WotHItems.push("bow1")}}
			if (ChecksLockedBy.bow2.includes(Location.bow1) && ChecksLockedBy.bow2.includes(Location.bow3)) {if (!WotHItems.includes("bow2")) {WotHItems.push("bow2")}}
			if (ChecksLockedBy.bow3.includes(Location.bow2) && ChecksLockedBy.bow3.includes(Location.bow1)) {if (!WotHItems.includes("bow3")) {WotHItems.push("bow3")}}
			}
		if (ChecksLockedBy.magic1.includes(Location.magic2)) {if (!WotHItems.includes("magic1")) {WotHItems.push("magic1")}}
		if (ChecksLockedBy.magic2.includes(Location.magic1)) {if (!WotHItems.includes("magic2")) {WotHItems.push("magic2")}}
		for (var i = 0; i<Items.length; i++) {
				for (var j = 0; j<WotHItems.length; j++){
					if (Location[WotHItems[j]] != null) {
						if (ChecksLockedBy[Items[i]].includes(Location[WotHItems[j]])) {
							
								if (!WotHItems.includes(Items[i])) {WotHItems.push(Items[i]);}
						}
					}
				}
		}
		for ( var d = 1; d <= 52; d++) {
			document.getElementById("confirmed_logically_required_" + d).style.display = "none";
		}
		var temp = 6;
		while (temp < WotHItems.length) {
		if (!Known[WotHItems[temp]]) {
			document.getElementById("confirmed_logically_required_" + (temp - 5)).src = ItemImages[Items.indexOf(WotHItems[temp])];
			document.getElementById("confirmed_logically_required_" + (temp - 5)).style.display = "inline-block";
		}
		temp++;
		}
		for (var i = 1; i <= 35; i++) {
			
			var wothRowNumber = 1;
			var wothNumber = 0;
			var tempnumber3 = 1;
			var tempbool = false;
		
			
			if (woth1 == AreaNames[i] || woth2 == AreaNames[i] || woth3 == AreaNames[i] || woth4 == AreaNames[i] || woth5 == AreaNames[i] || woth6 == AreaNames[i] || woth7 == AreaNames[i] || woth8 == AreaNames[i]) {
				
				if (woth1 == AreaNames[i]) {wothNumber = 1;}
				else if (woth2 == AreaNames[i]) {wothNumber = 2;}
				else if (woth3 == AreaNames[i]) {wothNumber = 3;}
				else if (woth4 == AreaNames[i]) {wothNumber = 4;}
				else if (woth5 == AreaNames[i]) {wothNumber = 5;}
				else if (woth6 == AreaNames[i]) {wothNumber = 6;}
				else if (woth7 == AreaNames[i]) {wothNumber = 7;}
				else if (woth8 == AreaNames[i]) {wothNumber = 8;}
				var tempArray = [];
				document.getElementById("woth" + wothNumber + "_text" + 1).innerHTML="";
				document.getElementById("woth" + wothNumber + "_text" + 2).innerHTML="";
				document.getElementById("woth" + wothNumber + "_text" + 3).innerHTML="";
				document.getElementById("woth" + wothNumber + "_text" + 4).innerHTML="";
				document.getElementById("woth" + wothNumber + "_text" + 5).innerHTML="";
				document.getElementById("woth" + wothNumber + "_text" + 6).innerHTML="";
				document.getElementById("woth" + wothNumber + "_text" + 7).innerHTML="";
				for (var k = 0; k<Items.length; k++) {
					if (Items[k] == "light_arrows" && document.getElementById("presets").value != "S8" && document.getElementById("presets").value != "S9") {continue;}
					if (Items[k] == "farores_wind" && document.getElementById("presets").value != "S9") {continue;}
					if (Items[k] == "serenade" && document.getElementById("presets").value != "S9") {continue;}
					if (Items[k] == "prelude" && document.getElementById("presets").value != "S9") {continue;}
					if (Items[k] == "lullaby" && document.getElementById("presets").value != "S9") {continue;}
					if (Items[k] == Check["zeldasSpot"]) {continue;}
					if (Location[Items[k]] != null && (Hinted[Location[Items[k]]] == false || typeof Hinted[Location[Items[k]]] == "undefined") && !alwaysHints.includes(Location[Items[k]])) {
						if ((Locations.indexOf(Location[Items[k]]) >= AreaIndexes[i-1] && Locations.indexOf(Location[Items[k]]) < AreaIndexes[i]) || Locations.indexOf(Location[Items[k]]) == SongIndexes[i-1] || Locations.indexOf(Location[Items[k]]) == SongIndexes2[i-1]) {
						    /*if (Items[k] == "slingshot1" && ((Logic.slingshot2 && !ChecksPutInLogicBy.slingshot1.includes(Location.slingshot2)) || (Logic.slingshot3 && !ChecksPutInLogicBy.slingshot1.includes(Location.slingshot3)))){continue}
							else if (Items[k] == "slingshot2" && ((Logic.slingshot1 && !ChecksPutInLogicBy.slingshot2.includes(Location.slingshot1)) || (Logic.slingshot3 && !ChecksPutInLogicBy.slingshot2.includes(Location.slingshot3)))){continue}
							else if (Items[k] == "slingshot3" && ((Logic.slingshot1 && !ChecksPutInLogicBy.slingshot3.includes(Location.slingshot1)) || (Logic.slingshot2 && !ChecksPutInLogicBy.slingshot3.includes(Location.slingshot2)))){continue}
							else if (Items[k] == "bomb_bag1" && ((Logic.bomb_bag2 && !ChecksPutInLogicBy.bomb_bag1.includes(Location.bomb_bag2)) || (Logic.bomb_bag3 && !ChecksPutInLogicBy.bomb_bag1.includes(Location.bomb_bag3)))){continue}
							else if (Items[k] == "bomb_bag2" && ((Logic.bomb_bag1 && !ChecksPutInLogicBy.bomb_bag2.includes(Location.bomb_bag1)) || (Logic.bomb_bag3 && !ChecksPutInLogicBy.bomb_bag2.includes(Location.bomb_bag3)))){continue}
							else if (Items[k] == "bomb_bag3" && ((Logic.bomb_bag1 && !ChecksPutInLogicBy.bomb_bag3.includes(Location.bomb_bag1)) || (Logic.bomb_bag2 && !ChecksPutInLogicBy.bomb_bag3.includes(Location.bomb_bag2)))){continue}
							else if (Items[k] == "bow1" && ((Logic.bow2 && !ChecksPutInLogicBy.bow1.includes(Location.bow2)) || (Logic.bow3 && !ChecksPutInLogicBy.bow1.includes(Location.bow3)))){continue}
							else if (Items[k] == "bow2" && ((Logic.bow1 && !ChecksPutInLogicBy.bow2.includes(Location.bow1)) || (Logic.bow3 && !ChecksPutInLogicBy.bow2.includes(Location.bow3)))){continue}
							else if (Items[k] == "bow3" && ((Logic.bow1 && !ChecksPutInLogicBy.bow3.includes(Location.bow1)) || (Logic.bow2 && !ChecksPutInLogicBy.bow3.includes(Location.bow2)))){continue}
							else if (Items[k] == "magic1" && Logic.magic2 && !ChecksPutInLogicBy.magic1.includes(Location.magic2)){continue}
							else if (Items[k] == "magic2" && Logic.magic1 && !ChecksPutInLogicBy.magic2.includes(Location.magic1)){continue}
							else if (Items[k] == "goron_tunic" && Logic.can_stop_link_the_goron && !ChecksPutInLogicBy.goron_tunic.includes("goron_link") && (Logic.wallet1 && !ChecksPutInLogicBy.goron_tunic.includes(Location.wallet1) || Logic.wallet2 && !ChecksPutInLogicBy.goron_tunic.includes(Location.wallet2))){continue}
							//else if (Items[k] == "fire_arrows" && Logic.dins_fire && !ChecksPutInLogicBy.fire_arrows.includes(Location.dins_fire)){continue}*/
							document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).innerHTML = "<img id = 'wothMajor" + k + wothNumber + "'" + " class = 'wothMajorImages' src=" + ItemImages[k] + ">"; 
							
							if(nerfed) {
								document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).innerHTML = "<img id = 'wothMajor" + k + wothNumber + "'" + " class = 'wothMajorImages' src=" + ItemImages[k] + " data-item = '" + Items[k] + "' onmousedown = 'markWothItem(this)'>";
								
								if(ManualWotHItems[Items[k]]) {
									document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).style.display = "block";
									document.getElementById("wothMajor" + k + wothNumber).className = "manualWothImages";
								}
								else if(ManualNotWotHItems[Items[k]]) {
									document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).style.display = "none";
									document.getElementById("wothMajor" + k + wothNumber).className = "notWothItemImages";
								}
								else {
									document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).style.display = "block";
									document.getElementById("wothMajor" + k + wothNumber).className = "wothMajorImages";
								}
							}
							
							if (WotHItems.includes(Items[k]) && !nerfed) {
								document.getElementById("wothMajor" + k + wothNumber).style.setProperty("-webkit-filter", "drop-shadow(0px 0px 5px lightblue)"); 
								tempnumber3 +=1;
								} 
							for (var j = 0; j < Items.length; j++) {
								if (ChecksLockedBy[Items[k]].includes(Location[Items[j]]) && !nerfed){
									document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).innerHTML += "<img id = 'wothMinor" + j + wothNumber + "'" + "class = 'wothImages' src=" + ItemImages[j] + ">";
									if (WotHItems.includes(Items[j])) {
										document.getElementById("wothMinor" + j + wothNumber).style.setProperty("-webkit-filter", "drop-shadow(0px 0px 5px lightblue)"); 
									} 
								}
							} 
							
							document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).innerHTML += "<span onmousedown = 'markWothItemArrow(this)' id = 'wothItemArrow" + wothNumber + "_" + k + "' data-item = '" + Items[k] + "' class = 'woth_item_arrow'> &#8594; </span>"; 
							
							if(MarkedWotHItemArrow == "wothItemArrow" + wothNumber + "_" + k)
								document.getElementById("wothItemArrow" + wothNumber + "_" + k).style.color = inLogicColor;
							
							if(ManualWotHItemLocked[Items[k]] != undefined) {
								for(var q = 0; q < ManualWotHItemLocked[Items[k]].length; q++) {
									for (var j = 0; j < Items.length; j++) {
										if(Items[j] == ManualWotHItemLocked[Items[k]][q]) {
											document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).innerHTML += "<img id = 'wothMinor" + j + wothNumber + "'" + "class = 'wothImages' data-item = '" + Items[j] + "' data-parent = '" + Items[k] + "'onmousedown = 'markMinorWothItem(this)' src=" + ItemImages[j] + ">";
											
											if (ManualWotHMinorItems[Items[j]]) {
												document.getElementById("wothMinor" + j + wothNumber).style.setProperty("-webkit-filter", "drop-shadow(0px 0px 5px yellow)"); 
											} 
										}
									}
								}
							}
							if(ManualWotHItemPutInLogic[Items[k]] != undefined) {
								for(var q = 0; q < ManualWotHItemPutInLogic[Items[k]].length; q++) {
									for (var j = 0; j < Items.length; j++) {
										if(Items[j] == ManualWotHItemPutInLogic[Items[k]][q]) {
											document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).innerHTML += "<img id = 'wothMinor" + j + wothNumber + "'" + "class = 'putInLogicByWothItemImages' data-item = '" + Items[j] + "' data-parent = '" + Items[k] + "'onmousedown = 'markMinorWothItem(this)' src=" + ItemImages[j] + ">";
											
											if (ManualWotHMinorItems[Items[j]]) {
											document.getElementById("wothMinor" + j + wothNumber).style.setProperty("-webkit-filter", "drop-shadow(0px 0px 5px yellow)"); 
											} 
										}
									}
								}
							}
							
							document.getElementById("woth" + wothNumber + "_text" + wothRowNumber).innerHTML += " <br />"; wothRowNumber += 1; tempArray.push(Items[k]); 
						}
					} 	
				}
				var tempArray2 = [];
				for (k = 0; k < tempArray.length; k++) {
					var tempArray3 = [];
					for (l = 0; l < ChecksPutInLogicBy[tempArray[k]].length; l++) {
						if (Check[ChecksPutInLogicBy[tempArray[k]][l]] == "unknown") {
							tempArray3.push(ChecksPutInLogicBy[tempArray[k]][l]);
						}
					}
					tempArray2.push.apply(tempArray2, tempArray3);
				}
				
				document.getElementById("woth" + wothNumber + "_title").innerHTML = AreaNames[i];
			
				if (document.getElementById("hints_type").value == "PATH") {
					var addedArrow = false;
					for(var q = 1; q <= NUM_WOTHS; q++)
						if(wothAreas[q] == AreaNames[i] && AreaGoalPathBoss[q] != "") {
							if(!addedArrow) {
								document.getElementById("woth" + wothNumber + "_title").innerHTML += " &#8594; "; 
								addedArrow = true;
							}
							else
								document.getElementById("woth" + wothNumber + "_title").innerHTML += ", "; 
							document.getElementById("woth" + wothNumber + "_title").innerHTML += AreaGoalPathBoss[q];
						}
				}
				
				document.getElementById("woth" + wothNumber + "_title").style.color= WotHColors[wothNumber];
				if (AreaWotHAge[i] < tempnumber3) {
					document.getElementById("woth" + wothNumber + "_title").style.opacity = .2;
					if (wothNumber == 1) {woth1Locations =[];}
					if (wothNumber == 2) {woth2Locations = [];}
					if (wothNumber == 3) {woth3Locations = [];}
					if (wothNumber == 4) {woth4Locations =[];}
					if (wothNumber == 5) {woth5Locations = [];}
					if (wothNumber == 6) {woth6Locations = [];}
					if (wothNumber == 7) {woth7Locations = [];}
					if (wothNumber == 8) {woth8Locations = [];}
				}
				if (AreaWotHAge[i] >= tempnumber3) {
					document.getElementById("woth" + wothNumber + "_title").style.opacity = 1;
					if (wothNumber == 1) {woth1Locations = tempArray2.slice(0);}
					if (wothNumber == 2) {woth2Locations = tempArray2.slice(0);}
					if (wothNumber == 3) {woth3Locations = tempArray2.slice(0);}
					if (wothNumber == 4) {woth4Locations = tempArray2.slice(0);}
					if (wothNumber == 5) {woth5Locations = tempArray2.slice(0);}
					if (wothNumber == 6) {woth6Locations = tempArray2.slice(0);}
					if (wothNumber == 7) {woth7Locations = tempArray2.slice(0);}
					if (wothNumber == 8) {woth8Locations = tempArray2.slice(0);}
				}
			}
			
		}	
		
	for (var i = 1; i <= 35; i++) {
		
		if (Area[i] == "barren") {AreaAge[i] += 1;}
		else {AreaAge[i] = 0;}
		
		if (AreaAge[i] == 3) {
			hinted = true;
			if (i == 1) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 2) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 3) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 4) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 5) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 6) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 7) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 8) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 9) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 10) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 11) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 12) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_") && !bossStrings.includes(Locations[j])) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
				Player.deku_checks_remaining = 0;
				Player.checks_remaining -= 1;
			}
			if (i == 13) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 14) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 15) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 16) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_") && !bossStrings.includes(Locations[j])) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
				Player.dodongos_checks_remaining = 0;
				Player.checks_remaining -= 1;
			}
			if (i == 17) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 18) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 19) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 20) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 21) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 22) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 23) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 24) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 25) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 26) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_")) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
			}
			if (i == 27) {
				for (var j = AreaIndexes[i-1]; j < AreaIndexes[i]; j++) {
					if(Check[Locations[j]] == "unknown" && !Locations[j].startsWith("h_") && !bossStrings.includes(Locations[j])) {document.getElementById("text_" + Locations[j]).dispatchEvent(new Event('mousedown'));}
				}
				Player.jabu_checks_remaining = 0;
				Player.checks_remaining -= 1;
			}
			if (i == 28) {
				document.getElementById("forest").style.backgroundColor = "red";
			}
			if (i == 29) {
				document.getElementById("fire").style.backgroundColor = "red";
			}
			if (i == 30) {
				document.getElementById("spirit").style.backgroundColor = "red";
			}
			if (i == 31) {
				document.getElementById("shadow").style.backgroundColor = "red";
			}
			if (i == 32) {
				document.getElementById("water").style.backgroundColor = "red";
			}
			if (i == 33) {
				document.getElementById("ganons").style.backgroundColor = "red";
				document.getElementById("ganons").click();
			}
			if (i == 34) {
				document.getElementById("gtg").style.backgroundColor = "red";
				document.getElementById("gtg").click();
			}
			if (i == 35) {
				document.getElementById("well").style.backgroundColor = "red";
				document.getElementById("well").click();
			}
			hinted = false;
		}
	}
	var array = ["forest", "fire", "water", "spirit", "shadow"];
	for (var i = 0; i < array.length; i++) {
		if (document.getElementById(array[i]).style.backgroundColor == "red" && (Logic.emerald == array[i] || Logic.ruby == array[i] || Logic.sapphire == array[i]) && (Check.oot == "minuet" || Check.oot == "serenade" || Check.oot == "prelude" || (Check.oot == "bolero" && (Check.crater_bean == "junk" && Player.hookshot) || Player.hover_boots) || (Check.oot == "suns" && Check.redead_grave == "junk") || (Check.oot == "sarias" && Check.goron_dance == "junk" && Check.saria_kid == "junk"))) {document.getElementById(array[i]).click(); if (Logic.emerald == array[i]) {Player.emerald = false;} if (Logic.ruby == array[i]) {Player.ruby = false;} if (Logic.sapphire == array[i]) {Player.sapphire = false;}}
	}
}

function alternateHintInput() {
	if (temptext2 != "") {
		var hintText = document.createElement("small");
		hintText.innerHTML = temptext2;
		//document.getElementById("notes").insertBefore(hintText, document.getElementById("notes").firstChild);
		temptext2 = "";
	}

	var lines = document.getElementById("hintInput").value.split('\n');
	for (const line of lines) {
		const rawTerms = line.split(' ');
		const terms = rawTerms.filter(str => str.length > 0);
		// Only process lines with 2 or 3 terms.
		if (terms.length < 2 || terms.length > 3) {
			continue;
		}

		// We expect first term to be an existing check code.
		const checkCode = terms[0].toLowerCase();
		if (!(checkCode in hintTable)) continue;

		if (terms.length === 2) {
			const itemCode = terms[1];
			// checkCode should be for an individual hint, and itemCode should exist.
			if (typeof hintTable[checkCode] != 'string' || !inputs.includes(itemCode.toLowerCase())) {
				continue;
			}
			processAlternateHintInput(hintTable[checkCode], itemCode);		
		}
		else if (terms.length === 3) {
			const itemCode1 = terms[1];
			const itemCode2 = terms[2];
			// checkCode should be for a dual hint, and both itemCodes should exist.
			const dualChecks = hintTable[checkCode];
			if (!Array.isArray(dualChecks) ||
				dualChecks.length != 2 ||
				!dualChecks.every(item => typeof item === 'string') ||
				!inputs.includes(itemCode1.toLowerCase()) ||
				!inputs.includes(itemCode2.toLowerCase())) {
				continue;
			}
			processAlternateHintInput(dualChecks[0], itemCode1);
			processAlternateHintInput(dualChecks[1], itemCode2);
		}
	}
}

function processAlternateHintInput(checkName, rawItemCode) {
	const itemCode = rawItemCode.toLowerCase();
	const itemCodeIsUppercase = rawItemCode === rawItemCode.toUpperCase();
	if (!(checkName in Check) || !inputs.includes(itemCode)) {
		return;
	}

	// Junk
	if (itemCode === inputs[0]) {
		if (textSongSpots.includes("text_"+checkName)) {
			document.getElementById(checkName).value = "pre";
			songItemChecked = true;
		}
		else { 
			if (Check[checkName] == "unknown") {thisIsHinted = true; document.getElementById("text_" + checkName).dispatchEvent(new Event('mousedown')); thisIsHinted = false; } 
			if (itemCodeIsUppercase) baitsChecked += 1; 
		}
	}
	// SK
	else if (itemCode === inputs[1]) {
		if (Check[checkName] == "unknown") {thisIsHinted = true; document.getElementById(checkName).value = "sk"; thisIsHinted = false; }
	}
	// BK
	else if (itemCode === inputs[2]) {
		if (Check[checkName] == "unknown") {thisIsHinted = true; document.getElementById(checkName).value = "bk"; thisIsHinted = false; }
	}
	else {
		if (Check[checkName] == "unknown") {
			hintedInput = itemCode;
			document.getElementById(checkName).value = capitalizeFirstLetter(itemCode);
		}
		else if (!Hinted[checkName] && itemCode != inputs[ItemNames2.indexOf("Bombchus")]) {
			simOverride = true;
			if (textSongSpots.includes("text_"+checkName)) {
				//document.getElementById("text_"+checkName).dispatchEvent(new Event('mousedown'));
				Hinted[checkName] = true;
			}
			else {
				if(Check[checkName] == "prescription" || Check[checkName] == "claim_check")
					//document.getElementById("trade_location").dispatchEvent(new Event('mousedown'));
					Hinted[checkName] = true;
				else
					//document.getElementById(Check[checkName]+"_location").dispatchEvent(new Event('mousedown'));
					Hinted[checkName] = true;
			}
			simOverride = false;
		}
	}	
}

function markWothItem(x) {
	if(event.which == 1 && ManualWotHItems[x.getAttribute("data-item")] != true) {
		ManualWotHItems[x.getAttribute("data-item")] = true;
		ManualNotWotHItems[x.getAttribute("data-item")] = false;
	}
	else if(event.which == 3 && ManualNotWotHItems[x.getAttribute("data-item")] != true) {
		ManualNotWotHItems[x.getAttribute("data-item")] = true;
		ManualWotHItems[x.getAttribute("data-item")] = false;
	}
	else {
		ManualWotHItems[x.getAttribute("data-item")] = false;
		ManualNotWotHItems[x.getAttribute("data-item")] = false;
	}
	midUpdate();
}

function markWothItemArrow(x) {
	if(MarkedWotHItemArrow == x.id)
		MarkedWotHItemArrow = null;
	else
		MarkedWotHItemArrow = x.id;
	midUpdate();
}

function markMinorWothItem(x) {
	var theItem = x.getAttribute("data-item");
	var theParent = x.getAttribute("data-parent");
	
	if(event.which == 1) {
		if(ManualWotHMinorItems[theItem] == undefined || ManualWotHMinorItems[theItem] == false)
			ManualWotHMinorItems[theItem] = true;
		else
			ManualWotHMinorItems[theItem] = false;
	}
	else if(event.which == 2) {
		if(ManualWotHItemLocked[theParent].includes(theItem)) {
			ManualWotHItemLocked[theParent].splice(ManualWotHItemLocked[theParent].indexOf(theItem), 1);
			ManualWotHItemPutInLogic[theParent].push(theItem);
		}
		else if(ManualWotHItemPutInLogic[theParent].includes(theItem)) {
			ManualWotHItemPutInLogic[theParent].splice(ManualWotHItemPutInLogic[theParent].indexOf(theItem), 1);
			ManualWotHItemLocked[theParent].push(theItem);
		}
	}
	else if(event.which == 3 && ManualNotWotHItems[theItem] != true) {
		if(ManualWotHItemLocked[theParent].includes(theItem))
			ManualWotHItemLocked[theParent].splice(ManualWotHItemLocked[theParent].indexOf(theItem), 1);
		if(ManualWotHItemPutInLogic[theParent].includes(theItem))
			ManualWotHItemPutInLogic[theParent].splice(ManualWotHItemPutInLogic[theParent].indexOf(theItem), 1);
		
		ManualWotHMinorItems[theItem] = false;
	}
	midUpdate();
}

// Right clicking a woth hint will hide all the corresponding items and strike out the hint.
// Left clicking will restore all the woth items.
function resetWoth(element, num) {
	for (var i = 1; i <= 35; i++) {
		index = 0;
		if (num == 1)
			index = wothAreas.indexOf(woth1)
		else if (num == 2)
			index = wothAreas.indexOf(woth2)
		else if (num == 3)
			index = wothAreas.indexOf(woth3)
		else if (num == 4)
			index = wothAreas.indexOf(woth4)
		else if (num == 5)
			index = wothAreas.indexOf(woth5)
		else if (num == 6)
			index = wothAreas.indexOf(woth6)
		else if (num == 7)
			index = wothAreas.indexOf(woth7)
		else if (num == 8)
			index = wothAreas.indexOf(woth8)
		if(AreaNames[i] == wothAreas[index]) {
			for (var k = 0; k < Items.length; k++) {
				if (((Locations.indexOf(Location[Items[k]]) >= AreaIndexes[i-1] && Locations.indexOf(Location[Items[k]]) < AreaIndexes[i]) || Locations.indexOf(Location[Items[k]]) == SongIndexes[i-1] || Locations.indexOf(Location[Items[k]]) == SongIndexes2[i-1])) {
					if(event.button == 0 && ManualNotWotHItems[Items[k]]) {
						ManualNotWotHItems[Items[k]] = false;
					}
					if (event.button == 2) {
						ManualNotWotHItems[Items[k]] = true;
						ManualWotHItems[Items[k]] = false;
					}
				}
			}
		}
	}

	if (event.button == 0) {
		element.style.textDecoration = "none";
	} else if (event.button == 2) {
		element.style.textDecoration = "line-through";
	}
	
	midUpdate();
}