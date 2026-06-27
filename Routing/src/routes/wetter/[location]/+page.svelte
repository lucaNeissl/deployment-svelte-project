<script>
  //Name Data is a convention for the load function result
  let { data } = $props();
</script>

<h1>Wetter Location</h1>

<p>{data.location}</p>

<p>{JSON.stringify(data.weather)}</p>
