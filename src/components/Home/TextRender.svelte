<script>
	import { onMount } from 'svelte';
	import TextAnimate from './TextAnimate.svelte';
	import { ChunkStringArray } from '$lib';
	let texts = [
		[['   Where'], ['Creativity'], ['   Meets'], ['Functionality']],
		[['      Code'], ['Create'], ['Innovate']],
		[['Solving'], ['Problems  '], ['One Line'], ['  at a Time']],
		[['Bringing Code'], ['into life']]
	];

	let turn = 0;
	let lastUpdatedTime = performance.now();
	onMount(() => {
		function animateText(timeStamp) {
			let elapsed = timeStamp - lastUpdatedTime;
			if (elapsed >= 3000) {
				turn = (turn + 1) % 4;
				lastUpdatedTime = timeStamp;
				console.log(turn);
			}
			requestAnimationFrame(animateText);
		}
		animateText(performance.now());
	});
</script>

<div class=" flex font-Tektur justify-center items-center h-full capitalize">
	<div class="space-y-2">
		{#if turn == 0}
			<TextAnimate charText={ChunkStringArray(texts[0])} />
		{/if}
		{#if turn == 1}
			<TextAnimate charText={ChunkStringArray(texts[1])} />
		{/if}
		{#if turn == 2}
			<TextAnimate charText={ChunkStringArray(texts[2])} />
		{/if}
		{#if turn == 3}
			<TextAnimate charText={ChunkStringArray(texts[3])} />
		{/if}
	</div>
</div>
