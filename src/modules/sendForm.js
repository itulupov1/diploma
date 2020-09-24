const sendForm = () => {
	const errorMessage = 'Что-то пошло не так...';
	const loadMessage = 'Загрузка...';
	const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

	const statusMessage = document.createElement('div');
	statusMessage.style.cssText = 'font-size: 2rem';

	const submitBtn = event => {
		event.preventDefault();
		const target = event.target;
		const form = document.getElementById(`${target.id}`);

		statusMessage.textContent = loadMessage;
		form.append(statusMessage);

		const formData = new FormData(form);
		const body = {};
		formData.forEach((val, key) => {
			body[key] = val;
		});
		postData(body)
			.then(response => {
				if (response.status !== 200) {
					throw new Error('Status network not 200');
				}
				statusMessage.textContent = successMessage;
				form.querySelectorAll('input').forEach(elem => {
					elem.value = '';
				});
				setTimeout(() => {
					statusMessage.textContent = '';
				}, 3000);
			})
			.catch(error => {
				statusMessage.textContent = errorMessage;
				console.error(error);
			});
	};
	document.body.addEventListener('submit', submitBtn);

	document.body.addEventListener('input', event => {
		const target = event.target;

		if (target.name === 'user_phone') {
			target.value = target.value.replace(/[^\d+]/g, '');
			if (target.value.match(/[+]\d{11}|[\d]{11}/g) !== null) {
				target.value = target.value.match(/[+]\d{11}|[\d]{11}/g);
			}
		} else if (target.name === 'user_name') {
			target.value = target.value.replace(/[^а-яё\s]/ig, '');
		} else if (target.name === 'user_message') {
			target.value = target.value.replace(/[^а-яё\s\W]/ig, '');
		}
	});

	const postData = body => fetch('./server.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});
};

export default sendForm;