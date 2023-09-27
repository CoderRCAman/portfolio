<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { ProjectScroll } from '$lib/index';
	let id = 'internship';
	onMount(() => {
		ProjectScroll(id);
	});
</script>

<section
	class="min-h-screen text-white mt-5 flex flex-col items-center border-b-[1px] border-slate-800"
	{id}
>
	<h1 class="my-14 -ml-7 md:ml-0 text-5xl font-Monserrate {id}title">
		<span class="text-cyan-400">IVR</span> FOOTAGE
	</h1>
	<div class="md:h-[60vh] md:w-[90vw] xl:h-[70vh] xl:w-[90vw] 2xl:w-[70vw] lg:w-[90vw] md:relative">
		<div class="absolute h-full w-full bg-slate-700 hidden md:block">
			<img
				src="/images/ivr/pr_ivr_3.png"
				alt=""
				class="h-full w-full object-cover mix-blend-multiply"
			/>
		</div>

		<div
			class="md:absolute md:right-0 bottom-0 bg-[#10151D] md:w-[50%] md:h-[70%] font-Poppins text-md md:mix-blend-hard-light"
		>
			<div class="space-y-7 relative overflow-hidden px-7 py-6 h-full">
				<span class="absolute left-0 top-0 w-[30%] h-1 bg-white" />
				<span class="absolute left-0 -top-10 w-1 h-[36%] bg-white" />

				<span class="absolute right-0 bottom-0 w-[30%] h-1 bg-white" />
				<span class="absolute right-0 bottom-0 w-1 h-[30%] bg-white" />

				<h1 class="{id}sub text-3xl text-[#B2C8EC] font-Monserrate flex gap-3 items-center">
					Internship
					<Icon icon="teenyicons:certificate-outline" class="text-emerald-400" />
				</h1>
				<p class="{id}description leading-6 text-gray-300 font-semibold">
					<span class="text-cyan-300 font-bold"> IVR FOOTAGE</span> is a web application made for
					show casing images and footages of rich culture, roads, monuments, animals and all sorts
					of other things. Built during my final Internship at
					<a href="https://www.fineworkstechnologies.com/" target="_blank">
						<span class="text-sky-400 font-bold">Fineworks Technologies Media and Solutions</span
						></a
					>. Worked on the UI part of the website and accomplished the conversion of design to
					actual code using front end technologies.
				</p>
				<h2 class="{id}built">
					Built with <span class="font-bold">NextJs</span> , <span class="font-bold">Nodejs</span> &
					<span class="font-bold">PostgresSQL</span>
				</h2>
				<div class="{id}demo flex gap-2 font-bold">
					<h2>Link to live project</h2>
					<a href="https://www.ivrfootage.com" target="_blank">
						<Icon icon="fluent-mdl2:mini-expand" class="text-cyan-100  text-lg" width="25" />
					</a>
				</div>
			</div>
		</div>
		<div class="md:hidden mx-4 p-4">
			<img src="/images/ivr/pr_ivr_3.png" alt="" class="{id}phone-show" />
		</div>
	</div>
</section>
