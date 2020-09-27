const calcAccordion = () => {
	const blockCalcAcc = document.querySelector('#accordion'),
		panelHeading = blockCalcAcc.querySelectorAll('.panel-heading'),
		panelContent = blockCalcAcc.querySelectorAll('.panel-collapse'),
		btns = blockCalcAcc.querySelectorAll('.construct-btn'),
		inputDistance = blockCalcAcc.querySelector('.distance');

	const togglePanelContent = index => {
		panelContent.forEach((item, i) => {
			if (index === i) {
				item.classList.add('in');
			} else {
				item.classList.remove('in');
			}
		});
	};

	blockCalcAcc.addEventListener('click', event => {
		let target = event.target;
		target = target.closest('.panel-heading');

		if (target) {
			panelHeading.forEach((item, i) => {
				if (item === target) {
					togglePanelContent(i);
				}
			});
		}

		target = event.target;
		if (target.closest('.construct-btn')) {
			btns.forEach((item, i) => {
				if (item === target.closest('.construct-btn')) {
					i++;
					togglePanelContent(i);
				}
			});
		}

	});

	const switchCheckbox = document.getElementById('myonoffswitch'),
		switchCheckboxTwo = document.getElementById('myonoffswitch-two'),
		secondWell = document.querySelector('.second-well'),
		wellParameters = document.querySelectorAll('.form-control'),
		calcResult = document.getElementById('calc-result'),
		bodyCalc = {
			type: '',
			wellParameters: {},
			bottom: true,
			distance: '',
			price: ''
		};


	const countSum = () => {
		let total = 10000,
			thoWell = 5000,
			count = 10000;

		if (!switchCheckbox.checked) {
			secondWell.style.display = 'block';
			if (wellParameters[0].value.substr(0, 1) === '2') {
				total += total / 100 * 20;
				bodyCalc.wellParameters.diameter = wellParameters[0].value;
			}
			if (wellParameters[1].value.substr(0, 1) === '2') {
				total += total / 100 * 30;
				bodyCalc.wellParameters.numberRings = wellParameters[1].value;
			} else if (wellParameters[1].value.substr(0, 1) === '3') {
				total += total / 100 * 50;
				bodyCalc.wellParameters.numberRings = wellParameters[1].value;
			}

			if (wellParameters[2].value.substr(0, 1) === '2') {
				thoWell += thoWell / 100 * 20;
			}
			if (wellParameters[3].value.substr(0, 1) === '2') {
				thoWell += thoWell / 100 * 20;
			} else if (wellParameters[3].value.substr(0, 1) === '3') {
				thoWell += thoWell / 100 * 40;
			}

			total += thoWell;

			if (switchCheckboxTwo.checked) {
				total += total / 100 * 20;
			} else {
				bodyCalc.bottom = false;
			}
			bodyCalc.wellParameters.diameter = wellParameters[0].value;
			bodyCalc.wellParameters.numberRings = wellParameters[1].value;
			bodyCalc.wellParameters.diameterSecond = wellParameters[2].value;
			bodyCalc.wellParameters.numberRingsSecond = wellParameters[3].value;
			bodyCalc.type = 'двухкамерный';
		} else {
			secondWell.style.display = 'none';
			if (wellParameters[0].value.substr(0, 1) === '2') {
				total += total / 100 * 20;
				count = total;
			}

			if (wellParameters[1].value.substr(0, 1) === '2') {
				total += total / 100 * 30;
			} else if (wellParameters[1].value.substr(0, 1) === '3') {
				total += total / 100 * 50;
			}

			if (switchCheckboxTwo.checked) {
				total += count / 100 * 10;
			} else {
				bodyCalc.bottom = false;
			}
			bodyCalc.wellParameters.diameter = wellParameters[0].value;
			bodyCalc.wellParameters.numberRings = wellParameters[1].value;
			bodyCalc.type = 'однокамерный';
		}

		calcResult.value = Math.floor(total);
		bodyCalc.price = calcResult.value;
		bodyCalc.distance = inputDistance.value;
	};
	countSum();

	blockCalcAcc.addEventListener('change', countSum);

	return bodyCalc;
};

export default calcAccordion;
