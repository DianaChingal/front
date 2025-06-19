import { BrowserRouter,Routes, Route, Navigate} from "react-router-dom";
import {ProductsPage} from './pages/ProductsPage';
import { ProductsFormPage } from "./pages/ProductsFormPage";
import {TypeProductsPage} from './pages/TypeProductsPage';
import {FilterProductsPage} from './pages/FilterProductsPage';
import {Navigation} from './components/Navigation';
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes> 
        <Route path="/" element={<Navigate to ="/products" />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/new" element={<ProductsFormPage />} />
        <Route path="/products/filter"element={<FilterProductsPage />} />   
        <Route path="/products/:id" element={<ProductsFormPage />} />
        <Route path="/typeProducts" element={<TypeProductsPage />} />
      </Routes>
      <Toaster/>
    </BrowserRouter>
  );

}
export default App;