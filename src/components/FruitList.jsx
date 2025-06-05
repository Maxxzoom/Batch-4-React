import React from "react";

const FruitList = () => {
  const fruits = [
    {
      id: 1,
      fruit: "Apple",
    },
    {
      id: 2,
      fruit: "Banana",
    },
    {
      id: 3,
      fruit: "Orange",
    },
  ];
  const showList = true;



  return (
    <div>
      <h2>Fruits</h2>
      {showList ? (
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit.fruit}</li>
          ))}
        </ul>
      ) : (
        <p>No fruits to show</p>
      )}
    </div>
  );
};

export default FruitList;
