import './App.css';
import Mobilenav from './components/mobilenav';
import Desktopnav from './components/desktopnav';
import Body from './components/bodycopy';






function App() {


  return (
    <>

      <div className="hero">

        <Mobilenav />
        <Desktopnav />

      </div>
      <Body />



    </>



  );
}

export default App;
