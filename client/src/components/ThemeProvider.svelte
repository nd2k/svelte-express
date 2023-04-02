<script lang="ts">
	import initialState from "../store/store";
    import { darkThemeColors, ligthThemeColors } from "../utils/theme";
    
    let style: string;
    initialState.subscribe(value => {
        style = value.mode === "dark"
            ? darkThemeColors
            : ligthThemeColors;
    }); 
</script>
<div class="theme" {style}>
    <slot />
</div>

<style>
    .theme {
        height: 100%;
        width: 100%;
    }
</style>

