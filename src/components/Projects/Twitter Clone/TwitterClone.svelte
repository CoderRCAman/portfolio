<script>
	import Icon from '@iconify/svelte';
	import RenderImage from '../common/RenderImage.svelte';
	import { onMount } from 'svelte';
	import { ProjectScroll } from '$lib/index';
	let images = [
		{
			url: '/images/twitter/t_1.png',
			width: 1500,
			height: 700
		},
		{
			url: '/images/twitter/t_2.png',
			width: 1500,
			height: 700
		},
		{
			url: '/images/twitter/t_3.png',
			width: 1500,
			height: 700
		},
		{
			url: '/images/twitter/t_4.png',
			width: 1500,
			height: 700
		},
		{
			url: '/images/twitter/t_5.png',
			width: 1500,
			height: 700
		},
		{
			url: '/images/twitter/t_6.png',
			width: 1500,
			height: 700
		}
	];
	let id = 'twitter-clone';
	onMount(() => {
		ProjectScroll('twitter-clone');
	});
</script>

<section
	class="min-h-screen text-white mt-5 flex flex-col items-center border-b-[1px] border-slate-800"
	id="twitter-clone"
>
	<h1 class="my-14 -ml-7 md:ml-0 text-4xl md:text-5xl font-Monserrate {id}title">
		TWITTER <span class="text-sky-500">CLONE</span>
	</h1>
	<div class="md:h-[60vh] md:w-[90vw] xl:h-[70vh] xl:w-[90vw] 2xl:w-[70vw] lg:w-[90vw] md:relative">
		<div class="absolute h-full w-full bg-slate-700 hidden md:block">
			<img
				src="/images/twitter/t_1.png"
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

				<h1 class="{id}sub text-3xl text-[#B2C8EC] font-Monserrate flex items-center gap-3">
					Clone <Icon icon="octicon:repo-clone-16" />
				</h1>
				<p class="{id}description leading-6 text-gray-300 font-semibold">
					Missing the old twitter no worries we got you covered! Completely built from scratch
					allows you to send tweets including images , view profiles , follow profiles search
					profiles.
				</p>
				<h2 class="{id}built">
					Built with <span class="font-bold">REACTJS</span> , <span class="font-bold">Nodejs</span>
					&
					<span class="font-bold">MongoDB</span>
				</h2>
				<div class="{id}demo text-sm font-semibold space-y-1">
					<div class="flex gap-2 items-center">
						<h2>Github Project Link</h2>
						<a href="https://github.com/CoderRCAman/twitter-like" target="_blank">
							<Icon icon="fluent-mdl2:mini-expand" class="text-cyan-100  text-lg" width="25" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="md:hidden p-4 mx-4">
			<img src="/images/twitter/t_1.png" alt="" class="{id}phone-show" />
		</div>
		<div class="md:absolute -bottom-16 font-Monserrate flex items-center gap-9 p-4 font-bold">
			<h1>Check out snapshots</h1>
			<RenderImage {images} />
		</div>
	</div>
</section>
