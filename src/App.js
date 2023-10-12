import './App.css';
import CircleButton from './components/CircleButton/CircleButton';

function App() {
  return (
    <div className="Panel">
      <CircleButton buttonText='1'/>
      <CircleButton buttonText='2'/>
      <CircleButton buttonText='3'/>
      <CircleButton buttonText='4'/>
      <CircleButton buttonText='5'/>
    </div>
  );
}

export default App;
