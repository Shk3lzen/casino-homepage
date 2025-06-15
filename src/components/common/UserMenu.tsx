import { forwardRef } from 'react';
import { User } from '@/types';

interface UserMenuProps {
  user: User;
  showMenu: boolean;
  onToggleMenu: () => void;
  onLogout: () => void;
}

const UserMenu = forwardRef<HTMLDivElement, UserMenuProps>(
  ({ user, showMenu, onToggleMenu, onLogout }, ref) => {
    return (
      <div className="relative" ref={ref}>
        <button 
          onClick={onToggleMenu}
          className="w-6 h-6 md:w-8 md:h-8 bg-gray-600 rounded-full hover:bg-gray-500 transition-colors flex items-center justify-center text-sm"
        >
          👤
        </button>
        
        {/* User Dropdown Menu */}
        {showMenu && (
          <div className="absolute right-0 top-8 md:top-10 bg-slate-800 border border-slate-600 rounded-lg shadow-lg py-2 w-40 md:w-48 z-50">
            <div className="px-3 md:px-4 py-2 text-white border-b border-slate-600">
              <div className="font-semibold text-sm md:text-base">Welcome!</div>
              <div className="text-xs md:text-sm text-gray-400">
                Balance: ${user.balance.toLocaleString()}
              </div>
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
                onClick={onLogout}
                className="w-full text-left px-3 md:px-4 py-2 text-red-400 hover:bg-slate-700 hover:text-red-300 text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
);

UserMenu.displayName = 'UserMenu';

export default UserMenu; 