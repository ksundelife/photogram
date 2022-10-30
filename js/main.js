import './miniature.js';
import './upload-img.js';
import './upload-validation.js';
import './scale-upload-img.js';
import './effects.js';
import './message.js';
import { showFilteredPictures } from './filters.js';
import { closeModal, resetUploadImgFormData } from './upload-img.js';
import { setUserFormSubmit } from './upload-validation.js';
import { renderArrPhotoContentData } from './miniature.js';
import { getData } from './api.js';
import { showMessageGetDataError } from './message.js';

const resetUploadImgFormDataBeforeSuccess = () => {
  closeModal();
  resetUploadImgFormData();
};

showMessageGetDataError();
getData(
  (photo) => {
    document.querySelector('.img-upload__message--loading').classList.add('hidden');
    renderArrPhotoContentData(photo);
    showFilteredPictures(photo);
  },
  () => {
    showMessageGetDataError();
  }
);

setUserFormSubmit(resetUploadImgFormDataBeforeSuccess, closeModal);
