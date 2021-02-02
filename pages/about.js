import React from 'react';
import Head from 'next/head'
import AppLayout from '../components/AppLayout';
const About = () => {
    return (
        <>
            <Head>
                <title> 회사소개 | Kdjsystem  </title>
            </Head>

            <AppLayout>
                회사 소개
            </AppLayout>
        </>
    );
};

export default About;