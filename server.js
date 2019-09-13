const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

if (process.env.NODE_ENV !== 'production') dotenv.config({path: '.env'});

const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const port = process.env.PORT || 5000;




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode and listening to port ${port}`)
})

app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };
    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) res.status(500).send({error: stripeErr})
        else res.status(200).send({success: stripeRes})
    })
})