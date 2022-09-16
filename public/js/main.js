'use strict';

//Отправляем свои данные с помощью $emit в верхний компонент, а вниз с помощью props

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';



const app = new Vue({
	el: '#app',
	data: {
		userSearch: '',
		showCart: false,
		catalogUrl: '/catalogData.json',
		cartUrl: '/getBasket.json',
		cartItems: [],
		filtered: [],
		//imgCart: 'https://i.ibb.co/Sd4Z07m/monitor.jpg/50x100',
		products: [],
		//imgCatalog: 'https://i.ibb.co/Sd4Z07m/monitor.jpg/200x150',
		error: false
	},


	methods: {
		// getJson(url) {
		// 	return fetch(url)
		// 		.then(result => result.json())
		// 		.catch(error => {
		// 			console.log(error);
		// 			this.error = true;
		// 		})
		// },



		getJson(url) {
			return fetch(url)
				.then(result => result.json())
				.catch(error => {
					// console.log(error)
					this.$refs.error.text = error;
				})
		},
		postJson(url, data) {
			return fetch(url, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})
				.then(result => result.json())
				.catch(error => {
					// console.log(error)
					this.$refs.error.text = error;
				})
		},
		putJson(url, data) {
			return fetch(url, {
				method: 'PUT',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})
				.then(result => result.json())
				.catch(error => {
					// console.log(error)
					this.$refs.error.text = error;
				})
		},






		addProduct(item) {

			let find = this.cartItems.find(el => el.id_product === item.id_product);
			if (find) {
				this.putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
					.then(data => {
						if (data.result === 1) {
							find.quantity++
						}
					})
			} else {
				const prod = Object.assign({ quantity: 1 }, item);
				this.postJson(`/api/cart`, prod)
					.then(data => {
						if (data.result === 1) {
							this.cartItems.push(prod)
						}
					})
			}



			// this.getJson(`${API}/addToBasket.json`)
			// 	.then(data => {
			// 		if (data.result == 1) {
			// 			let find = this.cartItems.find(el => el.id_product == item.id_product);
			// 			if (find) {
			// 				find.quantity++;
			// 			} else {
			// 				const prod = Object.assign({ quantity: 1 }, item); // создание нового объекта на основе двух, указанных в параметрах
			// 				this.cartItems.push(prod)
			// 			}
			// 		}
			// 	})


		},

		remove(item) {

			this.getJson(`${API}/addToBasket.json`)
				.then(data => {
					if (data.result == 1) {
						if (item.quantity > 1) {
							item.quantity--;
						} else {
							this.cartItems.splice(this.cartItems.indexOf(item), 1);
						}
					}
				})
		},
		minusItem(item) {
			this.getJson(`${API}/addToBasket.json`)
				.then(data => {
					if (data.result === 1) {
						if (item.quantity > 1) {
							item.quantity--;
						} else {
							this.cartItems.splice(this.cartItems.indexOf(item), 1);
						}
					}
				})
		},


		// remove(product) {
		// 	if (product.quantity > 1) {
		// 		this.putJson(`/api/cart/${product.id_product}/${product.product_name}`, { quantity: -1 })
		// 			.then(data => {
		// 				if (data.result) {
		// 					product.quantity--;
		// 				}
		// 			})
		// 	} else {
		// 		this.delJson(`/api/cart/${product.id_product}/${product.product_name}`, product)
		// 			.then(data => {
		// 				if (data.result) {
		// 					this.cartItems.splice(this.cartItems.indexOf(product), 1);
		// 				} else {
		// 					console.log('error');
		// 				}
		// 			})
		// 	}
		// },




		filter() {
			const regexp = new RegExp(this.userSearch, 'i');
			this.filtered = this.products.filter(product => regexp.test(product.product_name));
		}
	},
	mounted() {
		this.getJson(`/api/cart`)
			.then(data => {
				for (let item of data.contents) {
					this.$data.cartItems.push(item);
				}
			});

		// this.getJson(`${API + this.catalogUrl}`)
		// 	.then(data => {
		// 		for (let item of data) {
		// 			this.$data.products.push(item);
		// 			this.$data.filtered.push(item);
		// 		}
		// 	});

		// this.getJson(`getProducts.json`)
		// 	.then(data => {
		// 		for (let item of data) {
		// 			this.products.push(item);
		// 			this.filtered.push(item);
		// 		}
		// 	})

		this.getJson(`/api/products`)
			.then(data => {
				for (let item of data) {
					this.$data.products.push(item);
					this.$data.filtered.push(item);
				}
			});




	}
});


