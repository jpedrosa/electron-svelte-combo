<script>
const fs = require('fs-extra');
async function listFiles() {
    return fs.readdir(__dirname);
} 
let altcolor = false;
function alternateColor() {
    altcolor = !altcolor;
    return altcolor ? "altColor1" : "altColor2";
}
</script>

<style>
.file {
    font-weight: bold;
}
.altColor1 {
    background-color: #C5C5C5;
}
.altColor2 {
    background-color: #FFFFDD;
}
</style>

{#await listFiles()}
    Loading files...
{:then files}
    <ul>
    {#each files as file}
    <li class={alternateColor()}>
    <span class="file">{file}</span>
    </li>
    {/each}
    </ul>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
