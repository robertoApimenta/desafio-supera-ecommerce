import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Produtos from './component/Produtos';
import Produto from './component/Produto';
import Carrinho from './component/Carrinho';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/produtos" element={<Produtos />} />
          <Route exact path="/produto/:id" element={<Produto />} />
          <Route exact path="/carrinho" element={<Carrinho />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
