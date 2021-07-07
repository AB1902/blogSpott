import './App.css';
import Header from './components/Header';
import Home from './containers/Home';
import About from './containers/About';
import Post from './containers/Post';
import Hero from './components/Hero';
import ContactUs from './containers/ContactUs';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/about" component={About} />
        <Route path="/post/:postId" component={Post} />
        
      </div>
    </Router>
  );
}

export default App;
