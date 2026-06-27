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

	function toggleAll() {
		if ($categoryFilterStore.length === categories.length) {
			categoryFilterStore.set([]);
		} else {
			categoryFilterStore.set([...categories]);
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
	<button class="toggle-all-btn" onclick={toggleAll}>
		{$categoryFilterStore.length === categories.length ? 'Deselect All' : 'Select All'}
	</button>
</aside>

<style>
	.sidebar {
		width: 250px;
		background: #f5f5f5;
		padding: 20px;
        margin-top: 80px;
		border-right: 1px solid #ddd;
		height: 100vh;
		position: fixed;
		overflow-y: auto;
		z-index: 100;
		left: 0;
		top: 0;
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

	.toggle-all-btn {
		width: 100%;
		margin-top: 20px;
		padding: 10px 12px;
		background: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		font-size: 0.95rem;
		font-weight: 600;
		cursor: pointer;
		transition: background 0.2s;
	}

	.toggle-all-btn:hover {
		background: #0056b3;
	}

	.toggle-all-btn:active {
		background: #003f87;
	}

	@media (max-width: 768px) {
		.sidebar {
			width: 200px;
			padding: 15px;
		}

		h3 {
			font-size: 1rem;
		}

		.checkbox-label {
			font-size: 0.9rem;
		}
	}

	@media (max-width: 600px) {
		.sidebar {
			position: static;
			width: 100%;
			height: auto;
			margin-top: 0;
			border-right: none;
			border-bottom: 1px solid #ddd;
			padding: 15px;
		}

		.category-list {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 10px;
		}
	}
</style>
