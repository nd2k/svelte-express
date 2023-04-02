<script lang="ts">
    export let onClick: any;
</script>

<button on:click={onClick}>
    <slot />
</button>

<style>
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: inherit;
        color: inherit;
        cursor: pointer;
        border: none;
        margin: 0;
        padding: 0;
    }
</style>