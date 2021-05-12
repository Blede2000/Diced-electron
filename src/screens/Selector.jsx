import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCharacter } from "../redux/index";

const Selector = () => {
    console.log("SELECTOR");
    const characterList = useSelector((state) => state.characters);
    const dispatch = useDispatch();
    const characterIds = Object.keys(characterList);
    function createCharacter() {
        dispatch(
            addCharacter({
                characterName: "Bob",
            })
        );
    }
    return (
        <div>
            <h2>Hello</h2>
            <button
                type="submit"
                onClick={() => {
                    createCharacter();
                }}
            >
                Create character
            </button>

            {characterIds.map((item) => {
                return (
                    <button type="submit" key={item}>
                        {characterList[item].characterName}
                    </button>
                );
            })}
        </div>
    );
};

export default Selector;
