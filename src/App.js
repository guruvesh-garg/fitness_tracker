import BMICalculator from './components/BmiCalc';
import BodyFatCalculator from './components/BodyfatPercent';
import Login from './components/LoginPage';
import Navbar from './components/NavBar';
import SignupForm from './components/SignUp';
import { Route,BrowserRouter,Routes } from 'react-router';

function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route index element={<SignupForm/>} />
          <Route exact path="/loginpage" element={<Login/>}/>
          <Route exact path="/bmicalc" element={<BMICalculator/>}/>
          <Route exact path='/bodyfatpercent' element={<BodyFatCalculator/>}/>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
