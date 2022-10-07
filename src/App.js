import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FanSignPage from './component/FanSignPage';
import Talentsignup from './component/Talentsignup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<FanSignPage />} />
          <Route path="/fanpage" element={<FanSignPage />} />
          <Route path="/talentpage" element={<Talentsignup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
