import port1 from '../img/portImages/maya-1.jpg';
import port2 from '../img/portImages/port1.jpg';
import port3 from '../img/portImages/port2.png';
import port4 from '../img/portImages/port3.jpg';
import port6 from '../img/portImages/port5.jpg';
import port7 from '../img/portImages/port6.jpg';

const portfolios = [
    {
        id: 1,
        link1: "https://arcane-dawn-10895.herokuapp.com/",

        icon1: 'G',
        icon2: 'Y',
        image:  port3,
        title: 'ChatCord',
        paragraph: "An online real time Chat application with frontend based on HTML, CSS, Vanilla Javascript and the backend on Node.js along with Socket.io"
    },
    {
        id: 2,
        link1: 'https://clone-9aa6c.web.app/',
        icon1: 'G',
        icon2: 'Y',
        image: port2,
        title: 'Amazon Clone',
        paragraph: "This project is a clone of amazon based on react.js where users can add products to their cart and do the checkout of the products. This project has full stripe integration for handling payments. The authentication is being handled by firebase"
    },
    
    
]

export default portfolios;