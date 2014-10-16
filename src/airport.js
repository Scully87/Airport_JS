function Plane() {};

function Airport(capacity1) {	
	this.planes = []
	this.capacity = capacity1
};

Airport.prototype.land = function(plane) {
	if ((this.planes.length) === (this.capacity)) 	
		return "Fly away please!!"
	else
		this.planes.push(plane);
	return plane;
};

Airport.prototype.takeoff = function(plane) {
	this.planes.pop(plane);
};

// Airport.prototype.fill_airport = function() {
// 		for (i = 0; i <= 5; i=i+1){
// 			this.land(plane)
// 		};
// 	};