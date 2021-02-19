import React from 'react';
import './sociallist.component.scss';
import { IconContext } from "react-icons";
  import  { TiSocialTwitter, TiSocialGithub, TiSocialLinkedin, TiMail } from 'react-icons/ti'

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
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/abhijithsugunan/" aria-label="Abhijith Sugunan LinkedIn Account">
                        <TiSocialLinkedin value={{ className: 'social-icons' }}  />
                    </a>
                </li> 
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/AbhijithSugunan" aria-label="Abhijith Sugunan Github Account">
                        <TiSocialGithub value={{ className: 'social-icons' }}  />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="mailto:abijeeth@live.com" aria-label="Abhijith Sugunan Mail">
                        <TiMail value={{ className: 'social-icons' }}  />
                    </a>
                </li>
            </ul>
            </IconContext.Provider>
    )
}

export default SocialListComponent;