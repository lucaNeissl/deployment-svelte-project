<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	function goToWebshop() {
		goto(`${base}/webshop`);
	}
</script>

<button onclick={goToWebshop} class="webshop-btn">
	To Webshop
</button>
<style>
.webshop-btn {
	display: inline-block;
	padding: 0.75rem 1.5rem;

	background: #2563eb;
	color: white;

	text-decoration: none;
	border-radius: 8px;

	transition: background-color 0.2s ease;
}

.webshop-btn:hover {
	background: #1d4ed8;
}
</style>