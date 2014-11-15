describe('Airport', function() {

	beforeEach(function() {
		plane = new Plane;
		airport = new Airport(10);
	});

	it('should be created with no planes', function() {
		expect(airport.planes).toEqual([])
	});

	it('should be able to land planes', function() {
		expect(airport.land(plane)).toEqual(plane)
	});

	it('should know how many planes it has', function() {
		airport.land(plane)
		expect(airport.planes.length).toEqual(1);
	});

	it('should allow plane to take off', function() {
		airport.land(plane)
		expect(airport.takeoff(plane)).toEqual(plane);
	});

	it('should know that a plane has taken off', function() {
		airport.land(plane)
		airport.takeoff(plane)
		expect(airport.planes.length).toEqual(0);
	});

	it('should not allow planes to take off if there are no planes', function() {
		expect(airport.takeoff(plane)).toEqual(undefined);
	});

	it('should only let a plane take off if it is present', function() {
		jet = new Plane;
		airport.land(jet);
		expect(airport.takeoff(plane)).toEqual(undefined)
	});

	it('should be have a default capacity planes', function() {
		expect(airport.capacity).toEqual(10);
	});

	it('should be able to not breach capacity', function() {
		fillUp(airport)
		expect(airport.land(plane)).toEqual("Fly away please!!")
	});

	fillUp = function(airport) {
		for (var i = 0; i < 10; i++) {
 			airport.land(plane);
		};
	}

});
		

