import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
        <main className="homeScreen">
            <section>
                <h2>CAMPAIGNS</h2>
            </section>
            <section>
                <h2>CHARACTERS</h2>
                <div className="characterContainer">
                    <button
                        type="submit"
                        className="addCharacter"
                        onClick={() => {
                            createCharacter();
                        }}
                    >
                        <svg
                            width="58"
                            height="58"
                            viewBox="0 0 58 58"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M28.9583 3V54.9167"
                                stroke="#5B5B5B"
                                stroke-width="5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M3 28.9583H54.9167"
                                stroke="#5B5B5B"
                                stroke-width="5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </button>

                    {characterIds.map((item) => {
                        return (
                            <Link to={"/character/" + item} key={item}>
                                <div className="characterItem">
                                    {characterList[item].characterName}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default Selector;
