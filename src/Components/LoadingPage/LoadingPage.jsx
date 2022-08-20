import React from 'react'
import './LoadingPage.css'
import BrandLogo from '../../assets/Brand Logo.svg'

const LoadingPage = () => {
    return (
        <div className='loadpage__container'>
            <img src={BrandLogo} alt='logo' />
            <h1>
                <span>P</span>
                <span>O</span>
                <span>R</span>
                <span>T</span>
                <span>F</span>
                <span>O</span>
                <span>L</span>
                <span>I</span>
                <span>O</span>
            </h1>
        </div>
    )
}

export default LoadingPage
