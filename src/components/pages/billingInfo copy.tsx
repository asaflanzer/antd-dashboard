import React, { useState } from 'react';
import { Row, Col, Typography, Input, Form, Button, Radio,
Switch, Slider, Select, message } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router';

const { Title } = Typography;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
};

const BillingInfo = () => {
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (values: any) => {
        setLoading(true);
        axios.post(`http://localhost:5000/users`, values)
        .then(res => {
            setLoading(false);
            message.success('User added successfully');
            history.push('/list');
        })
        .catch(error => {
            setLoading(false);
            message.error(error);
        });
    };

    return (
        <div>
            <Row gutter={[40, 0]}>
                <Col span={23}>
                    <Title style={{textAlign: 'center'}} level={2}>
                        Give us some info first!
                    </Title>
                </Col>
            </Row>
            <Row gutter={[40, 0]}>
                <Col span={18}>
                    <Form {...layout} onFinish={handleSubmit}>
                        <Form.Item name='username' label='Username' 
                            rules={[
                                {
                                    required: true,
                                    message: 'Oops, you got to have a username',
                                }
                            ]}>
                            <Input placeholder='Please enter your username' />
                        </Form.Item>
                        <Form.Item name='email' label='Email'
                            rules={[
                                {
                                    required: true,
                                    message: 'Oops, Email is a must!'
                                }
                            ]}>
                            <Input placeholder='Please enter your email' />
                        </Form.Item>
                        <Form.Item name='gender' label='Gender'
                            rules={[
                                {
                                    required: true,
                                    message: 'Its about who you are, not what'
                                }
                            ]}>
                            <Radio.Group>
                                <Radio value='male'>Male</Radio>
                                <Radio value='female'>Female</Radio>
                                <Radio value='other'>Non Gender</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name='hobbies' label='Hobbies'
                            rules={[
                                {
                                    required: true,
                                    message: 'No hobby? Really?!'
                                }
                            ]}>
                            <Select mode='multiple' placeholder='Please select your hobbies'>
                                <Select.Option value='Coding'>Coding</Select.Option>
                                <Select.Option value='volleyball'>Volleyball</Select.Option>
                                <Select.Option value='reading'>Reading</Select.Option>
                                <Select.Option value='singing'>Singing</Select.Option>
                                <Select.Option value='coffee'>Coffee</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name='review' label='Review'>
                            <Slider />
                        </Form.Item>
                        <Form.Item name='notification' label='Notification' valuePropName='checked'>
                            <Switch />
                        </Form.Item>
                        <div style={{textAlign: 'right'}}>
                            <Button type='primary' loading={loading} htmlType='submit'>
                                All done
                            </Button>{' '}
                            <Button type='default' htmlType='button' onClick={() => history.push('/list')}>
                                Go back
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default BillingInfo;
