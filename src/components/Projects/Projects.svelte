<script>
	import { onMount } from 'svelte';
	import Internship from './Internship/Internship.svelte';
	import StockFootage from './StockFootage/StockFootage.svelte';
	import SynchYt from './SynchYT/SynchYT.svelte';
	import TwitterClone from './Twitter Clone/TwitterClone.svelte';
	import gsap from 'gsap';
	// import  {ScrollTrigger}  from 'gsap/ScrollTrigger';
	import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
	onMount(() => {
		let ivrTl = gsap.timeline({
			scrollTrigger: {
				trigger: '#ivr',
				start: 'top 40%',
				end: 'bottom 120%',
				scrub: true,
                // markers:1
			}
		});
		ivrTl.addLabel('ivr_project');
		ivrTl.to('.mask', {
			attr: {
				r: 700 ,
			},
			duration: 10
		});
	});
</script>

<section id="projects" class="pt-16">
	<h1
		class="mb-4 text-xl font-bold font-Titillium text-white text-center border-b-[1px] border-slate-800 pb-2"
	>
		My Works
	</h1>
	<Internship />
	<SynchYt />
	<StockFootage />
	<TwitterClone />
</section>
