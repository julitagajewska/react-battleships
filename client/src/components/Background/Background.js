import React from 'react';

import happyShip1 from '../assets/happy_ship_1_teal.png';
import happyShip2 from '../assets/happy_ship_2_mirror.png';
import angryShip1 from '../assets/angry_ship_1_teal.png';
import spiral from '../assets/spiral_1.png';
import wave2 from '../assets/wave_2.png';
import fish from '../assets/fish_1.png';

import './Background.css';

export default function Background() {

    return (
        <div className={`background-container-in`} >
            <img className='background-ship happy-1' src={happyShip1} alt="happy ship one" />
            <img className='background-ship happy-2' src={happyShip2} alt="happy ship two" />
            <img className='background-ship angry' src={angryShip1} alt="angry ship one" />
            <img className='background-ship spiral-1' src={spiral} alt="spiral one" />
            <img className='background-ship spiral-2' src={spiral} alt="spiral two" />
            <img className='background-ship wave-2' src={wave2} alt="wave two" />
            <img className='background-ship fish' src={fish} alt="fish" />
        </div>
    )
}
