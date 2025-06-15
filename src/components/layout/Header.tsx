import { useState } from 'react';
import { User } from '@/types';
import { useClickOutside } from '@/hooks/useClickOutside';
import UserMenu from '@/components/common/UserMenu';

interface HeaderProps {
  isLoggedIn: boolean;
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

const Header = ({ isLoggedIn, user, onLogin, onLogout }: HeaderProps) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const userMenuRef = useClickOutside<HTMLDivElement>(() => setShowUserMenu(false));

  const handleLogout = () => {
    onLogout();
    setShowUserMenu(false);
  };

  return (
    <header className="bg-slate-900 border-b border-slate-700 h-[60px]">
      <div className="flex items-center justify-between h-full px-4 md:px-6 w-full">
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-600 rounded"></div>
          <div className="text-white font-bold text-lg md:text-xl">★★★★★ Casino</div>
        </div>
        
        {isLoggedIn && user ? (
          // Logged-in user header
          <div className="flex items-center space-x-2 md:space-x-4 relative">
            <div className="text-yellow-400 font-semibold text-sm md:text-base">
              $ {user.balance.toLocaleString()}
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 md:px-6 md:py-2 rounded font-semibold text-sm md:text-base transition-colors">
              DEPOSIT
            </button>
            <button className="text-gray-400 hover:text-white text-lg md:text-xl">🔔</button>
            
            <UserMenu
              ref={userMenuRef}
              user={user}
              showMenu={showUserMenu}
              onToggleMenu={() => setShowUserMenu(!showUserMenu)}
              onLogout={handleLogout}
            />
          </div>
        ) : (
          // Guest user header
          <div className="flex items-center space-x-2 md:space-x-4">
            <button 
              onClick={onLogin}
              className="bg-transparent border border-blue-500 text-blue-400 px-3 py-1 md:px-4 md:py-2 rounded font-semibold hover:bg-blue-500 hover:text-white transition-colors text-sm md:text-base"
            >
              LOG IN
            </button>
            <button 
              onClick={onLogin}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 md:px-6 md:py-2 rounded font-semibold text-sm md:text-base transition-colors"
            >
              SIGN UP
            </button>
            <button className="text-gray-400 hover:text-white text-lg md:text-xl">🔔</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 