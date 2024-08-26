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
// App.js
import Header from './Header';
import Section from './Section';
import Article from './Article';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './styles.css';

function App() {
  return (
    <div>
      <Header title="JSX and Props Showcase" />
      <Section heading="Section 1" content="This is the content of section 1." />
      <Article title="Article 1" text="Content of Article 1." />
      <Sidebar content="Sidebar content goes here." />
      <Section heading="Section 2" content="This is the content of section 2." />
      <Footer text="Copyright © 2023 JSX Props App" />
    </div>
  );
}

export default App;