<script>
	import Header from '../../../components/Header.svelte';
	import ProductCard from '../../../components/ProductCard.svelte';
	import { cartStore } from '../../../lib/cartStore.js';

	let { data } = $props();
	let product = $derived(data.data);

    let quantity = $state(1);
    function validate() {
        quantity = Math.min(1000, Math.max(1, quantity));
    }

	function addToCart() {
		cartStore.addItem(product, quantity);
		quantity = 1;
		alert(`${product.title} added to cart!`);
	}
</script>


<Header/>
<div class="body">
    <div class="card">
        <img src={product.image} alt={product.title} class="product-img" />

        <span class="category">
            {product.category}
        </span>
        
        <h3>
            {product.title}
        </h3>
        
        <span class="description">
            {product.description}
        </span>
    </div>

    <div class="cartControls">
        <p class="price">
            {product.price.toFixed(2)} €
        </p>
            <label for="quantity">Amount:</label>
		<input
			type="number"
			min="1"
			max="100"
			bind:value={quantity}
			oninput={validate}/>
    	<p>Total: {(product.price * quantity).toFixed(2)} €</p>
    <button class="addCartButton" onclick={addToCart}> Add to Cart </button>

    </div>
</div>
<style>
    .body{
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f5f5f5;

    }
	.card {
		max-width: 550px;
        margin-top: 100px;
		padding: 40px;
		border: 1px solid #e5e7eb;
		border-radius: 16px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

		background: lightblue;
	}

    .cartControls{
        background: lightblue;
        border: 1px solid #e5e7eb;
		border-radius: 16px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        margin-left: 50px;
        padding: 20px;
    }

	.product-img {
		width: 100%;
		border-radius: 12px;
		background: #f3f4f6;
	}

	.category {
		align-self: flex-start;
		padding: 0.35rem 0.75rem;
		background: #f3f4f6;
		color: #6b7280;
		font-size: 0.8rem;
		font-weight: 500;
		border-radius: 999px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.card h3 {
		margin: 0;
		font-size: 1.8rem;
		font-weight: 600;
		color: #111827;
		line-height: 1.3;
	}

	.price {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 700;
		color: #111827;
	}

	.description {
		color: #4b5563;
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.addCartButton {
		margin-top: 0.5rem;
		padding: 0.9rem 1.25rem;
		border: none;
		border-radius: 10px;

		background: #111827;
		color: #ffffff;

		font-size: 0.95rem;
		font-weight: 600;
		cursor: pointer;

		transition: all 0.2s ease;
	}

	.addCartButton:hover {
		background: #1f2937;
		transform: translateY(-1px);
	}

	.addCartButton:active {
		transform: translateY(0);
	}
</style>
