<script lang="ts">
    export let type: string = "text";
    export let placeholder: string = "...";
    export let radius: boolean = false;

    function typeAction(node: HTMLInputElement) {
        node.type = type;
    }

    let style = radius === true 
        ? `border-radius: var(--border-radius);`
        : `border-radius: 0;`;
</script>

<input {type} {style} {placeholder} use:typeAction/>

<style>
    input {
        padding-left: 0.5rem;
    }
</style>