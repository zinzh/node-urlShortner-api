const express = require('express')
const router = new express.Router()
const URL = require('../models/url')

router.get('/:id', async (req, res) => {
    
    try {
        const url = await URL.findOne({ shortened: req.params.id })

        if (!url) {
            console.log('not found')
            return res.status(400).send('no url found')
        }
        res.redirect(url.longUrl)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router