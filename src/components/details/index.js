import React from 'react';

import question from '../../assets/images/question.png'
import calendar from '../../assets/images/calendar.png'
import mapLocation from '../../assets/images/map-location.png'
import './details.scss'

const Details = () => {
  return (
    <div className="details-container">
      <div className="ui container">
        <h1 className="ui header details-title">Thank you-event voor KlaarisKees-uitvoeders</h1>
        <h3 className="ui header details-item">
          <img src={question} alt="question" className="ui circular image" />
          Free drinks & food +... (Verrassing!)
        </h3>
        <h3 className="ui header details-item">
          <img src={calendar} alt="calendar" className="ui circular image" />
          30 juli 2019, 18u.
        </h3>
        <h3 className="ui header details-item">
          <img src={mapLocation} alt="mapLocation" className="ui circular image" />
          Wommelgem
        </h3>
      </div>
    </div> 
  )
}

export default Details