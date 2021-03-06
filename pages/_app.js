import React from 'react';
import 'antd/dist/antd.css'
import '../asserts/css/style.css'
import PropTypes from 'prop-types'
import Head from 'next/head'
const App = ({Component}) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"></meta>
                <title> Kdjsystem. </title>
            </Head>
            <Component/>
        </>
    );
};

App.propTypes={
    Component:PropTypes.elementType.isRequired,
}

export default App;