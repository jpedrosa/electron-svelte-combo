<script>
import ListEnvVars from "./ListEnvVars.svelte";
import ListFiles from "./ListFiles.svelte";
export let name;
let route = -1;
const LISTFILES = -1;
const LISTVARS = 0;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>
{#if route === LISTVARS}
<button on:click={() => { route = -1 }}>Close list</button><br>
Here's your list of environment variables:<br>
<ListEnvVars/>
{:else}
<button on:click={() => { route = LISTVARS }}>List environment variables</button><br>
{/if}

{#if route === LISTFILES}
Here's your list of files:<br>
<ListFiles/>
{/if}

