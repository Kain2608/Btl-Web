import React, { useState } from 'react'; // Nhớ import thêm useState
import { Link } from 'react-router-dom';
import Captcha from '../../components/Auth/Captcha'; // Import component Captcha vừa tạo

const ForgotPasswordPage = () => {
  // Biến lưu trạng thái Captcha đúng hay sai
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  // Hàm xử lý khi bấm nút Gửi
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn form load lại trang
    if (!isCaptchaValid) {
      alert("Mã xác nhận chưa đúng. Vui lòng kiểm tra lại!");
      return;
    }
    alert("Gửi yêu cầu thành công!");
  };

  return (
    <div className="w-full bg-[#f8f9fa] min-h-[70vh] flex items-center justify-center py-12 px-4 font-sans">
      <div className="bg-white p-8 md:p-10 rounded shadow-md w-full max-w-[500px]">
        
        <h1 className="text-2xl md:text-[28px] font-bold text-[#d84b24] uppercase text-center tracking-wide">
          Quên mật khẩu
        </h1>
        
        <div className="flex justify-center items-center mt-3 mb-4">
          <span className="h-[3px] w-10 bg-[#d84b24]"></span>
          <span className="h-[3px] w-10 bg-gray-200"></span>
        </div>

        <p className="text-center text-[14px] text-gray-600 mb-8 leading-relaxed">
          Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.
        </p>

        {/* THÊM SỰ KIỆN onSubmit VÀO FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <input 
            type="email" 
            placeholder="Nhập email của bạn (*)" 
            required
            className="w-full border border-gray-300 rounded px-4 py-2.5 text-[14px] outline-none focus:border-[#d84b24] transition-colors"
          />

          {/* ================= GỌI COMPONENT CAPTCHA ================= */}
          <Captcha onValidate={(isValid) => setIsCaptchaValid(isValid)} />

          <button 
            type="submit" 
            // Đổi màu mờ đi nếu chưa nhập đúng Captcha
            className={`w-full font-medium py-3 rounded transition-colors text-[14px] uppercase shadow-sm tracking-wide ${
              isCaptchaValid ? 'bg-[#d84b24] hover:bg-[#b93d1b] text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Gửi yêu cầu
          </button>
        </form>

        <div className="text-center mt-6">
          <Link to="/dang-nhap" className="text-[14px] text-gray-500 hover:text-[#d84b24] transition-colors">
            Quay lại
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ForgotPasswordPage;