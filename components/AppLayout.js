import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Menu, Layout, Breadcrumb, Row, Col } from 'antd'

import LoginForm from './LoginForm'
import UserProfile from './UserProfile'
import styled from 'styled-components';

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
    const [isLogin, setLoing] = useState(false);

    const FooterWrapper = styled(Footer)`
        text-align:center
    `;

    return (
        <Layout className="layout">
            <Header>
                <Menu mode="horizontal">
                    <Menu.Item>
                        <Link href="/"><a>Mllink</a></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/about"><a>회사소개</a></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/signup"><a> 회원가입 </a></Link>
                    </Menu.Item>
                    <Menu.Item>
                        {isLogin ?  <Link href="/login"><a> 로그아웃 </a></Link> : <Link href="/login"><a> 로그인 </a></Link>}
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">{children}</div>
            </Content>
            <FooterWrapper>Kdjsystem Design ©2020 Created </FooterWrapper>
        </Layout>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,  // 리액트 노드 .. 
};

export default AppLayout;