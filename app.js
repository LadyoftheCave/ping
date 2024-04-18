const input = document.querySelector('#email');
const validation = document.querySelector('.valid_email')
const form = document.querySelector('form');

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

input.addEventListener('input', (e) => {
    let inputValue = input.value;

    e.preventDefault();
    if(validateEmail(inputValue)) {
        validation.innerText = "Valid email address";
        input.style.border = "1px solid green";
        validation.style.color = "green";
    } else {
        validation.innerText = "Provide a valid email address";
        input.style.border = "1px solid red";
        validation.style.color = "red";
    }
    console.log(inputValue);
})
