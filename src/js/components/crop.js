/* TODO:
    Сделать возможность вставки урла картинки в img модалки,
    если урла нет - выводить заглушку и открывать проводник.

    Сделать контролы.

    Сделать загрузку изображения.

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
		minContainerWidth: 1400,
		minContainerHeight: 600,
	};
	options = Object.assign(defaults, options);
	const root = document.querySelector(`.${options.root}`);
	const image = root.querySelector(`.${options.image}`);
	const cropper = new Cropper(image, options);

	console.log(Cropper);
	console.log(cropper);
}

export default Crop;
