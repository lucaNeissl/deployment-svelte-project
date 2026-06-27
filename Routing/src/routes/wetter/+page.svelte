<script>
  let location = $state('Grieskirchen');
</script>

<h1>Wetter Dashboard</h1>

<label for="location">Location</label>
<input type="text" bind:value={location} />
<hr />
<a href="./wetter/eferding">{location}</a>
