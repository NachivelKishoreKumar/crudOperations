import './App.css';
import Customers from './Customers';
import FormInput from './insertCustomer';
import {Switch,Route} from 'react-router-dom'

function App() {
    
  return (
    <div className="App">
    <Switch>
      <Route path ='/' exact={true}>
      <Customers/>
      </Route>
      <Route path ='/insertCustomer' exact={true}>
      <FormInput/>
      </Route>
    </Switch>
    </div>
    
  );
}

export default App;
