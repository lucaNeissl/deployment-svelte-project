import { writable } from 'svelte/store';

function createCartStore() {
	let initialCart = [];

	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem('cart');
		initialCart = stored ? JSON.parse(stored) : [];
	}

	const { subscribe, set, update } = writable(initialCart);

	return {
		subscribe,
		addItem: (product, quantity) => {
			update((cart) => {
				const existingItem = cart.find((item) => item.id === product.id);
				if (existingItem) {
					existingItem.quantity += quantity;
				} else {
					cart.push({
						id: product.id,
						title: product.title,
						price: product.price,
						image: product.image,
						quantity
					});
				}
				localStorage.setItem('cart', JSON.stringify(cart));
				return cart;
			});
		},
		removeItem: (productId) => {
			update((cart) => {
				const filtered = cart.filter((item) => item.id !== productId);
				localStorage.setItem('cart', JSON.stringify(filtered));
				return filtered;
			});
		},
		updateQuantity: (productId, quantity) => {
			update((cart) => {
				const item = cart.find((item) => item.id === productId);
				if (item) {
					item.quantity = quantity;
				}
				localStorage.setItem('cart', JSON.stringify(cart));
				return cart;
			});
		},
		clear: () => {
			set([]);
			localStorage.setItem('cart', JSON.stringify([]));
		}
	};
}

export const cartStore = createCartStore();
