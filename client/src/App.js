import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SavedArticles from "./pages/SavedArticles";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/saved" component={SavedArticles} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
