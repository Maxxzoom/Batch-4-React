import Counter from "../components/Counter";
import FruitList from "../components/FruitList";

export const Greeting = ({ fname, lname }) => {
  return (
    <div>
      <h1>{fname}</h1>
      <h1>{lname}</h1>
    </div>
  );
};

const home = () => {
  // const firstname = "Umesh";
  // const lastname = "gardas";

  return (
    <div className="container">
      Home
      {/* <FruitList />

      <Greeting fname={firstname} lname={lastname} /> */}
      <Counter />
    </div>
  );
};

export default home;
