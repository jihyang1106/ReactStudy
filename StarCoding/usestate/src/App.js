import { useState } from "react";

function App() {
  const [time, setTime] = useState(1);
  const handleClick = () => {
    return time >= 12 ? setTime(time - 11) : setTime(time + 1);
  };

  const [names, setNames] = useState([]);
  /**초기값에 무거운 작업을 해야 한다면 useState에 콜백함수를 추가하면
   * 한 번만 실행된다.
   * const [names, setNames] = useState(()=> {return heavyWork()}) */

  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = (e) => {
    setInput("");
    setNames((prevState) => {
      return [...prevState, input]; // 아래서부터 추가
      // return [input, ...prevState] 는 위에서 부터 추가
    });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUpload();
    }
  };
  return (
    <div>
      <span>현재 시각 : {time}시</span>
      <button onClick={handleClick}>Update</button>
      <hr />
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => (
        <p key={idx}>{name}</p>
      ))}
    </div>
  );
}

export default App;
