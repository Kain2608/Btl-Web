import React from 'react';

const PolicyBar = () => {
  // Tạo mảng dữ liệu để dễ dàng chỉnh sửa nội dung sau này
  const policies = [
    {
      id: 1,
      title: 'Vận chuyển TOÀN QUỐC',
      description: 'Thanh toán khi nhận hàng',
      // Icon Xe tải
      icon: (
        <svg className="w-8 h-8 text-[#ea5c0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          {/* Thay bằng icon xe tải chuẩn xác hơn */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Bảo đảm chất lượng',
      description: 'Sản phẩm bảo đảm chất lượng.',
      // Icon Khiên/Badge
      icon: (
        <svg className="w-8 h-8 text-[#ea5c0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Tiến hành THANH TOÁN',
      description: 'Với nhiều PHƯƠNG THỨC',
      // Icon Thẻ tín dụng
      icon: (
        <svg className="w-8 h-8 text-[#ea5c0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Đổi sản phẩm mới',
      description: 'nếu sản phẩm lỗi',
      // Icon Hoàn trả/Đổi trả
      icon: (
        <svg className="w-8 h-8 text-[#ea5c0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    // mt-8: Tạo khoảng cách với Banner ở trên
    // mb-8: Tạo khoảng cách với phần ProductTabs ở dưới
    <section className="w-full mt-8 mb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* CSS Grid: 1 cột (Mobile) -> 2 cột (Tablet) -> 4 cột (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {policies.map((item) => (
            <div 
              key={item.id} 
              // Trông giống ảnh: Nền trắng, viền mỏng bo tròn nhẹ, thêm shadow nhẹ khi hover để đẹp hơn
              className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              {/* Khu vực chứa Icon */}
              <div className="flex-shrink-0 mr-4">
                {item.icon}
              </div>
              
              {/* Khu vực chứa Text */}
              <div>
                {/* Màu cam cho tiêu đề giống trong ảnh web VNB */}
                <h3 className="text-[#ea5c0b] font-semibold text-sm uppercase">
                  {item.title}
                </h3>
                <p className="text-[#ea5c0b] text-sm mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicyBar;