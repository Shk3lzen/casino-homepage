import Image from 'next/image';
import { SLIDER_DOTS_COUNT } from '@/constants/gameData';

const HeroSlider = () => {
  return (
    <div className="mb-4 relative w-full max-w-[1200px] mx-auto px-2 md:px-0">
      <div className="relative overflow-hidden w-full h-[200px] md:h-[300px] rounded-[5px]">
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
        {Array.from({ length: SLIDER_DOTS_COUNT }, (_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === 0 ? 'bg-blue-500' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider; 