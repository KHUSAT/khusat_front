import './App.css';
import MainPage from './pages/MainPage';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact to="/" component={MainPage}/>
        <Route to="/survey"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
