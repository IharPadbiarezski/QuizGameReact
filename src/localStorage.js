class Storage {
	static saveIntoStorage(name, item) {
		// let items = this.getItemsFromStorage();
		// items.push(item);
		localStorage.setItem(name, JSON.stringify(item));
	}

	static getItemFromStorage(name) {
		// let items;
		// if (localStorage.getItem(name) === null) {
		// 	items = [];
		// }
		// else {
			const item = JSON.parse(localStorage.getItem(name));
		// }
		return item;
	}

	// static removeItemLocalStorage(name, id) {
	// 	let itemsLS = this.getItemsFromStorage();
	// 	itemsLS.forEach((itemLS, index) => {
	// 		if (itemLS.id === id) {
	// 			itemLS.splice(index, 1);
	// 		}
	// 	});
	// 	localStorage.setItem(name, JSON.stringify(itemsLS));
	// }

	static clearLocalStorage() {
		localStorage.clear();
	}
}

export class MultipleStorage {
	static saveIntoStorage(name, item) {
		let items = this.getItemsFromStorage();
		items.push(item);
		localStorage.setItem(name, JSON.stringify(item));
	}

	static getItemsFromStorage(name) {
		let items;
		if (localStorage.getItem(name) === null) {
			items = [];
		}
		else {
			items = JSON.parse(localStorage.getItem(name));
		}
		return items;
	}

	static removeItemLocalStorage(name, id) {
		let itemsLS = this.getItemsFromStorage();
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