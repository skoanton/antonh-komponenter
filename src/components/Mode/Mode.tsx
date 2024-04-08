import { useState } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"
import "./Mode.scss"

const Mode = () => {
    const [mode, setMode] = useState("Select Mode");

    const clickHandle: React.MouseEventHandler<HTMLInputElement> = (e) => {
        const mode = document.getElementById('dropdown-container');
        const listItems = document.getElementById('listItems');
        if (e.currentTarget.checked) {
            setMode("Dark Mode");
            mode?.classList.add("dark-mode")
            mode?.classList?.remove("light-mode")
            listItems?.classList.add("dark-mode")
            listItems?.classList?.remove("light-mode")

        }
        else {
            setMode("Light Mode");
            mode?.classList?.remove("dark-mode")
            mode?.classList.add("light-mode")
            listItems?.classList?.remove("dark-mode")
            listItems?.classList.add("light-mode")
        }
    };

    return (
        <div id="mode" className="mode">
            <h1>{mode}</h1>
            <ToggleSwitch handleClick={clickHandle} />
        </div >
    )
}

export default Mode