class Storage {
	static saveIntoStorage(name, item) {
		let items = this.getPhonesFromStorage();
		items.push(item);
		localStorage.setItem(name, JSON.stringify(name));
	}

	static getPhonesFromStorage(name) {
		let items;
		if (localStorage.getItem(name) === null) {
			items = [];
		}
		else {
			items = JSON.parse(localStorage.getItem(name));
		}
		return items;
	}

	static removePhoneLocalStorage(name, id) {
		let itemsLS = this.getPhonesFromStorage();
		itemsLS.forEach((itemLS, index) => {
			if (itemLS.id === id) {
				itemLS.splice(index, 1);
			}
		});
		localStorage.setItem(name, JSON.stringify(itemsLS));
	}

	static clearLocalStorage() {
		localStorage.clear();
	}
}

export default Storage;