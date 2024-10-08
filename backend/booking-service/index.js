require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5002;

const originURL = process.env.ORIGIN_URL;

app.use(bodyParser.json());

app.use(cors({
    origin: `${originURL}`,  // 프론트엔드가 실행 중인 주소
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

const bookingRoutes = require('./routes/bookingRoutes');

app.use('/booking', bookingRoutes);

app.get('/health', (req, res) => {
    res.status(200).send('Healthy');
});


app.listen(PORT, () => {
    console.log(` A~~~ Booking service running on port ${PORT}`);
});
