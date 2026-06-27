<script>
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";

    let { product } = $props();

    function openDetails(){
        goto(`${base}/webshop/${product.id}`)
    }
</script>

<button class="card" onclick={openDetails}>
    <img
        src={product.image}
        alt={product.title}
        class="product-img">

    <span class="category">
        {product.category}
    </span>

    <h3>
        {product.title}
    </h3>

    <p class="price">
        {product.price.toFixed(2)} €
    </p>

</button>

<style>
.card {
    background: whitesmoke;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    
    /* Reset button styles */
    all: unset;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.product-img {
    width: 100%;
    height: 220px;

    object-fit: contain;
    transition: transform 0.3s ease;
}

.card:hover .product-img {
    transform: scale(1.05);
    cursor: pointer;
}

.category {
    font-size: 0.8rem;
    color: gray;
}

.card h3 {
    margin: 0;
    font-size: 1rem;
    color: #333;
    word-break: break-word;
}

.price {
    font-weight: bold;
    font-size: 1.2rem;
    color: #007bff;
}

@media (max-width: 768px) {
    .card {
        padding: 0.75rem;
    }

    .product-img {
        height: 180px;
    }

    .card h3 {
        font-size: 0.95rem;
    }
}

@media (max-width: 480px) {
    .card {
        padding: 0.5rem;
    }

    .product-img {
        height: 150px;
    }

    .category {
        font-size: 0.75rem;
    }

    .card h3 {
        font-size: 0.9rem;
    }

    .price {
        font-size: 1rem;
    }
}
</style>