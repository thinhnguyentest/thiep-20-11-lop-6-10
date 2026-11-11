import React, { useState } from 'react';
import { Camera, Heart } from 'lucide-react';
import type { ClassInformation } from '../types';
import { playFlowerChime } from '../utils/soundAndConfetti';

interface VietnameseClassroomArtProps {
  classInfo: ClassInformation;
  onOpenCustomize: () => void;
}

interface FloatingIcon {
  id: number;
  symbol: string;
  leftPercent: number;
}

export const VietnameseClassroomArt: React.FC<VietnameseClassroomArtProps> = ({
  classInfo,
  onOpenCustomize,
}) => {
  const [flowerCount, setFlowerCount] = useState<number>(400);
  const [floaters, setFloaters] = useState<FloatingIcon[]>([]);

  const handleGiveFlower = () => {
    setFlowerCount((prev) => prev + 1);
    playFlowerChime(587.33, 0.25);

    const symbols = ['🪷', '💐', '🌸', '❤️', '💮'];
    const newItem: FloatingIcon = {
      id: Date.now() + Math.random(),
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      leftPercent: Math.random() * 72 + 14,
    };

    setFloaters((prev) => [...prev, newItem]);
    setTimeout(() => {
      setFloaters((prev) => prev.filter((item) => item.id !== newItem.id));
    }, 1100);
  };

  return (
    <div className="flex flex-col items-center space-y-5 w-full">
      {/* Khung Ảnh Học Đường Việt Nam */}
      <div className="w-full max-w-[355px] bg-white p-3.5 pb-5 rounded-2xl shadow-lg border-2 border-[#C59B27]/50 relative">
        <div className="washi-tape-vn w-44 h-6 mx-auto -mt-6 mb-2 rounded flex items-center justify-center text-[10px] font-bold text-[#6E1414] tracking-widest uppercase">
          KỶ NIỆM ĐẦU CẤP {classInfo.className}
        </div>

        {/* Khung hiển thị: Tranh minh họa Học đường Việt Nam hoặc Ảnh chụp thật của lớp */}
        <div className="w-full h-60 rounded-xl overflow-hidden relative border border-amber-200 bg-gradient-to-b from-[#FFF8EB] to-[#FDE8D7]">
          {classInfo.customPhotoUrl ? (
            <img
              src={classInfo.customPhotoUrl}
              alt={classInfo.photoCaption}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center relative">
              {/* Bảng xanh phía sau */}
              <div className="w-full h-36 bg-[#1B4332] rounded-lg border-4 border-[#B07D4F] p-3 flex flex-col items-center justify-center text-white shadow-inner relative">
                <span className="text-[10px] uppercase tracking-widest text-emerald-200 font-bold">
                  {classInfo.schoolName.toUpperCase()}
                </span>
                <span className="font-handwriting-vn text-xl text-amber-200 mt-0.5">
                  Tri Ân Ngày Nhà Giáo 20 - 11
                </span>
                <span className="font-serif-vn font-bold text-[11px] tracking-wider text-white mt-0.5">
                  Chi Đội {classInfo.className} • Sĩ Số: {classInfo.studentCount}/{classInfo.studentCount}
                </span>
                <div className="absolute bottom-1.5 right-3 flex gap-1">
                  <span className="w-4 h-1 bg-white rounded"></span>
                  <span className="w-3 h-1 bg-amber-300 rounded"></span>
                </div>
              </div>

              {/* Cô giáo mặc Áo dài & Học sinh khăn quàng đỏ */}
              <div className="flex items-end justify-center gap-4 -mt-8 z-10">
                {/* Học sinh nam khăn quàng đỏ */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#FFE0BD] border-2 border-[#6E1414] flex items-center justify-center text-lg shadow">
                    👦🏻
                  </div>
                  <div className="w-12 h-10 bg-white rounded-t-lg border border-slate-300 relative flex justify-center">
                    <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-red-600"></div>
                  </div>
                </div>

                {/* Cô giáo chủ nhiệm Nguyễn Minh Quyên */}
                <div className="flex flex-col items-center -mt-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFE0BD] border-2 border-[#C59B27] flex items-center justify-center text-2xl shadow-md">
                    👩🏻‍🏫
                  </div>
                  <div className="w-14 h-14 bg-[#9E2A2B] rounded-t-xl border border-amber-300 flex items-center justify-center text-lg shadow">
                    💐
                  </div>
                </div>

                {/* Học sinh nữ khăn quàng đỏ */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#FFE0BD] border-2 border-[#6E1414] flex items-center justify-center text-lg shadow">
                    👧🏻
                  </div>
                  <div className="w-12 h-10 bg-white rounded-t-lg border border-slate-300 relative flex justify-center">
                    <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-red-600"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chú thích vừa có 6/10 vừa có tên Cô chủ nhiệm Nguyễn Minh Quyên */}
        <div className="text-center mt-3.5 px-2">
          <span className="font-handwriting-vn text-2xl font-bold text-[#6E1414] block leading-snug">
            {classInfo.photoCaption}
          </span>
          <span className="text-[11px] text-slate-500 italic block mt-0.5">
            {classInfo.photoSubCaption}
          </span>
          <button
            onClick={onOpenCustomize}
            className="mt-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-[#2D6A4F] hover:bg-emerald-100 inline-flex items-center gap-1 transition cursor-pointer"
          >
            <Camera className="w-3 h-3" />
            <span>Bấm để thay bằng ảnh chụp thật của lớp {classInfo.className}</span>
          </button>
        </div>
      </div>

      {/* Giỏ Hoa Điểm 10 Tương Tác */}
      <div className="w-full max-w-[355px] bg-[#FAF6EE] rounded-2xl p-4 border-2 border-[#C59B27]/40 text-center shadow-xs relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {floaters.map((fl) => (
            <div
              key={fl.id}
              className="floating-flower text-2xl"
              style={{ left: `${fl.leftPercent}%`, bottom: '15px' }}
            >
              {fl.symbol}
            </div>
          ))}
        </div>

        <span className="text-[11px] font-bold uppercase tracking-wider text-[#9E2A2B] block">
          GIỎ HOA ĐIỂM MƯỜI CỦA {classInfo.studentCount} ĐỘI VIÊN {classInfo.className}
        </span>
        <div className="flex items-center justify-center gap-2 my-1.5">
          <span className="text-2xl">🪷</span>
          <span className="text-3xl font-serif-vn font-black text-[#6E1414]">
            {flowerCount}
          </span>
          <span className="text-xs font-bold text-slate-600">Bông Hoa Điểm Tốt</span>
        </div>
        <button
          onClick={handleGiveFlower}
          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#9E2A2B] to-rose-700 hover:from-[#6E1414] hover:to-rose-800 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
        >
          <Heart className="w-4 h-4 fill-current text-amber-200" />
          <span>Nhấn Tặng Thầy Cô Thêm 1 Hoa Điểm 10</span>
        </button>
      </div>
    </div>
  );
};

