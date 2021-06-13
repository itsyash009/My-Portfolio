import React from 'react';
import "./ServicesSection.scss"
function ServicesSection({image, title, text}) {
    return (
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    <img className ="photo" src={image} alt="" />
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;
