import React from 'react';
import Card from '../UI/Card';
import Logo from '../Logo';
import './style.css';

const Hero = props => {
    return (
        <div>
            <Card>
                <Logo/>
            </Card>
        </div>
    );
};

export default Hero;