const togglePopUp = () => {
	const popUpCall = document.querySelector('.popup-call');

	document.body.addEventListener('click', event => {
		event.preventDefault();
		const target = event.target;

		if (target.classList.contains('call-btn')) {
			popUpCall.style.display = 'block';
		}

		if (target.classList.contains('popup-close')) {
			popUpCall.style.display = 'none';
		} else if (!target.closest('.popup-content') && popUpCall.style.display === 'block' &&
			!target.classList.contains('call-btn')) {
				popUpCall.style.display = 'none';
		}
	});
};

export default togglePopUp;