import React from 'react';

import loadParticles from './components/Particles';
import loadMessages from './components/Messages';

import RainbowAstronaut from '../public/assets/img/amongus/astronaut.gif';

import '../public/assets/scss/main.scss';

class App extends React.Component {
    render = (): React.ReactNode => (
        <div id="app" className="text-light d-flex flex-column h-100">
            <div id="particles-js"></div>
            <div className="container-bg">
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%">
                    <path id="blob" d="M436,318Q412,386,347.5,410.5Q283,435,223,417.5Q163,400,107,361Q51,322,39.5,245.5Q28,169,81,109.5Q134,50,210.5,44.5Q287,39,350.5,75.5Q414,112,437,181Q460,250,436,318Z" fill="#121212"></path>
                </svg>
            </div>

            <div className="container">
                <img src={RainbowAstronaut} alt="Among Us crewmate" />

                <p className="title">You&apos;re the <span className="imposter">imposter</span>, aren&apos;t you...</p>
                <p className="sus">Loading...</p>
            </div>
        </div>
    );

    componentDidMount = (): void => {
        loadMessages();
        loadParticles();
    };
}

export default App;
