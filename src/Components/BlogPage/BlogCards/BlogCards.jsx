import React from 'react';
import "./BlogCards.css"

import FeaturedArticles1 from "../../../img/FeaturedArticles1.jpg";
import FeaturedArticles2 from "../../../img/FeaturedArticles2.jpg";
import FeaturedArticles3 from "../../../img/FeaturedArticles3.jpg";
import FeaturedArticles4 from "../../../img/FeaturedArticles4.jpg";
import FeaturedArticles5 from "../../../img/FeaturedArticles5.jpg";
import FeaturedArticles6 from "../../../img/FeaturedArticles6.jpg";

const staffMembers = [
  { name: 'Purus porta feugiats dia sed ipsum enim gravida lectus.', position: 'September 10, 2022 No Comments', image: FeaturedArticles1 },
  { name: 'Purus porta feugiats dia sed ipsum enim gravida lectus.', position: 'September 10, 2022 No Comments', image: FeaturedArticles2 },
  { name: 'Purus porta feugiats dia sed ipsum enim gravida lectus.', position: 'September 10, 2022 No Comments', image: FeaturedArticles3 },
  { name: 'Purus porta feugiats dia sed ipsum enim gravida lectus.', position: 'September 10, 2022 No Comments', image: FeaturedArticles4 },
  { name: 'Purus porta feugiats dia sed ipsum enim gravida lectus.', position: 'September 10, 2022 No Comments', image: FeaturedArticles5 },
  { name: 'Purus porta feugiats dia sed ipsum enim gravida lectus.', position: 'September 10, 2022 No Comments', image: FeaturedArticles6 },
];

const BlogCards = ({setRefs}) => {
  return (
    <div className="staff-grid-blog">
        <div className='staff-title-blog'>
            <h2>Featured Articles</h2>
        </div>
      <div ref={setRefs} className="staff-members anim">
        {staffMembers.map((member, index) => (
          <div ref={setRefs} key={index} className="staff-member-blog anim">
            <img ref={setRefs} src={member.image} alt={member.name} className="staff-photo-blog anim" />
            <h3 className="staff-name">{member.name}</h3>
            <p className="staff-position">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogCards
