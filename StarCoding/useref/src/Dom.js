import React , { useRef, useEffect } from 'react'

export default function Dom() {
    const inputRef = useRef();

    useEffect(()=>{
        // console.log(inputRef);
        inputRef.current.focus();
    }, []);

    const login = () => {
        alert(`환영합니다 ${inputRef.current.value}!`)
        inputRef.current.focus();
    }
  return (
    <div>
        <input type="text" placeholder="username" ref={inputRef}/>
        <button onClick={login}>로그인</button>
    </div>
  )
}
