import { useEffect, useState } from "react";

const MultipleUseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted");
    }, []);

    useEffect(() => {
        console.log("Count updated:", count);
    }, [count]);

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );

}

export default MultipleUseEffect