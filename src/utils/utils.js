export function handleMarquee() {
	const marquee = document.querySelectorAll('.line-holder');
	let speed = 4;
	let lastScrollPos = 0;
	let timer;
	console.log(marquee)
	marquee.forEach(function (el) {
		const container = el.querySelector('.line');
		const content = el.querySelector('.line > *');
		const elements = el.querySelectorAll('.line > *');
		
		if (content) {
			//Duplicate content
			let endPosition = elements[elements.length - 1].getClientRects()[0].left
			let windowWidth = document.querySelector('html').getClientRects()[0].width

			let progress = 1;

			function loop() {
				progress = progress - speed;
				
				if (progress <= (endPosition - windowWidth) * -1) {
					endPosition *= 2
					elements.forEach(elem => {
						let clone = elem.cloneNode(true);
						container.appendChild(clone);
					})
				}
				container.style.transform = 'translateX(' + progress + 'px)';
				// container.style.transform += 'skewX(' + speed * 0.4 + 'deg)';
				window.requestAnimationFrame(loop);
			}
			loop();
		}

		
	});
};


const clone = (elements) => {

}