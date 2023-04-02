import { writable } from 'svelte/store';

const initialState = writable({
    mode: "light"
});

export default initialState;