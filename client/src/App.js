import './App.css';
import Main from './views/Main'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1> Favorite Authors </h1>
      <Routes>
        <Route path='/author' element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;
