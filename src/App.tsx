import ToDos from "./components/ToDos";
import ToDo from "./models/ToDo";

const App = () => {
  const todos = [
    new ToDo("Learn and master React"),
    new ToDo("Learn and master Typescript"),
  ];

  return (
    <div className="App">
      <ToDos items={todos} />
    </div>
  );
};

export default App;
