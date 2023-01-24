import React , { useCallback, useEffect, useState } from 'react'

export default function UseCallback1() {
    const [ number, setNumber] = useState(0);
    const [ toggle, setToggle] = useState(true);

    const someFunction = useCallback(()=>{
        console.log(`someFunc : number : ${number}`);
    },[number])
    
    useEffect(()=>{
        console.log("someFunction이 변경되었습니다.");
    }, [someFunction]);
    return (
    <div>
        <input 
        type="number" 
        value={number}
        onChange={(e)=>{setNumber(e.target.value)}}/>
        <button onClick={()=>setToggle(!toggle)}>{toggle.toString()}</button>
        <button onClick={someFunction}>call someFunc</button>    
    </div>
  )
}
