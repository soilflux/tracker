function Update() {
	saveStuff(); //save current settings for next use of tracker
	changeThemes();
	checkCircleInfo(); //updates the numbers in the circles next to dungeon names
	itemHighlights(); //add or remove transparency if player has or does not have items, respectively
	dungeonHighlights(); //highlight medallions if player has them and highlight dungeon text if player still needs to beat it
  if (document.getElementById("shiftChecks").value == "YES") areaBreaks(); //add or remove line breaks for areas based on whether any checks in that area are currently being displayed
	updateSummaryText()
	updateProbabilities() // update the probabilities for items based on checks of that type left vs checks remaining
}

function fastUpdate() {
	if(toFocus != null) {
		toFocus.focus();
		toFocus = null;
	}
	timerStuff(); //implements a timer to use as an alternative to stuff like livesplit
	processInputs(); //handles hinted, peeked and picked up things
  if (document.activeElement == document.getElementById("markMedallions")) {
    stoneMedallionInput();
  }
  if (document.activeElement == document.getElementById("mark_ER_Dungeons")) {
    updateDungeonER();
  }
  if (document.activeElement == document.getElementById("hintInput")) {
    alternateHintInput();
  }
  if (document.activeElement.id.startsWith("woth") || document.activeElement.id.startsWith("barren") || document.activeElement.id.startsWith("path")) {
    wothAndBarrenProcessing();
  }
  if (document.activeElement === document.body) {
    highlightNextCheck(Locations[0]);
  }
}

function midUpdate() {
	var i = 0;
	var previousInLogicChecks = Player.logically_accessible;
	var previousInLogicSkulls = Logic.gold_skulltulas;
	var flag = false;
	while (i < 100000) {
		refreshLogicForStuff(); //puts something in or out of logic based on whether its location is in or out of logic 
		logicShortcuts(); //combines multiple pieces of logic into one variable
		locationLogic(); //updates logic and accessibility for all locations
		updateDungeonER();
		gsArrayBuilder(); //just moves gs logic into an array
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
  stoneMedallionInput();
  wothAndBarrenProcessing(); //do various things based on woth and barrens;
  updateWothBorders(); // highlight woth checks if option enabled;
  alternateHintInput(); //implements inputting hints into the note box;
  setInLogicMaxForDungeons(); //ensures that dungeons will never add more to the in logic counter than the amount of items they contain
  updateLogicInfo(); //updates colors and counts for checks, woths and the skull, remaining, in-logic counters
  updateSpawnInputs(); //child and adult spawn input
  refreshLinSo();
	Update(); 
}

function slowUpdate() {
	updateInputs(); //implements custom inputs
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