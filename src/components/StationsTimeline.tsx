import React from 'react';
import type { ClassInformation, TrainStationMilestone } from '../types';

interface StationsTimelineProps {
  classInfo: ClassInformation;
  stations: TrainStationMilestone[];
}

export const StationsTimeline: React.FC<StationsTimelineProps> = ({
  classInfo,
  stations,
}) => {
  return (
    <div className="mt-12 pt-8 border-t-2 border-dashed border-[#C59B27]/35">
      <div className="text-center mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#2D6A4F] block">
          NHẬT KÝ HÀNH TRÌNH CHUYẾN TÀU {classInfo.className}
        </span>
        <h3 className="text-2xl font-serif-vn font-black text-slate-900 mt-0.5">
          3 Trạm Dừng Đầu Tiên Dưới Mái {classInfo.schoolName}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {stations.map((st) => (
          <div
            key={st.id}
            className={`p-5 rounded-2xl relative transition ${
              st.isHighlight
                ? 'bg-amber-50/90 border-2 border-[#9E2A2B]/55 shadow-xs'
                : 'bg-[#FAF6EE] border border-[#C59B27]/40 hover:shadow-md'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span
                className={`px-3 py-0.5 rounded-full font-bold text-xs ${
                  st.isHighlight
                    ? 'bg-[#9E2A2B] text-white'
                    : 'bg-[#9E2A2B]/10 text-[#9E2A2B]'
                }`}
              >
                {st.stationBadge}
              </span>
              <span className="text-xl">{st.emoji}</span>
            </div>
            <h4
              className={`font-serif-vn font-bold text-base ${
                st.isHighlight ? 'text-[#9E2A2B]' : 'text-[#6E1414]'
              }`}
            >
              {st.title}
            </h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              {st.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

