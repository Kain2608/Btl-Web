// src/components/News/NewsSidebar.jsx
import React from 'react';

const NewsSidebar = () => {
  // Dữ liệu danh mục lấy từ trang NewsPage cũ
  const categories = [
    { name: 'Thông Tin Tổng Hợp Cầu Lông', hasSub: true },
    { name: 'Câu Lạc Club - Nhóm Cầu Lông', hasSub: false },
    { name: 'Thầy Dạy Đánh Cầu Lông', hasSub: false },
    { name: 'Tin tức VNB Sports', hasSub: true },
    { name: 'Chính sách', hasSub: false },
    { name: 'Tin Tennis', hasSub: false },
    { name: 'Sân Tennis', hasSub: false },
    { name: 'Kiến thức tennis', hasSub: true },
    { name: 'Hiểu đúng về ghế massage', hasSub: false },
    { name: 'Sống khoẻ cùng VNB Sports', hasSub: false },
  ];

  return (
    <div className="bg-[#f8f9fa] border border-gray-200 shadow-sm">
      <h2 className="bg-[#f0f0f0] text-[15px] font-bold text-gray-800 px-4 py-3 uppercase border-b border-gray-200">
        Danh mục tin tức
      </h2>
      <ul className="bg-white">
        {categories.map((cat, index) => (
          <li key={index} className="border-b border-gray-100 last:border-b-0">
            <a 
              href="#" 
              className="flex justify-between items-center px-4 py-3 text-[13px] text-gray-700 hover:text-[#ea5c0b] transition-colors"
            >
              <span>{cat.name}</span>
              {cat.hasSub && (
                <span className="text-gray-400 font-light text-lg leading-none">+</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsSidebar;