// src/pages/NewsDetailPage.jsx - MỚI
import React from 'react';
import NewsSidebar from '../components/News/NewsSidebar'; // 1. Import Sidebar dùng chung

const NewsDetailPage = () => {
  // TRONG THỰC TẾ, BẠN SẼ DÙNG useParams() ĐỂ LẤY SLUG TỪ URL
  // SAU ĐÓ GỌI API ĐỂ LẤY NỘI DUNG THẬT CỦA BÀI VIẾT ĐÓ.
  // Ở đây mình sẽ code cứng giao diện một bài viết mẫu chuẩn theo ảnh.

  const newsDetail = {
    title: 'Khám Phá Sân Cầu Lông D-Badminton Tân Phú Chất Lượng Vừa Giá Rẻ',
    author: 'VNB News',
    date: '28-03-2026 16:58',
    views: 1250,
    content: [
      'Nếu bạn đang tìm kiếm một sân cầu lông tại TP.HCM vừa giá rẻ, vừa không gian rộng rãi, lại đảm bảo chất lượng, thì sân cầu lông D-Badminton Tân Phú chính là một lựa chọn tuyệt vời. Đây là một trong những sân chơi lý tưởng cho các vợt thủ từ phong trào đến chuyên nghiệp tại khu vực Quận Tân Phú và các quận lân cận.',
      'Sân cầu lông D-Badminton được đầu tư bài bản với hệ thống thảm trải sàn chất lượng cao, độ bám tốt, giúp người chơi di chuyển linh hoạt và hạn chế chấn thương. Hệ thống ánh sáng được bố trí khoa học, không gây chói mắt, đảm bảo điều kiện thi đấu tốt nhất cho các vận động viên.',
      'Không gian sân rộng rãi, thoáng mát, tạo cảm giác thoải mái cho người chơi. Ngoài ra, sân còn có các tiện ích đi kèm như khu vực thay đồ, nhà vệ sinh sạch sẽ, bãi giữ xe an toàn... Mức giá thuê sân cũng rất hợp lý, phù hợp với túi tiền của nhiều đối tượng.',
      'Đến với sân cầu lông D-Badminton Tân Phú, bạn không chỉ được thỏa niềm đam mê thể thao mà còn có cơ hội giao lưu, học hỏi kinh nghiệm từ các vợt thủ khác. Đội ngũ nhân viên phục vụ tận tình, chu đáo, luôn sẵn sàng hỗ trợ người chơi.'
    ],
    image: 'https://cdn.shopvnb.com/img/uploads/san-cau-long-d-badminton-large.webp', // Link ảnh to
  };

  return (
    <div className="w-full bg-[#f8f9fa] py-8">
      {/* Container giới hạn độ rộng */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        
        {/* ===================== CỘT TRÁI: NỘI DUNG CHÍNH (75%) ===================== */}
        <div className="w-full lg:w-3/4">
          
          {/* Tiêu đề bài viết */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
              {newsDetail.title}
            </h1>
            
            {/* Metadata (Tác giả, Ngày tháng, Lượt xem) */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-gray-500">
              <span className="flex items-center">
                 <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                 Tác giả: {newsDetail.author}
              </span>
              <span className="flex items-center">
                 <svg className="w-4 h-4 mr-1.5 text-[#ea5c0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                 {newsDetail.date}
              </span>
              <span className="flex items-center">
                 <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                 Lượt xem: {newsDetail.views}
              </span>
            </div>
          </div>

          {/* Nội dung bài viết */}
          {/* Class prose max-w-none giúp căn chỉnh văn bản đẹp hơn (cần cài thêm plugin tailwindcss/typography) */}
          <div className="text-[15px] text-gray-700 leading-relaxed space-y-5 mb-10">
            {newsDetail.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            {/* Ảnh minh họa chèn giữa nội dung */}
            <div className="text-center py-4">
              <img 
                src={newsDetail.image} 
                alt={newsDetail.title} 
                className="inline-block max-w-full h-auto drop-shadow-md border-4 border-white"
              />
              <p className="text-sm italic text-gray-500 mt-3">Hình ảnh sân cầu lông D-Badminton Tân Phú xịn xò</p>
            </div>
          </div>

          {/* ===================== PHẦN TIN LIÊN QUAN ===================== */}
          <div className="mt-12 pt-8 border-t border-gray-200">
             <h2 className="text-[18px] font-bold text-[#ea5c0b] uppercase mb-6 inline-block relative pb-2">
                Tin liên quan
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-200"></span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#ea5c0b]"></span>
             </h2>
             
             {/* Danh sách tin liên quan ( code cứng mẫu) */}
             <ul className="space-y-3 text-[14px]">
                 <li>
                     <a href="#" className="flex items-center text-gray-700 hover:text-[#ea5c0b] transition-colors">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                        <span className="text-gray-400 mr-2">[30-03-2026]</span>
                        Sân Cầu Lông Độc Lập - Địa Điểm Lý Tưởng Cho Vợt Thủ Tân Phú
                     </a>
                 </li>
                 <li>
                     <a href="#" className="flex items-center text-gray-700 hover:text-[#ea5c0b] transition-colors">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                        <span className="text-gray-400 mr-2">[29-03-2026]</span>
                        Review Chi Tiết Sân Cầu Lông Tân Việt Tại Quận Bình Tân
                     </a>
                 </li>
             </ul>
          </div>

        </div>

        {/* ===================== CỘT PHẢI: SIDEBAR (25%) ===================== */}
        <div className="hidden lg:block lg:w-1/4">
          {/* Tái sử dụng Component Sidebar */}
          <NewsSidebar />
        </div>

      </div>
    </div>
  );
};

export default NewsDetailPage;