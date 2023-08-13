
import Buttons from "./components/Buttons.js";
import Table from "./components/Table.js";
import Banner from "./components/Banner.js";
import React, { useState } from 'react';
import satData from "./components/satData.js";


function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
   });
   setSat(displaySats);
  };
  
  return (
    <>
      <Banner />
      <Buttons 
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}/>
      <Table sat={sat} />
    </>
  );
 
}

export default App;
