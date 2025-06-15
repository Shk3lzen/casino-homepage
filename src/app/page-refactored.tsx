"use client"
import { useAuth } from '@/hooks/useAuth';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import HeroSlider from '@/components/sections/HeroSlider';
import GameSections from '@/components/sections/GameSections';
import Image from 'next/image';

export default function Home() {
  const { isLoggedIn, user, handleLogin, handleLogout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-800 relative">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-[60px]">
        <Header 
          isLoggedIn={isLoggedIn}
          user={user}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />

        <div className="flex flex-1">
          {/* Main Game Content */}
          <main className="flex-1 p-3 md:p-6 pb-20 md:pb-6">
            <HeroSlider />

            {/* Guest User CTA - Only shown to non-logged in users */}
            {!isLoggedIn && (
              <div className="mb-4 md:mb-6 mx-2 md:mx-0 max-w-[1200px] md:mx-auto">
                <div className="flex flex-row gap-2 justify-center">
                  <button 
                    onClick={handleLogin}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-bold text-base flex-1 transition-colors"
                  >
                    LOG IN
                  </button>
                  <button 
                    onClick={handleLogin}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-bold text-base flex-1 transition-colors"
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
            )}

            {/* Secondary Banners */}
            <div className="mb-4 md:mb-6 w-full max-w-[1200px] mx-auto px-2 md:px-0">
              <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                {/* Large Banners */}
                <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform w-full md:w-[400px] h-[250px]">
                  <Image
                    src="/1.png"
                    alt="Welcome Bonus 75 Free Spins"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '5px' }}
                  />
                </div>
                
                <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform w-full md:w-[400px] h-[250px]">
                  <Image
                    src="/2.png"
                    alt="Cash Back Promotion"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '5px' }}
                  />
                </div>
                
                {/* Small Banners Grid */}
                <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
                  {[3, 4, 5, 6].map((num) => (
                    <div 
                      key={num}
                      className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform w-full md:w-[185px] h-[120px]"
                    >
                      <Image
                        src={`/${num}.png`}
                        alt={`Promotion Banner ${num}`}
                        width={185}
                        height={120}
                        className="w-full h-full object-cover"
                        style={{ borderRadius: '5px' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="mb-4 md:mb-6 w-full max-w-[1200px] mx-auto px-2 md:px-0">
              <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                <Image
                  src="/search.png"
                  alt="Search Games"
                  width={1200}
                  height={40}
                  className="w-full h-auto object-cover min-h-[32px] md:min-h-[40px]"
                  style={{ borderRadius: '5px' }}
                />
              </div>
            </div>

            {/* Game Categories */}
            <div className="mb-4 md:mb-6 w-full max-w-[1200px] mx-auto px-2 md:px-0">
              <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                <Image
                  src="/provites1.png"
                  alt="Game Categories"
                  width={1200}
                  height={40}
                  className="w-full h-auto object-cover min-h-[32px] md:min-h-[40px]"
                  style={{ borderRadius: '5px' }}
                />
              </div>
            </div>

            {/* Game Sections */}
            <GameSections />

            {/* All Games */}
            <section className="mb-6 md:mb-8 w-full max-w-[1200px] mx-auto px-2 md:px-0">
              <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                <Image
                  src="/providers.png"
                  alt="All Games"
                  width={1200}
                  height={105}
                  className="w-full h-auto object-cover min-h-[60px] md:min-h-[105px]"
                  style={{ borderRadius: '5px' }}
                />
              </div>
            </section>

            {/* Payment Methods */}
            <section className="mb-6 md:mb-8 w-full max-w-[1200px] mx-auto px-2 md:px-0">
              <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                <Image
                  src="/on_ramp.png"
                  alt="Crypto On-Ramp Payment Methods"
                  width={1200}
                  height={110}
                  className="w-full h-auto object-cover min-h-[65px] md:min-h-[110px]"
                  style={{ borderRadius: '5px' }}
                />
              </div>
            </section>
          </main>
        </div>

        {/* Mobile Bottom Navigation - Only for guest users */}
        {!isLoggedIn && (
          <nav className="md:hidden bg-slate-900 border-t border-slate-700 px-4 py-2 fixed bottom-0 left-0 right-0 z-50">
            <div className="flex justify-around items-center">
              {['🏠', '🔍', '💬', '📞', '☰'].map((icon, index) => {
                const labels = ['Home', 'Search', 'Chat', 'Support', 'Menu'];
                return (
                  <button 
                    key={index}
                    className={`flex flex-col items-center space-y-1 ${
                      index === 0 ? 'text-yellow-500' : 'text-gray-400'
                    }`}
                    aria-label={labels[index]}
                  >
                    <span className="text-lg">{icon}</span>
                    <span className="text-xs">{labels[index]}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        )}

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-700 py-6 md:py-8 overflow-x-hidden">
          <div className="w-full">
            {/* Casino Description */}
            <div className="mb-6 md:mb-8 w-full max-w-[1200px] mx-auto px-2 md:px-0">
              <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform border border-slate-600" style={{ borderRadius: '5px' }}>
                <Image
                  src="/on_ramp1.png"
                  alt="Casino Description"
                  width={1200}
                  height={300}
                  className="w-full h-auto object-cover min-h-[150px] md:min-h-[300px]"
                  style={{ borderRadius: '5px' }}
                />
              </div>
            </div>

            {/* Footer Links */}
            <div className="mb-6 md:mb-8 flex justify-center px-2 md:px-0">
              <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform w-full max-w-[1920px]">
                <Image
                  src="/footer.png"
                  alt="Footer Links and Information"
                  width={1920}
                  height={517}
                  className="w-full h-auto object-contain min-h-[200px] md:min-h-[517px]"
                  style={{ borderRadius: '5px' }}
                />
              </div>
            </div>

            {/* Login/Signup Buttons - Under Footer - Mobile Only */}
            {!isLoggedIn && (
              <div className="mb-6 w-full max-w-[1200px] mx-auto px-2 md:hidden">
                <div className="flex flex-row gap-3 justify-center">
                  <button 
                    onClick={handleLogin}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-base flex-1 max-w-[200px] transition-colors"
                  >
                    LOG IN
                  </button>
                  <button 
                    onClick={handleLogin}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-base flex-1 max-w-[200px] transition-colors"
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
} 