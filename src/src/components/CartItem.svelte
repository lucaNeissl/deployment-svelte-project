<script>
	import { cartStore } from '../lib/cartStore.js';

	let { item } = $props();
    let totalForItem = $derived((item.price * item.quantity).toFixed(2));
	let quantity = $state(0);
	$effect.pre(() => {
		quantity = item.quantity;
	});

	function removeItem() {
		cartStore.removeItem(item.id);
	}

	function updateQuantity() {
        quantity = Math.min(5000, Math.max(1, quantity));
        cartStore.updateQuantity(item.id, quantity);
        
	}
</script>

<div class="cart-item">
	<img src={item.image} alt={item.title} class="item-image" />
	<div class="item-details">
		<h3>{item.title}</h3>
		<p class="price">${item.price.toFixed(2)}</p>
		<div class="quantity-control">
			<label for="qty-{item.id}">Quantity:</label>
			<input
				id="qty-{item.id}"
				type="number"
				min="1"
				bind:value={quantity}
				oninput={() => updateQuantity(item.id, quantity)}
			/>
		</div>
	</div>
	<div class="item-total">
		<p class="total-price">${totalForItem}</p>
		<button class="remove-btn" onclick={removeItem}>Remove</button>
	</div>
</div>

<style>
	.cart-item {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		background: white;
		padding: 1.5rem;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		transition: box-shadow 0.2s ease;
	}

	.cart-item:hover {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
	}

	.item-image {
		width: 100px;
		height: 100px;
		object-fit: contain;
		flex-shrink: 0;
		border-radius: 4px;
		background: #f9f9f9;
	}

	.item-details {
		flex: 1;
		min-width: 0;
	}

	.item-details h3 {
		margin: 0 0 10px 0;
		font-size: 1.1rem;
		color: #333;
		word-break: break-word;
	}

	.price {
		margin: 5px 0;
		color: #666;
		font-size: 0.9rem;
	}

	.quantity-control {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-top: 0.75rem;
		flex-wrap: wrap;
	}

	.quantity-control label {
		font-size: 0.9rem;
		white-space: nowrap;
	}

	.quantity-control input {
		width: 60px;
		padding: 0.5rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		font-size: 1rem;
	}

	.item-total {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.75rem;
		min-width: 120px;
	}

	.total-price {
		font-size: 1.2rem;
		font-weight: bold;
		color: #333;
		margin: 0;
	}

	.remove-btn {
		padding: 0.6rem 1.2rem;
		background: #ff4444;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 0.9rem;
		transition: background 0.2s ease;
		white-space: nowrap;
	}

	.remove-btn:hover {
		background: #cc0000;
	}

	.remove-btn:active {
		transform: scale(0.98);
	}

	@media (max-width: 768px) {
		.cart-item {
			flex-wrap: wrap;
			gap: 1rem;
			padding: 1rem;
		}

		.item-image {
			width: 80px;
			height: 80px;
		}

		.item-details h3 {
			font-size: 1rem;
		}

		.item-total {
			min-width: 100px;
		}

		.total-price {
			font-size: 1.1rem;
		}
	}

	@media (max-width: 480px) {
		.cart-item {
			flex-direction: column;
			align-items: flex-start;
			padding: 0.75rem;
		}

		.item-image {
			width: 100%;
			height: 200px;
			object-fit: contain;
		}

		.item-total {
			width: 100%;
			align-items: flex-start;
		}

		.quantity-control {
			width: 100%;
		}

		.remove-btn {
			width: 100%;
			padding: 0.75rem;
		}
	}
</style>
