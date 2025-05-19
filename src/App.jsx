import Gallery from "./components/Gallery";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Safety from "./components/Safety";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="safety" element={<Safety />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
