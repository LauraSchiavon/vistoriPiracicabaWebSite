import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    imageUrl: string;
  };
}

const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const whatsappLink = "https://wa.me/5519934111111?text=Olá! Gostaria de informações sobre " + service.title;

  return (
    <div className="card group">
      <div 
        className="h-48 relative overflow-hidden"
        style={{
          backgroundImage: `url(${service.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
        <div className="absolute top-4 left-4 bg-white rounded-full p-3">
          {service.icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{service.title}</h3>
        <p className="mt-3 text-gray-600">{service.description}</p>
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center font-medium text-primary hover:text-primary-dark"
        >
          Solicitar este serviço
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;