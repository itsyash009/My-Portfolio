import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {init} from 'ityped';
import {useEffect , useRef} from 'react';
function HomePage() {
    const textRef =useRef();
    useEffect(() => {
        
        init(textRef.current, { 
            showCursor: false, 
            strings: ['Competitive Programmer', 'Web developer' ] })


    }, [])

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> YASH BARANWAL.</span>
                </h1>
                <h3 className="h-sub-text">
                - 
                    <span ref={textRef}> </span> 
                </h3>
                <div className="icons">
                    <div  className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" onClick={() => openInNewTab('https://www.facebook.com/yash.baranwal.716')}/>
                    </div>
                    <div  className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" onClick={() => openInNewTab('https://github.com/itsyash009')}/>
                    </div>
                    <div className="icon-holder">
                    <FontAwesomeIcon icon={faLinkedin} className="icon yt" onClick={() => openInNewTab('https://www.linkedin.com/in/yash-baranwal-0b784a1a9/')}/>
                       
                    </div>
                    <div className="icon-holder">
                    <FontAwesomeIcon icon={faInstagram} className="icon in" onClick={() => openInNewTab('https://www.instagram.com/itsyash009/?hl=en')}/>
                       
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
