import './App.css';
import CircleButton from './components/CircleButton/CircleButton';
import './css/RoundedSquarePanel.css';
/*import RoundedSquarePanel from './components/RoundedSquarePanel/RoundedSquarePanel';*/


function App() {
  return (
    <div className='rounded-square-panel'>
      <img src = "./img/icon-star.svg" alt="a star SVG"/>

      <div>
        <CircleButton buttonText='1'/>
        <CircleButton buttonText='2'/>
        <CircleButton buttonText='3'/>
        <CircleButton buttonText='4'/>
        <CircleButton buttonText='5'/>
      </div>
    </div>
  );
}

export default App;
