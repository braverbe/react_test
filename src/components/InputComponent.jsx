import React, {useState} from "react";
import Counter from "./Counter";

const InputComponent = ()=> {
    const [value, setValue] = useState('asd');
    return (
        <div>
            <div>{value}</div>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
        </div>
    )
}

export default InputComponent;