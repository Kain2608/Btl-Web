import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="w-full bg-[#f8f9fa] min-h-[70vh] flex items-center justify-center py-12 px-4 font-sans">
      <div className="bg-white p-8 md:p-10 rounded shadow-md w-full max-w-[500px]">
        
        {/* Tiêu đề */}
        <h1 className="text-2xl md:text-[28px] font-bold text-[#d84b24] uppercase text-center tracking-wide">
          Đăng nhập
        </h1>
        
        {/* Đường gạch trang trí */}
        <div className="flex justify-center items-center mt-3 mb-4">
          <span className="h-[3px] w-10 bg-[#d84b24]"></span>
          <span className="h-[3px] w-10 bg-gray-200"></span>
        </div>

        {/* Chuyển hướng sang Đăng ký */}
        <p className="text-center text-[14px] text-gray-600 mb-6">
          Chưa có tài khoản, đăng ký <Link to="/dang-ky" className="text-[#d84b24] hover:underline">tại đây</Link>
        </p>

        {/* Form Đăng nhập */}
        <form className="space-y-4">
          <input 
            type="email" 
            placeholder="Nhập email của bạn" 
            required
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-[14px] outline-none focus:border-[#d84b24] transition-colors"
          />
          <input 
            type="password" 
            placeholder="Mật khẩu" 
            required
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-[14px] outline-none focus:border-[#d84b24] transition-colors"
          />
          
          <div className="text-right">
            <Link to="/quen-mat-khau" className="text-[13px] text-gray-500 hover:text-[#d84b24]">
              Quên mật khẩu?
            </Link>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#d84b24] hover:bg-white hover:text-[#d84b24] text-white font-medium py-3 rounded border transition-colors text-[14px] uppercase mt-2 shadow-sm hover:cursor-pointer"
          >
            Đăng nhập
          </button>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;