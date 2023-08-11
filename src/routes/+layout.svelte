<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import Lenis from '@studio-freight/lenis';
	import { InitLenis } from '$lib';
	let show = true;
	let prevScrollPos = typeof window !== 'undefined' ? window.scrollY : null;
	let navbarHeight = 0; // Initialize with default height
	let stickyNavbar;
	let clikedScroll = false;
	onMount(() => {
		InitLenis(Lenis);
		stickyNavbar = document.querySelector('.sticky-navbar');
		navbarHeight = stickyNavbar.offsetHeight;
	});
	function onScrollEnd() {
		show = true;
		window.removeEventListener('scrollend', onScrollEnd);
	}
	function scrollToElement(id) {
		var targetElement = document.getElementById(id);
		if (targetElement) {
			var offsetTop = targetElement.offsetTop - navbarHeight;
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth'
			});
		}
		window.addEventListener('scrollend', onScrollEnd);
	}
	function handleScroll(e) {
		if (clikedScroll) return;
		const currentScrollPos = window.scrollY;
		if (prevScrollPos > currentScrollPos) {
			// user has scrolled up
			show = true;
		} else {
			// user has scrolled down
			show = false;
		}

		// update previous scroll position
		prevScrollPos = currentScrollPos;
	}
</script>

<svelte:window on:scroll={handleScroll} />

<nav
	class="sticky-navbar text-slate-400 sticky top-0 w-full font-Monserrate font-[600] bg-[#10151d] flex justify-between md:justify-center items-center px-2 gap-4 md:gap-32 pt-4 text-xl select-none show {show
		? 'show'
		: 'hide'}"
>
	<button on:click={() => scrollToElement('home')}>
		<div class="flex flex-col group cursor-pointer items-center">
			<span class="border-[1px] border-slate-800 shadow-lg rounded-md p-1 flex items-center">
				🏠
			</span>
			<span
				class="text-xl group-hover:opacity-100 opacity-0 transition-all duration-300 tracking-wide"
				>HOME</span
			>
		</div>
	</button>
	<button on:click={() => scrollToElement('projects')}>
		<div class="flex flex-col group cursor-pointer items-center">
			<span class="border-[1px] border-slate-800 shadow-lg rounded-md p-1 flex items-center">
				💼
			</span>

			<span
				class="text-xl group-hover:opacity-100 opacity-0 transition-all duration-300 tracking-wide"
				>PROJECTS</span
			>
		</div>
	</button>
	<button on:click={() => scrollToElement('about')}>
		<div class="flex flex-col group cursor-pointer items-center">
			<span class="border-[1px] border-slate-800 shadow-lg rounded-md p-1 flex items-center">
				🧐
			</span>
			<span
				class="text-xl group-hover:opacity-100 opacity-0 transition-all duration-300 tracking-wide"
				>ABOUT</span
			>
		</div>
	</button>
</nav>

<slot />

<style>
	.show {
		opacity: 1;
		transition: opacity 300ms ease-in;
	}
	.hide {
		opacity: 0;
		transition: opacity 300ms ease-in;
	}
</style>
