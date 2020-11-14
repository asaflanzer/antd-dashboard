import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Elements, StripeProvider } from "react-stripe-elements";
import PaymentForm from './paymentForm';

const { Title } = Typography;

const BillingInfo = () => {
    return (
        <div>
            <Row>
                <Col span={8}>
                    <Title style={{textAlign: 'left'}} level={3}>
                        Billing Information
                    </Title>
                    <StripeProvider apiKey="pk_test_12345">
                        <Elements>
                            <PaymentForm />
                        </Elements>
                    </StripeProvider>
                </Col>
            </Row>
        </div>
    )
}

export default BillingInfo;
