<script>
	import Icon from '@iconify/svelte';
	import RenderImage from '../common/RenderImage.svelte';
	let images = [
		{
			largeURL: '/images/ivr/pr_ivr_1.png',
			thumbnailURL: '/images/ivr/pr_ivr_1.png',
			width: 1500,
			height: 700
		},
		{
			largeURL: '/images/ivr/pr_ivr_2.png',
			thumbnailURL: '/images/ivr/pr_ivr_2.png',
			width: 1500,
			height: 700
		},
		{
			largeURL: '/images/ivr/pr_ivr_3.png',
			thumbnailURL: '/images/ivr/pr_ivr_3.png',
			width: 1500,
			height: 700
		}
	];
</script>

<section id="ivr" class="min-h-screen text-white mt-5 flex flex-col md:flex-row">
	<div class="w-full flex flex-col gap-0 items-center">
		<h1 class="font-Inter text-center text-3xl font-extrabold text-emerald-500 fadeUp">
			IVR FOOTAGE
		</h1>

		<article class="font-Monserrate px-2 md:w-[80%] mt-8 lg:leading-7 fadeUp">
			IVR FOOTAGE is a web application made for show casing images and footages of rich <span
				class="text-emerald-500 font-bold">culture</span
			>,
			<span class="text-emerald-500 font-bold">roads</span>,
			<span class="text-emerald-500 font-bold">monuments</span>
			,<span class="text-emerald-500 font-bold">animals</span> and all sorts of other things. Built
			during my final <span class="text-emerald-500 font-bold">Internship</span> at
			<a
				class=" text-cyan-600 underline-offset-2 font-bold"
				href="https://www.fineworkstechnologies.com/"
				target="_blank"
			>
				Fineworks Technologies Media and Solutions
			</a>. Worked on the UI part of the website and accomplished the conversion of design to actual
			code using front end technologies.
		</article>
		<div class="self-start md:self-center px-2 mt-10 font-Titillium md:w-[80%] text-lg fadeUp">
			<h1>Key take aways:</h1>
			<ol>
				<li>
					#1. Worked on <span>
						<a target="_blank" href="https://nextjs.org/" class="underline text-slate-400">NextJs</a
						>
					</span>
				</li>
				<li>#2. Efforts were put on the UX</li>
			</ol>
		</div>
	</div>
	<div class="w-full mt-16">
		<h1 class="font-Titillium text-lg mb-5 below px-2 ">Below are some fo the snapshots 🖼️👇</h1>
		<RenderImage {images} galleryID="ivr-gallery" />
		<h1 class="font-Monserrate mt-4 flex items-center gap-2 link-live px-2">
			Link to the live project
			<a href="https://www.ivrfootage.com" target="_blank"> 
				<Icon icon="fluent-mdl2:mini-expand" class="text-cyan-400 font-bold text-lg" />
			</a>
		</h1>
	</div>
</section>
