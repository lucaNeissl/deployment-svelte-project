<script>
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { searchStore } from '../lib/stores.js';

    function handleSearchInput(){
        const url = new URL(window.location);
        if ($searchStore) {
            url.searchParams.set('search', $searchStore);
        } else {
            url.searchParams.delete('search');
        }
        history.replaceState({}, '', url);
    }
</script>

<div class="header">
    <div id="searchBar">
        <span>Search in Products:</span>
        <input type="text" bind:value={$searchStore} oninput={handleSearchInput}>
    </div>

    <nav class="nav" id="shop">
        <button onclick={() => goto(`${base}/webshop`)}>
            Shop
        </button>
    </nav>

    <nav class="nav">
        <button onclick={() => goto(`${base}/webshop/cart`)}>
            &#128722;
        </button>
    </nav>
</div>



<style>
.header {
    z-index: 2;
    position: fixed;
    background: #f5f5f5;

    height: 80px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1rem;
    gap: 1rem;
}

#searchBar {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 0;
}

#searchBar input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    min-width: 150px;
}

#searchBar span {
    white-space: nowrap;
    font-size: 0.9rem;
}

.nav {
    padding: 5px 10px;
    background: white;
    gap: 2rem;
    border-radius: 4px;
}

.nav button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s ease;
}

.nav button:hover {
    background: #e0e0e0;
}

@media (max-width: 768px) {
    .header {
        flex-wrap: wrap;
        height: auto;
        padding: 0.5rem;
    }

    #searchBar {
        width: 100%;
        order: 3;
    }

    #searchBar span {
        display: none;
    }

    .nav {
        padding: 5px 8px;
    }

    .nav button {
        padding: 0.4rem 0.8rem;
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .header {
        padding: 0.25rem;
    }

    #searchBar input {
        min-width: 100px;
    }
}
</style>

