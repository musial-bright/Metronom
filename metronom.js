// Simple javascript metronom for scheduled tasks.
// by Adam Musial-Bright
// git@github.com:musial-bright/Metronom.git

(function() {

  Metronom = function(action, time) {
		this.action = action;
    this.time = time;
    
		this.state = {
			"id"    : undefined
    }
			
		this.start = function() {
			this.stop(this.state.id);
      this.state.id = setInterval(this.action, this.time);
			return this.state.id;
		}
		
		this.stop = function() {
			clearInterval(this.state.id);
		}
	}
	
}());
