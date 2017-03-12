function createCheckbox() {
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	return checkbox;
}

function calculateCheckboxLength(container) {
	const firstCheckbox = container.appendChild(createCheckbox());
	const checkboxStyles = getComputedStyle(firstCheckbox);
	const checkboxSize = {};
	checkboxSize.width  = parseInt(checkboxStyles.width) + parseInt(checkboxStyles.marginLeft) + parseInt(checkboxStyles.marginRight);
	checkboxSize.height = parseInt(checkboxStyles.height) + parseInt(checkboxStyles.marginTop) + parseInt(checkboxStyles.marginBottom);
	firstCheckbox.remove();
	console.log(checkboxSize);

	const containerStyles = getComputedStyle(container);
	const canvasSize = {};
	canvasSize.width = parseInt(containerStyles.width) - (parseInt(containerStyles.paddingLeft) + parseInt(containerStyles.paddingRight));
	canvasSize.height = parseInt(containerStyles.height) - (parseInt(containerStyles.paddingTop) + parseInt(containerStyles.paddingBottom));
	console.log(canvasSize);

	return Math.floor(canvasSize.width / checkboxSize.width) * Math.floor(canvasSize.height / checkboxSize.height);
}

document.querySelector('main').addEventListener('mousemove', e => {
	if (e.which || e.buttons) {
		if (e.target.nodeName.toLowerCase() === 'input') {
			e.target.checked = true;
		}
	}
});

window.addEventListener('resize', e => {
	console.log(e);
});

const checkboxContainer = document.querySelector('main');
const checkboxLength = calculateCheckboxLength(checkboxContainer);
buildGrid(checkboxLength);
console.log(checkboxLength);

function buildGrid(checkboxLength) {
	for (let i = 0; i < checkboxLength; i++) {
		checkboxContainer.appendChild(createCheckbox());
	}
}

