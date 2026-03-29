import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const ProductTabs = () => {
  const tabs = [
    'Tất cả',
    'Vợt Cầu Lông',
    'Giày Cầu Lông',
    'Áo Cầu Lông',
    'Váy cầu lông',
    'Quần Cầu Lông',
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  // Đã thêm 8 sản phẩm để Slider có thể trượt được (vì PC hiện 5 sản phẩm/lần)
  const products = [
    { 
      id: 1, 
      name: 'Vợt Cầu Lông VNB V200 Xanh Chính Hãng', 
      price: '529.000 đ', 
      category: 'Vợt Cầu Lông', 
      image: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-vnb-v200-xanh-chinh-hang-1_1711411306.webp',
      slug: 'vot-cau-long-vnb-v200-xanh' // <--- THÊM TRƯỜNG SLUG NÀY
    },
    { id: 2, name: 'Vợt Cầu Lông VNB Carbon Training 150g Chính Hãng', price: '698.000 đ', category: 'Vợt Cầu Lông', image: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-vnb-carbon-training-150g-chinh-hang-1_1711411293.webp' },
    { id: 3, name: 'Vợt Cầu Lông VNB V200i Hồng Chính Hãng', price: '529.000 đ', category: 'Vợt Cầu Lông', image: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-vnb-v200i-hong-chinh-hang-1_1711411281.webp' },
    { id: 4, name: 'Vợt Cầu Lông VNB V88 Xanh Chính Hãng', price: '638.000 đ', category: 'Vợt Cầu Lông', image: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-vnb-v88-xanh-chinh-hang-1_1711411269.webp' },
    { id: 5, name: 'Vợt Cầu Lông VNB V200 Đỏ Chính Hãng', price: '529.000 đ', category: 'Vợt Cầu Lông', image: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-vnb-v200-do-chinh-hang-1_1711411256.webp' },
    { id: 6, name: 'Vợt Cầu Lông VNB TC88 Đen Chính Hãng', price: '750.000 đ', category: 'Vợt Cầu Lông', image: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-vnb-v88-xanh-chinh-hang-1_1711411269.webp' },
    { id: 7, name: 'Giày Cầu Lông VNB Trắng Xanh', price: '450.000 đ', category: 'Giày Cầu Lông', image: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/giay-cau-long-vnb-v200-trang-xanh-chinh-hang-1.webp' },
    { id: 8, name: 'Áo Cầu Lông VNB Nam', price: '150.000 đ', category: 'Áo Cầu Lông', image: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-vnb-v200-do-chinh-hang-1_1711411256.webp' },
  ];

  const filteredProducts = activeTab === 'Tất cả' 
    ? products 
    : products.filter(product => product.category === activeTab);

  return (
    <section className="w-full mt-10 mb-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* --- MỚI THÊM: TIÊU ĐỀ SẢN PHẨM MỚI --- */}
        <div className="text-center mb-8">
          <h2 className="text-[#ea5c0b] text-[22px] lg:text-[26px] font-bold uppercase inline-block relative pb-3">
            Sản phẩm mới
            {/* Thanh gạch dưới */}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-200"></span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#ea5c0b]"></span>
          </h2>
        </div>

        {/* --- THANH TABS --- */}
        <div className="flex border-b-0 border border-gray-200 bg-white">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-center py-3 px-2 font-bold text-[13px] lg:text-[15px] cursor-pointer transition-colors duration-300 border-r border-gray-200 last:border-r-0
                ${activeTab === tab 
                  ? 'bg-[#ea5c0b] text-white' 
                  : 'bg-white text-gray-700 hover:text-[#ea5c0b]' 
                }`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* --- KHUNG SẢN PHẨM MÀU VÀNG CÓ NÚT TRƯỢT --- */}
        <div className="border-[6px] border-[#eab308] bg-white px-8 py-4 relative product-tabs-slider">
          
          {filteredProducts.length === 0 ? (
            <p className="text-center py-10 text-gray-500">Đang cập nhật sản phẩm...</p>
          ) : (
            <Swiper
              // Bật tính năng Navigation (Nút trượt)
              modules={[Navigation]}
              spaceBetween={15}
              slidesPerView={2} 
              navigation={true} // Bật 2 nút mũi tên
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 5 }, 
              }}
              className="w-full h-full"
            >
              {filteredProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  {/* ĐỔI <div> THÀNH <Link> VÀ THÊM THUỘC TÍNH 'to' */}
                  <Link 
                    to={`/san-pham/${product.slug}`} 
                    className="flex flex-col items-center bg-white p-2 group cursor-pointer h-full"
                  >
                    <div className="w-full aspect-square overflow-hidden mb-3">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-[14px] text-gray-700 font-medium text-center line-clamp-2 group-hover:text-[#ea5c0b] transition-colors min-h-[42px] mt-auto">
                      {product.name}
                    </h4>
                    <p className="text-[#d82a29] font-bold text-[16px] mt-2">
                      {product.price}
                    </p>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* --- CSS TUỲ CHỈNH CHO NÚT MŨI TÊN --- */}
          <style jsx global>{`
            .product-tabs-slider .swiper-button-next,
            .product-tabs-slider .swiper-button-prev {
              color: #9ca3af !important; /* Màu xám */
              background-color: rgba(255, 255, 255, 0.95); /* Nền trắng hơi trong suốt */
              transition: all 0.3s ease-in-out !important; 
              opacity: 0 !important; 
              visibility: hidden; 
              width: 40px !important;
              height: 40px !important;
              border-radius: 50%;
              box-shadow: 0 2px 6px rgba(0,0,0,0.15); /* Bóng đổ đậm hơn chút cho nổi bật */
              
              /* THÊM 3 DÒNG NÀY ĐỂ CĂN GIỮA TUYỆT ĐỐI ICON MŨI TÊN, KHÔNG BỊ CẮT NHỌN */
              display: flex !important;
              justify-content: center !important;
              align-items: center !important;
            }

            .product-tabs-slider:hover .swiper-button-next,
            .product-tabs-slider:hover .swiper-button-prev {
              opacity: 1 !important; 
              visibility: visible;
            }

            .product-tabs-slider .swiper-button-next:hover,
            .product-tabs-slider .swiper-button-prev:hover {
              color: #ea5c0b !important; /* Đổi màu cam khi hover */
            }

            /* Chỉnh lại size icon mũi tên cho vừa vặn với vòng tròn 40px */
            .product-tabs-slider .swiper-button-next:after,
            .product-tabs-slider .swiper-button-prev:after {
              font-size: 18px !important;
              font-weight: bold !important;
            }

            /* ĐƯA MŨI TÊN VÀO TRONG KHUNG ĐỂ KHÔNG BỊ CẮT (Đổi từ số âm sang số dương) */
            .product-tabs-slider .swiper-button-prev {
              left: 10px !important; 
            }
            .product-tabs-slider .swiper-button-next {
              right: 10px !important; 
            }
          `}</style>  
        </div>
      </div>
    </section>
  );
};

export default ProductTabs;