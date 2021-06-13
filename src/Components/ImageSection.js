import React from 'react';
import about from '../img/about.jpeg';

function ImageSection() {



    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Yash Baranwal</span></h4>
                <p className="about-text">
                    An engineering student with major in Electronics and Communication Engineering and a major inclination towards Competitive Programming and Web Development. I love exploring new and upcoming technologies . I'm also adept at motivating others. Passionate about food and code.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>College</p>
                    </div>
                    <div className="right-section">
                        <p>: YASH BARANWAL</p>
                        <p>: 20</p>
                        <p>: Indian</p>
                        <p>: English, Hindi</p>
                        <p>: National Institute of Technology Jamshedpur</p>

                    </div>
                </div>
                <button className="btn" onClick={() => openInNewTab('https://drive.google.com/file/d/1UiJ5R1zThl9MsqaMZ8omy4KNi9fviMUU/view?usp=sharing')}>Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
