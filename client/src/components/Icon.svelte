<script lang="ts">
    export let icon: string;
    export let size: string = "1rem";
</script>

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    {@html icon}
</svg>