const express = require("express")
const path = require("path")
const fs = require("fs")
const body_parser = require("body-parser")

const app = express()

app.use(body_parser.urlencoded({
    extended: true
}))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/html", "index.html"))
})

app.use(express.static(path.join(__dirname, "public")))

app.post("/message", (req, res) => {
   try {
    let firstname = req.body.firstname; let lastname = req.body.lastname; let email = req.body.email; let textarea = req.body.textarea;
    let message = `Message from ${firstname} ${lastname}: ${textarea}   ${firstname}'s email is: ${email}`

    fs.appendFileSync("messages.txt", message)
    res.redirect("/")
   } catch (error) {
    console.error("Error handling /message request:", error)
    res.status(500).send("Internal Server Error")
   }
})

app.listen(3000, () => {
    console.log("Server is running on host 3000: http://localhost:3000")
})