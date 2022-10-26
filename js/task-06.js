const inputEl = document.querySelector('#validation-input');

function onInputBlur(event) {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');

    event.currentTarget.value.length == inputEl.dataset.length ? inputEl.classList.add('valid') : inputEl.classList.add('invalid');
    
    return inputEl;
}

inputEl.addEventListener('blur', onInputBlur);