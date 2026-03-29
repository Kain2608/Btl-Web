import React from 'react';

const AboutPage = () => {
  // Dữ liệu Hệ thống cửa hàng được cấu trúc lại từ text của bạn để dễ dàng render thành giao diện đẹp
  const storeRegions = [
    {
      region: 'Khu vực TPHCM',
      stores: [
        { name: 'VNB Super Center', phone: '0936155994', address: '390/2 Hà Huy Giáp, Phường Thạnh Lộc, Quận 12' },
        { name: 'VNB PREMIUM Quận 1', phone: '0931823614', address: '20 Cao Bá Nhạ, Phường Nguyễn Cư Trinh, Quận 1' },
        { name: 'VNB PREMIUM Quận 11', phone: '0828333323', address: '209 Âu Cơ, Phường 5, quận 11' },
        { name: 'VNB PREMIUM Bình Thạnh', phone: '0862527179', address: '284 Xô Viết Nghệ Tĩnh, P21, Quận Bình Thạnh' },
        { name: 'VNB PREMIUM TP Thủ Đức', phone: '0767306363', address: '916 Kha Vạn Cân phường Trường Thọ TP Thủ Đức' },
        { name: 'VNB Quận 1', phone: '0798684568', address: 'Số 6 Nguyễn Hữu Cầu Phường Tân Định Quận 1' },
        { name: 'VNB Quận 3', phone: '0936914920', address: '218 Lý Thái Tổ Phường 1, Quận 3' },
        { name: 'VNB Quận 4', phone: '070 770 7886', address: 'Số 400 Đường Hoàng Diệu, Phường Vĩnh Hội' },
        { name: 'VNB Quận 5', phone: '0903 178 483', address: '19 Tân Hưng, Phường 12, Quận 5' },
        { name: 'VNB Quận 6', phone: '0935267926', address: '129 Kinh Dương Vương Phường 12 Quận 6' },
        { name: 'VNB Quận 7', phone: '0899793965', address: '39 đường 65, Phường Tân Phong, Quận 7' },
        { name: 'VNB Quận 8', phone: '0925888895', address: '888 Tạ Quang Bửu, Phường 5, Quận 8' },
        { name: 'VNB Quận 10', phone: '0932 610 008', address: '198 Hòa Hưng, Phường 13, Quận 10' },
        { name: 'VNB Quận 11', phone: '0888554268', address: '364 Lạc Long Quân, Phường 5, Quận 11' },
        { name: 'VNB Quận 12', phone: '0816201094', address: '171 Dương Thị Mười, P. Tân Chánh Hiệp, Quận 12' },
        { name: 'VNB Quận 12 - CN2', phone: '0703 372 045', address: '288 Nguyễn Văn Quá, Đông Hưng Thuận, Quận 12' },
        { name: 'VNB Bình Thạnh', phone: '0908 159 225', address: '289 Nguyễn Văn Đậu, P.11, Q. Bình Thạnh' },
        { name: 'VNB TP Thủ Đức - CN1', phone: '0904 682 595', address: '232 Quốc Lộ 13 Phường Hiệp Bình Chánh' },
        { name: 'VNB TP Thủ Đức - CN2', phone: '0937441822', address: '254 Nguyễn Hoàng, phường An Phú' },
        { name: 'VNB TP Thủ Đức - CN3', phone: '0961684568', address: '20A Trần Hưng Đạo, P. Hiệp Phú, Quận 9' },
        { name: 'VNB TP Thủ Đức - CN4', phone: '0853684568', address: '7 Đường Số 5, Phước Bình, Quận 9' },
        { name: 'VNB Gò Vấp', phone: '077 419 0586', address: '1361 Phan Văn Trị, Phường 10, Quận Gò Vấp' },
        { name: 'VNB Phú Nhuận', phone: '0392885156', address: '154 Hồng Hà ,Phường 9, Quận Phú Nhuận' },
        { name: 'VNB Tân Bình', phone: '0908012059', address: '344 Nguyễn Trọng Tuyển, P.2, Q.Tân Bình' },
        { name: 'VNB Tân Bình - CN2', phone: '0966 950029', address: '354 Trường Chinh, P13, Q. Tân Bình' },
        { name: 'VNB Tân Phú', phone: '0326824047', address: '171B Nguyễn Súy, phường Tân Quý, quận Tân Phú' },
        { name: 'VNB Bình Tân', phone: '0909483145', address: '296 Bình Trị Đông , Phường Bình Trị Đông' },
        { name: 'VNB Củ Chi', phone: '0898908386', address: '147 Đường Nguyễn Văn Khạ, KP1, TT Củ Chi' },
      ]
    },
    {
      region: 'Khu vực Hà Nội',
      stores: [
        { name: 'VNB Ba Đình', phone: '0967526025', address: 'Số 33 Đốc Ngữ, Phường Liễu Giai, Quận Ba Đình' },
        { name: 'VNB Đống Đa', phone: '0904507752', address: '350 Khâm Thiên, P. Thổ Quan, Đống Đa' },
        { name: 'VNB Hai Bà Trưng', phone: '0969657994', address: 'Số 15 Ngõ 200 Trần Đại Nghĩa, Phường Đồng Tâm' },
        { name: 'VNB Hai Bà Trưng - CN2', phone: '0964723363', address: '44 phố Chùa Quỳnh, P. Bạch Mai' },
        { name: 'VNB Nam Từ Liêm', phone: '0981234593', address: '45 Trung Văn - Phường Trung Văn - Quận Nam Từ Liêm' },
        { name: 'VNB Bắc Từ Liêm', phone: '096 631 34 58', address: 'Kiot tổng kho 101 tổng cục hậu cần, số 101 đường cầu diễn' },
        { name: 'VNB Cầu Giấy', phone: '037 5207267', address: '33 Trần Quốc Vượng, Dịch Vọng Hậu, Cầu Giấy' },
        { name: 'VNB Hà Đông', phone: '0981143228', address: '138 Nguyễn Viết Xuân, Phường Quang Trung, Quận Hà Đông' },
        { name: 'VNB Hoàng Mai', phone: '0973 48 23 25', address: '92 Nguyễn Hữu Thọ, Phường Định Công' },
        { name: 'VNB Hoài Đức', phone: '0975559964', address: 'Số 555 Đường Vạn Xuân, TT Trạm Trôi, Hoài Đức' },
        { name: 'VNB Tây Hồ', phone: '0931842288', address: '588 Lạc Long Quân, P. Nhật Tân , Q.Tây Hồ' },
        { name: 'VNB Thanh Trì', phone: '0379255579', address: 'Số 36 đường 70 Tân Triều Thanh Trì Hà Nội' },
      ]
    },
    {
      region: 'Khu vực Đà Nẵng',
      stores: [
        { name: 'VNB Hải Châu', phone: '0865.437.438', address: '170 Triệu Nữ Vương, Nam Dương, Hải Châu' },
        { name: 'VNB Thanh Khê', phone: '0949 148 879', address: '910 Trần Cao Vân, P. Thanh Khê Tây, Q.Thanh Khê' },
        { name: 'VNB Cẩm Lệ', phone: '0911594343', address: '837 Nguyễn Hữu Thọ - Khuê Trung - Cẩm Lệ' },
        { name: 'VNB Liên Chiểu', phone: '0942 724 779', address: '507 Tôn Đức Thắng, P.Hòa Khánh' },
      ]
    },
    {
      region: 'Các Tỉnh / Thành Phố Khác',
      stores: [
        { name: 'VNB Long Xuyên (An Giang)', phone: '0928999902', address: '117 Hà Hoàng Hổ, P. Long Xuyên, An Giang' },
        { name: 'VNB Vũng Tàu', phone: '0788 6788 72', address: 'Số 12 Đường 30/4 Phường 9 TP Vũng Tàu' },
        { name: 'VNB Bà Rịa', phone: '0707 450 678', address: '403 đường 27/4, phường Phước Hưng, TP Bà Rịa' },
        { name: 'VNB TP Bắc Giang', phone: '0902374555', address: '249 Hoàng Văn Thụ Phường Xương Giang' },
        { name: 'VNB Quy Nhơn (Bình Định)', phone: '0926889977', address: '81 Trần Phú, TP. Quy Nhơn, Bình Định' },
        { name: 'VNB Thủ Dầu Một (Bình Dương)', phone: '0886.774.776', address: '16 Trần Văn Ơn, Phường Phú Hòa' },
        { name: 'VNB Thuận An (Bình Dương)', phone: '0944222446', address: '53B Nguyễn Văn Tiết, Phường Lái Thiêu' },
        { name: 'VNB Dĩ An (Bình Dương)', phone: '0909 318 373', address: '431 Trần Hưng Đạo, P. Dĩ An' },
        { name: 'VNB Cần Thơ (Ninh Kiều)', phone: '0373344599', address: '33B Đ. Mậu Thân, Phường An Hòa' },
        { name: 'VNB Buôn Mê Thuột', phone: '0838 684 568', address: '108 Lê Hồng Phong, phường Thắng Lợi' },
        { name: 'VNB Biên Hoà (Đồng Nai)', phone: '0908685627', address: '683 Phạm Văn Thuận, P. Tam Hiệp' },
        { name: 'VNB Hải Phòng', phone: '093 629 39 25', address: '202-204 Trần Nguyên Hãn, P. Trần Nguyên Hãn' },
        { name: 'VNB Nha Trang (Khánh Hòa)', phone: '092 606 7788', address: '126 Trần Quý Cáp, phường Tây Nha Trang' },
        { name: 'VNB Đà Lạt (Lâm Đồng)', phone: '0344905979', address: '05 Trần Lê, Phường Xuân Hương, TP Đà Lạt' },
        { name: 'VNB TP Vinh (Nghệ An)', phone: '0777933386', address: '199 Nguyễn Văn Cừ, Phường Hưng Bình' },
      ]
    }
  ];

  return (
    <div className="w-full bg-[#f8f9fa] py-10 font-sans">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* ===================== PHẦN HEADER BÀI VIẾT ===================== */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase mb-4">
            GIỚI THIỆU
          </h1>
          <div className="flex items-center text-[13px] text-gray-500 mb-8 border-b border-gray-100 pb-4">
            <span className="mr-4 flex items-center">
              <svg className="w-4 h-4 mr-1 text-[#ea5c0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              01-12-2025 11:14
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              VNBSports
            </span>
          </div>

          {/* ===================== NỘI DUNG GIỚI THIỆU ===================== */}
          <div className="text-[15px] text-gray-700 leading-relaxed space-y-5 text-justify">
            <p className="font-medium text-gray-900">
              Bài viết được <span className="text-[#ea5c0b]">ShopVNB - Hệ thống shop cầu lông</span> hàng đầu Việt Nam với hơn 1 Super Center, 5 shop Premium và 78 chi nhánh trên toàn quốc kiểm duyệt và chia sẻ.
            </p>
            <p>
              Tháng 12/2011, Forum <a href="https://www.vnbadminton.com/" className="text-blue-600 hover:underline">vnbadminton.com</a> được thành lập, đây là website cung cấp những thông tin chuyên nghiệp về tin tức và diễn đàn cầu lông. Nhận thấy sự phát triển của cầu lông trong nước, bên cạnh đó là mong muốn phục vụ tốt hơn cho thành viên và những bạn yêu mến cầu lông. 
            </p>
            <p>
              Tháng 12/2012, Ban Quản Trị Vnbadminton đã mạnh dạn xây dựng <strong className="text-gray-900">Shop cầu lông VNB</strong> (shopvnb.com) để có thể làm được vai trò này. Với kinh nghiệm nhiều năm hoạt động trong lĩnh vực cầu lông, đến với shopvnb bạn sẽ yên tâm về chất lượng sản phẩm, đội ngũ tư vấn sản phẩm chuyên nghiệp và giá cả hợp lý.
            </p>
            <p>
              Bên cạnh một website chuyên nghiệp thì Shop VNB còn phát triển thêm 1 kênh fanpage để cung cấp thông tin nhanh hơn cho thành viên. Chính sự chuyên nghiệp này đã được tạo được uy tín rất lớn trong cộng đồng yêu mến cầu lông trong và ngoài nước.
            </p>
            <p>
              Hiện nay, Hệ thống cửa hàng cầu lông VNB đã có <strong className="text-[#ea5c0b]">hơn 80 chi nhánh</strong> trải dài trên khắp mọi miền Đất nước. Với tiêu chí luôn đảm bảo cung cấp đầy đủ các mặt hàng chuyên dụng dành riêng cho bộ môn cầu lông như giày, vợt cầu lông, túi vợt, balo, quần áo, phụ kiện,... nổi trội với nhiều phân khúc giá trải dài từ thấp đến cao nên các lông thủ cần mua gì cứ đến ngay với ShopVNB.
            </p>
            <p>
              ShopVNB luôn là nơi cung cấp nhanh nhất các mặt hàng hot đến từ những <strong className="text-gray-900">thương hiệu top đầu thế giới như Yonex, Lining, Victor, Mizuno,...</strong> Không những vậy các sản phẩm đến từ các hãng tầm trung và giá rẻ như Adidas, Forza, Apacs, VNB, Kamito,... Shop cầu lông VNB cũng luôn cung cấp đầy đủ và mẫu mã rất đa dạng.
            </p>
            <div className="bg-orange-50 p-4 border-l-4 border-[#ea5c0b] italic text-gray-800 my-6">
              * Đặc biệt, ShopVNB là địa chỉ nổi tiếng căng vợt cầu lông chuẩn nhất ở Việt Nam. Tất cả các cửa hàng được trang bị máy đan vợt điện tử cao cấp cùng nhân viên ở shop luôn được trau dồi liên tục các kĩ thuật đan vợt hàng đầu trên thế giới.
            </div>
          </div>
        </div>

        {/* ===================== TẦM NHÌN, SỨ MỆNH & GIÁ TRỊ CỐT LÕI ===================== */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-[#ea5c0b] uppercase mb-8 relative pb-3">
            Tầm nhìn, Sứ mệnh và Giá trị cốt lõi
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-[#ea5c0b]"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Tầm nhìn */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#ea5c0b]">
              <h3 className="text-lg font-bold text-gray-800 uppercase mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#ea5c0b]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                Tầm Nhìn
              </h3>
              <p className="font-semibold text-[#ea5c0b] italic mb-4">"Trở thành nhà phân phối và sản xuất thể thao lớn nhất Việt Nam"</p>
              <ul className="space-y-2 text-[14px] text-gray-700">
                <li className="flex items-start"><span className="text-[#ea5c0b] mr-2 mt-0.5">✔</span> Trở thành đơn vị dẫn đầu cả nước trong lĩnh vực thể thao, giúp nâng cao sức khỏe cộng đồng.</li>
                <li className="flex items-start"><span className="text-[#ea5c0b] mr-2 mt-0.5">✔</span> Tự lực sản xuất các sản phẩm chất lượng cao, phù hợp với nhu cầu của người Việt.</li>
                <li className="flex items-start"><span className="text-[#ea5c0b] mr-2 mt-0.5">✔</span> Xây dựng hệ thống cửa hàng rộng khắp 64 tỉnh thành.</li>
              </ul>
            </div>

            {/* Sứ mệnh */}
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#ea5c0b]">
              <h3 className="text-lg font-bold text-gray-800 uppercase mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#ea5c0b]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/></svg>
                Sứ Mệnh
              </h3>
              <p className="font-semibold text-[#ea5c0b] italic mb-4">"VNB SPORTS cam kết mang đến những sản phẩm, dịch vụ chất lượng tốt nhất phục vụ cho người chơi thể thao để nâng cao sức khỏe của chính mình."</p>
              <ul className="space-y-2 text-[14px] text-gray-700">
                <li><strong className="text-gray-900">Đối với thị trường:</strong> Trở thành Thương hiệu cầu lông của người Việt, cung cấp sản phẩm tốt nhất.</li>
                <li><strong className="text-gray-900">Đối với đối tác:</strong> Trở thành “Người đồng hành số 1” của các đối tác.</li>
                <li><strong className="text-gray-900">Đối với nhân viên:</strong> Xây dựng môi trường chuyên nghiệp, thu nhập cao và công bằng.</li>
                <li><strong className="text-gray-900">Đối với xã hội:</strong> Hài hòa lợi ích doanh nghiệp với xã hội, trách nhiệm cộng đồng.</li>
              </ul>
            </div>
          </div>

          {/* Giá trị cốt lõi */}
          <h3 className="text-xl font-bold text-center text-gray-800 uppercase mb-6 mt-10">Giá trị cốt lõi</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'TRUNG', desc: 'Trung thực với Khách hàng - Đối tác - Nhân viên. Đặt quyền lợi người tiêu dùng lên trên hết.' },
              { title: 'TÍN', desc: 'Lấy chữ TÍN làm trọng tâm, đảm bảo đúng cam kết về chất lượng, sản phẩm và dịch vụ.' },
              { title: 'TÂM', desc: 'Coi trọng khách hàng, lấy sự hài lòng của khách hàng làm thước đo thành công.' },
              { title: 'TRÍ', desc: 'Đề cao sự sáng tạo, dám nghĩ dám làm, ứng dụng công nghệ mới vào sản xuất.' },
              { title: 'NHÂN', desc: 'Xây dựng môi trường chuyên nghiệp, coi người lao động là tài sản quý giá nhất.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-lg shadow-sm text-center hover:-translate-y-1 transition-transform border border-gray-100">
                <div className="w-12 h-12 mx-auto bg-orange-100 text-[#ea5c0b] rounded-full flex items-center justify-center font-bold text-xl mb-3">
                  {item.title[0]}
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-[12px] text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
             <p className="inline-block bg-[#ea5c0b] text-white px-8 py-3 rounded-full font-bold text-lg shadow-md uppercase tracking-wider">
               Slogan: Together we can
             </p>
          </div>
        </div>

        {/* ===================== TRIẾT LÝ KINH DOANH ===================== */}
        <div className="bg-[#1c2e42] text-white p-8 md:p-10 rounded-xl mb-12 text-center">
           <h2 className="text-2xl font-bold uppercase mb-4 text-[#ea5c0b]">Triết lý kinh doanh</h2>
           <p className="text-[15px] leading-relaxed max-w-3xl mx-auto mb-6 opacity-90">
             VNB SPORTS mong muốn trở thành một công ty phân phối và sản xuất sản phẩm cầu lông chất lượng tốt nhất ở Việt Nam. Vì thế chúng tôi tâm niệm rằng chất lượng và sáng tạo là người bạn đồng hành của VNB SPORTS. Chúng tôi xem khách hàng là trung tâm và cam kết đáp ứng mọi nhu cầu của khách hàng.
           </p>
           <h3 className="text-lg font-bold uppercase text-white mb-2">Chính sách chất lượng</h3>
           <p className="text-[14px] leading-relaxed max-w-3xl mx-auto italic opacity-80 mb-6">
             "Luôn thỏa mãn và có trách nhiệm với khách hàng bằng cách không ngừng cải tiến, đa dạng hóa sản phẩm và dịch vụ, đảm bảo chất lượng với giá cả cạnh tranh, tôn trọng đạo đức kinh doanh và tuân theo pháp luật."
           </p>
           <div className="inline-block border border-[#ea5c0b] text-[#ea5c0b] px-6 py-2 rounded font-medium text-[14px]">
             * ShopVNB cam kết bán hàng chính hãng, không bán hàng kém chất lượng.
           </div>
        </div>

        {/* ===================== HỆ THỐNG CỬA HÀNG ===================== */}
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800 uppercase mb-8">
            Hệ Thống Cửa Hàng Shop Cầu Lông VNB
          </h2>
          
          <div className="space-y-8">
            {storeRegions.map((regionData, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Header Tên Khu Vực */}
                <div className="bg-[#f0f0f0] px-6 py-4 border-b border-gray-200">
                  <h3 className="font-bold text-lg text-gray-800 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#ea5c0b]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                    {regionData.region}
                  </h3>
                </div>
                
                {/* Lưới các cửa hàng trong khu vực */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {regionData.stores.map((store, sIdx) => (
                    <div key={sIdx} className="border-l-2 border-[#ea5c0b] pl-4">
                      <h4 className="font-bold text-[15px] text-gray-900 mb-1">{store.name}</h4>
                      <p className="text-[13px] text-gray-600 mb-1">
                        <span className="font-medium text-gray-800">Hotline:</span> <span className="text-[#ea5c0b] font-medium">{store.phone}</span>
                      </p>
                      <p className="text-[13px] text-gray-500 line-clamp-2">
                        {store.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Lời kết */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-[#ea5c0b] mb-4">
              Các bạn còn chờ gì nữa mà không liên lạc với chúng tôi để tìm được cho mình sản phẩm cầu lông ưng ý!
            </h3>
            <button className="bg-[#ea5c0b] hover:bg-[#c04000] text-white font-bold py-3 px-8 rounded-full transition-colors uppercase shadow-md">
              Xem hệ thống cửa hàng ngay
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutPage;