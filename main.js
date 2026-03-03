function Update() {
  saveStuff();
  keyDungeonInfo();
  itemHighlights();
  dungeonHighlights();
  if (rules.listSorting == "dynamic") areaBreaks();
  updateSummaryText();
  updateProbabilities();
}

function fastUpdate() {
  if (toFocus != null) {
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
    highlightNextCheck(checks[0]);
  }
  if (document.activeElement === document.getElementById("inputPresets")) {
    inputPresets();
  }
}

function midUpdate() {
  var i = 0;
  var previousInLogicChecks = player.logically_accessible;
  var previousInLogicSkulls = logic.gold_skulltulas;
  var flag = false;
  while (i < 100000) {
    refreshLogicForStuff();
    logicShortcuts();
    updateCheckLogic();
    updateDungeonER();
    gsArrayBuilder();
    if (i >= 1 && player.logically_accessible > previousInLogicChecks || logic.gold_skulltulas > previousInLogicSkulls) {
      i += 1;
      previousInLogicChecks = player.logically_accessible;
      previousInLogicSkulls = logic.gold_skulltulas;
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
  wothDisplay();
  updateUsefulAreaItems();
  dungeonHeaderVisibility();
  Update();
}