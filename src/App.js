import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import HOME from './page/Home';
import ChordTransfer from './chord/ChordTransfer';
import SheetList from './sheet/SheetList'

import Img from './component/score/ScoreImg';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<HOME/>} />
          <Route path="/chordtransfer/" element={<ChordTransfer/>} />
          <Route path="/sheetlist/" element={<SheetList/>} />
          
          <Route path="/img/" element={<Img/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
