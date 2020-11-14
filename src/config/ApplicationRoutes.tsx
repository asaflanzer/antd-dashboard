import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// Pages
import Consumers from "../components/pages/consumers";
import BillingInfo from "../components/pages/billingInfo";
import TransactionsHistory from "../components/pages/transactionHistory";
import SubscriptionsUsage from "../components/pages/billingInfo";
// Layouts
import SideNav from "../components/layouts/sidebar";
// Design
import { Layout, PageHeader } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';

  const { Header, Sider, Content} = Layout;

const ApplicationRoutes = () => {
    const [collapse, setCollapse] = useState(false);

    useEffect(() => {
        window.innerWidth <= 760 ? setCollapse(true) : setCollapse(false);
    }, []);

    const handleToggle = (event: any) => {
        event.preventDefault();
        collapse ? setCollapse(false) : setCollapse(true);
    }

    return (
        <Router>
            <Layout>
                <Sider width={250} trigger={null} collapsible collapsed={collapse} style={{background: '#fff'}}>
                    <PageHeader
                        className="site-page-header"
                        title="BillingTeam"
                        subTitle="Dev"
                    />
                    <SideNav />
                </Sider>
                <Layout>
                    <Header className='siteLayoutBackground' style={{padding: 0, background: '#fff', borderBottom: '1px solid #d9d9d9'}}>
                        {React.createElement(collapse ? MenuUnfoldOutlined: MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: handleToggle,
                            style: {color: '#001529'},
                        })}
                    </Header>
                    <Content style={{margin: '0px', padding: '24px 24px 24px 36px', minHeight: 'calc(100vh-114px)', background: '#fff'}}>
                        <Switch>
                            <Route path='/consumers' component={Consumers} />
                            <Route path='/billing' component={BillingInfo} />
                            <Route path='/transactions' component={TransactionsHistory} />
                            <Route path='/subscriptions' component={SubscriptionsUsage} />
                            <Redirect to='/consumers' from='/' />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    )

}

export default ApplicationRoutes;