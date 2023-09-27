<script>
	import TextRender from '../../components/Home/TextRender.svelte';
	import Projects from '../../components/Projects/Projects.svelte';
	import About from '../../components/About/About.svelte';
	import { gsap, none } from 'gsap';
	import { onMount } from 'svelte';
	import CurtainReveal from '../../components/Home/CurtainReveal.svelte';
	let hide = false;
	onMount(() => {
		const tl = gsap.timeline();

		gsap.set('.reveal ', {
			y: 50,
			autoAlpha: 0
		});
		tl.to('.welcome', {
			delay: 0.5,
			autoAlpha: 0,
			duration:0.5
		});
		tl.to('.overlay-item', {
			y: '-500vh',
			duration: 1,

			onComplete: () => {
				const elements = document.getElementsByTagName('body');
				const body = elements[0];
				body.style.overflow = 'auto';
				hide = true;
			}
		});
		tl.to(
			'.reveal',
			{
				y: 0,
				autoAlpha: 1,
				stagger: 0.2,
				ease: 'none'
			},
			'-=0.3'
		);
	});
</script>

<section
	id="home"
	class="h-[100vh] md:flex text-white w-full md:justify-between justify-center flex-col xl:flex-row select-none z-0"
>
	{#if !hide}
		<CurtainReveal />
	{/if}
	<div class="w-full h-[65%] md:mt-0 md:h-full flex items-center flex-col justify-center relative">
		<img src="images/JavaScript frameworks-amico.svg" alt="hero-bg" class="hero-bg lg:h-full" />

		<div class="sm:w-full lg:w-[80%] p-2 reveal">
			<h1 class="text-3xl font-Inter md:ml-4 leading-10 font-extrabold -z-1">
				<span class="text-5xl tracking-wid text-emerald-500">FULLSTACK &nbsp; </span>
				<span class="tracking-wide">WEB DEVELOPER</span>
			</h1>

			<div class="md:ml-4 mt-4 font-Monserrate text-neutral-50 leading-6 tracking-wider">
				An accomplished full stack developer with proficiency in both
				<span class="text-emerald-300">Front End</span>
				and <span class="text-emerald-300">Back End</span>
				technologies providing seamless user experiences and solid technical solutions.
			</div>
		</div>

		<div class="mt-10 reveal">
			<a href="#projects">
				<div
					class="flex items-center gap-3 group border-transparent p-1 rounded-md hover:border-slate-800 cursor-pointer"
				>
					<h1 class="font-Poppins font-semibold">🚀 Checkout my works</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="23"
						viewBox="0 0 149 23"
						fill="none"
						class="w-10"
					>
						<path
							d="M148.068 12.0534C148.65 11.4636 148.643 10.5139 148.053 9.9321L138.442 0.451764C137.852 -0.129997 136.903 -0.123492 136.321 0.466293C135.739 1.05608 135.746 2.0058 136.336 2.58756L144.879 11.0145L136.452 19.5577C135.87 20.1475 135.877 21.0972 136.466 21.679C137.056 22.2608 138.006 22.2543 138.588 21.6645L148.068 12.0534ZM1.01027 13.5L147.01 12.5L146.99 9.50004L0.989726 10.5L1.01027 13.5Z"
							fill="white"
						/>
					</svg>
				</div>
			</a>
		</div>

		<div class="mt-3 reveal">
			<a href="#about">
				<div
					class="flex items-center gap-2 group border-transparent p-1 rounded-md hover:border-slate-800 cursor-pointer"
				>
					<h1 class="font-Poppins font-semibold">📝 About me</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="23"
						viewBox="0 0 149 23"
						fill="none"
						class="w-10"
					>
						<path
							d="M148.068 12.0534C148.65 11.4636 148.643 10.5139 148.053 9.9321L138.442 0.451764C137.852 -0.129997 136.903 -0.123492 136.321 0.466293C135.739 1.05608 135.746 2.0058 136.336 2.58756L144.879 11.0145L136.452 19.5577C135.87 20.1475 135.877 21.0972 136.466 21.679C137.056 22.2608 138.006 22.2543 138.588 21.6645L148.068 12.0534ZM1.01027 13.5L147.01 12.5L146.99 9.50004L0.989726 10.5L1.01027 13.5Z"
							fill="white"
						/>
					</svg>
				</div>
			</a>
		</div>
	</div>
	<div class="w-full md:h-full font-Monserrate text-center flex justify-center items-center">
		<TextRender />
	</div>
</section>
<Projects />
<About />

<style>
	.hero-bg {
		position: absolute;
		z-index: -3;
		opacity: 0.1;
	}
	.reveal {
		opacity: 0;
	}
</style>
