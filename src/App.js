import "./App.scss";
import MainPage from "./pages/MainPage";
import SurveyPageContainer from "./containers/SurveyPageContainer";
import ResultPage from "./pages/ResultPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/survey" component={SurveyPageContainer} />
          <Route path="/result" component={ResultPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
