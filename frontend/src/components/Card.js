import React from 'react';
import { Location, Calendar, Flag, Person } from './Icons';
import tourCoverImg from '../assets/images/tours/tour-1-cover.jpg';

const Card = () => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay">&nbsp;</div>
          <img src={tourCoverImg} alt="Tour 1" className="card__picture-img" />
        </div>

        <h3 className="heading-tertirary">
          <span>The Forest Hiker</span>
        </h3>
      </div>

      <div className="card__details">
        <h4 className="card__sub-heading">Easy 5-day tour</h4>
        <p className="card__text">
          Breathtaking hike through the Canadian Banff National Park
        </p>
        <div className="card__data">
          <Location />
          <span>Banff, Canada</span>
        </div>
        <div className="card__data">
          <Calendar />
          <span>April 2021</span>
        </div>
        <div className="card__data">
          <Flag />
          <span>3 stops</span>
        </div>
        <div className="card__data">
          <Person />
          <span>25 people</span>
        </div>
      </div>

      <div className="card__footer">
        <p>
          <span className="card__footer-value">$297</span>
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">4.9</span>
          <span className="card__footer-text">rating (21)</span>
        </p>
        <a href="#" className="btn btn--green btn--small">
          Details
        </a>
      </div>
    </div>
  );
};

export default Card;
