type props = {
    name: string;
    id: number;
    city: string;
    age : number

  };
  
  import React from "react";
  
  export default function Card(props: props) {
    const { name, id, city, age } = props;
  
    return (
      <div className="card">
        <p>Name: {name}</p>
        <p>ID: {id}</p>
        <p>City: {city}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
