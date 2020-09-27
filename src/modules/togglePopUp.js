const togglePopUp = () => {
	const popUpCall = document.querySelector('.popup-call'),
		popUpDiscount = document.querySelector('.popup-discount'),
		popUpCheck = document.querySelector('.popup-check'),
		popUpConsultation = document.querySelector('.popup-consultation'),
		popUpCallTwo = document.querySelector('.popup-callTwo');

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
		if (target.classList.contains('director-btn')) {
			if (document.querySelector('.user_quest').value !== '') {
				popUpConsultation.style.display = 'block';
			}
		}
		if (target.classList.contains('call-btnTwo')) {
			popUpCallTwo.style.display = 'block';
		}
	});
};

export default togglePopUp;