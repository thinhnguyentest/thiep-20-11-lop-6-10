import type {
  ClassInformation,
  TeacherLetterContent,
  TeacherRecipientKey,
  TrainStationMilestone,
  StudentWishItem,
} from '../types';

export const DEFAULT_CLASS_INFO: ClassInformation = {
  schoolName: 'Trường THCS Dũng Sĩ Điện Ngọc',
  className: '6/10',
  homeroomTeacher: 'Cô Nguyễn Minh Quyên',
  studentCount: 40,
  schoolYear: '2026 - 2030',
  photoCaption: 'Cô Nguyễn Minh Quyên cùng 40 trái tim nhỏ lớp 6/10 ❤️',
  photoSubCaption: 'Chuyến tàu thanh xuân đầu cấp dưới mái trường THCS Dũng Sĩ Điện Ngọc',
  customPhotoUrl: '',
};

export const TEACHER_LETTERS: Record<TeacherRecipientKey, TeacherLetterContent> = {
  all: {
    key: 'all',
    optionLabel: '🏫 Quý thầy cô giáo trường THCS Dũng Sĩ Điện Ngọc',
    salutation: 'Quý thầy cô giáo kính yêu của trường THCS Dũng Sĩ Điện Ngọc',
    paragraphs: [
      'Tháng Chín mùa thu vừa qua, khi tiếng trống khai trường vang lên, 40 học sinh chúng em tạm biệt mái trường Tiểu học để bước lên "Chuyến tàu THCS Dũng Sĩ Điện Ngọc" tại toa tàu mang tên Chi đội 6/10. Ngôi trường mới rộng lớn hơn, môn học nhiều hơn, chiếc khăn quàng đỏ trên vai như nhắc chúng em đã lớn, nhưng trong lòng bạn nào cũng đầy ắp những rụt rè, bỡ ngỡ.',
      'Giữa những ngày đầu tiên lạ lẫm ấy, chính các Thầy Cô của mái trường THCS Dũng Sĩ Điện Ngọc và đặc biệt là Cô giáo chủ nhiệm Nguyễn Minh Quyên với sự dịu dàng, nụ cười ấm áp và giọng giảng bài truyền cảm đã trở thành những Người Lái Tàu tận tụy nhất. Thầy Cô kiên nhẫn chỉ bảo chúng em từ cách ghi bài, nề nếp học tập, cho đến việc biết đoàn kết, yêu thương nhau dưới mái nhà chung 6/10.',
      'Mỗi nét phấn trắng Thầy Cô viết lên bảng xanh đã mở ra cho 40 học trò nhỏ cả một chân trời tri thức kỳ diệu. Những điểm 10 đầu tiên, những lời khen ngợi động viên của Thầy Cô chính là nguồn động lực to lớn giúp chuyến tàu 6/10 tự tin tiến về phía trước.',
    ],
    quote:
      '“Nhân ngày 20/11, tập thể lớp 6/10 kính chúc Quý Thầy Cô trường THCS Dũng Sĩ Điện Ngọc luôn dồi dào sức khỏe, hạnh phúc và mãi là ngọn hải đăng soi sáng cho chúng em!”',
  },
  gvcn: {
    key: 'gvcn',
    optionLabel: '💐 Cô giáo chủ nhiệm Nguyễn Minh Quyên (Lớp 6/10)',
    salutation: 'Cô giáo chủ nhiệm Nguyễn Minh Quyên — Người Lái Tàu Kính Yêu Của Lớp 6/10',
    paragraphs: [
      'Tháng Chín vừa qua, 40 học sinh chúng em bước vào lớp 6/10 trường THCS Dũng Sĩ Điện Ngọc với biết bao lạ lẫm và rụt rè. Chính ánh mắt trìu mến và nụ cười dịu dàng của Cô Nguyễn Minh Quyên đã đón chúng em vào một gia đình mới đầy ắp yêu thương.',
      'Từng buổi sinh hoạt lớp, từng lời nhắc nhở ân cần của Cô không chỉ giúp 40 thành viên 6/10 rèn luyện nề nếp học tập tốt mà còn dạy chúng em biết sẻ chia, đoàn kết giúp đỡ nhau cùng tiến bộ.',
      'Với 40 đội viên chúng em, Cô không chỉ là người truyền dạy kiến thức mà còn là Người Lái Tàu kiên nhẫn, bao dung nhất luôn đồng hành cùng tập thể 6/10 trên chặng đường đầu cấp 2.',
    ],
    quote:
      '“Nhân ngày Nhà giáo Việt Nam 20/11, 40 trái tim nhỏ lớp 6/10 kính chúc Cô Nguyễn Minh Quyên luôn trẻ đẹp, mạnh khỏe và ngập tràn niềm vui bên chúng em!”',
  },
  toan: {
    key: 'toan',
    optionLabel: '📐 Thầy/Cô Giáo Bộ Môn Toán',
    salutation: 'Quý thầy cô giáo kính yêu của trường THCS Dũng Sĩ Điện Ngọc (Bộ môn Toán)',
    paragraphs: [
      'Bước vào lớp 6 tại trường THCS Dũng Sĩ Điện Ngọc, những bài toán Tập hợp, Số nguyên và Hình học trực quan từng khiến 40 học sinh lớp 6/10 chúng em lo lắng và bối rối.',
      'Thế nhưng, nhờ phương pháp giảng dạy dễ hiểu, tận tình và sự kiên nhẫn của Thầy/Cô trên bục giảng, những con số khô khan đã trở thành niềm say mê khám phá mỗi ngày của cả lớp.',
      'Chúng em luôn ghi nhớ từng lời dặn dò tỉ mỉ của Thầy/Cô để rèn luyện tư duy cẩn thận, chính xác trong từng bài làm.',
    ],
    quote:
      '“Nhân ngày 20/11, tập thể 6/10 kính chúc Thầy/Cô luôn mạnh khỏe, hạnh phúc và dành tặng lớp 6/10 thật nhiều điểm 10 đỏ thắm!”',
  },
  van: {
    key: 'van',
    optionLabel: '📖 Thầy/Cô Giáo Bộ Môn Ngữ Văn',
    salutation: 'Quý thầy cô giáo kính yêu của trường THCS Dũng Sĩ Điện Ngọc (Bộ môn Ngữ Văn)',
    paragraphs: [
      'Những trang văn đầu tiên của chương trình lớp 6 về truyền thuyết dân gian, về tình cảm gia đình và quê hương đất nước đã làm tâm hồn 40 đội viên lớp 6/10 rung động sâu sắc.',
      'Qua giọng đọc truyền cảm và từng lời giảng ấm áp của Thầy/Cô, chúng em học được cách yêu tiếng Việt, biết sống nhân ái, hiếu thảo và biết ơn những người quanh mình.',
      'Mỗi tiết học Văn đều là một hành trình nuôi dưỡng tâm hồn tươi đẹp cho chúng em dưới mái trường THCS Dũng Sĩ Điện Ngọc.',
    ],
    quote:
      '“Kính chúc Thầy/Cô một mùa Hiến chương 20/11 ngập tràn sắc hoa, luôn giữ mãi ngọn lửa văn chương ấm áp!”',
  },
  anh: {
    key: 'anh',
    optionLabel: '🌍 Thầy/Cô Giáo Bộ Môn Tiếng Anh',
    salutation: 'Quý thầy cô giáo kính yêu của trường THCS Dũng Sĩ Điện Ngọc (Bộ môn Tiếng Anh)',
    paragraphs: [
      'Những tiết học Tiếng Anh đầu cấp 2 với nhiều từ vựng và cấu trúc mới từng làm 40 học sinh lớp 6/10 chúng em ngại ngùng khi đứng lên phát biểu.',
      'Nhưng chính sự nhiệt huyết, những hoạt động học tập sôi nổi và nụ cười khích lệ của Thầy/Cô đã giúp cả lớp tự tin giao tiếp và mở cánh cửa bước ra thế giới.',
      'Tập thể lớp 6/10 luôn mong chờ đến từng tiết học đầy ắp năng lượng tích cực của Thầy/Cô.',
    ],
    quote:
      '“Happy Vietnamese Teachers’ Day 20/11! Chúng em cảm ơn Thầy/Cô đã luôn truyền cảm hứng cho lớp 6/10 mỗi ngày!”',
  },
  khtn: {
    key: 'khtn',
    optionLabel: '🔬 Thầy/Cô Giáo Bộ Môn Khoa Học Tự Nhiên',
    salutation: 'Quý thầy cô giáo kính yêu của trường THCS Dũng Sĩ Điện Ngọc (Bộ môn KHTN)',
    paragraphs: [
      'Môn Khoa học Tự nhiên ở lớp 6 đã mở ra trước mắt 40 học sinh lớp 6/10 biết bao điều kỳ thú về thế giới tự nhiên, về tế bào, chất và những quy luật vật lý quanh ta.',
      'Nhờ những thí nghiệm trực quan sinh động và lời giải thích cặn kẽ của Thầy/Cô, mỗi giờ học đều trở thành một chuyến phiêu lưu khoa học đầy hào hứng.',
    ],
    quote:
      '“Nhân dịp 20/11, tập thể 6/10 kính chúc Thầy/Cô luôn dồi dào sức khỏe và thắp sáng niềm đam mê khám phá khoa học cho chúng em!”',
  },
  sudia: {
    key: 'sudia',
    optionLabel: '🗺️ Thầy/Cô Giáo Lịch Sử & Địa Lý, GDCD, Tin, Nghệ Thuật, GDTC',
    salutation: 'Quý thầy cô giáo kính yêu của trường THCS Dũng Sĩ Điện Ngọc',
    paragraphs: [
      'Trên chuyến tàu tri thức lớp 6/10, mỗi môn học Lịch sử & Địa lý, Giáo dục công dân, Tin học, Công nghệ, Âm nhạc, Mỹ thuật và Giáo dục thể chất đều mang đến cho 40 đội viên chúng em những hành trang vô cùng quý giá.',
      'Thầy Cô dạy chúng em tự hào về truyền thống hào hùng của mảnh đất Dũng Sĩ Điện Ngọc, biết rèn luyện đạo đức, sức khỏe và thẩm mỹ để phát triển toàn diện.',
    ],
    quote:
      '“Tập thể lớp 6/10 kính chúc Quý Thầy Cô ngày Nhà giáo Việt Nam 20/11 tràn ngập niềm vui, hạnh phúc và thành công!”',
  },
};

