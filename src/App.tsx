import './App.css';
import { Route, Switch } from 'wouter';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={MainPage} />
        <Route>404: No such page!</Route>
      </Switch>
    </>
  );
}

export default App;
