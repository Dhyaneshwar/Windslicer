import { BrowserRouter, Routes, Route } from "react-router";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import NavLayout from "./components/NavLayout";
import Safety from "./components/Safety";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="safety" element={<Safety />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
