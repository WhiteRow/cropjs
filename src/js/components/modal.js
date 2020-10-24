import { MDCDialog } from '@material/dialog';

const options = {
	open: '.js-open-modal',
	target: 'data-target',
};

function Modal() {
	const buttons = document.querySelectorAll(options.open);

	const createDialog = function (button) {
        const target = button.getAttribute(options.target)
        const dialog = new MDCDialog(document.querySelector(`.${target}`));

        return dialog
	};

	const bind = function (button) {
		button.addEventListener('click', function () {
            const dialog = createDialog(this);

            dialog.open();
        });
	};

	buttons.forEach((button) => bind(button));
}

export default Modal;
