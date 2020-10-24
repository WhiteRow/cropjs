import Cropper from 'cropperjs';

function Crop(options) {
    const defaults = {
        root: 'js-crop',
        url: null,
    };
    const Options =  Object.assign(defaults, options);

    console.log(Options);
    console.log(Cropper);

}

export default Crop;
