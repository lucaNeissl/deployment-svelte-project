<script>
	import Header from "../../../components/Header.svelte";
	import CartItem from "../../../components/CartItem.svelte";
	import { cartStore } from "../../../lib/cartStore.js";

	let cart = $state([]);

	$effect(() => {
		return cartStore.subscribe(value => {
			cart = value;
		});
	});

	function getTotalPrice() {
		return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
	}

	function buttonCheckoutClicked(){
		alert("Gib ma dei Göd")
	}
</script>

<Header></Header>
<div class="cart-container">
	<h1>Shopping Cart</h1>

	{#if cart && cart.length > 0}
		<div class="cart-items">
			{#each cart as item (item.id)}
				<CartItem {item} />
			{/each}
		</div>

		<div class="cart-summary">
			<h2>Total: ${getTotalPrice().toFixed(2)}</h2>
			<button class="checkout-btn" onclick={buttonCheckoutClicked}>Checkout</button>
		</div>
	{:else}
		<p class="empty-message">Your cart is empty</p>
	{/if}
</div>

<style>
	.cart-container {
		padding-top: 120px;
		padding: 2rem;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
		background: lightblue;
		min-height: 100vh;
	}

	h1 {
		padding-bottom: 10px;
		text-align: center;
		color: #333;
		font-size: 2rem;
	}

	.cart-items {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.cart-summary {
		background: white;
		padding: 2rem;
		border-radius: 8px;
		text-align: right;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.cart-summary h2 {
		margin: 0 0 15px 0;
		color: #333;
	}

	.checkout-btn {
		padding: 12px 30px;
		background: #4CAF50;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 1rem;
		font-weight: bold;
		transition: background 0.2s ease;
	}

	.checkout-btn:hover {
		background: #45a049;
	}

	.checkout-btn:active {
		transform: scale(0.98);
	}

	.empty-message {
		text-align: center;
		color: #666;
		font-size: 1.1rem;
		padding: 40px 20px;
	}

	@media (max-width: 768px) {
		.cart-container {
			padding: 1.5rem;
			padding-top: 120px;
		}

		h1 {
			font-size: 1.5rem;
		}

		.cart-items {
			gap: 1rem;
		}

		.cart-summary {
			padding: 1.5rem;
			text-align: center;
		}

		.checkout-btn {
			padding: 10px 20px;
			font-size: 0.9rem;
			width: 100%;
		}
	}

	@media (max-width: 480px) {
		.cart-container {
			padding: 1rem;
			padding-top: 120px;
		}

		h1 {
			font-size: 1.3rem;
		}
	}
</style>
