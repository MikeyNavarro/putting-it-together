import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName="Navarro"
        lastName="Michael"
        age={22}
        hairColor="Brown"
      />
      <PersonCard
        firstName="Alspaw"
        lastName="Jake"
        age={24}
        hairColor="Blonde"
      />
    </div>
  );
}

export default App;
