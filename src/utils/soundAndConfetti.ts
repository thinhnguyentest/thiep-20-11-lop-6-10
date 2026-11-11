import confetti from 'canvas-confetti';

// Pháo hoa giấy tông màu truyền thống Việt Nam (Đỏ son, Vàng đồng, Xanh ngọc, Hồng sen)
export const triggerVietnameseConfetti = () => {
  try {
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#9E2A2B', '#C59B27', '#2D6A4F', '#E07A5F', '#F4A261'],
    });
  } catch (e) {
    console.error('Confetti error:', e);
  }
};

// Hệ thống âm thanh Web Audio API (Còi tàu & Giai điệu "Bụi Phấn" êm dịu không cần file MP3 ngoài)
let sharedAudioCtx: AudioContext | null = null;

const getAudioCtx = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  if (!sharedAudioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      sharedAudioCtx = new AudioContextClass();
    }
  }
  if (sharedAudioCtx && sharedAudioCtx.state === 'suspended') {
    sharedAudioCtx.resume();
  }
  return sharedAudioCtx;
};

export const playTrainWhistle = () => {
  const ctx = getAudioCtx();
  if (!ctx) return;

  const now = ctx.currentTime;
  [523.25, 659.25].forEach((freq) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.0);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 1.0);
  });
};

export const playFlowerChime = (freq = 587.33, dur = 0.28) => {
  const ctx = getAudioCtx();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, now);
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.07, now + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + dur);
};


