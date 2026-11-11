import React from 'react';
import {
  Volume2,
  VolumeX,
  Download,
  Sparkles,
  Mail,
} from 'lucide-react';
import type { ClassInformation } from '../types';
import { triggerVietnameseConfetti } from '../utils/soundAndConfetti';

interface NavbarProps {
  classInfo: ClassInformation;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
  onOpenCustomize?: () => void;
  onDownloadPNG: () => void;
  onReopenCover?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  classInfo,
  isMusicPlaying,
  onToggleMusic,
  onDownloadPNG,
  onReopenCover,
}) => {
  return (
    <header className="bg-[#FFFDF9]/92 backdrop-blur-md border-b border-[#C59B27]/35 sticky top-0 z-50 px-4 py-3 shadow-xs transition-all">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left: Brand & School Identity */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#9E2A2B] text-[#FFFDF9] flex flex-col items-center justify-center shadow-md border-2 border-[#C59B27]">
            <span className="font-extrabold text-sm leading-none tracking-tight">
              {classInfo.className}
            </span>
            <span className="text-[8px] tracking-widest uppercase text-[#E9D8A6] mt-0.5 font-medium">
              20•11
            </span>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#9E2A2B]/10 text-[#9E2A2B] border border-[#9E2A2B]/20 uppercase tracking-wider">
                Chào Mừng Ngày Nhà Giáo Việt Nam 20/11
              </span>
              <span className="text-xs font-bold text-[#2D6A4F]">
                • {classInfo.schoolName}
              </span>
            </div>
            <h1 className="text-base sm:text-lg font-bold text-[#6E1414] tracking-tight">
              Chi Đội {classInfo.className} — GVCN: {classInfo.homeroomTeacher}
            </h1>
          </div>
        </div>

        {/* Right: Quick Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={onToggleMusic}
            className={`p-2.5 rounded-xl border flex items-center justify-center transition cursor-pointer ${
              isMusicPlaying
                ? 'bg-amber-100 text-[#9E2A2B] border-[#C59B27] ring-2 ring-[#C59B27]/30'
                : 'bg-[#F3ECE0] hover:bg-amber-100/60 text-[#6E1414] border-[#C59B27]/40'
            }`}
            title={isMusicPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền'}
            aria-label={isMusicPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền'}
          >
            {isMusicPlaying ? (
              <Volume2 className="w-4 h-4 text-[#9E2A2B] animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-600" />
            )}
          </button>

          {onReopenCover && (
            <button
              onClick={onReopenCover}
              className="px-3.5 py-2 rounded-xl bg-[#FAF6EE] hover:bg-amber-100 text-[#6E1414] border border-[#C59B27]/40 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              title="Xem lại bìa thiệp mở đầu"
            >
              <Mail className="w-4 h-4 text-[#9E2A2B]" />
              <span className="hidden sm:inline">Bìa Thiệp</span>
            </button>
          )}

          <button
            onClick={triggerVietnameseConfetti}
            className="px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#6E1414] border border-[#C59B27]/50 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
            title="Tung hoa chúc mừng 20/11"
          >
            <Sparkles className="w-4 h-4 text-[#9E2A2B]" />
            <span className="hidden md:inline">Tung Hoa</span>
          </button>

          <button
            onClick={onDownloadPNG}
            className="px-3.5 py-2 rounded-xl bg-[#9E2A2B] text-white hover:bg-[#6E1414] text-xs font-bold flex items-center gap-1.5 shadow-xs transition cursor-pointer"
            title="Tải ảnh thiệp PNG chất lượng cao"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Lưu Thiệp (PNG)</span>
          </button>
        </div>
      </div>
    </header>
  );
};
