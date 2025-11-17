const express = require('express');
const xml2js = require('xml2js');

const router = express.Router();

router.get('/get_all_players', async (req, res) => {
    try {
        const euroleague_clubs = await fetch('https://api-live.euroleague.net/v1/teams?seasonCode=E2025')
            .then(r => r.text());

        const parser = new xml2js.Parser({ explicitArray: false, mergeAttrs: true });

        const parsed = await parser.parseStringPromise(euroleague_clubs);

        const clubs = parsed?.clubs?.club;
        if (!clubs || !Array.isArray(clubs)) {
            return res.status(400).send("Invalid clubs data from Euroleague API");
        }

        const players = [];

        for (const club of clubs) {
            const roster = club?.roster?.player;

            for (const player of roster) {
                players.push({
                    code: player?.code,
                    club: club?.name,
                    clubalias: club?.clubalias,
                    first_name: player?.name.split(", ")[1],
                    last_name: player?.name.split(", ")[0],
                    position: player?.position,
                    country: player?.countrycode,
                });
            }
        }

        //console.log(players);

        return res.status(200).json(players);

    } catch (err) {
        console.error("Error processing request:", err.message);
        return res.status(500).send("Internal server error");
    }
});

router.get('/get_player/:id', (req, res) => {
    res.status(200).send(`Player ID: ${req.params.id}`);
});

module.exports = router;
