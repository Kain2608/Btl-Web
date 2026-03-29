import React from 'react';
import { Link } from 'react-router-dom';
import NewsSidebar from '../../components/News/NewsSidebar'; // Lưu ý đường dẫn chữ 'news' viết thường như bạn đã sửa

const GuideRacketPage = () => {
  // Dữ liệu mẫu cho block "Có thể bạn sẽ thích" ở cột trái
  const suggestedArticles = [
    {
      id: 1,
      title: 'Top 10 vợt cầu lông thiên công được ưa...',
      date: '08-01-2026 13:42',
      image: 'https://cdn.shopvnb.com/img/400x240/uploads/gallery/vot-cau-long-yonex-voltric-1-dg-new.webp'
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
    }
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

          {/* Block: Danh mục tin tức */}
          <NewsSidebar />
        </div>

        {/* ===================== CỘT PHẢI (Nội dung chính: 75%) ===================== */}
        <div className="w-full lg:w-3/4 bg-white p-6 lg:p-10 border border-gray-200 shadow-sm">
          
          {/* Tiêu đề & Metadata */}
          <h1 className="text-2xl lg:text-[28px] font-bold text-gray-800 mb-4 leading-tight">
            Hướng dẫn cách chọn vợt cầu lông cho người mới chơi từ A - Z
          </h1>
          <div className="flex items-center text-[13px] text-gray-500 mb-6 border-b border-gray-100 pb-4">
            <span className="flex items-center mr-4">
              <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              05-04-2026 10:15
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              VNBSports
            </span>
          </div>

          {/* Nội dung bài viết */}
          <div className="text-[15px] text-gray-800 leading-relaxed space-y-6">
            
            <p className="italic">
              Bài viết được <span className="text-[#ea5c0b]">ShopVNB</span> tổng hợp nhằm giúp các bạn mới tham gia bộ môn cầu lông có thể tự trang bị kiến thức để chọn cho mình một cây vợt phù hợp nhất với lối đánh và thể lực.
            </p>

            {/* Mục 1: Trọng lượng */}
            <div>
              <h2 className="font-bold text-[18px] text-[#ea5c0b] mb-3 uppercase border-l-4 border-[#ea5c0b] pl-3">1. Trọng lượng vợt (Thông số U)</h2>
              <p className="mb-3">Ký hiệu U trên cán vợt thể hiện trọng lượng của cây vợt. Số U càng lớn thì vợt càng nhẹ và ngược lại.</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-200 mb-4 text-[14px]">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 px-4 py-2 font-bold w-1/4">Thông số U</th>
                      <th className="border border-gray-200 px-4 py-2 font-bold w-1/4">Trọng lượng</th>
                      <th className="border border-gray-200 px-4 py-2 font-bold w-1/2">Đối tượng phù hợp</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-semibold">2U</td>
                      <td className="border border-gray-200 px-4 py-2">90 - 94g</td>
                      <td className="border border-gray-200 px-4 py-2">Rất nặng. Dành cho VĐV chuyên nghiệp, lực tay rất khỏe.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-semibold text-[#ea5c0b]">3U</td>
                      <td className="border border-gray-200 px-4 py-2">85 - 89g</td>
                      <td className="border border-gray-200 px-4 py-2">Nặng vừa. Phù hợp nam giới phong trào, lực cổ tay tốt.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-semibold text-[#ea5c0b]">4U</td>
                      <td className="border border-gray-200 px-4 py-2">80 - 84g</td>
                      <td className="border border-gray-200 px-4 py-2">Khá nhẹ. <strong className="text-gray-900">Phổ biến nhất</strong>, phù hợp cho người mới chơi, nữ giới hoặc nam lực tay trung bình.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-4 py-2 font-semibold">5U (Super Light)</td>
                      <td className="border border-gray-200 px-4 py-2">75 - 79g</td>
                      <td className="border border-gray-200 px-4 py-2">Rất nhẹ. Dành cho người lớn tuổi, nữ giới lực tay yếu.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mục 2: Chu vi cán vợt */}
            <div>
              <h2 className="font-bold text-[18px] text-[#ea5c0b] mb-3 uppercase border-l-4 border-[#ea5c0b] pl-3">2. Chu vi cán vợt (Thông số G)</h2>
              <p className="mb-3">Ký hiệu G dùng để chỉ chu vi vòng cán vợt. Số G càng lớn thì cán vợt càng nhỏ. Thông thường, người Việt Nam sẽ phù hợp với các cán vợt có thông số <strong>G4</strong> hoặc <strong>G5</strong>.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                <li><span className="font-bold">G2, G3:</span> Cán to, thường dành cho thị trường Châu Âu, Mỹ.</li>
                <li><span className="font-bold text-[#ea5c0b]">G4, G5:</span> Cán vừa và nhỏ, rất phù hợp với form bàn tay người Châu Á.</li>
                <li><span className="font-bold">G6:</span> Cán rất nhỏ, thường thấy ở các dòng vợt siêu nhẹ dành cho nữ.</li>
              </ul>
            </div>

            {/* Mục 3: Điểm cân bằng */}
            <div>
              <h2 className="font-bold text-[18px] text-[#ea5c0b] mb-3 uppercase border-l-4 border-[#ea5c0b] pl-3">3. Điểm cân bằng (Balance Point)</h2>
              <p className="mb-3">Đây là yếu tố quyết định lối chơi của bạn là Tấn công (Đập cầu) hay Phòng thủ (Phản tạt).</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-[14px]">
                <div className="bg-red-50 p-4 border border-red-200 rounded text-center">
                  <h3 className="font-bold text-red-600 mb-2">Nặng đầu (Heavy Head)</h3>
                  <p className="text-gray-700">Điểm cân bằng 295mm. Hỗ trợ đập cầu uy lực, đầm tay. Phù hợp lối đánh <strong>Tấn công mạnh mẽ</strong>.</p>
                </div>
                <div className="bg-blue-50 p-4 border border-blue-200 rounded text-center">
                  <h3 className="font-bold text-blue-600 mb-2">Cân bằng (Even Balance)</h3>
                  <p className="text-gray-700">Điểm cân bằng 285 - 295mm. Công thủ toàn diện, linh hoạt. Phù hợp lối đánh <strong>Công thủ toàn diện</strong>.</p>
                </div>
                <div className="bg-green-50 p-4 border border-green-200 rounded text-center">
                  <h3 className="font-bold text-green-600 mb-2">Nhẹ đầu (Light Head)</h3>
                  <p className="text-gray-700">Điểm cân bằng {"<"} 285mm. Xoay chuyển cực nhanh, tạt cầu tốt. Phù hợp lối đánh <strong>Phản tạt, trên lưới</strong>.</p>
                </div>
              </div>
            </div>

            {/* Mục 4: Độ cứng đũa vợt */}
            <div>
              <h2 className="font-bold text-[18px] text-[#ea5c0b] mb-3 uppercase border-l-4 border-[#ea5c0b] pl-3">4. Độ dẻo / Cứng của đũa vợt (Shaft)</h2>
              <ul className="space-y-3 pl-2">
                <li><span className="font-bold text-gray-900">- Đũa vợt dẻo (Flexible):</span> Hỗ trợ lực cực tốt (trợ lực), thích hợp cho người mới chơi, cổ tay yếu hoặc lối đánh lắt léo, phòng thủ.</li>
                <li><span className="font-bold text-gray-900">- Đũa vợt trung bình (Medium):</span> Đa số các cây vợt phong trào đều có độ cứng này. Dễ đánh, cân bằng giữa kiểm soát và trợ lực.</li>
                <li><span className="font-bold text-gray-900">- Đũa vợt cứng (Stiff / Extra Stiff):</span> Không trợ lực, đập cầu nhanh và cắm. Yêu cầu người chơi có kỹ thuật tốt và cổ tay thật sự khỏe.</li>
              </ul>
            </div>

            {/* Lời khuyên chốt */}
            <div className="bg-orange-50 p-5 border border-[#ea5c0b] rounded-lg mt-8">
              <h3 className="font-bold text-[#ea5c0b] text-[16px] mb-2">💡 LỜI KHUYÊN CHO NGƯỜI MỚI CHƠI (NEWBIE)</h3>
              <p className="text-gray-800">
                Nếu bạn vừa mới bắt đầu làm quen với cầu lông, hãy chọn một cây vợt có thông số: <br/>
                <strong className="text-black">Trọng lượng 4U + Cán G5 + Điểm cân bằng Even Balance (Cân bằng) + Đũa vợt Dẻo hoặc Trung bình.</strong> <br/>
                Sự kết hợp này sẽ giúp bạn dễ dàng làm quen với các kỹ thuật cơ bản mà không bị đau hay mỏi cổ tay.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default GuideRacketPage;