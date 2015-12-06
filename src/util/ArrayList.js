class ArrayList {

	constructor () {
		this.list = [];
	}
	clear () {
		this.list.splice(0, this.list.length);
	}
	get (idx) {
		return this.list[idx];
	}
	remove (idx) {
		this.list.splice(idx, 1);
	}
	push (item) {
		this.list.push(item);
	}
	forEach (callback) {
		this.list.forEach(callback);
	};
}

module.exports = ArrayList;
