class StorageForMany {
	static saveIntoStorage(name, item) {
        let items = this.getItemsFromStorage(name);
        console.log(items, name, item)
		items.push(item);
        items.sort((a, b) =>b.correctAnswersAmount - a.correctAnswersAmount)
        .map((singleItem, index) =>	singleItem.position = ++index)
        .filter(singleItem => singleItem.position < 11)
		localStorage.setItem(name, JSON.stringify(items));
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

	static getPositionLocalStorage(name, userName) {
		let items = this.getItemsFromStorage(name);
		const position = items.find((item) => item.name === userName).position;
		return position;
	}

	static clearLocalStorage() {
		localStorage.clear();
	}
}

export default StorageForMany;