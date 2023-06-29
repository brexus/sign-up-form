
// Media Query (max-width: 1000px)

const mediaQuery = window.matchMedia("(max-width: 1000px)");

if (mediaQuery.matches) {
    document.getElementById("form-col-left").classList.remove("mb-25");
}



// Validation

const form = document.getElementById('form');

const firstName = document.getElementById('f-name');
const lastName = document.getElementById('l-name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone-number');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('c-password');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});


function checkInputs() {
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let phoneNumberValue = phoneNumber.value.trim();
    let passwordValue = password.value.trim();
    let confirmPasswordValue = confirmPassword.value.trim();

    
    // First name
    if (firstNameValue === "" || firstNameValue == null) {
        setErrorFor(firstName, 'First name cannot be blank');
    } else {
        setSuccessFor(firstName);
    }

    // Last name
    if (lastNameValue === "" || lastNameValue == null) {
        setErrorFor(lastName, 'Last name cannot be blank');
    } else {
        setSuccessFor(lastName);
    }

    // Email
    if (emailValue === "" || emailValue == null) {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    // Phone Number
    if (phoneNumberValue === "" || phoneNumberValue == null) {
        setErrorFor(phoneNumber, 'Phone number cannot be blank');
    } else if (!isNumber(phoneNumberValue)) {
        setErrorFor(phoneNumber, 'Not a valid phone number');
    } else {
        setSuccessFor(phoneNumber);
    }

    // Password
    if (passwordValue === "" || passwordValue == null) {
        setErrorFor(password, 'Password cannot be blank');
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Password must have minimum 8 characters');
    } else {
        setSuccessFor(password);
    }

    // Confirm Password
    if (confirmPasswordValue === "" || confirmPasswordValue == null) {
        setErrorFor(confirmPassword, 'Confirm password cannot be blank');
    } else if (confirmPassword.value.length < 8) {
        setErrorFor(confirmPassword, 'Confirm password must have minimum 8 characters');
    } else {
        setSuccessFor(confirmPassword);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.error-message');

    errorMessage.innerText = message;
    formControl.className = "input-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.error-message');

    errorMessage.innerText = '';
    formControl.className = "input-control success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isNumber(number) {
	return /[0-9][0-9][0-9] [0-9][0-9][0-9] [0-9][0-9][0-9]/.test(number);
}