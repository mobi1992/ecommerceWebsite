import React from 'react';
import { Button } from 'react-bootstrap';

const Payment = ({checkoutToken, handleCaptureOrder, contactInfo}) => {
    const captureTheOrder = () => {
        const orderData = {
            line_items: checkoutToken.live.line_items,
            phone_no : checkoutToken.extra_fields[0].meta,
            customer: { firstname: contactInfo.firstName, lastname: contactInfo.lastName, email: contactInfo.email },
            shipping: { name: 'National', street: contactInfo.address, town_city: contactInfo.city, county_state: 'PK-PB', postal_zip_code: contactInfo.postalCode, country: contactInfo.country },
            fulfillment: { shipping_method: contactInfo.shippingOption },
            payment: {
                gateway: 'test_gateway',
                card: {
                  number: '4242424242424242',
                  expiry_month: '02',
                  expiry_year: '24',
                  cvc: '123',
                  postal_zip_code: '94107',
                },
            },
          };
    
          handleCaptureOrder(checkoutToken.id, orderData);
    
          console.log('success')
          //nextStep();
    }
    return (
        <>
        <div>Payment</div>
        <Button onClick = {captureTheOrder}>Complete order</Button>
        </>
    )
};

export default Payment;
