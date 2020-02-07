export const setCustomValidateMessage = (errorDoc, errorClass, errorMessage) => {
  errorDoc.getElementsByName(errorClass)[0].setCustomValidity(errorMessage);
  errorDoc.getElementsByName(errorClass)[0].reportValidity();
};
