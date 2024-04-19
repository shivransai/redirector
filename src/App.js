import React from 'react';
import Redirect from './redirect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Redirect linkToRedirectTo="https://www.pepperbowl.com/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
