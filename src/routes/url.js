const express = require('express')
const { nanoid } = require('nanoid')
const validUrl = require('valid-url')
const router = new express.Router()
const Url = require('../models/url')


const baseUrl = 'http:localhost:5000'


router.post('/shorten', async (req, res) => {

    const generated = nanoid(10);
    //console.log(generated)

    

    if(validUrl.isUri(req.body.longUrl)) {
        
        try {
            let url = await Url.findOne({longUrl: req.body.longUrl});
            
            if(url) {
                console.log('hi')
                res.send(url);
                   
            } else{
               
                url = new Url({
                    shortened:generated,
                    longUrl: req.body.longUrl,
                    shortUrl: baseUrl + '/' + generated
                    //date: new Date()
                })

                

                await url.save()
                res.send(url)
            }
            

        } catch(e) { 
            res.status(500).send(e)
        }
    } else{
        res.send('invalid url')
    }
})

module.exports = router



