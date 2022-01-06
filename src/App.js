import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Chatroom from "./components/Chatroom/Chatroom";
function App() {
  return (
    <div>
      <Switch>
        <Route path='/chatroom' component={Chatroom}/>
        <Route path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
