import React from 'react';
import { Link } from 'react-router-dom';

const OrderTrackingPage = () => {
  return (
    <div className="w-full bg-white pb-20 font-sans min-h-[60vh]">
      
      {/* ================= THANH ĐIỀU HƯỚNG (BREADCRUMB) ================= */}
      <div className="bg-[#f8f9fa] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 text-[14px] text-gray-600">
          <Link to="/" className="hover:text-[#ea5c0b] transition-colors">Trang chủ</Link>
          <span className="mx-2 font-bold">›</span>
          <span className="text-[#ea5c0b]">Kiểm tra đơn hàng</span>
        </div>
      </div>

      {/* ================= NỘI DUNG CHÍNH ================= */}
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <h1 className="text-3xl md:text-[40px] font-bold text-[#333333] mb-8">
          Kiểm tra đơn hàng
        </h1>
        
        {/* Form tra cứu (Giới hạn độ rộng để giống ảnh) */}
        <div className="max-w-md">
          <form className="space-y-6">
            <div>
              <label className="block text-[15px] text-gray-700 mb-2">
                Mã đơn hàng/Số điện thoại*
              </label>
              <input 
                type="text" 
                className="w-full border border-gray-200 rounded px-4 py-2.5 text-[15px] outline-none focus:border-[#ea5c0b] transition-colors shadow-sm"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-[#d84b24] hover:bg-white hover:text-[#d84b24] text-white font-medium py-3 rounded border transition-colors text-[14px] uppercase mt-2 shadow-sm hover:cursor-pointer"
            >
              Tra cứu đơn hàng
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default OrderTrackingPage;