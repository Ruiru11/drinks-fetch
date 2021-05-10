import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Hero from './components/Hero'


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' component={Hero} exact />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
