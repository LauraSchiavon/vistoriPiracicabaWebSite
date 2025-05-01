import React from 'react';
import { Car } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="#inicio" className="flex items-center">
      <Car size={28} className="text-primary mr-2" />
      <div>
        <span className="font-bold text-xl leading-none">Vistori</span>
        <span className="block text-xs text-primary font-medium leading-none">Piracicaba</span>
      </div>
    </a>
  );
};

export default Logo;