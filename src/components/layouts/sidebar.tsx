import React from 'react';
import { Menu } from 'antd';
import {
    UserOutlined,
    CreditCardOutlined,
    InfoCircleOutlined,
    BarsOutlined,
    CheckCircleOutlined,
  } from '@ant-design/icons';
import { useHistory } from 'react-router';

const { SubMenu } = Menu;

const SideNav = () => {
    const history = useHistory();

    const handleConsumersClick = () => {
        history.push('/consumers');
    }
    const handleBillingInfoClick = () => {
        history.push('/billing');
    }
    const handleTranscationHistoryClick = () => {
        history.push('/transactions');
    }
    const handleSubscriptionUsageClick = () => {
        history.push('/subscriptions');
    }
    return (
        <div>
            <div style={{height: '32px', background: 'rgba(255, 255, 255, 0.2)', margin: 16}}></div>
            <Menu theme='light' mode='inline' defaultSelectedKeys={['1']}>
                <Menu.Item key='1' onClick={handleConsumersClick}>
                    <UserOutlined />
                    <span> Consumers</span>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                        <CreditCardOutlined />
                        <span>Billing</span>
                        </span>
                    }
                    >
                    <Menu.Item key='2' onClick={handleBillingInfoClick}>
                        <InfoCircleOutlined />
                        <span> Billing Information</span>
                    </Menu.Item>
                    <Menu.Item key='3' onClick={handleTranscationHistoryClick}>
                        <BarsOutlined />
                        <span> Transcation History</span>
                    </Menu.Item>
                    <Menu.Item key='4' onClick={handleSubscriptionUsageClick}>
                        <CheckCircleOutlined />
                        <span> Subscription History</span>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    )
}

export default SideNav;