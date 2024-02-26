import React from "react";

export default function sideEffect(props) {
  let num = props.listItem
  const list = num.map((el) => <li key={el.toString()}>{el}</li>)
  return (
    <ul>{list}</ul>
  );
}
