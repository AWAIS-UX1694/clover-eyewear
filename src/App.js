import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './app/Landing';
import HomeLayout from './layout/HomeLayout';
import Customer from './views/customer/Customer';
import ConfirmPrescription from './views/customer/ConfirmPrescription';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout />}>
            <Route index element={<Landing />} />
            <Route path='get-started' element={<Customer />} />
            <Route path='confirm-prescription' element={<ConfirmPrescription />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
