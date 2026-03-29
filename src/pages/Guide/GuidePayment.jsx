import React from 'react';
import { Link } from 'react-router-dom';
import NewsSidebar from '../../components/News/NewsSidebar'; // Import Sidebar đã tạo ở phần Tin tức

const GuidePaymentPage = () => {
  // Dữ liệu mẫu cho block "Có thể bạn sẽ thích" ở cột trái
  const suggestedArticles = [
    {
      id: 1,
      title: 'Top 10 vợt cầu lông thiên công được ưa...',
      date: '08-01-2026 13:42',
      image: 'https://cdn.shopvnb.com/img/400x240/uploads/gallery/vot-cau-long-yonex-voltric-1-dg-new.webp' // Hình minh họa
    },
    {
      id: 2,
      title: 'Top 7 vợt cầu lông công thủ toàn diện năm 2019.',
      date: '07-10-2025 16:53',
      image: 'https://cdn.shopvnb.com/img/400x240/uploads/gallery/vot-cau-long-yonex-nanoray-72-chinh-hang.webp'
    },
    {
      id: 3,
      title: 'Những vợt cầu lông đang khuyến mãi tại...',
      date: '08-10-2025 15:39',
      image: 'https://cdn.shopvnb.com/img/400x240/uploads/gallery/vot-cau-long-yonex-arcsaber-11-play-chinh-hang.webp'
    },
    {
      id: 4,
      title: 'Top vợt cầu lông giá dưới 1 triệu nên mua...',
      date: '08-01-2026 11:45',
      image: 'https://cdn.shopvnb.com/img/400x240/uploads/gallery/vot-cau-long-yonex-astrox-88d-play-chinh-hang.webp'
    }
  ];

  // Dữ liệu tài khoản ngân hàng các chi nhánh
  const bankAccounts = [
    { id: 77, region: 'KHU VỰC QUẢNG NGÃI', name: 'VNB TP Quảng Ngãi', phone: '03 474 24688', address: '171 Hùng Vương, P Trần Phú, TP Quảng Ngãi', bankInfo: 'Ngân Hàng TMCP Việt Nam Thịnh Vượng (VPBank) STK - AGBVMS0525091266208 :Nguyễn Thanh Nhật' },
    { id: 78, region: 'KHU VỰC TÂY NINH', name: 'VNB Tây Ninh', phone: '0925 838 968', address: '76 Hoàng Lê Kha, Phường 3, Thành Phố Tây Ninh', bankInfo: 'Ngân Hàng MB - Tên: Nguyễn Tấn Phụng - Số TK: 22839397979' },
    { id: 79, region: 'KHU VỰC THÁI NGUYÊN', name: 'VNB Thái Nguyên', phone: '0977.235.707', address: 'Số 688 Đường Bắc Sơn- Tổ 9 - P.Hoàng Văn Thụ - Tp.Thái Nguyên - Thái nguyên', bankInfo: 'Techcombank - STK: 9779000000 - Tên: Nguyen Duc Anh' },
    { id: 80, region: 'KHU VỰC THANH HÓA', name: 'VNB Thanh Hoá', phone: '0967659858', address: '09 Đinh Công Tráng Phường Ba Đình TP Thanh Hoá', bankInfo: 'Ngân hàng nông nghiệp và phát triển nông thôn Agribank Chi nhánh Giao Thuỷ Nam Định STK : 3204205237387 Doan Dinh Khang' },
    { id: 81, region: 'KHU VỰC THỪA THIÊN HUẾ', name: 'VNB TP Huế', phone: '0962726053', address: '10B Bến Nghé, P. Phú Hội, TP. Huế', bankInfo: 'Ngân hàng Thương mại cổ phần Việt Nam Thịnh Vượng (VPBank) - Số TK: AGBVMS2015399518062 - Nguyen Thanh Nhat' },
    { id: 82, region: 'KHU VỰC TIỀN GIANG', name: 'VNB Mỹ Tho', phone: '0926777729', address: '20A1 Ấp Bắc, P.4, TP. Mỹ Tho, Tiền Giang', bankInfo: 'MB Bank - 00926777729 - Dương Hữu Quí' },
  ];

  return (
    <div className="w-full bg-[#f8f9fa] py-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row gap-8">
        
        {/* ===================== CỘT TRÁI (Sidebar: 25%) ===================== */}
        <div className="w-full lg:w-1/4 space-y-8">
          
          {/* Block: Có thể bạn sẽ thích */}
          <div className="bg-white border border-gray-200 shadow-sm">
            <h3 className="bg-[#f0f0f0] text-[14px] font-bold text-gray-800 px-4 py-3 uppercase border-b border-gray-200">
              Có thể bạn sẽ thích
            </h3>
            <div className="p-4 space-y-4">
              {suggestedArticles.map((article) => (
                <Link to="#" key={article.id} className="flex gap-3 group">
                  <div className="w-[80px] h-[60px] flex-shrink-0 overflow-hidden border border-gray-100">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[13px] font-semibold text-gray-800 leading-tight group-hover:text-[#ea5c0b] transition-colors line-clamp-2 mb-1">
                      {article.title}
                    </h4>
                    <p className="text-[11px] text-gray-400">{article.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Block: Danh mục tin tức (Tái sử dụng Component) */}
          <NewsSidebar />
          
        </div>

        {/* ===================== CỘT PHẢI (Nội dung chính: 75%) ===================== */}
        <div className="w-full lg:w-3/4 bg-white p-6 lg:p-10 border border-gray-200 shadow-sm">
          
          {/* Tiêu đề & Metadata */}
          <h1 className="text-2xl lg:text-[28px] font-bold text-gray-800 mb-4">
            Hướng dẫn thanh toán
          </h1>
          <div className="flex items-center text-[13px] text-gray-500 mb-6 border-b border-gray-100 pb-4">
            <span className="flex items-center mr-4">
              <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              27-10-2025 08:27
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              VNBSports
            </span>
          </div>

          {/* Nội dung bài viết */}
          <div className="text-[15px] text-gray-800 leading-relaxed space-y-6">
            
            <p className="italic">
              Bài viết được <span className="text-[#ea5c0b]">ShopVNB - Hệ thống shop cầu lông</span> hàng đầu Việt Nam với hơn 1 Super Center, 5 shop Premium và 78 chi nhánh trên toàn quốc kiểm duyệt và chia sẻ.
            </p>

            {/* Phần 1 */}
            <div>
              <h2 className="font-bold text-[16px] mb-3">1. Đối với quý khách hàng mua hàng trực tiếp tại các chi nhánh</h2>
              <ul className="space-y-3 pl-2">
                <li>- Tất cả các chi nhánh của hệ thống VNB đều chấp thuận thanh toán bằng tiền mặt, chuyển khoản qua ngân hàng hoặc thanh toán qua thẻ tín dụng. Đối với thanh toán qua thẻ tín dụng (VNB Sports chịu phí thẻ) ở bất cứ chi nhánh nào của hệ thống cửa hàng cầu lông VNB.</li>
                <li>- Quý khách có thể đến trực tiếp chi nhánh hoặc liên hệ qua hotline chi nhánh để biết thêm chi tiết.</li>
                <li>- Quý khách vui lòng kiểm tra sản phẩm kỹ trước khi thanh toán.</li>
              </ul>
            </div>

            {/* Phần 2 */}
            <div>
              <h2 className="font-bold text-[16px] mb-3">2. Đối với quý khách hàng mua hàng online đặt hàng qua Website</h2>
              <h3 className="font-bold text-[15px] mb-3">2.1 Khách hàng thanh toán bằng cách chuyển khoản hoặc thanh toán trực tiếp khi nhận hàng.</h3>
              <ul className="space-y-3 pl-2">
                <li>- Sau khi nhận được thông tin đặt hàng chúng tôi sẽ gọi điện để xác nhận đơn hàng trong vòng 24h và phản hồi lại thông tin cho khách hàng về việc thanh toán và thời gian giao nhận.</li>
                <li>- Quý khách có thể thanh toán COD - thanh toán khi nhận hàng, hoặc chuyển khoản thanh toán trước qua tài khoản ngân hàng.</li>
                <li>- Trong trường quý khách mua sản phẩm vợt có yêu cầu đan sẵn cước, quý khách vui lòng thanh toán trước toàn bộ giá trị đơn hàng bao gồm vợt và cước đan vợt bằng hình thức chuyển khoản qua tài khoản ngân hàng.</li>
                <li>- Quý khách có thể kiểm tra hàng trước khi nhận hàng, trong trường hợp có yêu cầu đổi/trả hàng hoặc vấn đề về sản phẩm, quý khách vui lòng liên hệ lại qua hotline 0338000308 để được hỗ trợ.</li>
              </ul>
            </div>

            {/* Thông tin tài khoản chung */}
            <div className="bg-gray-50 p-4 border border-gray-200">
              <p className="font-bold mb-2">+Thông tin tài khoản ngân hàng:</p>
              <p>ACB - STK: 134198 - Chủ tài khoản: Phan Tuấn Anh</p>
            </div>

            <p><span className="font-bold underline">Lưu ý:</span> Tài khoản trên sử dụng cho quý khách hàng mua hàng qua website. Vui lòng kiểm tra kỹ thông tin trước khi thực hiện giao dịch.</p>

            {/* Danh sách tài khoản các chi nhánh */}
            <div className="pt-6 border-t border-gray-200">
              {bankAccounts.map((bank, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-bold text-[14px] mb-2 uppercase">* {bank.region}</h3>
                  <p className="mb-1">
                    <span className="font-bold text-[#ea5c0b]">{bank.id}. {bank.name}</span> - <span className="text-[#ea5c0b]">{bank.phone}</span>
                  </p>
                  <p className="text-gray-600 mb-1 text-[14px]">Địa chỉ: {bank.address}</p>
                  <p className="font-medium text-[14px] text-gray-900">Thông tin thanh toán: <span className="font-normal text-gray-700">{bank.bankInfo}</span></p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default GuidePaymentPage;