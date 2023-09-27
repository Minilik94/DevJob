// store.js
import { writable } from 'svelte/store';

// Initialize the store with an initial state (false for light mode)
export let darkMode = writable(false);
