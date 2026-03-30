import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full font-sans">
      {/* ================= PHẦN TRÊN: NỀN ĐEN ================= */}
      <div className="bg-[#1c1c1c] text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Cột 1: Thông Tin Chung */}
            <div>
              <h3 className="text-white font-bold text-[15px] uppercase mb-5">Thông Tin Chung</h3>
              <p className="text-[13px] leading-relaxed mb-3">
                <span className="text-[#ea5c0b] font-bold">VNB Sports</span> là hệ thống cửa hàng cầu lông, pickleball với hơn 80 chi nhánh trên toàn quốc, cung cấp sỉ và lẻ các mặt hàng dụng cụ cầu lông, pickleball từ phong trào tới chuyên nghiệp
              </p>
              <p className="text-[13px] leading-relaxed mb-3">
                <span className="text-[#ea5c0b] font-bold">Với sứ mệnh:</span> "VNB cam kết mang đến những sản phẩm, dịch vụ chất lượng tốt nhất phục vụ cho người chơi thể thao để nâng cao sức khỏe của chính mình."
              </p>
              <p className="text-[13px] leading-relaxed">
                <span className="text-[#ea5c0b] font-bold">Tầm nhìn:</span> "Trở thành nhà phân phối và sản xuất thể thao lớn nhất Việt Nam"
              </p>
            </div>

            {/* Cột 2: Thông Tin Liên Hệ */}
            <div>
              <h3 className="text-white font-bold text-[15px] uppercase mb-5">Thông Tin Liên Hệ</h3>
              <p className="text-[13px] mb-2">
                Hệ thống cửa hàng: <span className="text-[#ea5c0b] font-bold">1 Super Center, 5 shop Premium và 78 cửa hàng</span> trên toàn quốc
              </p>
              <Link
                to='dia-chi'
                className="text-[#ea5c0b] font-bold text-[13px] block mb-4 hover:underline">
                Xem tất cả các cửa hàng VNB
              </Link>
              <p className="text-[13px] mb-2">
                <span className="font-bold text-white">Hotline:</span> <span className="text-[#ea5c0b]">0977508430 | 0338000308</span>
              </p>
              <p className="text-[13px] mb-2">
                <span className="font-bold text-white">Email:</span> <span className="text-[#ea5c0b]">info@shopvnb.com</span>
              </p>
              <p className="text-[13px] mb-2">
                <span className="font-bold text-white">Hợp tác kinh doanh:</span> <span className="text-[#ea5c0b]">0947342259 (Ms. Thảo)</span>
              </p>
              <p className="text-[13px] mb-2">
                <span className="font-bold text-white">Hotline bán sỉ:</span> <span className="text-[#ea5c0b]">0911195711 0911105211</span>
              </p>
              <p className="text-[13px] mb-2">
                <span className="font-bold text-white">Nhượng quyền thương hiệu:</span> <span className="text-[#ea5c0b]">0334.741.141 (Mr. Hậu)</span>
              </p>
              <p className="text-[13px] mb-5">
                <span className="font-bold text-white">Than phiền dịch vụ:</span> <span className="text-[#ea5c0b]">0334.741.141 (Mr. Hậu)</span>
              </p>
              {/* Mạng xã hội */}
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ea5c0b] hover:text-[#ea5c0b] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#ea5c0b] hover:text-[#ea5c0b] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Cột 3: Chính Sách */}
            <div>
              <h3 className="text-white font-bold text-[15px] uppercase mb-5">Chính Sách</h3>
              <ul className="space-y-3 text-[13px]">
                <Link
                  to ='/huong-dan/thanh-toan'
                  className="flex items-center"><span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span> <a href="#" className="hover:text-[#ea5c0b] transition-colors">Thông tin về vận chuyển và giao nhận</a>
                </Link>
                <Link
                  to = '/huong-dan/thanh-toan'
                  className="flex items-center"><span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span> <a href="#" className="hover:text-[#ea5c0b] transition-colors">Chính sách đổi trả, hoàn tiền</a>
                </Link>
                <Link
                  to = '/huong-dan/thanh-toan'                
                  className="flex items-center"><span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span> <a href="#" className="hover:text-[#ea5c0b] transition-colors">Chính sách bảo hành</a>
                </Link>
                {/* Mục này trong ảnh gốc có màu cam mặc định */}
                <Link
                  to= '/huong-dan/thanh-toan'
                  className="flex items-center"><span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span> <a href="#" className="hover:text-[#ea5c0b] transition-colors">Chính sách xử lý khiếu nại</a>
                </Link>
                <Link
                  to = '/huong-dan/thanh-toan'
                  className="flex items-center"><span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span> <a href="#" className="hover:text-[#ea5c0b] transition-colors">Chính sách vận chuyển</a>
                </Link>
                <Link
                  to='/huong-dan/thanh-toan'
                  className="flex items-center"><span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span> <a href="#" className="hover:text-[#ea5c0b] transition-colors">Điều khoản sử dụng</a>
                </Link>
                <Link
                  to='/huong-dan/thanh-toan'
                  className="flex items-center"><span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span> <a href="#" className="hover:text-[#ea5c0b] transition-colors">Chính Sách Bảo Mật Thông Tin</a>
                </Link>
                <Link
                  to='/nhuong-quyen'
                  className="flex items-center"><span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span> <a href="#" className="hover:text-[#ea5c0b] transition-colors">Chính sách nhượng quyền</a>
                </Link>
              </ul>
            </div>

            {/* Cột 4: Hướng Dẫn */}
            <div>
              <h3 className="text-white font-bold text-[15px] uppercase mb-5">Hướng Dẫn</h3>
              <ul className="space-y-3 text-[13px]">
                <li>
                  <Link 
                    to="/huong-dan/mua-hang" 
                    className="hover:text-[#ea5c0b] transition-colors"
                  >
                  Hướng dẫn mua hàng
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/huong-dan/chon-vot" 
                    className="hover:text-[#ea5c0b] transition-colors"
                  >
                    Hướng dẫn cách chọn vợt cầu lông cho người chơi mới
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/kiem-tra-bao-hanh" 
                    className="hover:text-[#ea5c0b] transition-colors"
                  >
                    Kiểm tra bảo hành
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/kiem-tra-don-hang" 
                    className="hover:text-[#ea5c0b] transition-colors"
                  >
                    Kiểm tra đơn hàng
                  </Link>
                </li>
                <li>
                    <Link 
                      to="/huong-dan/mua-hang" 
                      className="hover:text-[#ea5c0b] transition-colors"
                    >
                    Hướng dẫn mua hàng
                    </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ================= PHẦN DƯỚI: NỀN CAM ================= */}
      <div className="bg-[#ea5c0b] py-6 text-white text-center text-[13px]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <p className="mb-1 font-medium">Công ty TNHH VNB SPORTS</p>
          <p className="mb-1">Địa chỉ: 390/2 Hà Huy Giáp, Phường Thạnh Lộc, Quận 12, TPHCM</p>
          <p className="mb-1">Email: info@shopvnb.com</p>
          <p className="mb-2">GPKD số 0314496879 do Sở KH và ĐT TP Hồ Chí Minh cấp ngày 05/07/2017</p>
          <p className="mb-4">GĐ/Sở hữu website: Nguyễn Phùng Hà Lan</p>
          
          {/* Logo Bộ Công Thương */}
          <a href="#" className="inline-block">
            <img 
              src="https://cdn.shopvnb.com/themes/images/bct.webp" 
              alt="Đã thông báo Bộ Công Thương" 
              className="h-10 object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;