<script>
    import ProductCard from './ProductCard.svelte';

    let { products } = $props();
</script>

<div class="product-grid">
    {#each products as product}
        <ProductCard
            product={product}
        />
    {/each}
</div>

<style>
/* Styling von ChatGPT */
.product-grid {
    background: lightblue;
    display: grid;

    grid-template-columns:
        repeat(auto-fill, minmax(250px, 1fr));

    gap: 1.5rem;

    padding: 100px 1.5rem 1.5rem 1.5rem;
    width: 100%;
    max-width: 100%;
}

@media (max-width: 768px) {
    .product-grid {
        grid-template-columns:
            repeat(auto-fill, minmax(200px, 1fr));
        padding: 100px 1rem 1rem 1rem;
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .product-grid {
        grid-template-columns: 1fr;
        padding: 100px 0.75rem 0.75rem 0.75rem;
        gap: 0.75rem;
    }
}
</style>