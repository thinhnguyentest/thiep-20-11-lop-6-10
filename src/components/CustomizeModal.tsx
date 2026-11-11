import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { ClassInformation } from '../types';

interface CustomizeModalProps {
  isOpen: boolean;
  classInfo: ClassInformation;
  onClose: () => void;
  onSave: (updated: ClassInformation) => void;
}

export const CustomizeModal: React.FC<CustomizeModalProps> = ({
  isOpen,
  classInfo,
  onClose,
  onSave,
}) => {
  const [schoolName, setSchoolName] = useState(classInfo.schoolName);
  const [homeroomTeacher, setHomeroomTeacher] = useState(classInfo.homeroomTeacher);
  const [studentCount, setStudentCount] = useState(classInfo.studentCount);
  const [photoCaption, setPhotoCaption] = useState(classInfo.photoCaption);
  const [customPhotoUrl, setCustomPhotoUrl] = useState(classInfo.customPhotoUrl || '');

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      if (evt.target?.result) {
        setCustomPhotoUrl(evt.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...classInfo,
      schoolName: schoolName.trim() || 'Trường THCS Dũng Sĩ Điện Ngọc',
      homeroomTeacher: homeroomTeacher.trim() || 'Cô Nguyễn Minh Quyên',
      studentCount: Number(studentCount) || 40,
      photoCaption:
        photoCaption.trim() ||
        'Cô Nguyễn Minh Quyên cùng 40 trái tim nhỏ lớp 6/10 ❤️',
      customPhotoUrl,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border-2 border-[#C59B27] relative text-slate-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-[#9E2A2B] cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-xl font-serif-vn font-black text-[#6E1414] mb-1">
          Lồng Ảnh Chụp Thật & Tuỳ Chỉnh Lớp {classInfo.className}
        </h3>
        <p className="text-xs text-slate-500 mb-5">
          Thông tin đã được cài đặt chuẩn cho lớp 6/10 Trường THCS Dũng Sĩ Điện Ngọc. Bạn có thể chọn thêm ảnh chụp thật của lớp từ máy tính:
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          <div>
            <label className="font-bold text-slate-700 block mb-1">Tên Trường:</label>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className="w-full bg-[#FAF6EE] border border-[#C59B27]/50 rounded-xl px-3.5 py-2 outline-none focus:border-[#9E2A2B]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">
                Cô Giáo Chủ Nhiệm:
              </label>
              <input
                type="text"
                value={homeroomTeacher}
                onChange={(e) => setHomeroomTeacher(e.target.value)}
                className="w-full bg-[#FAF6EE] border border-[#C59B27]/50 rounded-xl px-3.5 py-2 outline-none focus:border-[#9E2A2B]"
              />
            </div>
            <div>
              <label className="font-bold text-slate-700 block mb-1">
                Sĩ Số Lớp {classInfo.className}:
              </label>
              <input
                type="number"
                value={studentCount}
                onChange={(e) => setStudentCount(Number(e.target.value))}
                className="w-full bg-[#FAF6EE] border border-[#C59B27]/50 rounded-xl px-3.5 py-2 outline-none focus:border-[#9E2A2B]"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">
              Chú thích dưới khung ảnh:
            </label>
            <input
              type="text"
              value={photoCaption}
              onChange={(e) => setPhotoCaption(e.target.value)}
              className="w-full bg-[#FAF6EE] border border-[#C59B27]/50 rounded-xl px-3.5 py-2 outline-none focus:border-[#9E2A2B]"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">
              Chọn Ảnh Chụp Thật Của Cô & Lớp {classInfo.className} (Từ máy tính):
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full text-xs text-slate-600 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#9E2A2B] file:text-white hover:file:bg-[#6E1414] cursor-pointer"
            />
            {customPhotoUrl && (
              <div className="mt-2 flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg text-xs text-emerald-800">
                <span>📸 Đã tải ảnh lên thành công!</span>
                <button
                  type="button"
                  onClick={() => setCustomPhotoUrl('')}
                  className="text-rose-600 font-bold hover:underline cursor-pointer"
                >
                  Khôi phục tranh vẽ mặc định
                </button>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-[#C59B27]/30 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold cursor-pointer"
            >
              Đóng
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#9E2A2B] hover:bg-[#6E1414] text-white text-xs font-bold shadow cursor-pointer"
            >
              Lưu Thay Đổi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

