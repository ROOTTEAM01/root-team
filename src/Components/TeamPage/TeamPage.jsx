import React from 'react';
import TeamUsHeader from './TeamUsHeader/TeamUsHeader';
import TeamUsMain from './TeamUsMain/TeamUsMain';
import "./TeamPage.css";
import TeamStaff from './TeamStaff/TeamStaff';

const TeamPage = ({setRefs}) => {
  return (
    <div className='Team_Item'>
      <TeamUsHeader setRefs={setRefs}/>
      <TeamUsMain setRefs={setRefs}/>
      <TeamStaff setRefs={setRefs}/>
    </div>
  )
}

export default TeamPage
