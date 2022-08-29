import express from "express"
const router = express.Router()
import {
    v4 as uuidv4
} from 'uuid';


let users = [

]
//route to landing/home page
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

//get single user
router.get("/:id", (req, res) => {

    const id = req.params.id
    res.send(users.find(user => user.id === id))
})

//delete single user
router.delete("/:id", (req, res) => {
    const id = req.params.id
    users = users.filter(user => user.id !== id)
    res.send(users)
})

export default router