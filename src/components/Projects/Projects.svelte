<script>
	import { onMount } from 'svelte';
	import Internship from './Internship/Internship.svelte';
	import StockFootage from './StockFootage/StockFootage.svelte';
	import SynchYt from './SynchYT/SynchYT.svelte';
	import TwitterClone from './Twitter Clone/TwitterClone.svelte';
	import gsap from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger.min';
	gsap.registerPlugin(ScrollTrigger);
	onMount(() => {
		gsap.set('.works', { y: -50, opacity: 0 });
		gsap.set('.fadeUp', { y: 40, opacity: 0 });
		gsap.set('.img_container', { autoAlpha: 0 });
		gsap.set('.below', { autoAlpha: 0, y: -50 });
		gsap.set('.link-live', { autoAlpha: 0, y: -40 });
		let ivrTl = gsap.timeline({
			scrollTrigger: {
				trigger: '#ivr',
				start: window.innerWidth>=1024?'top 80%':'35% 130%',
				end: window.innerWidth >= 1024 ? '120% 80%' : 'bottom 80%',
				scrub: window.innerWidth <= 1024 ? true : false,
				// pin:true,
				// markers:1,
				toggleActions: 'play reset play reset'
			}
		});
		ivrTl.to('.works', {
			y: 0,
			opacity: 1,
			ease: 'none',
			duration: 0.3
		});
		ivrTl.to(
			'.fadeUp',
			{
				y: 0,
				opacity: 1,
				stagger: 0.4,
				duration: 0.6,
				ease: 'none'
			},
			'-=0.7'
		);

		let imageRevealTl = gsap.timeline();
		let imageElements = document.querySelectorAll('.img_container');
		imageRevealTl.to('.below', {
			autoAlpha: 1,
			y: 0,
			duration: 0.4
		});
		imageElements.forEach((element, index) => {
			imageRevealTl.to(element, {
				autoAlpha: 1,
				duration: 0.3,
				ease: 'none'
			});
			imageRevealTl.to(`.slide_${index}`, {
				y: '100%',
				ease: 'none',
				duration: 0.3,
				ease: 'none'
			});
			imageRevealTl.to(`.image_${index}`, {
				scale: 1,
				ease: 'none',
				ease: 'none',
				duration: 0.3
			});
		});
		imageRevealTl.to('.link-live', {
			autoAlpha: 1,
			y: 0,
			ease: 'none',
			duration: 0.4
		});
		ivrTl.add(imageRevealTl, '-=1.3');
	});
</script>

<section id="projects" class="pt-16">
	<h1
		class="mb-4 text-xl font-bold font-Titillium text-white text-center border-b-[1px] border-slate-800 pb-2 works opacity-0"
	>
		My Works
	</h1>
	<Internship />
	<SynchYt />
	<StockFootage />
	<TwitterClone />
</section>
