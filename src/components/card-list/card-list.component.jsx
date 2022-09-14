import React from 'react';
import Card from '../card-container/card.component';
import './card-list.styles.css';

const CardList = ({filteredArray}) => {
  return(
    <div className="cards-container">
      {filteredArray.map((item) => { 
        return(
          <Card key={item.id} data={item} />
        )}
      )}
    </div>
  );
}

export default CardList;
