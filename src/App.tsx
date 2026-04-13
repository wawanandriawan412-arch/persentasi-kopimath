import React, { useState } from 'react';
import { Brain, Clock, Coffee, Calculator, ChevronRight, ChevronLeft, XCircle } from 'lucide-react';

const Slide1 = () => (
  <div className="h-full flex flex-col items-center justify-center text-center relative">
    <div className="absolute top-4 text-amber-500">
      <Brain className="w-12 h-12" />
    </div>
    <h1 className="text-5xl font-bold text-gray-800 mb-6 max-w-3xl leading-tight">
      KopiMath: Belajar Matematika Sederhana di Sela Kesibukan Kebun
    </h1>
    <p className="text-xl text-gray-600 mb-8">
      Solusi untuk Siswa SMP yang Sibuk Membantu Orang Tua
    </p>
    <p className="text-lg font-medium text-gray-500">
      Presented by: [Student Name]
    </p>
    <div className="absolute bottom-4 left-4 text-amber-500 opacity-50">
      <Brain className="w-16 h-16" />
    </div>
    <div className="absolute bottom-4 right-4 text-amber-500 opacity-50">
      <Brain className="w-16 h-16" />
    </div>
  </div>
);

const Slide2 = () => (
  <div className="h-full flex flex-col pt-8 px-8">
    <div className="absolute top-4 right-4 text-amber-500">
      <Brain className="w-8 h-8" />
    </div>
    <h2 className="text-3xl font-bold text-gray-800 mb-12">Latar Belakang: Tantangan Siswa SMP</h2>
    <div className="flex flex-row items-center gap-12 h-full">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Tantangan Belajar di Rumah</h3>
        <ul className="space-y-4 text-lg text-gray-700 list-disc pl-6">
          <li>Menciptakan akses belajar matematika yang fleksibel.</li>
          <li>Mengubah waktu istirahat menjadi kesempatan belajar.</li>
          <li>Menggunakan konten yang dekat dengan kehidupan sehari-hari (kontekstual).</li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-64 h-64 bg-amber-50 rounded-full flex items-center justify-center border-8 border-amber-100 shadow-inner">
          <Brain className="w-32 h-32 text-amber-600" />
        </div>
      </div>
    </div>
  </div>
);

