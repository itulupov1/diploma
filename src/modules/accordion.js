const accordion = () => {
	const blockAcc = document.querySelector('#accordion-two'),
		panelHeading = blockAcc.querySelectorAll('.panel-heading'),
		panelContent = blockAcc.querySelectorAll('.panel-collapse');

	const togglePanelContent = index => {
		panelContent.forEach((item, i) => {
			if (index === i) {
				item.classList.add('in');
				animateCSS(item, 'zoomIn');
			} else {
				item.classList.remove('in');
			}
		});
	};

	blockAcc.addEventListener('click', event => {
		event.preventDefault();
		let target = event.target;
		target = target.closest('.panel-heading');

		if (target) {
			panelHeading.forEach((item, i) => {
				if (item === target) {
					togglePanelContent(i);
				}
			});
		}
	});

	const animateCSS = (element, animation, prefix = 'animate__') =>
		new Promise((resolve, reject) => {
			const animationName = `${prefix}${animation}`;
			const node = element;

			node.classList.add(`${prefix}animated`, animationName);

			function handleAnimationEnd() {
				node.classList.remove(`${prefix}animated`, animationName);
				resolve('Animation ended');
			}

			node.addEventListener('animationend', handleAnimationEnd, {
				once: true
			});
		});

};

export default accordion;