import React, {useState, useRef} from 'react'

export default function Count() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    let countVar = 0;

    const increaseCountState = () => {
        setCount(count+1);
    }

    const increaseCountRef = () => {
        countRef.current = countRef.current + 1;
        console.log("ref: ", countRef.current);
    }

    const increaseCountVar = () => {
        countVar += 1;
        console.log("var: ",countVar);
    }
  return (
    <div>
        <p>State : {count}</p>
        <p>Ref : {countRef.current}</p>
        <p>Var : {countVar}</p>
        <button onClick={increaseCountState}>State 올리기</button>
        <button onClick={increaseCountRef}>Ref 올리기</button>
        <button onClick={increaseCountVar}>Var 올리기</button>
    </div>
  )
}
