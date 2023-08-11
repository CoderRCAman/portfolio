// place files you want to import through the `$lib` alias in this folder.
export function InitLenis(Lenis) {
	const lenis = new Lenis();

	lenis.on('scroll', (e) => {});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
}
