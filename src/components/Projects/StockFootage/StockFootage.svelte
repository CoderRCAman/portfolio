<script>
	import Icon from '@iconify/svelte';
	import RenderImage from '../common/RenderImage.svelte';
	import { onMount } from 'svelte';
	import { ProjectScroll } from '$lib/index';
	let images = [
		{
			url: '/images/sf/st_1.png',
			width: 1500,
			height: 700
		},
		{
			url: '/images/sf/st_2.png',
			width: 1500,
			height: 700
		},
		{
			url: '/images/sf/st_3.png',
			width: 1500,
			height: 700
		},
		{
			url: '/images/sf/st_4.png',
			width: 1500,
			height: 700
		},
		{
			url: '/images/sf/st_5.png',
			width: 1500,
			height: 700
		},
		{
			url: '/images/sf/st_6.png',
			width: 1500,
			height: 700
		}
	];
	let id = 'stock-footage';
	onMount(() => {
		ProjectScroll(id);
	});
</script>

<section
	class="min-h-screen text-white mt-5 flex flex-col items-center border-b-[1px] border-slate-800"
	id="stock-footage"
>
	<h1 class="my-14 -ml-7 md:ml-0 text-4xl md:text-5xl font-Monserrate stock {id + 'title'}">
		STOCK <span class="text-cyan-400">FOOTAGE</span>
	</h1>
	<div class="md:h-[60vh] md:w-[90vw] xl:h-[70vh] xl:w-[90vw] 2xl:w-[70vw] lg:w-[90vw] md:relative">
		<div class="absolute h-full w-full bg-slate-700 hidden md:block">
			<img
				src="/images/sf/st_1.png"
				alt=""
				class="bg h-full w-full object-cover mix-blend-multiply"
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

				<h1 class="{id}sub text-3xl text-[#B2C8EC] font-Monserrate flex gap-2 items-center">
					Final Project <Icon icon="charm:rocket" />
				</h1>
				<p class="{id}description leading-6 text-gray-300 font-semibold">
					<span class="font-bold text-white">STOCK <span class="text-cyan-400">FOOTAGE</span></span>
					is a web application which allows users to customise their recommendation page. To search view
					along with upload their creative contents with the unique ability to license their creative
					works. This project is an extension to
					<span class="text-white font-bold">IVR FOOTAGE</span>
					which i built completely from scratch for Final Semester
					<span class="text-white font-bold">MAJOR PROJECT</span>. Every footage while uploading
					goes though an NSFW check which detects for vulgar, nudity, etc content and rejects it.
				</p>
				<h2 class="{id}built">
					Built with <span class="font-bold">REACTJS</span> , <span class="font-bold">GOLang</span>,
					<span class="font-bold">MongoDB</span> & <span class="font-bold">Nodejs</span>
				</h2>
				<div class="text-sm font-semibold space-y-1 {id}demo">
					<div class="flex gap-2 items-center">
						<h2>Github Project Link</h2>
						<a href="https://github.com/CoderRCAman/stock-footage-web-app" target="_blank">
							<Icon icon="fluent-mdl2:mini-expand" class="text-cyan-100  text-lg" width="25" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="md:hidden p-4">
			<img src="/images/sf/st_1.png" alt="" class="{id}phone-show"/>
		</div>
		<div class="md:absolute -bottom-16 font-Monserrate flex items-center gap-9 p-4 font-bold">
			<h1>Check out snapshots</h1>
			<RenderImage {images} />
		</div>
	</div>
</section>
