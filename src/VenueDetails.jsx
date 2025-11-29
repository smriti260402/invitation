import { MapPin, ArrowLeft, Image, Film, Utensils } from "lucide-react";

export default function VenueDetails() {
  return (
    <div className="min-h-screen relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/ChatGPT Image Nov 28, 2025, 10_46_20 PM.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-5xl mx-auto py-10 px-6">

        {/* Back Button */}
        <a href="/" className="text-cyan-300 flex items-center mb-6">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Home
        </a>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          Venue Details
        </h1>
        <p className="text-cyan-200 text-center mb-10">
          Everything you need to know about The Dome - Lounge, Dine & Restaurant
        </p>

        {/* Google Map Embed */}
        <div className="glass-card p-5 rounded-2xl border border-cyan-400/30 mb-12">
          <h2 className="text-2xl text-cyan-300 font-semibold mb-4 flex items-center">
            <MapPin className="w-6 h-6 mr-2 text-orange-400" /> Location Map
          </h2>

          <iframe
            className="w-full h-80 rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.193!2d77.121!3d28.644!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>

        {/* Photos Carousel */}
        <div className="glass-card p-5 rounded-2xl border border-cyan-400/30 mb-12">
          <h2 className="text-2xl text-cyan-300 font-semibold mb-4 flex items-center">
            <Image className="w-6 h-6 mr-2 text-orange-400" /> Venue Photos
          </h2>

          <div className="w-full overflow-x-auto whitespace-nowrap space-x-4 flex py-3">
            <img src="/venue1.jpg" className="h-48 rounded-xl inline-block" />
            <img src="/venue2.jpg" className="h-48 rounded-xl inline-block" />
            <img src="/venue3.jpg" className="h-48 rounded-xl inline-block" />
            <img src="/venue4.jpg" className="h-48 rounded-xl inline-block" />
          </div>
        </div>

        {/* Video Section */}
        <div className="glass-card p-5 rounded-2xl border border-orange-400/30 mb-12">
          <h2 className="text-2xl text-cyan-300 font-semibold mb-4 flex items-center">
            <Film className="w-6 h-6 mr-2 text-orange-400" /> Venue Video
          </h2>

          <video
            className="w-full rounded-xl"
            controls
            src="/venue-video.mp4"
          ></video>
        </div>

        {/* Menu Section */}
        <div className="glass-card p-5 rounded-2xl border border-cyan-400/30 mb-12">
          <h2 className="text-2xl text-cyan-300 font-semibold mb-4 flex items-center">
            <Utensils className="w-6 h-6 mr-2 text-orange-400" /> Menu & Dishes
          </h2>

          <p className="text-cyan-100 mb-4">
            Here is the menu for our continuation party:
          </p>

          <img
            src="/menu.jpg"
            className="rounded-xl border border-cyan-400/20 mb-6"
          />

          <h3 className="text-xl text-white font-semibold mb-3">Signature Dish</h3>
          <img
            src="/dish.jpg"
            className="rounded-xl border border-orange-400/20"
          />
        </div>

      </div>
    </div>
  );
}
