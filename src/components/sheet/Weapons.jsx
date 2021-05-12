import React from "react";
import SpellWeaponItem from "./SpellWeaponItem.jsx";

const Spells = () => {
    return (
        <section className="weaponsInfo">
            <h1>Weapons</h1>
            <div className="spellWeaponList">
                <SpellWeaponItem />
                <button className="addItem" type="button">
                    + Add Spell
                </button>
            </div>
        </section>
    );
};

export default Spells;
