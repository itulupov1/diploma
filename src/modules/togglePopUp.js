const togglePopUp = () => {
	const popUpCall = document.querySelector('.popup-call');
	const popUpDiscount = document.querySelector('.popup-discount');
	const popUpCheck = document.querySelector('.popup-check');

	document.body.addEventListener('click', event => {
		const target = event.target;

		if (target.classList.contains('call-btn')) {
			event.preventDefault();
			popUpCall.style.display = 'block';
		}

		const popUps = document.querySelectorAll('.popup');
		let popUpBlock = document.querySelector('.popup');
		popUps.forEach(item => {
			if (item.style.display === 'block') {
				popUpBlock = item;
			}
		});

		if (target.classList.contains('popup-close')) {
			target.closest('.popup').style.display = 'none';
		} else if (!target.closest('.popup-content') && popUpBlock.style.display === 'block' &&
			!target.classList.contains('call-btn')) {
			target.closest('.popup').style.display = 'none';
		}

		if (target.classList.contains('discount-btn')) {
			popUpDiscount.style.display = 'block';
		}
		if (target.classList.contains('check-btn')) {
			popUpCheck.style.display = 'block';
		}
	});
};

export default togglePopUp;