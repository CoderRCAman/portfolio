<script>
	import { onMount } from 'svelte';
	import '../app.css';
	import Lenis from '@studio-freight/lenis';
	import { InitLenis } from '$lib';
	onMount(() => {
		InitLenis(Lenis);
		const canvas = document.getElementById('starsCanvas');
		const ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		const stars = [];
		// Create random stars
		for (let i = 0; i < 100; i++) {
			const x = Math.random() * canvas.width;
			const y = Math.random() * canvas.height;
			const brightness = Math.random();
			stars.push({ x, y, brightness });
		}
		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			// Move stars and draw them
			stars.forEach((star) => {
				star.x -= 0.1;
				if (star.x < 0) {
					star.x = canvas.width;
				}
				ctx.beginPath();
				ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
				ctx.arc(star.x, star.y, 1, 0, Math.PI * 2);
				ctx.fill();
			});
			requestAnimationFrame(animate);
		}
		animate();
	});
</script>

<canvas id="starsCanvas" />

<slot />

<style>
	#starsCanvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1; /* Behind other content */
		background-image: radial-gradient(500px 200px at 50% 0%, #131f33 20%, rgba(19, 30, 49, 0) 100%);
	}
</style>
