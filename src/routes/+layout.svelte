<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import Lenis from '@studio-freight/lenis';
	import { InitLenis } from '$lib';
	onMount(() => {
		InitLenis(Lenis);
	});
</script>
<slot/>