const express = require('express');
const Item = require('../models/Item');
const Auth = require('../middleware/auth');

const router = new express.Router();

//nieuwe item maken
router.post('/items', Auth, async(req, res) => {
    try {
        const newItem = new Item({
            ...req.body,
            owner: req.user._Id
        });
        await newItem.save();
        res.status(201).send(newItem);
    }catch (error) {
        res.status(400).send({message: "error"});
    }
})

//item fetchen
router.get('/items/:id', async(req, res) => {
    try {
        const item = await Item.findOne({_id: req.params.id});
        if(!item) {
            res.status(404).send({error: 'Item not found'});
        }
        res.status(200).send(item);
    }catch(error) {
        res.status(400).send(error);
    }
})

//alle items fetchen
router.get('/items', async(req, res) => {
    try {
        const items = Item.find({});
        res.status(200).send(items);
    }catch(error) {
        res.status(400).send(error);
    }
})