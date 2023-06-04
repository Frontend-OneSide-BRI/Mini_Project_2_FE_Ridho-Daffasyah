import './App.css';

import React, { useState } from "react";

//Import Pages
import Homepage from './pages/Homepage';
import Gallery from './pages/Gallery';

//Import Data
import { dataImg, dataVideo } from './utils/core'; 
import { mergeData } from './utils/core';

const App = () => {
  const [isGallery, setIsGallery] = useState(false);
  const data = mergeData(dataImg, dataVideo);

  return (
   <>
      {
        isGallery ? <Gallery isGallery={isGallery} data={data} /> : <Homepage data={data} />
      }
    </>
  );
}

export default App;
