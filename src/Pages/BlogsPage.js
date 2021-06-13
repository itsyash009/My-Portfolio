import React from 'react';
import Tittle from '../Components/Tittle';
import allBlogs from '../Components/allBlogs';
 import Particles from "react-particles-js";
function BlogsPage() {
    return (
        <div >
            <div className="b-title">
                <Tittle title={'Education'} span={'education'} />
            </div>
           

            <div className="BlogsPage">
                {
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                            <a href={blog.link} className="blog-link" target="_blank" >
                                <img src={blog.image} alt=""/>
                                {blog.title}
                                </a>
                                <p >{blog.date}</p>
                                <strong> <p className="cgpa">{blog.month}</p></strong>
                            </div>
                        </div>
                    })
                }
            </div>
            
        </div>
    )
}

export default BlogsPage;
