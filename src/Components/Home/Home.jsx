import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../Banner';
import Team from './Team/Team';

const Home = () => {
    const properties = useLoaderData()
    console.log(properties);

    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <AllProperty properties={properties}></AllProperty>
            <Team></Team>
            <Achievement></Achievement>
        </div>
    );
};

export default Home;