'use strict';

// Код валидации формы
var validateForm = (function () {

    function getValidator(validatorType, validatorParameters) {
        // return validator
    }

    function handlerInputBlur() {

    }

    function handlerFormSubmit() {

    }

    function formSubmit(evt) {
        if(evt){
            evt.preventDefault();
        }
        console.log('form submit');

        // run validation here
    }

    return function (args) {
        var formId = args.formId;
        var formValidClass = args.formValidClass;
        var formInvalidClass = args.formInvalidClass;
        var inputErrorClass = args.inputErrorClass;

        var formElem = document.querySelector("#" + formId);
        var formInputs = formElem.querySelectorAll("input");
        var btnSave = formElem.querySelector("button");

        // validation --
        // on blur inputs        
        // on submit form

        // remove error class from inputs on focus

        // submit --
        formElem.addEventListener('submit', formSubmit);
        btnSave.addEventListener('click', function(evt){
            evt.preventDefault();        
            formSubmit();
        });       
        // enter on input
        // click on Save button

    };
})();
