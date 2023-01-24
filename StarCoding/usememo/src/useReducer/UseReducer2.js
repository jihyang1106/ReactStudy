import React, { useState, useReducer } from 'react';
import Student from './Student';

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        studnets: [...state.students, newStudent],
      };
  }
};
const initialState = {
  count: 0,
  students: [
    {
      id: Date.now(),
      name: 'James',
      isHere: false,
    },
  ],
};

export default function UseReducer2() {
  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentsInfo.count}</p>
      <input
        type="number"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: 'add', payload: { name } });
        }}
      >
        추가
      </button>
      {studentsInfo.students.map((el) => {
        return <Student key={el.id} name={el.name} />;
      })}
    </>
  );
}
