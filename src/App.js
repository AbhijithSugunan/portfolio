import logo from './logo.svg';
import './App.scss';
import LandingPageComponent from './pages/landingpage/landingpage.component';
import Header from './components/header/header.component';
import CvComponent from './pages/cv/cv.component';
import ContactComponent from './pages/contact/contact.component'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App" >
      <Header />
      <Switch>
          <Route exact path="/" component={LandingPageComponent} />
          <Route path="/cv" component={CvComponent} />
          <Route path="/contact" component={ContactComponent} />
        </Switch>
    </div>
  );
}

export default App;
