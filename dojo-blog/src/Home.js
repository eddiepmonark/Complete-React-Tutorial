import { useState } from 'react';


const Home = () => {
    // let name = 'mario';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        // name = 'luigi';
        // console.log(name);
        setName('luigi');
        setAge(30);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <p>{ name } is { age } years old</p>
        </div>
     );
}
 
export default Home;