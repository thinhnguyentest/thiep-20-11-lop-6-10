import React, { useState } from 'react';
import { Sparkles, Train, MailOpen, Volume2 } from 'lucide-react';
import type { ClassInformation } from '../types';

interface EnvelopeIntroModalProps {
  classInfo: ClassInformation;
  isOpened: boolean;
  onOpen: () => void;
}

export const EnvelopeIntroModal: React.FC<EnvelopeIntroModalProps> = ({
  classInfo,
  isOpened,
  onOpen,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  if (isOpened) return null;

  const handleOpenCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      onOpen();
    }, 750);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#140505]/88 backdrop-blur-md transition-all duration-700 ease-out ${
        isAnimating ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Decorative Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#9E2A2B]/30 to-[#C59B27]/25 blur-3xl pointer-events-none" />

      {/* Main Interactive Envelope Container */}
      <div
        onClick={handleOpenCard}
        className={`relative w-full max-w-lg cursor-pointer group transition-all duration-500 transform ${
          isAnimating ? 'scale-110 -translate-y-4' : 'hover:-translate-y-1'
        }`}
      >
        {/* ENVELOPE CARD */}
        <div className="bg-[#FFFDF9] rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border-2 border-[#C59B27] p-6 sm:p-9 relative overflow-hidden transition-all duration-300 group-hover:border-[#9E2A2B] group-hover:shadow-[0_30px_70px_-12px_rgba(158,42,43,0.35)]">
          {/* Subtle Vintage Floral Watermark */}
          <div className="absolute top-3 left-4 text-[#C59B27]/40 text-2xl font-serif-vn select-none">❦</div>
          <div className="absolute top-3 right-4 text-[#C59B27]/40 text-2xl font-serif-vn select-none">❦</div>
          <div className="absolute bottom-3 left-4 text-[#C59B27]/40 text-2xl font-serif-vn select-none">❦</div>
          <div className="absolute bottom-3 right-4 text-[#C59B27]/40 text-2xl font-serif-vn select-none">❦</div>

          {/* School Badge Tag */}
          <div className="text-center space-y-2 mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9E2A2B]/10 border border-[#9E2A2B]/25 text-[#9E2A2B] text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>{classInfo.schoolName}</span>
            </div>
            <div className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider">
              Chi Đội {classInfo.className} • GVCN: {classInfo.homeroomTeacher}
            </div>
          </div>

          {/* Golden Boarding Ticket Peeking Preview */}
          <div className="bg-[#FAF6EE] p-5 rounded-2xl border-2 border-dashed border-[#C59B27]/60 my-4 relative shadow-inner text-center space-y-3 group-hover:bg-amber-50/70 transition-colors">
            <div className="inline-block px-3 py-0.5 rounded-full bg-[#9E2A2B] text-[#FFFDF9] text-[10px] font-bold tracking-widest uppercase">
              VÉ TÀU TRI ÂN 20•11
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif-vn font-black text-[#6E1414] leading-tight tracking-tight">
              Chuyến Tàu Tri Ân
              <br />
              <span className="text-[#9E2A2B]">Trạm Dừng Đầu Tiên</span>
            </h2>

            <div className="pt-2 border-t border-[#C59B27]/30 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              <p className="text-slate-500 text-[11px] uppercase tracking-wider font-semibold">
                Kính gửi:
              </p>
              <p className="font-serif-vn font-bold text-[#6E1414] text-sm sm:text-base mt-0.5">
                Quý Thầy Cô Giáo Trường THCS Dũng Sĩ Điện Ngọc
              </p>
            </div>
          </div>

          {/* Interactive Opening Wax Stamp & Action Button */}
          <div className="mt-6 flex flex-col items-center justify-center space-y-3">
            {/* Wax Seal Stamp */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#9E2A2B]/40 blur-md animate-ping" />
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#9E2A2B] via-[#BD3A42] to-[#C59B27] p-1 shadow-xl flex items-center justify-center text-white transform group-hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-amber-200">
                <div className="w-full h-full rounded-full border border-dashed border-amber-200/70 flex flex-col items-center justify-center">
                  <Train className="w-5 h-5 text-amber-200" />
                  <span className="text-[8px] font-black tracking-tighter text-amber-100 uppercase">
                    MỞ THIỆP
                  </span>
                </div>
              </div>
            </div>

            {/* Glowing CTA Button */}
            <button
              type="button"
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#9E2A2B] via-[#B23334] to-[#6E1414] text-[#FFFDF9] font-bold text-sm sm:text-base shadow-lg flex items-center justify-center gap-2.5 transition-all duration-300 group-hover:shadow-[0_10px_25px_-5px_rgba(158,42,43,0.5)] group-hover:brightness-110 cursor-pointer"
            >
              <MailOpen className="w-4 h-4 text-amber-300" />
              <span>Chạm Để Mở Thiệp & Lên Tàu</span>
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
            </button>

            {/* Hint Note */}
            <p className="text-[11px] text-slate-500 font-medium flex items-center justify-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Giai điệu tri ân & pháo hoa sẽ ngân vang khi bạn mở thiệp</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};