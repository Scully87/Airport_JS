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
	if(this.planes.indexOf(plane) !== -1);
		return plane;
};


 









 	// return(this.planes.pop(plane));
