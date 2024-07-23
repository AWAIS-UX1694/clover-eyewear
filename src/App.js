import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './app/Landing';
import HomeLayout from './layout/HomeLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout />}>
            <Route index element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
