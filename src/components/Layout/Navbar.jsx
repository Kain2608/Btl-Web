import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const menuItems = [
    { id: 1, title: 'TRANG CHỦ', link: '/', hasDropdown: false },
    { id: 2, title: 'SẢN PHẨM', link: '/san-pham', hasDropdown: true },
    { id: 3, title: 'VNB SUPER SALE 28.3', link: '/sale', hasDropdown: false },
    { id: 4, title: 'TIN TỨC', link: '/tin-tuc', hasDropdown: false },
    { id: 5, title: 'CHÍNH SÁCH NHƯỢNG QUYỀN', link: '/nhuong-quyen', hasDropdown: false },
    { id: 6, title: 'HƯỚNG DẪN', link: '/huong-dan', hasDropdown: true },
    { id: 7, title: 'GIỚI THIỆU', link: '/gioi-thieu', hasDropdown: false },
    { id: 8, title: 'LIÊN HỆ', link: '/lien-he', hasDropdown: false },
  ];

  return (
    <nav className="w-full bg-[#ea5c0b]">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap items-center justify-center lg:justify-between relative">
          {menuItems.map((item) => (
            // Thẻ li bọc ngoài có class 'group' để bắt sự kiện hover cho toàn bộ cụm
            <li key={item.id} className="relative group">
              <a
                href={item.link}
                className="flex items-center py-3 px-3 text-white font-bold text-[13px] lg:text-[14px] hover:bg-orange-700 transition-colors duration-200"
              >
                {item.title}
                
                {/* MŨI TÊN (SVG) */}
                {/* transition-transform: Giúp mũi tên xoay mượt mà */}
                {/* group-hover:rotate-180: Xoay ngược mũi tên khi hover */}
                {/* group-hover:text-yellow-300: Đổi màu mũi tên khi hover */}
                {item.hasDropdown && (
                  <svg
                    className="w-4 h-4 ml-1 mt-0.5 text-white transition-transform duration-300 group-hover:rotate-180 group-hover:text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </a>

              {/* KHU VỰC DROPDOWN */}
              {/* Thêm hiệu ứng trượt nhẹ từ dưới lên: translate-y-2 -> group-hover:translate-y-0 */}
              {item.hasDropdown && (
                <ul className="absolute left-0 top-full w-56 bg-white shadow-lg z-50 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0">
                  <li>
                    <Link 
                      to="/huong-dan/thanh-toan" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#ea5c0b]"
                    >
                      Hướng dẫn thanh toán
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/huong-dan/mua-hang" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#ea5c0b]"
                    >
                      Hướng dẫn mua hàng
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/huong-dan/chon-vot" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#ea5c0b]"
                    >
                      Hướng dẫn chọn vợt cầu lông
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/huong-dan/cong-nghe" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#ea5c0b]"
                    >
                      Công nghệ sản phẩm
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;