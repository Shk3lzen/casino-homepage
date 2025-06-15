export interface User {
  id: string;
  balance: number;
  username: string;
}

export interface GameSection {
  id: string;
  title: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

export interface Banner {
  id: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  href?: string;
}

export interface GameCategory {
  name: string;
  icon: string;
  active?: boolean;
}

export interface SidebarIcon {
  icon: string;
  label: string;
  active?: boolean;
}

export interface NavigationItem {
  icon: string;
  label: string;
  active?: boolean;
  href?: string;
} 