import React from "react";
import Button from "./buttoncompo/Button";
import Card from "./cardcomp/Card";
import Table from "./tablecomp/Table";
import Select from "./selectcompo/Select";

let buttonArray = [
  {
    text: "click 1",
    onClick: () => console.log("Button 1 clicked"),
  },
  {
    text: "click 2",
    onClick: () => console.log("Button 2 clicked"),
  },
  {
    text: "click 3",
    onClick: () => console.log("Button 3 clicked"),
  },
];

let cardCompo = [
  {
    name: "ahtisham",
    id: 1,
    city: "Karachi",
    age: 17,
  },
  {
    name: "ALi",
    id: 2,
    city: "Islamabad",
    age: 16,
  },
  {
    name: "moiz",
    id: 3,
    city: "Quetta",
    age: 15,
  },
];

let tableArray = [
  {
    name: "John",
    id: 1,
    age: 30,
  },
  {
    name: "Alice",
    id: 2,
    age: 25,
  },
  {
    name: "Bob",
    id: 3,
    age: 28,
  },
  {
    name: "Emma",
    id: 4,
    age: 22,
  },
  {
    name: "David",
    id: 5,
    age: 35,
  },
];

function App() {
  return (
    <div>
      <h1>Buttons</h1>
      {buttonArray.map((button, index) => (
        <Button key={index} text={button.text} onClick={button.onClick} />
      ))}

      <h1>cards Component</h1>
      {cardCompo.map((x, i) => (
        <Card key={i} {...x} />
      ))}

      <h1>table Component</h1>
      {tableArray.map((tabled, index) => (
        <Table key={index} {...tabled} />
      ))}


      <h1>Select Component</h1>
      <Select
        getValue={(e) => {
          console.log(e);
        }}
        label="Gender"
        options={[
          {
            value: "male",
            displayName: "Male",
          },
          {
            value: "female",
            displayName: "Female",
          },
        ]}
      />
    </div>
  );
}

export default App;
