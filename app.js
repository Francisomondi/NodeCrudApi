import express from "express"
import usersRoute from "./routes/users.js"
import bodyParser from "body-parser"

const app = express()
const port = 5000

app.use(bodyParser.json())

app.use("/users", usersRoute)

app.get("/", (req, res) => {
    res.send("this isn the home page")
})

app.listen(port, () =>
    console.log(`Server started running on port: http://localhost:${5000}`))