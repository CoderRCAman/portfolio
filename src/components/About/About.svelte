<script>
	import { onMount } from 'svelte';
	import Svgdot from '../svgs/Svgdot.svelte';
	import Svgshape from '../svgs/Svgshape.svelte';
	import { AnimateAboutScroll } from '$lib/index';
	onMount(() => {
		AnimateAboutScroll();
	});
</script>

<section
	id="about"
	class="min-h-[100vh] overflow-hidden text-gray-100 flex justify-center pb-10 relative"
>
	<div class="container pt-16 flex flex-col md:flex-row px-3 md:px-0">
		<div class="w-full space-y-10">
			<div class="fadeLeft">
				<h1 class="font-Monserrate text-4xl font-extrabold">I'm</h1>
				<h1 class="font-Monserrate text-4xl font-extrabold">Amaresh Sarma</h1>
			</div>
			<p class="w-full md:w-[70%] font-Poppins leading-7 fadeLeft">
				I am a Full Stack Developer with over 1 years of experience in developing end-to-end web
				applications. I am proficient in both front-end and back-end technologies.I am looking
				forward to bringing my skills and experiences to new and challenging projects.
			</p>
			<div class="w-full md:w-[70%] fadeLeft">
				<h1 class="font-Monserrate font-bold">Awards:</h1>
				<ol>
					<li class="list-disc ml-10 mt-4 font-Poppins">
						Secured 2nd Position at <span class="font-bold">Codestallation</span> hackathon @2022
						for building
						<span class="font-bold"> RESUME GENERATOR</span> web app
					</li>
				</ol>
			</div>
			<div class="w-full md:w-[90%] fadeLeft">
				<h1 class="font-Monserrate font-bold">Experience:</h1>
				<ol>
					<li class="list-disc ml-10 mt-4 font-Poppins">
						Intern at Fineworks Media and Solution Private Ltd @2023
					</li>
				</ol>
			</div>
		</div>
		<div class="w-full md:w-[70%] space-y-8 mt-5 md:mt-0">
			<div class="fadeLeft md:fadeRight">
				<h1 class="font-Monserrate font-bold">Frameworks & Library:</h1>
				<ol>
					<li class="list-disc ml-10 mt-4 font-Poppins">
						<span class="font-bold">NEXTJS</span> , <span class="font-bold">SVELTE KIT</span> ,
						<span class="font-bold">Go Fibre</span>
						,
						<span class="font-bold">REACTJS</span>,
						<span class="font-bold">Nodejs</span>
					</li>
				</ol>
			</div>
			<div class="fadeLeft md:fadeRight">
				<h1 class="font-Monserrate font-bold">Databases:</h1>
				<ol>
					<li class="list-disc ml-10 mt-4 font-Poppins">
						<span class="font-bold">MongoDB</span> , <span class="font-bold">PostgresSQL</span> ,
						<span class="font-bold">MySQL</span>
					</li>
				</ol>
			</div>
			<div class="fadeLeft md:fadeRight">
				<h1 class="font-Monserrate font-bold">Languages:</h1>
				<ol>
					<li class="list-disc ml-10 mt-4 font-Poppins">
						<span class="font-bold">Go</span> , <span class="font-bold">JavaScript</span> ,
						<span class="font-bold">C++</span>,<span class="font-bold">Java</span>
					</li>
				</ol>
			</div>
			<div class="fadeLeft md:fadeRight">
				<h1 class="font-Monserrate font-bold">Education:</h1>
				<ol>
					<li class="list-disc ml-10 mt-4 font-Poppins font-semibold">
						Completed my bachelors (BCA) degree from NERIM group of Institution @2021
					</li>
					<li class="list-disc ml-10 mt-4 font-Poppins font-semibold">
						Completed masters (MCA) degree from Cotton University @2023
					</li>
				</ol>
			</div>
			<div class="fadeLeft md:fadeRight">
				<h1 class="font-Monserrate font-bold underline">Contact me</h1>
				<div class="ml-4 mt-4">
					<h1 class="font-Monserrate font-bold">Email:</h1>
					<ol>
						<li class="list-disc ml-10 mt-4 font-Poppins font-semibold">amareshnerim@gmail.com</li>
					</ol>
				</div>
				<div class="ml-4 mt-4">
					<h1 class="font-Monserrate font-bold">LinkedIn:</h1>
					<ol>
						<li class="list-disc ml-10 mt-4 font-Poppins font-semibold">
							<a
								href="https://www.linkedin.com/in/amaresh-sarma-0161671b3/"
								class="underline"
								target="_blank"
							>
								https://www.linkedin.com/in/amaresh-sarma-0161671b3/
							</a>
						</li>
					</ol>
				</div>
				<div class="ml-4 mt-4">
					<h1 class="font-Monserrate font-bold">GitHub:</h1>
					<ol>
						<li class="list-disc ml-10 mt-4 font-Poppins font-semibold">
							<a href="https://github.com/CoderRCAman" class="underline" target="_blank">
								https://github.com/CoderRCAman
							</a>
						</li>
					</ol>
				</div>
			</div>
		</div>
	</div>
	<div class="absolute -top-10 right-3 animate-svg-top -z-10">
		<Svgdot />
	</div>
	<div class="absolute -bottom-10 left-3 animate-svg-bot -z-10">
		<Svgdot />
	</div>
	<div class="hidden md:block absolute bottom-10 delay-100 right-10 animate-svg-bot -z-10">
		<Svgshape />
	</div>
</section>

<style>
	.animate-svg-top {
		animation: floatUpDownTop 4000ms ease-in alternate infinite;
	}
	.animate-svg-bot {
		animation: floatUpDownBot 4000ms ease-in alternate infinite;
	}
	@keyframes floatUpDownTop {
		0% {
			top: -10;
		}
		100% {
			top: 0;
		}
	}
	@keyframes floatUpDownBot {
		0% {
			bottom: -10;
		}
		100% {
			bottom: 0;
		}
	}
</style>
