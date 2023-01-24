import React, { useState, useEffect } from 'react';
import Timer from './component/Timer';

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  }
  const handleInputChange = (e) => {
    setName(e.target.value);
  }
  // /**렌더링 될 때만 실행*/
  // useEffect(()=> {
  //   console.log("렌더링")
  // },[])

  // /**첫 렌더링 시, Update버튼이 눌려 count가 +1 될 때마다 실행 */
  // useEffect(()=> {
  //   console.log("count 변화")
  // },[count])

  /** cleanup 예시 showTimer가 true일 때 Timer 컴포넌트 보이기 */
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange}/>
      <hr/>
      {showTimer && <Timer/>}
      <button onClick={()=> setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App;
