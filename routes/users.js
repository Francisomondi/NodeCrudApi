import express from "express"


const router = express.Router()

const users = [{
        firstname: "Francis",
        lastname: "Odero",
        age: 28
    },
    {
        firstname: "Geremiah",
        lastname: "Kaloki",
        age: 37
    }

]

router.get("/", (req, res) => {
    console.log(users)
    res.send(users)
})

//post users to the database

router.post("/", (req, res) => {
    console.log("POST request made")
    res.send("posts data to the db")
})


export default router