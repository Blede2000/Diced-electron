import React from "react";
import Abilities from "../components/sheet/Abilities.jsx";
import Combat from "../components/sheet/Combat.jsx";
import Equipment from "../components/sheet/Equipment.jsx";
import Skills from "../components/sheet/Skills.jsx";
import Spells from "../components/sheet/Spells.jsx";
import Weapons from "../components/sheet/Weapons.jsx";

const Sheet = () => {
    return (
        <main>
            <Combat />
            <Abilities />
            <Skills />
            <Equipment />
            <Spells />
            <Weapons />
        </main>
    );
};

export default Sheet;
