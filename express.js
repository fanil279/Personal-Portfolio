const express = require("express")
const path = require("path")
const fs = require("fs")
const body_parser = require("body-parser")
const port = process.env.PORT || 8000

const app = express()

app.use(body_parser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/html", "index.html"))
})

app.use(express.static(path.join(__dirname, "public")))

app.post("/message", (req, res) => {
   try {
        let firstname = req.body.firstname; let lastname = req.body.lastname; let email = req.body.email; let textarea = req.body.textarea;

        // Server-side form validation
        let errors = {}

        const nameCheck = /^[A-Za-z]+$/;
        const nameCheckRus = /^[А-Яа-яЁё]+$/;
        const emailCheck = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

        if (!firstname || firstname.trim() === "") {
            errors.firstname = "First name cannot be empty!"
        } else if (!nameCheck.test(firstname) && !nameCheckRus.test(firstname)) {
            errors.firstname = "First name can only contain alphabetical letters!"
        }

        if (!lastname || lastname.trim() === "") {
            errors.lastname = "Last name cannot be empty!"
        } else if (!nameCheck.test(lastname) && !nameCheckRus.test(lastname)) {
            errors.lastname = "Last name can only contain alphabetical letters!"
        }

        if (!email || email.trim() === "") {
            errors.email = "Email cannot be empty!"
        } else if (!emailCheck.test(email)) {
            errors.email = "Please enter a valid email!"
        }

        if (!textarea || textarea.trim() === "") {
            errors.textarea = "Message cannot be empty!"
        } else if (textarea.length < 5) {
            errors.textarea = "Message must be at least 5 characters long!"
        }

        // If there are validation errors, return them
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ success: false, errors })
        }

        let message = `Message from ${firstname} ${lastname}: ${textarea}   ${firstname}'s email is: ${email}`
        fs.appendFileSync("messages.txt", message)

        res.redirect("/")
    } catch (error) {
        console.error("Error handling /message request:", error)
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
})

app.listen(port, () => {
    console.log(`Server is running on host: http://localhost:${port}`)
})