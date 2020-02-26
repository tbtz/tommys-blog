(function () {
    'use strict';

    window.addEventListener('DOMContentLoaded', () => {
        document.querySelector('form').addEventListener('submit', event => event.preventDefault());

        initHasContentCheck();
        initInputValidation();
        initSubmitButton();
    });

    function initSubmitButton() {
        document.querySelector('input[type="submit"]').addEventListener('click', (e) => {
            if (isFormValid()) {
                showSuccessMessage(e.target.form);
            }
        });
    }

    function initHasContentCheck() {
        document.querySelectorAll('form input').forEach(hasContentCheck);
        document.querySelectorAll('form textarea').forEach(hasContentCheck);
    }

    function hasContentCheck(el) {
        el.addEventListener('input', (e) => {
            if (e.target.value) {
                el.classList.add('hasContent');
            } else {
                el.classList.remove('hasContent');
            }
        });
    }

    function initInputValidation() {
        const firstNameInput = getElementByName('firstName');
        const lastNameInput = getElementByName('lastName');
        const mailInput = getElementByName('email');
        const telInput = getElementByName('phoneNumber');
        const messageTextArea = getElementByName('message');

        validateInput(firstNameInput, validateName);
        validateInput(lastNameInput, validateName);
        validateInput(mailInput, validateMail);
        validateInput(telInput, validateTel);
        validateInput(messageTextArea, validateMessage);
    }

    function validateInput(element, validationFunc) {
        element.addEventListener('input', e => {
            const valid = validationFunc(e.target.value);
            if (!valid) showInputError(e.target);
            else hideInputError(e.target);
        });
    }

    function isFormValid() {
        const firstNameValue = getElementValueByName('firstName');
        const lastNameValue = getElementValueByName('lastName');
        const mailValue = getElementValueByName('email');
        const telValue = getElementValueByName('phoneNumber');
        const messageValue = getElementValueByName('message');

        return validateName(firstNameValue)
            && validateName(lastNameValue)
            && validateMail(mailValue)
            && validateTel(telValue)
            && validateMessage(messageValue);
    }

    function getElementByName(name) {
        return document.querySelector(`[name="${name}"]`)
    }

    function getElementValueByName(name) {
        return getElementByName(name).value;
    }

    function validateName(value) {
        const name_regex = /^(\D+|\s)$/;
        return value.match(name_regex);
    }

    function validateMail(value) {
        const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return value.match(email_regex);
    }

    function validateTel(value) {
        const telRegex = /^(0|\+49|0049)\d{11}$/; // fixed length of 11 digits after german prefix
        const cleanVal = value.replace(/\s/g, '').replace(/[()]/g, ''); // remove all parentheses and whitespaces
        return cleanVal.match(telRegex);
    }

    function validateMessage(value) {
        const name_regex = /.+/;
        return value.match(name_regex);
    }

    function showSuccessMessage(form) {
        const popupClassList = document.querySelector('form + aside').classList;
        popupClassList.add('slideIn');

        setTimeout(() => resetForm(form), 1000);
        setTimeout(() => popupClassList.remove('slideIn'), 3000);
    }

    function resetForm(form) {
        form.reset();
        form.querySelectorAll('.hasContent')
            .forEach(node => node.classList.remove('hasContent'));
    }

    function showInputError(elem) {
        elem.parentNode.classList.add('inputError');
    }

    function hideInputError(elem) {
        elem.parentNode.classList.remove('inputError');
    }
})();
