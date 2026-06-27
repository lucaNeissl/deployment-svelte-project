<script>
	import { searchStore, categoryFilterStore } from '../../lib/stores.js';
	import Header from '../../components/Header.svelte';
	import Loader from '../../components/Loader.svelte';
	import ProductList from '../../components/ProductList.svelte';
	import Sidebar from '../../components/Sidebar.svelte';
	let { data } = $props();

	// Get unique categories from products
	let categories = $derived.by(() => {
		const uniqueCategories = [...new Set(data.data.map(product => product.category))];
		return uniqueCategories.sort();
	});

	let filteredProducts = $derived.by(() => {
		let products = data.data;
	
		// Filter by search term
		if ($searchStore) {
			products = products.filter(product => 
				product.title.toLowerCase().includes($searchStore.toLowerCase())
			);
		}
	
		// Filter by selected categories
		if ($categoryFilterStore.length > 0) {
			products = products.filter(product => 
				$categoryFilterStore.includes(product.category)
			);
		}
	
		return products;
	});
</script>

<Header />

<Sidebar {categories} />

<div id="body">
	<main class="content">
		{#if filteredProducts && filteredProducts.length > 0}
			<ProductList products={filteredProducts} />
		{:else}
			<div class="no-products">
				<Loader/>
				<p>No products found</p>
			</div>
		{/if}
	</main>
</div>

<style>
	#body {
		background: lightblue;
		margin-left: 250px;
		min-height: 100vh;
	}

	.content {
		width: 100%;
	}

	.no-products {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 100px 20px;
	}

	@media (max-width: 768px) {
		#body {
			margin-left: 200px;
		}

		.no-products {
			padding: 100px 15px;
		}
	}

	@media (max-width: 600px) {
		#body {
			margin-left: 0;
		}

		.no-products {
			padding: 100px 10px;
		}
	}
</style>
