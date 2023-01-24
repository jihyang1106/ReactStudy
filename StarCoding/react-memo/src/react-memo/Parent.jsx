import React from "react";
import { useState, useCallback } from "react";
import Child from "./Child";

export default function Parent() {
  const [parentAge, setParentAge] = useState(0);
  const increaseParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const tellMe = useCallback(() => {
    console.log("길동아 사랑해 ❤️");
  }, []);

  console.log("부모 컴포넌트가 렌더링 되었어요.");

  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>👩🏻‍❤️‍👩🏻부모</h1>
      <p>age : {parentAge}</p>
      <button onClick={increaseParentAge}>부모 나이 증가</button>
      <Child name={"홍길동"} tellMe={tellMe} />
    </div>
  );
}
