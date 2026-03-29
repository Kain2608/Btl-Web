import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  // Dữ liệu danh sách cửa hàng (như trong ảnh mẫu)
  const stores = [
    { id: 1, name: 'VNB Super Center', phone: '0936155994', address: '390/2 Hà Huy Giáp, Phường Thạnh Lộc, Quận 12' },
    { id: 2, name: 'VNB PREMIUM Quận 1', phone: '0931823614', address: '20 Cao Bá Nhạ, Phường Nguyễn Cư Trinh, Quận 1, TPHCM' },
    { id: 3, name: 'VNB PREMIUM Quận 11', phone: '0828333323', address: '209 Âu Cơ, Phường 5, quận 11, Tp.HCM' },
    { id: 4, name: 'VNB PREMIUM Bình Thạnh', phone: '0862527179', address: '284 Xô Viết Nghệ Tĩnh, P21, Quận Bình Thạnh, Tp.HCM' },
    { id: 5, name: 'VNB PREMIUM TP Thủ Đức', phone: '0767306363', address: '916 Kha Vạn Cân phường Trường Thọ TP Thủ Đức' },
    { id: 6, name: 'VNB Quận 1', phone: '0798684568', address: 'Số 6 Nguyễn Hữu Cầu Phường Tân Định Quận 1' },
    { id: 7, name: 'VNB Quận 3', phone: '0936914920', address: '218 Lý Thái Tổ Phường 1, Quận 3' },
    { id: 8, name: 'VNB Quận 4', phone: '070 770 7886', address: 'Số 400 Đường Hoàng Diệu, Phường Vĩnh Hội, Thành phố Hồ Chí Minh ( Phường 2, Quận 4 Cũ )' },
    { id: 9, name: 'VNB Quận 5', phone: '0903 178 483', address: '19 Tân Hưng, Phường 12, Quận 5, TPHCM' },
    { id: 10, name: 'VNB Quận 6', phone: '0935267926', address: '129 Kinh Dương Vương Phường 12 Quận 6' },
    { id: 11, name: 'VNB Quận 7', phone: '0899793965', address: '39 đường 65, Phường Tân Phong, Quận 7, TP. HCM' },
  ];

  return (
    <div className="w-full bg-[#f8f9fa] pb-12 font-sans">
      
      {/* ================= THÀNH ĐIỀU HƯỚNG (BREADCRUMB) ================= */}
      <div className="bg-[#f0f0f0] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 text-[13px] text-gray-600">
          <Link to="/" className="hover:text-[#ea5c0b]">Trang chủ</Link>
          <span className="mx-2">›</span>
          <span className="text-[#ea5c0b]">Liên hệ</span>
        </div>
      </div>

      {/* ================= NỘI DUNG CHÍNH ================= */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* CỘT TRÁI: FORM & BẢN ĐỒ (Chiếm 1/2) */}
          <div className="w-full lg:w-1/2">
            
            {/* Tiêu đề & Thông tin */}
            <h1 className="text-[16px] font-bold text-gray-800 uppercase mb-4">
              Nơi giải đáp toàn bộ mọi thắc mắc của bạn?
            </h1>
            <div className="text-[14px] text-gray-800 mb-8 space-y-2">
              <p><span className="font-bold">Hotline:</span> <span className="text-[#ea5c0b]">0977508430 | 0338000308</span></p>
              <p><span className="font-bold">Email:</span> <span className="text-[#ea5c0b]">info@shopvnb.com</span></p>
            </div>

            {/* Form liên hệ */}
            <h2 className="text-[16px] font-bold text-gray-800 uppercase mb-4">
              Liên hệ với chúng tôi
            </h2>
            <form className="mb-8 space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder="Họ và tên" 
                  className="w-full md:w-1/2 border border-gray-300 rounded px-4 py-2 text-[14px] outline-none focus:border-[#ea5c0b] transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full md:w-1/2 border border-gray-300 rounded px-4 py-2 text-[14px] outline-none focus:border-[#ea5c0b] transition-colors"
                />
              </div>
              <input 
                type="text" 
                placeholder="Điện thoại" 
                className="w-full border border-gray-300 rounded px-4 py-2 text-[14px] outline-none focus:border-[#ea5c0b] transition-colors"
              />
              <textarea 
                placeholder="Nội dung" 
                rows="4" 
                className="w-full border border-gray-300 rounded px-4 py-2 text-[14px] outline-none focus:border-[#ea5c0b] transition-colors resize-none"
              ></textarea>
              
              {/* Nút gửi màu xanh đen đậm như trong ảnh */}
              <button 
                type="submit" 
                className="bg-[#1b4268] hover:bg-[#112a42] text-white text-[14px] px-6 py-2 rounded transition-colors"
              >
                Gửi thông tin
              </button>
            </form>

            {/* Bản đồ Google Maps */}
            <div className="w-full h-[300px] border border-gray-200 rounded overflow-hidden shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.474640989047!2d106.67891481521683!3d10.851458992270481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529d20120ab5b%3A0xc36dc8a995fc085a!2sVNB%20Sports%20Super%20Center!5e0!3m2!1svi!2s!4v1689000000000!5m2!1svi!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ VNB Sports"
              ></iframe>
            </div>

          </div>


          {/* CỘT PHẢI: LOGO & DANH SÁCH CỬA HÀNG (Chiếm 1/2) */}
          <div className="w-full lg:w-1/2">
            
            {/* Logo VNB */}
            <div className="mb-6">
              <img 
                src="https://cdn.shopvnb.com/themes/images/logo.svg" 
                alt="VNB Sport Logo" 
                className="h-10 object-contain"
              />
            </div>

            {/* Danh sách cửa hàng dạng Text */}
            <div className="text-[14px] text-gray-700 space-y-4">
              {stores.map((store) => (
                <div key={store.id}>
                  <p>
                    <strong className="text-gray-900">{store.id}. {store.name}</strong> - {store.phone}
                  </p>
                  <p className="text-gray-600">
                    {store.address}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;