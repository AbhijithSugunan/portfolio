import React from 'react';
import SocialListComponent from '../../components/sociallist/sociallist.component';
import './landingpage.component.scss'

class LandingPageComponent extends React.Component {

    constructor()
    {
        super()
        this.state = {}
    }

    render() {
        return(
            <div className="landing-container">
                <hgroup className="p-group">
                    <h1 className="p-name">Hola, I'm <span>&#123;</span> Abhijith Sugunan <span>&#125;</span>;</h1>
                    <h2 className="p-info">I'm a full stack developer based in Kochi, specializing in building 
                     websites applications</h2>
                </hgroup>
                <SocialListComponent />
            </div>
        )
    }

}

export default LandingPageComponent;