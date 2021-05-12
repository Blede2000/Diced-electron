import React from "react";
import SpellWeaponItem from "./SpellWeaponItem.jsx";

const Spells = () => {
    return (
        <section className="spellsInfo">
            <h1>Spells</h1>
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
