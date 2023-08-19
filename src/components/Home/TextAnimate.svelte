<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Render from './Render.svelte';
	export let charText;
	export let turn;
	let hide = null;
	let current = 0;
	let stopText = {};
	let prevTurn = turn;
	console.log(charText)
	onMount(() => {
		charText.forEach((_, index) => {
			stopText[index] = false;
		});
		const tl2 = gsap.timeline({
			onComplete: () => {
				stopText[current] = true;
				hide = true;
			}
		});
		const tl = gsap.timeline();
		tl.to('.cringe:not(.space)', {
			duration: 0,
			opacity: 1,
			stagger: 0.1
		});
		document.querySelectorAll('.cringe').forEach((element) => {
			tl2.to(element, {
				duration: element.classList.contains('space') ? 0.02 : 0.1,
				opacity: 1,
				onComplete: () => {
					stopText[current] = true;
					current += 1;
				}
			});
		});

		let masterT = gsap.timeline();
		masterT.add(tl).add(tl2, '-=1');
	});
	$: {
		if (hide) {
			let elements = document.querySelectorAll('.cringe:not(.space)');
			let reversedElements = [];
			elements.forEach((element) => reversedElements.push(element));
			reversedElements.reverse();
			gsap.to(reversedElements, {
				delay: 2,
				duration: 0.1,
				opacity: 0,
				stagger: 0.1,
				onComplete: () => {
					if (prevTurn == turn) turn = (turn + 1) % 4;
					console.log(turn);
				}
			});
		}
	}
</script>

<div class=" fancy-text gap-1 space-y-1 md:space-y-[2px]">
	{#each charText as text, index}
		{#if text == '\n'}
			<div>
				<br class="cringe space" />
			</div>
		{:else if text == ' '}
			<span class="cringe space" />
		{:else}
			<Render char={text} stop={stopText[index]} last={index == charText.length - 1} bind:hide />
			<!-- <span class="border-slate-800 border-[1px] text-sm p-2 sm:p-4 box-bg cringe">
				{text}
			</span> -->
		{/if}
	{/each}
</div>

<style>
	br {
		content: '\A';
		display: contents;
		white-space: pre;
	}
</style>
