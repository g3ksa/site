import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainBlock } from './pages/mainBlock';
import { Layout } from './components/Layout';

const App = () => {
   return (
      <>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index element={<MainBlock />} />
            </Route>
         </Routes>
      </>
   );
};

export default App;
