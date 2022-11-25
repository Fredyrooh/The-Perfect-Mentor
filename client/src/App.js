import { OnBoarding } from "./components/OnBoarding";
import { Routes, Route } from 'react-router'

function App() {
  return (
    <div >
     <Routes>
     <Route path="/" element={<OnBoarding />} />
     </Routes>
    </div>
  );
}

export default App;
