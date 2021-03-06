import React from 'react';
import Head from 'next/head'
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const Login = () => {
    return (
        <>
        <Head>
            <title> 로그인 | Kdjsystem.   </title>
        </Head>

        <AppLayout>
            <Tabs defaultActiveKey="99" centered>
                <TabPane tab="개인" key="1">
                    <LoginForm LoginType={99}></LoginForm>
                </TabPane>
                <TabPane tab="사업자" key="2">
                    <LoginForm LoginType={0}></LoginForm>
                </TabPane>
            </Tabs>
        </AppLayout>
    </>
    );
};

export default Login;