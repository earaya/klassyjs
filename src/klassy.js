var Class = function() {
	var klass = function() {
		this.init.apply(this, arguments);
	};
	
	klass.prototype.init = function() {};
	
	// Shortcut to proto
	klass.fn = klass.prototype;
	
	// Shortcut to class
	klass.fn.parent = klass;
	
	// Add class or 'static' properties
	klass.extend = function(obj) {
		for(var prop in obj) {
			klass[prop] = obj[prop]
		}
	};
	
	// Add instance properties
	klass.include = function(obj) {
		for(var prop in obj) {
			klass.fn[prop] = obj[prop];
		}
	};
}