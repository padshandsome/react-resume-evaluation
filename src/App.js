import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Evaluation from "./components/Evaluation.jsx";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Evaluation />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
