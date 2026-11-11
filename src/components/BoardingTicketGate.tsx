import React from 'react';
import { Sparkles, Train, Volume2, TicketCheck, ChevronRight } from 'lucide-react';
import type { ClassInformation } from '../types';

interface BoardingTicketGateProps {
  classInfo: ClassInformation;
  onBoardTrain: () => void;
}

export const BoardingTicketGate: React.FC<BoardingTicketGateProps> = ({
  classInfo,
  onBoardTrain,
}) => {
  return (
    <div className="py-4">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9E2A2B]/10 border border-[#9E2A2B]/30 text-[#9E2A2B] text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-4 h-4" />
          <span>{classInfo.schoolName} • Chào Mừng 20/11/2026</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif-vn font-black text-[#6E1414] tracking-tight leading-tight">
          Chuyến Tàu Tri Ân
          <br />
          <span className="text-[#9E2A2B]">Trạm Dừng Đầu Tiên</span>
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-classic-vn italic">
          "Hành trình đưa {classInfo.studentCount} đội viên nhỏ lớp {classInfo.className} cập bến tri thức dưới sự dìu dắt của {classInfo.homeroomTeacher} và Quý Thầy Cô"
        </p>
      </div>

      {/* Golden Cream VIP Ticket */}
      <div
        onClick={onBoardTrain}
        className="max-w-3xl mx-auto bg-[#FFFDF9] rounded-3xl shadow-xl border-2 border-[#C59B27]/60 p-6 sm:p-10 cursor-pointer group hover:border-[#9E2A2B] transition-all duration-300 ticket-notch-left ticket-notch-right relative overflow-hidden"
      >
        {/* Subtle Lotus Silhouette Watermark */}
        <svg
          className="absolute -right-10 -bottom-10 w-64 h-64 text-[#9E2A2B]/5 pointer-events-none"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 10 C60 30 75 40 90 50 C75 60 60 70 50 90 C40 70 25 60 10 50 C25 40 40 30 50 10 Z" />
        </svg>

        {/* Ticket Top Header */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-dashed border-[#C59B27]/40 pb-4 mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#9E2A2B] text-white flex items-center justify-center font-serif-vn font-black text-xl shadow border border-[#C59B27]">
              {classInfo.className}
            </div>
            <div>
              <span className="text-[11px] uppercase font-bold tracking-[0.18em] text-[#9E2A2B] block">
                VÉ TÀU DANH DỰ • {classInfo.schoolName.toUpperCase()}
              </span>
              <h3 className="text-lg sm:text-xl font-serif-vn font-black text-slate-900">
                ĐOÀN TÀU CHI ĐỘI {classInfo.className} — NIÊN KHÓA {classInfo.schoolYear}
              </h3>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">
              MÃ VÉ ĐẶC BIỆT:
            </span>
            <span className="px-3 py-1 rounded-lg bg-amber-50 border border-[#C59B27]/50 text-[#6E1414] font-mono font-bold text-xs">
              DSDN-2011-610
            </span>
          </div>
        </div>

        {/* Route Stations */}
        <div className="grid grid-cols-1 sm:grid-cols-11 gap-4 items-center bg-[#FAF6EE] p-5 rounded-2xl border border-[#C59B27]/30 my-4">
          <div className="sm:col-span-4">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">
              GA KHỞI HÀNH (05/09/2026):
            </span>
            <div className="text-base sm:text-lg font-serif-vn font-bold text-slate-900 mt-0.5">
              Bến Tựu Trường Đầu Cấp 2
            </div>
            <span className="text-xs text-slate-600">
              {classInfo.studentCount} học sinh bỡ ngỡ vào lớp {classInfo.className}
            </span>
          </div>

          <div className="sm:col-span-3 flex flex-col items-center justify-center py-2">
            <div className="flex items-center gap-2 text-[#9E2A2B]">
              <span className="w-8 h-[1.5px] bg-[#9E2A2B]/40"></span>
              <Train className="w-7 h-7 animate-bounce" />
              <span className="w-8 h-[1.5px] bg-[#9E2A2B]/40"></span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#2D6A4F] mt-1">
              Đoàn Tàu {classInfo.className}
            </span>
          </div>

          <div className="sm:col-span-4 sm:text-right">
            <span className="text-[10px] uppercase font-bold text-[#9E2A2B] block">
              TRẠM DỪNG VINH QUANG (20/11):
            </span>
            <div className="text-base sm:text-lg font-serif-vn font-bold text-[#6E1414] mt-0.5">
              Ga Tri Ân Thầy Cô
            </div>
            <span className="text-xs text-[#9E2A2B] font-semibold">
              {classInfo.schoolName}
            </span>
          </div>
        </div>

        {/* Ticket Meta Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-3">
          <div>
            <span className="text-slate-400 uppercase font-bold text-[10px] block">
              KHÁCH DANH DỰ:
            </span>
            <span className="font-bold text-slate-900 text-sm">Quý Thầy Cô Giáo</span>
          </div>
          <div>
            <span className="text-slate-400 uppercase font-bold text-[10px] block">
              GV CHỦ NHIỆM {classInfo.className}:
            </span>
            <span className="font-bold text-[#9E2A2B] text-sm">
              {classInfo.homeroomTeacher}
            </span>
          </div>
          <div>
            <span className="text-slate-400 uppercase font-bold text-[10px] block">
              HÀNH KHÁCH ĐỒNG HÀNH:
            </span>
            <span className="font-bold text-[#2D6A4F] text-sm">
              {classInfo.studentCount} Đội Viên Lớp {classInfo.className}
            </span>
          </div>
          <div>
            <span className="text-slate-400 uppercase font-bold text-[10px] block">
              HÀNH LÝ MANG THEO:
            </span>
            <span className="font-bold text-amber-800 text-sm">
              Lòng Biết Ơn & Điểm 10
            </span>
          </div>
        </div>

        {/* Ticket Bottom CTA */}
        <div className="mt-7 pt-5 border-t border-[#C59B27]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Volume2 className="w-4 h-4 text-[#9E2A2B]" />
            <span>
              Bấm soát vé để nghe tiếng còi tàu khởi hành & mở bức thư tri ân
            </span>
          </div>
          <button className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-[#9E2A2B] hover:bg-[#6E1414] text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 group-hover:scale-105 transition-all cursor-pointer">
            <TicketCheck className="w-4 h-4 text-amber-200" />
            <span>Bấm Soát Vé & Mở Thiệp Tri Ân</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

