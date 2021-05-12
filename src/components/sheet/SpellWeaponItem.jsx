import React from 'react';

const SpellWeaponItem = () => {
  return (
    <div className="spellWeaponItem">
      <div className="title">
        <h2>Weapon Name</h2>
        <span>Slashing</span>
      </div>
      <div className="dice">1d6</div>
    </div>
  );
};

export default SpellWeaponItem;
