import React from 'react'

function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                        <a href={item.link1} target = "_blank" rel="noreferrer">
                            <img src={item.image} alt="" />
                            <ul className="hover-items">
                                
                            </ul>
                            </a>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>{item.paragraph}</p>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;
