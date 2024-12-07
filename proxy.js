
const express = require('express');
const request = require('request');
const app = express();

app.use((req, res, next) => {
    // Autoriser l'accès depuis tous les domaines ou un domaine spécifique
    res.setHeader('Access-Control-Allow-Origin', '*'); // Utilisez '*' pour autoriser tous les domaines
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Méthodes autorisées
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/proxy', (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send('URL manquante.');
    }

    // Relayer le flux audio via le proxy
    request(url)
        .on('error', (err) => {
            console.error('Erreur lors de la requête proxy :', err);
            res.status(500).send('Erreur lors de la requête proxy.');
        })
        .pipe(res);
});

const PORT = process.env.PORT || 10000; // Utilisez le port fourni par Render
app.listen(PORT, () => {
    console.log(`Proxy en cours d'exécution sur http://localhost:${PORT}`);
});
