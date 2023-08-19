<script>
	import { characters, mapToEmoji } from '$lib';
	import { onMount } from 'svelte';
	export let char;
	export let stop;
	export let last;
	export let hide;
	let index = Math.floor(Math.random() * characters.length - 1);
	let randomChar = 'a';
	let animationReq;
	console.log(last);
	onMount(() => {
		function update(stop) {
			index = (index + 1) % characters.length;
			randomChar = characters[index];
			if (stop) cancelAnimationFrame(animationReq);
			setTimeout(() => {
				animationReq = requestAnimationFrame(update);
			}, 100);
		}
		update(stop);
	});
</script>

{#if stop == true}
	{#if last}
		<span
			class="border-slate-800 border-[1px] text-sm w-6 h-6 inline-flex justify-center items-center box-bg
	   lg:w-12 lg:h-12
	   sm:w-9 sm:h-9
	   sm:text-md
	   lg:text-lg
	   cringe
	   "
			bind:this={hide}
		>
			{mapToEmoji(char)}
		</span>
	{:else}
		<span
			class="border-slate-800 border-[1px] text-sm w-6 h-6 inline-flex justify-center items-center box-bg
		lg:w-12 lg:h-12
		sm:w-9 sm:h-9
		sm:text-md
		lg:text-lg
		cringe
		"
		>
			{mapToEmoji(char)}
		</span>
	{/if}
{:else}
	<span
		class="border-slate-800 border-[1px] text-sm text-gray-600 box-bg cringe inline-flex justify-center items-center
		sm:w-9 sm:h-9
		lg:w-12 lg:h-12
		w-6 h-6
		sm:text-md
		lg:text-lg
		opacity-0
		cringe
		"
	>
		{randomChar}
	</span>
{/if}

<style>
	.box-bg {
		background-color: rgb(16 21 29/1);
		/* box-shadow: 0 0 0 .5px #2e3c51 inset,0 0 0 .5px #2e3c51; */
	}
</style>
