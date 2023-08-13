<script>
	export let charText;
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	onMount(() => {
		gsap.to('.fancy-text', {
			opacity: 1
		});
	});
</script>

<div class="flex flex-col fancy-text opacity-0 gap-1 ">
	{#each charText as text}
		<div class="text">
			{#each text as char}
				<div class="flex">
					{#each char as c}
						{#if c !== ' '}
							<div class="border-slate-800 border-[1px] text-sm p-2 sm:p-4 box-bg">
								{c}
							</div>
						{:else}
							<div class="p-2">
								{c}
							</div>
						{/if}
					{/each}
				</div>
			{/each}
		</div>
	{/each}
</div>

<style>
	.box-bg {
		background-color: rgb(16 21 29/1);
		/* box-shadow: 0 0 0 .5px #2e3c51 inset,0 0 0 .5px #2e3c51; */
	}
</style>
