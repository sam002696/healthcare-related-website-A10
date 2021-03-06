import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const About = () => {
    return (
        <div>
            <div className='lg:flex lg:flex-row items-center sm:flex sm:flex-col'>
                <div className='lg:p-28 sm:p-8'>
                    <img src='https://disin-react.hibootstrap.com/images/about1.jpg' alt="" />
                </div>
                <div style={{
                    backgroundImage: `url("https://disin-react.hibootstrap.com/images/about-shape1.png")`
                }} className='sm:p-10 sm:w-11/12 lg:space-y-10 lg:w-1/3'>
                    <Slide left>
                        <h2 className='font-bold  text-5xl'>About Our Hospital</h2>
                    </Slide>
                    <p className='font-normal text-2xl'>We’ve served this richly diverse region as a community hospital for more than 60 years. And as the area has grown, so have we. But as Long Island doctors, nurses, and healthcare professionals, we’ve never outgrown our devotion to the health of the community we all call home.</p>
                    <ul className='font-bold space-y-2.5 text-2xl'>

                        <Fade left cascade>
                            <li>Browse Our Website</li>
                            <li>Choose Service</li>
                            <li>Send Message</li>
                        </Fade>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;