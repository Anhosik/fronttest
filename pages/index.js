import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head'



const Test = ({KKK, Click}) => {

    const click = ()=>{
        Click(v=>v+1);
    }

    return (
        <div>
           `테스트 {KKK} `   
            <button onClick={ click } > 증가</button>
        </div>
    );
};



const Home = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <Head>
                <title> 홈 | Kdjsystem  </title>
            </Head>

            <AppLayout>
              <Test KKK={count}  Click={setCount} ></Test>
            </AppLayout>
        </>
    );
};

export default Home;