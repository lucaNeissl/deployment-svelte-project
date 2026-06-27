export async function load() {
	let response = await fetch('https://fakestoreapi.com/products').then((response) =>
		response.json()
	);
	let data = response;
	return { data };
}
