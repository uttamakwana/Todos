import { BrowserRouter, Routes, Route } from "react-router-dom";
import StateProvider from "./StateProvider";
import Home from "./pages/home/Home";
function App() {
  return (

    // StateProvider is the parent componenet as it will provide all the state values to its children!
    <StateProvider>
      <BrowserRouter>
        <Routes>
          {/* We will set diffrent routes for diffrent pages */}
          {/* Home page */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
