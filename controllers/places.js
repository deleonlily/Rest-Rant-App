// const { appendFile } = require('fs')

const router = require('express').Router()
const places = require("../models/places")

router.get('/new', (req, res) => {
    res.render('places/new')
})


module.exports = router
