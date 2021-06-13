import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';
import codeforces from '../img/codeforces.png';
import codechef from '../img/codechef.png';
import hackerearth from '../img/hackerearth.png';


function AboutPage()
{

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }


    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'C++'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Java'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'HTML'} progress={'85%'} width={'85%'} />
                <SkillsSection skill={'CSS'} progress={'70%'} width={'70%'} />
            </div>


            <Tittle title={'PLATFORMS'} span={'Platforms'} />
            <div className="servives-container" >

            <a href="https://codeforces.com/profile/Wannabe_Expert" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: "#d8c9ff"}}>
            <ServicesSection  image={codeforces} title={'Codeforces'} 
                text={'Codeforces profile '}
                />
            </a>
                
            <a href="https://www.codechef.com/users/itsyash009" target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: 'none' ,color: "#d8c9ff"}}>
            <ServicesSection image={codechef} title={'Codechef'} 
                text={' Codechef profile'}
                />
            </a>
               
            <a href="https://www.hackerearth.com/@yash_baranwal009" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' ,color: "#d8c9ff"}}>
            
            <ServicesSection image={hackerearth} title={'Hackerearth '} 
                text={'Hackerearth Profile.'} 
                />

            </a>
                
                
            </div>

        </div>
    )
}

export default AboutPage;
