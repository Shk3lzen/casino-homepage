"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Toggle between logged-in and guest view
  const [showUserMenu, setShowUserMenu] = useState(false); // Show/hide user dropdown menu
  const userMenuRef = useRef<HTMLDivElement>(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowUserMenu(false);
  };

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-800 relative">


      {/* Left Sidebar Menu */}
      <aside 
        className="w-[60px] bg-slate-900 border-r border-slate-600 flex flex-col items-center py-3 space-y-2 fixed left-0 top-0 bottom-0 overflow-y-auto hidden md:flex z-40"
      >
        <button className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-md flex items-center justify-center text-white text-sm">
          ☰
        </button>
        
        <div className="w-6 h-px bg-slate-600 my-1"></div>
        
        {/* Gaming Menu Icons */}
        <button className="w-8 h-8 bg-slate-700 hover:bg-yellow-500 rounded-md flex items-center justify-center text-white hover:text-black transition-colors text-sm">
          🎯
        </button>
        <button className="w-8 h-8 bg-slate-700 hover:bg-yellow-500 rounded-md flex items-center justify-center text-white hover:text-black transition-colors text-sm">
          ⭐
        </button>
        <button className="w-8 h-8 bg-slate-700 hover:bg-yellow-500 rounded-md flex items-center justify-center text-white hover:text-black transition-colors text-sm">
          🏆
        </button>
        <button className="w-8 h-8 bg-slate-700 hover:bg-yellow-500 rounded-md flex items-center justify-center text-white hover:text-black transition-colors text-sm">
          7️⃣
        </button>
        <button className="w-8 h-8 bg-slate-700 hover:bg-yellow-500 rounded-md flex items-center justify-center text-white hover:text-black transition-colors text-sm">
          ♠️
        </button>
        <button className="w-8 h-8 bg-slate-700 hover:bg-yellow-500 rounded-md flex items-center justify-center text-white hover:text-black transition-colors text-sm">
          ⚙️
        </button>
        <button className="w-8 h-8 bg-slate-700 hover:bg-yellow-500 rounded-md flex items-center justify-center text-white hover:text-black transition-colors text-sm">
          🎲
        </button>
        <button className="w-8 h-8 bg-slate-700 hover:bg-yellow-500 rounded-md flex items-center justify-center text-white hover:text-black transition-colors text-sm">
          🚀
        </button>
        <button className="w-8 h-8 bg-slate-700 hover:bg-yellow-500 rounded-md flex items-center justify-center text-white hover:text-black transition-colors text-sm">
          🌟
        </button>
        <button className="w-8 h-8 bg-slate-700 hover:bg-yellow-500 rounded-md flex items-center justify-center text-white hover:text-black transition-colors text-sm">
          💎
        </button>
        <button className="w-8 h-8 bg-slate-700 hover:bg-yellow-500 rounded-md flex items-center justify-center text-white hover:text-black transition-colors text-sm">
          🎰
        </button>
        <button className="w-8 h-8 bg-slate-700 hover:bg-yellow-500 rounded-md flex items-center justify-center text-white hover:text-black transition-colors text-sm">
          💰
        </button>
        <button className="w-8 h-8 bg-slate-700 hover:bg-yellow-500 rounded-md flex items-center justify-center text-white hover:text-black transition-colors text-sm">
          🌍
        </button>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-[60px]">
        {/* Header */}
        <header className="bg-slate-900 border-b border-slate-700 h-[60px]">
          <div className="flex items-center justify-between h-full px-4 md:px-6 w-full">
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-600 rounded"></div>
              <div className="text-white font-bold text-lg md:text-xl">★★★★★ Casino</div>
            </div>
            
            {isLoggedIn ? (
              // Logged-in user header
              <div className="flex items-center space-x-2 md:space-x-4 relative">
                <div className="text-yellow-400 font-semibold text-sm md:text-base">$ 10,556.12</div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 md:px-6 md:py-2 rounded font-semibold text-sm md:text-base">
                  DEPOSIT
                </button>
                <button className="text-gray-400 hover:text-white text-lg md:text-xl">🔔</button>
                <div className="relative" ref={userMenuRef}>
                  <button 
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="w-6 h-6 md:w-8 md:h-8 bg-gray-600 rounded-full hover:bg-gray-500 transition-colors flex items-center justify-center text-sm"
                  >
                    👤
                  </button>
                  
                  {/* User Dropdown Menu */}
                  {showUserMenu && (
                    <div className="absolute right-0 top-8 md:top-10 bg-slate-800 border border-slate-600 rounded-lg shadow-lg py-2 w-40 md:w-48 z-50">
                      <div className="px-3 md:px-4 py-2 text-white border-b border-slate-600">
                        <div className="font-semibold text-sm md:text-base">Welcome!</div>
                        <div className="text-xs md:text-sm text-gray-400">Balance: $10,556.12</div>
                      </div>
                      <button className="w-full text-left px-3 md:px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white text-sm">
                        My Account
                      </button>
                      <button className="w-full text-left px-3 md:px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white text-sm">
                        Transaction History
                      </button>
                      <button className="w-full text-left px-3 md:px-4 py-2 text-gray-300 hover:bg-slate-700 hover:text-white text-sm">
                        Settings
                      </button>
                      <div className="border-t border-slate-600 mt-2 pt-2">
                        <button 
                          onClick={handleLogout}
                          className="w-full text-left px-3 md:px-4 py-2 text-red-400 hover:bg-slate-700 hover:text-red-300 text-sm"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              // Guest user header - Mobile optimized
              <div className="flex items-center space-x-2 md:space-x-4">
                <button 
                  onClick={handleLogin}
                  className="bg-transparent border border-blue-500 text-blue-400 px-3 py-1 md:px-4 md:py-2 rounded font-semibold hover:bg-blue-500 hover:text-white transition-colors text-sm md:text-base"
                >
                  LOG IN
                </button>
                <button 
                  onClick={handleLogin}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 md:px-6 md:py-2 rounded font-semibold text-sm md:text-base"
                >
                  SIGN UP
                </button>
                <button className="text-gray-400 hover:text-white text-lg md:text-xl">🔔</button>
              </div>
            )}
          </div>
        </header>

        <div className="flex flex-1">
          {/* Main Game Content */}
          <main className="flex-1 p-3 md:p-6 pb-20 md:pb-6">
            {/* Primary Slider */}
            <div 
              className="mb-4 relative w-full max-w-[1200px] mx-auto px-2 md:px-0"
              style={{
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <div 
                className="relative overflow-hidden w-full h-[200px] md:h-[300px] rounded-[5px]"
              >
                <Image
                  src="/primary_slider.png"
                  alt="Casino Primary Slider - Daily Rewards and Welcome Bonus"
                  width={1200}
                  height={300}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '5px' }}
                  priority
                />
              </div>
              
              {/* Slider Navigation Dots */}
              <div className="flex justify-center mt-2 md:mt-3 space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            {/* Guest User CTA - Only shown to non-logged in users */}
            {!isLoggedIn && (
              <div className="mb-4 md:mb-6 mx-2 md:mx-0 max-w-[1200px] md:mx-auto">
                {/* Mobile Login/Signup Buttons */}
                <div className="flex flex-row gap-2 justify-center">
                  <button 
                    onClick={handleLogin}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-bold text-base flex-1"
                  >
                    LOG IN
                  </button>
                  <button 
                    onClick={handleLogin}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-bold text-base flex-1"
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
            )}

            {/* Secondary Banners */}
            <div 
              className="mb-4 md:mb-6 w-full max-w-[1200px] mx-auto px-2 md:px-0"
            >
              {/* All Banners in One Row */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-3">
                {/* First Large Banner */}
                <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform w-full md:w-[400px]"
                     style={{ 
                       height: '250px',
                       borderRadius: '5px'
                     }}>
                  <Image
                    src="/1.png"
                    alt="Welcome Bonus 75 Free Spins"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '5px' }}
                  />
                </div>
                
                {/* Second Large Banner */}
                <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform w-full md:w-[400px]"
                     style={{ 
                       height: '250px',
                       borderRadius: '5px'
                     }}>
                  <Image
                    src="/2.png"
                    alt="Cash Back Promotion"
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '5px' }}
                  />
                </div>
                
                {/* Right Side - 4 Small Banners in 2x2 Grid */}
                <div className="grid grid-cols-2 gap-3 w-full md:w-auto">
                  {/* Tournament $2,000,000 */}
                  <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform w-full md:w-[185px]"
                       style={{ 
                         height: '120px',
                         borderRadius: '5px'
                       }}>
                    <Image
                      src="/3.png"
                      alt="$2,000,000 Tournament Drops & Wins"
                      width={185}
                      height={120}
                      className="w-full h-full object-cover"
                      style={{ borderRadius: '5px' }}
                    />
                  </div>
                  
                  {/* Wager Race */}
                  <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform w-full md:w-[185px]"
                       style={{ 
                         height: '120px',
                         borderRadius: '5px'
                       }}>
                    <Image
                      src="/4.png"
                      alt="Wager Race - Wager Win Repeat"
                      width={185}
                      height={120}
                      className="w-full h-full object-cover"
                      style={{ borderRadius: '5px' }}
                    />
                  </div>
                  
                  {/* Octoplay */}
                  <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform w-full md:w-[185px]"
                       style={{ 
                         height: '120px',
                         borderRadius: '5px'
                       }}>
                    <Image
                      src="/5.png"
                      alt="Octoplay - Bold Games New Wins"
                      width={185}
                      height={120}
                      className="w-full h-full object-cover"
                      style={{ borderRadius: '5px' }}
                    />
                  </div>
                  
                  {/* Big Time Gaming */}
                  <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform w-full md:w-[185px]"
                       style={{ 
                         height: '120px',
                         borderRadius: '5px'
                       }}>
                    <Image
                      src="/6.png"
                      alt="Big Time Gaming - Play Big Win Bigger"
                      width={185}
                      height={120}
                      className="w-full h-full object-cover"
                      style={{ borderRadius: '5px' }}
                    />
                  </div>
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
            {/* Featured Games */}
            <section className="mb-6 md:mb-8 w-full max-w-[1200px] mx-auto px-2 md:px-0">
              <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                <Image
                  src="/full_game_row.png"
                  alt="Featured Games Row"
                  width={1200}
                  height={245}
                  className="w-full h-auto object-cover min-h-[120px] md:min-h-[245px]"
                  style={{ borderRadius: '5px' }}
                />
              </div>
            </section>

            {/* New Releases */}
            <section className="mb-6 md:mb-8 w-full max-w-[1200px] mx-auto px-2 md:px-0">
              <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                <Image
                  src="/full_game_row12.png"
                  alt="New Releases Games Row"
                  width={1200}
                  height={245}
                  className="w-full h-auto object-cover min-h-[120px] md:min-h-[245px]"
                  style={{ borderRadius: '5px' }}
                />
              </div>
            </section>

            {/* Hot Games */}
            <section className="mb-6 md:mb-8 w-full max-w-[1200px] mx-auto px-2 md:px-0">
              <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                <Image
                  src="/full_game_row13.png"
                  alt="Hot Games Row"
                  width={1200}
                  height={245}
                  className="w-full h-auto object-cover min-h-[120px] md:min-h-[245px]"
                  style={{ borderRadius: '5px' }}
                />
              </div>
            </section>

            {/* Bonus Buy */}
            <section className="mb-6 md:mb-8 w-full max-w-[1200px] mx-auto px-2 md:px-0">
              <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                <Image
                  src="/full_game_row14.png"
                  alt="Bonus Buy Games Row"
                  width={1200}
                  height={245}
                  className="w-full h-auto object-cover min-h-[120px] md:min-h-[245px]"
                  style={{ borderRadius: '5px' }}
                />
              </div>
            </section>

            {/* Live Games */}
            <section className="mb-6 md:mb-8 w-full max-w-[1200px] mx-auto px-2 md:px-0">
              <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                <Image
                  src="/full_game_row15.png"
                  alt="Live Games Row"
                  width={1200}
                  height={245}
                  className="w-full h-auto object-cover min-h-[120px] md:min-h-[245px]"
                  style={{ borderRadius: '5px' }}
                />
              </div>
            </section>

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
              <button className="flex flex-col items-center space-y-1 text-yellow-500" aria-label="Home">
                <span className="text-lg">🏠</span>
                <span className="text-xs">Home</span>
              </button>
              <button className="flex flex-col items-center space-y-1 text-gray-400" aria-label="Search">
                <span className="text-lg">🔍</span>
                <span className="text-xs">Search</span>
              </button>
              <button className="flex flex-col items-center space-y-1 text-gray-400" aria-label="Chat">
                <span className="text-lg">💬</span>
                <span className="text-xs">Chat</span>
              </button>
              <button className="flex flex-col items-center space-y-1 text-gray-400" aria-label="Support">
                <span className="text-lg">📞</span>
                <span className="text-xs">Support</span>
              </button>
              <button className="flex flex-col items-center space-y-1 text-gray-400" aria-label="Menu">
                <span className="text-lg">☰</span>
                <span className="text-xs">Menu</span>
              </button>
            </div>
          </nav>
        )}

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-700 py-6 md:py-8 overflow-x-hidden">
          <div className="w-full">
            {/* Casino Description */}
            <div className="mb-6 md:mb-8 w-full max-w-[1200px] mx-auto px-2 md:px-0">
              <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                   style={{ border: '1px solid #475569' }}>
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
                  style={{ 
                    borderRadius: '5px'
                  }}
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
