import React from 'react';

import Nav from './Nav';
import Hero from './Hero';
import Slider from './Slider';
import Partnership from './Partnership';
import Groups from './Groups';
import Profile from './Profile';
import Footer from './Footer';

class RobotCompanions extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Hero />
                <Slider />
                <Partnership />
                <Groups />
                <Profile />
                <Footer />
            </div>
        )
    }
}
export default RobotCompanions;