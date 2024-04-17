import "./App.css";
// import DashBoard from "./Components/DashBoard";
import Status from "./Status";
import Text from "./Components/Text";
import Wrapper from "./Components/Wrapper";
import Event from "./Event";
import StyleProps from "./Components/StyleProps";

function App() {
  // const name = { firstName: "山田", lastName: "太郎" };
  // const followers = [
  //   { firstName: "山田", lastName: "一郎" },
  //   { firstName: "山田", lastName: "二郎" },
  //   { firstName: "山田", lastName: "三郎" },
  // ];
  return (
    <>
      {/* propsの値のデータの間違いを防げる、propsの渡し忘れを防げる */}
      {/* <DashBoard
        username={"my name"}
        notification={10}
        name={name}
        followers={followers}
      /> */}
      {/* <DashBoard username="my name" notification={10} name={{ firstName: "山田", lastName: "太郎" }} /> */}
      {/* という形で渡しても出力は同じ */}
      {/* <Status status={"success"} /> */}
      {/* <Wrapper>
        <Text>チルドレン</Text>
      </Wrapper> */}
      {/* <Event
        click={(e, text) => {
          alert(text);
        }}
      /> */}
      <StyleProps style={{ fontSize: 40 }} />
    </>
  );
}

export default App;
