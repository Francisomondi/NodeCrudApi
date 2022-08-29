import express from "express"
const router = express.Router()
import {
    v4 as uuidv4
} from 'uuid';


const users = [

]

router.get("/", (req, res) => {
    console.log(users)
    res.send(users)
})

//post users to the database

router.post("/", (req, res) => {
    const user = req.body

    users.push({
        ...user,
        id: uuidv4()
    })
    res.send(`${user.firstname} has been added to the database`)

})


router.get("/:id", (req, res) => {

    const id = req.params.id
    const singleUser = users.find((user) => user.id === id)
    res.send(singleUser)
})

export default router