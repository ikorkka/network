import React from 'react';
import Categories from '../../components/Categories/Categories';
import Header from '../../components/Header/Header';
import Performers from '../../components/Performers/Performers';
import Service from '../../components/Service/Service';

const Main = () => {
    return (
        <>
            <Header/>
            <Service/>
            <Performers />
            <Categories />
        </>
    );
};

export default Main;