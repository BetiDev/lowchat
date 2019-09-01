/* jshint esversion: 6 */
module.exports = Database;

function Database(name, data) {
	this.name = name;
	this.data = data || {};
	this.write = (path, data) => {
		path = path.split('/');
		let last = path.pop();
		let curr = this.data;
		for (let i of path) {
			curr[i] = {};
			curr = curr[i];
		}
		curr[last] = data;
	};
	this.read = (path) => {
		path = path.split('/');
		let curr = this.data;
		for (let i of path) {
			curr = curr[i];
		}
	};
	this.push = (path, data) => {
		path = path.split('/');
		let last = path.pop();
		let curr = this.data;
		for (let i of path) {
			curr[i] = {};
			curr = curr[i];
		}
		curr[last] = data;
	};
}