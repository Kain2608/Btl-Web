import React, { useState, useEffect } from 'react';

const Captcha = ({ onValidate }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');

  // Hàm tạo chuỗi ngẫu nhiên 6 ký tự
  const generateCaptcha = () => {
    // Loại bỏ các ký tự dễ nhầm lẫn như 0, O, 1, I, l
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let text = '';
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(text);
    setUserInput('');
    onValidate(false); // Reset trạng thái đúng/sai ở component cha
  };

  // Tự động tạo mã khi component được gọi lần đầu
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Xử lý khi người dùng nhập text
  const handleChange = (e) => {
    const value = e.target.value;
    setUserInput(value);
    // Gửi kết quả (true/false) về cho form cha biết là nhập đúng hay sai
    onValidate(value === captchaText);
  };

  return (
    <div className="flex flex-col gap-3 mb-4">
       <div className="flex items-center gap-3">
          {/* Ô hiển thị mã Captcha (Có background nhiễu kẻ sọc và gạch ngang chữ) */}
          <div 
            className="bg-gray-200 px-6 py-2 rounded text-2xl font-bold tracking-[0.3em] text-gray-700 select-none" 
            style={{ 
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.1) 5px, rgba(0,0,0,0.1) 10px)' 
            }}
          >
             <span style={{ textDecoration: 'line-through' }}>{captchaText}</span>
          </div>
          
          {/* Nút Tải lại mã */}
          <button 
            type="button" 
            onClick={generateCaptcha} 
            className="text-gray-500 hover:text-[#d84b24] p-2 bg-gray-100 rounded-full transition-colors" 
            title="Tải lại mã"
          >
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
             </svg>
          </button>
       </div>
       
       {/* Ô nhập mã */}
       <input 
          type="text" 
          value={userInput} 
          onChange={handleChange} 
          placeholder="Nhập mã xác nhận bên trên (*)" 
          required 
          className="w-full border border-gray-300 rounded px-4 py-2.5 text-[14px] outline-none focus:border-[#d84b24] transition-colors" 
       />
    </div>
  );
};

export default Captcha;