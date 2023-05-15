import { Route, Routes } from 'react-router-dom';
import Greetings from './components/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </div>
  );
}

export default App;
