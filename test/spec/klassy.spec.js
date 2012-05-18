define(['src/klassy'], function(Class) {

	describe("klassy", function() {	
		it("should new up a new class", function() {
			var Shape = new Class;
			expect(Shape).toBeDefined();
		});
	});

});