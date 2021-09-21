const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`)

    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
    errorElement.classList.add(inputErrorClass);
};

const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {

    const errorElement = formElement.querySelector(`#${inputElement.id}-error`)

    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
    errorElement.classList.remove(inputErrorClass);

};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    const hasNotValidInput = inputList.some((inputElement) => !inputElement.validity.valid);

    if (hasNotValidInput) {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add(inactiveButtonClass);
    } else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove(inactiveButtonClass);
    }

};

const chekInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    const isInputElementValid = !inputElement.validity.valid;

    if (isInputElementValid) {
        const errorMessage = inputElement.validationMessage;

        showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass);
    } else {
        hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
};

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    if (buttonElement === null) {
        return;
    }

    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', (event) => {
            chekInputValidity(formElement, inputElement, inputErrorClass, errorClass);
            toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        });
    });

    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
};

const updateButtonState = (formElement, { inputSelector, submitButtonSelector, inactiveButtonClass }) => {

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    if (buttonElement === null) {
        return;
    }


    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
};

const hideInputErrors = (formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) => {

    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);

    if (buttonElement === null) {
        return;
    }

    inputList.forEach(inputElement => {
        hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    });


    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
};

const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) => {
    const formList = Array.from(document.querySelectorAll(formSelector));

    formList.forEach((formElement) => {
        setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass)
    });
};

enableValidation(getClassForm);
