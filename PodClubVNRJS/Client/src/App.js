import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ListProductPage from './Pages/ListProductPage/ListProductPage';
import ProductDetailPage from './Pages/ProductDetailsPage/ProductDetailPage';
import CommitPage from './Pages/ExtraPage/CommitPage';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/list-products" element={<ListProductPage />}/>
          <Route path="/product-detail" element={<ProductDetailPage />}/>
          <Route path="/commit" element={<CommitPage />}/>
        </Routes>
    </div >
  );
}

export default App;