const Slide3 = () => (
  <div className="h-full flex flex-col pt-8 px-8">
    <div className="absolute top-4 right-4 text-amber-500">
      <Brain className="w-8 h-8" />
    </div>
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Fitur KopiMath yang Dirancang Khusus</h2>
    <div className="grid grid-cols-2 gap-8 flex-grow pb-8">
      <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col">
        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8 mx-auto">
          <Clock className="w-10 h-10" />
        </div>
        <ul className="space-y-4 text-lg text-gray-700 list-disc pl-6 mb-8">
          <li>Hanya 2-3 menit.</li>
          <li>Sangat cocok untuk sela waktu.</li>
        </ul>
        <div className="mt-auto bg-gray-50 p-4 rounded-2xl border border-gray-200 flex items-center gap-4">
           <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
             <Clock className="w-6 h-6" />
           </div>
           <div>
             <div className="font-bold text-gray-800">Sesi Kilat</div>
             <div className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block mt-1">Hanya butuh 2-3 menit</div>
           </div>
        </div>
      </div>
      <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
            <Coffee className="w-8 h-8" />
          </div>
          <span className="text-2xl font-bold text-gray-400">&</span>
          <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center">
            <Calculator className="w-8 h-8" />
          </div>
        </div>
        <ul className="space-y-4 text-lg text-gray-700 list-disc pl-6 mb-8">
          <li>Soal cerita tentang hasil panen & ternak.</li>
          <li>Menggunakan AI (Gemini) untuk pembuatan soal & penjelasan detail.</li>
        </ul>
        <div className="mt-auto bg-amber-50/50 p-4 rounded-2xl border border-amber-100">
          <div className="text-xs font-bold text-amber-800 mb-2 uppercase tracking-wider">Ceritakan sedikit kegiatanmu hari ini:</div>
          <div className="text-sm text-gray-700 bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
            Hari ini panen 4 kg kopi dan cari 2 karung rumput...
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide4 = () => (
  <div className="h-full flex flex-col pt-8 px-8">
    <div className="absolute top-4 right-4 text-amber-500">
      <Brain className="w-8 h-8" />
    </div>
    <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Aplikasi yang Memahami Keseharianmu</h2>
    <h3 className="text-xl font-medium text-gray-500 mb-8 text-center">Input Kegiatan Sehari-hari</h3>
    
    <div className="flex items-center justify-center gap-16 flex-grow pb-8">
      <div className="w-[400px] bg-white border border-gray-200 rounded-[2rem] shadow-xl overflow-hidden flex flex-col">
        <div className="p-6 bg-gray-50 border-b border-gray-100">
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-gray-800 text-lg">Sesi Kilat</div>
              <div className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block mt-1">Hanya butuh 2-3 menit</div>
            </div>
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <label className="block text-sm font-bold text-amber-800 mb-3">Ceritakan sedikit kegiatanmu hari ini:</label>
          <textarea 
            className="w-full border-2 border-amber-100 rounded-2xl p-4 text-gray-700 bg-amber-50/30 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none h-32"
            value="Hari ini panen 4 kg kopi dan cari 2 karung rumput..."
            readOnly
          />
          <button className="mt-6 w-full bg-amber-600 text-white font-bold py-4 rounded-2xl shadow-md hover:bg-amber-700 transition-colors flex items-center justify-center gap-2">
            Mulai Belajar Sekarang <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="max-w-[250px]">
        <p className="text-xl text-gray-700 font-medium leading-relaxed">
          Aplikasi akan membuat soal berdasarkan ini.
        </p>
      </div>
    </div>
  </div>
);

const Slide5 = () => (
  <div className="h-full flex flex-col pt-8 px-8">
    <div className="absolute top-4 right-4 text-amber-500">
      <Brain className="w-8 h-8" />
    </div>
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Soal Matematika Contextual</h2>
    
    <div className="flex items-center justify-center gap-16 flex-grow pb-8">
      <div className="w-[450px] bg-white border border-gray-200 rounded-[2rem] shadow-xl overflow-hidden flex flex-col max-h-[500px]">
        <div className="p-5 bg-gray-50 border-b border-gray-100 text-center font-bold text-gray-800">
          Soal Operasi Hitung Campuran
        </div>
        <div className="p-6 overflow-y-auto flex-grow">
          <p className="text-gray-700 leading-relaxed mb-6 bg-amber-50/50 p-5 rounded-2xl border border-amber-100">
            Hari ini kamu memanen 4 kg biji kopi dan mencari 2 karung rumput yang masing-masing seberat 15 kg. Kamu membagikan setengah dari total berat keseluruhan hasil kerjamu hari ini kepada tetangga, lalu paman memberimu tambahan 5 kg kopi. Berapa kg yang kamu miliki sekarang?
          </p>
          <div className="space-y-3">
            {['17 kg', '22 kg', '27 kg', '34 kg'].map((opt, i) => (
              <div key={i} className="flex items-center justify-between p-4 border-2 border-gray-100 rounded-2xl hover:border-amber-300 hover:bg-amber-50 cursor-pointer transition-colors">
                <span className="font-medium text-gray-700">{opt}</span>
                <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-[250px]">
        <p className="text-xl text-gray-700 font-medium leading-relaxed">
          Teks disesuaikan dengan input pengguna.
        </p>
      </div>
    </div>
  </div>
);

const Slide6 = () => (
  <div className="h-full flex flex-col pt-8 px-8">
    <div className="absolute top-4 right-4 text-amber-500">
      <Brain className="w-8 h-8" />
    </div>
    <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Penjelasan AI yang Detail</h2>
    <h3 className="text-xl font-medium text-gray-500 mb-8 text-center">Belajar dari Kesalahan</h3>
    
    <div className="flex items-center justify-center gap-16 flex-grow pb-8">
      <div className="w-[450px] bg-white border border-gray-200 rounded-[2rem] shadow-xl overflow-hidden flex flex-col max-h-[500px]">
        <div className="p-6 bg-red-50 border-b border-red-100 flex flex-col items-center justify-center text-center">
          <XCircle className="w-12 h-12 text-red-500 mb-3" />
          <h4 className="text-xl font-bold text-red-700 mb-1">Hampir Benar!</h4>
          <p className="text-red-600 text-sm font-medium">Jawaban yang tepat adalah 22 kg</p>
        </div>
        <div className="p-6 overflow-y-auto flex-grow bg-amber-50/30">
          <div className="flex items-center gap-2 mb-4 text-amber-800 font-bold">
            <Brain className="w-5 h-5" />
            <span>Cara Mengerjakan:</span>
          </div>
          <div className="text-gray-700 text-sm leading-relaxed space-y-3">
            <p><span className="font-semibold">Langkah penyelesaian:</span> Pertama, hitung berat total rumput yaitu 2 karung dikali 15 kg sama dengan 30 kg.</p>
            <p>Kedua, jumlahkan dengan berat kopi untuk mendapat total keseluruhan yaitu 4 kg ditambah 30 kg sama dengan 34 kg.</p>
            <p>Ketiga, bagi dua total tersebut karena diberikan setengah kepada tetangga, sehingga sisa barang bawaanmu adalah 34 kg dibagi 2 sama dengan 17 kg.</p>
            <p>Terakhir, tambahkan 5 kg kopi dari paman: 17 kg + 5 kg = 22 kg.</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-[250px]">
        <p className="text-xl text-gray-700 font-medium leading-relaxed">
          Setiap langkah dijelaskan untuk pemahaman mendalam.
        </p>
      </div>
    </div>
  </div>
);

const Slide7 = () => (
  <div className="h-full flex flex-col pt-8 px-8">
    <div className="absolute top-4 right-4 text-amber-500">
      <Brain className="w-8 h-8" />
    </div>
    <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Harapan dan Masa Depan KopiMath</h2>
    <h3 className="text-xl font-medium text-gray-500 mb-12 text-center">KopiMath: Menanam Benih Ilmu di Sela Waktu</h3>
    
    <div className="flex flex-col items-center max-w-4xl mx-auto w-full flex-grow">
      <div className="flex w-full gap-12 mb-12 items-center">
        <div className="flex-1">
          <ul className="space-y-5 text-lg text-gray-700 list-disc pl-6">
            <li>Siswa dapat belajar mandiri dengan waktu terbatas.</li>
            <li>Meningkatkan literasi matematika melalui konteks sehari-hari.</li>
            <li>Rencana masa depan: Penambahan subjek lain (IPA, IPS).</li>
          </ul>
        </div>
        <div className="w-72 flex flex-col items-center justify-center">
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 w-full mb-6">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-gray-800">Sesi Kilat</div>
              <div className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded inline-block mt-1">Hanya butuh 2-3 menit</div>
            </div>
          </div>
          <div className="text-green-600/40">
             <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
          </div>
        </div>
      </div>
      
      <button className="bg-amber-600 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:bg-amber-700 transition-colors text-xl mb-8">
        Tetap Semangat Belajar!
      </button>
      
      <p className="text-xl font-semibold text-gray-800">
        Terima Kasih atas Perhatian Bapak/Ibu Guru!
      </p>
    </div>
  </div>
);

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const SlideComponent = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center p-4 md:p-8">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl aspect-[16/9] flex flex-col relative border border-gray-100">
        <div className="flex-grow overflow-hidden relative">
          <SlideComponent />
        </div>
        
        {/* Navigation Bar */}
        <div className="p-4 flex justify-between items-center bg-white border-t border-gray-100 z-10">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center px-5 py-2.5 rounded-xl font-bold transition-all ${
              currentSlide === 0
                ? 'text-gray-300 cursor-not-allowed'
                : 'text-amber-700 hover:bg-amber-50 active:bg-amber-100'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back
          </button>
          
          {/* Progress Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <div 
                key={index} 
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-amber-500' : 'w-2 bg-gray-200'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center px-5 py-2.5 rounded-xl font-bold transition-all ${
              currentSlide === slides.length - 1
                ? 'text-gray-300 cursor-not-allowed'
                : 'bg-amber-600 text-white hover:bg-amber-700 active:bg-amber-800 shadow-sm'
            }`}
          >
            Next
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
