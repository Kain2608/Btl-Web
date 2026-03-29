import React from 'react';

const CategoryGrid = () => {
  // Dữ liệu các danh mục, đã cập nhật ảnh áo cầu lông thật
  const categories = [
    { id: 1, title: 'VỢT CẦU LÔNG', image: 'https://cdn.shopvnb.com/img/400x400/uploads/danh_muc/thumb/1.1.webp' },
    { id: 2, title: 'GIÀY CẦU LÔNG', image: 'https://cdn.shopvnb.com/img/400x400/uploads/danh_muc/thumb/2_1.webp' },
    { id: 3, title: 'ÁO CẦU LÔNG', image: 'https://cdn.shopvnb.com/img/400x400/uploads/danh_muc/thumb/3_1.webp' }, // Sử dụng ảnh thật
    { id: 4, title: 'VÁY CẦU LÔNG', image: 'https://cdn.shopvnb.com/img/400x400/uploads/danh_muc/thumb/8.webp' },
    { id: 5, title: 'QUẦN CẦU LÔNG', image: 'https://cdn.shopvnb.com/img/400x400/uploads/danh_muc/thumb/4.webp' },
    { id: 6, title: 'TÚI VỢT CẦU LÔNG', image: 'https://cdn.shopvnb.com/img/400x400/uploads/danh_muc/thumb/5.webp' },
    { id: 7, title: 'BALO CẦU LÔNG', image: 'https://cdn.shopvnb.com/img/400x400/uploads/danh_muc/thumb/6.webp' },
    { id: 8, title: 'PHỤ KIỆN CẦU LÔNG', image: 'https://cdn.shopvnb.com/img/400x400/uploads/danh_muc/thumb/7.webp' },
  ];

 return (
    <section className="w-full mt-12 mb-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* TIÊU ĐỀ KHU VỰC */}
        <div className="text-center mb-8">
          <h2 className="text-[#ea5c0b] text-[22px] lg:text-[26px] font-bold uppercase inline-block relative pb-3">
            Sản phẩm cầu lông
            {/* Thanh gạch dưới */}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-200"></span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#ea5c0b]"></span>
          </h2>
        </div>

        {/* LƯỚI DANH MỤC */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a 
              key={cat.id} 
              href="#" 
              // aspect-square: Đảm bảo ô luôn vuông
              // relative: Cần cho các phần tử absolute bên trong
              // group: Cần cho hiệu ứng hover cho các phần tử con
              // transform: Sẵn sàng cho hiệu ứng scale nhẹ của chính ô
              // transition-all & ease-in-out: Cho chuyển đổi mượt mà
              // hover:scale-105 & hover:shadow-2xl: Phóng to nhẹ và thêm bóng đổ lớn cho ô khi hover
              className="group relative aspect-square overflow-hidden block cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
              {/* --- LỚP PHỦ NỀN ĐỂ ĐỔI MÀU --- */}
              {/* background: Mặc định cam nhạt [#f6891f], hover thành cam đậm [#ea5c0b] */}
              <div className="absolute inset-0 bg-[#f6891f] transition-colors duration-300 group-hover:bg-[#ea5c0b]"></div>

              {/* HỌA TIẾT TRANG TRÍ (Dấu cộng và chấm tròn, luôn hiện mờ mờ) */}
              <div className="absolute top-4 right-4 text-white/50 text-xl font-light leading-none z-10 pointer-events-none">+</div>
              <div className="absolute bottom-4 left-4 text-white/50 text-xl font-light leading-none z-10 pointer-events-none">+</div>
              <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-white/40 z-10 pointer-events-none"></div>
              <div className="absolute bottom-8 right-6 w-1.5 h-1.5 rounded-full bg-white/40 z-10 pointer-events-none"></div>

              {/* --- ẢNH SẢN PHẨM --- */}
              {/* transition-transform duration-500 & ease-out: Phóng to nhẹ ảnh khi hover vào ô */}
              {/* group-hover:scale-110: Phóng to ảnh nhẹ 10% */}
              {/* group-hover:drop-shadow-xl: Thêm bóng đổ nhẹ cho ảnh khi hover vào ô */}
              <div className="absolute inset-0 p-6 flex justify-center items-center z-20 pointer-events-none">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:drop-shadow-xl"
                />
              </div>

              {/* --- RUY-BĂNG TÊN DANH MỤC (Ribbon) --- */}
              {/* Giữ nguyên vị trí và màu sắc như ảnh của bạn */}
              {/* pointer-events-none: Hover trên ruy-băng vẫn là hover trên ô */}
              <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-center z-30 pointer-events-none">
                <div 
                  className="bg-[#c04000] text-white text-[12px] sm:text-[14px] lg:text-[15px] font-bold uppercase py-2.5 px-6 transform -rotate-6 shadow-md border border-[#d35400]/50 whitespace-nowrap"
                >
                  {cat.title}
                </div>
              </div>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default CategoryGrid;