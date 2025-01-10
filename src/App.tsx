import './App.css';
import { MainPage } from '@/pages/MainPage';
import { Flex, Heading } from '@radix-ui/themes';
import { Route, Switch } from 'wouter';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={MainPage} />
        <Route>
          <Flex direction="column" align="center" p="5">
            <Heading>404: No such page!</Heading>
          </Flex>
        </Route>
      </Switch>
    </>
  );
}

export default App;
