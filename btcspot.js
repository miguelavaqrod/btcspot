const { WebsocketClient } = require('binance');
const wsClient = new WebsocketClient();

let spotObj = {
    symbol: 'BTCUSDT',
    price: '',
    timestamp: 0,
};

// notification when a connection is opened
wsClient.on('open', (data) => {
    console.log('ws connection opened:', data.wsKey, data.ws.target.url);

    wsClient.on('reconnecting', (data) => {
        console.log('ws reconnecting.... ', data?.wsKey );
    });

    wsClient.on('reconnected', (data) => {
        console.log('ws reconnected ', data?.wsKey );
    });

    wsClient.on('message', (data) => {
        spotObj = { ...spotObj, price: data.c, timestamp: data.E };
    });

});

wsClient.subscribeSpotSymbol24hrTicker(spotObj.symbol);

exports.btcSpot = () => spotObj;