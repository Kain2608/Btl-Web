import React from 'react';
import { Link } from 'react-router-dom';

const FloatingButtons = () => {
  return (
    <>
      {/* ================= NÚT XEM GIỎ HÀNG (GÓC DƯỚI TRÁI) ================= */}
      {/* fixed, bottom-4 (cách đáy), left-0 (sát lề trái), z-50 (nổi lên trên) */}
      <div className="fixed bottom-4 left-0 z-50">
        <Link 
          to="/cart" 
          className="flex items-center bg-[#666666] text-white pl-2 pr-5 py-2 rounded-r-full shadow-lg hover:bg-gray-700 transition-colors"
        >
          {/* Icon Giỏ hàng nền vàng */}
          <div className="bg-[#eab308] p-1.5 rounded-md mr-2">
            <svg 
              className="w-4 h-4 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <span className="text-[13px] font-bold">Xem giỏ hàng (0)</span>
        </Link>
      </div>

      {/* ================= CỤM NÚT BÊN PHẢI (ZALO + CỬA HÀNG) ================= */}
      <div className="fixed bottom-4 right-0 z-50 flex flex-col items-end">
        
        {/* Nút Zalo (Nằm ngay trên nút Hệ thống cửa hàng) */}
        {/* mr-4 để thụt vào một chút cho thẳng hàng với nút xanh bên dưới */}
        <a 
          href="https://zalo.me/your-zalo-id" 
          target="_blank" 
          rel="noreferrer" 
          className="mb-3 mr-4 hover:scale-110 transition-transform duration-300 drop-shadow-lg"
        >
          {/* Sử dụng ảnh logo Zalo (Bạn có thể tải ảnh thật về thư mục assets sau) */}
          <img 
            src="https://page.biz.zdn.vn/files/a2bc2818de77da3b246a.png" 
            alt="Zalo Chat" 
            className="w-[45px] h-[45px] object-contain bg-white rounded-full"
          />
        </a>

        {/* Nút Hệ thống cửa hàng (Sát lề phải) */}
        <Link 
          to="/he-thong-cua-hang" 
          className="flex items-center bg-[#3b82f6] text-white pl-5 pr-3 py-2.5 rounded-l-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          {/* Icon Bản đồ / Location */}
          <svg 
            className="w-4 h-4 mr-2" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span className="text-[14px] font-bold">Hệ thống cửa hàng</span>
        </Link>

      </div>
    </>
  );
};

export default FloatingButtons;