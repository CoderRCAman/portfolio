<script>
	import Icon from '@iconify/svelte';
</script>

<section id="home" class="h-[100vh] md:flex text-white w-full justify-between :flex-col select-none">
	<div class="w-full h-[50%] md:h-full flex items-center flex-col justify-center">
		<h1 class="text-5xl font-Tilt text-center">
			FULLSTACK &nbsp; WEB <br /><span>DEVELOPER</span>
		</h1>
		<div class="mt-10">
			<div
				class="flex items-center gap-3 group border-[1px] border-transparent p-1 rounded-md hover:border-slate-800 cursor-pointer"
			>
				<span class="text-xl"> 🚀 </span>
				<h2 class="font-Titillium text-lg">Projects</h2>
				<span>
					<Icon icon="solar:arrow-right-outline" width="30" />
				</span>
			</div>
		</div>
		<div class="mt-3">
			<div
				class="flex items-center gap-2 group border-[1px] border-transparent p-1 rounded-md hover:border-slate-800 cursor-pointer"
			>
				<span class="text-xl"> 📝  </span>
				<h2 class="font-Titillium text-lg">About Me</h2>
				<span>
					<Icon icon="solar:arrow-right-outline" width="30" />
				</span>
			</div>
		</div>
	</div>
	<div class="w-full font-Monserrate text-center">SOMETHING COOKING</div>
</section>
<section id="projects" class="h-[100vh]">PROJECTS</section>
<section id="about" class="h-[100vh] s">ABOUT</section>
