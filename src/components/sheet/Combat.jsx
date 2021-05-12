import React from 'react';

const Combat = () => {
  return (
    <section className="combatInfo">
      <div className="combatItem">
        {/* Hit Points */}
        <div>
          <h2>Hit Points</h2>
          <p>10</p>
        </div>
        <div>
          <h3>Temp HP</h3>
          <p>+0</p>
        </div>
      </div>
      <div className="combatItem">
        <h2>Armor Class</h2>
        <p>14</p>
      </div>
      <div className="combatItem">
        <h2>Speed</h2>
        <p>30</p>
      </div>
      <div className="combatItem">
        <h2>Initiative</h2>
        <p>0</p>
      </div>
    </section>
  );
};

export default Combat;
