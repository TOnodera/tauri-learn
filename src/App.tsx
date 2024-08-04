import '@fontsource/inter';
import { CssBaseline } from '@mui/joy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopPage from './pages/TopPage';
import OtherPage from './pages/OtherPage';

function App() {

  return (
    <CssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TopPage />}/>
          <Route path="/other" element={<OtherPage />}/>
        </Routes>
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
