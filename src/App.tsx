import "./App.css";
import DashBoard from "./Components/DashBoard";

function App() {
  return (
    <>
      {/* propsの値のデータの間違いを防げる、propsの渡し忘れを防げる */}
      <DashBoard username="my name" notification={10} />
    </>
  );
}

export default App;
