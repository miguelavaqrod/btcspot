require('dotenv').config();
const express = require('express');
const { btcSpot } = require('./btcspot');

const app = express();

app.get('/api', function (req, res) {
    res.json({
        name: 'BTCSpot',
        current: '1.0',
        description: 'BTC Spot Price from Binance API',
    });
});

app.get('/api/v1/btc', function (req, res) {
    res.json(btcSpot());
});

app.listen(process.env.PORT, () => {
    console.log(`Server running - port ${process.env.PORT}`);
});