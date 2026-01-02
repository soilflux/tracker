function Update() {
	saveStuff(); //save current settings for next use of tracker
	changeThemes();
	checkCircleInfo(); //updates the numbers in the circles next to dungeon names
	itemHighlights(); //add or remove transparency if player has or does not have items, respectively
	dungeonHighlights(); //highlight medallions if player has them and highlight dungeon text if player still needs to beat it
	areaBreaks(); //add or remove line breaks for areas based on whether any checks in that area are currently being displayed
	updateSummaryText()
	updateProbabilities() // update the probabilities for items based on checks of that type left vs checks remaining
	for (var i = 0; i < nextChecks.length; i++) {
		if (Check[nextChecks[i]] != "unknown") {console.log(nextChecks);nextChecks.splice(i,1); continue;}
		if (Location_Peek[nextChecks[i]]) {nextIndex = i; break;}
		if (i == nextChecks.length - 1) {i = 420;}
	}
	if (nextChecks.length > 0 && nextIndex != 420) {next.innerHTML = Names[Locations.indexOf(nextChecks[nextIndex])];} else {next.innerHTML = "";}
	if (nextChecks.length > 0 && nextIndex != 420) {next.style.color = document.getElementById("text_" + nextChecks[nextIndex]).style.color;}
	
}

function fastUpdate() {
	if(toFocus != null) {
		toFocus.focus();
		toFocus = null;
	}
	timerToD(-1); //help with tracking ToD
	timerStuff(); //implements a timer to use as an alternative to stuff like livesplit
	stoneMedallionInput();
	processInputs(); //handles hinted, peeked and picked up things
	}

function midUpdate() {
	var i = 0;
	var previousInLogicChecks = Player.logically_accessible;
	var previousInLogicSkulls = Logic.gold_skulltulas;
	var flag = false;
	while (i < 100000) {
		wothAndBarrenProcessing(); //do various things based on woth and barrens;
		updateWothBorders(); // highlight woth checks if option enabled
		refreshLogicForStuff(); //puts something in or out of logic based on whether its location is in or out of logic 
		forceStuffInOrOutOfLogic(); //implements the force out of logic and force into logic boxes
		logicShortcuts(); //combines multiple pieces of logic into one variable
		locationLogic(); //updates logic and accessibility for all locations
		updateDungeonER();
		updateLogicInfo(); //updates colors and counts for checks, woths and the skull, remaining, in-logic counters
		setInLogicMaxForDungeons(); //ensures that dungeons will never add more to the in logic counter than the amount of items they contain
		gsArrayBuilder(); //just moves gs logic into an array
		refreshLinSo();
		updateSpawnInputs(); //child and adult spawn input
		alternateHintInput(); //implements inputting hints into the note box
		//trackUnreadHints(); updates which hints are still unread
		if (document.getElementById("presets").value == "S3") {checkGanons();} //Removes ganon's castle checks if player has obtained light arrows, magic and bow
		if (i >=1 && Player.logically_accessible > previousInLogicChecks || Logic.gold_skulltulas > previousInLogicSkulls) {
			i += 1;
			previousInLogicChecks = Player.logically_accessible;
			previousInLogicSkulls = Logic.gold_skulltulas;
			flag = false;
		}
		else if (!flag) {
			flag = true;
		}
		else {
			i = 100000;
		}
	}
	for (var i = 0; i < nextChecks.length; i++) {
		if (Check[nextChecks[i]] != "unknown") {nextChecks.splice(i,1); continue;}
		if (Location_Peek[nextChecks[i]]) {nextIndex = i; break;}
		if (i == nextChecks.length - 1) {nextIndex = 420;}
	}
	if (nextChecks.length > 0 && nextIndex != 420) {next.innerHTML = Names[Locations.indexOf(nextChecks[nextIndex])];} else {next.innerHTML = "";}
	if (nextChecks.length > 0 && nextIndex != 420) {next.style.color = document.getElementById("text_" + nextChecks[nextIndex]).style.color;}
	Update(); 
}

function slowUpdate() {
	updateInputs(); //implements custom inputs
	document.getElementById("effectiveSpeedUp").innerHTML = effectiveSpeedUp.toFixed(4);
	if (!nerfed) {
		WotHItems = [];
		for (i=0; i < Items.length; i++) {
		ChecksLockedBy[Items[i]] = checksLockedByItem(Items[i]);
		}
		for (i=0; i < Items.length; i++) {
		if (Location[Items[i]] != null ) {ChecksPutInLogicBy[Items[i]] = checksPutInLogicByItem(Items[i]);}
		}
	}
}