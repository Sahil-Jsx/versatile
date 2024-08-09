import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/header/header";
import Hero from "./pages/hero/hero";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero/>
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
