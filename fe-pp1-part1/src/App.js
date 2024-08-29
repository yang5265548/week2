// import './App.css';
// import logo from './images/logo.svg';

// function App() {
//   return (
//     <>
//       <h3>React Practice</h3>
//       <img src={logo} className="App-logo" alt="logo" />
//     </>
//   );
// }

// export default App;
import './css/App.css';
import IdCard from './component/IdCard';
import Greetings from './component/Greetings';
import Random from './component/Random';
function App() {
  return (
    <div>

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        pic="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        pic="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </div>

  );
}

export default App;