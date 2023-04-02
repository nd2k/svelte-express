<script lang="ts">
    import "../styles/main.css";
    import ThemeProvider from "../components/ThemeProvider.svelte";
	import Navbar from "../components/Navbar.svelte";
</script>


<ThemeProvider>
    <div id="layout">
        <Navbar />
        <slot />
    </div>
</ThemeProvider>


<style>
 #layout {
     height: 100%;
     background-color: var(--primary-800);
     color: var(--grey-0);
 }
</style>

