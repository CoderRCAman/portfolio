<script>
	if (typeof window !== 'undefined') {
		const elements = document.getElementsByTagName('body');
		const body = elements[0];
		body.style.overflow = 'hidden';
	}
</script>

<div class="fixed h-full w-full top-0 left-0 flex z-50 overlay overflow-hidden">
	<div class="w-full h-full flex justify-center items-center overlay-item bg-black">
		<h1 class="font-Poppins text-5xl font-bold welcome">Welcome!</h1>
	</div>
</div>

<style>
	.overlay {
		scroll-behavior: contain;
	}
    
</style>
