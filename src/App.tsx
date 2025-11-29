import { useEffect, useState } from 'react';
import {
  Anchor,
  Anchor as AnchorIcon,
  Compass,
  Skull,
  Skull as SkullIcon,
  Swords,
  Swords as SwordsIcon,
  MapPin,
  Calendar,
  Clock,
  Ticket,
  Image as ImgIcon,
  Film,
  Utensils
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";


function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showVenue, setShowVenue] = useState(false);


  useEffect(() => {
    setIsVisible(true);
  }, []);
  useEffect(() => {
  if (showVenue) {
    document.body.style.overflow = 'hidden'; // disable background scroll
  } else {
    document.body.style.overflow = 'auto';   // restore scroll
  }
}, [showVenue]);


  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/ChatGPT Image Nov 28, 2025, 10_46_20 PM.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="w-full py-6 px-4 md:px-8">
          <nav className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-full border border-cyan-400/30">
              <Anchor className="w-6 h-6 text-cyan-400 animate-float" />
              <span className="text-white font-bold text-lg hidden sm:inline">Pirates Cove</span>
            </div>
            <div className="flex items-center space-x-4">
              <Compass className="w-8 h-8 text-orange-400 animate-spin-slow" />
            </div>
          </nav>
        </header>

        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className={`max-w-4xl w-full transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-70 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="glass-card-premium p-8 md:p-12 rounded-3xl border border-cyan-400/30">
              <div className="flex justify-center mb-6">
                <Skull className="w-16 h-16 md:w-20 md:h-20 text-orange-400 animate-pulse-slow" />
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-white animate-glow">
                ⚔️ Ahoy, Pirates of <br />Batch 2025 - 2026
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent animate-shimmer">
                Continuation Party 2025 ⚔️
              </h2>

              <p className="text-lg md:text-xl text-center text-cyan-100 mb-12 animate-fade-in">
                Set sail for a evening of fun, food & memories!
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">

  {/* Venue */}
  {/* Venue */}
<div className="glass-card p-6 rounded-2xl border border-cyan-400/20 
    transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] 
    hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/20">
  <div className="flex items-start space-x-4">
    <MapPin className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
    <div>
      <h3 className="text-cyan-300 font-semibold mb-2">Venue</h3>
      <p className="text-white">
        The Dom - Lounge, Dine & Restaurant<br />Punjabi Bagh Club Road
      </p>

      {/* Button */}
      <button
  onClick={() => setShowVenue(true)}
  className="inline-block mt-4 px-4 py-2 rounded-xl text-sm font-semibold
  bg-orange-500/80 text-black 
  hover:bg-orange-400 hover:scale-105 transition-all"
>
  View Details →
</button>

    </div>
  </div>
</div>


  {/* Date */}
  <div className="glass-card p-6 rounded-2xl border border-cyan-400/20 
      transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] 
      hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/20">
    <div className="flex items-start space-x-4">
      <Calendar className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
      <div>
        <h3 className="text-cyan-300 font-semibold mb-2">Date</h3>
        <p className="text-white">26 December 2025</p>
      </div>
    </div>
  </div>

  {/* Time */}
  <div className="glass-card p-6 rounded-2xl border border-cyan-400/20 
      transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] 
      hover:border-cyan-400/40 hover:shadow-lg hover:shadow-orange-400/20">
    <div className="flex items-start space-x-4">
      <Clock className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
      <div>
        <h3 className="text-cyan-300 font-semibold mb-2">Time</h3>
        <p className="text-white">3:00 PM – 6:00 PM</p>
      </div>
    </div>
  </div>
  

  

  {/* Ticket Price */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* Student Ticket */}
  <div className="glass-card p-6 rounded-2xl border border-cyan-400/20 
      transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] 
      hover:border-orange-400/40 hover:shadow-lg hover:shadow-orange-400/20">
    <div className="flex items-start space-x-4">
      <Ticket className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
      <div>
        <h3 className="text-cyan-300 font-semibold mb-2">Student Ticket</h3>
        <p className="text-white text-2xl font-bold">₹1050</p>
        <p className="text-cyan-200 text-sm">per student</p>
      </div>
    </div>
  </div>

  {/* Outsider Ticket */}
  <div className="glass-card p-6 rounded-2xl border border-cyan-400/20 
      transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03] 
      hover:border-orange-400/40 hover:shadow-lg hover:shadow-orange-400/20">
    <div className="flex items-start space-x-4">
      <Ticket className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
      <div>
        <h3 className="text-cyan-300 font-semibold mb-2">Outsider Ticket</h3>
        <p className="text-white text-2xl font-bold">₹1200</p>
        <p className="text-cyan-200 text-sm">per person</p>
      </div>
    </div>
  </div>
</div>


</div>


              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                
              </div>

              <div className="text-center glass-card p-4 rounded-xl border border-orange-400/30">
                <p className="text-orange-300 font-semibold">
                  Exciting Gifts Also Available !!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                
              </div>

              <div className="text-center glass-card p-4 rounded-xl border border-orange-400/30">
                <p className="text-orange-300 font-semibold">
                  Organised By: Captain Lakshay Kaushik & Crew
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className={`w-full py-8 px-4 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <Anchor className="w-6 h-6 text-cyan-400 animate-float" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
            <p className="text-cyan-200 text-sm">
              © 2025 Pirates of Class 12. All treasures reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* Floating Particles - Enhanced Version */}
{Array.from({ length: 30 }).map((_, i) => (
  <div
    key={i}
    className={`fixed rounded-full opacity-60 ${
      i % 2 === 0 ? "bg-orange-400" : "bg-cyan-400"
    } animate-float-particle-${(i % 4) + 1}`}
    style={{
      width: `${Math.random() * 4 + 2}px`,
      height: `${Math.random() * 4 + 2}px`,
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
    }}
  ></div>
))}

