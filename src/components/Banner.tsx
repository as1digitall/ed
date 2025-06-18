import React from 'react';
import { usePixelTracking } from '../hooks/usePixelTracking';

const Banner: React.FC = () => {
  usePixelTracking();

  return (
    <div className="w-full px-4 mb-1.5">
      <img 
        src="https://i.ibb.co/7xdHwcS2/Chat-GPT-Image-31-de-mai-de-2025-20-07-49.png" 
        alt="Banner do programa Avança Escola"
        className="w-full rounded-lg mt-2"
      />
    </div>
  );
};

export default Banner;