import { OnBoarding } from "./components/OnBoarding";
import { Routes, Route } from 'react-router'
import SignUp from "./components/SignUp";

function App() {
  return (
    <div >
     <Routes>
     <Route path="/onboarding" element={<OnBoarding />} />
     <Route path="/" element={ <SignUp />} />
     </Routes>
    </div>
  );
}

export default App;
