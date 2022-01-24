import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KLBfuCDbdLzt8pn8EtnBrMBoyefqof55W9rXqfRTYDh81slxHolV78P3k5I2qgbItXHG8e8BmXORw1LMT1subsK00PfcXB0JM';

        const onToken = token => {console.log(token);
        alert("Payment Successful");
            }
    return(
        <StripeCheckout 
            label='Pay Now'
            name="CROWN Clothing Ltd."
            billingAddress
            shippingAddress
            
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;