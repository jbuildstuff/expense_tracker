import "./App.css";
import Card from "./components/Card";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 29257.11, date: new Date(2021, 2, 28) },
    { title: "Karate Lesson", amount: 5297.11, date: new Date(2020, 3, 25) },
    { title: "Massage Chair", amount: 1297.11, date: new Date(2011, 6, 11) },
    { title: "Beauty Products", amount: 2397.11, date: new Date(2021, 5, 1) },
  ];

  return (
    <Card>
      <h2>Let's get Started</h2>
      <div>
        <Expenses items={expenses}></Expenses>
      </div>
    </Card>
  );
}

export default App;
