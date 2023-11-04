const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, './src/build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './src/build/index.html'));
});

const FRONTEND_PORT = process.env.FRONTEND_PORT || 3001; // Change the port here

app.listen(FRONTEND_PORT, () => {
    console.log(`Frontend is running on port ${FRONTEND_PORT}`);
});

const BACKEND_PORT = process.env.PORT || 3000;

app.listen(BACKEND_PORT, () => {
    console.log(`Backend is running on port ${BACKEND_PORT}`);
});
