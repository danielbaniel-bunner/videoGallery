import React, { Component ,useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './Navbar';

export function Gallery() {
     
    return (
        <div className='container'>
            <Navbar />
            <VideoList/>
        </div>
    )

}



