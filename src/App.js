import './index.css';
import {HomePage} from './components/HomePage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { PlayVsPlayer } from './components/PlayVsPlayer';
import { GameRules } from './components/GameRules';

function App() {
  return (
    <div className="App min-w-[100vw] min-h-[100vh] w-auto h-auto bg-lightPurple flex items-center">
      <HashRouter> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/play-vs-player" element={<PlayVsPlayer />} />
          <Route path="/game-rules" element={<GameRules />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
