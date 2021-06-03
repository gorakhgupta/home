import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {Switch,Route, Redirect} from 'react-router-dom';
import Home from './Home';
import Error from './Error';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Footer from './Footer';
// import './index.css';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path ="/home" component={Home}></Route>
    <Route exact path ="/about" component={About}></Route>
    <Route exact path ="/contact" component={Contact}><Contact/></Route>
    <Route exact path ="/project" component={Project}><Project/></Route>


    </Switch>
    <Footer/>



</>
  );
}

export default App;
