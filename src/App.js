import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuardianApp from "./pages/GuardianApp";
import AboutUs from "./pages/AboutUs";
import Navigation from "./components/Navigation";
import Welcome from "./pages/Welcome";
import { useAppContext } from "./context/AppContext";

function App() {
  const {state} = useAppContext()
  const {darkmode} = state;
  return ( 
    <div className={`${darkmode ? "dark" : ""}`}>
    <BrowserRouter>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors">
    <Navigation/>
    <main>
    <Routes>
      <Route path="/" index element={<Welcome />}/>
      <Route path="/about" element={<AboutUs/>} />
      <Route path="/guardian" element={<GuardianApp />}  />
    </Routes>
    </main>
    </div>
    </BrowserRouter>
    </div> 
  );
}

export default App;
