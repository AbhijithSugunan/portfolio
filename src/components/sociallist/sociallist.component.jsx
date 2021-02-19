import React from 'react';
import './sociallist.component.scss';
import { IconContext } from "react-icons";
  import  { TiSocialTwitter, TiSocialGithub, TiSocialLinkedin } from 'react-icons/ti'

const SocialListComponent = () => {
    return(
        <IconContext.Provider value={{ size: "2em", className: 'social-icons' }}>
            <ul className="social-list">
                <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Abhijit50271796" aria-label="Abhijith Sugunan Twitter Account">
                        <TiSocialTwitter value={{ className: 'social-icons', size: '10em' }}  />
                    </a>
                </li> 
                <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Abhijit50271796" aria-label="Abhijith Sugunan Twitter Account">
                        <TiSocialLinkedin value={{ className: 'social-icons' }}  />
                    </a>
                </li> 
                <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Abhijit50271796" aria-label="Abhijith Sugunan Twitter Account">
                        <TiSocialGithub value={{ className: 'social-icons' }}  />
                    </a>
                </li> 
            </ul>
            </IconContext.Provider>
    )
}

export default SocialListComponent;