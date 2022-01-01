import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppComponent from './components/AppComponent';
import Footer from './components/Footer/Footer';
import RecipeComponent from "./components/RecipeComponent";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AppComponent />} />
          <Route path='/recipecomponent' element={<RecipeComponent />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;