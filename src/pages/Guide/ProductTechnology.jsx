// src/pages/NewsPage.jsx - CẬP NHẬT
import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import NewsSidebar from '../../components/News/NewsSidebar'; // 2. Import Sidebar component

const NewsPage = () => {
  // Dữ liệu mẫu bài viết, đã THÊM thuộc tính 'slug' để làm URL
  const newsItems = [
    {
      id: 1,
      slug: 'kham-pha-san-cau-long-d-badminton', // Cái tên thân thiện trên URL
      title: 'Khám Phá Sân Cầu Lông D-Badminton Tân Phú Chất Lượng...',
      date: '28-03-2026 16:58',
      excerpt: 'Nếu bạn đang tìm kiếm một sân cầu lông tại TP.HCM vừa giá rẻ, vừa không gian rộng rãi, lại đảm bảo n...',
      image: 'https://cdn.shopvnb.com/img/400x240/uploads/san-cau-long-d-badminton.webp', 
    },
    // ... các bài viết khác cũng thêm slug tương tự ...
  ];

  return (
    <div className="w-full bg-[#f8f9fa] py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        
        {/* ===================== CỘT TRÁI: NỘI DUNG CHÍNH (75%) ===================== */}
        <div className="w-full lg:w-3/4">
          
          <h1 className="text-[16px] font-bold text-gray-800 uppercase border-b-2 border-gray-200 pb-3 mb-6">
            Thông Tin Tổng Hợp Cầu Lông
          </h1>

          {/* Thanh tìm kiếm... (giữ nguyên) */}

          {/* Lưới bài viết (Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {newsItems.map((news) => (
              // 3. DÙNG <Link> BỌC TOÀN BỘ Ô TIN TỨC ĐỂ CÓ THỂ CLICK ĐƯỢC
              <Link 
                key={news.id} 
                to={`/tin-tuc/${news.slug}`} // Đường dẫn động, ví dụ: /tin-tuc/kham-pha-san-cau-long
                className="bg-white border border-gray-200 shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-shadow"
              >
                {/* Nội dung bên trong ô tin tức giữ nguyên như code cũ, 
                    nhớ đổi các thẻ <h3>, <p>... thành nội dung của 'news' */}
                <div className="w-full aspect-4/3 overflow-hidden">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col items-center text-center flex-1">
                  <h3 className="font-bold text-[14px] text-gray-800 line-clamp-2 group-hover:text-[#ea5c0b] transition-colors mb-2 min-h-10.5">
                    {news.title}
                  </h3>
                  <div className="bg-[#ea5c0b] text-white text-[12px] font-medium px-4 py-0.5 rounded-full mb-3 inline-block">
                    {news.date}
                  </div>
                  <p className="text-[13px] text-gray-600 line-clamp-3 leading-relaxed">
                    {news.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Thanh Phân Trang... (giữ nguyên) */}

        </div>

        {/* ===================== CỘT PHẢI: SIDEBAR (25%) ===================== */}
        <div className="hidden lg:block lg:w-1/4">
          {/* 4. SỬ DỤNG COMPONENT SIDEBAR DÙNG CHUNG */}
          <NewsSidebar />
        </div>

      </div>
    </div>
  );
};

export default NewsPage;