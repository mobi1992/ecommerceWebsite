import logo from './logo.svg';
import './App.css';
import Home from './@pages/homePage';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import MainApp from './@pages';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MainApp />
    </div>
  );
}

export default App;
