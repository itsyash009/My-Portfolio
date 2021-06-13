import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';
import contactme from '../img/contactme.png';
import "./ContactPage.scss"
import Particles from "react-particles-js";

function ContactPage() {
    return (
        <div>
         <Particles
      params={{
        background: {
          color: {
            value: "#001"
          }
        },
        particles: {
          number: {
            value: 160,
            density: {
              enable: false
            }
          },
          size: {
            value: 8,
            random: true
          },
          move: {
            direction: "bottom",
            outMode: "out"
          },
          links: {
            enable: false
          }
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "remove"
            }
          },
          modes: {
            remove: {
              quantity: 10
            }
          }
        }
      }}
    />
             <img src={contactme} className="image"></img>
             <a class="mailto" target="_blank" href="mailto:ybaranwal5@gmail.com">

             <button className="btn1">Email Me </button>

             </a>
             
          
        </div>
    )
}

export default ContactPage;
