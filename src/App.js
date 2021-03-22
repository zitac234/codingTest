import "./App.css";
import { Header } from "./Header";
import { List } from "./List";
import { data as listItems } from "./_data";

function App() {
  return (
    <div className="App">
      <Header />
      <List items={listItems} />
    </div>
  );
}

export default App;
