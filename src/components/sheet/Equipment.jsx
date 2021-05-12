import React from "react";
import EquipmentItem from "./EquipmentItem.jsx";
import Money from "./Money.jsx";

const Equipment = () => {
    return (
        <section className="equipmentInfo">
            <h1>Equipment</h1>
            <Money />
            <div className="equipmentList">
                <EquipmentItem />
                <button type="button" className="addItem">
                    + Add Item
                </button>
            </div>
        </section>
    );
};

export default Equipment;
