import React from 'react';
import imgBlog1 from "../../../img/blogImg1.jpg";
import "./BlogTitleContainer.css"

const BlogTitleContainer = ({setRefs}) => {
  return (
    <section className='main-section-blog-title'>
        <div className='blog-title-div'>
            <h4>BLOG</h4>
            <h2>Latest Blog & News</h2>
            <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi</p>
        </div>
        <div className="blog-us-main">
            <div className="div-blog-img1">
                <img ref={setRefs} className="anim" src={imgBlog1} alt=""/>
            </div>
            <div className="blog-us-text">
                <h2 ref={setRefs} className="anim">Purus porta feugiats dia sed ipsum enim gravida lectus.</h2>
                <p>September 10, 2022 No Comments</p>
                <p>Vestibulum netus et, in blandit aliquam, nibh enim. Nisi egestas lobortis ut sed gravida a pellentesque arcu blandit. Augue vestibulum praesent aliquam risus nunc et purus pretium. Nibh senectus ac</p>
                <ul className='linkedinUL'>
                    <li>
                        <a href="#" className='linkedinLink'>
                            <span >Read More</span>
                            <i class="fa-solid fa-arrow-right" style={{color: "#00B9C5"}}></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default BlogTitleContainer
