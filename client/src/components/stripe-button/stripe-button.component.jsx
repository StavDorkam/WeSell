import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const pubKey = 'pk_test_PgSMLGBCnNkt4FXEAxU7RKHV00ipTvEkUz';

    const onToken = token => {
        axios({
            url: '/payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then(res => {
            alert('Payment successful')
        }).catch(err => {
            console.log('Payment Error', err)
            alert('There was an issue with your payment. Please use the provided test credit card') 
        })
    }

    return (
        <StripeCheckout 
            label="Pay Now"
            name="WeSell Inc."
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={pubKey}
        />
    )
}

export default StripeCheckoutButton