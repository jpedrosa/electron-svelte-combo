<script>
const envVars = process.env;
const keys = Object.keys(envVars);
let altcolor = false;
function alternateColor() {
    altcolor = !altcolor;
    return altcolor ? "altColor1" : "altColor2";
}
</script>

<style>
.key {
    font-weight: bold;
}
.altColor1 {
    background-color: #C5C5C5;
}
.altColor2 {
    background-color: #FFFFDD;
}
</style>

<ul>
{#each keys as key}
<li class={alternateColor()}>
<span class="key">{key}: </span><span class="value">{envVars[key]}</span>
</li>
{/each}
</ul>
