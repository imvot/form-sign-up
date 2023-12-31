function checkPasswords() {
    const empty = !pw.value || !pwConf.value
    const equal = pw.value == pwConf.value
    return (empty || equal);
}

function toggleInvalidClass() {
    const passwordsValid = checkPasswords();
    if(passwordsValid) {
        pw.classList.remove("invalid");
        pwConf.classList.remove("invalid");
    } else {
        pw.classList.add("invalid");
        pwConf.classList.add("invalid");
    }
}

const 
    form = document.querySelector(".form"),
    pw = document.querySelector(".form-input[name=password]"),
    pwConf = document.querySelector(".form-input[name=password-confirmation]");

form.noValidate = true;
form.addEventListener("submit", e => {
    if(!(form.checkValidity() && checkPasswords())) {
        e.preventDefault();
        [...form.elements].forEach(input => {
            if(input.checkValidity()) {
                input.classList.remove("invalid");
            } else {
                input.classList.add("invalid");
            }
        })
    }
});

pw.addEventListener("input", toggleInvalidClass);
pwConf.addEventListener("input", toggleInvalidClass);
