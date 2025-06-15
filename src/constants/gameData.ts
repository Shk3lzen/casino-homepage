import { GameSection, Banner, GameCategory, SidebarIcon, NavigationItem } from '@/types';

export const GAME_SECTIONS: GameSection[] = [
  {
    id: 'featured',
    title: 'Featured Games',
    image: '/full_game_row.png',
    alt: 'Featured Games Row',
    width: 1200,
    height: 245,
  },
  {
    id: 'new-releases',
    title: 'New Releases',
    image: '/full_game_row12.png',
    alt: 'New Releases Games Row',
    width: 1200,
    height: 245,
  },
  {
    id: 'hot-games',
    title: 'Hot Games',
    image: '/full_game_row13.png',
    alt: 'Hot Games Row',
    width: 1200,
    height: 245,
  },
  {
    id: 'bonus-buy',
    title: 'Bonus Buy',
    image: '/full_game_row14.png',
    alt: 'Bonus Buy Games Row',
    width: 1200,
    height: 245,
  },
  {
    id: 'live-games',
    title: 'Live Games',
    image: '/full_game_row15.png',
    alt: 'Live Games Row',
    width: 1200,
    height: 245,
  },
];

export const SECONDARY_BANNERS: Banner[] = [
  {
    id: 'welcome-bonus',
    image: '/1.png',
    alt: 'Welcome Bonus 75 Free Spins',
    width: 400,
    height: 250,
  },
  {
    id: 'cashback',
    image: '/2.png',
    alt: 'Cash Back Promotion',
    width: 400,
    height: 250,
  },
];

export const SMALL_BANNERS: Banner[] = [
  {
    id: 'tournament',
    image: '/3.png',
    alt: '$2,000,000 Tournament Drops & Wins',
    width: 185,
    height: 120,
  },
  {
    id: 'wager-race',
    image: '/4.png',
    alt: 'Wager Race - Wager Win Repeat',
    width: 185,
    height: 120,
  },
  {
    id: 'octoplay',
    image: '/5.png',
    alt: 'Octoplay - Bold Games New Wins',
    width: 185,
    height: 120,
  },
  {
    id: 'big-time-gaming',
    image: '/6.png',
    alt: 'Big Time Gaming - Play Big Win Bigger',
    width: 185,
    height: 120,
  },
];

export const GAME_CATEGORIES: GameCategory[] = [
  { name: "All Games", icon: "🎮", active: true },
  { name: "Slots", icon: "🎰" },
  { name: "Blackjack", icon: "🃏" },
  { name: "Roulette", icon: "🎯" },
  { name: "Live", icon: "📹" },
  { name: "Baccarat", icon: "♠️" },
  { name: "Crash", icon: "💥" },
  { name: "Dice", icon: "🎲" },
  { name: "Collections", icon: "📚" },
  { name: "Providers", icon: "🏢" },
];

export const SIDEBAR_ICONS: SidebarIcon[] = [
  { icon: "🎯", label: "Target Games" },
  { icon: "⭐", label: "Featured" },
  { icon: "🏆", label: "Tournaments" },
  { icon: "7️⃣", label: "Lucky Seven" },
  { icon: "♠️", label: "Card Games" },
  { icon: "⚙️", label: "Settings" },
  { icon: "🎲", label: "Dice Games" },
  { icon: "🚀", label: "New Games" },
  { icon: "🌟", label: "Popular" },
  { icon: "💎", label: "VIP" },
  { icon: "🎰", label: "Slots" },
  { icon: "💰", label: "Jackpots" },
  { icon: "🌍", label: "Global" },
];

export const MOBILE_NAVIGATION: NavigationItem[] = [
  { icon: "🏠", label: "Home", active: true },
  { icon: "🔍", label: "Search" },
  { icon: "💬", label: "Chat" },
  { icon: "📞", label: "Support" },
  { icon: "☰", label: "Menu" },
];

export const SLIDER_DOTS_COUNT = 5;

export const USER_BALANCE = 10556.12; 