import React from 'react';
import './Filme-destaque.css';

export default ({item}) => {
    return (
            <section className='destaque' style={{
                backgroundSize:'cover',
                backgroundPosition: 'center',
            }}>

            <div className='img'>
            <a href='/'>
             <img src='https://initiate.alphacoders.com/images/115/cropped-1440-300-1150106.png?9703' alt='nome'/>
         </a>
            </div>
        </section>
        
    );
} 