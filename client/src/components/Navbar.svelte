<script lang="ts">
	import Flexbox from "./Flexbox.svelte";
	import Icon from "./Icon.svelte";
    import { search, hamburger, cog, moon, day } from "../assets/icons/icons";
    import Button from "./Button.svelte";
	import InputField from "./InputField.svelte";
	import Slider from "./Slider.svelte";
    
    let isLight: boolean = true;

    function toggleSidebar() {
        console.log("Open/close");
    }
    
</script>

<nav>
    <Flexbox justify="space-between">
        <Flexbox
            justify="space-around"
            gap="0.7rem">
            <Button onClick={toggleSidebar}>
                <Icon icon={hamburger} />
            </Button>
            <InputField 
                placeholder="Search..."
                radius={true}/>
            <Icon icon={search} />
        </Flexbox>
        <Flexbox
            gap="1rem">
            <Flexbox
                gap="0.1rem">
                <Icon icon={moon} />
                <Slider {isLight} />
                <Icon icon={day} />
            </Flexbox>
            <a href="/user/settings">
                <Icon icon={cog} />
            </a>
        </Flexbox>
    </Flexbox>
</nav>

<style>
    nav {
        padding: 0 1rem;
    }
    a {
        text-decoration: none;
        color: inherit;
        display: flex;
        align-items: center;
    }
</style>

