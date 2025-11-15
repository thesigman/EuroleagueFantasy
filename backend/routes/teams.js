const express = require('express');
const router = express.Router();

//Temporary hardcoded players data, to be replaced with db data
const players = [
    { teamid: 1, id: 1, name: 'Player One' },
    { teamid: 1, id: 2, name: 'Player Two' },
    { teamid: 1, id: 3, name: 'Player Three' },
    { teamid: 1, id: 4, name: 'Player Four' },
    { teamid: 2, id: 5, name: 'Player Five' },
    { teamid: 2, id: 6, name: 'Player Six' },
    { teamid: 2, id: 7, name: 'Player Seven' },
    { teamid: 2, id: 8, name: 'Player Eight' },
];

router.get('/get_players/:teamid', (req, res) => {
    const teamId = parseInt(req.params.teamid);

    if (isNaN(teamId)) {
        return res.status(400).send('Invalid or missing team ID');
    }

    const teamPlayers = players.filter(p => p.teamid === teamId);

    return res.status(200).json(teamPlayers);
});

module.exports = router;
