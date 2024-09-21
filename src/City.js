import React from "react";

export default function City(props) {
  function updateCity(event) {
    props.updateCity(event.target.value);
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="search"
        placeholder="Type a city"
        onChange={updateCity}
      ></input>
      <input type="submit" value="Search" />
    </form>
  );
}
