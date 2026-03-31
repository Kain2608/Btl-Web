// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import FranchisePage from './pages/FranchisePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GuidePayment from './pages/Guide/GuidePayment';
import ChooseGuide from './pages/Guide/ChooseGuide';
import ShoppingGuide from './pages/Guide/ShoppingGuide';
import ProductTechnology from './pages/Guide/ProductTechnology'
import CheckOrder from './pages/Check/CheckOrder';
import CheckWarranty from './pages/Check/CheckWarranty';
import Register from './pages/Account/Register';
import Login from './pages/Account/Login';
import ForgotPassWord from './pages/Account/ForgotPassWord';
import ProductsPage from './pages/ProductsPage';
import Address from './pages/Address';
import Scroll from './components/ScrollToTop';


// 1. Import trang chi tiết (chúng ta sẽ tạo ở Bước 4)
import NewsDetailPage from './pages/NewsDetailPage'; 

function App() {
  return (
    <MainLayout>
      <Scroll />
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/tin-tuc" element={<NewsPage />} />
        
        {/* 2. ĐỊNH NGHĨA TUYẾN ĐƯỜNG ĐỘNG CHO TRANG CHI TIẾT */}
        {/* :newsSlug là tham số động, ví dụ: /tin-tuc/kham-pha-san-cau-long */}
        <Route path="/tin-tuc/:newsSlug" element={<NewsDetailPage />} />
        <Route path="/nhuong-quyen" element={<FranchisePage />} />
        <Route path="/gioi-thieu" element={<AboutPage />} />
        <Route path="/lien-he" element={<ContactPage />} />
        <Route path="/huong-dan/thanh-toan" element={<GuidePayment />} />
        <Route path="/huong-dan/mua-hang" element={<ChooseGuide />} />
        <Route path="/huong-dan/chon-vot" element={<ShoppingGuide />} />
        <Route path="/huong-dan/cong-nghe" element={<ProductTechnology />} />
        <Route path="kiem-tra-don-hang" element={<CheckOrder />} />
        <Route path="kiem-tra-bao-hanh" element={<CheckWarranty />} />
        <Route path="dang-ky" element={<Register />} />
        <Route path="dang-nhap" element={<Login />} />
        <Route path="quen-mat-khau" element={<ForgotPassWord />} />
        <Route path="/san-pham/:slug" element={<ProductsPage />} />
        <Route path="/dia-chi" element={<Address />} />
        
        <Route path="*" element={<div className="py-20 text-center text-2xl font-bold">404 - Không tìm thấy trang</div>} />
      </Routes>
    </MainLayout>
  );
}

export default App;