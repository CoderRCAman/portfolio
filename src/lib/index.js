import gsap from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
	{
		console.log('hah');
		gsap.registerPlugin(ScrollTrigger);
		gsap.set(`.fadeUp_${scrollId}`, { y: 40, autoAlpha: 0 });
		gsap.set(`.img_container_${scrollId}`, { autoAlpha: 0 });
		gsap.set(`.below_${scrollId}`, { autoAlpha: 0, y: -50 });
		gsap.set(`.link-live_${scrollId}`, { autoAlpha: 0, y: -40 });
		let ivrTl = gsap.timeline({
			scrollTrigger: {
				trigger: `#${scrollId}`,
				start: window.innerWidth >= 1024 ? 'top 80%' : '35% 130%',
				end: window.innerWidth >= 1024 ? '120% 80%' : 'bottom 80%',
				scrub: window.innerWidth <= 1024 ? true : false,
				// pin:true,
				// markers:1,
				toggleActions: 'play none play reset'
			}
		});
		ivrTl.to(`.fadeUp_${scrollId}`, {
			y: 0,
			autoAlpha: 1,
			stagger: 0.4,
			duration: 0.6,
			ease: 'none'
		});

		let imageRevealTl = gsap.timeline();
		let imageElements = document.querySelectorAll(`.img_container_${scrollId}`);
		imageRevealTl.to(`.below_${scrollId}`, {
			autoAlpha: 1,
			y: 0,
			duration: 0.4
		});
		imageElements.forEach((element, index) => {
			imageRevealTl.to(element, {
				autoAlpha: 1,
				duration: 0.3,
				ease: 'none'
			});
			imageRevealTl.to(`.slide_${index}_${scrollId}`, {
				y: '100%',
				ease: 'none',
				duration: 0.3,
				ease: 'none'
			});
			imageRevealTl.to(`.image_${index}_${scrollId}`, {
				scale: 1,
				ease: 'none',
				ease: 'none',
				duration: 0.3
			});
		});
		imageRevealTl.to(`.link-live_${scrollId}`, {
			autoAlpha: 1,
			y: 0,
			ease: 'none',
			duration: 0.4
		});
		ivrTl.add(imageRevealTl, '-=1.3');
	}
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
