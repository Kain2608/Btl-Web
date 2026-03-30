// src/components/Layout/CartDropdown.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CartDropdown = ({ cartItems }) => {
  // Biến kiểm tra giỏ hàng có trống hay không
  const isEmpty = !cartItems || cartItems.length === 0;

  // Tính tổng tiền nếu giỏ hàng có sản phẩm
  const totalPrice = !isEmpty 
    ? cartItems.reduce((total, item) => total + (item.priceNum * item.quantity), 0)
    : 0;

  // Định dạng tiền VND
  const formatCurrency = (amount) => {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  };

  return (
    // Box Dropdown: Ẩn mặc định, hiện ra khi hover cha, căn lề phải tuyệt đối
    <div className="absolute top-full right-0 mt-1 min-w-[380px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-2xl">
      
      {/* 1. Một khoảng đệm trong suốt nối giữa icon và menu để giữ hover */}
      <div className="h-3 w-full bg-transparent absolute -top-3 left-0"></div>

      {/* 2. Dấu mũi tên chỉ lên (Triangular pointer) - Cố định vị trí căn lề phải */}
      <div className="absolute -top-1.5 right-[35px] w-3 h-3 bg-white rotate-45 border-l border-t border-gray-100"></div>

      {/* 3. Nội dung chính của Menu */}
      <div className="bg-white rounded-md border border-gray-100 overflow-hidden shadow-sm">
        
        {/* ===================== TRẠNG THÁI: GIỎ HÀNG TRỐNG (Y hệt ảnh mẫu) ===================== */}
        {isEmpty && (
          <div className="py-10 px-6 text-center text-[14px] text-gray-700 font-medium">
            Không có sản phẩm nào trong giỏ hàng
          </div>
        )}

        {/* ===================== TRẠNG THÁI: GIỎ HÀNG CÓ SẢN PHẨM ===================== */}
        {!isEmpty && (
          <div className="p-4 flex flex-col">
            
            {/* Header nhỏ */}
            <p className="text-[13px] text-gray-600 mb-3 font-semibold">Sản phẩm mới thêm</p>

            {/* Danh sách sản phẩm (Có thể cuộn dọc nếu quá dài) */}
            <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3 border-b border-gray-100 pb-3 last:border-b-0">
                  {/* Ảnh sản phẩm nhỏ */}
                  <div className="w-16 h-16 border border-gray-100 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Thông tin */}
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-[14px] font-medium text-gray-800 line-clamp-2 leading-snug mb-1">
                      {item.name}
                    </h4>
                    <p className="text-[13px] text-gray-600">
                      Số lượng: <span className="font-semibold">{item.quantity}</span>
                    </p>
                  </div>
                  {/* Giá tiền và nút xóa */}
                  <div className="flex flex-col items-end gap-2 ml-auto">
                    <p className="text-[#d82a29] font-bold text-[14px]">
                      {item.price}
                    </p>
                    <button className="text-gray-400 hover:text-red-500 text-[16px]" title="Xóa sản phẩm">
                        ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Phần Tổng tiền và Nút bấm */}
            <div className="mt-4 pt-3 border-t-2 border-dashed border-gray-100">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-[14px] text-gray-800 font-medium">Tổng tiền:</span>
                    <span className="text-[#d82a29] font-bold text-[16px]">
                        {formatCurrency(totalPrice)}
                    </span>
                </div>
                
                {/* 2 nút hành động (Y hệt ảnh mẫu VNB) */}
                <div className="flex gap-3 mt-1">
                  <Link 
                    to="/gio-hang" 
                    className="flex-1 bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 font-bold py-2.5 rounded uppercase text-[13px] text-center transition-colors shadow-sm"
                  >
                    Xem giỏ hàng
                  </Link>
                  <Link 
                    to="/thanh-toan" 
                    className="flex-1 bg-orange-500 hover:bg-[#c04000] text-white font-bold py-2.5 rounded uppercase text-[13px] text-center transition-colors shadow-sm"
                  >
                    Thanh toán
                  </Link>
                </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default CartDropdown;