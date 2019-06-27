'use strict';

// Код валидации формы
var validateForm = (function () {

    function getValidator(validatorType, dataSet) {
        // return validator
        return function () {
            return true;
        };
    }

    function handlerInputBlur() {

    }

    function handlerFormSubmit(evt, styles) {
        if (evt) {
            evt.preventDefault();
            var formElem = document.querySelector("#" + styles.formId);
            var formInputs = formElem.querySelectorAll("input");
            var hasError = false;

            formInputs.forEach(input => {
                if (!hasError) {
                    var isValid = getValidator(input.dataset.validator, input.dataset);
                    if (isValid(input.value)) {                        
                        hasError = true;
                        if (!input.classList.contains(styles.inputErrorClass))
                            input.classList.add(styles.inputErrorClass);
                    } else {
                        input.classList.remove(styles.inputErrorClass);
                    }
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


        // run validation here
    }

    return function (args) {
        var formElem = document.querySelector("#" + args.formId);
        var btnSave = formElem.querySelector("button");

        // validation --
        // on blur inputs        
        // on submit form

        // remove error class from inputs on focus

        // submit --
        var onSubmit = function (evt) {
            var styles = {
                formId: args.formId,
                formValidClass: args.formValidClass,
                formInvalidClass: args.formInvalidClass,
                inputErrorClass: args.inputErrorClass
            };
            handlerFormSubmit(evt, styles);
        };

        formElem.addEventListener('submit', onSubmit);
        btnSave.addEventListener('click', onSubmit);

    };
})();
