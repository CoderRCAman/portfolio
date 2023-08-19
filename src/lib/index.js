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
	  '$': '💡',
	  '*': '🌟'
	};
  
	return emojiMap[character] || character;
  }