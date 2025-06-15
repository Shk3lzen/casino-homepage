# 🎰 Casino Homepage - Next.js

A modern, responsive casino homepage built with Next.js, TypeScript, and Tailwind CSS. Features a complete gaming interface with mobile-first design and interactive elements.

## 🌟 Features

### 🎮 Gaming Interface
- **Primary Slider**: Hero banner with navigation dots
- **Secondary Banners**: Promotional banners with hover effects
- **Game Categories**: Interactive category navigation
- **Game Sections**: Featured Games, New Releases, Hot Games, Bonus Buy, Live Games
- **Provider Section**: Game provider showcase
- **Payment Methods**: Crypto on-ramp integration

### 📱 Mobile-First Design
- **Responsive Layout**: Optimized for all screen sizes
- **Mobile Navigation**: Fixed bottom navigation bar
- **Touch-Friendly**: Large buttons and touch targets
- **Mobile-Specific Features**: Login buttons under footer on mobile only

### 🎨 User Interface
- **Dark Theme**: Modern slate color scheme
- **Hover Effects**: Scale animations on interactive elements
- **Sidebar Menu**: Gaming category icons with hover states
- **User Authentication**: Login/logout functionality with user dropdown

### ⚡ Performance
- **Next.js Image Optimization**: Automatic image optimization and lazy loading
- **Responsive Images**: Different sizes for mobile and desktop
- **Fast Loading**: Optimized bundle size and performance

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/casino-homepage.git
   cd casino-homepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add your images**
   Place your casino images in the `public` folder:
   - `primary_slider.png` (1200x300px)
   - `1.png` to `6.png` (banner images)
   - `search.png` (1200x40px)
   - `provites1.png` (1200x40px)
   - `full_game_row.png` to `full_game_row15.png` (1200x245px)
   - `providers.png` (1200x105px)
   - `on_ramp.png` (1200x110px)
   - `on_ramp1.png` (1200x300px)
   - `footer.png` (1920x517px)

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
casino-homepage/
├── src/
│   └── app/
│       ├── page.tsx          # Main homepage component
│       ├── layout.tsx        # Root layout
│       └── globals.css       # Global styles
├── public/                   # Static assets (images)
├── package.json
├── tailwind.config.js        # Tailwind CSS configuration
├── next.config.js           # Next.js configuration
└── README.md
```

## 🎯 Key Components

### Homepage Features
- **Responsive Header**: Login/signup buttons, user dropdown, notifications
- **Gaming Sidebar**: Category navigation with hover effects
- **Content Sections**: All game categories with proper spacing
- **Mobile Navigation**: Fixed bottom navigation for mobile users
- **Footer**: Casino description and footer links

### Responsive Breakpoints
- **Mobile**: < 768px (md breakpoint)
- **Desktop**: ≥ 768px

## 🎨 Design System

### Colors
- **Background**: Slate-800 (`#1e293b`)
- **Cards**: Slate-900 (`#0f172a`)
- **Borders**: Slate-600/700
- **Primary**: Blue-600 (`#2563eb`)
- **Secondary**: Green-600 (`#16a34a`)
- **Accent**: Yellow-500 (`#eab308`)

### Typography
- **Font**: System font stack
- **Sizes**: Responsive text sizing (sm/base/lg/xl)

## 📱 Mobile Optimizations

- **Fixed Navigation**: Bottom navigation stays visible
- **Responsive Images**: Proper scaling on all devices
- **Touch Targets**: Minimum 44px touch targets
- **Spacing**: Optimized padding and margins for mobile
- **Performance**: Lazy loading and optimized images

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[React Hooks](https://reactjs.org/docs/hooks-intro.html)** - State management

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repo for auto-deployment
- **AWS Amplify**: Deploy with AWS integration
- **Docker**: Use the included Dockerfile for containerization

## 📈 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Lazy Loading**: Images load as needed
- **Code Splitting**: Automatic code splitting by Next.js
- **SEO Optimized**: Proper meta tags and structure

## 🎮 Gaming Features

### User States
- **Guest User**: Login/signup prompts, mobile bottom navigation
- **Logged In**: User dropdown, balance display, deposit button

### Interactive Elements
- **Hover Effects**: Scale animations on all clickable elements
- **Navigation**: Smooth transitions and proper focus states
- **Responsive**: All elements work on touch and mouse

## 🔧 Customization

### Adding New Game Sections
1. Add your game row image to `/public/`
2. Create a new section in `page.tsx`
3. Follow the existing pattern for responsive design

### Modifying Colors
Update the Tailwind classes in the components or modify `tailwind.config.js`

### Adding New Features
The codebase is modular and easy to extend with new gaming features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with setup, please open an issue on GitHub.

---

**Built with ❤️ for the gaming community**
