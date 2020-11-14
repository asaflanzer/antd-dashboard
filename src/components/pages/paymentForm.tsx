import React, { useState } from 'react';
import { Input, Form, Button } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router';
import './paymentForm.css';
import { 
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    injectStripe,
    CardElement } from 'react-stripe-elements';


const createOptions = () => {
    return {
        style: {
        base: {
            '::placeholder': {
                color: "#cfd7df", textTransform: "capitalize"
            },
            ':disabled': {
                color: "#cfd7df"
            }
        },
        invalid: {
            color: '#c23d4b',
        },
        },
    };
};

const SplitFieldsForm = () => {

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const history = useHistory();

    const handleChange = () => {
        // if (error) {
        //   this.setState({errorMessage: error.message});
        // }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // if (this.props.stripe) {
        //     this.props.stripe.createToken().then(this.props.handleResult);
        // } else {
        //     console.log("Stripe.js hasn't loaded yet.");
        // }
        axios.post("http://localhost:3000/my-endpoint/", {amount: 1500, cardType: "card"})
        .then(res => {

        })
        .catch(error => {

        });
    }

    return (
        <div>
            <Form>
                <Input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="ant-input StripeElement"
                    required />
                <CardNumberElement
                    {...createOptions()}
                    className='ant-input StripeElement'
                    onChange={handleChange}
                    placeholder="Card Number" />
                <div className='split-form' style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Form.Item style={{ display: 'inline-block', width: 'calc(32% - 8px)' }}>
                        <CardExpiryElement
                            {...createOptions()}
                            className='ant-input StripeElement'
                            onChange={handleChange}
                            placeholder="MM/YY" />
                    </Form.Item>
                    <Form.Item style={{ display: 'inline-block', width: 'calc(32% - 8px)' }}>
                        <CardCVCElement
                            {...createOptions()}
                            className='ant-input StripeElement'
                            onChange={handleChange}
                            placeholder="CVC" />
                    </Form.Item>
                    <Form.Item style={{ display: 'inline-block', width: 'calc(32% - 8px)' }}>
                        <Input
                            name="zipcode"
                            type="text"
                            placeholder="ZIP"
                            className="ant-input StripeElement"
                            required />
                    </Form.Item>
                </div>
                <div className="error" role="alert">
                    {errorMessage}
                </div>
                <Button type='primary' loading={loading} onClick={handleSubmit}>
                    Save
                </Button>{' '}
                <Button style={{marginLeft: 10}} type='default' htmlType='button' onClick={() => history.push('/consumers')}>
                    Cancel
                </Button>
            </Form>
        </div>
    )
}

const PaymentForm = injectStripe(SplitFieldsForm);

export default PaymentForm;
