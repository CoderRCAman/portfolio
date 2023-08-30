<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import { lerp } from '$lib';
	let progress = 0;
	onMount(() => {
		let circle = document.getElementById('circle');
		var queue = new createjs.LoadQueue();
		queue.loadFile({ id: 'ivr_1', src: '/images/ivr/pr_ivr_1.png' });
		queue.loadFile({ id: 'ivr_2', src: '/images/ivr/pr_ivr_2.png' });
		queue.loadFile({ id: 'ivr_3', src: '/images/ivr/pr_ivr_3.png' });
		queue.on('progress', (p) => {
			console.log(circle);
			progress = parseInt(p.progress * 100);
			console.log(progress);
			console.log(lerp(550, 5, progress));
			circle.style.strokeDashoffset = lerp(550, 5, progress);
		});
		queue.on('complete', () => {
			window.location.replace('/main')
		});
	});
</script>

<section class="bg-[#10151d] h-screen flex flex-col items-center justify-center">
	<div class="h-44 w-44 rounded-full bg-slate-700 flex justify-center items-center outer relative">
		<svg width="189" height="174" viewBox="0 0 188 188" fill="#1e293b">
			<circle id="circle" cx="94" cy="94" r="87" stroke-linecap="round" stroke-width="14" />
		</svg>
		<h1 class="absolute font-Tektur text-white text-3xl">{progress}%</h1>
	</div>
	<h1 class="mt-5 text-md md:text-xl text-slate-400 font-Monserrate font-semibold">
		Loading assets so we can take off 🚀...
	</h1>
</section>

<style>
	.outer {
		animation: fillAnimation 4s linear infinite;
	}
	circle {
		stroke: cyan;
		stroke-width: 14px;
		stroke-dasharray: 550px;
		stroke-dashoffset: 550px;
		fill: #21242e;
		animation: fillCircle 3s linear forwards;
	}
</style>
