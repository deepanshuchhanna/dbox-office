import React from 'react';
import Navs from './Navs';
import Tittle from './Tittle';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Tittle
        title="D'STAR MOVIES-BOX"
        subtitle="Are You Looking For a Movie or an Actor?"
      />
      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;
