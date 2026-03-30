import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StoreLocationsPage = () => {
  // Dữ liệu mẫu các cửa hàng (giống trong ảnh)
  const stores = [
    {
      id: 1,
      name: 'VNB Super Center',
      address: '390/2 Hà Huy Giáp, Phường Thạnh Lộc, Quận 12',
      phone: '0936155994',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.420594896597!2d106.68001951533423!3d10.85557499226757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c17978287d%3A0xec8e00d72f51f476!2sVNB%20Sports%20Super%20Center!5e0!3m2!1svi!2s!4v1680000000000!5m2!1svi!2s'
    },
    {
      id: 2,
      name: 'VNB PREMIUM Quận 1',
      address: '20 Cao Bá Nhạ, Phường Nguyễn Cư Trinh, Quận 1, TPHCM',
      phone: '0931823614',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5599026402777!2d106.68740101533353!3d10.760662992331908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ1JzM4LjQiTiAxMDbCsDQxJzIyLjYiRQ!5e0!3m2!1svi!2s!4v1680000000001!5m2!1svi!2s'
    },
    {
      id: 3,
      name: 'VNB PREMIUM Quận 11',
      address: '209 Âu Cơ, Phường 5, quận 11, Tp.HCM',
      phone: '0828333323',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.467812128761!2d106.64366911533362!3d10.768494992326756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzA2LjYiTiAxMDbCsDM4JzQ1LjEiRQ!5e0!3m2!1svi!2s!4v1680000000002!5m2!1svi!2s'
    },
    {
      id: 4,
      name: 'VNB PREMIUM Bình Thạnh',
      address: '284 Xô Viết Nghệ Tĩnh, P21, Quận Bình Thạnh, Tp.HCM',
      phone: '0862527179',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1415754682046!2d106.70887811533385!3d10.800465992305333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzAxLjciTiAxMDbCsDQyJzM5LjkiRQ!5e0!3m2!1svi!2s!4v1680000000003!5m2!1svi!2s'
    },
    {
      id: 5,
      name: 'VNB PREMIUM TP Thủ Đức',
      address: '916 Kha Vạn Cân phường Trường Thọ TP Thủ Đức',
      phone: '0767306363',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.51351219662!2d106.75545511533418!3d10.84852999227221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUwJzU0LjciTiAxMDbCsDQ1JzI3LjYiRQ!5e0!3m2!1svi!2s!4v1680000000004!5m2!1svi!2s'
    },
    {
      id: 6,
      name: 'VNB PREMIUM Ninh Kiều Cần Thơ',
      address: '33B Đ. Mậu Thân, Phường An Hòa, Ninh Kiều, Cần Thơ',
      phone: '0373344599',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8242442437633!2d105.77258011532724!3d10.031388992829288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDAxJzUzLjAiTiAxMDXCsDQ2JzI5LjIiRQ!5e0!3m2!1svi!2s!4v1680000000005!5m2!1svi!2s'
    }
  ];

  // State lưu trữ cửa hàng đang được chọn để hiển thị lên bản đồ
  const [activeStore, setActiveStore] = useState(stores[0]);

  return (
    <div className="w-full bg-[#f8f9fa] pb-12 font-sans">
      
      {/* ================= THANH ĐIỀU HƯỚNG ================= */}
      <div className="bg-[#f0f0f0] border-b border-gray-200 mb-8">
        <div className="max-w-7xl mx-auto px-4 py-3 text-[13px] text-gray-600 flex items-center gap-2">
          <Link to="/" className="hover:text-[#ea5c0b] transition-colors">Trang chủ</Link>
          <span className="font-bold">›</span>
          <span className="text-[#ea5c0b]">Hệ thống cửa hàng</span>
        </div>
      </div>

      {/* ================= NỘI DUNG CHÍNH ================= */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* ================= CỘT TRÁI: DANH SÁCH CỬA HÀNG (Khoảng 35%) ================= */}
          <div className="w-full lg:w-[35%] border-[6px] border-[#ea5c0b] bg-white h-[650px] flex flex-col shadow-sm">
            
            {/* Vùng chọn Tỉnh/Thành & Quận/Huyện */}
            <div className="p-3 bg-white space-y-2 border-b border-gray-200">
              <select className="w-full border border-gray-300 p-2.5 text-[14px] text-gray-600 outline-none focus:border-[#ea5c0b] cursor-pointer bg-white">
                <option value="">Chọn tỉnh thành</option>
                <option value="HCM">TP. Hồ Chí Minh</option>
                <option value="HN">Hà Nội</option>
                <option value="DN">Đà Nẵng</option>
              </select>
              <select className="w-full border border-gray-300 p-2.5 text-[14px] text-gray-600 outline-none focus:border-[#ea5c0b] cursor-pointer bg-[#fbe7df]">
                <option value="">Chọn quận/huyện</option>
                <option value="Q1">Quận 1</option>
                <option value="Q12">Quận 12</option>
                <option value="BT">Bình Thạnh</option>
              </select>
            </div>

            {/* Danh sách cuộn các cửa hàng */}
            <div className="flex-1 overflow-y-auto">
              <ul className="divide-y divide-gray-200">
                {stores.map((store) => (
                  <li 
                    key={store.id} 
                    onClick={() => setActiveStore(store)}
                    className={`p-4 cursor-pointer hover:bg-orange-50 transition-colors ${activeStore.id === store.id ? 'bg-orange-50 border-l-4 border-[#ea5c0b]' : 'border-l-4 border-transparent'}`}
                  >
                    <h3 className="font-bold text-[15px] text-gray-800 mb-2">{store.name}</h3>
                    
                    {/* Địa chỉ */}
                    <div className="flex items-start gap-2 mb-1.5 text-[13px] text-gray-600">
                      <svg className="w-4 h-4 text-[#ea5c0b] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      <span className="leading-tight">{store.address}</span>
                    </div>

                    {/* Số điện thoại */}
                    <div className="flex items-center gap-2 text-[13px] text-gray-600">
                      <svg className="w-4 h-4 text-[#ea5c0b] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.042 11.042 0 005.115 5.115l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                      <span className="font-medium">{store.phone}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>

          {/* ================= CỘT PHẢI: BẢN ĐỒ (Khoảng 65%) ================= */}
          <div className="w-full lg:w-[65%] h-[400px] lg:h-[650px] bg-gray-200 border border-gray-300 relative shadow-sm">
            {/* Sử dụng iframe để nhúng Google Maps */}
            <iframe 
              src={activeStore.mapUrl} 
              className="w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`Bản đồ ${activeStore.name}`}
            ></iframe>
          </div>

        </div>
      </div>

    </div>
  );
};

export default StoreLocationsPage;