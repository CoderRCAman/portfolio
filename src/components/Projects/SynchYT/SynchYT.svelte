<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { ProjectScroll } from '$lib/index';
	let id = 'synchyt';
	onMount(() => {
		ProjectScroll(id);
	});
</script>

<section
	class="min-h-screen text-white mt-5 flex flex-col items-center border-b-[1px] border-slate-800"
	{id}
>
	<h1 class="{id}title my-14 -ml-7 md:ml-0 text-5xl font-Monserrate">
		SYNCH<span class="text-red-500">YT</span>
	</h1>
	<div class="md:h-[60vh] md:w-[90vw] xl:h-[70vh] xl:w-[90vw] 2xl:w-[70vw] lg:w-[90vw] md:relative">
		<div class="absolute h-full w-full bg-slate-700 hidden md:block">
			<img
				src="/images/synchyt/synchyt-2.png"
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
					Realtime <Icon icon="icon-park-outline:online-meeting" />
				</h1>
				<p class="{id}description leading-6 text-gray-300 font-semibold">
					<span class="font-bold text-white">SYNCH<span class="text-red-500">YT</span></span> is a
					web application which allows multiple users to connect on to a server which lets the host
					play a
					<span class="font-bold text-white">
						YOU<span class="text-red-500">TUBE</span>
					</span> video. And all other users connected would be able to synch to the HOST's timeline
					and pause and play actions. Host is able to control the entirity of the video and also a chat
					feature is included to chat while watching the video.
				</p>
				<h2 class="{id}built">
					Built with <span class="font-bold">EJS</span> , <span class="font-bold">Nodejs</span> &
					<span class="font-bold">MongoDB</span>
				</h2>
				<div class="{id}demo text-sm font-semibold space-y-1">
					<div class="flex gap-2 items-center">
						<h2>Link to live project</h2>
						<a href="https://synchyt.onrender.com/" target="_blank">
							<Icon icon="fluent-mdl2:mini-expand" class="text-cyan-100  text-lg " width="25" />
						</a>
					</div>
					<div class="flex gap-2 items-center">
						<h2>Github Project Link</h2>
						<a href="https://github.com/CoderRCAman/Sync-yt" target="_blank">
							<Icon icon="fluent-mdl2:mini-expand" class="text-cyan-100  text-lg" width="25" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="md:hidden p-4 mx-4">
			<img src="/images/synchyt/synchyt-2.png" alt="" class="{id}phone-show" />
		</div>
	</div>
</section>

<!-- <article class="font-Monserrate px-2 md:w-[80%] mt-8 lg:leading-7 fadeUp_{scrollId}">
	SYNCHYT is a web application which allows multiple users to connect on to a server which lets
	the host play a YOU<span class="text-red-500">TUBE</span> video. And all other users connected
	would be able to synch to the HOST's timeline and pause and play actions. Host is able to control
	the entirity of the video and also a chat feature is included to chat while watching the video.
</article> -->
