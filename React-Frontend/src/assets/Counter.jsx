import {useStage} from 'react';

export default function Counter() {
    const [count,setCount] = useStage(0);
    return (
        <div>
            <h1>Count Value is: {count}</h1>
            <button onclick={() => setCount(count+1)}>Increment</button>
            <button onclick={() => setCount(count-1)}>Decrement</button>
        </div>
    );
}