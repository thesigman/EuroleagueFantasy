const express = require('express');
const router = express.Router();

router.get('/get_all_players', (req, res) => {
    //To be implemented: fetch players from api 
    res.status(200).json('Players home page');
});

router.get('/get_player/:id', (req, res) => {
    res.status(200).send(`Player ID: ${req.params.id}`);
});

module.exports = router;
