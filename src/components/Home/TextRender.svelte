<script>
	import { onMount } from 'svelte';
	import TextAnimate from './TextAnimate.svelte';
	import { ChunkStringArray } from '$lib';
	let texts = [
		['Where \n Creativity \n   ^ Meets \n Functionality'],
		['Code  \n  Create \n  Innovate $'],
		['  Solving \n Problems &'],
		['^ Bringing \n  % Code \n * into \nlife']
	];

	let turn = 0;
	// $: console.log(turn)
</script>

<div class=" flex font-Tektur justify-center items-center h-full capitalize">
	<div class="space-y-2">
		{#if turn == 0}
			<TextAnimate  bind:turn  charText={ChunkStringArray(texts[0])[0]} />
		{/if}
		{#if turn == 1}
			<TextAnimate  bind:turn  charText={ChunkStringArray(texts[1])[0]} />
		{/if}
		{#if turn == 2}
			<TextAnimate  bind:turn  charText={ChunkStringArray(texts[2])[0]} />
		{/if}
		{#if turn == 3}
			<TextAnimate bind:turn charText={ChunkStringArray(texts[3])[0]} />
		{/if}
	</div>
</div>
