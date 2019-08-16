class Storage {
	static saveIntoStorage(name, item) {
		localStorage.setItem(name, JSON.stringify(item));
	}

	static getItemFromStorage(name) {
		const item = JSON.parse(localStorage.getItem(name));
		return item;
	}

	static clearLocalStorage() {
		localStorage.clear();
	}
}

export default Storage;