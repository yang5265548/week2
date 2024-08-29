// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import Greeting from './Greeting';
import './App.css'; // Import CSS file

function App() {
    return (
        <div className="App">
            <Greeting name="Alice" message="Welcome to the lab!" />
             <Greeting name="Bob" message="Good morning" />
        </div>
    );
}

export default App;

// import Card from './Card';
// // import './App.css'; // Import CSS file

// function App() {
//     return (
//       <Card>
//         <h2>Card Title</h2>
//         <p>Card content goes here.</p>
//         <button>Click Me</button>
//       </Card>
//     );
//   }

// export default App;