import React, { useState, useEffect, Fragment } from 'react';
import { Table, Row, Col, Button, Typography, Empty, Tag } from 'antd';
import { useHistory } from 'react-router';
import axios from 'axios';

const { Title } = Typography;

interface User {
    id: number;
    username: string;
    email: string;
    gender: string;
    hobbies: string[];
    review: number;
    notification: boolean;
}

const Consumers = () => {
    const history = useHistory();
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/users`)
        .then(res => {
            setAllData(res.data);
            setLoading(false);
        });
    });

    const columns = [
        {
            title: 'Username',
            key: 'username',
            dataIndex: 'username',
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email'
        },
        {
            title: 'Gender',
            key: 'gender',
            dataIndex: 'gender'
        },
        {
            title: 'Hobbies',
            key: 'hobbies',
            dataIndex: 'hobbies',
            render: (hobbies: any[]) => (
                <Fragment>
                  { hobbies !== undefined && hobbies.map((tag) => {
                    let color = tag.length <= 6 ? 'geekblue' : 'green';
                    if (tag === 'singing') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </ Fragment>
            ),
        },
        {
            title: 'Review',
            key: 'review',
            dataIndex: 'review'
        },
    ];     

    const data = [{}];

    allData.map((user: User) => {
        data.push({
            id: user.id,
            username: user.username,
            email: user.email,
            gender: user.gender,
            hobbies: user.hobbies,
            review: user.review + '%'
        })
        return data;
    });

    const handleClick = () => {
        history.push('/form');
    }

    const handleTableChange = () => {

    }

    return (
        <div>
            <Row gutter={[40,0]}>
                <Col span={18}>
                    <Title level={2}>
                        Consumers
                    </Title>
                </Col>
                <Col span={6}>
                    <Button onClick={handleClick} block>Add Consumer</Button>
                </Col>
            </Row>
            <Row gutter={[40,0]}>
                <Col span={24}>
                    <Table 
                    locale={{ emptyText: <Empty /> }}
                    columns={columns}
                    loading={loading}
                    rowKey='id'
                    dataSource={data}
                    onChange={handleTableChange} />
                </Col>
            </Row>
        </div>
    )
}

export default Consumers;
