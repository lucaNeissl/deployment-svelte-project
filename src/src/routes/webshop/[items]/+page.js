export async function load({ params }) {
	let response = await fetch(`https://fakestoreapi.com/products/${params.items}`).then((response) =>
		response.json()
	);
	let data = response;
	return { data };
}
