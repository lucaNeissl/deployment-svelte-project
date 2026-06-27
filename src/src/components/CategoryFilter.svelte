<script>
	import { categoryFilterStore } from '../lib/stores.js';
	let { categories } = $props();

	function toggleCategory(category) {
		if ($categoryFilterStore.includes(category)) {
			categoryFilterStore.set($categoryFilterStore.filter(c => c !== category));
		} else {
			categoryFilterStore.set([...$categoryFilterStore, category]);
		}
	}
</script>

<aside class="sidebar">
	<h3>Categories</h3>
	<div class="category-list">
		{#each categories as category}
			<label class="checkbox-label">
				<input
					type="checkbox"
					checked={$categoryFilterStore.includes(category)}
					onchange={() => toggleCategory(category)}
				/>
				<span class="category-name">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
			</label>
		{/each}
	</div>
</aside>

<style>
	.sidebar {
		width: 250px;
		background: white;
		padding: 20px;
		border-right: 1px solid #ddd;
		height: calc(100vh - 100px);
		position: sticky;
		top: 100px;
		overflow-y: auto;
	}

	h3 {
		margin: 0 0 20px 0;
		font-size: 1.2rem;
		color: #333;
		border-bottom: 2px solid #007bff;
		padding-bottom: 10px;
	}

	.category-list {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.checkbox-label {
		display: flex;
		align-items: center;
		cursor: pointer;
		user-select: none;
		font-size: 0.95rem;
	}

	.checkbox-label input {
		width: 18px;
		height: 18px;
		margin-right: 10px;
		cursor: pointer;
	}

	.category-name {
		color: #555;
		transition: color 0.2s;
	}

	.checkbox-label input:checked + .category-name {
		color: #007bff;
		font-weight: 600;
	}

	.checkbox-label:hover .category-name {
		color: #007bff;
	}
</style>