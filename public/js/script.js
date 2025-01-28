document.addEventListener('DOMContentLoaded', (e) => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const firstName = document.getElementsByName("firstname")[0].value.trim()
            const lastName = document.getElementsByName("lastname")[0].value.trim()
            const email = document.getElementsByName("email")[0].value.trim()

            const nameCheck = /^[A-Za-z]+$/
            const nameCheckRus = /^[А-Яа-яЁё]+$/
            const emailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

            const spanFn = document.getElementById("fn")
            const spanLn = document.getElementById("ln")
            const spanEmail = document.getElementById("e-mail")

            spanFn.textContent = "";
            spanLn.textContent = "";
            spanEmail.textContent = "";

            if (firstName === "") {
                spanFn.textContent = "First name cannot be empty!"
                return
            } else if (!firstName.match(nameCheck) && !firstName.match(nameCheckRus)) {
                spanFn.textContent = "First name can only contain alphabetical letters!"
                return
            }

            if (lastName === "") {
                spanLn.textContent = "Last name cannot be empty!"
                return
            } else if (!lastName.match(nameCheck) && !lastName.match(nameCheckRus)) {
                spanLn.textContent = "Last name can only contain alphabetical letters!"
                return
            }

            if (email === "") {
                spanEmail.textContent = "Email cannot be empty!"
                return
            } else if (!email.match(emailCheck)) {
                spanEmail.textContent = "Please, enter a valid email!"
                return
            }

            window.alert("Form submitted successfully!")
            form.submit()
        });
    }


    const btnCv = document.getElementById("download-cv-btn")
    const btnLink = document.getElementById("cv-link")

    btnCv.addEventListener(("click"), (e) => {
    btnLink.click()
    })
})