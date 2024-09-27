import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home"
import MealDetail from "./pages/MealDetail";
import Footer from "./components/Footer/Footer";
import Ingredients from "./pages/Ingredients";
import Areas from "./pages/Areas";

export default function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal/:id" element={<MealDetail />} /> 
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/areas" element={<Areas />} />
        </Routes>
      <Footer />
    </>
  )
}