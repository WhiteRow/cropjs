/* TODO:
    Сделать возможность вставки урла картинки в img модалки,
    если урла нет - выводить заглушку и открывать проводник.

    Сделать контролы.

    Сделать загрузку изображения - сделал

    Сделать сохранение изображения в баннер, и отдачу данных об редактировании.
*/

import Cropper from 'cropperjs';

function Crop(options) {
	const defaults = {
		root: 'js-crop',
		image: 'js-crop-image',
		url: null,
		viewMode: 3,
		dragMode: 'move',
		modal: false,
		guides: false,
		center: false,
		background: false,
		autoCropArea: 1,
		cropBoxMovable: false,
		cropBoxResizable: false,
		toggleDragModeOnDblclick: false,
		minContainerWidth: 1400, //* давать по дефолту другое значение
		minContainerHeight: 600,
		downloadInput: 'js-crop-download-input',
	};

	options = Object.assign(defaults, options);

	const root = document.querySelector(`.${options.root}`);
	const image = root.querySelector(`.${options.image}`);
	let cropper = new Cropper(image, options);
	const downloadInput = root.querySelector(`.${options.downloadInput}`);

	function downloadImage() {
		const file = this.files[0];
		const fileUrl = window.URL.createObjectURL(file);

		image.src = fileUrl;

		cropRe()
	}

	function cropDestroy() {
		cropper.destroy();
	}

	function cropRe() {
		cropDestroy();
		cropper = new Cropper(image, options);
	}
	
	downloadInput.addEventListener('change', downloadImage);
}

export default Crop;
