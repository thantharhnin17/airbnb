import React from 'react';
import ReactDOM from 'react-dom';

import Star from '../images/Star.png';

function Card(props) {
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.location === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <section>
            <div className='card'>
                <div className='card--head'>
                    <img src={require(`../images/${props.img}`)} className='card--img'/>
                    {badgeText && <p className='card--img-status'>{badgeText}</p>}
                    
                </div>
                <div className='card--body'>
                    <div className='card--status'>
                        <span><img src={Star} className='card--star'/></span>
                        <span>{props.rating}</span>
                        <span className='grey'>({props.reviewCount})</span>
                        <span className='grey'> . </span>
                        <span className='grey'>({props.location})</span>
                    </div>
                    <p>{props.title}</p>
                    <p><span className='bold'>From ${props.price}</span> / person</p>
                </div>
            </div>
        </section>
    )
}

export default Card;