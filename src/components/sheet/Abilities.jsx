import React from "react";
import AbilitiesItem from "./AbilitiesItem.jsx";

const Abilities = () => {
    return (
        <section className="abilitiesInfo">
            <h1>Abilities</h1>
            <div className="container">
                <AbilitiesItem />
                <AbilitiesItem />
                <AbilitiesItem />
                <AbilitiesItem />
                <AbilitiesItem />
                <AbilitiesItem />
            </div>
        </section>
    );
};

export default Abilities;
