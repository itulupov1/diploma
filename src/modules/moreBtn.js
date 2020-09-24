const moreBtn = () => {
	const block = document.querySelector('.sentence');
	const oneItem = block.querySelectorAll('.col-xs-12');
	const addMore = document.querySelector('.add-sentence-btn');

	addMore.addEventListener('click', event => {
		const target =event.target;

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