{showVenue && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999] flex justify-center items-start px-4 py-8 overflow-y-auto">
    {/* center container */}
    <div
      className="venue-modal-frame w-full max-w-4xl relative rounded-2xl overflow-visible"
      style={{
        // use same background as main page so modal blends
        backgroundImage: "url('/ChatGPT Image Nov 28, 2025, 10_46_20 PM.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Burning border + parchment inner card */}
      <div className="burning-border-inner relative rounded-2xl p-1">

        {/* Close Button */}
        <button
          onClick={() => setShowVenue(false)}
          className="absolute top-4 right-4 z-40 text-sm font-bold venue-close"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Floating modal particles (subtle) */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-70 ${i % 2 === 0 ? "bg-orange-400" : "bg-cyan-400"} modal-particle`}
            style={{
              width: `${Math.random() * 8 + 6}px`,
              height: `${Math.random() * 8 + 6}px`,
              top: `${5 + Math.random() * 85}%`,
              left: `${5 + Math.random() * 85}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Floating vintage icons */}
        <SkullIcon className="pirate-icon pirate-skull" />
        <SwordsIcon className="pirate-icon pirate-swords" />
        <AnchorIcon className="pirate-icon pirate-anchor" />

        {/* Content card with semi-translucent parchment overlay so text is readable but map area stays clear */}
        <div className="venue-inner p-6 md:p-8 z-30 relative" style={{ background: "linear-gradient(180deg, rgba(10,8,6,0.6), rgba(6,5,4,0.7))" }}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-2 vintage-title">
            Venue — The Dom
          </h2>
          <p className="text-center text-sm text-amber-200 mb-6">The Dom – Lounge, Dine & Restaurant · Punjabi Bagh Club Road</p>

          {/* MAP */}
          {/* MAP */}
<section className="mb-6 section-block">
  <h3 className="section-heading text-2xl md:text-3xl font-extrabold text-center text-orange-400 animate-glow"> ⚓ Location</h3>

  <div
  className="map-wrap rounded-xl overflow-hidden border border-yellow-900/20 shadow-inner text-center relative flex items-center justify-center"
  style={{
    backgroundImage: "url('/vintageimage.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply",
    backgroundColor: "rgba(0,0,0,0.3)",
    height: "12rem",      // increased height for desktop
    minHeight: "8rem",    // minimum height for small screens
  }}
>
  <a
    href="https://maps.app.goo.gl/uq7WJLchgTEEAsED9"
    target="_blank"
    rel="noopener noreferrer"
    className="text-amber-300 hover:text-amber-100 font-semibold text-lg underline z-10"
  >
    Open Venue on Google Maps
  </a>
</div>

</section>



          <div className="skull-divider"><SkullIcon className="w-6 h-6 inline-block" /></div>

          {/* CAROUSEL */}
          <section className="mb-6 section-block">
            <h3 className="section-heading text-2xl md:text-3xl font-extrabold text-center text-orange-400 animate-glow">🖼️ Venue Photos</h3>
            <div className="rounded-xl overflow-hidden border border-yellow-900/20 shadow-lg">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop
                className="h-96 md:h-[40rem]"
              >
                {["/venue1.jpg","/venue2.jpg","/venue3.jpg","/venue4.jpg","/venue5.jpg","/venue6.jpg","/venue7.jpg","/venue8.jpg","/venue9.jpg"].map((src,i)=>(
                  <SwiperSlide key={i}>
                    <img src={src} className="w-full h-full object-cover wavy-glow" alt={`venue-${i}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          <div className="skull-divider"><SkullIcon className="w-6 h-6 inline-block" /></div>

          {/* VIDEO */}
          <section className="mb-6 section-block">
            <h3 className="section-heading text-2xl md:text-3xl font-extrabold text-center text-orange-400 animate-glow">📹 Walkthrough Video</h3>
            <div className="rounded-xl overflow-hidden border border-amber-900/20 shadow-sm">
              <video src="/video.mp4" className="w-full h-96 md:h-[40rem] object-cover" controls />
            </div>
          </section>

          <div className="skull-divider"><SkullIcon className="w-6 h-6 inline-block" /></div>

          {/* MENU & DISHES */}
          <section className="mb-6 section-block">
            <h3 className="section-heading text-2xl md:text-3xl font-extrabold text-center text-orange-400 animate-glow">🍴 Menu & Dishes</h3>

<div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Veg Column */}
  <div>
    <h4 className="text-cyan-300 font-semibold mb-2">Vegetarian</h4>
    <ul className="list-disc list-inside text-sm text-amber-100 space-y-1">
      <li>Paneer Tikka</li>
      <li>Chilli Potato</li>
      <li>Pizza</li>
      <li>Malai Chaap</li>
    </ul>
  </div>

  {/* Non-Veg Column */}
  <div>
    <h4 className="text-orange-400 font-semibold mb-2">Non-Vegetarian</h4>
    <ul className="list-disc list-inside text-sm text-amber-100 space-y-1">
      <li>Chicken Tikka</li>
      <li>Chicken Malai Tikka</li>
      <li>Crispy Chilli Wings</li>
      <li>Tandoori Wings</li>
    </ul>
  </div>
</div>


          
          </section>

          {/* DHOL, MOCKTAILS & PHOTOGRAPHY */}
<div className="skull-divider"><SkullIcon className="w-6 h-6 inline-block" /></div>

<section className="mb-6 section-block">
  <h3 className="section-heading text-2xl md:text-3xl font-extrabold text-center text-orange-400 animate-glow">
    🎶 Beats, Sips & Memories
  </h3>
  <p className="text-center text-sm text-amber-100 mb-4">
    Groove to live Dhol, enjoy exotic mocktails, and capture the moments with photography!
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Dhol Column */}
    <div className="text-center">
      <h4 className="text-cyan-300 font-semibold mb-2">Live Dhol</h4>
      <ul className="list-disc list-inside text-sm text-amber-100 space-y-1">
      </ul>
    </div>

    {/* Mocktails Column */}
    <div className="text-center">
      <h4 className="text-orange-400 font-semibold mb-2">Exotic Mocktails</h4>
      <ul className="list-disc list-inside text-sm text-amber-100 space-y-1">
      </ul>
    </div>

    {/* Photography Column */}
    <div className="text-center">
      <h4 className="text-amber-300 font-semibold mb-2">Photography</h4>
      <ul className="list-disc list-inside text-sm text-amber-100 space-y-1">
      </ul>
    </div>
  </div>
</section>


          <div className="text-center mt-6">
            <button
              onClick={() => setShowVenue(false)}
              className="px-6 py-2 rounded-full bg-amber-300/95 text-black font-semibold hover:scale-105 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}



    </div>
  );
}

export default App;
