<script>
	import { onMount } from 'svelte';
	import Internship from './Internship/Internship.svelte';
	import StockFootage from './StockFootage/StockFootage.svelte';
	import SynchYt from './SynchYT/SynchYT.svelte';
	import TwitterClone from './Twitter Clone/TwitterClone.svelte';
	import {RenderMyWorks} from '$lib'
	onMount(() => {
		
		RenderMyWorks() ;
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
