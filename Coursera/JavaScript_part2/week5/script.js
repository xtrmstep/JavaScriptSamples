'use strict';

// Код валидации формы
var validateForm = (function () {

    function getValidator(validatorType, settings) {
        var isMandatory = Object.keys(settings).indexOf('required') >= 0;
        switch (validatorType) {
            case 'letters':
                return function (text) {
                    if (isMandatory && text == '') return false;
                    if (text === '') return true;
                    
                    var regex = /[A-Za-zА-Яа-я]+/;
                    var match = regex.exec(text);
                    return match == text; // if same, then it's only required text
                };
            case 'number':
                return function (text) {
                    if (isMandatory && text === '') return false;
                    if (text === '') return true;

                    var regex = /^[+-]?\d+([\.\,]\d+)?$/;
                    if (!text.match(regex)) return false;

                    var min = settings.validatorMin ? parseFloat(settings.validatorMin) : -Infinity;
                    var max = settings.validatorMax ? parseFloat(settings.validatorMax) : Infinity;
                    var value = parseFloat(text);
                    return (min <= value) && (value <= max);
                };
            case 'regexp':
                return function (text) {
                    if (isMandatory && text == '') return false;
                    if (text === '') return true;

                    var regex = new RegExp(settings.validatorPattern);
                    var match = regex.exec(text);
                    return match == text;
                };
            default:
                return function () {
                    return true;
                };
        }
    }

    function validateInput(input, styles) {
        var isValid = getValidator(input.dataset.validator, input.dataset);
        if (isValid(input.value)) {
            input.classList.remove(styles.inputErrorClass);
            return true;
        } else {
            if (!input.classList.contains(styles.inputErrorClass))
                input.classList.add(styles.inputErrorClass);
            return false;
        }
    }

    function handlerFormSubmit(styles) {
        var formElem = document.querySelector("#" + styles.formId);
        var formInputs = formElem.querySelectorAll("input");
        var hasError = false;

        formInputs.forEach(input => {
            var isInputNotValid = !validateInput(input, styles);
            // save error flag for form
            if (!hasError && isInputNotValid) {
                hasError = isInputNotValid;
            }
        });

        if (hasError) {
            formElem.classList.remove(styles.formValidClass);
            formElem.classList.add(styles.formInvalidClass);
        } else {
            formElem.classList.remove(styles.formInvalidClass);
            formElem.classList.add(styles.formValidClass);
        }
    }

    return function (args) {
        var formElem = document.querySelector("#" + args.formId);
        var btnSave = formElem.querySelector("button");

        var styles = {
            formId: args.formId,
            formValidClass: args.formValidClass,
            formInvalidClass: args.formInvalidClass,
            inputErrorClass: args.inputErrorClass
        };
        var onSubmit = function (evt) {
            evt.preventDefault();
            handlerFormSubmit(styles);
        };

        var onBlur = function (evt) {
            if (evt.target.tagName === 'INPUT') {
                validateInput(evt.target, styles);
            }
        };

        var onFocus = function (evt) {
            if (evt.target.tagName === 'INPUT') {
                input.classList.remove(args.inputErrorClass);
            }
        };

        btnSave.addEventListener('click', onSubmit);
        formElem.addEventListener('submit', onSubmit);
        formElem.addEventListener('blur', onBlur, true);
        formElem.addEventListener('focus', onFocus);

    };
})();
