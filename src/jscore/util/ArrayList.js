function ArrayList() {
	var list = [];

	this.clear = function(){
		list.splice(0, list.length);
	};
	this.get = function(idx){
		return list[idx];
	};
	this.remove = function(idx){
		list.splice(idx, 1);
	};
	this.forEach = function(callback){
		list.forEach(callback);
	};
}

module.exports = ArrayList;