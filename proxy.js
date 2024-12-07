const express = require('express');
const request = require('request');
const app = express();

app.get('/proxy', (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send('URL manquante.');
    }
    request(url).pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy en cours d'exécution sur:${PORT}`);
});
