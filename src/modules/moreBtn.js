const moreBtn = () => {
	const block = document.querySelector('.sentence'),
		oneItem = block.querySelectorAll('.col-xs-12'),
		addMore = document.querySelector('.add-sentence-btn');

	addMore.addEventListener('click', () => {
		oneItem.forEach(item => {
			if (item.classList.contains('hidden')) {
				item.classList.remove('hidden');
			}
			if (item.classList.contains('visible-sm-block')) {
				item.classList.remove('visible-sm-block');
			}
		});
		addMore.style.display = 'none';
	});
};

export default moreBtn;