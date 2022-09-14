import React from 'react';
import './card.styles.css';

const Card = (props) => { 
  const { id, name, email } = props.data;
  
  return (
    <div className="card">
      <img 
        src={`https://robohash.org/${id}?set=set2&size=250x200`} 
        className="card__img"
        alt={`${name} - MonsterPic`} 
      />
      <h2>{name}</h2>
      <h5>{email}</h5>
    </div>
  );
}

export default Card;
