import Home from './containers/Home';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactUS from './containers/ContactUS';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Hero/>
                <Route path="/" component={Home} />
                <Route path="/contact-us" component={ContactUS} />
            </div>
        </Router>
    );
};

export default App;