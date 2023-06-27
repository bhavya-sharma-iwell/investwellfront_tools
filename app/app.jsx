import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceGenerator from './uiCollection/taxInvoiceGenerator/index.jsx'
import PortfolioCorrelation from './uiCollection/portfolioCorrelation/index.jsx'
import PortfolioOverlap from './uiCollection/portfolioOverlap/index.jsx'
import Layout from './uiCollection/main.jsx'

const App = ()=> {
    
return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}/>
      <Route path="/invoiceGenerator" element={<InvoiceGenerator />} />
      <Route path="/portfolioCorrelation" element={<PortfolioCorrelation />} />
      <Route path="/portfolioOverlap" element={<PortfolioOverlap />} />
    </Routes>
  </BrowserRouter>  
    </>
 
)
}

export default App   


