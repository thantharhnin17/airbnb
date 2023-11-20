import React from 'react';
import ReactDOM from 'react-dom';
import HeroImg from '../images/HeroImg.png';

function Hero() {
    return (
        <section className='hero'>
            <img src={HeroImg} className='hero--photo'/>
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;