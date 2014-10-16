describe('Airport', function() {

	beforeEach(function() {
		plane = new Plane;
		airport = new Airport(5);
	});

	it('should be created with no planes', function() {
		expect(airport.planes).toEqual([])
	});

	it('should be able to land planes', function() {
		expect(airport.land(plane)).toEqual(plane)
	});

	it('should be know if it has planes', function() {
		airport.land(plane)
		expect(airport.planes.length).toEqual(1);
	});

	it('should allow planes to take off', function() {
		airport.land(plane)
		airport.takeoff(plane)
		expect(airport.planes.length).toEqual(0);
	});

	it('should not allow planes to take off if there are no planes', function() {
		expect(airport.takeoff(plane)).toEqual(undefined);
	});

	it('should be have a default capacity planes', function() {
		expect(airport.capacity).toEqual(5);
	});

	it('should be able to not breach capacity', function() {
		fillAirport(airport)
		expect(airport.land(plane)).toEqual("Fly away please!!")
	});

	fillAirport = function(airport) {
		for (var i = 0; i < 5; i++) {
 			airport.land(plane);
		};
	}

});
		

