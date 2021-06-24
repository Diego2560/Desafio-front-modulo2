import React from 'react';
import './Header.css';

export default ({black}) => {
   return (
    <header className={black ? 'black' : ''}>
        <div className='header-logo'>
         <a href='/'>
             <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='nome'/>
         </a>
        </div>

        <div className='header-usuario'>
        <a href='/'>
             <img src='https://lh3.googleusercontent.com/proxy/z4yi41_yiTksKd9J_SZzYwxvT80goEGE_3MQNRccAOs8OAFnnymvnVvqX25lCtRW297Lu_8iAhZkisiHS6CqHQ6-Wu1wZZLiwLBzHLQf-0JGlYO7iLmaortxsh1LmvmiK1U5' alt='nome'/>
         </a>
        </div>

    </header>
   ); 
}