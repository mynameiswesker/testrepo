import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Home} from './Components/Home'
import {Auth} from './Components/Auth'
import {Admin} from './Components/Admin'
import {CreateObject} from './Components/CreateObject'
import {Dist} from './Components/Dist'
import {Stations} from './Components/Stations'
import {SingleObject} from './Components/SingleObject'
import {Archive} from './Components/Archive'
import {StationInArchive} from './Components/StationInArchive'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/dist:id' component={Dist}/>
        <Route exact path='/dist:id/:station' component={Stations}/>
        <Route exact path='/dist:id/:station/:name_object' component={SingleObject}/>
        <Route exact path='/auth' component={Auth} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/admin/create' component={CreateObject} />
        <Route exact path='/admin/archive' component={Archive} />
        <Route exact path='/admin/archive/:station' component={StationInArchive}></Route>
      </Switch>
    </Router>
  );
}

export default App;
