import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Silva',
    position: 'Cliente',
    content: 'Serviço excelente! A vistoria foi rápida e o laudo muito detalhado. Me senti seguro ao finalizar a compra do meu carro após receber o parecer da Vistori Piracicaba.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Amanda Ferreira',
    position: 'Cliente',
    content: 'Encontraram um problema no motor que nem a concessionária havia notado. Eficiência total! Recomendo para quem precisa de um serviço sério e confiável.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Ricardo Almeida',
    position: 'Revendedor de Veículos',
    content: 'Trabalhamos com a Vistori Piracicaba há mais de 5 anos. Serviço rápido, consistente e com preço justo. Uma parceria de sucesso para nossa revenda.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
  },
  {
    id: 4,
    name: 'Juliana Martins',
    position: 'Cliente',
    content: 'O atendimento é excelente! Me explicaram todo o processo, os documentos necessários e a vistoria foi feita com muita atenção. Ótimo trabalho!',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section id="depoimentos" className="py-20 bg-gray-900 text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title text-white">Depoimentos</h2>
          <p className="section-subtitle text-gray-300">
            Veja o que nossos clientes dizem sobre os serviços da Vistori Piracicaba.
          </p>
        </div>
        
        <div className="mt-12 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-primary w-8' : 'bg-gray-700'
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="overflow-hidden rounded-lg bg-gray-800 p-8 shadow-xl relative">
              <div 
                className={`transition-opacity duration-300 ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-gray-700"
                  />
                  
                  <div>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          className={i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-current' : 'text-gray-600'} 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl italic font-medium text-gray-200">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                    
                    <div className="mt-4">
                      <p className="font-bold">{testimonials[currentIndex].name}</p>
                      <p className="text-gray-400 text-sm">{testimonials[currentIndex].position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;