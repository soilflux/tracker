function Update() {
	saveStuff();
  changeThemes();
	keyDungeonInfo();
	itemHighlights();
	dungeonHighlights();
  if (document.getElementById("shiftChecks").value == "YES") areaBreaks();
	updateSummaryText();
	updateProbabilities();
}

function fastUpdate() {
	if(toFocus != null) {
		toFocus.focus({
      preventScroll: true
    });
		toFocus = null;
	}
	timerStuff(); 
	processInputs();
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
  if (document.activeElement === document.getElementById("inputPresets")) {
    inputPresets();
  }
}

function midUpdate() {
	var i = 0;
	var previousInLogicChecks = Player.logically_accessible;
	var previousInLogicSkulls = Logic.gold_skulltulas;
	var flag = false;
	while (i < 100000) {
		refreshLogicForStuff();
		logicShortcuts();
		locationLogic();
		updateDungeonER();
		gsArrayBuilder(); 
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
  wothAndBarrenProcessing(); 
  alternateHintInput();
  setInLogicMaxForDungeons();
  updateLogicInfo();
  updateSpawnInputs();
  refreshLinSo();
  updateWothBorders();
  updateUsefulAreaItems();
  dungeonHeaderVisibility();
	Update(); 
}

function slowUpdate() {
	updateInputs();
}