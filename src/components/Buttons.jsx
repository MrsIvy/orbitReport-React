import satData from "./satData";
import React, { useState } from 'react';
import Buttons from './Buttons';
import Table from './Table';
import Banner from './Banner';
const Buttons = ({ filterByType, setSat, displaySats }) => {
 

function App() {
  const [sat, setSat] = useState(satData);
  const [displaySats, setDisplaySats] = useState(satData);
  const filterByType = (currentType) => {
    const filteredSats = satData.filter(sat => sat.type === currentType);
    setDisplaySats(filteredSats);
  };
  function Buttons({ filterByType, setSat, displaySats }) {
  return (
    <div>
      <button>{sat} Orbit</button>
      {displaySats.map((sat, id) => {
        return (
          <button onClick ={() => filterByType(sat.type)} key={id}>
          {sat.name} Orbit
        </button>
        )
      }
    )}
      {/* <button>All Orbits</button> */}
      <button onClick={() => setSat(satData)}>
        Reset Satellites
      </button>
    
    </div>
  );
};
}

export default Buttons;