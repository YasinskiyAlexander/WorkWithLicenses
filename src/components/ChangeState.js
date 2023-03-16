import {useState} from "react";

function ChangeState() {
    const [color, setColor] = useState("red");
    return (
        <>
            <h1>I am a {color} Product</h1>
            <select onClick={(e)=> setColor(e.target.value)}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
        </>
    )
}

export default ChangeState;