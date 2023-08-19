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
		// for (let i = 0; i < 150; i++) {
		// 	const x = Math.random() * canvas.width;
		// 	const y = Math.random() * canvas.height;
		// 	const brightness = Math.random();
		// 	stars.push({ x, y, brightness });
		// }
		// function animate() {
		// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
		// 	// Move stars and draw them
		// 	stars.forEach((star) => {
		// 		star.x -= 0.1;
		// 		if (star.x < 0) {
		// 			star.x = canvas.width;
		// 		}
		// 		ctx.beginPath();
		// 		ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
		// 		ctx.arc(star.x, star.y, 1, 0, Math.PI * 2);
		// 		ctx.fill();
		// 	});
		// 	requestAnimationFrame(animate);
		// }

		// animate();
		let count = window.innerWidth <= 800 ? 80 : 100;
		for (let i = 0; i < count; i++) {
			const x = Math.random() * canvas.width;
			const y = Math.random() * canvas.height;
			const brightness = Math.random();
			const velocityX = (Math.random() - 0.5) * 0.5; // Random x velocity between -1 and 1
			const velocityY = (Math.random() - 0.5) * 0.6; // Random y velocity between -1 and 1
			const size = Math.random() * 1.4; // Random size between 1 and 3
			stars.push({ x, y, brightness, velocityX, velocityY, size });
		}
		for (let i = 0; i < 20; i++) {
			stars[i].brightness += 0.3;
		}
		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			// Move stars and draw them
			stars.forEach((star) => {
				star.x += star.velocityX; // Update x position with x velocity
				star.y += star.velocityY; // Update y position with y velocity

				// Wrap around the canvas edges
				if (star.x < 0) {
					star.x = canvas.width;
				} else if (star.x > canvas.width) {
					star.x = 0;
				}
				if (star.y < 0) {
					star.y = canvas.height;
				} else if (star.y > canvas.height) {
					star.y = 0;
				}

				ctx.beginPath();
				// star.twinkling += 0.1; // Twinkling effect
				// star.brightness = Math.sin(star.twinkling) * 0.5 + 0.5;
				ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
				ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
				ctx.fill();
			});
			requestAnimationFrame(animate);
		}

		animate();
	});
</script>

<div class="bg-canvas">
	<canvas id="starsCanvas" />
</div>

<slot />

<style>
	#starsCanvas {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1; /* Behind other content */
		background-image: radial-gradient(500px 200px at 50% 0%, #131f33 20%, rgba(19, 30, 49, 0) 100%);
	}
	.bg-canvas {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}
	
</style>
