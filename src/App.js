import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Hero from './components/Hero'
import CockTailPreview from './components/Cokctails/View/index'


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' component={Hero} exact />
      <Route path='/cocktails/:id' component={CockTailPreview} exact />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
