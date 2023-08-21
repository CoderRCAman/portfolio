<script>
	import Icon from '@iconify/svelte';
	import TextRender from '../components/Home/TextRender.svelte';
</script>

<section
	id="home"
	class="h-[100vh] md:flex text-white w-full md:justify-between justify-center flex-col md:flex-row select-none z-0"
>
	<div class="w-full h-[50%] md:h-full flex items-center flex-col justify-center relative ">
		<img src="images/JavaScript frameworks-amico.svg" alt="hero-bg" class="hero-bg lg:h-full" />

		<h1 class="text-3xl font-Monserrate text-center font-extrabold -z-1">
			FULLSTACK &nbsp; WEB <span>DEVELOPER</span>
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
				<span class="text-xl"> 📝 </span>
				<h2 class="font-Titillium text-lg">About Me</h2>
				<span>
					<Icon icon="solar:arrow-right-outline" width="30" />
				</span>
			</div>
		</div>
	</div>
	<div class="w-full mt-12 font-Monserrate text-center flex justify-center items-center">
		<TextRender />
	</div>
</section>
<section id="projects" class="h-[100vh]">PROJECTS</section>
<section id="about" class="h-[100vh] ">ABOUT</section>

<style>
	.hero-bg{
		position: absolute;
		z-index: -3;
		opacity: 0.1;
	}
</style>
