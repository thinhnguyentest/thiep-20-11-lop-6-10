import React, { useState } from 'react';
import { MessageSquareHeart, Heart } from 'lucide-react';
import type { ClassInformation, StudentWishItem } from '../types';

interface LuggageWishBoardProps {
  classInfo: ClassInformation;
  wishes: StudentWishItem[];
  onAddWish?: (author: string, groupBadge: string, message: string) => void;
}

export const LuggageWishBoard: React.FC<LuggageWishBoardProps> = ({
  classInfo,
  wishes,
}) => {
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

  const toggleLike = (id: string) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="mt-10 pt-8 border-t-2 border-dashed border-[#C59B27]/35">
        <div className="mb-6">
          <h3 className="text-xl font-serif-vn font-black text-[#6E1414] flex items-center gap-2">
            <MessageSquareHeart className="w-5 h-5 text-[#9E2A2B]" />
            <span>
              Hành Lý Yêu Thương: Lời Chúc Từ 4 Tổ Của Lớp {classInfo.className} (
              {classInfo.studentCount} Học Sinh)
            </span>
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Những lời chúc mộc mạc, chân thành từ {classInfo.studentCount} trái tim nhỏ gửi tới{' '}
            {classInfo.homeroomTeacher} & Quý Thầy Cô
          </p>
        </div>

        {/* Grid Thẻ Lời Chúc */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {wishes.map((w) => {
            const isLiked = likedIds.has(w.id);
            return (
              <div
                key={w.id}
                className={`${w.bgClass} p-4 rounded-2xl border ${w.borderClass} shadow-xs flex flex-col justify-between transition hover:-translate-y-0.5`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${w.badgeClass}`}
                    >
                      {w.groupBadge}
                    </span>
                    <button
                      onClick={() => toggleLike(w.id)}
                      className={`text-xs flex items-center gap-1 font-bold cursor-pointer ${isLiked ? 'text-rose-600' : 'text-slate-400 hover:text-rose-500'
                        }`}
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${isLiked ? 'fill-current' : ''}`}
                      />
                      <span>{w.likes + (isLiked ? 1 : 0)}</span>
                    </button>
                  </div>
                  <p className="font-note-vn text-lg text-slate-800 mt-2 leading-snug">
                    "{w.message}"
                  </p>
                </div>
                <div
                  className={`mt-3 pt-2 border-t border-black/10 text-right text-xs font-bold ${w.authorColorClass}`}
                >
                  — {w.author}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      );
};

