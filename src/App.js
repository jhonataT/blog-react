import Home from './containers/Home';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Home/>
        </div>
    );
};

export default App;