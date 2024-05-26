import React, { useState } from 'react';
import App from './App';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Main = () => {
    const [rendernewTop, setrendernewTop] = useState(false);

   
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login setrendernewTop={setrendernewTop}/>} />
            <Route path="*" element={
                <>
                   
                    <App rendernewTop={rendernewTop} setrendernewTop= {setrendernewTop}/>
                </>
            } />
        </Routes>
    </BrowserRouter>
  )
}

export default Main