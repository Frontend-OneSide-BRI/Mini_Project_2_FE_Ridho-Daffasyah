import './App.css';

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Pages
import Homepage from './pages/Homepage';
import Gallery from './pages/Gallery';
import DetailPage from './components/DetailPage';

//Import Data
import { dataImg, dataVideo } from './utils/core'; 
import { mergeData } from './utils/core';

const App = () => {
  const data = mergeData(dataImg, dataVideo);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage data={data} />} />
        <Route path="/gallery" element={<Gallery data={data} />} />
        {
          data.map((item, index) => {
            return (
              <Route key={index} path={`/detail/${item.name}`} element={<DetailPage data={data} item={item} />} />
            )
          }
        )}
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
