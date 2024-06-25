import React from 'react'
import BlogPageHeader from './BlogPageHeader/BlogPageHeader'
import BlogTitleContainer from './BlogTitleContainer/BlogTitleContainer'
import BlogCards from './BlogCards/BlogCards'

const BlogPage = ({setRefs}) => {
  return (
    <div className=''>
      <BlogPageHeader setRefs={setRefs}/>
      <BlogTitleContainer setRefs={setRefs}/>
      <BlogCards setRefs={setRefs} />
    </div>
  )
}

export default BlogPage
