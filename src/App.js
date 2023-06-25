import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import NavLinks from "./components/Content-and-Nav/NavLinks";
import "./index.css";
import Tops from "./components/Content-and-Nav/Tops";
import Bottoms from "./components/Content-and-Nav/Bottoms";
import Accessories from "./components/Content-and-Nav/Accessories";
import Admin from "./components/Content-and-Nav/Admin";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/tops">
          <Tops />
        </Route>
        <Route exact path="/bottoms">
          <Bottoms />
        </Route>
        <Route exact path="/accessories">
          <Accessories />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
