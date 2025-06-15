import { useState } from 'react';
import { User } from '@/types';
import { USER_BALANCE } from '@/constants/gameData';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = () => {
    const mockUser: User = {
      id: '1',
      balance: USER_BALANCE,
      username: 'Player',
    };
    setUser(mockUser);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return {
    isLoggedIn,
    user,
    handleLogin,
    handleLogout,
  };
}; 