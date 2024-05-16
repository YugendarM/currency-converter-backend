const express = require("express")
const app = express()
const PORT = 3500

app.get("/api/v1/", (request, response) => {
    response.status(200).send({message: "Server running"})
})

app.listen(PORT, () => {
    console.log("Server running");
})