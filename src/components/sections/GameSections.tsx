import Image from 'next/image';
import { GAME_SECTIONS } from '@/constants/gameData';

const GameSections = () => {
  return (
    <>
      {GAME_SECTIONS.map((section) => (
        <section 
          key={section.id}
          className="mb-6 md:mb-8 w-full max-w-[1200px] mx-auto px-2 md:px-0"
        >
          <div className="relative overflow-hidden cursor-pointer hover:scale-105 transition-transform">
            <Image
              src={section.image}
              alt={section.alt}
              width={section.width}
              height={section.height}
              className="w-full h-auto object-cover min-h-[120px] md:min-h-[245px]"
              style={{ borderRadius: '5px' }}
            />
          </div>
        </section>
      ))}
    </>
  );
};

export default GameSections; 