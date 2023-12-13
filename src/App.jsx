import { useState } from "react";
import "./App.css";
import UserList from "./assets/userList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserList />
    </>
  );
}

export default App;
