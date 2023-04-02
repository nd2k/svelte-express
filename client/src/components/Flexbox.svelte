<script lang="ts">
    export let direction = "row";
    export let justify = "flex-start";
    export let align = "center";
    export let wrap = "nowrap";
    export let gap = "0rem";

    let style = `display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        flex-wrap: ${wrap};
        gap: ${gap};`
</script>

<div class="flex-container" {style}>
    <slot />
</div>

