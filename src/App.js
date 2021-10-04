import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Enrolled from './components/Enrolled/Enrolled';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubmitEnroll from './components/SubmitEnroll/SubmitEnroll';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/enrolled">
            <Enrolled></Enrolled>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/submit">
            <SubmitEnroll></SubmitEnroll>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