export const TRAIN_STATIONS: TrainStationMilestone[] = [
  {
    id: 'st-1',
    stationBadge: 'Trạm 01 • Tháng 9/2026',
    dateLabel: 'Ngày Tựu Trường Đầu Cấp',
    title: 'Ngày Tựu Trường Bỡ Ngỡ',
    description:
      'Rời trường Tiểu học, 40 đội viên lớp 6/10 bước vào trường THCS Dũng Sĩ Điện Ngọc với bao hồi hộp. Chính nụ cười hiền hậu của Cô chủ nhiệm Nguyễn Minh Quyên và các Thầy Cô đã xóa tan mọi khoảng cách.',
    emoji: '🎒',
  },
  {
    id: 'st-2',
    stationBadge: 'Trạm 02 • Tháng 10/2026',
    dateLabel: 'Hành Trình Gắn Kết',
    title: 'Những Giờ Học Say Mê',
    description:
      'Làm quen với phương pháp học mới ở cấp 2, từng trang vở thơm mùi giấy mới và những lời giảng ân cần của các Thầy Cô bộ môn đã gắn kết 40 bạn nhỏ thành một tập thể 6/10 đoàn kết.',
    emoji: '📚',
  },
  {
    id: 'st-3',
    stationBadge: 'Trạm 03 • 20/11/2026',
    dateLabel: 'Hiến Chương Nhà Giáo',
    title: 'Bến Đỗ Tri Ân Người Thầy',
    description:
      'Cả chi đội 6/10 cùng nhau thi đua giành tuần học tốt, gửi trọn lòng biết ơn sâu sắc nhất tới Cô Nguyễn Minh Quyên và toàn thể Quý Thầy Cô trường THCS Dũng Sĩ Điện Ngọc!',
    emoji: '💐',
    isHighlight: true,
  },
];

