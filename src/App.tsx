import { useState, useEffect, useRef } from 'react';
import { toPng } from 'html-to-image';
import {
  HeartHandshake,
  BellRing,
  Download,
  Sparkles,
  Share2,
} from 'lucide-react';
import type {
  ClassInformation,
  TeacherRecipientKey,
  StudentWishItem,
} from './types';
import {
  DEFAULT_CLASS_INFO,
  TEACHER_LETTERS,
  TRAIN_STATIONS,
  INITIAL_STUDENT_WISHES,
} from './data/classData';
import {
  triggerVietnameseConfetti,
  playTrainWhistle,
} from './utils/soundAndConfetti';
import { FallingPetalsCanvas } from './components/FallingPetalsCanvas';
import { Navbar } from './components/Navbar';
import { BoardingTicketGate } from './components/BoardingTicketGate';
import { VietnameseClassroomArt } from './components/VietnameseClassroomArt';
import { StationsTimeline } from './components/StationsTimeline';
import { LuggageWishBoard } from './components/LuggageWishBoard';
import { CustomizeModal } from './components/CustomizeModal';
import { EnvelopeIntroModal } from './components/EnvelopeIntroModal';

// Link nhạc nền YouTube: https://www.youtube.com/watch?v=kRt5CB3Fouc
const YOUTUBE_VIDEO_ID = 'kRt5CB3Fouc';

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: any;
  }
}

