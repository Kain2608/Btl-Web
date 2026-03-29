import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-[70vh] flex items-center justify-center py-12 px-4 font-sans">
      <div className="bg-white p-8 md:p-10 rounded shadow-md w-full max-w-[500px]">
        
        {/* Tiêu đề */}
        <h1 className="text-2xl md:text-[28px] font-bold text-[#d84b24] uppercase text-center tracking-wide">
          Đăng ký
        </h1>
        
        {/* Đường gạch trang trí */}
        <div className="flex justify-center items-center mt-3 mb-4">
          <span className="h-[3px] w-10 bg-[#d84b24]"></span>
          <span className="h-[3px] w-10 bg-gray-200"></span>
        </div>

        {/* Chuyển hướng sang Đăng nhập */}
        <p className="text-center text-[14px] text-gray-600 mb-6">
          Đã có tài khoản, đăng nhập <Link to="/dang-nhap" className="text-[#d84b24] hover:underline">tại đây</Link>
        </p>

        {/* Form Đăng ký */}
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Nhập tên của bạn (*)" 
            required
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-[14px] outline-none focus:border-[#d84b24] transition-colors"
          />
          <input 
            type="email" 
            placeholder="Nhập email của bạn (*)" 
            required
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-[14px] outline-none focus:border-[#d84b24] transition-colors"
          />
          <input 
            type="tel" 
            placeholder="Số điện thoại" 
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-[14px] outline-none focus:border-[#d84b24] transition-colors"
          />
          <input 
            type="password" 
            placeholder="Mật khẩu" 
            required
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-[14px] outline-none focus:border-[#d84b24] transition-colors"
          />
          <input 
            type="password" 
            placeholder="Nhập lại mật khẩu" 
            required
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-[14px] outline-none focus:border-[#d84b24] transition-colors"
          />
          <button 
            type="submit" 
            className="w-full bg-[#d84b24] hover:bg-[#b93d1b] text-white font-medium py-3 rounded transition-colors text-[14px] uppercase mt-2 shadow-sm"
          >
            Đăng ký
          </button>
        </form>

      </div>
    </div>
  );
};

export default RegisterPage;