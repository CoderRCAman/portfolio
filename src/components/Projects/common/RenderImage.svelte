<script>
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';

	export let galleryID;
	export let images;
	export let scrollId;
	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	});
</script>

<div
	class="pswp-gallery p-2 md:p-0 w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-2"
	id={galleryID}
>
	{#each images as image, index}
		<a
			href={image.largeURL}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			target="_blank"
			rel="noreferrer"
		>
			<div
				class="w-full xs:w-[90%] h-full relative overflow-hidden img_container_{scrollId} rounded-md"
			>
				<div
					class="w-full h-full absolute top-0 left-0 bg-[#10151d] slide_{index}_{scrollId} z-30 rounded-md"
				/>
				<img
					src={image.thumbnailURL}
					alt=""
					class="w-full h-full object-cover image_{index}_{scrollId} scale-[1.2] opacity-60 rounded-md"
				/>
			</div>
		</a>
	{/each}
</div>
