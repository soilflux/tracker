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

function midUpdate(force = true) {
  clearTimeout(timer);

  const runLogic = () => {
    let previousAccessibleChecks = -1; let previousAccessibleTokens = -1;
    while (player.accessible > previousAccessibleChecks || player.tokensAccessible > previousAccessibleTokens) {
      previousAccessibleChecks = player.accessible; previousAccessibleTokens = player.tokensAccessible;
      refreshLogicForStuff();
      logicShortcuts();
      updateCheckLogic();
      updateDungeonER();
      gsArrayBuilder();
      updateLogicInfo();
    }
    unlocksChecksInDungeon();
    stoneMedallionInput();
    wothAndBarrenProcessing();
    alternateHintInput();
    setInLogicMaxForDungeons();
    updateSpawnInputs();
    refreshLinSo();
    updateWothBorders();
    wothDisplay();
    updateUsefulAreaItems();
    dungeonHeaderVisibility();
    Update();
  };

  if (force) {
    runLogic();
  } else {
    timer = setTimeout(runLogic, 1000);
  }
}
