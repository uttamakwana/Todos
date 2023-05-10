import { BrowserRouter, Routes, Route } from "react-router-dom";
import StateProvider from "./StateProvider";
import Home from "./pages/home/Home";
function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
