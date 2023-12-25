import React from 'react';
import HomePageFirstCouple from './HomePageFirstCouple';


function Home({ topHeadlines }) {
  return (
    <div>
      <HomePageFirstCouple news={topHeadlines} />
      {/* Other homepage content */}
    </div>
  );
}

export default Home;
