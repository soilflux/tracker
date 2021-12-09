function Update() {
	handleThemes(); //change themes as needed
	check_circle_info(); //updates the numbers in the circles next to dungeon names
	handleItemHighlights(); //add or remove transparency if player has or does not have items, respectively
	handleDungeonHighlights(); //highlight medallions if player has them and highlight dungeon text if player still needs to beat it
	handleAreaBreaks(); //add or remove line breaks for areas based on whether any checks in that area are currently being displayed
	update_summary_text() // update the check summary text colors
	update_probabilities() // update the probabilities for items based on checks of that type left vs checks remaining
	for (var i = 0; i < nextChecks.length; i++) {
		if (Check[nextChecks[i]] != "unknown") {console.log(nextChecks);nextChecks.splice(i,1); continue;}
		if (Location_Access[nextChecks[i]]) {nextIndex = i; break;}
		if (i == nextChecks.length - 1) {i = 420;}
	}
	if (nextChecks.length > 0 && nextIndex != 420) {next.innerHTML = Names[Locations.indexOf(nextChecks[nextIndex])];} else {next.innerHTML = "";}
	if (nextChecks.length > 0 && nextIndex != 420) {next.style.color = document.getElementById("text_" + nextChecks[nextIndex]).style.color;}
	
}

function fastUpdate() {
	timer_stuff(); //implements a timer to use as an alternative to stuff like livesplit
	stone_medallion_input(); //handle stones and medallions input
	process_inputs(); //handle hinted, peeked and picked up things
	}

function midUpdate() {
	var i = 0;
	var previousInLogicChecks = Game.logically_accessible;
	var previousInLogicSkulls = Logic.gold_skulltulas;
	var flag = false;
	while (i < 100000) {
		woth_and_barren_processing(); //do various things based on woth and barrens;
		refresh_logic_for_stuff(); //puts something in or out of logic based on whether its location is in or out of logic 
		force_stuff_in_or_out_of_logic(); //implements the force out of logic and force into logic boxes
		logic_shortcuts(); //combines multiple pieces of logic into one variable
		location_logic(); //updates logic and accessibility for all locations
		update_logic_info(); //updates colors and counts for checks, woths and the skull, remaining, in-logic counters
		setInLogicMaxForDungeons(); //ensures that dungeons will never add more to the in logic counter than the amount of items they contain
		gs_array_builder(); //just moves gs logic into an array
		refreshLinSo();
		spawn_inputs(); //handle child and adult spawn input
		handleAlternateHintInput(); //implements inputting hints into the note box
		//trackUnreadHints(); updates which hints are still unread
		if (document.getElementById("presets").value == "S3") {checkGanons();} //Removes ganon's castle checks if player has obtained light arrows, magic and bow
		if (i >=1 && Game.logically_accessible > previousInLogicChecks || Logic.gold_skulltulas > previousInLogicSkulls) {
			i += 1;
			previousInLogicChecks = Game.logically_accessible;
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
		if (Location_Access[nextChecks[i]]) {nextIndex = i; break;}
		if (i == nextChecks.length - 1) {nextIndex = 420;}
	}
	if (nextChecks.length > 0 && nextIndex != 420) {next.innerHTML = Names[Locations.indexOf(nextChecks[nextIndex])];} else {next.innerHTML = "";}
	if (nextChecks.length > 0 && nextIndex != 420) {next.style.color = document.getElementById("text_" + nextChecks[nextIndex]).style.color;}
	Update(); 
}

function slowUpdate() {
	updateInputs(); //implements custom inputs
	saveStuff(); //save current settings for next use of tracker
	refreshVersion(); //will highlight patch notes that haven't been read yet
	
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