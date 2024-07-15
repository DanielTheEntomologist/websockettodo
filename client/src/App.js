import "./App.css";
import Container from "./components/Container/Container";
import Column from "./components/Column/Column";

const App = () => {
  return (
    <Container>
      <Column title="To Do List" icon="star" id="todolist"></Column>
    </Container>
  );
};

export default App;
