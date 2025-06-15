import { SIDEBAR_ICONS } from '@/constants/gameData';

const Sidebar = () => {
  return (
    <aside className="w-[60px] bg-slate-900 border-r border-slate-600 flex flex-col items-center py-3 space-y-2 fixed left-0 top-0 bottom-0 overflow-y-auto hidden md:flex z-40">
      <button className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-md flex items-center justify-center text-white text-sm transition-colors">
        ☰
      </button>
      
      <div className="w-6 h-px bg-slate-600 my-1"></div>
      
      {/* Gaming Menu Icons */}
      {SIDEBAR_ICONS.map((item, index) => (
        <button
          key={index}
          className="w-8 h-8 bg-slate-700 hover:bg-yellow-500 rounded-md flex items-center justify-center text-white hover:text-black transition-colors text-sm"
          title={item.label}
          aria-label={item.label}
        >
          {item.icon}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar; 