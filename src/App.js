import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavLinks from "./components/NavLinks";
import "./index.css";
import Tops from "./components/Tops";
import Bottoms from "./components/Bottoms";
import Accessories from "./components/Accessories";

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
      </Switch>
    </div>
  );
}

export default App;
