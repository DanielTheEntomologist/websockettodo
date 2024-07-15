import "./App.css";
import Container from "./components/Container/Container";
import Column from "./components/Column/Column";
import ConnectionSwitch from "./components/ConnectionSwitch/ConnectionSwitch";

const App = () => {
  return (
    <div>
      <ConnectionSwitch>Connect</ConnectionSwitch>
      <Container>
        <Column title="To Do List" icon="star" id="todolist"></Column>
      </Container>
    </div>
  );
};

export default App;