export function App() {
  const [classInfo, setClassInfo] = useState<ClassInformation>(DEFAULT_CLASS_INFO);
  const [recipientKey, setRecipientKey] = useState<TeacherRecipientKey>('all');
  const [wishes, setWishes] = useState<StudentWishItem[]>(INITIAL_STUDENT_WISHES);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const mainCardRef = useRef<HTMLDivElement | null>(null);
  const ytPlayerRef = useRef<any>(null);
  const pendingPlayRef = useRef<boolean>(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Parse URL params on mount (?to=gvcn)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to') as TeacherRecipientKey | null;

    if (toParam && TEACHER_LETTERS[toParam]) {
      setRecipientKey(toParam);
    }
  }, []);

  // Khởi tạo trình phát nhạc nền YouTube (kRt5CB3Fouc)
  useEffect(() => {
    const initYouTubePlayer = () => {
      if (ytPlayerRef.current || !window.YT || !window.YT.Player) return;
      try {
        ytPlayerRef.current = new window.YT.Player('youtube-bgm-player', {
          height: '1',
          width: '1',
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 0,
            controls: 0,
            loop: 1,
            playlist: YOUTUBE_VIDEO_ID,
            modestbranding: 1,
          },
          events: {
            onReady: (event: any) => {
              if (pendingPlayRef.current) {
                pendingPlayRef.current = false;
                event.target.playVideo();
              }
            },
            onStateChange: (event: any) => {
              if (event.data === 1) {
                setIsMusicPlaying(true);
              } else if (event.data === 2 || event.data === 0) {
                setIsMusicPlaying(false);
              }
            },
          },
        });
      } catch (err) {
        console.error('YouTube player init error:', err);
      }
    };

    if (!window.YT || !window.YT.Player) {
      const existingScript = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      );
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        if (firstScriptTag && firstScriptTag.parentNode) {
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        } else {
          document.head.appendChild(tag);
        }
      }
      window.onYouTubeIframeAPIReady = () => {
        initYouTubePlayer();
      };
    } else {
      initYouTubePlayer();
    }

    return () => {
      if (
        ytPlayerRef.current &&
        typeof ytPlayerRef.current.destroy === 'function'
      ) {
        ytPlayerRef.current.destroy();
        ytPlayerRef.current = null;
      }
    };
  }, []);

  const handleToggleMusic = () => {
    if (!ytPlayerRef.current || typeof ytPlayerRef.current.playVideo !== 'function') {
      pendingPlayRef.current = !isMusicPlaying;
      setIsMusicPlaying((prev) => !prev);
      return;
    }

    try {
      if (isMusicPlaying) {
        ytPlayerRef.current.pauseVideo();
        setIsMusicPlaying(false);
      } else {
        ytPlayerRef.current.playVideo();
        setIsMusicPlaying(true);
      }
    } catch (err) {
      console.error('Toggle music error:', err);
    }
  };

  const handleBoardTrain = () => {
    playTrainWhistle();
    triggerVietnameseConfetti();
    if (!isMusicPlaying) {
      if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === 'function') {
        try {
          ytPlayerRef.current.playVideo();
          setIsMusicPlaying(true);
        } catch (err) {
          console.error(err);
        }
      } else {
        pendingPlayRef.current = true;
        setIsMusicPlaying(true);
      }
    }
    mainCardRef.current?.scrollIntoView({ behavior: 'smooth' });
    showToast(
      `🚂 Chào mừng Quý Thầy Cô lên Chuyến Tàu Tri Ân lớp ${classInfo.className}!`
    );
  };

  const handleOpenCardFromIntro = () => {
    setIsCardOpened(true);
    playTrainWhistle();
    triggerVietnameseConfetti();
    if (!isMusicPlaying) {
      if (ytPlayerRef.current && typeof ytPlayerRef.current.playVideo === 'function') {
        try {
          ytPlayerRef.current.playVideo();
          setIsMusicPlaying(true);
        } catch (err) {
          console.error(err);
        }
      } else {
        pendingPlayRef.current = true;
        setIsMusicPlaying(true);
      }
    }
    showToast(
      `🚂 Chúc mừng Quý Thầy Cô đã bước lên Chuyến Tàu Tri Ân lớp ${classInfo.className}!`
    );
  };

  const handleRecipientChange = (key: TeacherRecipientKey) => {
    setRecipientKey(key);
    triggerVietnameseConfetti();
    showToast(`💐 Đã chuyển lời tri ân tới: ${TEACHER_LETTERS[key].optionLabel}`);
  };

  const handleAddWish = (
    author: string,
    groupBadge: string,
    message: string
  ) => {
    const newWish: StudentWishItem = {
      id: `w-${Date.now()}`,
      groupBadge,
      author,
      message,
      bgClass: 'bg-[#FFF9EB]',
      borderClass: 'border-amber-300',
      badgeClass: 'text-[#9E2A2B] bg-rose-100',
      authorColorClass: 'text-[#6E1414]',
      likes: 40,
    };
    setWishes((prev) => [newWish, ...prev]);
    showToast(`✨ Đã gắn lời chúc của ${author} lên toa tàu 6/10!`);
  };

  // Xuất ảnh PNG chất lượng cao bằng html-to-image
  const handleDownloadCardPNG = async () => {
    const node = document.getElementById('invitation-card-capture');
    if (!node) {
      showToast('⚠️ Không tìm thấy khung thiệp để tải ảnh');
      return;
    }

    try {
      showToast('📸 Đang tạo ảnh thiệp 20/11 độ phân giải cao...');
      if (document.fonts) {
        await document.fonts.ready;
      }

      const dataUrl = await toPng(node, {
        cacheBust: true,
        pixelRatio: 2.5,
        backgroundColor: '#FFFDF9',
      });

      const link = document.createElement('a');
      link.download = `Thiep-20-11-Lop-6-10-THCS-Dung-Si-Dien-Ngoc.png`;
      link.href = dataUrl;
      link.click();

      triggerVietnameseConfetti();
      showToast('🎉 Đã tải ảnh thiệp 20/11 thành công!');
    } catch (err) {
      console.error('Export PNG error:', err);
      showToast('⚠️ Có lỗi khi xuất ảnh, bạn có thể chụp màn hình trực tiếp!');
    }
  };

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    triggerVietnameseConfetti();
    showToast('🔗 Đã sao chép đường link thiệp 20/11 của lớp 6/10!');
  };

  const activeLetter = TEACHER_LETTERS[recipientKey];

  return (
    <div className="giay-do-bg min-h-screen text-slate-800 relative pb-16">
      {/* Trình phát nhạc nền YouTube ẩn (kRt5CB3Fouc) */}
      <div
        id="youtube-bgm-player"
        style={{
          position: 'fixed',
          bottom: 0,
          right: 0,
          width: '1px',
          height: '1px',
          opacity: 0.01,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />

      {/* Canvas Hoa Sen & Lá Thu Rơi */}
      <FallingPetalsCanvas />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#6E1414] text-[#FFFDF9] border-2 border-[#C59B27] px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-xs sm:text-sm font-bold animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Sticky Navbar */}
      <Navbar
        classInfo={classInfo}
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={handleToggleMusic}
        onOpenCustomize={() => setIsCustomizeOpen(true)}
        onDownloadPNG={handleDownloadCardPNG}
        onReopenCover={() => setIsCardOpened(false)}
      />

      {/* Intro Cover Opening Modal / Animation */}
      <EnvelopeIntroModal
        classInfo={classInfo}
        isOpened={isCardOpened}
        onOpen={handleOpenCardFromIntro}
      />

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 relative z-20">
        <section className="space-y-10">
          {/* Bước 1: Tấm Vé Tàu Danh Dự */}
          <BoardingTicketGate
            classInfo={classInfo}
            onBoardTrain={handleBoardTrain}
          />

          {/* Bước 2: Nội Dung Chi Tiết Chuyến Tàu Tri Ân */}
          <div ref={mainCardRef} className="space-y-10 pt-2">
            {/* Thanh Chọn Cá Nhân Hóa Thầy Cô Nhận Thiệp */}
            <div className="bg-[#FFFDF9] rounded-2xl p-4 sm:p-5 shadow-md border border-[#C59B27]/40 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#9E2A2B]/10 text-[#9E2A2B] flex items-center justify-center font-bold shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Đang hiển thị bức thư tri ân gửi tới:
                  </span>
                  <span className="font-serif-vn font-bold text-base sm:text-lg text-[#6E1414]">
                    {activeLetter.salutation}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <select
                  value={recipientKey}
                  onChange={(e) =>
                    handleRecipientChange(
                      e.target.value as TeacherRecipientKey
                    )
                  }
                  className="bg-[#FAF6EE] text-slate-800 text-xs sm:text-sm font-semibold border border-[#C59B27]/50 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#9E2A2B] flex-1 md:flex-initial cursor-pointer"
                >
                  {Object.values(TEACHER_LETTERS).map((item) => (
                    <option key={item.key} value={item.key}>
                      {item.optionLabel}
                    </option>
                  ))}
                </select>

                <button
                  onClick={playTrainWhistle}
                  className="px-3.5 py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-[#6E1414] font-bold text-xs border border-amber-300 flex items-center gap-1.5 transition cursor-pointer"
                >
                  <BellRing className="w-4 h-4 text-[#9E2A2B]" />
                  <span>Kéo Còi Tàu</span>
                </button>
              </div>
            </div>

            {/* KHUNG THIỆP CHÍNH (DÙNG ĐỂ XUẤT ẢNH PNG) */}
            <div
              id="invitation-card-capture"
              className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-12 vn-border-frame relative overflow-hidden"
            >
              {/* Hoa văn góc cổ điển Việt Nam */}
              <div className="absolute top-4 left-5 text-[#C59B27] text-2xl font-serif-vn select-none">
                ❦
              </div>
              <div className="absolute top-4 right-5 text-[#C59B27] text-2xl font-serif-vn select-none">
                ❦
              </div>
              <div className="absolute bottom-4 left-5 text-[#C59B27] text-2xl font-serif-vn select-none">
                ❦
              </div>
              <div className="absolute bottom-4 right-5 text-[#C59B27] text-2xl font-serif-vn select-none">
                ❦
              </div>

              {/* Tiêu Đề Thiệp */}
              <div className="text-center max-w-3xl mx-auto border-b-2 border-[#C59B27]/25 pb-6 mb-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-[#C59B27]/40 text-amber-900 text-xs font-bold mb-2">
                  <span>
                    🌸 {classInfo.schoolName.toUpperCase()} • CHÀO MỪNG NGÀY NHÀ
                    GIÁO VIỆT NAM 20/11 🌸
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-serif-vn font-black text-[#6E1414] leading-tight tracking-tight">
                  <span className="inline-block">Tri Ân Người Lái Tàu</span>{' '}
                  <span className="inline-block whitespace-nowrap">Thầm Lặng</span>
                </h2>
                <p className="font-handwriting-vn text-2xl sm:text-3xl text-[#9E2A2B] mt-1">
                  Kính tặng Quý Thầy Cô từ {classInfo.studentCount} trái tim nhỏ Chi đội{' '}
                  {classInfo.className}
                </p>
              </div>

              {/* Bố cục 2 Cột: Cột Trái (Tâm Thư) - Cột Phải (Khung Ảnh Cô Nguyễn Minh Quyên & Lớp 6/10) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Cột Trái: Lá Thư Tri Ân (7 cột) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="font-serif-vn font-bold text-lg sm:text-xl text-[#6E1414] leading-snug">
                    <span className="block text-sm uppercase tracking-wider text-[#9E2A2B] mb-1">
                      Kính gửi:
                    </span>
                    <span className="underline decoration-[#C59B27] decoration-2 underline-offset-4">
                      {activeLetter.salutation}
                    </span>
                  </div>

                  <div className="bg-[#FAF6EE]/90 p-6 rounded-2xl border border-[#C59B27]/30 space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed text-justify shadow-inner">
                    {activeLetter.paragraphs.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                    <p className="font-handwriting-vn text-2xl sm:text-3xl text-[#9E2A2B] font-bold pt-2 text-center">
                      {activeLetter.quote}
                    </p>
                  </div>

                  {/* Chữ ký đại diện 2 bên đối xứng, trang trọng và vừa vặn bố cục */}
                  <div className="bg-amber-50/80 rounded-2xl p-4 border border-[#C59B27]/35 grid grid-cols-2 gap-4 text-center shadow-xs">
                    <div className="border-r border-[#C59B27]/30 pr-2">
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                        Tập thể kính chúc
                      </span>
                      <strong className="text-[#6E1414] font-bold text-sm sm:text-base block mt-0.5">
                        {classInfo.studentCount} Đội viên Chi đội {classInfo.className}
                      </strong>
                      <span className="text-[11px] text-slate-600 block mt-0.5 font-medium">
                        {classInfo.schoolName}
                      </span>
                    </div>
                    <div className="pl-2">
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                        Giáo viên chủ nhiệm
                      </span>
                      <strong className="text-[#2D6A4F] font-bold text-sm sm:text-base block mt-0.5">
                        {classInfo.homeroomTeacher}
                      </strong>
                      <span className="text-[11px] text-slate-600 block mt-0.5 font-medium">
                        Người lái tàu Chi đội {classInfo.className}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cột Phải: Khung Ảnh Cô Nguyễn Minh Quyên & 40 Trái Tim Nhỏ 6/10 (5 cột) */}
                <div className="lg:col-span-5">
                  <VietnameseClassroomArt
                    classInfo={classInfo}
                    onOpenCustomize={() => setIsCustomizeOpen(true)}
                  />
                </div>
              </div>

              {/* Hành Trình 3 Trạm Dừng Đầu Cấp 2 */}
              <StationsTimeline
                classInfo={classInfo}
                stations={TRAIN_STATIONS}
              />

              {/* Góc Lưu Bút Thẻ Hành Lý Yêu Thương Của 4 Tổ */}
              <LuggageWishBoard
                classInfo={classInfo}
                wishes={wishes}
                onAddWish={handleAddWish}
              />

              {/* Chân trang thiệp */}
              <div className="mt-10 pt-4 border-t border-[#C59B27]/30 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="sm:text-left">
                  ✨ Tác phẩm dự thi Thiết kế Thiệp Điện Tử chào mừng Ngày Nhà Giáo Việt Nam 20/11 — {classInfo.schoolName}
                </span>
                <div className="font-bold sm:text-right shrink-0">
                  <span className="text-[#6E1414] block">Chi đội Lớp {classInfo.className}</span>
                  <span className="text-[#2D6A4F] block mt-0.5">GVCN: {classInfo.homeroomTeacher}</span>
                </div>
              </div>
            </div>

            {/* Thanh Nút Xuất Ảnh & Chia Sẻ Dưới Cùng */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handleDownloadCardPNG}
                className="px-6 py-3 rounded-2xl bg-[#2D6A4F] hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2 transition active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Tải Ảnh Thiệp Về Máy</span>
              </button>
              <button
                onClick={handleShareLink}
                className="px-6 py-3 rounded-2xl bg-[#9E2A2B] hover:bg-[#6E1414] text-white font-bold text-xs sm:text-sm shadow-lg flex items-center gap-2 transition active:scale-95 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Sao Chép Đường Link Thiệp</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Modal Tùy Chỉnh & Lồng Ảnh Thật */}
      <CustomizeModal
        isOpen={isCustomizeOpen}
        classInfo={classInfo}
        onClose={() => setIsCustomizeOpen(false)}
        onSave={(updated) => {
          setClassInfo(updated);
          triggerVietnameseConfetti();
          showToast(
            '✨ Đã cập nhật thông tin & ảnh của lớp 6/10 thành công!'
          );
        }}
      />
    </div>
  );
}
export default App;
