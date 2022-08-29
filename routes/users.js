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
    const user = req.body
    users.push(user)
    res.send(`${user.firstname} has been added to the database`)
    console.log(`${user.firstname} has been added to the database`)
})


export default router