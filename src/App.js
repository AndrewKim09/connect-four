import './index.css';
import {HomePage} from './components/HomePage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { PlayVsPlayer } from './components/PlayVsPlayer';

function App() {
  return (
    <div className="App min-w-[100vw] min-h-[100vh] w-auto h-auto bg-lightPurple flex items-center">
      <HashRouter> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/play-vs-player" element={<PlayVsPlayer />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
