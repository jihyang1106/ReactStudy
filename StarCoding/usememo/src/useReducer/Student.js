import React from 'react';

export default function Student({ name }) {
  return (
    <>
      <span>{name}</span>&nbsp;
      <button>삭제</button>
    </>
  );
}
