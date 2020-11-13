import "./App.scss";
import MainPage from "./pages/MainPage";
import SurveyPage from "./pages/SurveyPage";
import ResultPage from "./pages/ResultPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/survey" component={SurveyPage} />
          <Route path="/result" component={ResultPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
