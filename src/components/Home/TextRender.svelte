<script>
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	let texts = [
		[['Where Creativity'], ['   Meets'], ['Functionality']],
		[['      Code  Create'], ['Innovate']],
		[['Solving Problems'], ['One Line at a Time']],
		[['Bringing Code'], ['into life']]
	];
	let modifyText = texts.map((text) => text.map((t) => t.map((chars) => chars.split(''))));
	console.log(modifyText);
	onMount(() => {
		let tl = gsap.timeline({
			repeat: -1,
			repeatDelay: 1,
			smoothChildTiming: true,
			autoRemoveChildren: true
		});
		tl.to('.text-fancy', {
			opacity: 1,
			stagger: 1,
			repeat: -1,
			overwrite:"auto", 
			
		});
	});
</script>

<div class=" flex font-Tektur justify-center items-center h-full capitalize">
	<div class="space-y-2">
		{#each modifyText as charText}
			<div class="flex flex-col text-fancy opacity-0 gap-1">
				{#each charText as text}
					<div class="text">
						{#each text as char}
							<div class="flex">
								{#each char as c}
									{#if c !== ' '}
										<div class="border-slate-800 border-[1px] text-sm p-1 sm:p-4 box-bg">
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
		{/each}
	</div>
</div>

<style>
	.box-bg {
		background-color: rgb(16 21 29/1);
		/* box-shadow: 0 0 0 .5px #2e3c51 inset,0 0 0 .5px #2e3c51; */
	}
</style>
