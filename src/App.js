import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>

          <Route exact path="/">
            <Movies></Movies>
          </Route>

          <Route path="/movies">
            <Movies></Movies>
          </Route>
          
          <Route path="/movie/:id">
            <MovieDetails></MovieDetails>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
