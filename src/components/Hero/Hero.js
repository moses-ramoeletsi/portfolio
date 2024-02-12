import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
        <section className='hero-container'> 
        <div className='hero-content'>
        <h2>Building Digital Experiences That Inspire </h2>

        <p>
            Passionate Full Stack Developer  | Transforming I deas into Seamless and Visually Stunning Solutions.
        </p>
        </div>

        <div className='hero-image'>
            <div>
                <div className='tech-icon'>
                    <img src='./assets/images/react.png' alt='' />
                </div>
                <img src='./assets/images/profile.png' alt=''/>
            </div>

            <div>
                <div className='tech-icon'>
                    <img src='./assets/images/flutter.png' alt='' />
                </div>
                <div className='tech-icon'>
                    <img src='./assets/images/angular.png' alt='' />
                </div>
                <div className='tech-icon'>
                    <img src='./assets/images/html.png' alt='' />
                </div>
                <div className='tech-icon'>
                    <img src='./assets/images/css.png' alt='' />
                </div>
                <div className='tech-icon'>
                    <img src='./assets/images/javascript.png' alt='' />
                </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default Hero