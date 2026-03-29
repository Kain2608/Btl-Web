import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  // Xử lý tăng giảm số lượng
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="w-full bg-[#f8f9fa] pb-12 font-sans">
      
      {/* ================= THANH ĐIỀU HƯỚNG (BREADCRUMB) ================= */}
      <div className="bg-[#f0f0f0] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 text-[13px] text-gray-600 flex items-center gap-2">
          <Link to="/" className="hover:text-[#ea5c0b]">Trang chủ</Link>
          <span>›</span>
          <Link to="#" className="hover:text-[#ea5c0b]">Vợt Cầu Lông</Link>
          <span>›</span>
          <Link to="#" className="hover:text-[#ea5c0b]">Vợt Cầu Lông VNB</Link>
          <span>›</span>
          <span className="text-[#ea5c0b]">Vợt Cầu Lông VNB V200 Xanh Chính Hãng</span>
        </div>
      </div>

      {/* ================= NỘI DUNG CHÍNH ================= */}
      <div className="max-w-7xl mx-auto px-4 mt-6 bg-white p-6 border border-gray-200 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ================= CỘT TRÁI: HÌNH ẢNH (Chiếm 4/12) ================= */}
          <div className="lg:col-span-4 flex flex-col items-center">
            {/* Ảnh chính */}
            <div className="w-full border border-gray-100 rounded mb-4 overflow-hidden">
              <img 
                src="https://cdn.shopvnb.com/img/400x400/uploads/gallery/vot-cau-long-vnb-v200-xanh-chinh-hang.jpg" 
                alt="Vợt Cầu Lông VNB V200 Xanh" 
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 cursor-zoom-in"
              />
            </div>
            {/* Ảnh thu nhỏ (Thumbnails) */}
            <div className="flex gap-2">
              <div className="w-16 h-16 border-2 border-[#ea5c0b] rounded p-1 cursor-pointer">
                <img src="https://cdn.shopvnb.com/img/400x400/uploads/gallery/vot-cau-long-vnb-v200-xanh-chinh-hang.jpg" alt="Thumb 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 border border-gray-200 hover:border-[#ea5c0b] rounded p-1 cursor-pointer transition-colors">
                <img src="https://cdn.shopvnb.com/img/400x400/uploads/gallery/vot-cau-long-vnb-v200-xanh-chinh-hang-1.jpg" alt="Thumb 2" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* ================= CỘT GIỮA: THÔNG TIN SẢN PHẨM (Chiếm 5/12) ================= */}
          <div className="lg:col-span-5">
            <h1 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
              Vợt Cầu Lông VNB V200 Xanh Chính Hãng
            </h1>
            
            <div className="text-[14px] text-gray-600 mb-4 flex items-center gap-4 border-b border-gray-100 pb-4">
              <p>Mã: <span className="text-[#ea5c0b]">VNB004563</span></p>
              <p>Thương hiệu: <span className="text-[#ea5c0b]">VNB</span> | Tình trạng: <span className="text-[#ea5c0b]">Còn hàng</span></p>
            </div>

            <div className="mb-6 flex items-end gap-3">
              <span className="text-[24px] font-bold text-[#ea5c0b]">529.000 ₫</span>
              <span className="text-[14px] text-gray-400 line-through mb-1">Giá niêm yết: 634.800 ₫</span>
            </div>

            {/* Khung ƯU ĐÃI (Border nét đứt) */}
            <div className="border border-dashed border-[#ea5c0b] rounded-md p-4 relative mb-6 mt-4">
              <div className="absolute -top-3.5 left-4 bg-white px-2 flex items-center text-[#ea5c0b] font-bold text-[14px]">
                <span className="mr-1">🎁</span> ƯU ĐÃI
              </div>
              <ul className="space-y-2 text-[13px] text-gray-700">
                <li className="flex items-start"><span className="text-purple-600 mr-2">✔</span> Tặng 2 Quấn cán vợt Cầu Lông: <span className="text-[#ea5c0b] mx-1">VNB 001, VS002</span> hoặc Joto 001</li>
                <li className="flex items-start"><span className="text-purple-600 mr-2">✔</span> Sản phẩm cam kết chính hãng</li>
                <li className="flex items-start"><span className="text-purple-600 mr-2">✔</span> Một số sản phẩm sẽ được tặng bao đơn hoặc bao nhung bảo vệ vợt</li>
                <li className="flex items-start"><span className="text-purple-600 mr-2">✔</span> Thanh toán sau khi kiểm tra và nhận hàng (Giao khung vợt)</li>
                <li className="flex items-start"><span className="text-purple-600 mr-2">✔</span> Bảo hành chính hãng theo nhà sản xuất (Trừ hàng nội địa, xách tay)</li>
              </ul>

              <h3 className="font-bold text-[#ea5c0b] text-[13px] mt-4 mb-2 flex items-center">
                <span className="mr-1">🎁</span> Ưu đãi thêm khi mua sản phẩm tại <span className="font-bold ml-1">VNB Premium</span>
              </h3>
              <ul className="space-y-2 text-[13px] text-gray-700">
                <li className="flex items-start"><span className="bg-green-500 text-white rounded-sm w-4 h-4 flex items-center justify-center mr-2 text-[10px] mt-0.5">✔</span> Sơn logo mặt vợt <span className="font-bold mx-1">miễn phí</span></li>
                <li className="flex items-start"><span className="bg-green-500 text-white rounded-sm w-4 h-4 flex items-center justify-center mr-2 text-[10px] mt-0.5">✔</span> Bảo hành lưới đan <span className="font-bold mx-1">trong 72 giờ</span></li>
                <li className="flex items-start"><span className="bg-green-500 text-white rounded-sm w-4 h-4 flex items-center justify-center mr-2 text-[10px] mt-0.5">✔</span> Thay gen vợt <span className="font-bold mx-1">miễn phí trọn đời</span></li>
                <li className="flex items-start"><span className="bg-green-500 text-white rounded-sm w-4 h-4 flex items-center justify-center mr-2 text-[10px] mt-0.5">✔</span> Tích luỹ điểm thành viên <span className="font-bold mx-1">Premium</span></li>
                <li className="flex items-start"><span className="bg-green-500 text-white rounded-sm w-4 h-4 flex items-center justify-center mr-2 text-[10px] mt-0.5">✔</span> Voucher giảm giá <span className="font-bold mx-1">cho lần mua hàng tiếp theo</span></li>
              </ul>
            </div>

            {/* CHỌN SỐ LƯỢNG */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                <button onClick={handleDecrease} className="w-8 h-8 bg-[#ea5c0b] text-white font-bold flex items-center justify-center hover:bg-[#c04000]">-</button>
                <input type="text" value={quantity} readOnly className="w-12 h-8 text-center text-[14px] outline-none border-x border-gray-300" />
                <button onClick={handleIncrease} className="w-8 h-8 bg-[#ea5c0b] text-white font-bold flex items-center justify-center hover:bg-[#c04000]">+</button>
              </div>
            </div>

            {/* CÁC NÚT MUA HÀNG */}
            <div className="flex gap-2 mb-2">
              <button className="flex-1 bg-[#f5a623] hover:bg-[#e09600] text-white font-bold py-3 px-4 rounded uppercase text-[15px] transition-colors">
                Mua Ngay
              </button>
              <button className="flex-1 bg-[#d84b24] hover:bg-[#b93d1b] text-white font-bold py-3 px-4 rounded uppercase text-[15px] transition-colors">
                Thêm vào giỏ hàng
              </button>
            </div>
            <div className="flex gap-2 mb-4">
              <button className="flex-1 bg-[#e00000] hover:bg-[#b30000] text-white font-bold py-2 px-4 rounded uppercase text-[12px] flex flex-col items-center justify-center transition-colors">
                <span>Thanh toán qua thẻ</span>
                <span className="font-normal text-[10px]">Visa, Master, JCB</span>
              </button>
              <button className="flex-1 bg-[#f5d700] hover:bg-[#d4ba00] text-[#112a42] font-bold py-2 px-4 rounded uppercase text-[12px] flex flex-col items-center justify-center transition-colors">
                <span>Mua ngay - Trả sau</span>
                <span className="font-normal text-[10px]">Kredivo - Fundiin</span>
              </button>
            </div>

            {/* Khung Khuyến Mãi Thanh Toán */}
            <div className="bg-[#f2f6f9] border border-gray-200 rounded p-3">
               <p className="text-center text-[12px] text-[#112a42] font-bold uppercase mb-2">ƯU ĐÃI KHI THANH TOÁN KREDIVO & FUNDIIN</p>
               <p className="text-center text-[11px] text-gray-500 mb-3">(Sử dụng khi xác nhận khoản vay trên trang của tổ chức tài chính)</p>
               <div className="space-y-3">
                  {/* Item khuyến mãi */}
                  <div className="flex items-center justify-between bg-white p-2 border border-gray-100 rounded">
                     <div className="flex items-center gap-2 w-3/4">
                       <span className="font-bold text-red-600 text-[10px]">Kredivo</span>
                       <span className="text-[11px] leading-tight">Giảm 10% - tối đa 500.000đ khi chọn kỳ hạn 6 & 12 tháng cho khách hàng mới</span>
                     </div>
                     <span className="bg-[#e00000] text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap">ƯU ĐÃI HOT</span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-2 border border-gray-100 rounded">
                     <div className="flex items-center gap-2 w-3/4">
                       <span className="font-bold text-red-600 text-[10px]">Kredivo</span>
                       <span className="text-[11px] leading-tight">Giảm 3% - tối đa 100.000đ với kỳ hạn 3 tháng cho khách hàng mới</span>
                     </div>
                     <span className="bg-[#e00000] text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap">ƯU ĐÃI HOT</span>
                  </div>
               </div>
            </div>

          </div>

          {/* ================= CỘT PHẢI: SIDEBAR (Chiếm 3/12) ================= */}
          <div className="lg:col-span-3">
            
            {/* Box Đang Có Hàng Tại */}
            <div className="border border-dashed border-[#ea5c0b] rounded mb-6 relative mt-4">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white px-3 font-bold text-[#ea5c0b] text-[13px] border border-[#ea5c0b] rounded-full whitespace-nowrap">
                ĐANG CÓ HÀNG TẠI
              </div>
              <ul className="text-[13px] text-white mt-4">
                <li className="bg-[#d84b24] py-2 px-3 border-b border-[#f37857]">VNB Quận 5</li>
                <li className="bg-[#e86b46] py-2 px-3 border-b border-[#f37857]">Tổng Kho VNB</li>
                <li className="bg-[#d84b24] py-2 px-3 border-b border-[#f37857]">VNB Hai Bà Trưng - CN2</li>
                <li className="bg-[#e86b46] py-2 px-3 border-b border-[#f37857]">VNB Thanh Trì</li>
                <li className="bg-[#d84b24] py-2 px-3">VNB Tây Ninh</li>
              </ul>
            </div>

            {/* Danh Mục Sản Phẩm */}
            <div className="border border-gray-200 shadow-sm">
              <h3 className="text-center font-bold text-gray-800 py-3 border-b border-gray-200 uppercase text-[14px]">
                Danh Mục Sản Phẩm
              </h3>
              <ul className="bg-white">
                {[
                  'Vợt Cầu Lông', 'Giày Cầu Lông', 'Áo Cầu Lông', 'Váy Cầu Lông', 'Quần Cầu Lông', 'Túi Vợt Cầu Lông', 'Balo Cầu Lông', 'Phụ Kiện Cầu Lông'
                ].map((item, idx) => (
                  <li key={idx} className="border-b border-gray-100 last:border-0">
                    <Link to="#" className="flex justify-between items-center px-4 py-2.5 text-[13px] text-gray-700 hover:text-[#ea5c0b] hover:bg-gray-50 transition-colors">
                      <span>{item}</span>
                      <span className="text-gray-400 font-light">+</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;