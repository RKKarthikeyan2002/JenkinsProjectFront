import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'
import AppliNavBar from './AppliNavBar'
import ViewStock from '../Stock/ViewStock';
import AddStock from '../Stock/AddStock';
import ViewPurchase from '../Purchase/ViewPurchase';
import AddPurchase from '../Purchase/AddPurchase';
import UpdatePurchase from '../Purchase/UpdatePurchase';
import UpdateStock from '../Stock/UpdateStock';

function AppRouter() {
  return (
    <div>
      <Router>
        <AppliNavBar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/viewStock" element={<ViewStock />} />
            <Route path="/viewPurchase" element={<ViewPurchase />} />
            <Route path="/addStock" element={<AddStock />} />
            <Route path="/addPurchase" element={<AddPurchase />} />
            <Route path="/:id/updatePurchase" element={<UpdatePurchase />} />
            <Route path="/:id/updateStock" element={<UpdateStock />} />
        </Routes>
        
      </Router>
    </div>
  )
}

export default AppRouter
