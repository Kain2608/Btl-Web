// src/components/Home/Banner.jsx
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules (bắt buộc để có nút bấm và chấm tròn)
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles (BẮT BUỘC - Swiper dùng CSS riêng)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bannerImg1 from '../../assets/bannerImg/banner1.webp'; 
import bannerImg2 from '../../assets/bannerImg/banner2.webp';
import bannerImg3 from '../../assets/bannerImg/banner3.webp';
import bannerImg4 from '../../assets/bannerImg/banner4.webp';
import bannerImg5 from '../../assets/bannerImg/banner5.webp';
import bannerImg6 from '../../assets/bannerImg/banner6.webp';
import bannerImg7 from '../../assets/bannerImg/banner7.webp';

// Dữ liệu giả lập cho các ảnh banner.
// Bạn có thể lấy ảnh thực tế từ image_0.png hoặc url khác.
const bannerData = [
  {
    id: 1,
    imageUrl: bannerImg1, // Ảnh giả lập 1
    alt: 'Banner 1 - Set Vợt VS Energetic Long Mã',
  },
  {
    id: 2,
    imageUrl: bannerImg2, // Ảnh giả lập 2
    alt: 'Banner 2 - Giày cầu lông mới',
  },
  {
    id: 3,
    imageUrl: bannerImg3, // Ảnh giả lập 3
    alt: 'Banner 3 - Phụ kiện cầu lông',
  },
  {
    id: 4,
    imageUrl: bannerImg4, // Ảnh giả lập 4
    alt: 'Banner 3 - Phụ kiện cầu lông',
  },
  {
    id: 5,
    imageUrl: bannerImg5, // Ảnh giả lập 5
    alt: 'Banner 3 - Phụ kiện cầu lông',
  },
  {
    id: 6,
    imageUrl: bannerImg6, // Ảnh giả lập 6
    alt: 'Banner 3 - Phụ kiện cầu lông',
  },
  {
    id: 7,
    imageUrl: bannerImg7, // Ảnh giả lập 7
    alt: 'Banner 3 - Phụ kiện cầu lông',
  },
];

const Banner = () => {
  return (
    // Lớp bao ngoài để kiểm soát chiều cao
    // h-[1224px]: Chiều cao cố định 1224px (Cần config trong tailwind.config hoặc dùng JIT)
    // w-full: Độ rộng 100%
    <section className="w-full overflow-hidden relative group">
      <Swiper
        // Cấu hình các module
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}      // Khoảng cách giữa các slide
        slidesPerView={1}    // Hiển thị 1 slide mỗi lúc
        navigation={true}    // Bật nút bấm qua lại
        pagination={{ clickable: true }} // Bật chấm tròn chuyển slide
        autoplay={{
          delay: 5000,       // Tự động chuyển sau 5 giây
          disableOnInteraction: false,
        }}
        loop={true}           // Lặp lại vô hạn
        className="w-full h-full" // Swiper chiếm hết chiều cao section bao ngoài
      >
        {bannerData.map((banner) => (
          <SwiperSlide key={banner.id}>
            {/* 1. Thêm flex, items-center, justify-center để căn giữa ảnh */}
            {/* Có thể thêm bg-gray-100 hoặc bg-black nếu muốn có màu nền ở phần trống */}
            <div className="w-full h-full flex items-center justify-center bg-white relative">
              <img
                src={banner.imageUrl}
                alt={banner.alt}
                // 2. w-auto h-auto: Giữ đúng kích thước thật của ảnh
                // 3. max-w-full max-h-full: Tự động thu nhỏ nếu màn hình nhỏ hơn kích thước ảnh (rất quan trọng cho responsive)
                // 4. object-contain: Đảm bảo tỷ lệ ảnh luôn chuẩn
                className="w-auto h-auto max-w-full max-h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* --- Custom Style cho Swiper bằng Tailwind --- */}
        {/* Swiper dùng CSS class riêng, chúng ta cần ghi đè bằng Tailwind */}
        <style jsx global>{`
          /* Màu cho các chấm tròn pagination */
          .swiper-pagination-bullet {
            background: #fff !important; /* Trắng mặc định */
            opacity: 0.7;
          }
          .swiper-pagination-bullet-active {
            background: #f97316 !important; /* Màu cam VNB khi active (orange-500) */
            opacity: 1;
          }

          /* Màu cho nút bấm Navigation (chỉ hiện khi hover) */
          .swiper-button-next,
          .swiper-button-prev {
            color: #fff !important;
            transform: scale(0.7);
            transition: all 0.3s ease;
            opacity: 0; /* Ẩn mặc định */
          }

          /* Hiện nút khi hover vào section */
          .group:hover .swiper-button-next,
          .group:hover .swiper-button-prev {
            opacity: 1;
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 30px !important;
          }
        `}</style>
      </Swiper>
    </section>
  );
};

export default Banner;