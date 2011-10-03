// Simple javascript metronom.
// by Adam Musial-Bright

(function() {

	metronom = {
		
		state : {
			"id" : undefined,
		},
			
		start : function(action, time) {
			metronom.stop(metronom.state.id);
			metronom.state.id = setInterval(action, time);
			return metronom.state.id;
		},
		
		stop : function() {
			clearInterval(metronom.state.id);
		}

	}
	
}());
