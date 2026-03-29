import React from 'react';

const FranchisePage = () => {
  // DỮ LIỆU MẪU CHO CÁC PHẦN (Lấy từ ảnh)
  
  // 1. Lợi ích khi hợp tác (Ảnh 0 & 1)
  const benefits = [
    {
      icon: "https://vnb.com.vn/themes/images/icons/franchise-icon-1.png", // Thay bằng link ảnh icon thật
      title: "UY TÍN THƯƠNG HIỆU LỚN",
      description: "Thương hiệu số 1 về cầu lông tại Việt Nam, với hơn 80 cửa hàng toàn quốc."
    },
    {
      icon: "https://vnb.com.vn/themes/images/icons/franchise-icon-2.png",
      title: "NGUỒN HÀNG GIÁ SỈ TỐT NHẤT",
      description: "Được cung cấp nguồn hàng chính hãng từ các thương hiệu lớn với giá sỉ gốc."
    },
    {
      icon: "https://vnb.com.vn/themes/images/icons/franchise-icon-3.png",
      title: "MÔ HÌNH KINH DOANH CHUẨN",
      description: "Hệ thống quản lý, vận hành, trưng bày hàng hóa được chuẩn hóa cao."
    },
    {
      icon: "https://vnb.com.vn/themes/images/icons/franchise-icon-4.png",
      title: "HỖ TRỢ MARKETING ONLINE",
      description: "Hỗ trợ Marketing trên Website, Fanpage hơn 500k follow và các kênh truyền thông."
    }
  ];

  // 2. Các điểm kinh doanh (Ảnh 3)
  const locations = [
    { name: "VNB Premium Quận 1", address: "Số 2 Đề Thám, P. Cầu Ông Lãnh, Quận 1, TPHCM", image: "https://cdn.shopvnb.com/img/400x240/uploads/store/prem_q1.jpg" },
    { name: "VNB Premium Quận 11", address: "172 Lạc Long Quân, Phường 3, Quận 11, TPHCM", image: "https://cdn.shopvnb.com/img/400x240/uploads/store/prem_q11.jpg" },
    { name: "VNB Premium Bình Thạnh", address: "6 Phan Chu Trinh, Phường 2, Bình Thạnh, TPHCM", image: "https://cdn.shopvnb.com/img/400x240/uploads/store/prem_bt.jpg" },
    { name: "VNB Premium TP Thủ Đức", address: "Số 445 đường Lê Văn Việt, Tăng Nhơn Phú A, TPHCM", image: "https://cdn.shopvnb.com/img/400x240/uploads/store/prem_td.jpg" },
  ];

  return (
    <div className="w-full font-sans bg-white">
      {/* Container giới hạn độ rộng cho toàn trang */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* ===================== PHẦN 1: BANNER VÀ LỢI ÍCH (Ảnh 0 & 1) ===================== */}
        {/* Nền cam nâu đậm, bo tròn giống ảnh */}
        <section className="bg-[#a84c24] rounded-2xl p-8 mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-center text-white uppercase mb-4 leading-tight">
            Chính sách nhượng quyền thương hiệu VNB Sports
          </h1>
          <p className="text-center text-white text-[15px] mb-12 max-w-4xl mx-auto leading-relaxed">
            Hệ thống cửa hàng cầu lông, pickleball số 1 Việt Nam với hơn 80 chi nhánh toàn quốc. Nơi cung cấp sỉ và lẻ các mặt hàng dụng cụ thể thao chuyên nghiệp.
          </p>
          
          <h2 className="text-2xl font-semibold text-center text-white uppercase mb-8">
            Lợi ích khi hợp tác nhượng quyền cùng VNB Sports
          </h2>
          
          {/* Lưới các thẻ lợi ích (4 cột trên PC) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
            {benefits.map((benefit, index) => (
              // Thẻ lợi ích màu xanh đen đậm, bo tròn
              <div key={index} className="bg-[#1c2e42] p-6 rounded-xl flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img src={benefit.icon} alt={benefit.title} className="w-12 h-12 object-contain filter invert opacity-80" />
                </div>
                <h3 className="font-bold text-[16px] mb-2 leading-tight">{benefit.title}</h3>
                <p className="text-[13px] opacity-90 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== PHẦN 2: VNB SUPER CENTER (Ảnh 2) ===================== */}
        <section className="bg-white p-8 mb-12 border border-gray-100 rounded-xl shadow-sm">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Cột chữ */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#ea5c0b] uppercase mb-5 leading-tight">VNB Super Center</h2>
              <p className="text-[#3b82f6] text-[15px] italic mb-6 leading-relaxed">VNB Sports mở Super Center: Nơi trải nghiệm pickleball đỉnh cao cho các vợt thủ</p>
              <div className="space-y-4 text-[14px] text-gray-700 leading-relaxed">
                 <p><span className="font-bold text-[#ea5c0b]">Mô hình Super Center:</span> Đây là mô hình trung tâm phức hợp thể thao hiện đại, không chỉ kinh doanh dụng cụ cầu lông, pickleball, tennis mà còn tích hợp các dịch vụ trải nghiệm, sân tập chuyên nghiệp.</p>
                 <p><span className="font-bold text-[#ea5c0b]">Không gian đẳng cấp:</span> VNB Super Center được thiết kế rộng rãi, sang trọng, mang đến trải nghiệm mua sắm và tập luyện đỉnh cao.</p>
                 <p><span className="font-bold text-[#ea5c0b]">Đa dạng sản phẩm:</span> Cung cấp đầy đủ các dòng sản phẩm từ các thương hiệu hàng đầu thế giới như Yonex, Lining, Victor, VS...</p>
              </div>
            </div>
            {/* Cột ảnh (Gallery 3 ảnh) */}
            <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                <img src="https://vnb.com.vn/themes/images/super-center-1.jpg" alt="VNB Super Center 1" className="w-full h-full object-cover rounded-md aspect-video md:aspect-auto" />
                <div className="grid grid-cols-1 gap-4">
                    <img src="https://vnb.com.vn/themes/images/super-center-2.jpg" alt="VNB Super Center 2" className="w-full h-40 object-cover rounded-md" />
                    <img src="https://vnb.com.vn/themes/images/super-center-3.jpg" alt="VNB Super Center 3" className="w-full h-40 object-cover rounded-md" />
                </div>
            </div>
          </div>
        </section>

        {/* ===================== PHẦN 3: BẢN ĐỒ VÀ ĐỊA ĐIỂM (Ảnh 3) ===================== */}
        <section className="bg-white p-8 mb-12 border border-gray-100 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 uppercase mb-8 text-center">Hệ thống cửa hàng VNB Sports trên toàn quốc</h2>
          <div className="flex flex-col md:flex-row gap-8 mb-10">
              {/* Ảnh bản đồ */}
              <div className="w-full md:w-3/4">
                  <img src="https://vnb.com.vn/themes/images/store-map.jpg" alt="Bản đồ hệ thống VNB" className="w-full h-auto object-contain rounded-md" />
              </div>
              {/* Danh sách thống kê loại cửa hàng */}
              <div className="w-full md:w-1/4 space-y-3 text-[14px] text-gray-800">
                  <p>● 2 VNB Super Center</p>
                  <p>● 8 VNB Premium</p>
                  <p>● 78 VNB Standard</p>
              </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-6 uppercase">Địa điểm kinh doanh VNB Sports</h3>
          {/* Lưới các cửa hàng cụ thể (4 cột trên PC) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-lg shadow-sm flex flex-col group overflow-hidden">
                <img src={loc.image} alt={loc.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4 flex-1">
                  <h4 className="font-bold text-[14px] text-gray-900 mb-2 leading-tight">{loc.name}</h4>
                  <p className="text-[12px] text-gray-600 leading-relaxed">{loc.address}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== PHẦN 4: YÊU CẦU, FORM VÀ QUY TRÌNH (Ảnh 4) ===================== */}
        <section className="bg-[#1c2e42] p-8 rounded-xl text-white">
          <div className="flex flex-col lg:flex-row gap-10 mb-12">
            
            {/* Cột trái: Yêu cầu */}
            <div className="w-full lg:w-1/2">
                <h2 className="text-2xl font-bold text-white uppercase mb-6 leading-tight">Yêu cầu để trở thành đối tác nhượng quyền VNB Sports</h2>
                <ul className="space-y-4 text-[14px] leading-relaxed">
                    <li className="flex items-center"><span className="w-1 h-1 bg-[#ea5c0b] rounded-full mr-3"></span>Bạn có đam mê thể thao, cầu lông, pickleball.</li>
                    <li className="flex items-center"><span className="w-1 h-1 bg-[#ea5c0b] rounded-full mr-3"></span>Vị trí mặt bằng kinh doanh thuận lợi, tối thiểu 100m2.</li>
                    <li className="flex items-center"><span className="w-1 h-1 bg-[#ea5c0b] rounded-full mr-3"></span>Có nguồn vốn đầu tư ban đầu phù hợp.</li>
                    <li className="flex items-center"><span className="w-1 h-1 bg-[#ea5c0b] rounded-full mr-3"></span>Cam kết tuân thủ quy trình quản lý và vận hành chung.</li>
                </ul>
            </div>
            
            {/* Cột phải: Form đăng ký */}
            <div className="w-full lg:w-1/2 bg-[#1c2e42] border border-gray-600 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-center uppercase mb-6 text-white">Đăng ký nhận tư vấn nhượng quyền</h3>
                <form className="space-y-4">
                    <input type="text" placeholder="Họ tên" className="w-full border border-gray-600 bg-[#1c2e42] px-4 py-2 rounded text-[14px] text-white focus:border-[#ea5c0b]" />
                    <input type="text" placeholder="Số điện thoại" className="w-full border border-gray-600 bg-[#1c2e42] px-4 py-2 rounded text-[14px] text-white focus:border-[#ea5c0b]" />
                    <input type="email" placeholder="Email" className="w-full border border-gray-600 bg-[#1c2e42] px-4 py-2 rounded text-[14px] text-white focus:border-[#ea5c0b]" />
                    <input type="text" placeholder="Khu vực quan tâm" className="w-full border border-gray-600 bg-[#1c2e42] px-4 py-2 rounded text-[14px] text-white focus:border-[#ea5c0b]" />
                    <textarea placeholder="Lời nhắn" rows="4" className="w-full border border-gray-600 bg-[#1c2e42] px-4 py-2 rounded text-[14px] text-white focus:border-[#ea5c0b]"></textarea>
                    <button type="submit" className="w-full bg-[#ea5c0b] text-white font-bold py-2.5 rounded uppercase hover:bg-[#c04000] transition-colors text-[14px]">Đăng ký ngay</button>
                </form>
                <div className="mt-5 text-center text-[12px] space-y-1">
                    <p>Hoặc liên hệ Hotline trực tiếp:</p>
                    <p className="font-bold text-[#ea5c0b] text-[13px]">Mr. Hậu - 0334.741.141</p>
                    <p>Hợp tác kinh doanh (Ms. Thảo): <span className="text-[#ea5c0b]">0947.342.259</span></p>
                </div>
            </div>
          </div>
          
          {/* Quy trình hợp tác */}
          <div>
            <h2 className="text-2xl font-bold text-center uppercase mb-8">Quy trình hợp tác nhượng quyền cùng VNB Sports</h2>
            <ul className="space-y-4 text-[14px] max-w-2xl mx-auto leading-relaxed">
                <li className="flex items-center"><span className="font-bold text-[#ea5c0b] mr-3">Bước 1:</span> Đăng ký thông tin yêu cầu nhượng quyền.</li>
                <li className="flex items-center"><span className="font-bold text-[#ea5c0b] mr-3">Bước 2:</span> VNB Sports liên hệ tư vấn sơ bộ.</li>
                <li className="flex items-center"><span className="font-bold text-[#ea5c0b] mr-3">Bước 3:</span> Khảo sát mặt bằng và đánh giá tiềm năng.</li>
                <li className="flex items-center"><span className="font-bold text-[#ea5c0b] mr-3">Bước 4:</span> Ký kết hợp đồng nhượng quyền.</li>
                <li className="flex items-center"><span className="font-bold text-[#ea5c0b] mr-3">Bước 5:</span> Thi công và thiết kế cửa hàng.</li>
                <li className="flex items-center"><span className="font-bold text-[#ea5c0b] mr-3">Bước 6:</span> Đào tạo quản lý và vận hành.</li>
                <li className="flex items-center"><span className="font-bold text-[#ea5c0b] mr-3">Bước 7:</span> Khai trương và đi vào hoạt động.</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FranchisePage;