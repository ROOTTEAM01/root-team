import React from 'react'
import { NavLink } from 'react-router-dom';
import AboutUsPageShape from "../../../img/AboutUsPageShape.png";


const BlogPageHeader = ({setRefs}) => {
  return (
    <>
        <div className='AboutUsHeaderItem ContactHeaderItem'>
            <div className='AboutUsBackgroundImg'></div>
            <div className='AboutUsBackgroundImg2'>
                <img src={AboutUsPageShape} alt=''/>
            </div>
            <div className='AboutUsHeaderItemCont ContactHeaderItemCont'>
                <h2 className="anim" ref={setRefs}>Blog</h2>
                <div className='LinkItem'>
                    <NavLink to='/'>Home</NavLink> / <NavLink to='/Blog'>Blog</NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogPageHeader
