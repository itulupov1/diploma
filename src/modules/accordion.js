const accordion = () => {
	const blockAcc = document.querySelector('#accordion-two'),
		panelHeading = blockAcc.querySelectorAll('.panel-heading'),
		panelContent = blockAcc.querySelectorAll('.panel-collapse');

	const togglePanelContent = index => {
		panelContent.forEach((item, i) => {
			if (index === i) {
				item.classList.add('in');
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

};

export default accordion;