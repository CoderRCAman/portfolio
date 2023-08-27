<script>
	import Icon from '@iconify/svelte';
	import TextRender from '../components/Home/TextRender.svelte';
	import Projects from '../components/Projects/Projects.svelte';
</script>

<section
	id="home"
	class="h-[100vh] md:flex text-white w-full md:justify-between justify-center flex-col md:flex-row select-none z-0"
>
	<div class="w-full h-[65%] md:mt-0 md:h-full flex items-center flex-col justify-center relative">
		<img src="images/JavaScript frameworks-amico.svg" alt="hero-bg" class="hero-bg lg:h-full" />

		<div class="sm:w-full md:w-[550px] lg:w-[700px] p-2">
			<h1 class="text-3xl font-Inter md:ml-4 leading-10 font-extrabold -z-1">
				<span class="text-5xl tracking-wid text-emerald-500">FULLSTACK &nbsp; </span>
				<span class="tracking-wide">WEB DEVELOPER</span>
			</h1>

			<div class="md:ml-4 mt-4 font-Monserrate text-neutral-50 leading-6 tracking-wider">
				An accomplished full stack developer with proficiency in both
				<span class="text-emerald-300">Front End</span>
				and <span class="text-emerald-300">Back End</span>
				technologies providing seamless user experiences and solid technical solutions.
			</div>
		</div>

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
	<div class="w-full font-Monserrate text-center flex justify-center items-center">
		<TextRender />
	</div>
</section>
<Projects />
<section id="about" class="h-[100vh]">ABOUT</section>

<style>
	.hero-bg {
		position: absolute;
		z-index: -3;
		opacity: 0.1;
	}
</style>
