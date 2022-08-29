import express from "express"


const router = express.Router()

const users = [{
        firstname: "Francis",
        lastname: "Odero",
        age: 28
    }

]

router.get("/", (req, res) => {
    console.log(users)
    res.send(users)
})


export default router