import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main'
import ShowOne from './components/ShowOne';
import ShowPlayer from './components/ShowPlayer';

function App() {

  return (
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>

          <Route exact path="/tournament/:_id">
            <ShowOne/>
          </Route>
        </Switch>

        <Route exact path="/tournamentPlayer/:_id/:player_id">
          <ShowPlayer/>
        </Route>
    </div>
  );
}

export default App;
