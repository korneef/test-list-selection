import React from 'react';
import ListSelection from '../../modules/ListSelection/ListSelection';

import './HomePage.css'

const HomePage: React.FC = () => {
  const className = 'home-page'
  return (
    <div className={className}>
      <ListSelection />
    </div>
  );
}

export default HomePage;