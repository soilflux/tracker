function Update() {
	
	handleThemes(); //change themes as needed
	refresh_logic_for_stuff(); //puts something in or out of logic based on whether its location is in or out of logic 
	force_stuff_in_or_out_of_logic(); //implements the force out of logic and force into logic boxes
	logic_shortcuts(); //combines multiple pieces of logic into one variable
	timer_stuff(); //implements a timer to use as an alternative to stuff like livesplit
	weird_routing_stuff(); //doesn't do anything yet
	process_inputs(); //handle hinted, peeked and picked up things
	woth_and_barren_processing(); //do various things based on woth and barrens;
	checkGanons(); //Removes ganon's castle checks if player has obtained light arrows, magic and bow
	stone_medallion_input(); //handle stones and medallions input in a dumb way
	location_logic(); //updates logic and accessibility for all locations
	gs_array_builder(); //just moves gs logic into an array
	update_logic_info(); //updates colors and counts for checks, woths and the skull, remaining, in-logic counters
	check_circle_info(); //updates the numbers in the circles next to dungeon names
	handleAlternateHintInput(); //implements inputting hints into the note box
	trackUnreadHints(); //updates which hints are still unread
	setInLogicMaxForDungeons(); //ensures that dungeons will never add more to the in logic counter than the amount of items they contain
	handleItemHighlights(); //add or remove transparency if player has or does not have items, respectively
	handleDungeonHighlights(); //highlight medallions if player has them and highlight dungeon text if player still needs to beat it
	handleAreaBreaks(); //add or remove line breaks for areas based on whether any checks in that area are currently being displayed
	//if (linso) {refreshLinSo();}
}