import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload again.
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

function Hello(){
  return <p>Hello,React!</p>
}
function Bye() {
  return <p>Goodbye, React!</p>;
}
function App() {
  return (
    <div>
      <Hello />
      <Bye />
    </div>
  );
}
export default App;