export const INITIAL_STUDENT_WISHES: StudentWishItem[] = [
  {
    id: 'w-1',
    groupBadge: 'Tổ 1 • Chăm Ngoan',
    author: 'Đại diện Tổ 1 (10 Đội viên)',
    message:
      'Chúng em kính chúc Quý Thầy Cô luôn mạnh khỏe, tươi trẻ và luôn nở nụ cười rạng rỡ mỗi khi bước vào lớp 6/10 ạ!',
    bgClass: 'bg-[#FFF9EB]',
    borderClass: 'border-amber-300',
    badgeClass: 'text-amber-800 bg-amber-100',
    authorColorClass: 'text-[#6E1414]',
    likes: 40,
  },
  {
    id: 'w-2',
    groupBadge: 'Tổ 2 • Sáng Tạo',
    author: 'Đại diện Tổ 2 (10 Đội viên)',
    message:
      'Cảm ơn Quý Thầy Cô trường THCS Dũng Sĩ Điện Ngọc đã biến những bài học mới ở lớp 6 thành những giờ học đầy ắp tiếng cười và niềm vui!',
    bgClass: 'bg-[#F2F9F5]',
    borderClass: 'border-emerald-300',
    badgeClass: 'text-emerald-800 bg-emerald-100',
    authorColorClass: 'text-[#2D6A4F]',
    likes: 38,
  },
  {
    id: 'w-3',
    groupBadge: 'Tổ 3 • Tự Tin',
    author: 'Đại diện Tổ 3 (10 Đội viên)',
    message:
      'Tháng 11 này 40 thành viên lớp 6/10 xin hứa 100% học bài chăm chỉ, giơ tay phát biểu thật sôi nổi để giành Cờ Đỏ tặng Quý Thầy Cô!',
    bgClass: 'bg-[#FDF4F4]',
    borderClass: 'border-rose-300',
    badgeClass: 'text-rose-800 bg-rose-100',
    authorColorClass: 'text-[#9E2A2B]',
    likes: 45,
  },
  {
    id: 'w-4',
    groupBadge: 'Tổ 4 • Đoàn Kết',
    author: 'Đại diện Tổ 4 (10 Đội viên)',
    message:
      'Dù mai này lớn khôn, chúng em sẽ mãi nhớ mùa thu năm lớp 6/10 đầu tiên ấm áp dưới sự chở che của Quý Thầy Cô trường THCS Dũng Sĩ Điện Ngọc!',
    bgClass: 'bg-[#F3F7FA]',
    borderClass: 'border-sky-300',
    badgeClass: 'text-sky-800 bg-sky-100',
    authorColorClass: 'text-[#264653]',
    likes: 42,
  },
];

