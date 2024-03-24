import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// place files you want to import through the `$lib` alias in this folder.
export function InitLenis(Lenis) {
	const lenis = new Lenis();
	lenis.on('scroll', () => {});
	function raf(time) {
		lenis.raf(time);	
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
}

export function ChunkStringArray(texts) {
	let modifyText = texts.map((chars) => chars.split(''));
	return modifyText;
}

export let characters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'-',
	'_',
	'+',
	'=',
	'{',
	'}',
	'[',
	']',
	'|',
	'\\',
	':',
	';',
	'"',
	"'",
	'<',
	'>',
	',',
	'.',
	'?',
	'/'
];

export function mapToEmoji(character) {
	const emojiMap = {
		'^': '🚀',
		'%': '👨‍💻',
		'&': '✨',
		$: '💡',
		'*': '🌟'
	};

	return emojiMap[character] || character;
}

export function ProjectScroll(scrollId) {
	gsap.registerPlugin(ScrollTrigger);
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: `#${scrollId}`,
			start: 'top top+=800', // When the top of the trigger hits the top of the viewport
			end: '90% bottom', // When the bottom of the trigger hits the bottom of the viewport
			scrub: true
		}
	});

	gsap.set(`.${scrollId}title`, {
		autoAlpha: 0,
		filter: 'blur(5px)'
	});

	gsap.set(`.${scrollId}sub`, {
		filter: 'blur(5px)',
		autoAlpha: 0
	});
	gsap.set(`.${scrollId}phone-show`, {
		scale: 0.7,
		autoAlpha: 0
	});
	gsap.set(`.${scrollId}description`, {
		filter: 'blur(5px)',
		autoAlpha: 0
	});
	gsap.set(`.${scrollId}built`, {
		filter: 'blur(5px)',
		autoAlpha: 0
	});
	gsap.set(`.${scrollId}demo`, {
		filter: 'blur(5px)',
		autoAlpha: 0
	});
	tl.to(`.${scrollId}title`, {
		filter: 'blur(0)',
		autoAlpha: 1
	});
	tl.to(`.${scrollId}sub`, {
		filter: 'blur(0)',
		autoAlpha: 1
	});
	tl.to(`.${scrollId}description`, {
		filter: 'blur(0)',
		autoAlpha: 1
	});
	tl.to(`.${scrollId}built`, {
		filter: 'blur(0)',
		autoAlpha: 1
	});
	tl.to(`.${scrollId}demo`, {
		filter: 'blur(0)',
		autoAlpha: 1
	});
	tl.to(`.${scrollId}phone-show`, {
		scale: 1,
		autoAlpha: 1
	});
}
export function AnimateAboutScroll() {
	gsap.registerPlugin(ScrollTrigger);
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: `#about`,
			start: 'top top+=800', // When the top of the trigger hits the top of the viewport
			end: '90% bottom', // When the bottom of the trigger hits the bottom of the viewport
			scrub: true
		}
	});
	let tr = gsap.timeline({
		scrollTrigger: {
			trigger: `#about`,
			start: 'top top+=800', // When the top of the trigger hits the top of the viewport
			end: '90% bottom', // When the bottom of the trigger hits the bottom of the viewport
			scrub: true
		}
	});
	gsap.set('.fadeLeft', {
		y: 50,
		autoAlpha: 0
	});
	gsap.set('.fadeRight', {
		y: 50,
		autoAlpha: 0
	});
	tl.to('.fadeLeft', {
		y: 0,
		autoAlpha: 1,
		stagger: 0.4
	});
	tr.to('.fadeLeft', {
		y: 0,
		autoAlpha: 1,
		stagger: 0.4
	});
}
export function RenderMyWorks() {
	gsap.registerPlugin(ScrollTrigger);
	gsap.set('.works', {
		autoAlpha: 0,
		y: -50
	});
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: '#projects',
			scrub: true,
			start: 'top 80%',
			end: '10% 80%'
		}
	});
	tl.to('.works', {
		y: 0,
		autoAlpha: 1,
		ease: 'none',
		duration: 0.3
	});
}

export function lerp(start, end, percentage) {
	// Stroke offset value is set to 550px now i want to animate
	// this value to 5 while i have another source value which increase
	// by percentage value for example 5 , 10,20% with the increment of
	//  these source value i want to decrease the 550px to 5px so what i mean is at 0%
	//   offset is at 550px at 100% value offset is at 5px is there any formula for this?
	return start - (start - end) * (percentage / 100);
}
