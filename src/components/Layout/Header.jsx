import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { FaHeadset, FaMapMarkerAlt, FaSearch, FaBinoculars, FaUser, FaShoppingCart, FaSignInAlt, FaUserPlus} from 'react-icons/fa';
import CartDropdown from './CartDropdown';

export default function Header() {
  // 3. Dữ liệu giả lập cho giỏ hàng CÓ sản phẩm
  const cartItems = [
    {
      id: 1,
      name: 'Vợt Cầu Lông VNB V200i Hồng Chính Hãng',
      quantity: 1,
      price: '529.000 đ', // Giá dạng chữ để hiển thị
      priceNum: 529000,   // Giá dạng số để tính toán
      image: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/vot-cau-long-vnb-v200i-hong-chinh-hang-1_1711411281.webp'
    },
    {
      id: 2,
      name: 'Quấn cán vợt Cầu Lông VS002',
      quantity: 2,
      price: '15.000 đ',
      priceNum: 15000,
      image: 'https://cdn.shopvnb.com/img/300x300/uploads/gallery/quan-can-vot-vs-002.webp'
    },
  ];
  return (
    // Toàn bộ thanh Header: nền trắng, viền dưới mờ, độ cao đệm trên/dưới
    <header className="w-full bg-white py-3 px-15">
      {/* Container chính để căn giữa nội dung và tạo lề */}
      <div className="container mx-auto px-4 flex items-center justify-between gap-6">
        
        {/* === PHẦN BÊN TRÁI: LOGO === */}
        <div className="flex flex-col items-center gap-1 hover:cursor-pointer">
            <img src={logo} className="w-15 h-15" />
        </div>

        {/* === PHẦN GIỮA: THÔNG TIN LIÊN HỆ & CỬA HÀNG & TÌM KIẾM === */}
        <div className="flex flex-1 items-center gap-6 border-b border-gray-100 pl-6 h-10 pb-4 justify-between">
          {/* Nhóm Hotline */}
          <div className="flex items-center gap-2">
            <FaHeadset className="text-orange-500 text-xl" />
            <div className="text-sm">
              <span className="text-gray-600 font-normal uppercase tracking-widest text-xs">HOTLINE: </span>
              <span className="text-red-600 font-bold text-base hover:text-black cursor-pointer">0977508430 | 0338000308</span>
            </div>
          </div>

          {/* Nhóm Hệ thống cửa hàng */}
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-orange-500 text-xl" />
            <div className="text-xs">
              <Link
                to='dia-chi'
                className="text-gray-700 font-semibold tracking-wide hover:text-orange-600 hover:cursor-pointer">HỆ THỐNG CỬA HÀNG
              </Link>
            </div>
          </div>

          {/* TÌM KIẾM & HÀNH ĐỘNG === */}
          <div className="flex items-center gap-6">
          {/* Thanh tìm kiếm: Relative để định vị biểu tượng kính lúp */}
            <div className="relative w-80">
                <input
                type="text"
                placeholder="Tìm sản phẩm..."
                className="w-full h-10 px-4 pr-10 border border-gray-200 rounded-full text-sm placeholder:text-gray-400 focus:border-orange-300 focus:ring-orange-300 focus:ring-1 outline-none transition-all"
                />
                {/* Biểu tượng kính lúp màu cam, định vị tuyệt đối bên phải */}
                <FaSearch className="absolute right-3.5 top-1/2 -translate-y-1/2 text-orange-500 text-lg cursor-pointer hover:text-orange-600" />
            </div>
           </div> 

        </div>
          {/* Nhóm các nút hành động (Tra cứu, Tài khoản, Giỏ hàng) */}
          <div className="flex items-center gap-4">
            {/* Nút: Tra cứu */}
            <div className="relative flex flex-col items-center gap-1.5 cursor-pointer group">
                <div className="w-11 h-11 flex items-center justify-center border border-orange-500 rounded-full text-orange-500 text-xl group-hover:bg-orange-50 transition-colors">
                    <FaBinoculars />
                </div>
                <span className="text-[11px] text-gray-800 font-semibold uppercase tracking-tight">TRA CỨU</span>

                {/* Box Dropdown: Ẩn mặc định, hiện ra khi hover vào thẻ cha */}
                <div className="absolute top-full mt-1 min-w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-lg">
                    
                    {/* Một khoảng đệm trong suốt để nối giữa icon và menu, giúp chuột không bị trượt hover */}
                    <div className="h-2 w-full bg-transparent absolute -top-2 left-0"></div>

                    {/* Nội dung Menu */}
                    <div className="bg-white rounded-md border border-gray-100 overflow-hidden flex flex-col">
                        <Link
                          to="/kiem-tra-don-hang" 
                          className="w-full flex items-center gap-1.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:cursor-pointer transition-colors border-b border-gray-50 whitespace-nowrap">
                            <span>Kiểm tra đơn hàng</span>
                        </Link>
                        <Link
                          to="kiem-tra-bao-hanh"
                          className="w-full flex items-center gap-1.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:cursor-pointer transition-colors border-b border-gray-50 whitespace-nowrap">
                            <span>Kiểm tra bảo hành</span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Nút: Tài khoản */}
            <div className="relative flex flex-col items-center gap-1.5 cursor-pointer group">
                <div className="w-11 h-11 flex items-center justify-center border border-orange-500 rounded-full text-orange-500 text-xl group-hover:bg-orange-50 transition-colors">
                    <FaUser />
                </div>
                <span className="text-[11px] text-gray-800 font-semibold uppercase tracking-tight">TÀI KHOẢN</span>

                {/* Box Dropdown: Ẩn mặc định, hiện ra khi hover vào thẻ cha */}
                <div className="absolute top-full mt-1 w-36 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-lg">
                    
                    {/* Một khoảng đệm trong suốt để nối giữa icon và menu, giúp chuột không bị trượt hover */}
                    <div className="h-2 w-full bg-transparent absolute -top-2 left-0"></div>

                    {/* Nội dung Menu */}
                    <div className="bg-white rounded-md border border-gray-100 overflow-hidden flex flex-col">
                        <Link
                          to= "dang-nhap"
                          className="w-full flex items-center gap-1.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:cursor-pointer transition-colors border-b border-gray-50">
                            <FaSignInAlt className="text-lg opacity-70" />
                            <span>Đăng nhập</span>
                        </Link>
                        <Link
                          to="dang-ky"
                          className="w-full flex items-center gap-1.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:cursor-pointer transition-colors border-b border-gray-50">
                            <FaUserPlus className="text-lg opacity-70" />
                            <span>Đăng ký</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Nút: Giỏ hàng (Có huy hiệu số lượng) */}
            <div className="relative flex flex-col items-center gap-1.5 cursor-pointer group">
          
              {/* Icon Giỏ hàng (Có viền màu cam chuẩn VNB Premium) */}
              <div className="w-11 h-11 flex items-center justify-center border border-orange-500 rounded-full text-orange-500 text-xl group-hover:bg-orange-50 transition-colors relative">
                <FaShoppingCart />
                {/* Badge số lượng sản phẩm */}
                <span className="absolute -top-1.5 -right-1.5 bg-[#d82a29] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </div>
              
              <span className="text-[11px] text-gray-800 font-semibold uppercase tracking-tight">Giỏ hàng</span>

              {/* 4. GỌI COMPONENT DROPDOWN VÀ TRUYỀN DỮ LIỆU VÀO */}
              <CartDropdown cartItems={cartItems} />
              
            </div>
          </div>
        </div>
    </header>
  );
}