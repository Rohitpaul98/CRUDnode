const express = require('express');
const router = express.Router()
const User = require('./models/user')

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(404).send("Not found")
    }
})
router.post('/register', async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        tech: req.body.tech,
        status: req.body.status
    })

    try {
        const result = await user.save()
        res.json(result)
    } catch (err) {
        res.send(err.message)
    }
})
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch (err) {
        res.status(404).send("Not found")
    }
})

router.patch('/edit/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        user.status = req.body.status
        const result = await user.save()
        res.json(result)
    } catch (err) {
        res.send(err)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        // const user = await User.findById(req.params.id)

        const result = await User.deleteOne({ _id: req.params.id })
        // res.send("Deleted Successfully")
        res.status(200).send("Deleted Successfully")

    } catch (err) {
        res.send(err)
    }
})
module.exports = router