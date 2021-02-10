import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  const title = 'Welcome to the new blog';
  // const likes = 50;
  // const person = { name: 'yoshi', age: 30 };
  // const link = "https://google.com";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <h1>{ title }</h1> */}
        <Home />
        
        {/* <p>Liked { likes } times</p>
        <p>{ person }</p>
        <p>{ "hello, ninjas "}</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>
        <a href={link}>Google</a> */}
      </div>
    </div>
  );
}

export default App;
