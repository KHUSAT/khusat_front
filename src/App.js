import MainPage from "./pages/MainPage";
import SurveyPageContainer from "./containers/SurveyPageContainer";
import ResultPageContainer from "./containers/ResultPageContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/survey" component={SurveyPageContainer} />
          <Route path="/result" component={ResultPageContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
