<script lang="ts">
    import initialState from "../store/store";
    export let isLight: boolean = true;

    function setTheme() {
        isLight
            ? initialState.set({ mode: "ligth" }) 
            : initialState.set({ mode: "dark" })
    }
</script>

<label class="theme-switch" for="checkbox" on:change={setTheme}>
    <input type="checkbox" id="checkbox" bind:checked={isLight}/>
    <div class="slider round"></div>
</label>

<style>
    .theme-switch {
        display: inline-block;
        height: 1rem;
        position: relative;
        width: 2rem;
    }
    .theme-switch input {
        display:none;
    }
    .slider {
        background-color: var(--primary-300);
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: .4s;
    }
    .slider:before {
        background-color: var(--grey-0);
        bottom: 1px;
        content: "";
        height: 0.9rem;
        left: 2px;
        position: absolute;
        transition: .4s;
        width: 0.9rem;
    }

    input:checked + .slider {
        background-color: var(--primary-900);
    }
    input:checked + .slider:before {
        transform: translateX(14px);
    }
    .slider.round {
        border-radius: 2rem;
    }
    .slider.round:before {
        border-radius: 50%;
    }
</style>