<script>
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	export let images;

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#gallery',
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	});
</script>

<div class="pswp-gallery" id={'gallery'}>
	{#each images as image, index}
		{#if index === 0}
			<a
				href={image.url}
				data-pswp-width={image.width}
				data-pswp-height={image.height}
				data-pswp-src={image.url}
				target="_blank"
			>
				<button
					class="bg-transparent border-[1px] border-[#11614E] text-[#2D9B81] rounded-sm px-7 py-[3px]"
					>View</button
				>
			</a>
		{:else}
			<a
				href={image.url}
				data-pswp-width={image.width}
				data-pswp-height={image.height}
				data-pswp-src={image.url} 
				target="_blank"
			>
				<div class="hidden" />
			</a>
		{/if}
	{/each}
</div>
