const formEl = document.querySelector('.login-form');

function onFormSubmit(event) {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert('All fields must be filled :)');
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        }
        console.log(formData);
    }

    event.currentTarget.reset();
}

formEl.addEventListener('submit', onFormSubmit);